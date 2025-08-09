import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Heart, 
  Sparkles,
  CheckCircle
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

interface ContactForm {
  nume: string;
  prenume: string;
  email: string;
  telefon: string;
  serviciu: string;
  mesaj: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    nume: "",
    prenume: "",
    email: "",
    telefon: "",
    serviciu: "",
    mesaj: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const submitMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Eroare la trimiterea formularului");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Mesaj trimis cu succes!",
        description: "Vă vom contacta în cel mai scurt timp posibil.",
      });
      setFormData({
        nume: "",
        prenume: "",
        email: "",
        telefon: "",
        serviciu: "",
        mesaj: ""
      });
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: () => {
      toast({
        title: "Eroare",
        description: "A apărut o problemă la trimiterea mesajului. Vă rugăm să încercați din nou.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const servicii = [
    "Apă Kangen",
    "Biorezonanță Magnetică", 
    "Andullation",
    "Healy",
    "Terapie Bowen",
    "Reiki",
    "Nutriție Celulară",
    "Consultație generală"
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-soft-cream to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-healing-green rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-wellness-blue rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-warm-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-healing-green/10 text-healing-green mb-6">
            <Heart className="w-5 h-5 mr-2" />
            <span className="font-semibold">Să Începem Împreună</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Programează 
            <span className="wellness-gradient-text"> Consultația</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Primul pas către vindecarea holistică începe cu o conversație. 
            Suntem aici să te ascultăm și să îți oferim cea mai bună soluție pentru sănătatea ta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="holistic-card border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-healing-green/10 rounded-full flex items-center justify-center mr-4">
                    <Send className="text-healing-green text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Trimite-ne un Mesaj</h3>
                    <p className="text-gray-600">Completează formularul și te vom contacta în 24h</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nume *
                      </label>
                      <Input
                        required
                        value={formData.nume}
                        onChange={(e) => handleInputChange("nume", e.target.value)}
                        className="w-full rounded-lg border-gray-200 focus:border-healing-green focus:ring-healing-green"
                        placeholder="Introduceți numele"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prenume *
                      </label>
                      <Input
                        required
                        value={formData.prenume}
                        onChange={(e) => handleInputChange("prenume", e.target.value)}
                        className="w-full rounded-lg border-gray-200 focus:border-healing-green focus:ring-healing-green"
                        placeholder="Introduceți prenumele"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full rounded-lg border-gray-200 focus:border-healing-green focus:ring-healing-green"
                        placeholder="exemplu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.telefon}
                        onChange={(e) => handleInputChange("telefon", e.target.value)}
                        className="w-full rounded-lg border-gray-200 focus:border-healing-green focus:ring-healing-green"
                        placeholder="+40 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Serviciu de interes
                    </label>
                    <Select value={formData.serviciu} onValueChange={(value) => handleInputChange("serviciu", value)}>
                      <SelectTrigger className="w-full rounded-lg border-gray-200 focus:border-healing-green focus:ring-healing-green">
                        <SelectValue placeholder="Selectați serviciul dorit" />
                      </SelectTrigger>
                      <SelectContent>
                        {servicii.map((serviciu) => (
                          <SelectItem key={serviciu} value={serviciu}>
                            {serviciu}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj *
                    </label>
                    <Textarea
                      required
                      rows={5}
                      value={formData.mesaj}
                      onChange={(e) => handleInputChange("mesaj", e.target.value)}
                      className="w-full rounded-lg border-gray-200 focus:border-healing-green focus:ring-healing-green resize-none"
                      placeholder="Descrieți simptomele, întrebările sau preocupările dvs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full btn-holistic py-4 text-lg"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Se trimite...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Trimite Mesajul
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="holistic-card border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-wellness-blue/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-wellness-blue text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Informații Contact</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-healing-green mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Adresa</div>
                      <div className="text-gray-600">{CONTACT_INFO.address}</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-healing-green mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Telefon</div>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-600 hover:text-healing-green transition-colors">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-healing-green mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-healing-green transition-colors">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="text-healing-green mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Program</div>
                      <div className="text-gray-600">
                        <div>Luni - Vineri: 9:00 - 18:00</div>
                        <div>Sâmbătă: 9:00 - 14:00</div>
                        <div>Duminică: Închis</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="holistic-card border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-warm-gold/10 rounded-full flex items-center justify-center mr-4">
                    <Sparkles className="text-warm-gold text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Acțiuni Rapide</h3>
                </div>

                <div className="space-y-4">
                  <Button
                    asChild
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3"
                  >
                    <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.448"/>
                      </svg>
                      WhatsApp Direct
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-healing-green text-healing-green hover:bg-healing-green hover:text-white py-3"
                  >
                    <a href={`tel:${CONTACT_INFO.phone}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      Sună Acum
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-r from-healing-green to-tranquil-teal rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 mr-2" />
                <h4 className="font-bold">De Ce Să Ne Alegi?</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3" />
                  Consultație gratuită pentru primul contact
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3" />
                  Răspuns garantat în 24 de ore
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3" />
                  Peste 15 ani de experiență
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3" />
                  Abordare personalizată 100%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}