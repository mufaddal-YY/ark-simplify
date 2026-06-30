import AboutBanner from "@/components/about/about-banner";
import AboutIntro from "@/components/about/about-intro";
import AboutWhoWeAre from "@/components/about/about-who-we-are";
import AboutValues from "@/components/about/about-values";
import { generateSeoMetadata, getAboutPage } from "@/sanity/fetch";

export const revalidate = 60;

export function generateMetadata() {
  return generateSeoMetadata("about", { path: "/about-us", revalidate });
}

export default async function AboutUsPage() {
  const aboutPage = await getAboutPage({ revalidate });

  return (
    <main className="flex-1">
      <AboutBanner data={aboutPage?.banner} />
      <AboutIntro data={aboutPage?.intro} />
      <AboutWhoWeAre data={aboutPage?.whoWeAre} />
      <AboutValues data={aboutPage?.values} />
    </main>
  );
}
