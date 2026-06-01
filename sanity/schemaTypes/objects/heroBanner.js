import {defineArrayMember, defineField, defineType} from 'sanity'

export const heroBanner = defineType({
  name: 'heroBanner',
  title: 'Hero banner',
  type: 'object',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
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
      description: 'This phrase uses the brand accent color.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEnd',
      title: 'Title after highlight',
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
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slides',
      title: 'Service slides',
      type: 'array',
      of: [defineArrayMember({type: 'heroSlide'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
