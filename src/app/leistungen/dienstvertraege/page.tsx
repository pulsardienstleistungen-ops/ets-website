import { leistungen } from "@/data/leistungen";
import { LeistungPageLayout, generateLeistungMetadata } from "@/components/shared/LeistungPageLayout";

const data = leistungen.find((l) => l.slug === "dienstvertraege")!;
export const metadata = generateLeistungMetadata(data);
export default function DienstvertraegePage() {
  return <LeistungPageLayout data={data} />;
}
