import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹2,999",
      period: "/month",
      description: "Perfect for individual traders getting started",
      features: [
        { name: "Single Platform Integration", included: true },
        { name: "Real-time Market Data", included: true },
        { name: "Basic Trading Automation", included: true },
        { name: "Email Support", included: true },
        { name: "Multi-Platform Support", included: false },
        { name: "Advanced Analytics", included: false },
        { name: "Priority Support", included: false },
        { name: "Custom API Integration", included: false },
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "₹5,999",
      period: "/month",
      description: "Ideal for active traders with multiple accounts",
      features: [
        { name: "Up to 3 Platform Integrations", included: true },
        { name: "Real-time Market Data", included: true },
        { name: "Advanced Trading Automation", included: true },
        { name: "Email & Chat Support", included: true },
        { name: "Multi-Platform Support", included: true },
        { name: "Advanced Analytics & Reports", included: true },
        { name: "Priority Support", included: false },
        { name: "Custom API Integration", included: false },
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹12,999",
      period: "/month",
      description: "Comprehensive solution for professional traders",
      features: [
        { name: "Unlimited Platform Integrations", included: true },
        { name: "Real-time Market Data", included: true },
        { name: "Premium Trading Automation", included: true },
        { name: "24/7 Priority Support", included: true },
        { name: "Multi-Platform Support", included: true },
        { name: "Advanced Analytics & Reports", included: true },
        { name: "Priority Support", included: true },
        { name: "Custom API Integration", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
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
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-6" variant={plan.popular ? "default" : "outline"}>
                  {plan.cta}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
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
                        <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                          {plan.cta}
                        </Button>
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
                        {plan.features[featureIndex].included ? (
                          <Check className="h-6 w-6 text-primary mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-muted-foreground mx-auto" />
                        )}
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
