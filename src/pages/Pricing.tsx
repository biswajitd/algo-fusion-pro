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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import qrBasic from "@/assets/qr-basic.png";
import qrProfessional from "@/assets/qr-professional.png";
import qrEnterprise from "@/assets/qr-enterprise.png";

import { useState } from "react";
import PaymentFlow from "@/components/PaymentFlow";
import { ShieldCheck } from "lucide-react";

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

        <div className="mt-12 flex flex-col items-center gap-3 text-muted-foreground">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-sm">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Secure UPI Payment • Manually verified within 2–4 hours</span>
          </div>
          <p>All plans include a 5-day free trial. No credit card required.</p>
        </div>

        <PaymentFlow
          open={openForm}
          onClose={() => setOpenForm(false)}
          amount={selectedAmount}
          planName={selectedPlan}
        />
      </main>

      <footer className="border-t py-12">
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>Email: biswajit@softgogy.com | Contact: 7003460866</p>
          <p>397 Motilal Colony, Gr. Floor, Kolkata, India</p>
          <p className="mt-4">© 2025 Softgogy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
