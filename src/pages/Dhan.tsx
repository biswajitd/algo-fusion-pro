import PlatformDetail from "@/components/PlatformDetail";

const Dhan = () => {
  return (
    <PlatformDetail
      name="Dhan"
      api="DhanHQ Trading API"
      description="Purpose-built for the Dhan platform, this Algo Trading Software delivers ultra-low-latency execution through the DhanHQ Trading API. Its intelligent auto-connectivity keeps your session alive without repeated two-way verifications, so your strategies stay live from the first tick to the last."
      features={[
        "Seamless integration with the DhanHQ Trading API",
        "No additional API subscription is required with Dhan",
        "Intelligent automatic connectivity — no 2FA hassle",
        "Compatible with NSE, F&O and MCX segments",
        "Real-time market data streaming and order execution",
        "Paper Mode trading for Basic Strategies",
        "Advanced indicators: MACD, RSI, Bollinger Bands",
        "AI-powered signal detection and predictions",
        "Full manual override capability at any time",
        "Ultra-fast, low-latency order routing",
        "Professional risk management and stop-loss automation",
        "Portfolio and P&L tracking in real time",
      ]}
      size="3 GB"
      segments={["NSE", "F&O", "MCX"]}
      keyFeatures={[
        {
          title: "DhanHQ API Advantage",
          description:
            "Built directly on Dhan's high-performance trading API for rapid order placement, accurate fills and rock-solid stability during volatile sessions.",
        },
        {
          title: "Zero-Friction Connectivity",
          description:
            "Smart auto-login removes repetitive verification steps, letting you start the trading day in seconds instead of minutes.",
        },
        {
          title: "Complete Market Coverage",
          description:
            "Trade NSE equities, Futures & Options and MCX commodities from one unified, professional-grade interface.",
        },
      ]}
      downloadLink="https://drive.google.com/file/d/1-fHwG7IbDh8TsFxXUkyaOfmu5v_40JIE/view?usp=drive_link"
    />
  );
};

export default Dhan;
