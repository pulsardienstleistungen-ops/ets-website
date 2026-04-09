import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Karriere bei ETS — Jobs in Deutschland mit fairen Bedingungen",
  description:
    "Arbeit in Deutschland bei ETS: fester Vertrag, ordentliche Unterkunft, Fahrerdienst, pünktliche Bezahlung. Jetzt bewerben — in Ihrer Sprache.",
};

const vorteile = [
  "Fester Arbeitsvertrag — keine Tageslöhne, keine Unsicherheit",
  "Ordentliche Unterkünfte — keine Massenquartiere",
  "Eigener Fahrerdienst — wir bringen Sie zur Arbeit und zurück",
  "Persönlicher Ansprechpartner — in Ihrer Sprache",
  "Pünktliche Bezahlung — immer",
];

export default function KarrierePage() {
  return (
    <>
      <PageHero
        title="Arbeit in Deutschland. Faire Bedingungen. Echter Respekt."
        subtitle="Bei ETS sind Sie nicht nur eine Personalnummer. Wir sorgen dafür, dass Sie gut arbeiten können — und gut leben. Das ist unser Grundsatz, seit über 15 Jahren."
      />

      <section className="py-16 lg:py-24 bg-white">
        <SectionWrapper className="max-w-3xl mx-auto px-6 md:px-8 xl:px-12">
          <h2 className="font-heading font-bold text-[1.75rem] lg:text-[2.5rem] text-charcoal leading-tight mb-8">
            Ihre Vorteile bei ETS
          </h2>
          <ul className="space-y-4">
            {vorteile.map((v, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-1 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-success" aria-hidden="true" />
                </span>
                <span className="text-content text-base lg:text-lg leading-relaxed">{v}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link href="/kontakt" className={buttonVariants("primary")}>
              Jetzt bewerben
            </Link>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}
