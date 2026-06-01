import {defineArrayMember, defineField, defineType} from 'sanity'

export const industry = defineType({
  name: 'industry',
  title: 'Industry',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'accent',
      title: 'Color accent',
      type: 'string',
      options: {
        list: [
          {title: 'Construction red', value: 'construction'},
          {title: 'Finance green', value: 'finance'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'logoAlt',
      title: 'Logo alternative text',
      type: 'string',
      description: 'Describe the logo for visitors using assistive technology.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Industry page path',
      type: 'string',
      description: 'Use a site path such as /construction.',
      validation: (Rule) =>
        Rule.required().custom((href) => {
          if (!href || href.startsWith('/')) {
            return true
          }

          return 'Enter a site path beginning with /.'
        }),
    }),
    defineField({
      name: 'image',
      title: 'Feature image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageAlt',
      title: 'Feature image alternative text',
      type: 'string',
      description: 'Describe the feature image for visitors using assistive technology.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blurb',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'blurb',
      media: 'logo',
    },
  },
})
