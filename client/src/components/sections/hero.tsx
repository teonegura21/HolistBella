import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Leaf, Calendar, Heart, Sparkles, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroSlides = [
    {
      title: "Centrul de Sănătate",
      subtitle: "Holist Bella",
      description: "Cea mai mare bogăție este sănătatea. Descoperă puterea medicinii holistische pentru echilibrul trup, minte și suflet.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      accent: "healing-green"
    },
    {
      title: "Vindecarea Naturală",
      subtitle: "Prin Echilibru",
      description: "Experimentează terapii holiste dovedite științific care activează capacitatea naturală de autovindecare a organismului.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      accent: "tranquil-teal"
    },
    {
      title: "Wellness Integral",
      subtitle: "Pentru Toată Familia",
      description: "Servicii personalizate pentru fiecare membru al familiei - de la copii la seniori, fiecare merită sănătate optimă.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      accent: "wellness-blue"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${currentHero.image}')`,
            filter: "brightness(0.4)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-healing-green rounded-full opacity-60" />
        <div className="floating-element absolute top-32 right-20 w-6 h-6 bg-wellness-blue rounded-full opacity-40" style={{animationDelay: '2s'}} />
        <div className="floating-element absolute bottom-40 left-20 w-3 h-3 bg-warm-gold rounded-full opacity-70" style={{animationDelay: '4s'}} />
        <div className="floating-element absolute top-1/2 right-10 w-5 h-5 bg-tranquil-teal rounded-full opacity-50" style={{animationDelay: '1s'}} />
        
        {/* Nature Elements */}
        <Leaf className="floating-element absolute top-24 right-1/3 text-healing-green opacity-30 w-8 h-8" style={{animationDelay: '3s'}} />
        <Sparkles className="floating-element absolute bottom-32 right-1/4 text-warm-gold opacity-40 w-6 h-6" style={{animationDelay: '5s'}} />
        <Heart className="floating-element absolute top-1/3 left-1/4 text-serenity-purple opacity-35 w-7 h-7" style={{animationDelay: '1.5s'}} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : ''}`}>
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 stagger-1">
            <Sparkles className="w-5 h-5 mr-2 text-warm-gold" />
            <span className="text-sm font-medium">Bine ai venit la Holist Bella</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight stagger-2">
            {currentHero.title}
            <span className="block wellness-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-healing-green-light to-tranquil-teal">
              {currentHero.subtitle}
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-100 stagger-3">
            {currentHero.description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 stagger-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("servicii")}
              className="btn-holistic group px-10 py-5 text-lg"
            >
              <Leaf className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Descoperă Serviciile
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-healing-green backdrop-blur-sm px-10 py-5 text-lg transition-all duration-300"
              asChild
            >
              <a href={`tel:${CONTACT_INFO.phone}`}>
                <Phone className="mr-3 h-6 w-6" />
                Sună Acum
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-warm-gold/50 text-warm-gold hover:bg-warm-gold hover:text-white backdrop-blur-sm px-10 py-5 text-lg transition-all duration-300"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Programează Consultația
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300 stagger-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-healing-green rounded-full mr-2 pulse-glow" />
              15+ Ani Experiență
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-warm-gold rounded-full mr-2 pulse-glow" />
              1000+ Pacienți Mulțumiți
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-tranquil-teal rounded-full mr-2 pulse-glow" />
              Terapii Dovedite Științific
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("servicii")}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
        >
          <span className="text-sm mb-2 group-hover:text-healing-green transition-colors">Descoperă Mai Mult</span>
          <ChevronDown className="text-2xl group-hover:text-healing-green group-hover:scale-110 transition-all" />
        </button>
      </div>

      {/* WhatsApp Quick Action */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href={CONTACT_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl whatsapp-pulse transition-all duration-300 group"
        >
          <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.448"/>
          </svg>
        </a>
      </div>
    </section>
  );
}