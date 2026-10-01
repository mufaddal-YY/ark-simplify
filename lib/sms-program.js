// Single source of truth for the SMS (A2P 10DLC) program disclosures.
// The opt-in form, Privacy Policy, and Terms of Service all read from here so
// the wording carriers review stays identical everywhere.

export const smsProgram = {
  brandName: "ARK Simplify",
  legalName: "ARKSIMPLIFIQ Private Limited",
  supportEmail: "info@arksimplify.com",
  supportPhone: "+1 (312) 380-0712",
  messageFrequency: "Message frequency varies",
  rates: "Message and data rates may apply",
  optOut: "Reply STOP to opt out",
  help: "Reply HELP for help",
  privacyPolicyPath: "/privacy-policy",
  termsPath: "/terms",
  consentVersion: "2026-10-01",
  messageTypes: {
    customerCare: {
      field: "smsCustomerCareConsent",
      label: "Customer care & service text messages",
      description:
        "replies to my enquiry, meeting and call scheduling, project and service updates, and account notifications",
    },
    marketing: {
      field: "smsMarketingConsent",
      label: "Marketing text messages",
      description:
        "promotional offers, service announcements, and company news",
    },
  },
  consentNotRequired:
    "Consent is not a condition of purchase and is not required to submit this form",
  noSharing:
    "Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes",
};

// Exact disclosure shown beside each SMS opt-in checkbox. The enquiry email
// quotes the same text as consent evidence, so both always match.
export function getSmsConsentDisclosure(typeKey) {
  const type = smsProgram.messageTypes[typeKey];

  if (!type) {
    return "";
  }

  const label = type.label.charAt(0).toLowerCase() + type.label.slice(1);

  return `By checking this box, I agree to receive ${label} from ${smsProgram.brandName} at the phone number provided (${type.description}). ${smsProgram.messageFrequency}. ${smsProgram.rates}. ${smsProgram.optOut}. ${smsProgram.help}.`;
}
