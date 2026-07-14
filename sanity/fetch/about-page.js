import { fetchSanityDocument } from "./utils";

export const aboutPageQuery = `*[_id == "aboutPage"][0]{
  ...,
  whoWeAre{
    ...,
    "imageUrl": image.asset->url
  },
  leadership{
    ...,
    members[]{
      ...,
      "imageUrl": image.asset->url
    }
  },
  projectManagementTeam{
    ...,
    members[]{
      ...,
      "imageUrl": image.asset->url
    }
  }
}`;

export function getAboutPage({ revalidate = 60 } = {}) {
  return fetchSanityDocument({
    query: aboutPageQuery,
    revalidate,
    tag: "aboutPage",
    label: "about page",
  });
}
