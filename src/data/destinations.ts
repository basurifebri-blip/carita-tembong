import type { Destination } from "@/types/tourism";
import curugImg from "../../public/images/hero/curug-cibanteri.jpg";
import bulakanImg from "../../public/images/wisata/bulakan-ciherang.jpg";

/**
 * Documented tourism potential of Desa Tembong.
 * Names come from the official village profile (POTENSI WISATA). All three are
 * marked "Potensial Dikembangkan" because none is verified as an operational,
 * facility-ready destination (editorial-guideline §34). Photos are used only
 * where the location is confirmed.
 */
export const destinationSource = "Profil Desa Tembong, 17 Juni 2026";

export const destinations: Destination[] = [
  {
    slug: "curug-cibanteri",
    name: "Curug Cibanteri",
    category: "Curug",
    status: "Potensial Dikembangkan",
    image: curugImg,
    summary:
      "Di antara rimbun pepohonan, air jatuh menuruni bebatuan dan berkumpul dalam kolam kecil yang jernih. Curug Cibanteri masih alami dan tenang, salah satu sudut Tembong yang paling menyegarkan.",
  },
  {
    slug: "embung-desa",
    name: "Embung Desa",
    category: "Embung",
    status: "Potensial Dikembangkan",
    summary:
      "Tampungan air yang menjadi cadangan bagi ladang dan kehidupan warga. Embung Desa menyimpan potensi untuk tumbuh menjadi ruang publik yang menyatu dengan alam. Dokumentasi lengkapnya akan menyusul.",
  },
  {
    slug: "bulakan-ciherang",
    name: "Bulakan Ciherang",
    category: "Mata Air",
    status: "Potensial Dikembangkan",
    image: bulakanImg,
    summary:
      "Air bersih memancar dari sela bebatuan tanpa henti. Bulakan Ciherang adalah salah satu mata air yang menghidupi keseharian warga Tembong, dari dapur hingga sawah.",
  },
];
