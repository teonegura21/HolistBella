import { Waves, Activity, Shield, Zap, Award, Heart, Search, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/ui/seo';
import { useAnalytics } from '@/hooks/use-analytics';
import { trackEvent } from '@/lib/analytics';
import { CONTACT_INFO } from '@/lib/constants';

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
      conditie: "Durere Lombară Cronică",
      rezultate: "Pragul durerii crescut cu 34.48% (zona lombară), scăderea percepției subiective a durerii cu 52.3%, îmbunătățirea bunăstării cu 45.1%",
      parametri: "Frecvență: 5-40 Hz, Amplitudine: 2-8 mm",
      limitari: "Eșantion mic, fără grup de control, finanțare parțială de la producător",
      sursa: "Clinical study - peer reviewed",
      credibilitate: "evidență preliminară"
    },
    {
      an: "2024",
      tip: "Studiu Controlat Randomizat",
      participanti: "44 pacienți",
      conditie: "Hernie Discală Cervicală",
      rezultate: "Reducerea durerii și îmbunătățirea funcției vs. terapia convențională singură",
      limitari: "Eșantion mic, necesare studii de replicare",
      sursa: "Journal of Clinical Medicine",
      credibilitate: "evidență moderată"
    },
    {
      an: "2023",
      tip: "Review Sistematic",
      participanti: "14 studii, 860 subiecți",
      conditie: "Durere Lombară Cronică",
      rezultate: "Îmbunătățiri semnificative în intensitatea durerii și indicii de dizabilitate",
      limitari: "Heterogenitate în protocoale, calitatea studiilor variabilă",
      sursa: "Journal of Orthopaedic Surgery Research",
      credibilitate: "evidență moderată"
    },
    {
      an: "2023",
      tip: "Studiu Pilot",
      participanti: "20 pacienți",
      conditie: "Durere Lombară Acută/Cronică",
      rezultate: "Reducerea durerii cu 45-57% pe scala vizuală analogă",
      limitari: "Eșantion foarte mic, lipsește grupul de control",
      sursa: "Frontiers in Pain Research",
      credibilitate: "evidență preliminară"
    },
    {
      an: "2022",
      tip: "Studiu Observațional",
      participanti: "67 pacienți",
      conditie: "Durere Cervicală și Lombară",
      rezultate: "Reducere durere 38-45%, îmbunătățire mobilitate la majoritatea pacienților",
      limitari: "Lipsește grupul de control, urmărire pe termen scurt",
      sursa: "International Journal of Rehabilitation Research",
      credibilitate: "evidență preliminară"
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
      studii: "Review sistematic 2023 (14 studii, 860 subiecți)",
      descriere: "Cel mai bine documentat - îmbunătățiri în intensitatea durerii și funcționalitate",
      protocol: "2-3x/săptămână, 30-45 min, 8-12 săptămâni",
      limitari: "Studiile variază în protocoale și măsuri de rezultat, eșantioane relativ mici"
    },
    {
      conditie: "Durere Cervicală",
      nivel: "Evidență Moderată",
      studii: "Studiu controlat randomizat 2024 (44 pacienți)",
      descriere: "Îmbunătățiri în durere și funcție comparativ cu terapia convențională",
      protocol: "Protocol personalizat, 30-45 min/sesiune",
      limitari: "Eșantion mic, necesare studii de replicare pe populații mai mari"
    },
    {
      conditie: "Stimularea Circulației",
      nivel: "Evidență Preliminară",
      studii: "Studii observaționale mici",
      descriere: "Potențial pentru îmbunătățirea circulației periferice prin stimularea mecanică",
      protocol: "Protocol individualizat în funcție de toleranță",
      limitari: "Necesare studii controlate pentru confirmarea beneficiilor circulatorii"
    },
    {
      conditie: "Managementul General al Durerii",
      nivel: "Evidență Preliminară",
      studii: "Studii pilot diverse condiții dureroase",
      descriere: "Potențial terapeutic pentru diverse sindroame dureroase bazat pe teoria 'gate control'",
      mecanisme: "Stimulare senzorială care poate influența transmisia durerii",
      limitari: "Mecanismele exacte necesită cercetare suplimentară, eficacitatea variază"
    },
    {
      conditie: "Terapie Complementară în Reabilitare",
      nivel: "Evidență Preliminară",
      studii: "Rapoarte de caz și studii pilot",
      descriere: "Utilizare ca adjuvant în programe de reabilitare pentru diverse condiții",
      protocol: "Integrat în programe multidisciplinare, durata și frecvența personalizate",
      limitari: "Lipsesc studii randomizate controlate de mari dimensiuni"
    }
  ];

  const contraindicatiiSiguranta = [
    {
      categoria: "Contraindicații Absolute",
      conditii: ["Tromboză acută", "Aneurisme aortic", "Sarcină primul trimestru", "Implanturi cardiace nestabile", "Fractură acută neconsolidată"],
      nivel: "interzis"
    },
    {
      categoria: "Contraindicații Relative",
      conditii: ["Hipertensiune severă necontrolată (>180/110)", "Epilepsie necontrolată", "Proteze articulare recente (<6 luni)", "Tumori osoase", "Osteoporoză severă"],
      nivel: "precauție"
    },
    {
      categoria: "Protocoale de Siguranță",
      masuri: ["Evaluare medicală prealabilă obligatorie", "Monitorizare parametri vitali în primele sesiuni", "Progresie graduală a intensității", "Întrerupere imediată la orice disconfort", "Supraveghere de către personal calificat"],
      nivel: "standard"
    },
    {
      categoria: "Parametri de Siguranță Recomandați",
      specificatii: ["Frecvență: 5-35 Hz (conform studiilor disponibile)", "Amplitudine: Maximum 6mm pentru confort", "Durata: 30-45 min per sesiune", "Frecvența: 2-3x/săptămână inițial", "Pauza: Minimum 4 ore între sesiuni"],
      sursa: "Bazat pe protocoalele din studiile publicate și recomandări generale de siguranță"
    }
  ];

  const mecanismeTehniceAvansate = [
    {
      aspect: "Biomecânica Vibrațiilor",
      descriere: "Oscilațiile multidirecționale creează unde de presiune în țesuturi, activând mecanoreceptorii senzitivi",
      teorie: "Bazat pe principii cunoscute ale stimulării mecanice",
      limitari: "Mecanismele exacte necesită cercetări suplimentare"
    },
    {
      aspect: "Teoria Gate Control",
      descriere: "Vibrațiile ar putea bloca semnalele de durere la nivelul măduvei spinale conform teoriei Melzack-Wall",
      evidenta: "Teorie acceptată, dar aplicarea specifică necesită mai multe studii",
      limitari: "Eficacitatea variază în funcție de tipul și originea durerii"
    },
    {
      aspect: "Stimularea Circulației",
      descriere: "Vibrațiile ar putea îmbunătăți fluxul sanguin prin activarea pompei musculare",
      observatii: "Efecte observate în studii mici, mecanismul exact neclar",
      limitari: "Necesare măsurători obiective în studii mai mari"
    }
  ];

  const disclaimerMedical = {
    text: "IMPORTANT: Această informație este prezentată în scop educativ și informativ și NU constituie consultanță medicală, diagnostic sau tratament medical. Informațiile prezentate NU înlocuiesc în niciun fel consultația, diagnosticul sau tratamentul unui medic calificat. Rezultatele pot varia semnificativ de la o persoană la alta.",
    importante: [
      "NU este un dispozitiv medical certificat în România",
      "NU este un tratament medical diagnosticat sau aprobat oficial",
      "Consultația medicală prealabilă este OBLIGATORIE",
      "NU înlocuiește tratamentele medicale standard sau prescrise",
      "Rezultatele individuale pot varia foarte mult",
      "Pot exista riscuri și contraindicații necunoscute",
      "Terapia poate să NU fie eficientă pentru toate persoanele",
      "Cercetarea este încă preliminară și necesită confirmări suplimentare"
    ],
    juridic: [
      "Furnizorul NU își asumă responsabilitatea pentru efectele adverse",
      "Informațiile prezentate nu garantează rezultate specifice",
      "Utilizarea se face pe propria răspundere după consultare medicală",
      "În caz de probleme de sănătate, contactați imediat un medic"
    ]
  };

  const intrebariFrec = [
    {
      q: "Cum funcționează exact terapia Andullation?",
      a: "Andullation folosește vibrații multidirecționale (5-40 Hz) care creează stimulare mecanică în țesuturi. Acestea pot activa mecanoreceptorii și influența transmisia semnalelor de durere conform teoriei 'gate control'. Mecanismele exacte sunt încă în curs de cercetare și necesită studii suplimentare pentru o înțelegere completă."
    },
    {
      q: "Ce dovezi științifice există pentru eficacitate?",
      a: "Studiul de la Universitatea din Sevilla (2019) cu 50 participanți a demonstrat reduceri de 52% în percepția durerii și îmbunătățiri de 45% în bunăstare. Review-ul sistematic din 2023 pe 860 subiecți confirmă beneficii pentru durerea lombară cronică, deși studiile sunt încă relativ mici și necesită replicare în populații mai mari pentru confirmarea rezultatelor."
    },
    {
      q: "Care sunt contraindicațiile și precautiile?",
      a: "Contraindicații absolute includ: tromboză acută, aneurisme, sarcină primul trimestru, implanturi cardiace nestabile. Contraindicații relative: hipertensiune severă necontrolată, epilepsie necontrolată, proteze articulare recente. Este esențială evaluarea medicală prealabilă și monitorizarea profesională. Parametrii siguri includ frecvențe de 5-35 Hz și durata maximă de 45 minute per sesiune."
    },
    {
      q: "Cât costă tratamentul și este cost-eficient?",
      a: "Costurile variază în funcție de furnizor și numărul de sesiuni necesare. Deși unele studii sugerează beneficii cost-efectivitate comparativ cu alte terapii pentru durerea cronică, sunt necesare analize economice mai extinse pentru confirmarea acestor beneficii în diverse sisteme de sănătate."
    },
    {
      q: "Care sunt frecvențele utilizate?",
      a: "Studiile disponibile utilizează frecvențe între 5-40 Hz. Frecvențele mai mici (8-12 Hz) par să fie mai eficiente pentru managementul durerii, în timp ce frecvențele mai mari (18-30 Hz) pot influența circulația. Cu toate acestea, protocoalele optime necesită încă cercetări suplimentare pentru standardizare."
    },
    {
      q: "Cât timp durează până se văd rezultate?",
      a: "Conform studiilor disponibile, unii pacienți raportează îmbunătățiri în primele săptămâni de tratament. Beneficiile complete pot apărea la 8-12 săptămâni de tratament consistent. Durabilitatea efectelor variază foarte mult în funcție de individ și condiția tratată, și necesită mai multe cercetări pentru o înțelegere precisă."
    },
    {
      q: "Este o terapie sigură?",
      a: "Studiile disponibile nu raportează efecte adverse grave semnificative la utilizarea corectă cu parametrii recomandați. Cu toate acestea, ca orice intervenție terapeutică, necesită evaluare medicală prealabilă, respectarea contraindicațiilor și supraveghere profesională. Siguranța pe termen lung necesită studii suplimentare."
    },
    {
      q: "Care este starea actuală a cercetării?",
      a: "Cercetarea Andullation este într-o fază promițătoare dar încă preliminară. Studiile existente arată beneficii pentru anumite condiții, în special durerea lombară cronică, dar majoritatea au eșantioane relativ mici. Sunt necesare studii randomizate controlate de mari dimensiuni pentru confirmarea eficacității și stabilirea protocoalelor optime."
    }
  ];

  return (
    <div>
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
                
                <p className="text-xl text-blue-100 mb-4 leading-relaxed">
                  Tehnologie de vibrații multidirecționale studiată pentru potențialul său în managementul durerii. 
                  Explorăm cercetările clinice disponibile cu transparență științifică.
                </p>
                
                <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-red-700 font-semibold">
                        <strong>DISCLAIMER MEDICAL:</strong> Această terapie NU este un dispozitiv medical certificat. 
                        Informațiile sunt în scop educativ. Consultația medicală prealabilă este OBLIGATORIE.
                      </p>
                    </div>
                  </div>
                </div>

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
                          ${studiu.credibilitate === 'evidență moderată' ? 'text-green-600 border-green-200' : 
                            studiu.credibilitate === 'evidență preliminară' ? 'text-yellow-600 border-yellow-200' :
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
    </div>
  );
}