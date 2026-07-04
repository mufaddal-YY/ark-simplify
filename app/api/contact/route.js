import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import ContactEnquiryEmail from "@/emails/contact-enquiry";

const defaultFromEmail = "ARK Simplify <onboarding@resend.dev>";
const defaultContactEmail = "info@arksimplify.com";

function envValue(key) {
  const value = process.env[key]?.trim();

  return value || undefined;
}

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  company: z.string().trim().min(1, "Company is required").max(160),
  email: z.email("A valid email is required").max(180),
  designation: z.string().trim().min(1, "Designation is required").max(160),
  service: z.string().trim().min(1, "Service is required").max(120),
  message: z.string().trim().min(1, "Message is required").max(4000),
  website: z.string().optional(),
});

function getResendConfig() {
  return {
    apiKey: envValue("RESEND_API_KEY"),
    from: envValue("RESEND_FROM_EMAIL") ?? defaultFromEmail,
    to: envValue("RESEND_CONTACT_TO") ?? defaultContactEmail,
  };
}

export async function POST(request) {
  const config = getResendConfig();

  if (!config.apiKey) {
    return NextResponse.json(
      { error: "Resend API key is missing on the server." },
      { status: 500 },
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 },
    );
  }

  const parsed = enquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please complete all required fields correctly." },
      { status: 400 },
    );
  }

  const enquiry = parsed.data;

  if (enquiry.website) {
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(config.apiKey);
  const email = <ContactEnquiryEmail {...enquiry} />;

  try {
    const { error } = await resend.emails.send({
      from: config.from,
      to: config.to.split(",").map((email) => email.trim()).filter(Boolean),
      replyTo: enquiry.email,
      subject: `New enquiry from ${enquiry.name} - ${enquiry.service}`,
      react: email,
    });

    if (error) {
      return NextResponse.json(
        { error: "We could not send your enquiry right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "We could not send your enquiry right now." },
      { status: 502 },
    );
  }
}
