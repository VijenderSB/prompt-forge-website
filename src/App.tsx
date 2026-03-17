import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CostPage from "./pages/CostPage";
import FAQPage from "./pages/FAQPage";
import WhyUsPage from "./pages/WhyUsPage";
import CandidatePage from "./pages/CandidatePage";
import EyeAnatomyPage from "./pages/EyeAnatomyPage";
import CommonVisionProblemsPage from "./pages/CommonVisionProblemsPage";
import WhatIsLasikPage from "./pages/WhatIsLasikPage";
import LasikMythsPage from "./pages/LasikMythsPage";
import UnfitLasikPage from "./pages/UnfitLasikPage";
import RiskRecoveryPage from "./pages/RiskRecoveryPage";
import WhichLasikPage from "./pages/WhichLasikPage";
import CentresPage from "./pages/CentresPage";
import CentreDetailPage from "./pages/CentreDetailPage";
import ProcedureHubPage from "./pages/ProcedureHubPage";
import BlogPage from "./pages/BlogPage";
import InternationalGuidelinesPage from "./pages/InternationalGuidelinesPage";
import LasikTechnologyPage from "./pages/LasikTechnologyPage";
import { StateHubPage, CityHubPage, LocalityHubPage, ProcedureCityPage } from "./pages/GeoPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cost" element={<CostPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/am-i-a-candidate" element={<CandidatePage />} />
          <Route path="/eye-anatomy" element={<EyeAnatomyPage />} />
          <Route path="/common-vision-problems" element={<CommonVisionProblemsPage />} />
          <Route path="/what-is-lasik" element={<WhatIsLasikPage />} />
          <Route path="/lasik-myths-vs-facts" element={<LasikMythsPage />} />
          <Route path="/unfit-for-lasik" element={<UnfitLasikPage />} />
          <Route path="/risk-recovery" element={<RiskRecoveryPage />} />
          <Route path="/which-lasik-is-best" element={<WhichLasikPage />} />
          <Route path="/centres" element={<CentresPage />} />
          <Route path="/centres/:slug" element={<CentreDetailPage />} />
          <Route path="/procedures/:slug" element={<ProcedureHubPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/international-guidelines" element={<InternationalGuidelinesPage />} />
          <Route path="/lasik-technology" element={<LasikTechnologyPage />} />
          <Route path="/:state" element={<StateHubPage />} />
          <Route path="/:state/:city" element={<CityHubPage />} />
          <Route path="/:state/:city/:locality" element={<LocalityHubPage />} />
          <Route path="/:state/:city/:locality/:procedure" element={<ProcedureCityPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
