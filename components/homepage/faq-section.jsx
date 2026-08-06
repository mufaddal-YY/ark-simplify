import {ChevronDown, CircleHelp} from "lucide-react";

const defaultFaqSection = {
  eyebrow: "Frequently Asked Questions",
  title: "What teams ask before working with ARK.",
  description:
    "Clear answers about our construction, finance, and operational support.",
  items: [
    {
      question: "What services does ARK Simplify provide?",
      answer:
        "ARK Simplify supports construction and finance operations. Our work includes estimating, takeoffs, detailing, project management support, inventory management, purchase orders, bookkeeping, and accounts payable and receivable workflows.",
    },
    {
      question: "Who do your construction services support?",
      answer:
        "We work with general contractors, subcontractors, and manufacturers. The scope, deliverables, and workflow are tailored to the role your team plays in each project.",
    },
    {
      question: "Can ARK work within our existing systems and processes?",
      answer:
        "Yes. Our team is designed to work alongside your existing staff and within the software, approval paths, and reporting processes you already use.",
    },
    {
      question: "Can we start with a limited scope before expanding?",
      answer:
        "Yes. We can begin with a defined project, workflow, or service area so your team can evaluate the delivery model before expanding the engagement.",
    },
    {
      question: "How does ARK protect client information?",
      answer:
        "ARK follows documented quality and information-security processes supported by ISO 9001 and ISO 27001 certifications. Access and responsibilities are defined around the agreed scope of work.",
    },
    {
      question: "How do we get started?",
      answer:
        "Contact our team with a brief overview of your current workflow and the support you need. We will review the requirements, clarify the scope, and recommend an appropriate delivery model.",
    },
  ],
};

function serializeStructuredData(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function FaqSection({data}) {
  const section = data ?? defaultFaqSection;
  const items = section.items?.length ? section.items : defaultFaqSection.items;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="frequently-asked-questions"
      className="relative overflow-hidden border-t border-brand-secondary/10 bg-brand-surface px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(structuredData),
        }}
      />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(280px,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/12 bg-white px-4 py-2 text-xs font-semibold tracking-[0.16em] text-brand-secondary uppercase">
            <CircleHelp className="size-4 text-brand-primary" aria-hidden="true" />
            {section.eyebrow ?? defaultFaqSection.eyebrow}
          </div>
          <h2 className="mt-6 max-w-xl text-4xl leading-[1.02] font-semibold tracking-[-0.06em] text-brand-secondary sm:text-5xl">
            {section.title ?? defaultFaqSection.title}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-brand-secondary/68 sm:text-lg">
            {section.description ?? defaultFaqSection.description}
          </p>
        </div>

        <div className="divide-y divide-brand-secondary/10 overflow-hidden rounded-lg border border-brand-secondary/10 bg-white shadow-[0_22px_60px_rgba(54,59,79,0.07)]">
          {items.map((item, index) => (
            <details key={item._key ?? item.question} className="group px-5 sm:px-7">
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-5 text-left [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-4">
                  <span className="mt-0.5 text-xs font-bold tracking-[0.12em] text-brand-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold text-brand-secondary sm:text-lg">
                    {item.question}
                  </span>
                </span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-surface text-brand-secondary transition duration-300 group-open:rotate-180 group-open:bg-brand-primary group-open:text-white">
                  <ChevronDown className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="pr-12 pb-6 pl-10 text-sm leading-7 text-brand-secondary/68 sm:text-base sm:leading-8">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
