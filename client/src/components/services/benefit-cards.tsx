import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  metric?: string;
  evidence?: string;
}

export interface BenefitCardsProps {
  heading: string;
  description?: string;
  benefits: Benefit[];
  columns?: 2 | 3 | 4;
  colorScheme?: string;
}

export function BenefitCards({
  heading,
  description,
  benefits,
  columns = 3,
  colorScheme = "violet",
}: BenefitCardsProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-20 bg-white">
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

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 bg-${colorScheme}-100 rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <benefit.icon
                    className={`w-8 h-8 text-${colorScheme}-600`}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                {benefit.metric && (
                  <div className={`bg-${colorScheme}-50 p-3 rounded-lg mb-2`}>
                    <p
                      className={`text-sm text-${colorScheme}-700 font-medium`}
                    >
                      📊 {benefit.metric}
                    </p>
                  </div>
                )}
                {benefit.evidence && (
                  <div className={`bg-${colorScheme}-50 p-3 rounded-lg`}>
                    <p
                      className={`text-sm text-${colorScheme}-700 font-medium`}
                    >
                      🧬 {benefit.evidence}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}