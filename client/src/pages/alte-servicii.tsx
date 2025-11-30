import { SEO } from "@/components/ui/seo";
import {
  ServiceHero,
  BenefitCards,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/services";
import { Sparkles, Heart, Brain, Activity } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { CONTACT_INFO } from "@/lib/constants";

export default function AlteServicii() {
  const handlePrimaryClick = () => {
    trackEvent("alte_servicii_cta", "service_page", "whatsapp_click");
    window.open(CONTACT_INFO.whatsapp, "_blank");
  };

  return (
    <>
      <SEO
        title="Alte Servicii Holistice – Theta Healing, Access Bars, Reiki | Holist Bella Iași"
        description="Descoperă Theta Healing, Access Bars și Reiki în Iași - terapii energetice pentru echilibrare emoțională, eliberare mentală și vindecare spirituală. Consultație gratuită."
        keywords="theta healing, access bars, reiki, terapie energetica, echilibrare emotionala, vindecare spirituala, iasi, holist bella"
      />

      {/* Hero Section */}
      <ServiceHero
        badge="✨ Terapii Energetice Avansate"
        title="Alte Servicii Holistice"
        titleHighlight="Theta Healing, Access Bars & Reiki"
        description="Terapii energetice pentru echilibrare emoțională, eliberare mentală și vindecare spirituală. Abordări complementare pentru wellness holistic."
        stats={[
          { number: "45-60", label: "Minute ședință" },
          { number: "3", label: "Terapii disponibile" },
        ]}
        gradientFrom="purple-600"
        gradientVia="pink-600"
        gradientTo="violet-600"
        heroIcon={Sparkles}
        onPrimaryClick={handlePrimaryClick}
      />

      {/* Theta Healing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Theta Healing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tehnică de vindecare energetică ce utilizează undele Theta pentru a identifica și transforma convingeri limitative, traume emoționale și blocaje energetice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Cum Funcționează Theta Healing</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong>Starea Theta:</strong> Accesarea frecvenței creierului Theta (4-8 Hz) pentru conectarea cu câmpul energetic universal
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong>Identificarea Blocajelor:</strong> Scanarea energetică pentru descoperirea convingerilor și programelor limitative
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong>Transformarea Energetică:</strong> Înlocuirea energiilor negative cu vibrații pozitive și vindecătoare
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Beneficii Theta Healing</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Heart className="w-5 h-5 text-purple-500 mr-3" />
                  Eliberarea traumelor emoționale
                </li>
                <li className="flex items-center">
                  <Brain className="w-5 h-5 text-purple-500 mr-3" />
                  Transformarea convingerilor limitative
                </li>
                <li className="flex items-center">
                  <Activity className="w-5 h-5 text-purple-500 mr-3" />
                  Echilibrarea sistemului energetic
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-purple-500 mr-3" />
                  Îmbunătățirea stării de bine general
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Access Bars */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Access Bars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistem de eliberare mentală și emoțională prin activarea a 32 de puncte energetice pe cap, facilitând curgerea liberă a energiei.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Beneficii Access Bars</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Brain className="w-5 h-5 text-pink-500 mr-3" />
                  Eliberarea gândurilor repetitive
                </li>
                <li className="flex items-center">
                  <Heart className="w-5 h-5 text-pink-500 mr-3" />
                  Reducerea stresului și anxietății
                </li>
                <li className="flex items-center">
                  <Activity className="w-5 h-5 text-pink-500 mr-3" />
                  Îmbunătățirea somnului
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-pink-500 mr-3" />
                  Mai multă claritate mentală
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Procesul Access Bars</h3>
              <p className="text-gray-600">
                Prin atingerea ușoară a 32 de puncte specifice pe cap, se eliberează energia stagnantă asociată cu gânduri, emoții și convingeri limitative. Procesul este relaxant și nu necesită efort conștient din partea clientului.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reiki */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reiki
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tehnică japoneză de vindecare energetică prin impunerea mâinilor, canalizând energia universală pentru echilibrarea chakrelor și promovarea vindecării naturale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Principiile Reiki</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong>Just for Today:</strong> Principiul acceptării momentului prezent
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong>Nu te supăra:</strong> Eliberarea resentimentelor și a mâniei
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong>Fii recunoscător:</strong> Cultivarea gratitudinii
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong>Muncește cinstit:</strong> Angajamentul față de sine
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Beneficii Reiki</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Heart className="w-5 h-5 text-violet-500 mr-3" />
                  Relaxare profundă și reducerea stresului
                </li>
                <li className="flex items-center">
                  <Activity className="w-5 h-5 text-violet-500 mr-3" />
                  Echilibrarea chakrelor și a sistemului energetic
                </li>
                <li className="flex items-center">
                  <Brain className="w-5 h-5 text-violet-500 mr-3" />
                  Îmbunătățirea concentrării și clarității mentale
                </li>
                <li className="flex items-center">
                  <Sparkles className="w-5 h-5 text-violet-500 mr-3" />
                  Susținerea proceselor naturale de vindecare
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ServiceFAQ
        title="Întrebări Frecvente despre Terapiile Energetice"
        faqs={[
          {
            question: "Care este diferența între Theta Healing, Access Bars și Reiki?",
            answer:
              "Theta Healing lucrează cu convingeri și programe subconștiente, Access Bars eliberează gânduri repetitive prin puncte energetice, iar Reiki canalizează energie universală pentru echilibrare generală. Fiecare tehnică are abordarea sa unică dar toate contribuie la wellness energetic.",
          },
          {
            question: "Este necesară pregătirea specială pentru aceste terapii?",
            answer:
              "Nu, terapiile sunt non-invazive și nu necesită pregătire specială. Veți fi ghidați prin proces și veți primi explicații clare despre ce se întâmplă în timpul ședinței.",
          },
          {
            question: "Cât de des trebuie să fac aceste terapii?",
            answer:
              "Frecvența variază în funcție de nevoile individuale. Pentru rezultate optime, se recomandă ședințe săptămânale la început, apoi de întreținere lunar sau la nevoie.",
          },
        ]}
        layout="cards"
      />

      {/* CTA Final */}
      <ServiceCTA
        heading="Descoperă Puterea Terapiilor Energetice"
        description="Programează o consultație pentru a afla care dintre terapiile Theta Healing, Access Bars sau Reiki este cea mai potrivită pentru tine."
        gradientFrom="purple-600"
        gradientTo="pink-600"
        ctaPrimary="Consultație prin WhatsApp"
        trustSignals={[
          "🔬 Terapii validate internațional",
          "💫 Abordare personalizată",
          "🌟 Rezultate demonstrabile"
        ]}
        onPrimaryClick={handlePrimaryClick}
      />
    </>
  );
}