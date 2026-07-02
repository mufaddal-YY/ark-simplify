import { notFound } from "next/navigation";

import { BlogArticle } from "@/components/blog";
import { getBlogBySlug, getBlogSlugs } from "@/sanity/fetch";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arksimplify.com";
const siteName = "ARK Simplify";

export const revalidate = 60;

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

  const title = blog.metaTitle ?? blog.title;
  const description = blog.metaDescription ?? blog.excerpt;
  const canonicalUrl = blog.canonicalUrl ?? new URL(`/blog/${slug}`, siteUrl).toString();
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
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName,
      type: "article",
      publishedTime: blog.publishedAt,
      modifiedTime: blog.updatedAt,
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

  return (
    <main className="flex-1">
      <BlogArticle blog={blog} />
    </main>
  );
}
