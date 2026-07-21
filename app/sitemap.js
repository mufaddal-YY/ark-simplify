import { getBlogs } from "@/sanity/fetch";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arksimplify.com";

const routes = [
  "/",
  "/about-us",
  "/construction",
  "/ark-simplify-construction-landing",
  "/finance",
  "/proestimate",
  "/life-at-ark",
  "/contact-us",
  "/blog",
];

export default async function sitemap() {
  const lastModified = new Date();
  const blogs = await getBlogs({ revalidate: 60 });

  const staticRoutes = routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const blogRoutes = (blogs ?? [])
    .filter((blog) => !blog.noIndex && blog.slug)
    .map((blog) => ({
      url: new URL(`/blog/${blog.slug}`, siteUrl).toString(),
      lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(blog.publishedAt),
      changeFrequency: "monthly",
      priority: blog.isFeatured ? 0.8 : 0.7,
    }));

  return [...staticRoutes, ...blogRoutes];
}
