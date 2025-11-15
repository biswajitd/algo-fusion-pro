"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function UserDetailsForm({ open, onClose, amount }) {
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const update = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  // Generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Softgogy Payment Receipt", 20, 20);

    doc.setFontSize(12);
    doc.text(`Name: ${form.name}`, 20, 40);
    doc.text(`Address: ${form.address}`, 20, 50);
    doc.text(`Email: ${form.email}`, 20, 60);
    doc.text(`Phone: ${form.phone}`, 20, 70);

    doc.text(`Amount Paid: ₹${amount}`, 20, 90);
    doc.text(`Payment Method: GPay QR`, 20, 100);
    doc.text(`Date: ${new Date().toLocaleString()}`, 20, 110);

    doc.save("Softgogy-Payment-Receipt.pdf");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Enter Your Details</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-4">
          <input
            className="border p-2 rounded"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />

          <textarea
            className="border p-2 rounded"
            placeholder="Full Address"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />

          <Button className="w-full" onClick={generatePDF}>
            Generate Receipt
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
