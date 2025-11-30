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
import { CONTACT_INFO } from "@/lib/constants";

export default function Biorezonanta() {
  const handlePrimaryClick = () => {
    trackEvent("biorezonanta_cta", "service_page", "whatsapp_click");
    window.open(CONTACT_INFO.whatsapp, "_blank");
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
        heading="Ce este Biorezonanța și cum te poate Ajuta"
        description="Biorezonanța reprezintă o tehnică non-invazivă de diagnostic și tratament care se bazează pe utilizarea unor dispozitive specializate destinate măsurării și analizei frecvențelor electromagnetice generate de diferitele structuri ale organismului. Principiul acestei metode constă în faptul că fiecare organ și celulă din corpul uman emit vibrații la o frecvență caracteristică, iar modificările în aceste frecvențe pot semnala existența unor disfuncții. Prin evaluarea și raportarea acestora la valorile de referință, pot fi detectate tulburările de sănătate înaintea apariției simptomatologiei manifeste."
        benefits={[
          {
            icon: Zap,
            title: "Evaluare Holistică Completă",
            description:
              "Scanarea oferă o perspectivă comprehensivă asupra tuturor sistemelor corporale, identificând dezechilibre energetice și zone care necesită atenție înainte ca simptomele să devină evidente.",
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

      {/* Evaluarea Completă prin Biorezonanță */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full mb-6">
              <span className="text-2xl">🌸</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Evaluarea Completă prin Biorezonanță
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Scanare detaliată a tuturor sistemelor corporale pentru o imagine completă a stării tale de sănătate energetică
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Lista sistemelor evaluate */}
            <div className="space-y-4">
              <div className="grid gap-3">
                {[
                  "Sistemul cardiovascular și cerebral",
                  "Sistemul digestiv și metabolism", 
                  "Funcția vezicii biliare și pancreatică",
                  "Hormoni și imunitate",
                  "Ficat și rinichi",
                  "Sistemul respirator și nervos",
                  "Boli osoase și densitatea minerală",
                  "Glicemie",
                  "Glande endocrine",
                  "Sănătate feminină/masculină",
                  "Carențe nutriționale complete",
                  "Alergii și intoleranțe", 
                  "Metale grele",
                  "Aminoacizi și coenzime",
                  "Ochi și piele",
                  "Prostata",
                  "Calități fizice fundamentale",
                  "Toxine",
                  "Oligoelemente",
                  "Metale grele",
                  "Coenzime",
                  "Elemente ale corpului uman"
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-sm">♦</span>
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Beneficii și rezultate */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">✨</span>
                  <h3 className="text-2xl font-bold">Rezultate Imediate</h3>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  Primești rezultatele complete pe loc, cu interpretare de specialitate inclusă. 
                  Nu mai aștepta zile sau săptămâni pentru a afla ce se întâmplă în corpul tău.
                </p>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💡</span>
                  <span className="font-semibold">Interpretare profesională inclusă!</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 text-xl font-bold">500+</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Parametri Evaluați</h4>
                    <p className="text-gray-600 text-sm">Analiză comprehensivă a tuturor sistemelor corporale</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-violet-600 text-xl font-bold">0</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Disconfort</h4>
                    <p className="text-gray-600 text-sm">Proces complet nedureros și non-invaziv</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-2">Avantajul Biorezonanței</h4>
                    <p className="text-green-700 text-sm">
                      Detectează dezechilibre energetice înainte ca acestea să se manifeste ca simptome fizice, 
                      oferindu-ți posibilitatea să acționezi preventiv pentru sănătatea ta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cum Decurge o Ședință */}
      <ProcessTimeline
        heading="Procesul de Evaluare Energetică"
        description="Proces complet automatizat, nedureros și confortabil"
        steps={[
          {
            number: "1",
            title: "Pregătire și Confort",
            description:
              "Te așezi confortabil și ești conectat(ă) la aparatul de biorezonanță. Procedura este non-invazivă, fără durere și fără niciun disconfort.",
            elements: [
              "Instalare confortabilă",
              "Explicarea procesului de scanare",
            ],
          },
          {
            number: "2",
            title: "Scanare Automată",
            description:
              "Aparatul scanează și înregistrează frecvențele electromagnetice ale organismului, comparându-le cu un model de referință pentru a detecta eventuale deviații interpretate ca dezechilibre energetice.",
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
          {
            text: "Eram permanent epuizată și nu înțelegeam de ce. Analizele medicale ieșeau normale, dar eu mă simțeam îngrozitor. Biorezonanța a detectat dezechilibre energetice și sensibilități care nu apăreau în testele clasice. Rezultatele m-au șocat - explica perfect cum mă simțeam!",
            name: "Elena R.",
            age: "45 ani",
            condition: "Oboseală cronică inexplicată",
            rating: 5,
          },
          {
            text: "Aveam migrene constante, probleme digestive și insomnie de luni de zile. Medicul spunea că totul e în regulă, dar eu știam că ceva nu e bine. Scanarea biorezonanței a identificat surse de stres și toxine pe care nimeni nu le-a detectat până atunci. În sfârșit aveam răspunsuri!",
            name: "Cristian P.",
            age: "39 ani",
            condition: "Simptome multiple fără diagnostic",
            rating: 5,
          },
          {
            text: "Mă trezeam obosită în fiecare dimineață, aveam dureri articulare și probleme de concentrare. Toate testele medicale erau normale, dar eu mă simțeam foarte rău. Biorezonanța a arătat dezechilibre clare și mi-a dat o direcție concretă de urmat. Răspunsurile pe care le căutam de atâta timp!",
            name: "Maria V.",
            age: "52 ani",
            condition: "Sindrom de oboseală și dureri",
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
            question: "Cum funcționează Biorezonanta?",
            answer:
              "Biorezonanța se bazează pe principiul că fiecare celulă și organ emite un spectru specific de frecvențe electromagnetice. Aparatul de biorezonanță măsoară aceste frecvențe și le compară cu un model de referință pentru a detecta deviațiile, care sunt interpretate ca dezechilibre energetice. Este o metodă de evaluare funcțională complementară.",
          },
          {
            question: "Ce primesc la finalul ședinței de biorezonanță?",
            answer:
              "Primești un raport detaliat care evidențiază zonele de potențial dezechilibru energetic identificate în timpul scanării, împreună cu un plan de recomandări personalizate pentru stil de viață, dietă și suplimente. Terapeutul îți explică rezultatele în termeni clari și accesibili.",
          },
          {
            question: "Cât durează o ședință completă de biorezonanță?",
            answer:
              "Întregul proces durează aproximativ 90-120 de minute. Scanarea în sine este complet automată, nedureroasă și nu necesită nicio acțiune din partea ta.",
          },
          {
            question: "Este sigură biorezonanța? Simt ceva în timpul scanării?",
            answer:
              "Da, biorezonanța este considerată sigură și complet non-invazivă. În timpul scanării nu vei simți nicio durere sau disconfort. Unii clienți raportează o senzație subtilă de relaxare.",
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