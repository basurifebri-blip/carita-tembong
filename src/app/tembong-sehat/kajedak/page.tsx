import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Badge } from "@/components/ui/Badge";
import { Mark } from "@/components/ui/Mark";
import { Reveal } from "@/components/ui/Reveal";
import { SundaDivider } from "@/components/sunda/SundaDivider";
import { ExploreCallout } from "@/components/home/ExploreCallout";

import heroImage from "../../../../public/images/sehat/kader-posyandu.jpg";
import bidanImage from "../../../../public/images/sehat/pemeriksaan-bidan.jpg";
import kunjunganWamenkes from "../../../../public/images/sehat/kunjungan-wamenkes.jpg";

export const metadata: Metadata = {
  title: "Desa Siaga TB: Tiga Inovasi Melawan TBC",
  description:
    "Desa Tembong dikenal sebagai Desa Siaga TB lewat tiga program unggulan, RESPATI, KAJEDAK, dan JARING TAS. Pendekatan berbasis warga ini menjadikan Tembong inspirasi nasional menuju Zero TBC 2030.",
  openGraph: {
    title: "Desa Siaga TB: Tiga Inovasi Melawan TBC | CARITA TEMBONG",
    description:
      "Tiga program unggulan Desa Tembong melawan TBC yang kini menjadi inspirasi nasional.",
    type: "article",
  },
};

/** Alur ringkas pelayanan, disederhanakan dari pemberitaan (lihat §Sumber). */
const alur: string[] = [
  "Kader mengenali warga yang perlu diperiksa TBC.",
  "Kader menjemput sampel dahak langsung ke rumah warga.",
  "Sampel dibawa ke fasilitas kesehatan untuk diperiksa di laboratorium.",
  "Warga yang terdiagnosis didampingi hingga pengobatannya tuntas.",
];

const pilar: { title: string; desc: string }[] = [
  {
    title: "Skrining aktif",
    desc: "Penemuan kasus dibantu Pengawas Menelan Obat (PMO) yang mendampingi pasien selama pengobatan.",
  },
  {
    title: "Edukasi berkelanjutan",
    desc: "Penyuluhan kesehatan terus berjalan lewat kegiatan warga sehari-hari.",
  },
  {
    title: "Peran tokoh masyarakat",
    desc: "Tokoh kampung ikut menggerakkan, termasuk lewat wawar, seruan dari mulut ke mulut.",
  },
];

const ekosistem: {
  nama: string;
  kepanjangan: string;
  desc: string;
  current?: boolean;
}[] = [
  {
    nama: "Respati",
    kepanjangan: "Remaja Sehat Pejuang Tangguh Berinovasi",
    desc: "Melibatkan remaja desa sebagai penggerak pencegahan TBC di lingkungannya.",
  },
  {
    nama: "JARING TAS",
    kepanjangan: "Kejar Skrining dan Tangani TB Sampai Tuntas",
    desc: "Mendorong cakupan skrining TBC di desa naik signifikan dan memastikan setiap kasus tertangani hingga tuntas.",
  },
  {
    nama: "KAJEDAK",
    kepanjangan: "Kader Ngajemput Dahak",
    desc: "Kader menjemput sampel dahak langsung dari warga untuk pemeriksaan TBC.",
    current: true,
  },
];

/** Data provinsi & nasional, BUKAN angka Desa Tembong. Lihat §Sumber. */
const statBanten: { value: string; label: string }[] = [
  { value: "55.817", label: "kasus TBC ditemukan di Provinsi Banten" },
  { value: "111%", label: "cakupan pengobatan, melampaui target 90%" },
  { value: "89%", label: "angka keberhasilan pengobatan (target 90%)" },
  { value: "66%", label: "terapi pencegahan pada kontak serumah (target 68%)" },
];

const statNasional: { value: string; label: string }[] = [
  { value: "Peringkat 2", label: "beban TBC Indonesia di dunia" },
  { value: "±1,09 juta", label: "estimasi kasus baru TBC per tahun" },
  { value: "±125.000", label: "kematian akibat TBC per tahun" },
];

const sumber: { org: string; title: string; href: string }[] = [
  {
    org: "InfoPublik",
    title:
      "Pemprov Banten Berinovasi: Menuju Zero TBC 2030 dengan Program Kajedak",
    href: "https://infopublik.id/kategori/nusantara/898947/pemprov-banten-berinovasi-menuju-zero-tbc-2030-dengan-program-kajedak",
  },
  {
    org: "Kementerian Kesehatan RI",
    title: "Dorong Peningkatan Desa Siaga TB di Banten",
    href: "https://kemkes.go.id/id/dorong-peningkatan-desa-siaga-tb-di-banten",
  },
  {
    org: "Liputan6",
    title:
      "Cerita Desa Tembong yang Jadi Inspirasi Nasional dalam Perang Lawan Tuberkulosis",
    href: "https://www.liputan6.com/health/read/5887348/cerita-desa-tembong-yang-jadi-inspirasi-nasional-dalam-perang-lawan-tuberkulosis",
  },
];

