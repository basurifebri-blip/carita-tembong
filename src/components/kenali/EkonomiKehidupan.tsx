import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { villageProfile } from "@/data/village";

/**
 * "Ekonomi & Kehidupan" — livelihoods, economic facilities, and documented
 * tourism potential. All figures come from villageProfile; tourism is labelled
 * as potensi (not operational).
 */
export function EkonomiKehidupan() {
  const { livelihoods, facilities, wisata, source } = villageProfile;

  return (
    <section className="section">
      <Container>
        <SectionTitle
          eyebrow="Potensi"
          title="Ekonomi dan Kehidupan Warga"
          description="Kehidupan Desa Tembong bertumpu pada pertanian, perkebunan, perdagangan, dan keterampilan warga."
        />

        {/* Livelihoods */}
        <h3 className="mt-10 text-sm font-semibold text-brand">
          Mata Pencaharian Warga
        </h3>
        <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
          {livelihoods.map((item) => (
            <div key={item.label} className="border-l-2 border-decorative/60 pl-3">
              <dd className="font-display text-3xl font-semibold leading-none text-brand">
                {item.value}
              </dd>
              <dt className="mt-2 text-sm text-secondary">{item.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Facilities */}
          <div>
            <h3 className="text-sm font-semibold text-brand">Sarana Ekonomi</h3>
            <dl className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {facilities.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-3 border-b border-soft pb-3"
                >
                  <dt className="text-sm text-secondary">{item.label}</dt>
                  <dd className="text-sm font-semibold text-primary">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Tourism potential */}
          <div>
            <h3 className="text-sm font-semibold text-brand">Potensi Wisata</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {wisata.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-3 rounded-lg border border-soft bg-surface-muted/50 px-4 py-3"
                >
                  <Badge tone="cultural">Potensi</Badge>
                  <span className="font-medium text-primary">{name}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-secondary">
              Detail lokasi dan status kunjungan akan hadir di halaman Jelajahi
              Tembong.
            </p>
            <div className="mt-4">
              <Button href="/jelajahi-tembong" variant="text">
                Jelajahi Tembong
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-secondary/80">Sumber: {source}.</p>
      </Container>
    </section>
  );
}
