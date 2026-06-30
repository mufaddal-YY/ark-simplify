import Image from "next/image";

const galleryImages = [
  {
    src: "/WhatsApp Image 2026-04-29 at 8.09.28 PM.jpeg",
    alt: "ARK Simplify team members during a group outing",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/WhatsApp Image 2026-04-29 at 8.09.27 PM.jpeg",
    alt: "ARK Simplify team gathering outdoors",
    className: "",
  },
  {
    src: "/life3.png",
    alt: "Work culture at ARK Simplify",
    className: "",
  },
];

const defaultGallery = {
  eyebrow: "Inside ARK",
  title: "Work, people, and everyday momentum.",
  images: galleryImages.map((image, index) => ({
    _key: `gallery-${index + 1}`,
    imageUrl: image.src,
    alt: image.alt,
    featured: Boolean(image.className),
  })),
};

export default function LifeGallery({ data }) {
  const gallery = data ?? defaultGallery;
  const images = (gallery.images?.length
    ? gallery.images
    : defaultGallery.images
  )
    .filter((image) => image.imageUrl)
    .map((image, index) => ({
      id: image._key ?? image.alt ?? index,
      src: image.imageUrl,
      alt: image.alt ?? `Life at ARK gallery image ${index + 1}`,
      className: image.featured ? "lg:col-span-2 lg:row-span-2" : "",
    }));

  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8 lg:space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
            {gallery.eyebrow ?? defaultGallery.eyebrow}
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
            {gallery.title ?? defaultGallery.title}
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-[minmax(14rem,1fr)_minmax(14rem,1fr)]">
          {images.map((image) => (
            <div
              key={image.id}
              className={`overflow-hidden rounded-lg border border-brand-secondary/10 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.05)] ${image.className}`}>
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
