import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { supabase } from "./lib/supabase";

import Index from "./pages/Index";
import Colleges from "./pages/Colleges";
import Partners from "./pages/Partners";
import Waitlist from "./pages/Waitlist";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.auth.getSession();

      console.log("✅ Supabase Connected");
      console.log("Session:", data.session);

      if (error) {
        console.error("Supabase Error:", error);
      }
    }

    testConnection();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/waitlist" element={<Waitlist />} />

            {/* Legacy Routes */}
            <Route path="/schools" element={<Colleges />} />
            <Route path="/universities" element={<Partners />} />
            <Route path="/demo" element={<Waitlist />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;