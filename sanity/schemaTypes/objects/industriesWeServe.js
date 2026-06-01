import {defineArrayMember, defineField, defineType} from 'sanity'

export const industriesWeServe = defineType({
  name: 'industriesWeServe',
  title: 'Industries we serve',
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
      name: 'industries',
      title: 'Industries',
      type: 'array',
      description: 'Add, remove, and reorder industries as the service offering grows.',
      of: [defineArrayMember({type: 'industry'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
