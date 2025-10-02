import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SERVICE_COLORS } from "@/lib/service-constants";

interface ServiceCTAProps {
  heading: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  trustSignals: string[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryColor?: string;
}

export function ServiceCTA({
  heading,
  description,
  gradientFrom,
  gradientTo,
  ctaPrimary,
  ctaSecondary,
  trustSignals,
  onPrimaryClick,
  onSecondaryClick,
  primaryColor = "blue",
}: ServiceCTAProps) {
  const buttonColor = SERVICE_COLORS[primaryColor as keyof typeof SERVICE_COLORS]?.primary || "blue-600";

  return (
    <section className={`py-20 bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {heading}
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={onPrimaryClick}
            className={`bg-white text-${buttonColor} hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl`}
          >
            {ctaPrimary}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {ctaSecondary && (
            <Button
              size="lg"
              variant="outline"
              onClick={onSecondaryClick}
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              {ctaSecondary}
            </Button>
          )}
        </div>

        <div className="mt-8 text-sm text-white/90">
          {trustSignals.map((signal, index) => (
            <div key={index} className="inline-block bg-white/10 backdrop-blur-sm rounded px-3 py-1 mr-2 mb-2">
              {signal}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}