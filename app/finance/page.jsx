import FinanceBanner from "@/components/finance/finance-banner";
import FinanceOverview from "@/components/finance/finance-overview";
import FinanceServices from "@/components/finance/finance-services";
import FinancePartners from "@/components/finance/finance-partners";
import FinanceSoftwareTools from "@/components/finance/finance-software-tools";
import CTA_common from "@/components/common/CTA_common";

export const metadata = {
  title: "Finance",
  description:
    "Finance and operational support across inventory management, purchase order processing, bookkeeping, and AP/AR workflows for growing organizations.",
};

export default function FinancePage() {
  return (
    <main className="flex-1">
      <FinanceBanner />
      <FinanceOverview />
      <FinanceServices />
      <FinancePartners />
      <FinanceSoftwareTools />
      <CTA_common/>
    </main>
  );
}
