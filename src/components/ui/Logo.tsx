import Image from "next/image";
import markSrc from "../../../public/logos/logo-mark.png";
import { cn } from "@/lib/utils";

/**
 * CARITA TEMBONG logo mark: the official CT monogram (the C of Carita, the space
 * of stories, joined to the T of Tembong by a warm clay flow). Extracted with a
 * transparent background so it sits cleanly on any surface. On dark grounds
 * (e.g. the footer) place it on a light chip so the pine-green stays legible.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src={markSrc}
      alt=""
      aria-hidden="true"
      sizes="120px"
      className={cn("w-auto", className)}
    />
  );
}

type LogoProps = {
  className?: string;
  /** Show the "CARITA TEMBONG" wordmark next to the mark. */
  withWordmark?: boolean;
  /** Optional descriptor line under the wordmark. */
  descriptor?: string;
};

/**
 * Full lockup: mark + wordmark. The wordmark uses the display serif in wide
 * caps to echo the logo. Text colour is inherited so the same component works
 * on light and dark grounds.
 */
export function Logo({ className, withWordmark = true, descriptor }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-8 shrink-0 sm:h-9" />
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="whitespace-nowrap font-display text-lg font-semibold tracking-[0.06em] sm:text-xl">
            CARITA TEMBONG
          </span>
          {descriptor && (
            <span className="mt-1 hidden text-[0.7rem] font-medium uppercase tracking-[0.18em] text-secondary sm:block">
              {descriptor}
            </span>
          )}
        </span>
      )}
    </span>
  );
}
