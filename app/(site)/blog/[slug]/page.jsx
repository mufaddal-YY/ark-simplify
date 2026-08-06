import { notFound } from "next/navigation";

import { BlogArticle } from "@/components/blog";
import { getBlogBySlug, getBlogSlugs } from "@/sanity/fetch";
import {canonicalUrl as getCanonicalUrl, siteUrl} from "@/lib/site-url";

const siteName = "ARK Simplify";

export const revalidate = 60;

function serializeStructuredData(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs({ revalidate });

  return (slugs ?? []).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug, { revalidate });

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  const title = (blog.metaTitle ?? blog.title).trim();
  const description = (blog.metaDescription ?? blog.excerpt).trim();
  const canonicalUrl = getCanonicalUrl(
    blog.canonicalUrl ?? `/blog/${slug}`,
  );
  const imageUrl = blog.ogImage?.url ?? blog.coverImage?.url ?? "/logo_main.png";
  const imageAlt = blog.ogImage?.alt ?? blog.coverImage?.alt ?? blog.title;

  return {
    title,
    description,
    keywords: [
      blog.focusKeyword,
      ...(blog.keywords ?? []),
    ].filter(Boolean),
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !blog.noIndex,
      follow: !blog.noFollow,
      googleBot: {
        index: !blog.noIndex,
        follow: !blog.noFollow,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName,
      type: "article",
      publishedTime: blog.publishedAt,
      modifiedTime: blog.lastModified,
      authors: blog.author ? [blog.author] : undefined,
      section: blog.category,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug, { revalidate });

  if (!blog) {
    notFound();
  }

  const canonicalUrl = getCanonicalUrl(
    blog.canonicalUrl ?? `/blog/${slug}`,
  );
  const description = blog.metaDescription ?? blog.excerpt;
  const imageUrl = new URL(
    blog.ogImage?.url ?? blog.coverImage?.url ?? "/logo_main.png",
    siteUrl,
  ).toString();
  const keywords = [blog.focusKeyword, ...(blog.keywords ?? [])].filter(Boolean);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        headline: blog.title,
        description,
        image: [imageUrl],
        datePublished: blog.publishedAt,
        dateModified: blog.lastModified,
        author: {
          "@type": blog.author === siteName ? "Organization" : "Person",
          name: blog.author || siteName,
        },
        publisher: {
          "@type": "Organization",
          name: siteName,
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: getCanonicalUrl("/logo_main.png"),
          },
        },
        articleSection: blog.category,
        keywords: keywords.join(", "),
        isAccessibleForFree: true,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: getCanonicalUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: getCanonicalUrl("/blog"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: blog.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(structuredData),
        }}
      />
      <main className="flex-1">
        <BlogArticle blog={blog} />
      </main>
    </>
  );
}
