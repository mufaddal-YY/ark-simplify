"use client";

import { useCallback } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "estimating", label: "Estimating" },
  { id: "detailing", label: "Detailing" },
  { id: "project-support", label: "Project Support" },
  { id: "who-we-work-with", label: "Who We Work With" },
  { id: "workflow-fit", label: "Workflow Fit" },
  { id: "case-studies", label: "Case Studies" },
  { id: "vendors", label: "Vendors" },
  { id: "partners", label: "Partners" },
  { id: "software-tools", label: "Software & Tools" },
  { id: "testimonials", label: "Testimonials" },
  { id: "cta", label: "Talk to Ark" },
];

export default function ConstructionSubnav() {
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);

    if (!element) return;

    window.history.replaceState(null, "", `#${id}`);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className="sticky top-[4.9rem] z-40 px-4 pt-3 sm:px-6 md:top-[5.7rem] lg:px-8">
      <div className="mx-auto w-full max-w-8xl">
        <div className="overflow-hidden rounded-lg border border-white/60 bg-white/86 ring-1 ring-white/40 shadow-[0_16px_36px_rgba(54,59,79,0.1)] backdrop-blur-2xl">
          <div className="px-4 py-3 sm:px-6">
            <div className="md:hidden">
         
          <div className="relative">
            <select
              id="construction-jump-menu"
              defaultValue=""
              onChange={(event) => {
                if (!event.target.value) return;
                scrollToSection(event.target.value);
                event.target.value = "";
              }}
              className="h-12 w-full appearance-none rounded-lg border border-brand-secondary/12 bg-white px-4 pr-12 text-sm font-semibold text-brand-secondary shadow-[0_14px_34px_rgba(54,59,79,0.08)] outline-none transition-colors focus:border-brand-construction"
            >
              <option value="" disabled>
                Jump to section
              </option>
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-brand-secondary/54">
              <ChevronDown className="h-4 w-4" />
            </span>
          </div>
            </div>

            <nav
              aria-label="Construction page sections"
              className="hidden md:flex md:items-center md:gap-2 md:overflow-x-auto md:pb-1"
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className="shrink-0 rounded-lg border border-brand-secondary/10 bg-white px-4 py-2.5 text-sm font-semibold text-brand-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-construction/26 hover:text-brand-construction"
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
