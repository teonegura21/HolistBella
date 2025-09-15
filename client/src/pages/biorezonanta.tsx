import { Waves, Brain, Shield, Zap, Award, Activity, Search, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/ui/seo';
import { useAnalytics } from '@/hooks/use-analytics';
import { trackEvent } from '@/lib/analytics';
import { CONTACT_INFO } from '@/lib/constants';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import FloatingWhatsApp from '@/components/ui/floating-whatsapp';
import { Link } from 'wouter';

export default function BiorezonantaPage() {
  useAnalytics();

  const handleContactClick = () => {
    trackEvent('bioresonance_contact_click', 'service_page', 'schedule_consultation');
  };

  const scrollToSection = (sectionId: string) => {
    // Navigate to home page contact section
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const principii = [
    {
      icon: Waves,
      title: "Frecvențe Bioenergetice",
      description: "Detectarea și analiza undelor electromagnetice emise de celule și organe pentru identificarea dezechilibrelor energetice."
    },
    {
      icon: Search,
      title: "Diagnostic Energetic", 
      description: "Evaluarea stării de sănătate prin măsurarea răspunsurilor bioenergetice ale organismului la diverse frecvențe."
    },
    {
      icon: RefreshCw,
      title: "Rebalansare Frecvențială",
      description: "Corectarea frecvențelor alterate prin aplicarea de semnale electromagnetice specifice pentru restaurarea echilibrului."
    },
    {
      icon: Activity,
      title: "Monitorizare Continuă",
      description: "Urmărirea răspunsului organismului în timp real și ajustarea parametrilor terapeutici pentru eficiență optimă."
    }
  ];

  const cercetari = [
    {
      an: "2021",
      tip: "Studiu Controlat",
      participanti: "80 pacienți",
      conditie: "Depresie Ușoară-Moderată",
      rezultate: "Îmbunătățiri în scorurile de depresie într-un studiu mic (p<0.0001), scorul Hamilton redus cu 3.1 puncte",
      sursa: "Complementary Medicine Research",
      credibilitate: "pozitiv"
    },
    {
      an: "2014", 
      tip: "Studiu Placebo-Controlat",
      participanti: "190 fumători",
      conditie: "Sevraj Tutun",
      rezultate: "77.2% au renunțat la fumat după o săptămână vs. 54.8% placebo",
      sursa: "Research in Complementary Medicine",
      credibilitate: "pozitiv"
    },
    {
      an: "2024",
      tip: "Studiu Pilot Observațional", 
      participanti: "Variable",
      conditie: "Sindrom Colon Iritabil + Durere Lombară",
      rezultate: "Îmbunătățiri în durerea cronică lombară asociată cu SCI",
      sursa: "MDPI Journal",
      credibilitate: "preliminar"
    },
    {
      an: "2009",
      tip: "Analiză Retrospectivă",
      participanti: "200 pacienți",
      conditie: "Alergii Multiple",
      rezultate: "50.4% fără simptome, 34.1% îmbunătățiri, însă lipsă grup de control",
      sursa: "European Journal Integrative Medicine",
      credibilitate: "limitat"
    }
  ];

  const limitari = [
    {
      institutie: "Memorial Sloan Kettering",
      pozitie: "Nici o evidență nu susține aceste afirmații",
      context: "Centru de Cercetare în Cancer"
    },
    {
      institutie: "UK Advertising Standards Authority",
      pozitie: "Lipsă metodologie adecvată în studiile prezentate",
      context: "Autoritate de Reglementare"
    },
    {
      institutie: "Federal Trade Commission (SUA)",
      pozitie: "A dat în judecată producători pentru afirmații nesubstantiate",
      context: "Agenție Guvernamentală"
    },
    {
      institutie: "European Medical Guidelines",
      pozitie: "Nu recomandă biorezonanța pentru dermatita atopică",
      context: "Ghiduri Medicale Europene"
    }
  ];

  const intrebariFrec = [
    {
      q: "Ce este biorezonanța și cum funcționează?",
      a: "Biorezonanța se bazează pe teoria că celulele bolnave emit unde electromagnetice alterate. Dispozitivele detectează aceste unde prin electrozi plasați pe piele și încearcă să le corecteze. Totuși, această teorie nu este acceptată de medicina convențională."
    },
    {
      q: "Există studii științifice care să susțină eficacitatea?",
      a: "Există câteva studii mici cu rezultate pozitive pentru depresie și sevraj tutun, dar majoritatea instituțiilor medicale majore consideră că evidența este insuficientă. Studiile sunt de obicei mici și necesită replicare."
    },
    {
      q: "Este sigură terapia cu biorezonanță?",
      a: "Studiile disponibile nu au raportat efecte adverse semnificative, fiind considerată în general sigură și nedureroasă. Totuși, nu trebuie să înlocuiască tratamentul medical convențional pentru afecțiuni grave."
    },
    {
      q: "De ce există scepticism în comunitatea medicală?",
      a: "Scepticismul provine din lipsa studiilor mari, controlate și reproductibile. Multe afirmații nu au fost dovedite științific, iar mecanismul propus contrazice principiile fiziologice acceptate."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <SEO
        title="Biorezonanță Magnetică - Terapie Energetică și Diagnostic | Holist Bella"
        description="Descoperă terapia de biorezonanță magnetică în Iași. Analizez cercetările asupra diagnosticului energetic și terapiei prin frecvențe. Consultație gratuită și transparentă."
        keywords="biorezonanță, terapie magnetică, diagnostic energetic, frecvențe terapeutice, medicina energetică, Iași"
      />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge 
                  variant="outline" 
                  className="bg-white/20 text-white border-white/30 mb-4"
                  data-testid="badge-bioresonance"
                >
                  ⚡ Terapie Bioenergetică
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Biorezonanță <span className="text-indigo-200">Magnetică</span>
                </h1>
                
                <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                  Explorează terapia prin frecvențe bioenergetice și diagnosticul electromagnetic. 
                  Analizăm cercetările disponibile și limitările metodei într-un mod transparent și onest.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => {
                      handleContactClick();
                      scrollToSection("contact");
                    }}
                    className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold shadow-xl"
                    data-testid="button-schedule-consultation-hero"
                  >
                    Consultație Informativă Gratuită
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                    data-testid="button-call-now-hero"
                  >
                    <a href={`tel:${CONTACT_INFO.phone}`}>
                      Sună Acum: {CONTACT_INFO.phone}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="lg:text-right">
                <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <Waves className="w-32 h-32 text-indigo-200 mx-auto lg:ml-auto" />
                  <div className="mt-6 text-center lg:text-right">
                    <div className="text-2xl font-bold text-white">Frecvențe Bioenergetice</div>
                    <div className="text-purple-200">Diagnostic și Rebalansare</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principii de Funcționare */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Principiile Biorezonanței
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Biorezonanța se bazează pe teoria că organismul emite frecvențe electromagnetice specifice.
                Înțelegerea acestor principii este esențială pentru evaluarea critică a metodei.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principii.map((principiu, index) => (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white"
                  data-testid={`principle-card-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <principiu.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{principiu.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {principiu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cercetări și Evidențe */}
        <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cercetări și Evidențe Științifice
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Prezentăm studiile disponibile cu transparență asupra limitărilor și 
                scepticismului din comunitatea medicală mainstream.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {cercetari.map((studiu, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300"
                  data-testid={`research-card-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge 
                        variant="outline" 
                        className={`
                          ${studiu.credibilitate === 'pozitiv' ? 'text-green-600 border-green-200' : 
                            studiu.credibilitate === 'preliminar' ? 'text-yellow-600 border-yellow-200' :
                            'text-orange-600 border-orange-200'}
                        `}
                      >
                        {studiu.an}
                      </Badge>
                      <div className="text-sm text-gray-500">
                        {studiu.participanti}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2">{studiu.tip}</h3>
                    <div className="text-sm font-medium text-purple-600 mb-2">
                      {studiu.conditie}
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">{studiu.rezultate}</p>
                    <div className="text-xs text-gray-500">
                      Sursa: {studiu.sursa}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Limitări și Scepticism */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Limitări și Scepticismul Comunității Medicale
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparența este fundamentală. Prezentăm pozițiile instituțiilor medicale majore
                și limitările cercetărilor disponibile.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {limitari.map((limitare, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 border-l-4 border-orange-400"
                  data-testid={`limitation-card-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Shield className="w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{limitare.institutie}</h3>
                        <p className="text-gray-700 mb-2 italic">"{limitare.pozitie}"</p>
                        <div className="text-sm text-orange-600 font-medium">
                          {limitare.context}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">
                    Transparență și Responsabilitate
                  </h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    <strong>Poziție echilibrată:</strong> Deși există studii mici cu rezultate pozitive, 
                    majoritatea instituțiilor medicale majore (Memorial Sloan Kettering, FDA, autoritățile europene) 
                    consideră că evidența este insuficientă. Biorezonanța nu trebuie să înlocuiască niciodată 
                    tratamentul medical convențional pentru afecțiuni grave. Sunt necesare studii mai mari, 
                    controlate și reproductibile pentru a stabili eficacitatea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Întrebări Frecvente */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Întrebări Frecvente
              </h2>
              <p className="text-xl text-gray-600">
                Răspunsuri oneste bazate pe cercetările disponibile și poziția comunității medicale
              </p>
            </div>

            <div className="space-y-6">
              {intrebariFrec.map((item, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-md transition-all duration-300"
                  data-testid={`faq-card-${index}`}
                >
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">
                      {item.q}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Dorești Informații Transparente Despre Biorezonanță?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Programează o consultație informativă gratuită în care discutăm 
              onest despre posibilitățile și limitările biorezonanței în contextul nevoilor tale de sănătate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  handleContactClick();
                  scrollToSection("contact");
                }}
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold shadow-xl"
                data-testid="button-schedule-consultation-cta"
              >
                Consultație Informativă Gratuită
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                data-testid="button-whatsapp-cta"
              >
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp Direct
                </a>
              </Button>
            </div>

            <div className="mt-8 text-sm text-purple-100">
              ✨ Consultația este complet gratuită și informativă • 📞 Răspundem în maxim 2 ore
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}