export const financeLandingFallback = {
  announcement: "Free stock report",
  headerCta: "Get my free stock report",
  hero: {
    eyebrow: "Inventory · Purchase Orders · AP/AR · Bookkeeping",
    title: "Gain Complete Visibility Into Your",
    titleAccent: "Inventory.",
    description:
      "Improve inventory accuracy, optimize stock levels, and make smarter purchasing decisions with a complimentary stock report from our inventory specialists. No software migration. No disruption. No obligation.",
    primaryCta: "Get My Free Stock Report",
    secondaryCta: "See How It Works",
    turnaround: "Delivered within 3 business days",
    trustLine:
      "Secure & Confidential · No obligation · ISO 27001-certified data handling",
    systemsLine:
      "ERP / Inventory Software: GoFlow · NetSuite · SAP Business One · QuickBooks · Zoho Inventory",
  },
  assurances: [
    {
      _key: "protected",
      label: "Secure & confidential",
      detail: "ISO 27001-certified data handling",
    },
    {
      _key: "delivery",
      label: "3 business days",
      detail: "Free stock report delivered",
    },
    {
      _key: "no-obligation",
      label: "No obligation",
      detail: "Practical, actionable insights",
    },
  ],
  servicesIntro: {
    eyebrow: "Inventory benefits",
    title: "A Smarter Way to Manage Inventory",
    description:
      "Get started with a complimentary stock report, uncover opportunities for improvement, and build a more efficient inventory operation with expert support.",
  },
  services: [
    {
      _key: "stock-visibility",
      icon: "inventory",
      number: "01",
      title: "Real-Time Stock Visibility",
      description: "",
    },
    {
      _key: "inventory-optimization",
      icon: "inventory",
      number: "02",
      title: "Inventory Optimization",
      description: "",
    },
    {
      _key: "reduce-losses",
      icon: "inventory",
      number: "03",
      title: "Reduce Stock Losses",
      description: "",
    },
    {
      _key: "smarter-purchasing",
      icon: "purchasing",
      number: "04",
      title: "Smarter Purchasing Decisions",
      description: "",
    },
  ],
  process: {
    eyebrow: "How it works",
    title: "From Inventory Review to Smarter Stock Management in Just 3 Steps",
    description:
      "Free Stock Report. Actionable Insights. Ongoing Inventory Support.",
    buttonLabel: "Get My Free Stock Report",
    steps: [
      {
        _key: "request-report",
        title: "Request Your Free Stock Report",
        description:
          "Complete a short form and tell us about your inventory setup. We'll review your current processes and inventory data.",
      },
      {
        _key: "inventory-assessment",
        title: "Receive Your Inventory Assessment",
        description:
          "Within 3 business days, you'll receive a detailed stock report highlighting inventory gaps, stock risks, and opportunities to improve efficiency.",
      },
      {
        _key: "optimize-and-scale",
        title: "Optimize & Scale with Confidence",
        description:
          "If you choose to continue, our team helps you implement smarter inventory processes, optimize stock levels, and improve day-to-day inventory management.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Free stock report",
    title: "Take Control of Your Inventory Today.",
    description:
      "Get expert insights into your inventory performance and discover practical opportunities to improve stock accuracy, purchasing, and operational efficiency.",
    buttonLabel: "Request My Free Stock Report",
  },
  form: {
    campaign: "finance",
    eyebrow: "Free stock report",
    title: "Request Your Free Stock Report",
    description:
      "Receive a professional inventory review with practical recommendations to improve stock visibility, optimize inventory levels, and reduce costly stock issues. Delivered within 3 business days.",
    showPhone: true,
    phoneLabel: "Phone Number",
    selectLabel: "ERP / Inventory Software",
    selectPlaceholder: "Select your software",
    selectFullWidth: true,
    selectOptions: [
      "GoFlow",
      "NetSuite",
      "SAP Business One",
      "QuickBooks",
      "Zoho Inventory",
      "Other",
    ],
    challengeLabel: "Biggest Inventory Challenge",
    challengePlaceholder: "Select your biggest challenge (optional)",
    challengeOptions: [
      "Overstock",
      "Stockouts",
      "Inventory Accuracy",
      "Warehouse Visibility",
      "Purchase Planning",
      "Other",
    ],
    serviceValue: "Free Stock Report",
    hideMessage: true,
    messageValue: "Requesting a free stock report.",
    submitLabel: "Request My Free Stock Report",
    privacyText:
      "Secure & Confidential. No obligation. ISO 27001-certified data handling.",
    successText:
      "Thanks for the details. Our team will reply to confirm the next step.",
  },
  footer: {
    statement:
      "Expert inventory support for greater stock visibility, smarter purchasing, and more efficient operations.",
    email: "enquiry@arksimplify.com",
    phone: "+1 (312) 380-0712",
  },
  seo: {
    metaTitle: "Free Inventory Stock Report | ARK Simplify Finance",
    metaDescription:
      "Get a complimentary inventory stock report with practical recommendations to improve stock visibility, accuracy, purchasing, and operational efficiency.",
    keywords: [
      "free inventory stock report",
      "inventory optimization",
      "stock visibility",
      "inventory accuracy",
      "purchase planning",
      "ARK Simplify Finance",
    ],
    noIndex: false,
  },
};

export const financeLandingStats = {
  eyebrow: "Proven results",
  title: "Delivering Inventory Accuracy at Scale.",
  description:
    "Helping building materials manufacturers improve inventory visibility, streamline stock management, and make smarter operational decisions through reliable inventory support.",
  stats: [
    {
      _key: "businesses-supported",
      value: 5825,
      label: "Businesses Supported",
      microLabel: "Helping manufacturers improve inventory operations.",
    },
    {
      _key: "transactions-managed",
      value: 66810,
      label: "Inventory Transactions Managed",
      microLabel:
        "Stock movements, purchase orders, and inventory updates processed.",
    },
    {
      _key: "hours-saved",
      value: 45330,
      suffix: " hrs",
      label: "Operational Hours Saved",
      microLabel: "Time reduced through streamlined inventory management.",
    },
    {
      _key: "inventory-value",
      prefix: "$",
      value: 300,
      suffix: "M",
      label: "Inventory Value Managed",
      microLabel:
        "Combined inventory value supported across client operations.",
    },
  ],
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

  const merged = {...data, ...financeLandingFallback};

  for (const key of nestedKeys) {
    merged[key] = {...data[key], ...financeLandingFallback[key]};
  }

  return merged;
}
