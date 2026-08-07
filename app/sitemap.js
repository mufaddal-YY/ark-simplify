import { getBlogs } from "@/sanity/fetch";
import {canonicalUrl} from "@/lib/site-url";

const routes = [
  "/",
  "/about-us",
  "/construction",
  "/construction-estimating",
  "/finance-experts",
  "/finance",
  "/proestimate",
  "/life-at-ark",
  "/contact-us",
  "/blog",
  "/privacy-policy",
];

export default async function sitemap() {
  const lastModified = new Date();
  const blogs = await getBlogs({ revalidate: 60 });

  const staticRoutes = routes.map((route) => ({
    url: canonicalUrl(route),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const blogRoutes = (blogs ?? [])
    .filter((blog) => !blog.noIndex && blog.slug)
    .map((blog) => ({
      url: canonicalUrl(`/blog/${blog.slug}`),
      lastModified: new Date(blog.lastModified),
      changeFrequency: "monthly",
      priority: blog.isFeatured ? 0.8 : 0.7,
    }));

  return [...staticRoutes, ...blogRoutes];
}
