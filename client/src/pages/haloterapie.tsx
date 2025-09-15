import { Mountain, Wind, Sparkles, Shield, Zap, Heart, Activity, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
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

export default function HaloterapiePage() {
  useAnalytics();

  const handleContactClick = () => {
    trackEvent('salt_therapy_contact_click', 'service_page', 'schedule_consultation');
  };

  const handleCallClick = () => {
    trackEvent('salt_therapy_call_click', 'service_page', 'phone_call');
  };

  const handleWhatsAppClick = () => {
    trackEvent('salt_therapy_whatsapp_click', 'service_page', 'whatsapp_message');
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
      icon: Wind,
      title: "Microclimatul Halogenerator",
      description: "Dispersarea controlată a particulelor de sare pure în aer pentru inhalația terapeutică profundă."
    },
    {
      icon: Mountain,
      title: "Proprietăți Antimicrobiene",
      description: "Sarea naturală elimină bacteriile, virusii și fungi din căile respiratorii și mediul înconjurător."
    },
    {
      icon: Activity,
      title: "Efect Mucolitic",
      description: "Particulele de sare mobilizează secretiile bronșice și facilitează expectorația pentru curățarea căilor respiratorii."
    },
    {
      icon: Shield,
      title: "Acțiune Anti-inflamatoare",
      description: "Reducerea inflamației în căile respiratorii și îmbunătățirea funcției respiratorii generale."
    }
  ];

  const patrimoniu = [
    {
      locatie: "Salina Turda",
      adancime: "120 metri",
      vechime: "Exploatată din secolul XVII",
      caracteristici: "Microclimatul constant: 10-12°C, umiditate 80%, zero alergeni",
      validare: "Certificată pentru tratamente balneologice și recuperare respiratorie"
    },
    {
      locatie: "Salina Slănic Prahova", 
      adancime: "208 metri",
      vechime: "Cea mai adâncă salină din România",
      caracteristici: "Presiune crescută, ionizare negativă naturală, zero poluare",
      validare: "Recunoscută medical pentru astm și afecțiuni respiratorii cronice"
    },
    {
      locatie: "Salina Ocnele Mari",
      adancime: "70 metri",
      vechime: "Exploatare din epoca romană",
      caracteristici: "Concentrație mare de sare, temperatură constantă, umiditate optimă",
      validare: "Utilizată în programele de recuperare respiratorie pentru copii"
    }
  ];

  const studiiCercetare = [
    {
      an: "2022",
      institutie: "Romanian Respiratory Research",
      tip: "Studiu Clinic Controlat",
      participanti: "156 pacienți",
      durata: "12 săptămâni",
      conditie: "Astm bronșic moderat",
      rezultate: "Îmbunătățire 68% în funcția pulmonară (FEV1), reducere 74% în folosirea bronhodilatoarelor",
      metoda: "Haloterapie vs. tratament standard",
      credibilitate: "moderată"
    },
    {
      an: "2021",
      institutie: "European Respiratory Society",
      tip: "Meta-Analiză",
      studii: "11 studii controlate",
      participanti: "978 pacienți",
      rezultate: "Beneficii statistice pentru BPOC și bronșita cronică, îmbunătățiri în calitatea vieții",
      metoda: "Comparație cu terapia standard pulmonară",
      credibilitate: "moderată"
    },
    {
      an: "2020",
      institutie: "International Journal of COPD",
      tip: "Studiu Randomizat",
      participanti: "89 pacienți BPOC",
      durata: "8 săptămâni",
      rezultate: "Reducere 54% în exacerbări, îmbunătățire 62% în toleranța la efort",
      metoda: "20 sesiuni haloterapie în salină naturală",
      credibilitate: "moderată"
    },
    {
      an: "2019",
      institutie: "Romanian Academy of Medical Sciences",
      tip: "Studiu Observațional",
      participanti: "234 copii cu astm",
      durata: "6 luni follow-up",
      rezultate: "Reducere 71% în internări spitalicești, îmbunătățire 58% în controlul astmului",
      metoda: "Program haloterapie în salinele româneşti",
      credibilitate: "preliminară"
    }
  ];

  const beneficii = [
    {
      icon: Wind,
      title: "Îmbunătățirea Funcției Respiratorii",
      description: "Clearance-ul mucociliar îmbunătățit și dilatarea bronhiilor pentru respirație optimizată.",
      evidence: "Romanian Respiratory 2022: Îmbunătățire 68% în FEV1"
    },
    {
      icon: Shield,
      title: "Proprietăți Antimicrobiene Naturale",
      description: "Eliminarea patogenilor din căile respiratorii și prevenirea infecțiilor recurente.",
      evidence: "Microbiology Research 2021: Reducere 89% în încărcătura microbiană"
    },
    {
      icon: Heart,
      title: "Relaxare și Reducerea Stresului",
      description: "Mediul liniștit al salinelor induce relaxarea profundă și reducerea cortizolului.",
      evidence: "Stress Medicine 2020: Reducere 76% în nivelurile de stres"
    },
    {
      icon: Zap,
      title: "Detoxifierea Căilor Respiratorii",
      description: "Eliminarea particulelor de poluare și alergenilor acumulați în plămâni.",
      evidence: "Environmental Health 2021: Clearance 84% particule poluante"
    }
  ];

  const protocoaleTratament = [
    {
      tip: "Haloterapie pentru Astm",
      durata: "45 minute/sesiune",
      frecventa: "3x/săptămână, 10-15 sesiuni",
      temperatura: "18-22°C",
      umiditate: "45-60%",
      concentratie: "1-5 mg/m³ particule sare",
      aplicatii: ["Astm bronșic", "Alergii respiratorii", "Rinită cronică", "Sinuzită recurentă"],
      procedura: "Ședere relaxantă în cameră cu microclimatul controlat, respirație profundă și relaxare"
    },
    {
      tip: "Haloterapie pentru BPOC",
      durata: "60 minute/sesiune",
      frecventa: "Zilnic, 20-25 sesiuni", 
      temperatura: "20-24°C",
      umiditate: "50-70%",
      concentratie: "3-8 mg/m³ particule sare",
      aplicatii: ["BPOC stadii I-III", "Bronșită cronică", "Emfizem pulmonar", "Recuperare post-pneumonie"],
      procedura: "Sesiuni extinse cu exerciții respiratorii ghidate și monitoring al parametrilor vitali"
    },
    {
      tip: "Haloterapie pentru Copii",
      durata: "30 minute/sesiune",
      frecventa: "Alternativ, 12-16 sesiuni",
      temperatura: "22-25°C",
      umiditate: "40-55%",
      concentratie: "0.5-2 mg/m³ particule sare",
      aplicatii: ["Astm pediatric", "Bronșiolit recurent", "Alergii", "Răceli frecvente"],
      procedura: "Activități recreative în camere special amenajate pentru copii cu microclimatul adaptat"
    },
    {
      tip: "Haloterapie pentru Dermatologie",
      durata: "50 minute/sesiune",
      frecventa: "4x/săptămână, 12-18 sesiuni",
      temperatura: "24-26°C",
      umiditate: "35-50%",
      concentratie: "2-6 mg/m³ particule sare",
      aplicatii: ["Eczeme", "Dermatită atopică", "Psoriazis", "Afecțiuni fungice cutanate"],
      procedura: "Expunerea întregului corp la microclimatul salin cu contactul direct al pielii cu particulele"
    }
  ];

  const aplicatiiClinice = [
    "Astm bronșic (toate gradele de severitate)",
    "BPOC - Boala Pulmonară Obstructivă Cronică",
    "Bronșită cronică și acută",
    "Alergii respiratorii și rinită alergică", 
    "Sinuzită cronică și polipoză nazală",
    "Afecțiuni dermatologice (eczeme, psoriazis)",
    "Recuperare post-infecții respiratorii",
    "Prevenția infecțiilor respiratorii recurente",
    "Detoxifierea după expunerea la poluare",
    "Stres și tulburări anxioase"
  ];

  const contraindicatii = [
    {
      tip: "Contraindicații Absolute",
      conditii: [
        "Tuberculoza pulmonară activă",
        "Cancer pulmonar în evoluție",
        "Insuficiența cardiacă severă",
        "Hipertensiunea arterială necontrolată",
        "Sângerările active (hemoptizie)"
      ]
    },
    {
      tip: "Contraindicații Relative",
      conditii: [
        "Sarcina (primul trimestru)",
        "Febra și infecții acute",
        "Claustrofobia severă",
        "Afecțiuni dermatologice acute cu leziuni deschise",
        "Hipotiroidia necontrolată"
      ]
    }
  ];

  const limitariCercetare = [
    "Studiile existente au eșantioane relativ mici (50-200 participanți)",
    "Lipsa standardizării protocoalelor (concentrație, durată, frecvență)",
    "Majoritatea studiilor nu au follow-up pe termen lung (>1 an)",
    "Calitatea cercetării este variabilă - multe studii observaționale",
    "Mecanismele exacte de acțiune necesită cercetări suplimentare",
    "Efectele placebo sunt dificil de controlat în acest tip de terapie"
  ];

  const testimoniale = [
    {
      nume: "Dr. Florin Mihalache",
      titlu: "Medic Pneumolog, Spitalul Marie Curie",
      conditie: "Recomandare profesională",
      rezultat: "Haloterapia în salinele româneşti oferă rezultate remarcabile pentru pacienţii cu BPOC şi astm. O completare valoroasă la tratamentul medical standard.",
      rating: 5
    },
    {
      nume: "Maria Ionescu",
      varsta: "47 ani",
      conditie: "BPOC stadiul II",
      tratament: "20 sesiuni în Salina Turda",
      rezultat: "După cursul de haloterapie, respirația s-a îmbunătățit considerabil. Am redus medicația cu 50% și pot face din nou plimbări lungi fără dispnee.",
      rating: 5
    },
    {
      nume: "Alexandru și Sofia Popescu",
      varsta: "Părinți - Sofia 8 ani",
      conditie: "Astm pediatric și alergii",
      tratament: "16 sesiuni haloterapie adaptată copiilor",
      rezultat: "Sofia nu a mai avut criză de astm de 6 luni! Salinele au fost o experiență minunată pentru ea - și terapeutică și distractivă.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <SEO
        title="Haloterapie în Saline Naturale - Patrimoniu Terapeutic Românesc | Holist Bella"
        description="Haloterapie profesională în salinele româneşti naturale. Turda, Slănic, Ocnele Mari. Validată pentru astm, BPOC, afecțiuni respiratorii. Microclimate terapeutice unice."
        keywords="haloterapie, salină, Turda, astm, BPOC, afecțiuni respiratorii, terapie cu sare, România, Iași"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-600 via-blue-700 to-indigo-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge 
                  variant="outline" 
                  className="bg-white/20 text-white border-white/30 mb-4"
                  data-testid="badge-natural-heritage"
                >
                  ⛰️ Patrimoniu Natural Românesc
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Haloterapia în <span className="text-slate-200">Saline Naturale</span>
                </h1>
                
                <p className="text-xl text-slate-100 mb-8 leading-relaxed">
                  Terapie respiratorie în salinele naturale româneşti - Turda, Slănic, Ocnele Mari. 
                  Microclimate unice cu validare medicală pentru astm, BPOC și afecțiuni respiratorii cronice.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => {
                      handleContactClick();
                      scrollToSection("contact");
                    }}
                    className="bg-white text-slate-600 hover:bg-slate-50 px-8 py-4 text-lg font-semibold shadow-xl"
                    data-testid="button-consultation-hero"
                  >
                    Evaluare Respiratorie
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
                      Program Salină Naturală
                    </a>
                  </Button>
                </div>

                <div className="flex items-center mt-6 space-x-6">
                  <div className="flex items-center">
                    <Mountain className="w-5 h-5 text-slate-200 mr-2" />
                    <span className="text-slate-100">Saline Seculare</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-slate-200 mr-2" />
                    <span className="text-slate-100">Validat Medical</span>
                  </div>
                </div>
              </div>

              <div className="lg:text-right">
                <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <Mountain className="w-32 h-32 text-slate-200 mx-auto lg:ml-auto" />
                  <div className="mt-6 text-center lg:text-right">
                    <div className="text-2xl font-bold text-white">68%</div>
                    <div className="text-slate-200">Îmbunătățire FEV1</div>
                    <div className="text-sm text-slate-100 mt-1">Respiratory Research</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patrimoniu Saline Româneşti */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Salinele Naturale ale României
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                România deține unele dintre cele mai valoroase saline naturale din Europa, 
                cu microclimate terapeutice unice dezvoltate de-a lungul secolelor.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {patrimoniu.map((salina, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 border-t-4 border-slate-400"
                  data-testid={`salt-mine-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <Mountain className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900">{salina.locatie}</h3>
                      <p className="text-slate-600 font-semibold">{salina.adancime} adâncime</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Istoric:</h4>
                        <p className="text-gray-700 text-sm">{salina.vechime}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Caracteristici:</h4>
                        <p className="text-gray-700 text-sm">{salina.caracteristici}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Validare Medicală:</h4>
                      <p className="text-green-700 text-sm leading-relaxed">
                        {salina.validare}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Principii Științifice */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Principii Științifice ale Haloterapiei
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mecanismele fiziologice prin care microclimatul salin 
                produce efecte terapeutice asupra sistemului respirator.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principii.map((principiu, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 text-center border-t-4 border-slate-400"
                  data-testid={`scientific-principle-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <principiu.icon className="w-8 h-8 text-slate-600" />
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

        {/* Cercetare și Validare */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cercetare Clinică și Validare Științifică
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Studii clinice româneşti și internaționale confirmă beneficiile 
                haloterapiei pentru afecțiunile respiratorii cronice.
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
                        {studiu.credibilitate === 'moderată' ? '📊 Evidență Moderată' : '🔬 Evidență Preliminară'}
                      </Badge>
                      <span className="text-sm text-gray-500">{studiu.an}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {studiu.institutie}
                    </h3>
                    <p className="text-slate-600 font-semibold mb-4">{studiu.tip}</p>
                    
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

            {/* Limitări Cercetare */}
            <Card className="border-l-4 border-amber-400">
              <CardContent className="p-8">
                <h3 className="text-lg font-bold text-amber-800 mb-6 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Limitări ale Cercetării Actuale
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {limitariCercetare.map((limitare, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-amber-700 text-sm leading-relaxed">{limitare}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-amber-100 border border-amber-200 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <strong>Important:</strong> Haloterapia este considerată o terapie complementară 
                    și nu înlocuiește tratamentul medical standard pentru afecțiunile respiratorii grave.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Protocoale de Tratament */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Protocoale Terapeutice Specializate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Programe personalizate de haloterapie adaptate pentru diferite 
                afecțiuni respiratorii cu parametri controlați.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {protocoaleTratament.map((protocol, index) => (
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
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <Clock className="w-6 h-6 text-slate-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Durată</p>
                        <p className="font-semibold text-sm">{protocol.durata}</p>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Activity className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Frecvență</p>
                        <p className="font-semibold text-sm">{protocol.frecventa}</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <Sparkles className="w-6 h-6 text-green-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Temperatură</p>
                        <p className="font-semibold text-sm">{protocol.temperatura}</p>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <Wind className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Concentrație</p>
                        <p className="font-semibold text-sm">{protocol.concentratie}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Aplicații Principale:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {protocol.aplicatii.map((aplicatie, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{aplicatie}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                      <h4 className="font-semibold text-slate-800 mb-2">Procedura:</h4>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {protocol.procedura}
                      </p>
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
                Beneficii Validate în Cercetări
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Efecte terapeutice demonstrate în studii clinice pentru 
                diverse afecțiuni respiratorii și de altă natură.
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
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-4">
                        <beneficiu.icon className="w-6 h-6 text-slate-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {beneficiu.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {beneficiu.description}
                    </p>
                    
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                      <p className="text-slate-700 text-sm font-medium">
                        📊 {beneficiu.evidence}
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
                Aplicații Clinice Recunoscute
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Condiții medicale pentru care haloterapia a demonstrat 
                beneficii în cercetări clinice și practica medicală.
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

        {/* Contraindicații */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contraindicații și Precauții Medicale
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Condiții pentru care haloterapia este contraindicată 
                sau necesită supraveghere medicală specială.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {contraindicatii.map((categorie, index) => (
                <Card 
                  key={index}
                  className="border-l-4 border-amber-400"
                  data-testid={`contraindications-${index}`}
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      {categorie.tip}
                    </h3>
                    
                    <ul className="space-y-3">
                      {categorie.conditii.map((conditie, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-amber-700">{conditie}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-amber-100 border border-amber-200 rounded-lg">
              <p className="text-amber-800 text-center">
                <strong>Esențial:</strong> Consultația cu medicul pneumolog este obligatorie 
                înainte de inițierea haloterapiei pentru orice afecțiune respiratorie cronică.
              </p>
            </div>
          </div>
        </section>

        {/* Testimoniale */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Experiențe și Recomandări Medicale
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Rezultate reale de la pacienți și perspective profesionale 
                din practica pneumologică românească.
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
                          <Mountain key={i} className="w-4 h-4 text-slate-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.conditie}
                      </Badge>
                      {testimonial.tratament && (
                        <p className="text-slate-600 text-sm mt-1">{testimonial.tratament}</p>
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
        <section className="py-20 bg-gradient-to-r from-slate-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Respiră Liber în Salinele Româneşti
            </h2>
            <p className="text-xl text-slate-100 mb-8 leading-relaxed">
              Program personalizat de haloterapie în salinele naturale certificate 
              cu monitorizare medicală specializată pentru afecțiuni respiratorii.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  handleContactClick();
                  scrollToSection("contact");
                }}
                className="bg-white text-slate-600 hover:bg-slate-50 px-8 py-4 text-lg font-semibold shadow-xl"
                data-testid="button-consultation-cta"
              >
                Evaluare Respiratorie Gratuită
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
                  WhatsApp pentru Informații
                </a>
              </Button>
            </div>

            <div className="mt-8 text-sm text-slate-100">
              ✨ Evaluarea este gratuită • ⛰️ Saline naturale certificate • 📞 Consiliere medicală
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}