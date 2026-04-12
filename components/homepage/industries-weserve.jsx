"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Construction",
    logo: "/const_logo.png",
    logoAlt: "Construction logo",
    accent: "construction",
    href: "/construction",
    image: "/construction_industry.jpg",
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
    blurb:
      "We support businesses with core financial and operational functions including bookkeeping, procurement support, inventory management, and invoicing. While we work closely with construction-related businesses, our finance services also support teams in other industries that need dependable financial processes as they grow.",
    highlights: [
      "Bookkeeping",
      "Procurement Support",
      "Inventory Management",
      "Invoicing",
    ],
  },
];

const stats = [
  {
    value: 100,
    prefix: "$",
    suffix: "M",
    label: "Estimated Project Cost",
    microLabel: "Across supported project scopes",
  },
  {
    value: 3000,
    suffix: "+",
    label: "Projects Completed",
    microLabel: "Delivered across active client engagements",
  },
  {
    value: 12000,
    suffix: "+",
    label: "Man Hours Saved",
    microLabel: "Recovered through dependable support workflows",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Total Clients Served",
    microLabel: "Supported through scalable back-office delivery",
  },
];

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

function CountUpStat({
  value,
  prefix = "",
  suffix = "",
  label,
  microLabel,
  delay = 0,
}) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || hasStarted) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) {
      return undefined;
    }

    let animationFrame;
    let timeoutId;
    const duration = 1400;

    const startAnimation = () => {
      const startTime = performance.now();

      const updateValue = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - (1 - progress) * (1 - progress);
        setDisplayValue(Math.round(value * easedProgress));

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(updateValue);
        }
      };

      animationFrame = window.requestAnimationFrame(updateValue);
    };

    timeoutId = window.setTimeout(startAnimation, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [delay, hasStarted, value]);

  const formattedValue = displayValue.toLocaleString("en-US");

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-[0_24px_60px_rgba(120,38,0,0.12)] transition-transform duration-300 hover:-translate-y-1 sm:p-7"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 h-14 w-px shrink-0 bg-brand-primary" />
        <div className="space-y-4">
        <p className="text-4xl font-semibold tracking-[-0.06em] text-brand-secondary sm:text-5xl">
          {prefix}
          {formattedValue}
          {suffix}
        </p>
        <div className="space-y-2">
          <p className="max-w-[16rem] text-sm font-medium leading-6 text-brand-secondary/72 sm:text-base">
          {label}
        </p>
          <div className="h-px w-14 bg-brand-secondary/32" />
          <p className="max-w-[17rem] text-xs font-medium uppercase tracking-[0.12em] text-brand-secondary/42">
            {microLabel}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesWeServe({ preview = false }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + industries.length) % industries.length,
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % industries.length);
  };

  useEffect(() => {
    const autoplay = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % industries.length);
    }, 5200);

    return () => window.clearInterval(autoplay);
  }, []);

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
              Industries We Serve
            </p>
            <h2 className={`font-semibold text-brand-secondary ${preview ? "text-4xl leading-[0.98] tracking-[-0.06em] sm:text-6xl" : "text-3xl leading-tight tracking-[-0.04em] sm:text-5xl"}`}>
              Flexible support built around how different teams actually work.
            </h2>
            <p className={`max-w-2xl text-base leading-8 sm:text-lg ${preview ? "text-brand-secondary/68" : "text-brand-secondary/72"}`}>
              We tailor our delivery model to the operational realities of each
              industry, so the support feels embedded, dependable, and ready to
              scale with the team.
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

        <div className={`relative overflow-hidden border bg-white ${accent.cardBorder} ${preview ? "shadow-[0_32px_90px_rgba(54,59,79,0.12)]" : "rounded-lg shadow-[0_34px_100px_rgba(54,59,79,0.14)]"}`}>
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
                <div className="flex items-center gap-2">
                  {industries.map((industry, index) => (
                    <button
                      key={industry.name}
                      type="button"
                      aria-label={`View ${industry.name}`}
                      onClick={() => setActiveIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? `w-14 ${accent.rail}`
                          : "w-5 bg-brand-secondary/12"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-brand-secondary/52">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(industries.length).padStart(2, "0")}
                </p>
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
                    alt={`${activeIndustry.name} industry`}
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

      {/* <div className={`relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden bg-brand-primary px-4 py-8 text-white sm:mt-10 sm:px-6 sm:py-10 lg:mt-12 lg:px-8 lg:py-12 ${preview ? "border-y border-brand-secondary/10" : ""}`}>
        <div className="absolute inset-0">
          <Image
            src="/construction_stats.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-primary/72 mix-blend-multiply" />
        <div className="absolute inset-0 bg-primary mix-blend-multiply" />
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-primary/14 mix-blend-multiply" />
        <div className="absolute inset-0 bg-primary/8" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,24,36,0.1),transparent_34%,rgba(20,24,36,0.12))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,transparent_24%,rgba(33,16,8,0.14)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(255,255,255,0.1),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_20%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/32 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <CountUpStat
                key={stat.label}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                microLabel={stat.microLabel}
                delay={index * 120}
              />
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
