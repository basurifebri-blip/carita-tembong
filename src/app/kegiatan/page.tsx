import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ExploreCallout } from "@/components/home/ExploreCallout";
import heroImage from "../../../public/images/kegiatan/gotong-royong-saung.jpg";
import grBangun from "../../../public/images/kegiatan/gotong-royong-bangun.jpg";
import grJalan from "../../../public/images/kegiatan/gotong-royong-jalan.jpg";
import grKonstruksi from "../../../public/images/kegiatan/gotong-royong-konstruksi.jpg";
import jbWarga from "../../../public/images/kegiatan/jumat-bersih-warga.jpg";
import umbulUmbul from "../../../public/images/kegiatan/kampung-umbul-umbul.jpg";
import bankSampah from "../../../public/images/kegiatan/bank-sampah.jpg";
import bankSampahWarga from "../../../public/images/kegiatan/bank-sampah-warga.jpg";
import hariJadi from "../../../public/images/kegiatan/hari-jadi-desa.jpg";

export const metadata: Metadata = {
  title: "Kegiatan",
  description:
    "Kegiatan masyarakat Desa Tembong: Jumat Bersih, pengajian, Posyandu, gotong royong, dan latihan pencak silat yang menghidupkan desa.",
};

const kegiatan = [
  {
    title: "Jumat Bersih",
    when: "Hari Jumat",
    body: "Warga bergotong royong membersihkan jalan dan lingkungan permukiman bersama-sama.",
  },
  {
    title: "Pengajian Jumat",
    when: "Hari Jumat",
    body: "Kegiatan keagamaan yang menghubungkan warga dari berbagai kampung di desa.",
  },
  {
    title: "Posyandu",
    when: "Rutin",
    body: "Pemantauan kesehatan ibu dan anak yang digerakkan oleh para kader desa.",
  },
  {
    title: "Gotong Royong",
    when: "Berkala",
    body: "Kerja bersama warga untuk perbaikan fasilitas dan kepentingan umum desa.",
  },
  {
    title: "Latihan Pencak Silat",
    when: "Rutin",
    body: "Ruang bagi generasi muda untuk belajar gerak, disiplin, dan warisan budaya.",
  },
  {
    title: "Musyawarah Desa",
    when: "Sesuai agenda",
    body: "Warga dan perangkat desa bertemu untuk membahas rencana dan keputusan bersama.",
  },
];

const dokumentasi = [
  {
    image: jbWarga,
    alt: "Warga membersihkan tepi jalan desa dalam kegiatan Jumat Bersih di Desa Tembong.",
    caption: "Membersihkan tepi jalan desa",
  },
  {
    image: grJalan,
    alt: "Warga dan anak muda menata batu di jalan kampung Desa Tembong.",
    caption: "Menata jalan kampung bersama",
  },
  {
    image: grBangun,
    alt: "Warga bergotong royong memperbaiki bangunan berdinding bilik di Desa Tembong.",
    caption: "Memperbaiki bangunan warga",
  },
  {
    image: grKonstruksi,
    alt: "Warga bergotong royong dalam pembangunan di kampung Desa Tembong.",
    caption: "Gotong royong pembangunan",
  },
  {
    image: umbulUmbul,
    alt: "Jalan kampung Desa Tembong berhias umbul-umbul menyambut hari besar desa.",
    caption: "Kampung berhias saat hari besar desa",
  },
  {
    image: bankSampah,
    alt: "Warga muda mengelola Posko Bank Sampah Gerai Mandiri di Kampung Tembol, Desa Tembong.",
    caption: "Bank Sampah Gerai Mandiri, Kp. Tembol",
  },
  {
    image: bankSampahWarga,
    alt: "Warga memilah sampah di posko Bank Sampah Desa Tembong.",
    caption: "Memilah sampah di bank sampah desa",
  },
  {
    image: hariJadi,
    alt: "Penampilan seni pada peringatan Hari Jadi Desa Tembong ke-36.",
    caption: "Hari Jadi Desa Tembong ke-36",
  },
];

export default function KegiatanPage() {
  return (
    <>
      <PageHero
        eyebrow="Kegiatan"
        title="Denyut Keseharian Desa"
        description="Tembong bergerak setiap pekan. Dari membersihkan lingkungan hingga menjaga tradisi, kegiatan warga menjadi tanda desa yang hidup."
        image={heroImage}
        imageAlt="Warga Desa Tembong bergotong royong memindahkan saung bersama-sama."
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Kegiatan" },
        ]}
      />

      <section className="section">
        <Container>
          <SectionTitle
            eyebrow="Rutinitas Warga"
            title="Kegiatan yang Menghidupkan Tembong"
            description="Sejumlah kegiatan yang menjadi bagian dari keseharian masyarakat desa."
          />
          <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kegiatan.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-xl border border-soft bg-surface p-6"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-surface-muted px-3 py-1 text-xs font-semibold text-secondary">
                  {item.when}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-brand">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {item.body}
                </p>
              </article>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="section bg-surface-muted">
        <Container>
          <SectionTitle
            eyebrow="Dokumentasi"
            title="Kegiatan yang Terekam"
            description="Sejumlah momen gotong royong dan kegiatan warga yang menghidupkan Desa Tembong."
          />
          <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dokumentasi.map((item) => (
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

      <ExploreCallout
        eyebrow="Ikuti"
        title="Selalu ada kabar baru dari Tembong"
        description="Ikuti perkembangan dan dokumentasi kegiatan terbaru dari desa."
        primary={{ label: "Kabar Tembong", href: "/kabar-tembong" }}
        secondary={{ label: "Kembali ke Beranda", href: "/" }}
      />
    </>
  );
}
