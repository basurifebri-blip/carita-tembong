import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerWidth = "default" | "reading" | "wide";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Renders as this element/tag. Defaults to a div. */
  as?: ElementType;
  /**
   * default — 1280px content width
   * reading — ~720px editorial measure
   * wide    — 1440px wide visual sections
   */
  width?: ContainerWidth;
};

const widthClass: Record<ContainerWidth, string> = {
  default: "max-w-[1280px]",
  reading: "max-w-[720px]",
  wide: "max-w-[1440px]",
};

/**
 * Centered content wrapper with consistent horizontal padding.
 * (design-system §15–16: mobile 20px, desktop 32px gutters.)
 */
export function Container({
  children,
  className,
  as: Tag = "div",
  width = "default",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-8", widthClass[width], className)}>
      {children}
    </Tag>
  );
}
