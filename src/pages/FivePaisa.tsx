import PlatformDetail from "@/components/PlatformDetail";

const FivePaisa = () => {
  return (
    <PlatformDetail
      name="5Paisa"
      api="XtreamAPI"
      description="Fully optimized for the 5paisa platform, this Algo Trading Software stands out by offering smooth and hassle-free integration to run algo strategies on 5paisa's platform. What truly sets this software apart is its intelligent automatic connectivity to 5paisa, eliminating the need for tedious two-way verifications."
      features={[
        "Seamless integration with XtreamAPI",
        "Intelligent automatic connectivity",
        "Comprehensive market access",
        "Real-time data and order execution",
        "Advanced technical indicators",
        "AI-powered signal detection",
        "Full manual control capability",
        "Fast execution engine",
        "Portfolio tracking and management",
        "Risk management automation",
      ]}
      size="1.5 GB"
      segments={["NSE", "F&O", "MCX"]}
      keyFeatures={[
        {
          title: "XtreamAPI Integration",
          description:
            "Purpose-built for 5paisa's XtreamAPI, ensuring seamless connectivity and optimal performance for all trading activities.",
        },
        {
          title: "Smart Auto-Connect",
          description:
            "Eliminate verification hassles with our intelligent auto-connectivity feature, saving time and boosting profitability.",
        },
        {
          title: "Complete Market Coverage",
          description:
            "Access NSE equities, Futures & Options, and MCX commodities with comprehensive support across all segments.",
        },
      ]}
      downloadLink="https://form.jotform.com/252822152070447"
    />
  );
};

export default FivePaisa;
