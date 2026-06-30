import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const openRoles = [
  {
    title: "Civil Engineer Fresher",
    meta: "Full-time · Nagpur",
    description:
      "Support construction teams with site coordination, quantity checks, documentation, and day-to-day project execution.",
  },
  {
    title: "HR Interns",
    meta: "Internship · Nagpur",
    description:
      "Assist with hiring coordination, candidate communication, employee records, and everyday people operations.",
  },
];

const defaultCareers = {
  eyebrow: "Careers at ARK",
  title: "Open positions",
  paragraphs: [
    "We’re interested in people who care about doing thoughtful work, staying accountable, and growing inside environments where structure and adaptability both matter.",
    "We are currently hiring for two openings. Open roles can be updated here as the team grows.",
  ],
  applyLabel: "Apply",
  applyHref: "/contact-us",
};

function normalizeJob(job, index) {
  return {
    id: job._key ?? job.title ?? index,
    title: job.title,
    meta:
      job.meta ??
      [job.employmentType, job.location].filter(Boolean).join(" · "),
    description: job.description,
  };
}

export default function LifeCareers({ data, jobs }) {
  const section = data ?? defaultCareers;
  const paragraphs = section.paragraphs?.length
    ? section.paragraphs
    : defaultCareers.paragraphs;
  const roles = (jobs?.length ? jobs : openRoles).map(normalizeJob);

  return (
    <section
      id="open-jobs"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg border border-brand-secondary/10 bg-brand-surface p-6 shadow-[0_22px_60px_rgba(54,59,79,0.06)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start lg:gap-14">
            <div className="space-y-5">
              <p className="text-sm font-semibold tracking-[0.16em] text-brand-primary uppercase">
                {section.eyebrow ?? defaultCareers.eyebrow}
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-brand-secondary lg:text-5xl">
                {section.title ?? defaultCareers.title}
              </h2>
              {paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-base leading-8 text-brand-secondary/72 sm:text-lg ${
                    index === paragraphs.length - 1
                      ? "border-t border-brand-secondary/10 pt-5"
                      : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-4">
              {roles.map((role) => (
                <article
                  key={role.id}
                  className="rounded-lg border border-brand-secondary/10 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:p-6"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-secondary">
                          {role.title}
                        </h3>
                        <p className="text-sm font-semibold tracking-[0.12em] text-brand-primary uppercase">
                          {role.meta}
                        </p>
                      </div>
                      <p className="max-w-2xl text-base leading-8 text-brand-secondary/72">
                        {role.description}
                      </p>
                    </div>

                    <Link
                      href={section.applyHref ?? defaultCareers.applyHref}
                      className="btn-brand-primary inline-flex min-h-11 items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold"
                    >
                      {section.applyLabel ?? defaultCareers.applyLabel}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
