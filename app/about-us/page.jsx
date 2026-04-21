import AboutBanner from "@/components/about/about-banner";
import AboutIntro from "@/components/about/about-intro";
import AboutWhoWeAre from "@/components/about/about-who-we-are";
import AboutValues from "@/components/about/about-values";
import AboutLeadership from "@/components/about/about-leadership";
import AboutProjectManagementTeam from "@/components/about/about-project-management-team";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Ark Simplify, our leadership team, and the values behind how we support clients across construction, finance, and operations.",
};

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      <AboutBanner />
      <AboutIntro />
      <AboutWhoWeAre />
      <AboutValues />
      <AboutLeadership />
      <AboutProjectManagementTeam />
    </main>
  );
}
