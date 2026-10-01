import {
  legalContactDetails,
  smsDataSharingStatement,
  smsMessageTypeSummaries,
  smsSupportContact,
} from "./privacy-policy-content";
import { smsProgram } from "./sms-program";

// Code-only content for the Terms of Service page (no Sanity document).
// Paragraphs and bullet items support the same inline-link markup as the
// Privacy Policy: "[label](/path)", "[label](#section-key)", "[label](mailto:...)".

export const defaultTermsOfService = {
  title: "Terms of Service",
  lastUpdated: "2026-10-01",
  introduction: [
    `These Terms of Service ("Terms") govern your access to and use of the ARK Simplify website at www.arksimplify.com (the "Website"), the contact and enquiry forms on it, and our optional SMS (text message) program, all operated by ${smsProgram.legalName} ("ARK Simplify", "we", "our", or "us").`,
    `Please read these Terms carefully, together with our [Privacy Policy](${smsProgram.privacyPolicyPath}). The terms that apply to text messages are set out in the [SMS / Text Messaging Terms](#sms-terms) section below.`,
  ],
  sections: [
    {
      _key: "acceptance-of-terms",
      heading: "Acceptance of Terms",
      paragraphs: [
        `By accessing or using the Website, submitting a form, or opting in to text messages, you agree to be bound by these Terms and acknowledge our [Privacy Policy](${smsProgram.privacyPolicyPath}). If you do not agree, please do not use the Website.`,
        "If you use the Website on behalf of a company or other organization, you confirm that you are authorized to accept these Terms on its behalf.",
      ],
    },
    {
      _key: "about-our-services",
      heading: "About ARK Simplify & Our Services",
      paragraphs: [
        `ARK Simplify is the brand name of ${smsProgram.legalName}, a company based in Nagpur, Maharashtra, India. We provide outsourced support services to businesses, including:`,
        "Information about our services on the Website is provided for general information only. The scope, deliverables, fees, and timelines of any engagement are set out in a separate proposal, quotation, or written agreement between you and ARK Simplify, which will prevail over these Terms if they conflict.",
      ],
      items: [
        "Construction estimating and quantity take-off support.",
        "Construction detailing services.",
        "Project management support for construction teams.",
        "Finance operational support, including bookkeeping, AP/AR, purchase order processing, and inventory management.",
      ],
    },
    {
      _key: "use-of-website",
      heading: "Use of Our Website",
      paragraphs: [
        "You agree to use the Website only for lawful purposes. You must not:",
        "We may suspend or restrict access to the Website, or any part of it, at any time and without notice.",
      ],
      items: [
        "Provide false, inaccurate, or misleading information, or submit another person's information without their authorization.",
        "Attempt to gain unauthorized access to the Website, its servers, or any connected systems.",
        "Introduce viruses, malware, or other harmful code, or interfere with the operation or security of the Website.",
        "Use automated tools to scrape, harvest, or collect data from the Website without our prior written permission.",
        "Use the Website to send spam or unsolicited communications, or in any way that violates applicable law.",
      ],
    },
    {
      _key: "enquiries-communications",
      heading: "Enquiries & Communications",
      paragraphs: [
        `When you submit a contact or enquiry form, you agree to provide accurate information. We will use it to respond to your enquiry and to communicate with you about our services, as described in our [Privacy Policy](${smsProgram.privacyPolicyPath}).`,
        "Submitting a form does not create a client relationship or a binding contract. Any engagement is subject to a separate written agreement.",
        "Submitting a form does not enroll you in text messages. We send text messages only if you separately opt in by selecting the relevant optional, unchecked SMS checkbox, as described in the SMS / Text Messaging Terms below.",
        "You may ask us to stop sending marketing emails at any time by contacting us using the details below.",
      ],
    },
    {
      _key: "sms-terms",
      heading: "SMS / Text Messaging Terms",
      paragraphs: [
        "These SMS terms apply if you opt in to receive text messages from us. By opting in, you agree to the following:",
        "We may modify or discontinue the SMS program at any time. Changes to these SMS terms will be posted on this page with a revised \"Last Updated\" date.",
      ],
      items: [
        `Program name: ${smsProgram.brandName}. The SMS program is operated by ${smsProgram.legalName}.`,
        `Program description: ${smsProgram.brandName} sends the two types of text messages described below. Each type has its own separate opt-in.`,
        smsMessageTypeSummaries.customerCare,
        smsMessageTypeSummaries.marketing,
        "Separate, optional opt-in: Each message type requires its own separate opt-in. You opt in by selecting the corresponding unchecked checkbox on one of our website forms. Our SMS checkboxes are never pre-checked, opting in to one message type does not opt you in to the other, and you can submit our forms without opting in to either.",
        "Consent is not a condition of purchase: You are not required to agree to receive text messages as a condition of purchasing any goods or services from us.",
        `Message frequency: ${smsProgram.messageFrequency} depending on your enquiry, the services you use, and the message types you have opted in to.`,
        `Message and data rates: ${smsProgram.rates}. Contact your wireless provider for details about your messaging plan.`,
        `Opting out: ${smsProgram.optOut} at any time. You can also reply STOPALL, END, CANCEL, UNSUBSCRIBE, QUIT, REVOKE, or OPT OUT, or tell us in any reasonable way that you no longer want text messages. After you opt out, you will receive one confirmation message and no further text messages from us unless you opt in again.`,
        `Help: ${smsProgram.help}, or contact us at ${smsSupportContact}.`,
        "Carrier disclaimer: Carriers are not liable for delayed or undelivered messages.",
        "Eligibility: You must be at least 18 years old to opt in. By opting in, you confirm that you are the account holder for the mobile number provided, or that you have the account holder's permission to enroll it. If your mobile number changes or is deactivated, please reply STOP from that number or contact us so we can update our records.",
        `Privacy: We handle your mobile number and SMS consent records as described in our [Privacy Policy](${smsProgram.privacyPolicyPath}#sms-text-messaging). ${smsDataSharingStatement}`,
      ],
    },
    {
      _key: "intellectual-property",
      heading: "Intellectual Property",
      paragraphs: [
        `The Website and its content, including text, graphics, logos, images, page layouts, and software, are owned by or licensed to ${smsProgram.legalName} and are protected by applicable intellectual property laws. The ARK Simplify name and logos may not be used without our prior written permission.`,
        "You may view and print pages of the Website for your own internal business reference. You may not copy, reproduce, modify, distribute, or create derivative works from any Website content without our prior written permission.",
        "Ownership of any work product delivered under a client engagement is governed by the applicable written agreement.",
      ],
    },
    {
      _key: "third-party-links",
      heading: "Third-Party Links & Tools",
      paragraphs: [
        "The Website may contain links to, or features provided by, third-party websites and services, such as LinkedIn, other social media platforms, and WhatsApp. These third parties are not controlled by us, and we are not responsible for their content, policies, or practices.",
        "Your use of any third-party website or service is governed by that third party's own terms and privacy policy.",
      ],
    },
    {
      _key: "disclaimers",
      heading: "Disclaimers",
      paragraphs: [
        'The Website and its content are provided on an "as is" and "as available" basis for general information only. While we aim to keep information accurate and current, we make no warranties or representations, express or implied, about the accuracy, completeness, reliability, or availability of the Website or its content.',
        "Website content, including blog articles, is not professional engineering, legal, tax, accounting, or financial advice, and should not be relied on as a substitute for advice tailored to your circumstances.",
        "We do not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components.",
      ],
    },
    {
      _key: "limitation-of-liability",
      heading: "Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by applicable law, ARK Simplify and its directors, employees, and affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, data, or business opportunities, arising out of or in connection with your use of, or inability to use, the Website or the SMS program.",
        "Our liability in connection with services provided under a client engagement is governed by the applicable written agreement. Nothing in these Terms excludes or limits any liability that cannot be excluded or limited under applicable law.",
      ],
    },
    {
      _key: "governing-law",
      heading: "Governing Law",
      paragraphs: [
        "These Terms shall be governed by and interpreted in accordance with the laws of India.",
        "Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Nagpur, Maharashtra, India.",
      ],
    },
    {
      _key: "changes",
      heading: "Changes to These Terms",
      paragraphs: [
        'We may revise these Terms from time to time to reflect changes in our services, legal requirements, or business practices. The updated version will always be published on this page with a revised "Last Updated" date.',
        "Your continued use of the Website or our SMS program after any changes become effective constitutes your acceptance of the updated Terms.",
      ],
    },
    {
      _key: "contact-us",
      heading: "Contact Us",
      paragraphs: [
        "If you have any questions about these Terms, please contact us:",
        legalContactDetails,
        `For help with text messages, reply HELP to any message or contact us at ${smsSupportContact}.`,
      ],
    },
  ],
  seo: {
    metaTitle: "Terms of Service | ARK Simplify",
    metaDescription:
      "Read the Terms of Service for ARK Simplify's website, enquiry forms, and optional SMS text messaging program, including message frequency, rates, STOP and HELP.",
    keywords: [
      "ARK Simplify terms of service",
      "terms and conditions",
      "SMS terms",
      "text messaging terms",
      "website terms of use",
    ],
    ogTitle: "Terms of Service | ARK Simplify",
    ogDescription:
      "The terms that govern use of the ARK Simplify website, enquiry forms, and optional SMS text messaging program.",
  },
};
