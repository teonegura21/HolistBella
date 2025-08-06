import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Droplets, Shield, Zap, ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function ApaKangenPage() {
  const benefits = [
    {
      icon: Droplets,
      title: "pH Alcalin Optim",
      description: "Apa Kangen are un pH între 8,5-9,5, ajutând la neutralizarea acidității din organism și menținerea echilibrului natural."
    },
    {
      icon: Shield,
      title: "Proprietăți Antioxidante",
      description: "Reduce radicalii liberi din corp, protejând celulele de stresul oxidativ și îmbunătățind procesele naturale de vindecare."
    },
    {
      icon: Zap,
      title: "Microstructurată",
      description: "Moleculele sunt grupate în clusteri de 5-6 molecule (față de 15-20 în apa obișnuită), asigurând hidratare superioară."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Maria Ionescu",
      title: "Medic Specialist",
      text: "Recomand apa Kangen pacienților mei pentru proprietățile sale excepționale de hidratare și echilibrare pH."
    },
    {
      name: "Alexandru M.",
      location: "Iași",
      text: "După 3 luni de consum regulat de apă Kangen, nivelul meu de energie s-a îmbunătățit considerabil, iar digestia este mult mai bună."
    },
    {
      name: "Elena P.",
      location: "Iași", 
      text: "Apa Kangen mi-a schimbat viața! Pielea mea arată mai bine, mă simt mai energică și am observat o îmbunătățire generală a stării de sănătate."
    }
  ];

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Apa Kangen
                <span className="block text-cyan-200">Hidratare Superioară</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Descoperă puterea apei alcaline ionizate care transformă hidratarea în terapie. 
                Apa Kangen nu este doar apă - este o investiție în sănătatea ta pe termen lung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                    Programează Demonstrația
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Întreabă pe WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Apa Kangen" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-blue-600 font-bold text-2xl">pH 8.5-9.5</div>
                <div className="text-gray-600 text-sm">Alcalin Optim</div>
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
              3 Proprietăți Unice ale Apei Kangen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fiecare proprietate contribuie la transformarea apei obișnuite într-o experiență terapeutică completă
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-blue-600 text-2xl" />
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
                Cum Funcționează Electroliza Kangen?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Purificare Avansată</h4>
                    <p className="text-gray-600">Apa trece prin filtre multiple pentru eliminarea impurităților și contaminanților.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Electroliză Controlată</h4>
                    <p className="text-gray-600">Procesul de electroliză separă apa în componente alcaline și acide, creând apa Kangen.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Restructurare Moleculară</h4>
                    <p className="text-gray-600">Moleculele de apă se reorganizează în clusteri mai mici pentru absorbție optimă.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Tehnologia Kangen" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce Spun Utilizatorii</h2>
            <p className="text-xl text-gray-600">Experiențe reale cu apa Kangen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-4 w-4 fill-current" />
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Începe Transformarea Astăzi</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Programează o demonstrație gratuită și descoperă diferența pe care o poate face apa Kangen în viața ta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                Sună Pentru Demonstrație
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
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