import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogTeaser() {
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
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Resurse Recente
          </h2>
          <p className="text-xl text-gray-600">
            Articole și ghiduri pentru a te ajuta să înțelegi mai bine sănătatea holistică
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                  <User className="w-4 h-4 ml-4 mr-2" />
                  {article.author}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {article.excerpt}
                </p>
                <Button variant="ghost" asChild className="text-primary hover:text-primary/80">
                  <Link href={`/resurse/${article.slug}`}>
                    Citește mai mult <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/resurse">
              Vezi toate articolele
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}