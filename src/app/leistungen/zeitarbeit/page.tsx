import { leistungen } from "@/data/leistungen";
import { LeistungPageLayout, generateLeistungMetadata } from "@/components/shared/LeistungPageLayout";

const data = leistungen.find((l) => l.slug === "zeitarbeit")!;
export const metadata = generateLeistungMetadata(data);
export default function ZeitarbeitPage() {
  return <LeistungPageLayout data={data} />;
}
