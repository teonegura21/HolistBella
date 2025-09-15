import { Smartphone, Shield, AlertTriangle, Zap, Search, Heart, Clock, DollarSign } from 'lucide-react';
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

export default function HealyPage() {
  useAnalytics();

  const handleContactClick = () => {
    trackEvent('healy_contact_click', 'service_page', 'schedule_consultation');
  };

  const handleCallClick = () => {
    trackEvent('healy_call_click', 'service_page', 'phone_call');
  };

  const handleWhatsAppClick = () => {
    trackEvent('healy_whatsapp_click', 'service_page', 'whatsapp_message');
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

  const baseMicrocurrent = [
    {
      icon: Zap,
      title: "Microcurent Legitim",
      description: "Microcurentul în general are aplicații medicale validate FDA pentru analgesia și recuperarea țesuturilor."
    },
    {
      icon: Heart,
      title: "Studii Controlate",
      description: "Cercetările independente sugerează beneficii pentru durere, fibromialgie și recuperare post-operatorie."
    },
    {
      icon: Shield,
      title: "Siguranță Confirmată",
      description: "FDA a acordat clearance pentru siguranța terapiei cu microcurent când este aplicată corespunzător în mediu clinic."
    }
  ];

  const healyStudii = [
    {
      an: "2024",
      tip: "Studiu Observațional", 
      participanti: "250 pacienți",
      durata: "6 luni",
      rezultate: "Îmbunătățiri în calitatea vieții (SF-36), durere cronică, fibromialgie, migrene",
      limitari: "Finanțat de producător, fără grup de control independent, doar observațional",
      credibilitate: "limitat"
    },
    {
      an: "2023",
      tip: "Meta-Analiză",
      studii: "8 studii Healy",
      rezultate: "Dimensiune efect Hedge's g = 0.757 (efecte moderate)",
      limitari: "TOATE studiile conduse de departamentul R&D al producătorului",
      credibilitate: "foarte-limitat"
    }
  ];

  const criticismAcademic = [
    {
      institutie: "McGill University (Office for Science and Society)",
      pozitie: "\"Healy este pseudoștiință veche în haine noi\"",
      detalii: "Critica conceptele de 'câmp informațional' și 'frecvențe personalizate' ca fiind nesusținute științific",
      credibilitate: "instituție academică prestigioasă"
    },
    {
      institutie: "Memorial Sloan Kettering Cancer Center",
      pozitie: "\"Decenii de studii nu au găsit baza științifică solidă\"",
      detalii: "Nu există dovezi fiabile că frecvențele electromagnetice pe corp funcționează pentru tratarea bolilor",
      credibilitate: "centru medical de renume mondial"
    },
    {
      institutie: "FDA (Food and Drug Administration)",
      pozitie: "Clearance limitată doar pentru durerea acută/cronică locală",
      detalii: "Disclaimer oficial: 'programele cu frecvențe nu sunt destinate să trateze, vindece sau prevină boala'",
      credibilitate: "agenție de reglementare federală"
    },
    {
      institutie: "Quackwatch",
      pozitie: "\"Studiu de caz despre cum prosperă gadgeturile pseudoștiințifice\"",
      detalii: "Critică lipsa mecanismului scientific și pretențiile neverificate",
      credibilitate: "organizație de evaluare medicală"
    }
  ];

  const aspecteComerciale = [
    {
      aspect: "Preț Ridicat",
      detalii: "Dispozitivele costă între $500-$4,000+, plus taxe de abonament lunar $12.99",
      impact: "Barieră financiară semnificativă pentru terapie nevalidată independent"
    },
    {
      aspect: "Model MLM",
      detalii: "Distribuit prin marketing multi-nivel cu comisioane pentru vânzători",
      impact: "Potentiale conflicte de interese în prezentarea beneficiilor"
    },
    {
      aspect: "Cerințe Tehnologice",
      detalii: "Necesită smartphone și aplicații, unele cu abonamente",
      impact: "Costuri continue și dependență tehnologică"
    }
  ];

  const intrebariFrec = [
    {
      q: "Ce este dispozitivul Healy și cum diferă de terapia cu microcurent tradițională?",
      a: "Healy este un dispozitiv portabil care pretinde că oferă terapie cu 'frecvențe personalizate' și analiză a 'câmpului informațional'. Spre deosebire de microcurentul medical validat, Healy face afirmații despre 'vindecarea cuantică' care nu sunt susținute de comunitatea științifică mainstream."
    },
    {
      q: "Ce spune FDA despre Healy?",
      a: "FDA a acordat clearance (nu aprobare) pentru Healy DOAR pentru durerea acută, cronică și artritică locală - similar unui dispozitiv TENS. Pentru toate celelalte aplicații, FDA declară că 'programele cu frecvențe nu sunt destinate să trateze, vindece sau prevină boala și nu au fost evaluate de FDA'."
    },
    {
      q: "De ce instituțiile academice critică Healy?",
      a: "McGill University și alte instituții consideră Healy 'pseudoștiință' deoarece pretențiile despre 'câmpuri informaționale' și 'frecvențe cuantice' contrazic înțelegerea științifică actuală. Nu există mecanism plauzibil prin care corpul ar avea 'frecvențe personalizate' care pot fi detectate și corectate."
    },
    {
      q: "Sunt studiile Healy credibile?",
      a: "Studiile disponibile au limitări majore: toate sunt finanțate/conduse de producător, lipsa studiilor independente, grupuri de control inadecvate. Meta-analiza din 2023 recunoaște că 'confirmarea independentă a acestor rezultate ar fi de dorit'."
    },
    {
      q: "Costă investiția în Healy?",
      a: "Dispozitivele costă $500-$4,000+ plus taxe de abonament. Având în vedere lipsa validării științifice independente și criticile academice, acest cost ridicat pentru o terapie neconfirmată reprezintă o considerație importantă."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <SEO
        title="Healy - Analiză Științifică și Transparentă | Holist Bella Iași"
        description="Analiză onestă despre dispozitivul Healy - microcurent vs. frecvențe cuantice. Cercetări, critici academice și transparență despre pretențiile terapeutice."
        keywords="Healy, frecvențe cuantice, microcurent, biorezonanță, FDA, pseudoștiință, terapie frecvențe, Iași"
      />

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Hero Section - Warning */}
        <section className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge 
                  variant="outline" 
                  className="bg-white/20 text-white border-white/30 mb-4"
                  data-testid="badge-healy-warning"
                >
                  ⚠️ Analiză Transparentă
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Dispozitiv <span className="text-orange-200">Healy</span>
                </h1>
                
                <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                  Analizăm transparent dispozitivul Healy - cercetările disponibile, criticile academice și 
                  diferența dintre microcurentul legitimate și pretențiile controversate despre "frecvențe cuantice."
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => {
                      handleContactClick();
                      scrollToSection("contact");
                    }}
                    className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold shadow-xl"
                    data-testid="button-consultation-hero"
                  >
                    Consultație Informativă Transparentă
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleCallClick}
                    asChild
                    className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                    data-testid="button-call-now-hero"
                  >
                    <a href={`tel:${CONTACT_INFO.phone}`}>
                      Sună Pentru Informații
                    </a>
                  </Button>
                </div>
              </div>

              <div className="lg:text-right">
                <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <AlertTriangle className="w-32 h-32 text-orange-200 mx-auto lg:ml-auto" />
                  <div className="mt-6 text-center lg:text-right">
                    <div className="text-2xl font-bold text-white">Transparență Necesară</div>
                    <div className="text-orange-200">Analiză Echilibrată</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Microcurrent vs Healy */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Microcurent Legitimate vs. Pretențiile Healy
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Este important să distingem între terapia cu microcurent validată științific și 
                pretențiile specifice despre "frecvențe cuantice" ale dispozitivului Healy.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {baseMicrocurrent.map((aspect, index) => (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-lg transition-all duration-300 border-green-200 bg-green-50"
                  data-testid={`microcurrent-card-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <aspect.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-green-800">{aspect.title}</h3>
                    <p className="text-green-700 text-sm leading-relaxed">
                      {aspect.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Context Important: Microcurentul Legitimate
                  </h3>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    <strong>Microcurentul medical</strong> are o bază științifică solidă pentru durere și recuperare, 
                    cu aprobare FDA și studii independente. Healy folosește microcurent dar adaugă pretențiile 
                    controversate despre "câmpuri informaționale" și "frecvențe personalizate cuantice" care 
                    nu sunt susținute științific de instituțiile medicale mainstream.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studiile Healy */}
        <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Studiile Disponibile despre Healy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Prezentăm studiile existente cu transparență despre limitările și finanțarea lor.
              </p>
            </div>

            <div className="space-y-8">
              {healyStudii.map((studiu, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 border-l-4 border-orange-400"
                  data-testid={`healy-study-card-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge 
                        variant="outline" 
                        className="text-orange-600 border-orange-200"
                      >
                        {studiu.an}
                      </Badge>
                      <div className="text-sm text-gray-500">
                        {studiu.participanti || studiu.studii}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2">{studiu.tip}</h3>
                    
                    {studiu.durata && (
                      <div className="text-sm font-medium text-blue-600 mb-2">
                        Durata: {studiu.durata}
                      </div>
                    )}
                    
                    <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                      <strong>Rezultate:</strong> {studiu.rezultate}
                    </p>
                    
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-700 text-sm">
                        <strong>⚠️ Limitări Critice:</strong> {studiu.limitari}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">
                    Lipsa Studiilor Independente
                  </h3>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    <strong>Toate studiile Healy sunt finanțate/conduse de producător.</strong> Meta-analiza din 2023 
                    recunoaște explicit că "confirmarea independentă a acestor rezultate ar fi de dorit." 
                    În știință, replicarea independentă este fundamentală pentru validarea oricărei terapii.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Criticismul Academic */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Poziția Instituțiilor Academice și Medicale
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparența necesită prezentarea poziției comunității științifice mainstream.
              </p>
            </div>

            <div className="space-y-8">
              {criticismAcademic.map((critic, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 border-l-4 border-red-400"
                  data-testid={`criticism-card-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Shield className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900">
                          {critic.institutie}
                        </h3>
                        
                        <blockquote className="text-red-700 mb-3 italic text-sm font-medium">
                          {critic.pozitie}
                        </blockquote>
                        
                        <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                          {critic.detalii}
                        </p>
                        
                        <div className="text-xs text-gray-500">
                          Credibilitate: {critic.credibilitate}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Aspecte Comerciale */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Considerații Comerciale și de Cost
              </h2>
              <p className="text-xl text-gray-600">
                Aspecte financiare și comerciale care pot influența evaluarea obiectivă
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {aspecteComerciale.map((aspect, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-md transition-all duration-300 border-l-4 border-yellow-400"
                  data-testid={`commercial-aspect-card-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <DollarSign className="w-6 h-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{aspect.aspect}</h3>
                        <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                          {aspect.detalii}
                        </p>
                        <div className="text-xs text-yellow-600 font-medium">
                          Impact: {aspect.impact}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Întrebări Frecvente - Răspunsuri Transparente
              </h2>
              <p className="text-xl text-gray-600">
                Informații oneste bazate pe cercetare și poziția comunității științifice
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
        <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Dorești o Consultație Informativă Transparentă?
            </h2>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Programează o discuție onestă despre Healy, microcurent și alternativele validate științific. 
              Fără presiuni comerciale - doar informații transparente bazate pe evidență.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  handleContactClick();
                  scrollToSection("contact");
                }}
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold shadow-xl"
                data-testid="button-consultation-cta"
              >
                Consultație Transparentă Gratuită
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsAppClick}
                asChild
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                data-testid="button-whatsapp-cta"
              >
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp Pentru Info
                </a>
              </Button>
            </div>

            <div className="mt-8 text-sm text-amber-100">
              ✨ Consultația este informativă și transparentă • 📞 Fără presiuni comerciale
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}