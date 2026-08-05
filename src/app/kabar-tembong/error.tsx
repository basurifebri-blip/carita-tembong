"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/** Friendly error boundary for the news route — never exposes stack traces. */
export default function KabarError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="section">
      <Container width="reading" className="text-center">
        <span className="type-eyebrow">Kabar Tembong</span>
        <h1 className="type-h2 mt-4 text-brand">
          Kabar sedang tidak dapat dimuat
        </h1>
        <p className="mt-4 text-secondary">
          Terjadi kendala saat memuat kabar terbaru dari desa. Silakan coba lagi
          beberapa saat.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button onClick={reset}>Coba lagi</Button>
          <Button href="/" variant="secondary" withArrow>
            Kembali ke Beranda
          </Button>
        </div>
      </Container>
    </div>
  );
}
