import { leistungen } from "@/data/leistungen";
import { LeistungPageLayout, generateLeistungMetadata } from "@/components/shared/LeistungPageLayout";

const data = leistungen.find((l) => l.slug === "on-site-management")!;
export const metadata = generateLeistungMetadata(data);
export default function OnSiteManagementPage() {
  return <LeistungPageLayout data={data} />;
}
