import {defineArrayMember, defineField, defineType} from 'sanity'

export const statsSection = defineType({
  name: 'statsSection',
  title: 'Stats section',
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
      name: 'resultsLabel',
      title: 'Results label',
      type: 'string',
      description: 'The small heading above the stat cards.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      description: 'Add, remove, and reorder the displayed results.',
      of: [defineArrayMember({type: 'stat'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
