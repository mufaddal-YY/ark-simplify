import {fetchSanityDocument} from './utils'

export const privacyPolicyPageQuery = `*[_id == "privacyPolicyPage"][0]{
  title,
  lastUpdated,
  introduction,
  sections[]{
    _key,
    heading,
    paragraphs,
    items
  },
  seo{
    metaTitle,
    metaDescription,
    keywords,
    ogTitle,
    ogDescription,
    "ogImageUrl": ogImage.asset->url,
    "ogImageAlt": ogImage.alt
  }
}`

export function getPrivacyPolicyPage({revalidate = 60} = {}) {
  return fetchSanityDocument({
    query: privacyPolicyPageQuery,
    revalidate,
    tag: 'privacyPolicyPage',
    label: 'privacy policy page',
  })
}
