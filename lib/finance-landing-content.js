export const financeLandingFallback = {
  announcement: "Free books health check",
  headerCta: "Free books health check",
  hero: {
    eyebrow: "Bookkeeping · AP/AR · Inventory · Purchase Orders",
    title: "Close your books on time.",
    titleAccent: "Every month.",
    description:
      "Get a free health check of your books—we review your last 3 months and send a findings report in 3 business days: uncategorized transactions, AP/AR aging risks, and reconciliation gaps. Then your first month of support is free.",
    primaryCta: "Get my free health check",
    secondaryCta: "See how it works",
    turnaround: "Findings report in 3 business days",
    trustLine:
      "ISO 27001 certified—your data stays protected · US line: +1 (312) 380-0712",
    systemsLine:
      "We work inside YOUR system: QuickBooks · Xero · Zoho Books · Odoo",
  },
  assurances: [
    {
      _key: "protected",
      label: "ISO 27001 certified",
      detail: "Your data stays protected",
    },
    {
      _key: "findings",
      label: "3 business days",
      detail: "Findings report delivered",
    },
    {
      _key: "free-month",
      label: "First month free",
      detail: "Day-to-day finance support",
    },
  ],
  servicesIntro: {
    eyebrow: "Bookkeeping · AP/AR · Inventory · Purchase Orders",
    title: "The back office, handled.",
    description:
      "ARK Finance works as an extension of your team with clearly defined responsibilities—so the day-to-day never slips as you grow.",
  },
  services: [
    {
      _key: "bookkeeping",
      icon: "bookkeeping",
      number: "01",
      title: "Bookkeeping",
      description:
        "Accurate, up-to-date records your team can rely on for reporting and decisions.",
    },
    {
      _key: "ap-ar",
      icon: "receivables",
      number: "02",
      title: "AP / AR",
      description:
        "Payables and receivables managed for accuracy, timeliness, and clean records.",
    },
    {
      _key: "purchase-orders",
      icon: "purchasing",
      number: "03",
      title: "Purchase Orders",
      description:
        "Purchasing workflows with control, documentation, and vendor spend visibility.",
    },
    {
      _key: "inventory",
      icon: "inventory",
      number: "04",
      title: "Inventory",
      description:
        "Tracking, management, and reconciliation with clarity across systems.",
    },
  ],
  process: {
    eyebrow: "How it works",
    title: "From first look to fully handled in under three weeks.",
    description: "Health check. First month free. Ongoing support.",
    steps: [
      {
        _key: "health-check",
        title: "Health check",
        description:
          "Grant read-only access. We review 3 months of records and send a findings report in 3 business days.",
      },
      {
        _key: "first-month-free",
        title: "First month free",
        description:
          "We start fixing what we found and run your day-to-day—bookkeeping, AP/AR, POs—at zero cost.",
      },
      {
        _key: "ongoing-support",
        title: "Ongoing support",
        description:
          "Keep us on with a clearly scoped monthly engagement. Cancel anytime.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Free books health check",
    title: "Close your books on time. Every month.",
    description:
      "A findings report in 3 business days. No migration, no new software, no commitment.",
    buttonLabel: "Get my free health check",
  },
  form: {
    eyebrow: "Free books health check",
    title: "Request your free books health check",
    description:
      "Findings report in 3 business days. No migration, no new software, no commitment.",
    selectLabel: "Accounting software",
    selectPlaceholder: "Select your software",
    selectOptions: ["QuickBooks", "Xero", "Zoho Books", "Odoo"],
    serviceValue: "Free Books Health Check",
    hideMessage: true,
    messageValue: "Requesting a free books health check.",
    submitLabel: "Request my health check",
    privacyText:
      "Read-only access only. ISO 27001-certified data handling.",
    successText:
      "Thanks for the details. Our team will reply to confirm the next step.",
  },
  footer: {
    statement:
      "ARK Finance works as an extension of your team so the day-to-day never slips as you grow.",
    email: "enquiry@arksimplify.com",
    phone: "+1 (312) 380-0712",
  },
  seo: {
    metaTitle: "Free Bookkeeping Health Check | ARK Simplify Finance",
    metaDescription:
      "Get a free review of your last three months of books and receive a findings report covering AP/AR risks and reconciliation gaps in three business days.",
    keywords: [
      "free bookkeeping health check",
      "outsourced bookkeeping",
      "accounts payable support",
      "accounts receivable support",
      "inventory reconciliation",
      "ARK Simplify Finance",
    ],
    noIndex: false,
  },
};

const nestedKeys = [
  "hero",
  "servicesIntro",
  "process",
  "finalCta",
  "form",
  "footer",
  "seo",
];

export function mergeFinanceLandingContent(data) {
  if (!data) return financeLandingFallback;

  const merged = {...financeLandingFallback, ...data};

  for (const key of nestedKeys) {
    merged[key] = {...financeLandingFallback[key], ...data[key]};
  }

  merged.assurances = data.assurances?.length
    ? data.assurances
    : financeLandingFallback.assurances;
  merged.services = data.services?.length
    ? data.services
    : financeLandingFallback.services;
  merged.process.steps = data.process?.steps?.length
    ? data.process.steps
    : financeLandingFallback.process.steps;

  return merged;
}
