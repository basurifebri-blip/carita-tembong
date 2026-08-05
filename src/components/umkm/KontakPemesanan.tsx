import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/product";

/**
 * Order CTA (CLAUDE.md §58). Shows a WhatsApp deep link only when a verified
 * marketing-partner contact exists; otherwise an honest fallback, never a fake
 * link (§56). The village does not process payments here.
 */
export function KontakPemesanan({ product }: { product: Product }) {
  if (product.contact) {
    const message = `Halo, saya tertarik memesan ${product.name} dari Desa Tembong.`;
    return (
      <div className="rounded-xl border border-soft bg-surface-clay p-6 sm:p-8">
        <h3 className="font-display text-xl font-semibold text-brand">
          Tertarik memesan?
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-secondary">
          Pemesanan {product.name} dikoordinasikan melalui mitra pemasaran,{" "}
          {product.contact.name}.
        </p>
        <div className="mt-5">
          <Button
            href={whatsappUrl(product.contact.whatsapp, message)}
            target="_blank"
            rel="noopener noreferrer"
            withArrow
          >
            Kontak Pemesanan (WhatsApp)
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-dashed border-soft bg-surface p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold text-brand">
        Tertarik memesan?
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-secondary">
        Pemesanan {product.name} umumnya dikoordinasikan melalui mitra pemasaran
        yang menghimpun hasil dari sejumlah pengrajin. Tautan kontak WhatsApp
        akan ditampilkan di sini setelah diverifikasi.
      </p>
    </div>
  );
}
