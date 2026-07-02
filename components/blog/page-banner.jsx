import PageBanner from "@/components/common/pageBanner";

const defaultBanner = {
  eyebrow: "Blogs",
  title: "ARK Simplify Blog",
  titleAccent: "Blog",
  description:
    "Practical notes on construction support, finance operations, estimating, and the systems that help growing teams work with more clarity.",
};

export default function BlogPageBanner({ data }) {
  const banner = data ?? defaultBanner;

  return (
    <PageBanner
      eyebrow={banner.eyebrow ?? defaultBanner.eyebrow}
      title={banner.title ?? defaultBanner.title}
      titleAccent={banner.titleAccent ?? defaultBanner.titleAccent}
      titleAccentClass="text-brand-primary"
      description={banner.description ?? defaultBanner.description}
      compact
    />
  );
}
