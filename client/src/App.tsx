import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import Home from "@/pages/home";
import ApaKangenPage from "@/pages/apa-kangen";
import BiorezonantaPage from "@/pages/biorezonanta";
import AndullationPage from "@/pages/andullation";
import HealyPage from "@/pages/healy";
import AlteServiciiPage from "@/pages/alte-servicii";
import DesprePage from "@/pages/despre";
import NotFound from "@/pages/not-found";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/apa-kangen" component={ApaKangenPage} />
      <Route path="/biorezonanta" component={BiorezonantaPage} />
      <Route path="/andullation" component={AndullationPage} />
      <Route path="/healy" component={HealyPage} />
      <Route path="/alte-servicii" component={AlteServiciiPage} />
      <Route path="/despre" component={DesprePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
