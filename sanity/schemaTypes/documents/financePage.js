import {defineField, defineType} from 'sanity'

export const financePage = defineType({
  name: 'financePage',
  title: 'Finance page',
  type: 'document',
  fields: [
    defineField({
      name: 'banner',
      title: 'Banner',
      type: 'financeBanner',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'financeOverview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Finance services',
      type: 'financeServices',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'partners',
      title: 'Partners',
      type: 'financePartners',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'softwareTools',
      title: 'Software tools',
      type: 'financeSoftwareTools',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    banner: {
      eyebrow: 'Ark Simplify Finance',
      title: 'Ark Simplify Finance',
      titleAccent: 'Finance',
      description:
        'Where your data stays protected and your financial decisions become clearer.',
    },
    overview: {
      eyebrow: 'Finance Overview',
      title: 'Ark Simplify Finance',
      lead: 'Ark Simplifying Finance by supporting businesses with the financial and operational functions that keep day-to-day work running smoothly.',
      paragraphs: [
        'We bring structure and accuracy to essential finance processes by working as an extension of internal teams, aligning with existing systems, and taking ownership of clearly defined responsibilities so work is handled consistently as organizations grow.',
        'Our Finance team works across industries. While we have strong experience supporting construction and manufacturing businesses, our finance services are built to support any organization that values structured processes and dependable execution.',
      ],
    },
    services: {
      eyebrow: 'Our Finance Services',
      title: 'Our Finance Services',
      description:
        'Structured finance support delivered through clearly defined responsibilities, dependable workflows, and consistent day-to-day execution.',
      items: [
        {
          _key: 'inventory-management',
          title: 'Inventory Management',
          icon: 'boxes',
          description:
            'Helping businesses track, manage, and reconcile inventory with clarity across systems and reporting.',
          imageAlt: 'Inventory management',
        },
        {
          _key: 'purchase-order-processing',
          title: 'Purchase Order Processing',
          icon: 'clipboard-list',
          description:
            'Supporting purchasing workflows with better control, documentation, and visibility across vendors and spend.',
          imageAlt: 'Purchase order processing',
        },
        {
          _key: 'bookkeeping',
          title: 'Bookkeeping',
          icon: 'book-open-text',
          description:
            'Maintaining accurate, up-to-date financial records that teams can rely on for reporting and decision-making.',
          imageAlt: 'Bookkeeping',
        },
        {
          _key: 'ap-ar',
          title: 'AP/AR',
          icon: 'receipt-text',
          description:
            'Managing accounts payable and receivable workflows to maintain accuracy, timeliness, and alignment with financial records.',
          imageAlt: 'Accounts payable and receivable',
        },
      ],
    },
    partners: {
      eyebrow: 'Partners',
      title: 'Partners',
      description:
        "Organizations we've worked with across finance and operational support engagements.",
      partners: [],
    },
    softwareTools: {
      eyebrow: 'Softwares',
      title: 'Softwares',
      description:
        'Tools and platforms we work with as part of our day-to-day finance workflows.',
      tools: [
        {_key: 'zoho-books', name: 'Zoho Books', alt: 'Zoho Books logo'},
        {_key: 'odoo', name: 'Odoo', alt: 'Odoo logo'},
        {_key: 'xero', name: 'Xero', alt: 'Xero logo'},
        {_key: 'quickbooks', name: 'QuickBooks', alt: 'QuickBooks logo'},
      ],
    },
  },
  preview: {
    prepare() {
      return {title: 'Finance page'}
    },
  },
})
