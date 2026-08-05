import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ExploreCallout } from "@/components/home/ExploreCallout";
import heroImage from "../../../public/images/hero/tembong-lanskap.jpg";

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

export default function KegiatanPage() {
  return (
    <>
      <PageHero
        eyebrow="Kegiatan"
        title="Denyut Keseharian Desa"
        description="Tembong bergerak setiap pekan. Dari membersihkan lingkungan hingga menjaga tradisi, kegiatan warga menjadi tanda desa yang hidup."
        image={heroImage}
        imageAlt="Lanskap dan permukiman Desa Tembong di antara kebun dan pepohonan."
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
          <SectionTitle eyebrow="Agenda" title="Jadwal dan Dokumentasi Kegiatan" />
          <Reveal className="mt-8">
            <div className="flex flex-col items-center gap-5 rounded-xl border border-dashed border-soft bg-surface px-6 py-14 text-center">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-muted text-cultural"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3.5" y="5" width="17" height="15" rx="2" />
                  <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3M7.5 13h3M13.5 13h3M7.5 16.5h3" />
                </svg>
              </span>
              <p className="max-w-md text-secondary">
                Agenda kegiatan mendatang dan dokumentasi pelaksanaannya akan
                muncul di sini secara otomatis setelah portal terhubung dengan
                CMS desa.
              </p>
              <Button href="/kabar-tembong" variant="secondary" withArrow>
                Kabar Tembong
              </Button>
            </div>
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
