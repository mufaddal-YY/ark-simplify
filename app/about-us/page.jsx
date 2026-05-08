import AboutBanner from "@/components/about/about-banner";
import AboutIntro from "@/components/about/about-intro";
import AboutWhoWeAre from "@/components/about/about-who-we-are";
import AboutValues from "@/components/about/about-values";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Ark Simplify and the values behind how we support clients across construction, finance, and operations.",
};

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      <AboutBanner />
      <AboutIntro />
      <AboutWhoWeAre />
      <AboutValues />
    </main>
  );
}
