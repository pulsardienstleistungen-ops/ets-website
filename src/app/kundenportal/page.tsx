import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Kundenportal — ETS Personaldienstleister",
  description: "Anmelden im ETS Kundenportal: Arbeitszeiten, Einsatzpläne und Abrechnungen auf einen Blick.",
};

export default function KundenportalPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-snow">
      <div className="max-w-md mx-auto px-6 py-16 text-center">
        <h1 className="font-heading font-bold text-3xl text-charcoal">Kundenportal</h1>
        <p className="mt-4 text-muted text-base">
          Das Kundenportal befindet sich aktuell in Entwicklung. Bitte kontaktieren Sie uns für Zugang.
        </p>
        <div className="mt-8">
          <Link href="/kontakt" className={buttonVariants("primary")}>
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}
