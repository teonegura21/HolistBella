import { SEO } from "@/components/ui/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Testimoniale() {
  const testimonials = [
    {
      service: "Terapie Bowen",
      text: "Terapia Bowen m-a ajutat să scap de durerile de spate cronice după doar 3 ședințe. Recomand cu încredere!",
      name: "Maria I.",
      rating: 5
    },
    {
      service: "Biorezonanță",
      text: "Biorezonanța mi-a oferit indicii valoroase despre sursele de stres din organismul meu.",
      name: "Ana M.",
      rating: 5
    },
    {
      service: "Terapie Healy",
      text: "Healy m-a ajutat să gestionez durerea de migrene mai bine decât orice altceva.",
      name: "Elena S.",
      rating: 5
    },
    {
      service: "Apă Kangen",
      text: "Apa Kangen a schimbat modul în care familia mea se hidratează zilnic.",
      name: "Ioana F.",
      rating: 5
    },
    {
      service: "Terapie Andullation",
      text: "Andullation m-a ajutat să recuperez după o accidentare sportivă. Durerile au dispărut rapid.",
      name: "Mihai S.",
      rating: 5
    },
    {
      service: "Nutriție Celulară",
      text: "Nutriția celulară mi-a adus echilibrul de care aveam nevoie. Mă simt mult mai energică.",
      name: "Cristina P.",
      rating: 5
    }
  ];

  const services = ["Toate", "Terapie Bowen", "Biorezonanță", "Terapie Healy", "Apă Kangen", "Terapie Andullation", "Nutriție Celulară"];

  return (
    <>
      <SEO 
        title="Testimoniale Holist Bella Iași – Experiențe Reale ale Clienților"
        description="Citeste experiențele reale ale clienților noștri care au beneficiat de terapiile holistice. Filtrează după serviciu pentru a vedea poveștile de succes."
      />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-4 text-sm">
            <Link href="/" className="mr-2">Acasă</Link>
            <span className="mr-2">›</span>
            <span>Testimoniale</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Experiențe Reale ale Clienților Noștri
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Poveștile de succes ale celor care au ales calea holistică pentru sănătatea lor.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Tabs defaultValue="toate" className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            {services.map((service) => (
              <TabsTrigger key={service} value={service.toLowerCase().replace(/ă/g, 'a').replace(/â/g, 'a').replace(/î/g, 'i')}>
                {service}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="toate" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.service}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          {services.slice(1).map((service) => (
            <TabsContent key={service} value={service.toLowerCase().replace(/ă/g, 'a').replace(/â/g, 'a').replace(/î/g, 'i')} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.filter(t => t.service === service).map((testimonial, index) => (
                  <Card key={index} className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 italic">
                        "{testimonial.text}"
                      </p>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.service}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/programari">
              Programează o consultație
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}