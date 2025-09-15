import { type ContactSubmission, type InsertContactSubmission, contactSubmissions, type Appointment, type InsertAppointment, appointments } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Appointment methods
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointments(): Promise<Appointment[]>;
  getAppointmentById(id: string): Promise<Appointment | null>;
  updateAppointmentStatus(id: string, status: string): Promise<Appointment>;
}

export class DatabaseStorage implements IStorage {
  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values(insertSubmission)
      .returning();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    const submissions = await db
      .select()
      .from(contactSubmissions)
      .orderBy(contactSubmissions.createdAt);
    return submissions.reverse();
  }

  // Appointment methods
  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    // Convert string date to timestamp and validate
    const appointmentDate = new Date(insertAppointment.dataOra);
    
    if (isNaN(appointmentDate.getTime())) {
      throw new Error('Invalid appointment date provided');
    }
    
    const appointmentData = {
      ...insertAppointment,
      dataOra: appointmentDate,
      consentTimestamp: new Date(), // Record when consent was given
    };

    const [appointment] = await db
      .insert(appointments)
      .values(appointmentData)
      .returning();
    return appointment;
  }

  async getAppointments(): Promise<Appointment[]> {
    const appointmentList = await db
      .select()
      .from(appointments)
      .orderBy(appointments.dataOra);
    return appointmentList;
  }

  async getAppointmentById(id: string): Promise<Appointment | null> {
    const [appointment] = await db
      .select()
      .from(appointments)
      .where(eq(appointments.id, id));
    return appointment || null;
  }

  async updateAppointmentStatus(id: string, status: string): Promise<Appointment> {
    const [appointment] = await db
      .update(appointments)
      .set({ status, updatedAt: new Date() })
      .where(eq(appointments.id, id))
      .returning();
    return appointment;
  }
}

export const storage = new DatabaseStorage();
