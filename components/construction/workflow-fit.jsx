export default function WorkflowFit() {
  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <div className="space-y-5">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
              Workflow Fit
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-brand-secondary lg:text-5xl">
              How Ark fits into your workflow
            </h2>
            <div className="h-px w-16 bg-brand-primary" />
          </div>

          <div className="space-y-5">
            <p className="text-xl font-semibold leading-snug tracking-[-0.03em] text-brand-secondary sm:text-2xl">
              Ark Simplify Construction works alongside your existing team,
              supporting the operational work that often slows projects down.
            </p>
            <p className="text-base leading-8 text-brand-secondary/72 sm:text-lg">
              Our role is to assist with estimating verification, detailing
              accuracy, and project coordination so your team can stay focused
              on decisions, relationships, and execution.
            </p>
            <p className="border-t border-brand-secondary/10 pt-5 text-base leading-8 text-brand-secondary/72 sm:text-lg">
              By handling the structured analytical and coordination tasks
              behind the scenes, we help project teams move forward with better
              visibility and fewer operational gaps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
