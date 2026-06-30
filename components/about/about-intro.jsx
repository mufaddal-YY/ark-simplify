const defaultIntro = {
  eyebrow: "About Us",
  title: "Built for teams operating inside real complexity.",
  lead: "Ark Simplify was built to support organizations operating in complex, execution-heavy environments where growth is often constrained by skill gaps, fragile processes, or over-dependence on individuals.",
  paragraphs: [
    "We work with construction, manufacturing, and growing businesses that need dependable support across project delivery and operational finance. Our focus is on taking ownership of clearly defined responsibilities and building systems that continue to perform as teams evolve.",
    "Ark Simplify brings together construction and finance capabilities under one parent brand to reduce fragmentation across critical workflows. This helps clients manage planning, execution, and day-to-day operations with greater continuity and confidence as they scale.",
    "We work in close coordination with client teams, embedding into existing workflows and contributing as a trusted extension of their operations. Accountability, follow-through, and consistency define how we support our clients, project after project.",
  ],
};

export default function AboutIntro({ data }) {
  const intro = data ?? defaultIntro;
  const paragraphs = intro.paragraphs?.length
    ? intro.paragraphs
    : defaultIntro.paragraphs;

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="space-y-5">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
              {intro.eyebrow ?? defaultIntro.eyebrow}
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-brand-secondary lg:text-5xl">
              {intro.title ?? defaultIntro.title}
            </h2>
            <div className="h-px w-16 bg-brand-primary" />
          </div>

          <div className="space-y-5">
            <p className="text-xl font-semibold leading-snug tracking-[-0.03em] text-brand-secondary sm:text-2xl">
              {intro.lead ?? defaultIntro.lead}
            </p>
            {paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-base leading-8 text-brand-secondary/72 sm:text-lg ${
                  index === paragraphs.length - 1
                    ? "border-t border-brand-secondary/10 pt-5"
                    : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
