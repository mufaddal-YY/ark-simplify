import {defineArrayMember, defineField, defineType} from 'sanity'

export const contactMethod = defineType({
  name: 'contactMethod',
  title: 'Contact method',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Contact page label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footerLabel',
      title: 'Footer label',
      type: 'string',
      description: 'Optional alternative label used in the footer.',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Phone', value: 'phone'},
          {title: 'WhatsApp', value: 'whatsapp'},
          {title: 'Email', value: 'email'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Displayed value',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'string',
      description: 'Use a tel:, mailto:, or https:// link.',
      validation: (Rule) =>
        Rule.required().custom((href) => {
          if (!href || /^(tel:|mailto:|https:\/\/)/.test(href)) {
            return true
          }

          return 'Enter a tel:, mailto:, or https:// link.'
        }),
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'value'},
  },
})

export const officeLocation = defineType({
  name: 'officeLocation',
  title: 'Office location',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'string',
      description: 'Optional map URL or site path.',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'address'},
  },
})

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: ['LinkedIn', 'Instagram', 'Facebook', 'YouTube', 'X'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({scheme: ['https']}),
    }),
  ],
  preview: {
    select: {title: 'platform', subtitle: 'href'},
  },
})

export const enquiryFormContent = defineType({
  name: 'enquiryFormContent',
  title: 'Enquiry form content',
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
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'serviceOptions',
      title: 'Service options',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'submitLabel',
      title: 'Submit button label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const contactDetailTypes = [
  contactMethod,
  officeLocation,
  socialLink,
  enquiryFormContent,
]
