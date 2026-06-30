import { fetchSanityDocument } from "./utils";

export const testimonialsQuery = `*[_id == "testimonials"][0]{...}`;

export function getTestimonials({ revalidate = 60 } = {}) {
  return fetchSanityDocument({
    query: testimonialsQuery,
    revalidate,
    tag: "testimonials",
    label: "testimonials",
  });
}

