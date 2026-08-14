/**
 * Global site configuration for CARITA TEMBONG.
 *
 * Contact, social, and institutional values are intentionally left as explicit
 * placeholders. Per the Editorial Guideline (§80) and CLAUDE.md (§56), real
 * village data must be verified before it appears on the site — never invent
 * addresses, phone numbers, or accounts.
 */
export const siteConfig = {
  name: "CARITA TEMBONG",
  tagline: "Setiap Sudut Punya Cerita.",
  description:
    "Portal digital Desa Tembong yang menghadirkan cerita masyarakat, budaya, potensi lokal, wisata, kegiatan desa, dan kehidupan yang tumbuh di Tembong.",
  location: "Desa Tembong, Kecamatan Carita, Kabupaten Pandeglang, Banten",

  /** Placeholders — verify with the village before publishing. */
  contact: {
    address: "[Alamat resmi desa]",
    email: "[Email resmi desa]",
    phone: "[Nomor kontak resmi]",
  },

  /** Empty until official accounts are confirmed. */
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },

  institutional: {
    village: "Pemerintah Desa Tembong",
    district: "Kecamatan Carita",
    regency: "Kabupaten Pandeglang",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/**
 * Canonical base URL for absolute links (sitemap, robots, canonical, OG). Reads
 * NEXT_PUBLIC_SITE_URL and falls back to the documented production domain.
 * Trailing slashes are stripped so `${siteUrl}/path` is always well-formed.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://desatembong.com"
).replace(/\/+$/, "");
