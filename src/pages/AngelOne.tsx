import PlatformDetail from "@/components/PlatformDetail";

const AngelOne = () => {
  return (
    <PlatformDetail
      name="Angel One"
      api="SmartAPI"
      description="Fully optimized for the Angel One platform, this Algo Trading Software stands out by offering smooth and hassle-free integration to run algo strategies on Angel One's platform. What truly sets this software apart is its intelligent automatic connectivity to Angel One & SmartAPI, eliminating the need for tedious two-way verifications."
      features={[
        "Seamless integration with SmartAPI",
        "Intelligent automatic connectivity",
        "Multi-segment trading support (NSE, F&O, MCX)",
        "Real-time market data streaming",
        "Advanced charting with technical indicators",
        "AI-powered trade signal generation",
        "Complete manual override capability",
        "High-speed order execution engine",
        "Comprehensive risk management",
        "Portfolio and P&L tracking",
      ]}
      size="1.9 GB"
      segments={["NSE", "F&O", "MCX"]}
      keyFeatures={[
        {
          title: "SmartAPI Integration",
          description:
            "Built specifically for Angel One's SmartAPI, ensuring optimal performance and reliability for all trading operations.",
        },
        {
          title: "Hassle-Free Connectivity",
          description:
            "Auto-connect feature eliminates repeated verification steps, letting you focus on trading strategy rather than technical setup.",
        },
        {
          title: "Comprehensive Market Access",
          description:
            "Trade across NSE equities, Futures & Options, and MCX commodities all from a single integrated platform.",
        },
      ]}
    />
  );
};

export default AngelOne;
