import { fetchSanityDocument } from "./utils";

export const financePageQuery = `*[_id == "financePage"][0]{
  ...,
  services{
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
      "logoUrl": logo.asset->url
    }
  }
}`;

export function getFinancePage({ revalidate = 60 } = {}) {
  return fetchSanityDocument({
    query: financePageQuery,
    revalidate,
    tag: "financePage",
    label: "finance page",
  });
}

