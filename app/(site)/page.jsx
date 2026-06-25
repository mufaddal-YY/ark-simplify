import HomeHero from "@/components/homepage/home-hero";
import CTA_common from "@/components/common/CTA_common";
import Clientele from "@/components/homepage/clientele";
import IndustriesWeServe from "@/components/homepage/industries-weserve";
import StatsSection from "@/components/homepage/stats-section";
import Testimonials from "@/components/homepage/testimonials";
import LinkedinArticles from "@/components/homepage/linkedin-articles";
import { getHomepage } from "@/sanity/fetch/homepage";

export const revalidate = 60;

export default async function Home() {
  const homepageData = await getHomepage({ revalidate });

  return (
    <main className="flex-1">
      <HomeHero data={homepageData?.heroBanner} />
      <IndustriesWeServe data={homepageData?.industriesWeServe} />
      <StatsSection data={homepageData?.statsSection} />

      <Clientele data={homepageData?.clienteleSection} />
      <Testimonials />
      <LinkedinArticles />
      <CTA_common />
    </main>
  );
}
