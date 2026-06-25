"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const defaultIndustriesSection = {
  eyebrow: "Industries We Serve",
  title: "Flexible support built around how different teams actually work.",
  description:
    "We tailor our delivery model to the operational realities of each industry, so the support feels embedded, dependable, and ready to scale with the team.",
  industries: [
    {
      name: "Construction",
      logo: "/const_logo.png",
      logoAlt: "Construction logo",
      accent: "construction",
      href: "/construction",
      image: "/construction_industry.jpg",
      imageAlt: "Construction industry",
      blurb:
        "We support construction and manufacturing teams with preconstruction, detailing, and project management services. Our scope and deliverables are defined based on whether we are working with general contractors, subcontractors, or manufacturers, ensuring the work fits how each role operates.",
      highlights: [
        "Preconstruction",
        "Detailing",
        "Project Management",
        "Role-specific delivery",
      ],
    },
    {
      name: "Finance",
      logo: "/logo_finance.png",
      logoAlt: "Finance logo",
      accent: "finance",
      href: "/finance",
      image: "/finance_industry.jpg",
      imageAlt: "Finance industry",
      blurb:
        "We support businesses with core financial and operational functions including inventory management, purchase order processing, bookkeeping, and AP/AR. While we work closely with construction-related businesses, our finance services also support teams in other industries that need dependable financial processes as they grow.",
      highlights: [
        "Inventory Management",
        "Purchase Order Processing",
        "Bookkeeping",
        "AP/AR",
      ],
    },
  ],
};

const industryAssetFallbacks = {
  Construction: {
    logo: "/const_logo.png",
    image: "/construction_industry.jpg",
  },
  Finance: {
    logo: "/logo_finance.png",
    image: "/finance_industry.jpg",
  },
};

const accentStyles = {
  construction: {
    badge: "border-brand-construction/18 bg-brand-construction/8 text-brand-construction",
    cardBorder: "border-brand-construction/60",
    rail: "bg-brand-construction",
    cta: "border-brand-construction bg-brand-construction text-white hover:border-brand-construction hover:bg-[#e00000] hover:shadow-[0_18px_34px_rgba(255,0,0,0.2)]",
  },
  finance: {
    badge: "border-brand-finance/18 bg-brand-finance/8 text-brand-finance",
    cardBorder: "border-brand-finance/60",
    rail: "bg-brand-finance",
    cta: "border-brand-finance bg-brand-finance text-white hover:border-brand-finance hover:bg-[#009f1c] hover:shadow-[0_18px_34px_rgba(0,185,32,0.2)]",
  },
};

