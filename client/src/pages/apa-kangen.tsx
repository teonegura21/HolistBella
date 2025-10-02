import { SEO } from "@/components/ui/seo";
import {
  ServiceHero,
  BenefitCards,
  ProcessTimeline,
  TestimonialGrid,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/services";
import { Droplets, Shield, Heart, Zap, Award, AlertCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function ApaKangen() {
  const handlePrimaryClick = () => {
    trackEvent("apa_kangen_cta", "service_page", "whatsapp_click");
  };

  return (
    <>
      <SEO
        title="Apă Kangen în Iași – Hidratare Alcalină Ionizată Premium | Holist Bella"
        description="Descoperă beneficiile apei Kangen în Iași - apă alcalină ionizată pentru hidratare optimă, suport digestiv și echilibru metabolic. Studii clinice validate. Consultație gratuită."
        keywords="apa kangen, apa alcalina, hidratare, digestie, echilibru metabolic, iasi, holist bella"
      />

      {/* Hero Section */}
      <ServiceHero
        badge="💧 Tehnologie Japoneză Certificată"
        title="Terapia cu Apă Kangen"
        titleHighlight="Hidratare Alcalină Ionizată Premium"
        description="Descoperă puterea apei Kangen - apă alcalină ionizată cu pH 8.8-9.5 pentru hidratare superioară, suport digestiv și echilibru metabolic. Aprobată medical în Japonia și Coreea."
        stats={[
          { number: "8.8-9.5", label: "pH Alcalin Optimal" },
          { number: "50+", label: "Ani experiență" },
          { number: "1000+", label: "Clienți mulțumiți" },
        ]}
        gradientFrom="blue-600"
        gradientVia="cyan-600"
        gradientTo="teal-600"
        heroIcon={Droplets}
        onPrimaryClick={handlePrimaryClick}
      />

      {/* Beneficii Principale */}
      <BenefitCards
        heading="Beneficii Demonstrate Clinic"
        description="Rezultate validate prin studii științifice și experiență practică"
        benefits={[
          {
            icon: Droplets,
            title: "Hidratare Optimizată",
            description:
              "Apa Kangen hidratează celulele mai eficient decât apa obișnuită, îmbunătățind absorbția și transportul nutrienților în organism.",
            metric: "Studii clinice: +30% hidratare post-efort",
          },
          {
            icon: Shield,
            title: "Suport Digestiv Natural",
            description:
              "Aprobată medical în Japonia și Coreea pentru ameliorarea simptomelor gastrointestinale și susținerea digestiei sănătoase.",
            metric: "Aprobare medicală Japonia (1965) & Coreea (1978)",
          },
          {
            icon: Heart,
            title: "Echilibru Metabolic",
            description:
              "Contribuie la menținerea nivelurilor sănătoase de glicemie și trigliceride, susținând metabolismul general al organismului.",
            metric: "Studiu PLOS One 2022: 304 femei, rezultate pozitive",
          },
          {
            icon: Zap,
            title: "Recuperare Sportivă",
            description:
              "Susține rehidratarea rapidă după exerciții fizice intense, reducând vâscozitatea sanguină și îmbunătățind recuperarea musculară.",
            metric: "Studiu randomizat 2016: 100 adulți, hidratare îmbunătățită",
          },
        ]}
        columns={4}
        colorScheme="blue"
      />

      {/* Cum Funcționează */}
      <ProcessTimeline
        heading="Procesul de Transformare cu Apa Kangen"
        description="De la electroliză la hidratare optimă - cum funcționează terapia"
        steps={[
          {
            number: "1",
            title: "Electroliză Avansată",
            description:
              "Apa este procesată prin electroliză cu tehnologie japoneză, separând componentele alcaline de cele acide pentru a obține apă cu pH optim (8.8-9.5).",
            duration: "Proces instant",
            elements: [
              "Electroliză cu membrane avansate",
              "Separare componente alcaline/acide",
              "Control precis al pH-ului",
            ],
          },
          {
            number: "2",
            title: "Proprietăți Ionice Modificate",
            description:
              "Apa rezultată are molecule mai mici și proprietăți ionice modificate, permițând o hidratare celulară mai eficientă și absorbție superioară.",
            duration: "Apă gata de consum",
            elements: [
              "Molecule de apă microstructurate",
              "Proprietăți antioxidante naturale",
              "pH alcalin stabil (8.8-9.5)",
            ],
            benefits: [
              "Hidratare celulară rapidă",
              "Absorbție îmbunătățită",
              "Suport detoxifiere natural",
            ],
          },
          {
            number: "3",
            title: "Integrare în Stilul de Viață",
            description:
              "Apa Kangen devine parte din rutina zilnică - hidratare, gătit, îngrijire personală - susținând sănătatea pe termen lung.",
            duration: "Consum zilnic recomandat",
            elements: [
              "Hidratare optimă zilnică",
              "Suport digestiv la mese",
              "Versatilitate în uz casnic",
            ],
            benefits: [
              "Echilibru metabolic susținut",
              "Digestie îmbunătățită",
              "Recuperare sportivă accelerată",
            ],
          },
        ]}
        colorScheme="blue"
      />

      {/* Studii Științifice */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Evidențe Științifice Validate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cercetări independente confirmă beneficiile apei alcaline ionizate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-600">2022-2024</span>
                <span className="text-sm text-gray-500">304 femei</span>
              </div>
              <h4 className="font-semibold text-gray-900">Studiu Cross-Sectional</h4>
              <p className="text-gray-700">
                Glicemie și trigliceride scăzute, calitatea somnului îmbunătățită
              </p>
              <p className="text-sm text-blue-600">PLOS One Journal</p>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-600">2016</span>
                <span className="text-sm text-gray-500">100 adulți</span>
              </div>
              <h4 className="font-semibold text-gray-900">Studiu Randomizat</h4>
              <p className="text-gray-700">
                Îmbunătățirea rehidratării post-exercițiu, vâscozitate sanguină redusă
              </p>
              <p className="text-sm text-blue-600">Journal of Sports Nutrition</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-600">2018</span>
                <span className="text-sm text-gray-500">60 subiecți</span>
              </div>
              <h4 className="font-semibold text-gray-900">Studiu Japonez</h4>
              <p className="text-gray-700">
                Ameliorarea simptomelor gastrointestinale, somn mai odihnitor
              </p>
              <p className="text-sm text-blue-600">Medical Research Archive</p>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-600">1965</span>
                <span className="text-sm text-gray-500">Aprobare medicală</span>
              </div>
              <h4 className="font-semibold text-gray-900">Japonia & Coreea</h4>
              <p className="text-gray-700">
                Aprobată ca dispozitiv medical pentru simptome gastrointestinale
              </p>
              <p className="text-sm text-blue-600">Autorități medicale asiatice</p>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
            <p className="text-amber-700 leading-relaxed">
              <strong>Transparență:</strong> Deși studiile arată beneficii promițătoare, cercetarea asupra apei alcaline este în dezvoltare. Instituții medicale majore subliniază necesitatea studiilor pe termen lung. Corpul uman reglează natural pH-ul și nu poate fi modificat semnificativ prin consumul de apă alcalină.
            </p>
          </div>
        </div>
      </section>

      {/* Testimoniale */}
      <TestimonialGrid
        heading="Transformări Reale cu Apa Kangen"
        description="Clienții noștri împărtășesc experiențele lor cu hidratarea alcalină"
        testimonials={[
          {
            text: "Apa Kangen a făcut o diferență uriașă în hidratarea mea zilnică. Am observat o îmbunătățire clară a energiei și digestiei după doar câteva săptămâni de consum regulat.",
            name: "Elena R.",
            age: "39 ani",
            condition: "Hidratare optimă",
            rating: 5,
          },
          {
            text: "După ce am început să folosesc apa Kangen, am observat o reducere semnificativă a balonării și o digestie mult mai bună. Este ușor de integrat în rutina zilnică.",
            name: "Mihai C.",
            age: "44 ani",
            condition: "Suport digestiv",
            rating: 5,
          },
          {
            text: "Ca sportiv, apa Kangen m-a ajutat să mă rehidratez mult mai eficient după antrenamente. Recuperarea este mai rapidă și am mai multă energie pentru sesiunile următoare.",
            name: "Andreea S.",
            age: "31 ani",
            condition: "Recuperare sportivă",
            rating: 5,
          },
        ]}
        columns={3}
      />

      {/* FAQ */}
      <ServiceFAQ
        heading="Întrebări Frecvente despre Apa Kangen"
        description="Răspunsuri bazate pe evidențe științifice și experiență practică"
        faqs={[
          {
            question: "Ce este apa Kangen și cum se produce?",
            answer:
              "Apa Kangen este apă alcalină ionizată obținută prin electroliză cu tehnologie japoneză. Procesul separă apa în componente alcaline (pH 8.8-9.5) și acide, modificând structura moleculară pentru hidratare superioară.",
          },
          {
            question: "Poate apa alcalină să modifice pH-ul organismului?",
            answer:
              "Nu, organismul reglează strict pH-ul sanguin între 7.35-7.45 prin mecanisme fiziologice. Apa alcalină nu alterează pH-ul general al corpului, dar poate contribui la hidratare optimă și alcalinizare locală în tractul digestiv.",
          },
          {
            question: "Care sunt beneficiile demonstrate științific?",
            answer:
              "Studiile clinice validează beneficii moderate pentru hidratare post-exercițiu, suport digestiv și markeri metabolici. Cercetări independente (PLOS One, Journal of Sports Nutrition) confirmă îmbunătățiri în rehidratare și reducerea vâscozității sanguine.",
          },
          {
            question: "Este sigură apa Kangen pentru consum zilnic?",
            answer:
              "Da, studiile disponibile indică siguranță pentru majoritatea persoanelor. Totuși, pH-ul ridicat (>9.8) consumat excesiv poate prezenta riscuri. Recomandăm consult medical pentru consum pe termen lung, mai ales în condiții medicale specifice.",
          },
          {
            question: "Câtă apă Kangen trebuie să consum zilnic?",
            answer:
              "Recomandarea generală este 2-3 litri pe zi pentru hidratare optimă, înlocuind treptat apa obișnuită. Începe cu 1-1.5 litri și crește gradual. Apa Kangen poate fi folosită și pentru gătit, îngrijire personală și hidratare sportivă.",
          },
          {
            question: "Apa Kangen înlocuiește tratamentul medical?",
            answer:
              "Nu, apa Kangen nu înlocuiește diagnosticul sau tratamentul medical. Este o abordare complementară pentru hidratare optimă și susținerea stării de bine. Pentru afecțiuni medicale, consultați întotdeauna medicul specialist.",
          },
        ]}
        layout="cards"
      />

      {/* CTA Final */}
      <ServiceCTA
        heading="Transformă-ți Hidratarea Zilnică?"
        description="Descoperă cum apa Kangen poate îmbunătăți hidratarea, digestia și echilibrul metabolic. Programează o consultație gratuită pentru a înțelege beneficiile specifice nevoilor tale."
        gradientFrom="blue-600"
        gradientTo="teal-600"
        ctaPrimary="Programează Consultația prin WhatsApp"
        trustSignals={[
          "✨ Aprobat medical Japonia & Coreea",
          "💧 Hidratare celulară superioară",
          "📞 Consultanță personalizată gratuită",
        ]}
        onPrimaryClick={handlePrimaryClick}
      />
    </>
  );
}