export default function KajedakPage() {
  return (
    <>
      <PageHero
        eyebrow="Tembong Sehat · Program Unggulan"
        title="Desa Siaga TB, Tiga Inovasi Melawan TBC"
        description="Lewat RESPATI, KAJEDAK, dan JARING TAS, penanganan TBC di Desa Tembong menjadi gerakan warga. Pendekatan ini kini menjadi inspirasi nasional."
        image={heroImage}
        imageAlt="Kader kesehatan Desa Tembong dalam kegiatan Posyandu."
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Tembong Sehat", href: "/tembong-sehat" },
          { label: "Desa Siaga TB" },
        ]}
      />

      {/* Apa itu Desa Siaga TB */}
      <section className="section">
        <Container width="reading">
          <Badge tone="cultural">Penanggulangan TBC</Badge>
          <h2 className="type-h2 mt-4 text-brand">
            Melawan TBC sebagai gerakan warga
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-secondary">
            <p className="type-lead">
              Desa Tembong dikenal sebagai <Mark>Desa Siaga TB</Mark>, salah satu
              desa yang digadang bebas TB di Banten. Statusnya lahir dari tiga
              program yang saling melengkapi, dijalankan oleh warga sendiri.
            </p>
            <p>
              Ketiganya, <Mark>RESPATI</Mark>, <Mark>KAJEDAK</Mark>, dan{" "}
              <Mark>JARING TAS</Mark>, membuat penanganan tuberkulosis tidak lagi
              hanya menunggu warga datang ke fasilitas kesehatan, tetapi
              menjemput, menyaring, dan mendampingi hingga pengobatannya tuntas.
            </p>
            <p>
              Pendekatan berbasis warga inilah yang menarik perhatian nasional dan
              menjadikan Tembong contoh menuju target Zero TBC 2030.
            </p>
          </div>
        </Container>
      </section>

      {/* Cara kerja di lapangan */}
      <section className="section bg-surface-muted">
        <Container>
          <Reveal className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="type-eyebrow">KAJEDAK dari Dekat</span>
              <h2 className="type-h2 mt-4 text-brand">Kader yang menjemput dahak</h2>
              <p className="mt-5 text-secondary">
                Dari ketiga program, KAJEDAK (Kader Ngajemput Dahak) paling
                menggambarkan semangat menjemput itu. Alurnya sederhana.
              </p>
              <ol className="mt-6 flex flex-col gap-4">
                {alur.map((langkah, index) => (
                  <li key={langkah} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/[0.1] font-sans text-sm font-semibold text-brand"
                    >
                      {index + 1}
                    </span>
                    <p className="text-secondary">{langkah}</p>
                  </li>
                ))}
              </ol>
            </div>

            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-soft shadow-card">
                <Image
                  src={bidanImage}
                  alt="Bidan desa memeriksa warga dalam kegiatan kesehatan di Desa Tembong."
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 30rem, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-secondary">
                Pendampingan kesehatan warga oleh bidan dan kader desa.
              </figcaption>
            </figure>
          </Reveal>

          <div className="mt-12">
            <p className="type-eyebrow">Yang menopang keberhasilannya</p>
            <Reveal className="mt-5 grid gap-5 sm:grid-cols-3">
              {pilar.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-soft bg-surface p-6 shadow-card"
                >
                  <h3 className="type-h3 text-brand">{item.title}</h3>
                  <p className="mt-3 text-sm text-secondary">{item.desc}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Tiga program unggulan */}
      <section className="section">
        <Container>
          <div className="max-w-2xl">
            <span className="type-eyebrow">Tiga Program</span>
            <h2 className="type-h2 mt-4 text-brand">
              Tiga inovasi yang saling melengkapi
            </h2>
            <p className="mt-5 text-secondary">
              Bersama-sama, ketiganya membuat penanganan TBC menjadi gerakan
              warga, bukan sekadar urusan puskesmas: dari pelibatan remaja,
              penjemputan dahak, hingga pendampingan sampai tuntas.
            </p>
          </div>

          <Reveal className="mt-10 grid gap-6 md:grid-cols-3">
            {ekosistem.map((program) => (
              <article
                key={program.nama}
                className="rounded-xl border border-soft bg-surface p-6 shadow-card"
              >
                <h3 className="type-h3 text-brand">{program.nama}</h3>
                <p className="mt-1 text-sm font-medium text-cultural">
                  {program.kepanjangan}
                </p>
                <p className="mt-3 text-sm text-secondary">{program.desc}</p>
              </article>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Capaian & pengakuan nasional */}
      <section className="section bg-surface-muted">
        <Container width="reading">
          <span className="type-eyebrow">Capaian &amp; Pengakuan</span>
          <h2 className="type-h2 mt-4 text-brand">
            Dari kampung, menjadi inspirasi nasional
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-secondary">
            <p>
              Sejak <Mark>2022 hingga 2024</Mark>, Desa Tembong mencatat
              pengobatan TBC yang konsisten berhasil, hingga{" "}
              <Mark>nol kasus</Mark> pasien yang gagal atau putus berobat.
            </p>
            <p>
              Keberhasilan ini menarik perhatian nasional. Wakil Menteri
              Kesehatan Dante Saksono Harbuwono berkunjung ke Tembong dan menilai
              pendekatan desa ini layak direplikasi ke desa lain di Indonesia.
            </p>
          </div>

          <figure className="mt-8">
            <div className="overflow-hidden rounded-xl border border-soft shadow-card">
              <Image
                src={kunjunganWamenkes}
                alt="Wakil Menteri Kesehatan RI bersama pejabat daerah, aparat, dan para kader kesehatan dalam kunjungan ke Desa Tembong."
                placeholder="blur"
                sizes="(min-width: 768px) 45rem, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm text-secondary">
              Kunjungan Wakil Menteri Kesehatan RI ke Desa Tembong, disambut para
              kader kesehatan dan pemerintah daerah, pengakuan atas ikhtiar desa
              melawan TBC.
            </figcaption>
          </figure>

          <figure className="my-8 border-l-2 border-decorative pl-6">
            <blockquote className="font-display text-xl leading-snug text-brand">
              “Desa Siaga TB seperti Desa Tembong adalah inspirasi nasional.”
            </blockquote>
            <figcaption className="mt-3 text-sm text-secondary">
              Dante Saksono Harbuwono, Wakil Menteri Kesehatan RI, seperti
              diberitakan saat kunjungan ke Desa Tembong.
            </figcaption>
          </figure>

          <p className="text-secondary">
            Inovasi seperti KAJEDAK sejalan dengan target{" "}
            <Mark>Zero TBC 2030</Mark>, gerakan Banten Eliminasi TBC (GEBET),
            serta pendekatan TOSS TB (<em>Temukan, Obati, Sampai Sembuh</em>).
          </p>
        </Container>
      </section>

      {/* Konteks: Banten & Indonesia */}
      <section className="section">
        <Container>
          <div className="max-w-2xl">
            <span className="type-eyebrow">Konteks</span>
            <h2 className="type-h2 mt-4 text-brand">Mengapa ini penting</h2>
            <p className="mt-5 text-secondary">
              Beban TBC masih besar, baik di Banten maupun di Indonesia.
              Pendekatan warga seperti KAJEDAK adalah cara membumikan target
              besar menjadi langkah yang bisa dijalankan satu kampung. Angka
              berikut menggambarkan skala provinsi dan nasional,{" "}
              <strong>bukan</strong> data khusus Desa Tembong.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <p className="type-eyebrow">Provinsi Banten · 2024</p>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                {statBanten.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-soft bg-surface p-5 shadow-card"
                  >
                    <dt className="font-display text-3xl text-brand">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-sm text-secondary">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={80}>
              <p className="type-eyebrow">Indonesia · Global TB Report 2024</p>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                {statNasional.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-soft bg-surface p-5 shadow-card"
                  >
                    <dt className="font-display text-3xl text-brand">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-sm text-secondary">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Sumber & rujukan */}
      <section className="section bg-surface-muted">
        <Container width="reading">
          <SundaDivider className="mb-10 text-decorative" />
          <span className="type-eyebrow">Sumber &amp; Rujukan</span>
          <h2 className="type-h2 mt-4 text-brand">Dari mana informasi ini</h2>
          <ul className="mt-6 flex flex-col gap-4">
            {sumber.map((item) => (
              <li
                key={item.href}
                className="rounded-lg border border-soft bg-surface p-4"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-cultural">
                    {item.org}
                  </span>
                  <span className="mt-1 block text-sm text-primary underline-offset-4 group-hover:underline">
                    {item.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-secondary">
            Kutipan pejabat dikutip dari pemberitaan di atas. Foto pada halaman
            ini menampilkan kader dan bidan Desa Tembong dalam kegiatan Posyandu;
            dokumentasi khusus kegiatan KAJEDAK akan menyusul.
          </p>
        </Container>
      </section>

      <ExploreCallout
        eyebrow="Tembong Sehat"
        title="Kesehatan yang dijaga bersama"
        description="KAJEDAK hanyalah satu bagian. Lihat bagaimana Posyandu dan layanan kesehatan lain berjalan di setiap kampung."
        primary={{ label: "Kembali ke Tembong Sehat", href: "/tembong-sehat" }}
        secondary={{ label: "Lihat Kegiatan", href: "/kegiatan" }}
      />
    </>
  );
}
