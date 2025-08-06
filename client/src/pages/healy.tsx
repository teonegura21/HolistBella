import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Smartphone, Waves, Zap, ArrowRight, Star, Wifi } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function HealyPage() {
  const benefits = [
    {
      icon: Smartphone,
      title: "Portabil și Ușor",
      description: "Dispozitiv compact care poți purta oriunde, oferindu-ți terapie personalizată în orice moment."
    },
    {
      icon: Wifi,
      title: "Tehnologie Avansată",
      description: "Folosește frecvențe micro-curent pentru echilibrarea câmpului bioenergetice al organismului."
    },
    {
      icon: Waves,
      title: "Programe Personalizate",
      description: "Peste 144 de programe de frecvențe pentru diferite nevoi: stres, somn, energie, concentrare."
    }
  ];

  const programs = [
    "Reducerea stresului", "Îmbunătățirea somnului", "Creșterea energiei",
    "Concentrare mentală", "Echilibru emotional", "Detoxifiere celulară",
    "Susținerea imunității", "Dureri musculare", "Recuperare sportivă"
  ];

  const testimonials = [
    {
      name: "Dr. Marcus Weber",
      title: "Specialist Medicină Integrativă",
      text: "Healy reprezintă viitorul medicinei personalizate. Rezultatele pe care le văd la pacienți sunt remarcabile."
    },
    {
      name: "Ana M.",
      location: "Iași",
      text: "Cu Healy am reușit să îmi controlez stresul și să dorm mult mai bine. Este ca și cum aș avea un terapeut personal în buzunar!"
    },
    {
      name: "Radu P.",
      location: "Iași",
      text: "Folosesc Healy de 6 luni pentru recuperare după antrenamente. Energia mea s-a îmbunătățit fantastic și recuperez mult mai rapid."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-600 via-emerald-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Healy
                <span className="block text-green-200">Biorezonanță în Buzunar</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Primul dispozitiv portabil de biorezonanță care îți oferă terapie personalizată oriunde. 
                Echilibrează-ți energia și optimizează-ți sănătatea cu tehnologia secolului 21.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                    Testează Healy
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Întreabă pe WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Healy Device" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-green-600 font-bold text-2xl">144+</div>
                <div className="text-gray-600 text-sm">Programe</div>
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
              Avantajele Tehnologiei Healy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Inovația germană în serviciul sănătății tale personalizate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-green-600 text-2xl" />
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
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Healy în acțiune" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Cum Funcționează Healy?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Analiza Bioenergetică</h4>
                    <p className="text-gray-600">Healy scanează câmpul bioenergetice al organismului pentru a identifica dezechilibrele.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Selectarea Programului</h4>
                    <p className="text-gray-600">Aplicația recomandă programele optime bazate pe nevoile tale specifice.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Terapia cu Frecvențe</h4>
                    <p className="text-gray-600">Dispozitivul transmite frecvențe personalizate pentru echilibrarea energetică.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Programe Disponibile</h2>
            <p className="text-xl text-gray-600">Healy oferă soluții pentru fiecare aspect al bunăstării</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {programs.map((program, index) => (
              <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg shadow">
                <Zap className="text-green-600 mr-3 flex-shrink-0" />
                <span className="font-medium">{program}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experiențe cu Healy</h2>
            <p className="text-xl text-gray-600">Cum a schimbat Healy viața utilizatorilor</p>
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Începe Călătoria Spre Wellness</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Testează Healy și descoperă cum tehnologia biorezonanței poate îmbunătăți calitatea vieții tale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                Testează Healy
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                Întreabă pe WhatsApp
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