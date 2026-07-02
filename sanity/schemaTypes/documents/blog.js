import {defineArrayMember, defineField, defineType} from 'sanity'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arksimplify.com'

const isAbsoluteUrl = (value) => /^https?:\/\//.test(value)

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'SEO'},
    {name: 'settings', title: 'Settings'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().max(90),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Short summary used for blog cards and fallback SEO descriptions.',
      validation: (Rule) => Rule.required().max(170),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Describe the image for accessibility and image search.',
          validation: (Rule) => Rule.required().max(140),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
            annotations: [
              defineField({
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'string',
                    validation: (Rule) =>
                      Rule.required().custom((href) => {
                        if (!href || href.startsWith('/') || isAbsoluteUrl(href)) {
                          return true
                        }

                        return 'Enter a site path beginning with / or a full http(s) URL.'
                      }),
                  }),
                  defineField({
                    name: 'openInNewTab',
                    title: 'Open in new tab',
                    type: 'boolean',
                    initialValue: false,
                  }),
                ],
              }),
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              validation: (Rule) => Rule.required().max(140),
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              validation: (Rule) => Rule.max(180),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
      group: 'seo',
      description: 'Aim for 50-60 characters. Falls back to the blog title.',
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'Aim for 140-160 characters. Falls back to the excerpt.',
      validation: (Rule) => Rule.max(170),
    }),
    defineField({
      name: 'focusKeyword',
      title: 'Focus keyword',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: 'keywords',
      title: 'Additional keywords',
      type: 'array',
      group: 'seo',
      of: [defineArrayMember({type: 'string'})],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      group: 'seo',
      description: 'Optional override. Leave blank to use the generated blog URL.',
      validation: (Rule) =>
        Rule.custom((url) => {
          if (!url || isAbsoluteUrl(url)) {
            return true
          }

          return 'Enter a full http(s) URL.'
        }),
    }),
    defineField({
      name: 'ogImage',
      title: 'Social sharing image',
      type: 'image',
      group: 'seo',
      description: 'Optional Open Graph image. Falls back to the cover image.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          validation: (Rule) => Rule.max(140),
        }),
      ],
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from search engines',
      type: 'boolean',
      group: 'seo',
      initialValue: false,
    }),
    defineField({
      name: 'noFollow',
      title: 'Tell crawlers not to follow links',
      type: 'boolean',
      group: 'seo',
      initialValue: false,
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      group: 'settings',
      initialValue: 'ARK Simplify',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'settings',
      options: {
        list: [
          {title: 'Construction', value: 'construction'},
          {title: 'Finance', value: 'finance'},
          {title: 'Operations', value: 'operations'},
          {title: 'Estimating', value: 'estimating'},
          {title: 'Company', value: 'company'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'settings',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated at',
      type: 'datetime',
      group: 'settings',
      description: 'Set this when meaningful content changes after publishing.',
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading time',
      type: 'number',
      group: 'settings',
      description: 'Estimated reading time in minutes.',
      validation: (Rule) => Rule.required().integer().min(1).max(60),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured blog',
      type: 'boolean',
      group: 'settings',
      initialValue: false,
    }),
  ],
  initialValue: () => ({
    author: 'ARK Simplify',
    noIndex: false,
    noFollow: false,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  }),
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      media: 'coverImage',
      publishedAt: 'publishedAt',
    },
    prepare({title, slug, media, publishedAt}) {
      const date = publishedAt
        ? new Intl.DateTimeFormat('en', {dateStyle: 'medium'}).format(new Date(publishedAt))
        : 'Draft'

      return {
        title: title || 'Untitled blog',
        subtitle: slug ? `${siteUrl}/blog/${slug} - ${date}` : date,
        media,
      }
    },
  },
})
