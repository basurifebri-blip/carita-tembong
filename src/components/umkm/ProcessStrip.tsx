/** One "tahap demi tahap" chip strip for a production process. */
export function ProcessStrip({
  label,
  steps,
}: {
  label: string;
  steps: readonly string[];
}) {
  return (
    <div className="rounded-xl border border-soft bg-surface p-6 sm:p-8">
      <h4 className="text-sm font-semibold text-brand">{label}</h4>
      <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-full bg-surface-muted px-4 py-1.5 text-sm font-medium text-primary">
              {step}
            </span>
            {index < steps.length - 1 && (
              <span aria-hidden="true" className="text-decorative">
                ›
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
