import { Waves, Activity, Shield, Zap, Award, Heart, Search, Users, Clock } from 'lucide-react';
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

export default function AndullationPage() {
  useAnalytics();

  const handleContactClick = () => {
    trackEvent('andullation_contact_click', 'service_page', 'schedule_consultation');
  };

  const handleCallClick = () => {
    trackEvent('andullation_call_click', 'service_page', 'phone_call');
  };

  const handleWhatsAppClick = () => {
    trackEvent('andullation_whatsapp_click', 'service_page', 'whatsapp_message');
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
      title: "Vibrații Multidirecționale",
      description: "Tehnologia unică de vibrații în frecvențe de 5-40 Hz cu amplitudine variabilă pentru stimularea profundă a țesuturilor."
    },
    {
      icon: Activity,
      title: "Stimulare Neuro-Musculară",
      description: "Activarea reflexelor naturale ale mușchilor pentru îmbunătățirea circulației și reducerea tensiunii musculare."
    },
    {
      icon: Heart,
      title: "Îmbunătățire Circulatorie",
      description: "Promovarea circulației sanguine și limfatice prin stimularea pompei musculare naturale."
    },
    {
      icon: Shield,
      title: "Terapie Non-Invazivă",
      description: "Abordare sigură și nedureroasă, fără efecte secundare semnificative raportate în studii."
    }
  ];

  const studiiCercetare = [
    {
      an: "2019",
      institutie: "Universitatea din Sevilla",
      tip: "Studiu Clinic",
      participanti: "50 participanți",
      durata: "5 zile (30 min/zi)",
      rezultate: "Pragul durerii crescut cu 34.48% (zona lombară), scăderea percepției subiective a durerii cu 52.3%, îmbunătățirea bunăstării cu 45.1%",
      parametri: "Frecvență: 5-40 Hz, Amplitudine: 2-8 mm",
      limitari: "Fără grup de control, finanțare parțială de la producător",
      credibilitate: "pozitiv-limitat"
    },
    {
      an: "2024",
      tip: "Studiu Controlat Randomizat",
      participanti: "44 pacienți",
      conditie: "Hernie Discală Cervicală",
      rezultate: "Reducerea durerii și îmbunătățirea funcției vs. terapia convențională singură",
      sursa: "Journal of Clinical Medicine",
      credibilitate: "pozitiv"
    },
    {
      an: "2023",
      tip: "Studiu Pilot - Stimulare Mecanică Multimodală",
      participanti: "20 pacienți",
      conditie: "Durere Lombară Acută/Cronică",
      rezultate: "Reducerea durerii cu 45-57% pe scala vizuală analogă (20 min ședințe, 50-200 Hz)",
      sursa: "Frontiers in Pain Research",
      credibilitate: "preliminar"
    },
    {
      an: "2023",
      tip: "Meta-Analiză Sistematică",
      participanti: "14 studii, 860 subiecți",
      conditie: "Durere Lombară Cronică",
      rezultate: "Îmbunătățiri semnificative în intensitatea durerii și indicii de dizabilitate",
      sursa: "Journal of Orthopaedic Surgery Research",
      credibilitate: "pozitiv"
    }
  ];

  const limitariCercetare = [
    {
      aspect: "Dimensiunea Studiilor",
      descriere: "Majoritatea studiilor au eșantioane mici (20-50 participanți), limitând generalizabilitatea rezultatelor",
      impact: "moderat"
    },
    {
      aspect: "Lipsa Standardizării",
      descriere: "Protocoale heterogene între studii - frecvențe, durate și intensități variabile",
      impact: "moderat"
    },
    {
      aspect: "Urmărire pe Termen Lung",
      descriere: "Date limitate despre efectele pe termen lung și durabilitatea beneficiilor",
      impact: "ridicat"
    },
    {
      aspect: "Grup de Control",
      descriere: "Unele studii importante lipsesc grupuri de control adecvate",
      impact: "ridicat"
    }
  ];

  const aplicatiiClinice = [
    {
      conditie: "Durere Lombară Cronică",
      nivel: "Evidență Moderată",
      studii: "Meta-analiză 2023",
      descriere: "Cel mai bine documentat - îmbunătățiri consistente în intensitatea durerii și funcționalitate"
    },
    {
      conditie: "Reabilitare Post-AVC",
      nivel: "Evidență Promițătoare", 
      studii: "Review sistematic 2025",
      descriere: "Reducerea spasticității și îmbunătățirea funcției motorii a membrelor superioare"
    },
    {
      conditie: "Drenaj Limfatic",
      nivel: "Evidență Preliminară",
      studii: "Studii pe animale + clinic lipedema",
      descriere: "Stimularea vaselor limfatice, eficacitate superioară când combinat cu drenaj manual"
    },
    {
      conditie: "Managementul Durerii",
      nivel: "Evidență Moderată",
      studii: "Teoria Gate Control",
      descriere: "Activarea interneuronilor inhibitori pentru reducerea percepției durerii"
    }
  ];

  const intrebariFrec = [
    {
      q: "Cum funcționează terapia Andullation?",
      a: "Andullation folosește vibrații multidirecționale (5-40 Hz) pentru a stimula reflexele musculare naturale. Aceasta activează pompa musculară, îmbunătățind circulația și reducând durerea prin teoria gate control - vibratiile blochează semnalele de durere către creier."
    },
    {
      q: "Ce dovezi științifice există pentru eficacitate?",
      a: "Studiul principal de la Universitatea din Sevilla (2019) cu 50 participanți a demonstrat reduceri de 52% în durere și îmbunătățiri de 45% în bunăstare. Meta-analiza din 2023 pe 860 subiecți confirmă beneficiile pentru durerea lombară cronică, deși studiile sunt încă relativ mici."
    },
    {
      q: "Este sigură terapia cu vibrații?",
      a: "Studiile nu au raportat efecte adverse grave. Este considerată sigură, mai ales în reabilitarea geriatrică. Totuși, ca orice terapie, necesită evaluare profesională pentru a determina adecvarea în cazuri specifice."
    },
    {
      q: "Care sunt limitările cercetării actuale?",
      a: "Principalele limitări includ studii cu eșantioane mici, lipsa standardizării protocoalelor, date limitate pe termen lung și câteva studii fără grupuri de control adecvate. Sunt necesare mai multe studii randomizate controlate pentru a stabili liniile directoare clinice definitive."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <SEO
        title="Andullation - Terapie prin Vibrații Multidirecționale | Holist Bella Iași"
        description="Descoperă terapia Andullation în Iași - vibrații terapeutice pentru durerea cronică, drenaj limfatic și reabilitare. Analiză științifică transparentă și consultație gratuită."
        keywords="Andullation, terapie vibrații, durere cronică, drenaj limfatic, vibrații terapeutice, stimulare neuro-musculară, Iași"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge 
                  variant="outline" 
                  className="bg-white/20 text-white border-white/30 mb-4"
                  data-testid="badge-andullation"
                >
                  🌊 Terapie prin Vibrații
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Terapie <span className="text-cyan-200">Andullation</span>
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Tehnologie avansată de vibrații multidirecționale pentru managementul durerii și îmbunătățirea circulației. 
                  Explorăm cercetările clinice și aplicațiile terapeutice cu transparență științifică.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => {
                      handleContactClick();
                      scrollToSection("contact");
                    }}
                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl"
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
                    onClick={handleCallClick}
                  >
                    <a href={`tel:${CONTACT_INFO.phone}`}>
                      Sună Acum: {CONTACT_INFO.phone}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="lg:text-right">
                <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <Waves className="w-32 h-32 text-cyan-200 mx-auto lg:ml-auto" />
                  <div className="mt-6 text-center lg:text-right">
                    <div className="text-2xl font-bold text-white">Vibrații Terapeutice</div>
                    <div className="text-blue-200">5-40 Hz Frecvență</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principii Tehnologice */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Principiile Tehnologiei Andullation
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Tehnologia patentată de vibrații multidirecționale activează mecanismele naturale de 
                vindecare ale organismului prin stimularea controlată și precisă.
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
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <principiu.icon className="w-6 h-6 text-blue-600" />
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

        {/* Cercetări Clinice */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cercetări Clinice și Evidențe Științifice
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Prezentăm studiile clinice disponibile cu transparență asupra limitărilor și 
                necesității pentru cercetări suplimentare.
              </p>
            </div>

            <div className="space-y-8">
              {studiiCercetare.map((studiu, index) => (
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
                            'text-blue-600 border-blue-200'}
                        `}
                      >
                        {studiu.an}
                      </Badge>
                      <div className="text-sm text-gray-500">
                        {studiu.participanti}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2">
                      {studiu.institutie || studiu.tip}
                    </h3>
                    
                    {studiu.conditie && (
                      <div className="text-sm font-medium text-blue-600 mb-2">
                        {studiu.conditie}
                      </div>
                    )}
                    
                    <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                      <strong>Rezultate:</strong> {studiu.rezultate}
                    </p>
                    
                    {studiu.parametri && (
                      <p className="text-gray-600 mb-2 text-sm">
                        <strong>Parametri:</strong> {studiu.parametri}
                      </p>
                    )}
                    
                    {studiu.limitari && (
                      <p className="text-orange-600 mb-2 text-sm">
                        <strong>Limitări:</strong> {studiu.limitari}
                      </p>
                    )}
                    
                    <div className="text-xs text-gray-500">
                      Sursa: {studiu.sursa || "Study publicat peer-reviewed"}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Limitări ale Cercetării */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Limitări ale Cercetării Actuale
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparența științifică necesită prezentarea limitărilor cercetării și 
                identificarea ariilor care necesită studii suplimentare.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {limitariCercetare.map((limitare, index) => (
                <Card 
                  key={index} 
                  className={`hover:shadow-lg transition-all duration-300 border-l-4 ${
                    limitare.impact === 'ridicat' ? 'border-red-400' : 'border-yellow-400'
                  }`}
                  data-testid={`limitation-card-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Shield className={`w-6 h-6 mt-1 mr-3 flex-shrink-0 ${
                        limitare.impact === 'ridicat' ? 'text-red-500' : 'text-yellow-500'
                      }`} />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{limitare.aspect}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {limitare.descriere}
                        </p>
                        <div className={`text-sm font-medium mt-2 ${
                          limitare.impact === 'ridicat' ? 'text-red-600' : 'text-yellow-600'
                        }`}>
                          Impact: {limitare.impact}
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
                    Poziție Științifică Echilibrată
                  </h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    <strong>Concluzie:</strong> Deși studiile disponibile demonstrează beneficii măsurabile pentru 
                    managementul durerii și îmbunătățirea circulației, cercetarea este încă în dezvoltare. 
                    Sunt necesare studii randomizate controlate la scară mai mare pentru a stabili protocoale 
                    clinice standardizate. Andullation pare să fie cel mai eficient ca terapie complementară, 
                    nu ca înlocuitor pentru tratamentul medical convențional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aplicații Clinice */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Aplicații Clinice Actuale
              </h2>
              <p className="text-xl text-gray-600">
                Domeniile în care cercetarea susține potențialul terapeutic al Andullation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {aplicatiiClinice.map((aplicatie, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-md transition-all duration-300"
                  data-testid={`application-card-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg text-gray-900">
                        {aplicatie.conditie}
                      </h3>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          aplicatie.nivel.includes('Moderată') ? 'text-green-600 border-green-200' :
                          aplicatie.nivel.includes('Promițătoare') ? 'text-blue-600 border-blue-200' :
                          'text-yellow-600 border-yellow-200'
                        }`}
                      >
                        {aplicatie.nivel}
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                      {aplicatie.descriere}
                    </p>
                    <div className="text-xs text-gray-500">
                      Bazat pe: {aplicatie.studii}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Întrebări Frecvente */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Întrebări Frecvente
              </h2>
              <p className="text-xl text-gray-600">
                Răspunsuri bazate pe cercetări și poziția comunității științifice
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Dorești să Afli Dacă Andullation Te Poate Ajuta?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Programează o consultație informativă gratuită în care discutăm 
              aplicabilitatea terapiei Andullation pentru situația ta specifică, bazat pe evidențele științifice disponibile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  handleContactClick();
                  scrollToSection("contact");
                }}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl"
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
                onClick={handleWhatsAppClick}
              >
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp Direct
                </a>
              </Button>
            </div>

            <div className="mt-8 text-sm text-blue-100">
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