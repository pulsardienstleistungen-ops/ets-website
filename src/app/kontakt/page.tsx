import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ExpressForm } from "@/components/sections/ExpressForm";
import { PHONE_LINK, PHONE_DISPLAY, WHATSAPP_URL, EMAIL, ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt — Personal anfragen oder Rückruf vereinbaren | ETS",
  description:
    "Jetzt Personal anfragen, Rückruf vereinbaren oder direkt anrufen: +49 (6323) 9870228. ETS — erreichbar 24/7, auch im Personalnotfall.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title="Sprechen Sie mit uns. Nicht mit einer Warteschleife."
        subtitle="Ob Personalanfrage, Rückruf oder allgemeine Frage — wir sind für Sie da. Persönlich, direkt, ohne Umwege."
      />

      {/* Notfall Block */}
      <section className="bg-primary py-8">
        <SectionWrapper className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12 text-center">
          <h2 className="font-heading font-bold text-xl lg:text-2xl text-white">
            Personalnotfall?
          </h2>
          <p className="mt-2 text-white/80 text-base">
            Rufen Sie jetzt an. Wir reagieren sofort — auch abends, nachts und am Wochenende.
          </p>
          <a
            href={PHONE_LINK}
            className="mt-4 inline-flex items-center gap-2 text-white font-heading font-extrabold text-2xl lg:text-3xl hover:underline underline-offset-4 min-h-[44px]"
          >
            <Phone className="w-6 h-6" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </SectionWrapper>
      </section>

      {/* Contact options grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {/* Terminbuchung */}
            <SectionWrapper variant="scaleIn" className="bg-snow rounded-2xl p-8 text-center">
              <h3 className="font-heading font-semibold text-lg text-charcoal">
                Beratungsgespräch vereinbaren
              </h3>
              <p className="mt-2 text-sm text-muted">
                Wählen Sie Ihren Wunschtermin — per Telefon, Video oder persönlich vor Ort.
              </p>
              <div className="mt-5 rounded-xl bg-white border border-black/[0.06] p-6 text-sm text-muted">
                Cal.com-Integration folgt
              </div>
            </SectionWrapper>

            {/* WhatsApp */}
            <SectionWrapper variant="scaleIn" delay={0.1} className="bg-snow rounded-2xl p-8 text-center">
              <h3 className="font-heading font-semibold text-lg text-charcoal">
                Lieber kurz und unkompliziert?
              </h3>
              <p className="mt-2 text-sm text-muted">
                Schreiben Sie uns per WhatsApp — schnell, direkt, ohne Formalitäten.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 bg-whatsapp text-white font-semibold rounded-xl px-6 py-3 hover:scale-[1.02] transition-transform min-h-[44px]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Per WhatsApp schreiben
              </a>
            </SectionWrapper>

            {/* Kontaktdaten */}
            <SectionWrapper variant="scaleIn" delay={0.2} className="bg-snow rounded-2xl p-8">
              <h3 className="font-heading font-semibold text-lg text-charcoal">
                Kontaktdaten
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>{ADDRESS}</li>
                <li>
                  <a href={PHONE_LINK} className="text-secondary hover:underline min-h-[44px] inline-flex items-center">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="text-secondary hover:underline">
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Express form reused */}
      <ExpressForm />
    </>
  );
}
