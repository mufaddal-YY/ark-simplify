import { fetchSanityDocument } from "./utils";

export const constructionPageQuery = `*[_id == "constructionPage"][0]{
  ...,
  estimating{
    ...,
    tabs[]{
      ...,
      "imageUrl": image.asset->url
    }
  },
  detailing{
    ...,
    "imageUrl": image.asset->url
  },
  projectSupport{
    ...,
    "imageUrl": image.asset->url
  },
  audiences{
    ...,
    audiences[]{
      ...,
      "imageUrl": image.asset->url
    }
  },
  caseStudies{
    ...,
    items[]{
      ...,
      "imageUrl": image.asset->url
    }
  },
  partners{
    ...,
    partners[]{
      ...,
      "logoUrl": logo.asset->url
    }
  },
  softwareTools{
    ...,
    tools[]{
      ...,
      "imageUrl": image.asset->url
    }
  }
}`;

export function getConstructionPage({ revalidate = 60 } = {}) {
  return fetchSanityDocument({
    query: constructionPageQuery,
    revalidate,
    tag: "constructionPage",
    label: "construction page",
  });
}

