import { leistungen } from "@/data/leistungen";
import { LeistungPageLayout, generateLeistungMetadata } from "@/components/shared/LeistungPageLayout";

const data = leistungen.find((l) => l.slug === "werkvertraege")!;
export const metadata = generateLeistungMetadata(data);
export default function WerkvertraegePage() {
  return <LeistungPageLayout data={data} />;
}
