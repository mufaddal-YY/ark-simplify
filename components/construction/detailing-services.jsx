import Image from "next/image";

const detailingPoints = [
  "Verification of estimating outputs after award",
  "Constructability checks before fabrication or installation",
  "Coordination validation across project drawings",
  "Accuracy checks prior to site execution",
];

const defaultDetailing = {
  eyebrow: "Detailing Services",
  title: "Detailing services",
  description:
    "Detailing is provided exclusively for subcontractors as a post-award mitigation and accuracy assurance service.",
  infoBlocks: [
    {
      label: "When it starts",
      text: "Once a project is awarded, Ark supports subcontractors in preparing construction-ready documentation for the next phase of execution.",
    },
    {
      label: "Why it matters",
      text: "The focus is to ensure fabrication, installation, and shipment proceed with 99.9%-100% accuracy before work reaches the field.",
    },
  ],
  scopeLabel: "Our detailing scope includes",
  scopePoints: detailingPoints,
  summary:
    "The objective is to achieve near-perfect accuracy before work reaches the field, reducing rework, delays, and cost escalation.",
  imageUrl: "/construction/detailing.jpg",
  imageAlt: "Construction detailing services",
};

export default function DetailingServices({ data }) {
  const section = data ?? defaultDetailing;
  const infoBlocks = section.infoBlocks?.length
    ? section.infoBlocks
    : defaultDetailing.infoBlocks;
  const scopePoints = section.scopePoints?.length
    ? section.scopePoints
    : defaultDetailing.scopePoints;

  return (
    <section className="bg-[#151827] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-10">
          <div className="space-y-5">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
              {section.eyebrow ?? defaultDetailing.eyebrow}
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white lg:text-5xl">
              {section.title ?? defaultDetailing.title}
            </h2>
            <div className="h-px w-16 bg-brand-primary" />
            <p className="max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
              {section.description ?? defaultDetailing.description}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,1fr)] lg:items-stretch">
            <div className="rounded-lg border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(54,59,79,0.52),transparent_34%),linear-gradient(135deg,rgba(54,59,79,0.48),rgba(10,12,20,0.94)_62%)] px-5 py-5 text-white sm:px-6 sm:py-6 lg:px-7 lg:py-6">
              <div className="grid gap-6 lg:min-h-[28rem] lg:grid-cols-[minmax(0,0.72fr)_1px_minmax(0,1fr)] lg:items-center">
                <div className="space-y-5 self-center">
                  {infoBlocks.map((block, index) => (
                    <div key={block.label} className="space-y-5">
                      {index > 0 ? (
                        <div className="h-px w-full bg-brand-construction lg:hidden" />
                      ) : null}
                      <div className="space-y-3">
                        <p className="text-sm font-semibold tracking-[0.08em] text-white uppercase">
                          {block.label}
                        </p>
                        <p className="text-base leading-7 text-white/74 sm:text-lg">
                          {block.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hidden h-full w-px bg-white lg:block" />

                <div className="space-y-5 self-center">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold tracking-[0.18em] text-white/54 uppercase">
                      {section.scopeLabel ?? defaultDetailing.scopeLabel}
                    </p>
                    <div className="h-px w-16 bg-brand-primary" />
                  </div>

                  <ul className="space-y-3">
                    {scopePoints.map((point) => (
                      <li
                        key={point}
                        className="grid grid-cols-[0.5rem_minmax(0,1fr)] gap-3 text-base leading-7 text-white/84 sm:text-lg"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-brand-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-base leading-8 text-white/84 sm:text-lg">
                    {section.summary ?? defaultDetailing.summary}
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-brand-construction bg-[#0b0f1a] shadow-[0_22px_60px_rgba(54,59,79,0.08)]">
              <Image
                src={section.imageUrl ?? defaultDetailing.imageUrl}
                alt={section.imageAlt ?? defaultDetailing.imageAlt}
                width={1200}
                height={900}
                className="aspect-video w-full object-cover lg:min-h-[28rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
