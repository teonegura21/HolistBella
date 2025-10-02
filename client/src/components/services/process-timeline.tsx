import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration?: string;
  elements?: string[];
  benefits?: string[];
}

export interface ProcessTimelineProps {
  heading: string;
  description?: string;
  steps: ProcessStep[];
  orientation?: "horizontal" | "vertical";
  colorScheme?: string;
}

export function ProcessTimeline({
  heading,
  description,
  steps,
  orientation = "vertical",
  colorScheme = "violet",
}: ProcessTimelineProps) {
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

        <div className="space-y-8">
          {steps.map((step, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Step Number & Title */}
                  <div>
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 bg-${colorScheme}-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold`}
                      >
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        {step.duration && (
                          <p className={`text-${colorScheme}-600 font-medium`}>
                            {step.duration}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Elements (if provided) */}
                  {step.elements && step.elements.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Elemente Cheie:
                      </h4>
                      <div className="space-y-2">
                        {step.elements.map((element, eIndex) => (
                          <div key={eIndex} className="flex items-start">
                            <CheckCircle
                              className={`text-${colorScheme}-600 h-4 w-4 mr-2 mt-1 flex-shrink-0`}
                            />
                            <span className="text-sm text-gray-700">
                              {element}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Benefits (if provided) */}
                  {step.benefits && step.benefits.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Beneficii Observate:
                      </h4>
                      <div className="space-y-2">
                        {step.benefits.map((benefit, bIndex) => (
                          <div key={bIndex} className="flex items-start">
                            <CheckCircle className="text-green-600 h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
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