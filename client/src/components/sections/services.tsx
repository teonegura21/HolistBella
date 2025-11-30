import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Droplets,
  Activity,
  Zap,
  Heart,
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: "terapie-andullation",
      link: "/andullation",
      icon: Activity,
      title: "Terapie Andullation",
      subtitle: "Recuperare și Sănătate Optimă",
      description: "Tehnologie germană care combină vibrații stocastice cu căldură infraroșie pentru a accelera recuperarea și a susține vindecarea naturală a corpului.",
      benefits: ["Reduce durerea și inflamația", "Activează drenajul limfatic", "Stimulează circulația și oxigenarea", "Relaxare musculară profundă", "Îmbunătățește somnul și energia"],
      image: "/andullation.png",
      color: "from-teal-400 to-emerald-500",
      price: "De la 120 RON",
      duration: "30-60 min"
    },
    {
      id: "biorezonanta",
      link: "/biorezonanta",
      icon: Activity,
      title: "Biorezonanță",
      subtitle: "Evaluare Energetică Funcțională",
      description: "Biorezonanța este o metodă modernă, non-invazivă, de scanare a frecvențelor organismului pentru identificarea potențialelor dezechilibre și surse de stres.",
      benefits: ["Identificare dezechilibre si surse de stres", "Plan de echilibrare", "Monitorizare progres"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "from-purple-400 to-violet-500",
      price: "De la 200 RON",
      duration: "60-90 min"
    },
    {
      id: "terapie-healy",
      link: "/healy",
      icon: Zap,
      title: "Terapie Healy",
      subtitle: "Armonizare și Vitalitate",
      description: "Dispozitiv portabil cu microcurenți și frecvențe pentru susținerea echilibrului bioenergetic și managementul durerii.",
      benefits: ["Management durere", "Susținere relaxare", "Suport somn și concentrare"],
      image: "https://images.unsplash.com/photo-1559757195-3d4a6b2c6c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "from-yellow-400 to-orange-500",
      price: "De la 180 RON",
      duration: "20-60 min"
    },
    {
      id: "apa-kangen",
      link: "/apa-kangen",
      icon: Droplets,
      title: "Apă Kangen",
      subtitle: "Optimizează-ți Hidratarea Zilnică",
      description: "Apă filtrată și ionizată pentru hidratare eficientă, suport al echilibrului pH și versatilitate în uz casnic.",
      benefits: ["Hidratare optimă", "Reducere plastic", "Versatilitate pH"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "from-blue-400 to-cyan-500",
      price: "Consultație gratuită",
      duration: "Program personalizat"
    },
    {
      id: "terapie-bowen",
      link: "/terapie-bowen",
      icon: Heart,
      title: "Terapie Bowen",
      subtitle: "Reechilibrare Neuromusculară Blândă",
      description: "Tehnică manuală subtilă care activează procesul natural de auto-vindecare prin mișcări delicate pe mușchi și tendoane.",
      benefits: ["Relaxare profundă", "Ameliorarea durerii", "Îmbunătățirea mobilității"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "from-green-400 to-emerald-500",
      price: "De la 150 RON",
      duration: "50-60 min"
    },
    {
      id: "nutritie-celulara",
      link: "/nutritie-celulara",
      icon: Sparkles,
      title: "Nutriție Celulară",
      subtitle: "Suport pentru vitalitate și stil de viață activ",
      description: "Remedii energo informaționale, suplimente alimentare cu extracte naturale concentrate, concepute să susțină nutriția la nivel celular — pentru energie, recuperare și echilibru zilnic.",
      benefits: ["Suport pentru vitalitate", "Ușor de utilizat, oriunde și oricând", "Gamă variată de formule, adaptate nevoilor tale"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "from-pink-400 to-rose-500",
      price: "De la 100 RON",
      duration: "Consultație 30 min"
    }
  ];

  return (
    <section ref={sectionRef} id="servicii" className="py-24 bg-gradient-to-br from-white via-soft-cream to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-48 h-48 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-semibold">Servicii Principale</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Portofoliul nostru de<br />
            <span className="text-primary">Terapii Holistice</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Alege terapia potrivită nevoilor tale din gama noastră diversificată de abordări non-invazive și complementare.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`service-card group cursor-pointer relative overflow-hidden ${isVisible ? 'fade-in-up' : 'opacity-0'
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`} />
              </div>

              <CardContent className="relative z-10 p-8 h-full flex flex-col text-gray-900">
                {/* Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-3xl text-gray-900" />
                  </div>
                  <div className="text-right opacity-90">
                    <div className="text-sm font-medium">{service.duration}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-800 font-medium mb-4">{service.subtitle}</p>
                  <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 opacity-80" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link href={service.link}>
                  <Button
                    className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0 group-hover:bg-white group-hover:text-gray-900 transition-all duration-300"
                  >
                    Află Mai Mult
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}