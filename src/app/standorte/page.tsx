import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MapWrapper } from "@/components/features/MapWrapper";
import { standorte, hauptsitz } from "@/data/standorte";
import { content } from "@/data/content";

export const metadata: Metadata = {
  title: "23 Standorte in Deutschland — ETS Personaldienstleister",
  description:
    "ETS ist mit 23 Niederlassungen deutschlandweit vertreten — von Kiel bis München. Finden Sie Ihren nächsten Standort. Angebot in 24 Stunden.",
};

const bundeslaender = [...new Set(standorte.map((s) => s.bundesland))].sort();

export default function StandortePage() {
  return (
    <>
      <PageHero
        title="23 Standorte. Ein Versprechen: Nähe."
        subtitle="Von Kiel bis München, von Düsseldorf bis Dresden — mit 23 Niederlassungen sind wir dort, wo Sie uns brauchen. Unser Einzugsgebiet pro Standort: rund 60 Minuten Fahrzeit."
      />

      {/* Map */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
          <SectionWrapper className="h-[500px] rounded-2xl overflow-hidden">
            <MapWrapper className="w-full h-full" />
          </SectionWrapper>
        </div>
      </section>

      {/* Accent text */}
      <section className="bg-snow py-10">
        <SectionWrapper className="max-w-3xl mx-auto px-6 md:px-8 xl:px-12 text-center">
          <p className="text-secondary font-semibold text-lg">
            {content.mapSection.accent}
          </p>
        </SectionWrapper>
      </section>

      {/* City list by Bundesland */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="standorte-list-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
          <h2
            id="standorte-list-heading"
            className="font-heading font-bold text-[1.75rem] lg:text-[2.5rem] text-charcoal leading-tight mb-10"
          >
            Alle Standorte
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bundeslaender.map((bl) => (
              <SectionWrapper key={bl} variant="fadeInUp">
                <div>
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-3">
                    {bl}
                  </h3>
                  <ul className="space-y-2">
                    {standorte
                      .filter((s) => s.bundesland === bl)
                      .map((s) => (
                        <li key={s.id} className="flex items-center gap-2 text-sm text-muted">
                          <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" aria-hidden="true" />
                          {s.stadt}
                        </li>
                      ))}
                  </ul>
                </div>
              </SectionWrapper>
            ))}
          </div>
          {/* Hauptsitz */}
          <SectionWrapper className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
              <div>
                <span className="font-heading font-semibold text-charcoal">Hauptsitz: {hauptsitz.stadt}</span>
                <span className="text-sm text-muted ml-2">({hauptsitz.bundesland})</span>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}
