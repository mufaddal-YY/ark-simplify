"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 5825,
    label: "No. of Projects",
    microLabel: "Delivered across supported engagements",
  },
  {
    value: 66810,
    label: "Total Units",
    microLabel: "Measured across tracked project scopes",
  },
  {
    value: 45330,
    suffix: " hrs",
    label: "Manhours Saved",
    microLabel: "Total saved hours represented in supported delivery",
  },
  {
    value: 300,
    prefix: "$",
    suffix: "m",
    label: "Bid Amount",
    microLabel: "Combined bid value across tracked scopes",
  },
];

function CounterStat({
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

  return (
    <article
      ref={ref}
      className="min-h-[11rem] rounded-lg border border-white/10 bg-brand-secondary/22 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-secondary/80 hover:bg-brand-secondary/42 sm:p-6">
      <p className="text-4xl leading-none font-semibold tracking-[-0.05em] text-white sm:text-5xl">
        {prefix}
        {displayValue.toLocaleString("en-US")}
        {suffix}
      </p>
      <div className="mt-5 space-y-2">
        <p className="text-base font-semibold text-white/82">{label}</p>
        <p className="text-sm leading-6 text-white/54">{microLabel}</p>
      </div>
    </article>
  );
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#151827] px-4 py-18 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(54,59,79,0.72),transparent_34%),radial-gradient(circle_at_76%_18%,rgba(255,73,0,0.025),transparent_28%),linear-gradient(135deg,rgba(54,59,79,0.62),rgba(10,12,20,0.94)_58%)]" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/22 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
        <div className="space-y-7">
          <div className="space-y-3">
            <p className="inline-flex rounded-lg border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/64 uppercase">
              Delivery Results
            </p>
            <div className="h-px w-12 bg-brand-primary/70" />
          </div>

          <div className="space-y-5">
            <h2 className="max-w-xl text-4xl leading-[1.02] font-semibold tracking-[-0.06em] text-white lg:text-5xl">
              Consistent support, measured across real delivery.
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/64 sm:text-lg">
              The same operating discipline behind our construction, finance,
              and project support work, shown through the numbers teams rely on.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-brand-secondary/72 bg-[#0d101c]/76 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-6 lg:p-8">
          <p className="mb-6 text-xs font-semibold tracking-[0.22em] text-white/58 uppercase">
            Key Results
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <CounterStat
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
      </div>
    </section>
  );
}
