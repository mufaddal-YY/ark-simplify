"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Boxes,
  Building2,
  CalendarCheck2,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  FileStack,
  HardHat,
  Landmark,
  Mail,
  Quote,
  Ruler,
  ShieldCheck,
  ShoppingCart,
  TimerReset,
  UsersRound,
  X,
} from "lucide-react";
import {FaWhatsapp} from "react-icons/fa6";
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import FloatingWhatsapp from "@/components/common/floating-whatsapp";
import {getWhatsappHref} from "@/lib/whatsapp";
import LeadForm from "./lead-form";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  estimate: Ruler,
  detail: DraftingCompass,
  manage: CalendarCheck2,
  bookkeeping: BookOpenCheck,
  receivables: Landmark,
  purchasing: ShoppingCart,
  inventory: Boxes,
};

const audienceIcons = [HardHat, Building2, Factory];

function Eyebrow({children, light = false}) {
  return (
    <p
      className={`mb-4 flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.2em] uppercase ${light ? "text-[var(--campaign-accent-light)]" : "text-[var(--campaign-accent-dark)]"}`}
    >
      <span className="h-px w-6 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

function PrimaryButton({children, onClick, inverse = false, pulse = false}) {
  return (
    <button
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${inverse ? "bg-white text-[#1b2433] hover:bg-brand-surface focus-visible:outline-white" : "bg-[var(--campaign-accent)] text-white shadow-[0_14px_32px_var(--campaign-shadow)] hover:bg-[var(--campaign-accent-dark)] focus-visible:outline-[var(--campaign-accent)]"} ${pulse ? "construction-cta-pulse" : ""}`}
      type="button"
      onClick={onClick}
    >
      {children}
      <ArrowRight
        className="size-4 transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      />
    </button>
  );
}

function LandingStats({data}) {
  const stats = data?.stats?.filter((stat) => Number.isFinite(stat.value)) ?? [];

  if (!stats.length) return null;

  return (
    <section
      id="results"
      className="relative scroll-mt-20 overflow-hidden bg-[var(--campaign-accent-soft)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute -top-40 -right-40 size-[30rem] rounded-full border border-[var(--campaign-accent)]/10" />
      <div className="relative mx-auto max-w-7xl">
        <div data-reveal className="grid gap-7 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end lg:gap-12">
          <div>
            <Eyebrow>{data.eyebrow ?? "Delivery results"}</Eyebrow>
            <h2 className="max-w-2xl text-4xl leading-[1.03] font-black tracking-[-0.055em] text-[#1b2433] text-balance sm:text-5xl">
              {data.title ?? "Consistent support, measured across real delivery."}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#596170] sm:text-lg lg:justify-self-end">
            {data.description}
          </p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[1.75rem] border border-[#1b2433]/10 bg-[#1b2433] shadow-[0_26px_70px_var(--campaign-shadow-soft)] sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <article
              key={stat._key ?? stat.label}
              data-reveal
              className={`min-h-52 p-6 text-white sm:p-7 ${
                index > 0 ? "border-t border-white/10 sm:border-t-0 sm:border-l" : ""
              } ${index === 2 ? "sm:border-l-0 lg:border-l" : ""}`}
            >
              <p className="text-4xl leading-none font-black tracking-[-0.055em] sm:text-5xl">
                {stat.prefix}
                {stat.value.toLocaleString("en-US")}
                {stat.suffix}
              </p>
              <div className="mt-7 h-1 w-10 rounded-full bg-[var(--campaign-accent)]" />
              <p className="mt-5 text-base font-bold">{stat.label}</p>
              <p className="mt-2 text-sm leading-6 text-white/56">
                {stat.microLabel}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LandingClientele({data}) {
  const logos =
    data?.logos
      ?.filter((logo) => logo.logoUrl)
      .map((logo, index) => ({
        id: logo._key ?? logo.name ?? index,
        src: logo.logoUrl,
        alt: logo.alt ?? logo.name ?? `Client logo ${index + 1}`,
      })) ?? [];

  if (!logos.length) return null;

  return (
    <section
      id="clientele"
      className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.75rem] border border-[#1b2433]/10 shadow-[0_24px_70px_var(--campaign-shadow-soft)] lg:grid-cols-[minmax(280px,0.36fr)_minmax(0,0.64fr)]">
        <div className="relative overflow-hidden bg-[#151827] p-7 text-white sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,var(--campaign-shadow),transparent_42%)]" />
          <div data-reveal className="relative">
            <Eyebrow light>{data.eyebrow ?? "Clientele"}</Eyebrow>
            <h2 className="text-4xl leading-none font-black tracking-[-0.06em] sm:text-5xl">
              <span className="block">{data.titleStart ?? "Our"}</span>
              <span className="mt-2 block text-[var(--campaign-accent-light)]">
                {data.highlightedTitle ?? "Clientele"}
              </span>
            </h2>
            <p className="mt-7 max-w-md text-base leading-8 text-white/68">
              {data.description}
            </p>
            {data.supportingText ? (
              <p className="mt-8 border-t border-white/14 pt-6 text-sm leading-7 text-white/56">
                {data.supportingText}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <div className="flex min-h-14 items-center border-b border-[#1b2433]/10 px-6 sm:px-8">
            <p className="text-xs font-bold tracking-[0.18em] text-[#1b2433]/48 uppercase">
              {data.networkLabel ?? "Client network"}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3">
            {logos.map((logo, index) => (
              <div
                key={logo.id}
                data-reveal
                className={`flex min-h-36 items-center justify-center p-6 sm:min-h-40 ${
                  index % 2 !== 1 ? "border-r border-[#1b2433]/10" : ""
                } ${index % 3 !== 2 ? "sm:border-r sm:border-[#1b2433]/10" : "sm:border-r-0"} ${
                  index < logos.length - 2 ? "border-b border-[#1b2433]/10" : ""
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={96}
                  className="h-auto max-h-16 w-auto max-w-full object-contain opacity-75 grayscale transition duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0 sm:max-h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ConstructionLanding({
  content,
  theme = {},
  thankYouPath,
  topbarText,
  stats,
  clientele,
  email = "enquiry@arksimplify.com",
}) {
  const rootRef = useRef(null);
  const topbarTrackRef = useRef(null);
  const softwareTrackRef = useRef(null);
  const dialogRef = useRef(null);
  const dialogPointerDownOnBackdropRef = useRef(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = content.testimonials?.length
    ? content.testimonials
    : [content.testimonial];
  const currentTestimonial =
    testimonials.length > 0
      ? testimonials[activeTestimonial % testimonials.length]
      : null;
  const campaignTheme = {
    accent: theme.accent ?? "#ff4900",
    accentDark: theme.accentDark ?? "#d83f00",
    accentLight: theme.accentLight ?? "#ff8a5b",
    accentSoft: theme.accentSoft ?? "#fff0ea",
    shadow: theme.shadow ?? "rgba(255, 73, 0, 0.22)",
    shadowSoft: theme.shadowSoft ?? "rgba(255, 73, 0, 0.1)",
    shadowStrong: theme.shadowStrong ?? "rgba(255, 73, 0, 0.3)",
    logoSrc: theme.logoSrc ?? "/const_logo.png",
    logoAlt: theme.logoAlt ?? "ARK Simplify Construction",
    footerLogoSrc: theme.footerLogoSrc ?? "/logo_main.png",
  };
  const assurances = content.assurances?.length
    ? content.assurances
    : [
        {label: "ISO 27001", detail: "Confidential document handling"},
        {label: "ISO 9001", detail: "Quality-managed delivery"},
        {label: "48 hours", detail: "A fast, useful first deliverable"},
      ];
  const trustLineParts = content.hero.trustLine
    .split("·")
    .map((part) => part.trim())
    .filter(Boolean);
  const certificationLine =
    trustLineParts.length > 1
      ? trustLineParts[0]
      : "ISO 9001 & ISO 27001 certified";
  const trustedByLine =
    trustLineParts.length > 1
      ? trustLineParts.slice(1).join(" · ")
      : content.hero.trustLine;

  function openDialog() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    document.body.style.overflow = "hidden";
  }

  function closeDialog() {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  }

  useEffect(() => {
    const track = topbarTrackRef.current;
    if (!track) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.to(track, {
        xPercent: -50,
        duration: 22,
        ease: "none",
        repeat: -1,
      });

      return () => tween.kill();
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    const track = softwareTrackRef.current;
    if (!track) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.to(track, {
        xPercent: -50,
        duration: 26,
        ease: "none",
        repeat: -1,
      });

      return () => tween.kill();
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 20);

    updateHeader();
    window.addEventListener("scroll", updateHeader, {passive: true});

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (testimonials.length < 2) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const autoplay = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 6500);

    return () => window.clearInterval(autoplay);
  }, [testimonials.length]);

  useEffect(() => {
    const slide = rootRef.current?.querySelector("[data-testimonial-slide]");
    if (!slide || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const tween = gsap.fromTo(
      slide,
      {x: 28, autoAlpha: 0},
      {x: 0, autoAlpha: 1, duration: 0.65, ease: "power3.out"},
    );

    return () => tween.kill();
  }, [activeTestimonial]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 768px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const {desktop, reduceMotion} = context.conditions;
        if (reduceMotion) return;

        const intro = gsap.timeline({defaults: {ease: "power3.out"}});
        intro
          .from("[data-hero-copy] > *", {
            y: desktop ? 30 : 18,
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.07,
          })
          .from(
            "[data-hero-form]",
            {y: 24, autoAlpha: 0, duration: 0.8},
            "-=0.45",
          )
          .from(
            "[data-plan-line]",
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 0.9,
              stagger: 0.08,
            },
            "-=0.7",
          );

        gsap.utils.toArray("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            y: desktop ? 52 : 28,
            autoAlpha: 0,
            duration: desktop ? 0.85 : 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          });
        });

        gsap.utils.toArray("[data-service-card]").forEach((card, index) => {
          const icon = card.querySelector("[data-card-icon]");
          const iconGlyph = icon?.querySelector("svg");
          const line = card.querySelector("[data-card-line]");
          const cardTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              once: true,
            },
          });

          cardTimeline
            .from(card, {
              y: desktop ? 70 + index * 10 : 28,
              autoAlpha: 0,
              duration: 0.75,
              ease: "power3.out",
            })
            .from(
              icon,
              {
                rotation: -18,
                scale: 0.55,
                autoAlpha: 0,
                duration: 0.55,
                ease: "back.out(1.7)",
              },
              "-=0.45",
            )
            .from(
              line,
              {scaleX: 0, transformOrigin: "left", duration: 0.55},
              "-=0.4",
            );

          if (iconGlyph) {
            gsap.to(iconGlyph, {
              y: -4,
              rotation: index % 2 === 0 ? 6 : -6,
              scale: 1.08,
              duration: 1.6 + index * 0.15,
              delay: index * 0.12,
              repeat: -1,
              yoyo: true,
              transformOrigin: "center center",
              ease: "sine.inOut",
            });
          }
        });

        gsap.utils.toArray("[data-process-step]").forEach((step, index) => {
          gsap.from(step, {
            x: desktop ? (index % 2 === 0 ? -35 : 35) : 0,
            y: desktop ? 0 : 24,
            autoAlpha: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 82%",
              once: true,
            },
          });
        });

        gsap.to("[data-step-arrow]", {
          y: 7,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          stagger: 0.12,
          ease: "sine.inOut",
        });

        gsap.utils.toArray("[data-audience-icon]").forEach((icon, index) => {
          gsap.from(icon, {
            rotation: index % 2 === 0 ? -22 : 22,
            scale: 0.45,
            autoAlpha: 0,
            duration: 0.7,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: icon,
              start: "top 86%",
              once: true,
            },
          });
        });

        gsap.to("[data-quote-mark]", {
          y: -12,
          rotation: 4,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      },
      root,
    );

    return () => {
      mm.revert();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="overflow-x-clip bg-white pt-10 pb-24 text-[#1b2433] sm:pb-0"
      style={{
        "--campaign-accent": campaignTheme.accent,
        "--campaign-accent-dark": campaignTheme.accentDark,
        "--campaign-accent-light": campaignTheme.accentLight,
        "--campaign-accent-soft": campaignTheme.accentSoft,
        "--campaign-shadow": campaignTheme.shadow,
        "--campaign-shadow-soft": campaignTheme.shadowSoft,
        "--campaign-shadow-strong": campaignTheme.shadowStrong,
      }}
    >
      {topbarText ? (
        <div
          className="fixed inset-x-0 top-0 z-[70] flex h-10 items-center overflow-hidden bg-[var(--campaign-accent-dark)] text-white"
          role="region"
          aria-label={topbarText}
        >
          <div ref={topbarTrackRef} className="flex w-max shrink-0" aria-hidden="true">
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0 items-center">
                {[0, 1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex shrink-0 items-center gap-6 px-6 text-xs font-black tracking-[0.08em] whitespace-nowrap uppercase sm:gap-8 sm:px-8 sm:text-sm"
                  >
                    <span>{topbarText}</span>
                    <span className="size-1.5 rounded-full bg-white/70" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <header
        className={`fixed inset-x-0 top-10 z-50 hidden transition-all duration-300 sm:block ${
          isScrolled
            ? "translate-y-0 border-b border-brand-secondary/10 bg-white/85 opacity-100 shadow-[0_12px_40px_var(--campaign-shadow-soft)] backdrop-blur-xl"
            : "pointer-events-none -translate-y-full border-b border-transparent bg-transparent opacity-0"
        }`}
      >
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--campaign-accent)]"
            aria-label="ARK Simplify home"
          >
            <Image
              src={campaignTheme.logoSrc}
              width={170}
              height={64}
              priority
              alt={campaignTheme.logoAlt}
              className="h-auto w-[132px] sm:w-[158px]"
            />
          </Link>
          <button
            className="construction-cta-pulse hidden min-h-10 items-center rounded-full bg-[var(--campaign-accent)] px-5 text-sm font-bold text-white shadow-[0_12px_28px_var(--campaign-shadow)] transition hover:bg-[var(--campaign-accent-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--campaign-accent)] sm:inline-flex"
            type="button"
            onClick={openDialog}
          >
            {content.headerCta ?? content.hero.primaryCta}
          </button>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#151827] text-white">
          <div
            className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_0%_0%,rgba(54,59,79,0.72),transparent_34%),linear-gradient(135deg,rgba(54,59,79,0.62),rgba(10,12,20,0.94)_58%)]"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]" aria-hidden="true">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:32px_32px]" />
            {/* <div data-plan-line className="absolute top-[18%] left-[4%] h-px w-[42%] bg-[#ff4900]" /> */}
            <div data-plan-line className="absolute top-[26%] right-[5%] h-px w-[34%] bg-white" />
            {/* <div data-plan-line className="absolute bottom-[16%] left-[10%] h-px w-[55%] bg-[#1b2433]" /> */}
          </div>

          <div className="mx-auto grid min-w-0 max-w-7xl grid-cols-[minmax(0,1fr)] gap-10 px-4 pt-12 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.78fr)] lg:items-center lg:gap-14 lg:px-8 lg:pt-24 lg:pb-20 xl:pb-24">
            <div data-hero-copy className="min-w-0 max-w-3xl">
              <Eyebrow light>{content.hero.eyebrow}</Eyebrow>
              <h1 className="text-[3.1rem] leading-[0.98] font-black tracking-[-0.035em] text-balance sm:text-[clamp(2.85rem,9.5vw,5.8rem)] sm:leading-[0.91]">
                {content.hero.title}{" "}
                <span className="text-[var(--campaign-accent)]">{content.hero.titleAccent}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
                {content.hero.description}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <PrimaryButton onClick={openDialog} pulse>
                  {content.hero.primaryCta}
                </PrimaryButton>
                <Link
                  href="#how-it-works"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--campaign-accent)]"
                >
                  {content.hero.secondaryCta}
                  <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" aria-hidden="true" />
                </Link>
              </div>
              <div className="mt-8 border-t border-white/15 pt-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7">
                  <p className="flex items-center gap-2 text-sm font-black text-white">
                    <TimerReset className="size-5 shrink-0 text-[var(--campaign-accent-light)]" aria-hidden="true" />
                    {content.hero.turnaround}
                  </p>
                  
                </div>
                <p className="mt-3 text-xs leading-5 text-white/58">
                  {trustedByLine}
                </p>
                {content.hero.systemsLine ? (
                  <p className="mt-2 text-xs leading-5 font-semibold text-white/76">
                    {content.hero.systemsLine}
                  </p>
                ) : null}
              </div>
            </div>

            <aside
              data-hero-form
              className="min-w-0 rounded-[1.75rem] border border-[#1b2433]/10 bg-white p-5 text-[#1b2433] shadow-[0_30px_80px_var(--campaign-shadow-soft)] sm:p-7"
              aria-labelledby="hero-form-title"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] font-bold tracking-[0.18em] text-[var(--campaign-accent-dark)] uppercase">
                    {content.form.eyebrow}
                  </p>
                  <h2 id="hero-form-title" className="mt-2 text-2xl font-bold tracking-[-0.04em]">
                    {content.form.title}
                  </h2>
                </div>
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-surface text-[var(--campaign-accent-dark)]">
                  <FileStack className="size-5" aria-hidden="true" />
                </span>
              </div>
              <p className="mb-5 text-sm leading-6 text-[#646b77]">{content.form.description}</p>
              <LeadForm
                content={content.form}
                thankYouPath={thankYouPath}
              />
            </aside>
          </div>
        </section>

        <section className="bg-[#1b2433] text-white" aria-label="Quality and confidentiality assurances">
          <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
            {assurances.map(({label, detail}, index) => {
              const Icon = [ShieldCheck, BadgeCheck, TimerReset][index] ?? BadgeCheck;
              return (
              <div key={label} className="flex items-center gap-4 py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                <Icon className="size-6 shrink-0 text-[var(--campaign-accent-light)]" aria-hidden="true" />
                <p>
                  <span className="block text-sm font-black">{label}</span>
                  <span className="block text-xs leading-5 text-white/60">{detail}</span>
                </p>
              </div>
              );
            })}
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="max-w-4xl">
              <Eyebrow>{content.servicesIntro.eyebrow}</Eyebrow>
              <h2 className="text-4xl leading-[1.02] font-black tracking-[-0.055em] text-balance sm:text-5xl lg:text-6xl">
                {content.servicesIntro.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#5a6270] sm:text-lg">
                {content.servicesIntro.description}
              </p>
            </div>

            <div className={`mt-10 grid gap-4 lg:mt-14 ${content.services.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {content.services.map((service) => {
                const Icon = iconMap[service.icon] ?? Ruler;
                return (
                  <article
                    key={service._key ?? service.title}
                    data-service-card
                    className="group relative min-h-72 overflow-hidden rounded-[1.5rem] border border-[#1b2433]/10 bg-brand-surface p-6 transition-colors hover:bg-brand-surface-strong sm:p-8"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-sm font-black tracking-[0.12em] text-[var(--campaign-accent-dark)]">{service.number}</span>
                    </div>
                    <div data-card-line className="mt-6 h-px w-full bg-[#1b2433]/15" aria-hidden="true" />
                    <span
                      data-card-icon
                      className="mt-7 inline-flex size-20 items-center justify-center rounded-2xl bg-[#1b2433] text-white shadow-[0_12px_28px_var(--campaign-shadow)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"
                    >
                      <Icon className="size-10" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-2xl font-bold tracking-[-0.04em]">{service.title}</h3>
                    {service.description ? (
                      <p className="mt-4 text-sm leading-7 text-[#596170]">
                        {service.description}
                      </p>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {content.softwareTools?.items?.length ? (
          <section className="bg-[#151827] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <div data-reveal>
                <Eyebrow light>{content.softwareTools.eyebrow}</Eyebrow>
                <h2 className="text-4xl leading-[1.02] font-black tracking-[-0.055em] text-balance sm:text-5xl lg:text-6xl">
                  {content.softwareTools.title}
                </h2>
              </div>

              <div className="mt-10 overflow-x-auto lg:mt-14 motion-safe:overflow-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div
                  ref={softwareTrackRef}
                  className="flex w-max shrink-0 will-change-transform"
                >
                  {[0, 1].map((group) => (
                    <div
                      key={group}
                      className="flex shrink-0 gap-4 pr-4"
                      aria-hidden={group === 1 ? "true" : undefined}
                    >
                      {content.softwareTools.items.map((tool) => (
                        <article
                          key={tool._key ?? tool.name}
                          className="flex aspect-[5/3] min-h-32 w-[clamp(11rem,22vw,15rem)] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-5 text-center shadow-[0_18px_48px_rgba(0,0,0,0.2)] sm:min-h-36"
                        >
                          {tool.textOnly ? (
                            <p className="text-lg leading-tight font-black tracking-[-0.03em] text-[#1b2433] sm:text-xl">
                              {tool.name}
                            </p>
                          ) : (
                            <Image
                              src={tool.src}
                              alt={`${tool.name} logo`}
                              width={180}
                              height={80}
                              className="max-h-16 w-auto max-w-full object-contain"
                            />
                          )}
                        </article>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section id="how-it-works" className="relative bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div data-reveal className="lg:sticky lg:top-10 lg:self-start">
              <Eyebrow>{content.process.eyebrow}</Eyebrow>
              <h2 className="text-4xl leading-[1.04] font-black tracking-[-0.055em] text-balance sm:text-5xl">
                {content.process.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-[#596170]">{content.process.description}</p>
              <div className="mt-7">
                <PrimaryButton onClick={openDialog}>
                  {content.process.buttonLabel ?? "Start with my active bid"}
                </PrimaryButton>
              </div>
            </div>

            <ol>
              {content.process.steps.map((step, index) => {
                const Icon = [FileStack, ClipboardCheck, CheckCircle2][index] ?? CheckCircle2;
                return (
                  <li key={step._key ?? step.title}>
                    <article
                      data-process-step
                      className="grid gap-5 rounded-[1.5rem] border border-[#1b2433]/10 bg-white p-6 shadow-[0_18px_50px_var(--campaign-shadow-soft)] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8"
                    >
                      <span className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--campaign-accent-soft)] text-[var(--campaign-accent-dark)]">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-black tracking-[0.15em] text-[var(--campaign-accent-dark)] uppercase">Step 0{index + 1}</p>
                        <h3 className="mt-2 text-xl font-bold tracking-[-0.03em]">{step.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-[#606775]">{step.description}</p>
                      </div>
                      <span className="hidden text-5xl font-black tracking-[-0.06em] text-[#1b2433]/6 sm:block" aria-hidden="true">
                        0{index + 1}
                      </span>
                    </article>
                    {index < content.process.steps.length - 1 ? (
                      <div className="flex h-14 items-center justify-center" aria-hidden="true">
                        <span data-step-arrow className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--campaign-accent)] bg-white text-[var(--campaign-accent-dark)] shadow-[0_6px_18px_var(--campaign-shadow-soft)]">
                          <ArrowDown className="size-5" />
                        </span>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {content.additionalServices?.items?.length ? (
          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-7xl">
              <div data-reveal className="max-w-4xl">
                <h2 className="text-4xl leading-[1.02] font-black tracking-[-0.055em] text-balance sm:text-5xl lg:text-6xl">
                  {content.additionalServices.title}
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-[#5a6270] sm:text-lg">
                  {content.additionalServices.description}
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
                {content.additionalServices.items.map((service, index) => {
                  const Icon = iconMap[service.icon] ?? Boxes;

                  return (
                    <article
                      key={service._key ?? service.title}
                      data-reveal
                      className="group flex min-h-64 flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[#1b2433]/10 bg-brand-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--campaign-accent)]/30 hover:bg-brand-surface-strong hover:shadow-[0_20px_50px_var(--campaign-shadow-soft)] sm:p-7"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-[#1b2433] text-white shadow-[0_12px_28px_var(--campaign-shadow)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                          <Icon className="size-8" strokeWidth={1.7} aria-hidden="true" />
                        </span>
                        <span className="text-xs font-black tracking-[0.14em] text-[var(--campaign-accent-dark)]">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-8 text-2xl leading-tight font-bold tracking-[-0.04em]">
                        {service.title}
                      </h3>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        {content.audience?.items?.length ? (
        <section className="bg-[#1b2433] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="max-w-3xl">
              <Eyebrow light>{content.audience.eyebrow}</Eyebrow>
              <h2 className="text-4xl leading-[1.03] font-black tracking-[-0.055em] text-balance sm:text-5xl lg:text-6xl">
                {content.audience.title}
              </h2>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 lg:mt-14 lg:grid-cols-3">
              {content.audience.items.map((item, index) => {
                const Icon = audienceIcons[index] ?? UsersRound;
                return (
                  <article key={item._key ?? item.title} data-reveal className="group bg-[#1b2433] p-6 sm:p-8 lg:min-h-72">
                    <span
                      data-audience-icon
                      className="inline-flex size-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-[var(--campaign-accent-light)] shadow-[0_16px_38px_var(--campaign-shadow)] transition duration-300 group-hover:rotate-6 group-hover:border-[var(--campaign-accent)] group-hover:bg-[var(--campaign-accent)] group-hover:text-white"
                    >
                      <Icon className="size-8" aria-hidden="true" />
                    </span>
                    <h3 className="mt-8 text-2xl font-bold tracking-[-0.04em]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        ) : null}

        {currentTestimonial ? (
        <section className="relative isolate overflow-hidden bg-[#151827] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <figure data-reveal className="relative mx-auto max-w-5xl">
            <Quote data-quote-mark className="mb-7 size-12 fill-[var(--campaign-accent-light)] text-[var(--campaign-accent-light)] sm:size-16" aria-hidden="true" />
            <div key={currentTestimonial._key ?? currentTestimonial.author} data-testimonial-slide>
              <blockquote className="text-3xl leading-[1.2] font-bold tracking-[-0.045em] text-balance sm:text-4xl lg:text-5xl">
                “{currentTestimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 flex flex-col gap-4 border-t border-white/18 pt-6 sm:flex-row sm:items-end sm:justify-between">
                <p>
                  <span className="block text-base font-black">{currentTestimonial.author}</span>
                  <span className="mt-1 block text-sm text-white/65">{currentTestimonial.role}</span>
                </p>
                <span className="w-fit rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-bold">{currentTestimonial.relationship}</span>
              </figcaption>
            </div>
            {testimonials.length > 1 ? (
              <div className="mt-8 flex items-center justify-between gap-5">
                <div className="flex items-center gap-2" aria-label="Testimonial slides">
                  {testimonials.map((item, index) => (
                    <button
                      key={item._key ?? item.author}
                      type="button"
                      aria-label={`Show testimonial ${index + 1}`}
                      aria-current={index === activeTestimonial ? "true" : undefined}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-1.5 rounded-full transition-all ${index === activeTestimonial ? "w-10 bg-[var(--campaign-accent)]" : "w-4 bg-white/25 hover:bg-white/45"}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:border-[var(--campaign-accent)] hover:bg-[var(--campaign-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="size-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:border-[var(--campaign-accent)] hover:bg-[var(--campaign-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="size-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ) : null}
          </figure>
        </section>
        ) : null}

        <LandingStats data={stats} />
        <LandingClientele data={clientele} />

        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div data-reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#1b2433] p-6 text-center text-white sm:p-10 lg:p-14">
            <div className="mx-auto flex max-w-4xl flex-col items-center">
              <Eyebrow light>{content.finalCta.eyebrow}</Eyebrow>
              <h2 className="text-4xl leading-[1.02] font-black tracking-[-0.055em] text-balance sm:text-5xl lg:text-6xl">
                {content.finalCta.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">{content.finalCta.description}</p>
              <div className="mt-8">
                <PrimaryButton onClick={openDialog} pulse>{content.finalCta.buttonLabel}</PrimaryButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1b2433]/10 bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--campaign-accent)]">
              <Image
                src={campaignTheme.footerLogoSrc}
                width={170}
                height={72}
                alt={campaignTheme.logoAlt}
                className="h-auto w-[132px]"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#626977]">{content.footer.statement}</p>
          </div>
          <div className="space-y-3 text-sm font-semibold">
            {email ? (
              <a className="flex items-center gap-2 hover:text-[var(--campaign-accent-dark)]" href={`mailto:${email}`}>
                <Mail className="size-4" aria-hidden="true" />
                {email}
              </a>
            ) : null}
            {content.footer.phone ? (
              <a
                className="flex items-center gap-2 hover:text-[var(--campaign-accent-dark)]"
                href={getWhatsappHref(content.footer.phone)}
                target="_blank"
                rel="noreferrer"
                aria-label={`Chat on WhatsApp at ${content.footer.phone}`}
              >
                <FaWhatsapp className="size-4" aria-hidden="true" />
                {content.footer.phone}
              </a>
            ) : null}
          </div>
        </div>
        <div className="mx-auto mt-9 flex max-w-7xl flex-col gap-2 border-t border-[#1b2433]/10 pt-5 text-xs text-[#737984] sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} ARK Simplify. All rights reserved.</p>
          {content.footer.disclaimer ? <p>{content.footer.disclaimer}</p> : null}
        </div>
      </footer>

      <FloatingWhatsapp phone={content.footer.phone} />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-secondary/10 bg-white/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-12px_36px_var(--campaign-shadow-soft)] backdrop-blur-xl sm:hidden">
        <button
          type="button"
          onClick={openDialog}
          className="construction-cta-pulse mx-auto flex min-h-12 w-full max-w-md items-center justify-center gap-2 rounded-full bg-[var(--campaign-accent)] px-5 text-sm font-bold text-white shadow-[0_12px_28px_var(--campaign-shadow)] transition hover:bg-[var(--campaign-accent-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--campaign-accent)]"
        >
          {content.hero.primaryCta}
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className="construction-lead-dialog m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-[1.75rem] border border-[#1b2433]/10 bg-white p-0 text-[#1b2433] shadow-[0_40px_120px_var(--campaign-shadow-strong)]"
        aria-labelledby="dialog-form-title"
        onClose={() => {
          document.body.style.overflow = "";
        }}
        onPointerDown={(event) => {
          dialogPointerDownOnBackdropRef.current =
            event.target === event.currentTarget;
        }}
        onPointerCancel={() => {
          dialogPointerDownOnBackdropRef.current = false;
        }}
        onClick={(event) => {
          const clickedBackdrop =
            dialogPointerDownOnBackdropRef.current &&
            event.target === event.currentTarget;

          dialogPointerDownOnBackdropRef.current = false;
          if (clickedBackdrop) closeDialog();
        }}
      >
        <div className="relative p-5 sm:p-8">
          <button
            className="absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-full bg-brand-surface transition hover:bg-brand-surface-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--campaign-accent)]"
            type="button"
            onClick={closeDialog}
            aria-label="Close form"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <div className="mb-6 pr-12">
            <p className="text-[0.68rem] font-bold tracking-[0.18em] text-[var(--campaign-accent-dark)] uppercase">{content.form.eyebrow}</p>
            <h2 id="dialog-form-title" className="mt-2 text-3xl font-black tracking-[-0.045em]">{content.form.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#646b77]">{content.form.description}</p>
          </div>
          <LeadForm
            content={content.form}
            thankYouPath={thankYouPath}
          />
        </div>
      </dialog>
    </div>
  );
}
