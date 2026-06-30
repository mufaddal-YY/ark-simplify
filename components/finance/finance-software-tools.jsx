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

const toolFallbacks = {
  "Zoho Books": "/ZohoBooks.png",
  Odoo: "/odoo.png",
  Xero: "/xero.png",
  QuickBooks: "/QuickBooks-Logo.png",
};

const defaultSoftwareToolsSection = {
  eyebrow: "Softwares",
  title: "Softwares",
  description:
    "Tools and platforms we work with as part of our day-to-day finance workflows.",
  tools,
};

function normalizeTool(tool, index) {
  const fallback = tools.find((item) => item.name === tool.name) ?? tools[index];

  return {
    id: tool._key ?? tool.name ?? index,
    name: tool.name ?? `Finance tool ${index + 1}`,
    src: tool.logoUrl ?? tool.src ?? toolFallbacks[tool.name] ?? fallback?.src,
    alt: tool.alt ?? tool.name ?? `Finance tool ${index + 1}`,
    width: fallback?.width ?? 132,
    height: fallback?.height ?? 40,
    className:
      fallback?.className ?? "max-h-16 w-auto max-w-[11rem] object-contain",
  };
}

export default function FinanceSoftwareTools({ data }) {
  const section = data ?? defaultSoftwareToolsSection;
  const financeTools = (section.tools?.length
    ? section.tools
    : defaultSoftwareToolsSection.tools
  )
    .map(normalizeTool)
    .filter((tool) => tool.src);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="mx-auto flex max-w-7xl flex-col gap-8 lg:gap-10"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-finance uppercase">
              {section.eyebrow ?? defaultSoftwareToolsSection.eyebrow}
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
              {section.title ?? defaultSoftwareToolsSection.title}
            </h2>
            <p className="max-w-3xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
              {section.description ?? defaultSoftwareToolsSection.description}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <CarouselPrevious className="static translate-y-0 border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:border-brand-finance hover:text-brand-finance" />
            <CarouselNext className="static translate-y-0 border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:border-brand-finance hover:text-brand-finance" />
          </div>
        </div>

        <CarouselContent className="-ml-4">
          {financeTools.map((tool) => (
            <CarouselItem key={tool.id} className="pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/5">
              <div className="flex aspect-[5/3] min-h-32 items-center justify-center rounded-lg border border-slate-200 bg-white px-2 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:min-h-32">
                <Image
                  src={tool.src}
                  alt={tool.alt}
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
