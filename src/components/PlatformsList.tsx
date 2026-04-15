import { useState, useRef, useEffect } from "react";
import PlatformCard from "./PlatformCard";

const PlatformsList = () => {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const videoLinks = [
    { label: "Bengali", url: "https://www.youtube.com/watch?v=y7O2BNodoag" },
    { label: "Hindi", url: "https://www.youtube.com/watch?v=H6nxpLD2OLI" },
    { label: "English", url: "https://youtu.be/CyfcZ5ZXOvU" },
  ];
  const platforms = [
    {
      name: "Zerodha",
      api: "KiteConnect API",
      description:
        "Intelligent automatic connectivity to Zerodha, eliminating tedious two-way verifications. Supports NSE, F&O, and MCX for commodity trading until 11:30 PM.",
      features: [
        "Seamless KiteConnect API integration",
        "Auto-connect without 2FA hassle",
        "NSE, F&O, and MCX support",
        "Extended trading hours (Mon-Fri till 11:30 PM)",
        "Real-time execution and monitoring",
      ],
      size: "2.7 GB",
      link: "/zerodha",
      downloadLink: "https://form.jotform.com/biswajitdvc/zerodha-customer-registration-form",
    },
    {
      name: "Groww",
      api: "Trading API",
      description:
        "Fully optimized for Groww platform with smooth integration. Currently supports NSE and F&O segments with intelligent auto-connectivity.",
      features: [
        "Smooth Groww API integration",
        "Automatic connectivity feature",
        "NSE and F&O segment support",
        "Professional trading interface",
        "Advanced risk management",
      ],
      size: "2.7 GB",
      link: "/groww",
      downloadLink: "https://form.jotform.com/253095948424466",
      limitations: "Note: Groww Trading API requires paid subscription for access.",
    },
    {
      name: "Angel One",
      api: "SmartAPI",
      description:
        "Optimized for Angel One platform with SmartAPI integration. Eliminates two-way verification hassles for seamless trading experience.",
      features: [
        "SmartAPI integration",
        "Auto-connect with Angel One",
        "Multi-segment trading support",
        "Intelligent signal processing",
        "Real-time market data",
      ],
      size: "2.1 GB",
      link: "/angel-one",
      downloadLink: "https://form.jotform.com/biswajitdvc/angle-customer-registration-form",
    },
    {
      name: "Upstox",
      api: "Native API",
      description:
        "Fully optimized for Upstox platform with native API integration. Provides intelligent automatic connectivity for hassle-free trading.",
      features: [
        "Native API integration",
        "Auto-connectivity feature",
        "Multi-market support",
        "Advanced order management",
        "Professional analytics",
      ],
      size: "2.1 GB",
      link: "/upstox",
      downloadLink: "https://form.jotform.com/biswajitdvc/upstox-customer-registration-form",
    },
    {
      name: "5Paisa",
      api: "XtreamAPI",
      description:
        "Optimized for 5paisa platform with XtreamAPI. Smart auto-connectivity eliminates verification hassles for efficient trading operations.",
      features: [
        "XtreamAPI integration",
        "Automatic connectivity",
        "Comprehensive market access",
        "Fast execution engine",
        "Real-time portfolio tracking",
      ],
      size: "2.1 GB",
      link: "/5paisa",
      downloadLink: "https://form.jotform.com/252822152070447",
    },
  ];

  return (
    <section id="platforms" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold mb-4">
    Choose Your{" "}
    <span className="bg-gradient-primary bg-clip-text text-transparent">
      Trading Platform
    </span>
  </h2>

  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
    Optimized versions for all major Indian trading platforms with seamless integration
  </p>

  <div className="mt-6 relative inline-block" ref={menuRef}>
    <button
      onClick={() => setShowLangMenu(!showLangMenu)}
      className="
        bg-gradient-to-r from-blue-600 to-teal-400
        text-white font-semibold text-lg
        px-8 py-4 rounded-xl shadow-xl
        hover:scale-105 hover:shadow-2xl
        transition-all duration-300
      "
    >
      🎥 Watch Video Tutorial
    </button>
    {showLangMenu && (
      <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 rounded-lg border border-border bg-card shadow-lg z-50 overflow-hidden">
        {videoLinks.map((item) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowLangMenu(false)}
            className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    )}
  </div>
</div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <PlatformCard key={index} {...platform} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsList;
