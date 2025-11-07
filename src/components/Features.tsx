import { Card } from "./ui/card";
import aiIcon from "@/assets/icon-ai.jpg";
import speedIcon from "@/assets/icon-speed.jpg";
import controlIcon from "@/assets/icon-control.jpg";

const Features = () => {
  const features = [
    {
      icon: aiIcon,
      title: "AI-Driven Signal Detection",
      description:
        "Advanced machine learning algorithms identify high-probability buy and sell opportunities in real-time across all instruments.",
    },
    {
      icon: speedIcon,
      title: "Lightning-Fast Execution",
      description:
        "Ultra-fast automated trading engine ensures execution with surgical accuracy. Built with Python, C#, and .NET Framework 9.",
    },
    {
      icon: controlIcon,
      title: "Full Manual Control",
      description:
        "Retain complete control at any moment. Override, adjust, or intervene in trades based on your own insights and market conditions.",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powered by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Advanced Technology
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrating cutting-edge AI with professional-grade trading tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow p-8"
            >
              <div className="mb-6">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-card border border-border rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Advanced Technical Indicators
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Interface seamlessly integrates advanced indicators such as MACD, RSI, 
                and Bollinger Bands, alongside AI-predicted price movements, delivering 
                sharp, real-time insights that elevate your decision-making with precision 
                and confidence.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  MACD
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  RSI
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Bollinger Bands
                </span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  AI Predictions
                </span>
              </div>
            </div>
            <div className="bg-card/50 rounded-xl p-6 border border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Real-time Analysis</span>
                  <span className="text-secondary font-semibold">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Auto Trading</span>
                  <span className="text-primary font-semibold">Enabled</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Risk Management</span>
                  <span className="text-secondary font-semibold">Optimal</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Market Segments</span>
                  <span className="text-foreground font-semibold">NSE, F&O, MCX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
