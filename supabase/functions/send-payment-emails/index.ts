import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const OWNER_EMAIL = "biswajit@softgogy.com";
const FROM_ADDRESS = "Softgogy <payments@softgogy.in>";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const Schema = z.object({
  customerName: z.string().trim().min(2).max(100).regex(/^[a-zA-Z\s.'-]+$/),
  customerEmail: z.string().trim().email().max(255),
  customerPhone: z.string().trim().regex(/^[0-9]{10,15}$/),
  planName: z.string().min(1).max(100),
  amount: z.number().positive().max(10000000),
  utrNumber: z.string().trim().regex(/^[A-Za-z0-9]{6,30}$/),
  siteOrigin: z.string().url().optional(),
});

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;").replace(/'/g, "&#039;");

// Per-email rate limit (cold-start scoped)
const rl = new Map<string, { count: number; resetAt: number }>();
const check = (e: string) => {
  const now = Date.now(), r = rl.get(e);
  if (!r || now > r.resetAt) { rl.set(e, { count: 1, resetAt: now + 3600_000 }); return true; }
  if (r.count >= 5) return false;
  r.count++; return true;
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const raw = await req.json();
    const parsed = Schema.safeParse(raw);
    if (!parsed.success) {
      return new Response(JSON.stringify({ success: false, error: "Invalid input" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }
    const p = parsed.data;
    if (!check(p.customerEmail)) {
      return new Response(JSON.stringify({ success: false, error: "Too many requests" }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } });
    }

    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const ua = req.headers.get("user-agent") || "unknown";

    const { data: row, error: insErr } = await supabaseAdmin
      .from("payment_submissions")
      .insert({
        customer_name: p.customerName, customer_email: p.customerEmail,
        customer_phone: p.customerPhone, plan_name: p.planName,
        amount: p.amount, utr_number: p.utrNumber,
        ip_address: ip, user_agent: ua,
      })
      .select("id, approval_token, created_at")
      .single();
    if (insErr || !row) throw new Error(insErr?.message || "DB insert failed");

    const origin = p.siteOrigin?.replace(/\/$/, "") || "https://algo-fusion-pro.lovable.app";
    const approveUrl = `${origin}/admin?token=${row.approval_token}&action=approve&id=${row.id}`;
    const adminUrl = `${origin}/admin`;
    const when = new Date(row.created_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const N = esc(p.customerName), E = esc(p.customerEmail), Ph = esc(p.customerPhone);
    const Pl = esc(p.planName), U = esc(p.utrNumber), Am = p.amount.toFixed(2);

    const customerHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#1a1a1a">
        <div style="text-align:center;padding:20px 0;border-bottom:3px solid #3182ce">
          <h1 style="color:#1a365d;margin:0">Softgogy</h1>
          <p style="color:#718096;margin:4px 0 0">Payment Received — Verification in Progress</p>
        </div>
        <h2>Hi ${N},</h2>
        <p>Thank you for your payment. We have received your submission and our team is verifying it now. Your access will be activated within <strong>2–4 hours</strong> after verification.</p>
        <div style="background:#f7fafc;padding:16px;border-radius:8px;margin:16px 0">
          <table style="width:100%;font-size:14px">
            <tr><td style="color:#718096;padding:4px 0">Plan</td><td style="text-align:right"><strong>${Pl}</strong></td></tr>
            <tr><td style="color:#718096;padding:4px 0">Amount</td><td style="text-align:right"><strong>₹${Am}</strong></td></tr>
            <tr><td style="color:#718096;padding:4px 0">UTR / Transaction ID</td><td style="text-align:right">${U}</td></tr>
            <tr><td style="color:#718096;padding:4px 0">Submitted</td><td style="text-align:right">${when} IST</td></tr>
          </table>
        </div>
        <p>If you have any questions, reach out to <a href="mailto:${OWNER_EMAIL}">${OWNER_EMAIL}</a> or call <strong>+91 7003460866</strong>.</p>
        <p style="color:#a0aec0;font-size:12px;text-align:center;margin-top:30px">© 2025 Softgogy. All rights reserved.</p>
      </div>`;

    const ownerHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">
        <h1 style="color:#1a365d">🔔 New Payment Submission</h1>
        <p><strong>${N}</strong> just submitted a payment for <strong>${Pl}</strong>.</p>
        <div style="background:#f7fafc;padding:16px;border-radius:8px;margin:16px 0">
          <table style="width:100%;font-size:14px">
            <tr><td style="color:#718096;padding:4px 0">Name</td><td><strong>${N}</strong></td></tr>
            <tr><td style="color:#718096;padding:4px 0">Email</td><td>${E}</td></tr>
            <tr><td style="color:#718096;padding:4px 0">Phone</td><td>${Ph}</td></tr>
            <tr><td style="color:#718096;padding:4px 0">Plan</td><td>${Pl}</td></tr>
            <tr><td style="color:#718096;padding:4px 0">Amount</td><td><strong style="color:#38a169">₹${Am}</strong></td></tr>
            <tr><td style="color:#718096;padding:4px 0">UTR</td><td><strong style="color:#d69e2e">${U}</strong></td></tr>
            <tr><td style="color:#718096;padding:4px 0">Submitted</td><td>${when} IST</td></tr>
          </table>
        </div>
        <div style="text-align:center;margin:24px 0">
          <a href="${approveUrl}" style="display:inline-block;background:#38a169;color:#fff;padding:12px 28px;border-radius:6px;text-decoration:none;font-weight:bold">✅ Approve Payment</a>
        </div>
        <p style="text-align:center;font-size:13px;color:#718096">Or open the <a href="${adminUrl}">admin dashboard</a> to review all pending submissions.</p>
      </div>`;

    const [cust, own] = await Promise.all([
      resend.emails.send({ from: FROM_ADDRESS, to: [p.customerEmail],
        subject: "Payment Received – Verification in Progress | Softgogy", html: customerHtml }),
      resend.emails.send({ from: FROM_ADDRESS, to: [OWNER_EMAIL],
        subject: `🔔 New Payment Submission – ${p.customerName} – ₹${Am}`, html: ownerHtml }),
    ]);

    await supabaseAdmin.from("payment_submissions").update({
      customer_ack_sent: !cust.error, owner_notification_sent: !own.error,
    }).eq("id", row.id);

    return new Response(JSON.stringify({ success: true, id: row.id }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } });
  } catch (e: any) {
    console.error("send-payment-emails error:", e);
    return new Response(JSON.stringify({ success: false, error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } });
  }
});
