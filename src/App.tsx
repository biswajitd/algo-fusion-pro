import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Zerodha from "./pages/Zerodha";
import Groww from "./pages/Groww";
import AngelOne from "./pages/AngelOne";
import Upstox from "./pages/Upstox";
import FivePaisa from "./pages/FivePaisa";
import SuccessStories from "./pages/SuccessStories";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Platforms from "./pages/Platforms";
import SoftwareFeatures from "./pages/SoftwareFeatures";
import Documentation from "./pages/Documentation";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/zerodha" element={<Zerodha />} />
          <Route path="/groww" element={<Groww />} />
          <Route path="/angel-one" element={<AngelOne />} />
          <Route path="/upstox" element={<Upstox />} />
          <Route path="/5paisa" element={<FivePaisa />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/software-features" element={<SoftwareFeatures />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
