"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { googleMapsUrl } from "@/lib/maps";
import { mapCategories, mapPoints, mapDefaultView } from "@/data/mapPoints";
import type { MapCategoryKey } from "@/types/map";

// Leaflet touches `window`, so the map itself is client-only and lazy-loaded
// (CLAUDE.md §47 — dynamically import heavy map functionality).
const VillageMap = dynamic(() => import("@/components/map/VillageMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-surface-muted text-sm text-secondary">
      Memuat peta…
    </div>
  ),
});

export function PetaExplorer() {
  const [active, setActive] = useState<Set<MapCategoryKey>>(
    () => new Set(mapCategories.map((c) => c.key)),
  );

  const toggle = (key: MapCategoryKey) =>
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const visiblePoints = useMemo(
    () => mapPoints.filter((p) => active.has(p.category)),
    [active],
  );
  const mappedPoints = useMemo(
    () => visiblePoints.filter((p) => p.coordinates),
    [visiblePoints],
  );

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2.5">
        {mapCategories.map((c) => {
          const on = active.has(c.key);
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => toggle(c.key)}
              aria-pressed={on}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                on
                  ? "border-transparent bg-brand text-white"
                  : "border-soft bg-surface text-secondary hover:border-brand/40",
              )}
            >
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: on ? "#ffffff" : c.color }}
              />
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Map */}
      <div className="mt-6 h-[480px] overflow-hidden rounded-xl border border-soft shadow-card">
        <VillageMap
          points={mappedPoints}
          categories={mapCategories}
          center={mapDefaultView.center}
          zoom={mapDefaultView.zoom}
        />
      </div>

      {mappedPoints.length === 0 && (
        <p className="mt-4 rounded-lg border border-soft bg-surface-muted/60 px-4 py-3 text-sm text-secondary">
          Penanda lokasi sedang dilengkapi dengan koordinat terverifikasi. Peta
          menampilkan area Desa Tembong; tiap titik di bawah akan muncul begitu
          koordinatnya dikonfirmasi.
        </p>
      )}

      {/* Point list */}
      <div className="mt-10">
        <h2 className="type-h3 text-brand">Titik Lokasi Desa</h2>
        <p className="mt-2 text-sm text-secondary">
          {mappedPoints.length} dari {visiblePoints.length} titik terpetakan pada
          kategori terpilih.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {visiblePoints.map((p) => {
            const cat = mapCategories.find((c) => c.key === p.category);
            const mapsUrl = googleMapsUrl(p.coordinates);
            return (
              <li
                key={p.id}
                className="flex items-start justify-between gap-3 rounded-lg border border-soft bg-surface px-4 py-3"
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: cat?.color }}
                  />
                  <div>
                    <p className="font-medium text-primary">{p.name}</p>
                    {p.description && (
                      <p className="mt-0.5 text-xs text-secondary">{p.description}</p>
                    )}
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <span className="text-xs text-secondary/70">
                    {p.coordinates ? "Di peta" : "Belum dipetakan"}
                  </span>
                  {mapsUrl && (
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Buka ${p.name} di Google Maps`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-interactive hover:text-interactive-strong"
                    >
                      Buka di Maps
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 17 17 7M9 7h8v8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
