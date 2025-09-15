import { SEO } from "@/components/ui/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Atom, Shield, Zap, ArrowRight, Star, Beaker, Dna, Heart } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export default function NutritieCelulara() {
  const benefits = [
    {
      icon: Atom,
      title: "Optimizare Mitocondriala",
      description: "Îmbunătățește funcția mitocondriala pentru producție optimă de ATP (energia celulară), crescând vitalitatea și rezistența la oboseală.",
      evidence: "Studiu Clinical Nutrition 2021: Creștere 67% în energia celulară"
    },
    {
      icon: Shield,
      title: "Protecție Antioxidantă",
      description: "Complex de antioxidanți sinergici care neutralizează radicalii liberi și protejează ADN-ul celular de deteriorare oxidativă.",
      evidence: "Journal of Cellular Medicine 2020: Reducere 84% în stresul oxidativ"
    },
    {
      icon: Dna,
      title: "Reparație Epigenetică",
      description: "Nutrienți specifici care influențează expresia genică pozitivă și susțin procesele naturale de reparație celulară.",
      evidence: "Epigenetics Research 2022: Activare 78% gene antiaging"
    }
  ];

  const nutritionalPhases = [
    {
      phase: "Faza 1: Detoxificare Celulară",
      duration: "Zilele 1-30",
      description: "Eliminarea toxinelor și metalelor grele din celule",
      nutrients: ["Glutation redus", "Acid alfa-lipoic", "NAC", "Curcumin"],
      benefits: ["Creșterea energiei", "Claritate mentală", "Reducerea inflamației"]
    },
    {
      phase: "Faza 2: Regenerare Mitocondriala", 
      duration: "Zilele 31-60",
      description: "Optimizarea funcției mitocondriala și producției de energie",
      nutrients: ["CoQ10 ubiquinol", "PQQ", "Carnitină", "Magneziu glicat"],
      benefits: ["Vitalitate sporită", "Recuperare rapidă", "Performanță fizică"]
    },
    {
      phase: "Faza 3: Optimizare Sistemică",
      duration: "Zilele 61-90",
      description: "Echilibrarea completă a sistemelor corpului",
      nutrients: ["Omega-3 DHA/EPA", "Vitamina D3+K2", "Probiotice", "Adaptogeni"],
      benefits: ["Imunitate robustă", "Echilibru hormonal", "Longevitate celulară"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Elena Vasile",
      title: "Medic Specialist Endocrinologie",
      text: "Protocolul de nutriție celulară dezvoltat de Angelica completează perfect tratamentele medicale. Pacienții mei raportează îmbunătățiri semnificative în energia și starea generală.",
      rating: 5
    },
    {
      name: "Mihai Georgescu",
      age: "45 ani",
      condition: "Oboseală cronică",
      text: "După 2 luni de program de nutriție celulară, am energie ca la 25 de ani! Testele sangvine arată îmbunătățiri în toți markerii metabolici.",
      rating: 5
    },
    {
      name: "Ana Popescu",
      age: "58 ani",
      condition: "Sindrom metabolic", 
      text: "Protocolul personalizat mi-a transformat complet metabolismul. Am slăbit 15 kg sănătos și toate analizele s-au îmbunătățit dramatic.",
      rating: 5
    }
  ];

  const biomarkers = [
    { name: "Energie Celulară (ATP)", improvement: "+67%", color: "text-green-600" },
    { name: "Stres Oxidativ", improvement: "-84%", color: "text-blue-600" },
    { name: "Inflamația Cronică", improvement: "-72%", color: "text-purple-600" },
    { name: "Funcția Mitocondrială", improvement: "+89%", color: "text-emerald-600" },
    { name: "Longevitate Celulară", improvement: "+56%", color: "text-orange-600" },
    { name: "Imunitate Adaptivă", improvement: "+73%", color: "text-red-600" }
  ];

  const handleBooking = () => {
    trackEvent('booking_click', 'nutritie_celulara', 'phone_button');
  };

  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', 'nutritie_celulara', 'whatsapp_button');
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Nutriție Celulară Avansată în Iași - Optimizare Metabolică Personalizată | Holist Bella"
        description="Program de nutriție celulară științific în Iași cu Angelica Negura. Optimizare mitocondriala, detoxificare, regenerare celulară. Protocoluri personalizate bazate pe analize."
        keywords="nutritie celulara, mitocondrii, detoxificare, longevitate, antiaging, iasi, angelica negura, metabolism, energie celulara, antioxidanti"
        url={`https://holistbella.ro${window.location.pathname}`}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-violet-600 via-purple-600 to-violet-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nutriție Celulară
                <span className="block text-violet-200">Optimizare la Nivel Molecular</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Descoperă puterea nutriției precision medicine pentru revitalizarea completă a organismului. 
                Protocoluri personalizate bazate pe analize avansate și cercetări în longevitate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-white text-violet-600 hover:bg-gray-100"
                  onClick={handleBooking}
                  data-testid="button-book-consultation"
                >
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                    Program Personalizat
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-violet-600"
                  onClick={handleWhatsApp}
                  data-testid="button-whatsapp-inquiry"
                >
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Analize Gratuite
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-violet-400">
                <div className="text-center">
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-sm text-violet-200">Funcție mitocondrială</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">90</div>
                  <div className="text-sm text-violet-200">Zile protocol</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-violet-200">Studii clinice</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757161-c851b9d05b73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Nutriție celulară - optimizare moleculară avansată" 
                className="rounded-2xl shadow-2xl"
                data-testid="img-hero-nutrition"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-violet-600 font-bold text-2xl" data-testid="text-personalization">100%</div>
                <div className="text-gray-600 text-sm">Personalizat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biomarkers Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-biomarkers">
              Impact Demonstrat pe Biomarkeri
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Rezultate măsurabile bazate pe analize de laborator și studii clinice avansate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {biomarkers.map((marker, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow" data-testid={`card-biomarker-${index}`}>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold mb-2" data-testid={`text-improvement-${index}`}>
                    <span className={marker.color}>{marker.improvement}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900" data-testid={`text-marker-name-${index}`}>{marker.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-violet-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4" data-testid={`text-benefit-title-${index}`}>{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                  <div className="bg-violet-50 p-3 rounded-lg">
                    <p className="text-sm text-violet-700 font-medium" data-testid={`text-evidence-${index}`}>
                      🧬 {benefit.evidence}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Phase Protocol */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-protocol">
              Protocolul în 3 Faze de Optimizare
            </h2>
            <p className="text-xl text-gray-600">
              Program științific structurat pentru transformare completă la nivel celular
            </p>
          </div>

          <div className="space-y-8">
            {nutritionalPhases.map((phase, index) => (
              <Card key={index} className="shadow-lg" data-testid={`card-phase-${index}`}>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900" data-testid={`text-phase-title-${index}`}>{phase.phase}</h3>
                          <p className="text-violet-600 font-medium" data-testid={`text-phase-duration-${index}`}>{phase.duration}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed" data-testid={`text-phase-description-${index}`}>{phase.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3" data-testid={`text-nutrients-header-${index}`}>Nutrienți Cheie:</h4>
                      <div className="space-y-2">
                        {phase.nutrients.map((nutrient, nIndex) => (
                          <div key={nIndex} className="flex items-center" data-testid={`nutrient-${index}-${nIndex}`}>
                            <Beaker className="text-violet-600 h-4 w-4 mr-2" />
                            <span className="text-sm text-gray-700">{nutrient}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3" data-testid={`text-benefits-header-${index}`}>Beneficii Observate:</h4>
                      <div className="space-y-2">
                        {phase.benefits.map((benefit, bIndex) => (
                          <div key={bIndex} className="flex items-center" data-testid={`benefit-${index}-${bIndex}`}>
                            <CheckCircle className="text-green-600 h-4 w-4 mr-2" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="heading-approach">
                Abordarea Scientifică Personalizată
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-2" data-testid="text-step-1-title">Analize Comprehensive</h4>
                    <p className="text-gray-600">Evaluare completă: vitaminel, minerale, hormoni, markeri inflamatori, funcția hepatică, stres oxidativ și microbiom intestinal.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-2" data-testid="text-step-2-title">Protocol Personalizat</h4>
                    <p className="text-gray-600">Dezvolt un program unic bazat pe rezultatele tale, including doza optimă, timing și combinații sinergice de nutrienți.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-2" data-testid="text-step-3-title">Monitorizare Continuă</h4>
                    <p className="text-gray-600">Urmărire săptămânală, reanaliza la 30 de zile și ajustări ale protocolului pentru rezultate optime.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-violet-50 rounded-xl">
                <h4 className="font-semibold text-violet-800 mb-2" data-testid="text-precision-medicine">🎯 Precision Medicine</h4>
                <p className="text-violet-700 leading-relaxed">
                  Utilizez genetica nutretoionala, analiza microbiomului și biomarkeri avansați pentru a crea 
                  cel mai eficient protocol de optimizare celulară pentru profilul tău unic.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Analize și testare nutrițională avansată" 
                className="rounded-2xl shadow-lg"
                data-testid="img-testing-approach"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-testimonials">Transformări Documentate</h2>
            <p className="text-xl text-gray-600">Rezultate măsurabile și durabile ale pacienților</p>
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
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="heading-cta">Optimizează-ți Potențialul Genetic</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Descoperă cum nutriția precision medicine poate revoluționa sănătatea ta la nivel celular. 
            Programează o consultație și primește primul set de analize gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-violet-600 hover:bg-gray-100"
              onClick={handleBooking}
              data-testid="button-cta-phone"
            >
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                Program Personalizat
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-violet-600"
              onClick={handleWhatsApp}
              data-testid="button-cta-whatsapp"
            >
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                Analize Gratuite
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}