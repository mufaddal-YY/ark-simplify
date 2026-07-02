import { fetchSanityDocument } from "./utils";

const blogCardFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  updatedAt,
  readingTime,
  isFeatured,
  coverImage{
    alt,
    "url": asset->url
  },
  noIndex
`;

export const blogsQuery = `*[
  _type == "blog" &&
  defined(slug.current) &&
  defined(publishedAt) &&
  publishedAt <= now()
] | order(isFeatured desc, publishedAt desc) {
  ${blogCardFields}
}`;

export const blogSlugsQuery = `*[
  _type == "blog" &&
  defined(slug.current) &&
  defined(publishedAt) &&
  publishedAt <= now()
].slug.current`;

export const blogBySlugQuery = `*[
  _type == "blog" &&
  slug.current == $slug &&
  defined(publishedAt) &&
  publishedAt <= now()
][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage{
    alt,
    "url": asset->url
  },
  body,
  metaTitle,
  metaDescription,
  focusKeyword,
  keywords,
  canonicalUrl,
  ogImage{
    alt,
    "url": asset->url
  },
  noIndex,
  noFollow,
  author,
  category,
  publishedAt,
  updatedAt,
  readingTime,
  isFeatured
}`;

export function getBlogs({ revalidate = 60 } = {}) {
  return fetchSanityDocument({
    query: blogsQuery,
    revalidate,
    tag: "blogs",
    label: "blogs",
  });
}

export function getBlogSlugs({ revalidate = 60 } = {}) {
  return fetchSanityDocument({
    query: blogSlugsQuery,
    revalidate,
    tag: "blogs",
    label: "blog slugs",
  });
}

export function getBlogBySlug(slug, { revalidate = 60 } = {}) {
  return fetchSanityDocument({
    query: blogBySlugQuery,
    params: { slug },
    revalidate,
    tag: "blogs",
    label: `blog "${slug}"`,
  });
}
