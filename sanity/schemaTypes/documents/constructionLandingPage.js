import {defineArrayMember, defineField, defineType} from 'sanity'

const requiredText = (name, title, rows) =>
  defineField({
    name,
    title,
    type: rows ? 'text' : 'string',
    rows,
    validation: (Rule) => Rule.required(),
  })

export const constructionLandingPage = defineType({
  name: 'constructionLandingPage',
  title: 'ARK Simplify construction landing',
  type: 'document',
  groups: [
    {name: 'content', title: 'Page content', default: true},
    {name: 'seo', title: 'SEO & indexing'},
  ],
  fields: [
    defineField({
      ...requiredText('announcement', 'Announcement'),
      group: 'content',
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      group: 'content',
      fields: [
        requiredText('eyebrow', 'Eyebrow'),
        requiredText('title', 'Title'),
        requiredText('titleAccent', 'Title accent'),
        requiredText('description', 'Description', 4),
        requiredText('primaryCta', 'Primary CTA'),
        requiredText('secondaryCta', 'Secondary CTA'),
        requiredText('turnaround', 'Turnaround label'),
        requiredText('trustLine', 'Trust line', 3),
      ],
      validation: (Rule) => Rule.required(),
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
      title: 'Service cards',
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
                  {title: 'Estimate', value: 'estimate'},
                  {title: 'Detail', value: 'detail'},
                  {title: 'Project management', value: 'manage'},
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
      validation: (Rule) => Rule.required().min(3).max(3),
    }),
    defineField({
      name: 'process',
      title: 'Sample takeoff process',
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
                requiredText('description', 'Description', 3),
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
      name: 'audience',
      title: 'Audience fit',
      type: 'object',
      group: 'content',
      fields: [
        requiredText('eyebrow', 'Eyebrow'),
        requiredText('title', 'Title'),
        defineField({
          name: 'items',
          title: 'Audience cards',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                requiredText('title', 'Title'),
                requiredText('description', 'Description', 3),
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
      name: 'testimonial',
      title: 'Legacy testimonial',
      type: 'object',
      hidden: true,
      group: 'content',
      fields: [
        requiredText('quote', 'Quote', 5),
        requiredText('author', 'Author'),
        requiredText('role', 'Role'),
        requiredText('relationship', 'Relationship'),
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials carousel',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            requiredText('quote', 'Quote', 5),
            requiredText('author', 'Author'),
            requiredText('role', 'Role'),
            requiredText('relationship', 'Relationship'),
          ],
          preview: {select: {title: 'author', subtitle: 'role'}},
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
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
      title: 'Lead form',
      type: 'object',
      group: 'content',
      fields: [
        requiredText('eyebrow', 'Eyebrow'),
        requiredText('title', 'Title'),
        requiredText('description', 'Description', 3),
        requiredText('submitLabel', 'Submit label'),
        requiredText('privacyText', 'Privacy text', 2),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footer',
      title: 'Landing page footer',
      type: 'object',
      group: 'content',
      fields: [
        requiredText('statement', 'Statement', 3),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.required().email(),
        }),
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
          description: 'Aim for 50–60 characters.',
          validation: (Rule) => Rule.required().max(65),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta description',
          type: 'text',
          rows: 3,
          description: 'Aim for 140–160 characters.',
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
    announcement: 'One active bid. One free takeoff. Zero commitment.',
    hero: {
      eyebrow: 'For subcontractors, GCs & manufacturers',
      title: 'Stop losing bids to a',
      titleAccent: 'takeoff backlog.',
      description:
        'Send us one active bid. Get a complete, construction-ready quantity takeoff back in 48 hours—free. See exactly what an outsourced estimating team feels like before you commit to anything.',
      primaryCta: 'Get my free sample takeoff',
      secondaryCta: 'See how it works',
      turnaround: '48-hour turnaround',
      trustLine:
        'ISO 9001 & ISO 27001 certified · Trusted by Rapid Door & Trim, Doorwayz Unlimited, and Performance Door & Hardware',
    },
    servicesIntro: {
      eyebrow: 'An extension of your team',
      title: 'An estimating department, without the hiring.',
      description:
        'ARK works alongside your team across the full bid lifecycle, so your people stay focused on winning work and running projects.',
    },
    services: [
      {
        _key: 'estimating',
        icon: 'estimate',
        number: '01',
        title: 'Estimating & bidding',
        description:
          'Detailed quantity takeoffs, full cost estimation, vendor pricing with multiple options, bid review, and tender submission support.',
      },
      {
        _key: 'detailing',
        icon: 'detail',
        number: '02',
        title: 'Post-award detailing',
        description:
          'Constructability checks and coordination validation so fabrication, installation, and shipment proceed with 99.9%–100% accuracy.',
      },
      {
        _key: 'project-support',
        icon: 'manage',
        number: '03',
        title: 'Project management support',
        description:
          'Scheduling, milestone tracking, logistics coordination, compliance documentation, and progress reporting.',
      },
    ],
    process: {
      eyebrow: 'A practical first step',
      title: 'Send a live bid. See the working relationship before you scale it.',
      description:
        'The sample is designed to be useful now—not a generic demonstration. Your team gets a real deliverable against an active opportunity.',
      steps: [
        {
          _key: 'share',
          title: 'Share one active bid',
          description:
            'Tell us your scope, trade, due date, and the documents you have available.',
        },
        {
          _key: 'review',
          title: 'We review and align',
          description:
            'Our team confirms the brief and flags any scope questions before work begins.',
        },
        {
          _key: 'deliver',
          title: 'Receive your takeoff in 48 hours',
          description:
            'Review a construction-ready output with no commitment to continue.',
        },
      ],
    },
    audience: {
      eyebrow: 'Built around real project teams',
      title: 'One support model, fitted to your role.',
      items: [
        {
          _key: 'subcontractors',
          title: 'Subcontractors',
          description:
            'Increase bidding capacity while keeping estimates, post-award documentation, and execution readiness disciplined.',
        },
        {
          _key: 'general-contractors',
          title: 'General contractors',
          description:
            'Verify quantities, level competing bids, and identify scope gaps before award.',
        },
        {
          _key: 'manufacturers',
          title: 'Manufacturers',
          description:
            'Align quantity demand, purchase orders, inventory inputs, and supply schedules with project requirements.',
        },
      ],
    },
    testimonial: {
      quote:
        'Rohit and his team are professional, responsive, hardworking and affordable. They are an integral part of our team and our growth. Without ARK we would not have been able to keep growing at our current pace.',
      author: 'Mitchel Lazar',
      role: 'CEO, Rapid Door & Trim Corp.',
      relationship: '18+ month client',
    },
    testimonials: [
      {
        _key: 'mitchel-lazar',
        quote:
          'Rohit and his team are professional, responsive, hardworking and affordable. They are an integral part of our team and our growth. Without ARK we would not have been able to keep growing at our current pace.',
        author: 'Mitchel Lazar',
        role: 'CEO, Rapid Door & Trim Corp.',
        relationship: '18+ month client',
      },
      {
        _key: 'ken-diener',
        quote:
          'I have been working with the ARK team for 2+ years now and would recommend them for takeoff services. Rohit is always willing to listen and work toward a resolution when challenges arise.',
        author: 'Ken Diener, DHT',
        role: 'Sales Manager, Doorwayz Unlimited',
        relationship: '2+ year client',
      },
      {
        _key: 'tim-hunt',
        quote:
          'My team enjoyed working with ARK Simplify. They played an important role in the success of our projects and the growth of our estimating department.',
        author: 'Tim Hunt',
        role: 'President, Performance Door and Hardware',
        relationship: 'Construction client',
      },
    ],
    finalCta: {
      eyebrow: 'Your next bid can be the test',
      title: 'Clear the backlog without adding another hiring cycle.',
      description:
        'Send one active bid and receive a free sample takeoff within 48 hours.',
      buttonLabel: 'Request my free takeoff',
    },
    form: {
      eyebrow: 'Free sample takeoff',
      title: 'Tell us about your active bid',
      description:
        '48-hour turnaround. No commitment. Then your first month of full support is on us.',
      submitLabel: 'Send my bid details',
      privacyText:
        'We reply within one business day. Your documents stay confidential (ISO 27001).',
    },
    footer: {
      statement:
        'Construction estimating, detailing, and project support built around your workflow.',
      email: 'info@arksimplify.com',
      phone: '+1 (312) 380-0712',
    },
    seo: {
      metaTitle: 'Free Construction Takeoff in 48 Hours | ARK Simplify',
      metaDescription:
        'Send ARK Simplify one active construction bid and receive a complete sample quantity takeoff within 48 hours, free and with no commitment.',
      keywords: [
        'free construction takeoff',
        'construction estimating services',
        'quantity takeoff outsourcing',
        'subcontractor estimating',
        'ARK Simplify Construction',
      ],
      noIndex: false,
    },
  },
  preview: {
    prepare() {
      return {title: 'ARK Simplify construction landing'}
    },
  },
})
