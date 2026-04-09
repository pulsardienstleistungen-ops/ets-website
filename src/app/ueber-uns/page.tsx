import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Eye, Shield, Handshake } from "lucide-react";
import { PageHero, CTABlock } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { content } from "@/data/content";

export const metadata: Metadata = {
  title: "Über ETS — Personaldienstleister mit 15 Jahren Erfahrung",
  description:
    "ETS: 23 Standorte, über 1.000 Mitarbeiter, IZS-zertifiziert, AÜG-lizenziert. Erfahren Sie, warum Unternehmen deutschlandweit auf uns setzen.",
};

const werte = [
  {
    icon: Shield,
    title: "Zuverlässigkeit",
    text: "Wenn wir zusagen, halten wir. Personalausfall am Montagmorgen gibt es bei unseren Kunden nicht.",
  },
  {
    icon: Eye,
    title: "Transparenz",
    text: "Offene Kommunikation, nachvollziehbare Kosten, klare Absprachen. Im Zweifel mehr Information, nicht weniger.",
  },
  {
    icon: Heart,
    title: "Verantwortung",
    text: "Wir behandeln unsere Mitarbeiter fair — weil gute Arbeitsbedingungen bessere Arbeitsergebnisse liefern. Keine Massenunterkünfte, kein Lohndumping.",
  },
  {
    icon: Handshake,
    title: "Verbindlichkeit",
    text: "Ein Ansprechpartner, eine Rufnummer, eine Entscheidung. Wer bei uns anruft, wird nicht weitergeleitet.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero title="15 Jahre. Tausende Einsätze. Ein Prinzip: Zuverlässigkeit." />

      {/* Über uns Text */}
      <section className="py-16 lg:py-24 bg-white">
        <SectionWrapper className="max-w-3xl mx-auto px-6 md:px-8 xl:px-12 space-y-5">
          <p className="text-content text-base lg:text-lg leading-relaxed">
            ETS ist ein Personaldienstleister mit Sitz in Edenkoben und 23 Niederlassungen in ganz Deutschland. Seit über 15 Jahren unterstützen wir mittelständische und große Unternehmen dabei, ihren Personalbedarf flexibel, zuverlässig und rechtssicher zu decken.
          </p>
          <p className="text-content text-base lg:text-lg leading-relaxed">
            Was uns antreibt, ist nicht der nächste Vertrag — sondern die Frage, ob Ihr Betrieb morgen früh reibungslos läuft. Dafür halten wir eine permanente Reserve von über 1.000 Mitarbeitern bereit, betreiben einen eigenen Fahrerdienst und sind über unsere Notfall-Hotline auch außerhalb der Geschäftszeiten erreichbar.
          </p>
          <p className="text-content text-base lg:text-lg leading-relaxed">
            Unser Anspruch: Sie sollen sich nicht mit Personalthemen beschäftigen müssen. Das übernehmen wir.
          </p>
        </SectionWrapper>
      </section>

      {/* Werte */}
      <section className="py-16 lg:py-24 bg-snow" aria-labelledby="werte-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
          <SectionWrapper>
            <h2 id="werte-heading" className="font-heading font-bold text-[1.75rem] lg:text-[2.5rem] text-charcoal leading-tight text-center mb-12">
              Unsere Werte
            </h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {werte.map((w) => (
              <SectionWrapper key={w.title} variant="scaleIn">
                <article className="bg-white rounded-2xl p-8 border border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                  <div className="w-12 h-12 rounded-xl bg-ice flex items-center justify-center mb-5">
                    <w.icon className="w-6 h-6 text-secondary" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-charcoal">{w.title}</h3>
                  <p className="mt-2.5 text-sm text-muted leading-relaxed">{w.text}</p>
                </article>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <SectionWrapper className="max-w-3xl mx-auto px-6 md:px-8 xl:px-12">
          <h2 className="font-heading font-bold text-[1.75rem] lg:text-[2.5rem] text-charcoal leading-tight mb-6">
            Unsere Geschichte
          </h2>
          <p className="text-content text-base lg:text-lg leading-relaxed">
            Gegründet vor über 15 Jahren, hat sich ETS von einem regionalen Personaldienstleister zu einem deutschlandweiten Unternehmen mit 23 Standorten und über 1.000 Mitarbeitern entwickelt. Heute betreuen wir Unternehmen aus allen Branchen — von der Logistik über die Produktion bis hin zu kommunalen Dienstleistungen.
          </p>
        </SectionWrapper>
      </section>

      <CTABlock
        title="Lernen Sie uns kennen."
        text="Vereinbaren Sie ein unverbindliches Beratungsgespräch — persönlich, telefonisch oder per Video."
        buttonText="Beratungsgespräch buchen"
      />
    </>
  );
}
