import PageBanner from "@/components/common/pageBanner";

const defaultBanner = {
  bannerEyebrow: "Contact Us",
  bannerTitle: "Contact Us",
};

export default function ContactBanner({ data }) {
  const banner = data ?? defaultBanner;

  return (
    <PageBanner
      eyebrow={banner.bannerEyebrow ?? defaultBanner.bannerEyebrow}
      title={banner.bannerTitle ?? defaultBanner.bannerTitle}
      titleAccent=""
      compact
    />
  );
}
