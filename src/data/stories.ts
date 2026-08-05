import type { Story } from "@/types/story";
import pengajianImage from "../../public/images/galeri/pengajian-masjid-luas.jpg";
import kampungImage from "../../public/images/galeri/kampung-bilik.jpg";
import silatImage from "../../public/images/galeri/pencak-silat.jpg";

/**
 * Editorial stories of Desa Tembong. All facts come from the village (names,
 * places, schedules); nothing is invented (CLAUDE.md §56). These power both the
 * /cerita-budaya listing and each /cerita-budaya/[slug] detail page.
 */
export const stories: Story[] = [
  {
    slug: "pengajian-jumat",
    eyebrow: "Keagamaan",
    category: "Keagamaan",
    title: "Jumat yang Menghubungkan Kampung",
    summary:
      "Setiap Jumat, pengajian di Tembong berpindah dari kampung ke kampung, merawat silaturahmi antar warga empat kampung.",
    image: pengajianImage,
    imageAlt: "Warga mengikuti pengajian di dalam masjid di Desa Tembong.",
    caption: "Pengajian Jumat di salah satu masjid Desa Tembong.",
    paragraphs: [
      [
        "Setiap Jumat, pengajian di Tembong tidak menetap di satu tempat. Ia berpindah dari kampung ke kampung, dari satu RW ke RW lain, menyinggahi masjid-masjid di empat kampung: ",
        { mark: "Salabarang, Galaya, Kadu Kokosan, dan Tembol" },
        ".",
      ],
      [
        "Di dalamnya, warga membahas ",
        { mark: "fiqih" },
        " dari kitab-kitab para ulama terdahulu. Jamaahnya datang dari berbagai usia, meski paling banyak adalah para bapak.",
      ],
      [
        "Lebih dari sekadar rutinitas, pengajian Jumat menjadi cara warga menjaga silaturahmi antar kampung. Dengan berpindah tempat, warga ikut singgah ke berbagai masjid desa, dan pertemuan itu merawat tali persaudaraan yang menghubungkan seluruh Tembong.",
      ],
    ],
  },
  {
    slug: "jumat-bersih",
    eyebrow: "Gotong Royong",
    category: "Gotong Royong",
    title: "Menjaga Desa Lewat Jumat Bersih",
    summary:
      "Dari inisiatif warga sendiri, Jumat Bersih menjaga lingkungan kampung sekaligus mempererat gotong royong.",
    image: kampungImage,
    imageAlt:
      "Rumah-rumah berdinding bilik bambu di sebuah kampung Desa Tembong.",
    caption: "Salah satu sudut kampung di Desa Tembong.",
    paragraphs: [
      [
        "Pada Jumat pagi, sebagian warga Tembong turun bersama membersihkan lingkungan kampung. Kegiatan Jumat Bersih ini tumbuh dari inisiatif warga sendiri dan digerakkan oleh Kepala Desa, ",
        { mark: "Adang Kosasih" },
        ".",
      ],
      [
        "Tujuannya sederhana namun penting: menjaga lingkungan kampung tetap bersih, sekaligus mempererat tali persaudaraan antar warga melalui gotong royong.",
      ],
    ],
    note: "Dokumentasi foto kegiatan ini masih dikumpulkan dan akan ditambahkan di sini.",
  },
  {
    slug: "pencak-silat",
    eyebrow: "Seni & Warisan",
    category: "Seni & Warisan",
    title: "Gerak yang Menjaga Warisan",
    summary:
      "Perguruan Cibinong menjaga pencak silat dan debus di Tembong, latihan rutin malam Minggu dan malam Rabu.",
    image: silatImage,
    imageAlt:
      "Penampilan pencak silat diiringi tabuhan kendang di halaman rumah warga Desa Tembong.",
    caption: "Latihan dan penampilan pencak silat di Desa Tembong.",
    paragraphs: [
      [
        "Di Desa Tembong, tradisi pencak silat dijaga oleh ",
        { mark: "Perguruan Cibinong" },
        " yang diketuai oleh ",
        { mark: "Kang Alek" },
        ". Latihan digelar rutin setiap malam Minggu dan malam Rabu, diiringi tabuhan kendang yang menghidupkan suasana.",
      ],
      [
        "Selain gerak bela diri, di dalamnya juga hidup ",
        { mark: "debus" },
        ", kesenian tradisional khas Banten yang memadukan seni bela diri dengan atraksi ketahanan tubuh.",
      ],
      [
        "Bagi generasi muda, latihan ini menjadi ruang untuk mengenal gerak, disiplin, dan warisan budaya yang diturunkan dari generasi sebelumnya.",
      ],
    ],
  },
];

export function getStory(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}
