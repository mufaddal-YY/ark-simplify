import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const partners = [
  "/client/AG LOGO.png",
  "/client/BH logo.webp",
  "/client/CG-Logo-550.png",
  "/client/Company Logo tech build.avif",
  "/client/Newport-logo.webp",
  "/client/Rapid doors logo.webp",
  "/client/UFD_logo.jpg",
  "/client/builders of metro atlanta.avif",
  "/client/doorways logo.webp",
  "/client/hynes-50-years-logo-1.webp",
  "/client/logo smart shield.png",
];

const defaultPartnersSection = {
  eyebrow: "Partners",
  title: "Partners",
  description:
    "Organizations we’ve worked with across finance and operational support engagements.",
  partners: partners.map((src, index) => ({
    _key: `finance-partner-${index + 1}`,
    name: `Finance partner ${index + 1}`,
    alt: `Finance partner ${index + 1}`,
    logoUrl: src,
  })),
};

export default function FinancePartners({ data }) {
  const section = data ?? defaultPartnersSection;
  const partnerItems = (section.partners?.length
    ? section.partners
    : defaultPartnersSection.partners
  )
    .filter((partner) => partner.logoUrl)
    .map((partner, index) => ({
      id: partner._key ?? partner.name ?? index,
      name: partner.name ?? `Finance partner ${index + 1}`,
      alt: partner.alt ?? partner.name ?? `Finance partner ${index + 1}`,
      logoUrl: partner.logoUrl,
    }));

  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="mx-auto flex max-w-7xl flex-col gap-8 lg:gap-10"
      >
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-finance uppercase">
            {section.eyebrow ?? defaultPartnersSection.eyebrow}
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
            {section.title ?? defaultPartnersSection.title}
          </h2>
          <p className="max-w-3xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
            {section.description ?? defaultPartnersSection.description}
          </p>
        </div>

        <div className="flex items-center justify-end gap-3">
          <CarouselPrevious className="static translate-y-0 border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:border-brand-finance hover:text-brand-finance" />
          <CarouselNext className="static translate-y-0 border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:border-brand-finance hover:text-brand-finance" />
        </div>

        <CarouselContent className="-ml-4">
          {partnerItems.map((partner) => (
            <CarouselItem
              key={partner.id}
              className="basis-1/2 pl-4 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <div className="flex min-h-40 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <Image
                  src={partner.logoUrl}
                  alt={partner.alt}
                  width={180}
                  height={96}
                  className="h-auto max-h-20 w-auto object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
