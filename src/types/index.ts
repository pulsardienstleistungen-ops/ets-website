export interface Standort {
  id: number;
  stadt: string;
  bundesland: string;
  lat: number;
  lng: number;
  isHQ?: boolean;
}

export interface Branche {
  name: string;
  icon: string;
}

export interface Leistung {
  slug: string;
  title: string;
  subtitle: string;
  description: string[];
  vorteile: string[];
  beispiele: { branche: string; text: string }[];
  ctaText: string;
}

export interface FAQItem {
  frage: string;
  antwort: string;
}

export interface USPItem {
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ExpressFormData {
  name: string;
  unternehmen: string;
  kontakt: string;
  mitarbeiterAnzahl: string;
  dringlichkeit: string;
  nachricht?: string;
}
