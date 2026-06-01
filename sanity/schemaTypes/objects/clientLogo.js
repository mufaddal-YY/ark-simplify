import {defineField, defineType} from 'sanity'

export const clientLogo = defineType({
  name: 'clientLogo',
  title: 'Client logo',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Client name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Logo alternative text',
      type: 'string',
      description: 'Describe the logo for visitors using assistive technology.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Client website',
      type: 'url',
      description: 'Optional external link for the client.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'alt',
      media: 'logo',
    },
  },
})
