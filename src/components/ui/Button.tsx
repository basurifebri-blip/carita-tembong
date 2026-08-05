import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "text";
type ButtonSize = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Appends an arrow that nudges right on hover (for editorial CTAs). */
  withArrow?: boolean;
  className?: string;
};

type AnchorProps = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

type NativeButtonProps = CommonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

type ButtonProps = AnchorProps | NativeButtonProps;

const base =
  "group inline-flex items-center justify-center gap-2 font-sans font-semibold " +
  "rounded-full transition-[background-color,color,border-color,box-shadow,transform] " +
  "duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "focus-visible:outline-interactive disabled:opacity-60 disabled:pointer-events-none";

const variantClass: Record<ButtonVariant, string> = {
  // River Teal background, white text.
  primary:
    "bg-interactive text-white shadow-card hover:bg-interactive-strong hover:shadow-card-hover",
  // Transparent / cream, Forest Green border + text.
  secondary:
    "bg-transparent text-brand border border-brand/40 hover:border-brand hover:bg-brand/[0.06]",
  // Inline editorial CTA — text + arrow, no chrome.
  text: "bg-transparent text-interactive hover:text-interactive-strong",
};

const sizeClass: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
};

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-200 ease-out group-hover:translate-x-1"
    >
      →
    </span>
  );
}

/**
 * Shared button/link primitive. Renders a Next.js `<Link>` when `href` is
 * provided, otherwise a native `<button>`. Both are keyboard accessible with a
 * visible focus ring and a ≥44px touch target at default/large sizes.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  ...rest
}: ButtonProps) {
  const isText = variant === "text";
  const classes = cn(
    base,
    variantClass[variant],
    // Text variant is inline: no fixed height/padding.
    !isText && sizeClass[size],
    className,
  );

  const content = (
    <>
      {children}
      {(withArrow || isText) && <Arrow />}
    </>
  );

  if (rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorProps;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {content}
      </Link>
    );
  }

  const { type, ...buttonRest } = rest as NativeButtonProps;
  return (
    <button type={type ?? "button"} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
