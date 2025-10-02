import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceFAQProps {
  heading: string;
  description?: string;
  faqs: FAQ[];
  layout?: "accordion" | "cards";
}

export function ServiceFAQ({
  heading,
  description,
  faqs,
  layout = "cards",
}: ServiceFAQProps) {
  if (layout === "accordion") {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {heading}
            </h2>
            {description && (
              <p className="text-xl text-gray-600">{description}</p>
            )}
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  }

  // Cards layout
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          {description && (
            <p className="text-xl text-gray-600">{description}</p>
          )}
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}