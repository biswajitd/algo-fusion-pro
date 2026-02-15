import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Shield, BarChart3, LineChart, PieChart, Settings, Download, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const sections = [
  {
    icon: ShoppingCart,
    color: "text-primary",
    bgColor: "bg-primary/10",
    title: "Basic Order Types",
    points: [
      "Execute Buy/Sell orders for stocks and derivatives across NSE and MCX.",
      "Features include auto-repeat orders, stop-loss triggers, and carry-forward provisions.",
      "Entirely automated, reducing losses caused by emotional decisions.",
      "Traders retain manual override at any point for full control.",
    ],
  },
  {
    icon: Shield,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    title: "Strategy Spreads with Auto Hedging",
    points: [
      "Includes all major strategies: Bull Call, Bear Put, Butterfly, Condor, Straddle, Strangle, and more.",
      "Auto Hedging is the highlight — if a trade moves against you, the system automatically initiates a hedge using futures.",
      "Requires sufficient margin funds to execute seamlessly.",
    ],
  },
  {
    icon: BarChart3,
    color: "text-primary",
    bgColor: "bg-primary/10",
    title: "Signal Prediction",
    points: [
      "Real-time insights for NSE and MCX instruments.",
      "Option 23 & 33: Highly accurate predictions for NSE instruments.",
      "Option 24: Clear commodity trend forecasts (especially crude oil).",
    ],
    alert:
      "Crude Oil Alert: Evening trades often see sharp moves of 30–40 points in options — extra caution advised.",
  },
  {
    icon: LineChart,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    title: "Technical Analysis Charts",
    points: [
      "Access a wide range of trend charts, MACD/RSI analysis, Fibonacci retracements, and price movement studies.",
      "Compare historical vs. current market behavior to sharpen decision-making.",
    ],
  },
  {
    icon: PieChart,
    color: "text-primary",
    bgColor: "bg-primary/10",
    title: "Performance Center",
    points: [
      "Detailed Profit & Loss reports with breakup charges for daily and historical trades.",
      "Historical data can be imported via CSV files from your broker account.",
      "Smart cleanup: On exit, the program not only closes but also removes junk files from the system's Bin directory.",
    ],
  },
  {
    icon: Monitor,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    title: "Platform Compatibility",
    points: [
      "Works seamlessly with Zerodha, Groww, Angel One, Upstox, and 5paisa.",
      "Commodity Algo Trading: Supported on all except Groww.",
      "Observed to perform most efficiently on Zerodha.",
    ],
  },
];

const categories = [
  "Basic Order Types",
  "Strategy Spreads with Auto Hedging",
  "Signal Prediction",
  "Technical Analysis Charts",
  "Performance Center",
  "System Utilities",
];

const Essentials = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Hero heading */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                EasyTrading Dashboard
              </span>
              <br />
              <span className="text-foreground text-2xl md:text-3xl font-semibold">
                Professional Edition
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A powerful and intelligent trading companion designed to simplify
              complex strategies and empower traders with precision.
            </p>

            <div className="bg-card/60 border border-border rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-foreground mb-4 font-medium">
                This software offers <span className="text-primary font-bold">40 advanced options</span>, of which{" "}
                <span className="text-primary font-bold">38 are fully functional</span>, neatly organized under six dynamic categories:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {categories.map((cat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    {cat}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <Card
                  key={idx}
                  className="overflow-hidden border-border hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className={`w-12 h-12 ${section.bgColor} rounded-xl flex items-center justify-center shrink-0`}
                      >
                        <Icon className={`w-6 h-6 ${section.color}`} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                        {section.title}
                      </h2>
                    </div>

                    <ul className="space-y-3 ml-1">
                      {section.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {section.alert && (
                      <div className="mt-5 bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-3 text-sm text-destructive font-medium">
                        ⚠️ {section.alert}
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Getting Started */}
          <Card className="mt-12 border-border overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Getting Started
                </h2>
              </div>
              <ul className="space-y-3 ml-1">
                <li className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>
                    Download the RAR package containing the installation guide
                    and trial version from:{" "}
                    <a
                      href="https://www.softgogy.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      www.softgogy.in
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>
                    Install, explore, and experience the full functional trial
                    version before upgrading.
                  </span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Summary */}
          <div className="mt-12 bg-gradient-primary rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Complete Trading Ecosystem
            </h2>
            <p className="text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto text-lg">
              EasyTrading Dashboard is not just another trading tool — it's a
              complete ecosystem for automated trading, hedging, prediction, and
              performance tracking. With its 38 powerful features, real-time
              intelligence, and compatibility across India's leading brokers, it
              transforms trading into a smarter, faster, and safer experience.
            </p>
          </div>

          {/* Back */}
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
    </div>
  );
};

export default Essentials;
