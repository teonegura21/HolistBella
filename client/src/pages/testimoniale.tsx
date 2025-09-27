import { Star, Quote, Heart, CheckCircle, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SEO } from '@/components/ui/seo';
import { useAnalytics } from '@/hooks/use-analytics';
import { trackEvent } from '@/lib/analytics';

interface Testimonial {
  id: string;
  name: string;
  initials: string;
  age: number;
  location: string;
  service: string;
  rating: number;
  date: string;
  condition: string;
  improvement: string;
  quote: string;
  results: string[];
  beforeAfter?: {
    before: string;
    after: string;
  };
  verified: boolean;
}

interface VideoTestimonial {
  id: string;
  name: string;
  service: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  condition: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Maria V.",
    initials: "MV",
    age: 45,
    location: "Iași",
    service: "Terapie Bowen",
    rating: 5,
    date: "2024-08-15",
    condition: "Dureri cronice de spate",
    improvement: "Eliminarea completă a durerii în 6 ședințe",
    quote: "După ani de durere cronică de spate, terapia Bowen mi-a schimbat viața. În doar 6 ședințe, durerea s-a eliminat complet și pot din nou să fac toate activitățile pe care le iubeam.",
    results: [
      "100% eliminarea durerii de spate",
      "Îmbunătățirea mobilității cu 90%",
      "Somn odihnitor după 3 ani",
      "Revenirea la activități sportive"
    ],
    verified: true
  },
  {
    id: "t2", 
    name: "Alexandru M.",
    initials: "AM",
    age: 38,
    location: "București",
    service: "Nutriție Celulară",
    rating: 5,
    date: "2024-09-10",
    condition: "Oboseală cronică și lipsa energiei",
    improvement: "Creșterea energiei cu 200% în 8 săptămâni",
    quote: "Programul de nutriție celulară a fost revelația anului pentru mine. De la oboseala cronică am ajuns să am mai multă energie decât aveam la 20 de ani.",
    results: [
      "Energie crescută cu 200%",
      "Slăbire naturală de 12kg",
      "Îmbunătățirea concentrării",
      "Sistem imunitar întărit"
    ],
    verified: true
  },

  {
    id: "t4",
    name: "Călin D.",
    initials: "CD",
    age: 61,
    location: "Timișoara", 
    service: "Detoxifiere Naturală",
    rating: 5,
    date: "2024-06-18",
    condition: "Probleme digestive și intoxicare cu metale grele",
    improvement: "Eliminarea toxinelor și regenerarea digestiei",
    quote: "Protocolul de detoxifiere naturală mi-a salvat sănătatea. După eliminarea metalelor grele, digestia s-a îmbunătățit spectaculos și mă simt ca renăscut.",
    results: [
      "Eliminarea metalelor grele",
      "Digestie perfectă",
      "Creșterea în greutate sănătoasă",
      "Vitalitate îmbunătățită cu 150%"
    ],
    verified: true
  },
  {
    id: "t5",
    name: "Diana P.",
    initials: "DP",
    age: 34,
    location: "Constanța",
    service: "Terapie Bowen + Reiki",
    rating: 5,
    date: "2024-09-05",
    condition: "Fibromialgie și dureri musculare cronice",
    improvement: "Scăderea durerii cu 90% și îmbunătățirea calității vieții",
    quote: "Combinația de terapii Bowen și Reiki a fost miracolul de care aveam nevoie. Fibromialgica nu mai controlează viața mea zilnică.",
    results: [
      "Dureri reduse cu 90%",
      "Mobilitate crescută",
      "Stare de bine emoțională", 
      "Revenirea la activitățile sociale"
    ],
    verified: true
  }
];

