import PageBanner from "@/components/common/pageBanner";

const defaultBanner = {
  eyebrow: "Ark Simplify Construction",
  title: "Ark Simplify Construction",
  titleAccent: "Construction",
};

export default function ConstructionBanner({ data }) {
  const banner = data ?? defaultBanner;

  return (
    <PageBanner
      eyebrow={banner.eyebrow ?? defaultBanner.eyebrow}
      title={banner.title ?? defaultBanner.title}
      titleAccent={banner.titleAccent ?? defaultBanner.titleAccent}
      titleAccentClass="text-brand-construction"
      description={banner.description}
      compact
    />
  );
}
