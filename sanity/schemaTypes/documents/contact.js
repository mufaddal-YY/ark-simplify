import {defineArrayMember, defineField, defineType} from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'bannerEyebrow',
      title: 'Banner eyebrow',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Banner title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eyebrow',
      title: 'Page eyebrow',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Page description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'directContactLabel',
      title: 'Direct contact heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactMethods',
      title: 'Contact methods',
      type: 'array',
      of: [defineArrayMember({type: 'contactMethod'})],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'offices',
      title: 'Office locations',
      type: 'array',
      of: [defineArrayMember({type: 'officeLocation'})],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'responseWindowLabel',
      title: 'Response window label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'responseWindowText',
      title: 'Response window text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      of: [defineArrayMember({type: 'socialLink'})],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'enquiryForm',
      title: 'Enquiry form',
      type: 'enquiryFormContent',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    bannerEyebrow: 'Contact Us',
    bannerTitle: 'Contact Us',
    eyebrow: "Let's Talk",
    title: 'Reach the team that keeps complex work moving.',
    description:
      "Tell us what support you're looking for and we'll route your enquiry to the right team across construction, finance, or ProEstimate services.",
    directContactLabel: 'Direct Contact',
    contactMethods: [
      {
        _key: 'us-contact',
        label: 'US Contact',
        footerLabel: 'ARK Finance (USA)',
        type: 'phone',
        value: '+1 (312) 380-0712',
        href: 'tel:+13123800712',
      },
      {
        _key: 'india-contact',
        label: 'India Contact',
        footerLabel: 'ARK Construction (India)',
        type: 'whatsapp',
        value: '+91 8668473798',
        href: 'https://wa.me/918668473798',
      },
      {
        _key: 'email',
        label: 'Email',
        type: 'email',
        value: 'info@arksimplify.com',
        href: 'mailto:info@arksimplify.com',
      },
    ],
    offices: [
      {
        _key: 'head-office',
        title: 'Head Office',
        address: 'Block 4, Gujar wada, Kothi road, Mahal, Nagpur - 440002',
        href: '/contact-us',
      },
      {
        _key: 'branch-office',
        title: 'Branch Office',
        address:
          '481, Second Floor, New Nandanvan Layout, Nandanvan, Nagpur, 440024',
        href: '/contact-us',
      },
    ],
    responseWindowLabel: 'Response Window',
    responseWindowText: 'We usually respond within one working day.',
    socialLinks: [
      {_key: 'linkedin', platform: 'LinkedIn', href: 'https://www.linkedin.com'},
      {_key: 'instagram', platform: 'Instagram', href: 'https://www.instagram.com'},
      {_key: 'facebook', platform: 'Facebook', href: 'https://www.facebook.com'},
    ],
    enquiryForm: {
      eyebrow: 'Send an Enquiry',
      title: 'Tell us what you need',
      description:
        'Share a few details and our team will follow up with the right next step.',
      serviceOptions: [
        'Construction Support',
        'Finance Support',
        'General Enquiry',
      ],
      submitLabel: 'Submit Enquiry',
    },
  },
  preview: {
    prepare() {
      return {title: 'Contact'}
    },
  },
})
