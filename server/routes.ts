import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertAppointmentSchema, SERVICII_DISPONIBILE } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Safe logging - only non-PII metadata
      console.log("New contact submission:", {
        id: submission.id,
        serviciu: submission.serviciu,
        timestamp: new Date().toISOString()
      });
      
      // Here you could add email notification logic using nodemailer
      
      res.json({ success: true, message: "Formularul a fost trimis cu succes!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Eroare la trimiterea formularului. Vă rugăm să încercați din nou." 
      });
    }
  });

  // Get contact submissions (for admin purposes - PROTECTED)
  app.get("/api/contact", async (req, res) => {
    // Same admin protection as appointments
    const adminToken = req.headers.authorization?.replace('Bearer ', '');
    const expectedToken = process.env.ADMIN_TOKEN;
    
    if (!expectedToken) {
      console.error("ADMIN_TOKEN not configured");
      return res.status(500).json({ message: "Server configuration error" });
    }
    
    if (!adminToken || adminToken !== expectedToken) {
      return res.status(401).json({ message: "Acces neautorizat" });
    }
    
    try {
      const submissions = await storage.getContactSubmissions();
      
      // Basic PII redaction for admin view
      const sanitizedSubmissions = submissions.map(submission => ({
        id: submission.id,
        nume: submission.nume,
        prenume: submission.prenume,
        email: `${submission.email.substring(0, 3)}***`,
        telefon: `***${submission.telefon.slice(-3)}`,
        serviciu: submission.serviciu,
        createdAt: submission.createdAt,
        // mesaj field omitted for privacy
      }));
      
      res.json(sanitizedSubmissions);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      res.status(500).json({ message: "Eroare la încărcarea datelor" });
    }
  });

  // Appointment booking
  app.post("/api/appointments", async (req, res) => {
    try {
      const validatedData = insertAppointmentSchema.parse(req.body);
      
      // Set pricing based on service
      const serviciu = validatedData.serviciu as keyof typeof SERVICII_DISPONIBILE;
      const serviceInfo = SERVICII_DISPONIBILE[serviciu];
      
      if (!serviceInfo) {
        return res.status(400).json({ 
          success: false, 
          message: "Serviciul selectat nu este valabil." 
        });
      }

      // Add service pricing and duration
      const appointmentWithPricing = {
        ...validatedData,
        pret: serviceInfo.pret,
        durata: serviceInfo.durata,
        status: 'pending' as const,
        statusPlata: 'unpaid' as const
      };

      const appointment = await storage.createAppointment(appointmentWithPricing);
      
      // Safe logging - only non-PII metadata
      console.log("New appointment booked:", {
        id: appointment.id,
        serviciu: appointment.serviciu,
        dataOra: appointment.dataOra,
        status: appointment.status,
        timestamp: new Date().toISOString()
      });
      
      res.json({ 
        success: true, 
        message: "Programarea a fost înregistrată cu succes! Veți fi contactat pentru confirmare.",
        appointment: {
          id: appointment.id,
          serviciu: appointment.serviciu,
          dataOra: appointment.dataOra,
          status: appointment.status
        }
      });
    } catch (error) {
      console.error("Appointment booking error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Eroare la programarea vizitei. Vă rugăm să încercați din nou." 
      });
    }
  });

  // Get appointments (for admin purposes - PROTECTED)
  app.get("/api/appointments", async (req, res) => {
    // Strict admin token protection
    const adminToken = req.headers.authorization?.replace('Bearer ', '');
    const expectedToken = process.env.ADMIN_TOKEN;
    
    if (!expectedToken) {
      console.error("ADMIN_TOKEN not configured");
      return res.status(500).json({ message: "Server configuration error" });
    }
    
    if (!adminToken || adminToken !== expectedToken) {
      return res.status(401).json({ message: "Acces neautorizat" });
    }
    
    try {
      const appointmentList = await storage.getAppointments();
      
      // Redact sensitive medical information
      const sanitizedAppointments = appointmentList.map(appointment => ({
        id: appointment.id,
        nume: appointment.nume,
        prenume: appointment.prenume,
        email: appointment.email,
        telefon: appointment.telefon,
        serviciu: appointment.serviciu,
        dataOra: appointment.dataOra,
        durata: appointment.durata,
        status: appointment.status,
        pret: appointment.pret,
        createdAt: appointment.createdAt,
        // Medical info redacted for privacy
      }));
      
      res.json(sanitizedAppointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ message: "Eroare la încărcarea programărilor" });
    }
  });

  // Get available services
  app.get("/api/services", async (req, res) => {
    try {
      res.json(SERVICII_DISPONIBILE);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ message: "Eroare la încărcarea serviciilor" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
