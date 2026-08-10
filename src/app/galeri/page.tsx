import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { ExploreCallout } from "@/components/home/ExploreCallout";

import lanskap from "../../../public/images/hero/tembong-lanskap.jpg";
import curugCibanteri from "../../../public/images/hero/curug-cibanteri.jpg";
import aliranSungai from "../../../public/images/wisata/aliran-sungai.jpg";
import bulakan from "../../../public/images/wisata/bulakan-ciherang.jpg";
import embungDesa from "../../../public/images/wisata/Embung Desa.png";
import kebun from "../../../public/images/village/kebun-tembong.jpg";
import saung from "../../../public/images/village/saung-tembong.jpg";
import curugKolam from "../../../public/images/galeri/curug-kolam.jpg";
import curugAirTerjun from "../../../public/images/galeri/curug-air-terjun.jpg";
import curugBebatuan from "../../../public/images/galeri/curug-bebatuan.jpg";
import kampungBilik from "../../../public/images/galeri/kampung-bilik.jpg";
import empingTungku from "../../../public/images/galeri/emping-tungku.jpg";
import opakJemur from "../../../public/images/galeri/opak-jemur.jpg";
import pasarPantai from "../../../public/images/galeri/pasar-pantai-carita.jpg";
import pasarLapak from "../../../public/images/galeri/pasar-lapak.jpg";
import empingPemipihan from "../../../public/images/galeri/emping-pemipihan.jpg";
import opakGiling from "../../../public/images/galeri/opak-giling.jpg";
import opakKukus from "../../../public/images/galeri/opak-kukus.jpg";
import opakTungku from "../../../public/images/galeri/opak-tungku.jpg";
import pengajianMasjid from "../../../public/images/galeri/pengajian-masjid.jpg";
import pengajianLingkaran from "../../../public/images/galeri/pengajian-lingkaran.jpg";
import pengajianKelompok from "../../../public/images/galeri/pengajian-kelompok.jpg";
import pencakSilat from "../../../public/images/galeri/pencak-silat.jpg";
import posyanduEdukasi from "../../../public/images/sehat/posyandu-edukasi.jpg";
import kaderPosyandu from "../../../public/images/sehat/kader-posyandu.jpg";
import kunjunganWamenkes from "../../../public/images/sehat/kunjungan-wamenkes.jpg";
import puskesmasGedung from "../../../public/images/sehat/puskesmas-gedung.jpg";
import posyanduKenanga3 from "../../../public/images/sehat/posyandu-kenanga-3.jpg";
import empingJemurTerpal from "../../../public/images/galeri/emping-jemur-terpal.jpg";
import opakJemurAnyaman from "../../../public/images/galeri/opak-jemur-anyaman.jpg";
import masjidGalaya from "../../../public/images/budaya/masjid-galaya.jpg";
import masjidEksterior from "../../../public/images/budaya/masjid-eksterior.jpg";
import masjidMihrab from "../../../public/images/budaya/masjid-mihrab.jpg";
import masjidBedug from "../../../public/images/budaya/masjid-bedug.jpg";

export const metadata: Metadata = {
  title: "Galeri Tembong",
  description:
    "Galeri foto Desa Tembong: alam, budaya, kehidupan warga, produk UMKM, dan layanan kesehatan, dari Curug Cibanteri hingga masjid, Posyandu, dan penjemuran emping.",
};

type GalleryItem = {
  src: StaticImageData;
  alt: string;
  caption: string;
  category: "Alam" | "Budaya" | "UMKM" | "Kesehatan" | "Desa";
};

