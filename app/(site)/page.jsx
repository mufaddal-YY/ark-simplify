import HomeHero from "@/components/homepage/home-hero";
import CTA_common from "@/components/common/CTA_common";
import Clientele from "@/components/homepage/clientele";
import IndustriesWeServe from "@/components/homepage/industries-weserve";
import StatsSection from "@/components/homepage/stats-section";
import Testimonials from "@/components/homepage/testimonials";
import LinkedinArticles from "@/components/homepage/linkedin-articles";
import {
  generateSeoMetadata,
  getHomepage,
  getLinkedinArticles,
  getTestimonials,
} from "@/sanity/fetch";

export const revalidate = 60;

export function generateMetadata() {
  return generateSeoMetadata("home", { path: "/", revalidate });
}

export default async function Home() {
  const [homepageData, testimonials, linkedinArticles] = await Promise.all([
    getHomepage({ revalidate }),
    getTestimonials({ revalidate }),
    getLinkedinArticles({ revalidate }),
  ]);

  return (
    <main className="flex-1">
      <HomeHero data={homepageData?.heroBanner} />
      <IndustriesWeServe data={homepageData?.industriesWeServe} />
      <StatsSection data={homepageData?.statsSection} />

      <Clientele data={homepageData?.clienteleSection} />
      <Testimonials data={testimonials} />
      <LinkedinArticles data={linkedinArticles} />
      <CTA_common data={homepageData?.ctaSection} />
    </main>
  );
}
