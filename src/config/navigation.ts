/**
 * Single source of truth for site navigation.
 * Routes follow docs/Information Architecture §6 and CLAUDE.md §8.
 * Do not duplicate these arrays inside components.
 */

export type NavItem = {
  label: string;
  href: string;
};

/** Primary navigation — max 7 items (IA §4). */
export const mainNav: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Kenali Tembong", href: "/kenali-tembong" },
  { label: "Jelajahi Tembong", href: "/jelajahi-tembong" },
  { label: "Cerita & Budaya", href: "/cerita-budaya" },
  { label: "Potensi Desa", href: "/potensi-desa" },
  { label: "Tembong Sehat", href: "/tembong-sehat" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kabar Tembong", href: "/kabar-tembong" },
];

/** Prominent map call-to-action, presented separately from the nav list. */
export const primaryCta: NavItem = {
  label: "Jelajahi Peta",
  href: "/peta",
};

/** Footer link groups (IA §64). */
export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Jelajahi",
    items: [
      { label: "Kenali Tembong", href: "/kenali-tembong" },
      { label: "Cerita & Budaya", href: "/cerita-budaya" },
      { label: "Potensi Desa", href: "/potensi-desa" },
      { label: "Galeri", href: "/galeri" },
      { label: "Jelajahi Peta", href: "/peta" },
    ],
  },
  {
    title: "Informasi",
    items: [
      { label: "Kabar Tembong", href: "/kabar-tembong" },
      { label: "Kegiatan", href: "/kegiatan" },
      { label: "Tembong Sehat", href: "/tembong-sehat" },
      { label: "Tim Tempura", href: "/tim" },
    ],
  },
];
