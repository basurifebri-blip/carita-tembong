import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SundaDivider } from "@/components/sunda/SundaDivider";
import { ExploreCallout } from "@/components/home/ExploreCallout";
import { stories } from "@/data/stories";
import heroImage from "../../../public/images/village/saung-tembong.jpg";
import masjidGalaya from "../../../public/images/budaya/masjid-galaya.jpg";
import masjidInterior from "../../../public/images/budaya/masjid-interior.jpg";
import masjidMihrab from "../../../public/images/budaya/masjid-mihrab.jpg";

export const metadata: Metadata = {
  title: "Cerita & Budaya",
  description:
    "Cerita dan budaya yang hidup di Desa Tembong: pengajian Jumat yang berpindah antar kampung, Jumat Bersih, serta pencak silat Perguruan Cibinong dan debus.",
};

const tema = [
  {
    title: "Pengrajin",
    body: "Tangan-tangan yang menjaga keterampilan emping dan opak dari generasi ke generasi.",
  },
  {
    title: "Kehidupan Desa",
    body: "Keseharian warga di kebun, sawah, dan rumah yang menjadi denyut desa.",
  },
  {
    title: "Tokoh & Masyarakat",
    body: "Orang-orang yang, dengan caranya masing-masing, membentuk wajah Tembong.",
  },
];

const masjid = [
  {
    image: masjidGalaya,
    alt: "Masjid berkubah dengan dinding biru muda dan pagar di sebuah kampung Desa Tembong.",
    caption: "Masjid kampung, dari luar",
  },
  {
    image: masjidInterior,
    alt: "Ruang shalat masjid yang lapang dengan tiang kayu dan hamparan sajadah di Desa Tembong.",
    caption: "Ruang shalat yang lapang",
  },
  {
    image: masjidMihrab,
    alt: "Mihrab berhias lengkung keemasan dengan karpet merah tempat imam memimpin shalat.",
    caption: "Mihrab tempat imam memimpin",
  },
];

export default function CeritaBudayaPage() {
  return (
    <>
      <PageHero
        eyebrow="Cerita & Budaya"
        title="Kehidupan yang Tumbuh di Tembong"
        description="Di sinilah jantung CARITA TEMBONG. Cerita tentang manusia, tradisi, dan kebersamaan yang membuat desa ini terasa hidup."
        image={heroImage}
        imageAlt="Saung bambu tempat warga berkumpul di kawasan kebun Desa Tembong."
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Cerita & Budaya" },
        ]}
      />

      {/* Intro */}
      <section className="section">
        <Container width="reading" className="text-center">
          <span className="type-eyebrow">Carita ti Tembong</span>
          <h2 className="type-h2 mt-4 text-brand">
            Tradisi yang Dijalani, Bukan Dipajang
          </h2>
          <SundaDivider className="my-7" />
          <p className="type-lead text-secondary">
            Di Tembong, budaya hadir dalam keseharian: dari masjid ke masjid pada
            hari Jumat, dari gotong royong di jalan kampung, hingga gerak pencak
            silat di halaman rumah.
          </p>
        </Container>
      </section>

      {/* Stories (data-driven, each links to its detail page) */}
      <section className="section bg-surface-muted">
        <Container>
          <div className="flex flex-col gap-14 lg:gap-20">
            {stories.map((story, index) => (
              <Reveal
                key={story.slug}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <figure className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-soft shadow-card">
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 40rem, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-secondary">
                    {story.caption}
                  </figcaption>
                </figure>

                <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                  <span className="type-eyebrow">{story.eyebrow}</span>
                  <h2 className="type-h2 mt-4 text-brand">{story.title}</h2>
                  <p className="mt-5 text-secondary">{story.summary}</p>
                  <div className="mt-7">
                    <Button href={`/cerita-budaya/${story.slug}`} withArrow>
                      Baca Cerita
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Mosques as gathering points */}
      <section className="section bg-surface-sage">
        <Container>
          <SectionTitle
            eyebrow="Rumah Ibadah"
            title="Dari Masjid ke Masjid"
            description="Masjid bukan sekadar tempat shalat. Di sinilah pengajian Jumat berpindah dari satu kampung ke kampung lain, tempat warga bertemu, belajar, dan menjaga kebersamaan."
          />
          <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {masjid.map((item) => (
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

      {/* More themes */}
      <section className="section">
        <Container>
          <SectionTitle
            eyebrow="Ragam Cerita"
            title="Yang Juga Akan Kami Ceritakan"
            description="Beberapa tema lain yang sedang disiapkan menjadi cerita, dengan wawancara dan dokumentasi langsung dari warga."
          />
          <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tema.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-soft bg-surface p-6 transition-colors hover:border-decorative"
              >
                <h3 className="font-display text-xl font-semibold text-brand">
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

      <ExploreCallout
        eyebrow="Temukan"
        title="Cerita bertemu tempat dan hasil karya"
        description="Setiap kisah di Tembong terhubung dengan alam, produk, dan orang-orang di baliknya."
        primary={{ label: "Potensi Desa", href: "/potensi-desa" }}
        secondary={{ label: "Jelajahi Tembong", href: "/jelajahi-tembong" }}
      />
    </>
  );
}
