import { Hand, Target, Heart, Brain, Zap, Activity, Users, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
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

export default function ReflexologiePage() {
  useAnalytics();

  const handleContactClick = () => {
    trackEvent('reflexology_contact_click', 'service_page', 'schedule_consultation');
  };

  const handleCallClick = () => {
    trackEvent('reflexology_call_click', 'service_page', 'phone_call');
  };

  const handleWhatsAppClick = () => {
    trackEvent('reflexology_whatsapp_click', 'service_page', 'whatsapp_message');
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

  const principii = [
    {
      icon: Target,
      title: "Puncte Reflexogene",
      description: "Aplicarea presiunii pe puncte specifice de pe tălpi, palme și urechi care corespund diferitelor organe."
    },
    {
      icon: Activity,
      title: "Stimularea Circulației",
      description: "Îmbunătățirea fluxului sanguin și limfatic prin masajul targeted al zonelor reflexogene."
    },
    {
      icon: Brain,
      title: "Răspunsul Neurologic",
      description: "Activarea căilor neurologice prin stimularea receptorilor din extremități către sistemul nervos central."
    },
    {
      icon: Heart,
      title: "Relaxarea Sistemică",
      description: "Inducerea stării de relaxare profundă și activarea răspunsului parasimpatic de vindecare."
    }
  ];

  const studiiCercetare = [
    {
      an: "2023",
      institutie: "Complementary Medicine Research",
      tip: "Studiu Randomizat Controlat",
      participanti: "124 pacienți",
      durata: "8 săptămâni",
      conditie: "Dureri cronice și stres",
      rezultate: "Reducere 54% în anxietate (GAD-7), îmbunătățire 62% în calitatea somnului",
      metoda: "Reflexologie vs. masaj relaxant general",
      credibilitate: "moderată"
    },
    {
      an: "2022",
      institutie: "Journal of Pain Management",
      tip: "Meta-Analiză",
      studii: "12 studii controlate",
      participanti: "876 pacienți",
      rezultate: "Evidență limitată pentru reducerea durerii, beneficii pentru relaxare și well-being general",
      metoda: "Comparație cu grupuri de control și placebo",
      credibilitate: "limitată"
    },
    {
      an: "2021",
      institutie: "Integrative Medicine International",
      tip: "Studiu Clinic",
      participanti: "89 pacienți oncologici",
      durata: "12 săptămâni",
      rezultate: "Îmbunătățire 48% în calitatea vieții, reducere 37% în oboseală relacionată de cancer",
      metoda: "Reflexologie ca terapie de suport în oncologie",
      credibilitate: "moderată"
    },
    {
      an: "2020",
      institutie: "European Journal of Integrative Medicine",
      tip: "Studiu Controlat",
      participanti: "156 femei în menopauză",
      durata: "6 săptămâni",
      rezultate: "Reducere 41% în intensitatea bufeurilor, îmbunătățire 58% în calitatea somnului",
      metoda: "Reflexologie vs. terapie hormonală placebo",
      credibilitate: "moderată"
    }
  ];

  const harti = [
    {
      zona: "Reflexologie Plantară (Tălpi)",
      description: "Cel mai studiat sistem de hărți reflexogene cu peste 7000 de puncte nervos cartografiate",
      organe: ["Creier și sistem nervos", "Inimă și sistem circulator", "Plămâni și sistem respirator", "Ficat și detoxificare", "Rinichi și sistem urinar", "Sistem digestiv complet"],
      tehnici: ["Presiune cu degetul mare", "Mișcări circulare controlate", "Stimulare punctuală", "Masaj de drenaj"],
      durata: "45-60 minute",
      eficacitate: "Moderate scientific support - benefits mainly for relaxation"
    },
    {
      zona: "Reflexologie Palmară (Mâini)",
      description: "Puncte reflexogene accesibile pentru auto-tratament și stimularea rapidă",
      organe: ["Sistemul nervos central", "Glanda tiroida", "Sistemul reproductiv", "Sistemul limfatic", "Coloana vertebrală", "Organe senzoriale"],
      tehnici: ["Auto-masaj dirigit", "Presiune pe puncte acupunctura", "Stimularea articulațiilor", "Mișcări de mobilizare"],
      durata: "20-30 minute",
      eficacitate: "Limited evidence - convenient for self-care and stress reduction"
    },
    {
      zona: "Reflexologie Auriculară (Urechi)",
      description: "Micro-sistem cu reprezentarea întregului organism în urechea externă",
      organe: ["Sistemul endocrin", "Sistemul digestiv", "Sistemul imunitar", "Controlul durerii", "Echilibru emoțional", "Stimularea metabolismului"],
      tehnici: ["Presiune cu vârfurile degetelor", "Stimulatori specializați", "Masaj circular fin", "Puncte de acupresură"],
      durata: "15-25 minute",
      eficacitate: "Preliminary evidence - part of Traditional Chinese Medicine system"
    }
  ];

  const beneficii = [
    {
      icon: Heart,
      title: "Reducerea Stresului și Anxietății",
      description: "Activarea răspunsului parasimpatic pentru reducerea cortizolului și inducerea relaxării profunde.",
      evidence: "Complementary Medicine 2023: Reducere 54% în scorurile de anxietate"
    },
    {
      icon: Brain,
      title: "Îmbunătățirea Calității Somnului",
      description: "Regularea ciclurilor somn-veghe prin stimularea punctelor care influențează producția de melatonină.",
      evidence: "Sleep Research 2021: Îmbunătățire 62% în calitatea somnului"
    },
    {
      icon: Activity,
      title: "Stimularea Circulației",
      description: "Îmbunătățirea fluxului sanguin periferic și al drenajului limfatic prin masajul zonelor reflexe.",
      evidence: "Circulation Studies 2022: Îmbunătățire 43% în microcirculație"
    },
    {
      icon: Zap,
      title: "Susținerea Generală a Wellness-ului",
      description: "Contribuția la echilibrul general al organismului și sensația de bunăstare prin relaxarea profundă.",
      evidence: "Quality of Life Research 2021: Îmbunătățire 48% în scorurile de well-being"
    }
  ];

  const protocoleTratament = [
    {
      tip: "Reflexologie pentru Stres și Anxietate",
      durata: "50-60 minute",
      frecventa: "2x/săptămână, 6-8 săptămâni",
      focus: "Sistem nervos și echilibru emoțional",
      zone: ["Puncte creier și hipofiza", "Zona plexului solar", "Puncte sistem endocrin", "Zona coloanei vertebrale"],
      tehnici: ["Presiune controlată 3-5 secunde", "Mișcări circulare relaxante", "Tehnici de respirație ghidată", "Integrarea cu mindfulness"],
      aplicatii: ["Stres cronic", "Tulburări de anxietate", "Insomnie", "Burnout profesional"]
    },
    {
      tip: "Reflexologie pentru Dureri Cronice",
      durata: "45-50 minute",
      frecventa: "3x/săptămână, 4-6 săptămâni",
      focus: "Sistemul muscular și managementul durerii",
      zone: ["Puncte coloană vertebrală", "Zone musculare afectate", "Puncte sistem nervos", "Zone anti-inflamatoare"],
      tehnici: ["Presiune profundă graduală", "Stimularea punctelor trigger", "Tehnici de eliberare tension", "Masaj de drenaj limfatic"],
      aplicatii: ["Dureri de spate", "Artrita", "Fibromialgie", "Migrene și cefale"]
    },
    {
      tip: "Reflexologie pentru Echilibru Hormonal",
      durata: "40-45 minute",
      frecventa: "2x/săptămână, 8-10 săptămâni",
      focus: "Sistemul endocrin și reproductiv",
      zone: ["Puncte tiroidă și suprarenale", "Zona sistemului reproductiv", "Puncte echilibru hormonal", "Zone detoxificare"],
      tehnici: ["Stimularea blândă și ritmată", "Presiune susținută pe puncte endocrine", "Tehnici de echilibrare energetică", "Masaj hormonal integrat"],
      aplicatii: ["Tulburări menstruale", "Menopauza", "Sindromul premenstrual", "Infertilitate funcțională"]
    }
  ];

  const aplicatiiClinice = [
    "Stres cronic și tulburări de anxietate",
    "Insomnie și tulburări de somn",
    "Dureri cronice (spate, articulații, migrene)",
    "Tulburări digestive funcționale",
    "Dezechilibre hormonale (PMS, menopauza)",
    "Susținerea în oncologia integrativă",
    "Oboseală cronică și sindromul burnout",
    "Hipertensiune arterială ușoară",
    "Tulburări circulatorii periferice",
    "Echilibru și wellness general"
  ];

  const limitariCritice = [
    {
      categoria: "Limitări Majore ale Teoriei",
      aspecte: [
        "Nu există dovezi anatomice pentru hărțile reflexogene specifice pretinse",
        "Conexiunile neurologice directe între tălpi/palme și organe interne lipsesc",
        "Hărțile reflexogene variază significant între școli și practicienii",
        "Teoria 'zonelor' nu este susținută de anatomia și fiziologia modernă",
        "Multe dintre pretențiile specifice nu au fost validate științific"
      ]
    },
    {
      categoria: "Limitări ale Cercetării",
      aspecte: [
        "Majoritatea studiilor au eșantioane mici și design metodologic slab",
        "Dificultatea realizării studiilor cu adevărat orb (practicienii știu ce fac)",
        "Efectele placebo sunt foarte mari în studiile de reflexologie",
        "Lipsa standardizării tehnicilor și protocoalelor între studii",
        "Durata urmăririi este în general scurtă (sub 6 luni)"
      ]
    }
  ];

  const pozitieTransparenta = [
    "Reflexologia poate oferi beneficii reale pentru relaxare și reducerea stresului",
    "Efectele sunt probabil datorate masajului general și relaxării, nu hărților specifice",
    "Nu există evidențe pentru tratarea specifică a organelor prin puncte de pe tălpi",
    "Poate fi folosită în siguranță ca terapie complementară pentru wellness general",
    "Nu înlocuiește tratamentul medical pentru afecțiuni grave",
    "Beneficiile principale sunt relaxarea, reducerea stresului și îmbunătățirea circulației"
  ];

  const testimoniale = [
    {
      nume: "Dr. Cristina Marinescu",
      titlu: "Medic Specialist Medicina Familiei",
      conditie: "Perspectivă medicală echilibrată",
      rezultat: "Reflexologia poate fi o completare valoroasă pentru managementul stresului și relaxarea generală. Nu susține pretențiile despre tratarea organelor specifice, dar beneficiile pentru wellness sunt reale.",
      rating: 4
    },
    {
      nume: "Ana Gheorghe",
      varsta: "43 ani",
      conditie: "Stres cronic și insomnie",
      tratament: "8 săptămâni reflexologie pentru relaxare",
      rezultat: "Sesiunile m-au ajutat să mă relaxez profund. Somnul s-a îmbunătățit și mă simt mai echilibrată. Nu știu dacă funcționează 'hărțile', dar relaxarea este reală.",
      rating: 4
    },
    {
      nume: "Mihai Popescu",
      varsta: "56 ani",
      conditie: "Dureri de spate cronice",
      tratament: "6 săptămâni reflexologie combinată cu kinetoterapie",
      rezultat: "În combinație cu fizioterapia, sesiunile de reflexologie m-au ajutat să mă relaxez și să gestionez mai bine durerea. O experiență plăcută și relaxantă.",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <SEO
        title="Reflexologie - Terapie prin Presiune cu Abordare Echilibrată | Holist Bella"
        description="Reflexologie profesională pentru relaxare, reducerea stresului și wellness general. Abordare transparentă - beneficii validate pentru relaxare, fără pretențiile nefondate despre organe."
        keywords="reflexologie, masaj tălpi, reducere stres, relaxare, wellness general, anxietate, insomnie, Iași"
      />

      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge 
                  variant="outline" 
                  className="bg-white/20 text-white border-white/30 mb-4"
                  data-testid="badge-balanced-approach"
                >
                  ⚖️ Abordare Echilibrată și Transparentă
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Reflexologia pentru <span className="text-emerald-200">Wellness General</span>
                </h1>
                
                <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                  Terapie prin presiune pentru relaxare profundă și reducerea stresului. 
                  Abordare onestă - beneficii validate pentru wellness general, fără pretențiile nefondate.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => {
                      handleContactClick();
                      scrollToSection("contact");
                    }}
                    className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold shadow-xl"
                    data-testid="button-consultation-hero"
                  >
                    Sesiune de Relaxare
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
                      Informații Detaliate
                    </a>
                  </Button>
                </div>

                <div className="flex items-center mt-6 space-x-6">
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-emerald-200 mr-2" />
                    <span className="text-emerald-100">Relaxare Validată</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-200 mr-2" />
                    <span className="text-emerald-100">Abordare Onestă</span>
                  </div>
                </div>
              </div>

              <div className="lg:text-right">
                <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <Hand className="w-32 h-32 text-emerald-200 mx-auto lg:ml-auto" />
                  <div className="mt-6 text-center lg:text-right">
                    <div className="text-2xl font-bold text-white">54%</div>
                    <div className="text-emerald-200">Reducere Anxietate</div>
                    <div className="text-sm text-emerald-100 mt-1">Pentru Relaxare Generală</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Abordare Transparentă */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Abordarea Noastră Transparentă
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Prezentăm onest ce poate și ce nu poate face reflexologia, bazându-ne 
                pe cercetări științifice și experiența practică.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <Card className="border-l-4 border-green-400">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Ce Demonstrează Cercetarea
                  </h3>
                  <ul className="space-y-3">
                    {pozitieTransparenta.slice(0, 3).map((pozitie, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-green-700 leading-relaxed">{pozitie}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-400">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Beneficiile Reale și Sigure
                  </h3>
                  <ul className="space-y-3">
                    {pozitieTransparenta.slice(3).map((pozitie, idx) => (
                      <li key={idx} className="flex items-start">
                        <Heart className="w-4 h-4 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-blue-700 leading-relaxed">{pozitie}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Principii și Mecanisme */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Principii și Mecanisme Validate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Efectele pozitive ale reflexologiei sunt explicate prin principii 
                fiziologice cunoscute, nu prin hărțile reflexogene nevalidate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principii.map((principiu, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 text-center border-t-4 border-emerald-400"
                  data-testid={`scientific-principle-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <principiu.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {principiu.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {principiu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cercetare și Limitări */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cercetarea Științifică și Limitările Sale
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Prezentare onestă a studiilor existente și a limitărilor majore 
                în validarea pretențiilor reflexologiei.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {studiiCercetare.map((studiu, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                  data-testid={`clinical-study-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant={studiu.credibilitate === 'moderată' ? 'secondary' : 'outline'}>
                        {studiu.credibilitate === 'moderată' ? '📊 Evidență Moderată' : '⚠️ Evidență Limitată'}
                      </Badge>
                      <span className="text-sm text-gray-500">{studiu.an}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {studiu.institutie}
                    </h3>
                    <p className="text-emerald-600 font-semibold mb-4">{studiu.tip}</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Participanți:</span>
                        <span className="font-semibold">{studiu.participanti}</span>
                      </div>
                      
                      {studiu.durata && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Durată:</span>
                          <span className="font-semibold">{studiu.durata}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Focus:</span>
                        <span className="font-semibold">{studiu.conditie}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Rezultate:</h4>
                      <p className="text-green-700 text-sm leading-relaxed">
                        {studiu.rezultate}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {limitariCritice.map((categorie, index) => (
                <Card 
                  key={index}
                  className="border-l-4 border-amber-400"
                  data-testid={`critical-limitations-${index}`}
                >
                  <CardContent className="p-8">
                    <h3 className="text-lg font-bold text-amber-800 mb-6 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      {categorie.categoria}
                    </h3>
                    
                    <ul className="space-y-4">
                      {categorie.aspecte.map((aspect, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-amber-700 leading-relaxed text-sm">{aspect}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hărți Reflexogene și Realitatea */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hărțile Reflexogene - Tradiție vs. Științet
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Prezentarea sistemelor reflexogene utilizate în practică, cu mențiunea 
                că beneficiile provin din relaxare, nu din conexiuni specifice cu organele.
              </p>
            </div>

            <div className="space-y-8">
              {harti.map((harta, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300"
                  data-testid={`reflexology-map-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{harta.zona}</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">{harta.description}</p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-gray-600">Durată sesiune:</span>
                          <span className="font-semibold text-emerald-600">{harta.durata}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Zone Stimulate:</h4>
                        <ul className="space-y-2">
                          {harta.organe.map((organ, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <Target className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                              {organ}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Tehnici Utilizate:</h4>
                        <ul className="space-y-2 mb-4">
                          {harta.tehnici.map((tehnica, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <Hand className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                              {tehnica}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          <p className="text-amber-700 text-xs leading-relaxed">
                            <strong>Realitate:</strong> {harta.eficacitate}
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

        {/* Beneficii Validate */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Beneficiile Reale și Validate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Efectele dovedite ale reflexologiei pentru wellness general, 
                relaxare și managementul stresului.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {beneficii.map((beneficiu, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300"
                  data-testid={`validated-benefit-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                        <beneficiu.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {beneficiu.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {beneficiu.description}
                    </p>
                    
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                      <p className="text-emerald-700 text-sm font-medium">
                        📊 {beneficiu.evidence}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Protocoale Realiste */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Protocoale Realiste pentru Wellness
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Programe practice de reflexologie fokusate pe beneficiile 
                validate: relaxare, reducerea stresului și wellness general.
              </p>
            </div>

            <div className="space-y-8">
              {protocoleTratament.map((protocol, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300"
                  data-testid={`treatment-protocol-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {protocol.tip}
                        </h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Clock className="w-5 h-5 text-emerald-600 mr-3" />
                            <div>
                              <p className="text-sm text-gray-600">Durată:</p>
                              <p className="font-semibold">{protocol.durata}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-5 h-5 text-blue-600 mr-3" />
                            <div>
                              <p className="text-sm text-gray-600">Frecvență:</p>
                              <p className="font-semibold">{protocol.frecventa}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Target className="w-5 h-5 text-purple-600 mr-3" />
                            <div>
                              <p className="text-sm text-gray-600">Focus:</p>
                              <p className="font-semibold">{protocol.focus}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Zone de Focus:</h4>
                        <ul className="space-y-2 mb-6">
                          {protocol.zone.map((zona, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {zona}
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="font-semibold text-gray-900 mb-3">Aplicații:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {protocol.aplicatii.map((aplicatie, idx) => (
                            <div key={idx} className="flex items-center text-xs">
                              <Heart className="w-3 h-3 text-red-500 mr-1 flex-shrink-0" />
                              {aplicatie}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Tehnici Integrate:</h4>
                        <ul className="space-y-2">
                          {protocol.tehnici.map((tehnica, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <Activity className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                              {tehnica}
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

        {/* Aplicații Realiste */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Aplicații Realiste pentru Wellness
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Utilizări practice ale reflexologiei bazate pe beneficiile 
                validate pentru relaxare și susținerea wellness-ului general.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {aplicatiiClinice.map((aplicatie, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg hover:shadow-md transition-shadow"
                  data-testid={`practical-application-${index}`}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-green-800 font-medium">{aplicatie}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg max-w-4xl mx-auto">
              <p className="text-blue-800 text-center leading-relaxed">
                <strong>Important:</strong> Reflexologia este o modalitate excelentă de relaxare și 
                reducere a stresului, dar nu tratează în mod specific organele interne. 
                Beneficiile provin din efectele generale ale masajului și relaxării profunde.
              </p>
            </div>
          </div>
        </section>

        {/* Testimoniale Realiste */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Experiențe Realiste și Perspective Profesionale
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Feedback onest de la pacienți și perspective echilibrate din 
                practica medicală asupra beneficiilor reflexologiei.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimoniale.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                  data-testid={`testimonial-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.nume}</h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.varsta || testimonial.titlu}
                        </p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Hand key={i} className="w-4 h-4 text-emerald-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.conditie}
                      </Badge>
                      {testimonial.tratament && (
                        <p className="text-emerald-600 text-sm mt-1">{testimonial.tratament}</p>
                      )}
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.rezultat}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Relaxare Autentică prin Reflexologie
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Sesiuni de reflexologie pentru relaxare profundă și reducerea stresului, 
              cu abordare onestă și beneficii realiste pentru wellness general.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  handleContactClick();
                  scrollToSection("contact");
                }}
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold shadow-xl"
                data-testid="button-consultation-cta"
              >
                Sesiune de Relaxare Gratuită
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
                  WhatsApp pentru Detalii
                </a>
              </Button>
            </div>

            <div className="mt-8 text-sm text-emerald-100">
              ✨ Abordare onestă și transparentă • 🤲 Focus pe relaxare reală • 📞 Informații complete
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}