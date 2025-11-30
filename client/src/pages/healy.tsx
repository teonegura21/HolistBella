import { SEO } from "@/components/ui/seo";
import {
  ServiceHero,
  BenefitCards,
  ProcessTimeline,
  TestimonialGrid,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/services";
import { Zap, Heart, Brain, Activity, Shield, AlertCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { CONTACT_INFO } from "@/lib/constants";

export default function Healy() {
  const handlePrimaryClick = () => {
    trackEvent("healy_cta", "service_page", "whatsapp_click");
    window.open(CONTACT_INFO.whatsapp, "_blank");
  };

  return (
    <>
      <SEO
        title="Terapie Healy în Iași – Armonizare Bioenergetică cu Microcurenți | Holist Bella"
        description="Descoperă Healy în Iași - dispozitiv portabil de wellness cu programe de microcurenți pentru managementul durerii, relaxare și susținerea stării de bine. Consultație gratuită."
        keywords="healy, microcurenti, terapie frecvente, management durere, relaxare, iasi, holist bella"
      />

      {/* Hero Section */}
      <ServiceHero
        badge="🔋 Distribuitor Oficial & Terapeut Certificat"
        title="HEALY"
        titleHighlight="Terapie cu frecvențe personalizate și microcurenți pentru recuperare și echilibru"
        description="Descoperă puterea HEALY - tehnologia germană de vârf pentru armonizare bioenergetică. Beneficiază de terapie profesională în cabinet și online sau achiziționează aparatul tău HEALY original pentru wellness acasă."
        stats={[
          { number: "30-60", label: "Minute ședință" },
          { number: "200+", label: "Programe specializate" },
          { number: "FDA", label: "Certificat medical" },
        ]}
        gradientFrom="yellow-500"
        gradientTo="orange-500"
        heroIcon={Zap}
        onPrimaryClick={handlePrimaryClick}
      />

      {/* Link Achiziționare */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🛒 Achiziționare Directă Aparat HEALY</h3>
              <p className="text-lg text-gray-700 mb-6">
                Comandă aparatul tău HEALY original direct de la distribuitor cu garanție completă:
              </p>
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-yellow-300">
                <p className="text-lg font-semibold text-gray-900 mb-3">Link oficial pentru achiziționare:</p>
                <a 
                  href="https://eu.healy.shop/?partnername=5050-1126-9807" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black font-bold text-xl hover:text-gray-700 underline break-all"
                >
                  https://eu.healy.shop/?partnername=5050-1126-9807
                </a>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Garanție oficială
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Suport tehnic inclus
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healy - Sănătate și Echilibru */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healy — Sănătate & echilibru fizic și mental
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Primul dispozitiv portabil terapeutic activ cu Medical Cloud pentru wellness holistic
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Coloana stânga - Informații principale */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🏥 Dispozitiv Medical Certificat
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Healy este un produs medical recunoscut pentru reducerea durerii cronice, fibromialgiei, 
                  durerilor scheletice și migrenei, precum și pentru susținerea tratamentului bolilor psihice 
                  precum depresia, anxietatea și tulburările de somn.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🌟 Versatilitate Completă
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Fie că este vorba despre sănătate, wellness, stare de bine, frumusețe sau echilibru mental, 
                  Healy este extrem de versatil. Acest dispozitiv multi-talentat oferă programe pentru toate 
                  domeniile importante ale vieții tale, disponibile oricând și oriunde.
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-3">
                  🔬 Inovație Științifică
                </h4>
                <p className="text-yellow-700 text-sm leading-relaxed">
                  Dezvoltat de Marcus Schmieke, inventatorul sistemelor TimeWaver, în colaborare cu o echipă 
                  internațională de medici, oameni de știință și ingineri. După 10 ani de succes cu TimeWaver, 
                  tehnologia a devenit accesibilă tuturor.
                </p>
              </div>
            </div>

            {/* Coloana dreaptă - Funcționarea la nivel celular */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">🧬</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Sănătatea Începe în Celule
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Conform cercetărilor lui Robert O. Becker și Bjorn Nordenstrom (fost președinte al 
                    Comisiei pentru Premiul Nobel), întreruperea tensiunii membranelor celulare este 
                    cauza principală a bolilor acute și cronice.
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Cum Funcționează Healy:</h4>
                    <ul className="space-y-2 text-blue-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        Restaurează tensiunea sănătoasă a membranelor celulare
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        Contracarează procesul de degradare celulară
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        Reduce durerea și inflamația la nivel celular
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        Susține regenerarea și vitalitatea celulară
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h4 className="font-bold text-green-800 mb-3">
                  🎯 Analiză Personalizată
                </h4>
                <p className="text-green-700 text-sm leading-relaxed">
                  Healy analizează frecvențele individuale de care ai nevoie la un moment dat, oferindu-ți 
                  experiența bunăstării într-un mod holistic și pe termen lung - ușor și peste tot.
                </p>
              </div>
            </div>
          </div>

          {/* Beneficii cheie */}
          <div className="mt-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Portabil și Accesibil</h4>
                <p className="text-gray-600 text-sm">Tehnologie avansată în format compact, disponibilă oricând ai nevoie</p>
              </div>
              
              <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Echilibru Holistic</h4>
                <p className="text-gray-600 text-sm">Susținere completă pentru sănătatea fizică și mentală</p>
              </div>
              
              <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Regenerare Celulară</h4>
                <p className="text-gray-600 text-sm">Restaurare la nivel celular pentru vitalitate optimă</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficii Principale */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficiile Terapiei Healy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Programe specializate pentru susținerea stării de bine și managementul durerii
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Coloana stânga - Beneficii detaliate */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-8 text-center">
                  🌟 Avantajele Exclusive HEALY
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <span className="text-green-600 text-xl mr-4 mt-1">√</span>
                    <p className="text-green-800 leading-relaxed">
                      <strong>Oferă accesul la peste 200 de programe</strong>, ușor de selectat și de activat din aplicația downloadată pe smartphone
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-green-600 text-xl mr-4 mt-1">√</span>
                    <p className="text-green-800 leading-relaxed">
                      <strong>Oferă un tratament holistic, eficient</strong>, ce poate fi efectuat acasă, în călătorii, în timpul liber și chiar în timpul orelor de muncă
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-green-600 text-xl mr-4 mt-1">√</span>
                    <p className="text-green-800 leading-relaxed">
                      <strong>Funcționează cu succes</strong> pentru a vă ajuta să vă relaxați, să ameliorați durerile, să eliminați insomniile, să fiți mai performanți în sportul pe care îl practicați, să vă concentrați mai bine și să tratați diverse afecțiuni, de la durere la acnee
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-green-600 text-xl mr-4 mt-1">√</span>
                    <p className="text-green-800 leading-relaxed">
                      <strong>Programe ideale pentru toată familia</strong>, foarte ușor de folosit
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coloana dreaptă - Electrozi și CTA */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                  🔌 Electrozi Specializați
                </h3>
                
                <div className="flex items-start mb-6">
                  <span className="text-blue-600 text-xl mr-4 mt-1">√</span>
                  <div className="text-blue-800 leading-relaxed">
                    <p><strong>Este prevăzut cu electrozi disponibili în diverse variante:</strong></p>
                    <ul className="mt-3 space-y-2 ml-4">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1.5 text-xs">•</span>
                        <span><strong>Electrozi pentru urechi</strong> - pentru îmbunătățirea memoriei, concentrării, creativității și reducerea stresului</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1.5 text-xs">•</span>
                        <span><strong>Electrozi autoadezivi</strong> - pentru tratamentul durerii localizate, dureri menstruale, musculare, articulare, nevralgii</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1.5 text-xs">•</span>
                        <span><strong>Electrozi-brățară</strong> - pentru tratamentul sistemic</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-6">🚀 Începe Transformarea Ta!</h3>
                <p className="text-lg leading-relaxed mb-8">
                  Programează acum o sesiune la noi sau comandă acum pe linkul de mai jos propriul tău aparat Healy:
                </p>
                
                <div className="bg-white rounded-xl p-4 mb-6">
                  <a 
                    href="https://eu.healy.shop/?partnername=5050-1126-9807" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black font-bold text-lg hover:text-gray-700 underline break-all"
                  >
                    https://eu.healy.shop/?partnername=5050-1126-9807
                  </a>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="bg-white/20 rounded-lg px-4 py-2 text-sm">
                    📱 Sesiune în cabinet
                  </div>
                  <div className="bg-white/20 rounded-lg px-4 py-2 text-sm">
                    💻 Sesiune Online
                  </div>
                  <div className="bg-white/20 rounded-lg px-4 py-2 text-sm">
                    🏠 Aparat pentru acasă
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitCards
        heading="Aplicații Clinice Validate"
        description="Beneficii recunoscute medical și aplicații practice"
        benefits={[
          {
            icon: Zap,
            title: "Managementul Local al Durerii",
            description:
              "Utilizat ca dispozitiv TENS pentru ameliorarea temporară a durerii cronice, fibromialgiei, durerii osoase și migrenei prin stimulare nervoasă electrică transcutanată.",
            evidence: "Recunoscut de autoritățile de reglementare (FDA, UE Clasa IIa)",
          },
          {
            icon: Heart,
            title: "Susținerea Relaxării și Echilibrului",
            description:
              "Programele dedicate ajută la activarea stării de relaxare profundă și susținerea echilibrului emoțional și mental prin frecvențe specifice.",
            evidence: "Rapoarte consistente de experiență ale utilizatorilor",
          },
          {
            icon: Brain,
            title: "Suport pentru Somn și Concentrare",
            description:
              "Programele specializate pentru somn, concentrare și fitness pot fi integrate în stilul de viață sănătos pentru susținerea obiectivelor zilnice.",
            evidence: "Validat prin feedback utilizatori și aplicații practice",
          },
        ]}
        columns={3}
        colorScheme="yellow"
      />

      {/* Cum Funcționează Terapia Healy */}
      <ProcessTimeline
        heading="Cum Funcționează Terapia Healy"
        description="Proces inovator de armonizare bioenergetică prin microcurenți și frecvențe specifice"
        steps={[
          {
            number: "1",
            title: "Consultație și Personalizare",
            description:
              "Analizăm starea ta de sănătate și obiectivele dorite pentru a selecta programele HEALY cele mai potrivite din cele peste 200 disponibile. Fiecare program este adaptat nevoilor tale specifice pentru rezultate optime.",
            elements: [
              "Evaluare completă a stării de sănătate",
              "Identificarea zonelor de îmbunătățire",
              "Selecția programelor personalizate",
            ],
          },
          {
            number: "2",
            title: "Configurare Tehnologică Avansată",
            description:
              "Aplicăm electrozii specializați în funcție de obiectivele terapeutice (dacă folosim programul specific lor): electrozi auriculari pentru funcții cognitive, electrozi adezivi pentru zone localizate sau electrozi-brățară pentru tratament sistemic complet.",
            elements: [
              "Electrozi auriculari pentru memorie și concentrare",
              "Electrozi adezivi pentru dureri localizate",
              "Electrozi-brățară pentru echilibru sistemic",
            ],
            benefits: [
              "Tehnologie precisă și confortabilă",
              "Adaptare la tipul de terapie necesară",
              "Zero disconfort în timpul aplicării",
            ],
          },
          {
            number: "3",
            title: "Sesiune de Armonizare Bioenergetică",
            description:
              "Experimentezi relaxarea profundă în timp ce HEALY livrează microcurenți terapeutici și frecvențe specifice pentru restaurarea echilibrului celular și energetic. Intensitatea este perfect ajustată pentru confortul și eficacitatea maximă.",
            elements: [
              "Microcurenți cu intensitate controlată",
              "Frecvențe calibrate pentru obiective specifice",
              "Monitorizare continuă a confortului",
            ],
            benefits: [
              "Relaxare profundă și regenerare",
              "Echilibrare bioenergetică completă",
              "Susținerea proceselor naturale de vindecare",
            ],
          },
        ]}
        colorScheme="yellow"
      />

      {/* Trust Building - Cui i se adresează */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Potrivit pentru */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <Activity className="text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Cui i se Adresează Terapia Healy?
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Persoane cu Probleme de Sănătate sau Dezechilibre
                    </h4>
                    <p className="text-gray-600">
                      HEALY se adresează oricărei persoane care experimentează orice tip de problemă de sănătate, dezechilibru fizic, emoțional sau energetic. Tehnologia cu microcurenți poate susține procesele naturale de vindecare la nivel celular, indiferent de natura afecțiunii.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Specialiști în Medicina Integrativă și Complementară
                    </h4>
                    <p className="text-gray-600">
                      Profesioniștii din sănătate care implementează abordări holistice moderne și tehnologii avansate pentru optimizarea rezultatelor terapeutice și susținerea pacienților în procesul de vindecare
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Sportivi de Performanță și Persoane Active
                    </h4>
                    <p className="text-gray-600">
                      Tehnologia HEALY optimizează recuperarea musculară, reduce inflamația, accelerează vindecarea leziunilor și îmbunătățește performanța atletică prin restaurarea echilibrului bioelectric celular
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Managementul Stresului și Optimizarea Performanței Mentale
                    </h4>
                    <p className="text-gray-600">
                      Ideal pentru executivi, studenți și profesioniști care necesită gestionarea stresului acut, îmbunătățirea concentrării cognitive, optimizarea somnului și susținerea echilibrului neurovegetativ
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Prevenție și Wellness Proactiv
                    </h4>
                    <p className="text-gray-600">
                      Persoane proactive în menținerea sănătății care doresc să prevină dezechilibrele înainte de manifestarea clinică și să optimizeze funcționarea sistemelor corporale la nivel celular
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
                      Femei Însărcinate
                    </h4>
                    <p className="text-gray-600">
                      Nu se recomandă în timpul sarcinii
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Implanturi Electronice
                    </h4>
                    <p className="text-gray-600">
                      Persoane cu stimulator cardiac sau alte implanturi electronice
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Epilepsie
                    </h4>
                    <p className="text-gray-600">
                      Persoane cu epilepsie sau convulsii
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Răni Deschise
                    </h4>
                    <p className="text-gray-600">
                      Nu se aplică pe zone cu răni deschise sau infecții
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
                <h4 className="font-semibold text-amber-800 mb-2">
                  ⚠️ Disclaimer Medical Important
                </h4>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Healy este un dispozitiv medical clasa IIa în UE pentru tratamentul durerii cronice, fibromialgiei, durerii osoase și migrenei, precum și pentru susținerea bolilor mintale precum depresia, anxietatea și tulburările de somn. <strong>Toate celelalte aplicații nu sunt recunoscute de medicina convențională</strong> din cauza lipsei de dovezi medicale. Consultați întotdeauna medicul pentru diagnostic și tratament.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoniale */}
      <TestimonialGrid
        heading="Transformări Reale cu Healy"
        description="Clienții noștri împărtășesc experiențele lor autentice cu terapia Healy"
        testimonials={[
          {
            text: "Healy m-a ajutat să gestionez durerea de migrene mai eficient decât orice altceva am încercat. Programele specifice pentru durere au făcut o diferență semnificativă în calitatea vieții mele.",
            name: "Elena S.",
            age: "41 ani",
            condition: "Migrene cronice",
            rating: 5,
          },
          {
            text: "Senzația de relaxare după o ședință Healy este incredibilă. Am observat o îmbunătățire clară a somnului și o stare de calm generală care persistă zile întregi.",
            name: "Mihai D.",
            age: "35 ani",
            condition: "Stres și insomnie",
            rating: 5,
          },
          {
            text: "Ca sportiv, folosesc Healy pentru recuperare musculară. Programele pentru fitness și durere m-au ajutat să reduc timpul de recuperare și să îmbunătățesc performanța.",
            name: "Andrei T.",
            age: "28 ani",
            condition: "Recuperare sportivă",
            rating: 5,
          },
          {
            text: "Durerile de spate cronice mă împiedicau să îmi trăiesc viața normal. După 3 săptămâni cu programele HEALY pentru durere, pot din nou să dorm toată noaptea și să mă mișc fără medicație. Este incredibil!",
            name: "Carmen R.",
            age: "48 ani",
            condition: "Dureri lombare cronice",
            rating: 5,
          },
          {
            text: "Lucrez în IT și stresul era insuportabil. HEALY m-a ajutat să îmi regăsesc concentrarea și să gestionez presiunea de la birou. Productivitatea mea s-a dublat și am scăpat de anxietatea zilnică.",
            name: "Alexandru P.",
            age: "32 ani",
            condition: "Stres profesional și anxietate",
            rating: 5,
          },
          {
            text: "Ca life coach, folosesc HEALY atât personal cât și în sesiunile cu clienții. Îmi îmbunătățește intuiția și claritatea mentală, iar clienții observă schimbări profunde după sesiuni combinate coaching-HEALY.",
            name: "Ioana M.",
            age: "39 ani",
            condition: "Optimizare performanță în coaching",
            rating: 5,
          },
        ]}
        columns={3}
      />

      {/* FAQ */}
      <ServiceFAQ
        heading="Întrebări Frecvente despre Terapia Healy"
        description="Răspunsuri transparente la cele mai comune întrebări"
        faqs={[
          {
            question: "Ce simt în timpul unei ședințe Healy?",
            answer:
              "Majoritatea utilizatorilor simt o ușoară furnicătură la nivelul electrozilor, similară cu o stimulare electrică blândă. Intensitatea este complet ajustabilă pentru confort maxim. Nu există durere sau disconfort.",
          },
          {
            question: "Este Healy sigur de folosit?",
            answer:
              "Da, Healy este un dispozitiv medical certificat clasa IIa în UE și recunoscut de FDA pentru anumite aplicații. Este sigur când se respectă contraindicațiile și instrucțiunile de utilizare. Totuși, nu înlocuiește tratamentul medical convențional.",
          },
          {
            question: "Cât durează o ședință de terapie Healy?",
            answer:
              "Durata variază în funcție de programul selectat, de la 20 de minute pentru programe scurte, până la 60 de minute pentru programe complete. Timpul total include și pregătirea și ajustările.",
          },
          {
            question: "Ce programe sunt disponibile în Healy?",
            answer:
              "Healy conține peste 200 de programe specializate, inclusiv pentru managementul durerii, relaxare, somn, concentrare, fitness, echilibru emoțional și susținerea stării de bine generală. Programele sunt grupate în categorii specifice.",
          },
          {
            question: "Pot folosi Healy acasă?",
            answer:
              "Da, Healy este un dispozitiv portabil conceput pentru utilizare personală acasă. Vino pentru o ședință introductivă cu terapeutul pentru a învăța cum să folosești corect programele și electrozii pentru rezultate optime.",
          },
          {
            question: "Healy înlocuiește tratamentul medical?",
            answer:
              "Nu, Healy nu înlocuiește diagnosticul sau tratamentul medical convențional. Este un dispozitiv complementare pentru susținerea stării de bine. Pentru afecțiuni medicale, consultați întotdeauna medicul specialist.",
          },
        ]}
        layout="cards"
      />

      {/* CTA Final */}
      <ServiceCTA
        heading="Pregătit să Descoperi Puterea Healy?"
        description="Experimentează cum microcurenții Healy pot susține echilibrul natural al organismului tău. Programează o ședință introductivă și descoperă programele potrivite pentru tine."
        gradientFrom="yellow-500"
        gradientTo="orange-500"
        ctaPrimary="Rezervă Consultația prin WhatsApp"
        trustSignals={[
          "✨ Dispozitiv medical certificat UE Clasa IIa",
          "📞 Suport personalizat pentru alegerea programelor",
          "🔋 Portabil - poți continua acasă",
        ]}
        onPrimaryClick={handlePrimaryClick}
      />
    </>
  );
}