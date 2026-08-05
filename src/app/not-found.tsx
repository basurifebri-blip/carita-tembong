import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SundaDivider } from "@/components/sunda/SundaDivider";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
};

export default function NotFound() {
  return (
    <section className="section">
      <Container width="reading" className="flex flex-col items-center text-center">
        <span className="type-eyebrow">Tersesat sejenak</span>
        <h1 className="type-h1 mt-4 text-brand">Halaman ini belum ada di Tembong</h1>
        <SundaDivider className="my-8" />
        <p className="type-lead text-secondary">
          Halaman yang Anda cari mungkin sedang disiapkan atau telah berpindah.
          Mari kembali menjelajahi desa dari beranda.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" withArrow>
            Kembali ke Beranda
          </Button>
          <Button href="/peta" variant="secondary">
            Jelajahi Peta
          </Button>
        </div>
      </Container>
    </section>
  );
}
