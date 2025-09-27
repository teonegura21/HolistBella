import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";
import Home from "@/pages/home";
import ApaKangenPage from "@/pages/apa-kangen";
import BiorezonantaPage from "@/pages/biorezonanta";
import TerapieBowenPage from "@/pages/terapie-bowen";
import NutritieCelularaPage from "@/pages/nutritie-celulara";


import AndullationPage from "@/pages/andullation";
import HealyPage from "@/pages/healy";
import AlteServiciiPage from "@/pages/alte-servicii";
import DrenajaLimfaticPage from "@/pages/drenaj-limfatic";
import HidroterapiePage from "@/pages/hidroterapie";
import AromaterapiePage from "@/pages/aromaterapie";
import HaloterapiePage from "@/pages/haloterapie";
import InfrarosuPage from "@/pages/infrarosu";
import ReflexologiePage from "@/pages/reflexologie";
import ProgramarePage from "@/pages/programare";
import DesprePage from "@/pages/despre";
import TestimonialePage from "@/pages/testimoniale";
import NotFound from "@/pages/not-found";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/apa-kangen" component={ApaKangenPage} />
      <Route path="/biorezonanta" component={BiorezonantaPage} />
      <Route path="/terapie-bowen" component={TerapieBowenPage} />
      <Route path="/nutritie-celulara" component={NutritieCelularaPage} />


      <Route path="/andullation" component={AndullationPage} />
      <Route path="/healy" component={HealyPage} />
      <Route path="/drenaj-limfatic" component={DrenajaLimfaticPage} />
      <Route path="/hidroterapie" component={HidroterapiePage} />
      <Route path="/aromaterapie" component={AromaterapiePage} />
      <Route path="/haloterapie" component={HaloterapiePage} />
      <Route path="/infrarosu" component={InfrarosuPage} />
      <Route path="/reflexologie" component={ReflexologiePage} />
      <Route path="/alte-servicii" component={AlteServiciiPage} />
      <Route path="/programare" component={ProgramarePage} />
      <Route path="/despre" component={DesprePage} />
      <Route path="/testimoniale" component={TestimonialePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics only after consent (handled by CookieConsent component)
  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'accepted') {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen">
          <Navbar />
          <Router />
          <Footer />
          <FloatingWhatsApp />
        </div>
        <Toaster />
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
