import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  kepalaDesa,
  sekretarisDesa,
  perangkatGroups,
  institutions,
  governmentSource,
} from "@/data/government";
import type { Official, OrgGroup } from "@/types/village";

function LeadCard({ person }: { person: Official }) {
  return (
    <div className="flex items-center gap-5 rounded-xl border border-soft bg-surface p-6 shadow-card">
      {person.image && (
        <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-lg border border-soft bg-surface-muted">
          <Image
            src={person.image}
            alt={
              person.imageAlt ??
              `Foto ${person.name}, ${person.role} Desa Tembong.`
            }
            fill
            placeholder="blur"
            sizes="6rem"
            className="object-cover object-top"
          />
        </div>
      )}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cultural">
          {person.role}
        </p>
        <p className="mt-2 font-display text-xl font-semibold text-brand">
          {person.name}
        </p>
      </div>
    </div>
  );
}

function OrgCard({ group }: { group: OrgGroup }) {
  return (
    <div className="rounded-xl border border-soft bg-surface p-6">
      <h3 className="text-sm font-semibold text-brand">{group.title}</h3>
      <ul className="mt-4 flex flex-col divide-y divide-soft">
        {group.members.map((member) => (
          <li
            key={`${member.name}-${member.role}`}
            className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
          >
            {member.image && (
              <div className="relative h-14 w-12 shrink-0 overflow-hidden rounded-md border border-soft bg-surface-muted">
                <Image
                  src={member.image}
                  alt={
                    member.imageAlt ??
                    `Foto ${member.name}, ${member.role} Desa Tembong.`
                  }
                  fill
                  placeholder="blur"
                  sizes="3rem"
                  className="object-cover object-top"
                />
              </div>
            )}
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-primary">
                {member.name}
              </span>
              <span className="text-xs text-secondary">{member.role}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * "Pemerintahan Desa" — the village government structure and institutions.
 * Only public names and public roles are shown (see src/data/government.ts);
 * personal data from the office boards is not published.
 */
export function PemerintahanDesa() {
  return (
    <section className="section bg-surface-muted">
      <Container>
        <SectionTitle
          eyebrow="Pemerintahan"
          title="Perangkat dan Lembaga Desa"
          description="Susunan pemerintahan Desa Tembong beserta lembaga yang mendampingi kehidupan masyarakat."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <LeadCard person={kepalaDesa} />
          <LeadCard person={sekretarisDesa} />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {perangkatGroups.map((group) => (
            <OrgCard key={group.title} group={group} />
          ))}
        </div>

        <h3 className="mt-14 font-display text-xl font-semibold text-brand">
          Lembaga Kemasyarakatan
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {institutions.map((group) => (
            <OrgCard key={group.title} group={group} />
          ))}
        </div>

        <p className="mt-10 text-sm text-secondary/80">
          Sumber: {governmentSource}.
        </p>
      </Container>
    </section>
  );
}
