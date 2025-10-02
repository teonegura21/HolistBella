import { SEO } from "@/components/ui/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { Link } from "wouter";

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Holist Bella Iași – Locație, Telefon, Email"
        description="Contactează Holist Bella Iași. Adresă, telefon, email, orar și hartă interactivă. Accesibilitate pentru persoane cu dizabilități."
      />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-4 text-sm">
            <Link href="/" className="mr-2">Acasă</Link>
            <span className="mr-2">›</span>
            <span>Contact</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact și Locație
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Găsește toate detaliile de contact și informațiile despre accesibilitate.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-xl font-bold">Adresa</h2>
                </div>
                <p className="text-gray-600 mb-4">Str. Vasile Lupu 78, Iași 700309</p>
                <p className="text-sm text-gray-500">Accesibil cu transportul public. Parcare gratuită disponibilă în apropiere.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg mt-6">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-xl font-bold">Telefon</h2>
                </div>
                <p className="text-gray-600 mb-4">{CONTACT_INFO.phone}</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg mt-6">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-xl font-bold">Email</h2>
                </div>
                <p className="text-gray-600 mb-4">{CONTACT_INFO.email}</p>
                <Button variant="ghost" className="w-full">
                  Scrie email
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg mt-6">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-xl font-bold">Orar</h2>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>Luni - Vineri: 09:00 - 18:00</li>
                  <li>Sâmbătă: 09:00 - 14:00</li>
                  <li>Duminică: Închis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.8583871572743!2d27.5801!3d47.1732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEwJzM1LjQiTiAyN8KwMzQnNTIuNSJF!5e0!3m2!1sen!2sus!4v1699123456789"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația Holist Bella"
            ></iframe>
            <div className="mt-6 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Accesibilitate</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Acces rampă pentru persoane cu dizabilități</li>
                <li>• Parcare dedicată în apropiere</li>
                <li>• Spațiu accesibil cu scaun cu rotile</li>
                <li>• Personal pregătit pentru asistență</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}