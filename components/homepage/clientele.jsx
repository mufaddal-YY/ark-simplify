"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const clientLogoPaths = [
  "/client/AG LOGO.png",
  "/client/BH logo.webp",
  "/client/CG-Logo-550.png",
  "/client/Company Logo tech build.avif",
  "/client/Newport-logo.webp",
  "/client/Rapid doors logo.webp",
  "/client/UFD_logo.jpg",
  "/client/builders of metro atlanta.avif",
  "/client/doorways logo.webp",
  "/client/hynes-50-years-logo-1.webp",
  "/client/logo smart shield.png",
];

const clienteleLogos = clientLogoPaths.map((src, index) => ({
  id: index + 1,
  name: `Client logo ${index + 1}`,
  src,
}));

const logosPerSlide = 9;

function chunkLogos(logos, size) {
  const chunks = [];

  for (let index = 0; index < logos.length; index += size) {
    chunks.push(logos.slice(index, index + size));
  }

  return chunks;
}

const logoSlides = chunkLogos(clienteleLogos, logosPerSlide);

export default function Clientele({ preview = false }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevious = () => {
    setActiveSlide(
      (current) => (current - 1 + logoSlides.length) % logoSlides.length,
    );
  };

  const handleNext = () => {
    setActiveSlide((current) => (current + 1) % logoSlides.length);
  };

  useEffect(() => {
    const autoplay = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % logoSlides.length);
    }, 6200);

    return () => window.clearInterval(autoplay);
  }, []);

  return (
    <section className={preview ? "bg-[#f7f5ef]" : "bg-white"}>
      <div className="relative left-1/2 w-screen -translate-x-1/2 border-b border-brand-secondary/10 bg-white">
        <div className="grid min-h-[34rem] lg:grid-cols-[minmax(320px,0.34fr)_minmax(0,0.66fr)]">
          {/* Clientele intro panel */}
          <div className="relative flex flex-col justify-between overflow-hidden border-b border-brand-secondary/10 bg-[#151827] px-6 py-8 text-white sm:px-8 sm:py-10 lg:border-r lg:border-b-0 lg:px-12 lg:py-12 xl:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(54,59,79,0.72),transparent_34%),linear-gradient(135deg,rgba(54,59,79,0.62),rgba(10,12,20,0.94)_58%)]" />

            <div className="relative z-10 space-y-10">
              <div className="space-y-5">
                <p className="text-sm font-semibold tracking-[0.18em] text-white/68 uppercase">
                  Clientele
                </p>
                <div className="h-px w-16 bg-brand-primary" />
                <div className="space-y-2 text-4xl font-semibold leading-none tracking-[-0.07em] sm:text-5xl">
                  <p>OUR</p>
                  <p className="text-brand-primary">CLIENTELE</p>
                </div>
                <p className="max-w-sm text-base leading-8 text-white/76 sm:text-lg">
                  Trusted by teams that value dependable execution, structured
                  delivery, and long-term operational support.
                </p>
              </div>

              
            </div>

            <div className="relative z-10 space-y-5 pt-8">
              <div className="h-px w-full max-w-[16rem] bg-white/18" />
              <p className="max-w-xs text-sm leading-7 text-white/72 sm:text-base">
                Partnering with growth-focused teams across construction,
                operations, finance, and delivery support.
              </p>
            </div>
          </div>

          {/* Client logo carousel */}
          <div className="flex min-h-full flex-col bg-white">
            <div className="flex items-center justify-between border-b border-brand-secondary/10 px-5 py-4 sm:px-6 lg:px-10">
              <p className="text-sm font-semibold tracking-[0.14em] text-brand-secondary/56 uppercase">
                Client Network
              </p>

              {logoSlides.length > 1 ? (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    aria-label="Previous client logos"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-secondary/12 text-brand-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary">
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next client logos"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-secondary/12 text-brand-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ) : null}
            </div>

            <div className="relative flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="grid grid-cols-2 bg-white sm:grid-cols-3">
                  {logoSlides[activeSlide].map((logo, index) => (
                    <div
                      key={logo.id}
                      className={`group flex min-h-[8rem] items-center justify-center border-brand-secondary/10 px-6 py-8 sm:min-h-[9rem] lg:min-h-[10rem] ${
                        index % 2 === 0 ? "border-r" : ""
                      } ${index < logoSlides[activeSlide].length - 2 ? "border-b" : ""} ${
                        index % 3 !== 2 ? "sm:border-r" : "sm:border-r-0"
                      } ${index < 3 ? "sm:border-b" : "sm:border-b-0"}`}>
                      <div className="flex min-h-[5.5rem] w-full max-w-[13rem] items-center justify-center rounded-lg bg-white px-4 py-3 transition-all duration-300">
                        <Image
                          src={logo.src}
                          alt={logo.name}
                          width={180}
                          height={96}
                          className="h-auto max-h-16 w-auto object-contain opacity-80 transition-all duration-300 group-hover:scale-[1.04] group-hover:opacity-100 sm:max-h-20"
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between border-t border-brand-secondary/10 px-5 py-4 sm:px-6 lg:px-10">
              <div className="flex items-center gap-2">
                {logoSlides.length > 1
                  ? logoSlides.map((_, index) => (
                      <button
                        key={`client-slide-${index + 1}`}
                        type="button"
                        aria-label={`Show client slide ${index + 1}`}
                        onClick={() => setActiveSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === activeSlide
                            ? "w-10 bg-brand-primary"
                            : "w-4 bg-brand-secondary/14"
                        }`}
                      />
                    ))
                  : null}
              </div>

              <p className="text-sm font-medium text-brand-secondary/48">
                {String(activeSlide + 1).padStart(2, "0")} /{" "}
                {String(logoSlides.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
