import { smsProgram } from "./sms-program";

// Paragraphs and bullet items support inline links written as
// "[label](/path)", "[label](#section-key)", "[label](mailto:...)" or
// "[label](https://...)". They are rendered by components/common/legal-document.

const { customerCare, marketing } = smsProgram.messageTypes;

// The checkbox descriptions are written in the first person ("my enquiry");
// legal pages address the reader, so switch to "your".
function toPolicyVoice(text) {
  const sentence = text.replace(/\bmy\b/g, "your").replace(/\bI\b/g, "you");

  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

const supportPhoneHref = `tel:+${smsProgram.supportPhone.replace(/\D/g, "")}`;

// Shared with the Terms of Service so both legal pages stay consistent.
export const legalContactDetails = `${smsProgram.legalName}\nEmail: [admin@arksimplify.com](mailto:admin@arksimplify.com)\nWebsite: [www.arksimplify.com](https://www.arksimplify.com)`;

export const smsSupportContact = `[${smsProgram.supportEmail}](mailto:${smsProgram.supportEmail}) or [${smsProgram.supportPhone}](${supportPhoneHref})`;

export const smsMessageTypeSummaries = {
  customerCare: `${customerCare.label} (transactional): ${toPolicyVoice(customerCare.description)}.`,
  marketing: `${marketing.label} (promotional): ${toPolicyVoice(marketing.description)}. These are sent only if you separately opt in to marketing text messages.`,
};

export const smsDataSharingStatement =
  "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing with subcontractors in support services, such as customer service or SMS platform providers that deliver our messages, is permitted. All of the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.";

export const defaultPrivacyPolicy = {
  title: "Privacy Policy",
  lastUpdated: "2026-10-01",
  introduction: [
    'ARKSIMPLIFIQ Private Limited ("ARK Simplify", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, store, and protect your personal information when you interact with our website, our services, our optional SMS (text message) program, and our LinkedIn Lead Generation Forms ("Lead Gen Forms").',
    "By submitting your information through our Lead Gen Forms or using our website, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and processing of your information as described below. Text messages are sent only if you opt in separately, as described in the [SMS / Text Messaging](#sms-text-messaging) section.",
    `This Privacy Policy should be read together with our [Terms of Service](${smsProgram.termsPath}), which govern your use of our website and our SMS program. Details about how we handle mobile numbers and text message consent are set out in the [SMS / Text Messaging](#sms-text-messaging) section below.`,
  ],
  sections: [
    {
      _key: "information-we-collect",
      heading: "Information We Collect",
      paragraphs: ["We may collect the following categories of personal information:"],
      items: [
        "Contact Information: Name, email address, phone number, company name, job title, and business address.",
        "Professional Information: Industry, company size, project requirements, and business needs related to construction estimating and finance operational support services.",
        "Lead Generation Data: Information voluntarily submitted through LinkedIn Lead Gen Forms, including responses to any custom questions.",
        "SMS Opt-In Information: A record of your text message consent and the mobile number you opted in, created only if you choose to opt in to text messages (see [SMS / Text Messaging](#sms-text-messaging)).",
        "Technical Information: IP address, browser type, operating system, device information, cookies, and usage analytics.",
        "Communication Records: Emails, phone calls, meeting notes, inquiries, and customer support interactions.",
      ],
    },
    {
      _key: "how-we-collect",
      heading: "How We Collect Your Information",
      paragraphs: ["We collect personal information through:"],
      items: [
        "LinkedIn Lead Generation Forms.",
        "Contact forms and inquiry forms on our website, including the optional, unchecked SMS opt-in checkboxes on those forms.",
        "Email communications, phone calls, meetings, and other business correspondence.",
        "Cookies, analytics tools, and similar tracking technologies when you visit our website.",
      ],
    },
    {
      _key: "how-we-use",
      heading: "How We Use Your Information",
      paragraphs: ["We use your information to:"],
      items: [
        "Respond to inquiries and provide requested information.",
        "Prepare proposals, quotations, and project estimates.",
        "Deliver construction estimating and finance operational support services.",
        "Send the text messages you have opted in to: customer care & service text messages and/or marketing text messages, each only with its own separate opt-in (see [SMS / Text Messaging](#sms-text-messaging)).",
        "Send business updates, newsletters, and marketing communications (only where permitted by applicable law).",
        "Improve our website, services, and customer experience.",
        "Detect fraud, maintain security, and prevent unauthorized access.",
        "Comply with legal obligations and enforce contractual rights.",
      ],
    },
    {
      _key: "sms-text-messaging",
      heading: "SMS / Text Messaging",
      paragraphs: [
        `${smsProgram.brandName} offers an optional SMS (text message) program operated by ${smsProgram.legalName}. We create a record of your SMS consent (the date and time of consent, the version of the consent wording shown to you, the website page where you opted in, and your IP address) only when you opt in by selecting one or both of the unchecked, optional SMS checkboxes on our website forms. We use the phone number you provide to send text messages only if you have opted in. The program has two separate message types, and each has its own opt-in checkbox:`,
        "SMS consent is optional and is not a condition of purchase of any goods or services. You can submit any form on our website without opting in to text messages, and submitting a form does not, by itself, enroll you in text messages. Opting in to customer care messages does not opt you in to marketing messages, and marketing messages are sent only if you select the separate marketing checkbox.",
        `${smsProgram.messageFrequency}. ${smsProgram.rates}. ${smsProgram.optOut} at any time; you will receive one confirmation message and no further text messages unless you opt in again. ${smsProgram.help}, or contact us at ${smsSupportContact}.`,
        smsDataSharingStatement,
        "Within our SMS program, we use your mobile number and SMS consent records only to send the text messages you have opted in to, to honor opt-out requests, and to keep a record of your consent as required by applicable law and carrier rules.",
        `The full terms of our SMS program, including how to opt out and get help, are set out in our [Terms of Service](${smsProgram.termsPath}#sms-terms).`,
      ],
      items: [smsMessageTypeSummaries.customerCare, smsMessageTypeSummaries.marketing],
    },
    {
      _key: "data-storage-security",
      heading: "Data Storage and Security",
      paragraphs: [
        "We implement reasonable administrative, technical, and physical safeguards to protect your personal information, including:",
        "Although we take appropriate security measures, no method of electronic transmission or storage is completely secure. Therefore, we cannot guarantee absolute security.",
      ],
      items: [
        "SSL/TLS encryption for data transmitted through our website.",
        "Access controls limiting personal information to authorized personnel.",
        "Secure servers and routine security updates.",
        "Regular monitoring and security reviews.",
        "Data minimization practices to retain only the information necessary for business or legal purposes.",
      ],
    },
    {
      _key: "confidentiality",
      heading: "Confidentiality",
      paragraphs: [
        "ARK Simplify treats all client and prospect information as strictly confidential.",
        "We do not sell, rent, or trade your personal information for marketing purposes. Information shared with us will only be used for legitimate business purposes and handled with appropriate confidentiality.",
      ],
    },
    {
      _key: "sharing-information",
      heading: "Sharing of Information",
      paragraphs: [
        "We may share personal information only in the following circumstances:",
        "All service providers are expected to maintain appropriate confidentiality and security measures.",
        "SMS opt-in data and consent are never shared with, sold, rented, or traded to third parties or affiliates for marketing or promotional purposes. The circumstances listed above exclude text messaging originator opt-in data and consent, which will not be shared with any third parties. See [SMS / Text Messaging](#sms-text-messaging) for details.",
      ],
      items: [
        "Trusted third-party service providers (such as CRM systems, email platforms, cloud hosting providers, analytics providers, and IT support vendors) that assist in operating our business.",
        "When required by applicable law or legal process.",
        "During mergers, acquisitions, or business restructuring.",
        "When you have provided your explicit consent.",
      ],
    },
    {
      _key: "data-retention",
      heading: "Data Retention",
      paragraphs: [
        "We retain personal information only as long as necessary to fulfill the purposes described in this Privacy Policy or to comply with legal, accounting, or regulatory obligations.",
        "Prospect and marketing information is generally retained for up to three (3) years after the last meaningful interaction unless a longer retention period is required by law.",
        "SMS consent and opt-out records are retained for as long as needed to honor your messaging preferences and to demonstrate consent as required by applicable law and carrier rules.",
      ],
    },
    {
      _key: "your-rights",
      heading: "Your Rights",
      paragraphs: [
        "Depending on your location and applicable law, you may have the right to:",
        "To exercise any of these rights, please contact us using the details provided below.",
      ],
      items: [
        "Access your personal information.",
        "Correct inaccurate information.",
        "Request deletion of your information.",
        "Restrict or object to processing.",
        "Withdraw consent where applicable.",
        "Request data portability.",
        "Unsubscribe from marketing communications at any time.",
        `Opt out of text messages at any time by replying STOP to any message we send. Reply HELP for help, or contact us at ${smsSupportContact}.`,
      ],
    },
    {
      _key: "cookies",
      heading: "Cookies and Tracking Technologies",
      paragraphs: [
        "Our website uses cookies and similar technologies to:",
        "You may disable cookies through your browser settings; however, certain website features may not function properly.",
      ],
      items: [
        "Improve website functionality.",
        "Analyze website traffic.",
        "Understand visitor behavior.",
        "Enhance user experience.",
      ],
    },
    {
      _key: "linkedin-lead-gen",
      heading: "LinkedIn Lead Generation Forms",
      paragraphs: ["When you submit information through LinkedIn Lead Gen Forms:"],
      items: [
        "Your information is collected by ARK Simplify in accordance with this Privacy Policy.",
        "LinkedIn may also process your information according to LinkedIn's own Privacy Policy.",
        "We will use your information solely to respond to your inquiry, provide requested information, and communicate regarding our services.",
        "You may opt out of future communications at any time.",
      ],
    },
    {
      _key: "international-transfers",
      heading: "International Data Transfers",
      paragraphs: [
        "If you access our services from outside India, your information may be transferred to, processed, and stored in countries where our service providers operate.",
        "Where required, we implement appropriate safeguards to protect personal information in accordance with applicable data protection laws.",
      ],
    },
    {
      _key: "childrens-privacy",
      heading: "Children's Privacy",
      paragraphs: [
        "Our services are intended for businesses and professionals and are not directed toward individuals under the age of 18.",
        "We do not knowingly collect personal information from children.",
      ],
    },
    {
      _key: "governing-law",
      heading: "Governing Law",
      paragraphs: [
        "This Privacy Policy shall be governed by and interpreted in accordance with the laws of India.",
        "Any disputes arising under this Privacy Policy shall be subject to the exclusive jurisdiction of the courts located in Nagpur, Maharashtra, India.",
      ],
    },
    {
      _key: "contact-us",
      heading: "Contact Us",
      paragraphs: [
        "If you have any questions regarding this Privacy Policy or wish to exercise your privacy rights, please contact us:",
        legalContactDetails,
        "We aim to respond to privacy-related requests within 30 days.",
      ],
    },
    {
      _key: "changes",
      heading: "Changes to This Privacy Policy",
      paragraphs: [
        'We may revise this Privacy Policy from time to time to reflect changes in our business practices, legal requirements, or technology. The updated version will always be published on this page with a revised "Last Updated" date.',
        "Your continued use of our website or services after any changes become effective constitutes your acceptance of the updated Privacy Policy.",
      ],
    },
  ],
  seo: {
    metaTitle: "Privacy Policy | ARK Simplify",
    metaDescription:
      "Read ARK Simplify's Privacy Policy to learn how we collect, use, store, protect, and share personal information across our website, lead forms, and SMS program.",
    keywords: [
      "ARK Simplify privacy policy",
      "data protection",
      "personal information",
      "LinkedIn Lead Gen Forms",
      "SMS privacy policy",
      "privacy rights",
    ],
    ogTitle: "Privacy Policy | ARK Simplify",
    ogDescription:
      "Learn how ARK Simplify collects, uses, stores, protects, and shares personal information.",
  },
};
