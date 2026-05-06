"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Gift, X } from "lucide-react";

export default function SiteOfferFloat() {
  const offerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const closeOnOutsidePress = (event) => {
      if (!offerRef.current || offerRef.current.contains(event.target)) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePress);
    };
  }, [isOpen]);

  return (
    <div
      ref={offerRef}
      className={`offer-attention-jump group fixed right-4 bottom-4 left-4 z-50 transition-all duration-300 sm:right-6 sm:bottom-6 sm:left-6 md:left-auto md:w-auto ${
        isOpen ? "max-h-96" : "max-h-16"
      } md:max-h-none`}
    >
      <div
        className="relative w-full overflow-hidden rounded-lg border border-brand-primary/55 bg-[#150b06] text-white shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition-all duration-300 md:w-64 md:hover:w-[24rem] md:focus-within:w-[24rem]"
      >
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="relative flex min-h-16 w-full items-center justify-between gap-3 border-none px-4 py-3 text-left"
          aria-expanded={isOpen}
        >
          <span className="relative flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-white shadow-[0_12px_26px_rgba(255,73,0,0.28)]">
              <Gift className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-semibold tracking-[0.16em] text-brand-primary uppercase">
                Limited Offer
              </span>
              <span className="block text-sm font-semibold text-white">
                First two weeks free
              </span>
            </span>
          </span>
          <X
            className={`relative h-4 w-4 shrink-0 text-white/62 transition-opacity md:hidden ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>

        <div
          className={`grid transition-all duration-300 md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-focus-within:grid-rows-[1fr] md:group-focus-within:opacity-100 ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="space-y-4 border-t border-white/10 px-4 pt-4 pb-5">
              <div className="space-y-2">
                <h3 className="text-2xl leading-tight font-semibold text-white">
                  First two weeks are on us.
                </h3>
                <p className="text-sm leading-6 text-white/72">
                  Get started with zero commitment. Upload your files or
                  invoices and let us take it from there.
                </p>
              </div>

              <Link
                href="/contact-us"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand-primary px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary/90 hover:shadow-[0_16px_34px_rgba(255,73,0,0.24)]"
              >
                Redeem offer
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
