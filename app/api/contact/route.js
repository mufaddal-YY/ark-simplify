import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import ContactEnquiryEmail from "@/emails/contact-enquiry";
import { smsProgram } from "@/lib/sms-program";

const defaultFromEmail = "ARK Simplify <onboarding@resend.dev>";
const defaultContactEmail = "info@arksimplify.com";

function envValue(key) {
  const value = process.env[key]?.trim();

  return value || undefined;
}

const consentTruthyValues = ["yes", "on", "true"];

// Optional SMS opt-in checkbox: "yes" / "on" / true -> true, missing -> false.
const smsConsentFlag = z
  .union([z.boolean(), z.string().max(10)])
  .optional()
  .transform(
    (value) =>
      value === true ||
      (typeof value === "string" &&
        consentTruthyValues.includes(value.trim().toLowerCase())),
  );

const smsConsentTypes = Object.entries(smsProgram.messageTypes);

const smsConsentFields = Object.fromEntries(
  smsConsentTypes.map(([, type]) => [type.field, smsConsentFlag]),
);

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0];

  return (
    forwardedFor?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    undefined
  );
}

function getSmsConsent(enquiry, request) {
  const consent = Object.fromEntries(
    smsConsentTypes.map(([key, type]) => [key, enquiry[type.field]]),
  );

  if (!Object.values(consent).some(Boolean)) {
    return consent;
  }

  return {
    ...consent,
    consentedAt: new Date().toISOString(),
    consentVersion: smsProgram.consentVersion,
    pageUrl: request.headers.get("referer")?.slice(0, 500) || undefined,
    ipAddress: getClientIp(request),
  };
}

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  company: z.string().trim().min(1, "Company is required").max(160),
  email: z.email("A valid email is required").max(180),
  phone: z.string().trim().max(40).optional(),
  designation: z.string().trim().min(1, "Designation is required").max(160),
  inventoryChallenge: z.string().trim().max(160).optional(),
  service: z.string().trim().min(1, "Service is required").max(120),
  message: z.string().trim().min(1, "Message is required").max(4000),
  website: z.string().optional(),
  ...smsConsentFields,
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

  const smsConsent = getSmsConsent(enquiry, request);
  const hasSmsConsent = smsConsentTypes.some(([key]) => smsConsent[key]);

  if (hasSmsConsent && !enquiry.phone) {
    return NextResponse.json(
      { error: "Please enter a phone number to receive text messages." },
      { status: 400 },
    );
  }

  const resend = new Resend(config.apiKey);
  const email = <ContactEnquiryEmail {...enquiry} smsConsent={smsConsent} />;

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
