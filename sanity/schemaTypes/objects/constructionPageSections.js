import {defineArrayMember, defineField, defineType} from 'sanity'

const requiredImage = (name, title) =>
  defineField({
    name,
    title,
    type: 'image',
    options: {hotspot: true},
    validation: (Rule) => Rule.required(),
  })

const stringArray = (name, title, description) =>
  defineField({
    name,
    title,
    type: 'array',
    description,
    of: [defineArrayMember({type: 'string'})],
    validation: (Rule) => Rule.required().min(1),
  })

export const constructionBanner = defineType({
  name: 'constructionBanner',
  title: 'Construction banner',
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
      name: 'titleAccent',
      title: 'Highlighted title phrase',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
})

export const constructionOverview = defineType({
  name: 'constructionOverview',
  title: 'Construction overview',
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
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    stringArray('services', 'Core services'),
    defineField({
      name: 'scopeEyebrow',
      title: 'Scope eyebrow',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    stringArray('scopeParagraphs', 'Scope paragraphs'),
  ],
})

export const constructionEstimatingTab = defineType({
  name: 'constructionEstimatingTab',
  title: 'Estimating tab',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Tab value',
      type: 'slug',
      options: {source: 'trigger'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'trigger',
      title: 'Tab label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    requiredImage('image', 'Image'),
    defineField({
      name: 'imageAlt',
      title: 'Image alternative text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    stringArray('points', 'Points'),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'trigger', subtitle: 'title', media: 'image'},
  },
})

export const constructionEstimating = defineType({
  name: 'constructionEstimating',
  title: 'Estimating services',
  type: 'object',
  fields: [
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
      name: 'panelTitle',
      title: 'Panel title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'workflowLabel',
      title: 'Workflow label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tabs',
      title: 'Estimating tabs',
      type: 'array',
      of: [defineArrayMember({type: 'constructionEstimatingTab'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})

export const constructionInfoBlock = defineType({
  name: 'constructionInfoBlock',
  title: 'Information block',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'text'},
  },
})

export const constructionDetailing = defineType({
  name: 'constructionDetailing',
  title: 'Detailing services',
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
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'infoBlocks',
      title: 'Information blocks',
      type: 'array',
      of: [defineArrayMember({type: 'constructionInfoBlock'})],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'scopeLabel',
      title: 'Scope label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    stringArray('scopePoints', 'Scope points'),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    requiredImage('image', 'Image'),
    defineField({
      name: 'imageAlt',
      title: 'Image alternative text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const constructionProjectSupport = defineType({
  name: 'constructionProjectSupport',
  title: 'Project management support',
  type: 'object',
  fields: [
    defineField({
      name: 'titleStart',
      title: 'Title before highlight',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlightedTitle',
      title: 'Highlighted title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      rows: 2,
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
      name: 'supportLabel',
      title: 'Support areas label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    stringArray('supportPoints', 'Support areas'),
    defineField({
      name: 'onboardingLabel',
      title: 'Onboarding label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'onboardingText',
      title: 'Onboarding text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    requiredImage('image', 'Image'),
    defineField({
      name: 'imageAlt',
      title: 'Image alternative text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const constructionAudience = defineType({
  name: 'constructionAudience',
  title: 'Construction audience',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Building', value: 'building'},
          {title: 'Wrench', value: 'wrench'},
          {title: 'Factory', value: 'factory'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    requiredImage('image', 'Image'),
    defineField({
      name: 'imageAlt',
      title: 'Image alternative text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    stringArray('paragraphs', 'Paragraphs'),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {title: 'title', media: 'image'},
  },
})

export const constructionAudiences = defineType({
  name: 'constructionAudiences',
  title: 'Who we work with',
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
      name: 'audiences',
      title: 'Audiences',
      type: 'array',
      of: [defineArrayMember({type: 'constructionAudience'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})

export const constructionWorkflowFit = defineType({
  name: 'constructionWorkflowFit',
  title: 'Workflow fit',
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
      name: 'lead',
      title: 'Lead text',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    stringArray('paragraphs', 'Paragraphs'),
  ],
})

export const constructionCaseStudy = defineType({
  name: 'constructionCaseStudy',
  title: 'Construction case study',
  type: 'object',
  fields: [
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
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    requiredImage('image', 'Image'),
    defineField({
      name: 'imageAlt',
      title: 'Image alternative text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Case study link',
      type: 'string',
      description: 'Optional site path or external URL.',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'description', media: 'image'},
  },
})

export const constructionCaseStudies = defineType({
  name: 'constructionCaseStudies',
  title: 'Case studies',
  type: 'object',
  fields: [
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
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Case studies',
      type: 'array',
      of: [defineArrayMember({type: 'constructionCaseStudy'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})

export const constructionPartners = defineType({
  name: 'constructionPartners',
  title: 'Partners and clients',
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
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'partners',
      title: 'Partners and clients',
      type: 'array',
      of: [defineArrayMember({type: 'clientLogo'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})

export const constructionSoftwareTool = defineType({
  name: 'constructionSoftwareTool',
  title: 'Software tool',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    requiredImage('image', 'Logo or screenshot'),
    defineField({
      name: 'imageAlt',
      title: 'Image alternative text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})

export const constructionSoftwareTools = defineType({
  name: 'constructionSoftwareTools',
  title: 'Software and tools',
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
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tools',
      title: 'Software tools',
      type: 'array',
      of: [defineArrayMember({type: 'constructionSoftwareTool'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})

export const constructionPageSectionTypes = [
  constructionBanner,
  constructionOverview,
  constructionEstimating,
  constructionEstimatingTab,
  constructionInfoBlock,
  constructionDetailing,
  constructionProjectSupport,
  constructionAudiences,
  constructionAudience,
  constructionWorkflowFit,
  constructionCaseStudies,
  constructionCaseStudy,
  constructionPartners,
  constructionSoftwareTools,
  constructionSoftwareTool,
]
