/**
 * Interactive village map model (CLAUDE.md §31 — markers are structured data,
 * never hardcoded in JSX). A point is only plotted once it has verified
 * coordinates; until then `coordinates` stays `null` and it is listed as
 * "belum dipetakan" (CLAUDE.md §56 — coordinates are never invented).
 */

export type MapCategoryKey =
  | "pemerintahan"
  | "kesehatan"
  | "pendidikan"
  | "keagamaan"
  | "wisata"
  | "ekonomi";

export type MapCategory = {
  key: MapCategoryKey;
  label: string;
  /** Hex used for the Leaflet marker — kept in sync with the design palette. */
  color: string;
};

export type MapPoint = {
  id: string;
  name: string;
  /** Optional short label shown on the map marker; falls back to `name`. */
  label?: string;
  category: MapCategoryKey;
  /** [latitude, longitude] once verified; `null` while still being mapped. */
  coordinates: [number, number] | null;
  description?: string;
  /** Short status label, e.g. a tourism visit status. */
  status?: string;
  /** Internal link to the related page. */
  href?: string;
};
