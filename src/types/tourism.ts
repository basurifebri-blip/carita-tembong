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
};
