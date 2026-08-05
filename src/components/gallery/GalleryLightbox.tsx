"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";

export type GalleryItem = {
  src: StaticImageData;
  alt: string;
  caption: string;
  category?: string;
};

const ALL = "Semua";

/**
 * Masonry gallery where every photo opens in an accessible lightbox dialog:
 * click or Enter to open, Esc to close, arrow keys to move, click the backdrop
 * to dismiss. Content is fully usable without the lightbox (the grid renders as
 * static images/buttons), so it is a pure enhancement.
 *
 * When items carry a `category`, filter chips appear above the grid. The default
 * "Semua" is what renders on the server, so every photo is visible without JS;
 * filtering is a progressive enhancement layered on top.
 */
export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const categories = useMemo(() => {
    const seen: string[] = [];
    for (const item of items) {
      if (item.category && !seen.includes(item.category)) seen.push(item.category);
    }
    return seen;
  }, [items]);

  const [active, setActive] = useState<string>(ALL);
  const visible = useMemo(
    () => (active === ALL ? items : items.filter((item) => item.category === active)),
    [items, active],
  );

  const [index, setIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i + visible.length - 1) % visible.length)),
    [visible.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length],
  );

  // Changing the filter resets any open lightbox so the index never dangles.
  useEffect(() => {
    setIndex(null);
  }, [active]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  // Return focus to the photo that opened the lightbox.
  const openAt = (i: number) => setIndex(i);
  useEffect(() => {
    if (index === null) return;
    const triggers = triggerRefs.current;
    return () => {
      triggers[index]?.focus();
    };
  }, [index]);

  return (
    <>
      {categories.length > 1 && (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Saring galeri berdasarkan tema">
          {[ALL, ...categories].map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                  isActive
                    ? "border-brand bg-brand text-surface"
                    : "border-soft bg-surface text-secondary hover:border-decorative hover:text-primary"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>button]:mb-4">
        {visible.map((item, i) => (
          <button
            key={i}
            ref={(el) => {
              triggerRefs.current[i] = el;
            }}
            type="button"
            onClick={() => openAt(i)}
            aria-label={`Perbesar foto: ${item.caption}`}
            className="group block w-full break-inside-avoid overflow-hidden rounded-xl border border-soft bg-surface text-left shadow-card"
          >
            <Image
              src={item.src}
              alt={item.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="block px-4 py-3 text-sm text-secondary">
              {item.caption}
            </span>
          </button>
        ))}
      </div>

      {open && index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={visible[index].caption}
          onClick={close}
          className="fixed inset-0 z-50 flex flex-col bg-black/85 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between px-5 py-4 text-white">
            <span className="text-sm tabular-nums text-white/80">
              {index + 1} / {visible.length}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Tutup"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4 pb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              aria-label="Foto sebelumnya"
              className="absolute left-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-4"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <figure className="flex max-w-4xl flex-col items-center">
              <Image
                src={visible[index].src}
                alt={visible[index].alt}
                placeholder="blur"
                sizes="90vw"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "78vh",
                }}
                className="rounded-lg"
              />
              <figcaption className="mt-4 text-center text-sm text-white/80">
                {visible[index].caption}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={next}
              aria-label="Foto berikutnya"
              className="absolute right-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-4"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
