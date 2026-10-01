import LegalDocument from '@/components/common/legal-document'
import {defaultTermsOfService} from '@/lib/terms-content'
import {buildSeoMetadata} from '@/sanity/fetch'

export async function generateMetadata() {
  return buildSeoMetadata(defaultTermsOfService.seo, {path: '/terms'})
}

export default function TermsOfServicePage() {
  return (
    <LegalDocument
      eyebrow="Terms of Service"
      path="/terms"
      content={defaultTermsOfService}
    />
  )
}
