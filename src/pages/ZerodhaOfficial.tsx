import PlatformDetail from "@/components/PlatformDetail";

const ZerodhaOfficial = () => {
  return (
    <PlatformDetail
      name="Zerodha – on Official API"
      api="Official KiteConnect API"
      description="Fully optimized for the Zerodha platform, this Algo Trading Software stands out by offering smooth and hassle-free integration to run algo strategies on Zerodha's platform. What truly sets this software apart is its intelligent automatic connectivity to Zerodha, eliminating the need for tedious two-way verifications."
      features={[
        "Based on Official KiteConnect API — fully compliant with Zerodha Terms & Conditions",
        "A subscription fee of Rs. 500 per month is required to use this API with Zerodha",
        "Seamless integration with KiteConnect API",
        "Intelligent automatic connectivity without 2FA hassles",
        "Compatible with NSE, F&O, and MCX segments",
        "Extended trading hours: Monday to Friday until 11:55 PM for Crude Oil and Natural Gas but depends on Daylight Saving Time (DST) adjustments",
        "Complete Paper Mode trading for all Strategies",
        "Real-time execution and portfolio monitoring",
        "Advanced indicators: MACD, RSI, Bollinger Bands",
        "AI-powered signal detection and predictions",
        "Full manual override capability at any time",
        "Ultra-fast order execution engine",
        "Professional risk management tools",
      ]}
      size="1.9 GB"
      segments={["NSE", "F&O", "MCX"]}
      keyFeatures={[
        {
          title: "No Two-Factor Authentication Hassle",
          description:
            "Our intelligent system automatically handles connectivity, saving you time and eliminating the frustration of repeated verifications.",
        },
        {
          title: "Multi-Market Support",
          description:
            "Trade across NSE equities, Futures & Options, and MCX commodities with a single integrated platform.",
        },
        {
          title: "Extended Trading Hours",
          description:
            "Take advantage of commodity trading on MCX with support until 11:30 PM from Monday to Friday.",
        },
      ]}
      downloadLink="https://form.jotform.com/261336490212450"
    />
  );
};

export default ZerodhaOfficial;
