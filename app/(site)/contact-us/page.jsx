import ContactBanner from "@/components/contact/contact-banner";
import ContactContent from "@/components/contact/contact-content";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ark Simplify for construction support, finance operations, ProEstimate services, and general business enquiries.",
};

export default function ContactUsPage() {
  return (
    <main className="flex-1">
      <ContactBanner />
      <ContactContent />
    </main>
  );
}
