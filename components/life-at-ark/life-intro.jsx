import Image from "next/image";

const defaultIntro = {
  eyebrow: "Life at ARK",
  title: "A team built around ownership, collaboration, and steady growth.",
  lead: "Life at Ark is shaped by real work, shared responsibility, and a culture that values doing things properly.",
  paragraphs: [
    "We work across construction delivery, finance, and operational support, so our teams stay close to the kind of work that matters in live business environments. That means learning by doing, staying structured under pressure, and supporting one another through complex projects.",
    "This page also serves as our careers page. It gives a closer look at how we work, what we value, and the kind of people who tend to thrive at Ark Simplify.",
  ],
  imageUrl: "/life1.png",
  imageAlt: "Life at ARK Simplify",
};

export default function LifeIntro({ data }) {
  const intro = data ?? defaultIntro;
  const paragraphs = intro.paragraphs?.length
    ? intro.paragraphs
    : defaultIntro.paragraphs;

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-8">
          <div className="max-w-4xl space-y-5">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
              {intro.eyebrow ?? defaultIntro.eyebrow}
            </p>
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-brand-secondary lg:text-5xl">
              {intro.title ?? defaultIntro.title}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
            <div className="rounded-lg border border-brand-secondary/10 bg-brand-surface p-6 sm:p-7 lg:p-8">
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

            <div className="overflow-hidden rounded-lg border border-brand-secondary/10 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
              <Image
                src={intro.imageUrl ?? defaultIntro.imageUrl}
                alt={intro.imageAlt ?? defaultIntro.imageAlt}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
