import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, CalendarDays } from "lucide-react";

import { urlFor } from "@/sanity/lib/image";

const categoryLabels = {
  company: "Company",
  construction: "Construction",
  estimating: "Estimating",
  finance: "Finance",
  operations: "Operations",
};

function formatDate(date) {
  if (!date) {
    return null;
  }

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function getImageUrl(blog) {
  return blog.coverImage?.url ?? blog.imageUrl;
}

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return null;
      }

      return (
        <figure className="my-10 overflow-hidden rounded-lg border border-brand-secondary/10 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
          <Image
            src={urlFor(value).width(1200).height(760).fit("crop").url()}
            alt={value.alt ?? ""}
            width={1200}
            height={760}
            className="h-auto w-full object-cover"
          />
          {value.caption ? (
            <figcaption className="border-t border-brand-secondary/10 px-5 py-3 text-sm leading-6 text-brand-secondary/62">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="text-lg leading-9 text-brand-secondary/76">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="pt-6 text-3xl font-semibold tracking-[-0.04em] text-brand-secondary sm:text-4xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="pt-4 text-2xl font-semibold tracking-[-0.03em] text-brand-secondary">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-brand-primary pl-5 text-xl font-semibold leading-9 tracking-[-0.02em] text-brand-secondary">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 text-lg leading-8 text-brand-secondary/76">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-3 text-lg leading-8 text-brand-secondary/76">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="grid grid-cols-[0.5rem_minmax(0,1fr)] gap-3">
        <span className="mt-3 h-2 w-2 rounded-full bg-brand-primary" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => <li className="ml-5 list-decimal pl-1">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href ?? "#";
      const isExternal = /^https?:\/\//.test(href);

      if (isExternal || value?.openInNewTab) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-brand-primary underline decoration-brand-primary/30 underline-offset-4 transition-colors hover:text-brand-secondary"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className="font-semibold text-brand-primary underline decoration-brand-primary/30 underline-offset-4 transition-colors hover:text-brand-secondary"
        >
          {children}
        </Link>
      );
    },
  },
};

export default function BlogArticle({ blog }) {
  if (!blog) {
    return null;
  }

  const imageUrl = getImageUrl(blog);
  const category = categoryLabels[blog.category] ?? blog.category;
  const publishedAt = formatDate(blog.publishedAt);
  const updatedAt = formatDate(blog.updatedAt);

  return (
    <article className="bg-white">
      <section className="border-b border-brand-secondary/10 bg-brand-surface px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-7">
          <Link
            href="/blog"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-brand-secondary/12 bg-white px-4 py-2 text-sm font-semibold text-brand-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blogs
          </Link>

          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.12em] text-brand-secondary/52 uppercase">
              {category ? <span>{category}</span> : null}
              {publishedAt ? (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {publishedAt}
                </span>
              ) : null}
              {blog.readingTime ? <span>{blog.readingTime} min read</span> : null}
            </div>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.05em] text-brand-secondary lg:text-6xl">
              {blog.title}
            </h1>

            {blog.excerpt ? (
              <p className="max-w-3xl text-xl leading-9 text-brand-secondary/72">
                {blog.excerpt}
              </p>
            ) : null}

            <div className="flex flex-wrap items-center gap-3 border-t border-brand-secondary/10 pt-5 text-sm font-semibold text-brand-secondary/62">
              {blog.author ? <span>By {blog.author}</span> : null}
              {updatedAt ? <span>Updated {updatedAt}</span> : null}
            </div>
          </div>
        </div>
      </section>

      {imageUrl ? (
        <div className="bg-brand-surface px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
          <div className="relative mx-auto aspect-[16/9] max-w-6xl overflow-hidden rounded-lg bg-brand-secondary shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
            <Image
              src={imageUrl}
              alt={blog.coverImage?.alt ?? blog.title}
              fill
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      ) : null}

      {blog.body?.length ? (
        <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="prose-none mx-auto max-w-3xl space-y-7">
            <PortableText value={blog.body} components={portableTextComponents} />
          </div>
        </section>
      ) : null}
    </article>
  );
}
