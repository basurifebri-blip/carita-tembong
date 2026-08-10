import type { Product } from "@/types/product";

import empingImage from "../../public/images/galeri/emping-tungku.jpg";
import empingPemipihan from "../../public/images/galeri/emping-pemipihan.jpg";
import empingSangrai from "../../public/images/galeri/emping-sangrai.jpg";
import empingJemur from "../../public/images/galeri/emping-jemur.jpg";
import empingPengrajin from "../../public/images/galeri/emping-pengrajin.jpg";
import opakImage from "../../public/images/galeri/opak-jemur.jpg";
import opakGiling from "../../public/images/galeri/opak-giling.jpg";
import opakKukus from "../../public/images/galeri/opak-kukus.jpg";
import opakAdonan from "../../public/images/galeri/opak-adonan.jpg";
import opakCetak from "../../public/images/galeri/opak-cetak.jpg";
import barokahOpak from "../../public/images/umkm/barokah/opak-singkong-barokah.png";
import barokahEmpingManis from "../../public/images/umkm/barokah/emping-barokah-manis.png";
import barokahEmpingOriginal from "../../public/images/umkm/barokah/emping-barokah-original.png";

/**
 * Local UMKM products of Desa Tembong, story-first (CLAUDE.md §25). Facts come
 * from the makers; contact numbers are omitted until verified + consented (§56-57)
 * so the detail page shows an honest fallback rather than a fake link.
 */
