import {defineArrayMember, defineField, defineType} from 'sanity'

const keywordsField = () =>
  defineField({
    name: 'keywords',
    title: 'Keywords',
    type: 'array',
    of: [defineArrayMember({type: 'string'})],
  })

const seoField = (name, title, initialValue, group) =>
  defineField({
    name,
    title,
    type: 'object',
    group,
    options: {
      collapsible: false,
    },
    fields: [
      defineField({
        name: 'metaTitle',
        title: 'Meta title',
        type: 'string',
        description:
          'Used exactly as entered in the browser title and social metadata.',
        validation: (Rule) => Rule.required().max(70),
      }),
      defineField({
        name: 'metaDescription',
        title: 'Meta description',
        type: 'text',
        rows: 3,
        description:
          'Used as the page meta description and supporting social metadata.',
        validation: (Rule) => Rule.required().max(170),
      }),
      keywordsField(),
    ],
    initialValue,
    validation: (Rule) => Rule.required(),
  })

const rootSeo = {
  metaTitle: 'ARK Simplify',
  metaDescription:
    'ARK Simplify delivers construction, finance, and estimation support with streamlined workflows, practical execution, and dependable delivery.',
  keywords: [
    'ARK Simplify',
    'construction',
    'finance',
    'estimation',
    'proestimate',
    'business support',
    'outsourcing',
  ],
}

const pageSeoValues = {
  home: {
    metaTitle: 'ARK Simplify',
    metaDescription:
      'ARK Simplify delivers construction, finance, and estimation support with streamlined workflows, practical execution, and dependable delivery.',
    keywords: ['ARK Simplify', 'construction', 'finance', 'proestimate'],
  },
  about: {
    metaTitle: 'About Us',
    metaDescription:
      'Learn about Ark Simplify and the values behind how we support clients across construction, finance, and operations.',
    keywords: ['ARK Simplify about', 'construction support', 'finance support'],
  },
  construction: {
    metaTitle: 'Construction',
    metaDescription:
      'Construction support across estimating, detailing, and project management workflows for manufacturers, general contractors, and subcontractors.',
    keywords: ['construction estimating', 'detailing services', 'project management support'],
  },
  finance: {
    metaTitle: 'Finance',
    metaDescription:
      'Finance and operational support across inventory management, purchase order processing, bookkeeping, and AP/AR workflows for growing organizations.',
    keywords: ['finance support', 'bookkeeping', 'AP AR', 'inventory management'],
  },
  proestimate: {
    metaTitle: 'ProEstimate',
    metaDescription:
      'Professional ProEstimates designed to eliminate guesswork, control costs, and give projects a competitive edge across key construction divisions.',
    keywords: ['ProEstimate', 'construction divisions', 'construction estimates'],
  },
  lifeAtArk: {
    metaTitle: 'Life at ARK',
    metaDescription:
      'A closer look at life at Ark Simplify, how our teams work, and why this page also serves as a careers page for the company.',
    keywords: ['Life at ARK', 'ARK careers', 'job openings'],
  },
  contact: {
    metaTitle: 'Contact Us',
    metaDescription:
      'Get in touch with Ark Simplify for construction support, finance operations, ProEstimate services, and general business enquiries.',
    keywords: ['contact ARK Simplify', 'construction support enquiry', 'finance support enquiry'],
  },
}

export const seoSettings = defineType({
  name: 'seoSettings',
  title: 'SEO settings',
  type: 'document',
  groups: [
    {name: 'root', title: 'Root', default: true},
    {name: 'home', title: 'Homepage'},
    {name: 'about', title: 'About us'},
    {name: 'construction', title: 'Construction'},
    {name: 'finance', title: 'Finance'},
    {name: 'proestimate', title: 'ProEstimate'},
    {name: 'lifeAtArk', title: 'Life at ARK'},
    {name: 'contact', title: 'Contact'},
  ],
  fields: [
    seoField('root', 'Root SEO', rootSeo, 'root'),
    seoField('home', 'Homepage SEO', pageSeoValues.home, 'home'),
    seoField('about', 'About us SEO', pageSeoValues.about, 'about'),
    seoField('construction', 'Construction SEO', pageSeoValues.construction, 'construction'),
    seoField('finance', 'Finance SEO', pageSeoValues.finance, 'finance'),
    seoField('proestimate', 'ProEstimate SEO', pageSeoValues.proestimate, 'proestimate'),
    seoField('lifeAtArk', 'Life at ARK SEO', pageSeoValues.lifeAtArk, 'lifeAtArk'),
    seoField('contact', 'Contact SEO', pageSeoValues.contact, 'contact'),
  ],
  initialValue: {
    root: rootSeo,
    ...pageSeoValues,
  },
  preview: {
    prepare() {
      return {title: 'SEO settings'}
    },
  },
})
