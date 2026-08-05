import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Mark } from "@/components/ui/Mark";
import { ExploreCallout } from "@/components/home/ExploreCallout";

import heroImage from "../../../public/images/sehat/puskesmas-carita.jpg";
import posyanduEdukasi from "../../../public/images/sehat/posyandu-edukasi.jpg";
import antropometriTinggi from "../../../public/images/sehat/antropometri-tinggi.jpg";
import pemeriksaanBidan from "../../../public/images/sehat/pemeriksaan-bidan.jpg";
import puskesmasLayanan from "../../../public/images/sehat/puskesmas-layanan.jpg";
import puskesmasGedung from "../../../public/images/sehat/puskesmas-gedung.jpg";
import puskesmasPintu from "../../../public/images/sehat/puskesmas-pintu.jpg";
import puskesmasLorong from "../../../public/images/sehat/puskesmas-lorong.jpg";
import puskesmasTaman from "../../../public/images/sehat/puskesmas-taman.jpg";
import puskesmasAmbulans from "../../../public/images/sehat/puskesmas-ambulans.jpg";
import puskesmasEtikaBatuk from "../../../public/images/sehat/puskesmas-etika-batuk.jpg";
import posyanduKenanga1 from "../../../public/images/sehat/posyandu-kenanga-1.jpg";
import posyanduKenanga2 from "../../../public/images/sehat/posyandu-kenanga-2.jpg";
import posyanduKenanga3 from "../../../public/images/sehat/posyandu-kenanga-3.jpg";

export const metadata: Metadata = {
  title: "Tembong Sehat",
  description:
    "Kesehatan masyarakat Desa Tembong: Posyandu bulanan di tiap RW, kader yang aktif, bidan desa, Puskesmas Carita, dan tiga program unggulan Desa Siaga TB (RESPATI, KAJEDAK, JARING TAS) yang menjadi inspirasi nasional melawan TBC.",
};

/**
 * Tiga program unggulan Desa Siaga TB. Nama dan capaian merujuk pemberitaan
 * resmi (Kementerian Kesehatan RI, Liputan6). Lihat halaman detail untuk sumber.
 */
const programTB: { nama: string; kepanjangan: string; desc: string }[] = [
  {
    nama: "RESPATI",
    kepanjangan: "Remaja Sehat Pejuang Tangguh Berinovasi",
    desc: "Melibatkan remaja desa sebagai penggerak deteksi dan pencegahan TBC di lingkungannya.",
  },
  {
    nama: "KAJEDAK",
    kepanjangan: "Kader Ngajemput Dahak",
    desc: "Kader menjemput sampel dahak langsung dari warga, sehingga pemeriksaan TBC lebih dekat dan mudah dijangkau.",
  },
  {
    nama: "JARING TAS",
    kepanjangan: "Kejar Skrining dan Tangani TB Sampai Tuntas",
    desc: "Mendorong cakupan skrining naik dan memastikan setiap kasus TBC tertangani hingga pengobatannya tuntas.",
  },
];

const kegiatan: { image: StaticImageData; alt: string; caption: string }[] = [
  {
    image: posyanduEdukasi,
    alt: "Kader dan warga mengikuti edukasi kesehatan dalam kegiatan Posyandu di Desa Tembong.",
    caption: "Edukasi kesehatan untuk keluarga",
  },
  {
    image: antropometriTinggi,
    alt: "Pengukuran tinggi badan anak sebagai bagian dari pengambilan data antropometri.",
    caption: "Pengukuran antropometri anak",
  },
  {
    image: pemeriksaanBidan,
    alt: "Pemeriksaan kesehatan warga oleh bidan desa dalam kegiatan Posyandu.",
    caption: "Pemeriksaan bersama bidan desa",
  },
];

