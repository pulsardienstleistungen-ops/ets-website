export interface LeistungData {
  slug: string;
  meta: { title: string; description: string };
  hero: string;
  beschreibung: string[];
  vorteile: string[];
  beispiele: { title: string; items: string[] };
  cta: string;
}

export const leistungen: LeistungData[] = [
  {
    slug: "zeitarbeit",
    meta: {
      title: "Zeitarbeit & Arbeitnehmerüberlassung — sofort verfügbar | ETS",
      description:
        "Qualifizierte Zeitarbeiter für Logistik, Produktion und Industrie — AÜG-konform, sofort einsatzbereit, mit eigenem Fahrerdienst. Angebot in 24 h.",
    },
    hero: "Zeitarbeit — Fachkräfte, wenn Sie sie brauchen.",
    beschreibung: [
      "Personalengpässe kommen selten mit Vorwarnung. Ein Großauftrag, saisonale Spitzen, krankheitsbedingte Ausfälle — plötzlich fehlen Leute, und Ihre Produktion steht.",
      "Mit der Arbeitnehmerüberlassung von ETS bekommen Sie qualifizierte Mitarbeiter, die sofort einsatzbereit sind. Wir übernehmen die gesamte Personalverwaltung — von der Rekrutierung über die Lohnabrechnung bis zur rechtssicheren Überlassung nach dem AÜG.",
      "Sie bestimmen Anzahl, Zeitraum und Qualifikation. Wir liefern.",
    ],
    vorteile: [
      "Sofortige Verfügbarkeit aus unserem Mitarbeiterpool",
      "Volle Flexibilität bei Einsatzdauer und Teamgröße",
      "Rechtssichere Überlassung — AÜG-konform, Equal Pay, IZS-zertifiziert",
      "Ein persönlicher Ansprechpartner mit Entscheidungsbefugnis",
      "Schneller Ersatz bei Ausfällen — auch am Wochenende",
    ],
    beispiele: {
      title: "Typische Einsatzbereiche",
      items: [
        "Logistik & Lager: Staplerfahrer, Kommissionierer, Lagerhelfer, Verpacker",
        "Produktion & Fertigung: Produktionshelfer, Maschinenführer, Schweißer (MIG/MAG)",
        "Entsorgung & Recycling: Sortierer, Fahrer für Müllfahrzeuge, Helfer",
        "Industrie & Automotive: Montagehelfer, Reifenmonteure, Facharbeiter",
      ],
    },
    cta: "Zeitarbeit anfragen — Angebot in 24 h",
  },
  {
    slug: "werkvertraege",
    meta: {
      title: "Werkverträge — Ergebnisse statt Stunden | ETS Personaldienstleister",
      description:
        "Werkverträge von ETS: Verantwortung für das Ergebnis, feste Preise, keine Personalverantwortung für Sie. Jetzt unverbindlich anfragen.",
    },
    hero: "Werkverträge — Ergebnisse statt Stunden.",
    beschreibung: [
      "Manchmal brauchen Sie nicht einfach Leute — sondern ein fertiges Ergebnis. Bei einem Werkvertrag übernehmen wir die Verantwortung für ein klar definiertes Arbeitsergebnis. Sie geben das Ziel vor, wir kümmern uns um Planung, Personal und Umsetzung.",
      "Das bedeutet für Sie: keine Personalverantwortung, keine Einsatzsteuerung, kein Koordinationsaufwand. Sie erhalten das vereinbarte Ergebnis — termingerecht und in der abgestimmten Qualität.",
    ],
    vorteile: [
      "Festes Ergebnis zu einem festen Preis",
      "Keine Weisungspflicht gegenüber den eingesetzten Mitarbeitern",
      "Reduzierter Verwaltungsaufwand auf Ihrer Seite",
      "Flexibel skalierbar je nach Projektumfang",
      "Rechtssichere Vertragsgestaltung durch ETS",
    ],
    beispiele: {
      title: "Typische Einsatzbereiche",
      items: [
        "Logistik: Kommissionierung ganzer Auftragsvolumen, Warenein- und -ausgang",
        "Produktion: Fertigungslinien, Serienmontage, Verpackungsprojekte",
        "Entsorgung: Sortierung und Aufbereitung von Wertstoffen",
        "Gebäudereinigung: Objektreinigung nach definiertem Leistungsverzeichnis",
      ],
    },
    cta: "Werkvertrag anfragen — Angebot in 24 h",
  },
  {
    slug: "dienstvertraege",
    meta: {
      title: "Dienstverträge — laufende Personalbereitstellung | ETS",
      description:
        "Dienstverträge mit ETS: feste Teams, planbare Kosten, gleichbleibende Qualität. Laufende Personalbereitstellung deutschlandweit. Angebot in 24 h.",
    },
    hero: "Dienstverträge — Ihr verlängertes Team.",
    beschreibung: [
      "Ein Dienstvertrag eignet sich, wenn Sie laufende Aufgaben dauerhaft auslagern möchten, ohne die Personalverantwortung selbst zu tragen. ETS stellt Ihnen ein eingespieltes Team bereit und übernimmt Koordination, Steuerung und Qualitätskontrolle.",
      "Sie definieren die Anforderungen — wir sorgen dafür, dass die Arbeit erledigt wird. Kontinuierlich, verlässlich, mit gleichbleibendem Qualitätsstandard.",
    ],
    vorteile: [
      "Laufende Personalbereitstellung ohne eigenen Rekrutierungsaufwand",
      "Feste Teams, die Ihre Abläufe kennen",
      "Qualitätskontrolle und Steuerung durch ETS",
      "Planbare monatliche Kosten",
      "Flexibel erweiterbar bei steigendem Bedarf",
    ],
    beispiele: {
      title: "Typische Einsatzbereiche",
      items: [
        "Logistik & Lager: Dauerbetrieb im Lager, Warenein- und -ausgang im Schichtmodell",
        "Kommunale Dienste: Grünpflege, Straßenreinigung, Winterdienst",
        "Industrie: Unterstützung in Fertigung, Montage und Qualitätsprüfung",
        "Lebensmittelindustrie: Helfer in Verarbeitung, Sortierung und Verpackung",
      ],
    },
    cta: "Dienstvertrag anfragen — Angebot in 24 h",
  },
  {
    slug: "on-site-management",
    meta: {
      title: "On-Site-Management & Master Vendor | ETS Personaldienstleister",
      description:
        "Personaleinsatzsteuerung direkt in Ihrem Betrieb: Schichtplanung, Ausfallmanagement, Qualitätskontrolle — ein Koordinator, alle Aufgaben.",
    },
    hero: "On-Site-Management — Personalsteuerung direkt bei Ihnen.",
    beschreibung: [
      "Ab einer gewissen Teamgröße wird die Steuerung externer Mitarbeiter komplex. Wer arbeitet wann? Wer fällt aus? Wer springt ein? Wie laufen die Schichten?",
      "Beim On-Site-Management sitzt unser Koordinator direkt in Ihrem Betrieb. Er steuert den gesamten Personaleinsatz vor Ort: Schichtplanung, Einsatzkoordination, Qualitätssicherung und Ausfallmanagement — alles aus einer Hand.",
      "Sie haben einen festen Ansprechpartner, der Ihr Werk kennt, Ihre Prozesse versteht und Entscheidungen sofort trifft.",
    ],
    vorteile: [
      "Fester Koordinator direkt in Ihrem Betrieb",
      "Komplette Übernahme der Personaleinsatzplanung",
      "Sofortige Reaktion bei Ausfällen und Engpässen",
      "Entlastung Ihrer eigenen Führungskräfte",
      "Transparente Berichterstattung über Ihr Kundenportal",
    ],
    beispiele: {
      title: "Typische Einsatzbereiche",
      items: [
        "Große Logistikzentren mit 30+ externen Mitarbeitern",
        "Produktionswerke mit Mehrschichtbetrieb",
        "Industriestandorte mit wechselndem Personalbedarf",
        "Entsorgungsunternehmen mit standortübergreifendem Einsatz",
      ],
    },
    cta: "On-Site-Management anfragen — Angebot in 24 h",
  },
];
