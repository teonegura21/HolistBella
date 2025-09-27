import { type ContactSubmission, type InsertContactSubmission, type Appointment, type InsertAppointment } from "@shared/schema";
import { nanoid } from "nanoid";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Appointment methods
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointments(): Promise<Appointment[]>;
  getAppointmentById(id: string): Promise<Appointment | null>;
  updateAppointmentStatus(id: string, status: string): Promise<Appointment>;
}

export class MemoryStorage implements IStorage {
  private contactSubmissions: ContactSubmission[] = [];
  private appointments: Appointment[] = [];

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const submission: ContactSubmission = {
      id: nanoid(),
      nume: insertSubmission.nume,
      prenume: insertSubmission.prenume,
      email: insertSubmission.email,
      telefon: insertSubmission.telefon,
      serviciu: insertSubmission.serviciu || null,
      mesaj: insertSubmission.mesaj || null,
      createdAt: new Date(),
    };
    
    this.contactSubmissions.push(submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return [...this.contactSubmissions].reverse(); // Return most recent first
  }

  // Appointment methods
  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    // Convert string date to timestamp and validate
    const appointmentDate = new Date(insertAppointment.dataOra);
    
    if (isNaN(appointmentDate.getTime())) {
      throw new Error('Invalid appointment date provided');
    }
    
    const appointment: Appointment = {
      id: nanoid(),
      nume: insertAppointment.nume,
      prenume: insertAppointment.prenume,
      email: insertAppointment.email,
      telefon: insertAppointment.telefon,
      varsta: insertAppointment.varsta || null,
      serviciu: insertAppointment.serviciu,
      dataOra: appointmentDate,
      durata: insertAppointment.durata || 60,
      conditieMedicala: insertAppointment.conditieMedicala || null,
      medicatie: insertAppointment.medicatie || null,
      alergii: insertAppointment.alergii || null,
      notaSpeciala: insertAppointment.notaSpeciala || null,
      status: insertAppointment.status || 'pending',
      confirmareClient: insertAppointment.confirmareClient || false,
      gdprConsent: insertAppointment.gdprConsent,
      consentTimestamp: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.appointments.push(appointment);
    return appointment;
  }

  async getAppointments(): Promise<Appointment[]> {
    return [...this.appointments].sort((a, b) => a.dataOra.getTime() - b.dataOra.getTime());
  }

  async getAppointmentById(id: string): Promise<Appointment | null> {
    const appointment = this.appointments.find(app => app.id === id);
    return appointment || null;
  }

  async updateAppointmentStatus(id: string, status: string): Promise<Appointment> {
    const appointmentIndex = this.appointments.findIndex(app => app.id === id);
    if (appointmentIndex === -1) {
      throw new Error('Appointment not found');
    }
    
    this.appointments[appointmentIndex] = {
      ...this.appointments[appointmentIndex],
      status,
      updatedAt: new Date(),
    };
    
    return this.appointments[appointmentIndex];
  }
}

export const storage = new MemoryStorage();
