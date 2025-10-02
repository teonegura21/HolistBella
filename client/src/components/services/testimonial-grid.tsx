import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export interface Testimonial {
  text: string;
  name: string;
  title?: string;
  age?: string;
  condition?: string;
  rating: number;
  image?: string;
}

export interface TestimonialGridProps {
  heading: string;
  description?: string;
  testimonials: Testimonial[];
  layout?: "grid" | "carousel";
  columns?: 2 | 3;
}

export function TestimonialGrid({
  heading,
  description,
  testimonials,
  layout = "grid",
  columns = 3,
}: TestimonialGridProps) {
  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  {testimonial.title && (
                    <div className="text-sm text-gray-500">
                      {testimonial.title}
                    </div>
                  )}
                  {(testimonial.age || testimonial.condition) && (
                    <div className="text-sm text-gray-500">
                      {testimonial.age && <span>{testimonial.age}</span>}
                      {testimonial.age && testimonial.condition && (
                        <span> - </span>
                      )}
                      {testimonial.condition && (
                        <span>{testimonial.condition}</span>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}