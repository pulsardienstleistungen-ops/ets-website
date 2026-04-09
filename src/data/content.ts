import type { NavLink, USPItem, FAQItem } from "@/types";

export const content = {
  meta: {
    title: "ETS Personaldienstleister — Zeitarbeit & Fachkräfte deutschlandweit",
    description:
      "Personalengpass? ETS liefert sofort einsatzbereite Fachkräfte aus 23 Standorten in ganz Deutschland. 15 Jahre Erfahrung, 1.000+ Mitarbeiter. Jetzt anfragen.",
  },

  nav: {
    cta: "Jetzt anfragen",
    links: [
      { href: "/ueber-uns", label: "Über uns" },
      { href: "/leistungen", label: "Leistungen" },
      { href: "/branchen", label: "Branchen" },
      { href: "/standorte", label: "Standorte" },
      { href: "/karriere", label: "Karriere" },
    ] satisfies NavLink[],
  },

  notfallBanner: {
    text: "Personalnotfall? Sofort anrufen:",
    phone: "+49 (6323) 9870228",
  },

  hero: {
    badge: "Seit 15 Jahren Ihr Personaldienstleister",
    title: "Montag. 6 Uhr. 12 Mitarbeiter fehlen. Nicht mit uns.",
    subtitle:
      "Sofort einsatzbereite Fachkräfte für Ihr Unternehmen — deutschlandweit, aus 23 Standorten, mit eigenem Fahrerdienst.",
    ctaPrimary: "Angebot in 24 Stunden erhalten",
    ctaSecondary: "Rückruf in 30 Minuten",
  },

  karriereMarquee: [
    { flag: "🇩🇪", text: "Jobs" },
    { flag: "🇵🇱", text: "Praca" },
    { flag: "🇷🇴", text: "Locuri de muncă" },
    { flag: "🇺🇦", text: "Робота" },
    { flag: "🇷🇺", text: "Работа" },
    { flag: "🇨🇿", text: "Práce" },
    { flag: "🇭🇺", text: "Munka" },
  ],

  trustBar: [
    "✓ IZS-zertifiziert",
    "✓ AÜG-lizenziert",
    "Seit 15 Jahren am Markt",
    "23 Standorte deutschlandweit",
    "1.000+ Mitarbeiter im Einsatz",
  ],

  painSolution: {
    painTitle: "Kennen Sie das?",
    pains: [
      "Kurzfristiger Personalausfall — und kein Ersatz in Sicht",
      "Leiharbeiter, die nicht erscheinen oder nach zwei Tagen verschwinden",
      "Ihr Ansprechpartner \u201Eklärt das intern\u201C — seit drei Tagen",
      "Steigende Kosten, ohne zu wissen, wofür Sie eigentlich zahlen",
      "Personaldienstleister ab 18 Uhr nicht mehr erreichbar",
    ],
    solutionTitle: "So lösen wir es.",
    solutions: [
      "Personalreserve steht bereit — Ersatz innerhalb von Stunden, nicht Tagen",
      "Mitarbeiter mit ordentlicher Unterkunft und fairem Umgang — die bleiben und anpacken",
      "Ihr Ansprechpartner entscheidet selbst. Sofort. Ohne Rücksprache.",
      "Transparente Abrechnung im Kundenportal — Stunden, Kosten, Dokumente auf einen Blick",
      "Notfall-Hotline, WhatsApp, Telefon — auch abends und am Wochenende",
    ],
  },

  uspBlocks: [
    {
      icon: "UserCheck",
      title: "Ihr Entscheider. Kein Weitervermittler.",
      description:
        "Ihr persönlicher Ansprechpartner trifft Entscheidungen sofort — ohne Rücksprache mit der Zentrale, ohne Warteschleifen.",
    },
    {
      icon: "Zap",
      title: "Personal in 24 Stunden.",
      description:
        "Wir halten eine permanente Reserve einsatzbereiter Mitarbeiter. Auch kurzfristige Anfragen setzen wir um — oft am nächsten Tag.",
    },
    {
      icon: "Truck",
      title: "Wir liefern die Leute. Wörtlich.",
      description:
        "Unser interner Fahrerdienst bringt Ihre Mitarbeiter pünktlich ans Werk — ob Lager, Linie oder Baustelle.",
    },
    {
      icon: "LayoutDashboard",
      title: "Alles unter Kontrolle. Ohne Papierkram.",
      description:
        "Im Kundenportal sehen Sie Arbeitszeiten, Einsatzpläne und Abrechnungen — jederzeit, an einem Ort.",
    },
    {
      icon: "Home",
      title: "Gute Arbeit beginnt nach Feierabend.",
      description:
        "Unsere Mitarbeiter wohnen in ordentlichen Unterkünften, nicht in überfüllten Massenquartieren. Wer erholt zur Arbeit kommt, arbeitet besser.",
    },
    {
      icon: "MapPin",
      title: "23 Standorte. Nie weit weg.",
      description:
        "Von Kiel bis München, von Düsseldorf bis Dresden — in der Regel sind wir innerhalb einer Stunde bei Ihnen.",
    },
  ] satisfies USPItem[],

  howItWorks: {
    title: "In drei Schritten zu Ihrem Personal.",
    steps: [
      {
        number: "01",
        title: "Bedarf melden",
        description:
          "Sagen Sie uns, wen Sie brauchen — per Telefon, Formular oder WhatsApp. Wir klären Branche, Anzahl und Zeitraum.",
      },
      {
        number: "02",
        title: "Personal erhalten",
        description:
          "Wir stellen passende, sofort verfügbare Mitarbeiter zusammen — aus unserem Pool von über 1.000 Fachkräften.",
      },
      {
        number: "03",
        title: "Einsatz starten",
        description: "Ihre Mitarbeiter sind da. Pünktlich. Eingewiesen. Einsatzbereit.",
      },
    ],
    cta: "Jetzt Bedarf melden",
  },

  stats: [
    { value: "15+", label: "Jahre Branchenerfahrung" },
    { value: "23", label: "Standorte in Deutschland" },
    { value: "1.000+", label: "Mitarbeiter im Einsatz" },
    { value: "24/7", label: "Erreichbar — auch im Notfall" },
  ],

  branchenTeaser: {
    title: "Für Ihre Branche die passenden Fachkräfte.",
    text: "Ob Lager, Fertigung oder Entsorgung — wir kennen die Anforderungen Ihrer Branche und liefern Mitarbeiter, die sofort einsetzbar sind.",
    cta: "Alle Branchen ansehen →",
    branchen: [
      "Logistik & Lager",
      "Produktion",
      "Entsorgung & Recycling",
      "Industrie",
      "Automotive",
      "Handwerk",
      "Bauwesen",
      "Lebensmittel",
      "Kommunale Dienste",
    ],
  },

  mapSection: {
    title: "23 Standorte. Immer in Ihrer Nähe.",
    text: "Mit 23 Niederlassungen in ganz Deutschland erreichen wir Ihr Unternehmen in der Regel innerhalb von 60 Minuten. Bei größerem Bedarf setzen wir unser gesamtes Netzwerk ein.",
    accent: "Kein Standort in Ihrer Nähe? Wir eröffnen einen für Sie.",
    cta: "Alle Standorte ansehen →",
  },

  referenzen: {
    title: "Vertrauen entsteht nicht durch Slogans.",
    text: "Wir betreuen Unternehmen aus Logistik, Produktion, Entsorgung, Industrie und vielen weiteren Branchen — vom Mittelständler bis zum Konzern. Gerne stellen wir auf Anfrage den Kontakt zu bestehenden Kunden her, damit Sie sich selbst ein Bild machen können.",
    cta: "Referenzen anfordern",
  },

  faq: {
    title: "Häufige Fragen. Klare Antworten.",
    items: [
      {
        frage: "Wie schnell können Sie Personal bereitstellen?",
        antwort:
          "In der Regel innerhalb von 24 bis 48 Stunden. Durch unsere permanente Personalreserve an 23 Standorten können wir auch kurzfristigen Bedarf decken. Im Notfall — über unsere Notfall-Hotline — oft noch am selben Tag.",
      },
      {
        frage: "Was passiert, wenn ein Mitarbeiter ausfällt?",
        antwort:
          "Wir stellen umgehend Ersatz aus unserem eigenen Mitarbeiterpool, ohne dass Sie sich darum kümmern müssen. Über unsere Notfall-Hotline sind wir auch abends und am Wochenende erreichbar.",
      },
      {
        frage: "Welche Qualifikation haben Ihre Mitarbeiter?",
        antwort:
          "Wir setzen ausschließlich Mitarbeiter ein, deren Qualifikation und Erfahrung zu Ihrem Einsatzprofil passen. Alle Mitarbeiter sind bei uns fest angestellt, sozialversichert und werden vor dem ersten Einsatz eingewiesen.",
      },
      {
        frage: "Wie funktioniert die Abrechnung?",
        antwort:
          "Transparent und nachvollziehbar. Über Ihr persönliches Kundenportal haben Sie jederzeit Zugriff auf Arbeitszeiten, Einsatzpläne und Abrechnungen — in Echtzeit. Keine versteckten Kosten, keine Überraschungen.",
      },
      {
        frage: "Sind wir als Unternehmen rechtlich abgesichert?",
        antwort:
          "Ja. Wir verfügen über eine unbefristete AÜG-Erlaubnis und sind IZS-zertifiziert. Alle Überlassungen erfolgen rechtskonform nach dem Arbeitnehmerüberlassungsgesetz. Die Einhaltung von Equal Pay und Höchstüberlassungsdauer überwachen wir für Sie.",
      },
      {
        frage: "Was unterscheidet ETS von anderen Personaldienstleistern?",
        antwort:
          "Drei Dinge. Erstens: Ihr Ansprechpartner entscheidet selbst — ohne Rücksprache mit einer Zentrale. Zweitens: Unser eigener Fahrerdienst bringt die Mitarbeiter direkt zu Ihnen. Drittens: Über Ihr Kundenportal behalten Sie die volle Kontrolle — jederzeit.",
      },
    ] satisfies FAQItem[],
  },

  expressForm: {
    title: "Ihr Angebot. In 24 Stunden.",
    subtitle: "Unverbindlich. Kostenlos. Ohne Verpflichtung.",
    cta: "Unverbindliches Angebot anfordern",
    underButton: "Oder rufen Sie direkt an: +49 (6323) 9870228",
    fields: {
      name: { label: "Ihr Name", placeholder: "Max Mustermann" },
      unternehmen: { label: "Unternehmen", placeholder: "Firma GmbH" },
      kontakt: {
        label: "Telefon oder E-Mail",
        placeholder: "+49 … oder name@firma.de",
      },
      mitarbeiterAnzahl: {
        label: "Wie viele Mitarbeiter?",
        options: ["1–5", "5–10", "10–20", "20–50", "50+"],
      },
      dringlichkeit: {
        label: "Dringlichkeit",
        options: ["Dringend (innerhalb 48 h)", "Geplant (in 1–4 Wochen)"],
      },
      nachricht: { label: "Nachricht", placeholder: "Optionale Anmerkungen…" },
    },
    success: {
      title: "Vielen Dank für Ihre Anfrage.",
      text: "Ihr persönlicher Ansprechpartner meldet sich innerhalb von 24 Stunden bei Ihnen.",
    },
  },

  footer: {
    description:
      "ETS — Ihr Personaldienstleister mit 23 Standorten in ganz Deutschland. Seit über 15 Jahren liefern wir zuverlässig Fachkräfte für Industrie, Logistik, Produktion und mehr.",
    copyright: "© 2026 ETS Sp. z o.o.",
    legal: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
    ] satisfies NavLink[],
    leistungen: [
      { href: "/leistungen/zeitarbeit", label: "Zeitarbeit" },
      { href: "/leistungen/werkvertraege", label: "Werkverträge" },
      { href: "/leistungen/dienstvertraege", label: "Dienstverträge" },
      { href: "/leistungen/on-site-management", label: "On-Site-Management" },
    ] satisfies NavLink[],
    unternehmen: [
      { href: "/ueber-uns", label: "Über uns" },
      { href: "/standorte", label: "Standorte" },
      { href: "/karriere", label: "Karriere" },
      { href: "/kundenportal", label: "Kundenportal" },
    ] satisfies NavLink[],
    kontakt: {
      firma: "ETS Sp. z o.o.",
      adresse: "In den Seewiesen 17, 67480 Edenkoben",
      telefon: "+49 (6323) 9870228",
      email: "j.baumgart@ets-praca.de",
    },
  },

  exitIntent: {
    title: "Sie gehen — Ihr Personalengpass bleibt.",
    text: "Lassen Sie uns Ihnen ein unverbindliches Angebot machen. Innerhalb von 24 Stunden.",
    cta: "Rückruf anfordern",
    caption: "Kostenlos & unverbindlich",
  },
} as const;
