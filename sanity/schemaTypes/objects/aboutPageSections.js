import {defineArrayMember, defineField, defineType} from 'sanity'

const stringArray = (name, title) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [defineArrayMember({type: 'string'})],
    validation: (Rule) => Rule.required().min(1),
  })

export const aboutBanner = defineType({
  name: 'aboutBanner',
  title: 'About banner',
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
  ],
})

export const aboutIntro = defineType({
  name: 'aboutIntro',
  title: 'About introduction',
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
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    stringArray('paragraphs', 'Paragraphs'),
  ],
})

export const aboutWhoWeAre = defineType({
  name: 'aboutWhoWeAre',
  title: 'Who we are',
  type: 'object',
  fields: [
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
})

export const aboutValueCard = defineType({
  name: 'aboutValueCard',
  title: 'About value card',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Optional category label, such as Vision or Mission.',
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
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Compass', value: 'compass'},
          {title: 'Rocket', value: 'rocket'},
          {title: 'Target', value: 'target'},
          {title: 'Badge check', value: 'badge-check'},
          {title: 'Layers', value: 'layers'},
          {title: 'Blocks', value: 'blocks'},
          {title: 'Handshake', value: 'handshake'},
          {title: 'Smile', value: 'smile'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'label',
    },
  },
})

export const aboutValues = defineType({
  name: 'aboutValues',
  title: 'About values',
  type: 'object',
  fields: [
    defineField({
      name: 'principles',
      title: 'Principles',
      type: 'array',
      description: 'Vision, mission, purpose, and any future principle cards.',
      of: [defineArrayMember({type: 'aboutValueCard'})],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'coreValuesTitle',
      title: 'Core values title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coreValues',
      title: 'Core values',
      type: 'array',
      of: [defineArrayMember({type: 'aboutValueCard'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})

export const aboutPageSectionTypes = [
  aboutBanner,
  aboutIntro,
  aboutWhoWeAre,
  aboutValues,
  aboutValueCard,
]
