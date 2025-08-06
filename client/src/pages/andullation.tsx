import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Waves, Thermometer, Heart, ArrowRight, Star } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function AndullationPage() {
  const benefits = [
    {
      icon: Waves,
      title: "Vibrații Terapeutice",
      description: "Tehnologia de vibrații mecanice stimulează circulația și accelerează procesele naturale de vindecare."
    },
    {
      icon: Thermometer,
      title: "Căldură Infraroșu",
      description: "Căldura profundă infraroșu penetrează în țesuturi, relaxează mușchii și reduce inflamația."
    },
    {
      icon: Heart,
      title: "Îmbunătățire Circulație",
      description: "Stimulează fluxul sanguin și limfatic, îmbunătățind oxigenarea și nutriția celulară."
    }
  ];

  const conditions = [
    "Dureri articulare", "Tensiuni musculare", "Probleme circulatorii",
    "Stres și oboseală", "Recuperare post-traumatică", "Artrita și artroza",
    "Dureri de spate", "Crampe musculare", "Tulburări de somn"
  ];

  const testimonials = [
    {
      name: "Prof. Dr. Ion Marin",
      title: "Specialist Recuperare Medicală",
      text: "Andullation este o tehnologie revoluționară care accelerează semnificativ procesul de recuperare."
    },
    {
      name: "Georgeta S.",
      location: "Iași",
      text: "După doar câteva ședințe de Andullation, durerile de artroză s-au redus considerabil. Îmi pot mișca din nou articulațiile fără durere!"
    },
    {
      name: "Vasile M.",
      location: "Iași",
      text: "Lucrez în construcții și aveam dureri cronice de spate. Andullation mi-a dat viața înapoi - acum pot lucra fără durere."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-600 via-red-500 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Andullation
                <span className="block text-orange-200">Vibrații + Căldură Infraroșu</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Terapia revoluționară care combină vibrațiile mecanice cu căldura infraroșu 
                pentru recuperare rapidă și reducerea durerii. Experimentează vindecarea naturală.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                    Rezervă Ședința
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Întreabă pe WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Andullation" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-orange-600 font-bold text-2xl">2în1</div>
                <div className="text-gray-600 text-sm">Vibrație + Infraroșu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dubla Putere a Andullation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combină efectele terapeutice ale vibrațiilor cu beneficiile căldurii infraroșu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-orange-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Cum Funcționează Andullation?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Vibrații Controlate</h4>
                    <p className="text-gray-600">Dispozitivul generează vibrații de frecvență specifică care stimulează circulația sanguină și limfatică.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Căldură Infraroșu</h4>
                    <p className="text-gray-600">Razele infraroșu penetrează profund în țesuturi, încălzind și relaxând mușchii.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Recuperare Accelerată</h4>
                    <p className="text-gray-600">Combinația stimulează procesele naturale de vindecare și reduce timpul de recuperare.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Tehnologie Andullation" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pentru Ce Probleme</h2>
            <p className="text-xl text-gray-600">Andullation este eficient pentru o gamă largă de afecțiuni</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-center p-4 bg-orange-50 rounded-lg shadow">
                <CheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                <span className="font-medium">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Rezultate Reale</h2>
            <p className="text-xl text-gray-600">Experiențe de succes cu terapia Andullation</p>
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
                  <div className="text-sm text-gray-500">{testimonial.title || testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experimentează Vindecarea Naturală</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Rezervă o ședință de Andullation și simte diferența din prima zi. Recuperare rapidă, fără medicamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                Rezervă Ședința
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                Mesaj WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}