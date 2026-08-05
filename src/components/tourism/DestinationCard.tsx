import Image from "next/image";
import Link from "next/link";
import type { Destination, VisitStatus } from "@/types/tourism";
import { cn } from "@/lib/utils";

/** Chip tint by status. Neutral by default; open/limited get colour cues. */
const statusStyle: Record<VisitStatus, string> = {
  "Bisa Dikunjungi": "text-brand",
  "Akses Terbatas": "text-cultural",
  "Potensial Dikembangkan": "text-secondary",
  "Dalam Pengembangan": "text-secondary",
  "Tutup Sementara": "text-cultural",
};

/**
 * Tourism card (design-system §30): large image, honest visit-status chip,
 * name, category, and a short evocative description. Links through to the
 * destination detail page.
 */
export function DestinationCard({ destination }: { destination: Destination }) {
  const { slug, name, category, status, image, summary } = destination;

  return (
    <Link
      href={`/jelajahi-tembong/${slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-soft bg-surface shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
        {image ? (
          <Image
            src={image}
            alt={`${name}, ${category.toLowerCase()} di Desa Tembong.`}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center">
            <span className="text-sm text-secondary">Foto akan ditambahkan</span>
          </div>
        )}

        <span
          className={cn(
            "absolute left-3 top-3 inline-flex items-center rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm",
            statusStyle[status],
          )}
        >
          {status}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="type-eyebrow">{category}</span>
        <h3 className="font-display text-xl font-semibold text-brand">{name}</h3>
        <p className="text-sm leading-relaxed text-secondary">{summary}</p>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-interactive">
          Lihat destinasi
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          >
            ›
          </span>
        </span>
      </div>
    </Link>
  );
}
