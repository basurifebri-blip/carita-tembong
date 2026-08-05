import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/** Categories that the interactive map will link together (built in a later phase). */
const kategori = [
  {
    label: "Wisata Alam",
    desc: "Curug, mata air, dan ruang alam desa",
    color: "bg-interactive",
  },
  {
    label: "Sentra UMKM",
    desc: "Pengrajin emping, opak, dan produk lokal",
    color: "bg-cultural",
  },
  {
    label: "Kesehatan",
    desc: "Posyandu dan Puskesmas Carita",
    color: "bg-decorative",
  },
  {
    label: "Pemerintahan & Fasilitas",
    desc: "Kantor desa, sekolah, dan tempat ibadah",
    color: "bg-wood",
  },
];

/**
 * Teaser for the full interactive map. Coordinates are still being collected,
 * so instead of faking a map we show, honestly, the kinds of points it will
 * connect (CLAUDE.md §56 — no invented data).
 */
export function MapPreview() {
  return (
    <section className="section">
      <Container>
        <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="type-eyebrow">Peta Desa</span>
            <h2 className="type-h2 mt-4 text-brand">
              Temukan Lokasi Penting di Tembong
            </h2>
            <p className="type-lead mt-5 text-secondary">
              Satu peta interaktif yang menautkan titik-titik penting desa, dari
              wisata alam dan sentra UMKM hingga fasilitas kesehatan dan
              pemerintahan, agar mudah ditemukan dan ditelusuri.
            </p>
            <div className="mt-7">
              <Button href="/peta" withArrow>
                Jelajahi Peta
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-soft bg-brand-deep p-7 text-white shadow-card sm:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1.7px)",
                backgroundSize: "22px 22px",
              }}
            />
            <p className="relative text-xs font-semibold uppercase tracking-wider text-white/70">
              Titik yang akan dipetakan
            </p>
            <ul className="relative mt-5 flex flex-col gap-4">
              {kategori.map((k) => (
                <li key={k.label} className="flex items-start gap-3">
                  <span
                    className={`mt-1 h-3 w-3 shrink-0 rounded-full ring-2 ring-white/25 ${k.color}`}
                  />
                  <div>
                    <p className="font-medium text-white">{k.label}</p>
                    <p className="text-sm text-white/65">{k.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="relative mt-7 border-t border-white/15 pt-4 text-xs text-white/55">
              Peta interaktif sedang disiapkan dengan titik koordinat yang akurat.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
