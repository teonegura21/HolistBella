import { SEO } from "@/components/ui/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function Resurse() {
  const articles = [
    {
      title: "Ghid pentru managementul durerilor de spate",
      excerpt: "Descoperă tehnici simple și eficiente pentru a gestiona durerea cronică fără medicamente.",
      date: "15 Sept 2024",
      author: "Dr. Angelica Negura",
      slug: "ghid-management-dureri-spate"
    },
    {
      title: "Beneficiile terapiei Bowen pentru stres",
      excerpt: "Cum această tehnică blândă poate transforma modul în care corpul tău răspunde la stres zilnic.",
      date: "12 Sept 2024",
      author: "Echipa Holist Bella",
      slug: "beneficii-terapie-bowen-stres"
    },
    {
      title: "Apa alcalină: mit sau realitate?",
      excerpt: "O analiză obiectivă a beneficiilor potențiale și limitărilor apei ionizate Kangen.",
      date: "10 Sept 2024",
      author: "Dr. Angelica Negura",
      slug: "apa-alcalina-mit-sau-realitate"
    },
    {
      title: "Cum funcționează biorezonanța?",
      excerpt: "Explicație detaliată a principiilor și aplicațiilor practice ale terapiei energetice.",
      date: "8 Sept 2024",
      author: "Echipa Holist Bella",
      slug: "cum-funcționează-biorezonanta"
    },
    {
      title: "Terapia Healy: ce spun studiile?",
      excerpt: "Analiză transparentă a cercetărilor disponibile și poziția comunității medicale.",
      date: "5 Sept 2024",
      author: "Dr. Angelica Negura",
      slug: "terapia-healy-studii"
    }
  ];

  return (
    <>
      <SEO 
        title="Resurse și Blog Holist Bella Iași – Ghiduri și Articole de Sănătate"
        description="Ghiduri și articole educaționale despre terapii holistice, managementul durerii, stres, wellness și medicină alternativă."
      />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-4 text-sm">
            <Link href="/" className="mr-2">Acasă</Link>
            <span className="mr-2">›</span>
            <span>Resurse</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Resurse și Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Articole educaționale și ghiduri practice pentru o viață mai sănătoasă și echilibrată.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  {article.date}
                  <User className="w-4 h-4 ml-2 mr-1" />
                  {article.author}
                </div>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Button variant="ghost" asChild className="text-primary">
                  <Link href={`/resurse/${article.slug}`}>
                    Citește mai mult <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/programari">
              Programează o consultație
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}