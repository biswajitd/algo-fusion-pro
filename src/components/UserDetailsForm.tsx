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

import SoftgogyLogo from "@/assets/softgogy.png";

export default function UserDetailsForm({ open, onClose, amount, planName }) {
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const update = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  // Invoice generator
  const generateInvoiceNumber = () => "INV-" + Date.now();

  // EmailJS
  const sendEmail = (invoice) => {
    emailjs.send(
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
        date: new Date().toLocaleString(),
      },
      "Y1zfR0TDFuC7Dwnmt"
    );
  };

  // PDF
  const createPDF = () => {
    const invoice = generateInvoiceNumber();
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

    doc.save(`Softgogy-Receipt-${invoice}.pdf`);

    sendEmail(invoice);

    window.open(
      "https://wa.me/919830046647?text=I%20have%20completed%20payment",
      "_blank"
    );

    onClose();
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
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="border p-2 rounded text-foreground bg-black dark:bg-neutral-900 placeholder:text-muted-foreground"
          />

          {/* ADDRESS */}
          <Textarea
            placeholder="Full Address"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
            className="border p-2 rounded text-foreground bg-black dark:bg-neutral-900 placeholder:text-muted-foreground resize-none"
            rows={3}
          />

          {/* EMAIL */}
          <Input
            placeholder="Email Address"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="border p-2 rounded text-foreground bg-black dark:bg-neutral-900 placeholder:text-muted-foreground"
          />

          {/* PHONE */}
          <Input
            placeholder="Mobile Number"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="border p-2 rounded text-foreground bg-black dark:bg-neutral-900 placeholder:text-muted-foreground"
          />

          {/* BUTTON */}
          <Button className="w-full mt-2" onClick={createPDF}>
            Generate Receipt & Send Confirmation
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
