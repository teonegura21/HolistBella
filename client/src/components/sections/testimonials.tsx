import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria T.",
      location: "Iași",
      text: "Terapia Bowen mi-a schimbat viața. Durerile cronice de spate au dispărut complet după doar câteva ședințe. Recomand cu încredere!"
    },
    {
      name: "Alexandru R.",
      location: "Iași",
      text: "Biorezonanța m-a ajutat să înțeleg problemele mele de sănătate. Abordarea holistică face diferența în tratament."
    },
    {
      name: "Elena M.",
      location: "Iași",
      text: "Terapia Reiki mi-a adus echilibrul de care aveam nevoie. Mă simt mult mai energică și în pace cu mine."
    }
  ];

  const StarRating = () => (
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce Spun Pacienții Noștri</h2>
          <p className="text-xl text-gray-600">Încrederea și rezultatele vorbesc de la sine</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6">
                <StarRating />
                <p className="text-gray-600 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
