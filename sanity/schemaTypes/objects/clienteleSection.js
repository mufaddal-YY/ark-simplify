import {defineArrayMember, defineField, defineType} from 'sanity'

export const clienteleSection = defineType({
  name: 'clienteleSection',
  title: 'Clientele section',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleStart',
      title: 'Title first line',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlightedTitle',
      title: 'Highlighted title line',
      type: 'string',
      description: 'This line uses the brand accent color.',
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
      name: 'supportingText',
      title: 'Supporting text',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'networkLabel',
      title: 'Logo grid label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logos',
      title: 'Client logos',
      type: 'array',
      description: 'Upload, remove, and reorder logos displayed in the carousel.',
      of: [defineArrayMember({type: 'clientLogo'})],
    }),
  ],
})
