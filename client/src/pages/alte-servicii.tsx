import { Droplets, Wind, Flower2, Waves, Mountain, Heart, Thermometer, Sparkles, CheckCircle } from 'lucide-react';
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

export default function AlteServiciiPage() {
  useAnalytics();

  const handleContactClick = () => {
    trackEvent('alte_servicii_contact_click', 'service_page', 'schedule_consultation');
  };

  const handleCallClick = () => {
    trackEvent('alte_servicii_call_click', 'service_page', 'phone_call');
  };

  const handleWhatsAppClick = () => {
    trackEvent('alte_servicii_whatsapp_click', 'service_page', 'whatsapp_message');
  };

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const serviciiComplementare = [
    {
      icon: Droplets,
      titlu: "Drenaj Limfatic Manual",
      descriere: "Tehnica de masaj specializată pentru stimularea sistemului limfatic și reducerea edemelor",
      evidenta: "solid",
      beneficii: ["Reducerea edemelor", "Detoxifierea organismului", "Îmbunătățirea circulației", "Susținerea imunității"],
      aplicatii: ["Post-operatorii", "Celulită", "Retenție de apă", "Recuperare sportivă"],
      cercetare: "Validată de Cleveland Clinic pentru limfedem și insuficiența venoasă cronică. Studii demonstrează eficacitate în reducerea edemelor post-chirurgicale.",
      limitari: "Contraindicat în tromboza venoasă profundă, insuficiența cardiacă acută, infecții acute."
    },
    {
      icon: Waves,
      titlu: "Hidroterapia",
      descriere: "Terapie cu apă folosind izvoarele termale naturale ale României pentru vindecarea holistică",
      evidenta: "solid",
      beneficii: ["Relaxare musculară", "Îmbunătățirea circulației", "Reducerea inflamației", "Echilibru mineral"],
      aplicatii: ["Afecțiuni reumatismale", "Stres și tensiune", "Recuperare musculară", "Detoxifiere"],
      cercetare: "România are peste 1/3 din izvoarele minerale și termale europene. Beneficii validate pentru afecțiuni reumatismale, circulatorii și de stres.",
      limitari: "Evaluare medicală necesară pentru anumite afecțiuni cardiace sau dermatologice."
    },
    {
      icon: Flower2,
      titlu: "Aromaterapia",
      descriere: "Utilizarea uleiurilor esențiale naturale pentru echilibru fizic, mental și emoțional",
      evidenta: "moderat",
      beneficii: ["Reducerea stresului", "Îmbunătățirea dispoziției", "Relaxare profundă", "Echilibru hormonal"],
      aplicatii: ["Anxietate și stres", "Tulburări de somn", "Dureri de cap", "Echilibru emoțional"],
      cercetare: "Studii demonstrează beneficii pentru reducerea anxietății și îmbunătățirea calității somnului. Efecte placebo semnificative în unele studii.",
      limitari: "Pot apărea reacții alergice. Unele uleiuri contraindicat în sarcină sau pentru copii."
    },
    {
      icon: Mountain,
      titlu: "Haloterapia (Terapia cu Sare)",
      descriere: "Inhalarea aerului saturat cu particule de sare naturală în camere speciale de sare",
      evidenta: "preliminar",
      beneficii: ["Îmbunătățirea respirației", "Reducerea inflamației", "Detoxifierea plămânilor", "Relaxare profundă"],
      aplicatii: ["Afecțiuni respiratorii", "Alergii", "Stres", "Probleme de piele"],
      cercetare: "Studii preliminare sugerează beneficii pentru astm și bronșită cronică. România are peșteri de sare naturale cu proprietăți terapeutice.",
      limitari: "Evidence limitată din studii controlate. Nu înlocuiește tratamentul medical convențional pentru afecțiuni respiratorii grave."
    },
    {
      icon: Thermometer,
      titlu: "Terapia cu Infraroșu",
      descriere: "Utilizarea căldurii infraroșii pentru penetrare profundă în țesuturi și stimularea circulației",
      evidenta: "moderat",
      beneficii: ["Îmbunătățirea circulației", "Relaxare musculară", "Reducerea durerii", "Eliminarea toxinelor"],
      aplicatii: ["Dureri musculare", "Artrita", "Recuperare sportivă", "Stres și tensiune"],
      cercetare: "Studii demonstrează beneficii pentru durerea cronică și recuperarea musculară. Mecanisme fiziologice validate pentru îmbunătățirea circulației.",
      limitari: "Precauții pentru persoanele cu afecțiuni cardiovasculare, sarcină sau medicamente fotosensibilizante."
    },
    {
      icon: Heart,
      titlu: "Reflexologia",
      descriere: "Aplicarea presiunii pe puncte specifice de pe tălpi, mâini și urechi pentru echilibru general",
      evidenta: "limitat",
      beneficii: ["Reducerea stresului", "Îmbunătățirea relaxării", "Echilibru general", "Susținerea wellness-ului"],
      aplicatii: ["Stres și anxietate", "Tulburări de somn", "Tensiune generală", "Complement la alte terapii"],
      cercetare: "Studii mixte - unele demonstrează beneficii pentru anxietate și durere, dar lipsă evidență convingătoare pentru pretențiile specifice despre 'zone reflexe'.",
      limitari: "Nu există dovezi științifice solide pentru hărțile reflexologice specifice. Beneficiile pot fi din relaxare generală."
    }
  ];

  const terapiiTraditionale = [
    {
      icon: Sparkles,
      titlu: "Terapia Reiki",
      descriere: "Tehnică japoneză de vindecare energetică prin transfer de energie universală",
      evidenta: "limitat",
      beneficii: ["Relaxare profundă", "Reducerea stresului", "Echilibru emoțional", "Sentiment de pace"],
      aplicatii: ["Stres și anxietate", "Trauma emoțională", "Echilibru personal", "Complementar la alte tratamente"]
    },
    {
      icon: Wind,
      titlu: "Terapia Bowen",
      descriere: "Tehnica terapeutică blândă care activează capacitatea naturală de auto-vindecare",
      evidenta: "preliminar",
      beneficii: ["Relaxare musculară", "Îmbunătățirea posturii", "Reducerea tensiunii", "Echilibru structural"],
      aplicatii: ["Dureri de spate", "Tensiuni musculare", "Probleme posturale", "Stres fizic"]
    }
  ];

  const getBadgeVariant = (evidenta: string) => {
    switch (evidenta) {
      case 'solid': return 'default';
      case 'moderat': return 'secondary';
      case 'preliminar': return 'outline';
      case 'limitat': return 'destructive';
      default: return 'outline';
    }
  };

  const getBadgeText = (evidenta: string) => {
    switch (evidenta) {
      case 'solid': return 'Evidență Solidă';
      case 'moderat': return 'Evidență Moderată';
      case 'preliminar': return 'Evidență Preliminară';
      case 'limitat': return 'Evidență Limitată';
      default: return 'În Evaluare';
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <SEO
        title="Alte Servicii Complementare - Terapii Holistice | Holist Bella Iași"
        description="Servicii complementare: drenaj limfatic, hidroterapie, aromaterapie, haloterapie, infraroșu, reflexologie. Evaluare transparentă a beneficiilor și limitărilor."
        keywords="drenaj limfatic, hidroterapie, aromaterapie, haloterapie, reflexologie, terapii complementare, Iași"
      />

      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge 
                  variant="outline" 
                  className="bg-white/20 text-white border-white/30 mb-4"
                  data-testid="badge-complementary-services"
                >
                  🌿 Terapii Complementare
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Alte <span className="text-teal-200">Servicii</span>
                </h1>
                
                <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                  Servicii complementare evaluate transparent - de la terapii cu evidență solidă 
                  până la abordări tradiționale, cu informații oneste despre beneficii și limitări.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => {
                      handleContactClick();
                      scrollToSection("contact");
                    }}
                    className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg font-semibold shadow-xl"
                    data-testid="button-consultation-hero"
                  >
                    Consultație Personalizată
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
                      Sună Pentru Detalii
                    </a>
                  </Button>
                </div>
              </div>

              <div className="lg:text-right">
                <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <Flower2 className="w-32 h-32 text-teal-200 mx-auto lg:ml-auto" />
                  <div className="mt-6 text-center lg:text-right">
                    <div className="text-2xl font-bold text-white">6+ Servicii</div>
                    <div className="text-teal-200">Evaluare Transparentă</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicii Complementare Principale */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Servicii Complementare Principale
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Terapii cu diferite niveluri de evidență științifică - prezentate transparent 
                pentru a vă ajuta să luați decizii informate.
              </p>
            </div>

            <div className="space-y-12">
              {serviciiComplementare.map((serviciu, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 border-l-4 border-teal-400"
                  data-testid={`complementary-service-card-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                            <serviciu.icon className="w-6 h-6 text-teal-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{serviciu.titlu}</h3>
                            <Badge 
                              variant={getBadgeVariant(serviciu.evidenta)}
                              className="mt-1"
                            >
                              {getBadgeText(serviciu.evidenta)}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {serviciu.descriere}
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Beneficii:</h4>
                            <ul className="space-y-2">
                              {serviciu.beneficii.map((beneficiu, idx) => (
                                <li key={idx} className="flex items-center text-sm">
                                  <CheckCircle className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                                  {beneficiu}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Aplicații:</h4>
                            <ul className="space-y-2">
                              {serviciu.aplicatii.map((aplicatie, idx) => (
                                <li key={idx} className="flex items-center text-sm">
                                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                                  {aplicatie}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Cercetare și Evidență
                          </h4>
                          <p className="text-green-700 text-sm leading-relaxed">
                            {serviciu.cercetare}
                          </p>
                        </div>

                        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                          <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                            ⚠️ Limitări și Precauții
                          </h4>
                          <p className="text-amber-700 text-sm leading-relaxed">
                            {serviciu.limitari}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Terapii Tradiționale */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Terapii Tradiționale și Energetice
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Abordări holistische cu focus pe relaxare și echilibru personal.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {terapiiTraditionale.map((terapie, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 border-l-4 border-purple-400"
                  data-testid={`traditional-therapy-card-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <terapie.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{terapie.titlu}</h3>
                        <Badge variant={getBadgeVariant(terapie.evidenta)}>
                          {getBadgeText(terapie.evidenta)}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {terapie.descriere}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Beneficii:</h4>
                        <ul className="space-y-2">
                          {terapie.beneficii.map((beneficiu, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                              {beneficiu}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Aplicații:</h4>
                        <ul className="space-y-2">
                          {terapie.aplicatii.map((aplicatie, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                              {aplicatie}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Informații Importante */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Informații Importante
              </h2>
            </div>

            <div className="space-y-8">
              <Card className="border-l-4 border-blue-400">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-blue-800 mb-3">
                    🎯 Abordare Personalizată
                  </h3>
                  <p className="text-blue-700 leading-relaxed">
                    Fiecare serviciu este adaptat nevoilor individuale. În timpul consultației inițiale, 
                    discutăm antecedentele medicale, obiectivele de sănătate și preferințele personale 
                    pentru a recomanda cel mai potrivit plan terapeutic.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-400">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-green-800 mb-3">
                    🤝 Terapii Complementare, Nu Alternative
                  </h3>
                  <p className="text-green-700 leading-relaxed">
                    Toate serviciile oferite sunt complementare tratamentelor medicale convenționale. 
                    Nu înlocuiesc diagnosticul sau tratamentul medical și se recomandă consultarea 
                    medicului curant pentru afecțiuni grave.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-amber-400">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-amber-800 mb-3">
                    ⚖️ Transparența Evidenței
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    Prezentăm onest nivelul de evidență pentru fiecare terapie. Unele au validare 
                    științifică solidă, altele se bazează pe tradiție și experiența practică. 
                    Această transparență vă ajută să luați decizii informate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Găsește Terapiile Potrivite Pentru Tine
            </h2>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Consultația inițială ne ajută să înțelegem nevoile tale și să recomandăm 
              cel mai potrivit plan de terapii complementare.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  handleContactClick();
                  scrollToSection("contact");
                }}
                className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg font-semibold shadow-xl"
                data-testid="button-consultation-cta"
              >
                Consultație Informativă Gratuită
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
                  WhatsApp pentru Întrebări
                </a>
              </Button>
            </div>

            <div className="mt-8 text-sm text-teal-100">
              ✨ Consultația este gratuită și informativă • 📞 Fără obligații sau presiuni comerciale
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}