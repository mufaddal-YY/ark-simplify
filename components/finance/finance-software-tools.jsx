"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const tools = [
  {
    name: "Zoho Books",
    src: "/ZohoBooks.png",
    width: 132,
    height: 40,
    className: "max-h-16 w-auto max-w-[11rem] object-contain",
  },
  {
    name: "Odoo",
    src: "/odoo.png",
    width: 132,
    height: 40,
    className: "max-h-16 w-auto max-w-[11rem] object-contain",
  },
  {
    name: "Xero",
    src: "/xero.png",
    width: 160,
    height: 72,
    className: "max-h-38 w-auto max-w-[14rem] object-contain",
  },
  {
    name: "QuickBooks",
    src: "/QuickBooks-Logo.png",
    width: 132,
    height: 40,
    className: "max-h-16 w-auto max-w-[11rem] object-contain",
  },
];

export default function FinanceSoftwareTools() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="mx-auto flex max-w-7xl flex-col gap-8 lg:gap-10"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-finance uppercase">
              Softwares
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
              Softwares
            </h2>
            <p className="max-w-3xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
              Tools and platforms we work with as part of our day-to-day finance workflows.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <CarouselPrevious className="static translate-y-0 border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:border-brand-finance hover:text-brand-finance" />
            <CarouselNext className="static translate-y-0 border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:border-brand-finance hover:text-brand-finance" />
          </div>
        </div>

        <CarouselContent className="-ml-4">
          {tools.map((tool) => (
            <CarouselItem key={tool.name} className="pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/5">
              <div className="flex aspect-[5/3] min-h-32 items-center justify-center rounded-lg border border-slate-200 bg-white px-2 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:min-h-32">
                <Image
                  src={tool.src}
                  alt={tool.name}
                  width={tool.width}
                  height={tool.height}
                  className={tool.className}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
