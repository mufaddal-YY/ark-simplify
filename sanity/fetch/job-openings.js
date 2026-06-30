import { fetchSanityDocument } from "./utils";

export const jobOpeningsQuery = `*[_id == "jobOpenings"][0]{...}`;

export function getJobOpenings({ revalidate = 60 } = {}) {
  return fetchSanityDocument({
    query: jobOpeningsQuery,
    revalidate,
    tag: "jobOpenings",
    label: "job openings",
  });
}

