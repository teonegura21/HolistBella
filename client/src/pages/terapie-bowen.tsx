import { SEO } from "@/components/ui/seo";
import {
  ServiceHero,
  BenefitCards,
  ProcessTimeline,
  TestimonialGrid,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/services";
import { Heart, Zap, Smile, Activity } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { CONTACT_INFO } from "@/lib/constants";

export default function TerapieBowen() {
  const handlePrimaryClick = () => {
    trackEvent("terapie_bowen_cta", "service_page", "whatsapp_click");
    window.open(CONTACT_INFO.whatsapp, "_blank");
  };

  return (
    <>
      <SEO
        title="Terapie Bowen în Iași – Reechilibrare Naturală și Relaxare Profundă | Holist Bella"
        description="Descoperă puterea terapiei Bowen în Iași - tehnică manuală blândă pentru reducerea durerii, relaxare profundă și îmbunătățirea mobilității. Consultație gratuită."
        keywords="terapie bowen, bowen therapy, dureri musculare, relaxare, mobilitate, iasi, holist bella"
      />

      {/* Hero Section */}
      <ServiceHero
        badge="🌿 Terapie Hollistică Recunoscută"
        title="Terapie Bowen"
        titleHighlight="Reechilibrare Naturală prin Atingere Blândă"
        description="Redescoperă echilibrul natural al corpului tău printr-o tehnică manuală subtilă și profund relaxantă. Terapia Bowen activează procesele naturale de auto-vindecare pentru reducerea durerii și îmbunătățirea mobilității."
        stats={[
          { number: "50+", label: "Ani de practică globală" },
          { number: "90%", label: "Clienți mulțumiți" },
        ]}
        gradientFrom="green-600"
        gradientTo="emerald-600"
        heroIcon={Heart}
        onPrimaryClick={handlePrimaryClick}
      />

      {/* Beneficii Principale */}
      <BenefitCards
        heading="Transformările Tale cu Terapia Bowen"
        description="Beneficii validate prin experiență clinică și testimoniale ale pacienților"
        benefits={[
          {
            icon: Smile,
            title: "Relaxare Profundă și Reducerea Stresului",
            description:
              "Terapia Bowen activează sistemul nervos parasimpatic, responsabil pentru starea de 'odihnă și vindecare'. Ajută la calmarea sistemului nervos și eliberarea tensiunilor acumulate.",
            evidence: "Experiență clinică larg acceptată și raportări consistente",
          },
          {
            icon: Zap,
            title: "Ameliorarea Percepției Durerii",
            description:
              "Poate contribui semnificativ la reducerea disconfortului în cazul durerilor de spate, gât, umeri sau genunchi. Mișcările delicate stimulează procesele naturale de vindecare.",
            evidence: "Studii de caz și cercetări preliminare arată rezultate pozitive",
          },
          {
            icon: Activity,
            title: "Îmbunătățirea Mobilității și Flexibilității",
            description:
              "Prin relaxarea fasciei și a țesuturilor moi, terapia contribuie la o mai bună libertate de mișcare și flexibilitate crescută în activitățile zilnice.",
            evidence: "Validat prin experiență clinică și feedback client",
          },
        ]}
        columns={3}
        colorScheme="green"
      />

      {/* Domenii de Aplicare ale Terapiei Bowen */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Terapia Bowen și-a dovedit eficacitatea în următoarele probleme:
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Terapie manuală blândă, cu mișcări precise pe mușchi și fascie, care activează relaxarea profundă și 
              susține autoreglarea corpului. Este non-invazivă și potrivită pentru toate vârstele.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Durere & Mobilitate */}
            <div className="bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold">Durere & Mobilitate</h3>
                </div>
                <p className="text-green-100 text-sm">(Aparat musculo-scheletal)</p>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {[
                    "Dureri de spate, gât și umeri înțepeniți",
                    "Lombosciatică", 
                    "Spondiloză cervicală, cifoze, scolioze",
                    "Hernie de disc, discopatie lombară",
                    "Probleme ale șoldurilor și genunchilor",
                    "Coxartroză",
                    "Entorse/luxații glezne",
                    "Întinderi de ligamente, tensiuni musculare",
                    "Dureri articulare",
                    "Sindrom de tunel carpian",
                    "Osteoporoză, spondilită",
                    "Monturi/degete deformate",
                    "Torticollis"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Organe Interne & Metabolism */}
            <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold">Organe Interne & Metabolism</h3>
                </div>
                <p className="text-emerald-100 text-sm">Funcții vitale și echilibru hormonal</p>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {[
                    "Infecții urinare recidivante, cistită",
                    "Afecțiuni renale/prostată",
                    "Simptome de menopauză",
                    "Dureri premenstruale, chisturi ovariene",
                    "Infertilitate, enurezis nocturn",
                    "Constipație cronică, crampe",
                    "Greață, disconfort digestiv",
                    "Calculi biliari/renali",
                    "Alergii",
                    "Tensiune arterială mărită/oscillantă",
                    "Afecțiuni cardio-vasculare și circulatorii",
                    "Infecții respiratorii",
                    "Dificultăți de respirație, astm, bronșită",
                    "Dureri de cap/migrene",
                    "Dureri dentare/mandibulare",
                    "Imunitate scăzută, obezitate",
                    "Congestii/infecții ale sinusurilor",
                    "Tinitus"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sistem Nervos & Echilibru Emoțional */}
            <div className="bg-white rounded-2xl shadow-lg border border-teal-100 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6 text-white">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Sistem Nervos & Echilibru</h3>
                </div>
                <p className="text-teal-100 text-sm">Stare mentală și recuperare neurologică</p>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {[
                    "Stres, anxietate",
                    "Dezechilibre emoționale, depresii",
                    "Oboseală cronică, insomnie",
                    "Sprijin adjuvant în boala Parkinson",
                    "Recuperare post-AVC",
                    "Paralizii/tetraplegii"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Versatilitate Excepțională</h3>
              <p className="text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
                Terapia Bowen se adaptează nevoilor fiecărui organism, fiind eficientă pentru o gamă largă de condiții. 
                Mișcările blânde și pauzele specifice permit corpului să își activeze propriile mecanisme de vindecare.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full">
                <Heart className="w-5 h-5 mr-2" />
                <span className="font-medium">Potrivită pentru toate vârstele - de la copii la vârstnici</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cum Decurge o Ședință */}
      <ProcessTimeline
        heading="Procesul Tău de Transformare"
        description="Pași clari și transparenți pentru o experiență confortabilă și eficientă"
        steps={[
          {
            number: "1",
            title: "Evaluare Inițială",
            description:
              "Discutăm despre starea ta de sănătate, obiectivele terapeutice și așteptările tale. Acest prim pas ne ajută să personalizăm abordarea pentru nevoile tale specifice.",
            elements: [
              "Analiza stării de sănătate actuale",
              "Identificarea zonelor problematice",
              "Stabilirea obiectivelor terapeutice",
            ],
          },
          {
            number: "2",
            title: "Sesiunea de Terapie Bowen",
            description:
              "Te întinzi confortabil pe masa de masaj, îmbrăcat în haine lejere. Terapeutul aplică secvențe de mișcări delicate pe puncte specifice ale corpului, urmate de pauze în care corpul procesează informația și inițiază auto-reglarea.",
            elements: [
              "Mișcări blânde pe mușchi, tendoane și nervi",
              "Pauze de 2-5 minute între secvențe",
              "Activarea sistemului nervos parasimpatic",
            ],
            benefits: [
              "Relaxare imediată și profundă",
              "Reducerea tensiunii musculare",
              "Îmbunătățirea circulației",
            ],
          },
          {
            number: "3",
            title: "Recomandări Post-Terapie",
            description:
              "Primești sfaturi personalizate despre hidratare, mișcare și stil de viață pentru a maximiza efectele ședinței și a susține procesul de vindecare.",
            elements: [
              "Ghid de hidratare adecvată",
              "Exerciții simple de întreținere",
              "Planificarea următoarelor ședințe",
            ],
          },
        ]}
        colorScheme="green"
      />

      {/* Trust Building - Cui i se adresează */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cui i se Adresează Terapia Bowen?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Terapia Bowen este o tehnică blândă și non-invazivă, potrivită
                pentru o gamă largă de persoane care caută soluții naturale
                pentru îmbunătățirea stării de sănătate.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Persoane de Toate Vârstele
                    </h4>
                    <p className="text-gray-600">
                      De la copii la vârstnici, terapia este adaptabilă și
                      sigură pentru toată familia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Sportivi și Persoane Active
                    </h4>
                    <p className="text-gray-600">
                      Ideal pentru recuperare după efort și îmbunătățirea
                      performanței
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Femei Însărcinate
                    </h4>
                    <p className="text-gray-600">
                      Sigură în timpul sarcinii pentru relaxare și reducerea
                      disconfortului
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Stil de Viață Sedentar
                    </h4>
                    <p className="text-gray-600">
                      Perfect pentru cei care petrec mult timp la birou sau au
                      mobilitate redusă
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                <h4 className="font-semibold text-green-800 mb-2">
                  ✅ Sigură și Blândă
                </h4>
                <p className="text-green-700 text-sm leading-relaxed">
                  Terapia Bowen este considerată sigură, fără contraindicații
                  absolute. În anumite condiții medicale se recomandă prudență
                  și ajustarea procedurilor, care vor fi discutate cu
                  terapeutul.
                </p>
              </div>
            </div>

            <div>
              <img
                src="/bowen-therapy.jpg"
                alt="Terapie Bowen - Ședință relaxantă"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimoniale */}
      <TestimonialGrid
        heading="Povești de Transformare Reală"
        description="Experiențele autentice ale clienților noștri cu Terapia Bowen"
        testimonials={[
          {
            text: "Terapia Bowen m-a ajutat să scap de durerile de spate cronice după doar 3 ședințe. Sunt uimită de rezultate și recomand cu încredere această terapie oricui se confruntă cu dureri musculare!",
            name: "Maria I.",
            age: "45 ani",
            condition: "Dureri de spate cronice",
            rating: 5,
          },
          {
            text: "Am observat o relaxare profundă și o îmbunătățire semnificativă a mobilității după prima ședință. Mișcările blânde și pauzele dintre ele creează o experiență unică de vindecare.",
            name: "Ion P.",
            age: "38 ani",
            condition: "Tensiune musculară",
            rating: 5,
          },
          {
            text: "Ca sportiv, am încercat multe terapii de recuperare, dar Terapia Bowen este cu adevărat specială. M-a ajutat să îmi îmbunătățesc performanța și să reduc durerile post-antrenament.",
            name: "Alexandru M.",
            age: "32 ani",
            condition: "Recuperare sportivă",
            rating: 5,
          },
          {
            text: "Eram copleșită de stres și anxietate din cauza serviciului. Terapia Bowen m-a ajutat să îmi regăsesc calmul interior și să gestionez mult mai bine presiunea zilnică. Simt o pace profundă după fiecare ședință.",
            name: "Elena R.",
            age: "41 ani",
            condition: "Stres, anxietate și depresie",
            rating: 5,
          },
          {
            text: "Oboseala cronică și insomniile îmi făceau viața un coșmar. După câteva ședințe de Terapie Bowen, dorm mult mai bine și am energie pe tot parcursul zilei. Mă simt renăscută!",
            name: "Carmen T.",
            age: "48 ani",
            condition: "Oboseală cronică și insomnie",
            rating: 5,
          },
          {
            text: "Mă îmbolnăveam constant, răceala după răceală. Sistemul meu imunitar era la pământ. Terapia Bowen m-a ajutat să îmi fortific imunitatea și acum trec mult mai rar prin episoade de boală.",
            name: "Andrei V.",
            age: "35 ani",
            condition: "Imunitate scăzută, răceli repetate",
            rating: 5,
          },
          {
            text: "După ani de încercări de a rămâne însărcinată, eram disperată. Terapia Bowen m-a ajutat să îmi echilibrez corpul și să reduc stresul. La 6 luni după ce am început terapia am rămas însărcinată!",
            name: "Mihaela D.",
            age: "33 ani",
            condition: "Probleme de fertilitate",
            rating: 5,
          },
          {
            text: "Menopauza îmi făcea viața imposibilă - bufeuri, insomnie, schimbări de dispoziție. Terapia Bowen m-a ajutat să trec mult mai ușor prin această perioadă și să îmi regăsesc echilibrul hormonal.",
            name: "Rodica M.",
            age: "52 ani",
            condition: "Simptome de menopauză",
            rating: 5,
          },
          {
            text: "Problemele digestive cronice îmi afectau calitatea vieții - balonare, dureri abdominale, tranzit irregular. Terapia Bowen a îmbunătățit semnificativ digestia și confortul gastric.",
            name: "Gheorghe P.",
            age: "44 ani",
            condition: "Probleme digestive cronice",
            rating: 5,
          },
        ]}
        columns={3}
      />

      {/* FAQ */}
      <ServiceFAQ
        heading="Întrebări Frecvente despre Terapia Bowen"
        description="Răspunsuri clare la cele mai comune întrebări"
        faqs={[
          {
            question: "Terapia Bowen doare?",
            answer:
              "Nu, absolut deloc! Mișcările sunt extrem de blânde și non-invazive. Majoritatea clienților descriu experiența ca fiind profund relaxantă și confortabilă. Nu există presiune puternică sau manevre dureroase.",
          },
          {
            question: "Trebuie să mă dezbrac pentru terapie?",
            answer:
              "Nu este necesar. Terapia Bowen se aplică peste haine lejere și confortabile (tricou și pantaloni de bumbac, de exemplu). Acest lucru face experiența mai confortabilă și mai puțin invazivă.",
          },
          {
            question: "De câte ședințe am nevoie pentru a vedea rezultate?",
            answer:
              "Numărul de ședințe variază în funcție de persoană și de condiția tratată. În general, mulți clienți observă îmbunătățiri după primele 3-5 ședințe. Unii simt schimbări pozitive chiar după prima ședință, în timp ce altele pot necesita un program mai îndelungat pentru rezultate optime. Există protocoale specifice pentru fiecare problemă de sănătate, care trebuie respectate pentru a obține rezultatele dorite în mod eficient și sigur.",
          },
          {
            question: "Cât durează o ședință de Terapie Bowen?",
            answer:
              "O ședință completă durează aproximativ 50-60 de minute, incluzând evaluarea inițială (10 min), terapia propriu-zisă (40-50 min) și recomandările finale. Pauzele dintre secvențele de mișcări sunt esențiale pentru eficiența terapiei.",
          },
          {
            question: "Care este diferența dintre Terapia Bowen și masajul clasic?",
            answer:
              "Spre deosebire de masajul clasic, Terapia Bowen folosește mișcări delicate și specifice pe puncte precise ale corpului, urmate de pauze în care corpul procesează informația. Nu există frecare continuă sau presiune puternică. Scopul este să activeze procesele naturale de auto-vindecare ale corpului, nu doar să relaxeze mușchii.",
          },
          {
            question: "Este sigură Terapia Bowen?",
            answer:
              "Da, Terapia Bowen este considerată foarte sigură și nu are contraindicații absolute. Este o tehnică blândă, non-invazivă, potrivită pentru persoane de toate vârstele, inclusiv copii, gravide și vârstnici. În anumite condiții medicale specifice, procedurile pot fi ajustate după discuția cu terapeutul.",
          },
        ]}
        layout="cards"
      />

      {/* CTA Final */}
      <ServiceCTA
        heading="Pregătit să Experimentezi Relaxarea Profundă?"
        description="Descoperă cum Terapia Bowen poate transforma starea ta de bine. Programează o consultație și primești un plan personalizat adaptat nevoilor tale."
        gradientFrom="green-600"
        gradientTo="emerald-600"
        ctaPrimary="Programează Consultația prin WhatsApp"
        trustSignals={[
          "✨ Consultație și evaluare",
          "📞 Răspundem în maxim 2 ore",
          "🌿 Terapie blândă și non-invazivă",
        ]}
        onPrimaryClick={handlePrimaryClick}
      />
    </>
  );
}