import { fetchSanityDocument } from "./utils";

export const linkedinArticlesQuery = `*[_id == "linkedinArticles"][0]{...}`;

export function getLinkedinArticles({ revalidate = 60 } = {}) {
  return fetchSanityDocument({
    query: linkedinArticlesQuery,
    revalidate,
    tag: "linkedinArticles",
    label: "LinkedIn articles",
  });
}

