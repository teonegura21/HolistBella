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

export default function Healy() {
  const handlePrimaryClick = () => {
    trackEvent("healy_cta", "service_page", "whatsapp_click");
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
        badge="🔋 Dispozitiv Medical Certificat"
        title="Terapie Healy"
        titleHighlight="Armonizare Bioenergetică cu Microcurenți"
        description="Explorează o nouă dimensiune a stării de bine cu Healy, un dispozitiv portabil de wellness ce utilizează programe de microcurenți și frecvențe pentru a susține echilibrul natural al organismului."
        stats={[
          { number: "20-60", label: "Minute ședință" },
          { number: "100+", label: "Programe specializate" },
          { number: "FDA", label: "Certificat medical" },
        ]}
        gradientFrom="yellow-500"
        gradientTo="orange-500"
        heroIcon={Zap}
        onPrimaryClick={handlePrimaryClick}
      />

      {/* Beneficii Principale */}
      <BenefitCards
        heading="Beneficiile Terapiei Healy"
        description="Programe specializate pentru susținerea stării de bine și managementul durerii"
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

      {/* Cum Decurge o Ședință */}
      <ProcessTimeline
        heading="Cum Funcționează Terapia Healy"
        description="Proces personalizat și confortabil cu programe adaptate nevoilor tale"
        steps={[
          {
            number: "1",
            title: "Selectarea Programului",
            description:
              "Împreună cu terapeutul, alegem programul potrivit din cele peste 100 de programe disponibile în aplicația Healy, adaptat obiectivelor tale specifice.",
            duration: "5-10 minute",
            elements: [
              "Evaluarea nevoilor tale",
              "Alegerea programului optim",
              "Explicarea procesului",
            ],
          },
          {
            number: "2",
            title: "Aplicarea Electrozi",
            description:
              "Se aplică electrozii conform instrucțiunilor programului - brățări la încheieturi, electrozi adezivi sau electrozi de ureche, în funcție de tipul de program selectat.",
            duration: "5 minute",
            elements: [
              "Brățări la încheieturi (standard)",
              "Electrozi adezivi pentru zone specifice",
              "Electrozi de ureche pentru programe auriculare",
            ],
            benefits: [
              "Aplicare simplă și confortabilă",
              "Adaptare la nevoile specifice",
              "Fără disconfort sau durere",
            ],
          },
          {
            number: "3",
            title: "Derularea Programului",
            description:
              "Te relaxezi complet în timp ce programul Healy rulează. Microcurenții de joasă intensitate sunt livrați prin electrozi, iar intensitatea poate fi ajustată pentru confort maxim.",
            duration: "20-60 minute",
            elements: [
              "Microcurenți de joasă intensitate",
              "Frecvențe specifice programului",
              "Intensitate ajustabilă",
            ],
            benefits: [
              "Relaxare profundă",
              "Susținere echilibru energetic",
              "Management durere locală",
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
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Metode Complementare de Wellness
                    </h4>
                    <p className="text-gray-600">
                      Ideal pentru persoane care caută abordări moderne și non-invazive pentru susținerea stării de bine generale
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Sportivi și Persoane Active
                    </h4>
                    <p className="text-gray-600">
                      Perfect pentru recuperare musculară, reducerea durerii și îmbunătățirea performanței fizice
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Stil de Viață Agitat
                    </h4>
                    <p className="text-gray-600">
                      Excelent pentru gestionarea stresului zilnic, îmbunătățirea somnului și susținerea concentrării
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
              "Healy conține peste 100 de programe specializate, inclusiv pentru managementul durerii, relaxare, somn, concentrare, fitness, echilibru emoțional și susținerea stării de bine generală. Programele sunt grupate în categorii specifice.",
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