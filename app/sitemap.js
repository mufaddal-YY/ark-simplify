const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arksimplify.com";

const routes = [
  "/",
  "/about-us",
  "/construction",
  "/finance",
  "/proestimate",
  "/life-at-ark",
  "/contact-us",
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
