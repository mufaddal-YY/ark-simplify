const defaultWorkflowFit = {
  eyebrow: "Workflow Fit",
  title: "How Ark fits into your workflow",
  lead: "Ark Simplify Construction works alongside your existing team, supporting the operational work that often slows projects down.",
  paragraphs: [
    "Our role is to assist with estimating verification, detailing accuracy, and project coordination so your team can stay focused on decisions, relationships, and execution.",
    "By handling the structured analytical and coordination tasks behind the scenes, we help project teams move forward with better visibility and fewer operational gaps.",
  ],
};

export default function WorkflowFit({ data }) {
  const section = data ?? defaultWorkflowFit;
  const paragraphs = section.paragraphs?.length
    ? section.paragraphs
    : defaultWorkflowFit.paragraphs;

  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <div className="space-y-5">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
              {section.eyebrow ?? defaultWorkflowFit.eyebrow}
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-brand-secondary lg:text-5xl">
              {section.title ?? defaultWorkflowFit.title}
            </h2>
            <div className="h-px w-16 bg-brand-primary" />
          </div>

          <div className="space-y-5">
            <p className="text-xl font-semibold leading-snug tracking-[-0.03em] text-brand-secondary sm:text-2xl">
              {section.lead ?? defaultWorkflowFit.lead}
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
