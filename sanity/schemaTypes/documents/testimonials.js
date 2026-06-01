import {defineArrayMember, defineField, defineType} from 'sanity'

export const testimonials = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
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
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Testimonials',
      type: 'array',
      description: 'Add, remove, and reorder homepage testimonials.',
      of: [defineArrayMember({type: 'testimonial'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  initialValue: {
    eyebrow: 'Testimonials',
    title: 'Success Stories.',
    description:
      'Appreciation and feedback drawn from client emails after project delivery, pricing updates, and estimating support engagements.',
    items: [
      {
        _key: 'mitchel-lazar',
        rating: 5,
        quote:
          'We have been working with Rohit and ARK for over 18 months. Rohit and his team are professional, responsive, hardworking and affordable. They are an integral part of our team and our growth. Without the ARK we would NOT have been able to keep growing at our current pace.',
        name: 'Mitchel Lazar',
        role: 'CEO at Rapid Door & Trim Corp.',
        initials: 'ML',
        accent: 'construction',
      },
      {
        _key: 'ken-diener',
        rating: 5,
        quote:
          'I have been working with the ARK team for 2+ years now and would recommend them for takeoff services. We have had our challenges but Rohit is always willing listen and work on a resolution to the challenges.',
        name: 'Ken Diener, DHT',
        role: 'Sales Manager for Doorwayz Unlimited',
        initials: 'KD',
        accent: 'primary',
      },
      {
        _key: 'tim-hunt',
        rating: 5,
        quote:
          'My team enjoyed working with Ark Simplify and they played a very important role in the success of our projects and the growth of our estimating department. I have no doubt they will be a great asset to any team.',
        name: 'Tim Hunt',
        role: 'President at Performance Door and Hardware',
        initials: 'TH',
        accent: 'finance',
      },
    ],
  },
  preview: {
    prepare() {
      return {
        title: 'Testimonials',
      }
    },
  },
})
