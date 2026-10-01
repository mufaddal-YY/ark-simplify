import LegalDocument from '@/components/common/legal-document'
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

export default async function PrivacyPolicyPage() {
  const policy = getPolicy(await getPrivacyPolicyPage({revalidate}))

  return (
    <LegalDocument eyebrow="Privacy Policy" path="/privacy-policy" content={policy} />
  )
}
