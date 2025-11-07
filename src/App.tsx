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
          <Route path="/zerodha" element={<Zerodha />} />
          <Route path="/groww" element={<Groww />} />
          <Route path="/angel-one" element={<AngelOne />} />
          <Route path="/upstox" element={<Upstox />} />
          <Route path="/5paisa" element={<FivePaisa />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
