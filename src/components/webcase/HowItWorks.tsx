import { ArrowRight } from "lucide-react";

const steps = [
  { icon: "📝", title: "PASUL 1 — Te înscrii (30 sec)", desc: "Email + opțional Telegram. Atât." },
  { icon: "🎬", title: "PASUL 2 — Primul design (20-30 min)", desc: "Lecția 1 + tema 1. Cu template gata pregătit." },
  { icon: "👨‍🏫", title: "PASUL 3 — Feedback uman (24-48h)", desc: "Mentor real evaluează personal munca ta." },
  { icon: "🎓", title: "PASUL 4 — Diploma & next steps", desc: "Termini în ritmul tău. Acces 7 zile, putem extinde." },
];

export function HowItWorks() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-extrabold text-secondary sm:text-4xl">
          4 pași până la primul tău design profesionist.
        </h2>

        <ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md sm:p-6">
                <div className="text-3xl">{s.icon}</div>
                <h3 className="mt-4 font-display text-sm font-extrabold tracking-wide text-secondary">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight
                  className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary/50 lg:block"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-accent bg-accent/60 px-5 py-4 text-center text-base font-medium text-secondary sm:text-lg">
          ⏱️ Unii termină în 2-3 zile. Alții în 7. Tu decizi ritmul.
        </div>
      </div>
    </section>
  );
}
