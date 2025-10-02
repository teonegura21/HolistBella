import { SEO } from "@/components/ui/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Award, MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function DespreNoi() {
  const certifications = [
    {
      name: "Certificare Internațională Bowen",
      year: "2018",
      icon: "bowen-cert",
      description: "Certificare avansată în tehnica Bowen de la Academia Internațională."
    },
    {
      name: "Diplomă Medicina Holistică",
      year: "2015",
      icon: "holistic-med",
      description: "Program complet de formare în abordări integrative de sănătate."
    },
    {
      name: "Certificat Biorezonanță",
      year: "2020",
      icon: "bioresonance-cert",
      description: "Formare specializată în diagnostic și terapie bioenergetică."
    },
    {
      name: "Certificare Healy Professional",
      year: "2021",
      icon: "healy-cert",
      description: "Certificare pentru utilizare clinică a dispozitivului Healy."
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  ];

  return (
    <>
      <SEO 
        title="Despre Holist Bella – Terapeut Certificat & Cabinet Wellness Iași"
        description="Află mai multe despre filozofia Holist Bella, expertiza terapeutului nostru și cabinetul modern din Iași dedicat stării tale de bine."
      />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-4 text-sm">
            <Link href="/" className="mr-2">Acasă</Link>
            <span className="mr-2">›</span>
            <span>Despre Noi</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Misiunea noastră: Sănătate holistică și stare de bine durabilă
          </h1>
          <p className="text-xl mb-8">
            La Holist Bella, ne dedicăm să oferim îngrijire centrată pe pacient, integrând cele mai avansate terapii alternative cu o abordare personalizată care respectă individualitatea fiecărei persoane.
          </p>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Filozofia */}
          <section>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Filozofia Noastră Holistică
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Adoptăm o abordare integrativă care privește sănătatea ca un echilibru dinamic între corp, minte și spirit. 
                  Fiecare tratament este conceput pentru a activa mecanismele naturale de vindecare ale organismului, 
                  oferind soluții sustenabile pe termen lung.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Cu o experiență de peste 15 ani în domeniul terapiilor alternative, ne bazăm pe dovezi științifice 
                  disponibile și pe transparență absolută în toate abordările noastre.
                </p>
                <Button asChild variant="outline" size="lg">
                  <Link href="/servicii">
                    Descoperă serviciile noastre
                  </Link>
                </Button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Filozofia holistică Holist Bella" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Terapeut Bio */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Angelica Negura - Terapeut Certificat
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cu o pasiune de peste 15 ani pentru medicina integrativă, Angelica Negura combină expertiza tradițională 
                cu tehnologiile moderne pentru a oferi îngrijire personalizată și eficientă.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" 
                  alt="Angelica Negura - Terapeut Holist Bella" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Experiență și Formare
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Formare internațională în terapii alternative, cu accent pe tehnici non-invazive și abordări bazate pe dovezi. 
                  Membru al asociațiilor profesionale de medicină complementară, cu participare activă la conferințe și workshop-uri internaționale.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Peste 1000 de pacienți tratați cu rezultate dovedite în managementul durerii cronice, stresului și optimizării stării de bine.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-accent mr-3" />
                    <span className="font-semibold">15+ ani experiență</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-accent mr-3" />
                    <span className="font-semibold">Certificări internaționale</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-accent mr-3" />
                    <span className="font-semibold">1000+ pacienți mulțumiți</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Certificări */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Certificări și Formare Profesională
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Formarea continuă și certificările internaționale asigură cele mai actuale și eficiente abordări terapeutice.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{cert.description}</p>
                    <Badge variant="outline">{cert.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Cabinet Gallery */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cabinetul Nostru Modern
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un spațiu dedicat relaxării și vindecării, echipat cu tehnologii de ultimă generație.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryImages.map((img, index) => (
                <div key={index} className="group">
                  <img 
                    src={img} 
                    alt={`Cabinet Holist Bella - Imagine ${index + 1}`} 
                    className="rounded-lg shadow-lg w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Află mai multe despre cum putem contribui la sănătatea ta
            </h2>
            <Button asChild size="lg" variant="outline">
              <Link href="/programari">
                Programează o consultație
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </>
  );
}