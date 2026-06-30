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
import { generateSeoMetadata, getConstructionPage } from "@/sanity/fetch";

export const revalidate = 60;

export function generateMetadata() {
  return generateSeoMetadata("construction", {
    path: "/construction",
    revalidate,
  });
}

export default async function ConstructionPage() {
  const constructionPage = await getConstructionPage({ revalidate });

  return (
    <main className="flex-1">
      <ConstructionBanner data={constructionPage?.banner} />
      <ConstructionSubnav />
      <section id="overview" className="scroll-mt-36 md:scroll-mt-44">
        <ConstructionOverview data={constructionPage?.overview} />
      </section>
      <section id="estimating" className="scroll-mt-36 md:scroll-mt-44">
        <EstimatingServices data={constructionPage?.estimating} />
      </section>
      <section id="detailing" className="scroll-mt-36 md:scroll-mt-44">
        <DetailingServices data={constructionPage?.detailing} />
      </section>
      <section id="project-support" className="scroll-mt-36 md:scroll-mt-44">
        <ProjectManagementSupport data={constructionPage?.projectSupport} />
      </section>
      <section id="who-we-work-with" className="scroll-mt-36 md:scroll-mt-44">
        <WhoWeWorkWith data={constructionPage?.audiences} />
      </section>
      <section id="workflow-fit" className="scroll-mt-36 md:scroll-mt-44">
        <WorkflowFit data={constructionPage?.workflowFit} />
      </section>
      <section id="case-studies" className="scroll-mt-36 md:scroll-mt-44">
        <CaseStudies data={constructionPage?.caseStudies} />
      </section>
      <section id="partners" className="scroll-mt-36 md:scroll-mt-44">
        <PartnersClients data={constructionPage?.partners} />
      </section>
      <section id="software-tools" className="scroll-mt-36 md:scroll-mt-44">
        <SoftwareTools data={constructionPage?.softwareTools} />
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
