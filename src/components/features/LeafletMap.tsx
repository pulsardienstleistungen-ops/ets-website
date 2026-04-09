"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { standorte, hauptsitz } from "@/data/standorte";
import type { Standort } from "@/types";

const allLocations: Standort[] = [hauptsitz, ...standorte];

export default function LeafletMap() {
  const [visible, setVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mapRef} className="w-full h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden bg-snow">
      {visible && (
        <MapContainer
          center={[51.1657, 10.4515]}
          zoom={6}
          scrollWheelZoom={false}
          className="w-full h-full z-0"
          attributionControl={true}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {allLocations.map((loc, i) => (
            <CircleMarker
              key={loc.id}
              center={[loc.lat, loc.lng]}
              radius={loc.isHQ ? 8 : 5}
              pathOptions={{
                color: loc.isHQ ? "#D42027" : "#1E4F9B",
                fillColor: loc.isHQ ? "#D42027" : "#1E4F9B",
                fillOpacity: 0.85,
                weight: loc.isHQ ? 3 : 2,
              }}
            >
              <Popup className="font-body">
                <strong className="font-heading text-sm">
                  {loc.stadt}
                  {loc.isHQ && " (Hauptsitz)"}
                </strong>
                <br />
                <span className="text-xs text-muted">{loc.bundesland}</span>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      )}
    </div>
  );
}
