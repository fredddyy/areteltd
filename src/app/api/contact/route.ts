import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  organisation?: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Server-side validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // TODO: Integrate email delivery service (Resend, SendGrid, etc.)
    // For now, log the enquiry. Replace with actual email sending.
    // Example with Resend:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Website <noreply@yourdomain.com>',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New Enquiry from ${body.name}`,
    //   html: `...`,
    // });

    return NextResponse.json(
      { success: true, message: "Enquiry received successfully." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process enquiry." },
      { status: 500 }
    );
  }
}
