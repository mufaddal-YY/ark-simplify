import {defineArrayMember, defineField, defineType} from 'sanity'

export const headCodeSettings = defineType({
  name: 'headCodeSettings',
  title: 'Head code',
  type: 'document',
  fields: [
    defineField({
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'codeBlocks',
      title: 'Code blocks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'enabled',
              title: 'Enabled',
              type: 'boolean',
              initialValue: true,
            }),
            defineField({
              name: 'scriptStrategy',
              title: 'Script strategy',
              type: 'string',
              initialValue: 'afterInteractive',
              options: {
                layout: 'radio',
                list: [
                  {title: 'After interactive', value: 'afterInteractive'},
                  {title: 'Before interactive', value: 'beforeInteractive'},
                  {title: 'Lazy onload', value: 'lazyOnload'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'code',
              title: 'Head code',
              type: 'text',
              rows: 10,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              enabled: 'enabled',
              code: 'code',
            },
            prepare({title, enabled, code}) {
              return {
                title,
                subtitle: `${enabled === false ? 'Disabled' : 'Enabled'}${
                  code ? ` - ${code.slice(0, 60)}` : ''
                }`,
              }
            },
          },
        }),
      ],
      initialValue: [],
    }),
  ],
  initialValue: {
    enabled: true,
    codeBlocks: [],
  },
  preview: {
    prepare() {
      return {title: 'Head code'}
    },
  },
})
