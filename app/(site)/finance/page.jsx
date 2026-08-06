import FinanceBanner from "@/components/finance/finance-banner";
import FinanceOverview from "@/components/finance/finance-overview";
import FinanceServices from "@/components/finance/finance-services";
import FinancePartners from "@/components/finance/finance-partners";
import FinanceSoftwareTools from "@/components/finance/finance-software-tools";
import CTA_common from "@/components/common/CTA_common";
import {
  generateSeoMetadata,
  getFinancePage,
} from "@/sanity/fetch";

export const revalidate = 60;

export function generateMetadata() {
  return generateSeoMetadata("finance", { path: "/finance", revalidate });
}

export default async function FinancePage() {
  const financePage = await getFinancePage({ revalidate });

  return (
    <main className="flex-1">
      <FinanceBanner data={financePage?.banner} />
      <FinanceOverview data={financePage?.overview} />
      <FinanceServices data={financePage?.services} />
      <FinancePartners data={financePage?.partners} />
      <FinanceSoftwareTools data={financePage?.softwareTools} />
      <CTA_common />
    </main>
  );
}
