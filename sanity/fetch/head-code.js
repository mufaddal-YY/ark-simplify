import { fetchSanityDocument } from "./utils";

export const headCodeSettingsQuery = `*[_id == "headCodeSettings"][0]{
  enabled,
  codeBlocks[]{
    _key,
    title,
    enabled,
    scriptStrategy,
    code
  }
}`;

export async function getHeadCodeSettings({ revalidate = 60 } = {}) {
  return fetchSanityDocument({
    query: headCodeSettingsQuery,
    revalidate,
    tag: "headCodeSettings",
    label: "head code settings",
  });
}
