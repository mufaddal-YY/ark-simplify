import {defineField, defineType} from 'sanity'

export const constructionPage = defineType({
  name: 'constructionPage',
  title: 'Construction page',
  type: 'document',
  fields: [
    defineField({
      name: 'banner',
      title: 'Banner',
      type: 'constructionBanner',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'constructionOverview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'estimating',
      title: 'Estimating services',
      type: 'constructionEstimating',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'detailing',
      title: 'Detailing services',
      type: 'constructionDetailing',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectSupport',
      title: 'Project management support',
      type: 'constructionProjectSupport',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'audiences',
      title: 'Who we work with',
      type: 'constructionAudiences',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'workflowFit',
      title: 'Workflow fit',
      type: 'constructionWorkflowFit',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caseStudies',
      title: 'Case studies',
      type: 'constructionCaseStudies',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'partners',
      title: 'Partners and clients',
      type: 'constructionPartners',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'softwareTools',
      title: 'Software and tools',
      type: 'constructionSoftwareTools',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    banner: {
      eyebrow: 'Ark Simplify Construction',
      title: 'Ark Simplify Construction',
      titleAccent: 'Construction',
    },
    overview: {
      eyebrow: 'Core Services',
      title:
        'Ark Simplify Construction supports manufacturers, general contractors, and subcontractors with three core operational services.',
      services: ['Estimating', 'Detailing', 'Project Management Support'],
      scopeEyebrow: 'Engagement Scope',
      scopeParagraphs: [
        'These services address different phases of a project lifecycle, from pre-bid analysis to post-award coordination and ongoing project execution.',
        'While the service categories remain consistent, the depth and nature of engagement varies by client type. Our role is to strengthen internal capabilities, reduce operational friction, and help project teams make better decisions with reliable information.',
      ],
    },
    estimating: {
      title: 'Estimating services',
      description:
        'Estimating sits at the center of every successful project. Ark supports clients with structured quantity analysis, cost evaluation, and bid verification to ensure decisions are based on accurate and comparable information.',
      panelTitle: 'Estimating services for',
      workflowLabel: 'Estimating Workflow',
      tabs: [
        {
          _key: 'subcontractors',
          value: {current: 'subcontractors'},
          trigger: 'Subcontractors',
          title: 'Estimating for Subcontractors',
          imageAlt: 'Subcontractor estimating services',
          points: [
            'Detailed quantity take-offs',
            'Full cost estimation and bid preparation',
            'Vendor outreach and pricing based on client preferences',
            'Multiple vendor options for comparison',
            'Bid review discussions prior to submission',
            'Tender submission support',
            'Communication with the GC during the bidding phase',
          ],
          summary:
            'This model allows subcontractors to focus on winning and executing work while maintaining strong bid discipline and documentation.',
        },
        {
          _key: 'general-contractors',
          value: {current: 'general-contractors'},
          trigger: 'General Contractors',
          title: 'Estimating for General Contractors',
          imageAlt: 'General contractor estimating services',
          points: [
            'Cross-trade quantity verification',
            'Review of subcontractor proposals',
            'Bid leveling across competing subcontractors',
            'Identification of scope gaps and specification deviations',
            'Review of assumptions, exclusions, and compliance',
            'Support during subcontractor clarification queries',
          ],
          summary:
            'The goal is simple. Help GCs compare bids accurately and select subcontractors based on reliable information.',
        },
        {
          _key: 'manufacturers',
          value: {current: 'manufacturers'},
          trigger: 'Manufacturers',
          title: 'Estimating for Manufacturers',
          imageAlt: 'Manufacturer estimating services',
          points: [
            'Quantity estimation where required',
            'Purchase order review and verification',
            'Inventory planning inputs',
            'Coordination with GCs & Subcontractors regarding supply requirements',
          ],
          summary:
            'This ensures material commitments align with actual project demand.',
        },
      ],
    },
    detailing: {
      eyebrow: 'Detailing Services',
      title: 'Detailing services',
      description:
        'Detailing is provided exclusively for subcontractors as a post-award mitigation and accuracy assurance service.',
      infoBlocks: [
        {
          _key: 'when-it-starts',
          label: 'When it starts',
          text: 'Once a project is awarded, Ark supports subcontractors in preparing construction-ready documentation for the next phase of execution.',
        },
        {
          _key: 'why-it-matters',
          label: 'Why it matters',
          text: 'The focus is to ensure fabrication, installation, and shipment proceed with 99.9%-100% accuracy before work reaches the field.',
        },
      ],
      scopeLabel: 'Our detailing scope includes',
      scopePoints: [
        'Verification of estimating outputs after award',
        'Constructability checks before fabrication or installation',
        'Coordination validation across project drawings',
        'Accuracy checks prior to site execution',
      ],
      summary:
        'The objective is to achieve near-perfect accuracy before work reaches the field, reducing rework, delays, and cost escalation.',
      imageAlt: 'Construction detailing services',
    },
    projectSupport: {
      titleStart: 'Project management',
      highlightedTitle: 'support',
      tagline:
        'Operational support that keeps execution structured, visible, and moving.',
      description:
        'Ark provides operational project management support across manufacturers, general contractors, & subcontractors. This service focuses on maintaining structure and visibility across the execution phase of a project.',
      supportLabel: 'Core support areas include',
      supportPoints: [
        'Project scheduling and milestone tracking',
        'Delivery and logistics coordination',
        'Compliance tracking and documentation',
        'Progress reporting and communication',
      ],
      onboardingLabel: 'Onboarding approach',
      onboardingText:
        "Each engagement begins with a short onboarding phase to align tools, workflows, and reporting expectations with the client's team. This allows Ark's project managers to integrate quickly and support project execution without disrupting existing processes.",
      imageAlt: 'Construction project management support',
    },
    audiences: {
      eyebrow: 'Who We Work With',
      title: 'Who we work with',
      audiences: [
        {
          _key: 'general-contractors',
          title: 'General Contractors',
          icon: 'building',
          imageAlt: 'General contractors',
          paragraphs: [
            'Ark helps GCs manage the complexity of bid evaluation and project coordination.',
            'By verifying quantities, leveling bids, and reviewing subcontractor proposals, we provide GCs with clear, structured comparisons that support confident decision-making during the tender stage.',
            'During project execution, Ark supports coordination and reporting to maintain alignment across trades and vendors.',
          ],
        },
        {
          _key: 'subcontractors',
          title: 'Subcontractors',
          icon: 'wrench',
          imageAlt: 'Subcontractors',
          paragraphs: [
            'For subcontractors, Ark acts as an operational extension of the internal team.',
          ],
          points: [
            'Complete bid preparation and estimating',
            'Post-award detailing and accuracy verification',
            'Coordination support during project execution',
          ],
          summary:
            'This enables subcontractors to scale their bidding capacity while maintaining disciplined project documentation and execution readiness.',
        },
        {
          _key: 'manufacturers',
          title: 'Manufacturers',
          icon: 'factory',
          imageAlt: 'Manufacturers',
          paragraphs: [
            'Manufacturers operate at the intersection of supply, procurement, and project timelines.',
            'Ark supports manufacturers with:',
          ],
          points: [
            'Quantity estimation and demand alignment',
            'Purchase order verification',
            'Inventory planning inputs',
            'Coordination with project stakeholders',
          ],
          summary:
            'The goal is to ensure material commitments, supply schedules, and project requirements remain aligned throughout the project lifecycle.',
        },
      ],
    },
    workflowFit: {
      eyebrow: 'Workflow Fit',
      title: 'How Ark fits into your workflow',
      lead: 'Ark Simplify Construction works alongside your existing team, supporting the operational work that often slows projects down.',
      paragraphs: [
        'Our role is to assist with estimating verification, detailing accuracy, and project coordination so your team can stay focused on decisions, relationships, and execution.',
        'By handling the structured analytical and coordination tasks behind the scenes, we help project teams move forward with better visibility and fewer operational gaps.',
      ],
    },
    caseStudies: {
      title: 'Case Studies',
      description:
        'Case studies from construction support delivered around real team workflows.',
      ctaLabel: 'View Full Case Study',
      items: [
        {
          _key: 'bid-verification',
          title: 'Bid Verification for Multi-Trade Scope',
          description:
            'Structured quantity checks and proposal comparisons helped the project team evaluate bids with more confidence before award.',
          imageAlt: 'Bid verification for multi-trade scope',
        },
        {
          _key: 'detailing-support',
          title: 'Detailing Support After Award',
          description:
            'Post-award documentation support improved coordination accuracy before fabrication and installation moved forward.',
          imageAlt: 'Detailing support after award',
        },
        {
          _key: 'manufacturer-planning',
          title: 'Manufacturer Planning Alignment',
          description:
            'Demand review and purchase verification created stronger visibility between material commitments and project timelines.',
          imageAlt: 'Manufacturer planning alignment',
        },
        {
          _key: 'subcontractor-tender',
          title: 'Subcontractor Tender Preparation',
          description:
            'Complete estimating support helped the bidding team stay disciplined while preparing submissions across active opportunities.',
          imageAlt: 'Subcontractor tender preparation',
        },
        {
          _key: 'execution-coordination',
          title: 'Execution Coordination Across Teams',
          description:
            'Project tracking and reporting support reduced operational gaps and kept stakeholders aligned during delivery.',
          imageAlt: 'Execution coordination across teams',
        },
      ],
    },
    partners: {
      eyebrow: 'Partners & Clients',
      title: 'Partners and clients',
      description:
        'Ongoing relationships across project teams, supply-side partners, and construction operations that rely on structured support.',
      partners: [],
    },
    softwareTools: {
      eyebrow: 'Software & Tools',
      title: 'Software & Tools',
      description:
        'Industry-standard tools and platforms we use to deliver accurate estimating, detailing, and project support.',
      tools: [
        {
          _key: 'software-1',
          name: 'Construction software 1',
          imageAlt: 'Construction software 1',
        },
        {
          _key: 'software-2',
          name: 'Construction software 2',
          imageAlt: 'Construction software 2',
        },
        {
          _key: 'software-3',
          name: 'Construction software 3',
          imageAlt: 'Construction software 3',
        },
        {
          _key: 'software-4',
          name: 'Construction software 4',
          imageAlt: 'Construction software 4',
        },
        {
          _key: 'software-5',
          name: 'Construction software 5',
          imageAlt: 'Construction software 5',
        },
      ],
    },
  },
  preview: {
    prepare() {
      return {title: 'Construction page'}
    },
  },
})
