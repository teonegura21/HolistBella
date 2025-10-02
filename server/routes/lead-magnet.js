const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Configure email transporter (use your SMTP details)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER, // e.g., 'your-email@gmail.com'
    pass: process.env.EMAIL_PASS // e.g., app password
  }
});

// Endpoint for lead magnet form
router.post('/lead-magnet', async (req, res) => {
  const { email } = req.body;

  try {
    // Send PDF guide via email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Ghid Gratuit: 5 Tehnici de Relaxare și Management al Durerii',
      text: 'Vă mulțumim! Ghidul PDF a fost atașat.',
      attachments: [{
        filename: 'ghid-relaxare.pdf',
        path: './public/ghid-relaxare.pdf' // Path to your PDF file
      }]
    });

    res.json({ success: true, message: 'Ghidul a fost trimis pe email!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Eroare la trimitere. Încearcă din nou.' });
  }
});

module.exports = router;