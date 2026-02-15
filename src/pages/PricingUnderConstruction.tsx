import { Construction, Clock, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingUnderConstruction = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Animated icon */}
        <div className="relative mx-auto w-28 h-28">
          <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" />
          <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-primary/20 border border-primary/30">
            <Construction className="w-14 h-14 text-primary" />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Pricing Coming Soon
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            We're crafting the perfect plans for you. Our pricing page is currently being updated with exciting new offerings.
          </p>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
            <Clock className="w-8 h-8 text-primary shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-sm">Launching Soon</p>
              <p className="text-xs text-muted-foreground">New plans are on the way</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
            <Bell className="w-8 h-8 text-secondary shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-sm">Stay Tuned</p>
              <p className="text-xs text-muted-foreground">Check back for updates</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="pt-4">
          <p className="text-sm text-muted-foreground mb-3">
            Need immediate assistance? Reach out to us directly.
          </p>
          <Button variant="outline" asChild>
            <a href="/#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingUnderConstruction;
