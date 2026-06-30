import ContactBanner from "@/components/contact/contact-banner";
import ContactContent from "@/components/contact/contact-content";
import { generateSeoMetadata, getContact } from "@/sanity/fetch";

export const revalidate = 60;

export function generateMetadata() {
  return generateSeoMetadata("contact", { path: "/contact-us", revalidate });
}

export default async function ContactUsPage() {
  const contact = await getContact({ revalidate });

  return (
    <main className="flex-1">
      <ContactBanner data={contact} />
      <ContactContent data={contact} />
    </main>
  );
}
