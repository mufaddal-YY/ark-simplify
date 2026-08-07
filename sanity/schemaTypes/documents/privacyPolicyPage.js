import {defineArrayMember, defineField, defineType} from 'sanity'

import {defaultPrivacyPolicy} from '../../../lib/privacy-policy-content'

export const privacyPolicyPage = defineType({
  name: 'privacyPolicyPage',
  title: 'Privacy policy page',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'SEO & social'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last updated',
      type: 'date',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      group: 'content',
      of: [defineArrayMember({type: 'text', rows: 4})],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'sections',
      title: 'Policy sections',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          name: 'privacyPolicySection',
          title: 'Policy section',
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'paragraphs',
              title: 'Paragraphs',
              type: 'array',
              of: [defineArrayMember({type: 'text', rows: 4})],
            }),
            defineField({
              name: 'items',
              title: 'Bullet points',
              type: 'array',
              of: [defineArrayMember({type: 'text', rows: 2})],
            }),
          ],
          preview: {
            select: {title: 'heading'},
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'seo',
      title: 'SEO and Open Graph',
      type: 'object',
      group: 'seo',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta title',
          type: 'string',
          validation: (Rule) => Rule.required().max(70),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required().max(170),
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
        }),
        defineField({name: 'ogTitle', title: 'Open Graph title', type: 'string'}),
        defineField({
          name: 'ogDescription',
          title: 'Open Graph description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: 'ogImage',
          title: 'Open Graph image',
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', title: 'Alternative text', type: 'string'}),
          ],
        }),
      ],
    }),
  ],
  initialValue: defaultPrivacyPolicy,
  preview: {
    prepare() {
      return {title: 'Privacy policy page'}
    },
  },
})
