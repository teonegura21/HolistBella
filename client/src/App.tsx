import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import Home from "@/pages/home";
import ApaKangenPage from "@/pages/apa-kangen";
import BiorezonantaPage from "@/pages/biorezonanta";
import TerapieBowenPage from "@/pages/terapie-bowen";
import NutritieCelularaPage from "@/pages/nutritie-celulara";
import TerapieReikiPage from "@/pages/terapie-reiki";
import DetoxifiereNaturalaPage from "@/pages/detoxifiere-naturala";
import AndullationPage from "@/pages/andullation";
import HealyPage from "@/pages/healy";
import AlteServiciiPage from "@/pages/alte-servicii";
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
      <Route path="/terapie-reiki" component={TerapieReikiPage} />
      <Route path="/detoxifiere-naturala" component={DetoxifiereNaturalaPage} />
      <Route path="/andullation" component={AndullationPage} />
      <Route path="/healy" component={HealyPage} />
      <Route path="/alte-servicii" component={AlteServiciiPage} />
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
        <Toaster />
        <Router />
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
