import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — ETS Sp. z o.o.",
  description: "Datenschutzerklärung der ETS Sp. z o.o. gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8 xl:px-12 prose prose-slate">
        <h1 className="font-heading font-bold text-3xl lg:text-4xl text-charcoal">Datenschutzerklärung</h1>

        <h2>1. Verantwortlicher</h2>
        <p>
          ETS Sp. z o.o.<br />
          In den Seewiesen 17, 67480 Edenkoben<br />
          E-Mail: j.baumgart@ets-praca.de<br />
          Telefon: +49 (6323) 9870228
        </p>

        <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p>
          Wir erheben personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Website und unserer Dienstleistungen erforderlich ist. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 DSGVO.
        </p>

        <h2>3. Kontaktformular</h2>
        <p>
          Wenn Sie unser Kontaktformular nutzen, werden Ihre Angaben (Name, Unternehmen, Kontaktdaten, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
        </p>

        <h2>4. Hosting</h2>
        <p>
          Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf unserer Website werden automatisch Informationen (z.B. IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs) in Server-Logfiles gespeichert.
        </p>

        <h2>5. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Bitte wenden Sie sich an die oben genannte Kontaktadresse.
        </p>

        <p className="text-sm text-muted mt-8">
          <em>Hinweis: Diese Datenschutzerklärung ist ein Platzhalter und muss vor dem Launch durch eine vollständige, rechtlich geprüfte Version ersetzt werden.</em>
        </p>
      </div>
    </section>
  );
}
