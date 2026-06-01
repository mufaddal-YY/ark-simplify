import {defineArrayMember, defineField, defineType} from 'sanity'

export const jobOpenings = defineType({
  name: 'jobOpenings',
  title: 'Job openings',
  type: 'document',
  fields: [
    defineField({
      name: 'jobs',
      title: 'Open roles',
      type: 'array',
      description: 'Add, remove, and reorder roles displayed on the careers section.',
      of: [defineArrayMember({type: 'jobOpening'})],
    }),
  ],
  initialValue: {
    jobs: [
      {
        _key: 'civil-engineer-fresher',
        title: 'Civil Engineer Fresher',
        employmentType: 'Full-time',
        location: 'Nagpur',
        description:
          'Support construction teams with site coordination, quantity checks, documentation, and day-to-day project execution.',
      },
      {
        _key: 'hr-interns',
        title: 'HR Interns',
        employmentType: 'Internship',
        location: 'Nagpur',
        description:
          'Assist with hiring coordination, candidate communication, employee records, and everyday people operations.',
      },
    ],
  },
  preview: {
    prepare() {
      return {title: 'Job openings'}
    },
  },
})
