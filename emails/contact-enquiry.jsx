import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { getSmsConsentDisclosure, smsProgram } from "@/lib/sms-program";

const smsConsentTypes = Object.keys(smsProgram.messageTypes);

const smsConsentLabel = {
  customerCare: "Customer care",
  marketing: "Marketing",
};

const smsEvidenceLabel = {
  consentedAt: "Consented At (UTC)",
  consentVersion: "Consent Version",
  pageUrl: "Page URL",
  ipAddress: "IP Address",
};

const fieldLabel = {
  name: "Name",
  company: "Company",
  email: "Email",
  phone: "Phone Number",
  designation: "Designation",
  inventoryChallenge: "Biggest Inventory Challenge",
  service: "Service Required",
  message: "Message",
};

export default function ContactEnquiryEmail({
  name,
  company,
  email,
  phone,
  designation,
  inventoryChallenge,
  service,
  message,
  smsConsent,
}) {
  const fields = {
    name,
    company,
    email,
    phone,
    designation,
    inventoryChallenge,
    service,
  };
  const consentedTypes = smsConsentTypes.filter((key) => smsConsent?.[key]);
  const hasSmsConsent = consentedTypes.length > 0;

  return (
    <Html>
      <Head />
      <Preview>New contact enquiry from {name}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>New Contact Enquiry</Heading>
          <Text style={styles.intro}>
            A new enquiry was submitted through the ARK Simplify contact form.
          </Text>

          <Section style={styles.details}>
            {Object.entries(fields).filter(([, value]) => value).map(([key, value]) => (
              <Section key={key} style={styles.row}>
                <Text style={styles.label}>{fieldLabel[key]}</Text>
                <Text style={styles.value}>{value}</Text>
              </Section>
            ))}
          </Section>

          <Hr style={styles.divider} />

          <Text style={styles.label}>{fieldLabel.message}</Text>
          <Text style={styles.message}>{message}</Text>

          <Hr style={styles.divider} />

          <Text style={styles.sectionHeading}>SMS Consent</Text>
          <Section style={styles.details}>
            {smsConsentTypes.map((key) => (
              <Section key={key} style={styles.row}>
                <Text style={styles.label}>
                  {smsConsentLabel[key] ?? smsProgram.messageTypes[key].label}
                </Text>
                <Text style={styles.value}>
                  {smsConsent?.[key] ? "Yes" : "No"}
                </Text>
              </Section>
            ))}
            {hasSmsConsent
              ? Object.entries(smsEvidenceLabel).map(([key, label]) => (
                  <Section key={key} style={styles.row}>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.value}>
                      {smsConsent[key] ?? "Not available"}
                    </Text>
                  </Section>
                ))
              : null}
          </Section>

          {hasSmsConsent ? (
            <Section style={styles.consentText}>
              <Text style={styles.label}>Consent Language Shown</Text>
              {consentedTypes.map((key) => (
                <Text key={key} style={styles.disclosure}>
                  {getSmsConsentDisclosure(key)}
                </Text>
              ))}
            </Section>
          ) : null}
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    margin: 0,
    backgroundColor: "#f6f7fa",
    color: "#363b4f",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  container: {
    margin: "32px auto",
    padding: "32px",
    backgroundColor: "#ffffff",
    border: "1px solid #e4e7ee",
    borderRadius: "8px",
    maxWidth: "620px",
  },
  heading: {
    margin: "0 0 12px",
    color: "#363b4f",
    fontSize: "28px",
    lineHeight: "36px",
  },
  intro: {
    margin: "0 0 24px",
    color: "#5f6678",
    fontSize: "15px",
    lineHeight: "24px",
  },
  details: {
    margin: "0",
  },
  row: {
    padding: "12px 0",
    borderBottom: "1px solid #eef0f4",
  },
  label: {
    margin: "0 0 4px",
    color: "#ff4900",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  value: {
    margin: 0,
    color: "#363b4f",
    fontSize: "16px",
    lineHeight: "24px",
  },
  divider: {
    margin: "24px 0",
    borderColor: "#e4e7ee",
  },
  message: {
    margin: 0,
    color: "#363b4f",
    fontSize: "16px",
    lineHeight: "26px",
    whiteSpace: "pre-wrap",
  },
  sectionHeading: {
    margin: "0 0 4px",
    color: "#363b4f",
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "26px",
  },
  consentText: {
    marginTop: "16px",
  },
  disclosure: {
    margin: "0 0 8px",
    color: "#5f6678",
    fontSize: "13px",
    lineHeight: "20px",
  },
};
