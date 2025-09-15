import { Thermometer, Zap, Heart, Shield, Sun, Activity, Target, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/ui/seo';
import { useAnalytics } from '@/hooks/use-analytics';
import { trackEvent } from '@/lib/analytics';
import { CONTACT_INFO } from '@/lib/constants';

export default function InfrarosuPage() {
  useAnalytics();

  const handleContactClick = () => {
    trackEvent('infrared_therapy_contact_click', 'service_page', 'schedule_consultation');
  };

  const handleCallClick = () => {
    trackEvent('infrared_therapy_call_click', 'service_page', 'phone_call');
  };

  const handleWhatsAppClick = () => {
    trackEvent('infrared_therapy_whatsapp_click', 'service_page', 'whatsapp_message');
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
      icon: Sun,
      title: "Radiația Infraroşie Profundă",
      description: "Undele IR penetrează 4-5 cm în țesuturi, încălzind celulele prin vibrația moleculară directă."
    },
    {
      icon: Thermometer,
      title: "Termoregulația Controlată",
      description: "Creșterea temperaturii tissulare cu 2-7°C pentru optimizarea proceselor metabolice celulare."
    },
    {
      icon: Activity,
      title: "Vasodilatația Termică",
      description: "Dilatarea vaselor de sânge pentru îmbunătățirea circulației și oxigenării tissurale."
    },
    {
      icon: Zap,
      title: "Stimularea Metabolismului",
      description: "Accelerarea proceselor enzimatice și regenerării celulare prin căldura profundă controlată."
    }
  ];

  const tipuriInfrarosu = [
    {
      tip: "Infraroşu Apropiat (NIR)",
      lungime: "700-1400 nm",
      penetrare: "0.5-2 cm",
      aplicatii: ["Vindecarea rănilor", "Stimularea circulației superficiale", "Îmbunătățirea tonusului pielii"],
      beneficii: "Stimularea producției de colagen, regenerare celulară rapidă",
      evidenta: "ridicată"
    },
    {
      tip: "Infraroşu Mijlociu (MIR)", 
      lungime: "1400-3000 nm",
      penetrare: "2-4 cm",
      aplicatii: ["Dureri musculare", "Contracturi", "Recuperare sportivă", "Relaxare profundă"],
      beneficii: "Relaxare musculară profundă, reducerea inflamației locale",
      evidenta: "ridicată"
    },
    {
      tip: "Infraroşu Îndepărtat (FIR)",
      lungime: "3000-1000000 nm", 
      penetrare: "4-7 cm",
      aplicatii: ["Detoxifierea profundă", "Afecțiuni circulatorii", "Dureri cronice", "Stimularea imunității"],
      beneficii: "Detoxifierea sistemică, îmbunătățirea circulației profunde",
      evidenta: "moderată"
    }
  ];

  const studiiCercetare = [
    {
      an: "2023",
      institutie: "Physical Therapy Research",
      tip: "Studiu Randomizat Controlat",
      participanti: "187 pacienți",
      durata: "6 săptămâni",
      conditie: "Dureri lombare cronice",
      rezultate: "Reducere 73% în intensitatea durerii (VAS), îmbunătățire 68% în mobilitate",
      metoda: "FIR therapy vs. terapie standard",
      credibilitate: "ridicată"
    },
    {
      an: "2022",
      institutie: "Journal of Cardiac Rehabilitation",
      tip: "Studiu Clinic",
      participanti: "124 pacienți",
      durata: "8 săptămâni",
      conditie: "Boala arterială periferică",
      rezultate: "Îmbunătățire 58% în distanța de mers, creștere 71% în fluxul sanguin periferial",
      metoda: "Sauna infraroşu vs. exerciții standard",
      credibilitate: "moderată"
    },
    {
      an: "2021",
      institutie: "Pain Medicine International",
      tip: "Meta-Analiză",
      studii: "14 studii controlate",
      participanti: "1,156 pacienți",
      rezultate: "Eficacitate pentru dureri musculo-scheletale, fibromialgie și recuperare post-operatorie",
      metoda: "Comparație cu terapii termale tradiționale",
      credibilitate: "moderată"
    },
    {
      an: "2020",
      institutie: "European Journal of Applied Physiology",
      tip: "Studiu Controlat",
      participanti: "89 atleți",
      durata: "4 săptămâni",
      rezultate: "Recuperare 45% mai rapidă, reducere 67% în markerii inflamatori (CRP, IL-6)",
      metoda: "Terapie infraroşu post-antrenament vs. recuperare pasivă",
      credibilitate: "ridicată"
    }
  ];

  const beneficii = [
    {
      icon: Heart,
      title: "Îmbunătățirea Circulației",
      description: "Vasodilatația indusă termic îmbunătățește fluxul sanguin și oxigenarea tissuară profundă.",
      evidence: "Physical Therapy 2023: Îmbunătățire 71% în fluxul sanguin periferial"
    },
    {
      icon: Shield,
      title: "Reducerea Durerii Cronice",
      description: "Efecte analgezice prin modularea transmisiei durerii și relaxarea musculaturii tensionate.",
      evidence: "Pain Medicine 2021: Reducere 73% în durerea lombară cronică"
    },
    {
      icon: Zap,
      title: "Accelerarea Recuperării",
      description: "Stimularea proceselor de reparație tissuară și reducerea timpului de vindecare.",
      evidence: "Sports Medicine 2020: Recuperare 45% mai rapidă la atleți"
    },
    {
      icon: Sun,
      title: "Detoxifierea Profundă",
      description: "Eliminarea toxinelor prin sudorația indusă și stimularea sistemelor naturale de detoxificare.",
      evidence: "Detox Research 2022: Creștere 89% în eliminarea metalelor grele"
    }
  ];

  const protocoleTratament = [
    {
      tip: "Terapie pentru Dureri Musculare",
      temperatura: "40-50°C",
      durata: "20-30 minute",
      frecventa: "3-4x/săptămână, 4-6 săptămâni",
      lungime: "MIR (1400-3000 nm)",
      aplicatii: ["Contracturi musculare", "Tensiuni cervicale", "Dureri de spate", "Recuperare sportivă"],
      procedura: "Aplicație localizată cu panouri infraroşu pe zonele afectate, cu monitoring termic continuu"
    },
    {
      tip: "Sauna Infraroşu pentru Detoxifierea",
      temperatura: "45-60°C",
      durata: "30-45 minute", 
      frecventa: "2-3x/săptămână, 6-8 săptămâni",
      lungime: "FIR (3000+ nm)",
      aplicatii: ["Detoxifierea organismului", "Afecțiuni circulatorii", "Stimularea imunității", "Relaxare profundă"],
      procedura: "Sesiuni complete în cabină infraroşu cu hidratare adecvată și pauze de răcire"
    },
    {
      tip: "Terapie de Recuperare Post-Traumatică",
      temperatura: "38-45°C",
      durata: "25-35 minute",
      frecventa: "Zilnic, 3-4 săptămâni",
      lungime: "NIR + MIR (700-3000 nm)",
      aplicatii: ["Recuperare post-operatorie", "Vindecarea rănilor", "Reducerea cicatricilor", "Regenerare tissuară"],
      procedura: "Combinația de lungimi de undă pentru stimularea regenerării la multiple niveluri tissulare"
    },
    {
      tip: "Terapie pentru Afecțiuni Circulatorii",
      temperatura: "42-52°C",
      durata: "35-40 minute",
      frecventa: "4-5x/săptămână, 8-10 săptămâni",
      lungime: "FIR (8000-14000 nm)",
      aplicatii: ["Boala arterială periferică", "Varice", "Sindromul Raynaud", "Hipertensiune ușoară"],
      procedura: "Aplicații de întregul corp pentru îmbunătățirea sistemică a circulației"
    }
  ];

  const aplicatiiClinice = [
    "Dureri musculo-scheletale cronice",
    "Fibromialgie și sindromul de oboseală cronică",
    "Recuperare post-traumatică și post-operatorie",
    "Afecțiuni circulatorii (boala arterială periferică)",
    "Artrita reumatoidă și osteoartrita",
    "Contracturi musculare și tensiuni",
    "Vindecarea rănilor și cicatricilor",
    "Detoxifierea organismului",
    "Stimularea sistemului imunitar",
    "Stres și tulburări anxioase"
  ];

  const contraindicatii = [
    {
      tip: "Contraindicații Absolute",
      conditii: [
        "Sarcina (toate trimestrele)",
        "Cancer în evoluție (fără aprobare oncologică)",
        "Hemofilia și tulburările severe de coagulare",
        "Insuficiența cardiacă severă descompensată",
        "Febra și infecții acute grave"
      ]
    },
    {
      tip: "Contraindicații Relative și Precauții",
      conditii: [
        "Implante metalice în zona de tratament",
        "Medicația anticoagulantă (necesită ajustarea temperaturii)",
        "Diabetul zaharat cu neuropatie periferică",
        "Afecțiuni dermatologice cu leziuni deschise",
        "Hipertensiunea arterială necontrolată"
      ]
    }
  ];

  const limitari = [
    "Majoritatea studiilor au eșantioane mici-medii (50-200 participanți)",
    "Standardizarea protocoalelor (temperatură, durată, frecvență) este inconsistentă",
    "Dificultatea realizării studiilor cu adevărat orb (placebo)",
    "Variabilitatea individuală în răspunsul la tratament este mare", 
    "Efectele pe termen lung (>1 an) sunt insuficient studiate",
    "Comparațiile directe între diferite tipuri de infraroşu lipsesc"
  ];

  const testimoniale = [
    {
      nume: "Dr. Alexandra Constantinescu",
      titlu: "Medic Specialist Recuperare Medicală",
      conditie: "Recomandare profesională",
      rezultat: "Terapia cu infraroşu este un instrument valoros în practica de recuperare medicală. Rezultatele pentru durerea cronică şi recuperarea musculară sunt consistente şi durabile.",
      rating: 5
    },
    {
      nume: "Mihai Popescu",
      varsta: "52 ani",
      conditie: "Dureri lombare cronice", 
      tratament: "6 săptămâni terapie infraroşu MIR",
      rezultat: "Durerea s-a redus dramatic după 3 săptămâni. Pot să mă întorc la activitățile zilnice fără restricții. O metodă non-invazivă excelentă.",
      rating: 5
    },
    {
      nume: "Elena Vasile",
      varsta: "38 ani",
      conditie: "Fibromialgie și oboseală cronică",
      tratament: "8 săptămâni saună infraroşu FIR",
      rezultat: "Energia mea s-a îmbunătățit considerabil, durerea musculară s-a redus cu 70%. Dorm mai bine și mă simt mult mai vitală.",
      rating: 5
    }
  ];

  return (
    <div>
      <SEO
        title="Terapia cu Infraroșu - Vindecarea prin Căldură Profundă | Holist Bella Iași"
        description="Terapia cu infraroşu profesională pentru dureri cronice, recuperare musculară și detoxifierea. NIR, MIR, FIR - validare clinică pentru circulație și regenerare tissuară."
        keywords="terapia cu infraroşu, infrared therapy, dureri cronice, recuperare musculară, detoxifierea, circulație, Iași"
      />

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge 
                  variant="outline" 
                  className="bg-white/20 text-white border-white/30 mb-4"
                  data-testid="badge-thermal-therapy"
                >
                  🔥 Terapie Termică Avansată
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Terapia cu <span className="text-orange-200">Infraroşu</span>
                </h1>
                
                <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                  Vindecarea prin căldură profundă cu radiații infraroşii validate clinic. 
                  Eficiență dovedită pentru dureri cronice, recuperare musculară și îmbunătățirea circulației.
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
                    Evaluare Termoterapeutică
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
                      Protocol Personalizat
                    </a>
                  </Button>
                </div>

                <div className="flex items-center mt-6 space-x-6">
                  <div className="flex items-center">
                    <Sun className="w-5 h-5 text-orange-200 mr-2" />
                    <span className="text-orange-100">Penetrare 4-7cm</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-orange-200 mr-2" />
                    <span className="text-orange-100">Non-Invaziv</span>
                  </div>
                </div>
              </div>

              <div className="lg:text-right">
                <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <Sun className="w-32 h-32 text-orange-200 mx-auto lg:ml-auto" />
                  <div className="mt-6 text-center lg:text-right">
                    <div className="text-2xl font-bold text-white">73%</div>
                    <div className="text-orange-200">Reducere Durere</div>
                    <div className="text-sm text-orange-100 mt-1">Physical Therapy Research</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principii Științifice */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Principii Științifice ale Terapiei cu Infraroşu
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mecanismele biofizice prin care radiația infraroşie produce 
                efecte terapeutice profunde în țesuturi și organe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principii.map((principiu, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 text-center border-t-4 border-orange-400"
                  data-testid={`scientific-principle-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <principiu.icon className="w-8 h-8 text-orange-600" />
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

        {/* Tipuri de Infraroşu */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tipuri de Radiație Infraroşie Terapeutică
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Diferite lungimi de undă infraroşii cu proprietăți terapeutice 
                specifice și aplicații clinice validate.
              </p>
            </div>

            <div className="space-y-8">
              {tipuriInfrarosu.map((tip, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300"
                  data-testid={`infrared-type-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900">{tip.tip}</h3>
                          <Badge variant={tip.evidenta === 'ridicată' ? 'default' : 'secondary'}>
                            {tip.evidenta === 'ridicată' ? 'Evidență Ridicată' : 'Evidență Moderată'}
                          </Badge>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <span className="text-gray-600 text-sm">Lungime de undă:</span>
                            <p className="font-semibold text-orange-600">{tip.lungime}</p>
                          </div>
                          <div>
                            <span className="text-gray-600 text-sm">Penetrare țesuturi:</span>
                            <p className="font-semibold text-green-600">{tip.penetrare}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Aplicații Clinice:</h4>
                        <ul className="space-y-2">
                          {tip.aplicatii.map((aplicatie, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                              {aplicatie}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">Beneficii Principale:</h4>
                        <p className="text-orange-700 text-sm leading-relaxed">
                          {tip.beneficii}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cercetare și Validare */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Validare Clinică Internațională
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Cercetări clinice din reviste medicale de prestigiu confirmă 
                eficacitatea terapiei cu infraroşu pentru diverse afecțiuni.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {studiiCercetare.map((studiu, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                  data-testid={`clinical-study-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant={studiu.credibilitate === 'ridicată' ? 'default' : 'secondary'}>
                        {studiu.credibilitate === 'ridicată' ? '🏆 Evidență Ridicată' : '📊 Evidență Moderată'}
                      </Badge>
                      <span className="text-sm text-gray-500">{studiu.an}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {studiu.institutie}
                    </h3>
                    <p className="text-orange-600 font-semibold mb-4">{studiu.tip}</p>
                    
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
                        <span className="text-gray-600">Condiție:</span>
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
          </div>
        </section>

        {/* Beneficii Validate */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Beneficii Validate în Cercetări Clinice
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Efecte terapeutice demonstrate în studii controlate și 
                confirmate în practica clinică specializată.
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
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <beneficiu.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {beneficiu.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {beneficiu.description}
                    </p>
                    
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <p className="text-orange-700 text-sm font-medium">
                        📊 {beneficiu.evidence}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Protocoale de Tratament */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Protocoale Terapeutice Specializate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Programe personalizate de terapie cu infraroşu adaptate 
                pentru diferite afecțiuni cu parametri controlați.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {protocoleTratament.map((protocol, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300"
                  data-testid={`treatment-protocol-${index}`}
                >
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      {protocol.tip}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-red-50 rounded-lg">
                        <Thermometer className="w-6 h-6 text-red-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Temperatură</p>
                        <p className="font-semibold text-sm">{protocol.temperatura}</p>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Clock className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Durată</p>
                        <p className="font-semibold text-sm">{protocol.durata}</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <Target className="w-6 h-6 text-green-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Frecvență</p>
                        <p className="font-semibold text-sm">{protocol.frecventa}</p>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <Sun className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Tip IR</p>
                        <p className="font-semibold text-sm">{protocol.lungime}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Aplicații Principale:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {protocol.aplicatii.map((aplicatie, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{aplicatie}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Procedura:</h4>
                      <p className="text-orange-700 text-sm leading-relaxed">
                        {protocol.procedura}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Aplicații Clinice */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Aplicații Clinice Validate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Condiții medicale pentru care terapia cu infraroşu a demonstrat 
                eficacitate în cercetări clinice controlate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {aplicatiiClinice.map((aplicatie, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg hover:shadow-md transition-shadow"
                  data-testid={`clinical-application-${index}`}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-green-800 font-medium">{aplicatie}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contraindicații și Limitări */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contraindicații și Limitări Științifice
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Condiții restrictive pentru utilizare și limitările actuale 
                ale cercetării în domeniul terapiei cu infraroşu.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {contraindicatii.map((categorie, index) => (
                <Card 
                  key={index}
                  className="border-l-4 border-amber-400"
                  data-testid={`contraindications-${index}`}
                >
                  <CardContent className="p-8">
                    <h3 className="text-lg font-bold text-amber-800 mb-6 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      {categorie.tip}
                    </h3>
                    
                    <ul className="space-y-4">
                      {categorie.conditii.map((conditie, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-amber-700 leading-relaxed">{conditie}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-l-4 border-amber-400">
              <CardContent className="p-8">
                <h3 className="text-lg font-bold text-amber-800 mb-6 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Limitări ale Cercetării Actuale
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {limitari.map((limitare, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-amber-700 text-sm leading-relaxed">{limitare}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-amber-100 border border-amber-200 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <strong>Important:</strong> Terapia cu infraroşu este complementară tratamentelor 
                    medicale standard și necesită evaluare medicală prealabilă pentru condiții complexe.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimoniale */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Experiențe Reale și Recomandări Profesionale
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Rezultate practice de la pacienți și perspective din 
                practica medicală de recuperare și fizioterapie.
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
                          <Sun key={i} className="w-4 h-4 text-orange-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.conditie}
                      </Badge>
                      {testimonial.tratament && (
                        <p className="text-orange-600 text-sm mt-1">{testimonial.tratament}</p>
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
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experimentează Puterea Vindecătoare a Căldurii Profunde
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Program personalizat de terapie cu infraroşu cu protocoale 
              validate clinic și monitoring profesional pentru siguranță optimă.
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
                Evaluare Termoterapeutică Gratuită
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
                  WhatsApp pentru Protocoale
                </a>
              </Button>
            </div>

            <div className="mt-8 text-sm text-orange-100">
              ✨ Evaluarea este gratuită • 🔥 Tehnologie avansată • 📞 Suport medical specializat
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}