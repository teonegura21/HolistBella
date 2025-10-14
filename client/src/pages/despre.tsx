import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, Users, Award, Clock, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function DesprePage() {
  const qualifications = [
    "Absolventă a Universității Alexandru Ioan Cuza din Iași, Master FEAA",
    "Certificată în Terapia Bowen - nivel Master și Avansat",
    "Specialist în Biorezonanță Magnetică",
    "Specialist în Terapia Andullation",
    "Certificată în utilizarea dispozitivului Healy",
    "Master Reiki - Tradițional Japonez",
    "Specialist în Nutriție Celulară",
    "Formator autorizat Apa Kangen",
    "Trainer, formator și consilier de dezvoltare personală",
    "Certificată Terapia Theta Healing și tehnica Ho'oponopono"
  ];

  const testimonials = [
    {
      name: "Dr. Mircea Popescu",
      title: "Medic Specialist Neurologie",
      text: "Colaborez cu Angelica de mul╚¢i ani. Abordarea ei holistic─â completeaz─â perfect tratamentele medicale clasice. Recomand cu ├«ncredere serviciile sale."
    },
    {
      name: "Maria Georgescu",
      location: "Ia╚Öi",
      text: "Angelica nu este doar un terapeut excep╚¢ional, ci ╚Öi o persoan─â cu o c─âldur─â ╚Öi empatie deosebite. M-a ajutat s─â ├«mi reg─âsesc echilibrul dup─â o perioad─â foarte dificil─â."
    },
    {
      name: "Ion Vasilescu",
      location: "Ia╚Öi",
      text: "Sunt pacientul Angelic─âi de peste 5 ani. Professionalismul ╚Öi dedicarea ei sunt remarcabile. ├Ämi vine greu s─â ├«mi imaginez via╚¢a f─âr─â sprijinul ei."
    },
    {
      name: "Carmen Mihalache",
      location: "Ia╚Öi",
      text: "Am ├«ncercat multe tratamente pentru problemele mele de s─ân─âtate. Angelica a fost prima care a ├«n╚¢eles cu adev─ârat de ce aveam nevoie ╚Öi m-a ajutat s─â m─â vindec."
    },
    {
      name: "Alexandru Radu",
      location: "Ia╚Öi",
      text: "Angelica combin─â perfect ╚Ötiin╚¢a cu spiritualitatea. ├Ä╚¢i ofer─â nu doar un tratament, ci o experien╚¢─â transformatoare complet─â."
    },
    {
      name: "Elena Cristea",
      location: "Ia╚Öi",
      text: "Ca persoan─â care a fost sceptic─â la ├«nceput, pot spune c─â Angelica mi-a schimbat complet perspectiva asupra medicinei alternative. Rezultatele vorbesc de la sine."
    }
  ];

  const achievements = [
    { icon: Users, number: "1000+", label: "Pacienți tratați" },
    { icon: Clock, number: "15+", label: "Ani experiență" },
    { icon: Award, number: "7", label: "Certificări internaționale" },
    { icon: Heart, number: "98%", label: "Rata de satisfacție" }
  ];

  return (
    <div>
      
      {/* Misiune și Filozofie */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Misiunea noastră: Sănătate holistică și stare de bine durabilă
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              La Holist Bella, ne dedicăm să oferim îngrijire centrată pe pacient, integrând cele mai avansate terapii alternative cu o abordare personalizată care respectă individualitatea fiecărei persoane.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Filozofia Noastră Holistică
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Adoptăm o abordare integrativă care privește sănătatea ca un echilibru dinamic între corp, minte și spirit. 
                Fiecare tratament este conceput pentru a activa mecanismele naturale de vindecare ale organismului, 
                oferind soluții sustenabile pe termen lung.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cu o experiență de peste 15 ani în domeniul terapiilor alternative, ne bazăm pe dovezi științifice 
                disponibile și pe transparență absolută în toate abordările noastre.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Filozofia holistică Holist Bella" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Terapeut Detalii */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Angelica Negura - Terapeut Certificat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cu o pasiune de peste 15 ani pentru medicina integrativă, combină expertiza tradițională 
              cu tehnologiile moderne pentru a oferi îngrijire personalizată și eficientă.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" 
                alt="Angelica Negura - Terapeut Holist Bella" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Experiență și Formare
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Formare internațională în terapii alternative, cu accent pe tehnici non-invazive și abordări bazate pe dovezi. 
                Membru al asociațiilor profesionale de medicină complementară, cu participare activă la conferințe și workshop-uri internaționale.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Peste 1000 de pacienți tratați cu rezultate dovedite în managementul durerii cronice, stresului și optimizării stării de bine.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-green-600 mr-3" />
                  <span className="font-semibold">15+ ani experiență</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-green-600 mr-3" />
                  <span className="font-semibold">Certificări internaționale</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-green-600 mr-3" />
                  <span className="font-semibold">1000+ pacienți mulțumiți</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Formare Continuă */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 mb-8">
            Formarea continuă și certificările internaționale asigură cele mai actuale și eficiente abordări terapeutice.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Află mai multe despre cum putem contribui la sănătatea ta
          </h3>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            <a href="/programari">Programează o consultație</a>
          </Button>
        </div>
      </section>

      {/* Hero Section - Despre Angelica */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-teal-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Despre Angelica Negura
                <span className="block text-green-200">Fondatoarea Holist Bella</span>
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Cu peste 15 ani de experien╚¢─â ├«n medicina holistic─â, Angelica Negura ╚Öi-a dedicat via╚¢a 
                ajut─ârii oamenilor s─â-╚Öi reg─âseasc─â echilibrul ╚Öi s─ân─âtatea prin abord─âri naturale ╚Öi non-invazive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Programeaz─â Consulta╚¢ia prin WhatsApp
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
                <div className="text-gray-600 text-sm">Ani Experien╚¢─â</div>
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
              C─âl─âtoria mea ├«n lumea medicinei holiste a ├«nceput din dorin╚¢a de a g─âsi solu╚¢ii reale 
              pentru problemele de s─ân─âtate pe care medicina conven╚¢ional─â nu le putea rezolva complet.
            </p>
            
            <p className="mb-6">
              Am descoperit c─â adev─ârata vindecare vine atunci c├ónd trat─âm omul ca ├«ntreg - trup, minte ╚Öi suflet. 
              Aceast─â filozofie m-a condus s─â studiez ╚Öi s─â m─â specializez ├«n multiple discipline complementare, 
              de la terapia Bowen ╚Öi Reiki, p├ón─â la tehnologiile moderne de biorezonan╚¢─â.
            </p>
            
            <p className="mb-6">
              De-a lungul anilor, am avut privilegiul s─â lucrez cu peste 1000 de pacien╚¢i, fiecare cu povestea 
              ╚Öi nevoile sale unice. Am ├«nv─â╚¢at c─â fiecare persoan─â merit─â o abordare personalizat─â ╚Öi c─â 
              ├«ncrederea este fundamentul oric─ârei vindec─âri adev─ârate.
            </p>
            
            <p className="mb-8">
              Ast─âzi, la Holist Bella, ├«mbin tradi╚¢ia cu inova╚¢ia, oferind at├ót terapii ancestrale precum Reiki 
              ╚Öi Bowen, c├ót ╚Öi tehnologii de v├órf precum Healy ╚Öi Andullation. Scopul meu r─âm├óne acela╚Öi: 
              s─â ajut fiecare persoan─â s─â-╚Öi descopere poten╚¢ialul natural de autovindecare.
            </p>
            
            <blockquote className="text-2xl text-center text-green-600 font-semibold italic border-l-4 border-green-600 pl-6">
              "Cea mai mare satisfac╚¢ie a mea este s─â v─âd cum pacien╚¢ii mei ├«╚Öi reg─âsesc s─ân─âtatea, 
              energia ╚Öi bucuria de a tr─âi."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">├Än Cifre</h2>
            <p className="text-xl text-gray-600">Experien╚¢a ╚Öi rezultatele vorbesc de la sine</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Certific─âri ╚Öi Specializ─âri</h2>
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
                alt="Certific─âri medicale" 
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
              Cred cu t─ârie c─â fiecare om posed─â o capacitate natural─â de autovindecare. Rolul meu ca terapeut 
              este s─â activez ╚Öi s─â sprijin aceast─â capacitate prin tehnici dovedite ╚Ötiin╚¢ific, 
              ├«ntr-un cadru de ├«ncredere ╚Öi empatie.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Abordarea mea este ├«ntotdeauna personalizat─â, pentru c─â ├«n╚¢eleg c─â fiecare persoan─â este unic─â 
              ╚Öi merit─â un tratament adaptat nevoilor sale specifice. Medicina holistic─â nu ├«nlocuie╚Öte 
              medicina conven╚¢ional─â, ci o completeaz─â, oferind o perspectiv─â mai larg─â asupra s─ân─ât─â╚¢ii ╚Öi bun─âst─ârii.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce Spun Pacien╚¢ii</h2>
            <p className="text-xl text-gray-600">├Äncrederea ╚Öi rezultatele pacien╚¢ilor sunt cea mai bun─â recomandare</p>
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
          <h2 className="text-4xl font-bold mb-6">Hai s─â ├Äncepem ├Ämpreun─â C─âl─âtoria Spre S─ân─âtate</h2>
          <p className="text-xl mb-8 leading-relaxed">
            ├Ämi doresc s─â te cunosc ╚Öi s─â ├«n╚¢eleg cum te pot ajuta s─â ├«╚¢i atingi obiectivele de s─ân─âtate 
            ╚Öi bun─âstare. Programeaz─â o consulta╚¢ie ╚Öi s─â discut─âm despre nevoile tale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                Programeaz─â Consulta╚¢ia prin WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}


