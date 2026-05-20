import { useSignup } from "./SignupContext";

const stats = [
  { value: "38.000+", label: "studenți înscriși" },
  { value: "Sute", label: "absolvenți activi" },
  { value: "4.8★", label: "rating Trustpilot" },
];

export function SocialProof() {
  const { enrolledToday, remainingToday, dates } = useSignup();

  return (
    <section className="border-y border-border bg-muted/60" aria-label="Statistici">
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-foreground/60">
          Comunitate construită în 8 ani · Sesiunea curentă {dates.rangeLabel}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-xl font-extrabold text-secondary sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-foreground/65 sm:text-sm">{s.label}</div>
            </div>
          ))}
          <div className="relative col-span-2 rounded-2xl bg-primary/10 px-3 py-3 text-center ring-1 ring-primary/20 md:col-span-1 md:bg-transparent md:px-0 md:py-0 md:ring-0">
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span
                key={enrolledToday}
                className="font-display text-xl font-extrabold text-primary tabular-nums sm:text-3xl animate-in fade-in slide-in-from-bottom-1 duration-300"
              >
                {enrolledToday}
              </span>
            </div>
            <div className="mt-1 text-xs font-medium text-foreground/70 sm:text-sm">
              înscriși astăzi · {remainingToday} locuri rămase
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
