import ProEstimateBanner from "@/components/proestimate/proestimate-banner";
import ProEstimateDivisions from "@/components/proestimate/proestimate-divisions";

export const metadata = {
  title: "ProEstimate",
  description:
    "Professional ProEstimates designed to eliminate guesswork, control costs, and give projects a competitive edge across key construction divisions.",
};

export default function ProEstimatePage() {
  return (
    <main className="flex-1">
      <ProEstimateBanner />
      <ProEstimateDivisions />
    </main>
  );
}
