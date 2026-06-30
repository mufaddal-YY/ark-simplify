import PageBanner from "@/components/common/pageBanner";

const defaultBanner = {
  eyebrow: "About Us",
  title: "About Us",
};

export default function AboutBanner({ data }) {
  const banner = data ?? defaultBanner;

  return (
    <PageBanner
      eyebrow={banner.eyebrow ?? defaultBanner.eyebrow}
      title={banner.title ?? defaultBanner.title}
      titleAccent=""
      titleAccentClass=""
      compact
    />
  );
}
