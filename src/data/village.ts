import type { Boundary, FactItem, Stat } from "@/types/village";

/**
 * Verified facts for Desa Tembong.
 *
 * Source of every value below: the official "Profil Desa Tembong" dated
 * 17 Juni 2026 (docs/source/PROFIL DESA TEMBONG 17 juni 2026.pdf). Do not add
 * figures that are not in that document — per CLAUDE.md §56, village data is
 * never invented. Update here (one place) when newer official data arrives.
 */
export const villageProfile = {
  source: "Profil Desa Tembong, 17 Juni 2026",

  /** Headline figures for the homepage overview. */
  stats: [
    { value: "1.825", label: "Jiwa penduduk" },
    { value: "526", label: "Kepala keluarga" },
    { value: "340", unit: "Ha", label: "Luas wilayah desa" },
    { value: "10 / 4", label: "RT / RW" },
    { value: "100", label: "Usaha pengrajin" },
    { value: "3", label: "Potensi wisata desa" },
  ] satisfies Stat[],

  geography: {
    elevation: "76 mdpl",
    topography: "dataran tinggi",
    temperature: "19-23 °C",
    rainfall: "6.500 mm/tahun",
  },

  /** Administrative boundaries. */
  boundaries: [
    { direction: "Utara", area: "Desa Sindanglaut" },
    { direction: "Timur", area: "Desa Janaka (Kecamatan Jiput)" },
    { direction: "Selatan", area: "Desa Babadsari" },
    { direction: "Barat", area: "Desa Banjarmasin Carita dan Pejamben" },
  ] satisfies Boundary[],

  /** Distance from centres of government. */
  orbitasi: [
    { label: "Pusat Kecamatan Carita", value: "1 km" },
    { label: "Ibu kota Kabupaten Pandeglang", value: "49 km" },
    { label: "Ibu kota Provinsi Banten", value: "78 km" },
  ] satisfies FactItem[],

  /** Land use (total 340 Ha). */
  landUse: [
    { label: "Perkebunan", value: "233 Ha" },
    { label: "Sawah produktif", value: "54 Ha" },
    { label: "Pertanian", value: "36 Ha" },
    { label: "Permukiman", value: "17 Ha" },
  ] satisfies FactItem[],

  administration: {
    rt: "10 RT",
    rw: "4 RW",
    families: "526 KK",
    perangkat: "11 orang (10 laki-laki, 1 perempuan)",
  },

  /** Main livelihoods among the productive-age population. */
  livelihoods: [
    { label: "Petani", value: "250" },
    { label: "Wiraswasta / Pedagang", value: "215" },
    { label: "Buruh tani", value: "204" },
    { label: "Pegawai swasta", value: "85" },
    { label: "Pengrajin", value: "80" },
    { label: "Nelayan", value: "65" },
  ] satisfies FactItem[],

  /** Economic facilities in the village. */
  facilities: [
    { label: "Toko & warung", value: "28" },
    { label: "Usaha pengrajin", value: "100" },
    { label: "Bengkel", value: "4" },
    { label: "Industri menengah", value: "4" },
    { label: "Industri kecil", value: "3" },
    { label: "Warung kelontong", value: "2" },
    { label: "Koperasi", value: "1" },
  ] satisfies FactItem[],

  /** Age distribution (jiwa); the parts sum to the total population. */
  ageGroups: [
    { label: "< 1 tahun", value: 42 },
    { label: "1-6 tahun", value: 131 },
    { label: "7-12 tahun", value: 211 },
    { label: "13-15 tahun", value: 168 },
    { label: "16-19 tahun", value: 247 },
    { label: "20-29 tahun", value: 251 },
    { label: "30-45 tahun", value: 253 },
    { label: "46-49 tahun", value: 272 },
    { label: "50-70 tahun", value: 250 },
  ],

  /** Educational attainment (jiwa). */
  education: [
    { label: "SD", value: 215 },
    { label: "MI", value: 154 },
    { label: "SLTP", value: 135 },
    { label: "Pondok Pesantren", value: 110 },
    { label: "SLTA", value: 75 },
    { label: "TK", value: 55 },
    { label: "Kursus", value: 48 },
    { label: "D1-D3", value: 25 },
    { label: "S1-S3", value: 21 },
  ],

  /** Household water sources. */
  waterSources: [
    { label: "Air sungai", value: 254 },
    { label: "Air tanah", value: 116 },
    { label: "Air PAM", value: 45 },
  ],

  /** Basic infrastructure. */
  infrastructure: [
    { label: "Rumah teraliri listrik", value: "365 rumah" },
    { label: "Jalan dilalui kendaraan roda dua", value: "100%" },
    { label: "Jalan dilalui kendaraan roda empat", value: "75%" },
    { label: "Jalan sudah di-hotmix", value: "40%" },
  ] satisfies FactItem[],

  /** Documented tourism potential (labelled as potensi, not operational). */
  wisata: ["Embung Desa", "Curug Cibanteri", "Bulakan Ciherang"],
} as const;
