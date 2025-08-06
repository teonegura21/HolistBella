import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Here you could add email notification logic using nodemailer
      console.log("New contact submission:", submission);
      
      res.json({ success: true, message: "Formularul a fost trimis cu succes!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Eroare la trimiterea formularului. Vă rugăm să încercați din nou." 
      });
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      res.status(500).json({ message: "Eroare la încărcarea datelor" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
