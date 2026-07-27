import ConstructionLanding from "@/components/construction-landing/construction-landing";
import {
  financeLandingFallback,
  financeLandingStats,
  mergeFinanceLandingContent,
} from "@/lib/finance-landing-content";
import {getFinanceLandingPage, getHomepage} from "@/sanity/fetch";
import {buildSeoMetadata} from "@/sanity/fetch/seo";
import {canonicalUrl, siteUrl} from "@/lib/site-url";

export const revalidate = 60;

export async function generateMetadata() {
  const data = await getFinanceLandingPage({revalidate});
  const seo = {...data?.seo, ...financeLandingFallback.seo};
  const metadata = buildSeoMetadata(seo, {
    path: "/finance-experts",
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

export default async function ArkSimplifyFinanceLandingPage() {
  const [data, homepage] = await Promise.all([
    getFinanceLandingPage({revalidate}),
    getHomepage({revalidate}),
  ]);
  const content = mergeFinanceLandingContent(data);
  const url = canonicalUrl("/finance-experts");
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free inventory stock report",
    description: content.seo.metaDescription,
    provider: {
      "@type": "Organization",
      name: "ARK Simplify Finance",
      url: siteUrl,
    },
    areaServed: "United States",
    serviceType: "Inventory management and operational support",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      url,
      description:
        "A complimentary inventory review with a stock report delivered within three business days.",
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
        topbarText="Get 2 Weeks of Free Service"
        stats={financeLandingStats}
        clientele={homepage?.clienteleSection}
        thankYouPath="/finance-experts/thank-you"
        theme={{
          accent: "#00b920",
          accentDark: "#007f16",
          accentLight: "#59d66f",
          accentSoft: "#eaf8ed",
          shadow: "rgba(0, 185, 32, 0.24)",
          shadowSoft: "rgba(0, 185, 32, 0.12)",
          shadowStrong: "rgba(0, 127, 22, 0.34)",
          logoSrc: "/logo_finance.png",
          footerLogoSrc: "/logo_finance.png",
          logoAlt: "ARK Simplify Finance",
        }}
      />
    </>
  );
}
