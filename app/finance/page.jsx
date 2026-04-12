import FinanceBanner from "@/components/finance/finance-banner";
import FinanceOverview from "@/components/finance/finance-overview";
import FinanceServices from "@/components/finance/finance-services";
import FinanceCaseStudies from "@/components/finance/finance-case-studies";
import FinancePartners from "@/components/finance/finance-partners";
import FinanceSoftwareTools from "@/components/finance/finance-software-tools";
import FinanceTestimonials from "@/components/finance/finance-testimonials";

export const metadata = {
  title: "Finance",
  description:
    "Finance and operational support across bookkeeping, procurement, inventory, and invoicing workflows for growing organizations.",
};

export default function FinancePage() {
  return (
    <main className="flex-1">
      <FinanceBanner />
      <FinanceOverview />
      <FinanceServices />
      <FinanceCaseStudies />
      <FinancePartners />
      <FinanceSoftwareTools />
      <FinanceTestimonials />
    </main>
  );
}
