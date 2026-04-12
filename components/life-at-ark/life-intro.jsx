import Image from "next/image";

export default function LifeIntro() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-8">
          <div className="max-w-4xl space-y-5">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
              Life at ARK
            </p>
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-brand-secondary lg:text-5xl">
              A team built around ownership, collaboration, and steady growth.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
            <div className="rounded-lg border border-brand-secondary/10 bg-brand-surface p-6 sm:p-7 lg:p-8">
              <div className="space-y-5">
                <p className="text-xl font-semibold leading-snug tracking-[-0.03em] text-brand-secondary sm:text-2xl">
                  Life at Ark is shaped by real work, shared responsibility,
                  and a culture that values doing things properly.
                </p>
                <p className="text-base leading-8 text-brand-secondary/72 sm:text-lg">
                  We work across construction delivery, finance, and
                  operational support, so our teams stay close to the kind of
                  work that matters in live business environments. That means
                  learning by doing, staying structured under pressure, and
                  supporting one another through complex projects.
                </p>
                <p className="border-t border-brand-secondary/10 pt-5 text-base leading-8 text-brand-secondary/72 sm:text-lg">
                  This page also serves as our careers page. It gives a closer
                  look at how we work, what we value, and the kind of people
                  who tend to thrive at Ark Simplify.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-brand-secondary/10 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
              <Image
                src="/life1.png"
                alt="Life at ARK Simplify"
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
