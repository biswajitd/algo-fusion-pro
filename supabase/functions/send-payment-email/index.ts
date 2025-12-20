import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PaymentEmailRequest {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  planName: string;
  amount: number;
  utrNumber: string;
  invoiceNumber: string;
  pdfBase64: string; // Base64 PDF data (without data URI prefix)
}

const handler = async (req: Request): Promise<Response> => {
  console.log("send-payment-email function invoked");

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload: PaymentEmailRequest = await req.json();
    console.log("Received payload for:", payload.customerName, payload.customerEmail);

    const {
      customerName,
      customerEmail,
      customerPhone,
      customerAddress,
      planName,
      amount,
      utrNumber,
      invoiceNumber,
      pdfBase64,
    } = payload;

    const currentDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Email to Admin (biswajit@softgogy.com)
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #1a365d; border-bottom: 2px solid #3182ce; padding-bottom: 10px;">🎉 New Payment Received!</h1>
        
        <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #2d3748; margin-top: 0;">Customer Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #718096;">Name:</td><td style="padding: 8px 0; font-weight: bold;">${customerName}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Email:</td><td style="padding: 8px 0;">${customerEmail}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Phone:</td><td style="padding: 8px 0;">${customerPhone}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Address:</td><td style="padding: 8px 0;">${customerAddress}</td></tr>
          </table>
        </div>

        <div style="background: #e6fffa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #234e52; margin-top: 0;">Payment Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #718096;">Invoice:</td><td style="padding: 8px 0; font-weight: bold;">${invoiceNumber}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Plan:</td><td style="padding: 8px 0; font-weight: bold;">${planName}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Amount:</td><td style="padding: 8px 0; font-weight: bold; color: #38a169;">₹${amount}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">UTR Number:</td><td style="padding: 8px 0; font-weight: bold; color: #d69e2e;">${utrNumber}</td></tr>
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

        <h2 style="color: #2d3748;">Thank You, ${customerName}! 🎉</h2>
        
        <p style="color: #4a5568; line-height: 1.6;">
          We have received your payment for the <strong>${planName}</strong> plan. 
          Your subscription is being processed and our team will contact you within 24 hours.
        </p>

        <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2d3748; margin-top: 0;">Payment Summary</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #718096;">Invoice:</td><td style="padding: 8px 0; font-weight: bold;">${invoiceNumber}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Plan:</td><td style="padding: 8px 0;">${planName}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">Amount Paid:</td><td style="padding: 8px 0; font-weight: bold; color: #38a169;">₹${amount}</td></tr>
            <tr><td style="padding: 8px 0; color: #718096;">UTR Number:</td><td style="padding: 8px 0;">${utrNumber}</td></tr>
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
    const pdfBase64Clean = (pdfBase64 ?? "").replace(
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
      subject: `🎉 New Payment: ${planName} - ₹${amount} from ${customerName}`,
      html: adminEmailHtml,
      attachments: [
        {
          filename: `Softgogy-Receipt-${invoiceNumber}.pdf`,
          content: pdfBase64Clean,
          contentType: "application/pdf",
        },
      ],
    });
    console.log("Admin email result:", adminResult);

    console.log("Sending email to customer:", customerEmail);
    // Send email to customer
    const customerResult = await resend.emails.send({
      from: fromAddress,
      to: [customerEmail],
      subject: `✅ Payment Confirmation - ${planName} Subscription | Softgogy`,
      html: customerEmailHtml,
      attachments: [
        {
          filename: `Softgogy-Receipt-${invoiceNumber}.pdf`,
          content: pdfBase64Clean,
          contentType: "application/pdf",
        },
      ],
    });
    console.log("Customer email result:", customerResult);

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
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
