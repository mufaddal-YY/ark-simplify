"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  { label: "Construction", href: "/construction" },
  { label: "Finance", href: "/finance" },
  { label: "ProEstimate", href: "/proestimate" },
  { label: "About Us", href: "/about-us" },
  { label: "Life at ARK", href: "/life-at-ark" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact-us" },
];

function isActivePath(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled((current) => {
        if (!current && window.scrollY > 48) {
          return true;
        }

        if (current && window.scrollY < 12) {
          return false;
        }

        return current;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-8xl">
        {/* <div className="pointer-events-none absolute inset-x-16 -top-3 h-20 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,73,0,0.22),rgba(255,73,0,0)_60%)] blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-4 h-16 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(54,59,79,0.18),rgba(54,59,79,0)_68%)] blur-3xl" /> */}

        <div
          className={`relative flex w-full flex-col overflow-hidden rounded-lg border border-white/60 bg-white/80 ring-1 ring-white/40 backdrop-blur-2xl ${
            isScrolled
              ? "shadow-[0_16px_36px_rgba(54,59,79,0.14)]"
              : "shadow-[0_18px_50px_rgba(54,59,79,0.12)]"
          }`}>
          {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/70 to-transparent" />
          <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(115deg,rgba(255,255,255,0.35)_0%,transparent_28%,transparent_72%,rgba(255,255,255,0.22)_100%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.32),transparent_32%)]" /> */}

          <div
            className={`relative flex items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 ${
              isScrolled ? "py-1" : "py-3"
            }`}>
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/logo_main.png"
                alt="ARK Simplify"
                width={170}
                height={72}
                priority
                className={`h-auto min-w-[100px] transition-all duration-300 ${
                  isScrolled
                    ? "w-[94px] sm:w-[96px] lg:w-[128px]"
                    : "w-[100px] sm:w-[100px] lg:w-[140px]"
                }`}
              />
            </Link>

            <nav className="hidden min-w-0 flex-1 items-center justify-end lg:flex">
              <div className="flex items-center gap-4">
                <div className="flex min-w-max items-center gap-1 rounded-lg px-2 py-2 text-brand-secondary">
                  {navigationItems.map(({ label, href }) => {
                    const isActive = isActivePath(pathname, href);

                    return (
                      <Link
                        key={href}
                        href={href}
                        className={`group relative inline-flex min-h-11 items-center rounded-lg px-4 py-2 text-[16px] font-semibold tracking-[0.01em] whitespace-nowrap transition-all duration-300 ${
                          isActive
                            ? "text-white shadow-sm"
                            : "text-brand-secondary hover:-translate-y-0.5 hover:bg-white/70 hover:text-brand-primary hover:shadow-[0_8px_20px_rgba(54,59,79,0.08)]"
                        }`}>
                        {isActive ? (
                          <motion.span
                            layoutId="desktop-nav-active-pill"
                            className="absolute inset-0 rounded-lg bg-brand-primary"
                            transition={{
                              type: "spring",
                              stiffness: 420,
                              damping: 32,
                            }}
                          />
                        ) : null}
                        <span className="relative z-10 flex items-center gap-2">
                          <AnimatePresence initial={false}>
                            {isActive ? (
                              <motion.span
                                key={`${href}-desktop-icon`}
                                initial={{ width: 0, opacity: 0, scale: 0.85 }}
                                animate={{ width: 18, opacity: 1, scale: 1 }}
                                exit={{ width: 0, opacity: 0, scale: 0.85 }}
                                transition={{ duration: 0.22, ease: "easeOut" }}
                                className="overflow-hidden">
                                <Image
                                  src="/logo_icon_white.png"
                                  alt=""
                                  width={18}
                                  height={18}
                                  className="h-[18px] w-[18px] shrink-0"
                                />
                              </motion.span>
                            ) : null}
                          </AnimatePresence>
                          <span>{label}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>

                <Separator
                  orientation="vertical"
                  className="h-auto w-1 self-center bg-primary"
                />

                <Link
                  href="/contact-us"
                  className="btn-brand-primary inline-flex min-h-11 items-center gap-2 rounded-lg px-5 py-2 text-[15px] font-semibold tracking-[0.01em] shadow-[0_16px_32px_rgba(255,73,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(255,73,0,0.24)]">
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </nav>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <div className="flex items-center gap-2 lg:hidden">
                <SheetTrigger asChild>
                  <button
                    type="button"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/60 bg-white/55 px-3 py-2 text-brand-secondary shadow-sm backdrop-blur-md transition-colors duration-300 hover:bg-white/80 hover:text-brand-primary">
                    <Menu className="h-5 w-5" />
                  </button>
                </SheetTrigger>
              </div>

              <SheetContent
                side="top"
                className="rounded-b-lg border-white/50 bg-white/92 px-4 pt-16 pb-6 shadow-[0_18px_50px_rgba(54,59,79,0.12)] backdrop-blur-2xl sm:px-6">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-3">
                  {navigationItems.map(({ label, href }) => {
                    const isActive = isActivePath(pathname, href);

                    return (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`group relative inline-flex min-h-12 items-center rounded-lg px-4 py-3 text-base font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-brand-primary text-white"
                            : "bg-brand-surface text-brand-secondary hover:bg-brand-surface-strong hover:text-brand-primary"
                        }`}>
                        {isActive ? (
                          <motion.span
                            layoutId="mobile-nav-active-pill"
                            className="absolute inset-0 rounded-lg bg-brand-primary"
                            transition={{
                              type: "spring",
                              stiffness: 420,
                              damping: 32,
                            }}
                          />
                        ) : null}
                        {isActive ? (
                          <motion.span
                            className="absolute inset-x-2 top-1 h-px rounded-full bg-white/70"
                            initial={{ opacity: 0.2 }}
                            animate={{ opacity: [0.35, 0.9, 0.35] }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        ) : null}
                        <span className="relative z-10 flex items-center gap-2">
                          <AnimatePresence initial={false}>
                            {isActive ? (
                              <motion.span
                                key={`${href}-mobile-icon`}
                                initial={{ width: 0, opacity: 0, scale: 0.85 }}
                                animate={{ width: 18, opacity: 1, scale: 1 }}
                                exit={{ width: 0, opacity: 0, scale: 0.85 }}
                                transition={{ duration: 0.22, ease: "easeOut" }}
                                className="overflow-hidden">
                                <Image
                                  src="/logo_icon_white.png"
                                  alt=""
                                  width={18}
                                  height={18}
                                  className="h-[18px] w-[18px] shrink-0"
                                />
                              </motion.span>
                            ) : null}
                          </AnimatePresence>
                          <span>{label}</span>
                        </span>
                      </Link>
                    );
                  })}

                  <Link
                    href="/contact-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-brand-primary mt-2 inline-flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold shadow-[0_16px_32px_rgba(255,73,0,0.18)]">
                    <span>Start a Project</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
