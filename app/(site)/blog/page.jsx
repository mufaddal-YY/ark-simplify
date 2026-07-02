import { BlogGrid, BlogPageBanner } from "@/components/blog";
import { buildSeoMetadata, getBlogs } from "@/sanity/fetch";

export const revalidate = 60;

export function generateMetadata() {
  return buildSeoMetadata(
    {
      metaTitle: "Blog",
      metaDescription:
        "Read ARK Simplify insights on construction support, finance operations, estimating, and practical systems for growing teams.",
      keywords: [
        "ARK Simplify blog",
        "construction support",
        "finance operations",
        "estimating",
        "business operations",
      ],
    },
    { path: "/blog" },
  );
}

export default async function BlogPage() {
  const blogs = await getBlogs({ revalidate });

  return (
    <main className="flex-1">
      <BlogPageBanner />
      <BlogGrid blogs={blogs ?? []} />
    </main>
  );
}
