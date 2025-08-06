import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      <button
        onClick={() => scrollToSection("home")}
        className={`${mobile ? "block px-3 py-2" : "px-3 py-2"} text-gray-700 hover:text-primary transition-colors`}
      >
        Acasă
      </button>
      <button
        onClick={() => scrollToSection("servicii")}
        className={`${mobile ? "block px-3 py-2" : "px-3 py-2"} text-gray-700 hover:text-primary transition-colors`}
      >
        Servicii
      </button>
      <button
        onClick={() => scrollToSection("despre")}
        className={`${mobile ? "block px-3 py-2" : "px-3 py-2"} text-gray-700 hover:text-primary transition-colors`}
      >
        Despre
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className={`${mobile ? "block px-3 py-2" : "px-3 py-2"} text-gray-700 hover:text-primary transition-colors`}
      >
        Contact
      </button>
    </>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/98 backdrop-blur-sm shadow-lg" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Holist Bella</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLinks />
              <Button asChild size="sm">
                <a href={`tel:${CONTACT_INFO.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Sună Acum
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <NavLinks mobile />
                  <Button asChild className="mt-4">
                    <a href={`tel:${CONTACT_INFO.phone}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Sună Acum
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
