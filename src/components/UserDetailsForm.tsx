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
    utrNumber: "", // UTR/Transaction ID for payment verification
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  // Invoice generator
  const generateInvoiceNumber = () => "INV-" + Date.now();

  // Validate UTR Number (basic validation - 12-22 alphanumeric characters)
  const isValidUTR = (utr: string) => {
    const trimmed = utr.trim();
    return trimmed.length >= 10 && /^[A-Za-z0-9]+$/.test(trimmed);
  };

  // Send email to recipient (admin)
  const sendEmailToRecipient = (invoice: string) => {
    return emailjs.send(
      "service_softgogy",
      "template_w9ou0rt",
      {
        from_name: form.name,
        address: form.address,
        email: form.email,
        phone: form.phone,
        amount: amount,
        plan: planName,
        invoice,
        utr_number: form.utrNumber,
        date: new Date().toLocaleString(),
      },
      "Y1zfR0TDFuC7Dwnmt"
    );
  };

  // Send email to user (customer confirmation)
  const sendEmailToUser = (invoice: string) => {
    return emailjs.send(
      "service_softgogy",
      "template_w9ou0rt", // You may want to create a separate template for user
      {
        to_email: form.email,
        from_name: "Softgogy",
        customer_name: form.name,
        address: form.address,
        email: form.email,
        phone: form.phone,
        amount: amount,
        plan: planName,
        invoice,
        utr_number: form.utrNumber,
        date: new Date().toLocaleString(),
        message: `Thank you for subscribing to the ${planName} plan! Your payment of ₹${amount} has been received. UTR: ${form.utrNumber}`,
      },
      "Y1zfR0TDFuC7Dwnmt"
    );
  };

  // Open WhatsApp with payment details
  const openWhatsApp = (phoneNumber: string, invoice: string, isRecipient: boolean) => {
    const message = isRecipient
      ? `🎉 New Payment Received!\n\n📋 Invoice: ${invoice}\n👤 Customer: ${form.name}\n📧 Email: ${form.email}\n📱 Phone: ${form.phone}\n📍 Address: ${form.address}\n\n💳 Plan: ${planName}\n💰 Amount: ₹${amount}\n🔢 UTR/Transaction ID: ${form.utrNumber}\n📅 Date: ${new Date().toLocaleString()}\n\n✅ Please verify the payment using UTR number.`
      : `🎉 Payment Confirmation - Softgogy\n\nDear ${form.name},\n\nThank you for your payment!\n\n📋 Invoice: ${invoice}\n💳 Plan: ${planName}\n💰 Amount: ₹${amount}\n🔢 UTR/Transaction ID: ${form.utrNumber}\n📅 Date: ${new Date().toLocaleString()}\n\n✅ Your subscription is being processed. We will contact you within 24 hours.\n\nTeam Softgogy`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  // Generate PDF
  const generatePDF = (invoice: string) => {
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

    doc.save(`Softgogy-Receipt-${invoice}.pdf`);
    return doc;
  };

  // Main submit handler
  const handleSubmit = async () => {
    // Validation
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
      // 1. Generate and download PDF
      generatePDF(invoice);

      // 2. Send emails to both recipient and user
      await Promise.all([
        sendEmailToRecipient(invoice),
        sendEmailToUser(invoice),
      ]);

      toast.success("Receipt generated and emails sent successfully!");

      // 3. Open WhatsApp for recipient (admin)
      setTimeout(() => {
        openWhatsApp(RECIPIENT_PHONE, invoice, true);
      }, 500);

      // 4. Open WhatsApp for user (if valid Indian number)
      const userPhone = form.phone.replace(/\D/g, "");
      if (userPhone.length >= 10) {
        const formattedUserPhone = userPhone.startsWith("91") ? userPhone : `91${userPhone}`;
        setTimeout(() => {
          openWhatsApp(formattedUserPhone, invoice, false);
        }, 1500);
      }

      toast.info("WhatsApp windows opened for confirmation. Please send the messages.");

      onClose();
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("Something went wrong. Please try again or contact support.");
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

        {/* FIXED FORM */}
        <div className="flex flex-col gap-4 mt-4">

          {/* FULL NAME */}
          <Input
            placeholder="Full Name *"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="border p-2 rounded text-foreground bg-white dark:bg-neutral-900 placeholder:text-muted-foreground"
          />

          {/* ADDRESS */}
          <Textarea
            placeholder="Full Address"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
            className="border p-2 rounded text-foreground bg-white dark:bg-neutral-900 placeholder:text-muted-foreground resize-none"
            rows={3}
          />

          {/* EMAIL */}
          <Input
            placeholder="Email Address *"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="border p-2 rounded text-foreground bg-white dark:bg-neutral-900 placeholder:text-muted-foreground"
          />

          {/* PHONE */}
          <Input
            placeholder="Mobile Number (WhatsApp) *"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="border p-2 rounded text-foreground bg-white dark:bg-neutral-900 placeholder:text-muted-foreground"
          />

          {/* UTR/TRANSACTION ID */}
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

          {/* BUTTON */}
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
