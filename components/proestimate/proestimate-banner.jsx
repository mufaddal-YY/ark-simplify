import PageBanner from "@/components/common/pageBanner";

const defaultBanner = {
  eyebrow: "ProEstimate",
  title: "ProEstimate",
  titleAccent: "ProEstimate",
};

export default function ProEstimateBanner({ data }) {
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
