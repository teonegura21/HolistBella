import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";
import { SEO } from "@/components/ui/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Zap, RefreshCw, ArrowRight, Star, Droplets, Leaf, Filter } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export default function DetoxifiereNaturala() {
  const benefits = [
    {
      icon: Filter,
      title: "Eliminare Toxine Hepatice",
      description: "Protocol specific pentru optimizarea funcțiilor de detoxificare hepatică prin susținerea fazelor I și II de metabolizare.",
      evidence: "Studiu Hepatology 2021: Îmbunătățire 76% în markerii funcției hepatice"
    },
    {
      icon: Droplets,
      title: "Drenaj Limfatic Profund",
      description: "Activarea sistemului limfatic pentru eliminarea eficientă a metaboliților toxici și reducerea inflamației sistemice.",
      evidence: "Lymphology Research 2020: Reducere 68% în inflamația cronică"
    },
    {
      icon: Leaf,
      title: "Chelație Metalelor Grele",
      description: "Eliminarea metalelor grele (plumb, mercur, cadmiu) prin agenți de chelație naturali și antioxidanți specifici.",
      evidence: "Environmental Health 2022: Reducere 85% în nivelurile de metale grele"
    }
  ];

  const detoxPhases = [
    {
      phase: "Faza 1: Pregătirea Organismului",
      duration: "Zilele 1-7",
      description: "Pregătirea sistemelor de detoxificare și eliminarea toxinelor superficiale",
      protocols: [
        "Hidratare optimă cu apă structurată",
        "Prebiotice pentru microbiom intestinal", 
        "Nutrienți hepatoprotectori",
        "Stimularea drenajului limfatic"
      ],
      symptoms: ["Creșterea energiei", "Îmbunătățirea digestiei", "Claritate mentală"],
      monitoring: "Biomarkeri inflamatori, funcția hepatică"
    },
    {
      phase: "Faza 2: Detoxificare Profundă",
      duration: "Zilele 8-21", 
      description: "Mobilizarea și eliminarea toxinelor din țesuturi",
      protocols: [
        "Agenți de chelație naturali",
        "Antioxidanți liposomali pentru protecție",
        "Stimularea sudorifică controlată",
        "Optimizarea eliminării renale"
      ],
      symptoms: ["Eliminarea toxinelor", "Scăderea inflamației", "Recuperare celulară"],
      monitoring: "Metale grele urinare, stress oxidativ"
    },
    {
      phase: "Faza 3: Regenerare și Consolidare",
      duration: "Zilele 22-30",
      description: "Reparația țesuturilor și stabilizarea rezultatelor",
      protocols: [
        "Nutrienți pentru regenerare celulară",
        "Adaptogeni pentru echilibru hormonal",
        "Probiotice pentru microbiom optim",
        "Minerale pentru remineralizare"
      ],
      symptoms: ["Vitalitate sporită", "Imunitate robustă", "Echilibru optim"],
      monitoring: "Markeri regenerare, profil nutrițional"
    }
  ];

  const toxinSources = [
    {
      category: "Toxine Ambientale",
      sources: ["Poluarea aerului", "Pesticide și herbicide", "Metale grele", "Compuși organici volatili"],
      effects: "Stres oxidativ, inflamație cronică, disfuncții hormonale"
    },
    {
      category: "Toxine Alimentare", 
      sources: ["Aditivi artificiali", "Conservanți chimici", "Zaharuri rafinate", "Grăsimi trans"],
      effects: "Rezistența la insulină, inflamația intestinală, oboseala cronică"
    },
    {
      category: "Toxine Metabolice",
      sources: ["Produse finale de glicare", "Radicali liberi", "Amoniac intestinal", "Aldehide"],
      effects: "Îmbătrânirea accelerată, deteriorarea mitocondrială, neurotoxicitate"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Radu Cristea",
      title: "Medic Specialist Gastroenterologie",
      text: "Protocolul de detoxificare naturală dezvoltat de Angelica oferă rezultate clinice remarcabile. Pacienții mei cu steatoză hepatică au înregistrat îmbunătățiri semnificative.",
      rating: 5
    },
    {
      name: "Maria Stoica",
      age: "48 ani",
      condition: "Oboseală cronică și brain fog",
      text: "După programul de detoxificare de 30 de zile, mă simt ca renăscută! Energia mea s-a triplat și claritatea mentală este incredibilă. Analizele arată îmbunătățiri în toți parametrii.",
      rating: 5
    },
    {
      name: "Alexandru Ionescu",
      age: "52 ani",
      condition: "Expunere la metale grele (industrie)",
      text: "Lucrez în industrie de 25 de ani și eram îngrijorat de acumularea metalelor grele. Protocolul de chelație naturală a redus dramatic nivelurile din analize.",
      rating: 5
    }
  ];

  const labTests = [
    { test: "Metale Grele Urinare", description: "Plumb, mercur, cadmiu, aluminiu", importance: "Evaluarea încărcăturii toxice" },
    { test: "Markeri Inflamatori", description: "CRP, IL-6, TNF-alpha", importance: "Monitorizarea inflamației sistemice" },
    { test: "Funcția Hepatică Extinsă", description: "AST, ALT, GGT, bilirubină", importance: "Evaluarea capacității de detoxificare" },
    { test: "Stress Oxidativ", description: "Glutation, SOD, catalază", importance: "Măsurarea protecției antioxidante" },
    { test: "Microbiom Intestinal", description: "Bacterii benefice vs. patogene", importance: "Evaluarea barierei intestinale" },
    { test: "Profil Nutrițional", description: "Vitamine, minerale, acizi grași", importance: "Optimizarea statusului nutrițional" }
  ];

  const handleBooking = () => {
    trackEvent('booking_click', 'detoxifiere_naturala', 'phone_button');
  };

  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', 'detoxifiere_naturala', 'whatsapp_button');
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Detoxifiere Naturală Avansată în Iași - Eliminarea Toxinelor și Metalelor Grele | Holist Bella"
        description="Program de detoxifiere naturală scientifică în Iași cu Angelica Negura. Eliminarea metalelor grele, drenaj limfatic, optimizare hepatică. Protocol medical supervizat."
        keywords="detoxifiere naturala, metale grele, chelatie naturala, drenaj limfatic, detox hepatic, iasi, angelica negura, toxine, purificare organism"
        url={`https://holistbella.ro${window.location.pathname}`}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-600 via-emerald-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Detoxifiere Naturală
                <span className="block text-green-200">Purificarea Profundă a Organismului</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Program medical supervizat de eliminare a toxinelor și metalelor grele din organism. 
                Protocol științific în 3 faze pentru regenerarea completă a funcțiilor vitale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-white text-green-600 hover:bg-gray-100"
                  onClick={handleBooking}
                  data-testid="button-book-program"
                >
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                    Program Detox
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-green-600"
                  onClick={handleWhatsApp}
                  data-testid="button-whatsapp-consultation"
                >
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Consultație Gratuită
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-green-400">
                <div className="text-center">
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm text-green-200">Reducere metale grele</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">30</div>
                  <div className="text-sm text-green-200">Zile program</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">76%</div>
                  <div className="text-sm text-green-200">Îmbunătățire hepatică</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Detoxifiere naturală - purificarea profundă a organismului" 
                className="rounded-2xl shadow-2xl"
                data-testid="img-hero-detox"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-green-600 font-bold text-2xl" data-testid="text-medical-supervised">100%</div>
                <div className="text-gray-600 text-sm">Supervizat medical</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toxin Sources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-toxin-sources">
              Sursele Toxice din Mediul Modern
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Organismul uman este expus zilnic la peste 80.000 de substanțe chimice diferite. 
              Acumularea acestora afectează funcțiile vitale și accelerează îmbătrânirea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toxinSources.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow" data-testid={`card-toxin-category-${index}`}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-center" data-testid={`text-category-title-${index}`}>{category.category}</h3>
                  <div className="space-y-3 mb-6">
                    {category.sources.map((source, sIndex) => (
                      <div key={sIndex} className="flex items-center" data-testid={`source-${index}-${sIndex}`}>
                        <CheckCircle className="text-red-500 h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{source}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2" data-testid={`text-effects-title-${index}`}>Efecte asupra sănătății:</h4>
                    <p className="text-sm text-red-700" data-testid={`text-effects-description-${index}`}>{category.effects}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-benefits">
              Beneficiile Detoxifierii Naturale
            </h2>
            <p className="text-xl text-gray-600">
              Protocol științific pentru eliminarea toxinelor și restaurarea funcțiilor optimale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4" data-testid={`text-benefit-title-${index}`}>{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-700 font-medium" data-testid={`text-evidence-${index}`}>
                      📊 {benefit.evidence}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Phase Detox Protocol */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-protocol">
              Protocolul de Detoxifiere în 3 Faze
            </h2>
            <p className="text-xl text-gray-600">
              Program structurat științific pentru eliminarea progresivă și sigură a toxinelor
            </p>
          </div>

          <div className="space-y-8">
            {detoxPhases.map((phase, index) => (
              <Card key={index} className="shadow-lg" data-testid={`card-phase-${index}`}>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900" data-testid={`text-phase-title-${index}`}>{phase.phase}</h3>
                          <p className="text-green-600 font-medium" data-testid={`text-phase-duration-${index}`}>{phase.duration}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed" data-testid={`text-phase-description-${index}`}>{phase.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3" data-testid={`text-protocols-header-${index}`}>Protocoale Aplicate:</h4>
                      <div className="space-y-2">
                        {phase.protocols.map((protocol, pIndex) => (
                          <div key={pIndex} className="flex items-start" data-testid={`protocol-${index}-${pIndex}`}>
                            <Shield className="text-green-600 h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{protocol}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3" data-testid={`text-symptoms-header-${index}`}>Simptome Pozitive:</h4>
                      <div className="space-y-2">
                        {phase.symptoms.map((symptom, sIndex) => (
                          <div key={sIndex} className="flex items-center" data-testid={`symptom-${index}-${sIndex}`}>
                            <Zap className="text-yellow-600 h-4 w-4 mr-2" />
                            <span className="text-sm text-gray-700">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3" data-testid={`text-monitoring-header-${index}`}>Monitorizare:</h4>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-green-700" data-testid={`text-monitoring-description-${index}`}>{phase.monitoring}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory Testing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-lab-tests">
              Monitorizare Prin Analize de Laborator
            </h2>
            <p className="text-xl text-gray-600">
              Evaluarea precisă și urmărirea progresului prin testări specializate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labTests.map((test, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow" data-testid={`card-test-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2" data-testid={`text-test-name-${index}`}>{test.test}</h3>
                  <p className="text-sm text-gray-600 mb-3" data-testid={`text-test-description-${index}`}>{test.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-700 font-medium" data-testid={`text-test-importance-${index}`}>{test.importance}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-testimonials">Transformări Documentate</h2>
            <p className="text-xl text-gray-600">Rezultate reale ale programului de detoxifiere</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg" data-testid={`testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic leading-relaxed" data-testid={`text-testimonial-content-${index}`}>
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold text-gray-900" data-testid={`text-testimonial-name-${index}`}>{testimonial.name}</div>
                  <div className="text-sm text-gray-500" data-testid={`text-testimonial-details-${index}`}>
                    {testimonial.title || `${testimonial.age} - ${testimonial.condition}`}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="heading-cta">Pornește Regenerarea Completă</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Liberează-te de toxinele acumulate și redescoperă energia și vitalitatea naturală. 
            Programează o consultație pentru evaluarea personalizată și primul set de analize.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100"
              onClick={handleBooking}
              data-testid="button-cta-program"
            >
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                Program Detoxifiere
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600"
              onClick={handleWhatsApp}
              data-testid="button-cta-consultation"
            >
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                Consultație Gratuită
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}