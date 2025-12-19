"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";
import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import SoftgogyLogo from "@/assets/softgogy.png";

const RECIPIENT_PHONE = "919830046647"; // Softgogy WhatsApp number
const RECIPIENT_EMAIL = "biswajit@softgogy.com";

export default function UserDetailsForm({ open, onClose, amount, planName }) {
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    utrNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const generateInvoiceNumber = () => "INV-" + Date.now();

  const isValidUTR = (utr: string) => {
    const trimmed = utr.trim();
    return trimmed.length >= 10 && /^[A-Za-z0-9]+$/.test(trimmed);
  };

  // Generate PDF and return as base64
  const generatePDF = (invoice: string): { doc: jsPDF; base64: string } => {
    const doc = new jsPDF();

    // Logo
    doc.addImage(SoftgogyLogo, "PNG", 150, 10, 40, 40);

    doc.setFontSize(22);
    doc.text("Softgogy - Payment Receipt", 20, 30);

    doc.setFontSize(12);
    doc.text(`Invoice No: ${invoice}`, 20, 50);
    doc.text(`Date: ${new Date().toLocaleString()}`, 20, 58);

    doc.text("Customer Details:", 20, 75);
    doc.text(`Name: ${form.name}`, 20, 85);
    doc.text(`Address: ${form.address}`, 20, 95);
    doc.text(`Email: ${form.email}`, 20, 105);
    doc.text(`Phone: ${form.phone}`, 20, 115);

    doc.text("Payment Details:", 20, 135);
    doc.text(`Plan: ${planName}`, 20, 145);
    doc.text(`Amount Paid: ₹${amount}`, 20, 155);
    doc.text(`Payment Method: GPay`, 20, 165);
    doc.text(`UTR/Transaction ID: ${form.utrNumber}`, 20, 175);

    doc.setFontSize(10);
    doc.text("Note: Please keep this receipt for your records.", 20, 195);
    doc.text("For any queries, contact: biswajit@softgogy.com | 9830046647", 20, 205);

    // Get base64 for email
    const base64 = doc.output("datauristring");
    
    // Save locally for user
    doc.save(`Softgogy-Receipt-${invoice}.pdf`);
    
    return { doc, base64 };
  };

  // Send email to recipient (admin) with PDF link
  const sendEmailToRecipient = (invoice: string, pdfBase64: string) => {
    return emailjs.send(
      "service_softgogy",
      "template_w9ou0rt",
      {
        from_name: form.name,
        to_email: RECIPIENT_EMAIL,
        address: form.address,
        email: form.email,
        phone: form.phone,
        amount: amount,
        plan: planName,
        invoice,
        utr_number: form.utrNumber,
        date: new Date().toLocaleString(),
        pdf_link: pdfBase64,
        message: `New subscription payment received!\n\nCustomer: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nAddress: ${form.address}\n\nPlan: ${planName}\nAmount: ₹${amount}\nUTR: ${form.utrNumber}\nInvoice: ${invoice}\n\nNote: PDF receipt is attached as a download link below.`,
      },
      "Y1zfR0TDFuC7Dwnmt"
    );
  };

  // Send email to user (customer) with PDF link
  const sendEmailToUser = (invoice: string, pdfBase64: string) => {
    return emailjs.send(
      "service_softgogy",
      "template_w9ou0rt",
      {
        from_name: "Softgogy",
        to_email: form.email,
        customer_name: form.name,
        address: form.address,
        email: form.email,
        phone: form.phone,
        amount: amount,
        plan: planName,
        invoice,
        utr_number: form.utrNumber,
        date: new Date().toLocaleString(),
        pdf_link: pdfBase64,
        message: `Dear ${form.name},\n\nThank you for subscribing to the ${planName} plan!\n\nPayment Details:\n- Amount: ₹${amount}\n- UTR: ${form.utrNumber}\n- Invoice: ${invoice}\n\nYour PDF receipt is attached below. Click the link to download.\n\nWe will contact you within 24 hours to complete your setup.\n\nBest regards,\nTeam Softgogy\nContact: 9830046647 | biswajit@softgogy.com`,
      },
      "Y1zfR0TDFuC7Dwnmt"
    );
  };

  // Open WhatsApp with payment details (user must click Send)
  const openWhatsAppForRecipient = (invoice: string) => {
    const message = `🎉 *New Payment Received!*

📋 *Invoice:* ${invoice}
👤 *Customer:* ${form.name}
📧 *Email:* ${form.email}
📱 *Phone:* ${form.phone}
📍 *Address:* ${form.address}

💳 *Plan:* ${planName}
💰 *Amount:* ₹${amount}
🔢 *UTR:* ${form.utrNumber}
📅 *Date:* ${new Date().toLocaleString()}

✅ Please verify payment using UTR.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${RECIPIENT_PHONE}?text=${encodedMessage}`, "_blank");
  };

  const openWhatsAppForUser = (invoice: string) => {
    const userPhone = form.phone.replace(/\D/g, "");
    if (userPhone.length < 10) return;
    
    const formattedPhone = userPhone.startsWith("91") ? userPhone : `91${userPhone}`;
    
    const message = `🎉 *Payment Confirmation - Softgogy*

Dear ${form.name},

Thank you for your payment!

📋 *Invoice:* ${invoice}
💳 *Plan:* ${planName}
💰 *Amount:* ₹${amount}
🔢 *UTR:* ${form.utrNumber}
📅 *Date:* ${new Date().toLocaleString()}

✅ Your subscription is being processed. We will contact you within 24 hours.

📧 Check your email (${form.email}) for the PDF receipt.

Team Softgogy
📞 9830046647`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${formattedPhone}?text=${encodedMessage}`, "_blank");
  };

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.utrNumber.trim()) {
      toast.error("Please fill all required fields including UTR/Transaction ID");
      return;
    }

    if (!isValidUTR(form.utrNumber)) {
      toast.error("Please enter a valid UTR/Transaction ID (minimum 10 alphanumeric characters)");
      return;
    }

    setIsSubmitting(true);
    const invoice = generateInvoiceNumber();

    try {
      // 1. Generate PDF and get base64
      toast.info("Generating PDF receipt...");
      const { base64: pdfBase64 } = generatePDF(invoice);
      toast.success("PDF downloaded to your device!");

      // 2. Send emails with PDF link
      toast.info("Sending confirmation emails...");
      await Promise.all([
        sendEmailToRecipient(invoice, pdfBase64),
        sendEmailToUser(invoice, pdfBase64),
      ]);
      toast.success("Emails sent to you and Softgogy!");

      // 3. Open WhatsApp windows (user needs to click Send)
      toast.info("Opening WhatsApp... Please click SEND on each window!", { duration: 5000 });
      
      setTimeout(() => {
        openWhatsAppForRecipient(invoice);
      }, 1000);

      setTimeout(() => {
        openWhatsAppForUser(invoice);
        toast.warning("⚠️ Important: Click SEND on both WhatsApp windows to complete!", { duration: 8000 });
      }, 2500);

      onClose();
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("Something went wrong. Please try again or contact support at 9830046647");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Enter Your Details
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-4">
          <Input
            placeholder="Full Name *"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="border p-2 rounded text-foreground bg-white dark:bg-neutral-900 placeholder:text-muted-foreground"
          />

          <Textarea
            placeholder="Full Address"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
            className="border p-2 rounded text-foreground bg-white dark:bg-neutral-900 placeholder:text-muted-foreground resize-none"
            rows={3}
          />

          <Input
            placeholder="Email Address *"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="border p-2 rounded text-foreground bg-white dark:bg-neutral-900 placeholder:text-muted-foreground"
          />

          <Input
            placeholder="Mobile Number (WhatsApp) *"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="border p-2 rounded text-foreground bg-white dark:bg-neutral-900 placeholder:text-muted-foreground"
          />

          <div className="space-y-1">
            <Input
              placeholder="UTR/Transaction ID from GPay *"
              value={form.utrNumber}
              onChange={(e) => update("utrNumber", e.target.value)}
              className="border p-2 rounded text-foreground bg-white dark:bg-neutral-900 placeholder:text-muted-foreground"
            />
            <p className="text-xs text-muted-foreground">
              Find UTR in GPay → Activity → Select transaction → View details
            </p>
          </div>

          {/* Info box about what happens next */}
          <div className="bg-muted/50 p-3 rounded-lg text-sm space-y-1">
            <p className="font-medium">After clicking submit:</p>
            <p>✓ PDF receipt downloads automatically</p>
            <p>✓ Email sent to you & Softgogy</p>
            <p>✓ WhatsApp windows open - <strong>click SEND on each</strong></p>
          </div>

          <Button 
            className="w-full mt-2" 
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Generate Receipt & Send Confirmation"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
