import {defineField, defineType} from 'sanity'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'URL or path',
      type: 'string',
      description: 'Use a site path such as /contact-us or a full external URL.',
      validation: (Rule) =>
        Rule.required().custom((href) => {
          if (!href || href.startsWith('/') || /^https?:\/\//.test(href)) {
            return true
          }

          return 'Enter a site path beginning with / or a full http(s) URL.'
        }),
    }),
  ],
})
