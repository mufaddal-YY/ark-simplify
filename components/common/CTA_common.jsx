import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";

import { cn } from "@/lib/utils";

const defaultItems = [
  "Speak with our team",
  "Discuss your current workflow",
  "Identify the right support model",
];

export default function CTA_common({
  eyebrow = "Let’s Talk",
  title = "Let’s simplify the work behind your operations.",
  description = "Connect with our team to discuss your requirements, understand where support is needed, and explore how Ark Simplify can work alongside your business.",
  ctaLabel = "Get in Touch",
  ctaHref = "/contact-us",
  items = defaultItems,
  className,
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#20283a] px-4 py-18 sm:px-6 sm:py-24 lg:px-8",
        className,
      )}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[52rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[74rem] w-[74rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(54,59,79,0.82),rgba(8,11,20,0.92)_54%,rgba(54,59,79,0.72))]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 overflow-hidden rounded-lg border border-white/8 bg-[#090d19] p-6 shadow-[0_28px_90px_rgba(5,8,16,0.28)] sm:p-8 lg:grid-cols-[minmax(0,0.56fr)_minmax(320px,0.44fr)] lg:items-center lg:p-12">
          <div className="space-y-7">
            <p className="inline-flex items-center gap-2 rounded-lg border border-white/18 bg-transparent px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white uppercase">
              <Phone className="h-4 w-4" />
              {eyebrow}
            </p>

            <div className="space-y-5">
              <h2 className="max-w-3xl text-4xl leading-[1.06] font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                {title}
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
                {description}
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-brand-secondary/76 bg-brand-secondary/48 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-6 lg:p-7">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex min-h-16 items-center gap-4 rounded-lg border border-white/10 bg-[#121624]/72 px-5 py-4 text-base font-medium text-white/78 sm:text-lg"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-brand-primary">
                    <Check className="h-5 w-5" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              href={ctaHref}
              className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-brand-primary px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary/90 hover:shadow-[0_18px_36px_rgba(255,73,0,0.24)]"
            >
              {ctaLabel}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
