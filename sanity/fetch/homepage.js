import { client } from "@/sanity/lib/client";

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
  }
}`;

export async function getHomepage({ revalidate = 60 } = {}) {
  try {
    return await client.fetch(
      homepageQuery,
      {},
      {
        next: {
          revalidate,
          tags: ["homepage"],
        },
      },
    );
  } catch (error) {
    console.error("Failed to fetch homepage from Sanity", error);
    return null;
  }
}
