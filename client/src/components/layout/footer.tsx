import { Link } from "wouter";
import { Heart, Leaf, MapPin, Phone, Mail, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: "Acasă", href: "/" },
    { title: "Despre Noi", href: "/despre" },
    { title: "Apă Kangen", href: "/apa-kangen" },
    { title: "Biorezonanță", href: "/biorezonanta" },
    { title: "Andullation", href: "/andullation" },
    { title: "Healy", href: "/healy" },
    { title: "Alte Servicii", href: "/alte-servicii" }
  ];

  const servicii = [
    "Terapie Bowen",
    "Reiki Healing", 
    "Nutriție Celulară",
    "Biorezonanță Magnetică",
    "Echilibrare Energetică",
    "Detoxifiere Naturală"
  ];

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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-healing-green rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-wellness-blue rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-warm-gold rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-healing-green rounded-full flex items-center justify-center mr-3">
                  <Heart className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Holist Bella</h3>
                  <p className="text-sm text-gray-300">Centrul de Sănătate</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Transformăm vieți prin puterea medicinei holiste. 
                Echilibru, vindecare și wellness pentru fiecare pacient.
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-300">
                  <Leaf className="w-4 h-4 mr-2 text-healing-green" />
                  15+ Ani Experiență
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Navigare Rapidă</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-healing-green transition-colors cursor-pointer"
                      data-testid={`footer-link-${link.href.replace('/', '')}`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicii */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Serviciile Noastre</h4>
              <ul className="space-y-3">
                {servicii.map((serviciu, index) => (
                  <li key={index} className="text-gray-300 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-healing-green rounded-full mr-3 opacity-60" />
                      {serviciu}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-healing-green mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    {CONTACT_INFO.address}
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-healing-green mr-3 w-5 h-5 flex-shrink-0" />
                  <a 
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-gray-300 hover:text-healing-green transition-colors text-sm"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center">
                  <Mail className="text-healing-green mr-3 w-5 h-5 flex-shrink-0" />
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-gray-300 hover:text-healing-green transition-colors text-sm"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>

                <div className="flex items-start">
                  <Clock className="text-healing-green mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <div>L-V: 9:00 - 18:00</div>
                    <div>S: 9:00 - 14:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-gradient-to-r from-healing-green to-tranquil-teal rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Începe Călătoria Către Wellness Astăzi
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Programează o consultație gratuită și descoperă cum putem să-ți transformăm viața 
                prin puterea medicinei holiste.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-white text-healing-green hover:bg-gray-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  data-testid="button-schedule-consultation"
                >
                  Programează Consultația
                </button>
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-8 py-3 rounded-full font-semibold transition-all duration-300 border border-white/30"
                  data-testid="link-whatsapp-direct"
                >
                  WhatsApp Direct
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Holist Bella. Toate drepturile rezervate.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-healing-green transition-colors" data-testid="footer-link-privacy">
                  Politica de Confidențialitate
                </a>
                <a href="#" className="hover:text-healing-green transition-colors" data-testid="footer-link-terms">
                  Termeni și Condiții
                </a>
                <a href="#" className="hover:text-healing-green transition-colors" data-testid="footer-link-gdpr">
                  GDPR
                </a>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('openCookiePreferences'))}
                  className="hover:text-healing-green transition-colors cursor-pointer"
                  data-testid="button-cookie-preferences"
                >
                  Preferințe Cookie-uri
                </button>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700 text-center">
              <p className="text-gray-400 text-xs">
                Toate terapiile sunt complementare și nu înlocuiesc tratamentul medical convențional. 
                Consultați întotdeauna medicul pentru probleme de sănătate grave.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}