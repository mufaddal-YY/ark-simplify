import {defineField, defineType} from 'sanity'

export const jobOpening = defineType({
  name: 'jobOpening',
  title: 'Job opening',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment type',
      type: 'string',
      options: {
        list: ['Full-time', 'Part-time', 'Internship', 'Contract'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
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
      name: 'googleFormUrl',
      title: 'Google Form application link',
      type: 'url',
      description: 'Paste the Google Form link candidates should use to apply.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https'],
        }).custom((url) => {
          if (
            !url ||
            /^https:\/\/(docs\.google\.com\/forms|forms\.gle)\//.test(url)
          ) {
            return true
          }

          return 'Enter a Google Forms URL from docs.google.com/forms or forms.gle.'
        }),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      employmentType: 'employmentType',
      location: 'location',
    },
    prepare({title, employmentType, location}) {
      return {
        title,
        subtitle: `${employmentType} - ${location}`,
      }
    },
  },
})
