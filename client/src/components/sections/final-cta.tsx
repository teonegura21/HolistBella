import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ești pregătit(ă) să faci primul pas către o stare de bine?
        </h2>
        <p className="text-xl mb-12 leading-relaxed">
          Programează o discuție și hai să găsim împreună soluția potrivită pentru tine.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg" 
            asChild
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-bold"
          >
            <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Programează-te pe WhatsApp
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            asChild
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-bold"
          >
            <a href={`tel:${CONTACT_INFO.phone}`}>
              <Phone className="mr-2 h-5 w-5" />
              Sună acum
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}