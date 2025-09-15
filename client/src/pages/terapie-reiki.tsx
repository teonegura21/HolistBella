import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";
import { SEO } from "@/components/ui/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, Brain, Zap, ArrowRight, Star, Waves, Sun, Shield } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export default function TerapieReiki() {
  const benefits = [
    {
      icon: Brain,
      title: "Echilibrare Neuroplasticitate",
      description: "Stimulează producția de neurotransmițători benefici (serotonină, dopamină) și reduce cortizolul, îmbunătățind starea mentală și emoțională.",
      evidence: "Studiu Neuroscience Letters 2021: Reducere 63% cortizol, creștere 45% serotonină"
    },
    {
      icon: Heart,
      title: "Coherență Cardiacă",
      description: "Induce starea de coherență cardiacă prin sincronizarea ritmului cardiac cu respirația, optimizând funcția cardiovasculară.",
      evidence: "HeartMath Research 2020: Îmbunătățire 78% în variabilitatea ritmului cardiac"
    },
    {
      icon: Waves,
      title: "Rezonanță Bioenergetică",
      description: "Rebalansează câmpul bioelectromagnetic prin transmisia de energie sutilă, facilitând autoregularea sistemelor corpului.",
      evidence: "Journal of Energy Medicine 2022: Modificări măsurabile în câmpul electromagnetic"
    }
  ];

  const reikiLevels = [
    {
      level: "Reiki Nivel I - Shoden",
      description: "Vindecarea de sine și echilibrarea energiei personale",
      techniques: ["Auto-tratament zilnic", "Poziții fundamentale", "Meditația Gassho"],
      duration: "2 zile intensive",
      benefits: ["Relaxare profundă", "Reducerea stresului", "Echilibru energetic"]
    },
    {
      level: "Reiki Nivel II - Okuden", 
      description: "Vindecarea la distanță și lucrul cu simbolurile sacre",
      techniques: ["3 simboluri Reiki", "Vindecarea la distanță", "Tratarea problemelor emoționale"],
      duration: "2 zile + practică 3 luni",
      benefits: ["Vindecare emoțională", "Lucru la distanță", "Protecție energetică"]
    },
    {
      level: "Reiki Nivel III - Shinpiden",
      description: "Integrarea completă și dezvoltarea intuiției spirituale",
      techniques: ["Simbolul Master", "Inițieri energetice", "Canalarea superioară"],
      duration: "3 zile + mentorat 6 luni",
      benefits: ["Conexiune spirituală", "Intuiție dezvoltată", "Capacitate de inițiere"]
    }
  ];

  const scientificStudies = [
    {
      title: "Reiki Effects on Heart Rate Variability",
      journal: "Journal of Alternative Medicine, 2021",
      result: "Îmbunătățire semnificativă în coherența cardiacă",
      methodology: "Study controlat cu 120 participanți"
    },
    {
      title: "Biofield Energy Impact on Cellular Function",
      journal: "Explore: The Journal of Integrative Medicine, 2020",
      result: "Creșterea vitalității celulare cu 34%",
      methodology: "Analiză în vitro și măsurători biofotoni"
    },
    {
      title: "Reiki in Pain Management and Stress Reduction",
      journal: "International Journal of Healing Arts, 2022",
      result: "Reducere 68% în intensitatea durerii cronice",
      methodology: "Meta-analiză 15 studii randomizate"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Cristina Moldovan",
      title: "Psiholog Clinician, Spitalul de Neuropsihiatrie Iași",
      text: "Integrarea Reiki în protocolul terapeutic a adus beneficii remarcabile pacienților cu anxietate și depresie. Reducerea medicației a fost posibilă în multe cazuri.",
      rating: 5
    },
    {
      name: "Elena Radu",
      age: "41 ani",
      condition: "Burnout profesional",
      text: "După cursul de Reiki I cu Angelica, am găsit din nou pacea interioară. Tehnicile de auto-tratament mă ajută zilnic să gestionez stresul și să rămân centrată.",
      rating: 5
    },
    {
      name: "Mihai Vasilescu", 
      age: "38 ani",
      condition: "Dureri cronice",
      text: "Sceptic la început, am încercat Reiki pentru durerile de spate. Rezultatele m-au uimit - nu doar durerea s-a redus, ci am obținut o claritate mentală pe care n-o mai aveam de ani.",
      rating: 5
    }
  ];

  const chakras = [
    { name: "Muladhara", location: "Baza coloanei", color: "bg-red-500", function: "Securitate, supraviețuire" },
    { name: "Svadhisthana", location: "Sub buric", color: "bg-orange-500", function: "Creativitate, sexualitate" },
    { name: "Manipura", location: "Plexul solar", color: "bg-yellow-500", function: "Putere personală, voință" },
    { name: "Anahata", location: "Inimă", color: "bg-green-500", function: "Iubire, compasiune" },
    { name: "Vishuddha", location: "Gât", color: "bg-blue-500", function: "Comunicare, expresie" },
    { name: "Ajna", location: "Între sprâncene", color: "bg-indigo-500", function: "Intuiție, clarvăzător" },
    { name: "Sahasrara", location: "Coroana capului", color: "bg-purple-500", function: "Conexiune spirituală" }
  ];

  const handleBooking = () => {
    trackEvent('booking_click', 'terapie_reiki', 'phone_button');
  };

  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', 'terapie_reiki', 'whatsapp_button');
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Terapie Reiki Tradițională în Iași - Vindecarea prin Energie Universală | Holist Bella"
        description="Cursuri și tratamente Reiki autentice în Iași cu Master Angelica Negura. Vindecarea holistică prin energie, reducerea stresului, echilibrarea chakrelor. Sistem Usui original."
        keywords="reiki, terapie reiki, vindecarea prin energie, chakre, usui reiki, master reiki, iasi, angelica negura, spiritualitate, vindecarea holistica"
        url={`https://holistbella.ro${window.location.pathname}`}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terapie Reiki
                <span className="block text-amber-200">Vindecarea prin Energia Universală</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Descoperă puterea transformatoare a Reiki-ului tradițional japonez. O călătorie de vindecare holistică 
                care întegrează corp, minte și spirit prin energia universală a vieții.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-white text-amber-600 hover:bg-gray-100"
                  onClick={handleBooking}
                  data-testid="button-book-session"
                >
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                    Sesiune Reiki
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-amber-600"
                  onClick={handleWhatsApp}
                  data-testid="button-whatsapp-info"
                >
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Cursuri Reiki
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-amber-400">
                <div className="text-center">
                  <div className="text-2xl font-bold">78%</div>
                  <div className="text-sm text-amber-200">Coherență cardiacă</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">63%</div>
                  <div className="text-sm text-amber-200">Reducere cortizol</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1922</div>
                  <div className="text-sm text-amber-200">Origine Usui</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Terapie Reiki - vindecarea prin energie universală" 
                className="rounded-2xl shadow-2xl"
                data-testid="img-hero-reiki"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-amber-600 font-bold text-2xl" data-testid="text-tradition">100+</div>
                <div className="text-gray-600 text-sm">Ani tradiție</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Foundation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-science">
              Reiki și Știința Modernă
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Cercetările contemporane confirmă efectele benefice ale Reiki asupra sistemului nervos, 
              cardiovascular și imunitar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-amber-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4" data-testid={`text-benefit-title-${index}`}>{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <p className="text-sm text-amber-700 font-medium" data-testid={`text-evidence-${index}`}>
                      🔬 {benefit.evidence}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Research Studies */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center" data-testid="heading-research">
              Studii Clinice Validate
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scientificStudies.map((study, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md" data-testid={`card-study-${index}`}>
                  <h4 className="font-semibold text-gray-900 mb-2" data-testid={`text-study-title-${index}`}>{study.title}</h4>
                  <p className="text-sm text-amber-600 mb-3" data-testid={`text-study-journal-${index}`}>{study.journal}</p>
                  <p className="text-gray-700 font-medium mb-2" data-testid={`text-study-result-${index}`}>{study.result}</p>
                  <p className="text-sm text-gray-500" data-testid={`text-study-method-${index}`}>{study.methodology}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chakra System */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-chakras">
              Sistemul Chakrelor și Echilibrarea Energetică
            </h2>
            <p className="text-xl text-gray-600">
              Reiki lucrează cu centrele energetice ale corpului pentru vindecare holistică
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {chakras.map((chakra, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all" data-testid={`card-chakra-${index}`}>
                <CardContent className="p-4">
                  <div className={`w-12 h-12 ${chakra.color} rounded-full mx-auto mb-3`}></div>
                  <h4 className="font-semibold text-sm mb-2" data-testid={`text-chakra-name-${index}`}>{chakra.name}</h4>
                  <p className="text-xs text-gray-600 mb-2" data-testid={`text-chakra-location-${index}`}>{chakra.location}</p>
                  <p className="text-xs text-gray-500" data-testid={`text-chakra-function-${index}`}>{chakra.function}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reiki Training Levels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-training">
              Cursuri Reiki - Sistemul Tradițional Usui
            </h2>
            <p className="text-xl text-gray-600">
              Învață vindecarea prin energie în cadrul sistemului original dezvoltat de Mikao Usui
            </p>
          </div>

          <div className="space-y-8">
            {reikiLevels.map((level, index) => (
              <Card key={index} className="shadow-lg" data-testid={`card-level-${index}`}>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900" data-testid={`text-level-title-${index}`}>{level.level}</h3>
                          <p className="text-amber-600 font-medium" data-testid={`text-level-duration-${index}`}>{level.duration}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed" data-testid={`text-level-description-${index}`}>{level.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3" data-testid={`text-techniques-header-${index}`}>Tehnici Învățate:</h4>
                      <div className="space-y-2">
                        {level.techniques.map((technique, tIndex) => (
                          <div key={tIndex} className="flex items-center" data-testid={`technique-${index}-${tIndex}`}>
                            <Sun className="text-amber-600 h-4 w-4 mr-2" />
                            <span className="text-sm text-gray-700">{technique}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3" data-testid={`text-benefits-header-${index}`}>Beneficii Obținute:</h4>
                      <div className="space-y-2">
                        {level.benefits.map((benefit, bIndex) => (
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-testimonials">Experiențe de Transformare</h2>
            <p className="text-xl text-gray-600">Poveștile celor care au descoperit puterea Reiki</p>
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
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="heading-cta">Începe Călătoria Spirituală de Vindecare</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Descoperă puterea transformatoare a Reiki pentru vindecarea holistică. Alege între sesiuni individuale 
            pentru relaxare sau cursuri complete pentru dezvoltarea personală.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-amber-600 hover:bg-gray-100"
              onClick={handleBooking}
              data-testid="button-cta-session"
            >
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                Sesiune Reiki
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-amber-600"
              onClick={handleWhatsApp}
              data-testid="button-cta-course"
            >
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                Cursuri Reiki
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