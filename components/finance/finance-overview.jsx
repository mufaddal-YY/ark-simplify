const defaultOverview = {
  eyebrow: "Finance Overview",
  title: "Ark Simplify Finance",
  lead: "Ark Simplifying Finance by supporting businesses with the financial and operational functions that keep day-to-day work running smoothly.",
  paragraphs: [
    "We bring structure and accuracy to essential finance processes by working as an extension of internal teams, aligning with existing systems, and taking ownership of clearly defined responsibilities so work is handled consistently as organizations grow.",
    "Our Finance team works across industries. While we have strong experience supporting construction and manufacturing businesses, our finance services are built to support any organization that values structured processes and dependable execution.",
  ],
};

export default function FinanceOverview({ data }) {
  const overview = data ?? defaultOverview;
  const paragraphs = overview.paragraphs?.length
    ? overview.paragraphs
    : defaultOverview.paragraphs;

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <div className="space-y-5">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-finance uppercase">
              {overview.eyebrow ?? defaultOverview.eyebrow}
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-brand-secondary lg:text-5xl">
              {overview.title ?? defaultOverview.title}
            </h2>
            <div className="h-px w-16 bg-brand-finance" />
          </div>

          <div className="space-y-5">
            <p className="text-xl font-semibold leading-snug tracking-[-0.03em] text-brand-secondary sm:text-2xl">
              {overview.lead ?? defaultOverview.lead}
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
