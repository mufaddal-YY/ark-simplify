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

export default function FinancePartners() {
  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="mx-auto flex max-w-7xl flex-col gap-8 lg:gap-10"
      >
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-finance uppercase">
            Partners
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
            Partners
          </h2>
          <p className="max-w-3xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
            Organizations we’ve worked with across finance and operational support engagements.
          </p>
        </div>

        <div className="flex items-center justify-end gap-3">
          <CarouselPrevious className="static translate-y-0 border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:border-brand-finance hover:text-brand-finance" />
          <CarouselNext className="static translate-y-0 border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:border-brand-finance hover:text-brand-finance" />
        </div>

        <CarouselContent className="-ml-4">
          {partners.map((partner, index) => (
            <CarouselItem
              key={partner}
              className="basis-1/2 pl-4 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <div className="flex min-h-40 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <Image
                  src={partner}
                  alt={`Finance partner ${index + 1}`}
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
