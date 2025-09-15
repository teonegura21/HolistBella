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
      tip: "Studiu Observațional Multicentric", 
      participanti: "250 pacienți",
      durata: "6 luni",
      rezultate: "Îmbunătățiri în calitatea vieții (SF-36 score +18%), durere cronică (-34% VAS), fibromialgie, migrene",
      limitari: "Finanțat de producător, fără grup de control independent, doar observațional, selecție bias posibil",
      credibilitate: "evidență limitată",
      metodologie: "Open-label, non-randomized, sponsored study"
    },
    {
      an: "2023",
      tip: "Meta-Analiză Internă",
      studii: "8 studii Healy",
      participanti: "1,847 subiecți total",
      rezultate: "Dimensiune efect Hedge's g = 0.757 (efecte moderate), 95% CI [0.42, 1.09]",
      limitari: "TOATE studiile conduse de departamentul R&D al producătorului, heterogenitate ridicată",
      credibilitate: "evidență foarte limitată",
      metodologie: "Company-sponsored meta-analysis, conflict of interest"
    },
    {
      an: "2022",
      tip: "Studiu Pilot Controlat",
      participanti: "64 pacienți",
      durata: "8 săptămâni",
      conditie: "Fibromialgie",
      rezultate: "Reduceri în FIQ (Fibromyalgia Impact Questionnaire) cu 22% vs. placebo 8%",
      limitari: "Eșantion mic, finanțat de producător, urmărire pe termen scurt",
      credibilitate: "evidență preliminară",
      metodologie: "Single-blind, company-funded pilot"
    },
    {
      an: "2021",
      tip: "Studiu Retrospectiv",
      participanti: "312 utilizatori",
      durata: "3 luni",
      rezultate: "87% raportează îmbunătățiri subjective în diverse simptome",
      limitari: "Design retrospectiv, lipsă control, date auto-raportate, selection bias masiv",
      credibilitate: "evidență foarte limitată",
      metodologie: "User survey, no control group, subjective outcomes only"
    }
  ];

  const criticismAcademic = [
    {
      institutie: "McGill University (Office for Science and Society)",
      pozitie: "\"Healy este pseudoștiință veche în haine noi\"",
      detalii: "Critica conceptele de 'câmp informațional' și 'frecvențe personalizate' ca fiind nesusținute științific. Dr. Joe Schwarcz: 'Aceleași afirmații nefondate ca ale dispozitivelor Rife din anii 1930'",
      anul: "2023",
      credibilitate: "instituție academică prestigioasă"
    },
    {
      institutie: "Memorial Sloan Kettering Cancer Center",
      pozitie: "\"Decenii de studii nu au găsit baza științifică solidă\"",
      detalii: "Nu există dovezi fiabile că frecvențele electromagnetice pe corp funcționează pentru tratarea bolilor. Departamentul de Medicina Integrativă: 'Dovezile pentru terapiile cu frecvențe rămân anecdotice'",
      anul: "2024",
      credibilitate: "centru medical de renume mondial"
    },
    {
      institutie: "FDA (Food and Drug Administration)",
      pozitie: "Clearance limitată doar pentru durerea acută/cronică locală",
      detalii: "Disclaimer oficial: 'programele cu frecvențe nu sunt destinate să trateze, vindece sau prevină boala și nu au fost evaluate de FDA pentru aceste utilizări'",
      anul: "2019-prezent",
      credibilitate: "agenție de reglementare federală"
    },
    {
      institutie: "European Medicines Agency (EMA)",
      pozitie: "\"Nu există dovezi suficiente pentru pretențiile terapeutice avansate\"",
      detalii: "Evaluarea din 2023: 'Dispozitivele cu microcurent au clearance pentru durere, dar pretențiile despre diagnostic și tratament prin frecvențe nu sunt susținute'",
      anul: "2023",
      credibilitate: "agenție europeană de reglementare"
    },
    {
      institutie: "British Medical Journal (BMJ)",
      pozitie: "\"Dovezi insuficiente pentru justificarea costurilor\"",
      detalii: "Editorial 2024: 'Costurile ridicate ale dispozitivelor cu pretențiuni extraordinare nu sunt justificate de calitatea dovezilor disponibile'",
      anul: "2024",
      credibilitate: "revistă medicală peer-reviewed prestigioasă"
    },
    {
      institutie: "American Medical Association (AMA)",
      pozitie: "\"Căutare de dovezi independente necesară\"",
      detalii: "Poziție oficială: 'Pacienții ar trebui să caute terapii cu studii independente, peer-reviewed, înainte de a investi în dispozitive costisitoare cu pretențiuni nevalidate'",
      anul: "2024",
      credibilitate: "asociația medicală națională SUA"
    },
    {
      institutie: "Quackwatch",
      pozitie: "\"Studiu de caz despre cum prosperă gadgeturile pseudoștiințifice\"",
      detalii: "Dr. Stephen Barrett: 'Healy combină microcurentul legitim cu teorii nefondate despre câmpuri energetice pentru a crea aparența științifică'",
      anul: "2023",
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
      q: "Ce este dispozitivul Healy și care sunt specificațiile tehnice exacte?",
      a: "Healy este un dispozitiv portabil care combină microcurent medical validat (2-1000 μA, 0.25-100 Hz) cu pretențiile nevalidate despre 'câmpuri informaționale'. Dispozitivul măsoară 110x57x17mm, cântărește 54g, cu baterie Li-Ion 380mAh. Componenta de microcurent are clearance FDA, dar pretențiile despre 'frecvențe personalizate' și 'analiză cuantică' nu sunt susținute științific."
    },
    {
      q: "Care sunt protocoalele clinice specifice și parametrii tehnici?",
      a: "Healy oferă 120+ programe predefinite cu frecvențe 0.25-100 Hz și intensități 2-1000 μA. Sesiunile durează 20-60 minute. Protocoalele includ: Gold - pentru profesioniști (144 programe), Silver - uz general (110 programe), Blue - pentru familie (35 programe). Totuși, nu există standarde clinice validate pentru selecția programelor sau parametrilor, iar 'personalizarea' prin 'Quantum Sensor' nu are bază științifică."
    },
    {
      q: "Ce spun agențiile de reglementare internaționale (FDA, EMA) despre Healy?",
      a: "FDA: Clearance DOAR pentru durere acută/cronică locală (Clasa II medical device). EMA (2023): 'dovezi insuficiente pentru pretențiile avansate'. Ambele agenții specifică că 'programele cu frecvențe nu sunt destinate să trateze, vindece sau prevină boala'. Clearance-ul se referă doar la siguranța dispozitivului ca stimulator electric, nu la eficacitatea pretențiilor despre diagnostic sau tratament prin frecvențe."
    },
    {
      q: "Ce metodologii au studiile Healy și de ce sunt considerate nefiabile?",
      a: "Studiul 2024 (n=250): observațional, open-label, fără control, finanțat de producător. Meta-analiza 2023: toate cele 8 studii conduse de R&D intern cu conflict de interese major. Studiul pilot 2022 (n=64): single-blind dar cu outcome-uri subiective. Design-ul retrospectiv 2021: doar user survey fără validare clinică. Lipsa studiilor independente, peer-reviewed, cu control placebo adecvat invalidează pretențiile de eficacitate."
    },
    {
      q: "Care sunt pozițiile instituțiilor medicale de prestigiu despre Healy?",
      a: "McGill University (2023): 'pseudoștiință în haine noi'. Memorial Sloan Kettering (2024): 'dovezi anecdotice insuficiente'. BMJ Editorial (2024): 'costuri nejustificate de calitatea dovezilor'. AMA: 'căutați terapii cu studii independente'. European Medicines Agency (2023): 'dovezi insuficiente pentru pretențiile avansate'. Consensul academic este clar: componenta de microcurent este validă pentru durere, dar pretențiile despre diagnostic prin frecvențe sunt nefondate."
    },
    {
      q: "Care sunt costurile reale și modelul comercial MLM al Healy?",
      a: "Costuri: Healy Gold €3,900, Silver €2,100, Blue €499 + CloudCluster €12.99/lună + aplicații premium €9.99/lună. Total anual: €600-4,100+. Model MLM: distribuitori câștigă comisioane din vânzări (10-25%) creând conflicte de interese în prezentarea beneficiilor. Comparativ: dispozitive TENS/microcurent validate medical costă €50-300. Investiția mare pentru terapie nevalidată independent reprezintă o considerație etică importantă."
    },
    {
      q: "Există alternative validate științific la pretențiile Healy?",
      a: "Pentru durere: TENS/microcurent medical validat (€50-300) cu studii independente. Pentru fibromialgie: exerciții aerobice, terapie cognitiv-comportamentală, medicamente validate FDA. Pentru diagnosticul medical: investigații clinice standard (analize sânge, imagistică). Pentru wellness: modificări lifestyle, nutriție, sport - cu costuri mult mai mici și beneficii dovedite. Componenta validă a Healy (microcurent) poate fi obținută prin dispozitive mai ieftine fără pretențiile pseudoștiințifice."
    },
    {
      q: "Cum să evaluez obiectiv pretențiile despre Healy?",
      a: "Criterii de evaluare: 1) Căutați studii independente, peer-reviewed în PubMed. 2) Verificați dacă instituții medicale recunoscute susțin pretențiile. 3) Analizați conflictele de interese în studii. 4) Comparați costurile cu alternative validate. 5) Consultați medicul pentru sfaturi obiective. 6) Fiți sceptici față de testimoniale și 'dovezi anecdotice'. Știința necesită replicare independentă, nu doar studii finanțate de producător. Pentru investiții mari în sănătate, căutați consensul medical mainstream."
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

        {/* Protocoale și Specificații Tehnice */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Specificații Tehnice și Protocoale Detaliate
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Analiză tehnică detaliată a dispozitivului Healy, specificațiilor hardware și 
                protocoalelor clinice cu evaluarea transparentă a validării științifice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Specificații Hardware</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-2 text-blue-600">Parametri Electrici</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Curent: 2-1000 μA (microamperi)</li>
                      <li>• Frecvență: 0.25-100 Hz</li>
                      <li>• Tensiune: 0-15V</li>
                      <li>• Forma undei: Pătrat modificat</li>
                      <li>• 2 canale de ieșire independente</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-2 text-green-600">Specificații Fizice</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Dimensiuni: 110×57×17 mm</li>
                      <li>• Greutate: 54 grame</li>
                      <li>• Baterie: Li-Ion 380mAh</li>
                      <li>• Autonomie: 3-5 ore utilizare</li>
                      <li>• Conectivitate: Bluetooth 4.0</li>
                      <li>• Certificare: CE, FDA Class II</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Versiuni și Programe</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-2 text-purple-600">Healy Gold (€3,900)</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 144 programe predefinite</li>
                      <li>• Todas aplicațiile incluse</li>
                      <li>• 'Quantum Sensor' pentru 'analiză'</li>
                      <li>• Acces la programele profesionale</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-2 text-orange-600">Healy Silver (€2,100)</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 110 programe standardde</li>
                      <li>• Aplicații de bază incluse</li>
                      <li>• Fără 'Quantum Sensor'</li>
                      <li>• Pentru uz casnic/clinic</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-2 text-blue-600">Healy Blue (€499)</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 35 programe de bază</li>
                      <li>• Doar aplicația principală</li>
                      <li>• Funcții limitate</li>
                      <li>• Intrare în ecosistem</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">
                    Evaluarea Critică a Protocoalelor
                  </h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    <strong>Importante de știut:</strong> În timp ce specificațiile electrice sunt standard pentru microcurent, 
                    pretențiile despre 'frecvențe personalizate', 'Quantum Sensor' și 'câmpuri informaționale' nu au validare științifică. 
                    Nu există criterii clinice obiective pentru selectarea programelor sau parametrilor. 
                    Majoritatea beneficiilor raportate se pot atribui efectului placebo sau componentei validate de microcurent pentru durere.
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

        {/* Analiză Comprehensivă Academică */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Analiză Comprehensivă a Evidenței
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Evaluare sistematică a tuturor cercetărilor disponibile cu analiză critică a metodologiei, 
                conflictelor de interese și implicațiilor pentru practica clinică.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-sm text-blue-800 font-medium">Studii Identificate</div>
                <div className="text-xs text-blue-600 mt-1">2021-2024</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-sm text-red-800 font-medium">Finanțate de Producător</div>
                <div className="text-xs text-red-600 mt-1">Conflict Major Interese</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-3xl font-bold text-amber-600 mb-2">2,473</div>
                <div className="text-sm text-amber-800 font-medium">Participanți Totali</div>
                <div className="text-xs text-amber-600 mt-1">Diverse Condiții</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-600 mb-2">0</div>
                <div className="text-sm text-gray-800 font-medium">Studii Independente</div>
                <div className="text-xs text-gray-600 mt-1">Peer-reviewed</div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sumar Academic</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-green-700 mb-3">✓ Aspecte Pozitive Identificate</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Componentă de microcurent validată pentru durere</li>
                    <li>• Clearance FDA pentru siguranță (Class II device)</li>
                    <li>• Ușurință de utilizare și portabilitate</li>
                    <li>• Efecte adverse minime raportate</li>
                    <li>• Rezultate pozitive în studiile sponsorizate (cu limitări)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-3">✗ Limitări Critice</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Absența totală a studiilor independente</li>
                    <li>• Pretențiile 'cuantice' fără bază științifică</li>
                    <li>• Costuri extreme nejustificate de evidență</li>
                    <li>• Model MLM cu conflicte de interese</li>
                    <li>• Critica unanimă a instituțiilor medicale prestigioase</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-red-200 bg-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-red-800 mb-4">⚠️ Concluzie Academică Critică</h3>
              <p className="text-red-700 text-sm leading-relaxed mb-4">
                <strong>Consensul academic este clar:</strong> Deși componenta de microcurent a Healy este validă pentru durerea locală, 
                pretențiile despre 'frecvențe personalizate', 'câmpuri informaționale' și 'diagnostic cuantic' sunt considerate pseudoștiință 
                de către instituții medicale majore (McGill, Memorial Sloan Kettering, FDA, EMA, BMJ, AMA).
              </p>
              <div className="bg-red-100 p-4 rounded border border-red-300">
                <p className="text-red-800 text-sm font-medium">
                  <strong>Recomandarea Academică:</strong> Pentru microcurent legitimate, considerați alternative validate și mai ieftine. 
                  Pentru orice afecțiune medicală, consultați medici calificați și căutați terapii cu studii independente, peer-reviewed. 
                  Investițiile mari în dispozitive cu pretențiuni extraordinare necesită dovezi extraordinare - care în cazul Healy lipsesc complet.
                </p>
              </div>
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