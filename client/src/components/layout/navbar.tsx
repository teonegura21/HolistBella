import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Phone, ChevronDown } from "lucide-react";
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
      <Link href="/" className={`${mobile ? "block px-3 py-2" : "px-3 py-2"} text-gray-700 hover:text-primary transition-colors`}>
        Acasă
      </Link>
      
      <Link href="/programare" className={`${mobile ? "block px-3 py-2" : "px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"} transition-colors`} data-testid="nav-link-programare">
        {mobile ? "Programare" : "📅 Programare"}
      </Link>
      
      {/* Services Dropdown */}
      {!mobile ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="px-3 py-2 text-gray-700 hover:text-primary transition-colors flex items-center">
            Servicii <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              <Link href="/terapie-bowen" className="w-full" data-testid="nav-link-terapie-bowen">Terapie Bowen</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/nutritie-celulara" className="w-full" data-testid="nav-link-nutritie-celulara">Nutriție Celulară</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/terapie-reiki" className="w-full" data-testid="nav-link-terapie-reiki">Terapie Reiki</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/detoxifiere-naturala" className="w-full" data-testid="nav-link-detoxifiere-naturala">Detoxifiere Naturală</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/apa-kangen" className="w-full" data-testid="nav-link-apa-kangen">Apa Kangen</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/biorezonanta" className="w-full" data-testid="nav-link-biorezonanta">Biorezonanță</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/andullation" className="w-full" data-testid="nav-link-andullation">Andullation</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/healy" className="w-full" data-testid="nav-link-healy">Healy</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <Link href="/terapie-bowen" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
            Terapie Bowen
          </Link>
          <Link href="/nutritie-celulara" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
            Nutriție Celulară
          </Link>
          <Link href="/terapie-reiki" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
            Terapie Reiki
          </Link>
          <Link href="/detoxifiere-naturala" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
            Detoxifiere Naturală
          </Link>
          <Link href="/apa-kangen" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
            Apa Kangen
          </Link>
          <Link href="/biorezonanta" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
            Biorezonanță
          </Link>
          <Link href="/andullation" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
            Andullation
          </Link>
          <Link href="/healy" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
            Healy
          </Link>
        </>
      )}
      
      <Link href="/despre" className={`${mobile ? "block px-3 py-2" : "px-3 py-2"} text-gray-700 hover:text-primary transition-colors`} data-testid={`nav-link-despre${mobile ? '-mobile' : ''}`}>
        Despre
      </Link>
      
      <Link href="/testimoniale" className={`${mobile ? "block px-3 py-2" : "px-3 py-2"} text-gray-700 hover:text-primary transition-colors`} data-testid={`nav-link-testimoniale${mobile ? '-mobile' : ''}`}>
        Testimoniale
      </Link>
      
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
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary cursor-pointer hover:text-primary/80 transition-colors">Holist Bella</h1>
            </Link>
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
