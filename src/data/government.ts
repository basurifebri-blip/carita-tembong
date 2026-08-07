import type { Official, OrgGroup } from "@/types/village";
import adangKosasih from "../../public/images/pemerintahan/adang-kosasih.png";
import adlah from "../../public/images/pemerintahan/adlah.png";

/**
 * Village government structure for Desa Tembong.
 *
 * Source: the official organisation boards displayed at the village office
 * (Struktur Organisasi Pemerintahan, BPD, LPM, and the Daftar Perangkat Desa
 * dated 1 Januari 2024).
 *
 * PRIVACY: only public names and public roles are stored here. Personal data
 * shown on those boards — dates of birth and home addresses — is deliberately
 * omitted (CLAUDE.md §57). Health-related boards (e.g. the TB patient map) are
 * not used at all.
 */
export const governmentSource =
  "Papan struktur organisasi Pemerintah Desa Tembong";

export const kepalaDesa: Official = {
  name: "Adang Kosasih, S.Pd",
  role: "Kepala Desa",
  image: adangKosasih,
  imageAlt:
    "Foto resmi Adang Kosasih, S.Pd, Kepala Desa Tembong, mengenakan seragam dinas.",
};

export const sekretarisDesa: Official = {
  name: "Herman Hidayat, S.Pd",
  role: "Sekretaris Desa",
};

/** Perangkat desa beneath the Kepala Desa and Sekretaris. */
export const perangkatGroups: OrgGroup[] = [
  {
    title: "Kepala Urusan (Kaur)",
    members: [
      { name: "Tini Pebrianti, S.Pd", role: "Kaur Tata Usaha & Umum" },
      { name: "Maman", role: "Kaur Perencanaan" },
      { name: "Asep S., SE", role: "Kaur Keuangan" },
    ],
  },
  {
    title: "Kepala Seksi (Kasi)",
    members: [
      { name: "Noviandri, S.Pd", role: "Kasi Pemerintahan" },
      { name: "Eki Zakinur, SE", role: "Kasi Pelayanan" },
      { name: "Irawan", role: "Kasi Kesejahteraan" },
    ],
  },
  {
    title: "Kepala Dusun (Kadus)",
    members: [
      { name: "Jaelani", role: "Kepala Dusun" },
      { name: "Madrais, S.Ag", role: "Kepala Dusun" },
    ],
  },
];

/** Village institutions. */
export const institutions: OrgGroup[] = [
  {
    title: "Badan Permusyawaratan Desa (BPD)",
    members: [
      { name: "Jumhadi", role: "Ketua" },
      { name: "Maesaroh", role: "Wakil Ketua" },
      { name: "Mahmud Taufik", role: "Sekretaris" },
      { name: "Samsudin", role: "Anggota" },
      { name: "Rahmat", role: "Anggota" },
    ],
  },
  {
    title: "Lembaga Pemberdayaan Masyarakat (LPM)",
    members: [
      { name: "Ardali", role: "Ketua" },
      { name: "Asjaya", role: "Wakil Ketua" },
      { name: "Nurman", role: "Sekretaris" },
      { name: "Risman", role: "Bendahara" },
      { name: "Ust. Enjat", role: "Seksi Keagamaan & Pendidikan" },
      { name: "Santama", role: "Seksi Pemuda, Remaja & Olahraga" },
      { name: "Masnah", role: "Seksi Pemberdayaan Perempuan & UMKM" },
      { name: "Sobari", role: "Seksi Seni Budaya & Keamanan" },
      { name: "Basri", role: "Seksi Pembangunan" },
    ],
  },
  {
    title: "TP PKK",
    members: [
      {
        name: "Adlah, S.Pd",
        role: "Ketua",
        image: adlah,
        imageAlt:
          "Foto resmi Adlah, S.Pd, Ketua Tim Penggerak PKK Desa Tembong.",
      },
    ],
  },
];
