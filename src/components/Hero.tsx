import { Button } from "./ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-dark opacity-70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Revolutionary{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Algo Trading
            </span>{" "}
            Software
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            AI-powered trading automation with machine learning algorithms. 
            Execute trades with lightning speed and surgical precision across multiple platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              <Download className="w-5 h-5" />
              Download 3-Day Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Platforms
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Platforms Supported</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">AI</div>
              <div className="text-sm text-muted-foreground">Powered Signals</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Automated Trading</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">100%</div>
              <div className="text-sm text-muted-foreground">Manual Control</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
