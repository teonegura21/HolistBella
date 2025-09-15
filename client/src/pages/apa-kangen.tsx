import { Star, Droplets, Heart, Shield, CheckCircle, Users, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/ui/seo';
import { useAnalytics } from '@/hooks/use-analytics';
import { trackEvent } from '@/lib/analytics';
import { CONTACT_INFO } from '@/lib/constants';

export default function ApaKangenPage() {
  useAnalytics();

  const handleContactClick = () => {
    trackEvent('apa_kangen_contact_click', 'service_page', 'schedule_consultation');
  };

  const scrollToSection = (sectionId: string) => {
    window.location.href = `/#${sectionId}`;
  };

  const beneficii = [
    {
      icon: Droplets,
      title: "Hidratare Optimizată",
      description: "Studii clinice arată îmbunătățiri moderate în hidratarea post-efort, cu beneficii documentate asupra vâscozității sanguine."
    },
    {
      icon: Shield,
      title: "Suport Digestiv", 
      description: "Aprobată în Japonia și Coreea pentru simptomele gastrointestinale, cu studii care arată potențiale beneficii pentru indigestie."
    },
    {
      icon: Heart,
      title: "Echilibru Metabolic",
      description: "Cercetări pe 304 femei postmenopauza au evidențiat asocieri cu glicemia și trigliceridele mai scăzute."
    },
    {
      icon: Zap,
      title: "Recuperare Sportivă",
      description: "Studiu randomizat pe 100 de adulți a demonstrat beneficii pentru rehidratarea după exerciții fizice intense."
    }
  ];

  const studiiCercetare = [
    {
      an: "2022-2024",
      tip: "Studiu Cross-Sectional",
      participanti: "304 femei",
      rezultate: "Glicemie și trigliceride scăzute, calitatea somnului îmbunătățită",
      sursa: "PLOS One Journal"
    },
    {
      an: "2016", 
      tip: "Studiu Randomizat",
      participanti: "100 adulți",
      rezultate: "Îmbunătățirea rehidratării post-exercițiu, vâscozitate sanguine redusă", 
      sursa: "Journal of Sports Nutrition"
    },
    {
      an: "2018",
      tip: "Studiu Japanese",
      participanti: "60 subiecți",
      rezultate: "Ameliorarea simptomelor gastrointestinale, somn mai odihnitor",
      sursa: "Medical Research Archive"
    },
    {
      an: "2016",
      tip: "Studiu pe Șoareci",
      participanti: "150 exemplare",
      rezultate: "Avantaje de supraviețuire la grupurile cu apă alcalină",
      sursa: "Longevity Research"
    }
  ];

  const intrebariFrec = [
    {
      q: "Ce este apa Kangen și cum se produce?",
      a: "Apa Kangen este apă alcalinizată prin electroliză, cu pH între 8.8-9.5. Procesul separă apa în componente alcaline și acide, obținând o apă cu proprietăți ionice modificate."
    },
    {
      q: "Care sunt beneficiile științific dovedite?",
      a: "Studiile clinice arată beneficii moderate pentru hidratare post-exercițiu, unele simptome digestive și anumiți markeri metabolici. Însă cercetarea este încă limitată și sunt necesare mai multe studii pe termen lung."
    },
    {
      q: "Poate apa alcalină să modifice pH-ul organismului?",
      a: "Nu. Organismul reglează strict pH-ul sanguin între 7.35-7.45 prin rinichi și plămâni. Consumul de apă alcalină nu poate altera semnificativ pH-ul general al corpului."
    },
    {
      q: "Este sigură pentru consum pe termen lung?",
      a: "Studiile disponibile indică că este în general sigură pentru majoritatea persoanelor. Totuși, pH-ul foarte ridicat (>9.8) consumat regulat poate prezenta riscuri, fiind recomandată consultarea medicală."
    }
  ];

  return (
    <>
      <SEO
        title="Terapia cu Apă Kangen - Apă Alcalinizată Ionizată | Holist Bella"
        description="Descoperă terapia cu apă Kangen (apă alcalinizată ionizată) în Iași. Studii clinice demonstrează beneficii pentru hidratare, digestie și echilibru metabolic. Consultație gratuită."
        keywords="apă Kangen, apă alcalină, terapie cu apă ionizată, hidratare optimă, digestie sănătoasă, Iași"
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
                  data-testid="badge-apa-kangen"
                >
                  💧 Terapie cu Apă Ionizată
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Terapia cu <span className="text-cyan-200">Apă Kangen</span>
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Apă alcalinizată prin electroliză cu beneficii demonstrate clinic pentru 
                  hidratare optimă, suport digestiv și echilibru metabolic. 
                  Aprobată ca dispozitiv medical în Japonia și Coreea.
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
                    Consultație Gratuită
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
                  <Droplets className="w-32 h-32 text-cyan-200 mx-auto lg:ml-auto" />
                  <div className="mt-6 text-center lg:text-right">
                    <div className="text-3xl font-bold text-white">pH 8.8-9.5</div>
                    <div className="text-blue-200">Apă Alcalinizată Optimal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ce este Apa Kangen */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ce este Terapia cu Apă Kangen?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Apa Kangen este apă alcalinizată prin electroliză, cu pH ridicat și proprietăți ionice modificate. 
                Termenii "Kangen" înseamnă "întoarcerea la origini" în japoneză, reprezentând echilibrul natural al corpului.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Electroliză</h3>
                  <p className="text-gray-600">
                    Procesul de electroliză separă apa în componente alcaline și acide, 
                    modificând structura moleculară și pH-ul.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">pH Controlat</h3>
                  <p className="text-gray-600">
                    Apa rezultată are un pH între 8.8-9.5, 
                    comparativ cu pH-ul neutru de 7.0 al apei normale.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Aprobare Medicală</h3>
                  <p className="text-gray-600">
                    Aprobată ca dispozitiv medical în Japonia (din 1965) 
                    și Coreea (din 1978) pentru tratarea simptomelor gastrointestinale.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Beneficii Demonstrate Clinic */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Beneficii Demonstrate Clinic
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cercetările științifice arată beneficii moderate în anumite domenii. 
                Prezentăm evidențele disponibile într-un mod echilibrat și onest.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {beneficii.map((beneficiu, index) => (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white"
                  data-testid={`benefit-card-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <beneficiu.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{beneficiu.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {beneficiu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Studii și Cercetări */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Studii Științifice și Cercetări
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Prezentăm rezultatele studiilor clinice publicate în reviste științifice recunoscute,
                cu transparență asupra limitărilor și necesității cercetărilor suplimentare.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {studiiCercetare.map((studiu, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300"
                  data-testid={`research-card-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        {studiu.an}
                      </Badge>
                      <div className="text-sm text-gray-500">
                        {studiu.participanti}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2">{studiu.tip}</h3>
                    <p className="text-gray-700 mb-3">{studiu.rezultate}</p>
                    <div className="text-sm text-blue-600 font-medium">
                      Sursa: {studiu.sursa}
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
                    Transparență Științifică
                  </h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    <strong>Important:</strong> Deși studiile arată beneficii promițătoare, cercetarea asupra apei alcaline 
                    este încă în dezvoltare. Instituțiile medicale majore (Mayo Clinic, Harvard Health) 
                    subliniază că sunt necesare mai multe studii pe termen lung pentru a confirma beneficiile terapeutice. 
                    Corpul uman reglează natural pH-ul și nu poate fi modificat semnificativ prin consumul de apă alcalină.
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
                Răspunsuri oneste bazate pe evidențele științifice disponibile
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
              Dorești să Afli Dacă Terapia cu Apă Kangen Este Potrivită pentru Tine?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Programează o consultație gratuită pentru a discuta despre beneficiile 
              și limitările terapiei cu apă Kangen în contextul nevoilor tale specifice de sănătate.
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
                Programează Consultația Gratuită
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

            <div className="mt-8 text-sm text-blue-100">
              ✨ Consultația este complet gratuită • 📞 Răspundem în maxim 2 ore
            </div>
          </div>
        </section>
      </div>
    </>
  );
}