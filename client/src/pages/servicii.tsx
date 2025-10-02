import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { SEO } from "@/components/ui/seo";

export default function Servicii() {
  const services = [
    {
      title: "Terapie Bowen",
      description: "Tehnică manuală subtilă care activează procesul natural de auto-vindecare prin mișcări delicate pe mușchi și tendoane.",
      link: "/servicii/terapie-bowen-iasi",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Biorezonanță",
      description: "Metodă non-invazivă de scanare a frecvențelor corpului pentru identificarea dezechilibrelor energetice și crearea unui plan personalizat.",
      link: "/servicii/biorezonanta-iasi",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Terapie Healy",
      description: "Dispozitiv portabil cu microcurenți și frecvențe pentru susținerea echilibrului bioenergetic și managementul durerii.",
      link: "/servicii/terapie-healy-iasi",
      image: "https://images.unsplash.com/photo-1559757195-3d4a6b2c6c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Apă Kangen",
      description: "Apă filtrată și ionizată pentru hidratare eficientă, suport al echilibrului pH și versatilitate în uz casnic.",
      link: "/servicii/apa-kangen-iasi",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Terapie Andullation",
      description: "Tehnologie germană care combină vibrații stocastice cu căldură infraroșie pentru relaxare musculară și stimulare circulatorie.",
      link: "/servicii/terapie-andullation-iasi",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Nutriție Celulară AplGo",
      description: "Suplimente alimentare sub formă de drajeuri cu extracte naturale concentrate pentru suport nutritiv celular.",
      link: "/servicii/nutritie-celulara-iasi",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <>
      <SEO 
        title="Servicii Holist Bella Iași – Terapii Alternative și Wellness"
        description="Descoperă toate serviciile noastre de terapii holistice non-invazive: Terapie Bowen, Biorezonanță, Healy, Apă Kangen, Andullation, Nutriție Celulară."
      />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-4 text-sm">
            <Link href="/" className="mr-2">Acasă</Link>
            <span className="mr-2">›</span>
            <span>Servicii</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Serviciile Noastre Complete
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alege din gama noastră diversificată de terapii holistice non-invazive, fiecare concepută pentru a sprijini echilibrul natural al corpului tău.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild variant="outline">
                  <Link href={service.link}>
                    Află mai mult <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}