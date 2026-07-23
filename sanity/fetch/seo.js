import { fetchSanityDocument } from "./utils";
import {canonicalUrl, siteUrl} from "@/lib/site-url";

export const seoSettingsQuery = `*[_id == "seoSettings"][0]{
  root,
  pages,
  home,
  about,
  construction,
  finance,
  proestimate,
  lifeAtArk,
  contact
}`;

export const defaultSeo = {
  root: {
    metaTitle: "ARK Simplify",
    metaDescription:
      "ARK Simplify delivers construction, finance, and estimation support with streamlined workflows, practical execution, and dependable delivery.",
    keywords: [
      "ARK Simplify",
      "construction",
      "finance",
      "estimation",
      "proestimate",
      "business support",
      "outsourcing",
    ],
  },
  pages: {
    home: {
      metaTitle: "ARK Simplify",
      metaDescription:
        "ARK Simplify delivers construction, finance, and estimation support with streamlined workflows, practical execution, and dependable delivery.",
      keywords: ["ARK Simplify", "construction", "finance", "proestimate"],
    },
    about: {
      metaTitle: "About Us",
      metaDescription:
        "Learn about Ark Simplify and the values behind how we support clients across construction, finance, and operations.",
      keywords: ["ARK Simplify about", "construction support", "finance support"],
    },
    construction: {
      metaTitle: "Construction",
      metaDescription:
        "Construction support across estimating, detailing, and project management workflows for manufacturers, general contractors, and subcontractors.",
      keywords: ["construction estimating", "detailing services", "project management support"],
    },
    finance: {
      metaTitle: "Finance",
      metaDescription:
        "Finance and operational support across inventory management, purchase order processing, bookkeeping, and AP/AR workflows for growing organizations.",
      keywords: ["finance support", "bookkeeping", "AP AR", "inventory management"],
    },
    proestimate: {
      metaTitle: "ProEstimate",
      metaDescription:
        "Professional ProEstimates designed to eliminate guesswork, control costs, and give projects a competitive edge across key construction divisions.",
      keywords: ["ProEstimate", "construction divisions", "construction estimates"],
    },
    lifeAtArk: {
      metaTitle: "Life at ARK",
      metaDescription:
        "A closer look at life at Ark Simplify, how our teams work, and why this page also serves as a careers page for the company.",
      keywords: ["Life at ARK", "ARK careers", "job openings"],
    },
    contact: {
      metaTitle: "Contact Us",
      metaDescription:
        "Get in touch with Ark Simplify for construction support, finance operations, ProEstimate services, and general business enquiries.",
      keywords: ["contact ARK Simplify", "construction support enquiry", "finance support enquiry"],
    },
  },
};

const siteName = "ARK Simplify";

function normalizeSeoText(value, fallback) {
  const normalizedValue = typeof value === "string" ? value.trim() : "";

  return normalizedValue || fallback;
}

export async function getSeoSettings({ revalidate = 1 } = {}) {
  return fetchSanityDocument({
    query: seoSettingsQuery,
    revalidate,
    tag: "seoSettings",
    label: "SEO settings",
  });
}

export async function getSeoGroup(pageKey, { revalidate = 1 } = {}) {
  const settings = await getSeoSettings({ revalidate });

  if (pageKey === "root") {
    return settings?.root ?? defaultSeo.root;
  }

  return (
    settings?.[pageKey] ??
    settings?.pages?.[pageKey] ??
    defaultSeo.pages[pageKey] ??
    defaultSeo.root
  );
}

export function buildSeoMetadata(seo, { path = "/" } = {}) {
  const title = normalizeSeoText(seo?.metaTitle, defaultSeo.root.metaTitle);
  const description = normalizeSeoText(
    seo?.metaDescription,
    defaultSeo.root.metaDescription,
  );
  const keywords = (seo?.keywords?.length
    ? seo.keywords
    : defaultSeo.root.keywords
  )
    .map((keyword) => normalizeSeoText(keyword, ""))
    .filter(Boolean);
  const url = canonicalUrl(path);

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteUrl),
    applicationName: siteName,
    category: "business",
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: "/logo_main.png",
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo_main.png"],
    },
  };
}

export async function generateSeoMetadata(pageKey, options = {}) {
  const seo = await getSeoGroup(pageKey, {
    ...options,
    revalidate: 1,
  });

  return buildSeoMetadata(seo, options);
}
