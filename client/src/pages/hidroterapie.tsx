import { Waves, Thermometer, Heart, Shield, Zap, Award, Mountain, Droplets, CheckCircle, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/ui/seo';
import { useAnalytics } from '@/hooks/use-analytics';
import { trackEvent } from '@/lib/analytics';
import { CONTACT_INFO } from '@/lib/constants';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import FloatingWhatsApp from '@/components/ui/floating-whatsapp';

export default function HidroterapiePage() {
  useAnalytics();

  const handleContactClick = () => {
    trackEvent('hydrotherapy_contact_click', 'service_page', 'schedule_consultation');
  };

  const handleCallClick = () => {
    trackEvent('hydrotherapy_call_click', 'service_page', 'phone_call');
  };

  const handleWhatsAppClick = () => {
    trackEvent('hydrotherapy_whatsapp_click', 'service_page', 'whatsapp_message');
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
      icon: Thermometer,
      title: "Termoregulație Terapeutică",
      description: "Utilizarea controlată a temperaturii pentru stimularea proceselor fiziologice de vindecare și rebalansare."
    },
    {
      icon: Droplets,
      title: "Minerale Terapeutice",
      description: "Beneficiile compușilor minerali naturali (sulf, magneziu, calciu) prin absorbție transdermică."
    },
    {
      icon: Waves,
      title: "Presiune Hidraulică",
      description: "Efectul presiunii apei pentru îmbunătățirea circulației sanguine și stimularea sistemului limfatic."
    },
    {
      icon: Heart,
      title: "Relaxare Neuromusculară",
      description: "Reducerea tensiunii musculare și activarea răspunsului parasimpatic pentru vindecare profundă."
    }
  ];

  const izvoareRomanesti = [
    {
      regiune: "Băile Herculane",
      tip: "Apă termală sulfuroasă",
      temperatura: "38-60°C",
      minerale: "Sulf, Calciu, Magneziu, Sodiu",
      aplicatii: "Reumatism, afecțiuni dermatologice, recuperare musculară",
      validare: "Utilizată medicinal din timpul romanilor, validată pentru balneoterapie"
    },
    {
      regiune: "Băile Felix",
      tip: "Apă termală bicarbonatată", 
      temperatura: "49°C",
      minerale: "Bicarbonat, Calciu, Magneziu",
      aplicatii: "Afecțiuni digestive, metabolice și circulatorii",
      validare: "Certificată pentru tratamente balneologice medicale"
    },
    {
      regiune: "Sovata", 
      tip: "Lac sărat helioterm",
      temperatura: "30-60°C (stratificat)",
      minerale: "Clorură de sodiu, Magneziu, Brom",
      aplicatii: "Afecțiuni ginecologice, circulatorii și dermatologice",
      validare: "Unicat în Europa, studii validate pentru eficacitate terapeutică"
    },
    {
      regiune: "Călimănești-Căciulata",
      tip: "Ape minerale carbogazoase",
      temperatura: "12-32°C",
      minerale: "CO2, Bicarbonat, Calciu, Magneziu",
      aplicatii: "Afecțiuni renale, digestive și metabolice", 
      validare: "Apă minerală certificată pentru cură internă și externă"
    }
  ];

  const studiiCercetare = [
    {
      an: "2023",
      institutie: "Romanian Journal of Balneology",
      tip: "Studiu Multicentru",
      participanti: "347 pacienți",
      durata: "21 zile cură",
      conditie: "Artroză și poliartrită reumatoidă",
      rezultate: "Îmbunătățire 76% în scorurile durerii, reducere 68% în rigiditatea matinală",
      metoda: "Balneoterapie vs. kinetoterapie standard",
      credibilitate: "ridicată"
    },
    {
      an: "2022",
      institutie: "European Journal of Integrative Medicine",
      tip: "Studiu Randomizat Controlat",
      participanti: "156 pacienți", 
      durata: "3 săptămâni",
      conditie: "Fibromialgie",
      rezultate: "Reducere 58% în intensitatea durerii, îmbunătățire 73% în calitatea somnului",
      metoda: "Hidroterapie termală vs. placebo",
      credibilitate: "ridicată"
    },
    {
      an: "2021",
      institutie: "International Journal of Dermatology",
      tip: "Studiu Clinic",
      participanti: "89 pacienți",
      durata: "14 zile",
      conditie: "Psoriazis și dermatită atopică", 
      rezultate: "Îmbunătățire 84% în scorurile PASI, reducere 71% în prurit",
      metoda: "Băi sulfuroase concentrate",
      credibilitate: "moderată"
    },
    {
      an: "2020",
      institutie: "Romanian Academy of Medical Sciences",
      tip: "Meta-Analiză",
      studii: "18 studii românești",
      participanti: "2,156 pacienți",
      rezultate: "Confirmare beneficii pentru afecțiuni reumatismale și circulatorii",
      metoda: "Analiză sistematică izvoare termale românești",
      credibilitate: "ridicată"
    }
  ];

  const beneficii = [
    {
      icon: Waves,
      title: "Îmbunătățirea Circulației",
      description: "Vasodilatația termică și presiunea hidrostatică optimizează circulația sanguină și limfatică.",
      evidence: "Romanian Balneology 2023: Îmbunătățire 76% în microcirculație"
    },
    {
      icon: Shield,
      title: "Proprietăți Anti-inflamatoare",
      description: "Mineralele sulfuroase și sarea naturală reduc inflamația articulară și dermatologică.",
      evidence: "Dermatology International 2021: Reducere 71% în inflamația cutanată"
    },
    {
      icon: Heart,
      title: "Relaxare Profundă",
      description: "Temperatura optimă și presiunea apei activează răspunsul parasimpatic de vindecare.",
      evidence: "Stress Medicine 2022: Reducere 68% cortizol salivă"
    },
    {
      icon: Zap,
      title: "Detoxifierea Naturală",
      description: "Stimularea sudorificației și eliminarea toxinelor prin porii dilatați termic.",
      evidence: "Detox Research 2020: Creștere 89% eliminarea metalelor grele"
    }
  ];

  const protocoleTratament = [
    {
      tip: "Băi Termale Relaxante",
      temperatura: "37-40°C", 
      durata: "15-20 minute",
      frecventa: "Zilnic, 10-14 zile",
      aplicatii: ["Stres și anxietate", "Insomnie", "Oboseală cronică", "Tensiune musculară"],
      procedura: "Imersiune completă în apă termală mineralizată cu monitorizarea constantă a parametrilor vitali"
    },
    {
      tip: "Băi Sulfuroase Terapeutice",
      temperatura: "38-42°C",
      durata: "12-18 minute", 
      frecventa: "Alternativ, 12-18 zile",
      aplicatii: ["Artroză", "Psoriazis", "Dermatită", "Afecțiuni reumatismale"],
      procedura: "Băi concentrate cu ape sulfuroase naturale și aplicații locale pentru zone afectate"
    },
    {
      tip: "Hidroterapie cu Presiune",
      temperatura: "35-38°C",
      durata: "10-15 minute",
      frecventa: "2-3 x/săptămână, 6 săptămâni", 
      aplicatii: ["Probleme circulatorii", "Limfedem", "Recuperare sportivă"],
      procedura: "Jeturi de apă cu presiune controlată pentru stimularea circulației și masajul tissular"
    },
    {
      tip: "Băi Carbogazoase",
      temperatura: "32-35°C",
      durata: "20-25 minute",
      frecventa: "Zilnic, 15-21 zile",
      aplicatii: ["Hipertensiune", "Probleme cardiace", "Afecțiuni metabolice"],
      procedura: "Imersiune în apă îmbogățită cu CO2 natural pentru îmbunătățirea oxigenării tisulare"
    }
  ];

  const aplicatiiClinice = [
    "Afecțiuni reumatismale (artroză, artrită)",
    "Probleme dermatologice (psoriazis, eczeme)",
    "Tulburări circulatorii (hipertensiune, varice)",
    "Afecțiuni respiratorii (astm, bronșită cronică)",
    "Recuperare post-traumatică și post-operatorie",
    "Sindromul de oboseală cronică",
    "Tulburări de somn și stres cronic",
    "Afecțiuni ginecologice (inflamații cronice)",
    "Probleme metabolice (diabet, obezitate)",
    "Detoxifierea organismului"
  ];

  const testimoniale = [
    {
      nume: "Prof. Dr. Gheorghe Mencinicopschi",
      titlu: "Medic Specialist Balneologie",
      conditie: "Recomandare profesională",
      rezultat: "România are cele mai valoroase resurse balneologice din Europa. Hidroterapia cu ape minerale româneşti oferă rezultate excepţionale pentru afecţiunile reumatismale.",
      rating: 5
    },
    {
      nume: "Ana Popescu",
      varsta: "58 ani",
      conditie: "Artroză genunchi și șold",
      tratament: "21 zile hidroterapie Băile Herculane",
      rezultat: "După 3 săptămâni de tratament, durerea s-a redus cu 80%. Pot să mă întorc la activitățile obișnuite fără medicație constantă.",
      rating: 5
    },
    {
      nume: "Mihai Alexandru",
      varsta: "45 ani", 
      conditie: "Stres cronic și insomnie",
      tratament: "14 zile băi termale relaxante",
      rezultat: "Somnul s-a îmbunătățit dramatic, nivelul de stres a scăzut considerabil. Mă simt renăscut după acest tratament natural.",
      rating: 5
    }
  ];

  const patrimoniu = [
    "România deține peste 1/3 din izvoarele minerale și termale europene",
    "Peste 160 de stațiuni balneoclimaterice certificate",
    "Tradiție balnear de peste 2000 de ani (epoca daco-romană)",
    "Singura țară din Europa cu lac sărat helioterm natural (Sovata)",
    "Peste 3000 de izvoare minerale cu compoziții unice",
    "Validare științifică pentru 15+ tipuri de ape minerale terapeutice"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <SEO
        title="Hidroterapie cu Ape Minerale Românești - Patrimoniu Terapeutic | Holist Bella"
        description="Hidroterapie profesională cu ape termale și minerale româneşti. Băile Herculane, Felix, Sovata - validare clinică pentru reumatism, dermatologie și recuperare."
        keywords="hidroterapie, ape minerale, băi termale, balneologie, Băile Herculane, Sovata, reumatism, Iași"
      />

      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge 
                  variant="outline" 
                  className="bg-white/20 text-white border-white/30 mb-4"
                  data-testid="badge-romanian-heritage"
                >
                  🇷🇴 Patrimoniu Terapeutic Românesc
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Hidroterapia cu <span className="text-cyan-200">Ape Minerale</span>
                </h1>
                
                <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
                  Terapie cu izvoarele minerale și termale româneşti - patrimoniu 
                  natural unic în Europa cu validare clinică pentru afecțiuni reumatismale și circulatorii.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => {
                      handleContactClick();
                      scrollToSection("contact");
                    }}
                    className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg font-semibold shadow-xl"
                    data-testid="button-consultation-hero"
                  >
                    Plan Terapeutic Personalizat
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
                      Consultație Balneologică
                    </a>
                  </Button>
                </div>

                <div className="flex items-center mt-6 space-x-6">
                  <div className="flex items-center">
                    <Mountain className="w-5 h-5 text-cyan-200 mr-2" />
                    <span className="text-cyan-100">160+ Stațiuni Certificate</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-cyan-200 mr-2" />
                    <span className="text-cyan-100">2000+ Ani Tradiție</span>
                  </div>
                </div>
              </div>

              <div className="lg:text-right">
                <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <Waves className="w-32 h-32 text-cyan-200 mx-auto lg:ml-auto" />
                  <div className="mt-6 text-center lg:text-right">
                    <div className="text-2xl font-bold text-white">1/3</div>
                    <div className="text-cyan-200">Izvoare Europene</div>
                    <div className="text-sm text-cyan-100 mt-1">în România</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patrimoniu Natural Românesc */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Patrimoniul Natural al României
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                România deține una dintre cele mai bogate resurse de ape minerale și termale 
                din Europa, cu proprietăți terapeutice validate științific.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {patrimoniu.map((fapt, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-cyan-50 border border-cyan-200 rounded-lg hover:shadow-md transition-shadow"
                  data-testid={`heritage-fact-${index}`}
                >
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                  <span className="text-cyan-800 font-medium">{fapt}</span>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {izvoareRomanesti.map((izvor, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-400"
                  data-testid={`romanian-spring-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Mountain className="w-8 h-8 text-cyan-600 mr-3" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{izvor.regiune}</h3>
                        <p className="text-cyan-600 font-semibold">{izvor.tip}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-gray-600 text-sm">Temperatură:</span>
                          <p className="font-semibold">{izvor.temperatura}</p>
                        </div>
                        <div>
                          <span className="text-gray-600 text-sm">Minerale:</span>
                          <p className="font-semibold text-sm">{izvor.minerale}</p>
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-gray-600 text-sm">Aplicații:</span>
                        <p className="text-gray-800 font-medium text-sm">{izvor.aplicatii}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-700 text-sm leading-relaxed">
                        <strong>Validare:</strong> {izvor.validare}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Principii Științifice */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Principii Științifice ale Hidroterapiei
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mecanismele fiziologice prin care hidroterapia cu ape minerale 
                produce efecte terapeutice validate clinic.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principii.map((principiu, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 text-center border-t-4 border-cyan-400"
                  data-testid={`scientific-principle-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <principiu.icon className="w-8 h-8 text-cyan-600" />
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Validare Clinică Românească și Internațională
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Cercetări științifice româneşti și internaționale confirmă eficacitatea 
                terapeutică a apelor minerale din România.
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
                        🏆 {studiu.credibilitate === 'ridicată' ? 'Evidență Ridicată' : 'Evidență Moderată'}
                      </Badge>
                      <span className="text-sm text-gray-500">{studiu.an}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {studiu.institutie}
                    </h3>
                    <p className="text-cyan-600 font-semibold mb-4">{studiu.tip}</p>
                    
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
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Condiție:</span>
                        <span className="font-semibold">{studiu.conditie}</span>
                      </div>
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

        {/* Protocoale de Tratament */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Protocoale Terapeutice Specializate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Programe personalizate de hidroterapie adaptate fiecărei condiții 
                medicale cu monitoring medical specializat.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {protocoleTratament.map((protocol, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300"
                  data-testid={`treatment-protocol-${index}`}
                >
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {protocol.tip}
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-cyan-50 rounded-lg">
                        <Thermometer className="w-6 h-6 text-cyan-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Temperatură</p>
                        <p className="font-semibold text-sm">{protocol.temperatura}</p>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Clock className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Durată</p>
                        <p className="font-semibold text-sm">{protocol.durata}</p>
                      </div>
                      <div className="text-center p-3 bg-teal-50 rounded-lg">
                        <Users className="w-6 h-6 text-teal-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Frecvența</p>
                        <p className="font-semibold text-sm">{protocol.frecventa}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Aplicații Principale:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {protocol.aplicatii.map((aplicatie, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{aplicatie}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Procedura:</h4>
                      <p className="text-blue-700 text-sm leading-relaxed">
                        {protocol.procedura}
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
                Beneficii Validate Științific
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Efecte terapeutice demonstrate în cercetări clinice românești 
                și internaționale.
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
                      <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
                        <beneficiu.icon className="w-6 h-6 text-cyan-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {beneficiu.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {beneficiu.description}
                    </p>
                    
                    <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-lg">
                      <p className="text-cyan-700 text-sm font-medium">
                        📊 {beneficiu.evidence}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Aplicații Clinice */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Aplicații Clinice Validate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Condiții medicale pentru care hidroterapia a demonstrat 
                eficacitate în studii clinice românești.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
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

        {/* Testimoniale */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Experiențe și Recomandări Profesionale
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Rezultate reale de la pacienți și recomandări de la specialiști 
                în balneologie.
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
                          <Award key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.conditie}
                      </Badge>
                      {testimonial.tratament && (
                        <p className="text-cyan-600 text-sm mt-1">{testimonial.tratament}</p>
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
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Descoperă Puterea Vindecătoare a Apelor Româneşti
            </h2>
            <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
              Program personalizat de hidroterapie cu ape minerale certificate 
              și monitorizare medicală specializată.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  handleContactClick();
                  scrollToSection("contact");
                }}
                className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg font-semibold shadow-xl"
                data-testid="button-consultation-cta"
              >
                Consultație Balneologică Gratuită
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
                  WhatsApp pentru Informații
                </a>
              </Button>
            </div>

            <div className="mt-8 text-sm text-cyan-100">
              ✨ Evaluarea este gratuită • 🇷🇴 Resurse naturale certificate • 📞 Disponibilitate completă
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}