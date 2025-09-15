import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, decimal, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  nume: text("nume").notNull(),
  prenume: text("prenume").notNull(),
  email: text("email").notNull(),
  telefon: text("telefon").notNull(),
  serviciu: text("serviciu"),
  mesaj: text("mesaj"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Appointments table for booking system
export const appointments = pgTable("appointments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  // Patient Information
  nume: text("nume").notNull(),
  prenume: text("prenume").notNull(),
  email: text("email").notNull(),
  telefon: text("telefon").notNull(),
  varsta: integer("varsta"),
  
  // Appointment Details
  serviciu: text("serviciu").notNull(),
  dataOra: timestamp("data_ora").notNull(),
  durata: integer("durata").default(60), // minutes
  
  // Medical Information
  conditieMedicala: text("conditie_medicala"),
  medicatie: text("medicatie"),
  alergii: text("alergii"),
  notaSpeciala: text("nota_speciala"),
  
  // Booking Status
  status: text("status").default('pending').notNull(), // pending, confirmed, completed, cancelled
  confirmareClient: boolean("confirmare_client").default(false),
  
  // Payment Information
  pret: decimal("pret", { precision: 10, scale: 2 }),
  statusPlata: text("status_plata").default('unpaid'), // unpaid, paid, refunded
  stripePaymentIntentId: text("stripe_payment_intent_id"),
  
  // GDPR Compliance
  gdprConsent: boolean("gdpr_consent").notNull().default(false),
  consentTimestamp: timestamp("consent_timestamp").defaultNow().notNull(),
  
  // Timestamps
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertAppointmentSchema = createInsertSchema(appointments, {
  dataOra: z.string().min(1, "Data și ora sunt obligatorii"), // Accept ISO string from frontend
  varsta: z.number().min(1).max(120).optional(),
  gdprConsent: z.literal(true, { errorMap: () => ({ message: "Consimțământul GDPR este obligatoriu" }) }),
  pret: z.number().optional(),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  consentTimestamp: true, // Set automatically by server
  stripePaymentIntentId: true,
});

export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type Appointment = typeof appointments.$inferSelect;

// Service definitions with pricing
export const SERVICII_DISPONIBILE = {
  'terapie-bowen': {
    nume: 'Terapie Bowen',
    durata: 60,
    pret: 250,
    descriere: 'Terapie holistică pentru dureri musculare și echilibru corporal'
  },
  'nutritie-celulara': {
    nume: 'Nutriție Celulară',
    durata: 90,
    pret: 350,
    descriere: 'Consultație nutrițională personalizată cu plan de suplimente'
  },
  'terapie-reiki': {
    nume: 'Terapie Reiki',
    durata: 60,
    pret: 200,
    descriere: 'Vindecare energetică pentru echilibru emoțional și spiritual'
  },
  'detoxifiere-naturala': {
    nume: 'Detoxifiere Naturală',
    durata: 120,
    pret: 400,
    descriere: 'Protocol complet de detoxifiere cu monitorizare personalizată'
  },
  'consultatie-initiala': {
    nume: 'Consultație Inițială',
    durata: 45,
    pret: 0,
    descriere: 'Consultație gratuită pentru evaluare și plan de tratament'
  }
} as const;

export type ServiciuKey = keyof typeof SERVICII_DISPONIBILE;
