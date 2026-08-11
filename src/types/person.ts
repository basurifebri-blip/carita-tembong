import type { StaticImageData } from "next/image";

/** Shared data shape for interactive people cards across the portal. */
export type PersonCardData = {
  name: string;
  role?: string;
  /** Supporting affiliation, location, faculty, or service area. */
  study?: string;
  image?: StaticImageData;
  alt?: string;
};
