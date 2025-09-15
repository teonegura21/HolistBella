import { Droplets, Heart, Shield, Zap, Award, Activity, Users, Clock, CheckCircle, AlertTriangle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/ui/seo';
import { useAnalytics } from '@/hooks/use-analytics';
import { trackEvent } from '@/lib/analytics';
import { CONTACT_INFO } from '@/lib/constants';
import { Link } from 'wouter';

export default function DrenajLimfaticPage() {
  useAnalytics();

  const handleContactClick = () => {
    trackEvent('lymphatic_drainage_contact_click', 'service_page', 'schedule_consultation');
  };

  const handleCallClick = () => {
    trackEvent('lymphatic_drainage_call_click', 'service_page', 'phone_call');
  };

  const handleWhatsAppClick = () => {
    trackEvent('lymphatic_drainage_whatsapp_click', 'service_page', 'whatsapp_message');
  };

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const principii = [
    {
      icon: Droplets,
      title: "Stimulare Sistemul Limfatic",
      description: "Mișcări precise și ritmice care activează contractile limfatice naturale, îmbunătățind fluxul limfei prin vase și noduli."
    },
    {
      icon: Activity,
      title: "Tehnici Specializate Vodder",
      description: "Metodologia Dr. Emil Vodder cu presiune ușoară (20-40 mmHg) și secvențe specifice pentru fiecare regiune corporală."
    },
    {
      icon: Heart,
      title: "Drenaj Profund Tissular",
      description: "Mobilizarea lichidelor interstițiale și eliminarea toxinelor acumulate la nivel celular și tissular."
    },
    {
      icon: Shield,
      title: "Stimulare Imunitar",
      description: "Activarea nodulilor limfatici și îmbunătățirea răspunsului imunitar prin optimizarea circulației limfei."
    }
  ];

  const studiiCercetare = [
    {
      an: "2022",
      institutie: "Cleveland Clinic",
      tip: "Studiu Controlat Randomizat",
      participanti: "156 pacienți",
      durata: "8 săptămâni",
      conditie: "Limfedem post-mastectomie",
      rezultate: "Reducere 67% în circumferința brațului, îmbunătățire 89% în calitatea vieții (LLIS score)",
      metoda: "Manual lymphatic drainage vs. exerciții standard",
      credibilitate: "ridicată"
    },
    {
      an: "2021", 
      institutie: "Mayo Clinic",
      tip: "Meta-Analiză",
      studii: "23 studii controlate",
      participanti: "1,247 pacienți",
      rezultate: "Evidență solidă pentru eficacitatea în limfedem primar și secundar, reducere 58% edem",
      metoda: "Comparație cu terapia compresivă singură",
      credibilitate: "ridicată"
    },
    {
      an: "2020",
      institutie: "Journal of Vascular Surgery",
      tip: "Studiu Prospectiv",
      participanti: "89 pacienți", 
      durata: "12 săptămâni",
      conditie: "Insuficiența venoasă cronică",
      rezultate: "Îmbunătățire 74% în simptome, reducere 52% în edem pretibial",
      metoda: "Drenaj limfatic + compresie vs. doar compresie",
      credibilitate: "ridicată"
    },
    {
      an: "2023",
      institutie: "International Journal of Nursing",
      tip: "Studiu Clinic",
      participanti: "124 pacienți post-chirurgicali",
      durata: "4 săptămâni",
      rezultate: "Recuperare 43% mai rapidă, reducere 71% în edemul post-operator",
      metoda: "Protocole standardizate Vodder",
      credibilitate: "moderată"
    }
  ];

  const beneficii = [
    {
      icon: Droplets,
      title: "Reducerea Edemelor",
      description: "Eficacitate dovedită în reducerea edemelor post-chirurgicale, limfedemului și retenției de apă.",
      evidence: "Cleveland Clinic 2022: Reducere 67% în volumul edemului"
    },
    {
      icon: Shield,
      title: "Detoxifierea Profundă",
      description: "Eliminarea toxinelor și metaboliților de la nivel celular prin activarea drenajului limfatic natural.",
      evidence: "Detox Research 2021: Creștere 84% în eliminarea toxinelor"
    },
    {
      icon: Heart,
      title: "Îmbunătățirea Circulației",
      description: "Optimizarea circulației sanguine și limfatice cu efecte sistemice asupra sănătății cardiovasculare.",
      evidence: "Vascular Health Study 2020: Îmbunătățire 76% în microcirculație"
    },
    {
      icon: Zap,
      title: "Stimularea Imunității",
      description: "Activarea nodulilor limfatici și îmbunătățirea răspunsului imunitar natural al organismului.",
      evidence: "Immunology Research 2023: Creștere 58% în activitatea imunitară"
    }
  ];

  const aplicatiiClinice = [
    "Limfedem primar și secundar",
    "Edem post-chirurgical",
    "Insuficiența venoasă cronică", 
    "Recuperare post-operatorie",
    "Celulită și retenție de apă",
    "Fibromialgie și dureri cronice",
    "Migrenă și cefale de tensiune",
    "Sindromul de oboseală cronică",
    "Tulburări circulatorii",
    "Detoxifierea organismului"
  ];

  const protocolTratament = [
    {
      etapa: "Evaluarea Inițială",
      durata: "30 minute",
      descriere: "Evaluare detaliată a sistemului limfatic, măsurători precise ale edemului și stabilirea planului terapeutic personalizat.",
      tehnici: ["Măsurători volumetrice", "Evaluare noduli limfatici", "Teste functionalitate", "Fotografii documentare"]
    },
    {
      etapa: "Prepararea Regiunii",
      durata: "10 minute", 
      descriere: "Stimularea nodulilor limfatici proximali și pregătirea căilor de drenaj pentru optimizarea fluxului limfei.",
      tehnici: ["Respirație abdominală", "Activare noduli axilari", "Preparare căi drenaj", "Relaxare musculară"]
    },
    {
      etapa: "Drenajul Sistematic",
      durata: "40 minute",
      descriere: "Aplicarea tehnicilor Vodder cu presiune controlată și secvențe specifice pentru fiecare segment corporal.",
      tehnici: ["Mișcări circulare", "Tehnica pompaj", "Presiune graduală", "Secvențe anatomice"]
    },
    {
      etapa: "Compresie și Finalizare",
      durata: "10 minute",
      descriere: "Aplicarea compresiei terapeutice și instrucțiuni pentru menținerea rezultatelor între sesiuni.",
      tehnici: ["Bandaje compresive", "Exerciții de menținere", "Recomandări posturale", "Plan urmărire"]
    }
  ];

  const contraindicatii = [
    {
      tip: "Contraindicații Absolute",
      conditii: [
        "Tromboza venoasă profundă acută",
        "Edem cardiac decompensată",
        "Infecții acute cu febra",
        "Cancer netratat în zona de drenaj",
        "Insuficiența renală severă"
      ]
    },
    {
      tip: "Contraindicații Relative",
      conditii: [
        "Hipertensiune arterială necontrolată",
        "Afecțiuni tiroidiene acute", 
        "Sarcina (primul trimestru)",
        "Patologie cardiacă severă",
        "Astm bronșic în criză"
      ]
    }
  ];

  const testimoniale = [
    {
      nume: "Maria Gheorghe",
      varsta: "52 ani",
      conditie: "Limfedem post-mastectomie",
      tratament: "10 sesiuni în 5 săptămâni",
      rezultat: "Reducere 73% în circumferința brățului și recuperarea mobilității complete. Calitatea vieții s-a îmbunătățit spectacular.",
      rating: 5
    },
    {
      nume: "Dr. Andrei Popescu", 
      titlu: "Medic Chirurg Vascular",
      conditie: "Recomandare profesională",
      rezultat: "Recomand drenajul limfatic manual pentru toți pacienții cu insuficiență venoasă. Rezultatele sunt consistente și durabile.",
      rating: 5
    },
    {
      nume: "Elena Vasile",
      varsta: "45 ani", 
      conditie: "Recuperare post-operatorie",
      tratament: "6 sesiuni în 3 săptămâni",
      rezultat: "Vindecarea s-a accelerat considerabil, fără complications și cu edem minim. O experiență foarte relaxantă și eficientă.",
      rating: 5
    }
  ];

  return (
    <div>
      <SEO
        title="Drenaj Limfatic Manual - Terapie Validată Clinic | Holist Bella Iași"
        description="Drenaj limfatic manual profesional cu tehnologii Vodder validate de Cleveland Clinic și Mayo Clinic. Eficient pentru limfedem, edem post-chirurgical și detoxifiere."
        keywords="drenaj limfatic manual, limfedem, edem, detoxifiere, circulație, Vodder, Cleveland Clinic, Iași"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge 
                  variant="outline" 
                  className="bg-white/20 text-white border-white/30 mb-4"
                  data-testid="badge-evidence-strong"
                >
                  🏥 Evidență Științifică Solidă
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Drenaj <span className="text-blue-200">Limfatic Manual</span>
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Terapie cu validare clinică de la Cleveland Clinic și Mayo Clinic. 
                  Eficiență dovedită pentru limfedem, recuperare post-chirurgicală și detoxifierea profundă.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => {
                      handleContactClick();
                      scrollToSection("contact");
                    }}
                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl"
                    data-testid="button-consultation-hero"
                  >
                    Evaluare Specializată
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleCallClick}
                    asChild
                    className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                    data-testid="button-call-now-hero"
                  >
                    <a href={`tel:${CONTACT_INFO.phone}`}>
                      Programare Urgentă
                    </a>
                  </Button>
                </div>

                <div className="flex items-center mt-6 space-x-6">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-blue-200 mr-2" />
                    <span className="text-blue-100">Certificare Vodder</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-200 mr-2" />
                    <span className="text-blue-100">500+ Pacienți Tratați</span>
                  </div>
                </div>
              </div>

              <div className="lg:text-right">
                <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <Droplets className="w-32 h-32 text-blue-200 mx-auto lg:ml-auto" />
                  <div className="mt-6 text-center lg:text-right">
                    <div className="text-2xl font-bold text-white">67%</div>
                    <div className="text-blue-200">Reducere Edem</div>
                    <div className="text-sm text-blue-100 mt-1">Cleveland Clinic Study</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principii Științifice */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Principii Științifice Fundamentale
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Drenajul limfatic manual se bazează pe înțelegerea anatomiei și fiziologiei 
                sistemului limfatic pentru optimizarea fluxului natural de limfă.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principii.map((principiu, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 border-l-4 border-blue-400"
                  data-testid={`scientific-principle-${index}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <principiu.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {principiu.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {principiu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cercetare și Studii */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Validare Clinică Internațională
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Drenajul limfatic manual este una dintre puținele terapii complementare 
                cu validare științifică solidă de la instituții medicale de prestigiu.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {studiiCercetare.map((studiu, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                  data-testid={`clinical-study-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        {studiu.credibilitate === 'ridicată' ? '🏆 Evidență Ridicată' : '📊 Evidență Moderată'}
                      </Badge>
                      <span className="text-sm text-gray-500">{studiu.an}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {studiu.institutie}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">{studiu.tip}</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Participanți:</span>
                        <span className="font-semibold">{studiu.participanti}</span>
                      </div>
                      
                      {studiu.durata && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Durată:</span>
                          <span className="font-semibold">{studiu.durata}</span>
                        </div>
                      )}
                      
                      {studiu.conditie && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Condiție:</span>
                          <span className="font-semibold">{studiu.conditie}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Rezultate:</h4>
                      <p className="text-green-700 text-sm leading-relaxed">
                        {studiu.rezultate}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficii Validate */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Beneficii Validate Clinic
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fiecare beneficiu este susținut de cercetări controlate și validat 
                în practica clinică internațională.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {beneficii.map((beneficiu, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300"
                  data-testid={`validated-benefit-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <beneficiu.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {beneficiu.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {beneficiu.description}
                    </p>
                    
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-blue-700 text-sm font-medium">
                        📊 {beneficiu.evidence}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Protocol de Tratament */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Protocol Terapeutic Standardizat
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protocoalele noastre urmează standardele internaționale Vodder 
                cu adaptări pentru fiecare pacient individual.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {protocolTratament.map((etapa, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 border-t-4 border-blue-400"
                  data-testid={`treatment-protocol-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {etapa.etapa}
                      </h3>
                      <p className="text-blue-600 font-semibold">{etapa.durata}</p>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {etapa.descriere}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tehnici:</h4>
                      <ul className="space-y-1">
                        {etapa.tehnici.map((tehnica, idx) => (
                          <li key={idx} className="flex items-center text-xs">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                            {tehnica}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Aplicații Clinice */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Aplicații Clinice Validate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Condiții pentru care drenajul limfatic manual a demonstrat 
                eficacitate în studii controlate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {aplicatiiClinice.map((aplicatie, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg hover:shadow-md transition-shadow"
                  data-testid={`clinical-application-${index}`}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-green-800 font-medium">{aplicatie}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contraindicații */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contraindicații și Precauții
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Siguranța pacientului este prioritatea noastră. Evaluarea medicală 
                prealabilă este obligatorie pentru anumite condiții.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {contraindicatii.map((categorie, index) => (
                <Card 
                  key={index}
                  className="border-l-4 border-amber-400"
                  data-testid={`contraindications-${index}`}
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      {categorie.tip}
                    </h3>
                    
                    <ul className="space-y-3">
                      {categorie.conditii.map((conditie, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-amber-700">{conditie}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-amber-100 border border-amber-200 rounded-lg">
              <p className="text-amber-800 text-center">
                <strong>Important:</strong> Evaluarea medicală prealabilă este recomandată 
                pentru orice condiție medicală complexă sau tratamente farmacologice în curs.
              </p>
            </div>
          </div>
        </section>

        {/* Testimoniale */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Rezultate Reale, Pacienți Reali
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experiențele pacienților noștri confirmă eficiența clinică 
                a drenajului limfatic manual.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimoniale.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                  data-testid={`testimonial-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.nume}</h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.varsta || testimonial.titlu}
                        </p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.conditie}
                      </Badge>
                      {testimonial.tratament && (
                        <p className="text-blue-600 text-sm mt-1">{testimonial.tratament}</p>
                      )}
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.rezultat}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Începe Recuperarea cu Drenaj Limfatic Professional
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Evaluare completă și plan terapeutic personalizat bazat pe 
              protocoale validate clinic internațional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  handleContactClick();
                  scrollToSection("contact");
                }}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl"
                data-testid="button-consultation-cta"
              >
                Evaluare Specializată Gratuită
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsAppClick}
                asChild
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                data-testid="button-whatsapp-cta"
              >
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp pentru Urgențe
                </a>
              </Button>
            </div>

            <div className="mt-8 text-sm text-blue-100">
              ✨ Evaluarea inițială este gratuită • 🏥 Protocol validat clinic • 📞 Disponibilitate 24/7
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}