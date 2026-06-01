import {defineArrayMember, defineField, defineType} from 'sanity'

const requiredImage = (name, title) =>
  defineField({
    name,
    title,
    type: 'image',
    options: {hotspot: true},
    validation: (Rule) => Rule.required(),
  })

const stringArray = (name, title) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [defineArrayMember({type: 'string'})],
    validation: (Rule) => Rule.required().min(1),
  })

export const financeBanner = defineType({
  name: 'financeBanner',
  title: 'Finance banner',
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
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const financeOverview = defineType({
  name: 'financeOverview',
  title: 'Finance overview',
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

export const financeService = defineType({
  name: 'financeService',
  title: 'Finance service',
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
          {title: 'Boxes', value: 'boxes'},
          {title: 'Clipboard list', value: 'clipboard-list'},
          {title: 'Bookkeeping', value: 'book-open-text'},
          {title: 'Receipt', value: 'receipt-text'},
        ],
        layout: 'radio',
      },
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
  ],
  preview: {
    select: {title: 'title', subtitle: 'description', media: 'image'},
  },
})

export const financeServices = defineType({
  name: 'financeServices',
  title: 'Finance services',
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
      name: 'items',
      title: 'Services',
      type: 'array',
      of: [defineArrayMember({type: 'financeService'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})

export const financePartners = defineType({
  name: 'financePartners',
  title: 'Finance partners',
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
      title: 'Partners',
      type: 'array',
      of: [defineArrayMember({type: 'clientLogo'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})

export const financeSoftwareTool = defineType({
  name: 'financeSoftwareTool',
  title: 'Finance software tool',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    requiredImage('logo', 'Logo'),
    defineField({
      name: 'alt',
      title: 'Logo alternative text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'name', media: 'logo'},
  },
})

export const financeSoftwareTools = defineType({
  name: 'financeSoftwareTools',
  title: 'Finance software tools',
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
      of: [defineArrayMember({type: 'financeSoftwareTool'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})

export const financePageSectionTypes = [
  financeBanner,
  financeOverview,
  financeServices,
  financeService,
  financePartners,
  financeSoftwareTools,
  financeSoftwareTool,
]
