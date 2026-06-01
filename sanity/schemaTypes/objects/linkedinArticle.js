import {defineField, defineType} from 'sanity'

export const linkedinArticle = defineType({
  name: 'linkedinArticle',
  title: 'LinkedIn article',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Small label shown above the embedded post.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'embedUrl',
      title: 'LinkedIn embed URL',
      type: 'url',
      description:
        'Paste the direct LinkedIn embed URL, such as https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:123.',
      validation: (Rule) =>
        Rule.required().custom((url) => {
          if (!url || /^https:\/\/www\.linkedin\.com\/embed\//.test(url)) {
            return true
          }

          return 'Enter a LinkedIn embed URL beginning with https://www.linkedin.com/embed/.'
        }),
    }),
    defineField({
      name: 'height',
      title: 'Embed height',
      type: 'number',
      description: 'Iframe height in pixels. Use 620 unless a post needs less space.',
      initialValue: 620,
      validation: (Rule) => Rule.required().integer().min(300).max(1200),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'embedUrl',
    },
  },
})
