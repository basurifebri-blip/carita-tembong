"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { googleMapsUrl } from "@/lib/maps";
import type { MapCategory, MapPoint } from "@/types/map";

type VillageMapProps = {
  /** Only points that already have coordinates should be passed here. */
  points: MapPoint[];
  categories: MapCategory[];
  center: [number, number];
  zoom: number;
};

/** A teardrop pin, coloured per category, drawn as an inline SVG divIcon so we
 *  never depend on Leaflet's bundled marker images (which break under bundlers). */
function pinIcon(color: string) {
  return L.divIcon({
    className: "village-pin",
    html: `<svg width="28" height="38" viewBox="0 0 28 38" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 37c6-8.6 12-14.5 12-22A12 12 0 1 0 2 15c0 7.5 6 13.4 12 22Z" fill="${color}" stroke="#ffffff" stroke-width="2"/>
      <circle cx="14" cy="15" r="4.5" fill="#ffffff"/>
    </svg>`,
    iconSize: [28, 38],
    iconAnchor: [14, 37],
    popupAnchor: [0, -32],
  });
}

export default function VillageMap({ points, categories, center, zoom }: VillageMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);

  // Initialise the map once.
  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;
    const map = L.map(containerRef.current, {
      center,
      zoom,
      scrollWheelZoom: false,
    });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);
    layerRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      layerRef.current = null;
    };
  }, [center, zoom]);

  // Repaint markers whenever the visible points change.
  useEffect(() => {
    const layer = layerRef.current;
    const map = mapRef.current;
    if (!layer || !map) return;

    layer.clearLayers();
    const colorFor = (key: string) =>
      categories.find((c) => c.key === key)?.color ?? "#2f5a4c";
    const labelFor = (key: string) =>
      categories.find((c) => c.key === key)?.label ?? "";

    const bounds: L.LatLngTuple[] = [];
    for (const point of points) {
      if (!point.coordinates) continue;
      bounds.push(point.coordinates);

      const marker = L.marker(point.coordinates, {
        icon: pinIcon(colorFor(point.category)),
        title: point.name,
      });
      const status = point.status
        ? `<div style="font-size:12px;color:#67615a;margin-top:2px">${point.status}</div>`
        : "";
      const desc = point.description
        ? `<div style="font-size:13px;color:#211f1b;margin-top:6px">${point.description}</div>`
        : "";
      const link = point.href
        ? `<div style="margin-top:8px"><a href="${point.href}" style="color:#2d7d74;font-weight:600;text-decoration:none">Selengkapnya &rarr;</a></div>`
        : "";
      const maps = point.coordinates
        ? `<div style="margin-top:6px"><a href="${googleMapsUrl(point.coordinates)}" target="_blank" rel="noopener noreferrer" style="color:#2d7d74;font-weight:600;text-decoration:none">Buka di Google Maps &#8599;</a></div>`
        : "";
      marker.bindPopup(
        `<div style="min-width:184px">
           <div style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#bf5f3c;font-weight:600">${labelFor(point.category)}</div>
           <div style="font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#2f5a4c;margin-top:2px">${point.name}</div>
           ${status}${desc}${maps}${link}
         </div>`,
      );
      marker.bindTooltip(point.label ?? point.name, {
        permanent: true,
        direction: "top",
        offset: [0, -30],
        className: "village-label",
        opacity: 1,
      });
      layer.addLayer(marker);
    }

    if (bounds.length > 1) {
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16 });
    } else if (bounds.length === 1) {
      map.setView(bounds[0], 16);
    }
  }, [points, categories]);

  return <div ref={containerRef} className="h-full w-full" />;
}
