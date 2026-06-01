import {defineField, defineType} from 'sanity'

export const proestimatePage = defineType({
  name: 'proestimatePage',
  title: 'ProEstimate page',
  type: 'document',
  fields: [
    defineField({
      name: 'banner',
      title: 'Banner',
      type: 'proestimateBanner',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'divisionsSection',
      title: 'Divisions section',
      type: 'proestimateDivisions',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    banner: {
      eyebrow: 'ProEstimate',
      title: 'ProEstimate',
      titleAccent: 'ProEstimate',
    },
    divisionsSection: {
      eyebrow: 'Ark Simplify Construction',
      title:
        'Professional ProEstimates designed to eliminate guesswork, control costs, and give your project a competitive edge',
      divisionEyebrow: 'ProEstimate',
      divisions: [],
    },
  },
  preview: {
    prepare() {
      return {title: 'ProEstimate page'}
    },
  },
})
