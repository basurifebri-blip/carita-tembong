import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExploreCallout } from "@/components/home/ExploreCallout";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MemberCard } from "@/components/team/MemberCard";
import {
  teamInfo,
  teamMembers,
  teamGroupPhoto,
  teamAdvisor,
} from "@/data/team";
import grupTempura from "../../../public/images/tim/grup-tempura.jpg";

export const metadata: Metadata = {
  title: "Tim Tempura",
  description:
    "Tim Tempura (Tembong Punya Carita), mahasiswa Kuliah Kerja Nyata Tematik (KKNT) IPB University, tim di balik pembuatan portal digital CARITA TEMBONG.",
};

export default function TimPage() {
  return (
    <>
      {/* Wide banner hero, cropped onto the team's faculty jackets */}
      <section className="relative isolate overflow-hidden">
        <Image
          src={grupTempura}
          alt="Delapan anggota Tim Tempura difoto dari belakang, mengenakan jaket almamater fakultas masing-masing di IPB University."
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 37%" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#122620]/92 via-[#122620]/45 to-[#122620]/10"
        />
        <Container className="relative z-10 flex min-h-[480px] flex-col md:min-h-[620px]">
          <Breadcrumb
            items={[{ label: "Beranda", href: "/" }, { label: "Tim Tempura" }]}
            variant="onDark"
            className="pt-8"
          />
          <div className="mt-auto max-w-2xl pb-10">
            <span className="type-eyebrow text-decorative">Tim Penyusun</span>
            <h1 className="type-h1 mt-3 text-white">{teamInfo.name}</h1>
            <p className="mt-3 text-white/85">{teamInfo.longName}.</p>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="section">
        <Container width="reading" className="text-center">
          <span className="type-eyebrow">Di Balik CARITA TEMBONG</span>
          <h2 className="type-h2 mt-4 text-brand">
            {teamInfo.name}, {teamInfo.longName}
          </h2>
          <p className="type-lead mt-6 text-secondary">{teamInfo.intro}</p>
        </Container>
      </section>

      {/* Group photo (optional) */}
      {teamGroupPhoto && (
        <section className="section pt-0">
          <Container>
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-soft shadow-card">
                <Image
                  src={teamGroupPhoto.image}
                  alt={teamGroupPhoto.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 64rem, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-secondary">
                {teamInfo.name} di Desa Tembong.
              </figcaption>
            </figure>
          </Container>
        </section>
      )}

      {/* Members */}
      <section className="section bg-surface-sage">
        <Container>
          <SectionTitle
            eyebrow="Anggota Tim"
            title="Orang-orang di Balik Layar"
            description="Mahasiswa lintas bidang yang bergotong royong mendata, mendokumentasikan, dan membangun portal ini bersama warga Desa Tembong."
            align="center"
          />

          {teamMembers.length > 0 ? (
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          ) : (
            <p className="mx-auto mt-10 max-w-xl text-center text-secondary">
              Nama dan foto anggota Tim Tempura akan segera ditampilkan di sini.
            </p>
          )}

          {teamAdvisor && (
            <div className="mt-16">
              <h3 className="text-center type-h3 text-brand">
                Dosen Pembimbing Lapang
              </h3>
              <div className="mx-auto mt-8 max-w-xs">
                <MemberCard member={teamAdvisor} />
              </div>
            </div>
          )}
        </Container>
      </section>

      <ExploreCallout
        eyebrow="Kenali"
        title="Kenali desa yang kami ceritakan"
        description="Setiap halaman portal ini adalah hasil dokumentasi langsung bersama warga Desa Tembong."
        primary={{ label: "Kenali Tembong", href: "/kenali-tembong" }}
        secondary={{ label: "Kembali ke Beranda", href: "/" }}
      />
    </>
  );
}
