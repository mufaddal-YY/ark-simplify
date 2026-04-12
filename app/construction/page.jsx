import ConstructionBanner from "@/components/construction/construction-banner";
import EstimatingServices from "@/components/construction/estimating-services";
import ConstructionOverview from "@/components/construction/construction-overview";
import WorkflowFit from "@/components/construction/workflow-fit";
import DetailingServices from "@/components/construction/detailing-services";
import ProjectManagementSupport from "@/components/construction/project-management-support";
import WhoWeWorkWith from "@/components/construction/who-we-work-with";
import CaseStudies from "@/components/construction/case-studies";
import Vendors from "@/components/construction/vendors";
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
      <ConstructionOverview />
      <EstimatingServices />
      <DetailingServices />
      <ProjectManagementSupport />
      <WhoWeWorkWith />
      <WorkflowFit />
      <CaseStudies />
      <Vendors />
      <PartnersClients />
      <SoftwareTools />
      <Testimonials/>
      <CTA_common />
      
    </main>
  );
}
