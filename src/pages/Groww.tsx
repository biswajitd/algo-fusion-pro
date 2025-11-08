import PlatformDetail from "@/components/PlatformDetail";

const Groww = () => {
  return (
    <PlatformDetail
      name="Groww"
      api="Trading API"
      description="Fully optimized for the Groww platform, this Algo Trading Software stands out by offering smooth and hassle-free integration to run algo strategies on Groww's platform. What truly sets this software apart is its intelligent automatic connectivity to Groww, eliminating the need for tedious two-way verifications."
      features={[
        "Seamless integration with Groww Trading API",
        "Intelligent automatic connectivity feature",
        "Compatible with NSE and F&O segments",
        "Real-time market data and execution",
        "Advanced technical indicators built-in",
        "AI-driven signal detection system",
        "Full manual control when needed",
        "Professional order management",
        "Risk management and stop-loss automation",
        "Portfolio tracking and analytics",
      ]}
      size="1.9 GB"
      segments={["NSE", "F&O"]}
      keyFeatures={[
        {
          title: "Smart Auto-Connectivity",
          description:
            "Effortlessly connect to Groww without manual verification steps, saving time and boosting efficiency.",
        },
        {
          title: "NSE & F&O Support",
          description:
            "Trade equities and derivatives with comprehensive support for both NSE cash and Futures & Options segments.",
        },
        {
          title: "Professional Analytics",
          description:
            "Get sharp, real-time insights with advanced indicators and AI predictions to make confident trading decisions.",
        },
      ]}
      limitations="Note: Access to Groww Trading API requires a paid subscription. MCX commodity trading is not available as Groww's API does not currently support this segment."
      downloadLink="https://www.jotform.com/build/253095948424466"
    />
  );
};

export default Groww;
