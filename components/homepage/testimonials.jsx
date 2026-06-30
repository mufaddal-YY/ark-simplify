"use client";

import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const defaultTestimonialsSection = {
  eyebrow: "Testimonials",
  title: "Success Stories.",
  description:
    "Appreciation and feedback drawn from client emails after project delivery, pricing updates, and estimating support engagements.",
  items: [
    {
      _key: "mitchel-lazar",
      rating: 5,
      quote:
        "We have been working with Rohit and ARK for over 18 months. Rohit and his team are professional, responsive, hardworking and affordable. They are an integral part of our team and our growth. Without the ARK we would NOT have been able to keep growing at our current pace.",
      name: "Mitchel Lazar",
      role: "CEO at Rapid Door & Trim Corp.",
      initials: "ML",
      accent: "construction",
    },
    {
      _key: "ken-diener",
      rating: 5,
      quote:
        "I have been working with the ARK team for 2+ years now and would recommend them for takeoff services. We have had our challenges but Rohit is always willing listen and work on a resolution to the challenges.",
      name: "Ken Diener, DHT",
      role: "Sales Manager for Doorwayz Unlimited",
      initials: "KD",
      accent: "primary",
    },
    {
      _key: "tim-hunt",
      rating: 5,
      quote:
        "My team enjoyed working with Ark Simplify and they played a very important role in the success of our projects and the growth of our estimating department. I have no doubt they will be a great asset to any team.",
      name: "Tim Hunt",
      role: "President at Performance Door and Hardware",
      initials: "TH",
      accent: "finance",
    },
  ],
};

const constructionTestimonials = [
  {
    id: 1,
    rating: "5.0",
    quote:
      "We got feedback after a sales visit that the estimating team was highly responsive and accurate, and that level of professionalism reflected well on the rest of the company too.",
    name: "Mitch Lazar",
    role: "CEO and SPM",
    initials: "ML",
    accent: "bg-brand-construction text-white",
  },
  {
    id: 2,
    rating: "5.0",
    quote:
      "Thank you for completing the pricing updates and providing the detailed summary. Highlighting the sections where items were unavailable made the handoff especially useful.",
    name: "Danny Ward-Tremblay",
    role: "Client Feedback",
    initials: "DW",
    accent: "bg-brand-primary text-white",
  },
  {
    id: 3,
    rating: "5.0",
    quote:
      "I appreciate you completing this well ahead of schedule. The update, documentation, and summary of unavailable items made the review process much smoother.",
    name: "Danny Ward-Tremblay",
    role: "Client Feedback",
    initials: "DW",
    accent: "bg-brand-finance text-white",
  },
  {
    id: 4,
    rating: "5.0",
    quote:
      "I want to thank and appreciate the team for doing great work and a lot of it. You have been a big part of our continued growth and created real opportunity for the people around you.",
    name: "Mitch",
    role: "Client Appreciation",
    initials: "MI",
    accent: "bg-brand-secondary text-white",
  },
];

const accentClasses = {
  construction: "bg-brand-construction text-white",
  primary: "bg-brand-primary text-white",
  finance: "bg-brand-finance text-white",
  secondary: "bg-brand-secondary text-white",
};

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

export default function Testimonials({ data, preview = false, variant = "home" }) {
  const section =
    variant === "construction" || !data ? defaultTestimonialsSection : data;
  const sourceItems =
    variant === "construction"
      ? constructionTestimonials
      : section.items?.length
        ? section.items
        : defaultTestimonialsSection.items;
  const testimonials = sourceItems.map((item, index) => ({
    ...item,
    id: item._key ?? item.id ?? `${item.name}-${index}`,
    rating:
      typeof item.rating === "number" ? item.rating.toFixed(1) : item.rating,
    accent:
      accentClasses[item.accent] ??
      item.accent ??
      accentClasses.primary,
  }));

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
                {section.eyebrow ?? defaultTestimonialsSection.eyebrow}
              </span>
              <div className="h-px w-14 bg-brand-primary" />
            </div>
            <h2
              className={`max-w-3xl font-semibold leading-[0.98] tracking-[-0.07em] text-brand-secondary ${
                preview ? "text-4xl lg:text-5xl" : "text-4xl lg:text-5xl"
              }`}
            >
              {section.title ?? defaultTestimonialsSection.title}
            </h2>
            <p className="max-w-2xl text-base leading-8 text-brand-secondary/70 sm:text-lg">
              {section.description ?? defaultTestimonialsSection.description}
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
