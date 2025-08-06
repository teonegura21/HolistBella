import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Scan, Shield, Zap, ArrowRight, Users, Clock, Star } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function BiorezonantaPage() {
  const benefits = [
    {
      icon: Scan,
      title: "Diagnostic Complet",
      description: "Analiză detaliată a stării de sănătate prin frecvențe electromagnetice, oferind o imagine completă a funcționării organismului."
    },
    {
      icon: Shield,
      title: "Non-invaziv",
      description: "Metodă complet sigură, fără durere sau efecte secundare, potrivită pentru toate vârstele."
    },
    {
      icon: Zap,
      title: "Tratament Personalizat",
      description: "Terapie adaptată specific nevoilor tale, bazată pe frecvențele detectate în timpul evaluării."
    }
  ];

  const conditions = [
    "Boli cardiovasculare", "Probleme digestive", "Dezechilibre hormonale",
    "Alergii și intoleranțe", "Stres și anxietate", "Probleme metabolice",
    "Afecțiuni articulare", "Tulburări de somn", "Imunitate slăbită"
  ];

  const testimonials = [
    {
      name: "Dr. Ana Popescu",
      title: "Medic Internist",
      text: "Biorezonanța oferă informații valoroase care completează diagnosticul medical tradițional."
    },
    {
      name: "Mihai R.",
      location: "Iași",
      text: "După analiza de biorezonanță am înțeles în sfârșit cauza problemelor mele digestive și am găsit soluția potrivită."
    },
    {
      name: "Carmen D.",
      location: "Iași",
      text: "Incredibil cât de precis a detectat biorezonanța dezechilibrele din organismul meu. Mă simt mult mai bine acum!"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Biorezonanță Magnetică
                <span className="block text-purple-200">Diagnostic și Tratament Avanzat</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Descoperă starea de sănătate a organismului prin tehnologia de vârf. 
                Detectează dezechilibrele energetice și găsește soluții personalizate pentru o sănătate optimă.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                    Programează Analiza
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Întreabă pe WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Biorezonanță" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-purple-600 font-bold text-2xl">100%</div>
                <div className="text-gray-600 text-sm">Non-invaziv</div>
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
              Avantajele Biorezonanței
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tehnologie avansată pentru o evaluare completă și tratament personalizat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-purple-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce Poate Detecta</h2>
            <p className="text-xl text-gray-600">Biorezonanța poate identifica și trata o gamă largă de afecțiuni</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow">
                <CheckCircle className="text-purple-600 mr-3 flex-shrink-0" />
                <span className="font-medium">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Cum Funcționează Analiza?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Evaluare Inițială</h4>
                    <p className="text-gray-600">Discutăm simptomele și istoricul medical pentru o abordare personalizată.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Scanare Biorezonanță</h4>
                    <p className="text-gray-600">Analiză completă a organismului prin frecvențe electromagnetice, durată 30-45 minute.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Interpretare și Plan</h4>
                    <p className="text-gray-600">Analizăm rezultatele și stabilim un plan personalizat de tratament și recomandări.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Proces biorezonanță" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experiențe Reale</h2>
            <p className="text-xl text-gray-600">Ce spun pacienții despre biorezonanță</p>
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Descoperă Starea Ta de Sănătate</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Programează o analiză de biorezonanță și primește un raport complet despre organismul tău.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                Programează Analiza
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
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