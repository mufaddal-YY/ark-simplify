import HomeHero from "@/components/homepage/home-hero";
import CTA_common from "@/components/common/CTA_common";
import Clientele from "@/components/homepage/clientele";
import IndustriesWeServe from "@/components/homepage/industries-weserve";
import StatsSection from "@/components/homepage/stats-section";
import Testimonials from "@/components/homepage/testimonials";


export default function Home() {
  return (
    <main className="flex-1">
      <HomeHero />
      <IndustriesWeServe  />
      <StatsSection />
      
      <Clientele  />
      <Testimonials  />
      <CTA_common />
    </main>
  );
}
