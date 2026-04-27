import Image from "next/image";

const partnerCards = [
  "/construction/partners/Screenshot 2026-04-27 at 4.11.33%E2%80%AFPM.png",
  "/construction/partners/Screenshot 2026-04-27 at 4.11.39%E2%80%AFPM.png",
  "/construction/partners/Screenshot 2026-04-27 at 4.11.46%E2%80%AFPM.png",
  "/construction/partners/Screenshot 2026-04-27 at 4.11.51%E2%80%AFPM.png",
];

export default function PartnersClients() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8 lg:space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
            Partners & Clients
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
            Partners and clients
          </h2>
          <p className="max-w-3xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
            Ongoing relationships across project teams, supply-side partners,
            and construction operations that rely on structured support.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {partnerCards.map((card, index) => (
            <article
              key={card}
              className="flex min-h-44 items-center justify-center rounded-lg border border-slate-200 bg-[linear-gradient(180deg,#ffffff,rgba(246,247,250,0.92))] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:p-7"
            >
              <Image
                src={card}
                alt={`Construction partner ${index + 1}`}
                width={180}
                height={96}
                className="h-auto max-h-20 w-auto object-contain"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
