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
  "Greater clarity in month-end reporting",
  "Better spend visibility across vendors",
  "Improved inventory reconciliation accuracy",
  "Smoother invoicing and collections workflows",
  "Stronger day-to-day finance execution",
];

export default function FinanceCaseStudies() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Carousel
        className="mx-auto flex max-w-7xl flex-col gap-8 lg:gap-10"
        opts={{ align: "start", loop: true }}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-finance uppercase">
              Case Studies
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
              Case Studies
            </h2>
            <p className="max-w-3xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
              Real examples of how our finance support has helped organizations
              operate with greater clarity and consistency.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <CarouselPrevious className="static translate-y-0 border-brand-secondary/12 bg-white shadow-[0_12px_30px_rgba(54,59,79,0.08)] hover:border-brand-finance hover:text-brand-finance" />
            <CarouselNext className="static translate-y-0 border-brand-secondary/12 bg-white shadow-[0_12px_30px_rgba(54,59,79,0.08)] hover:border-brand-finance hover:text-brand-finance" />
          </div>
        </div>

        <CarouselContent className="-ml-4">
          {caseStudies.map((title, index) => (
            <CarouselItem key={title} className="pl-4 sm:basis-1/2 lg:basis-1/3">
              <article className="group relative min-h-[30rem] overflow-hidden rounded-lg">
                <Image
                  src="/finance_industry.jpg"
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/42 to-transparent" />
                <div className="relative z-10 flex min-h-[30rem] flex-col justify-end p-6 sm:p-7">
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold tracking-[0.16em] text-white/54 uppercase">
                        Sample Case Study {index + 1}
                      </p>
                      <h3 className="max-w-xs text-2xl font-semibold tracking-[-0.03em] text-white">
                        {title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/18 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-finance hover:text-brand-finance"
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
