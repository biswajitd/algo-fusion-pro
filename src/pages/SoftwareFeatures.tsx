import { useEffect, useRef, useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { ArrowLeft, ZoomIn, ZoomOut, X } from "lucide-react";
import outputMenu from "@/assets/output-menu.png";
import outputMacd from "@/assets/output-macd.png";
import outputPriceDiff from "@/assets/output-price-diff.png";
import outputAdx from "@/assets/output-adx.png";
import outputFibonacci from "@/assets/output-fibonacci.png";
import output60s from "@/assets/output-60s.png";
import outputVolume from "@/assets/output-volume.png";
import outputDashboard from "@/assets/output-dashboard.png";
import outputBollinger from "@/assets/output-bollinger.png";
import outputMl from "@/assets/output-ml.png";
import outputMl from "@/assets/outputIron.png";
const SoftwareFeatures = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleImageClick = (image: string, title: string) => {
    setSelectedImage({ src: image, title });
    setZoomLevel(1);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const features = [
    {
      image: outputMenu,
      title: "Your Command Center: 35+ Trading Strategies at Your Fingertips",
      description: "Experience the ultimate trading arsenal with our intuitive strategy selector. From simple buy-sell patterns to sophisticated options strategies and AI-powered predictions, every tool is just one click away. Choose from algorithmic trading, technical indicator signals, or machine learning predictions—all designed to transform market opportunities into profits."
    },
    {
      image: outputMacd,
      title: "Visual Intelligence: MACD & RSI Precision Signals",
      description: "Watch the market's heartbeat through stunning real-time visualizations. Our advanced MACD and RSI indicators reveal hidden momentum shifts with crystal-clear buy and sell signals. The elegant fusion of blue MACD curves, red signal lines, and purple RSI oscillations creates a symphony of trading intelligence that guides you to perfect entry and exit points."
    },
    {
      image: outputPriceDiff,
      title: "Market Pulse: Real-Time Price Momentum Tracking",
      description: "Discover where the smart money flows with our dynamic price difference analyzer. Vibrant green bars signal bullish surges while red bars warn of bearish pressure, all synchronized with cumulative volume trends. This powerful dual-axis visualization reveals the true market sentiment, helping you ride the waves of profit-generating momentum."
    },
    {
      image: outputAdx,
      title: "Trend Master: ADX-Powered Trading Signals Every 10 Minutes",
      description: "Never miss a strong trend again with our intelligent ADX scanner. Refreshed every 10 minutes, this feature delivers precision-filtered buy and sell signals based on directional movement strength. Each signal comes complete with price data, ADX values, and timestamps—giving you the confidence to trade only the most promising trending opportunities."
    },
    {
      image: outputFibonacci,
      title: "Golden Ratio Trading: Fibonacci Retracement Magic",
      description: "Unlock the ancient secret of market harmony with automated Fibonacci analysis. Our system identifies the sacred 0.618 golden ratio entry points in both uptrends and downtrends. Each signal reveals the perfect retracement zone where price respects mathematical precision, offering you high-probability entry positions trusted by professional traders worldwide."
    },
    {
      image: output60s,
      title: "Speed Trading: 60-Second Price Volatility Radar",
      description: "Catch lightning-fast profit opportunities with our ultra-high-frequency scanner. Monitor price swings across dozens of stocks every 60 seconds, displayed in a stunning visual format. Green spikes reveal explosive upward moves, red drops signal selling pressure—perfect for scalpers and day traders who thrive on rapid-fire market action."
    },
    {
      image: outputVolume,
      title: "Smart Money Detector: Price-Volume Correlation Analysis",
      description: "See beyond the surface with our revolutionary price-volume correlation chart. Giant green bars signal strong buying with heavy volume, while red bars expose selling pressure. The elegant blue dotted line reveals volume trends, helping you distinguish between genuine breakouts and false moves. Trade with the conviction that comes from understanding true market strength."
    },
    {
      image: outputDashboard,
      title: "Data Elegance: Interactive Multi-Stock Dashboard",
      description: "Transform chaos into clarity with our beautifully designed stock dashboard. Monitor last prices, current opens, and previous closes for multiple stocks simultaneously through sleek horizontal bar charts. Color-coded metrics make instant decision-making effortless—purple for baseline reference, vibrant orange for current levels, and emerald green for real-time prices."
    },
    {
      image: outputBollinger,
      title: "Volatility Hunter: Bollinger Bands Breakout Alerts",
      description: "Capture explosive market moves before they happen with our Bollinger Bands scanner. Updated every 10 minutes, this system identifies stocks breaking through upper bands (sell signals) or bouncing off lower bands (buy signals). Each alert provides exact price levels, band values, and timestamps—your early warning system for volatility-driven profits."
    },
    {
      image: outputMl,
      title: "AI Crystal Ball: Machine Learning Trading Predictions",
      description: "Step into the future with our cutting-edge quantum machine learning engine. Powered by advanced AI algorithms, this feature analyzes 35+ stocks simultaneously, delivering buy and sell predictions with probability scores and accuracy ratings. Watch as artificial intelligence processes millions of data points to forecast short-term price movements with remarkable precision."
    }
    {
      image: outputIron,
      title: "Iron Condor Strategy: Iron Condor Strategy with Auto Hedging",
      description: "The Iron Condor is a majestic bird of options trading, soaring on the wings of limited risk and defined reward. It blends a bear call spread and a bull put spread, creating a fortress of premium income while capping exposure. With auto‑hedging, the strategy transforms into a self‑defending shield—adjusting positions dynamically as volatility storms approach. Think of it as a profit corridor, where time decay works tirelessly in your favor while risk is quietly neutralized. Traders love its balanced symmetry, earning from sideways markets without sleepless nights. The auto‑hedging layer acts like a guardian angel, trimming losses and locking gains when the market tries to break free. In short, the Iron Condor with auto‑hedging is not just a strategy—it’s a smart survival instinct in the jungle of options."
    }
  ];

  return (
    <div className="min-h-screen bg-background">

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
                <Card 
                  key={index} 
                  ref={(el) => (cardRefs.current[index] = el)}
                  data-index={index}
                  className={`overflow-hidden hover:shadow-lg transition-all duration-500 ${
                    visibleCards.has(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${(index % 3) * 100}ms`
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div 
                      className="relative aspect-video md:aspect-auto overflow-hidden cursor-pointer group"
                      onClick={() => handleImageClick(feature.image, feature.title)}
                    >
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                          visibleCards.has(index) ? 'scale-100' : 'scale-110'
                        }`}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <CardHeader className="flex flex-col justify-center">
                      <CardTitle className={`text-2xl mb-3 transition-all duration-500 ${
                        visibleCards.has(index) 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-4'
                      }`}
                      style={{
                        transitionDelay: `${(index % 3) * 100 + 100}ms`
                      }}
                      >
                        {feature.title}
                      </CardTitle>
                      <CardDescription className={`text-base leading-relaxed transition-all duration-500 ${
                        visibleCards.has(index) 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-4'
                      }`}
                      style={{
                        transitionDelay: `${(index % 3) * 100 + 200}ms`
                      }}
                      >
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

      <Dialog open={!!selectedImage} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0">
          <div className="relative w-full h-full bg-black/95 flex flex-col">
            <div className="absolute top-4 right-4 z-50 flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.5}
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={handleCloseModal}
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-auto flex items-center justify-center p-8">
              {selectedImage && (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-300"
                  style={{ transform: `scale(${zoomLevel})` }}
                />
              )}
            </div>
            
            {selectedImage && (
              <div className="bg-black/80 text-white p-4 text-center">
                <p className="text-sm md:text-base font-medium">{selectedImage.title}</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

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
