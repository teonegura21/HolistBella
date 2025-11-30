import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieConsent } from "@/components/ui/cookie-consent";
import LeadMagnet from "@/components/ui/lead-magnet";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";
import Home from "@/pages/home";
import DespreNoiPage from "@/pages/despre-noi";
import PreturiPage from "@/pages/preturi-si-abonamente";
import ResursePage from "@/pages/resurse";
import ProgramariPage from "@/pages/programari";
import ContactPage from "@/pages/contact";
import TerapieBowenPage from "@/pages/terapie-bowen";
import BiorezonantaPage from "@/pages/biorezonanta";
import HealyPage from "@/pages/healy";
import ApaKangenPage from "@/pages/apa-kangen";
import AndullationPage from "@/pages/andullation";
import NutritieCelularaPage from "@/pages/nutritie-celulara";
import TestimonialePage from "@/pages/testimoniale";
import ServiciiPage from "@/pages/servicii";
import AlteServiciiPage from "@/pages/alte-servicii";
import NotFound from "@/pages/not-found";

function Router() {
  useAnalytics();
  const [location] = useLocation();

  // Scroll la început la fiecare schimbare de pagină
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/despre" component={DespreNoiPage} />
      <Route path="/despre-noi" component={DespreNoiPage} />
      <Route path="/preturi-si-abonamente" component={PreturiPage} />
      <Route path="/resurse" component={ResursePage} />
      <Route path="/programari" component={ProgramariPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/servicii" component={ServiciiPage} />
      <Route path="/terapie-bowen" component={TerapieBowenPage} />
      <Route path="/biorezonanta" component={BiorezonantaPage} />
      <Route path="/healy" component={HealyPage} />
      <Route path="/apa-kangen" component={ApaKangenPage} />
      <Route path="/andullation" component={AndullationPage} />
      <Route path="/nutritie-celulara" component={NutritieCelularaPage} />
      <Route path="/testimoniale" component={TestimonialePage} />
      <Route path="/alte-servicii" component={AlteServiciiPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
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
        <LeadMagnet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
