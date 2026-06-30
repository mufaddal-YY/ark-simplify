import ProEstimateBanner from "@/components/proestimate/proestimate-banner";
import ProEstimateDivisions from "@/components/proestimate/proestimate-divisions";
import { generateSeoMetadata, getProestimatePage } from "@/sanity/fetch";

export const revalidate = 60;

export function generateMetadata() {
  return generateSeoMetadata("proestimate", {
    path: "/proestimate",
    revalidate,
  });
}

export default async function ProEstimatePage() {
  const proestimatePage = await getProestimatePage({ revalidate });

  return (
    <main className="flex-1">
      <ProEstimateBanner data={proestimatePage?.banner} />
      <ProEstimateDivisions data={proestimatePage?.divisionsSection} />
    </main>
  );
}
