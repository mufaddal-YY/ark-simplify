import {defineArrayMember, defineField, defineType} from 'sanity'

export const linkedinArticles = defineType({
  name: 'linkedinArticles',
  title: 'LinkedIn articles',
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
      name: 'postsLabel',
      title: 'Posts label',
      type: 'string',
      description: 'The small heading above the carousel.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyPostsUrl',
      title: 'LinkedIn company posts URL',
      type: 'url',
      description: 'Visitors are sent to this page when they open an embedded post.',
      validation: (Rule) =>
        Rule.required().custom((url) => {
          if (!url || /^https:\/\/(www\.)?linkedin\.com\//.test(url)) {
            return true
          }

          return 'Enter a LinkedIn URL.'
        }),
    }),
    defineField({
      name: 'articles',
      title: 'LinkedIn articles',
      type: 'array',
      description: 'Add, remove, and reorder LinkedIn embeds shown in the carousel.',
      of: [defineArrayMember({type: 'linkedinArticle'})],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  initialValue: {
    eyebrow: 'LinkedIn Articles',
    title: 'Latest thinking from ARK Simplify.',
    description:
      'Perspectives from our team on operational support, delivery systems, and the habits that help growing businesses work with more clarity.',
    postsLabel: 'Recent LinkedIn Posts',
    companyPostsUrl:
      'https://www.linkedin.com/company/arksquareconstructionservices/posts/?feedView=all',
    articles: [
      {
        _key: '7457009008499949568',
        label: 'Latest post',
        embedUrl:
          'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7457009008499949568',
        height: 620,
      },
      {
        _key: '7455193898248732672',
        label: 'Recent post',
        embedUrl:
          'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7455193898248732672',
        height: 620,
      },
      {
        _key: '7454437733948764160',
        label: 'Recent post',
        embedUrl:
          'https://www.linkedin.com/embed/feed/update/urn:li:share:7454437733948764160',
        height: 620,
      },
      {
        _key: '7452625448187924480',
        label: 'Recent post',
        embedUrl:
          'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7452625448187924480',
        height: 580,
      },
      {
        _key: '7451900508811988992',
        label: 'Recent post',
        embedUrl:
          'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7451900508811988992',
        height: 620,
      },
      {
        _key: '7450184230220775424',
        label: 'Recent post',
        embedUrl:
          'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7450184230220775424',
        height: 580,
      },
      {
        _key: '7450877157502787584',
        label: 'Recent post',
        embedUrl:
          'https://www.linkedin.com/embed/feed/update/urn:li:share:7450877157502787584',
        height: 620,
      },
      {
        _key: '7447597702583967744',
        label: 'Recent post',
        embedUrl:
          'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7447597702583967744',
        height: 620,
      },
    ],
  },
  preview: {
    prepare() {
      return {
        title: 'LinkedIn articles',
      }
    },
  },
})
