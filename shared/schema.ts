import { z } from "zod";

// Contact Submission Schema
export const insertContactSubmissionSchema = z.object({
  nume: z.string().min(1, "Numele este obligatoriu"),
  prenume: z.string().min(1, "Prenumele este obligatoriu"),
  email: z.string().email("Email invalid"),
  telefon: z.string().min(1, "Telefonul este obligatoriu"),
  serviciu: z.string().optional(),
  mesaj: z.string().optional(),
});

export const contactSubmissionSchema = z.object({
  id: z.string(),
  nume: z.string(),
  prenume: z.string(),
  email: z.string(),
  telefon: z.string(),
  serviciu: z.string().nullable(),
  mesaj: z.string().nullable(),
  createdAt: z.date(),
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

// Appointment Schemas
export const insertAppointmentSchema = z.object({
  nume: z.string().min(1, "Numele este obligatoriu"),
  prenume: z.string().min(1, "Prenumele este obligatoriu"),
  email: z.string().email("Email invalid"),
  telefon: z.string().min(1, "Telefonul este obligatoriu"),
  varsta: z.number().min(1).max(120).optional(),
  serviciu: z.string().min(1, "Serviciul este obligatoriu"),
  dataOra: z.string().min(1, "Data și ora sunt obligatorii"),
  durata: z.number().optional(),
  conditieMedicala: z.string().optional(),
  medicatie: z.string().optional(),
  alergii: z.string().optional(),
  notaSpeciala: z.string().optional(),
  status: z.string().optional(),
  confirmareClient: z.boolean().optional(),
  gdprConsent: z.literal(true, { errorMap: () => ({ message: "Consimțământul GDPR este obligatoriu" }) }),
});

export const appointmentSchema = z.object({
  id: z.string(),
  nume: z.string(),
  prenume: z.string(),
  email: z.string(),
  telefon: z.string(),
  varsta: z.number().nullable(),
  serviciu: z.string(),
  dataOra: z.date(),
  durata: z.number().nullable(),
  conditieMedicala: z.string().nullable(),
  medicatie: z.string().nullable(),
  alergii: z.string().nullable(),
  notaSpeciala: z.string().nullable(),
  status: z.string(),
  confirmareClient: z.boolean(),
  gdprConsent: z.boolean(),
  consentTimestamp: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type Appointment = z.infer<typeof appointmentSchema>;

// Service definitions with pricing
export const SERVICII_DISPONIBILE = {
  'terapie-bowen': {
    nume: 'Terapie Bowen',
    durata: 60,
    descriere: 'Terapie holistică pentru dureri musculare și echilibru corporal'
  },
  'nutritie-celulara': {
    nume: 'Nutriție Celulară',
    durata: 90,
    descriere: 'Consultație nutrițională personalizată cu plan de suplimente'
  },


  'consultatie-initiala': {
    nume: 'Consultație Inițială',
    durata: 45,
    descriere: 'Consultație gratuită pentru evaluare și plan de tratament'
  }
} as const;

export type ServiciuKey = keyof typeof SERVICII_DISPONIBILE;
