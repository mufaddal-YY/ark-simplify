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

export const aboutLeader = defineType({
  name: 'aboutLeader',
  title: 'Leadership member',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'imageAlt',
      title: 'Photo alternative text',
      type: 'string',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn profile URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({scheme: ['https']}).custom((url) => {
          if (!url || /^https:\/\/(www\.)?linkedin\.com\//.test(url)) {
            return true
          }

          return 'Enter a LinkedIn URL.'
        }),
    }),
    defineField({
      name: 'showLinkedin',
      title: 'Show LinkedIn button',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp number',
      type: 'string',
      description: 'Displayed number, such as +91 8668473798.',
    }),
    defineField({
      name: 'whatsappUrl',
      title: 'WhatsApp link',
      type: 'url',
      description: 'Use a wa.me link, such as https://wa.me/918668473798.',
      validation: (Rule) =>
        Rule.uri({scheme: ['https']}).custom((url) => {
          if (!url || /^https:\/\/wa\.me\//.test(url)) {
            return true
          }

          return 'Enter a WhatsApp wa.me URL.'
        }),
    }),
    defineField({
      name: 'showWhatsapp',
      title: 'Show WhatsApp button',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})

export const aboutLeadership = defineType({
  name: 'aboutLeadership',
  title: 'Leadership team',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
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
      name: 'members',
      title: 'Team members',
      type: 'array',
      of: [defineArrayMember({type: 'aboutLeader'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})

export const aboutProjectManagementTeam = defineType({
  name: 'aboutProjectManagementTeam',
  title: 'Project management team',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
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
      name: 'members',
      title: 'Team members',
      type: 'array',
      of: [defineArrayMember({type: 'aboutLeader'})],
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
  aboutLeader,
  aboutLeadership,
  aboutProjectManagementTeam,
]