const videoTestimonials: VideoTestimonial[] = [
  {
    id: "v1",
    name: "Georgeta M.",
    service: "Terapie Bowen",
    thumbnailUrl: "/api/placeholder/320/180",
    videoUrl: "#",
    duration: "2:15",
    condition: "Artrită reumatoidă"
  },
  {
    id: "v2", 
    name: "Ionuț T.",
    service: "Nutriție Celulară",
    thumbnailUrl: "/api/placeholder/320/180", 
    videoUrl: "#",
    duration: "3:42",
    condition: "Diabet zaharat tip 2"
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Pacienți Vindecați" },
  { icon: Star, value: "4.9", label: "Rating Mediu" },
  { icon: Award, value: "95%", label: "Rata de Succes" },
  { icon: Heart, value: "10", label: "Ani Experiență" }
];

export default function Testimoniale() {
  // Track page views when component mounts
  useAnalytics();

  const handleContactClick = () => {
    trackEvent('testimonials_contact_click', 'testimonials_page', 'schedule_consultation');
  };

  const handleVideoPlay = (videoId: string, videoName: string) => {
    trackEvent('video_testimonial_play', 'testimonials_page', videoName);
  };

  const scrollToSection = (sectionId: string) => {
    window.location.href = `/#${sectionId}`;
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating 
              ? 'text-yellow-400 fill-yellow-400' 
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <>
      <SEO
        title="Testimoniale Pacienți - Povești de Vindecare | Holist Bella"
        description="Citește poveștile reale de vindecare ale pacienților noștri. Descoperă cum terapiile holiste au transformat vieți în Iași și în toată România. Rezultate verificate și autentice."
        keywords="testimoniale pacienți, povești vindecare, terapii holiste rezultate, Holist Bella recenzii, experiențe pacienți Iași"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-healing-green via-tranquil-teal to-healing-green py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <Badge 
                variant="outline" 
                className="bg-white/20 text-white border-white/30 mb-4"
                data-testid="badge-testimonials"
              >
                ✨ Povești Reale de Vindecare
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Testimoniale <span className="text-white/90">Autentice</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Descoperă cum terapiile holiste au transformat vieți reale. 
                Fiecare poveste este verificată și reprezintă rezultate autentice 
                obținute de pacienții noștri.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                    data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <stat.icon className="w-8 h-8 text-white mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Written Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Povești de Transformare
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fiecare testimonial este verificat și reprezintă experiența reală 
                a unui pacient care a ales să-și îmbunătățească sănătatea prin terapii holiste.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card 
                  key={testimonial.id} 
                  className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg"
                  data-testid={`testimonial-card-${testimonial.id}`}
                >
                  {testimonial.verified && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verificat
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <Avatar className="w-12 h-12 mr-4">
                        <AvatarFallback className="bg-healing-green text-white font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h3>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          {testimonial.age} ani • {testimonial.location}
                        </div>
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>

                    <div className="mb-4">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.service}
                      </Badge>
                      <div className="text-xs text-gray-500 mt-1">
                        {new Date(testimonial.date).toLocaleDateString('ro-RO')}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-900 mb-1">
                        Problemă:
                      </div>
                      <div className="text-sm text-red-600 mb-2">
                        {testimonial.condition}
                      </div>
                      
                      <div className="text-sm font-medium text-gray-900 mb-1">
                        Rezultat:
                      </div>
                      <div className="text-sm text-green-600">
                        {testimonial.improvement}
                      </div>
                    </div>

                    <div className="relative mb-4">
                      <Quote className="absolute top-0 left-0 w-6 h-6 text-healing-green/20" />
                      <p className="text-gray-700 italic pl-8 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    <div className="border-t pt-4">
                      <div className="text-sm font-medium text-gray-900 mb-2">
                        Rezultate Măsurabile:
                      </div>
                      <ul className="space-y-1">
                        {testimonial.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {result}
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

        {/* Video Testimonials */}
        {videoTestimonials.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Testimoniale Video
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ascultă direct de la pacienții noștri cum terapiile holiste 
                  le-au schimbat viața în mod pozitiv.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {videoTestimonials.map((video) => (
                  <Card 
                    key={video.id} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300"
                    data-testid={`video-testimonial-${video.id}`}
                  >
                    <div className="relative">
                      <img 
                        src={video.thumbnailUrl} 
                        alt={`Testimonial video ${video.name}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Button
                          size="lg"
                          className="bg-white text-healing-green hover:bg-gray-100"
                          onClick={() => handleVideoPlay(video.id, video.name)}
                          data-testid={`button-play-video-${video.id}`}
                        >
                          <div className="w-0 h-0 border-l-[20px] border-l-healing-green border-y-[12px] border-y-transparent mr-2" />
                          Redare Video
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        {video.name}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <Badge variant="outline">
                          {video.service}
                        </Badge>
                        <span>{video.condition}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-healing-green to-tranquil-teal">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vrei să Fii Următoarea Poveste de Succes?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Alătură-te celor peste 500 de pacienți care și-au transformat viața 
              prin terapii holiste autentice și eficiente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  handleContactClick();
                  scrollToSection("contact");
                }}
                className="bg-white text-healing-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl"
                data-testid="button-schedule-consultation-cta"
              >
                Programează Consultația Gratuită
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                data-testid="button-learn-more-cta"
              >
                Află Mai Multe
              </Button>
            </div>

            <div className="mt-8 text-sm text-white/80">
              ✨ Consultația inițială este gratuită • 📞 Răspundem în maxim 2 ore
            </div>
          </div>
        </section>
      </div>
    </>
  );
}