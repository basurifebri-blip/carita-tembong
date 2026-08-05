import type { MapPoint } from "@/types/map";

/**
 * Google Maps link for a coordinate. Opens the location in Google Maps, from
 * where the user can start turn-by-turn directions. Returns `null` when the
 * point has no verified coordinate yet.
 */
export function googleMapsUrl(
  coordinates: MapPoint["coordinates"],
): string | null {
  if (!coordinates) return null;
  const [lat, lng] = coordinates;
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}
