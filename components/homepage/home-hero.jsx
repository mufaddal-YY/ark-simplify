"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Simplifying Construction",
    description:
      "Execution support, coordination systems, and delivery ownership for project-led teams.",
  },
  {
    title: "Simplifying Finance",
    description:
      "Structured financial operations support for organizations that need dependable scale.",
  },
];

export default function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const handlePrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + services.length) % services.length,
    );
    setRotation((current) => current - 60);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % services.length);
    setRotation((current) => current + 60);
  };

  useEffect(() => {
    const autoplay = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
      setRotation((current) => current + 60);
    }, 6200);

    return () => window.clearInterval(autoplay);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#151827] px-4 pt-36 pb-16 sm:-mt-28 sm:px-6 sm:pt-56 sm:pb-20 lg:px-8 lg:pt-34 lg:pb-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(54,59,79,0.72),transparent_34%),linear-gradient(135deg,rgba(54,59,79,0.62),rgba(10,12,20,0.94)_58%)]" />

      <div className="relative grid min-h-[calc(100vh-2rem)] content-center gap-10 pt-8 sm:gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <div className="relative z-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-3xl space-y-8 sm:space-y-9">
              <div className="space-y-7">
                <div className="space-y-4">
                  <p className="inline-flex rounded-lg border border-white/18 bg-transparent px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white uppercase">
                    Support Built Around You
                  </p>
                </div>

                <h1 className="max-w-3xl text-4xl leading-[1.2] font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-6xl">
                  Simplifying{" "}
                  <span className="text-brand-primary">complex work</span> for
                  growing organizations.
                </h1>

                <p className="max-w-xl text-base leading-7 text-white/72 sm:text-lg">
                  Ark Simplify supports construction, manufacturing, and
                  process-driven businesses with dependable operational,
                  delivery, and financial execution.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact-us"
                  className="btn-brand-primary inline-flex min-h-13 items-center justify-center rounded-lg px-7 py-3 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0px_14px_rgba(255,73,0,0.28)]"
                >
                  Start a Project
                </Link>
                <Link
                  href="/about-us"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg px-2 py-3 text-base font-semibold text-white/82 transition-colors duration-300 hover:text-brand-primary"
                >
                  Learn More
                </Link>
              </div>

              
            </div>
          </div>
        </div>

        <div
          className="relative hidden min-h-[34rem] items-center justify-end overflow-hidden p-6 sm:p-8 lg:mr-0 lg:ml-auto lg:flex lg:w-[calc(50vw+10rem)] lg:max-w-none lg:pr-[max(2rem,calc((100vw-1280px)/2))]"
        >
          <div className="relative z-10 flex w-full flex-col gap-8">
            <div className="relative min-h-[34rem] overflow-hidden rounded-lg p-6 sm:min-h-[38rem] sm:p-8">
              <motion.div
                animate={{ rotate: rotation }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="pointer-events-none absolute right-[-34%] top-1/2 z-0 w-[84%] -translate-y-1/2"
              >
                <Image
                  src="/heroLogo2.svg"
                  alt=""
                  width={500}
                  height={570}
                  className="h-auto w-full opacity-18"
                />
              </motion.div>

              <div
                className="relative -bottom-24 z-10 flex h-full max-w-[58%] flex-col justify-end"
              >
                <div className="pb-10">
                  <div className="space-y-4">
                    <motion.div
                      key={services[activeIndex].title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.32, ease: "easeOut" }}
                      className="space-y-4"
                    >
                      <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white lg:text-5xl">
                        {services[activeIndex].title}
                      </h2>
                      <p className="text-base leading-8 text-white/72 sm:text-lg">
                        {services[activeIndex].description}
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-5 pb-1 pl-1">
                  <div className="flex items-center gap-2">
                    {services.map((service, index) => (
                      <span
                        key={service.title}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === activeIndex
                            ? "w-10 bg-brand-primary"
                            : "w-4 bg-white/24"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrevious}
                      aria-label="Previous service"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/16 bg-white/8 text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:text-brand-primary"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next service"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/16 bg-white/8 text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:text-brand-primary"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 lg:hidden">
          <div className="relative flex min-h-[26rem] items-center justify-center">
            <motion.div
              animate={{ rotate: rotation }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="pointer-events-none absolute left-1/2 top-[50%] z-0 w-[78vw] max-w-[20rem] -translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src="/heroLogo2.svg"
                alt="ARK Simplify hero mark"
                width={420}
                height={480}
                className="h-auto w-full opacity-22"
              />
            </motion.div>

            <div
              className="relative z-10 w-full overflow-hidden rounded-lg border border-white/12 bg-white/6 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-md"
            >
              <motion.div
                key={services[activeIndex].title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                className="space-y-4"
              >
                <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white lg:text-5xl">
                  {services[activeIndex].title}
                </h2>
                <p className="text-base leading-7 text-white/72">
                  {services[activeIndex].description}
                </p>
              </motion.div>

              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-2">
                  {services.map((service, index) => (
                    <span
                      key={service.title}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-10 bg-brand-primary"
                          : "w-4 bg-white/24"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    aria-label="Previous service"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/16 bg-white/8 text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:text-brand-primary"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next service"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/16 bg-white/8 text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:text-brand-primary"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
