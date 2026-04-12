const testimonials = [
  {
    quote:
      "Ark brought structure and calm to our day-to-day finance workflows. The team was consistent, responsive, and dependable.",
  },
  {
    quote:
      "Working with Ark felt like adding real operational capacity without disrupting the systems we already relied on.",
  },
  {
    quote:
      "Their support improved visibility, accuracy, and follow-through across the finance work that tends to get fragmented over time.",
  },
];

export default function FinanceTestimonials() {
  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8 lg:space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-finance uppercase">
            What our clients say
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-brand-secondary sm:text-5xl">
            What our clients say
          </h2>
          <p className="max-w-3xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
            Reflections on working with Ark Simplify in day-to-day project and operational environments.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.quote}
              className="min-h-72 rounded-lg border border-brand-finance/16 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.05)] sm:p-7"
            >
              <div className="space-y-5">
                <div className="h-px w-14 bg-brand-finance" />
                <p className="text-lg leading-8 text-brand-secondary/74 sm:text-xl">
                  {item.quote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
