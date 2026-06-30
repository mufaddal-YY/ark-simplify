import PageBanner from "@/components/common/pageBanner";

const defaultBanner = {
  eyebrow: "Life at ARK",
  title: "Life at ARK",
  titleAccent: "ARK",
};

export default function LifeBanner({ data }) {
  const banner = data ?? defaultBanner;

  return (
    <PageBanner
      eyebrow={banner.eyebrow ?? defaultBanner.eyebrow}
      title={banner.title ?? defaultBanner.title}
      titleAccent={banner.titleAccent ?? defaultBanner.titleAccent}
      titleAccentClass="text-brand-primary"
      compact
    />
  );
}
