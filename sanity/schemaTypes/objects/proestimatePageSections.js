import {defineArrayMember, defineField, defineType} from 'sanity'

export const proestimateBanner = defineType({
  name: 'proestimateBanner',
  title: 'ProEstimate banner',
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
  ],
})

export const proestimateDivision = defineType({
  name: 'proestimateDivision',
  title: 'ProEstimate division',
  type: 'object',
  fields: [
    defineField({
      name: 'number',
      title: 'Division number',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(1),
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
    defineField({
      name: 'items',
      title: 'Details',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image alternative text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'lead',
      media: 'image',
    },
  },
})

export const proestimateDivisions = defineType({
  name: 'proestimateDivisions',
  title: 'ProEstimate divisions',
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
    defineField({
      name: 'divisionEyebrow',
      title: 'Division card eyebrow',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'divisions',
      title: 'Divisions',
      type: 'array',
      description: 'Add, remove, and reorder the construction divisions.',
      of: [defineArrayMember({type: 'proestimateDivision'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})

export const proestimatePageSectionTypes = [
  proestimateBanner,
  proestimateDivisions,
  proestimateDivision,
]
