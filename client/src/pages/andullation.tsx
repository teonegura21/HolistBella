import { SEO } from "@/components/ui/seo";
import {
  ServiceHero,
  BenefitCards,
  ProcessTimeline,
  TestimonialGrid,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/services";
import { Waves, Activity, Heart, Shield, AlertCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { CONTACT_INFO } from "@/lib/constants";

export default function Andullation() {
  const handlePrimaryClick = () => {
    trackEvent("andullation_cta", "service_page", "whatsapp_click");
    window.open(CONTACT_INFO.whatsapp, "_blank");
  };

  return (
    <>
      <SEO
        title="Terapie Andullation în Iași – Vibrații Terapeutice pentru Durere și Recuperare | Holist Bella"
        description="Descoperă terapia Andullation în Iași - vibrații multidirecționale pentru managementul durerii cronice, îmbunătățirea circulației și reabilitare. Consultație informativă gratuită."
        keywords="andullation, vibrații terapeutice, durere cronică, drenaj limfatic, reabilitare, iasi, holist bella"
      />

      {/* Hero Section */}
      <ServiceHero
        badge="🌊 Tehnologie Germană Patentată"
        title="Terapia Andullation"
        titleHighlight="Recuperare prin vibrații stocastice și infraroșu profund"
        description="Tehnologie germană non-invazivă pentru reducerea durerii, relaxare neuromusculară și echilibru emoțional. Prin stimularea microcirculației ajută la gestionarea stresului și la îmbunătățirea somnului. Susține procesele naturale de recuperare. Abordare bazată pe evidențe clinice."
        stats={[
          { number: "30-60", label: "Minute ședință" },
          { number: "50+", label: "Studii clinice" },
        ]}
        gradientFrom="blue-600"
        gradientVia="cyan-600"
        gradientTo="teal-600"
        heroIcon={Waves}
        onPrimaryClick={handlePrimaryClick}
      />

      {/* Ce este Andullation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Ce este Andullation
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            ANDUMEDIC 3 Pro este un dispozitiv medical produs în Germania în strânsă colaborare cu oameni
            de știință, clinici universitare și medici, care oferă 20 de programe de terapii Andullation
            ce contribuie la tratarea unei game largi de afecțiuni. Andullation reprezintă o tehnologie medicală unică ce combină efectul benefic al vibrațiilor
            stocastice cu căldură profundă infraroșie, oferind beneficii importante pentru sănătate și
            bună-dispoziție.
          </p>
        </div>
      </section>

      {/* Video Demonstrativ */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cum Funcționează Terapia Andullation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descoperă prin acest video demonstrativ cum tehnologia germană de vibrații multidirecționale 
              poate contribui la îmbunătățirea stării tale de sănătate și bunăstare
            </p>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/OgwdVhH4448?hl=ro&cc_lang_pref=ro&cc_load_policy=1&rel=0&modestbranding=1"
                title="Demonstratie Terapia Andullation - Vibrații Multidirecționale pentru Sănătate"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Stats */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">🎥</div>
                <div className="text-lg font-semibold text-gray-900">Video Demonstrativ</div>
                <div className="text-gray-600">Tehnologia în acțiune</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-teal-600 mb-2">⚡</div>
                <div className="text-lg font-semibold text-gray-900">Vibrații 5-40 Hz</div>
                <div className="text-gray-600">Frecvențe terapeutice</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">🌟</div>
                <div className="text-lg font-semibold text-gray-900">Rezultate Vizibile</div>
                <div className="text-gray-600">Din primele ședințe</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Broșură și Certificări */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificări și Documentație Medicală
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descoperă validările științifice și certificările profesionale ale terapiei Andullation
            </p>
          </div>

          {/* PDF Viewer cu scroll orizontal */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-4 shadow-xl">
              <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-inner">
                <iframe
                  src="/brosura-andullation.pdf#toolbar=1&navpanes=0&scrollbar=1&page=1&view=FitH"
                  className="w-full h-full border-0"
                  title="Broșură Andullation - Certificări și Documentație Medicală"
                  loading="lazy"
                ></iframe>
              </div>
              
              {/* Controale PDF */}
              <div className="flex items-center justify-between mt-4 px-4">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => window.open('/brosura-andullation.pdf', '_blank')}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Descarcă PDF
                  </button>
                  <button 
                    onClick={() => window.open('/brosura-andullation.pdf', '_blank')}
                    className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    Vizualizare Completă
                  </button>
                </div>
                
                <div className="text-sm text-gray-500">
                  Derulează orizontal pentru a naviga prin pagini
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Certificări Medicale</h3>
                <p className="text-gray-600 text-sm">Validări profesionale și studii clinice documentate</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Tehnologie Germană</h3>
                <p className="text-gray-600 text-sm">Inovație și calitate în tehnologia medicală</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Studii Clinice</h3>
                <p className="text-gray-600 text-sm">Cercetări peer-reviewed și evidențe științifice</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Documentație completă disponibilă pentru consultare</span>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficii Principale */}
      <BenefitCards
        heading="Principiile Terapeutice Andullation"
        description="Tehnologie patentată care activează mecanismele naturale de vindecare"
        benefits={[
          {
            icon: Activity,
            title: "Producția de energie în celule (ATP)",
            description:
              "Vibrațiile stocastice generează micro-curenți ce stimulează celulele, iar infraroșul profund facilitează pătrunderea mecanică în țesuturi – rezultă mai multă energie celulară și funcționare mai bună a organelor.",
            evidence: "Bazat pe principii biochimice celulare",
          },
          {
            icon: Shield,
            title: "Reducerea durerii",
            description:
              "Semnalele pozitive acoperă semnalele de durere, iar aplicările regulate favorizează eliberarea de endorfine, analgezicul natural al corpului.",
            evidence: "Teoria gate control validată clinic",
          },
          {
            icon: Heart,
            title: "Stimularea circulației sanguine",
            description:
              "Separă corpusculii sanguini lipiți, crește fluxul și aportul de nutrienți/oxigen către țesuturi.",
            evidence: "Efecte observate în studii hemodinamice",
          },
          {
            icon: Waves,
            title: "Activarea mecanismelor de relaxare",
            description:
              "Fiziologic: vasodilatație indusă de infraroșu și relaxare musculară prin vibrații. Mental: echilibrarea sistemului nervos vegetativ (scade hiper-simpaticul).",
            evidence: "Validat prin monitorizare neurovegetativă",
          },
          {
            icon: Activity,
            title: "Stimularea sistemului limfatic",
            description:
              "Pune în mișcare limfa, sprijinind detoxifierea, metabolismul și reziliența imună.",
            evidence: "Bazat pe principii de drenaj limfatic",
          },
          {
            icon: Waves,
            title: "Vibrații Multidirecționale",
            description:
              "Tehnologie unică de vibrații în frecvențe de 5-40 Hz cu amplitudine variabilă pentru stimularea profundă a țesuturilor și activarea mecanoreceptorilor.",
            evidence: "Bazat pe principii biomecanice validate",
          },
          {
            icon: Activity,
            title: "Stimulare Neuro-Musculară",
            description:
              "Activează reflexele naturale ale mușchilor pentru îmbunătățirea circulației și reducerea tensiunii musculare prin stimulare mecanică controlată.",
            evidence: "Teoria gate control a durerii",
          },
          {
            icon: Heart,
            title: "Îmbunătățire Circulatorie",
            description:
              "Promovează circulația sanguină și limfatică prin stimularea pompei musculare naturale, contribuind la reducerea inflamației și detoxifiere.",
            evidence: "Efecte observate în studii clinice",
          },
          {
            icon: Shield,
            title: "Abordare Non-Invazivă",
            description:
              "Terapie sigură și nedureroasă, fără efecte secundare semnificative raportate în studiile clinice disponibile.",
            evidence: "Validat prin cercetări independente",
          },
        ]}
        columns={3}
        colorScheme="blue"
      />

      {/* Beneficii pentru vindecare naturală și stare de bine */}
      <BenefitCards
        heading="Andullation – Beneficii pentru vindecare naturală și stare de bine"
        description="Descoperă cum terapia Andullation poate transforma sănătatea și calitatea vieții tale"
        benefits={[
          {
            icon: Heart,
            title: "Stimulează circulația, metabolismul și imunitatea",
            description:
              "Hrănire mai bună a țesuturilor și vitalitate crescută prin îmbunătățirea fluxului sanguin și activarea proceselor metabolice naturale.",
            evidence: "Validat prin studii hemodinamice",
          },
          {
            icon: Waves,
            title: "Drenaj limfatic și detoxifiere",
            description:
              "Sprijină eliminarea reziduurilor acide și a agenților patogeni, cu impact pozitiv asupra stării generale de sănătate și energie.",
            evidence: "Bazat pe principii de drenaj limfatic",
          },
          {
            icon: Shield,
            title: "Relaxare profundă și somn mai bun",
            description:
              "Reduce stresul, echilibrează sistemul nervos vegetativ (simpatic/parasimpatic) și susține ritmul natural somn-veghe pentru o odihnă mai reparatoare.",
            evidence: "Monitorizare neurovegetativă validată",
          },
          {
            icon: Activity,
            title: "Ameliorarea durerilor",
            description:
              "Sprijină reducerea disconfortului în cazul durerilor de spate, gât/umeri, sciatică, migrene, fibromialgie și disconfort articular prin suprapunerea stimulilor pozitivi și eliberarea de endorfine.",
            evidence: "Teoria gate control demonstrată clinic",
          },
          {
            icon: Heart,
            title: "Sprijin pentru digestie și compoziție corporală",
            description:
              "Stimulează tranzitul intestinal, mărește fluxul sanguin către organele interne și poate contribui la îmbunătățirea compoziției corporale.",
            evidence: "Efecte observate în practica clinică",
          },
          {
            icon: Waves,
            title: "Masaj reflexogen tălpi și palme",
            description:
              "Influențează benefic organele corespunzătoare zonelor reflexe prin stimularea punctelor de acupresură naturale de pe tălpi și palme.",
            evidence: "Bazat pe principiile reflexologiei",
          },
          {
            icon: Activity,
            title: "Echilibru fizic și mental",
            description:
              "Îmbunătățește viteza de reacție, coordonarea și starea generală de bine prin optimizarea conexiunilor neuromusculare.",
            evidence: "Testări neuromusculare validate",
          },
          {
            icon: Shield,
            title: "Performanță și anti-îmbătrânire",
            description:
              "Utilă la încălzire și recuperare sportivă, susține sinteza naturală de colagen pentru un aspect mai tonic al pielii și vitalitate crescută.",
            evidence: "Studii dermatologice și sportive",
          },
        ]}
        columns={2}
        colorScheme="teal"
      />

      {/* Cum Decurge o Ședință */}
      <ProcessTimeline
        heading="Procesul Terapeutic Andullation"
        description="Protocol sigur și eficient pentru managementul durerii și recuperare"
        steps={[
          {
            number: "1",
            title: "Evaluare Inițială",
            description:
              "Evaluare medicală prealabilă obligatorie pentru a determina potrivirea terapiei și a stabili parametrii siguri de frecvență și intensitate.",
            duration: "5-10 minute",
            elements: [
              "Verificare contraindicații",
              "Evaluare starea de sănătate",
              "Stabilire parametri personalizați",
            ],
          },
          {
            number: "2",
            title: "Sesiune Terapeutică",
            description:
              "Te așezi confortabil pe patul de terapie. Vibrațiile multidirecționale (5-40 Hz) sunt aplicate în mod progresiv, cu monitorizare continuă pentru confort maxim.",
            duration: "30-60 minute",
            elements: [
              "Vibrații multidirecționale 5-40 Hz",
              "Amplitudine ajustabilă 2-8 mm",
              "Monitorizare parametri vitali",
            ],
            benefits: [
              "Stimulare mecanoreceptori",
              "Activare pompă musculară",
              "Reducere percepție durere",
            ],
          },
          {
            number: "3",
            title: "Recomandări și Monitorizare",
            description:
              "După sesiune, discutăm despre senzațiile experimentate și stabilim planul pentru ședințele viitoare, cu ajustări bazate pe progresul observat.",
            duration: "5-10 minute",
            elements: [
              "Feedback post-sesiune",
              "Ajustare protocol terapeutic",
              "Planificare ședințe ulterioare",
            ],
            benefits: [
              "Protocol personalizat",
              "Monitorizare progres",
              "Optimizare rezultate",
            ],
          },
        ]}
        colorScheme="blue"
      />

      {/* Trust Building - Aplicații Clinice */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aplicații Clinice Validate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Domenii în care cercetarea susține potențialul terapeutic al Andullation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-600">2023</span>
                <span className="text-sm text-gray-500">860 subiecți</span>
              </div>
              <h4 className="font-semibold text-gray-900">Durere Lombară Cronică</h4>
              <p className="text-gray-700">
                Review sistematic (14 studii) confirmă îmbunătățiri în intensitatea durerii și funcționalitate
              </p>
              <p className="text-sm text-blue-600">Evidență moderată</p>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-600">2024</span>
                <span className="text-sm text-gray-500">44 pacienți</span>
              </div>
              <h4 className="font-semibold text-gray-900">Durere Cervicală</h4>
              <p className="text-gray-700">
                Studiu randomizat arată îmbunătățiri vs. terapia convențională
              </p>
              <p className="text-sm text-blue-600">Evidență moderată</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-600">2019</span>
                <span className="text-sm text-gray-500">50 participanți</span>
              </div>
              <h4 className="font-semibold text-gray-900">Durere Lombară Acută</h4>
              <p className="text-gray-700">
                Protocolul cu Terapia Andullation a fost asociat cu scăderea intensității durerii și îmbunătățirea stării de bine raportate de participanți, comparativ cu evaluarea inițială.
              </p>
              <p className="text-sm text-blue-600">Evidență preliminară</p>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-600">2023</span>
                <span className="text-sm text-gray-500">20 pacienți</span>
              </div>
              <h4 className="font-semibold text-gray-900">Reabilitare</h4>
              <p className="text-gray-700">
                În context de recuperare, utilizarea Terapiei Andullation a fost asociată cu reducerea durerii (măsurată pe scala vizuală analogă) și creșterea confortului general.
              </p>
              <p className="text-sm text-blue-600">Evidență preliminară</p>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500 mt-12">
            <p className="text-amber-700 leading-relaxed">
              <strong>Poziție Științifică:</strong> Andullation arată potențial promițător pentru managementul durerii cronice, în special lombară, dar cercetarea este încă în dezvoltare. Este eficientă ca terapie complementară, nu înlocuitor pentru tratamentul medical. Consultația medicală prealabilă este obligatorie.
            </p>
          </div>
        </div>
      </section>

      {/* Testimoniale */}
      <TestimonialGrid
        heading="Rezultate obținute cu Terapia Andullation"
        description="Clienții noștri împărtășesc cum vibrațiile terapeutice i-au ajutat"
        testimonials={[
          {
            text: "După 4 săptămâni de Terapie Andullation, durerea lombară cronică s-a diminuat vizibil. Mă ridic mai ușor dimineața și pot sta la birou fără pauze dese. Am început sceptică, dar ședințele blânde m-au ajutat: mai puțină rigiditate, mă mișc mai natural și pot urca scările fără să mă opresc.",
            name: "Ioana B.",
            age: "47 ani",
            condition: "Durere lombară cronică",
            rating: 5,
          },
          {
            text: "Am fost sceptică inițial, dar după prima ședință am simțit o relaxare profundă. După 6 ședințe, mobilitatea cervicală s-a îmbunătățit semnificativ și durerea este mult mai controlabilă.",
            name: "Cristina M.",
            age: "52 ani",
            condition: "Durere cervicală",
            rating: 5,
          },
          {
            text: "Migrenele mele intense au devenit mult mai rare și mai puțin severe după 3 luni de terapie. Ședințele de Andullation m-au ajutat să reduc semnificativ medicația pentru dureri de cap.",
            name: "Elena R.",
            age: "39 ani",
            condition: "Dureri intense de cap și migrene",
            rating: 5,
          },
          {
            text: "Stresul de la serviciu îmi afecta foarte mult sănătatea. După ședințele de Andullation mă simt mult mai relaxată și echilibrată. Tensiunea din umeri și gât s-a redus considerabil.",
            name: "Maria T.",
            age: "44 ani",
            condition: "Stres",
            rating: 5,
          },
          {
            text: "Aveam probleme grave cu somnul de ani de zile. După 2 luni de terapie Andullation dorm mult mai bine, mă odihnesc și nu mai am trezirii nocturne frecvente.",
            name: "Gheorghe N.",
            age: "56 ani",
            condition: "Tulburări de somn",
            rating: 5,
          },
          {
            text: "Circulația mea slabă și umflăturile la picioare s-au îmbunătățit mult cu terapia Andullation. Simt că sangele circulă mai bine și picioarele nu se mai înțepenesc.",
            name: "Ana V.",
            age: "61 ani",
            condition: "Probleme circulatorii și limfatice",
            rating: 5,
          },
          {
            text: "Artrita de la mâini îmi făcea viața foarte dificilă. Cu terapia Andullation durerea s-a redus mult și pot din nou să scriu și să lucrez la calculator fără disconfort major.",
            name: "Petru S.",
            age: "58 ani",
            condition: "Dureri de încheieturi, artrită",
            rating: 5,
          },
          {
            text: "Reumatismul îmi provoca dureri constante în toate articulațiile. Terapia Andullation m-a ajutat să reduc inflamația și să am ziluri mult mai confortabile.",
            name: "Carmen D.",
            age: "64 ani",
            condition: "Reumatism și osteoporoză",
            rating: 5,
          },
          {
            text: "Sindromul picioarelor nelinștite îmi făcea nopțile un coșmar. După 6 săptămâni de Andullation, senzațiile neplăcute s-au redus dramatic și pot dormi liniștită.",
            name: "Roxana M.",
            age: "42 ani",
            condition: "Sindromul picioarelor nelinștite",
            rating: 5,
          },
          {
            text: "Hernia de disc lombară îmi limita foarte mult mobilitatea. Terapia Andullation m-a ajutat să reduc durerea și să îmi recapăt încrederea în mișcare fără să mă tem de durere.",
            name: "Adrian C.",
            age: "48 ani",
            condition: "Hernie de disc lombară",
            rating: 5,
          },
          {
            text: "Cu hernia cervicală aveam dureri groaznice până în brațe. După terapia Andullation pot din nou să îmi mișc capul liber și durerea iridiată s-a redus enorm.",
            name: "Mihaela F.",
            age: "51 ani",
            condition: "Hernie de disc cervicală",
            rating: 5,
          },
          {
            text: "Parkinsonul îmi afecta echilibrul și coordonarea. Terapia Andullation m-a ajutat să îmi îmbunătățesc stabilitatea și să mă simt mai sigură pe picioare.",
            name: "Vasile L.",
            age: "67 ani",
            condition: "Parkinson",
            rating: 5,
          },
          {
            text: "Ca terapeut fizic, folosesc Andullation ca adjuvant în programele de reabilitare. Pacienții raportează reducerea durerii și îmbunătățirea circulației după doar câteva ședințe.",
            name: "Dr. Andrei P.",
            title: "Fizioterapeut",
            rating: 5,
          },
        ]}
        columns={3}
      />

      {/* FAQ */}
      <ServiceFAQ
        heading="Întrebări Frecvente despre Andullation"
        description="Răspunsuri bazate pe cercetări clinice și experiență practică"
        faqs={[
          {
            question: "Cum funcționează exact terapia Andullation?",
            answer:
              "Andullation utilizează vibrații multidirecționale (5-40 Hz) care creează stimulare mecanică în țesuturi. Acestea activează mecanoreceptorii și pot influența transmisia semnalelor de durere conform teoriei 'gate control'. Mecanismele exacte sunt încă în curs de cercetare, dar studiile arată beneficii pentru managementul durerii.",
          },
          {
            question: "Care sunt contraindicațiile terapiei?",
            answer:
              "Contraindicații absolute: tromboză acută, aneurisme, sarcină primul trimestru, implanturi cardiace nestabile. Contraindicații relative: hipertensiune severă necontrolată, epilepsie, proteze articulare recente.",
          },
          {
            question: "Cât timp durează să văd rezultate?",
            answer:
              "Studiile arată că unii pacienți observă îmbunătățiri după primele 1-2 săptămâni. Beneficiile complete apar de obicei după 8-12 săptămâni de tratament consistent (2-3 ședințe/săptămână). Durabilitatea efectelor variază în funcție de condiția tratată și stilul de viață.",
          },
          {
            question: "Este terapia sigură?",
            answer:
              "Da, Andullation este considerată sigură când se respectă contraindicațiile și parametrii recomandați. Studiile nu raportează efecte adverse.",
          },
          {
            question: "Cât costă tratamentul?",
            answer:
              "Costurile variază în funcție de numărul de ședințe și pachetul ales. Recomandăm consultație informativă gratuită pentru a discuta protocolul optim și pachetul cel mai eficient din punct de vedere cost-beneficiu pentru nevoile tale specifice.",
          },
          {
            question: "Ce dovezi științifice există?",
            answer:
              "Studiul Universitatea Sevilla (2019) arată îmbunătățiri semnificative în reducerea durerii și creșterea bunăstării participanților. Review sistematic 2023 (860 subiecți) confirmă beneficii pentru durerea lombară, durere cervicala, stres, insomnii etc. Cercetarea este promițătoare dar necesită studii mai mari pentru standardizare clinică.",
          },
        ]}
        layout="cards"
      />

      {/* CTA Final */}
      <ServiceCTA
        heading="Dorești să Descoperi Beneficiile Andullation?"
        description="Programează o consultație pentru a discuta aplicabilitatea terapiei Andullation pentru situația ta specifică, bazat pe evidențele științifice disponibile și nevoile tale individuale."
        gradientFrom="blue-600"
        gradientTo="teal-600"
        ctaPrimary="Consultația prin WhatsApp"
        trustSignals={[
          "🔬 Bazat pe studii clinice validate",
        ]}
        onPrimaryClick={handlePrimaryClick}
      />
    </>
  );
}