import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Supabase client for logging (uses service role for RLS bypass)
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
// Secret token for API authentication (set this in Supabase secrets)
const API_SECRET_TOKEN = Deno.env.get("PAYMENT_EMAIL_SECRET") || "softgogy-payment-2025-secure";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-api-token",
};

// Input validation schema using Zod
const PaymentEmailSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters").max(100, "Name too long").regex(/^[a-zA-Z\s.'-]+$/, "Name contains invalid characters"),
  customerEmail: z.string().email("Invalid email address").max(255, "Email too long"),
  customerPhone: z.string().regex(/^[0-9]{10,15}$/, "Phone must be 10-15 digits"),
  customerAddress: z.string().min(10, "Address too short").max(500, "Address too long"),
  planName: z.string().min(1, "Plan name required").max(100, "Plan name too long"),
  amount: z.number().positive("Amount must be positive").max(10000000, "Amount too large"),
  utrNumber: z.string().regex(/^[A-Za-z0-9]{6,30}$/, "UTR must be 6-30 alphanumeric characters"),
  invoiceNumber: z.string().regex(/^INV-[0-9]+$/, "Invalid invoice format"),
  pdfBase64: z.string().min(100, "PDF data too short").max(10000000, "PDF too large"),
  apiToken: z.string().min(1, "API token required"),
});

// HTML escape function to prevent XSS
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 requests per hour per email
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds

