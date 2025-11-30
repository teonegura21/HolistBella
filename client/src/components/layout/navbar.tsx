import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Phone, ChevronDown, Leaf, Heart, Sparkles, Zap, Droplets, Activity } from "lucide-react";
import { Link, useLocation } from "wouter";
import { CONTACT_INFO } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
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
      <Link href="/" className={`${mobile ? "block px-3 py-2" : "px-3 py-2"} text-gray-700 hover:text-primary transition-colors text-2xl`}>
        Acasă
      </Link>
      
      {/* Services Dropdown */}
      {!mobile ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="px-3 py-2 text-gray-700 hover:text-primary transition-colors flex items-center font-medium text-2xl">
            Servicii <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72 p-2">
            <div className="grid gap-1">
              <DropdownMenuItem className="p-0">
                <Link href="/andullation" className="w-full px-3 py-2 rounded-md hover:bg-teal-50 transition-colors flex items-center" data-testid="nav-link-andullation">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                    <Activity className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="font-medium text-gray-900">Terapia Andullation</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0">
                <Link href="/biorezonanta" className="w-full px-3 py-2 rounded-md hover:bg-purple-50 transition-colors flex items-center" data-testid="nav-link-biorezonanta">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <Activity className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="font-medium text-gray-900">Biorezonanță</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0">
                <Link href="/healy" className="w-full px-3 py-2 rounded-md hover:bg-yellow-50 transition-colors flex items-center" data-testid="nav-link-healy">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <Zap className="w-4 h-4 text-yellow-600" />
                  </div>
                  <span className="font-medium text-gray-900">Healy — Analiză bioenergetică & terapie prin frecvențe sau microcurenti</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0">
                <Link href="/terapie-bowen" className="w-full px-3 py-2 rounded-md hover:bg-green-50 transition-colors flex items-center" data-testid="nav-link-terapie-bowen">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Leaf className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">Terapia Bowen</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0">
                <Link href="/apa-kangen" className="w-full px-3 py-2 rounded-md hover:bg-blue-50 transition-colors flex items-center" data-testid="nav-link-apa-kangen">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Droplets className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-900">Apa Kangen</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0">
                <Link href="/nutritie-celulara" className="w-full px-3 py-2 rounded-md hover:bg-violet-50 transition-colors flex items-center" data-testid="nav-link-nutritie-celulara">
                  <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center mr-3">
                    <Sparkles className="w-4 h-4 text-violet-600" />
                  </div>
                  <span className="font-medium text-gray-900">Nutritie Celulara</span>
                </Link>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <Link href="/andullation" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
            Terapia Andullation
          </Link>
          <Link href="/biorezonanta" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
            Biorezonanță
          </Link>
          <Link href="/healy" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
            Healy — Analiză bioenergetică & terapie prin frecvențe sau microcurenti
          </Link>
          <Link href="/terapie-bowen" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
            Terapia Bowen
          </Link>
          <Link href="/apa-kangen" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
            Apa Kangen
          </Link>
          <Link href="/nutritie-celulara" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
            Nutritie Celulara
          </Link>
        </>
      )}
      
      <Link href="/despre-noi" className={`${mobile ? "block px-3 py-2" : "px-3 py-2"} text-gray-700 hover:text-primary transition-colors text-2xl`} data-testid={`nav-link-despre${mobile ? '-mobile' : ''}`}>
        Despre Noi
      </Link>
      
      <Link href="/testimoniale" className={`${mobile ? "block px-3 py-2" : "px-3 py-2"} text-gray-700 hover:text-primary transition-colors text-2xl`} data-testid={`nav-link-testimoniale${mobile ? '-mobile' : ''}`}>
        Testimoniale
      </Link>
      
      <button
        onClick={() => scrollToSection("contact")}
        className={`${mobile ? "block px-3 py-2" : "px-3 py-2"} text-gray-700 hover:text-primary transition-colors text-2xl`}
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
            <Link href="/">
              <h1 className="text-5xl font-bold text-primary cursor-pointer hover:text-primary/80 transition-colors">Holist Bella</h1>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLinks />
              <Button asChild size="sm">
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4" />
                  Programează-te
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
                    <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      Programează-te
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
