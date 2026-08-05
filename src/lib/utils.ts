/**
 * Join class names, dropping falsy values. A tiny local helper so we avoid
 * pulling in `clsx`/`tailwind-merge` for the foundation phase (CLAUDE.md §5:
 * do not add heavy dependencies for trivial functionality).
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * True when `href` is the active route for `pathname`.
 * Home ("/") matches exactly; section routes also match their sub-paths.
 */
export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
