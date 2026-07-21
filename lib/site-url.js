const defaultSiteUrl = "https://www.arksimplify.com";

function resolveSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  try {
    const url = new URL(configuredUrl || defaultSiteUrl);

    if (url.hostname === "arksimplify.com") {
      url.hostname = "www.arksimplify.com";
    }

    return url.origin;
  } catch {
    return defaultSiteUrl;
  }
}

export const siteUrl = resolveSiteUrl();

export function canonicalUrl(pathOrUrl = "/") {
  const url = new URL(pathOrUrl, siteUrl);

  if (url.hostname === "arksimplify.com") {
    url.hostname = "www.arksimplify.com";
  }

  return url.toString();
}
