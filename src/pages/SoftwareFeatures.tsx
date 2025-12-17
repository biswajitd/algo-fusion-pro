import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ZoomIn, ZoomOut, X } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

/* ✅ Image imports (fixed) */
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
import outputIron from "@/assets/outputIron.png"; // ✅ FIXED

const SoftwareFeatures = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] =
    useState<{ src: string; title: string } | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    cardRefs.current.forEach(ref => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const handleImageClick = (src: string, title: string) => {
    setSelectedImage({ src, title });
    setZoomLevel(1);
  };

  const features = [
    {
      image: outputMenu,
      title: "Your Command Center: 35+ Trading Strategies at Your Fingertips",
      description:
        "Experience the ultimate trading arsenal with our intuitive strategy selector."
    },
    {
      image: outputMacd,
      title: "Visual Intelligence: MACD & RSI Precision Signals",
      description:
        "Advanced MACD and RSI indicators with crystal-clear signals."
    },
    {
      image: outputPriceDiff,
      title: "Market Pulse: Real-Time Price Momentum Tracking",
      description:
        "Dynamic price difference analyzer synced with volume trends."
    },
    {
      image: outputAdx,
      title: "Trend Master: ADX-Powered Trading Signals",
      description:
        "Precision-filtered ADX signals refreshed every 10 minutes."
    },
    {
      image: outputFibonacci,
      title: "Golden Ratio Trading: Fibonacci Retracement Magic",
      description:
        "Automated Fibonacci retracement zones with golden ratio logic."
    },
    {
      image: output60s,
      title: "Speed Trading: 60-Second Price Volatility Radar",
      description:
        "Ultra-fast scanner tracking price swings every 60 seconds."
    },
    {
      image: outputVolume,
      title: "Smart Money Detector: Price-Volume Correlation Analysis",
      description:
        "Identify genuine breakouts using price-volume correlation."
    },
    {
      image: outputDashboard,
      title: "Data Elegance: Interactive Multi-Stock Dashboard",
      description:
        "Clean, color-coded dashboard for multi-stock tracking."
    },
    {
      image: outputBollinger,
      title: "Volatility Hunter: Bollinger Bands Breakout Alerts",
      description:
        "Automatic Bollinger Band breakout and reversal alerts."
    },
    {
      image: outputMl,
      title: "AI Crystal Ball: Machine Learning Trading Predictions",
      description:
        "AI-powered buy/sell predictions with probability scores."
    },
    {
      image: outputIron,
      title: "Iron Condor Strategy with Auto Hedging",
      description:
        "Options strategy combining limited risk with auto-hedging intelligence."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={el => (cardRefs.current[index] = el)}
                data-index={index}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        handleImageClick(feature.image, feature.title)
                      }
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/">
              <Button size="lg">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0">
          <div className="relative w-full h-full bg-black/95 flex flex-col">
            <div className="absolute top-4 right-4 z-50 flex gap-2">
              <Button size="icon" onClick={() => setZoomLevel(z => Math.max(0.5, z - 0.25))}>
                <ZoomOut />
              </Button>
              <Button size="icon" onClick={() => setZoomLevel(z => Math.min(3, z + 0.25))}>
                <ZoomIn />
              </Button>
              <Button size="icon" onClick={() => setSelectedImage(null)}>
                <X />
              </Button>
            </div>

            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                style={{ transform: `scale(${zoomLevel})` }}
                className="m-auto max-w-full max-h-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SoftwareFeatures;