export const products: Product[] = [
  {
    slug: "emping-opak-barokah",
    name: "Emping & Opak Barokah",
    tag: "UMKM Tembong",
    brand: "Barokah",
    summary:
      "Usaha rumahan Ibu Siti Aminah yang menghadirkan emping melinjo dan opak singkong bercita rasa khas Carita, dengan bahan mentah yang dihimpun dari pengrajin Salabarang dan Galaya.",
    cardImage: barokahEmpingManis,
    cardAlt:
      "Emping Barokah produksi Ibu Siti Aminah dalam kemasan bersama emping siap santap.",
    heroImage: barokahEmpingOriginal,
    heroAlt:
      "Emping Barokah rasa original produksi Ibu Siti Aminah di Desa Tembong, Carita.",
    storyTitle: "Dari Pengrajin Desa ke Pasar Antarkota",
    story: [
      [
        "Ibu Siti Aminah mengembangkan merek ",
        { mark: "Emping & Opak Barokah" },
        " dari dapur produksi rumahan di Desa Tembong. Emping dan opak mentah dibeli dari para pengrajin di ",
        { mark: "Salabarang dan Galaya" },
        ", kemudian diolah, diberi pilihan rasa, dikemas, dan dipasarkan.",
      ],
      [
        "Keunggulannya terletak pada rasa yang membawa ciri khas Carita. Produk ini telah dikirim hingga ",
        { mark: "Bogor, Jakarta, dan sejumlah kota lain" },
        ", baik untuk camilan maupun oleh-oleh.",
      ],
      [
        "Usaha ini telah memiliki ",
        { mark: "sertifikat Halal dan PIRT" },
        ". Dalam memenuhi pesanan tertentu, kapasitas produksinya dapat mencapai ",
        { mark: "1 ton" },
        ", menyesuaikan permintaan pasar.",
      ],
      [
        "Ketersediaan buah melinjo menjadi tantangan utama. Ketika pasokan melinjo di pasar berkurang, harga bahan baku dan harga emping ikut berubah.",
      ],
    ],
    steps: [
      "Pengrajin desa",
      "Bahan mentah",
      "Sortir",
      "Pengolahan rasa",
      "Pengemasan",
      "Distribusi",
    ],
    gallery: [
      {
        image: barokahOpak,
        alt: "Opak Singkong Barokah produksi Ibu Siti Aminah dalam kemasan dan tersaji di piring.",
        caption: "Opak Singkong Barokah",
      },
      {
        image: barokahEmpingManis,
        alt: "Emping Barokah bercita rasa gurih manis dalam kemasan dan tersaji di piring.",
        caption: "Emping Barokah varian rasa",
      },
      {
        image: barokahEmpingOriginal,
        alt: "Emping Barokah rasa original dalam kemasan dan tersaji di piring.",
        caption: "Emping Barokah rasa original",
      },
    ],
    businessFacts: [
      { label: "Produsen", value: "Ibu Siti Aminah" },
      { label: "Dapur produksi", value: "Rumahan di Desa Tembong" },
      { label: "Mitra pengrajin", value: "Salabarang dan Galaya" },
      { label: "Perizinan", value: "Sertifikat Halal dan PIRT" },
      { label: "Kapasitas", value: "Hingga 1 ton sesuai permintaan" },
      { label: "Jangkauan", value: "Bogor, Jakarta, dan kota lainnya" },
    ],
    prices: [
      { label: "Kemasan eceran", value: "Mulai Rp10.000" },
      { label: "Emping melinjo", value: "Rp60.000–Rp70.000/kg" },
      { label: "Opak singkong", value: "Rp30.000/kg" },
    ],
    variants: ["Original", "Balado", "Pedas manis"],
    catalog: [
      {
        name: "Emping Barokah Original",
        image: barokahEmpingOriginal,
        alt: "Kemasan Emping Barokah rasa original produksi Ibu Siti Aminah.",
        description: "Emping melinjo renyah dengan rasa original yang ringan dan gurih.",
        price: "Mulai Rp10.000 · Rp60.000–Rp70.000/kg",
      },
      {
        name: "Emping Barokah Varian Rasa",
        image: barokahEmpingManis,
        alt: "Kemasan Emping Barokah dengan pilihan rasa balado dan pedas manis.",
        description: "Emping melinjo dengan pilihan rasa balado dan pedas manis khas Carita.",
        price: "Mulai Rp10.000 · Rp60.000–Rp70.000/kg",
      },
      {
        name: "Opak Singkong Barokah",
        image: barokahOpak,
        alt: "Kemasan Opak Singkong Barokah dengan pilihan rasa balado dan original.",
        description: "Camilan singkong renyah dengan pilihan rasa original dan balado.",
        price: "Mulai Rp10.000 · Rp30.000/kg",
      },
    ],
    contact: {
      name: "Ibu Siti Aminah",
      whatsapp: "+62 838-4487-4847",
    },
  },
  {
    slug: "emping-melinjo",
    name: "Emping Melinjo",
    tag: "Produk Unggulan",
    summary:
      "Biji melinjo disangrai, dikupas, lalu dipipihkan satu per satu menjadi lembaran tipis sebelum dijemur. Nyaris seluruhnya dikerjakan manual di rumah warga.",
    cardImage: empingImage,
    cardAlt: "Pembuatan emping melinjo di atas tungku kayu di Desa Tembong.",
    heroImage: empingPemipihan,
    heroAlt:
      "Warga memipihkan emping melinjo di atas batu di dekat tungku kayu di Desa Tembong.",
    storyTitle: "Di Balik Sekeping Emping",
    story: [
      [
        "Emping dibuat dari biji melinjo. Biji ",
        { mark: "disangrai" },
        " di atas tungku kayu, lalu dikupas kulitnya. Bagian dalamnya dipipihkan satu per satu di atas batu, disimpan sejenak di satu wadah, kemudian ",
        { mark: "dijemur" },
        " hingga kering dan siap digoreng.",
      ],
      [
        "Ketebalan emping punya banyak versi. Ada yang dipipihkan dari ",
        { mark: "satu biji melinjo" },
        ", tiga, lima, tujuh, hingga ",
        { mark: "dua belas biji" },
        " untuk emping berukuran besar. Semakin banyak bijinya, semakin lebar dan tebal lembarannya.",
      ],
      [
        "Kendala utama datang dari bahan baku. Melinjo adalah buah ",
        { mark: "musiman" },
        ", sehingga ketersediaannya, dan juga produksi emping, ikut naik-turun mengikuti musim.",
      ],
    ],
    steps: [
      "Melinjo",
      "Disangrai",
      "Dikupas",
      "Dipipihkan",
      "Disimpan",
      "Dijemur",
      "Emping",
    ],
    gallery: [
      {
        image: empingSangrai,
        alt: "Warga menyangrai biji melinjo dalam kuali tanah di atas tungku kayu.",
        caption: "Menyangrai biji melinjo",
      },
      {
        image: empingJemur,
        alt: "Lembaran emping dijemur berjajar di atas papan kayu.",
        caption: "Emping dijemur hingga kering",
      },
      {
        image: empingPengrajin,
        alt: "Seorang pengrajin berdiri di antara para-para tempat emping dijemur.",
        caption: "Pengrajin dan para-para jemurannya",
      },
    ],
    contact: {
      name: "Kang Hendrik Galaya",
      whatsapp: "+62 819-5351-1988",
    },
  },
  {
    slug: "opak",
    name: "Opak",
    tag: "Produk Lokal",
    summary:
      "Adonan singkong dibentuk bulat tipis dan dijemur di bawah sinar matahari hingga kering, siap digoreng menjadi camilan renyah khas desa.",
    cardImage: opakImage,
    cardAlt:
      "Opak dijemur di atas para-para bambu di halaman rumah warga Desa Tembong.",
    heroImage: opakGiling,
    heroAlt:
      "Seorang pengrajin menggiling singkong kukus dengan gilingan tangan, di sampingnya opak dijemur.",
    storyTitle: "Di Balik Sekeping Opak",
    story: [
      [
        "Opak Tembong berbahan dasar ",
        { mark: "singkong" },
        ". Pengrajin mulai dengan menyiapkan ",
        { mark: "kayu bakar" },
        ", lalu membeli singkong dari pemilik kebun. Singkong dikupas dan dikukus hingga matang, kemudian ditumbuk atau digiling sampai lembut.",
      ],
      [
        "Adonan itu dipipihkan dan dicetak satu per satu berbentuk lingkaran. Langkah terakhir, opak ",
        { mark: "dijemur di bawah sinar matahari" },
        " sampai benar-benar kering dan siap digoreng.",
      ],
      [
        "Kendala terbesar datang saat ",
        { mark: "musim hujan" },
        ", ketika matahari sulit diandalkan untuk mengeringkan opak, sehingga produksi ikut melambat.",
      ],
    ],
    steps: [
      "Kayu bakar",
      "Singkong",
      "Dikupas",
      "Dikukus",
      "Ditumbuk",
      "Dicetak bulat",
      "Dijemur",
    ],
    gallery: [
      {
        image: opakKukus,
        alt: "Potongan singkong dikukus dalam panci besar di atas tungku kayu.",
        caption: "Singkong dikukus hingga matang",
      },
      {
        image: opakAdonan,
        alt: "Adonan singkong yang telah dihaluskan di dalam wadah.",
        caption: "Adonan singkong yang dihaluskan",
      },
      {
        image: opakCetak,
        alt: "Adonan opak dicetak berbentuk lingkaran tipis di atas alas.",
        caption: "Adonan dicetak bulat tipis",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
