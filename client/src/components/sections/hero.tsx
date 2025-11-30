import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CONTACT_INFO } from "@/lib/constants";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
          filter: "brightness(0.5)"
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : ''}`}>
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Terapii holistice non-invazive pentru o viață echilibrată și fără durere.
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            La Holist Bella Iași, combinăm tehnici avansate cu o abordare personalizată pentru a-ți susține procesele naturale de regenerare și echilibru.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              asChild
              className="px-10 py-5 text-lg bg-secondary hover:bg-secondary/90 text-primary font-bold"
            >
              <Link href="/programari">
                Programează o consultație
              </Link>
            </Button>

            <Button
              size="lg"
              asChild
              className="bg-white text-green-600 hover:bg-gray-100 px-10 py-5 text-lg font-semibold"
            >
              <Link href="/servicii">
                Descoperă toate serviciile noastre
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
              Peste 1000 de clienți mulțumiți
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
              Rating 4.9/5 pe Google
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
              Terapeut certificat internațional
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}