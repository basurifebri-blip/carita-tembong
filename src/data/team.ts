import type { StaticImageData } from "next/image";
import type { PersonCardData } from "@/types/person";

import ahmad from "../../public/images/tim/ahmad-ilham-husyairi.png";
import asyfa from "../../public/images/tim/asyfa-humairah.png";
import febrian from "../../public/images/tim/febrian-dwi-lesmana.png";
import ghaida from "../../public/images/tim/ghaida-marbelin.png";
import akmal from "../../public/images/tim/muhammad-akmal.png";
import nurul from "../../public/images/tim/nurul-safira.png";
import retno from "../../public/images/tim/retno-awaliya-wianda.png";
import salsabila from "../../public/images/tim/salsabila-serly-maulina.png";
import dplYuliawati from "../../public/images/tim/dpl-yuliawati-kusumaningrum.png";

/**
 * Data Tim Penyusun website (KKNT IPB University). Nama dan program studi diambil
 * langsung dari label foto yang diberikan tim (tidak dikarang, CLAUDE.md §56).
 * Setiap foto adalah kartu berdesain yang sudah memuat peran dan nama, jadi kartu
 * di halaman ditampilkan apa adanya dan hanya ditambah keterangan fakultas.
 */

export type TeamMember = PersonCardData;

export const teamInfo = {
  name: "Tim Tempura",
  longName: "Tembong Punya Carita",
  institution: "IPB University",
  program: "Kuliah Kerja Nyata Tematik (KKNT)",
  period: "", // TODO: isi periode/tahun KKN, mis. "2025"
  intro:
    "CARITA TEMBONG dibangun oleh Tim Tempura, sekelompok mahasiswa lintas bidang IPB University, sebagai bagian dari program Kuliah Kerja Nyata Tematik (KKNT) di Desa Tembong. Nama Tempura adalah kependekan dari Tembong Punya Carita: semangat untuk merawat, mendata, dan menceritakan setiap sudut desa.",
};

/** Foto grup tim (opsional). Isi dengan import bila fotonya sudah tersedia. */
export const teamGroupPhoto: { image: StaticImageData; alt: string } | null = null;

/** Dosen Pembimbing Lapang. */
export const teamAdvisor: TeamMember | null = {
  name: "dr. Yuliawati Kusumaningrum A.Md.Akup., S.Li., M.A.R.S., M.M., M.K.K., Sp.KKLP.",
  image: dplYuliawati,
  alt: "Kartu Dosen Pembimbing Lapang Tim Tempura: dr. Yuliawati Kusumaningrum.",
};

/** Anggota Tim Tempura. Koordinator Desa (Kordes) ditampilkan pertama. */
export const teamMembers: TeamMember[] = [
  {
    name: "Ahmad Ilham Husyairi",
    role: "Koordinator Desa",
    study: "Fakultas Kehutanan",
    image: ahmad,
    alt: "Kartu anggota Tim Tempura: Ahmad Ilham Husyairi, Koordinator Desa, Fakultas Kehutanan.",
  },
  {
    name: "Asyfa Humairah",
    study: "Fakultas Ekonomi dan Manajemen",
    image: asyfa,
    alt: "Kartu anggota Tim Tempura: Asyfa Humairah, Fakultas Ekonomi dan Manajemen.",
  },
  {
    name: "Febrian Dwi Lesmana",
    study: "Fakultas Sekolah Bisnis",
    image: febrian,
    alt: "Kartu anggota Tim Tempura: Febrian Dwi Lesmana, Fakultas Sekolah Bisnis.",
  },
  {
    name: "Ghaida Marbelin",
    study: "Fakultas Kedokteran dan Gizi",
    image: ghaida,
    alt: "Kartu anggota Tim Tempura: Ghaida Marbelin, Fakultas Kedokteran dan Gizi.",
  },
  {
    name: "Muhammad Akmal",
    study: "Fakultas Teknik dan Teknologi",
    image: akmal,
    alt: "Kartu anggota Tim Tempura: Muhammad Akmal, Fakultas Teknik dan Teknologi.",
  },
  {
    name: "Nurul Safira",
    study: "Fakultas Kedokteran dan Gizi",
    image: nurul,
    alt: "Kartu anggota Tim Tempura: Nurul Safira, Fakultas Kedokteran dan Gizi.",
  },
  {
    name: "Retno Awaliya Wianda",
    study: "Fakultas Perikanan dan Ilmu Kelautan",
    image: retno,
    alt: "Kartu anggota Tim Tempura: Retno Awaliya Wianda, Fakultas Perikanan dan Ilmu Kelautan.",
  },
  {
    name: "Salsabila Serly Maulina",
    study: "Fakultas Kedokteran dan Gizi",
    image: salsabila,
    alt: "Kartu anggota Tim Tempura: Salsabila Serly Maulina, Fakultas Kedokteran dan Gizi.",
  },
];
