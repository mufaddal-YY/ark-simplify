"use client";

import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    rating: "4.9",
    quote:
      "Ark Simplify felt like a true delivery partner. Their team brought structure to our workflow and helped us move faster without losing control.",
    name: "Daniel Brooks",
    role: "Operations Director",
    initials: "DB",
    accent: "bg-brand-primary text-white",
  },
  {
    id: 2,
    rating: "5.0",
    quote:
      "Communication was clear, timelines were dependable, and the handoff quality stayed consistent from start to finish.",
    name: "Priya Menon",
    role: "Head of Finance",
    initials: "PM",
    accent: "bg-brand-finance text-white",
  },
  {
    id: 3,
    rating: "4.9",
    quote:
      "What stood out most was how quickly they understood our process and started delivering work that fit our team immediately.",
    name: "Marcus Hale",
    role: "Project Executive",
    initials: "MH",
    accent: "bg-brand-construction text-white",
  },
  {
    id: 4,
    rating: "4.8",
    quote:
      "They brought reliability to areas we had struggled to standardize internally. It saved us time and reduced day-to-day friction.",
    name: "Elena Carter",
    role: "Founder & Managing Partner",
    initials: "EC",
    accent: "bg-brand-secondary text-white",
  },
  {
    id: 5,
    rating: "5.0",
    quote:
      "Their support model helped our internal team stay focused on decisions while execution kept moving without delays.",
    name: "Jason Turner",
    role: "Construction Lead",
    initials: "JT",
    accent: "bg-brand-construction text-white",
  },
  {
    id: 6,
    rating: "4.9",
    quote:
      "From procurement coordination to invoicing discipline, they brought a level of consistency we had been missing.",
    name: "Nadia Shah",
    role: "Finance Controller",
    initials: "NS",
    accent: "bg-brand-finance text-white",
  },
  {
    id: 7,
    rating: "4.8",
    quote:
      "The team adapted quickly to our reporting structure and delivered work that felt aligned from the first week onward.",
    name: "Cole Bennett",
    role: "Program Manager",
    initials: "CB",
    accent: "bg-brand-primary text-white",
  },
  {
    id: 8,
    rating: "4.9",
    quote:
      "Dependable, responsive, and detail-oriented. They reduced friction across multiple moving parts of the business.",
    name: "Aisha Morgan",
    role: "Managing Director",
    initials: "AM",
    accent: "bg-brand-secondary text-white",
  },
  {
    id: 9,
    rating: "4.9",
    quote:
      "We got a delivery rhythm that finally matched the pace of the business. That reliability changed how our team planned work.",
    name: "Tyler Grant",
    role: "General Manager",
    initials: "TG",
    accent: "bg-brand-primary text-white",
  },
  {
    id: 10,
    rating: "5.0",
    quote:
      "They made complex support functions feel organized, predictable, and far easier to manage at scale.",
    name: "Leena Kapoor",
    role: "Strategy Lead",
    initials: "LK",
    accent: "bg-brand-finance text-white",
  },
];

function TestimonialCard({ item, className = "", featured = false, preview = false }) {
  return (
    <article
      className={`group flex h-full min-h-[22rem] flex-col justify-between border border-brand-secondary/14 bg-white p-5 transition-all duration-300 hover:border-brand-secondary hover:bg-brand-secondary sm:min-h-[24rem] sm:p-6 lg:min-h-[26rem] ${
        preview
          ? "shadow-[0_22px_58px_rgba(54,59,79,0.08)]"
          : "rounded-lg shadow-[0_24px_64px_rgba(54,59,79,0.1)]"
      } ${className}`}
    >
      <div className={featured ? "space-y-8" : "space-y-6"}>
        <div className="flex items-center gap-1 text-xs font-semibold tracking-[0.12em] text-brand-secondary/58 uppercase transition-colors duration-300 group-hover:text-white/62">
          <span>{item.rating}</span>
          <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />
          <span>Rating</span>
        </div>

        <blockquote
          className={`font-semibold tracking-[-0.04em] text-brand-secondary transition-colors duration-300 group-hover:text-white ${
            featured
              ? "max-w-2xl text-2xl leading-[1.22] sm:text-[2rem]"
              : "text-xl leading-[1.28]"
          }`}
        >
          &ldquo;{item.quote}&rdquo;
        </blockquote>
      </div>

      <div className="mt-8 flex items-center gap-4 border-t border-brand-secondary/10 pt-5 transition-colors duration-300 group-hover:border-white/14">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${item.accent}`}
        >
          {item.initials}
        </div>
        <div>
          <p className="text-base font-semibold text-brand-secondary transition-colors duration-300 group-hover:text-white">
            {item.name}
          </p>
          <p className="text-xs font-semibold tracking-[0.08em] text-brand-secondary/48 uppercase transition-colors duration-300 group-hover:text-white/58">
            {item.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials({ preview = false }) {
  return (
    <section
      className={`relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 ${
        preview ? "border-t border-brand-secondary/10 bg-brand-surface" : "border-t border-brand-secondary/10 bg-brand-surface"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/18 to-transparent" />

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto max-w-7xl space-y-10"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div
            className={`relative space-y-5 ${
              preview ? "border-l border-brand-secondary/14 pl-4 sm:pl-6 lg:pl-8" : ""
            }`}
          >
            <div className="space-y-3">
              <span
                className={`inline-flex border border-brand-secondary/12 bg-white px-4 py-2 text-xs font-semibold tracking-[0.16em] text-brand-secondary uppercase ${
                  preview ? "" : "rounded-full"
                }`}
              >
                Testimonials
              </span>
              <div className="h-px w-14 bg-brand-primary" />
            </div>
            <h2
              className={`max-w-3xl font-semibold leading-[0.98] tracking-[-0.07em] text-brand-secondary ${
                preview ? "text-4xl lg:text-5xl" : "text-4xl lg:text-5xl"
              }`}
            >
              Success Stories.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-brand-secondary/70 sm:text-lg">
              Feedback from teams who rely on Ark Simplify for dependable
              operational execution, delivery support, and scalable back-office
              systems.
            </p>
          </div>

          <div className="flex items-center gap-2 lg:self-center">
            <CarouselPrevious aria-label="Previous testimonials" />
            <CarouselNext aria-label="Next testimonials" />
          </div>
        </div>

        <CarouselContent>
          {testimonials.map((item) => (
            <CarouselItem
              key={item.id}
              className="sm:basis-1/2 lg:basis-1/3"
            >
              <TestimonialCard item={item} preview={preview} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
