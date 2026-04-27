import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const estimatingTabs = [
  {
    value: "subcontractors",
    trigger: "Subcontractors",
    title: "Estimating for Subcontractors",
    image: "/construction/subconstractor.jpg",
    points: [
      "Detailed quantity take-offs",
      "Full cost estimation and bid preparation",
      "Vendor outreach and pricing based on client preferences",
      "Multiple vendor options for comparison",
      "Bid review discussions prior to submission",
      "Tender submission support",
      "Communication with the GC during the bidding phase",
    ],
    summary:
      "This model allows subcontractors to focus on winning and executing work while maintaining strong bid discipline and documentation.",
  },
  {
    value: "general-contractors",
    trigger: "General Contractors",
    title: "Estimating for General Contractors",
    image: "/construction/general%20contractor.jpg",
    points: [
      "Cross-trade quantity verification",
      "Review of subcontractor proposals",
      "Bid leveling across competing subcontractors",
      "Identification of scope gaps and specification deviations",
      "Review of assumptions, exclusions, and compliance",
      "Support during subcontractor clarification queries",
    ],
    summary:
      "The goal is simple. Help GCs compare bids accurately and select subcontractors based on reliable information.",
  },
  {
    value: "manufacturers",
    trigger: "Manufacturers",
    title: "Estimating for Manufacturers",
    image: "/construction/manufacturer.jpg",
    points: [
      "Quantity estimation where required",
      "Purchase order review and verification",
      "Inventory planning inputs",
      "Coordination with GCs & Subcontractors regarding supply requirements",
    ],
    summary:
      "This ensures material commitments align with actual project demand.",
  },
];

function EstimatingPanelContent({ tab, compact = false }) {
  return (
    <div
      className={`grid gap-6 ${
        compact ? "" : "xl:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] xl:items-stretch"
      }`}
    >
      <div className={`flex ${compact ? "" : "xl:order-2"}`}>
        <div className="min-h-[13rem] w-full overflow-hidden rounded-lg border border-white/10 bg-[#0b0f1a] xl:h-full xl:min-h-[24rem]">
          <Image
            src={tab.image}
            alt={tab.title}
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className={`space-y-4 ${compact ? "" : "xl:order-1"}`}>
        <div className="space-y-2">
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-white/52 uppercase">
            Estimating Workflow
          </p>
          <h4 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            {tab.title}
          </h4>
        </div>

        <ul className="space-y-2.5">
          {tab.points.map((point) => (
            <li
              key={point}
              className="grid grid-cols-[0.5rem_minmax(0,1fr)] gap-3 text-sm leading-6 text-white/74 sm:text-lg sm:leading-7"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-brand-construction" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm leading-7 text-white/72 sm:text-lg sm:leading-8">
          {tab.summary}
        </p>
      </div>
    </div>
  );
}

export default function EstimatingServices() {
  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-5 text-center">
          
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-brand-secondary lg:text-5xl">
            Estimating services
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
            Estimating sits at the center of every successful project. Ark
            supports clients with structured quantity analysis, cost
            evaluation, and bid verification to ensure decisions are based on
            accurate and comparable information.
          </p>
        </div>

        <div className="space-y-6">
          <div className="sm:hidden">
            <div className="space-y-4 rounded-lg border border-brand-secondary/10 bg-[#151827] p-3 shadow-[0_28px_90px_rgba(21,24,39,0.16)]">
              <h3 className="px-1 text-2xl font-semibold tracking-[-0.03em] text-white">
                Estimating services for
              </h3>

              <Accordion
                defaultValue={["subcontractors"]}
                type="multiple"
                className="gap-2"
              >
                {estimatingTabs.map((tab) => (
                  <AccordionItem
                    key={tab.value}
                    value={tab.value}
                    className="overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(54,59,79,0.52),transparent_34%),linear-gradient(135deg,rgba(54,59,79,0.48),rgba(10,12,20,0.94)_62%)]"
                  >
                    <AccordionTrigger className="items-center px-3 py-3 text-base font-semibold text-white no-underline hover:no-underline [&>[data-slot=accordion-trigger-icon]]:text-white/72">
                      {tab.trigger}
                    </AccordionTrigger>
                    <AccordionContent className="px-3 pb-3">
                      <EstimatingPanelContent tab={tab} compact />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <Tabs
            defaultValue="subcontractors"
            orientation="vertical"
            className="hidden rounded-lg border border-brand-secondary/10 bg-[#151827] shadow-[0_28px_90px_rgba(21,24,39,0.16)] sm:flex sm:flex-col lg:grid lg:grid-cols-[17rem_minmax(0,1.2fr)] lg:gap-0 lg:p-0"
          >
            <div className="space-y-4 border-b border-white/10 p-4 sm:p-6 lg:self-stretch lg:border-r lg:border-b-0 lg:px-0 lg:py-6">
              <h3 className="px-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:px-6 sm:text-4xl">
                Estimating services for
              </h3>

              <TabsList
                variant="line"
                className="h-auto w-full gap-0 rounded-none bg-transparent p-0"
              >
                {estimatingTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="min-h-[5.5rem] w-full cursor-pointer justify-between rounded-none border-x-0 border-t-0 border-b border-white/10 bg-primary px-4 py-5 text-left text-base font-semibold text-white/68 transition-all duration-300 hover:bg-white/4 hover:text-white data-active:hover:text-brand-construction data-active:border-brand-construction data-active:bg-[#ff0000] data-active:text-brand-construction after:hidden sm:px-6"
                  >
                    <span>{tab.trigger}</span>
                    <FiArrowRight className="h-4 w-4 shrink-0" />
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="space-y-4 p-4 sm:p-6 lg:p-6">
              {estimatingTabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="mt-0 rounded-lg border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(54,59,79,0.52),transparent_34%),linear-gradient(135deg,rgba(54,59,79,0.48),rgba(10,12,20,0.94)_62%)] p-5 text-white sm:p-6 lg:p-7"
                >
                  <EstimatingPanelContent tab={tab} />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
