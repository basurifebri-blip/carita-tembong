/**
 * Build a wa.me deep link. Normalises Indonesian numbers (leading 0 -> 62) and
 * strips non-digits. Message is URL-encoded. Never invents a number — callers
 * pass a verified one, or fall back to a non-link UI (see KontakPemesanan).
 */
export function whatsappUrl(number: string, message?: string): string {
  const digits = number.replace(/\D/g, "").replace(/^0/, "62");
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${query}`;
}
