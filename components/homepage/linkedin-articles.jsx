"use client";

import { FaLinkedinIn } from "react-icons/fa6";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const withCollapsedEmbed = (src) => `${src}?collapsed=1`;

const defaultLinkedinSection = {
  eyebrow: "LinkedIn Articles",
  title: "Latest thinking from ARK Simplify.",
  description:
    "Perspectives from our team on operational support, delivery systems, and the habits that help growing businesses work with more clarity.",
  postsLabel: "Recent LinkedIn Posts",
  companyPostsUrl:
    "https://www.linkedin.com/company/arksquareconstructionservices/posts/?feedView=all",
  articles: [
    {
      _key: "7457009008499949568",
      embedUrl:
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7457009008499949568",
      height: 620,
      label: "Latest post",
    },
    {
      _key: "7455193898248732672",
      embedUrl:
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7455193898248732672",
      height: 620,
      label: "Recent post",
    },
    {
      _key: "7454437733948764160",
      embedUrl:
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7454437733948764160",
      height: 620,
      label: "Recent post",
    },
  ],
};

function LinkedInEmbed({ companyPostsUrl, post }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-brand-secondary/10 bg-white shadow-[0_18px_48px_rgba(54,59,79,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/24">
      <div className="flex items-center justify-between border-b border-brand-secondary/10 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-surface text-brand-primary">
            <FaLinkedinIn className="h-4 w-4" />
          </span>
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-secondary/54 uppercase">
            {post.label}
          </p>
        </div>
      </div>

      <div className="relative h-[28rem] bg-brand-surface sm:h-[32rem]">
        <iframe
          src={withCollapsedEmbed(post.src)}
          loading="lazy"
          title={`${post.label} from LinkedIn ${post.id}`}
          width="504"
          height={post.height}
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>

      <a
        href={companyPostsUrl}
        aria-label="Open ARK Simplify LinkedIn posts"
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 z-10 cursor-pointer"
      />
    </div>
  );
}

export default function LinkedinArticles({ data }) {
  const section = data ?? defaultLinkedinSection;
  const linkedinPosts = (
    section.articles?.length ? section.articles : defaultLinkedinSection.articles
  ).map((post, index) => ({
    id: post._key ?? index,
    src: post.embedUrl,
    height: post.height ?? 620,
    label: post.label ?? "Recent post",
  }));
  const companyPostsUrl =
    section.companyPostsUrl ?? defaultLinkedinSection.companyPostsUrl;

  return (
    <section className="relative overflow-hidden border-t border-brand-secondary/10 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/18 to-transparent" />

      <div className="mx-auto max-w-7xl space-y-10">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)] lg:items-end">
          <div className="space-y-5">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/12 bg-brand-surface px-4 py-2 text-xs font-semibold tracking-[0.16em] text-brand-secondary uppercase">
                <FaLinkedinIn className="h-4 w-4 text-brand-primary" />
                {section.eyebrow ?? defaultLinkedinSection.eyebrow}
              </span>
              <div className="h-px w-14 bg-brand-primary" />
            </div>

            <h2 className="max-w-3xl text-4xl leading-[0.98] font-semibold tracking-[-0.07em] text-brand-secondary lg:text-5xl">
              {section.title ?? defaultLinkedinSection.title}
            </h2>
            <p className="max-w-2xl text-base leading-8 text-brand-secondary/70 sm:text-lg">
              {section.description ?? defaultLinkedinSection.description}
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-secondary/56 uppercase">
              {section.postsLabel ?? defaultLinkedinSection.postsLabel}
            </p>
            <div className="flex items-center gap-2">
              <CarouselPrevious aria-label="Previous LinkedIn posts" />
              <CarouselNext aria-label="Next LinkedIn posts" />
            </div>
          </div>

          <CarouselContent>
            {linkedinPosts.map((post) => (
              <CarouselItem key={post.id} className="md:basis-1/2 xl:basis-1/3">
                <LinkedInEmbed companyPostsUrl={companyPostsUrl} post={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
