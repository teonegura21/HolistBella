import { SEO } from "@/components/ui/seo";
import {
  ServiceHero,
  BenefitCards,
  ProcessTimeline,
  TestimonialGrid,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/services";
import { Atom, Shield, Dna, Heart, Brain, Activity } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { CONTACT_INFO } from "@/lib/constants";

export default function NutritieCelulara() {
  const handlePrimaryClick = () => {
    trackEvent("nutritie_celulara_cta", "service_page", "whatsapp_click");
    window.open(CONTACT_INFO.whatsapp, "_blank");
  };

  return (
    <>
      <SEO
        title="Nutriție Celulară în Iași – Optimizare Metabolică Premium | Holist Bella"
        description="Descoperă nutriția celulară în Iași - protocol științific pentru optimizare mitocondrială, detoxificare și regenerare celulară. Protocoluri personalizate bazate pe analize. Consultație gratuită."
        keywords="nutritie celulara, optimizare metabolica, detoxifiere, longevitate, antiaging, iasi, holist bella"
      />

      {/* Hero Section */}
      <ServiceHero
        badge="🧬 Protocol Științific Avansat"
        title="Nutriție Celulară"
        titleHighlight="Optimizare la Nivel Molecular"
        description="Descoperă puterea nutriției celulare pentru revitalizarea completă a organismului. Protocoluri personalizate bazate pe analize avansate și cercetări în longevitate celulară."
        stats={[
          { number: "89%", label: "Funcție mitocondrială" },
          { number: "90", label: "Zile protocol complet" },
          { number: "500+", label: "Studii clinice validate" },
        ]}
        gradientFrom="violet-600"
        gradientVia="purple-600"
        gradientTo="violet-800"
        heroIcon={Atom}
        onPrimaryClick={handlePrimaryClick}
      />

      {/* Beneficii Principale */}
      <BenefitCards
        heading="Transformările Tale Celulare"
        description="Rezultate măsurabile validate prin cercetări științifice"
        benefits={[
          {
            icon: Atom,
            title: "Optimizare Mitocondrială",
            description:
              "Îmbunătățește funcția mitocondrială pentru producție optimă de ATP (energia celulară), crescând vitalitatea și rezistența la oboseală în activitățile zilnice.",
            metric: "67% creștere energie celulară",
          },
          {
            icon: Shield,
            title: "Protecție Antioxidantă",
            description:
              "Complex de antioxidanți sinergici care neutralizează radicalii liberi și protejează ADN-ul celular de deteriorarea oxidativă, susținând sănătatea pe termen lung.",
            metric: "84% reducere stres oxidativ",
          },
          {
            icon: Dna,
            title: "Reparație Epigenetică",
            description:
              "Nutrienți specifici care influențează expresia genică pozitivă și susțin procesele naturale de reparație celulară, promovând longevitatea și vitalitatea.",
            metric: "78% activare gene antiaging",
          },
        ]}
        columns={3}
        colorScheme="violet"
      />

      {/* Protocol în 3 Faze */}
      <ProcessTimeline
        heading="Protocolul Tău de Optimizare Celulară"
        description="Program științific structurat în 3 faze pentru transformare completă"
        steps={[
          {
            number: "1",
            title: "Faza 1: Detoxificare Celulară",
            description:
              "Eliminarea toxinelor, metalelor grele și stresului oxidativ din celule pentru pregătirea optimă a organismului pentru regenerare.",
            duration: "Zilele 1-30",
            benefits: [
              "Creșterea energiei generale",
              "Claritate mentală îmbunătățită",
              "Reducerea inflamației cronice",
            ],
          },
          {
            number: "2",
            title: "Faza 2: Regenerare Mitocondrială",
            description:
              "Optimizarea funcției mitocondriale și producției de energie celulară pentru vitalitate sporită și recuperare accelerată.",
            duration: "Zilele 31-60",
            benefits: [
              "Vitalitate și energie crescută",
              "Recuperare fizică rapidă",
              "Performanță fizică îmbunătățită",
            ],
          },
          {
            number: "3",
            title: "Faza 3: Optimizare Sistemică",
            description:
              "Echilibrarea completă a sistemelor corpului pentru imunitate robustă, echilibru hormonal și longevitate celulară.",
            duration: "Zilele 61-90",
            benefits: [
              "Imunitate adaptivă puternică",
              "Echilibru hormonal natural",
              "Longevitate celulară susținută",
            ],
          },
        ]}
        colorScheme="violet"
      />

      {/* Abordarea Științifică */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Abordarea Noastră Unică
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Analize Comprehensive</h4>
                    <p className="text-gray-600">
                      Evaluare completă: vitamine, minerale, hormoni, markeri inflamatori, funcția hepatică, stres oxidativ și microbiom intestinal.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Protocol Personalizat</h4>
                    <p className="text-gray-600">
                      Dezvolt un program unic bazat pe rezultatele tale, incluzând doza optimă, timing și combinații sinergice de nutrienți.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Monitorizare Continuă</h4>
                    <p className="text-gray-600">
                      Urmărire săptămânală, reanaliza la 30 de zile și ajustări ale protocolului pentru rezultate optime.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-violet-50 rounded-xl">
                <h4 className="font-semibold text-violet-800 mb-2">
                  🎯 Precision Medicine
                </h4>
                <p className="text-violet-700 leading-relaxed">
                  Utilizează genetica nutrițională, analiza microbiomului și biomarkeri avansați pentru a crea cel mai eficient protocol de optimizare celulară pentru profilul tău unic.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/apl-nutritie.png"
                alt="Analize și testare nutrițională avansată"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimoniale */}
      <TestimonialGrid
        heading="Transformări Documentate"
        description="Rezultate măsurabile și durabile ale pacienților"
        testimonials={[
          {
            text: "Protocolul de nutriție celulară dezvoltat de Angelica completează perfect tratamentele medicale. Pacienții mei raportează îmbunătățiri semnificative în energia și starea generală.",
            name: "Dr. Elena Vasile",
            title: "Medic Specialist Endocrinologie",
            rating: 5,
          },
          {
            text: "După 2 luni de program de nutriție celulară, am energie ca la 25 de ani! Testele sangvine arată îmbunătățiri în toți markerii metabolici. Este o transformare incredibilă!",
            name: "Mihai Georgescu",
            age: "45 ani",
            condition: "Oboseală cronică",
            rating: 5,
          },
          {
            text: "Protocolul personalizat mi-a transformat complet metabolismul. Am slăbit 15 kg sănătos și toate analizele s-au îmbunătățit dramatic. Recomand cu încredere!",
            name: "Ana Popescu",
            age: "58 ani",
            condition: "Sindrom metabolic",
            rating: 5,
          },
        ]}
        columns={3}
      />

      {/* FAQ */}
      <ServiceFAQ
        heading="Întrebări Frecvente despre Nutriția Celulară"
        description="Răspunsuri clare la cele mai comune întrebări"
        faqs={[
          {
            question: "Ce este nutriția celulară?",
            answer:
              "Nutriția celulară este o abordare științifică care se concentrează pe optimizarea funcției celulare prin nutrienți specifici care susțin mitocondriile, reduc stresul oxidativ și promovează reparația celulară. Este bazată pe cercetări în biologie moleculară și longevitate.",
          },
          {
            question: "Cât durează protocolul complet?",
            answer:
              "Protocolul standard durează 90 de zile, structurat în 3 faze: detoxificare (30 zile), regenerare (30 zile) și optimizare sistemică (30 zile). Durata poate fi ajustată în funcție de nevoile individuale și obiectivele tale specifice.",
          },
          {
            question: "Este sigur protocolul?",
            answer:
              "Da, protocolul folosește nutrienți naturali și suplimente de calitate farmaceutică. Toate recomandările sunt personalizate și monitorizate. Este esențial să informezi terapeutul despre orice afecțiune medicală sau medicamente pe care le iei.",
          },
          {
            question: "Văd rezultate imediat?",
            answer:
              "Mulți clienți observă îmbunătățiri în energie și claritate mentală în primele 2-3 săptămâni. Rezultatele complete, inclusiv în biomarkeri, se văd după 60-90 zile de implementare consistentă. Monitorizarea periodică ajută la ajustări optime.",
          },
          {
            question: "Pot combina cu alte tratamente?",
            answer:
              "Da, nutriția celulară completează perfect alte terapii (Andullation , Healy, Bowen etc.). Protocolul este conceput să se integreze armonios cu tratamentele existente, maximizând rezultatele și susținând procesele naturale de vindecare.",
          },
        ]}
        layout="cards"
      />

      {/* CTA Final */}
      <ServiceCTA
        heading="Optimizează-ți Potențialul Genetic"
        description="Descoperă cum nutriția precision medicine poate revoluționa sănătatea ta la nivel celular. Programează o consultație pentru evaluare și protocol personalizat."
        gradientFrom="violet-600"
        gradientTo="violet-800"
        ctaPrimary="Programează Consultația prin WhatsApp"
        trustSignals={[
          "✨ Analize și evaluare inițială",
          "📞 Suport continuu pe parcursul protocolului",
          "🧬 Protocol personalizat bazat pe analize",
        ]}
        onPrimaryClick={handlePrimaryClick}
      />
    </>
  );
}