function checkRateLimit(email: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(email);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(email, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  record.count++;
  return true;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("send-payment-email function invoked");

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Extract client info for audit logging
  const clientIp = req.headers.get("x-forwarded-for") || 
                   req.headers.get("x-real-ip") || 
                   req.headers.get("cf-connecting-ip") || 
                   "unknown";
  const userAgent = req.headers.get("user-agent") || "unknown";

  try {
    // Parse and validate input
    const rawPayload = await req.json();
    
    // Validate using Zod schema
    const validationResult = PaymentEmailSchema.safeParse(rawPayload);
    
    if (!validationResult.success) {
      console.error("Validation failed:", validationResult.error.errors);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Invalid input data",
          details: validationResult.error.errors.map(e => `${e.path.join('.')}: ${e.message}`)
        }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const payload = validationResult.data;

    // Verify API token
    if (payload.apiToken !== API_SECRET_TOKEN) {
      console.error("Invalid API token provided");
      return new Response(
        JSON.stringify({ success: false, error: "Unauthorized request" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Check rate limit
    if (!checkRateLimit(payload.customerEmail)) {
      console.error("Rate limit exceeded for:", payload.customerEmail);
      return new Response(
        JSON.stringify({ success: false, error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Validated payload for:", payload.customerName, payload.customerEmail);

    // Escape all user inputs for HTML
    const safeName = escapeHtml(payload.customerName);
    const safeEmail = escapeHtml(payload.customerEmail);
    const safePhone = escapeHtml(payload.customerPhone);
    const safeAddress = escapeHtml(payload.customerAddress);
    const safePlan = escapeHtml(payload.planName);
    const safeUtr = escapeHtml(payload.utrNumber);
    const safeInvoice = escapeHtml(payload.invoiceNumber);
    const safeAmount = payload.amount.toFixed(2);

    const currentDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Email to Admin (biswajit@softgogy.com)
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #1a365d; border-bottom: 2px solid #3182ce; padding-bottom: 10px;">🎉 New Payment Received!</h1>
        
        <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #2d3748; margin-top: 0;">Customer Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #718096;">Name:</td><td style="padding: 8px 0; font-weight: bold;">${safeName}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Email:</td><td style="padding: 8px 0;">${safeEmail}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Phone:</td><td style="padding: 8px 0;">${safePhone}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Address:</td><td style="padding: 8px 0;">${safeAddress}</td></tr>
          </table>
        </div>

        <div style="background: #e6fffa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #234e52; margin-top: 0;">Payment Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #718096;">Invoice:</td><td style="padding: 8px 0; font-weight: bold;">${safeInvoice}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Plan:</td><td style="padding: 8px 0; font-weight: bold;">${safePlan}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Amount:</td><td style="padding: 8px 0; font-weight: bold; color: #38a169;">₹${safeAmount}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">UTR Number:</td><td style="padding: 8px 0; font-weight: bold; color: #d69e2e;">${safeUtr}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Date:</td><td style="padding: 8px 0;">${currentDate}</td></tr>
          </table>
        </div>

        <p style="color: #718096; font-size: 14px;">✅ Please verify the payment using the UTR number. PDF receipt is attached.</p>
      </div>
    `;

    // Email to Customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #1a365d;">Softgogy</h1>
          <p style="color: #718096;">Your AI-Powered Trading Partner</p>
        </div>

        <h2 style="color: #2d3748;">Thank You, ${safeName}! 🎉</h2>
        
        <p style="color: #4a5568; line-height: 1.6;">
          We have received your payment for the <strong>${safePlan}</strong> plan. 
          Your subscription is being processed and our team will contact you within 24 hours.
        </p>

        <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2d3748; margin-top: 0;">Payment Summary</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #718096;">Invoice:</td><td style="padding: 8px 0; font-weight: bold;">${safeInvoice}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Plan:</td><td style="padding: 8px 0;">${safePlan}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Amount Paid:</td><td style="padding: 8px 0; font-weight: bold; color: #38a169;">₹${safeAmount}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">UTR Number:</td><td style="padding: 8px 0;">${safeUtr}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Date:</td><td style="padding: 8px 0;">${currentDate}</td></tr>
          </table>
        </div>

        <p style="color: #4a5568; line-height: 1.6;">
          📎 <strong>Your PDF receipt is attached to this email.</strong> Please keep it for your records.
        </p>

        <div style="background: #ebf8ff; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <p style="margin: 0; color: #2b6cb0;">Need help? Contact us:</p>
          <p style="margin: 5px 0; font-weight: bold;">📧 biswajit@softgogy.com | 📞 9830046647</p>
        </div>

        <p style="color: #a0aec0; font-size: 12px; text-align: center; margin-top: 30px;">
          © 2025 Softgogy. All rights reserved.<br>
          397 Motilal Colony, Gr. Floor, Kolkata 700081, India
        </p>
      </div>
    `;

    // Clean base64 (in case frontend sends a data URI)
    const pdfBase64Clean = payload.pdfBase64.replace(
      /^data:application\/pdf;base64,/, 
      ""
    );

    if (!pdfBase64Clean) {
      throw new Error("Missing pdfBase64 for PDF attachment");
    }

    console.log("PDF base64 length:", pdfBase64Clean.length);

    const fromAddress = "Softgogy <payments@softgogy.in>";

    console.log("Sending email to admin: biswajit@softgogy.com");
    // Send email to admin
    const adminResult = await resend.emails.send({
      from: fromAddress,
      to: ["biswajit@softgogy.com"],
      subject: `🎉 New Payment: ${safePlan} - ₹${safeAmount} from ${safeName}`,
      html: adminEmailHtml,
      attachments: [
        {
          filename: `Softgogy-Receipt-${safeInvoice}.pdf`,
          content: pdfBase64Clean,
          contentType: "application/pdf",
        },
      ],
    });
    console.log("Admin email result:", adminResult);

    console.log("Sending email to customer:", payload.customerEmail);
    // Send email to customer (use original validated email, not escaped)
    const customerResult = await resend.emails.send({
      from: fromAddress,
      to: [payload.customerEmail],
      subject: `✅ Payment Confirmation - ${safePlan} Subscription | Softgogy`,
      html: customerEmailHtml,
      attachments: [
        {
          filename: `Softgogy-Receipt-${safeInvoice}.pdf`,
          content: pdfBase64Clean,
          contentType: "application/pdf",
        },
      ],
    });
    console.log("Customer email result:", customerResult);

    // Log successful submission to audit table
    const { error: auditError } = await supabaseAdmin
      .from("payment_audit_log")
      .insert({
        customer_name: payload.customerName,
        customer_email: payload.customerEmail,
        customer_phone: payload.customerPhone,
        customer_address: payload.customerAddress,
        plan_name: payload.planName,
        amount: payload.amount,
        utr_number: payload.utrNumber,
        invoice_number: payload.invoiceNumber,
        ip_address: clientIp,
        user_agent: userAgent,
        status: "success",
        admin_email_sent: !adminResult.error,
        customer_email_sent: !customerResult.error,
      });

    if (auditError) {
      console.error("Failed to log to audit table:", auditError);
    } else {
      console.log("Payment logged to audit table");
    }

    return new Response(
      JSON.stringify({
        success: true,
        adminEmail: adminResult,
        customerEmail: customerResult,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-payment-email:", error);
    
    // Try to log failed submission if we have the data
    try {
      const rawPayload = await req.clone().json().catch(() => null);
      if (rawPayload?.customerEmail) {
        await supabaseAdmin
          .from("payment_audit_log")
          .insert({
            customer_name: rawPayload.customerName || "unknown",
            customer_email: rawPayload.customerEmail || "unknown",
            customer_phone: rawPayload.customerPhone || "unknown",
            customer_address: rawPayload.customerAddress || "",
            plan_name: rawPayload.planName || "unknown",
            amount: rawPayload.amount || 0,
            utr_number: rawPayload.utrNumber || "unknown",
            invoice_number: rawPayload.invoiceNumber || "unknown",
            ip_address: clientIp,
            user_agent: userAgent,
            status: "failed",
            admin_email_sent: false,
            customer_email_sent: false,
            notes: error.message || "Unknown error",
          });
      }
    } catch (logError) {
      console.error("Failed to log error to audit table:", logError);
    }

    return new Response(
      JSON.stringify({ success: false, error: "An error occurred processing your request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
