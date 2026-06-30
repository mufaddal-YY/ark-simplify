import { client } from "@/sanity/lib/client";

export async function fetchSanityDocument({
  query,
  params = {},
  revalidate = 60,
  tag,
  label = "Sanity document",
}) {
  try {
    return await client.fetch(query, params, {
      next: {
        revalidate,
        tags: tag ? [tag] : undefined,
      },
    });
  } catch (error) {
    console.error(`Failed to fetch ${label} from Sanity`, error);
    return null;
  }
}

