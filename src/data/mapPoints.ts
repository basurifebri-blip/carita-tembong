import type { MapCategory, MapPoint } from "@/types/map";

/**
 * Source of truth for the interactive village map.
 *
 * Coordinates below were provided and confirmed by the village (2026); point
 * names reuse already-verified village data. `label` is the short chip shown on
 * the map; `name` (full) is used in the popup and the list. Points still
 * awaiting a confirmed coordinate stay `null` — per CLAUDE.md §56 coordinates
 * are never invented. Fill a `coordinates` field as `[latitude, longitude]` and
 * the marker appears automatically.
 *
 * PRIVACY (CLAUDE.md §57): private homes are not mapped. The village head's
 * residence — although its coordinate was available — is intentionally omitted;
 * only the public Kantor Desa is plotted.
 */

export const mapCategories: MapCategory[] = [
  { key: "pemerintahan", label: "Pemerintahan", color: "#2f5a4c" },
  { key: "kesehatan", label: "Kesehatan", color: "#bf5f3c" },
  { key: "pendidikan", label: "Pendidikan", color: "#7a5c45" },
  { key: "keagamaan", label: "Keagamaan", color: "#67615a" },
  { key: "wisata", label: "Wisata", color: "#2d7d74" },
  { key: "ekonomi", label: "Ekonomi & UMKM", color: "#c6a35f" },
];

export const mapPoints: MapPoint[] = [
  // — Pemerintahan —
  {
    id: "kantor-desa",
    name: "Kantor Desa Tembong",
    label: "Kantor Desa",
    category: "pemerintahan",
    coordinates: [-6.322648, 105.843168],
    description: "Pusat pemerintahan dan pelayanan warga Desa Tembong.",
    href: "/kenali-tembong",
  },

  // — Kesehatan —
  {
    id: "puskesmas-carita",
    name: "UPT Puskesmas Carita",
    label: "Puskesmas Carita",
    category: "kesehatan",
    coordinates: [-6.323245, 105.844637],
    description: "Berada di Kp. Tembol; melayani warga se-Kecamatan Carita.",
    href: "/tembong-sehat",
  },
  {
    id: "posyandu-salabarang",
    name: "Posyandu Kenanga 1 — Salabarang",
    label: "Posyandu 1",
    category: "kesehatan",
    coordinates: [-6.331324, 105.854657],
    href: "/tembong-sehat",
  },
  {
    id: "posyandu-kadu-kokosan",
    name: "Posyandu Kenanga 2 — Kadu Kokosan",
    label: "Posyandu 2",
    category: "kesehatan",
    coordinates: [-6.330136, 105.848976],
    href: "/tembong-sehat",
  },
  {
    id: "posyandu-galaya",
    name: "Posyandu Kenanga 3 — Galaya",
    label: "Posyandu 3",
    category: "kesehatan",
    coordinates: [-6.335342, 105.846884],
    href: "/tembong-sehat",
  },
  {
    id: "posyandu-tembol",
    name: "Posyandu Kenanga 4 — Tembol",
    label: "Posyandu 4",
    category: "kesehatan",
    coordinates: [-6.321405, 105.841357],
    href: "/tembong-sehat",
  },

  // — Pendidikan —
  {
    id: "sdn-tembong-1",
    name: "SDN Tembong 1",
    category: "pendidikan",
    coordinates: [-6.322617, 105.843072],
    description: "Sekolah Dasar Negeri di Desa Tembong.",
  },
  {
    id: "sdn-tembong-2",
    name: "SDN Tembong 2",
    category: "pendidikan",
    coordinates: [-6.331915, 105.849793],
    description: "Sekolah Dasar Negeri di Desa Tembong.",
  },

  // — Keagamaan —
  {
    id: "masjid-asyafinatul-muttaqin",
    name: "Masjid Jami Asyafi'natul Muttaqin",
    label: "Masjid Asyafi'natul",
    category: "keagamaan",
    coordinates: [-6.330318, 105.848988],
    description: "Masjid jami dan pusat kegiatan keagamaan warga.",
  },
  {
    id: "masjid-at-taqwa",
    name: "Masjid Jami' At-Taqwa",
    label: "Masjid At-Taqwa",
    category: "keagamaan",
    coordinates: [-6.331504, 105.854259],
    description: "Masjid jami dan pusat kegiatan keagamaan warga.",
  },
  {
    id: "masjid-al-itihadul-mumin",
    name: "Masjid Jami Al-Itihadul Mu'min",
    label: "Masjid Al-Itihadul",
    category: "keagamaan",
    coordinates: [-6.3221151422763695, 105.84256150295398],
    description: "Masjid jami dan pusat kegiatan keagamaan warga.",
  },

  // — Wisata —
  {
    id: "curug-cibanteri",
    name: "Curug Cibanteri",
    category: "wisata",
    coordinates: [-6.326767, 105.849825],
    status: "Potensial Dikembangkan",
    description: "Air terjun alami di antara rimbun pepohonan.",
    href: "/jelajahi-tembong/curug-cibanteri",
  },
  {
    id: "embung-desa",
    name: "Embung Desa",
    category: "wisata",
    coordinates: [-6.331699161539687, 105.8503155191289],
    status: "Potensial Dikembangkan",
    description: "Tampungan air bagi ladang dan kehidupan warga.",
    href: "/jelajahi-tembong/embung-desa",
  },
  {
    id: "bulakan-ciherang",
    name: "Bulakan Ciherang",
    category: "wisata",
    coordinates: [-6.337719, 105.85287],
    status: "Potensial Dikembangkan",
    description: "Mata air jernih yang menghidupi keseharian warga.",
    href: "/jelajahi-tembong/bulakan-ciherang",
  },

  // — Ekonomi & UMKM —
  {
    id: "pengrajin-opak-salabarang",
    name: "Pengrajin Opak — Salabarang",
    label: "Pengrajin Opak",
    category: "ekonomi",
    coordinates: [-6.331604, 105.854253],
    description: "Rumah produksi opak singkong warga.",
    href: "/potensi-desa",
  },
  {
    id: "pengrajin-emping-salabarang",
    name: "Pengrajin Emping — Salabarang",
    label: "Pengrajin Emping",
    category: "ekonomi",
    coordinates: [-6.331259, 105.853338],
    description: "Rumah produksi emping melinjo warga.",
    href: "/potensi-desa",
  },
  {
    id: "pengrajin-emping-kadu-kokosan",
    name: "Pengrajin Emping — Kadu Kokosan",
    label: "Pengrajin Emping",
    category: "ekonomi",
    coordinates: [-6.330261, 105.849746],
    description: "Rumah produksi emping melinjo warga.",
    href: "/potensi-desa",
  },
  {
    id: "pengrajin-emping-galaya",
    name: "Pengrajin Emping — Galaya",
    label: "Pengrajin Emping",
    category: "ekonomi",
    coordinates: [-6.335673, 105.847044],
    description: "Rumah produksi emping melinjo warga.",
    href: "/potensi-desa",
  },
];

/**
 * Initial camera. With mapped points present the map auto-fits to the markers,
 * so this mainly frames the village centre before the markers paint.
 */
export const mapDefaultView = {
  center: [-6.3302, 105.8492] as [number, number],
  zoom: 14,
};
