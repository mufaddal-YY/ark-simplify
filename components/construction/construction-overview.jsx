const constructionServices = [
  "Estimating",
  "Detailing",
  "Project Management Support",
];

export default function ConstructionOverview() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start lg:gap-16">
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
              Core Services
            </p>
            <p className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-brand-secondary sm:text-3xl">
              Ark Simplify Construction supports manufacturers, general
              contractors, and subcontractors with three core operational
              services.
            </p>

            <div className="space-y-3">
              {constructionServices.map((service) => (
                <div
                  key={service}
                  className="border-l-2 border-brand-primary pl-4 text-lg font-semibold tracking-[-0.02em] text-brand-secondary sm:text-xl"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="space-y-5 rounded-lg border border-brand-secondary/10 bg-white p-5 shadow-[0_22px_60px_rgba(54,59,79,0.06)] sm:p-6 lg:p-7">
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-[0.18em] text-brand-secondary/48 uppercase">
                  Engagement Scope
                </p>
                <div className="h-px w-16 bg-brand-primary" />
              </div>
              <p className="text-lg leading-9 text-brand-secondary/72 sm:text-xl">
                These services address different phases of a project lifecycle,
                from pre-bid analysis to post-award coordination and ongoing
                project execution.
              </p>
              <p className="text-lg leading-9 text-brand-secondary/72 sm:text-xl">
                While the service categories remain consistent, the depth and
                nature of engagement varies by client type. Our role is to
                strengthen internal capabilities, reduce operational friction,
                and help project teams make better decisions with reliable
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
