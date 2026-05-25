import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import qrBasic from "@/assets/qr-basic.png";
import qrProfessional from "@/assets/qr-professional.png";
import qrEnterprise from "@/assets/qr-enterprise.png";

import { useState } from "react";
import PaymentFlow from "@/components/PaymentFlow";
import { ShieldCheck, Lock, BadgeCheck, Clock } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";


const Pricing = () => {
  const [openForm, setOpenForm] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState("");

  const plans = [
    {
      name: "Basic",
      price: "₹3,000",
      period: "per month",
      amountNumber: 3000,
      description: "Perfect for individual traders getting started",
      features: [
        { name: "No 2FA, Easy API Integration" },
        { name: "Real-Time Market Data & Charts" },
        { name: "Advanced Trading Automation" },
        { name: "Commodity Trading Support for Zerodha" },
        { name: "ML/AI Tools for Buy/Sell Signals with Technicals" },
        { name: "Advanced Analytics & Prediction Reports" },
        { name: "Email & Phone call Support" },
      ],
      cta: "Subscription",
      popular: false,
      qrCode: qrBasic,
    },
    {
      name: "Professional",
      price: "₹5,000",
      period: "for every three months",
      amountNumber: 5000,
      description: "Ideal for active traders with multiple accounts",
      features: [
        { name: "No 2FA, Easy API Integration" },
        { name: "Real-Time Market Data & Charts" },
        { name: "Advanced Trading Automation" },
        { name: "Commodity Trading Support for Zerodha" },
        { name: "ML/AI Tools for Buy/Sell Signals with Technicals" },
        { name: "Advanced Analytics & Prediction Reports" },
        { name: "Email & Phone call Support" },
      ],
      cta: "Subscription",
      popular: true,
      qrCode: qrProfessional,
    },
    {
      name: "Enterprise",
      price: "₹6,500",
      period: "for every four months",
      amountNumber: 6500,
      description: "Comprehensive solution for professional traders",
      features: [
        { name: "No 2FA, Easy API Integration" },
        { name: "Real-Time Market Data & Charts" },
        { name: "Advanced Trading Automation" },
        { name: "Commodity Trading Support for Zerodha" },
        { name: "ML/AI Tools for Buy/Sell Signals with Technicals" },
        { name: "Advanced Analytics & Prediction Reports" },
        { name: "Email & Phone call Support" },
      ],
      cta: "Subscription",
      popular: false,
      qrCode: qrEnterprise,
    },
  ];

  const openDetailsForm = (plan) => {
    setSelectedAmount(plan.amountNumber);
    setSelectedPlan(plan.name);
    setOpenForm(true);
  };

  return (
    <div className="min-h-screen bg-background">

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 pt-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the subscription plan that best fits your trading needs. All plans include a 5-day free trial.
          </p>
        </div>

        {/* ========= MOBILE (CARDS) ========= */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 lg:hidden">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.popular ? "border-primary shadow-lg" : ""}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> {plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <Button className="w-full mb-6" onClick={() => openDetailsForm(plan)}>
                  {plan.cta}
                </Button>

                <ul className="space-y-3 mt-4">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{f.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ========= DESKTOP TABLE ========= */}
        <div className="hidden lg:block">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-64 text-lg font-semibold">Features</TableHead>

                  {plans.map((plan) => (
                    <TableHead key={plan.name} className="text-center">
                      <div className="py-4">
                        {plan.popular && (
                          <div className="bg-primary text-primary-foreground text-xs font-semibold py-1 px-3 rounded-full mb-2">
                            Most Popular
                          </div>
                        )}

                        <div className="text-xl font-bold">{plan.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {plan.description}
                        </div>
                        <div className="text-3xl font-bold mt-3">
                          {plan.price}
                        </div>
                        <div className="text-sm text-muted-foreground mb-4">
                          {plan.period}
                        </div>

                        <Button className="w-full" onClick={() => openDetailsForm(plan)}>
                          {plan.cta}
                        </Button>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>

              <TableBody>
                {plans[0].features.map((feature, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">
                      {feature.name}
                    </TableCell>

                    {plans.map((p) => (
                      <TableCell key={p.name} className="text-center">
                        <Check className="h-6 w-6 text-primary mx-auto" />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Trust badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: ShieldCheck, label: "Secure UPI Payment" },
            { icon: Lock, label: "Data Encrypted" },
            { icon: BadgeCheck, label: "Manually Verified" },
            { icon: Clock, label: "Activated in 2–4 hrs" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 px-3 py-3 rounded-lg border bg-card text-sm">
              <Icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-foreground">{label}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          All plans include a 5-day free trial. No credit card required. Payment receipt is issued
          only after manual UTR verification.
        </p>

        {/* Pricing FAQ */}
        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Pricing FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>When is my account activated after I pay?</AccordionTrigger>
              <AccordionContent>
                Within 2–4 hours of payment. Our team manually verifies the UTR against bank records
                before activating your subscription and emailing the official receipt.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Do you charge anything during the 5-day free trial?</AccordionTrigger>
              <AccordionContent>
                No. The trial is fully free, no credit card or UPI required, and you get full features.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>What if my payment doesn't get verified?</AccordionTrigger>
              <AccordionContent>
                If we cannot match your UTR, we contact you on your registered email/phone. If it
                turns out to be a duplicate or failed transaction, the amount is automatically
                reversed by your bank — Softgogy never holds your money.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>Can I get a refund?</AccordionTrigger>
              <AccordionContent>
                Yes — full refund within 7 days of activation if the software does not work as
                described and we cannot fix it. See our <Link to="/refund" className="text-primary underline">Refund Policy</Link> for full details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>Are my broker credentials safe?</AccordionTrigger>
              <AccordionContent>
                Broker API keys are used only to place orders in your own account. We never see your
                broker login password and never have access to your funds.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <PaymentFlow
          open={openForm}
          onClose={() => setOpenForm(false)}
          amount={selectedAmount}
          planName={selectedPlan}
        />
      </main>

      <footer className="border-t py-10 mt-12">
        <div className="container mx-auto px-4 text-sm text-muted-foreground space-y-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-semibold text-foreground mb-1">Softgogy</p>
              <p>397 Motilal Colony, Gr. Floor,<br />Kolkata, India</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Contact</p>
              <p>Email: biswajit@softgogy.com</p>
              <p>Phone: +91 7003460866</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Legal</p>
              <ul className="space-y-1">
                <li><Link to="/terms" className="hover:text-primary underline-offset-4 hover:underline">Terms &amp; Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-primary underline-offset-4 hover:underline">Privacy Policy</Link></li>
                <li><Link to="/refund" className="hover:text-primary underline-offset-4 hover:underline">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
          <p className="text-center pt-4 border-t">© 2025 Softgogy. All rights reserved. SEBI registration in progress.</p>
        </div>
      </footer>

    </div>
  );
};

export default Pricing;
