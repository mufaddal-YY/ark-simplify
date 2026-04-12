import Image from "next/image";
import Link from "next/link";

export default function PageBanner({
  eyebrow = "Ark Simplify Construction",
  title = "Ark Simplify Construction",
  titleAccent = "Construction",
  titleAccentClass = "text-brand-construction",
  compact = false,
}) {
  const titleParts = titleAccent ? title.split(titleAccent) : [title];

  return (
    <section
      className={`relative overflow-hidden bg-[#151827] px-4 sm:px-6 lg:px-8 ${
        compact
          ? "pt-28 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-18"
          : "pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24"
      }`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(54,59,79,0.72),transparent_34%),linear-gradient(135deg,rgba(54,59,79,0.62),rgba(10,12,20,0.94)_58%)]" />
      <div className="pointer-events-none absolute right-[-12rem] top-1/2 hidden w-[32rem] -translate-y-1/2 lg:block xl:right-[-18rem] xl:w-[38rem]">
        <Image
          src="/heroLogo2.svg"
          alt=""
          width={620}
          height={620}
          className="h-auto w-full opacity-16"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div
          className={`grid ${
            compact
              ? "min-h-[46vh] items-center"
              : "gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16"
          }`}>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/18 bg-transparent px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase">
              <Link
                href="/"
                className="text-white/62 transition-colors duration-300 hover:text-white">
                Home
              </Link>
              <span className="text-white/34">/</span>
              <span className="text-white">{eyebrow}</span>
            </div>

            <h1 className="max-w-xl text-5xl leading-[1.1] font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              {titleParts[0]}
              {titleAccent ? (
                <span className={titleAccentClass}>{titleAccent}</span>
              ) : null}
              {titleParts.slice(1).join(titleAccent)}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
