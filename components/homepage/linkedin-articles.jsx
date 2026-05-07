"use client";

import { Newspaper } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const linkedinCompanyPostsUrl =
  "https://www.linkedin.com/company/arksquareconstructionservices/posts/?feedView=all";

const linkedinPosts = [
  {
    id: 1,
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7457009008499949568",
    height: 965,
    label: "Latest post",
  },
  {
    id: 2,
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7455193898248732672",
    height: 965,
    label: "Recent post",
  },
  {
    id: 3,
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7454437733948764160",
    height: 1173,
    label: "Recent post",
  },
  {
    id: 4,
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7452625448187924480",
    height: 881,
    label: "Recent post",
  },
  {
    id: 5,
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7451900508811988992",
    height: 965,
    label: "Recent post",
  },
  {
    id: 6,
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7450184230220775424",
    height: 881,
    label: "Recent post",
  },
  {
    id: 7,
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7450877157502787584",
    height: 1005,
    label: "Recent post",
  },
  {
    id: 8,
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7447597702583967744",
    height: 1007,
    label: "Recent post",
  },
];

function LinkedInEmbed({ post }) {
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

      <div className="relative h-[34rem] bg-brand-surface sm:h-[38rem]">
        <iframe
          src={post.src}
          title={`${post.label} from LinkedIn ${post.id}`}
          width="504"
          height={post.height}
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>

      <a
        href={linkedinCompanyPostsUrl}
        aria-label="Open ARK Simplify LinkedIn posts"
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 z-10 cursor-pointer"
      />
    </div>
  );
}

export default function LinkedinArticles() {
  return (
    <section className="relative overflow-hidden border-t border-brand-secondary/10 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/18 to-transparent" />

      <div className="mx-auto max-w-7xl space-y-10">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)] lg:items-end">
          <div className="space-y-5">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/12 bg-brand-surface px-4 py-2 text-xs font-semibold tracking-[0.16em] text-brand-secondary uppercase">
                <FaLinkedinIn className="h-4 w-4 text-brand-primary" />
                LinkedIn Articles
              </span>
              <div className="h-px w-14 bg-brand-primary" />
            </div>

            <h2 className="max-w-3xl text-4xl leading-[0.98] font-semibold tracking-[-0.07em] text-brand-secondary lg:text-5xl">
              Latest thinking from ARK Simplify.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-brand-secondary/70 sm:text-lg">
              Perspectives from our team on operational support, delivery
              systems, and the habits that help growing businesses work with
              more clarity.
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
              Recent LinkedIn Posts
            </p>
            <div className="flex items-center gap-2">
              <CarouselPrevious aria-label="Previous LinkedIn posts" />
              <CarouselNext aria-label="Next LinkedIn posts" />
            </div>
          </div>

          <CarouselContent>
            {linkedinPosts.map((post) => (
              <CarouselItem key={post.id} className="md:basis-1/2 xl:basis-1/3">
                <LinkedInEmbed post={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
