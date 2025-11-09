import Navigation from "@/components/Navigation";
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹2,999",
      period: "per month",
      description: "Perfect for individual traders getting started",
      features: [
        { name: "Single Platform Integration", included: true },
        { name: "Real-time Market Data", included: true },
        { name: "Basic Trading Automation", included: true },
        { name: "Email Support", included: true },
        { name: "Tools for Buy/Sell signals", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Custom API Integration", included: true },
      ],
      cta: "Subscription",
      popular: false,
      qrCode: qrBasic,
    },
    {
      name: "Professional",
      price: "₹4,999",
      period: "for every 6 months",
      description: "Ideal for active traders with multiple accounts",
      features: [
        { name: "Up to 3 Platform Integrations", included: true },
        { name: "Real-time Market Data", included: true },
        { name: "Advanced Trading Automation", included: true },
        { name: "Email & Chat Support", included: true },
        { name: "Tools for Buy/Sell signals", included: true },
        { name: "Advanced Analytics & Reports", included: true },
        { name: "Custom API Integration", included: true },
      ],
      cta: "Subscription",
      popular: true,
      qrCode: qrProfessional,
    },
    {
      name: "Enterprise",
      price: "₹6,499",
      period: "for every six months",
      description: "Comprehensive solution for professional traders",
      features: [
        { name: "Unlimited Platform Integrations", included: true },
        { name: "Real-time Market Data", included: true },
        { name: "Premium Trading Automation", included: true },
        { name: "24/7 Priority Support", included: true },
        { name: "Tools for Buy/Sell signals", included: true },
        { name: "Advanced Analytics & Reports", included: true },
        { name: "Custom API Integration", included: true },
      ],
      cta: "Subscription",
      popular: false,
      qrCode: qrEnterprise,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 pt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the subscription plan that best fits your trading needs. All plans include a 3-day free trial.
          </p>
        </div>

        {/* Card-based pricing display for mobile/tablet */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 lg:hidden">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.popular ? "border-primary shadow-lg" : ""}>
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground"> {plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full mb-6" variant={plan.popular ? "default" : "outline"}>
                      {plan.cta}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>{plan.name}</DialogTitle>
                      <DialogDescription>
                        {plan.price} {plan.period}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="flex justify-center">
                        <img 
                          src={plan.qrCode} 
                          alt={`${plan.name} GPay QR Code`}
                          className="w-48 h-48 object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold mb-2">GPay Scan</p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                        <p className="font-medium">After payment:</p>
                        <p>Please send email with the screen shot of Payment and your mobile no.</p>
                        <p className="text-primary font-medium">Our team will connect you within 24 hours and install the software remotely or by physically visiting your site.</p>
                        <p className="italic">Quick setup, satisfaction guaranteed or your money back.</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Table-based comparison for desktop */}
        <div className="hidden lg:block">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px] text-lg font-semibold">Features</TableHead>
                  {plans.map((plan) => (
                    <TableHead key={plan.name} className="text-center">
                      <div className="py-4">
                        {plan.popular && (
                          <div className="bg-primary text-primary-foreground text-xs font-semibold py-1 px-3 rounded-full inline-block mb-2">
                            Most Popular
                          </div>
                        )}
                        <div className="text-xl font-bold text-foreground">{plan.name}</div>
                        <div className="text-sm text-muted-foreground mt-2 mb-4">{plan.description}</div>
                        <div className="text-3xl font-bold text-foreground mb-1">{plan.price}</div>
                        <div className="text-sm text-muted-foreground mb-4">{plan.period}</div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                              {plan.cta}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle>{plan.name}</DialogTitle>
                              <DialogDescription>
                                {plan.price} {plan.period}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <div className="flex justify-center">
                                <img 
                                  src={plan.qrCode} 
                                  alt={`${plan.name} GPay QR Code`}
                                  className="w-48 h-48 object-contain"
                                />
                              </div>
                              <div className="text-center">
                                <p className="font-semibold mb-2">GPay Scan</p>
                              </div>
                              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                                <p className="font-medium">After payment:</p>
                                <p>Please send email with the screen shot of Payment and your mobile no.</p>
                                <p className="text-primary font-medium">Our team will connect you within 24 hours and install the software remotely or by physically visiting your site.</p>
                                <p className="italic">Quick setup, satisfaction guaranteed or your money back.</p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {plans[0].features.map((feature, featureIndex) => (
                  <TableRow key={featureIndex}>
                    <TableCell className="font-medium">{feature.name}</TableCell>
                    {plans.map((plan) => (
                      <TableCell key={plan.name} className="text-center">
                        <Check className="h-6 w-6 text-primary mx-auto" />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include a 3-day free trial. No credit card required.
          </p>
          <p className="text-sm text-muted-foreground">
            Need a custom solution? <a href="/success-stories" className="text-primary hover:underline">Contact us</a> for enterprise pricing.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
