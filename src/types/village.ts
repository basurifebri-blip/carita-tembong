/**
 * Shared content types for village profile data.
 * Kept small and presentation-agnostic (CLAUDE.md §5: separate data from
 * presentation). Data files satisfy these types; components consume them.
 */

import type { StaticImageData } from "next/image";

export type Stat = {
  value: string;
  unit?: string;
  label: string;
};

export type FactItem = {
  label: string;
  value: string;
};

export type Boundary = {
  direction: "Utara" | "Timur" | "Selatan" | "Barat";
  area: string;
};

/** A person shown only by public name + public role. */
export type Official = {
  name: string;
  role: string;
  /** Optional official portrait (public figures only, with consent). */
  image?: StaticImageData;
  imageAlt?: string;
};

export type OrgGroup = {
  title: string;
  members: Official[];
};
