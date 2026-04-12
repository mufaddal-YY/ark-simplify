import Image from "next/image";

const vendors = Array.from({ length: 10 }, (_, index) => index + 1);

export default function Vendors() {
  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8 lg:space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
            Vendors
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-brand-secondary sm:text-5xl">
            Vendors
          </h2>
          <p className="max-w-3xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
            Trusted American vendors whose products and specifications we
            regularly work with during estimation and project coordination.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {vendors.map((vendor) => (
            <div
              key={vendor}
              className="flex min-h-28 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-6 text-center shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
            >
              <Image
                src="/logo_main.png"
                alt="ARK logo"
                width={118}
                height={28}
                className="h-auto w-[7.4rem]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
