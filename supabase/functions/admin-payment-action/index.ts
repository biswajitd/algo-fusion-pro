import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);
const ADMIN_PASSWORD = Deno.env.get("ADMIN_PASSWORD") || "";
const FROM_ADDRESS = "Softgogy <payments@softgogy.in>";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;").replace(/'/g, "&#039;");

const ActionSchema = z.object({
  password: z.string().min(1),
  action: z.enum(["list", "approve", "reject"]),
  id: z.string().uuid().optional(),
  verifiedAgainstBank: z.boolean().optional(),
});

function approvalEmail(row: any) {
  const N = esc(row.customer_name), Pl = esc(row.plan_name), Am = Number(row.amount).toFixed(2);
  const U = esc(row.utr_number), receiptNo = `SGY-${new Date().getFullYear()}-${String(row.id).slice(0, 8).toUpperCase()}`;
  const approvedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#1a1a1a">
      <div style="text-align:center;padding:20px 0;border-bottom:3px solid #38a169">
        <h1 style="color:#1a365d;margin:0">Softgogy</h1>
        <p style="color:#38a169;margin:4px 0 0;font-weight:bold">✅ Official Payment Receipt</p>
      </div>
      <h2>Welcome aboard, ${N}!</h2>
      <p>Your UPI payment has been manually verified against bank records. Your subscription is now active.</p>
      <div style="background:#f7fafc;padding:16px;border-radius:8px;margin:16px 0">
        <table style="width:100%;font-size:14px">
          <tr><td style="color:#718096;padding:4px 0">Receipt No.</td><td style="text-align:right"><strong>${receiptNo}</strong></td></tr>
          <tr><td style="color:#718096;padding:4px 0">Plan</td><td style="text-align:right"><strong>${Pl}</strong></td></tr>
          <tr><td style="color:#718096;padding:4px 0">Amount Verified</td><td style="text-align:right"><strong>₹${Am}</strong></td></tr>
          <tr><td style="color:#718096;padding:4px 0">UTR / Transaction ID</td><td style="text-align:right">${U}</td></tr>
          <tr><td style="color:#718096;padding:4px 0">Verified On</td><td style="text-align:right">${approvedAt} IST</td></tr>
        </table>
      </div>
      <div style="background:#f0fff4;border-left:4px solid #38a169;padding:14px;margin:16px 0;border-radius:6px">
        <strong>Next steps:</strong>
        <ol style="margin:8px 0 0 18px;padding:0">
          <li>Our team will contact you on the registered phone number to share login credentials and setup help.</li>
          <li>You can also reach us anytime for onboarding assistance.</li>
        </ol>
      </div>
      <p>Need help? Email <a href="mailto:biswajit@softgogy.com">biswajit@softgogy.com</a> or call <strong>+91 7003460866</strong>.</p>
      <p style="color:#a0aec0;font-size:12px;text-align:center;margin-top:30px">© 2025 Softgogy. All rights reserved.</p>
    </div>`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    if (!ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ success: false, error: "Admin not configured" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }
    const body = await req.json();
    const parsed = ActionSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(JSON.stringify({ success: false, error: "Invalid input" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }
    const { password, action, id, verifiedAgainstBank } = parsed.data;
    if (password !== ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ success: false, error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }

    if (action === "list") {
      const { data, error } = await supabaseAdmin
        .from("payment_submissions")
        .select("id, customer_name, customer_email, customer_phone, plan_name, amount, utr_number, status, created_at, reviewed_at, approval_email_sent")
        .order("created_at", { ascending: false })
        .limit(200);
      if (error) throw error;
      return new Response(JSON.stringify({ success: true, submissions: data }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }

    if (!id) {
      return new Response(JSON.stringify({ success: false, error: "id required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }

    const { data: row, error: rErr } = await supabaseAdmin
      .from("payment_submissions").select("*").eq("id", id).single();
    if (rErr || !row) {
      return new Response(JSON.stringify({ success: false, error: "Not found" }),
        { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }

    if (action === "reject") {
      await supabaseAdmin.from("payment_submissions").update({
        status: "rejected", reviewed_at: new Date().toISOString(), reviewed_by: "admin",
      }).eq("id", id);
      return new Response(JSON.stringify({ success: true }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }

    // approve
    if (row.status === "approved") {
      return new Response(JSON.stringify({ success: true, alreadyApproved: true }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }
    if (!verifiedAgainstBank) {
      return new Response(JSON.stringify({ success: false, error: "Bank verification confirmation required before approval" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }
    const sendRes = await resend.emails.send({
      from: FROM_ADDRESS, to: [row.customer_email],
      subject: "✅ Official Payment Receipt – Softgogy Subscription Activated",
      html: approvalEmail(row),
    });
    await supabaseAdmin.from("payment_submissions").update({
      status: "approved", reviewed_at: new Date().toISOString(),
      reviewed_by: "admin", approval_email_sent: !sendRes.error,
    }).eq("id", id);

    return new Response(JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } });
  } catch (e: any) {
    console.error("admin-payment-action error:", e);
    return new Response(JSON.stringify({ success: false, error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } });
  }
});
