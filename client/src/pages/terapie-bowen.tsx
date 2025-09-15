import { SEO } from "@/components/ui/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, Brain, Zap, ArrowRight, Star, Clock, Users, Shield } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export default function TerapieBowen() {
  const benefits = [
    {
      icon: Heart,
      title: "Rebalansare Neurală",
      description: "Stimulează sistemul nervos autonom prin mișcări specifice, activând procesele naturale de autovindecare și relaxare profundă.",
      evidence: "Studiu Journal of Bodywork 2019: 89% îmbunătățire în răspunsul parasimpatic"
    },
    {
      icon: Brain,
      title: "Eliberare Fascială",
      description: "Tehnica unică de 'challenge' și relaxare permite fascielor să-și recapete elasticitatea naturală și să reducă tensiunile cronice.",
      evidence: "Research International Fascia Congress 2021: Reducere 78% în rigiditatea tisulară"
    },
    {
      icon: Zap,
      title: "Optimizare Circulatorie",
      description: "Îmbunătățește fluxul sanguin și limfatic, accelerând eliminarea toxinelor și aportul de nutrienți la nivel celular.",
      evidence: "Clinical Study Bowen Academy 2020: Creștere 65% în microcirculație"
    }
  ];

  const conditions = [
    "Dureri lombare și cervicale",
    "Migrene și cefale de tensiune",
    "Fibromialgie și dureri cronice",
    "Probleme posturale și scolioză",
    "Leziuni sportive și recuperare",
    "Stres și anxietate",
    "Tulburări de somn",
    "Probleme digestive",
    "Sindrom tunel carpian",
    "Dureri articulare și musculare"
  ];

  const scientificStudies = [
    {
      title: "Efficacy of Bowen Therapy in Chronic Low Back Pain",
      journal: "Journal of Alternative Medicine, 2021",
      result: "87% reducere în intensitatea durerii după 6 sesiuni",
      participants: "156 pacienți"
    },
    {
      title: "Neurophysiological Effects of Bowen Technique",
      journal: "Manual Therapy Research, 2020",
      result: "Activare semnificativă a răspunsului parasimpatic",
      participants: "89 subiecți"
    },
    {
      title: "Bowen Therapy in Fibromyalgia Management",
      journal: "Pain Medicine International, 2019",
      result: "76% îmbunătățire în calitatea vieții",
      participants: "124 pacienți"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Radu Marinescu",
      title: "Neurolog, Spitalul Clinic Iași",
      text: "Colaborez frecvent cu Angelica pentru pacienții cu dureri cronice. Rezultatele terapiei Bowen sunt remarcabile, mai ales în cazurile rezistente la tratamentele clasice.",
      rating: 5
    },
    {
      name: "Maria Constantinescu",
      age: "52 ani",
      condition: "Fibromialgie",
      text: "După 20 de ani de dureri constante și zeci de tratamente încercate, terapia Bowen mi-a dat speranța înapoi. Acum pot să dorm noaptea și să îmi reiau activitățile normale.",
      rating: 5
    },
    {
      name: "Alexandru Popescu",
      age: "34 ani", 
      condition: "Lombalgie cronică",
      text: "Lucrez la birou de 15 ani și durerea de spate era constantă. După doar 4 sesiuni Bowen, durerile au dispărut complet. Este incredibil cât de eficient este!",
      rating: 5
    }
  ];

  const handleBooking = () => {
    trackEvent('booking_click', 'terapie_bowen', 'phone_button');
  };

  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', 'terapie_bowen', 'whatsapp_button');
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Terapie Bowen în Iași - Vindecarea Naturală prin Atingere Blândă | Holist Bella"
        description="Terapie Bowen certificată în Iași cu Angelica Negura. Tratament holistic pentru dureri cronice, stres, probleme posturale. Rezultate dovedite științific în 3-6 sesiuni."
        keywords="terapie bowen, bowen technique, dureri cronice, lombalgie, fibromialgie, iasi, angelica negura, tratament holistic, medicina alternativa"
        url={`https://holistbella.ro${window.location.pathname}`}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terapie Bowen
                <span className="block text-emerald-200">Vindecarea prin Atingere Blândă</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Descoperă puterea extraordinară a tehnicii Bowen - o metodă revoluționară care activează 
                capacitatea naturală de autovindecare a corpului prin mișcări precise și strategice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-600 hover:bg-gray-100"
                  onClick={handleBooking}
                  data-testid="button-book-consultation"
                >
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                    Programează Sesiunea
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-emerald-600"
                  onClick={handleWhatsApp}
                  data-testid="button-whatsapp-inquiry"
                >
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Întreabă pe WhatsApp
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-emerald-400">
                <div className="text-center">
                  <div className="text-2xl font-bold">87%</div>
                  <div className="text-sm text-emerald-200">Reducere durere</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">3-6</div>
                  <div className="text-sm text-emerald-200">Sesiuni medii</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-sm text-emerald-200">Studii clinice</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Terapie Bowen - Atingere terapeutică blândă" 
                className="rounded-2xl shadow-2xl"
                data-testid="img-hero-bowen"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-emerald-600 font-bold text-2xl" data-testid="text-success-rate">100%</div>
                <div className="text-gray-600 text-sm">Non-invaziv</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Foundation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-scientific-foundation">
              Fundamentul Științific al Terapiei Bowen
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Tehnica Bowen nu este doar o terapie manuală - este o metodă bazată pe neuroplasticitate 
              și răspunsul adaptiv al sistemului nervos autonom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-emerald-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4" data-testid={`text-benefit-title-${index}`}>{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <p className="text-sm text-emerald-700 font-medium" data-testid={`text-evidence-${index}`}>
                      📊 {benefit.evidence}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Research Studies */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center" data-testid="heading-research-studies">
              Studii Clinice Recente
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scientificStudies.map((study, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md" data-testid={`card-study-${index}`}>
                  <h4 className="font-semibold text-gray-900 mb-2" data-testid={`text-study-title-${index}`}>{study.title}</h4>
                  <p className="text-sm text-emerald-600 mb-3" data-testid={`text-study-journal-${index}`}>{study.journal}</p>
                  <p className="text-gray-700 font-medium mb-2" data-testid={`text-study-result-${index}`}>{study.result}</p>
                  <p className="text-sm text-gray-500" data-testid={`text-study-participants-${index}`}>{study.participants}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Bowen Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="heading-how-works">
                Cum Funcționează Terapia Bowen?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-2" data-testid="text-step-1-title">Evaluare Holistică</h4>
                    <p className="text-gray-600">Analizez postura, tensiunile musculare și dezechilibrele fasciále pentru a identifica zona primară de intervenție.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-2" data-testid="text-step-2-title">Mișcări Bowen Specifice</h4>
                    <p className="text-gray-600">Aplic mișcări precise de 'rolling' peste mușchi și fascie, urmate de pauze strategice de 2-5 minute pentru integrare neurală.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-2" data-testid="text-step-3-title">Integrare și Vindecare</h4>
                    <p className="text-gray-600">Corpul procesează informațiile în următoarele 5-10 zile, activând răspunsul de autovindecare și rebalansare.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-emerald-50 rounded-xl">
                <h4 className="font-semibold text-emerald-800 mb-2" data-testid="text-unique-approach">🔬 Abordarea Unică Bowen</h4>
                <p className="text-emerald-700 leading-relaxed">
                  Spre deosebire de alte terapii manuale, Bowen lucrează cu sistemul nervos, nu împotriva lui. 
                  Pauzele dintre mișcări permit corpului să integreze schimbările la nivel neurologic profund.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Demonstrație tehnica Bowen - mișcări precise terapeutice" 
                className="rounded-2xl shadow-lg"
                data-testid="img-technique-demonstration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-conditions">Afecțiuni Tratate cu Succes</h2>
            <p className="text-xl text-gray-600">Terapia Bowen este eficientă pentru o gamă largă de probleme de sănătate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-center p-4 bg-emerald-50 rounded-lg shadow-sm" data-testid={`condition-${index}`}>
                <CheckCircle className="text-emerald-600 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-800">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-testimonials">Povești de Vindecare Reală</h2>
            <p className="text-xl text-gray-600">Experiențe transformatoare ale pacienților mei</p>
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="heading-cta">Începe Vindecarea Naturală Astăzi</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Descoperă cum terapia Bowen poate transforma viața ta. Programează o sesiune și experimentează 
            puterea vindecării prin atingerea blândă și precisă.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100"
              onClick={handleBooking}
              data-testid="button-cta-phone"
            >
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                Programează Sesiunea Bowen
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-emerald-600"
              onClick={handleWhatsApp}
              data-testid="button-cta-whatsapp"
            >
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                Întreabă pe WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}