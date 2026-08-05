"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Optional ambient background music: opt-in and off by default.
 *
 * Browsers block autoplay-with-sound until the visitor interacts, and WCAG asks
 * that any audio be user-controllable, so this never starts on its own: the
 * visitor presses the button to play, and can stop it anytime. Living in the root
 * layout, the <audio> element is not remounted on client-side navigation, so the
 * music plays on smoothly as the visitor moves between pages.
 *
 * To enable: drop a royalty-free / licensed file in `public/audio/` and set
 * AUDIO_SRC to its path (e.g. "/audio/nuansa-desa.mp3"). An empty string keeps
 * the player hidden, and a missing/failed file hides it too, so the site never
 * shows a broken control.
 */
// Musik: "Peaceful Gamelan" oleh fassounds (Pixabay Content License: bebas
// dipakai untuk keperluan komersial/non-komersial tanpa wajib atribusi).
// File ada di public/audio/nuansa-desa.mp3.
const AUDIO_SRC = "/audio/nuansa-desa.mp3";
const AUDIO_TITLE = "Nuansa Gamelan";
const VOLUME = 0.35;

export function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [available, setAvailable] = useState<boolean>(Boolean(AUDIO_SRC));
  const [playing, setPlaying] = useState(false);

  // Mirror the real playback state so the button never lies about it.
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
    };
  }, [available]);

  if (!available) return null;

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      try {
        el.volume = VOLUME;
        await el.play();
      } catch {
        // Interaction policy or unplayable source: stay paused, no crash.
      }
    } else {
      el.pause();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="none"
        onError={() => setAvailable(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={
          playing ? `Hentikan musik: ${AUDIO_TITLE}` : `Putar musik: ${AUDIO_TITLE}`
        }
        title={playing ? "Hentikan musik" : "Putar musik desa"}
        className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-card transition-colors hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-interactive"
      >
        {playing && (
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-brand opacity-50 animate-ping motion-reduce:hidden"
          />
        )}
        <span className="relative">
          {playing ? (
            // Speaker with sound waves = currently playing.
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 9v6h4l5 4V5L8 9H4z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 8.5a5 5 0 010 7M19 6a8 8 0 010 12"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            // Musical note = press to play.
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 18V6l10-2v11"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="6.5" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.7" />
              <circle cx="16.5" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.7" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
