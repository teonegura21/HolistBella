import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

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
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Medicina Holistică<br />
              <span className="text-primary">Pentru Echilibrul Perfect</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Medicina alternativă este o medicină holistică care se adresează omului văzut ca întreg - 
              trup, minte și suflet, nu doar corpului și bolilor fizice.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Această abordare holistică, această empatizare cu pacientul îl determină să vină ca la 
              un psihoterapeut, să-și pună încrederea în mâinile lui. <em>Încrederea este lucrul cel 
              mai important în medicină.</em>
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-600">Ani Experiență</div>
              </div>
              <div className="text-center p-4 bg-secondary/5 rounded-lg">
                <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
                <div className="text-sm text-gray-600">Pacienți Mulțumiți</div>
              </div>
            </div>
            
            <Button onClick={() => scrollToSection("contact")} size="lg">
              <CalendarCheck className="mr-2 h-5 w-5" />
              Programează o Consultație
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Consultatie medicala" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Terapii naturale" 
              className="rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
