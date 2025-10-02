import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
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
    <section id="despre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              O abordare centrată pe tine
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              La Holist Bella, adoptăm o filozofie holistică care privește omul ca un întreg interconectat - corp, minte și spirit.
              Cu peste 15 ani de experiență în terapii alternative, ne dedicăm să înțelegem nevoile tale unice și să îți oferim
              soluții personalizate care activează potențialul natural de vindecare al organismului tău.
            </p>
            
            <Button asChild size="lg" variant="outline">
              <Link href="/despre-noi">
                Citește mai mult despre misiunea noastră
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
              alt="Terapeut Holist Bella"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
