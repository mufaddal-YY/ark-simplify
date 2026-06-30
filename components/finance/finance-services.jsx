import Image from "next/image";

import {
  BookOpenText,
  Boxes,
  ClipboardList,
  ReceiptText,
} from "lucide-react";

const financeServices = [
  {
    title: "Inventory Management",
    icon: Boxes,
    image: "/finance/inventory.jpg",
    description:
      "Helping businesses track, manage, and reconcile inventory with clarity across systems and reporting.",
  },
  {
    title: "Purchase Order Processing",
    icon: ClipboardList,
    image: "/finance/procurement.jpg",
    description:
      "Supporting purchasing workflows with better control, documentation, and visibility across vendors and spend.",
  },
  {
    title: "Bookkeeping",
    icon: BookOpenText,
    image: "/finance/bookkeeping.jpg",
    description:
      "Maintaining accurate, up-to-date financial records that teams can rely on for reporting and decision-making.",
  },
  {
    title: "AP/AR",
    icon: ReceiptText,
    image: "/finance/invoicing.jpg",
    description:
      "Managing accounts payable and receivable workflows to maintain accuracy, timeliness, and alignment with financial records.",
  },
];

const iconMap = {
  boxes: Boxes,
  "clipboard-list": ClipboardList,
  "book-open-text": BookOpenText,
  "receipt-text": ReceiptText,
};

const imageFallbacks = {
  "Inventory Management": "/finance/inventory.jpg",
  "Purchase Order Processing": "/finance/procurement.jpg",
  Bookkeeping: "/finance/bookkeeping.jpg",
  "AP/AR": "/finance/invoicing.jpg",
};

const defaultServicesSection = {
  eyebrow: "Our Finance Services",
  title: "Our Finance Services",
  description:
    "Structured finance support delivered through clearly defined responsibilities, dependable workflows, and consistent day-to-day execution.",
  items: financeServices,
};

function normalizeService(service, index) {
  return {
    ...service,
    icon:
      typeof service.icon === "string"
        ? iconMap[service.icon] ?? Boxes
        : service.icon ?? Boxes,
    image:
      service.imageUrl ??
      service.image ??
      imageFallbacks[service.title] ??
      financeServices[index]?.image,
    imageAlt: service.imageAlt ?? service.title,
  };
}

function FinanceServiceCard({ title, description, icon: Icon, image, imageAlt }) {
  return (
    <article className="mx-auto w-full max-w-5xl rounded-lg bg-white p-5 shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:p-6 lg:p-7">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-stretch lg:gap-8">
        <div className="flex flex-col justify-center space-y-5">
          <div className="space-y-3">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg border border-brand-secondary/14 bg-white">
              <Icon
                className="h-6 w-6 text-brand-finance"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-3xl font-semibold tracking-[-0.04em] text-brand-secondary sm:text-4xl">
              {title}
            </h3>
            <div className="h-px w-16 bg-brand-finance" />
          </div>

          <p className="max-w-xl text-base leading-8 text-brand-secondary/72 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-brand-secondary/10 bg-[#0b0f1a]">
          <Image
            src={image}
            alt={imageAlt ?? title}
            width={1200}
            height={675}
            className="aspect-video h-full w-full object-cover lg:min-h-[20rem]"
          />
        </div>
      </div>
    </article>
  );
}

export default function FinanceServices({ data }) {
  const section = data ?? defaultServicesSection;
  const services = (section.items?.length
    ? section.items
    : defaultServicesSection.items
  ).map(normalizeService);

  return (
    <section
      className="relative overflow-hidden bg-[#151827] bg-fixed px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      style={{
        backgroundImage:
          "radial-gradient(circle_at_0%_0%, rgba(54,59,79,0.72), transparent 34%), linear-gradient(135deg, rgba(54,59,79,0.62), rgba(10,12,20,0.94) 58%)",
      }}
    >
      <div className="mx-auto max-w-7xl space-y-8 lg:space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-finance uppercase">
            {section.eyebrow ?? defaultServicesSection.eyebrow}
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white lg:text-5xl">
            {section.title ?? defaultServicesSection.title}
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
            {section.description ?? defaultServicesSection.description}
          </p>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {services.map((service) => (
            <FinanceServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
