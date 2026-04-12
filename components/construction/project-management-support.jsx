const supportPoints = [
  "Project scheduling and milestone tracking",
  "Delivery and logistics coordination",
  "Compliance tracking and documentation",
  "Progress reporting and communication",
];

export default function ProjectManagementSupport() {
  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start lg:gap-16">
          <div className="space-y-5">
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-brand-secondary sm:text-5xl">
              Project management{" "}
              <span className="text-brand-primary">support</span>
            </h2>
            <div className="h-px w-16 bg-brand-primary" />
            <p className="max-w-3xl text-xl font-semibold leading-snug tracking-[-0.03em] text-brand-secondary sm:text-xl">
              Operational support that keeps execution structured, visible, and
              moving.
            </p>
            <p className="max-w-3xl text-base leading-7 text-brand-secondary/72 sm:text-lg">
              Ark provides operational project management support across
              manufacturers, general contractors, & subcontractors. This
              service focuses on maintaining structure and visibility across
              the execution phase of a project.
            </p>

            <div className="space-y-3 border-t border-brand-secondary/10 pt-5">
              <p className="text-md font-semibold text-brand-secondary uppercase">
                Core support areas include
              </p>

              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {supportPoints.map((point) => (
                  <li
                    key={point}
                    className="grid grid-cols-[0.5rem_minmax(0,1fr)] gap-3 text-base leading-6 text-brand-secondary/78"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 border-t border-brand-secondary/10 pt-5">
              <p className="text-md font-semibold text-brand-secondary uppercase">
                Onboarding approach
              </p>
              <p className="max-w-3xl text-base leading-7 text-brand-secondary/72 sm:text-lg">
              Each engagement begins with a short onboarding phase to align
              tools, workflows, and reporting expectations with the client’s
              team. This allows Ark’s project managers to integrate quickly and
              support project execution without disrupting existing processes.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-brand-secondary/10 bg-[#0b0f1a]">
            <video
              src="/demo_video.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="aspect-video w-full object-cover lg:min-h-[32rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
