"use client";

import { useState } from "react";
import { z } from "zod";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Copy, Check, ShieldCheck, Loader2, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

import qrBasic from "@/assets/qr-basic.png";
import qrProfessional from "@/assets/qr-professional.png";
import qrEnterprise from "@/assets/qr-enterprise.png";

const UPI_ID = "biswajit.dvc@oksbi";

const QR_BY_PLAN: Record<string, string> = {
  Basic: qrBasic,
  Professional: qrProfessional,
  Enterprise: qrEnterprise,
};

const detailsSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100)
    .regex(/^[a-zA-Z\s.'-]+$/, "Letters only"),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().transform(v => v.replace(/\D/g, ""))
    .pipe(z.string().regex(/^[0-9]{10,15}$/, "10–15 digit phone")),
});

type Props = {
  open: boolean;
  onClose: () => void;
  amount: number;
  planName: string;
};

export default function PaymentFlow({ open, onClose, amount, planName }: Props) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [utr, setUtr] = useState("");
  const [paymentDeclared, setPaymentDeclared] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const reset = () => {
    setStep(1); setForm({ name: "", email: "", phone: "" });
    setUtr(""); setPaymentDeclared(false); setCopied(false); setSubmitting(false);
  };
  const handleClose = () => { reset(); onClose(); };

  const upiLink = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=Softgogy&am=${amount}&cu=INR&tn=${encodeURIComponent(planName + " Plan")}`;
  const qr = QR_BY_PLAN[planName] || qrProfessional;

  const goToPayment = () => {
    const result = detailsSchema.safeParse(form);
    if (!result.success) {
      result.error.errors.forEach(e => toast.error(e.message));
      return;
    }
    setForm({ ...form, phone: result.data.phone });
    setStep(2);
  };

  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true); toast.success("UPI ID copied");
      setTimeout(() => setCopied(false), 1500);
    } catch { toast.error("Copy failed"); }
  };

  const submitPayment = async () => {
    if (!/^[A-Za-z0-9]{6,30}$/.test(utr.trim())) {
      toast.error("UTR must be 6–30 letters/digits");
      return;
    }
    if (!paymentDeclared) {
      toast.error("Please confirm that you have completed the UPI payment before submitting.");
      return;
    }
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-payment-emails", {
        body: {
          customerName: form.name.trim(),
          customerEmail: form.email.trim(),
          customerPhone: form.phone.trim(),
          planName, amount,
          utrNumber: utr.trim(),
          siteOrigin: window.location.origin,
        },
      });
      if (error || !data?.success) throw new Error(data?.error || error?.message || "Submission failed");
      setStep(3);
    } catch (e: any) {
      toast.error(e.message || "Could not submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="max-w-md">
        {step === 1 && (
          <>
            <DialogHeader>
              <DialogTitle>Your Details</DialogTitle>
              <DialogDescription>
                {planName} plan • <span className="font-semibold text-foreground">₹{amount.toLocaleString("en-IN")}</span>
              </DialogDescription>
            </DialogHeader>
          <div className="space-y-3 mt-2">
              <div>
                <Label htmlFor="pf-name">Full Name *</Label>
                <Input id="pf-name" value={form.name}
                  style={{ backgroundColor: "white", color: "black" }}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="pf-email">Email Address *</Label>
                <Input id="pf-email" type="email" value={form.email}
                  style={{ backgroundColor: "white", color: "black" }}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="pf-phone">Mobile Number (WhatsApp) *</Label>
                <Input id="pf-phone" type="tel" value={form.phone}
                  style={{ backgroundColor: "white", color: "black" }}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <Button className="w-full mt-2" onClick={goToPayment}>Continue to Payment →</Button>
            </div>
          </>
        )}


        {step === 2 && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> Secure UPI Payment
              </DialogTitle>
              <DialogDescription>
                Pay first, then submit the UPI Transaction ID for manual verification.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-2">
              <div className="flex justify-center">
                <img src={qr} alt={`UPI QR for ${planName}`} className="w-56 h-56 object-contain rounded-lg border" />
              </div>

              <div className="flex items-center gap-2 bg-muted p-2 rounded-md">
                <span className="text-xs text-muted-foreground px-1">UPI ID</span>
                <span className="font-mono text-sm flex-1 truncate">{UPI_ID}</span>
                <Button size="sm" variant="ghost" onClick={copyUpi}>
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>

              <a href={upiLink}
                className="block text-center w-full bg-primary text-primary-foreground py-2 rounded-md font-medium md:hidden">
                Open in UPI App
              </a>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-xs p-2 rounded">
                Please pay the exact amount shown. Submission of UTR is <strong>not a receipt</strong>; it only starts manual verification.
              </div>

             <div>
                <Label htmlFor="pf-utr">UPI Transaction ID / UTR Number *</Label>
                <Input id="pf-utr" value={utr} onChange={(e) => setUtr(e.target.value)}
                  className="bg-white text-black dark:bg-white dark:text-black"
                  placeholder="12-digit UTR from your UPI app" />
                <p className="text-xs text-muted-foreground mt-1">
                  Find it in your UPI app under transaction details.
                </p>
              </div>

              <label className="flex items-start gap-2 rounded-md border bg-muted/40 p-3 text-xs leading-relaxed">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 accent-primary"
                  checked={paymentDeclared}
                  onChange={(e) => setPaymentDeclared(e.target.checked)}
                />
                <span>
                  I confirm that I have completed the UPI payment of ₹{amount.toLocaleString("en-IN")} and understand
                  that a receipt will be emailed only after Softgogy verifies this UTR against bank records.
                </span>
              </label>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" onClick={() => setStep(1)} disabled={submitting}>
                  Back
                </Button>
                <Button className="flex-1" onClick={submitPayment} disabled={submitting || !paymentDeclared}>
                  {submitting ? <><Loader2 className="w-4 h-4 mr-1 animate-spin" /> Submitting…</> : "Submit for Verification"}
                </Button>
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <DialogHeader>
              <DialogTitle>Submission Received — Verification Pending</DialogTitle>
            </DialogHeader>
            <div className="space-y-3 mt-2 text-sm">
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3 rounded">
                <p className="font-medium text-amber-900 dark:text-amber-200">No receipt is issued yet.</p>
                <p className="text-amber-800 dark:text-amber-300 text-xs mt-1">
                  Your payment receipt and account activation will be emailed to <strong>{form.email}</strong> only
                  <strong> after our team manually verifies the UTR against bank records</strong> (within 2–4 hours).
                </p>
              </div>
              <p className="flex gap-2">
                <AlertTriangle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>A verification-request acknowledgement has been sent to your email. The official receipt and activation
                email will follow only after admin approval based on bank/UPI record matching.</span>
              </p>
              <div className="bg-muted p-3 rounded text-xs space-y-1">
                <p>Need help? Contact <strong>biswajit@softgogy.com</strong> or <strong>+91 7003460866</strong>.</p>
              </div>
              <Button className="w-full" onClick={handleClose}>Done</Button>
            </div>
          </>
        )}

      </DialogContent>
    </Dialog>
  );
}
