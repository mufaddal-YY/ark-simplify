import {defineArrayMember, defineField, defineType} from 'sanity'

const requiredText = (name, title, rows) =>
  defineField({
    name,
    title,
    type: rows ? 'text' : 'string',
    rows,
    validation: (Rule) => Rule.required(),
  })

export const financeLandingPage = defineType({
  name: 'financeLandingPage',
  title: 'ARK Simplify finance landing',
  type: 'document',
  groups: [
    {name: 'content', title: 'Page content', default: true},
    {name: 'seo', title: 'SEO & indexing'},
  ],
  fields: [
    defineField({...requiredText('announcement', 'Announcement'), group: 'content'}),
    defineField({...requiredText('headerCta', 'Header CTA'), group: 'content'}),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      group: 'content',
      fields: [
        requiredText('eyebrow', 'Eyebrow'),
        requiredText('title', 'Title'),
        requiredText('titleAccent', 'Title accent'),
        requiredText('description', 'Description', 5),
        requiredText('primaryCta', 'Primary CTA'),
        requiredText('secondaryCta', 'Secondary CTA'),
        requiredText('turnaround', 'Turnaround label'),
        requiredText('trustLine', 'Trust line', 3),
        requiredText('systemsLine', 'Accounting systems line', 2),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'assurances',
      title: 'Assurance bar',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            requiredText('label', 'Label'),
            requiredText('detail', 'Detail'),
          ],
          preview: {select: {title: 'label', subtitle: 'detail'}},
        }),
      ],
      validation: (Rule) => Rule.required().min(3).max(3),
    }),
    defineField({
      name: 'servicesIntro',
      title: 'Services introduction',
      type: 'object',
      group: 'content',
      fields: [
        requiredText('eyebrow', 'Eyebrow'),
        requiredText('title', 'Title'),
        requiredText('description', 'Description', 3),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Finance service cards',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            requiredText('number', 'Number'),
            defineField({
              name: 'icon',
              title: 'Animated icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Bookkeeping', value: 'bookkeeping'},
                  {title: 'AP / AR', value: 'receivables'},
                  {title: 'Purchase Orders', value: 'purchasing'},
                  {title: 'Inventory', value: 'inventory'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            requiredText('title', 'Title'),
            requiredText('description', 'Description', 4),
          ],
          preview: {select: {title: 'title', subtitle: 'number'}},
        }),
      ],
      validation: (Rule) => Rule.required().min(4).max(4),
    }),
    defineField({
      name: 'process',
      title: 'How it works',
      type: 'object',
      group: 'content',
      fields: [
        requiredText('eyebrow', 'Eyebrow'),
        requiredText('title', 'Title'),
        requiredText('description', 'Description', 3),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                requiredText('title', 'Title'),
                requiredText('description', 'Description', 4),
              ],
              preview: {select: {title: 'title'}},
            }),
          ],
          validation: (Rule) => Rule.required().min(3).max(3),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'finalCta',
      title: 'Final call to action',
      type: 'object',
      group: 'content',
      fields: [
        requiredText('eyebrow', 'Eyebrow'),
        requiredText('title', 'Title'),
        requiredText('description', 'Description', 3),
        requiredText('buttonLabel', 'Button label'),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'form',
      title: 'Health check form',
      type: 'object',
      group: 'content',
      fields: [
        requiredText('eyebrow', 'Eyebrow'),
        requiredText('title', 'Title'),
        requiredText('description', 'Description', 3),
        requiredText('selectLabel', 'Software field label'),
        requiredText('selectPlaceholder', 'Software placeholder'),
        defineField({
          name: 'selectOptions',
          title: 'Accounting software options',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
          validation: (Rule) => Rule.required().min(1),
        }),
        requiredText('serviceValue', 'Submission service name'),
        defineField({name: 'hideMessage', title: 'Hide message field', type: 'boolean'}),
        requiredText('messageValue', 'Submission message'),
        requiredText('submitLabel', 'Submit label'),
        requiredText('privacyText', 'Privacy text', 2),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footer',
      title: 'Landing footer',
      type: 'object',
      group: 'content',
      fields: [
        requiredText('statement', 'Statement', 3),
        requiredText('phone', 'Phone'),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO settings',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta title',
          type: 'string',
          validation: (Rule) => Rule.required().max(65),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required().max(170),
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
          options: {layout: 'tags'},
        }),
        defineField({
          name: 'noIndex',
          title: 'Hide from search engines',
          type: 'boolean',
          initialValue: false,
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    announcement: 'Free books health check',
    headerCta: 'Free books health check',
    hero: {
      eyebrow: 'Bookkeeping · AP/AR · Inventory · Purchase Orders',
      title: 'Close your books on time.',
      titleAccent: 'Every month.',
      description:
        'Get a free health check of your books—we review your last 3 months and send a findings report in 3 business days: uncategorized transactions, AP/AR aging risks, and reconciliation gaps. Then your first month of support is free.',
      primaryCta: 'Get my free health check',
      secondaryCta: 'See how it works',
      turnaround: 'Findings report in 3 business days',
      trustLine:
        'ISO 27001 certified—your data stays protected · US line: +1 (312) 380-0712',
      systemsLine: 'We work inside YOUR system: QuickBooks · Xero · Zoho Books · Odoo',
    },
    assurances: [
      {_key: 'protected', label: 'ISO 27001 certified', detail: 'Your data stays protected'},
      {_key: 'findings', label: '3 business days', detail: 'Findings report delivered'},
      {_key: 'free-month', label: 'First month free', detail: 'Day-to-day finance support'},
    ],
    servicesIntro: {
      eyebrow: 'Bookkeeping · AP/AR · Inventory · Purchase Orders',
      title: 'The back office, handled.',
      description:
        'ARK Finance works as an extension of your team with clearly defined responsibilities—so the day-to-day never slips as you grow.',
    },
    services: [
      {_key: 'bookkeeping', icon: 'bookkeeping', number: '01', title: 'Bookkeeping', description: 'Accurate, up-to-date records your team can rely on for reporting and decisions.'},
      {_key: 'ap-ar', icon: 'receivables', number: '02', title: 'AP / AR', description: 'Payables and receivables managed for accuracy, timeliness, and clean records.'},
      {_key: 'purchase-orders', icon: 'purchasing', number: '03', title: 'Purchase Orders', description: 'Purchasing workflows with control, documentation, and vendor spend visibility.'},
      {_key: 'inventory', icon: 'inventory', number: '04', title: 'Inventory', description: 'Tracking, management, and reconciliation with clarity across systems.'},
    ],
    process: {
      eyebrow: 'How it works',
      title: 'From first look to fully handled in under three weeks.',
      description: 'Health check. First month free. Ongoing support.',
      steps: [
        {_key: 'health-check', title: 'Health check', description: 'Grant read-only access. We review 3 months of records and send a findings report in 3 business days.'},
        {_key: 'first-month-free', title: 'First month free', description: 'We start fixing what we found and run your day-to-day—bookkeeping, AP/AR, POs—at zero cost.'},
        {_key: 'ongoing-support', title: 'Ongoing support', description: 'Keep us on with a clearly scoped monthly engagement. Cancel anytime.'},
      ],
    },
    finalCta: {
      eyebrow: 'Free books health check',
      title: 'Close your books on time. Every month.',
      description: 'A findings report in 3 business days. No migration, no new software, no commitment.',
      buttonLabel: 'Get my free health check',
    },
    form: {
      eyebrow: 'Free books health check',
      title: 'Request your free books health check',
      description: 'Findings report in 3 business days. No migration, no new software, no commitment.',
      selectLabel: 'Accounting software',
      selectPlaceholder: 'Select your software',
      selectOptions: ['QuickBooks', 'Xero', 'Zoho Books', 'Odoo'],
      serviceValue: 'Free Books Health Check',
      hideMessage: true,
      messageValue: 'Requesting a free books health check.',
      submitLabel: 'Request my health check',
      privacyText: 'Read-only access only. ISO 27001-certified data handling.',
    },
    footer: {
      statement: 'ARK Finance works as an extension of your team so the day-to-day never slips as you grow.',
      phone: '+1 (312) 380-0712',
    },
    seo: {
      metaTitle: 'Free Bookkeeping Health Check | ARK Simplify Finance',
      metaDescription: 'Get a free review of your last three months of books and receive a findings report covering AP/AR risks and reconciliation gaps in three business days.',
      keywords: ['free bookkeeping health check', 'outsourced bookkeeping', 'accounts payable support', 'accounts receivable support', 'inventory reconciliation', 'ARK Simplify Finance'],
      noIndex: false,
    },
  },
  preview: {
    prepare() {
      return {title: 'ARK Simplify finance landing'}
    },
  },
})
