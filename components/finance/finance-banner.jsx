import PageBanner from "@/components/common/pageBanner";

const defaultBanner = {
  eyebrow: "Ark Simplify Finance",
  title: "Ark Simplify Finance",
  titleAccent: "Finance",
  description:
    "Where your data stays protected and your financial decisions become clearer.",
};

export default function FinanceBanner({ data }) {
  const banner = data ?? defaultBanner;

  return (
    <PageBanner
      eyebrow={banner.eyebrow ?? defaultBanner.eyebrow}
      title={banner.title ?? defaultBanner.title}
      titleAccent={banner.titleAccent ?? defaultBanner.titleAccent}
      titleAccentClass="text-brand-finance"
      description={banner.description ?? defaultBanner.description}
      compact
    />
  );
}
