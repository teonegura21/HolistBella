import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Shield, 
  Users, 
  Award, 
  Sparkles, 
  Leaf, 
  Brain,
  Zap,
  Star,
  Clock,
  Calendar,
  Phone
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: Heart,
      title: "Abordare Holistică",
      description: "Tratăm persoana în întregime - trup, minte și suflet - pentru vindecarea completă și echilibrul perfect.",
      color: "bg-gradient-to-br from-red-400 to-pink-500",
      delay: "0.1s"
    },
    {
      icon: Shield,
      title: "Siguranță și Încredere",
      description: "Toate terapiile sunt non-invazive, sigure și dovedite științific, fără efecte secundare negative.",
      color: "bg-gradient-to-br from-blue-400 to-indigo-500",
      delay: "0.2s"
    },
    {
      icon: Brain,
      title: "Expertiză Avansată",
      description: "Peste 15 ani de experiență în medicina alternativă cu certificări internaționale recunoscute.",
      color: "bg-gradient-to-br from-purple-400 to-violet-500",
      delay: "0.3s"
    },
    {
      icon: Users,
      title: "Personalizare Completă",
      description: "Fiecare tratament este adaptat individual nevoilor, istoricului și obiectivelor specifice ale pacientului.",
      color: "bg-gradient-to-br from-green-400 to-emerald-500",
      delay: "0.4s"
    },
    {
      icon: Award,
      title: "Rezultate Dovedite",
      description: "98% din pacienți raportează îmbunătățiri semnificative în primele 3 ședințe de tratament.",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
      delay: "0.5s"
    },
    {
      icon: Zap,
      title: "Tehnologii Moderne",
      description: "Echipamente de ultimă generație: Healy, Andullation, Biorezonanță Magnetică pentru rezultate optimale.",
      color: "bg-gradient-to-br from-teal-400 to-cyan-500",
      delay: "0.6s"
    }
  ];

  const stats = [
    { icon: Users, number: "1000+", label: "Pacienți Tratați", color: "text-healing-green" },
    { icon: Clock, number: "15+", label: "Ani Experiență", color: "text-wellness-blue" },
    { icon: Award, number: "7", label: "Certificări", color: "text-warm-gold" },
    { icon: Star, number: "98%", label: "Satisfacție", color: "text-serenity-purple" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-soft-cream to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-healing-green rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-wellness-blue rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-warm-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-healing-green/10 text-healing-green mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-semibold">De Ce Să Alegi Holist Bella</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Excelența în 
            <span className="wellness-gradient-text"> Medicina Holistică</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Îmbinăm tradiția medicinei holiste cu tehnologia modernă pentru a-ți oferi 
            cea mai eficientă și sigură cale către sănătatea optimă.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`holistic-card group cursor-pointer border-0 ${
                isVisible ? 'fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: feature.delay }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="text-white text-2xl" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-healing-green transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Rezultate în <span className="text-healing-green">Cifre</span>
            </h3>
            <p className="text-lg text-gray-600">
              Performanța noastră vorbește despre dedicarea față de sănătatea ta
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className={`${stat.color} text-xl`} />
                  </div>
                </div>
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}