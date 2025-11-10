import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import featureMenu from "@/assets/feature-menu.png";
import featureMacd from "@/assets/feature-macd.png";
import featurePriceDiff from "@/assets/feature-price-diff.png";
import featureAdx from "@/assets/feature-adx.png";
import featureFibonacci from "@/assets/feature-fibonacci.png";
import featurePrice60s from "@/assets/feature-price-60s.png";
import featureDashboard from "@/assets/feature-dashboard.png";
import featureBollinger from "@/assets/feature-bollinger.png";

const SoftwareFeatures = () => {
  const features = [
    {
      image: featureMenu,
      title: "Comprehensive Trading Options Menu",
      description: "Navigate effortlessly through 25+ advanced trading strategies with our intuitive menu interface. From algorithmic options to AI-powered signals, every tool is designed to maximize your trading efficiency and profitability."
    },
    {
      image: featureMacd,
      title: "MACD & RSI Signal Visualization",
      description: "Witness precision in action with real-time MACD and RSI indicators. Our intelligent system identifies optimal buy and sell signals with crystal-clear visual markers, empowering you to make confident trading decisions at the perfect moment."
    },
    {
      image: featurePriceDiff,
      title: "Real-Time Price Movement Analysis",
      description: "Stay ahead of the market with live price difference tracking and cumulative volume insights. This powerful visualization helps you spot market momentum shifts instantly, revealing lucrative trading opportunities before the crowd."
    },
    {
      image: featureAdx,
      title: "ADX Trend Strength Signals",
      description: "Harness the power of the ADX indicator to identify strong trending markets automatically. Our system scans every 10 minutes, delivering actionable buy and sell signals based on sophisticated trend strength analysis and directional movement indicators."
    },
    {
      image: featureFibonacci,
      title: "Fibonacci Retracement Signals",
      description: "Unlock professional-grade technical analysis with automated Fibonacci retracement levels. The software identifies key entry zones at the 0.618 golden ratio, highlighting precise uptrend and downtrend opportunities for strategic position entries."
    },
    {
      image: featurePrice60s,
      title: "60-Second Price Volatility Scanner",
      description: "Capture rapid market movements with our high-frequency price difference analyzer. Track price fluctuations over 60-second intervals across multiple stocks simultaneously, perfect for scalping and short-term trading strategies."
    },
    {
      image: featureDashboard,
      title: "Interactive Stock Price Dashboard",
      description: "Experience data visualization excellence with our comprehensive stock dashboard. Monitor current open prices, previous close, and real-time price changes with elegant bar chart representations that make complex data instantly understandable."
    },
    {
      image: featureBollinger,
      title: "Bollinger Bands Breakout Detector",
      description: "Spot volatility breakouts and price surges automatically with Bollinger Bands analysis. Our system continuously monitors price action relative to upper and lower bands, alerting you to potential explosive moves and trend reversals."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discover Our{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore the cutting-edge capabilities that transform ordinary traders into market masters. 
                Each feature is meticulously designed to deliver precision, speed, and profitability.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative aspect-video md:aspect-auto">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="flex flex-col justify-center">
                      <CardTitle className="text-2xl mb-3">{feature.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/">
                <Button size="lg" className="font-bold">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>Email: biswajit@softgogy.com | Contact: 9830046647</p>
            <p>Address: 397 Motilal Colony, Gr. Floor, Kolkata 700081, India</p>
            <p className="mt-4">© 2025 Softgogy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SoftwareFeatures;
