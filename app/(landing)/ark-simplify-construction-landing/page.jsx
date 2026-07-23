import ConstructionLanding from "@/components/construction-landing/construction-landing";
import {
  constructionLandingFallback,
  mergeConstructionLandingContent,
} from "@/lib/construction-landing-content";
import {getConstructionLandingPage, getHomepage} from "@/sanity/fetch";
import {buildSeoMetadata} from "@/sanity/fetch/seo";
import {canonicalUrl, siteUrl} from "@/lib/site-url";

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
  const [data, homepage] = await Promise.all([
    getConstructionLandingPage({revalidate}),
    getHomepage({revalidate}),
  ]);
  const content = mergeConstructionLandingContent(data);
  const url = canonicalUrl("/ark-simplify-construction-landing");
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
      <ConstructionLanding
        content={content}
        stats={homepage?.statsSection}
        clientele={homepage?.clienteleSection}
        thankYouPath="/ark-simplify-construction-landing/thank-you"
      />
    </>
  );
}
