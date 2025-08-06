import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema } from "@shared/schema";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CONTACT_INFO, SERVICES, OFFICE_HOURS } from "@/lib/constants";
import { z } from "zod";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm({
    resolver: zodResolver(insertContactSubmissionSchema.extend({
      gdpr: z.boolean().refine((val: boolean) => val === true, {
        message: "Trebuie să accepți prelucrarea datelor personale"
      })
    })),
    defaultValues: {
      nume: "",
      prenume: "",
      email: "",
      telefon: "",
      serviciu: undefined,
      mesaj: "",
      gdpr: false
    }
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: any) => {
      const { gdpr, ...formData } = data;
      return await apiRequest("POST", "/api/contact", formData);
    },
    onSuccess: () => {
      toast({
        title: "Succes!",
        description: "Formularul a fost trimis cu succes! Vă vom contacta în cel mai scurt timp.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      toast({
        title: "Eroare",
        description: error.message || "Eroare la trimiterea formularului. Vă rugăm să încercați din nou.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: any) => {
    submitContactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Programează o Consultație</h2>
          <p className="text-xl text-gray-600">Primul pas către o sănătate optimă începe cu o consultație personalizată</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Formular de Contact</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nume"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nume *</FormLabel>
                          <FormControl>
                            <Input placeholder="Numele tău" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="prenume"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prenume *</FormLabel>
                          <FormControl>
                            <Input placeholder="Prenumele tău" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="adresa@email.com" {...field} />
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
                          <Input type="tel" placeholder="0744 922 305" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="serviciu"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Serviciu de Interes</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selectează serviciul" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {SERVICES.map((service) => (
                              <SelectItem key={service.id} value={service.id}>
                                {service.title}
                              </SelectItem>
                            ))}
                            <SelectItem value="apa-kangen">Apa Kangen</SelectItem>
                            <SelectItem value="consultatie-generala">Consultație Generală</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="mesaj"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mesaj</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descrie simptomele sau problemele pentru care dorești consultația..."
                            className="resize-none"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="gdpr"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm">
                            Sunt de acord cu prelucrarea datelor personale în conformitate cu{" "}
                            <button type="button" className="text-primary hover:underline">
                              Politica de Confidențialitate
                            </button>{" "}
                            *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={submitContactMutation.isPending}
                  >
                    {submitContactMutation.isPending ? "Se trimite..." : "Trimite Solicitarea"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Informații de Contact</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adresa</h4>
                  <p className="text-gray-600">{CONTACT_INFO.address}<br />{CONTACT_INFO.addressDetails}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-secondary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-secondary hover:underline text-lg font-medium">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-accent hover:underline">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="text-green-500 text-xl" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">
                    Trimite mesaj pe WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Button asChild className="bg-secondary hover:bg-secondary/90" size="lg">
                <a href={`tel:${CONTACT_INFO.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Sună Acum
                </a>
              </Button>
              <Button asChild className="bg-green-500 hover:bg-green-600" size="lg">
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                  </svg>
                  WhatsApp
                </a>
              </Button>
            </div>
            
            {/* Office Hours */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Program de Lucru
                </h4>
                <div className="space-y-2 text-sm">
                  {OFFICE_HOURS.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{schedule.day}:</span>
                      <span className={`font-medium ${schedule.closed ? "text-red-500" : ""}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  * Programări disponibile și în afara orelor de program, la cerere
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
