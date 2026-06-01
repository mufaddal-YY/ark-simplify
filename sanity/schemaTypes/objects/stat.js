import {defineField, defineType} from 'sanity'

export const stat = defineType({
  name: 'stat',
  title: 'Stat',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).integer(),
    }),
    defineField({
      name: 'prefix',
      title: 'Prefix',
      type: 'string',
      description: 'Optional text shown before the value, such as $.',
    }),
    defineField({
      name: 'suffix',
      title: 'Suffix',
      type: 'string',
      description: 'Optional text shown after the value, such as hrs or m.',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'microLabel',
      title: 'Supporting text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      value: 'value',
      prefix: 'prefix',
      suffix: 'suffix',
    },
    prepare({title, value, prefix = '', suffix = ''}) {
      return {
        title,
        subtitle: `${prefix}${value ?? 0}${suffix}`,
      }
    },
  },
})
