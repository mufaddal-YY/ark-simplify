import LandingThankYou from "@/components/construction-landing/landing-thank-you";

export const metadata = {
  title: "Construction Enquiry Submitted",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ConstructionLandingThankYouPage() {
  return (
    <LandingThankYou
      campaign="construction"
      landingPath="/construction-estimating"
      logoSrc="/const_logo.png"
      logoAlt="ARK Simplify Construction"
      accent="#ff4900"
      accentDark="#d83f00"
      accentSoft="#fff0ea"
      shadow="rgba(255, 73, 0, 0.24)"
      eyebrow="Sample request received"
      title="Your free takeoff request is on our radar."
      description="Thanks for sharing your project details. An ARK construction specialist will review the request and contact you within one business day to confirm the scope and next step."
      phone="+91 8668473798"
    />
  );
}
