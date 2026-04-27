import Image from "next/image";

const partners = [
  "/client/Screenshot 2026-04-27 at 3.36.32%E2%80%AFPM.png",
  "/client/Screenshot 2026-04-27 at 3.36.44%E2%80%AFPM.png",
  "/client/Screenshot 2026-04-27 at 3.36.57%E2%80%AFPM.png",
  "/client/Screenshot 2026-04-27 at 3.37.08%E2%80%AFPM.png",
  "/client/Screenshot 2026-04-27 at 3.37.16%E2%80%AFPM.png",
];

export default function FinancePartners() {
  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8 lg:space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-finance uppercase">
            Partners
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
            Partners
          </h2>
          <p className="max-w-3xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
            Organizations we’ve worked with across finance and operational support engagements.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {partners.map((partner, index) => (
            <div
              key={partner}
              className="flex min-h-40 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
            >
              <Image
                src={partner}
                alt={`Finance partner ${index + 1}`}
                width={180}
                height={96}
                className="h-auto max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
