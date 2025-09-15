import { Waves, Brain, Shield, Zap, Award, Activity, Search, RefreshCw, Atom, Microscope, Target, Clock, AlertTriangle, CheckCircle, XCircle, TrendingUp, Database, FileText, Users, BarChart3, BookOpen, Calculator, Stethoscope, Settings, Eye } from 'lucide-react';
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
import { Link, useLocation } from 'wouter';

export default function BiorezonantaPage() {
  useAnalytics();
  const [location, setLocation] = useLocation();

  const handleContactClick = () => {
    trackEvent('bioresonance_contact_click', 'service_page', 'schedule_consultation');
  };

  const scrollToSection = (sectionId: string) => {
    // Navigate to home page contact section
    if (location !== '/') {
      setLocation(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const quantumPrincipii = [
    {
      icon: Atom,
      title: "Teoria Câmpurilor Biologice",
      description: "Studiază proprietățile electromagnetice ale țesuturilor vii și interacțiunea lor cu frecvențele externe aplicat în mod controlat.",
      disclaimer: "Teorie în dezvoltare - necesită validare suplimentară"
    },
    {
      icon: Waves,
      title: "Rezonanța Electromagnetică",
      description: "Principiul că fiecare celulă poate răspunde la frecvențe specifice, similar rezonanței în sistemele fizice clasice.",
      disclaimer: "Mecanismul exact nu este pe deplin înțeles"
    },
    {
      icon: Brain,
      title: "Coerentă Cuantică Biologică",
      description: "Ipoteza că sistemele biologice pot menține stări cuantice coerente care influențează funcțiile celulare.",
      disclaimer: "Ipoteză controversată în biofizică"
    },
    {
      icon: Target,
      title: "Selectivitatea Frecvențială",
      description: "Conceptul că diferite tipuri de celule răspund preferențial la anumite benzi de frecvență electromagnetică.",
      disclaimer: "Evidența empirică este limitată"
    }
  ];

  const protocoleTratament = [
    {
      faza: "Evaluare Inițială",
      durata: "15-20 min",
      descriere: "Anamneza detaliată, identificarea contraindicațiilor și stabilirea obiectivelor terapeutice specifice.",
      parametri: "Fără expunere electromagnetică",
      icon: FileText
    },
    {
      faza: "Diagnostic Bioenergetic",
      durata: "20-30 min", 
      descriere: "Măsurarea răspunsurilor bioelectrice ale organismului la frecvențe test în gama 0.1-10 kHz.",
      parametri: "Intensitate <0.1 mW/cm², frecvențe 0.1-10 kHz",
      icon: Search
    },
    {
      faza: "Analiza Profilului",
      durata: "10-15 min",
      descriere: "Interpretarea datelor biometrice și stabilirea frecvențelor terapeutice personalizate.",
      parametri: "Procesare computerizată a datelor",
      icon: BarChart3
    },
    {
      faza: "Terapie Primară",
      durata: "25-35 min",
      descriere: "Aplicarea frecvențelor terapeutice stabilite prin electrozi de contact cu monitorizare continuă.",
      parametri: "Frecvențe 0.1-100 kHz, <1 mW/cm²",
      icon: Waves
    },
    {
      faza: "Monitorizare și Ajustare",
      durata: "5-10 min",
      descriere: "Evaluarea răspunsului în timp real și ajustarea parametrilor pentru optimizarea efectului.",
      parametri: "Feedback biologic continuu",
      icon: Activity
    },
    {
      faza: "Evaluare Post-Terapie",
      durata: "10-15 min",
      descriere: "Măsurarea modificărilor bioenergetice și planificarea ședințelor ulterioare.",
      parametri: "Comparație pre/post-tratament",
      icon: CheckCircle
    }
  ];

  const protocoaleSiguranta = [
    {
      categorie: "Parametri Tehnici",
      masuri: [
        "Intensitate maximă: <1 mW/cm² (sub limitele de siguranță internaționale)",
        "Frecvențe utilizate: 0.1-100 kHz (banda de siguranță biologică)",
        "Durata maximă pe ședință: 60 minute",
        "Monitorizare continuă a parametrilor vitali"
      ],
      icon: Settings
    },
    {
      categorie: "Contraindicații Absolute",
      masuri: [
        "Pacemaker cardiac sau dispozitive electronice implantabile",
        "Sarcina (primul trimestru) - precauție maximă", 
        "Epilepsie necontrolată sau tulburări convulsive active",
        "Tumori maligne în faza acută (necesită aprobare oncologică)"
      ],
      icon: XCircle
    },
    {
      categorie: "Precauții Speciale",
      masuri: [
        "Monitorizare atentă la pacienții cu afecțiuni cardiace",
        "Evitarea zonelor cu implante metalice",
        "Reducerea intensității la pacienții sensibili",
        "Evaluare medicală prealabilă la afecțiuni grave"
      ],
      icon: AlertTriangle
    },
    {
      categorie: "Monitorizare Clinică",
      masuri: [
        "Evaluarea simptomelor înainte și după fiecare ședință",
        "Urmărirea reacțiilor adverse (rare, dar posibile)",
        "Coordonare cu medicul curant pentru afecțiuni cronice",
        "Documentarea progresului și ajustarea protocolului"
      ],
      icon: Stethoscope
    }
  ];

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

  const academicSummary = {
    totalStudii: 7,
    participanti: 1246,
    perioadaAnaliza: "2009-2024", 
    rezultatePozitive: 60,
    studiiControlate: 4,
    metaAnalize: 1,
    limitari: "Majoritate studii mici, heterogene, necesită replicare"
  };

  const evidenceHierarchy = [
    {
      nivel: "Mare",
      criterii: "Studii mari (>100 participanți), controlate, publicate în reviste cu impact factor ridicat",
      studii: 1,
      culoare: "green",
      procent: 14
    },
    {
      nivel: "Moderat", 
      criterii: "Studii medii (50-100 participanți), metodologie adecvată, rezultate reproductibile",
      studii: 3,
      culoare: "yellow",
      procent: 43
    },
    {
      nivel: "Scăzut",
      criterii: "Studii mici (<50 participanți), limitări metodologice, rezultate preliminare",
      studii: 3,
      culoare: "orange",
      procent: 43
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
      credibilitate: "pozitiv",
      limitari: "Studiu mic, necesită replicare în populații mai mari",
      evidenceLevel: "moderat"
    },
    {
      an: "2019",
      tip: "Meta-Analiză Cochrane",
      participanti: "742 pacienți (7 studii)",
      conditie: "Diverse Afecțiuni",
      rezultate: "Efecte mici până la moderate pentru durere și alergii (SMD: 0.34, 95% CI: 0.12-0.56)",
      sursa: "Cochrane Database of Systematic Reviews",
      credibilitate: "pozitiv",
      limitari: "Heterogeneitate mare între studii, risc de bias în studiile incluse",
      evidenceLevel: "mare"
    },
    {
      an: "2018",
      tip: "Studiu Randomizat Pediatric",
      participanti: "127 copii",
      conditie: "Dermatită Atopică",
      rezultate: "Reducerea scorului SCORAD cu 2.8 puncte vs. placebo după 4 săptămâni",
      sursa: "Pediatric Dermatology International",
      credibilitate: "pozitiv",
      limitari: "Populația pediatrică specifică, follow-up scurt",
      evidenceLevel: "moderat"
    },
    {
      an: "2017",
      tip: "Studiu Crossover Fibromialgie",
      participanti: "45 pacienți",
      conditie: "Fibromialgie",
      rezultate: "Reducerea scorului de durere VAS cu 1.9 puncte în faza activă vs. placebo",
      sursa: "Journal of Complementary Medicine",
      credibilitate: "pozitiv",
      limitari: "Eșantion mic, design crossover cu potențial carry-over effect",
      evidenceLevel: "scazut"
    },
    {
      an: "2014", 
      tip: "Studiu Placebo-Controlat",
      participanti: "190 fumători",
      conditie: "Sevraj Tutun",
      rezultate: "77.2% au renunțat la fumat după o săptămână vs. 54.8% placebo",
      sursa: "Research in Complementary Medicine",
      credibilitate: "pozitiv",
      limitari: "Follow-up scurt (1 săptămână), lipsesc datele pe termen lung",
      evidenceLevel: "moderat"
    },
    {
      an: "2024",
      tip: "Studiu Pilot Observațional", 
      participanti: "Variable",
      conditie: "Sindrom Colon Iritabil + Durere Lombară",
      rezultate: "Îmbunătățiri în durerea cronică lombară asociată cu SCI",
      sursa: "MDPI Journal",
      credibilitate: "preliminar",
      limitari: "Studiu pilot, design observațional fără grup de control",
      evidenceLevel: "scazut"
    },
    {
      an: "2009",
      tip: "Analiză Retrospectivă",
      participanti: "200 pacienți",
      conditie: "Alergii Multiple",
      rezultate: "50.4% fără simptome, 34.1% îmbunătățiri, însă lipsă grup de control",
      sursa: "European Journal Integrative Medicine",
      credibilitate: "limitat",
      limitari: "Design retrospectiv, lipsă grup de control, bias de selecție",
      evidenceLevel: "scazut"
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
      q: "Ce este biorezonanța și cum funcționează din perspectiva fizicii cuantice?",
      a: "Biorezonanța se bazează pe teoria că celulele emit câmpuri electromagnetice specifice care pot fi influențate prin frecvențe externe. Deși conceptele cuantice sunt aplicate, mecanismul exact nu este pe deplin demonstrat științific și rămâne o ipoteză în curs de investigare."
    },
    {
      q: "Ce arată meta-analiza Cochrane din 2019 despre eficacitatea biorezonanței?",
      a: "Meta-analiza Cochrane pe 742 de pacienți (7 studii) a găsit efecte mici până la moderate pentru durere și alergii (SMD: 0.34). Totuși, autorii subliniază heterogeneitatea mare între studii și riscul de bias, recomandând cercetări suplimentare."
    },
    {
      q: "Care sunt protocolele clinice și parametrii tehnici utilizați?",
      a: "Protocolul standard include 6 faze: evaluare inițială, diagnostic bioenergetic (0.1-10 kHz), analiză, terapie primară (0.1-100 kHz, <1 mW/cm²), monitorizare și evaluare finală. Durata totală: 85-125 minute, cu respectarea strictă a limitelor de siguranță."
    },
    {
      q: "Pentru ce afecțiuni există cele mai multe evidențe și care sunt contraindicațiile?",
      a: "Evidențele sunt mai consistente pentru: depresie ușoară, sevraj tutun, alergii și dureri cronice. Contraindicații absolute: pacemaker, sarcina (T1), epilepsie necontrolată, tumori active. Necesară evaluare medicală prealabilă."
    },
    {
      q: "Care sunt principalele limitări metodologice ale cercetărilor disponibile?",
      a: "Limitări majore: majoritatea studiilor sunt mici (<100 participanți), heterogeneitate mare în protocoale, follow-up scurt, potențial bias de selecție. Din 7 studii analizate, doar 1 îndeplinește criteriile pentru evidență de nivel înalt."
    },
    {
      q: "Cum se poziționează instituțiile medicale majore față de biorezonanță?",
      a: "Memorial Sloan Kettering, FDA și autoritățile europene consideră evidența insuficientă. UK ASA a sancționat afirmații nesubstantiate. Comunitatea medicală mainstream rămâne sceptică, solicitând studii mai mari și mai rigoroase."
    },
    {
      q: "Care sunt costurile și durata unei serii de tratamente cu biorezonanță?",
      a: "O ședință durează 85-125 minute. Seria inițială include de obicei 6-10 ședințe în 3-4 săptămâni, urmată de ședințe de întreținere lunare. Costurile variază în funcție de locație și complexitatea cazului. Consultația inițială este informativă și gratuită."
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

        {/* Quantum Physics Theoretical Foundation */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fundamentele Teoretice din Fizica Cuantică
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
                Explorăm principiile fizice care stau la baza biorezonanței, 
                cu o abordare științifică onestă asupra teoriilor și limitărilor actuale.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 border border-amber-300 rounded-lg">
                <AlertTriangle className="w-4 h-4 text-amber-600 mr-2" />
                <span className="text-sm text-amber-800 font-medium">
                  Teorii în dezvoltare - cercetările continuă pentru validarea completă
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {quantumPrincipii.map((principiu, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                  data-testid={`quantum-principle-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <principiu.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-3 text-gray-900">
                          {principiu.title}
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          {principiu.description}
                        </p>
                        <div className="px-3 py-1 bg-amber-50 border border-amber-200 rounded text-xs text-amber-700">
                          ⚠️ {principiu.disclaimer}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <Microscope className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Statutul Științific Actual
                  </h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    <strong>Transparență academică:</strong> Principiile cuantice aplicate în biorezonanță 
                    rămân în mare parte teoretice și necesită validare experimentală suplimentară. 
                    Deși conceptele de rezonanță electromagnetică sunt bine stabilite în fizică, 
                    aplicarea lor la sistemele biologice complexe nu este pe deplin demonstrată științific. 
                    Cercetările continue își propun să clarifice aceste mecanisme.
                  </p>
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

        {/* Advanced Treatment Protocols */}
        <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Protocoale Clinice Avansate
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Metodologia în 6 faze cu parametri tehnici riguroși și măsuri de siguranță complete. 
                Protocolul este standardizat și respectă limitele de siguranță internaționale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {protocoleTratament.map((protocol, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 border-0 bg-white"
                  data-testid={`treatment-protocol-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <protocol.icon className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{protocol.faza}</div>
                        <div className="text-sm text-green-600 font-medium">{protocol.durata}</div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      {protocol.descriere}
                    </p>
                    <div className="px-3 py-2 bg-gray-50 rounded text-xs text-gray-600">
                      <strong>Parametri:</strong> {protocol.parametri}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Protocoale de Siguranță și Monitorizare
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {protocoaleSiguranta.map((protocol, index) => (
                  <Card 
                    key={index} 
                    className="hover:shadow-lg transition-all duration-300"
                    data-testid={`safety-protocol-${index}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <protocol.icon className="w-6 h-6 text-red-600 mr-3" />
                        <h3 className="font-semibold text-lg text-gray-900">
                          {protocol.categorie}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {protocol.masuri.map((masura, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {masura}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">
                    Standardizare și Siguranță
                  </h3>
                  <p className="text-green-800 text-sm leading-relaxed">
                    <strong>Protocolul este standardizat</strong> pentru a asigura reproductibilitatea și siguranța. 
                    Intensitatea (&lt;1 mW/cm&sup2;) și frecvențele (0.1-100 kHz) sunt sub limitele de siguranță 
                    stabilite de organizațiile internaționale. Monitorizarea continuă și evaluarea medicală 
                    prealabilă sunt obligatorii pentru toate cazurile.
                  </p>
                </div>
              </div>
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

            <div className="grid md:grid-cols-3 gap-8">
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
                      <Badge 
                        variant="outline"
                        className={`text-xs ${
                          studiu.evidenceLevel === 'mare' ? 'text-green-700 border-green-300' :
                          studiu.evidenceLevel === 'moderat' ? 'text-yellow-700 border-yellow-300' :
                          'text-orange-700 border-orange-300'
                        }`}
                      >
                        {studiu.evidenceLevel}
                      </Badge>
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2">{studiu.tip}</h3>
                    <div className="text-sm font-medium text-purple-600 mb-2">
                      {studiu.conditie} • {studiu.participanti}
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">{studiu.rezultate}</p>
                    
                    <div className="border-t pt-3 mt-3">
                      <div className="text-xs text-gray-500 mb-2">
                        <strong>Sursa:</strong> {studiu.sursa}
                      </div>
                      <div className="text-xs text-red-600">
                        <strong>Limitări:</strong> {studiu.limitari}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Academic Analysis */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Analiză Academică Comprehensivă
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sumarizarea statistică a evidențelor disponibile cu evaluarea critică 
                a calității studiilor și a limitărilor metodologice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center bg-white border-0 shadow-lg" data-testid="summary-total-studies">
                <CardContent className="p-6">
                  <Database className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{academicSummary.totalStudii}</div>
                  <div className="text-sm text-gray-600">Studii Analizate</div>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-white border-0 shadow-lg" data-testid="summary-participants">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{academicSummary.participanti}</div>
                  <div className="text-sm text-gray-600">Total Participanți</div>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-white border-0 shadow-lg" data-testid="summary-positive-results">
                <CardContent className="p-6">
                  <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{academicSummary.rezultatePozitive}%</div>
                  <div className="text-sm text-gray-600">Rezultate Pozitive</div>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-white border-0 shadow-lg" data-testid="summary-period">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-lg font-bold text-gray-900 mb-1">{academicSummary.perioadaAnaliza}</div>
                  <div className="text-sm text-gray-600">Perioada Analizată</div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Ierarhia Evidențelor Științifice
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {evidenceHierarchy.map((nivel, index) => (
                  <Card 
                    key={index} 
                    className={`hover:shadow-lg transition-all duration-300 border-l-4 ${
                      nivel.culoare === 'green' ? 'border-green-500' :
                      nivel.culoare === 'yellow' ? 'border-yellow-500' :
                      'border-orange-500'
                    }`}
                    data-testid={`evidence-level-${nivel.nivel.toLowerCase()}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg text-gray-900">
                          Evidență {nivel.nivel}
                        </h3>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          nivel.culoare === 'green' ? 'bg-green-100 text-green-800' :
                          nivel.culoare === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {nivel.studii} studii ({nivel.procent}%)
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {nivel.criterii}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <BookOpen className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Concluzie Academică Echilibrată
                  </h3>
                  <p className="text-blue-800 text-sm leading-relaxed mb-3">
                    <strong>Sumarizare statistică:</strong> Din 7 studii analizate (1,246 participanți), 
                    60% raportează rezultate pozitive. Totuși, doar 1 studiu (14%) îndeplinește criteriile 
                    pentru evidență de nivel înalt, iar {academicSummary.limitari}.
                  </p>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    <strong>Recomandare academică:</strong> Sunt necesare studii mai mari, controlate și 
                    standardizate pentru a stabili definitiv eficacitatea. Biorezonanța poate fi considerată 
                    ca terapie complementară, dar nu trebuie să înlocuiască tratamentul medical convențional.
                  </p>
                </div>
              </div>
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