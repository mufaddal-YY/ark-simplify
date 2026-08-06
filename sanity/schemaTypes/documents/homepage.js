import {defineArrayMember, defineField, defineType} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'heroBanner',
      title: 'Hero banner',
      type: 'heroBanner',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'industriesWeServe',
      title: 'Industries we serve',
      type: 'industriesWeServe',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'statsSection',
      title: 'Stats section',
      type: 'statsSection',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clienteleSection',
      title: 'Clientele section',
      type: 'clienteleSection',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'faqSection',
      title: 'FAQ section',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
        defineField({
          name: 'items',
          title: 'Questions and answers',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'question',
                  title: 'Question',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'answer',
                  title: 'Answer',
                  type: 'text',
                  rows: 4,
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {select: {title: 'question'}},
            }),
          ],
          validation: (Rule) => Rule.min(1),
        }),
      ],
    }),
    defineField({
      name: 'ctaSection',
      title: 'CTA section',
      type: 'object',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'ctaLabel',
          title: 'CTA label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'ctaHref',
          title: 'CTA href',
          type: 'string',
          validation: (Rule) =>
            Rule.required().custom((href) => {
              if (!href || href.startsWith('/') || /^https?:\/\//.test(href)) {
                return true
              }

              return 'Enter a site path beginning with / or a full http(s) URL.'
            }),
        }),
        defineField({
          name: 'items',
          title: 'Checklist items',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    heroBanner: {
      badge: 'Support Built Around You',
      titleStart: 'Simplifying',
      highlightedTitle: 'complex work',
      titleEnd: 'for growing organizations.',
      description:
        'Ark Simplify supports construction, manufacturing, and process-driven businesses with dependable operational, delivery, and financial execution.',
      primaryCta: {
        label: 'Start a Project',
        href: '/contact-us',
      },
      secondaryCta: {
        label: 'Learn More',
        href: '/about-us',
      },
      slides: [
        {
          _key: 'construction',
          title: 'Simplifying Construction',
          description:
            'Execution support, coordination systems, and delivery ownership for project-led teams.',
        },
        {
          _key: 'finance',
          title: 'Simplifying Finance',
          description:
            'Structured financial operations support for organizations that need dependable scale.',
        },
      ],
    },
    industriesWeServe: {
      eyebrow: 'Industries We Serve',
      title: 'Flexible support built around how different teams actually work.',
      description:
        'We tailor our delivery model to the operational realities of each industry, so the support feels embedded, dependable, and ready to scale with the team.',
      industries: [
        {
          _key: 'construction',
          name: 'Construction',
          accent: 'construction',
          logoAlt: 'Construction logo',
          href: '/construction',
          imageAlt: 'Construction industry',
          blurb:
            'We support construction and manufacturing teams with preconstruction, detailing, and project management services. Our scope and deliverables are defined based on whether we are working with general contractors, subcontractors, or manufacturers, ensuring the work fits how each role operates.',
          highlights: [
            'Preconstruction',
            'Detailing',
            'Project Management',
            'Role-specific delivery',
          ],
        },
        {
          _key: 'finance',
          name: 'Finance',
          accent: 'finance',
          logoAlt: 'Finance logo',
          href: '/finance',
          imageAlt: 'Finance industry',
          blurb:
            'We support businesses with core financial and operational functions including inventory management, purchase order processing, bookkeeping, and AP/AR. While we work closely with construction-related businesses, our finance services also support teams in other industries that need dependable financial processes as they grow.',
          highlights: [
            'Inventory Management',
            'Purchase Order Processing',
            'Bookkeeping',
            'AP/AR',
          ],
        },
      ],
    },
    statsSection: {
      eyebrow: 'Delivery Results',
      title: 'Consistent support, measured across real delivery.',
      description:
        'The same operating discipline behind our construction, finance, and project support work, shown through the numbers teams rely on.',
      resultsLabel: 'Key Results',
      stats: [
        {
          _key: 'projects',
          value: 5825,
          label: 'No. of Projects',
          microLabel: 'Delivered across supported engagements',
        },
        {
          _key: 'units',
          value: 66810,
          label: 'Total Units',
          microLabel: 'Measured across tracked project scopes',
        },
        {
          _key: 'manhours',
          value: 45330,
          suffix: ' hrs',
          label: 'Manhours Saved',
          microLabel: 'Total saved hours represented in supported delivery',
        },
        {
          _key: 'bid-amount',
          value: 300,
          prefix: '$',
          suffix: 'm',
          label: 'Bid Amount',
          microLabel: 'Combined bid value across tracked scopes',
        },
      ],
    },
    clienteleSection: {
      eyebrow: 'Clientele',
      titleStart: 'OUR',
      highlightedTitle: 'CLIENTELE',
      description:
        'Trusted by teams that value dependable execution, structured delivery, and long-term operational support.',
      supportingText:
        'Partnering with growth-focused teams across construction, operations, finance, and delivery support.',
      networkLabel: 'Client Network',
      logos: [],
    },
    faqSection: {
      eyebrow: 'Frequently Asked Questions',
      title: 'What teams ask before working with ARK.',
      description:
        'Clear answers about our construction, finance, and operational support.',
      items: [
        {
          _key: 'services',
          question: 'What services does ARK Simplify provide?',
          answer:
            'ARK Simplify supports construction and finance operations. Our work includes estimating, takeoffs, detailing, project management support, inventory management, purchase orders, bookkeeping, and accounts payable and receivable workflows.',
        },
        {
          _key: 'construction-clients',
          question: 'Who do your construction services support?',
          answer:
            'We work with general contractors, subcontractors, and manufacturers. The scope, deliverables, and workflow are tailored to the role your team plays in each project.',
        },
        {
          _key: 'existing-systems',
          question: 'Can ARK work within our existing systems and processes?',
          answer:
            'Yes. Our team is designed to work alongside your existing staff and within the software, approval paths, and reporting processes you already use.',
        },
        {
          _key: 'limited-scope',
          question: 'Can we start with a limited scope before expanding?',
          answer:
            'Yes. We can begin with a defined project, workflow, or service area so your team can evaluate the delivery model before expanding the engagement.',
        },
        {
          _key: 'security',
          question: 'How does ARK protect client information?',
          answer:
            'ARK follows documented quality and information-security processes supported by ISO 9001 and ISO 27001 certifications. Access and responsibilities are defined around the agreed scope of work.',
        },
        {
          _key: 'getting-started',
          question: 'How do we get started?',
          answer:
            'Contact our team with a brief overview of your current workflow and the support you need. We will review the requirements, clarify the scope, and recommend an appropriate delivery model.',
        },
      ],
    },
    ctaSection: {
      eyebrow: 'Let’s Talk',
      title: 'Let’s simplify the work behind your operations.',
      description:
        'Connect with our team to discuss your requirements, understand where support is needed, and explore how Ark Simplify can work alongside your business.',
      ctaLabel: 'Get in Touch',
      ctaHref: '/contact-us',
      items: [
        'Speak with our team',
        'Discuss your current workflow',
        'Identify the right support model',
      ],
    },
  },
  preview: {
    prepare() {
      return {
        title: 'Homepage',
      }
    },
  },
})
