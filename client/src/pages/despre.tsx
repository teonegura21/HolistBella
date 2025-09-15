import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, Users, Award, Clock, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function DesprePage() {
  const qualifications = [
    "Certificată în Terapia Bowen - Nivel Avansat",
    "Specialist în Biorezonanță Magnetică",
    "Master Reiki - Tradițional Japonez",
    "Certificată în Nutritie Celulară",
    "Formator autorizat Apa Kangen",
    "Specialist în Terapia Andullation",
    "Certificată în utilizarea dispozitivului Healy"
  ];

  const testimonials = [
    {
      name: "Dr. Mircea Popescu",
      title: "Medic Specialist Neurologie",
      text: "Colaborez cu Angelica de mulți ani. Abordarea ei holistică completează perfect tratamentele medicale clasice. Recomand cu încredere serviciile sale."
    },
    {
      name: "Maria Georgescu",
      location: "Iași",
      text: "Angelica nu este doar un terapeut excepțional, ci și o persoană cu o căldură și empatie deosebite. M-a ajutat să îmi regăsesc echilibrul după o perioadă foarte dificilă."
    },
    {
      name: "Ion Vasilescu",
      location: "Iași",
      text: "Sunt pacientul Angelicăi de peste 5 ani. Professionalismul și dedicarea ei sunt remarcabile. Îmi vine greu să îmi imaginez viața fără sprijinul ei."
    },
    {
      name: "Carmen Mihalache",
      location: "Iași",
      text: "Am încercat multe tratamente pentru problemele mele de sănătate. Angelica a fost prima care a înțeles cu adevărat de ce aveam nevoie și m-a ajutat să mă vindec."
    },
    {
      name: "Alexandru Radu",
      location: "Iași",
      text: "Angelica combină perfect știința cu spiritualitatea. Îți oferă nu doar un tratament, ci o experiență transformatoare completă."
    },
    {
      name: "Elena Cristea",
      location: "Iași",
      text: "Ca persoană care a fost sceptică la început, pot spune că Angelica mi-a schimbat complet perspectiva asupra medicinei alternative. Rezultatele vorbesc de la sine."
    }
  ];

  const achievements = [
    { icon: Users, number: "1000+", label: "Pacienți tratați" },
    { icon: Clock, number: "15+", label: "Ani experiență" },
    { icon: Award, number: "7", label: "Certificări internaționale" },
    { icon: Heart, number: "98%", label: "Rata de satisfacție" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-600 via-teal-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Despre Angelica Negura
                <span className="block text-green-200">Fondatoarea Holist Bella</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Cu peste 15 ani de experiență în medicina holistică, Angelica Negura și-a dedicat viața 
                ajutării oamenilor să-și regăsească echilibrul și sănătatea prin abordări naturale și non-invazive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Programează Consultația
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Mesaj WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Angelica Negura" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-green-600 font-bold text-2xl">15+</div>
                <div className="text-gray-600 text-sm">Ani Experiență</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Povestea Mea</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
            <p className="text-xl mb-6">
              Călătoria mea în lumea medicinei holiste a început din dorința de a găsi soluții reale 
              pentru problemele de sănătate pe care medicina convențională nu le putea rezolva complet.
            </p>
            
            <p className="mb-6">
              Am descoperit că adevărata vindecare vine atunci când tratăm omul ca întreg - trup, minte și suflet. 
              Această filozofie m-a condus să studiez și să mă specializez în multiple discipline complementare, 
              de la terapia Bowen și Reiki, până la tehnologiile moderne de biorezonanță.
            </p>
            
            <p className="mb-6">
              De-a lungul anilor, am avut privilegiul să lucrez cu peste 1000 de pacienți, fiecare cu povestea 
              și nevoile sale unice. Am învățat că fiecare persoană merită o abordare personalizată și că 
              încrederea este fundamentul oricărei vindecări adevărate.
            </p>
            
            <p className="mb-8">
              Astăzi, la Holist Bella, îmbin tradiția cu inovația, oferind atât terapii ancestrale precum Reiki 
              și Bowen, cât și tehnologii de vârf precum Healy și Andullation. Scopul meu rămâne același: 
              să ajut fiecare persoană să-și descopere potențialul natural de autovindecare.
            </p>
            
            <blockquote className="text-2xl text-center text-green-600 font-semibold italic border-l-4 border-green-600 pl-6">
              "Cea mai mare satisfacție a mea este să văd cum pacienții mei își regăsesc sănătatea, 
              energia și bucuria de a trăi."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">În Cifre</h2>
            <p className="text-xl text-gray-600">Experiența și rezultatele vorbesc de la sine</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="text-green-600 text-2xl" />
                  </div>
                  <div className="text-4xl font-bold text-green-600 mb-2">{achievement.number}</div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Certificări și Specializări</h2>
              <div className="space-y-4">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg">
                    <Award className="text-green-600 mr-3 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500" 
                alt="Certificări medicale" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Filosofia Mea</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Cred cu tărie că fiecare om posedă o capacitate naturală de autovindecare. Rolul meu ca terapeut 
              este să activez și să sprijin această capacitate prin tehnici dovedite științific, 
              într-un cadru de încredere și empatie.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Abordarea mea este întotdeauna personalizată, pentru că înțeleg că fiecare persoană este unică 
              și merită un tratament adaptat nevoilor sale specifice. Medicina holistică nu înlocuiește 
              medicina convențională, ci o completează, oferind o perspectivă mai largă asupra sănătății și bunăstării.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce Spun Pacienții</h2>
            <p className="text-xl text-gray-600">Încrederea și rezultatele pacienților sunt cea mai bună recomandare</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.title || testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Hai să Începem Împreună Călătoria Spre Sănătate</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Îmi doresc să te cunosc și să înțeleg cum te pot ajuta să îți atingi obiectivele de sănătate 
            și bunăstare. Programează o consultație și să discutăm despre nevoile tale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Sună pentru Consultație
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                Mesaj WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}