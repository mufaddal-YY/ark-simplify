import ConstructionLanding from "@/components/construction-landing/construction-landing";
import {
  constructionLandingFallback,
  mergeConstructionLandingContent,
} from "@/lib/construction-landing-content";
import {getConstructionLandingPage} from "@/sanity/fetch";
import {buildSeoMetadata} from "@/sanity/fetch/seo";

export const revalidate = 60;

export async function generateMetadata() {
  const data = await getConstructionLandingPage({revalidate});
  const seo = {...constructionLandingFallback.seo, ...data?.seo};
  const metadata = buildSeoMetadata(seo, {
    path: "/ark-simplify-construction-landing",
  });

  return {
    ...metadata,
    robots: {
      index: !seo.noIndex,
      follow: !seo.noIndex,
      googleBot: {
        index: !seo.noIndex,
        follow: !seo.noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function ArkSimplifyConstructionLandingPage() {
  const data = await getConstructionLandingPage({revalidate});
  const content = mergeConstructionLandingContent(data);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arksimplify.com";
  const url = new URL("/ark-simplify-construction-landing", siteUrl).toString();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free construction sample takeoff",
    description: content.seo.metaDescription,
    provider: {
      "@type": "Organization",
      name: "ARK Simplify",
      url: siteUrl,
    },
    areaServed: "Worldwide",
    serviceType: "Construction estimating and quantity takeoff",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      url,
      description: "One free sample quantity takeoff with a 48-hour turnaround.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
      />
      <ConstructionLanding content={content} />
    </>
  );
}
