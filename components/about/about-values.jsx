import {
  BadgeCheck,
  Blocks,
  Compass,
  HeartHandshake,
  Layers3,
  Rocket,
  Smile,
  Target,
} from "lucide-react";

const principleCards = [
  {
    label: "Vision",
    title: "Enabling businesses to grow without limits of skills, structure, or geography.",
    description:
      "We envision businesses scaling with confidence, supported by dependable systems and teams that perform consistently, even as people, markets, and conditions change.",
    icon: Compass,
  },
  {
    label: "Mission",
    title: "Building systems and teams that make work scale reliably.",
    description:
      "We work closely with organizations to understand how their work flows. By combining capable teams with well-structured systems, we help work scale smoothly as demands grow.",
    icon: Rocket,
  },
  {
    label: "Purpose",
    title: "To help organizations simplify complex internal processes.",
    description:
      "We exist to remove unnecessary complexity from how work gets done. By simplifying internal processes, we help teams operate with more clarity, focus, and confidence in their day-to-day work.",
    icon: Target,
  },
];

const coreValues = [
  {
    title: "Prepared for Complexity",
    description:
      "We work with clarity in environments where details matter and conditions change.",
    icon: BadgeCheck,
  },
  {
    title: "Structure Over Chaos",
    description:
      "We believe clear structure makes complex work easier to manage.",
    icon: Layers3,
  },
  {
    title: "Ownership of Work",
    description:
      "We take responsibility for what we deliver and stay accountable from start to finish.",
    icon: Blocks,
  },
  {
    title: "One Team Mindset",
    description:
      "We work with clients and colleagues as one team, built on trust and shared growth.",
    icon: HeartHandshake,
  },
  {
    title: "Enjoy the Work",
    description:
      "We take our work seriously, while creating an environment that is positive and human.",
    icon: Smile,
  },
];

const iconMap = {
  compass: Compass,
  rocket: Rocket,
  target: Target,
  "badge-check": BadgeCheck,
  layers: Layers3,
  blocks: Blocks,
  handshake: HeartHandshake,
  smile: Smile,
};

function normalizeCard(card, fallbackIcon = Compass) {
  return {
    ...card,
    icon:
      typeof card.icon === "string"
        ? iconMap[card.icon] ?? fallbackIcon
        : card.icon ?? fallbackIcon,
  };
}

function ValueIconCard({ icon: Icon, label, title, description }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/6 p-6 backdrop-blur-md sm:p-7">
      <div className="space-y-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/12 bg-white/6">
          <Icon className="h-5 w-5 text-brand-primary" strokeWidth={1.55} />
        </div>
        <div className="h-px w-14 bg-brand-primary" />
        <div className="space-y-3">
          {label ? (
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
              {label}
            </p>
          ) : null}
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
            {title}
          </h3>
          <p className="text-sm leading-7 text-white/72 sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function AboutValues({ data }) {
  const values = data ?? {};
  const principles = (values.principles?.length
    ? values.principles
    : principleCards
  ).map((card) => normalizeCard(card));
  const coreValuesTitle = values.coreValuesTitle ?? "Core values";
  const normalizedCoreValues = (values.coreValues?.length
    ? values.coreValues
    : coreValues
  ).map((card) => normalizeCard(card, BadgeCheck));

  return (
    <section className="relative overflow-hidden bg-[#151827] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(54,59,79,0.72),transparent_34%),linear-gradient(135deg,rgba(54,59,79,0.62),rgba(10,12,20,0.94)_58%)]" />

      <div className="relative mx-auto max-w-7xl space-y-6 lg:space-y-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {principles.map((card) => (
            <ValueIconCard key={card.title} {...card} />
          ))}
        </div>

        <div className="rounded-lg border border-white/10 bg-white/6 p-6 backdrop-blur-md sm:p-7">
          <div className="space-y-5">
            <div className="space-y-3">
              
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                {coreValuesTitle}
              </h3>
              <div className="h-px w-16 bg-brand-primary" />
            </div>

            <div className="grid gap-5 xl:grid-cols-5">
            {normalizedCoreValues.map((value) => (
              <div key={value.title} className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/12 bg-white/6">
                  <value.icon
                    className="h-5 w-5 text-brand-primary"
                    strokeWidth={1.55}
                  />
                </div>
                <div className="h-px w-14 bg-brand-primary" />
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/72 sm:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
