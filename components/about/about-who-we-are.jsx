import Image from "next/image";

export default function AboutWhoWeAre() {
  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-stretch lg:gap-16">
          <div className="space-y-5">
            
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-brand-secondary lg:text-5xl">
              Who we are
            </h2>
            <div className="h-px w-16 bg-brand-primary" />
            <p className="text-xl font-semibold leading-snug tracking-[-0.03em] text-brand-secondary sm:text-2xl">
              We are a team of 50+ dynamic professionals working across construction delivery, finance, and operational support.
            </p>
            <p className="text-base leading-8 text-brand-secondary/72 sm:text-lg">
              Our work is shaped by hands-on experience in live project
              environments and process-driven businesses.
            </p>
            <p className="text-base leading-8 text-brand-secondary/72 sm:text-lg">
              We combine technical understanding with a disciplined approach to
              execution. Clear communication, respect for structure, and
              attention to detail guide how we plan, review, and deliver our
              work.
            </p>
            <p className="text-base leading-8 text-brand-secondary/72 sm:text-lg">
              The way Ark Simplify operates reflects how the company was built.
              There is a strong belief in shared responsibility, steady
              collaboration, and doing the work properly even when it is
              complex or unseen. This balance of operational rigor and human
              understanding defines how our teams work together and how they
              show up for clients every day.
            </p>
          </div>

          <div className="h-full overflow-hidden rounded-lg border border-brand-secondary/10 bg-white shadow-[0_22px_60px_rgba(54,59,79,0.08)]">
            <Image
              src="/construction_stats.jpg"
              alt="ARK Simplify team collaboration"
              width={1200}
              height={900}
              className="h-full min-h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
