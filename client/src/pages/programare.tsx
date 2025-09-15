import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, Heart, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { SEO } from '@/components/ui/seo';
import { useAnalytics } from '@/hooks/use-analytics';
import { trackEvent } from '@/lib/analytics';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { insertAppointmentSchema } from '@shared/schema';
import { z } from 'zod';
import { format, addDays, setHours, setMinutes } from 'date-fns';
import { ro } from 'date-fns/locale';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import FloatingWhatsApp from '@/components/ui/floating-whatsapp';

// Extended form schema for frontend validation
const bookingFormSchema = insertAppointmentSchema.extend({
  conditieMedicala: z.string().optional(),
  medicatie: z.string().optional(),
  alergii: z.string().optional(),
  notaSpeciala: z.string().optional(),
  gdprConsent: z.boolean().refine(val => val === true, {
    message: "Trebuie să accepți prelucrarea datelor personale",
  }),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function ProgramarePage() {
  useAnalytics();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [bookingId, setBookingId] = useState<string>('');

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      nume: '',
      prenume: '',
      email: '',
      telefon: '',
      varsta: undefined,
      serviciu: '',
      dataOra: '',
      conditieMedicala: '',
      medicatie: '',
      alergii: '',
      notaSpeciala: '',
      gdprConsent: false,
    },
  });

  // Fetch available services
  const { data: services } = useQuery({
    queryKey: ['/api/services'],
  });

  // Booking mutation
  const bookingMutation = useMutation({
    mutationFn: (data: BookingFormData) => apiRequest('/api/appointments', 'POST', data),
    onSuccess: (response: any) => {
      setBookingId(response.appointment.id);
      setShowSuccessMessage(true);
      trackEvent('booking_completed', 'appointment', response.appointment.serviciu);
      // Scroll to success message
      const element = document.getElementById('success-message');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    onError: (error: any) => {
      console.error('Booking error:', error);
      trackEvent('booking_error', 'appointment', 'failed');
    },
  });

  const onSubmit = (data: BookingFormData) => {
    trackEvent('booking_attempt', 'appointment', data.serviciu);
    bookingMutation.mutate(data);
  };

  // Generate time slots (9 AM to 5 PM, 30-minute intervals)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute of [0, 30]) {
        if (hour === 17 && minute === 30) break; // Don't go past 5 PM
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  // Generate next 30 days (excluding weekends)
  const generateAvailableDates = () => {
    const dates = [];
    let currentDate = new Date();
    let count = 0;
    
    while (count < 30) {
      const dayOfWeek = currentDate.getDay();
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push(new Date(currentDate));
        count++;
      }
      currentDate = addDays(currentDate, 1);
    }
    return dates;
  };

  const timeSlots = generateTimeSlots();
  const availableDates = generateAvailableDates();

  if (showSuccessMessage) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <SEO
          title="Programare Confirmată | Holist Bella Iași"
          description="Programarea dumneavoastră a fost înregistrată cu succes. Veți fi contactat în curând pentru confirmare."
          keywords="programare confirmată, programare Holist Bella, rezervare terapie"
        />
        
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="success-message">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Programare Confirmată!
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                Programarea dumneavoastră a fost înregistrată cu succes. 
                Veți fi contactat în următoarele 2 ore pentru confirmare.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="text-sm text-green-700">
                  <strong>Codul programării:</strong> {bookingId.slice(-8).toUpperCase()}
                </div>
              </div>
              
              <div className="space-y-4 text-left bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900">Ce se întâmplă acum?</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Programarea a fost înregistrată în sistem
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 text-blue-500 mr-3" />
                    Veți fi contactat în maxim 2 ore pentru confirmare
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-4 h-4 text-purple-500 mr-3" />
                    Consultația inițială este gratuită și informativă
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-4 h-4 text-red-500 mr-3" />
                    Plata se efectuează doar la locație, după consultație
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setShowSuccessMessage(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  data-testid="button-book-another"
                >
                  Programează Altă Consultație
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/'}
                  data-testid="button-return-home"
                >
                  Înapoi la Pagina Principală
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <SEO
        title="Programare Online - Rezervă Consultația Ta | Holist Bella Iași"
        description="Programează consultația ta holistică online. Servicii personalizate: Bowen, Reiki, Nutriție Celulară, Detoxifiere. Plata se face la locație."
        keywords="programare online, rezervare consultație, programare Holist Bella, terapii holistice Iași"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Programare <span className="text-blue-600">Online</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rezervă consultația ta personalizată. Primul pas către o sănătate optimă 
              începe cu o evaluare profesională gratuită.
            </p>
          </div>

          {/* Booking Form */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <div className="flex items-center mb-6">
                      <User className="w-6 h-6 text-blue-600 mr-3" />
                      <h2 className="text-2xl font-bold text-gray-900">Informații Personale</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="prenume"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Prenume *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Prenumele tău" 
                                {...field}
                                data-testid="input-prenume"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="nume"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nume *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Numele tău de familie" 
                                {...field}
                                data-testid="input-nume"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="email@exemplu.com" 
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="telefon"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefon *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="0712345678" 
                                {...field}
                                data-testid="input-telefon"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="varsta"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Vârsta (opțional)</FormLabel>
                            <FormControl>
                              <Input 
                                type="number"
                                min="1"
                                max="120"
                                placeholder="De ex: 35" 
                                {...field}
                                onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                                data-testid="input-varsta"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div>
                    <div className="flex items-center mb-6">
                      <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                      <h2 className="text-2xl font-bold text-gray-900">Detalii Programare</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="serviciu"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Serviciu Dorit *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-serviciu">
                                  <SelectValue placeholder="Selectează serviciul" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services && Object.entries(services as Record<string, any>).map(([key, service]) => (
                                  <SelectItem key={key} value={key}>
                                    {service.nume} - {service.pret > 0 ? `${service.pret} RON` : 'GRATUIT'} ({service.durata} min)
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="dataOra"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Data și Ora *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-data-ora">
                                  <SelectValue placeholder="Selectează data și ora" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {availableDates.map((date) => (
                                  <div key={date.toISOString()}>
                                    <div className="font-semibold text-sm text-gray-700 px-2 py-1 bg-gray-50">
                                      {format(date, 'EEEE, dd MMMM yyyy', { locale: ro })}
                                    </div>
                                    {timeSlots.map((time) => {
                                      const [hours, minutes] = time.split(':').map(Number);
                                      const dateTimeString = setMinutes(setHours(date, hours), minutes).toISOString();
                                      return (
                                        <SelectItem key={`${date.toDateString()}-${time}`} value={dateTimeString}>
                                          {time}
                                        </SelectItem>
                                      );
                                    })}
                                  </div>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div>
                    <div className="flex items-center mb-6">
                      <Heart className="w-6 h-6 text-blue-600 mr-3" />
                      <h2 className="text-2xl font-bold text-gray-900">Informații Medicale (Opțional)</h2>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div className="text-sm text-blue-800">
                          <p className="font-medium mb-2">Informații Importante:</p>
                          <ul className="space-y-1">
                            <li>• Aceste informații ne ajută să vă oferim cea mai bună consultație</li>
                            <li>• Toate datele sunt confidențiale și protejate conform GDPR</li>
                            <li>• Consultația inițială este gratuită și informativă</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="conditieMedicala"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Afecțiuni Medicale Actuale</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Menționează orice afecțiuni medicale cunoscute..." 
                                className="resize-none"
                                rows={3}
                                {...field}
                                data-testid="textarea-conditie-medicala"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="medicatie"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Medicație Curentă</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Listează medicamentele pe care le iei în prezent..." 
                                className="resize-none"
                                rows={3}
                                {...field}
                                data-testid="textarea-medicatie"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="alergii"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Alergii Cunoscute</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Menționează orice alergii la medicamente, alimente etc..." 
                                className="resize-none"
                                rows={3}
                                {...field}
                                data-testid="textarea-alergii"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="notaSpeciala"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Observații Speciale</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Orice alte informații relevante pentru consultație..." 
                                className="resize-none"
                                rows={3}
                                {...field}
                                data-testid="textarea-nota-speciala"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* GDPR Consent */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <FormField
                      control={form.control}
                      name="gdprConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={field.onChange}
                              className="w-4 h-4 text-blue-600 rounded border-gray-300"
                              data-testid="checkbox-gdpr-consent"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-blue-900">
                              Sunt de acord cu prelucrarea datelor personale și medicale *
                            </FormLabel>
                            <p className="text-xs text-blue-700">
                              Prin bifarea acestui câmp, îmi dau consimțământul pentru prelucrarea datelor 
                              personale și medicale în scopul programării și prestării serviciilor medicale. 
                              Datele vor fi protejate conform Regulamentului GDPR.
                            </p>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Submit Section */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Gata să Începem?
                      </h3>
                      <p className="text-gray-600">
                        Programarea ta va fi confirmată în maxim 2 ore. Plata se efectuează doar la locație.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={bookingMutation.isPending}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                        data-testid="button-submit-booking"
                      >
                        {bookingMutation.isPending ? 'Se procesează...' : 'Programează Consultația'}
                      </Button>
                      
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={() => form.reset()}
                        className="px-8 py-4 text-lg"
                        data-testid="button-reset-form"
                      >
                        Resetează Formularul
                      </Button>
                    </div>

                    {bookingMutation.isError && (
                      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="text-red-700 text-center">
                          A apărut o eroare la procesarea programării. Te rugăm să încerci din nou 
                          sau să ne contactezi direct.
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}