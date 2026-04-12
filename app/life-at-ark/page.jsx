import LifeBanner from "@/components/life-at-ark/life-banner";
import LifeIntro from "@/components/life-at-ark/life-intro";
import LifeGallery from "@/components/life-at-ark/life-gallery";
import LifeWorkstyle from "@/components/life-at-ark/life-workstyle";
import LifeCareers from "@/components/life-at-ark/life-careers";

export const metadata = {
  title: "Life at ARK",
  description:
    "A closer look at life at Ark Simplify, how our teams work, and why this page also serves as a careers page for the company.",
};

export default function LifeAtArkPage() {
  return (
    <main className="flex-1">
      <LifeBanner />
      <LifeIntro />
      <LifeGallery />
      <LifeWorkstyle />
      <LifeCareers />
    </main>
  );
}
