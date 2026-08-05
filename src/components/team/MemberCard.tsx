"use client";

import Image from "next/image";
import { useRef } from "react";
import type { TeamMember } from "@/data/team";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

const MAX_TILT = 12; // derajat maksimum kemiringan

/**
 * Kartu anggota tim yang interaktif: memiringkan diri 3D mengikuti kursor,
 * dengan kilau cahaya yang ikut bergerak dan sedikit terangkat saat disentuh.
 * Efek gerak hanya berlaku pada pointer (mouse) dan dinonaktifkan otomatis bila
 * pengunjung memilih `prefers-reduced-motion`, sehingga tetap nyaman dan aksesibel.
 */
export function MemberCard({ member }: { member: TeamMember }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const prefersReduced = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el || prefersReduced()) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rotX = (0.5 - py) * MAX_TILT;
    const rotY = (px - 0.5) * MAX_TILT;
    el.style.transform = `perspective(900px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(1.04)`;
    el.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (el) el.style.transform = "";
  };

  return (
    <figure className="flex flex-col">
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-soft bg-white shadow-card transition-[transform,box-shadow] duration-200 ease-out will-change-transform hover:shadow-card-hover motion-reduce:transition-none"
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={member.alt ?? `Foto ${member.name}.`}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 16rem, (min-width: 640px) 45vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
            <span className="font-display text-3xl font-semibold text-brand/35">
              {initials(member.name)}
            </span>
            <span className="font-display text-sm font-semibold text-brand">
              {member.name}
            </span>
          </div>
        )}

        {/* Kilau cahaya yang mengikuti kursor (hanya pointer). */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 motion-reduce:hidden"
          style={{
            background:
              "radial-gradient(circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.45), transparent 55%)",
          }}
        />
        {/* Sorotan tepi keemasan yang lembut saat disentuh. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-transparent transition-colors duration-200 group-hover:ring-decorative/40"
        />
      </div>

      {member.study && (
        <figcaption className="mt-3 text-center text-sm text-secondary">
          {member.study}
        </figcaption>
      )}
    </figure>
  );
}
