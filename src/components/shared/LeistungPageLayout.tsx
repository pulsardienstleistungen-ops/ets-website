import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero, CTABlock } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { buttonVariants } from "@/components/ui/Button";
import type { LeistungData } from "@/data/leistungen";

interface LeistungPageProps {
  data: LeistungData;
}

export function LeistungPageLayout({ data }: LeistungPageProps) {
  return (
    <>
      <PageHero title={data.hero} />

      {/* Beschreibung */}
      <section className="py-16 lg:py-24 bg-white">
        <SectionWrapper className="max-w-3xl mx-auto px-6 md:px-8 xl:px-12">
          <div className="space-y-5">
            {data.beschreibung.map((p, i) => (
              <p key={i} className="text-content text-base lg:text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Vorteile */}
      <section className="py-16 lg:py-24 bg-snow">
        <SectionWrapper className="max-w-3xl mx-auto px-6 md:px-8 xl:px-12">
          <h2 className="font-heading font-bold text-[1.75rem] lg:text-[2.5rem] text-charcoal leading-tight mb-8">
            Ihre Vorteile
          </h2>
          <ul className="space-y-4">
            {data.vorteile.map((v, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-1 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-success" aria-hidden="true" />
                </span>
                <span className="text-content leading-relaxed">{v}</span>
              </li>
            ))}
          </ul>
        </SectionWrapper>
      </section>

      {/* Branchen-Beispiele */}
      <section className="py-16 lg:py-24 bg-white">
        <SectionWrapper className="max-w-3xl mx-auto px-6 md:px-8 xl:px-12">
          <h2 className="font-heading font-bold text-xl lg:text-2xl text-charcoal leading-tight mb-6">
            {data.beispiele.title}
          </h2>
          <ul className="space-y-3">
            {data.beispiele.items.map((item, i) => (
              <li key={i} className="text-muted text-base leading-relaxed pl-4 border-l-2 border-secondary/30">
                {item}
              </li>
            ))}
          </ul>
        </SectionWrapper>
      </section>

      {/* CTA */}
      <CTABlock
        title="Bereit für bessere Personaldienstleistung?"
        text="Unverbindliches Angebot in 24 Stunden. Persönlich, direkt, ohne Umwege."
        buttonText={data.cta}
      />
    </>
  );
}

export function generateLeistungMetadata(data: LeistungData): Metadata {
  return {
    title: data.meta.title,
    description: data.meta.description,
  };
}
