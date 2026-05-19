const stats = [
  { value: "38.000+", label: "studenți înscriși" },
  { value: "Sute", label: "absolvenți activi" },
  { value: "4.8★", label: "rating Trustpilot" },
];

export function SocialProof() {
  return (
    <section className="border-y border-border bg-muted/60" aria-label="Statistici">
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-foreground/60">
          Comunitate construită în 8 ani
        </p>
        <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-xl font-extrabold text-secondary sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-foreground/65 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