const posyanduKenanga: { image: StaticImageData; alt: string; caption: string }[] = [
  {
    image: posyanduKenanga1,
    alt: "Bangunan Posyandu Kenanga 1 di Kp. Salabarang, Desa Tembong.",
    caption: "Posyandu Kenanga 1, Salabarang",
  },
  {
    image: posyanduKenanga2,
    alt: "Papan nama Posyandu Kenanga 2 di Kp. Kadu Kokosan, Desa Tembong.",
    caption: "Posyandu Kenanga 2, Kadu Kokosan",
  },
  {
    image: posyanduKenanga3,
    alt: "Bangunan Posyandu Kenanga 3 di Kp. Galaya, Desa Tembong.",
    caption: "Posyandu Kenanga 3, Galaya",
  },
];

const layananPuskesmas = [
  "Ibu hamil, bersalin, dan nifas",
  "Balita dan anak pra-sekolah",
  "Anak usia sekolah dan remaja",
  "Dewasa dan lansia",
  "Penanggulangan penyakit menular",
  "UGD 24 jam, laboratorium, dan farmasi",
];

const fasilitasPuskesmas: { image: StaticImageData; alt: string; caption: string }[] = [
  {
    image: puskesmasGedung,
    alt: "Gedung UPT Puskesmas Carita dengan papan nama di Desa Tembong.",
    caption: "Gedung Puskesmas Carita",
  },
  {
    image: puskesmasPintu,
    alt: "Pintu masuk dan ruang tunggu UPT Puskesmas Carita.",
    caption: "Pintu masuk dan ruang tunggu",
  },
  {
    image: puskesmasLorong,
    alt: "Lorong ruang pelayanan di dalam Puskesmas Carita.",
    caption: "Lorong ruang pelayanan",
  },
  {
    image: puskesmasTaman,
    alt: "Taman ramah anak dengan kolam kecil di dalam Puskesmas Carita.",
    caption: "Taman ramah anak",
  },
  {
    image: puskesmasAmbulans,
    alt: "Dua ambulans Puskesmas Carita terparkir di bawah kanopi.",
    caption: "Ambulans siaga",
  },
  {
    image: puskesmasEtikaBatuk,
    alt: "Poster etika batuk yang terpasang di dinding Puskesmas Carita.",
    caption: "Edukasi etika batuk",
  },
];

