import Image from "next/image";

const galleryImages = [
  {
    src: "/life1.png",
    alt: "Team moment at ARK Simplify",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/life2.png",
    alt: "Collaboration at ARK Simplify",
    className: "",
  },
  {
    src: "/life3.png",
    alt: "Work culture at ARK Simplify",
    className: "",
  },
  {
    src: "/life_video.png",
    alt: "Life at ARK Simplify",
    className: "lg:col-span-2",
  },
];

export default function LifeGallery() {
  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8 lg:space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
            Inside ARK
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
            Work, people, and everyday momentum.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-[minmax(14rem,1fr)_minmax(14rem,1fr)]">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className={`overflow-hidden rounded-lg border border-brand-secondary/10 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.05)] ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
