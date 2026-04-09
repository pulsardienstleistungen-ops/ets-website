import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { buttonVariants } from "@/components/ui/Button";
import { leistungen } from "@/data/leistungen";

export const metadata: Metadata = {
  title: "Leistungen — Zeitarbeit, Werkverträge, On-Site-Management | ETS",
  description:
    "Personaldienstleistungen von ETS: Zeitarbeit, Werkverträge, Dienstverträge und On-Site-Management. Flexibel, zuverlässig, deutschlandweit verfügbar.",
};

const cardDescriptions: Record<string, string> = {
  zeitarbeit: "Qualifizierte Mitarbeiter auf Abruf — flexibel, AÜG-konform, sofort einsatzbereit.",
  werkvertraege: "Wir übernehmen Verantwortung für das Ergebnis. Fester Preis, feste Leistung.",
  dienstvertraege: "Laufende Personalbereitstellung mit festen Teams und planbaren Kosten.",
  "on-site-management": "Unser Koordinator steuert den Personaleinsatz direkt in Ihrem Betrieb.",
};

const cardTitles: Record<string, string> = {
  zeitarbeit: "Zeitarbeit & Arbeitnehmerüberlassung",
  werkvertraege: "Werkverträge",
  dienstvertraege: "Dienstverträge",
  "on-site-management": "On-Site-Management",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        title="Personaldienstleistungen, die Ihren Betrieb am Laufen halten."
        subtitle="Ob kurzfristiger Engpass oder langfristiger Bedarf — wir liefern die passende Lösung. Vier Leistungsbereiche, ein Ziel: Ihr Betrieb läuft."
      />

      {/* Service Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {leistungen.map((l) => (
              <SectionWrapper key={l.slug} variant="scaleIn">
                <Link
                  href={`/leistungen/${l.slug}`}
                  className="group block bg-white rounded-2xl p-8 border border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-400"
                >
                  <h2 className="font-heading font-bold text-xl text-charcoal group-hover:text-secondary transition-colors">
                    {cardTitles[l.slug]}
                  </h2>
                  <p className="mt-3 text-muted text-sm leading-relaxed">
                    {cardDescriptions[l.slug]}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-secondary text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Warum wechseln */}
      <section className="py-16 lg:py-24 bg-snow">
        <SectionWrapper className="max-w-3xl mx-auto px-6 md:px-8 xl:px-12 text-center">
          <h2 className="font-heading font-bold text-[1.75rem] lg:text-[2.5rem] text-charcoal leading-tight">
            Unzufrieden mit Ihrem Personaldienstleister?
          </h2>
          <p className="mt-5 text-muted text-base lg:text-lg leading-relaxed">
            Sie müssen nicht bei null anfangen. Wir übernehmen den Wechsel — reibungslos, ohne Ausfallzeiten. In einem kurzen Gespräch analysieren wir Ihren aktuellen Bedarf und stellen innerhalb weniger Tage ein abgestimmtes Team zusammen. Kein Risiko, kein Chaos — nur bessere Ergebnisse.
          </p>
          <div className="mt-8">
            <Link href="/kontakt" className={buttonVariants("secondary")}>
              Wechsel besprechen →
            </Link>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}
