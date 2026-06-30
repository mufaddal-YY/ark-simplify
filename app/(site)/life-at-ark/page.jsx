import LifeBanner from "@/components/life-at-ark/life-banner";
import LifeIntro from "@/components/life-at-ark/life-intro";
import LifeGallery from "@/components/life-at-ark/life-gallery";
import LifeWorkstyle from "@/components/life-at-ark/life-workstyle";
import LifeCareers from "@/components/life-at-ark/life-careers";
import LifeBenefits from "@/components/life-at-ark/life-benefits";
import {
  generateSeoMetadata,
  getJobOpenings,
  getLifeAtArkPage,
} from "@/sanity/fetch";

export const revalidate = 60;

export function generateMetadata() {
  return generateSeoMetadata("lifeAtArk", {
    path: "/life-at-ark",
    revalidate,
  });
}

export default async function LifeAtArkPage() {
  const [lifeAtArkPage, jobOpenings] = await Promise.all([
    getLifeAtArkPage({ revalidate }),
    getJobOpenings({ revalidate }),
  ]);

  return (
    <main className="flex-1">
      <LifeBanner data={lifeAtArkPage?.banner} />
      <LifeIntro data={lifeAtArkPage?.intro} />
      <LifeGallery data={lifeAtArkPage?.gallery} />
      <LifeWorkstyle data={lifeAtArkPage?.workstyle} />
      <LifeCareers data={lifeAtArkPage?.careers} jobs={jobOpenings?.jobs} />
      <LifeBenefits data={lifeAtArkPage?.benefits} />
    </main>
  );
}
