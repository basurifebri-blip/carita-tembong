import { Fragment } from "react";
import { Mark } from "@/components/ui/Mark";
import { cn } from "@/lib/utils";
import type { StoryParagraph } from "@/types/story";

/** Renders story paragraphs, wrapping highlighted segments in <Mark>. */
export function StoryBody({
  paragraphs,
  className,
}: {
  paragraphs: StoryParagraph[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4 text-secondary", className)}>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>
          {paragraph.map((segment, j) =>
            typeof segment === "string" ? (
              <Fragment key={j}>{segment}</Fragment>
            ) : (
              <Mark key={j}>{segment.mark}</Mark>
            ),
          )}
        </p>
      ))}
    </div>
  );
}
