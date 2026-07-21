import {fetchSanityDocument} from "./utils";

export const constructionLandingQuery = `*[_id == "constructionLandingPage"][0]{
  ...
}`;

export function getConstructionLandingPage({revalidate = 60} = {}) {
  return fetchSanityDocument({
    query: constructionLandingQuery,
    revalidate,
    tag: "constructionLandingPage",
    label: "construction landing page",
  });
}
