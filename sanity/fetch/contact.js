import { fetchSanityDocument } from "./utils";

export const contactQuery = `*[_id == "contact"][0]{...}`;

export function getContact({ revalidate = 60 } = {}) {
  return fetchSanityDocument({
    query: contactQuery,
    revalidate,
    tag: "contact",
    label: "contact",
  });
}

