import { Button } from "@/components/ui/button";
import { ChevronDown, Leaf, Calendar } from "lucide-react";

export default function Hero() {
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

  return (
    <section id="home" className="gradient-bg text-white py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Centrul de Sănătate<br />
            <span className="text-yellow-300">Holist Bella</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Cea mai mare bogăție este sănătatea. Descoperă puterea medicinii holistische 
            pentru echilibrul trup, minte și suflet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection("servicii")}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg transform hover:scale-105 transition-all shadow-lg"
            >
              <Leaf className="mr-2 h-5 w-5" />
              Vezi Serviciile
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg transition-all"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Programează Consultația
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white text-2xl" />
      </div>
    </section>
  );
}
