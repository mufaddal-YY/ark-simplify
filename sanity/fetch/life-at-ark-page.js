import { fetchSanityDocument } from "./utils";

export const lifeAtArkPageQuery = `*[_id == "lifeAtArkPage"][0]{
  ...,
  intro{
    ...,
    "imageUrl": image.asset->url
  },
  gallery{
    ...,
    images[]{
      ...,
      "imageUrl": image.asset->url
    }
  }
}`;

export function getLifeAtArkPage({ revalidate = 60 } = {}) {
  return fetchSanityDocument({
    query: lifeAtArkPageQuery,
    revalidate,
    tag: "lifeAtArkPage",
    label: "life at Ark page",
  });
}

