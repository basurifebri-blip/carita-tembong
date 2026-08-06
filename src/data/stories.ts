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
      "Padepokan Bulakan Cibinong 2 menghidupkan kembali pencak silat aliran Cimande dan debus di Desa Tembong, dari halaman rumah di Kampung Salabarang hingga panggung tingkat kabupaten.",
    image: silatImage,
    imageAlt:
      "Penampilan pencak silat diiringi tabuhan kendang di halaman rumah warga Desa Tembong.",
    caption: "Latihan dan penampilan pencak silat di Desa Tembong.",
    paragraphs: [
      [
        "Di Kampung Salabarang, tradisi pencak silat Desa Tembong dijaga oleh ",
        { mark: "Padepokan Bulakan Cibinong 2" },
        ". Padepokan ini didirikan pada tahun 2014 oleh Kang Alek, yang sekaligus menjadi ketua dan pelatihnya. Jurus yang diajarkan berkiblat pada aliran ",
        { mark: "Cimande" },
        ", aliran silat legendaris dari daerah Ciawi, Bogor.",
      ],
      [
        "Silat sebenarnya sudah lama hidup di Tembong, tetapi sempat ",
        { mark: "pakem" },
        ", istilah setempat untuk vakum atau mati suri, setelah kepengurusan para sesepuh terdahulu di bawah Pak Samsudi perlahan surut. Dengan dukungan dari pemerintah desa di bawah Kepala Desa ",
        { mark: "Adang Kosasih" },
        ", Kang Alek membangunnya kembali agar gairah bela diri warga tumbuh lagi.",
      ],
      [
        "Nama padepokan menyimpan kisahnya sendiri. Menurut cerita yang dituturkan Kang Alek, nama ",
        { mark: "Bulakan Cibinong" },
        " diambil dari sumber mata air setempat, dan disarankan oleh seseorang yang datang menemuinya secara khusus saat padepokan hendak dirintis. Kisah ini hidup sebagai tuturan warga, bukan keterangan yang dapat diverifikasi.",
      ],
      [
        "Berbeda dari bela diri modern, padepokan ini tidak memakai sistem sabuk atau tingkatan formal. Latihannya justru menonjolkan keindahan seni gerak. Selain tangan kosong, murid dilatih memakai senjata tradisional berupa ",
        { mark: "golok dan batang besi" },
        ", dan pada pementasan besar ditampilkan pula ",
        { mark: "debus" },
        ", atraksi ketahanan tubuh khas Banten, termasuk permainan api.",
      ],
      [
        "Denyut latihan dan pementasan datang dari ",
        { mark: "kendang" },
        " yang ditabuh warga asli Tembong. Menurut kepercayaan warga, kendang ini tidak boleh ditabuh sembarangan: sesepuh yang menguasai silsilahnya membacakan doa terlebih dahulu sebelum kendang dimainkan.",
      ],
      [
        "Sebelum tampil di depan umum atau memperagakan debus, warga juga menjalankan ritual penyucian alat menggunakan ",
        { mark: "air putih asem dan air susu" },
        " yang dipercikkan pada alat musik. Tradisi ini dijaga sebagai bagian dari adab dan keselamatan pertunjukan.",
      ],
      [
        "Latihan bersama digelar di halaman depan rumah Kang Alek, setiap ",
        { mark: "malam Minggu dan malam Rabu" },
        ", diiringi tabuhan kendang. Di hari biasa, murid tetap boleh berlatih mandiri tanpa iringan musik. Pesertanya beragam, dari anak usia SMP dan Madrasah Tsanawiyah yang paling banyak, hingga warga dewasa berusia 20 sampai 40 tahun.",
      ],
      [
        "Keanggotaan terbuka bagi siapa saja, dengan satu syarat yang tidak bisa ditawar: setiap murid wajib mengantongi ",
        { mark: "izin orang tua" },
        " sebelum mulai berlatih.",
      ],
      [
        "Bagi Tembong, padepokan ini menjadi ruang yang mempersatukan anak muda dan warga. Kelompok ini kerap diundang mengisi acara di luar desa, bahkan menempuh perjalanan jauh bersama-sama hingga ke Serang dan Pandeglang, sambil membawa nama ",
        { mark: "Kecamatan Carita" },
        ".",
      ],
      [
        "Bagi Kang Alek, semua ini adalah soal menjaga apa yang ia sebut ",
        { mark: "makan tradisi" },
        ", warisan yang melekat pada identitas warga dan tidak boleh dibiarkan hilang. Harapannya sederhana: memiliki ",
        { mark: "dua set kendang" },
        " agar latihan lebih meriah dan dapat menyebar ke RT-RT lain, sehingga regenerasi anak-anak berjalan lebih maksimal.",
      ],
      [
        "“Harapannya supaya meriah lagi, anak-anak itu supaya lebih banyak lagi, jangan sampai putus. Jangan hilang, itu makan tradisi,” ucap Kang Alek.",
      ],
    ],
    note: "Cerita ini dihimpun dari wawancara dengan Kang Alek, pendiri dan ketua padepokan. Nama lengkap padepokan: Padepokan Bulakan Cibinong 2, 7 Bidadari Pancabuana Alam.",
  },
];

export function getStory(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}
