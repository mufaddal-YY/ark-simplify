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
};
