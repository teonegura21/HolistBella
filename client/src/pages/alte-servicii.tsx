import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, Sparkles, Waves, ArrowRight, Star } from "lucide-react";
import { CONTACT_INFO, ADDITIONAL_SERVICES } from "@/lib/constants";

export default function AlteServiciiPage() {
  const reikiDetails = {
    benefits: ["Relaxare profundă", "Echilibru energetic", "Reducerea stresului", "Vindecare emoțională"],
    process: [
      "Evaluarea stării energetice generale",
      "Aplicarea tehnicilor Reiki prin atingere sau la distanță",
      "Echilibrarea centrilor energetici (chakre)",
      "Consolidarea energiei și menținerea echilibrului"
    ]
  };

  const bowenDetails = {
    benefits: ["Relaxare musculară", "Îmbunătățirea posturii", "Reducerea tensiunii", "Echilibru structural"],
    process: [
      "Evaluarea posturală și a tensiunilor musculare",
      "Aplicarea mișcărilor Bowen specifice",
      "Pauze de relaxare pentru procesarea informațiilor",
      "Consolidarea rezultatelor și recomandări"
    ]
  };

  const rejuvanceDetails = {
    benefits: ["Rejuvenarea pielii", "Stimularea colagenului", "Reducerea ridurilor", "Îmbunătățirea texturii"],
    process: [
      "Analiza stării pielii și nevoilor specifice",
      "Aplicarea tehnologiilor avansate de rejuvenare",
      "Tratamente personalizate pentru fiecare zonă",
      "Plan de întreținere și îngrijire acasă"
    ]
  };

  const testimonials = [
    {
      service: "Reiki",
      name: "Maria V.",
      location: "Iași",
      text: "Reiki mi-a adus pacea interioară de care aveam atâta nevoie. Mă simt echilibrată și energizată."
    },
    {
      service: "Bowen",
      name: "Ion D.",
      location: "Iași",
      text: "Terapia Bowen mi-a rezolvat problemele de spate pe care le aveam de ani de zile. Incredibil de eficient!"
    },
    {
      service: "Rejuvance",
      name: "Carmen L.",
      location: "Iași",
      text: "Pielea mea arată cu 10 ani mai tânără după tratamentele Rejuvance. Rezultate spectaculoase!"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Alte Servicii Holistische
            <span className="block text-purple-200">Reiki • Bowen • Rejuvance</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Completează-ți experiența wellness cu servicii complementare care adresează 
            aspecte specifice ale sănătății și frumuseții naturale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                Programează Consultația
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center">
                Întreabă pe WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Reiki Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Heart className="text-purple-600 text-3xl mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Terapie Reiki</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Reiki este o tehnică japoneză de vindecare prin energie care utilizează puterea vindecătoare 
                universală pentru echilibrarea și armonizarea tuturor dimensiunilor ființei umane.
              </p>
              
              <h4 className="font-semibold text-lg mb-4">Beneficii:</h4>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {reikiDetails.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-purple-600 mr-2 flex-shrink-0 h-4 w-4" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-purple-600 hover:bg-purple-700">
                <a href={`tel:${CONTACT_INFO.phone}`}>
                  Rezervă Ședința Reiki
                </a>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Reiki Therapy" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bowen Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Bowen Therapy" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Waves className="text-green-600 text-3xl mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Terapie Bowen</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Terapia Bowen este una dintre cele mai profunde și eficiente tehnici terapeutice, 
                bazată pe activarea capacității naturale a organismului de auto-vindecare prin relaxare completă.
              </p>
              
              <h4 className="font-semibold text-lg mb-4">Beneficii:</h4>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {bowenDetails.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 h-4 w-4" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-green-600 hover:bg-green-700">
                <a href={`tel:${CONTACT_INFO.phone}`}>
                  Rezervă Ședința Bowen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rejuvance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Sparkles className="text-pink-600 text-3xl mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Rejuvance</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Rejuvance combină tehnologiile moderne de rejuvenare pentru a stimula procesele naturale 
                de regenerare celulară și pentru a îmbunătăți aspectul și sănătatea pielii.
              </p>
              
              <h4 className="font-semibold text-lg mb-4">Beneficii:</h4>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {rejuvanceDetails.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-pink-600 mr-2 flex-shrink-0 h-4 w-4" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-pink-600 hover:bg-pink-700">
                <a href={`tel:${CONTACT_INFO.phone}`}>
                  Rezervă Tratamentul Rejuvance
                </a>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Rejuvance Treatment" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cum Decurge o Ședință</h2>
            <p className="text-xl text-gray-600">Fiecare terapie urmează un protocol specific adaptat nevoilor tale</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Reiki</h3>
                <ol className="space-y-3">
                  {reikiDetails.process.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">{index + 1}</span>
                      <span className="text-sm text-gray-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Bowen</h3>
                <ol className="space-y-3">
                  {bowenDetails.process.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">{index + 1}</span>
                      <span className="text-sm text-gray-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-pink-600">Rejuvance</h3>
                <ol className="space-y-3">
                  {rejuvanceDetails.process.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 bg-pink-600 text-white rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">{index + 1}</span>
                      <span className="text-sm text-gray-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experiențe de Succes</h2>
            <p className="text-xl text-gray-600">Ce spun pacienții despre aceste terapii</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  <div className="text-xs text-purple-600 font-medium mt-1">{testimonial.service}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Alege Terapia Potrivită Pentru Tine</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Fiecare terapie are beneficii unice. Consultă-te cu specialistul nostru pentru a găsi soluția ideală.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                Programează Consultația
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                Mesaj WhatsApp
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