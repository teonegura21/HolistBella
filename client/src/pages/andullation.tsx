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

export default function Andullation() {
  const handlePrimaryClick = () => {
    trackEvent("andullation_cta", "service_page", "whatsapp_click");
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
        title="Terapie Andullation"
        titleHighlight="Vibrații Multidirecționale pentru Vindecare Naturală"
        description="Descoperă tehnologia germană de vibrații multidirecționale pentru managementul durerii cronice, îmbunătățirea circulației și susținerea proceselor naturale de recuperare. Abordare non-invazivă cu evidențe clinice."
        stats={[
          { number: "5-40", label: "Hz Frecvență" },
          { number: "30-45", label: "Minute ședință" },
          { number: "50+", label: "Studii clinice" },
        ]}
        gradientFrom="blue-600"
        gradientVia="cyan-600"
        gradientTo="teal-600"
        heroIcon={Waves}
        onPrimaryClick={handlePrimaryClick}
      />

      {/* Beneficii Principale */}
      <BenefitCards
        heading="Principiile Terapeutice Andullation"
        description="Tehnologie patentată care activează mecanismele naturale de vindecare"
        benefits={[
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
        columns={4}
        colorScheme="blue"
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
            duration: "30-45 minute",
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
                Studiu clinic: reducere durere 52%, îmbunătățire bunăstare 45%
              </p>
              <p className="text-sm text-blue-600">Evidență preliminară</p>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-600">2023</span>
                <span className="text-sm text-gray-500">20 pacienți</span>
              </div>
              <h4 className="font-semibold text-gray-900">Reabilitare</h4>
              <p className="text-gray-700">
                Studiu pilot: reducere durere 45-57% pe scala vizuală analogă
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
        heading="Experiențe Reale cu Andullation"
        description="Clienții noștri împărtășesc cum vibrațiile terapeutice i-au ajutat"
        testimonials={[
          {
            text: "După 4 săptămâni de terapie Andullation, durerea lombară cronică s-a redus cu peste 50%. Este incredibil cum vibrațiile blânde pot face o diferență atât de mare în mobilitate și calitate a vieții.",
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
              "Contraindicații absolute: tromboză acută, aneurisme, sarcină primul trimestru, implanturi cardiace nestabile. Contraindicații relative: hipertensiune severă necontrolată, epilepsie, proteze articulare recente. Evaluarea medicală prealabilă este obligatorie pentru siguranță.",
          },
          {
            question: "Cât timp durează să văd rezultate?",
            answer:
              "Studiile arată că unii pacienți observă îmbunătățiri după primele 1-2 săptămâni. Beneficiile complete apar de obicei după 8-12 săptămâni de tratament consistent (2-3 ședințe/săptămână). Durabilitatea efectelor variază în funcție de condiția tratată și stilul de viață.",
          },
          {
            question: "Este terapia sigură?",
            answer:
              "Da, Andullation este considerată sigură când se respectă contraindicațiile și parametrii recomandați. Studiile nu raportează efecte adverse grave. Totuși, necesită evaluare medicală prealabilă și monitorizare profesională, mai ales în primele ședințe.",
          },
          {
            question: "Cât costă tratamentul?",
            answer:
              "Costurile variază în funcție de numărul de ședințe și pachetul ales. Recomandăm consultație informativă gratuită pentru a discuta protocolul optim și pachetul cel mai eficient din punct de vedere cost-beneficiu pentru nevoile tale specifice.",
          },
          {
            question: "Ce dovezi științifice există?",
            answer:
              "Studiul Universitatea Sevilla (2019) arată reducere durere 52% și îmbunătățire bunăstare 45%. Review sistematic 2023 (860 subiecți) confirmă beneficii pentru durerea lombară. Cercetarea este promițătoare dar necesită studii mai mari pentru standardizare clinică.",
          },
        ]}
        layout="cards"
      />

      {/* CTA Final */}
      <ServiceCTA
        heading="Dorești să Descoperi Beneficiile Andullation?"
        description="Programează o consultație informativă gratuită pentru a discuta aplicabilitatea terapiei Andullation pentru situația ta specifică, bazat pe evidențele științifice disponibile și nevoile tale individuale."
        gradientFrom="blue-600"
        gradientTo="teal-600"
        ctaPrimary="Consultația prin WhatsApp"
        trustSignals={[
          "✨ Consultație gratuită și informativă",
          "📞 Răspundem în maxim 2 ore",
          "🔬 Bazat pe studii clinice validate",
        ]}
        onPrimaryClick={handlePrimaryClick}
      />
    </>
  );
}