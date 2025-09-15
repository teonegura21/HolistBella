import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { initGA } from "@/lib/analytics";
import { X, Cookie, Shield } from "lucide-react";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
      setTimeout(() => setIsVisible(true), 500);
    } else if (consent === 'accepted') {
      initGA();
    }

    // Listen for cookie preferences reopening
    const handleOpenPreferences = () => {
      setShowConsent(true);
      setTimeout(() => setIsVisible(true), 100);
    };

    window.addEventListener('openCookiePreferences', handleOpenPreferences);
    return () => window.removeEventListener('openCookiePreferences', handleOpenPreferences);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    setTimeout(() => {
      setShowConsent(false);
      initGA();
    }, 300);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
    setTimeout(() => setShowConsent(false), 300);
  };

  if (!showConsent) return null;

  return (
    <div className={`fixed bottom-4 left-4 right-4 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <Card className="shadow-2xl border-2 border-primary/20 bg-white/95 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Protecția Datelor Personale
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Utilizăm cookie-uri și Google Analytics pentru a îmbunătăți experiența ta pe site și a înțelege 
                cum folosești serviciile noastre. Datele sunt procesate conform GDPR și nu partajăm informații 
                personale cu terțe părți.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={acceptCookies}
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                  data-testid="button-accept-cookies"
                >
                  Accept Toate Cookie-urile
                </Button>
                <Button 
                  onClick={declineCookies}
                  variant="outline"
                  size="sm"
                  data-testid="button-decline-cookies"
                >
                  Doar Cookie-uri Esențiale
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-2">
                Poți modifica preferințele oricând din{" "}
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('openCookiePreferences'))}
                  className="text-primary underline hover:no-underline"
                  data-testid="link-cookie-preferences"
                >
                  setările cookie-urilor
                </button>.
              </p>
            </div>
            
            <Button
              onClick={declineCookies}
              variant="ghost"
              size="sm"
              className="flex-shrink-0"
              data-testid="button-close-consent"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}