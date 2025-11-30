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
import { CONTACT_INFO } from "@/lib/constants";

export default function ApaKangen() {
  const handlePrimaryClick = () => {
    trackEvent("apa_kangen_cta", "service_page", "whatsapp_click");
    window.open(CONTACT_INFO.whatsapp, "_blank");
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
        badge="💧 Distribuitor Autorizat Kangen"
        title="Apă Kangen - Distribuitor Oficial"
        titleHighlight="Hidratare Alcalină Ionizată Premium cu Consultanță Specializată"
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

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Apa Kangen este bogată în anti-oxidanți, apă sănătoasă pentru revitalizarea celulelor și o alternativă sănătoasă a apei potabile și apei îmbuteliate
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Apa Kangen (apa alcalină)Aparatele de apă Enagic® filtrează clorul și alte impurități care se găsesc în apa potabilă, apoi separă hidrogenul și oxigenul printr-un proces cunoscut drept electroliză. Acest proces adaugă un electron hidrogenului, formând o nouă moleculă numită gaz diatomic de hidrogen molecular. Când această moleculă este adăugată apei de la robinet, rezultă apa alcalină Kangen® puternic antioxidantă.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Oxidantul, prin definiție, este un agent de oxidare, în timp ce anti-oxidantul este orice substanță care încetinește sau previne oxidarea unei alte substanțe chimice.
          </p>
        </div>
      </section>

      {/* Ce este apa Kangen? */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6">
              <Droplets className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce este apa Kangen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descoperă originile și beneficiile apei care a transformat sănătatea în Japonia timp de peste 40 de ani
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Explicația despre Kangen */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">回</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Kangen = "Reîntoarcerea la Origini"</h3>
                    <p className="text-blue-100 text-sm">Etimologie japoneză</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed">
                  Termenul Kangen înseamnă „reîntoarcerea la origini" în limba japoneză. Apa Kangen este o apă alcalină, 
                  produsă de dispozitivele de ionizare și filtrare Enagic. Timp de peste 40 ani, apa Kangen a fost 
                  utilizată în Japonia pentru a ajuta la redarea stării originale, alcaline a organismului.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  Tehnologia Enagic
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aceste aparate pot transforma apa obișnuită de la robinet în apă de băut sănătoasă, alcalină, 
                  cu gust proaspăt. Alegând să consumați apă alcalină, ajutați organismul să se reîntoarcă la starea sa de echilibru.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    Apa Kangen este o apă curată, proaspătă cu un gust minunat pentru a obține o stare de sănătate optimă!
                  </p>
                </div>
              </div>
            </div>

            {/* Importanța apei */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-cyan-600 to-teal-600 rounded-2xl p-8 text-white">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Apa este cea mai importantă substanță din lume</h3>
                </div>
                <p className="text-lg leading-relaxed text-center">
                  Consumul zilnic de apă este vital pentru sănătatea noastră. Corpurile noastre sunt de până la 75% apă, 
                  iar o hidratare corespunzătoare este esențială pentru sănătatea noastră.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-cyan-100">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <Heart className="w-5 h-5 text-cyan-600 mr-3" />
                    Funcții Vitale ale Apei
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Transportă substanțe nutritive în celule",
                      "Ajută la digestie și metabolism",
                      "Elimină toxinele din organism",
                      "Previne durerea de cap și oboseala",
                      "Poate ajuta la scăderea sau întreținerea în greutate"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">75%</span>
                    </div>
                    <span className="font-bold text-green-800">Corpul uman = 75% apă</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    O hidratare corespunzătoare este fundamentală pentru toate funcțiile vitale ale organismului
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Final */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tradiție Japoneză × Tehnologie Modernă</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                Peste 40 de ani de utilizare în Japonia confirmă eficacitatea apei Kangen în susținerea sănătății. 
                Acum această tehnologie este disponibilă și pentru tine, cu consultanță specializată de la un distribuitor autorizat.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full">
                  <span className="text-blue-800 font-medium">🇯🇵 Tradiție japoneză de 40+ ani</span>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-100 rounded-full">
                  <span className="text-cyan-800 font-medium">💧 Tehnologie Enagic certificată</span>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full">
                  <span className="text-teal-800 font-medium">🏆 Distribuitor autorizat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietățile Apei Kangen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              PROPRIETĂȚILE APEI KANGEN
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Înțelege știința din spatele tehnologiei Kangen și cum contribuie la sănătatea optimă
            </p>
          </div>

          <div className="space-y-12">
            {/* Hidrogen Molecular */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-8 text-white">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold">H₂</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Apă Bogată în Hidrogen Molecular</h3>
                      <p className="text-cyan-100 text-sm">Antioxidant natural puternic</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    Apă bogată în hidrogen are o concentrație ridicată de Hidrogen Molecular (H₂). 
                    Hidrogenul Molecular este un antioxidant eficient care se difuzează rapid la nivelul 
                    membranelor celulare, reduce radicalii liberi și suprimă stresul oxidativ.
                  </p>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="font-medium">
                      Prin procesul de electroliză, apa de la robinet devine apă Kangen®, bogată în hidrogen.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Stresul Oxidativ și Antioxidanții</h4>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Reacțiile de oxidare din organism pot produce radicali liberi. Antioxidanții împiedică aceste reacții, 
                      dar ratele crescute de oxidanți și antioxidanți insuficienți în organism provoacă stres oxidativ și 
                      distrug sau ucid celulele.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <p className="font-medium text-blue-800 mb-2">De ce este important:</p>
                      <p className="text-sm">
                        Aprovizionarea constantă a surselor externe de antioxidanți ar trebui să facă parte din dieta zilnică 
                        pentru a reduce stresul oxidativ și vătămările asociate acestuia. Din acest motiv, toată lumea ar trebui 
                        să aibă grijă nu numai de cantitatea de apă consumată, ci și de calitatea apei.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* pH Alcalin */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">pH</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Proprietate Alcalină</h3>
                    <p className="text-teal-100 text-sm">Echilibrul perfect pentru organism</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  Ca în majoritatea lucrurilor din viață, sănătatea optimă începe cu echilibrul. Organismul nostru 
                  trebuie să mențină un nivel echilibrat al pH-ului de 7,365, care este ușor alcalin.
                </p>
                <div className="bg-white/10 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span>0 (Acid)</span>
                    <span className="font-bold">7.0 (Neutru)</span>
                    <span>14 (Alcalin)</span>
                  </div>
                  <div className="w-full h-2 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 rounded-full mt-2"></div>
                  <div className="text-center mt-2">
                    <span className="bg-white text-teal-600 px-2 py-1 rounded text-xs font-bold">pH Kangen: 8.5-9.5</span>
                  </div>
                </div>
                <p className="text-teal-100 text-sm">
                  O scară pH este utilizată pentru a determina dacă o substanță este acidă sau alcalină. 
                  Orice substanță peste 7 este considerată alcalină, iar sub 7 este considerată acidă.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Zap className="w-6 h-6 text-teal-600 mr-3" />
                    Echilibrul Perfect
                  </h4>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-600 mb-2">7.365</div>
                    <p className="text-gray-600 font-medium">pH optim al organismului</p>
                    <p className="text-sm text-gray-500 mt-2">Ușor alcalin pentru sănătate optimă</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
                  <p className="text-green-800 font-medium text-center">
                    "Ambele sunt esențiale pentru bunăstarea noastră: cantitatea ȘI calitatea apei consumate"
                  </p>
                </div>
              </div>
            </div>

            {/* ORP Negativ */}
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4">
                  <span className="text-white font-bold text-lg">ORP</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ORP (Potențial de Oxido-Reducere) Negativ
                </h3>
                <p className="text-gray-600">Măsura puterii antioxidante a apei</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-red-600 font-bold">+</span>
                    </div>
                    <h4 className="font-bold text-gray-900">ORP Pozitiv</h4>
                    <p className="text-sm text-gray-500">Potențial de oxidare</p>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Curățare și dezinfectare
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Utilizare externă
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Valori pozitive mari
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 font-bold">-</span>
                    </div>
                    <h4 className="font-bold text-gray-900">ORP Negativ (Kangen)</h4>
                    <p className="text-sm text-green-600 font-medium">Potențial antioxidant</p>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Ideal pentru consum oral
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Protecție antioxidantă
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Valori negative benefice
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
                <p className="text-gray-700 text-center leading-relaxed">
                  <strong>La fel ca pH-ul, valorile ORP reprezintă o măsură importantă pentru determinarea calității apei.</strong> 
                  Apa bogată în hidrogen se caracterizează prin ORP negativ, indicând un potențial antioxidant superior 
                  pentru consumul zilnic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipuri de Apă Kangen */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <Droplets className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              TIPURI DE APĂ KANGEN
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tehnologia Enagic produce 5 tipuri diferite de apă, fiecare cu proprietăți și utilizări specifice
            </p>
          </div>

          <div className="grid gap-8">
            {/* Apa Super Alcalină pH 11 */}
            <div className="bg-white rounded-2xl shadow-xl border border-purple-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold">11</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Apă Super Alcalină Kangen</h3>
                      <p className="text-purple-200">pH 11 - Putere de curățare superioară</p>
                    </div>
                  </div>
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    NU ESTE DE BĂUT
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Această apă nu este de băut. Apa Super Alcalină menține igiena în viața dumneavoastră zilnică 
                  datorită efectului puternic de curățare. Are beneficii de dizolvare și termoconductoare.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-bold text-purple-800 mb-2">Utilizări recomandate:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-purple-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      Prepararea alimentelor
                    </li>
                    <li className="flex items-center text-purple-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      Curățarea alimentelor
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Apa Kangen pH 8,5-9,5 */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg font-bold">8.5-9.5</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Apă Kangen Optimă</h3>
                      <p className="text-blue-200">pH 8.5-9.5 - Pentru consum zilnic</p>
                    </div>
                  </div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    IDEAL PENTRU BĂUT
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Acest tip de apă este perfect pentru băut și pentru prepararea sănătoasă a mâncării. 
                  Această apă ionizată și bogată în hidrogen acționează pentru a reda alcalinitatea organismului, 
                  o condiție optimă pentru o sănătate bună.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Utilizări recomandate:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      "Consum zilnic",
                      "Prepararea mâncării",
                      "Cafea și ceaiuri",
                      "Supe și sosuri",
                      "Udarea plantelor"
                    ].map((use, index) => (
                      <div key={index} className="flex items-center text-blue-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {use}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Apa Clean pH 7 */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-600 to-slate-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold">7</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Apă Clean Neutră</h3>
                      <p className="text-gray-200">pH 7 - Puritate maximă</p>
                    </div>
                  </div>
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    APĂ CURATĂ
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Fără clor, rugină și fără un aspect tulbure. Apa Clean este o apă delicioasă de băut, 
                  perfect filtrată și purificată pentru utilizări speciale.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Utilizări recomandate:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                      Prepararea mâncării pentru sugari
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                      Administrarea de medicamente
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Apa Beauty pH 4 */}
            <div className="bg-white rounded-2xl shadow-xl border border-pink-100 overflow-hidden">
              <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Apă Beauty Acidă</h3>
                      <p className="text-pink-200">pH 4 - Pentru îngrijire și frumusețe</p>
                    </div>
                  </div>
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    NU ESTE DE BĂUT
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Nu este de băut. Această apă ușor acidă este recunoscută pentru efectele sale astringente. 
                  Este minunată pentru curățarea delicată și îngrijirea pielii.
                </p>
                <div className="bg-pink-50 rounded-lg p-4">
                  <h4 className="font-bold text-pink-800 mb-2">Utilizări recomandate:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      "Spălare facială",
                      "Îngrijirea părului",
                      "Îngrijirea animalelor de companie",
                      "Lustruire și curățenie",
                      "Conservarea alimentelor congelate"
                    ].map((use, index) => (
                      <div key={index} className="flex items-center text-pink-700">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                        {use}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Apa Super Acidă pH 2,7 */}
            <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg font-bold">2.7</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Apă Super Acidă</h3>
                      <p className="text-red-200">pH 2.7 - Proprietăți dezinfectante</p>
                    </div>
                  </div>
                  <div className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                    NU ESTE DE BĂUT
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Nu este de băut. Această apă are proprietăți de dezinfectare. Utilizați Apa Super Acidă 
                  pentru a igieniza ustensilele de bucătărie, blaturile de bucătărie, pentru a preveni contaminarea încrucișată.
                </p>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 mb-2">Utilizări recomandate:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center text-red-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Curățare și dezinfectare
                    </li>
                    <li className="flex items-center text-red-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Igienă și operațiuni comerciale
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Rezumat și CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Un Dispozitiv, Cinci Tipuri de Apă</h3>
              <p className="text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
                Tehnologia Enagic îți oferă versatilitatea completă: de la hidratare optimă cu pH alcalin, 
                la curățare profundă cu pH super alcalin, până la dezinfectare cu pH super acid. 
                O investiție completă pentru sănătatea și igiena familiei tale.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full">
                  <span className="font-medium">💧 5 tipuri de apă diferite</span>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full">
                  <span className="font-medium">🏠 Pentru întreaga casă</span>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full">
                  <span className="font-medium">🔬 Tehnologie japoneză</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        description="Descoperă cum apa Kangen poate îmbunătăți hidratarea, digestia și echilibrul metabolic. Programează o consultație pentru a înțelege beneficiile specifice nevoilor tale."
        gradientFrom="blue-600"
        gradientTo="teal-600"
        ctaPrimary="Programează Consultația prin WhatsApp"
        trustSignals={[
          "✨ Aprobat medical Japonia & Coreea",
          "💧 Hidratare celulară superioară",
          "📞 Consultanță personalizată",
        ]}
        onPrimaryClick={handlePrimaryClick}
      />
    </>
  );
}