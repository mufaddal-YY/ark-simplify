import LandingThankYou from "@/components/construction-landing/landing-thank-you";

export const metadata = {
  title: "Finance Enquiry Submitted",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FinanceLandingThankYouPage() {
  return (
    <LandingThankYou
      campaign="finance"
      landingPath="/ark-simplify-finance-landing"
      logoSrc="/logo_finance.png"
      logoAlt="ARK Simplify Finance"
      accent="#00b920"
      accentDark="#007f16"
      accentSoft="#eaf8ed"
      shadow="rgba(0, 185, 32, 0.24)"
      eyebrow="Health check request received"
      title="Your books are ready for a closer look."
      description="Thanks for sharing your details. An ARK finance specialist will contact you within one business day to confirm access and begin your free bookkeeping health check."
      phone="+1 (312) 380-0712"
    />
  );
}
