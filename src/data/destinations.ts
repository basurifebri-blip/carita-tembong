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
    story: [
      "Bulakan Ciherang sudah lama menjadi sumber air bagi warga Tembong. Mata air ini berdiri di atas tanah wakaf dan dijaga secara turun-temurun oleh keluarga Ketua RW setempat.",
      "Dahulu mata air ini berupa tempat terbuka. Seiring waktu, warga memberi penutup di sekelilingnya agar lebih terjaga, baik kebersihannya maupun kesopanan bagi yang mandi dan mengambil air.",
    ],
    lore: {
      heading: "Karomah yang Dipercaya Warga",
      body: [
        "Bagi warga Tembong, Bulakan Ciherang bukan sekadar mata air biasa. Menurut kepercayaan yang hidup di masyarakat, mata air ini dianggap sebagai karomah yang berkaitan dengan Syekh Harun, dan sumbernya dipercaya berhubungan hingga ke Gunung Karang.",
        "Warga meyakini keberkahannya hadir bagi mereka yang datang dengan niat baik dan keyakinan kepada Allah. Dahulu ada pula tradisi melemparkan koin ke mata air. Kisah-kisah ini adalah tradisi lisan yang dipelihara masyarakat, bukan keterangan yang dapat diverifikasi secara ilmiah.",
        "Nama Bulakan Ciherang dikenal hingga ke luar desa, sebagian setelah sempat terekspos di media, dan tidak sedikit orang dari luar daerah yang datang berkunjung. Warga menuturkan bahwa mata air ini tetap terjaga sebagai milik bersama, dan menurut cerita mereka, upaya mengambil airnya untuk kepentingan komersial dari luar tidak pernah benar-benar terlaksana.",
      ],
    },
    etiquette: [
      "Jaga kesopanan di sekitar mata air. Warga menganjurkan tetap berpakaian pantas, misalnya mengenakan sarung, dan tidak menghadap langsung ke arah sumber air saat mandi.",
      "Datang dengan niat baik dan hormati mata air sebagai tempat yang disucikan warga.",
      "Jaga kebersihan, jangan mengotori atau merusak lingkungan di sekitarnya.",
    ],
    note: "Informasi dihimpun dari penuturan warga dan penjaga mata air Desa Tembong.",
  },
];
