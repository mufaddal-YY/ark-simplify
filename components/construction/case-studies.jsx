"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const caseStudies = [
  {
    title: "Bid Verification for Multi-Trade Scope",
    description:
      "Structured quantity checks and proposal comparisons helped the project team evaluate bids with more confidence before award.",
  },
  {
    title: "Detailing Support After Award",
    description:
      "Post-award documentation support improved coordination accuracy before fabrication and installation moved forward.",
  },
  {
    title: "Manufacturer Planning Alignment",
    description:
      "Demand review and purchase verification created stronger visibility between material commitments and project timelines.",
  },
  {
    title: "Subcontractor Tender Preparation",
    description:
      "Complete estimating support helped the bidding team stay disciplined while preparing submissions across active opportunities.",
  },
  {
    title: "Execution Coordination Across Teams",
    description:
      "Project tracking and reporting support reduced operational gaps and kept stakeholders aligned during delivery.",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Carousel
        className="mx-auto flex max-w-7xl flex-col gap-8 lg:gap-10"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-brand-secondary sm:text-5xl">
              Case Studies
            </h2>
            <p className="max-w-3xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
              Case studies from construction support delivered around real team workflows.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <CarouselPrevious className="static translate-y-0 border-brand-secondary/12 bg-white shadow-[0_12px_30px_rgba(54,59,79,0.08)]" />
            <CarouselNext className="static translate-y-0 border-brand-secondary/12 bg-white shadow-[0_12px_30px_rgba(54,59,79,0.08)]" />
          </div>
        </div>

        <CarouselContent className="-ml-4">
          {caseStudies.map((study) => (
            <CarouselItem
              key={study.title}
              className="pl-4 sm:basis-1/2 lg:basis-1/3"
            >
              <article className="group relative min-h-[32rem] overflow-hidden rounded-lg">
                <Image
                  src="/construction_industry.jpg"
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/42 to-transparent" />

                <div className="relative z-10 flex min-h-[32rem] flex-col justify-end p-6 sm:p-7">
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <h3 className="max-w-xs text-2xl font-semibold tracking-[-0.03em] text-white">
                        {study.title}
                      </h3>
                      <p className="line-clamp-2 max-w-sm text-sm leading-7 text-white/78 sm:text-base">
                        {study.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/18 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:text-brand-primary"
                    >
                      View Full Case Study
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
