import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — ETS Sp. z o.o.",
  description: "Impressum der ETS Sp. z o.o., Personaldienstleister mit Sitz in Edenkoben.",
};

export default function ImpressumPage() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8 xl:px-12 prose prose-slate">
        <h1 className="font-heading font-bold text-3xl lg:text-4xl text-charcoal">Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          ETS Sp. z o.o.<br />
          In den Seewiesen 17<br />
          67480 Edenkoben<br />
          Deutschland
        </p>

        <h2>Sitz der Gesellschaft</h2>
        <p>
          ul. Władysława Reymonta 47/1A<br />
          45-072 Opole, Polen
        </p>

        <h2>Registergericht</h2>
        <p>
          Sąd Rejonowy w Opolu<br />
          Handelsregister-Nr.: 0000208728
        </p>

        <h2>Geschäftsführer</h2>
        <p>Jolanta Pluskota</p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +49 (6323) 9870228<br />
          E-Mail: j.baumgart@ets-praca.de
        </p>
      </div>
    </section>
  );
}
