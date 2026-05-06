import HomeHero from "@/components/homepage/home-hero";
import CTA_common from "@/components/common/CTA_common";
import Clientele from "@/components/homepage/clientele";
import IndustriesWeServe from "@/components/homepage/industries-weserve";
import StatsSection from "@/components/homepage/stats-section";
import Testimonials from "@/components/homepage/testimonials";

const ENABLE_PREMIUM_CONSTRUCTION_PREVIEW = true;

export default function Home() {
  return (
    <main className="flex-1">
      <HomeHero />
      <IndustriesWeServe preview={ENABLE_PREMIUM_CONSTRUCTION_PREVIEW} />
      <StatsSection />
      
      <Clientele preview={ENABLE_PREMIUM_CONSTRUCTION_PREVIEW} />
      <Testimonials preview={ENABLE_PREMIUM_CONSTRUCTION_PREVIEW} />
      <CTA_common />
    </main>
  );
}