export default function IndustriesWeServe({ data, preview = false }) {
  const section = data ?? defaultIndustriesSection;
  const industries = (
    section.industries?.length
      ? section.industries
      : defaultIndustriesSection.industries
  ).map((industry) => ({
    ...industry,
    logo:
      industry.logoUrl ??
      industry.logo ??
      industryAssetFallbacks[industry.name]?.logo ??
      defaultIndustriesSection.industries[0].logo,
    image:
      industry.imageUrl ??
      industry.image ??
      industryAssetFallbacks[industry.name]?.image ??
      defaultIndustriesSection.industries[0].image,
  }));
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const expandedIndicators = industries.flatMap((industry, industryIndex) =>
    Array.from({ length: 4 }, (_, index) => ({
      key: `${industry.name}-${index + 1}`,
      industryIndex,
    })),
  );

  const handlePrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + industries.length) % industries.length,
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % industries.length);
  };

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const autoplay = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % industries.length);
    }, 7200);

    return () => window.clearInterval(autoplay);
  }, [industries.length, isPaused]);

  const activeIndustry = industries[activeIndex];
  const accent = accentStyles[activeIndustry.accent];

  return (
    <section
      className={`relative overflow-hidden px-4 py-18 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28 ${
        preview
          ? "border-b border-brand-secondary/10 bg-brand-surface"
          : "bg-brand-surface"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/12 to-transparent" />

      <div className="mx-auto max-w-7xl space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,0.26fr)] lg:items-end">
          <div
            className={`max-w-3xl space-y-5 ${
              preview ? "border-l border-brand-secondary/14 pl-4 sm:pl-6 lg:pl-8" : ""
            }`}
          >
            <p className={`text-sm font-semibold text-brand-primary uppercase ${preview ? "tracking-[0.18em]" : "tracking-[0.16em]"}`}>
              {section.eyebrow ?? defaultIndustriesSection.eyebrow}
            </p>
            <h2 className={`font-semibold text-brand-secondary ${preview ? "text-4xl leading-[0.98] tracking-[-0.06em] lg:text-5xl" : "text-4xl leading-tight tracking-[-0.04em] lg:text-5xl"}`}>
              {section.title ?? defaultIndustriesSection.title}
            </h2>
            <p className={`max-w-2xl text-base leading-8 sm:text-lg ${preview ? "text-brand-secondary/68" : "text-brand-secondary/72"}`}>
              {section.description ?? defaultIndustriesSection.description}
            </p>
          </div>

          <div className="flex items-center gap-3 lg:justify-end">
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous industry"
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-brand-secondary/10 bg-white text-brand-secondary shadow-[0_12px_30px_rgba(54,59,79,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/20 hover:text-brand-primary"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next industry"
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-brand-secondary/10 bg-white text-brand-secondary shadow-[0_12px_30px_rgba(54,59,79,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/20 hover:text-brand-primary"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className={`relative overflow-hidden border bg-white ${accent.cardBorder} ${preview ? "shadow-[0_32px_90px_rgba(54,59,79,0.12)]" : "rounded-lg shadow-[0_34px_100px_rgba(54,59,79,0.14)]"}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`absolute inset-x-0 top-0 z-20 h-px ${accent.rail}`} />
          <div className={`relative grid min-h-[32rem] ${preview ? "lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]" : "lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]"}`}>
            <div className="order-2 flex flex-col justify-between p-6 sm:p-8 lg:order-1 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="space-y-8"
                >
                  <div className="space-y-5">
                    <div className={`inline-flex min-h-16 items-center border px-4 py-3 ${preview ? "border-brand-secondary/12" : "rounded-lg border-brand-secondary/10"}`}>
                      <Image
                        src={activeIndustry.logo}
                        alt={activeIndustry.logoAlt}
                        width={136}
                        height={44}
                        className="h-9 w-auto object-contain"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className={`font-semibold text-brand-secondary ${preview ? "text-4xl tracking-[-0.06em] sm:text-5xl" : "text-3xl tracking-[-0.04em] sm:text-5xl"}`}>
                        {activeIndustry.name}
                      </h3>
                      <p className="max-w-2xl text-base leading-8 text-brand-secondary/74 sm:text-lg">
                        {activeIndustry.blurb}
                      </p>
                    </div>
                  </div>

                  <div className="hidden flex-wrap gap-3 sm:flex">
                    {activeIndustry.highlights.map((item) => (
                      <span
                        key={item}
                        className={`inline-flex border border-brand-secondary/10 px-4 py-2 text-sm font-medium text-brand-secondary/84 ${preview ? "bg-transparent" : "rounded-lg bg-brand-secondary/[0.03]"}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Link
                      href={activeIndustry.href}
                      className={`group inline-flex min-h-12 items-center justify-center rounded-lg border px-5 py-3 text-sm font-semibold tracking-[0.02em] transition-all duration-300 hover:-translate-y-0.5 sm:text-base ${accent.cta}`}
                    >
                      Explore {activeIndustry.name}
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="space-y-5 pt-10">
                <div className="flex flex-wrap items-center gap-2">
                  {industries.map((industry, index) => (
                    <button
                      key={industry.name}
                      type="button"
                      aria-label={`View ${industry.name}`}
                      onClick={() => setActiveIndex(index)}
                      className={`inline-flex min-h-10 items-center rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                        index === activeIndex
                          ? `${accent.badge}`
                          : "border-brand-secondary/10 bg-transparent text-brand-secondary/54 hover:border-brand-secondary/20 hover:text-brand-secondary"
                      }`}
                    >
                      {industry.name}
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5">
                    {expandedIndicators.map((indicator, index) => {
                      const isActive = indicator.industryIndex === activeIndex;

                      return (
                        <span
                          key={indicator.key}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            isActive
                              ? `${accent.rail} ${index % 4 === 0 ? "w-8" : "w-3 opacity-80"}`
                              : "w-2 bg-brand-secondary/12"
                          }`}
                        />
                      );
                    })}
                  </div>
                  <p className="text-sm font-medium text-brand-secondary/52">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(industries.length).padStart(2, "0")}
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 relative overflow-hidden border-b border-brand-secondary/8 lg:order-2 lg:border-t-0 lg:border-b-0 lg:border-l">
              <div className="relative h-full min-h-[20rem] p-6 sm:p-8 lg:p-12">
                <motion.div
                  key={`${activeIndustry.name}-image`}
                  initial={{ opacity: 0.5, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.5, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeIndustry.image}
                    alt={activeIndustry.imageAlt ?? `${activeIndustry.name} industry`}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#363b4f]/88 via-[#363b4f]/28 to-white/12" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
