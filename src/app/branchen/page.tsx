import type { Metadata } from "next";
import Link from "next/link";
import {
  Package, Factory, Recycle, Wrench, Car, Hammer, HardHat, UtensilsCrossed, Building2,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { buttonVariants } from "@/components/ui/Button";
import { content } from "@/data/content";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Branchen — Fachkräfte für jede Branche | ETS",
  description:
    "ETS liefert Personal für Logistik, Produktion, Entsorgung, Industrie, Automotive, Bau und mehr. Sofort einsatzbereit, deutschlandweit.",
};

const branchenData: { name: string; icon: LucideIcon; beschreibung: string; beispiele: string[] }[] = [
  { name: "Logistik & Lager", icon: Package, beschreibung: "Staplerfahrer, Kommissionierer, Lagerhelfer, Verpacker — sofort verfügbar für Ihren Lagerbetrieb.", beispiele: ["Staplerfahrer", "Kommissionierer", "Lagerhelfer", "Verpacker"] },
  { name: "Produktion", icon: Factory, beschreibung: "Produktionshelfer, Maschinenführer, Schweißer — für Fertigungslinien und Serienmontage.", beispiele: ["Produktionshelfer", "Maschinenführer", "Schweißer (MIG/MAG)"] },
  { name: "Entsorgung & Recycling", icon: Recycle, beschreibung: "Sortierer, Fahrer, Helfer — für Wertstoffhöfe, Sortieranlagen und kommunale Entsorgung.", beispiele: ["Sortierer", "Fahrer für Müllfahrzeuge", "Helfer"] },
  { name: "Industrie", icon: Wrench, beschreibung: "Facharbeiter und Helfer für industrielle Fertigung, Montage und Qualitätsprüfung.", beispiele: ["Montagehelfer", "Facharbeiter", "Qualitätsprüfer"] },
  { name: "Automotive", icon: Car, beschreibung: "Reifenmonteure, Montagehelfer, Facharbeiter für die Automobilindustrie.", beispiele: ["Reifenmonteure", "Montagehelfer", "Facharbeiter"] },
  { name: "Handwerk", icon: Hammer, beschreibung: "Qualifizierte Helfer und Fachkräfte für handwerkliche Betriebe aller Art.", beispiele: ["Helfer", "Fachkräfte"] },
  { name: "Bauwesen", icon: HardHat, beschreibung: "Bauhelfer und Facharbeiter für Baustellen und Bauunternehmen.", beispiele: ["Bauhelfer", "Facharbeiter"] },
  { name: "Lebensmittel", icon: UtensilsCrossed, beschreibung: "Helfer in Verarbeitung, Sortierung und Verpackung für die Lebensmittelindustrie.", beispiele: ["Verpackungshelfer", "Sortierer", "Verarbeitungshelfer"] },
  { name: "Kommunale Dienste", icon: Building2, beschreibung: "Personal für Grünpflege, Straßenreinigung, Winterdienst und kommunale Aufgaben.", beispiele: ["Grünpfleger", "Straßenreiniger", "Winterdiensthelfer"] },
];

export default function BranchenPage() {
  return (
    <>
      <PageHero
        title="Für Ihre Branche die passenden Fachkräfte."
        subtitle="Ob Lager, Fertigung oder Entsorgung — wir kennen die Anforderungen Ihrer Branche und liefern Mitarbeiter, die sofort einsetzbar sind."
      />

      <section className="py-16 lg:py-24 bg-white" aria-labelledby="branchen-grid-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
          <h2 id="branchen-grid-heading" className="sr-only">Alle Branchen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {branchenData.map((b) => (
              <SectionWrapper key={b.name} variant="scaleIn">
                <article className="bg-white rounded-2xl p-8 border border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-400 h-full">
                  <div className="w-12 h-12 rounded-xl bg-ice flex items-center justify-center mb-5">
                    <b.icon className="w-6 h-6 text-secondary" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-charcoal">{b.name}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{b.beschreibung}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {b.beispiele.map((ex) => (
                      <span key={ex} className="bg-ice text-secondary text-xs font-medium px-2.5 py-1 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </article>
              </SectionWrapper>
            ))}
          </div>
          <SectionWrapper className="mt-14 text-center">
            <Link href="/kontakt" className={buttonVariants("primary")}>
              Personal für Ihre Branche anfragen
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}
