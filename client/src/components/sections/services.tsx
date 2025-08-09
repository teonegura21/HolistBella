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
  ChevronRight,
  Shield,
  Star,
  Clock,
  Users
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
      id: "apa-kangen",
      icon: Droplets,
      title: "Apă Kangen",
      subtitle: "Hidratare Alcalină",
      description: "Apa cu structură moleculară modificată care ajută la echilibrul pH-ului corpului și detoxifierea naturală.",
      benefits: ["Detoxifiere profundă", "Echilibru pH", "Hidratare optimă"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "from-blue-400 to-cyan-500",
      price: "Consultație gratuită",
      duration: "Program personalizat"
    },
    {
      id: "biorezonanta",
      icon: Activity,
      title: "Biorezonanță Magnetică",
      subtitle: "Terapie cu Frecvențe",
      description: "Tehnologie avansată care detectează și corectează dezechilibrele energetice ale organismului.",
      benefits: ["Diagnostic energetic", "Echilibrare chakre", "Reducere stres"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "from-purple-400 to-violet-500",
      price: "200 RON",
      duration: "60 min"
    },
    {
      id: "andullation",
      icon: Activity,
      title: "Andullation",
      subtitle: "Vibrații Terapeutice",
      description: "Terapie prin vibrații mecanice și infraroșu care stimulează circulația și regenerarea celulară.",
      benefits: ["Îmbunătățire circulație", "Reducere durere", "Relaxare profundă"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "from-green-400 to-emerald-500",
      price: "150 RON",
      duration: "45 min"
    },
    {
      id: "healy",
      icon: Zap,
      title: "Healy",
      subtitle: "Frecvențe Cuantice",
      description: "Dispozitiv medical certificat CE care utilizează frecvențe pentru echilibrarea bioenergetică.",
      benefits: ["Echilibrare energetică", "Optimizare vitalitate", "Suport emoțional"],
      image: "https://images.unsplash.com/photo-1559757195-3d4a6b2c6c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "from-yellow-400 to-orange-500",
      price: "250 RON",
      duration: "90 min"
    },
    {
      id: "alte-servicii",
      icon: Heart,
      title: "Alte Servicii",
      subtitle: "Terapii Complementare",
      description: "Nutriție celulară, terapie Bowen, Reiki și alte abordări holiste pentru sănătatea integrală.",
      benefits: ["Terapie Bowen", "Reiki healing", "Nutriție celulară"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      color: "from-pink-400 to-rose-500",
      price: "100-300 RON",
      duration: "30-90 min"
    }
  ];

  const testimonials = [
    {
      name: "Maria Popescu",
      service: "Biorezonanță",
      text: "După 3 ședințe am simțit o îmbunătățire semnificativă a energiei și a stării generale.",
      rating: 5
    },
    {
      name: "Ion Georgescu",
      service: "Healy",
      text: "Tehnologia Healy m-a ajutat să îmi regăsesc echilibrul emoțional și fizic.",
      rating: 5
    },
    {
      name: "Ana Mihai",
      service: "Andullation",
      text: "Durerile cronice de spate au dispărut complet după tratamentele Andullation.",
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} id="servicii" className="py-24 bg-gradient-to-br from-white via-soft-cream to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-48 h-48 bg-healing-green rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-wellness-blue rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-warm-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-healing-green/10 text-healing-green mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-semibold">Serviciile Noastre</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Terapii 
            <span className="wellness-gradient-text"> Holiste</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descoperă o gamă completă de terapii moderne și tradiționale, 
            adaptate pentru a-ți restaura echilibrul natural și vitalitatea.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className={`service-card group cursor-pointer relative overflow-hidden ${
                isVisible ? 'fade-in-up' : 'opacity-0'
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

              <CardContent className="relative z-10 p-8 h-full flex flex-col text-white">
                {/* Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-3xl text-white" />
                  </div>
                  <div className="text-right opacity-90">
                    <div className="text-sm font-medium">{service.duration}</div>
                    <div className="text-lg font-bold">{service.price}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 font-medium mb-4">{service.subtitle}</p>
                  <p className="text-white/80 leading-relaxed mb-6">{service.description}</p>
                  
                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-white rounded-full mr-3 opacity-80" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link href={`/${service.id}`}>
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

        {/* Testimonials Section */}
        <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-20 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Mărturii ale <span className="text-healing-green">Pacienților</span>
            </h3>
            <p className="text-lg text-gray-600">
              Experiențele reale ale celor care și-au transformat viața cu noi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card group"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-warm-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-healing-green">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Features */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-healing-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-healing-green text-xl" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">100% Sigur</h4>
            <p className="text-gray-600 text-sm">Terapii non-invazive, fără efecte secundare</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-wellness-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-wellness-blue text-xl" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Personalizat</h4>
            <p className="text-gray-600 text-sm">Fiecare tratament adaptat individual</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-warm-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-warm-gold text-xl" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Rezultate Rapide</h4>
            <p className="text-gray-600 text-sm">Îmbunătățiri vizibile din primele ședințe</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-serenity-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-serenity-purple text-xl" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Holist</h4>
            <p className="text-gray-600 text-sm">Tratăm cauza, nu doar simptomele</p>
          </div>
        </div>
      </div>
    </section>
  );
}