import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message, recaptchaToken } = await req.json();

  // ✅ Validate required fields
  if (!name || !email || !message || !recaptchaToken) {
    return NextResponse.json(
      { error: "All fields and reCAPTCHA are required." },
      { status: 400 }
    );
  }

  // ✅ Validate email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "The email provided is not valid." },
      { status: 400 }
    );
  }

  // 🚫 Block suspicious email patterns
  const forbiddenPatterns = /(asd|test|example|fake)/i;
  if (forbiddenPatterns.test(email)) {
    return NextResponse.json(
      { error: "The email appears to be invalid or a test address." },
      { status: 400 }
    );
  }

  // ✅ Verify reCAPTCHA with Google
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const verifyResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secretKey}&response=${recaptchaToken}`,
      }
    );

    const verification = await verifyResponse.json();

    if (!verification.success || verification.score < 0.5) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return NextResponse.json(
      { error: "An error occurred during reCAPTCHA validation." },
      { status: 500 }
    );
  }

  // ✅ If validation passed, send the email
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send the email." },
      { status: 500 }
    );
  }
}
