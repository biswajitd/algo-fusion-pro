import PlatformDetail from "@/components/PlatformDetail";

const Upstox = () => {
  return (
    <PlatformDetail
      name="Upstox"
      api="Native API"
      description="Fully optimized for the Upstox platform, this Algo Trading Software stands out by offering smooth and hassle-free integration to run algo strategies on Upstox's platform. What truly sets this software apart is its intelligent automatic connectivity to Upstox & its Native API, eliminating the need for tedious two-way verifications."
      features={[
        "Native API integration for optimal performance",
        "Intelligent automatic connectivity",
        "Multi-market trading support",
        "Real-time data feeds and execution",
        "Advanced technical analysis tools",
        "AI-driven trading signals",
        "Full manual control available",
        "High-performance order routing",
        "Advanced risk management features",
        "Real-time portfolio analytics",
      ]}
      size="1.2 GB"
      segments={["NSE", "F&O"]}
      keyFeatures={[
        {
          title: "Native API Advantage",
          description:
            "Built on Upstox's Native API for maximum performance, stability, and feature access without any compromise.",
        },
        {
          title: "Lightweight Installation",
          description:
            "At just 1.2 GB, this is our most compact version while maintaining full functionality and performance.",
        },
        {
          title: "Auto-Connect System",
          description:
            "Smart connectivity eliminates manual verification steps, streamlining your trading workflow from day one.",
        },
      ]}
      downloadLink="https://form.jotform.com/biswajitdvc/upstox-customer-registration-form"
    />
  );
};

export default Upstox;
