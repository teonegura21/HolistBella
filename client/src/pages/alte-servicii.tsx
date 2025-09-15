import { Droplets, Wind, Flower2, Waves, Mountain, Heart, Thermometer, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/ui/seo';
import { useAnalytics } from '@/hooks/use-analytics';
import { trackEvent } from '@/lib/analytics';
import { CONTACT_INFO } from '@/lib/constants';

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

  const pacheteTerapeutice = [
    {
      icon: Waves,
      titlu: "Pachetul Detoxifiere Completă",
      descriere: "Combinație optimă de terapii pentru detoxifierea profundă a organismului și revitalizare",
      durata: "4-6 săptămâni",
      terapii: ["Drenaj Limfatic Manual", "Hidroterapie", "Aromaterapie", "Biorezonanță"],
      beneficii: ["Eliminarea toxinelor", "Îmbunătățirea energiei", "Optimizarea circulației", "Echilibru sistem imunitar"],
      aplicatii: ["Oboseală cronică", "Retenție de apă", "Probleme de piele", "Scăderea imunității"],
      pret: "Discount 15% la pachete complete"
    },
    {
      icon: Heart,
      titlu: "Programul Antistres Integral",
      descriere: "Abordare holistică pentru gestionarea stresului prin multiple modalități terapeutice",
      durata: "6-8 săptămâni",
      terapii: ["Terapie Reiki", "Aromaterapie", "Reflexologie", "Haloterapie"],
      beneficii: ["Reducerea anxietății", "Îmbunătățirea somnului", "Echilibru emoțional", "Relaxare profundă"],
      aplicatii: ["Stres cronic", "Burnout", "Anxietate", "Tulburări de somn"],
      pret: "Pachet optimizat pentru rezultate maxime"
    },
    {
      icon: Thermometer,
      titlu: "Recuperarea Sportivului",
      descriere: "Protocol specializat pentru sportivi și persoane active fizic",
      durata: "2-4 săptămâni",
      terapii: ["Terapie cu Infraroșu", "Drenaj Limfatic", "Terapie Bowen", "Hidroterapie"],
      beneficii: ["Recuperare musculară accelerată", "Prevenirea leziunilor", "Îmbunătățirea performanței", "Reducerea inflamației"],
      aplicatii: ["Post-antrenament", "Leziuni sportive", "Pregătire competiții", "Menținere formă"],
      pret: "Programe flexibile și personalizate"
    },
    {
      icon: Flower2,
      titlu: "Echilibrul Feminin",
      descriere: "Terapii adaptate nevoilor specifice ale femeilor în diferite etape ale vieții",
      durata: "6-12 săptămâni",
      terapii: ["Nutriție Celulară", "Aromaterapie", "Reflexologie", "Terapie Reiki"],
      beneficii: ["Echilibru hormonal", "Reducerea simptomelor menopauză", "Energie optimă", "Bunăstare generală"],
      aplicatii: ["Sindrom premenstrual", "Menopauză", "Fertilitate", "Stres maternal"],
      pret: "Consultație gratuită pentru personalizare"
    }
  ];

  const serviciiIndividuale = [
    {
      icon: Droplets,
      titlu: "Drenaj Limfatic Manual",
      descriere: "Tehnica de masaj specializată pentru stimularea sistemului limfatic și reducerea edemelor",
      evidenta: "solid",
      link: "/drenaj-limfatic"
    },
    {
      icon: Waves,
      titlu: "Hidroterapie",
      descriere: "Terapie cu apă folosind izvoarele termale naturale ale României",
      evidenta: "solid",
      link: "/hidroterapie"
    },
    {
      icon: Flower2,
      titlu: "Aromaterapie",
      descriere: "Utilizarea uleiurilor esențiale naturale pentru echilibru holistic",
      evidenta: "moderat",
      link: "/aromaterapie"
    },
    {
      icon: Mountain,
      titlu: "Haloterapie",
      descriere: "Inhalarea aerului saturat cu particule de sare naturală",
      evidenta: "preliminar",
      link: "/haloterapie"
    },
    {
      icon: Thermometer,
      titlu: "Terapie cu Infraroșu",
      descriere: "Utilizarea căldurii infraroșii pentru penetrare profundă în țesuturi",
      evidenta: "moderat",
      link: "/infrarosu"
    },
    {
      icon: Heart,
      titlu: "Reflexologie",
      descriere: "Aplicarea presiunii pe puncte specifice pentru echilibru general",
      evidenta: "limitat",
      link: "/reflexologie"
    },
    {
      icon: Sparkles,
      titlu: "Terapie Reiki",
      descriere: "Tehnică japoneză de vindecare energetică prin transfer de energie universală",
      evidenta: "limitat",
      link: "/terapie-reiki"
    },
    {
      icon: Wind,
      titlu: "Terapie Bowen",
      descriere: "Tehnica terapeutică blândă care activează capacitatea naturală de auto-vindecare",
      evidenta: "preliminar",
      link: "/terapie-bowen"
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
    <div>
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
                  Pachete <span className="text-teal-200">Terapeutice</span>
                </h1>
                
                <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                  Programe complete care combină multiple terapii pentru rezultate optime. 
                  Abordări holistice personalizate pentru nevoile tale specifice.
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
                    <div className="text-2xl font-bold text-white">4 Pachete</div>
                    <div className="text-teal-200">Abordări Holistice</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pachete Terapeutice */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pachete Terapeutice Complete
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Programe holistice care combină multiple terapii pentru rezultate optime. 
                Fiecare pachet este personalizat în funcție de nevoile individuale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pacheteTerapeutice.map((pachet, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 border-l-4 border-teal-400"
                  data-testid={`therapeutic-package-card-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                        <pachet.icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{pachet.titlu}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {pachet.durata}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {pachet.descriere}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Terapii incluse:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pachet.terapii.map((terapie, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {terapie}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-1 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Beneficii:</h4>
                        <ul className="space-y-1 mb-4">
                          {pachet.beneficii.map((beneficiu, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                              {beneficiu}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Recomandat pentru:</h4>
                        <ul className="space-y-1 mb-4">
                          {pachet.aplicatii.map((aplicatie, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                              {aplicatie}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-blue-700 text-sm font-medium">
                        💰 {pachet.pret}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Servicii Individuale - Navigare */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Servicii Individuale Disponibile
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Fiecare terapie are o pagină dedicată cu informații detaliate, evidență științifică și protocoale complete.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {serviciiIndividuale.map((serviciu, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  data-testid={`individual-service-card-${index}`}
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-200 transition-colors">
                      <serviciu.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{serviciu.titlu}</h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      {serviciu.descriere}
                    </p>
                    <Badge 
                      variant={getBadgeVariant(serviciu.evidenta)}
                      className="mb-3"
                    >
                      {getBadgeText(serviciu.evidenta)}
                    </Badge>
                    <div>
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="w-full group-hover:bg-teal-50"
                        data-testid={`button-view-service-${index}`}
                      >
                        <a href={serviciu.link}>Vezi Detalii</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg inline-block">
                <h3 className="font-semibold text-blue-800 mb-2">💡 Recomandare</h3>
                <p className="text-blue-700 leading-relaxed max-w-2xl">
                  Pentru rezultate optime, recomandăm combinarea mai multor terapii. 
                  În timpul consultației inițiale, vom crea un plan personalizat care combină 
                  terapiile cele mai potrivite pentru obiectivele tale de sănătate.
                </p>
              </div>
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
    </div>
  );
}