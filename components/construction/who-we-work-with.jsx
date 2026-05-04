"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { LuBuilding2, LuFactory, LuWrench } from "react-icons/lu";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const audiences = [
  {
    title: "General Contractors",
    icon: LuBuilding2,
    image: "/construction/general%20contractor.jpg",
    paragraphs: [
      "Ark helps GCs manage the complexity of bid evaluation and project coordination.",
      "By verifying quantities, leveling bids, and reviewing subcontractor proposals, we provide GCs with clear, structured comparisons that support confident decision-making during the tender stage.",
      "During project execution, Ark supports coordination and reporting to maintain alignment across trades and vendors.",
    ],
  },
  {
    title: "Subcontractors",
    icon: LuWrench,
    image: "/construction/subconstractor.jpg",
    paragraphs: [
      "For subcontractors, Ark acts as an operational extension of the internal team.",
    ],
    points: [
      "Complete bid preparation and estimating",
      "Post-award detailing and accuracy verification",
      "Coordination support during project execution",
    ],
    summary:
      "This enables subcontractors to scale their bidding capacity while maintaining disciplined project documentation and execution readiness.",
  },
  {
    title: "Manufacturers",
    icon: LuFactory,
    image: "/construction/manufacturer.jpg",
    paragraphs: [
      "Manufacturers operate at the intersection of supply, procurement, and project timelines.",
      "Ark supports manufacturers with:",
    ],
    points: [
      "Quantity estimation and demand alignment",
      "Purchase order verification",
      "Inventory planning inputs",
      "Coordination with project stakeholders",
    ],
    summary:
      "The goal is to ensure material commitments, supply schedules, and project requirements remain aligned throughout the project lifecycle.",
  },
];

export default function WhoWeWorkWith() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  const handleSetApi = useCallback((emblaApi) => {
    setApi(emblaApi);
    setCurrent(emblaApi?.selectedScrollSnap() ?? 0);
  }, []);

  const updateCurrent = useCallback((emblaApi) => {
    if (!emblaApi) {
      return;
    }

    setCurrent(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api, updateCurrent]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const autoplay = window.setInterval(() => {
      api.scrollNext();
    }, 6200);

    return () => window.clearInterval(autoplay);
  }, [api]);

  return (
    <section className="relative overflow-hidden bg-[#151827] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(54,59,79,0.72),transparent_34%),linear-gradient(135deg,rgba(54,59,79,0.62),rgba(10,12,20,0.94)_58%)]" />

      <Carousel
        className="relative flex flex-col gap-8 overflow-hidden lg:gap-10"
        setApi={handleSetApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
                Who We Work With
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white lg:text-5xl">
                Who we work with
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <CarouselPrevious className="static translate-y-0 border-white/16 bg-white/8 text-white shadow-sm backdrop-blur-md hover:border-brand-primary/40 hover:text-brand-primary" />
              <CarouselNext className="static translate-y-0 border-white/16 bg-white/8 text-white shadow-sm backdrop-blur-md hover:border-brand-primary/40 hover:text-brand-primary" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CarouselContent className="-ml-0">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              const isActive = index === current;

              return (
                <CarouselItem
                  key={audience.title}
                  className="min-w-full basis-full pl-0"
                >
                  <article
                    className={cn(
                      "relative overflow-hidden rounded-lg border border-white/14 bg-[rgba(255,255,255,0.06)] shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl transition-all duration-500",
                      isActive ? "opacity-100" : "opacity-72",
                    )}
                    aria-hidden={!isActive}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/6" />
                    <div className="grid min-h-[30rem] lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)]">
                      <div className="relative min-h-64 lg:min-h-full">
                        <Image
                          src={audience.image}
                          alt={audience.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/24 to-transparent lg:bg-gradient-to-t lg:from-black/18 lg:to-transparent" />
                      </div>

                      <div className="flex h-full flex-col gap-5 px-5 py-7 sm:px-6 sm:py-8 lg:px-8">
                        <div className="relative space-y-3">
                          <Icon
                            className="text-5xl text-white/88 sm:text-6xl"
                            strokeWidth={1.35}
                          />
                          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                            {audience.title}
                          </h3>
                          <div className="h-px w-14 bg-brand-primary" />
                        </div>

                        <div className="relative flex flex-1 flex-col gap-4">
                          {audience.paragraphs?.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-base leading-8 text-white/72 sm:text-lg"
                            >
                              {paragraph}
                            </p>
                          ))}

                          {audience.points ? (
                            <ul className="grid gap-3 lg:grid-cols-2">
                              {audience.points.map((point) => (
                                <li
                                  key={point}
                                  className="grid grid-cols-[0.5rem_minmax(0,1fr)] gap-3 text-base leading-7 text-white/72 sm:text-base"
                                >
                                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-primary" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}

                          {audience.summary ? (
                            <p className="mt-auto border-t border-white/10 pt-4 text-base leading-8 text-white/72 sm:text-lg">
                              {audience.summary}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </div>

        <div className="container-fluid flex items-center justify-center gap-2">
          {audiences.map((audience, index) => (
            <button
              key={audience.title}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                index === current
                  ? "w-10 bg-brand-construction"
                  : "w-2.5 bg-white/22 hover:bg-white/34",
              )}
              aria-label={`Go to ${audience.title}`}
              aria-pressed={index === current}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
