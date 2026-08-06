import type { StaticImageData } from "next/image";

export type VisitStatus =
  | "Bisa Dikunjungi"
  | "Akses Terbatas"
  | "Potensial Dikembangkan"
  | "Dalam Pengembangan"
  | "Tutup Sementara";

export type Destination = {
  slug: string;
  name: string;
  /** Short type label, e.g. Curug, Mata Air, Embung. */
  category: string;
  status: VisitStatus;
  image?: StaticImageData;
  summary: string;
  /** Optional longer narrative about the place (history, character). */
  story?: string[];
  /**
   * Optional local oral tradition or belief. Always presented clearly as
   * community folklore, never asserted as verified fact (editorial-guideline §56).
   */
  lore?: { heading: string; body: string[] };
  /** Optional local etiquette to respect when visiting. */
  etiquette?: string[];
  /** Optional attribution for this entry's information. */
  note?: string;
};
