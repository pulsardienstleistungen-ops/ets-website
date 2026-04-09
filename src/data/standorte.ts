import type { Standort } from "@/types";

export const standorte: Standort[] = [
  { id: 1, stadt: "Heidelberg", bundesland: "Baden-Württemberg", lat: 49.3988, lng: 8.6724 },
  { id: 2, stadt: "Kaiserslautern", bundesland: "Rheinland-Pfalz", lat: 49.4401, lng: 7.7491 },
  { id: 3, stadt: "Heilbronn", bundesland: "Baden-Württemberg", lat: 49.1427, lng: 9.2109 },
  { id: 4, stadt: "Pforzheim", bundesland: "Baden-Württemberg", lat: 48.8922, lng: 8.6946 },
  { id: 5, stadt: "Neustadt an der Weinstraße", bundesland: "Rheinland-Pfalz", lat: 49.3528, lng: 8.1413 },
  { id: 6, stadt: "Karlsruhe", bundesland: "Baden-Württemberg", lat: 49.0069, lng: 8.4037 },
  { id: 7, stadt: "Hannover", bundesland: "Niedersachsen", lat: 52.3759, lng: 9.7320 },
  { id: 8, stadt: "Neu-Ulm", bundesland: "Bayern", lat: 48.3954, lng: 10.0114 },
  { id: 9, stadt: "Osnabrück", bundesland: "Niedersachsen", lat: 52.2799, lng: 8.0472 },
  { id: 10, stadt: "Berlin", bundesland: "Berlin", lat: 52.5200, lng: 13.4050 },
  { id: 11, stadt: "München", bundesland: "Bayern", lat: 48.1351, lng: 11.5820 },
  { id: 12, stadt: "Lauffen am Neckar", bundesland: "Baden-Württemberg", lat: 49.0728, lng: 9.1457 },
  { id: 13, stadt: "Hamburg", bundesland: "Hamburg", lat: 53.5511, lng: 9.9937 },
  { id: 14, stadt: "Dresden", bundesland: "Sachsen", lat: 51.0504, lng: 13.7373 },
  { id: 15, stadt: "Leipzig", bundesland: "Sachsen", lat: 51.3397, lng: 12.3731 },
  { id: 16, stadt: "Augsburg", bundesland: "Bayern", lat: 48.3705, lng: 10.8978 },
  { id: 17, stadt: "Reutlingen", bundesland: "Baden-Württemberg", lat: 48.4914, lng: 9.2044 },
  { id: 18, stadt: "Stuttgart", bundesland: "Baden-Württemberg", lat: 48.7758, lng: 9.1829 },
  { id: 19, stadt: "Saarbrücken", bundesland: "Saarland", lat: 49.2402, lng: 6.9969 },
  { id: 20, stadt: "Düsseldorf", bundesland: "Nordrhein-Westfalen", lat: 51.2277, lng: 6.7735 },
  { id: 21, stadt: "Werl", bundesland: "Nordrhein-Westfalen", lat: 51.5560, lng: 7.9128 },
  { id: 22, stadt: "Kiel", bundesland: "Schleswig-Holstein", lat: 54.3213, lng: 10.1349 },
  { id: 23, stadt: "Nürnberg", bundesland: "Bayern", lat: 49.4521, lng: 11.0767 },
];

export const hauptsitz: Standort = {
  id: 0,
  stadt: "Edenkoben",
  bundesland: "Rheinland-Pfalz",
  lat: 49.2846,
  lng: 8.1316,
  isHQ: true,
};
