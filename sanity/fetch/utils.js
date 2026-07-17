import { client } from "@/sanity/lib/client";

export async function fetchSanityDocument({
  query,
  params = {},
  revalidate = 60,
  tag,
  label = "Sanity document",
}) {
  try {
    const fetchOptions =
      revalidate === 0
        ? {
            cache: "no-store",
            next: {
              tags: tag ? [tag] : undefined,
            },
          }
        : {
            next: {
              revalidate,
              tags: tag ? [tag] : undefined,
            },
          };

    return await client.fetch(query, params, fetchOptions);
  } catch (error) {
    console.error(`Failed to fetch ${label} from Sanity`, error);
    return null;
  }
}
