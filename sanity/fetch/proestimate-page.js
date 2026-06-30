import { fetchSanityDocument } from "./utils";

export const proestimatePageQuery = `*[_id == "proestimatePage"][0]{
  ...,
  divisionsSection{
    ...,
    divisions[]{
      ...,
      "imageUrl": image.asset->url
    }
  }
}`;

export function getProestimatePage({ revalidate = 60 } = {}) {
  return fetchSanityDocument({
    query: proestimatePageQuery,
    revalidate,
    tag: "proestimatePage",
    label: "ProEstimate page",
  });
}

