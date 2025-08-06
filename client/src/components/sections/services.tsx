import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="servicii" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Serviciile Noastre</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferim o gamă variată de terapii și tratamente holistische, personalizate pentru nevoile tale unice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <Card key={service.id} className="service-card shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className={`text-2xl font-semibold mb-3 ${service.color}`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`font-semibold ${service.color}`}>
                    {service.benefits.join(" • ")}
                  </span>
                  <Button 
                    size="sm"
                    className={service.color.includes("green") ? "bg-green-600 hover:bg-green-700" :
                              service.color.includes("blue") ? "bg-blue-600 hover:bg-blue-700" :
                              service.color.includes("orange") ? "bg-orange-600 hover:bg-orange-700" :
                              "bg-purple-600 hover:bg-purple-700"}
                  >
                    Află Mai Multe
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Apa Kangen Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 lg:p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Apa Kangen</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Descoperă beneficiile apei alcaline ionizate pentru sănătatea ta!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-yellow-300 text-blue-600 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">✓</div>
                  <span>Apa alcalină ionizată cu pH 8,5-9,5 pentru sănătatea organismului</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-yellow-300 text-blue-600 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">✓</div>
                  <span>Proprietăți antioxidante pentru reducerea radicalilor liberi</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-yellow-300 text-blue-600 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">✓</div>
                  <span>Microstructurată pentru hidratare superioară</span>
                </div>
              </div>
              
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Află Mai Multe despre Apa Kangen
              </Button>
            </div>
            
            <div className="h-64 lg:h-full">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Apa Kangen" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
