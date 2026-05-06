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
      className="min-h-[11rem] rounded-lg border border-white/10 bg-brand-secondary/22 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-secondary/80 hover:bg-brand-secondary/42 sm:p-6"
    >
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

      <div className="relative mx-auto max-w-7xl space-y-7">
        <div className="space-y-3">
          <p className="text-sm font-semibold tracking-[0.18em] text-white/72 uppercase">
            Overall Stats
          </p>
          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-white sm:text-5xl lg:text-[3.5rem]">
            Quantified delivery at scale across projects, units, hours, and bid value.
          </h2>
          <p className="max-w-3xl text-base leading-7 text-white/76 sm:text-lg">
            A broader snapshot of the work volume Ark Simplify has supported,
            designed to highlight the depth and operational range behind our
            delivery model.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
    </section>
  );
}
