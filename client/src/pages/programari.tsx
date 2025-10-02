import { SEO } from "@/components/ui/seo";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { Link } from "wouter";

export default function Programari() {
  const whatsappMessage = "Bună! Aș dori să programez o ședință de evaluare. Vă rog să îmi spuneți disponibilitățile pentru săptămâna aceasta.";

  return (
    <>
      <SEO 
        title="Programări Holist Bella Iași – Contact și Disponibilitate"
        description="Programează o consultație la Holist Bella Iași. Contact prin WhatsApp, telefon sau email. Disponibilitate și metode de programare."
      />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-4 text-sm">
            <Link href="/" className="mr-2">Acasă</Link>
            <span className="mr-2">›</span>
            <span>Programări</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Programează o Consultație
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Primul pas către o stare de bine începe cu o conversație. Suntem aici să te ascultăm și să îți oferim cea mai bună soluție pentru sănătatea ta.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Metode de Contact</h2>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <MessageCircle className="w-8 h-8 text-green-500 mr-4" />
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="text-gray-600">Mesaj instant cu programare predefinită.</p>
                  <Button asChild variant="outline" className="mt-2">
                    <a href={`https://wa.me/${CONTACT_INFO.phone.replace('+', '').replace(' ', '')}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                      Trimite mesaj
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <Phone className="w-8 h-8 text-blue-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Telefon</h3>
                  <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                  <p className="text-sm text-gray-500 mt-1">Apel direct pentru programare rapidă</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <Mail className="w-8 h-8 text-gray-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">Programare prin email pentru detalii complexe.</p>
                  <Button variant="ghost" className="mt-2">
                    Scrie email
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Disponibilitate</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="font-semibold">Luni - Vineri</p>
                  <p className="text-gray-600">09:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="font-semibold">Sâmbătă</p>
                  <p className="text-gray-600">09:00 - 14:00</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="font-semibold">Duminică</p>
                  <p className="text-gray-600">Închis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}