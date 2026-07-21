import {fetchSanityDocument} from "./utils";

export const financeLandingQuery = `*[_id == "financeLandingPage"][0]{...}`;

export function getFinanceLandingPage({revalidate = 60} = {}) {
  return fetchSanityDocument({
    query: financeLandingQuery,
    revalidate,
    tag: "financeLandingPage",
    label: "finance landing page",
  });
}
