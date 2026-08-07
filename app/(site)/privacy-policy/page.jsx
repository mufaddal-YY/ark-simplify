import Link from 'next/link'

import PageBanner from '@/components/common/pageBanner'
import {defaultPrivacyPolicy} from '@/lib/privacy-policy-content'
import {buildSeoMetadata, getPrivacyPolicyPage} from '@/sanity/fetch'

export const revalidate = 60

function getPolicy(data) {
  return {
    ...defaultPrivacyPolicy,
    ...data,
    introduction: data?.introduction?.length
      ? data.introduction
      : defaultPrivacyPolicy.introduction,
    sections: data?.sections?.length ? data.sections : defaultPrivacyPolicy.sections,
    seo: {...defaultPrivacyPolicy.seo, ...data?.seo},
  }
}

export async function generateMetadata() {
  const policy = getPolicy(await getPrivacyPolicyPage({revalidate}))

  return buildSeoMetadata(policy.seo, {path: '/privacy-policy'})
}

function formatUpdatedDate(value) {
  const date = new Date(`${value}T00:00:00Z`)

  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(date)
}

function Paragraph({children}) {
  if (children.includes('admin@arksimplify.com')) {
    return (
      <p className="whitespace-pre-line text-[1.02rem] leading-8 text-brand-secondary/78">
        ARKSIMPLIFIQ Private Limited{`\n`}Email:{' '}
        <Link
          href="mailto:admin@arksimplify.com"
          className="font-semibold text-brand-primary underline decoration-brand-primary/30 underline-offset-4 hover:decoration-brand-primary"
        >
          admin@arksimplify.com
        </Link>
        {`\n`}Website:{' '}
        <Link
          href="https://www.arksimplify.com"
          className="font-semibold text-brand-primary underline decoration-brand-primary/30 underline-offset-4 hover:decoration-brand-primary"
        >
          www.arksimplify.com
        </Link>
      </p>
    )
  }

  return (
    <p className="text-[1.02rem] leading-8 text-brand-secondary/78">{children}</p>
  )
}

function PolicySection({section, number}) {
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
                <span>{item}</span>
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

export default async function PrivacyPolicyPage() {
  const policy = getPolicy(await getPrivacyPolicyPage({revalidate}))

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: policy.seo.metaTitle,
    description: policy.seo.metaDescription,
    url: 'https://www.arksimplify.com/privacy-policy',
    dateModified: policy.lastUpdated,
    isPartOf: {
      '@type': 'WebSite',
      name: 'ARK Simplify',
      url: 'https://www.arksimplify.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ARKSIMPLIFIQ Private Limited',
      url: 'https://www.arksimplify.com',
    },
  }

  return (
    <main className="flex-1 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />

      <PageBanner
        eyebrow="Privacy Policy"
        title={policy.title}
        titleAccent=""
        description={`Last Updated: ${formatUpdatedDate(policy.lastUpdated)}`}
        compact
      />

      <div className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <article className="mx-auto max-w-4xl">
          <div className="mb-12 space-y-5 rounded-2xl border border-brand-secondary/10 bg-brand-surface p-6 sm:p-8">
            {policy.introduction.map((paragraph) => (
              <Paragraph key={paragraph}>{paragraph}</Paragraph>
            ))}
          </div>

          <div className="space-y-10">
            {policy.sections.map((section, index) => (
              <PolicySection
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
