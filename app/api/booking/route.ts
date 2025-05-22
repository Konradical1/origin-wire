import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, date, time, message } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json(
        { error: 'Name, email, phone, date, and time are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[\d\s-+()]{10,}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }

    // Configure nodemailer with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Prepare email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.SMS_EMAIL,
      subject: 'New Booking Request',
      text: `
New Booking Request Details:
---------------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Time: ${time}
Message: ${message || 'No additional message'}

This is an automated message from your website booking form.
      `.trim(),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Booking request sent successfully' });
  } catch (error) {
    console.error('Error sending booking request:', error);
    return NextResponse.json(
      { error: 'Failed to send booking request. Please try again.' },
      { status: 500 }
    );
  }
} 