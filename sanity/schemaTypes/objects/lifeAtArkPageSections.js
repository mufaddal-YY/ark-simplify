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

export const lifeAtArkBanner = defineType({
  name: 'lifeAtArkBanner',
  title: 'Life at Ark banner',
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

export const lifeAtArkIntro = defineType({
  name: 'lifeAtArkIntro',
  title: 'Life at Ark introduction',
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
    requiredImage('image', 'Image'),
    defineField({
      name: 'imageAlt',
      title: 'Image alternative text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const lifeAtArkGalleryImage = defineType({
  name: 'lifeAtArkGalleryImage',
  title: 'Gallery image',
  type: 'object',
  fields: [
    requiredImage('image', 'Image'),
    defineField({
      name: 'alt',
      title: 'Image alternative text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured image',
      type: 'boolean',
      description: 'Featured images use the larger gallery position.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'alt', media: 'image'},
  },
})

export const lifeAtArkGallery = defineType({
  name: 'lifeAtArkGallery',
  title: 'Life at Ark gallery',
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
      name: 'images',
      title: 'Gallery images',
      type: 'array',
      of: [defineArrayMember({type: 'lifeAtArkGalleryImage'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})

export const lifeAtArkCard = defineType({
  name: 'lifeAtArkCard',
  title: 'Life at Ark card',
  type: 'object',
  fields: [
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
          {title: 'Book', value: 'book'},
          {title: 'Badge check', value: 'badge-check'},
          {title: 'Users', value: 'users'},
          {title: 'Handshake', value: 'handshake'},
          {title: 'Trending up', value: 'trending-up'},
          {title: 'Scale', value: 'scale'},
          {title: 'Building', value: 'building'},
          {title: 'Trophy', value: 'trophy'},
          {title: 'Celebration', value: 'celebration'},
          {title: 'Location', value: 'location'},
          {title: 'Health', value: 'health'},
          {title: 'Network', value: 'network'},
          {title: 'Award', value: 'award'},
          {title: 'Discussion', value: 'discussion'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'description'},
  },
})

export const lifeAtArkWorkstyle = defineType({
  name: 'lifeAtArkWorkstyle',
  title: 'Life at Ark workstyle',
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
      name: 'cards',
      title: 'Workstyle cards',
      type: 'array',
      of: [defineArrayMember({type: 'lifeAtArkCard'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})

export const lifeAtArkCareers = defineType({
  name: 'lifeAtArkCareers',
  title: 'Life at Ark careers',
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
    stringArray('paragraphs', 'Paragraphs'),
    defineField({
      name: 'applyLabel',
      title: 'Apply button label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'applyHref',
      title: 'Apply button path',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const lifeAtArkBenefits = defineType({
  name: 'lifeAtArkBenefits',
  title: 'Life at Ark benefits',
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
      name: 'items',
      title: 'Benefits',
      type: 'array',
      of: [defineArrayMember({type: 'lifeAtArkCard'})],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'ctaEyebrow',
      title: 'CTA eyebrow',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA button label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA button path',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const lifeAtArkPageSectionTypes = [
  lifeAtArkBanner,
  lifeAtArkIntro,
  lifeAtArkGallery,
  lifeAtArkGalleryImage,
  lifeAtArkWorkstyle,
  lifeAtArkCard,
  lifeAtArkCareers,
  lifeAtArkBenefits,
]
