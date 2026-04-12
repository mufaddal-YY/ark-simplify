"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const softwareTools = [
  "Bluebeam",
  "AutoCAD",
  "PlanSwift",
  "Procore",
  "Revit",
  "Navisworks",
  "Microsoft Project",
];

export default function SoftwareTools() {
  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto flex max-w-7xl flex-col gap-8 lg:gap-10"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
              Software &amp; Tools
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
              Software &amp; Tools
            </h2>
            <p className="max-w-3xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
              Industry-standard tools and platforms we use to deliver accurate
              estimating, detailing, and project
            </p>
          </div>

          <div className="flex items-center gap-3">
            <CarouselPrevious className="static translate-y-0 border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)]" />
            <CarouselNext className="static translate-y-0 border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)]" />
          </div>
        </div>

        <CarouselContent className="-ml-4">
          {softwareTools.map((tool) => (
            <CarouselItem
              key={tool}
              className="pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/5"
            >
              <div className="flex min-h-28 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-6 text-center shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <Image
                  src="/logo_main.png"
                  alt={`${tool} placeholder logo`}
                  width={132}
                  height={32}
                  className="h-auto w-[8.25rem]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
