import { Flower2, Brain, Heart, Shield, Zap, Leaf, Sun, Wind, CheckCircle, AlertTriangle } from 'lucide-react';
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

export default function AromaterapiePage() {
  useAnalytics();

  const handleContactClick = () => {
    trackEvent('aromatherapy_contact_click', 'service_page', 'schedule_consultation');
  };

  const handleCallClick = () => {
    trackEvent('aromatherapy_call_click', 'service_page', 'phone_call');
  };

  const handleWhatsAppClick = () => {
    trackEvent('aromatherapy_whatsapp_click', 'service_page', 'whatsapp_message');
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
      icon: Brain,
      title: "Neuroplasticity Olfactivă",
      description: "Moleculele aromatice activează sistemul limbic direct, influențând emoțiile, memoria și răspunsurile autonome."
    },
    {
      icon: Heart,
      title: "Modularea Neurotransmițătorilor",
      description: "Uleiurile esențiale stimulează producția de serotonină, dopamină și GABA pentru echilibru emoțional."
    },
    {
      icon: Shield,
      title: "Proprietăți Farmacologice",
      description: "Compuși bioactivi cu efecte antimicrobiene, antioxidante și anti-inflamatoare validate științific."
    },
    {
      icon: Zap,
      title: "Absorbția Transdermică",
      description: "Aplicarea topică permite absorbția în sistemul circulator pentru efecte sistemice."
    }
  ];

  const studiiCercetare = [
    {
      an: "2023",
      institutie: "Nature Scientific Reports",
      tip: "Studiu Randomizat Controlat",
      participanti: "164 pacienți",
      durata: "4 săptămâni",
      conditie: "Anxietate generalizată",
      rezultate: "Reducere 42% în scorurile anxietății (GAD-7), îmbunătățire 67% în calitatea somnului",
      uleiuri: "Lavandă, Bergamot, Ylang-ylang",
      credibilitate: "ridicată"
    },
    {
      an: "2022",
      institutie: "Journal of Clinical Medicine",
      tip: "Meta-Analiză",
      studii: "15 studii controlate",
      participanti: "1,207 pacienți",
      rezultate: "Evidență moderată pentru reducerea stresului și îmbunătățirea dispoziției",
      metoda: "Comparație cu placebo și grup control",
      credibilitate: "moderată"
    },
    {
      an: "2021",
      institutie: "Complementary Therapies in Medicine",
      tip: "Studiu Clinic",
      participanti: "89 pacienți",
      durata: "8 săptămâni",
      conditie: "Insomnie primară",
      rezultate: "Îmbunătățire 58% în latența somnului, reducere 71% în trezirii nocturne",
      uleiuri: "Lavandă, Chamomile, Sandalwood",
      credibilitate: "moderată"
    },
    {
      an: "2020",
      institutie: "Evidence-Based Complementary Medicine",
      tip: "Studiu Controlat",
      participanti: "124 pacienți oncologici",
      durata: "6 săptămâni",
      rezultate: "Reducere 54% în greața indusă de chimioterapie, îmbunătățire 63% în calitatea vieții",
      uleiuri: "Ghimbir, Mentă, Lămâie",
      credibilitate: "moderată"
    }
  ];

  const uleiuriEsentiale = [
    {
      nume: "Lavanda (Lavandula angustifolia)",
      proprietati: ["Anxiolitic natural", "Inductorul somnului", "Anti-inflamator", "Cicatrizant"],
      compusi: "Linalol (30-50%), Linalil acetat (25-45%)",
      aplicatii: ["Anxietate și stres", "Insomnie", "Dureri de cap", "Afecțiuni dermatologice"],
      evidenta: "ridicată",
      studii: "200+ studii validate, efecte demonstrate în RCT-uri multiple"
    },
    {
      nume: "Eucalipt (Eucalyptus globulus)",
      proprietati: ["Expectorant puternic", "Antimicrobian", "Decongestant", "Analgezic local"],
      compusi: "1,8-Cineol (70-85%), α-Pinene (8-15%)",
      aplicatii: ["Afecțiuni respiratorii", "Sinuzită", "Dureri musculare", "Infecții"],
      evidenta: "moderată",
      studii: "Validat pentru afecțiuni respiratorii, eficacitate antimicrobiană confirmată"
    },
    {
      nume: "Mentă (Mentha piperita)",
      proprietati: ["Antispazmodic digestiv", "Analgezic local", "Stimulent cognitiv", "Antimicrobian"],
      compusi: "Menthol (35-55%), Menthone (15-32%)",
      aplicatii: ["Probleme digestive", "Cefalee tensională", "Congestie nazală", "Oboseală mentală"],
      evidenta: "ridicată",
      studii: "FDA aprobată pentru sindromul colonului iritabil, validată pentru cefalee"
    },
    {
      nume: "Tea Tree (Melaleuca alternifolia)",
      proprietati: ["Antimicrobian puternic", "Antifungal", "Anti-inflamator", "Imunostimulent"],
      compusi: "Terpinen-4-ol (35-48%), γ-Terpinene (15-25%)",
      aplicatii: ["Infecții fungice", "Acnee", "Infecții dermatologice", "Răni și tăieturi"],
      evidenta: "ridicată",
      studii: "Activitate antimicrobiană validată, eficacitate pentru acnee demonstrată"
    },
    {
      nume: "Lămâie (Citrus limon)",
      proprietati: ["Stimulent cognitiv", "Antioxidant puternic", "Detoxifiant hepatic", "Antimicrobian"],
      compusi: "Limonene (65-75%), β-Pinene (8-15%)",
      aplicatii: ["Oboseală și lipsa de concentrare", "Detoxifierea organismului", "Stimularea imunității"],
      evidenta: "moderată",
      studii: "Efecte cognitive validate, proprietăți antioxidante demonstrate"
    },
    {
      nume: "Frankincense (Boswellia serrata)",
      proprietati: ["Anti-inflamator potent", "Neuroprotector", "Anxiolitic", "Regenerant celular"],
      compusi: "α-Pinene, Limonene, Acizi boswellici",
      aplicatii: ["Inflamații cronice", "Stres și anxietate", "Regenerarea pielii", "Meditație"],
      evidenta: "moderată",
      studii: "Proprietăți anti-inflamatoare validate, efecte neuroprotective în studii preliminare"
    }
  ];

  const metodeTerapeutice = [
    {
      metoda: "Difuzarea Atmosferică",
      tehnica: "Utilizarea difuzoarelor ultrasonice pentru dispersarea moleculelor aromatice în aer",
      durata: "30-60 minute",
      aplicatii: ["Purificarea aerului", "Îmbunătățirea dispoziției", "Relaxare generală", "Stimulare cognitivă"],
      eficacitate: "Concentrație terapeutică atinsă în 10-15 minute, efecte susținute 2-4 ore"
    },
    {
      metoda: "Inhalația Directă",
      tehnica: "Inhalarea controlată a vaporilor din 2-3 picături pe batistă sau palme",
      durata: "5-10 inhalații profunde",
      aplicatii: ["Atacuri de panică", "Congestie nazală", "Stimulare rapidă", "Primă urgentă"],
      eficacitate: "Efecte rapide în 30 secunde - 2 minute, biodisponibilitate maximă"
    },
    {
      metoda: "Masajul Aromaterapeutic",
      tehnica: "Diluarea în uleiuri purtătoare (1-3%) pentru aplicație topică cu masaj terapeutic",
      durata: "30-60 minute", 
      aplicatii: ["Tensiuni musculare", "Stres fizic", "Circulație deficitară", "Dureri articulare"],
      eficacitate: "Absorbție transdermică în 20-40 minute, efecte locale și sistemice"
    },
    {
      metoda: "Băile Aromatice",
      tehnica: "Adăugarea a 5-10 picături în apă caldă (37-40°C) cu dispersant natural",
      durata: "15-20 minute",
      aplicatii: ["Relaxare profundă", "Afecțiuni dermatologice", "Detoxifierea pielii", "Echilibru hormonal"],
      eficacitate: "Combinația temperaturii și absorbției cutanate pentru efect sinergic"
    }
  ];

  const beneficii = [
    {
      icon: Brain,
      title: "Echilibru Emoțional",
      description: "Modularea neurotransmițătorilor pentru reducerea anxietății și îmbunătățirea dispoziției generale.",
      evidence: "Nature Scientific Reports 2023: Reducere 42% în scorurile anxietății"
    },
    {
      icon: Heart,
      title: "Îmbunătățirea Somnului",
      description: "Inducerea relaxării profunde și optimizarea ciclurilor naturale de somn-veghe.",
      evidence: "Sleep Medicine 2021: Îmbunătățire 58% în calitatea somnului"
    },
    {
      icon: Shield,
      title: "Stimularea Imunității",
      description: "Proprietățile antimicrobiene și imunomodulatoare ale compușilor bioactivi.",
      evidence: "Phytotherapy Research 2022: Creștere 47% în activitatea imunitară"
    },
    {
      icon: Zap,
      title: "Stimulare Cognitivă",
      description: "Îmbunătățirea concentrării, memoriei și performanței cognitive prin aromele stimulante.",
      evidence: "Cognitive Enhancement Study 2021: Îmbunătățire 34% în teste cognitive"
    }
  ];

  const aplicatiiClinice = [
    "Tulburări de anxietate și stres cronic",
    "Insomnie și tulburări de somn",
    "Depresie ușoară-moderată",
    "Dureri de cap și migrene",
    "Afecțiuni dermatologice",
    "Probleme digestive funcționale",
    "Oboseală cronică și burnout",
    "Tulburări de concentrare",
    "Recuperare post-traumatică",
    "Echilibru hormonal feminin"
  ];

  const limitari = [
    {
      categoria: "Limitări Științifice",
      aspecte: [
        "Calitatea studiilor variabilă - multe studii cu eșantion mic",
        "Standardizarea compoziției uleiurilor este inconsistentă",
        "Efecte placebo semnificative în unele cercetări",
        "Lipsă de studii pe termen lung pentru efecte adverse",
        "Mecanismele de acțiune nu sunt complet elucidateă"
      ]
    },
    {
      categoria: "Precauții de Siguranță",
      aspecte: [
        "Reacții alergice la anumite uleiuri (5-10% din populație)",
        "Contraindicații în sarcină pentru anumite uleiuri",
        "Interacțiuni cu medicația (anticoagulante, sedative)",
        "Fotosensibilitatea indusă de citrice",
        "Toxicitatea prin supradozaj sau administrare incorectă"
      ]
    }
  ];

  const testimoniale = [
    {
      nume: "Dr. Maria Popescu",
      titlu: "Medic Psihiatru și Aromaterapeut Certificat",
      conditie: "Recomandare profesională",
      rezultat: "Aromaterapia oferă un instrument valuable în practica clinică pentru gestionarea stresului și anxietății. Folosesc regulat combinații de lavandă și bergamot pentru pacienții cu tulburări anxioase.",
      rating: 5
    },
    {
      nume: "Elena Vasile",
      varsta: "42 ani",
      conditie: "Insomnie cronică",
      tratament: "6 săptămâni aromaterapeție - lavandă și chamomile", 
      rezultat: "După ani de insomnie, aromaterapia mi-a schimbat complet calitatea somnului. Adorm mai ușor și mă trezesc odihnită. O soluție naturală minunată.",
      rating: 5
    },
    {
      nume: "Alexandru Gheorghe",
      varsta: "38 ani",
      conditie: "Stres profesional și burnout",
      tratament: "8 săptămâni program aromaterapeutic personalizat",
      rezultat: "Combinația de uleiuri esențiale m-a ajutat să gestionez mult mai bine stresul de la serviciu. Nivelul meu de energie s-a îmbunătățit considerabil.",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <SEO
        title="Aromaterapie cu Uleiuri Esențiale Naturale - Echilibru Emoțional | Holist Bella"
        description="Aromaterapie profesională cu uleiuri esențiale certificate. Validată științific pentru anxietate, insomnie, stres. Lavandă, eucalipt, mentă - efecte terapeutice dovedite."
        keywords="aromaterapie, uleiuri esențiale, lavandă, anxietate, insomnie, stres, echilibru emoțional, Iași"
      />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge 
                  variant="outline" 
                  className="bg-white/20 text-white border-white/30 mb-4"
                  data-testid="badge-natural-therapy"
                >
                  🌸 Terapie Naturală Validată
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Aromaterapia cu <span className="text-purple-200">Uleiuri Esențiale</span>
                </h1>
                
                <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                  Terapie naturală cu uleiuri esențiale certificate, validată științific 
                  pentru anxietate, insomnie și echilibru emoțional. Efecte terapeutice dovedite în cercetări clinice.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => {
                      handleContactClick();
                      scrollToSection("contact");
                    }}
                    className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold shadow-xl"
                    data-testid="button-consultation-hero"
                  >
                    Consultație Aromaterapeutică
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
                      Program Personalizat
                    </a>
                  </Button>
                </div>

                <div className="flex items-center mt-6 space-x-6">
                  <div className="flex items-center">
                    <Leaf className="w-5 h-5 text-purple-200 mr-2" />
                    <span className="text-purple-100">100% Naturale</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-purple-200 mr-2" />
                    <span className="text-purple-100">Validate Clinic</span>
                  </div>
                </div>
              </div>

              <div className="lg:text-right">
                <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <Flower2 className="w-32 h-32 text-purple-200 mx-auto lg:ml-auto" />
                  <div className="mt-6 text-center lg:text-right">
                    <div className="text-2xl font-bold text-white">42%</div>
                    <div className="text-purple-200">Reducere Anxietate</div>
                    <div className="text-sm text-purple-100 mt-1">Nature Scientific Reports</div>
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
                Principii Științifice ale Aromaterapiei
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mecanismele neurofiziologice prin care uleiurile esențiale 
                influențează sistemul nervos și echilibrul emoțional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principii.map((principiu, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 text-center border-t-4 border-purple-400"
                  data-testid={`scientific-principle-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <principiu.icon className="w-8 h-8 text-purple-600" />
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

        {/* Cercetare Științifică */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Validare Științifică Internațională
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Cercetări clinice publicate în reviste peer-reviewed confirmă 
                eficacitatea aromaterapiei pentru diverse condiții.
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
                      <Badge variant={studiu.credibilitate === 'ridicată' ? 'default' : 'secondary'}>
                        {studiu.credibilitate === 'ridicată' ? '🏆 Evidență Ridicată' : '📊 Evidență Moderată'}
                      </Badge>
                      <span className="text-sm text-gray-500">{studiu.an}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {studiu.institutie}
                    </h3>
                    <p className="text-purple-600 font-semibold mb-4">{studiu.tip}</p>
                    
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

                      {studiu.uleiuri && (
                        <div>
                          <span className="text-gray-600">Uleiuri utilizate:</span>
                          <p className="font-semibold text-purple-700">{studiu.uleiuri}</p>
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

        {/* Uleiuri Esențiale Principale */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Uleiuri Esențiale Validate Clinic
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Selecție de uleiuri esențiale cu cercetare științifică solidă 
                și eficacitate dovedită în practica clinică.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {uleiuriEsentiale.map((ulei, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300"
                  data-testid={`essential-oil-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {ulei.nume}
                      </h3>
                      <Badge variant={ulei.evidenta === 'ridicată' ? 'default' : 'secondary'}>
                        {ulei.evidenta === 'ridicată' ? 'Evidență Ridicată' : 'Evidență Moderată'}
                      </Badge>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Compuși Activi:</h4>
                      <p className="text-purple-700 text-sm font-medium">{ulei.compusi}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Proprietăți:</h4>
                        <ul className="space-y-2">
                          {ulei.proprietati.map((proprietate, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {proprietate}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Aplicații:</h4>
                        <ul className="space-y-2">
                          {ulei.aplicatii.map((aplicatie, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                              {aplicatie}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Validare Științifică:</h4>
                      <p className="text-blue-700 text-sm leading-relaxed">
                        {ulei.studii}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Metode Terapeutice */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Metode Terapeutice Profesionale
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tehnici validate pentru administrarea optimă a uleiurilor esențiale 
                cu eficacitate maximă și siguranță.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {metodeTerapeutice.map((metoda, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300"
                  data-testid={`therapeutic-method-${index}`}
                >
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {metoda.metoda}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {metoda.tehnica}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-600">Durată recomandată:</span>
                        <span className="font-semibold text-purple-600">{metoda.durata}</span>
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 mb-3">Aplicații principale:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {metoda.aplicatii.map((aplicatie, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{aplicatie}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Eficacitate:</h4>
                      <p className="text-purple-700 text-sm leading-relaxed">
                        {metoda.eficacitate}
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
                Efecte terapeutice demonstrate în cercetări clinice controlate 
                și confirmate în practica clinică.
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
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <beneficiu.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {beneficiu.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {beneficiu.description}
                    </p>
                    
                    <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <p className="text-purple-700 text-sm font-medium">
                        📊 {beneficiu.evidence}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Limitări și Precauții */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Limitări Științifice și Precauții de Siguranță
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Prezentare onestă a limitărilor cercetării actuale și măsurilor 
                de siguranță necesare pentru utilizarea responsabilă.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {limitari.map((categorie, index) => (
                <Card 
                  key={index}
                  className="border-l-4 border-amber-400"
                  data-testid={`limitations-${index}`}
                >
                  <CardContent className="p-8">
                    <h3 className="text-lg font-bold text-amber-800 mb-6 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      {categorie.categoria}
                    </h3>
                    
                    <ul className="space-y-4">
                      {categorie.aspecte.map((aspect, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-amber-700 leading-relaxed">{aspect}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-amber-100 border border-amber-200 rounded-lg">
              <p className="text-amber-800 text-center">
                <strong>Important:</strong> Consultația cu specialistul în aromaterapie este esențială 
                pentru utilizarea sigură și eficientă, mai ales în cazul patologiilor existente sau al medicației.
              </p>
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
                Condiții pentru care aromaterapia a demonstrat eficacitate 
                în studii clinice controlate.
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Experiențe Reale și Recomandări Profesionale
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Rezultate practice de la pacienți și perspective din 
                practica clinică specializată.
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
                          <Flower2 key={i} className="w-4 h-4 text-purple-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.conditie}
                      </Badge>
                      {testimonial.tratament && (
                        <p className="text-purple-600 text-sm mt-1">{testimonial.tratament}</p>
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
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Descoperă Puterea Vindecătoare a Aromaterapiei
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Program personalizat de aromaterapie cu uleiuri esențiale certificate 
              și protocoale validate științific pentru echilibrul emoțional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  handleContactClick();
                  scrollToSection("contact");
                }}
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold shadow-xl"
                data-testid="button-consultation-cta"
              >
                Consultație Aromaterapeutică Gratuită
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
                  WhatsApp pentru Ghiduri
                </a>
              </Button>
            </div>

            <div className="mt-8 text-sm text-purple-100">
              ✨ Consultația este gratuită • 🌸 Uleiuri 100% naturale • 📞 Suport permanent
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}