import ConstructionLanding from "@/components/construction-landing/construction-landing";
import {
  financeLandingFallback,
  mergeFinanceLandingContent,
} from "@/lib/finance-landing-content";
import {getFinanceLandingPage} from "@/sanity/fetch";
import {buildSeoMetadata} from "@/sanity/fetch/seo";
import {canonicalUrl, siteUrl} from "@/lib/site-url";

export const revalidate = 60;

export async function generateMetadata() {
  const data = await getFinanceLandingPage({revalidate});
  const seo = {...financeLandingFallback.seo, ...data?.seo};
  const metadata = buildSeoMetadata(seo, {
    path: "/ark-simplify-finance-landing",
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
  const data = await getFinanceLandingPage({revalidate});
  const content = mergeFinanceLandingContent(data);
  const url = canonicalUrl("/ark-simplify-finance-landing");
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free bookkeeping health check",
    description: content.seo.metaDescription,
    provider: {
      "@type": "Organization",
      name: "ARK Simplify Finance",
      url: siteUrl,
    },
    areaServed: "United States",
    serviceType: "Bookkeeping and financial operations support",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      url,
      description:
        "A free books health check with a findings report in three business days.",
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
