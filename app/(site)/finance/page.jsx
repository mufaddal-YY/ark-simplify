import FinanceBanner from "@/components/finance/finance-banner";
import FinanceOverview from "@/components/finance/finance-overview";
import FinanceServices from "@/components/finance/finance-services";
import FinancePartners from "@/components/finance/finance-partners";
import FinanceSoftwareTools from "@/components/finance/finance-software-tools";
import CTA_common from "@/components/common/CTA_common";
import {
  generateSeoMetadata,
  getFinancePage,
  getSeoGroup,
} from "@/sanity/fetch";

export const revalidate = 60;

export function generateMetadata() {
  return generateSeoMetadata("finance", { path: "/finance", revalidate });
}

export default async function FinancePage() {
  const [financePage, seo] = await Promise.all([
    getFinancePage({ revalidate }),
    getSeoGroup("finance", { revalidate }),
  ]);
  const seoTitle = seo?.metaTitle?.trim();
  const titleAccent = financePage?.banner?.titleAccent;
  const banner = {
    ...financePage?.banner,
    title: seoTitle || financePage?.banner?.title,
    titleAccent: seoTitle ? "" : titleAccent,
    description:
      seo?.metaDescription?.trim() || financePage?.banner?.description,
  };

  return (
    <main className="flex-1">
      <FinanceBanner data={banner} />
      <FinanceOverview data={financePage?.overview} />
      <FinanceServices data={financePage?.services} />
      <FinancePartners data={financePage?.partners} />
      <FinanceSoftwareTools data={financePage?.softwareTools} />
      <CTA_common />
    </main>
  );
}
