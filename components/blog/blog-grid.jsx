import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

const categoryLabels = {
  company: "Company",
  construction: "Construction",
  estimating: "Estimating",
  finance: "Finance",
  operations: "Operations",
};

const defaultSection = {
  eyebrow: "Latest articles",
  title: "Ideas built for teams that carry the work.",
  description:
    "Explore guidance from ARK Simplify on delivery systems, finance workflows, estimation support, and operational clarity.",
  emptyTitle: "No blog posts yet",
  emptyDescription: "Published blog posts will appear here once they are available.",
};

function formatDate(date) {
  if (!date) {
    return null;
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function getSlug(blog) {
  return blog.slug ?? "";
}

function getImageUrl(blog) {
  return blog.coverImage?.url ?? blog.imageUrl;
}

function normalizeBlog(blog, index) {
  const slug = getSlug(blog);

  return {
    id: blog._id ?? slug ?? index,
    title: blog.title,
    excerpt: blog.excerpt ?? blog.metaDescription,
    href: slug ? `/blog/${slug}` : "#",
    category: categoryLabels[blog.category] ?? blog.category,
    publishedAt: formatDate(blog.publishedAt),
    readingTime: blog.readingTime,
    imageUrl: getImageUrl(blog),
    imageAlt: blog.coverImage?.alt ?? blog.title,
  };
}

export default function BlogGrid({ data, blogs }) {
  const section = data ?? defaultSection;
  const normalizedBlogs = (blogs ?? []).map(normalizeBlog);

  return (
    <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,0.28fr)] lg:items-end">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
              {section.eyebrow ?? defaultSection.eyebrow}
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
              {section.title ?? defaultSection.title}
            </h2>
            <p className="max-w-2xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
              {section.description ?? defaultSection.description}
            </p>
          </div>
        </div>

        {normalizedBlogs.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {normalizedBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group overflow-hidden rounded-lg border border-brand-secondary/10 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/24"
              >
                {blog.imageUrl ? (
                  <Link
                    href={blog.href}
                    className="relative block aspect-[16/10] overflow-hidden bg-brand-secondary"
                  >
                    <Image
                      src={blog.imageUrl}
                      alt={blog.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                ) : null}

                <div className="space-y-5 p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.12em] text-brand-secondary/52 uppercase">
                    {blog.category ? <span>{blog.category}</span> : null}
                    {blog.publishedAt ? (
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {blog.publishedAt}
                      </span>
                    ) : null}
                    {blog.readingTime ? <span>{blog.readingTime} min read</span> : null}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-secondary">
                      <Link href={blog.href} className="transition-colors hover:text-brand-primary">
                        {blog.title}
                      </Link>
                    </h3>
                    {blog.excerpt ? (
                      <p className="line-clamp-3 text-base leading-7 text-brand-secondary/72">
                        {blog.excerpt}
                      </p>
                    ) : null}
                  </div>

                  <Link
                    href={blog.href}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-brand-secondary/12 px-4 py-2 text-sm font-semibold text-brand-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary"
                  >
                    Read article
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-brand-secondary/10 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.05)] sm:p-8">
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-secondary">
              {section.emptyTitle ?? defaultSection.emptyTitle}
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-8 text-brand-secondary/72">
              {section.emptyDescription ?? defaultSection.emptyDescription}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
