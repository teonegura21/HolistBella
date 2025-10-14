import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
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

  const problems = [
    {
      icon: Heart,
      title: "Eliberarea de durere",
      description: "Abordări blânde pentru toate tipurile de durere — acute și cronice : spate, gât, umeri, genunchi, șolduri, mușchi, dureri de cap și alte tipuri de dureri",
      linkText: "",
      linkTo: "/servicii/terapie-bowen-iasi",
      color: "bg-gradient-to-br from-red-400 to-pink-500",
      delay: "0.1s"
    },
    {
      icon: Brain,
      title: "Managementul stresului",
      description: "Soluții pentru reducerea oboselii cronice, anxietății și îmbunătățirea somnului.",
      linkText: "",
      linkTo: "/servicii/terapie-andullation-iasi",
      color: "bg-gradient-to-br from-blue-400 to-indigo-500",
      delay: "0.2s"
    },
    {
      icon: Sparkles,
      title: "Optimizarea stării de bine",
      description: "Programe de prevenție și echilibrare pentru un stil de viață energic și sănătos.",
      linkText: "",
      linkTo: "/servicii/biorezonanta-iasi",
      color: "bg-gradient-to-br from-purple-400 to-violet-500",
      delay: "0.3s"
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
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-secondary/10 text-secondary mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-semibold">Cum te putem ajuta?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluții personalizate pentru<br />
            <span className="text-primary">nevoile tale</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Identificăm sursa problemelor tale și îți oferim terapii adaptate pentru rezultate durabile.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className={`group cursor-pointer border-0 hover:shadow-lg transition-shadow ${
                isVisible ? 'fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: problem.delay }}
            >
              <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <div className={`w-16 h-16 ${problem.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <problem.icon className="text-white text-2xl" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {problem.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/80 font-medium"
                  asChild
                >
                  <Link href={problem.linkTo}>
                    {problem.linkText}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>



      </div>
    </section>
  );
}