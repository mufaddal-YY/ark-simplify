import Link from 'next/link'

import PageBanner from '@/components/common/pageBanner'

// Shared layout for legal pages (Privacy Policy, Terms of Service) so they
// render identically. Content is plain strings; paragraphs and bullet items
// support minimal inline-link markup: "[label](/path)", "[label](#anchor)",
// "[label](mailto:...)", "[label](tel:...)" or "[label](https://...)".

const siteOrigin = 'https://www.arksimplify.com'

const paragraphClassName = 'text-[1.02rem] leading-8 text-brand-secondary/78'

export const legalLinkClassName =
  'font-semibold text-brand-primary underline decoration-brand-primary/30 underline-offset-4 hover:decoration-brand-primary'

const inlineLinkPattern = /\[([^\]\n]+)\]\(([^)\s]+)\)/g

// Only allow internal paths, in-page anchors and safe schemes, so CMS-edited
// content can never inject javascript: or other unexpected URLs.
const allowedHrefPattern = /^(\/(?!\/)|#|mailto:|tel:|https:\/\/)/

export function formatUpdatedDate(value) {
  const date = new Date(`${value}T00:00:00Z`)

  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(date)
}

export function RichText({text}) {
  if (typeof text !== 'string') return text ?? null

  const nodes = []
  let lastIndex = 0

  for (const match of text.matchAll(inlineLinkPattern)) {
    const [markup, label, href] = match

    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index))

    nodes.push(
      allowedHrefPattern.test(href) ? (
        <Link
          key={`${match.index}-${href}`}
          href={href}
          className={legalLinkClassName}
        >
          {label}
        </Link>
      ) : (
        label
      ),
    )

    lastIndex = match.index + markup.length
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))

  return nodes
}

export function Paragraph({children}) {
  const isMultiline = typeof children === 'string' && children.includes('\n')
  const className = isMultiline
    ? `whitespace-pre-line ${paragraphClassName}`
    : paragraphClassName

  return (
    <p className={className}>
      <RichText text={children} />
    </p>
  )
}

export function LegalSection({section, number}) {
  const paragraphs = section.paragraphs ?? []
  const items = section.items ?? []
  const leadingParagraph = items.length ? paragraphs[0] : null
  const remainingParagraphs = items.length ? paragraphs.slice(1) : paragraphs

  return (
    <section
      id={section._key}
      aria-labelledby={`${section._key}-heading`}
      className="scroll-mt-28 border-t border-brand-secondary/10 pt-9"
    >
      <div className="mb-4 flex items-start gap-4">
        <span className="mt-0.5 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-brand-primary/10 px-2 text-sm font-bold text-brand-primary">
          {number}
        </span>
        <h2
          id={`${section._key}-heading`}
          className="text-2xl font-bold tracking-tight text-brand-secondary sm:text-[1.7rem]"
        >
          {section.heading}
        </h2>
      </div>

      <div className="space-y-4 pl-0 sm:pl-12">
        {leadingParagraph ? <Paragraph>{leadingParagraph}</Paragraph> : null}
        {items.length ? (
          <ul className="space-y-3" role="list">
            {items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[1.02rem] leading-8 text-brand-secondary/78"
              >
                <span
                  aria-hidden="true"
                  className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"
                />
                <span>
                  <RichText text={item} />
                </span>
              </li>
            ))}
          </ul>
        ) : null}
        {remainingParagraphs.map((paragraph) => (
          <Paragraph key={paragraph}>{paragraph}</Paragraph>
        ))}
      </div>
    </section>
  )
}

export function buildLegalStructuredData({seo, path, lastUpdated}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: seo?.metaTitle,
    description: seo?.metaDescription,
    url: `${siteOrigin}${path}`,
    dateModified: lastUpdated,
    isPartOf: {
      '@type': 'WebSite',
      name: 'ARK Simplify',
      url: siteOrigin,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ARKSIMPLIFIQ Private Limited',
      url: siteOrigin,
    },
  }
}

export default function LegalDocument({eyebrow, path, content}) {
  const introduction = content.introduction ?? []
  const sections = content.sections ?? []
  const structuredData = buildLegalStructuredData({
    seo: content.seo,
    path,
    lastUpdated: content.lastUpdated,
  })

  return (
    <main className="flex-1 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />

      <PageBanner
        eyebrow={eyebrow}
        title={content.title}
        titleAccent=""
        description={`Last Updated: ${formatUpdatedDate(content.lastUpdated)}`}
        compact
      />

      <div className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <article className="mx-auto max-w-4xl">
          {introduction.length ? (
            <div className="mb-12 space-y-5 rounded-2xl border border-brand-secondary/10 bg-brand-surface p-6 sm:p-8">
              {introduction.map((paragraph) => (
                <Paragraph key={paragraph}>{paragraph}</Paragraph>
              ))}
            </div>
          ) : null}

          <div className="space-y-10">
            {sections.map((section, index) => (
              <LegalSection
                key={section._key ?? section.heading}
                section={{
                  ...section,
                  _key: section._key ?? `section-${index + 1}`,
                }}
                number={index + 1}
              />
            ))}
          </div>
        </article>
      </div>
    </main>
  )
}
