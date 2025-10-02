import { SEO } from "@/components/ui/seo";
import {
  ServiceHero,
  BenefitCards,
  ProcessTimeline,
  TestimonialGrid,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/services";
import { Zap, Target, TrendingUp, Radio, Shield, AlertCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Biorezonanta() {
  const handlePrimaryClick = () => {
    trackEvent("biorezonanta_cta", "service_page", "whatsapp_click");
  };

  return (
    <>
      <SEO
        title="Biorezonanță în Iași – Evaluare Energetică Non-Invazivă | Holist Bella"
        description="Descoperă starea ta de echilibru energetic cu biorezonanța în Iași. Metodă modernă de scanare a frecvențelor corpului pentru identificarea dezechilibrelor. Consultație gratuită."
        keywords="biorezonanta, scanare energetica, frecvente electromagnetice, evaluare functionala, iasi, holist bella"
      />

      {/* Hero Section */}
      <ServiceHero
        badge="⚡ Tehnologie Avansată de Evaluare"
        title="Biorezonanță"
        titleHighlight="Evaluare Energetică Funcțională Completă"
        description="Obține o perspectivă detaliată asupra stării tale de echilibru energetic. Biorezonanța este o metodă modernă, non-invazivă, de scanare a frecvențelor organismului pentru identificarea potențialelor dezechilibre și surse de stres."
        stats={[
          { number: "60-90", label: "Minute scanare" },
          { number: "500+", label: "Parametri evaluați" },
          { number: "100%", label: "Non-invaziv" },
        ]}
        gradientFrom="purple-600"
        gradientTo="violet-600"
        heroIcon={Radio}
        onPrimaryClick={handlePrimaryClick}
      />

      {/* Beneficii Principale */}
      <BenefitCards
        heading="Cum Te Poate Ajuta Biorezonanța"
        description="O abordare complementară pentru înțelegerea stării tale de sănătate la nivel energetic"
        benefits={[
          {
            icon: Zap,
            title: "Identificarea Surselor de Stres",
            description:
              "Scanarea oferă indicii despre sensibilități la anumiți alergeni, prezența metalelor grele sau a altor factori de stres energetic care pot influența starea generală de sănătate.",
            evidence: "Principiu teoretic validat în practica complementară",
          },
          {
            icon: Target,
            title: "Plan de Echilibrare Personalizat",
            description:
              "Raportul generat servește ca bază pentru recomandări personalizate de stil de viață, dietă și suplimente nutritive, adaptat profilului tău energetic unic.",
            evidence: "Experiență clinică și feedback clienți",
          },
          {
            icon: TrendingUp,
            title: "Monitorizarea Progresului",
            description:
              "Evaluările periodice permit urmărirea impactului schimbărilor de stil de viață asupra echilibrului energetic și ajustarea recomandărilor pentru rezultate optime.",
            evidence: "Aplicație practică demonstrată",
          },
        ]}
        columns={3}
        colorScheme="purple"
      />

      {/* Cum Decurge o Ședință */}
      <ProcessTimeline
        heading="Procesul de Evaluare Energetică"
        description="Proces complet automatizat, nedureros și confortabil"
        steps={[
          {
            number: "1",
            title: "Pregătire și Confort",
            description:
              "Te așezi confortabil și ții în mână electrozi conectați la aparatul de biorezonanță. Nu există nicio disconfort sau senzație neplăcută în timpul procesului.",
            duration: "5 minute",
            elements: [
              "Instalare confortabilă",
              "Conectare electrozi la nivelul mâinilor",
              "Explicarea procesului de scanare",
            ],
          },
          {
            number: "2",
            title: "Scanare Automată",
            description:
              "Aparatul scanează și înregistrează frecvențele electromagnetice ale organismului, comparându-le cu un model de referință pentru a detecta eventuale deviații interpretate ca dezechilibre energetice.",
            duration: "60-90 minute",
            elements: [
              "Scanare completă automată",
              "Evaluare a peste 500 de parametri",
              "Proces complet nedureros",
            ],
            benefits: [
              "Identificare zone de dezechilibru",
              "Detectare sensibilități",
              "Evaluare funcțională completă",
            ],
          },
          {
            number: "3",
            title: "Interpretare și Recomandări",
            description:
              "Terapeutul interpretează raportul detaliat generat și oferă un plan de acțiune personalizat cu recomandări specifice pentru echilibrarea energetică.",
            duration: "20-30 minute",
            elements: [
              "Analiză raport detaliat",
              "Explicații clare și accesibile",
              "Plan personalizat de recomandări",
            ],
            benefits: [
              "Înțelegere clară a rezultatelor",
              "Recomandări practice aplicabile",
              "Suport continuu pentru implementare",
            ],
          },
        ]}
        colorScheme="purple"
      />

      {/* Trust Building - Cui i se adresează */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Potrivit pentru */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Cui i se Adresează?
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Abordare Proactivă a Sănătății
                    </h4>
                    <p className="text-gray-600">
                      Perfect pentru oricine dorește să înțeleagă mai bine
                      starea de echilibru energetic și să prevină dezechilibre
                      viitoare
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Afecțiuni Cronice Nerezolvate
                    </h4>
                    <p className="text-gray-600">
                      Utilă pentru identificarea posibilelor surse de stres care
                      contribuie la afecțiuni persistente
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Optimizare Performanță Sportivă
                    </h4>
                    <p className="text-gray-600">
                      Sportivii pot folosi biorezonanța pentru identificarea
                      factorilor care afectează recuperarea și performanța
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contraindicații și Transparență */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <AlertCircle className="text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Contraindicații
                </h2>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Purtători de Stimulator Cardiac
                    </h4>
                    <p className="text-gray-600">
                      Nu se recomandă persoanelor cu pacemaker
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Femei Însărcinate
                    </h4>
                    <p className="text-gray-600">
                      Se recomandă prudență în timpul sarcinii
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Persoane cu Epilepsie
                    </h4>
                    <p className="text-gray-600">
                      Necesită consultarea prealabilă cu medicul specialist
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
                <h4 className="font-semibold text-amber-800 mb-2">
                  ⚠️ Important de Știut
                </h4>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Biorezonanța este o metodă de <strong>evaluare funcțională complementară</strong> și{" "}
                  <strong>nu înlocuiește diagnosticul medical convențional</strong>. Nu este o
                  metodă de diagnosticare a bolilor. Întotdeauna consultați medicul pentru diagnostic
                  și tratament medical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoniale */}
      <TestimonialGrid
        heading="Experiențe Reale cu Biorezonanța"
        description="Clienții noștri împărtășesc cum biorezonanța i-a ajutat să înțeleagă mai bine starea lor de sănătate"
        testimonials={[
          {
            text: "Biorezonanța mi-a oferit indicii extrem de valoroase despre sursele de stres din organismul meu. Raportul detaliat m-a ajutat să fac schimbări targetate în alimentație și stil de viață.",
            name: "Ana M.",
            age: "42 ani",
            condition: "Optimizare stare de sănătate",
            rating: 5,
          },
          {
            text: "Raportul detaliat și explicațiile clare ale terapeutului m-au ajutat să înțeleg mult mai bine ce se întâmplă în corpul meu. Recomandările personalizate au fost ușor de implementat.",
            name: "Ion G.",
            age: "38 ani",
            condition: "Evaluare energetică",
            rating: 5,
          },
          {
            text: "Ca sportiv, am folosit biorezonanța pentru a identifica factorii care îmi afectau recuperarea. Informațiile primite m-au ajutat să îmi ajustez dieta și suplimentele pentru performanță optimă.",
            name: "Mihai D.",
            age: "29 ani",
            condition: "Optimizare performanță",
            rating: 5,
          },
        ]}
        columns={3}
      />

      {/* FAQ */}
      <ServiceFAQ
        heading="Întrebări Frecvente despre Biorezonanță"
        description="Răspunsuri clare și oneste la cele mai comune întrebări"
        faqs={[
          {
            question: "Ce este biorezonanța și cum funcționează?",
            answer:
              "Biorezonanța se bazează pe principiul că fiecare celulă și organ emite un spectru specific de frecvențe electromagnetice. Aparatul de biorezonanță măsoară aceste frecvențe și le compară cu un model de referință pentru a detecta deviațiile, care sunt interpretate ca dezechilibre energetice. Este o metodă de evaluare funcțională complementară.",
          },
          {
            question: "Biorezonanța poate diagnostica boli sau cancer?",
            answer:
              "Nu, categoric nu. Biorezonanța este o metodă de evaluare funcțională complementară, NU o metodă de diagnostic medical. Nu poate diagnostica boli sau cancer. Pentru diagnostic medical, este necesar să consultați un medic calificat care va folosi metode validate medical.",
          },
          {
            question: "Ce primesc la finalul ședinței de biorezonanță?",
            answer:
              "Primești un raport detaliat care evidențiază zonele de potențial dezechilibru energetic identificate în timpul scanării, împreună cu un plan de recomandări personalizate pentru stil de viață, dietă și suplimente. Terapeutul îți explică rezultatele în termeni clari și accesibili.",
          },
          {
            question: "Cât durează o ședință completă de biorezonanță?",
            answer:
              "Întregul proces durează aproximativ 90-120 de minute: pregătirea (5 min), scanarea automată (60-90 min) și interpretarea cu recomandări (20-30 min). Scanarea în sine este complet automată, nedureroasă și nu necesită nicio acțiune din partea ta.",
          },
          {
            question: "Este sigură biorezonanța? Simt ceva în timpul scanării?",
            answer:
              "Da, biorezonanța este considerată sigură și complet non-invazivă. În timpul scanării nu vei simți nicio durere sau disconfort. Unii clienți raportează o senzație subtilă de relaxare. Procesul este pasiv - ții doar electrozii în mâini în timp ce aparatul scanează.",
          },
          {
            question: "Cât de des trebuie să fac reevaluări?",
            answer:
              "Frecvența reevaluărilor depinde de obiectivele tale și de recomandările terapeutului. În general, se sugerează o reevaluare după 2-3 luni pentru a monitoriza impactul schimbărilor de stil de viață implementate și a ajusta recomandările dacă este necesar.",
          },
        ]}
        layout="cards"
      />

      {/* CTA Final */}
      <ServiceCTA
        heading="Dorești să Înțelegi Mai Bine Starea Ta de Sănătate?"
        description="Descoperă ce îți poate dezvălui biorezonanța despre echilibrul energetic al organismului tău. Programează o evaluare completă și primești un raport detaliat cu recomandări personalizate."
        gradientFrom="purple-600"
        gradientTo="violet-600"
        ctaPrimary="Programează Consultația prin WhatsApp"
        trustSignals={[
          "✨ Consultație și explicații detaliate incluse",
          "📊 Raport complet cu recomandări personalizate",
          "📞 Suport continuu pentru implementarea recomandărilor",
        ]}
        onPrimaryClick={handlePrimaryClick}
      />
    </>
  );
}