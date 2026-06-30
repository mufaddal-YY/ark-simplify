import { fetchSanityDocument } from "./utils";

export const homepageQuery = `*[_id == "homepage"][0]{
  _id,
  _type,
  _updatedAt,
  heroBanner{
    badge,
    titleStart,
    highlightedTitle,
    titleEnd,
    description,
    primaryCta,
    secondaryCta,
    slides[]{
      _key,
      title,
      description
    }
  },
  industriesWeServe{
    eyebrow,
    title,
    description,
    industries[]{
      _key,
      name,
      accent,
      href,
      logoAlt,
      imageAlt,
      blurb,
      highlights,
      "logoUrl": logo.asset->url,
      "imageUrl": image.asset->url
    }
  },
  statsSection{
    eyebrow,
    title,
    description,
    resultsLabel,
    stats[]{
      _key,
      value,
      prefix,
      suffix,
      label,
      microLabel
    }
  },
  clienteleSection{
    eyebrow,
    titleStart,
    highlightedTitle,
    description,
    supportingText,
    networkLabel,
    logos[]{
      _key,
      name,
      alt,
      url,
      "logoUrl": logo.asset->url
    }
  },
  ctaSection{
    eyebrow,
    title,
    description,
    ctaLabel,
    ctaHref,
    items
  }
}`;

export async function getHomepage({ revalidate = 60 } = {}) {
  return fetchSanityDocument({
    query: homepageQuery,
    revalidate,
    tag: "homepage",
    label: "homepage",
  });
}
