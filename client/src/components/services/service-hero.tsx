import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CONTACT_INFO } from "@/lib/constants";
import { LucideIcon } from "lucide-react";

export interface ServiceHeroProps {
  badge: string;
  badgeIcon?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  stats: {
    number: string;
    label: string;
  }[];
  gradientFrom: string;
  gradientVia?: string;
  gradientTo: string;
  heroIcon?: LucideIcon;
  heroImage?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryColor?: string;
}

export function ServiceHero({
  badge,
  badgeIcon,
  title,
  titleHighlight,
  description,
  stats,
  gradientFrom,
  gradientVia,
  gradientTo,
  heroIcon: HeroIcon,
  heroImage,
  ctaPrimary = "Programează Consultație",
  ctaSecondary,
  onPrimaryClick,
  onSecondaryClick,
  primaryColor = "green",
}: ServiceHeroProps) {
  const gradientClass = gradientVia
    ? `bg-gradient-to-r from-${gradientFrom} via-${gradientVia} to-${gradientTo}`
    : `bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`;

  const buttonTextColor = `text-${primaryColor}-600`;

  return (
    <section className={`${gradientClass} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <Badge
              variant="outline"
              className="bg-white/20 text-white border-white/30 mb-4"
            >
              {badgeIcon && <span className="mr-1">{badgeIcon}</span>}
              {badge}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {title}
              {titleHighlight && (
                <>
                  {" "}
                  <span className="block mt-2 text-white/90">
                    {titleHighlight}
                  </span>
                </>
              )}
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/30 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={onPrimaryClick}
                className={`bg-white ${buttonTextColor} hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl`}
              >
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  {ctaPrimary}
                </a>
              </Button>

              {ctaSecondary && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={onSecondaryClick}
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  <a href={`tel:${CONTACT_INFO.phone}`}>{ctaSecondary}</a>
                </Button>
              )}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="lg:text-right">
            <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
              {HeroIcon && (
                <HeroIcon className="w-32 h-32 text-white/90 mx-auto lg:ml-auto" />
              )}
              {heroImage && (
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}