const galeri: GalleryItem[] = [
  { src: curugCibanteri, alt: "Curug Cibanteri dengan langit cerah di Desa Tembong.", caption: "Curug Cibanteri", category: "Alam" },
  { src: embungDesa, alt: "Embung Desa Tembong dengan tampungan air di tengah kebun dan pepohonan.", caption: "Embung Desa Tembong", category: "Alam" },
  { src: masjidMihrab, alt: "Mihrab berhias lengkung keemasan dengan karpet merah di sebuah masjid Desa Tembong.", caption: "Mihrab masjid desa", category: "Budaya" },
  { src: kunjunganWamenkes, alt: "Rombongan Wakil Menteri Kesehatan RI dan para kader kesehatan saat kunjungan ke Desa Tembong.", caption: "Kunjungan Wakil Menteri Kesehatan ke Tembong", category: "Kesehatan" },
  { src: empingJemurTerpal, alt: "Ribuan lembar emping melinjo dijemur di atas terpal biru di halaman warga.", caption: "Emping dijemur di halaman warga", category: "UMKM" },
  { src: saung, alt: "Saung bambu di antara pohon kelapa di Desa Tembong.", caption: "Saung tempat warga berkumpul", category: "Desa" },
  { src: masjidGalaya, alt: "Masjid berkubah dengan dinding biru muda dan pagar di kampung Desa Tembong.", caption: "Masjid kampung di Tembong", category: "Budaya" },
  { src: empingTungku, alt: "Pembuatan emping melinjo di atas tungku kayu.", caption: "Membuat emping di tungku kayu", category: "UMKM" },
  { src: posyanduKenanga3, alt: "Bangunan Posyandu Kenanga 3 di Kp. Galaya, Desa Tembong.", caption: "Posyandu Kenanga 3 di Kp. Galaya", category: "Kesehatan" },
  { src: pengajianMasjid, alt: "Warga mengikuti pengajian di dalam masjid di Desa Tembong.", caption: "Pengajian Jumat di masjid desa", category: "Budaya" },
  { src: opakJemurAnyaman, alt: "Opak bulat dijemur berjajar di atas anyaman bambu di halaman rumah warga.", caption: "Opak dijemur di anyaman bambu", category: "UMKM" },
  { src: lanskap, alt: "Lanskap kebun kelapa dan saung Desa Tembong.", caption: "Lanskap Desa Tembong", category: "Alam" },
  { src: empingPemipihan, alt: "Warga memipihkan emping di atas batu di samping melinjo yang disangrai.", caption: "Memipihkan emping di atas batu", category: "UMKM" },
  { src: masjidEksterior, alt: "Masjid berkubah dengan serambi panjang di Desa Tembong.", caption: "Masjid jami di Tembong", category: "Budaya" },
  { src: opakGiling, alt: "Pengrajin menggiling singkong kukus menjadi adonan opak.", caption: "Menggiling singkong untuk opak", category: "UMKM" },
  { src: curugKolam, alt: "Kolam alami di kawasan Curug Cibanteri.", caption: "Kolam alami Curug Cibanteri", category: "Alam" },
  { src: kampungBilik, alt: "Rumah berdinding bilik bambu di sebuah kampung Desa Tembong.", caption: "Rumah bilik di kampung Tembong", category: "Desa" },
  { src: pencakSilat, alt: "Penampilan pencak silat diiringi kendang di Desa Tembong.", caption: "Pencak silat diiringi kendang", category: "Budaya" },
  { src: puskesmasGedung, alt: "Gedung UPT Puskesmas Carita yang berada di Desa Tembong.", caption: "Gedung Puskesmas Carita", category: "Kesehatan" },
  { src: opakKukus, alt: "Potongan singkong dikukus dalam panci besar di atas tungku.", caption: "Singkong dikukus di atas tungku", category: "UMKM" },
  { src: aliranSungai, alt: "Aliran sungai di antara bebatuan dan pepohonan.", caption: "Aliran sungai Cibanteri", category: "Alam" },
  { src: masjidBedug, alt: "Bagian dalam masjid dengan tiang kayu keemasan dan bedug di Desa Tembong.", caption: "Bedug di dalam masjid desa", category: "Budaya" },
  { src: opakJemur, alt: "Opak dijemur di atas para-para bambu.", caption: "Opak dijemur di para-para bambu", category: "UMKM" },
  { src: pasarPantai, alt: "Suasana pasar akhir pekan di kawasan Pantai Carita.", caption: "Akhir pekan di Pasar Pantai Carita", category: "Desa" },
  { src: posyanduEdukasi, alt: "Kegiatan edukasi kesehatan dan Posyandu di Desa Tembong.", caption: "Kegiatan Posyandu di kampung", category: "Kesehatan" },
  { src: curugAirTerjun, alt: "Air terjun kecil di aliran Cibanteri.", caption: "Air terjun kecil di aliran Cibanteri", category: "Alam" },
  { src: pengajianLingkaran, alt: "Warga duduk melingkar dalam pengajian di masjid desa.", caption: "Kebersamaan dalam pengajian", category: "Budaya" },
  { src: opakTungku, alt: "Panci besar mengukus di atas bara kayu bakar.", caption: "Mengukus di atas bara kayu bakar", category: "UMKM" },
  { src: pasarLapak, alt: "Lapak-lapak pedagang di tepi jalan kawasan Pantai Carita.", caption: "Lapak pedagang di tepi jalan pantai", category: "Desa" },
  { src: kaderPosyandu, alt: "Kader kesehatan Desa Tembong di depan gedung Posyandu Kenanga.", caption: "Kader kesehatan Tembong", category: "Kesehatan" },
  { src: pengajianKelompok, alt: "Warga berkumpul dalam pengajian di masjid Desa Tembong.", caption: "Warga dalam pengajian Jumat", category: "Budaya" },
  { src: kebun, alt: "Kebun dan pepohonan hijau di Desa Tembong.", caption: "Kebun dan pepohonan desa", category: "Alam" },
  { src: bulakan, alt: "Mata air jernih mengalir dari sela bebatuan.", caption: "Mata air Bulakan Ciherang", category: "Alam" },
  { src: curugBebatuan, alt: "Air jernih di antara bebatuan di kawasan Cibanteri.", caption: "Air jernih di antara bebatuan", category: "Alam" },
];

export default function GaleriPage() {
  return (
    <>
      <PageHero
        eyebrow="Galeri"
        title="Galeri Tembong"
        description="Wajah Desa Tembong lewat foto: alam, budaya, kehidupan warga, produk UMKM, dan layanan kesehatan. Saring galeri sesuai tema yang ingin Anda telusuri."
        image={lanskap}
        imageAlt="Lanskap Desa Tembong dengan kebun kelapa dan saung."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Galeri" }]}
      />

      <section className="section">
        <Container>
          <GalleryLightbox items={galeri} />

          <p className="mt-10 max-w-2xl text-sm text-secondary">
            Klik foto untuk memperbesar. Galeri ini akan terus bertambah seiring
            dokumentasi kegiatan, tempat, dan kehidupan warga Desa Tembong.
          </p>
        </Container>
      </section>

      <ExploreCallout
        eyebrow="Jelajahi"
        title="Ingin melihat langsung tempat-tempatnya?"
        description="Telusuri potensi alam Desa Tembong beserta status kunjungannya."
        primary={{ label: "Jelajahi Tembong", href: "/jelajahi-tembong" }}
        secondary={{ label: "Kenali Tembong", href: "/kenali-tembong" }}
      />
    </>
  );
}
