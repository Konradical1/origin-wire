import express, { Request, Response } from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Log environment variables (without sensitive data)
console.log('Server Configuration:');
console.log('GMAIL_USER:', process.env.GMAIL_USER ? '✓ Set' : '✗ Not set');
console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? '✓ Set' : '✗ Not set');
console.log('SMS_EMAIL:', process.env.SMS_EMAIL);
console.log('PORT:', port);

// Configure nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('SMTP Configuration Error:', error);
  } else {
    console.log('SMTP Server is ready to send messages');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req: Request, res: Response) => {
  console.log('Received contact form submission:', req.body);
  
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Missing required fields:', { name, email, message });
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.SMS_EMAIL,
      subject: 'New Contact Form Submission',
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `.trim(),
    };

    console.log('Attempting to send email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 