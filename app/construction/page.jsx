import ConstructionBanner from "@/components/construction/construction-banner";
import ConstructionSubnav from "@/components/construction/construction-subnav";
import EstimatingServices from "@/components/construction/estimating-services";
import ConstructionOverview from "@/components/construction/construction-overview";
import WorkflowFit from "@/components/construction/workflow-fit";
import DetailingServices from "@/components/construction/detailing-services";
import ProjectManagementSupport from "@/components/construction/project-management-support";
import WhoWeWorkWith from "@/components/construction/who-we-work-with";
import CaseStudies from "@/components/construction/case-studies";
import PartnersClients from "@/components/construction/partners-clients";
import SoftwareTools from "@/components/construction/software-tools";
import Testimonials from "@/components/homepage/testimonials";
import CTA_common from "@/components/common/CTA_common";

export const metadata = {
  title: "Construction",
  description:
    "Construction support across estimating, detailing, and project management workflows for manufacturers, general contractors, and subcontractors.",
};

export default function ConstructionPage() {
  return (
    <main className="flex-1">
      <ConstructionBanner />
      <ConstructionSubnav />
      <section id="overview" className="scroll-mt-36 md:scroll-mt-44">
        <ConstructionOverview />
      </section>
      <section id="estimating" className="scroll-mt-36 md:scroll-mt-44">
        <EstimatingServices />
      </section>
      <section id="detailing" className="scroll-mt-36 md:scroll-mt-44">
        <DetailingServices />
      </section>
      <section id="project-support" className="scroll-mt-36 md:scroll-mt-44">
        <ProjectManagementSupport />
      </section>
      <section id="who-we-work-with" className="scroll-mt-36 md:scroll-mt-44">
        <WhoWeWorkWith />
      </section>
      <section id="workflow-fit" className="scroll-mt-36 md:scroll-mt-44">
        <WorkflowFit />
      </section>
      <section id="case-studies" className="scroll-mt-36 md:scroll-mt-44">
        <CaseStudies />
      </section>
      <section id="partners" className="scroll-mt-36 md:scroll-mt-44">
        <PartnersClients />
      </section>
      <section id="software-tools" className="scroll-mt-36 md:scroll-mt-44">
        <SoftwareTools />
      </section>
      <section id="testimonials" className="scroll-mt-36 md:scroll-mt-44">
        <Testimonials variant="construction" />
      </section>
      <section id="cta" className="scroll-mt-36 md:scroll-mt-44">
        <CTA_common />
      </section>
    </main>
  );
}
