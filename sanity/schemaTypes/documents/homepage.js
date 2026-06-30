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