export default function TembongSehatPage() {
  return (
    <>
      <PageHero
        eyebrow="Tembong Sehat"
        title="Menjaga Kesehatan Bersama Masyarakat"
        description="Kesehatan di Tembong dijaga bukan hanya di puskesmas, tetapi juga di balai warga dan Posyandu di setiap kampung, oleh masyarakat untuk masyarakat."
        image={heroImage}
        imageAlt="Gedung Puskesmas Carita yang berada di Kp. Tembol, Desa Tembong."
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Tembong Sehat" },
        ]}
      />

      {/* Posyandu */}
      <section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionTitle
              eyebrow="Posyandu"
              title="Layanan yang Datang ke Setiap Kampung"
            />
            <div className="flex flex-col gap-4 text-secondary">
              <p>
                Setiap bulan, kegiatan Posyandu digelar bergiliran di masing-masing
                RW. Di Tembong terdapat empat RW, yaitu{" "}
                <Mark>Salabarang, Galaya, Kadu Kokosan, dan Tembol</Mark>,
                masing-masing dengan pos <Mark>Posyandu Kenanga</Mark> sendiri.
              </p>
              <p>
                Dalam setiap kegiatan, warga memeriksakan balita, ibu hamil, dan
                lansia. Petugas dan kader melakukan pengambilan data{" "}
                <Mark>antropometri</Mark>, seperti berat dan tinggi badan, serta
                memberi edukasi kesehatan kepada keluarga.
              </p>
              <p>
                Kader kesehatan Desa Tembong dikenal aktif, dan kegiatan ini
                didampingi oleh bidan desa, <Mark>Bidan Evi</Mark>.
              </p>
            </div>
          </div>

          {/* Activity photos */}
          <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kegiatan.map((item) => (
              <figure key={item.caption}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-soft shadow-card">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-secondary">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </Reveal>

          {/* Posyandu Kenanga buildings, one per RW */}
          <div className="mt-16">
            <h3 className="type-h3 text-brand">Posyandu Kenanga di Tiap Kampung</h3>
            <p className="mt-3 max-w-2xl text-secondary">
              Empat pos <Mark>Posyandu Kenanga</Mark> tersebar di kampung-kampung
              Tembong, menjadi tempat warga menimbang balita, memeriksakan ibu
              hamil, dan merawat lansia dari dekat.
            </p>
            <Reveal className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posyanduKenanga.map((item) => (
                <figure key={item.caption}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-soft shadow-card">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-secondary">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Puskesmas Carita */}
      <section className="section bg-surface-muted">
        <Container>
          <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="type-eyebrow">Fasilitas Kesehatan</span>
              <h2 className="type-h2 mt-4 text-brand">Puskesmas Carita di Tembong</h2>
              <p className="mt-6 text-secondary">
                Desa Tembong menjadi lokasi <Mark>UPT Puskesmas Carita</Mark>, di
                Kampung Tembol. Layanannya menjangkau berbagai kelompok warga:
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {layananPuskesmas.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-secondary">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-decorative"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <figure>
              <div className="relative aspect-[3/4] max-h-[520px] overflow-hidden rounded-xl border border-soft shadow-card">
                <Image
                  src={puskesmasLayanan}
                  alt="Papan layanan UPT Puskesmas Carita yang memuat daftar klaster pelayanan."
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 30rem, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-secondary">
                Papan layanan Puskesmas Carita.
              </figcaption>
            </figure>
          </Reveal>

          {/* Puskesmas facility documentary */}
          <Reveal className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fasilitasPuskesmas.map((item) => (
              <figure key={item.caption}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-soft shadow-card">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-secondary">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Desa Siaga TB: tiga program unggulan */}
      <section className="section">
        <Container>
          <div className="max-w-2xl">
            <span className="type-eyebrow">Program Unggulan</span>
            <h2 className="type-h2 mt-4 text-brand">
              Desa Siaga TB, Inspirasi Nasional Melawan TBC
            </h2>
            <p className="type-lead mt-5 text-secondary">
              Desa Tembong dikenal sebagai Desa Siaga TB. Lewat tiga program yang
              saling melengkapi, penanganan tuberkulosis menjadi gerakan warga,
              bukan sekadar urusan puskesmas, sampai Wakil Menteri Kesehatan
              menyebutnya inspirasi nasional.
            </p>
          </div>

          <Reveal className="mt-10 grid gap-6 md:grid-cols-3">
            {programTB.map((program) => (
              <article
                key={program.nama}
                className="flex flex-col rounded-xl border border-soft bg-surface p-6 shadow-card"
              >
                <h3 className="type-h3 text-brand">{program.nama}</h3>
                <p className="mt-1 text-sm font-medium text-cultural">
                  {program.kepanjangan}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  {program.desc}
                </p>
              </article>
            ))}
          </Reveal>

          <div className="mt-8">
            <Button href="/tembong-sehat/kajedak" withArrow>
              Selengkapnya tentang Desa Siaga TB
            </Button>
          </div>

          <p className="mt-6 max-w-3xl text-sm text-secondary">
            Nama dan capaian program merujuk pada pemberitaan resmi, termasuk laman
            Kementerian Kesehatan RI dan liputan media. Rincian serta sumbernya
            ditampilkan pada halaman program.
          </p>
        </Container>
      </section>

      <ExploreCallout
        eyebrow="Ikuti"
        title="Kegiatan yang menghidupkan Tembong"
        description="Dari Posyandu hingga gotong royong, banyak yang bergerak di desa setiap pekan."
        primary={{ label: "Lihat Kegiatan", href: "/kegiatan" }}
        secondary={{ label: "Kabar Tembong", href: "/kabar-tembong" }}
      />
    </>
  );
}
