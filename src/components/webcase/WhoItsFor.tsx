const segments = [
  {
    icon: "👨‍💼",
    title: "ANGAJAT NEMULȚUMIT",
    desc: "Salariul tău nu mai ține pasul. Vrei venit secundar — sau o schimbare totală.",
  },
  {
    icon: "💼",
    title: "FREELANCER CARE PIERDE BANI",
    desc: "Copywriter? Marketer? Fotograf? Clienții cer «pachet complet» și tu refuzi proiecte.",
  },
  {
    icon: "🎓",
    title: "PROASPĂT ABSOLVENT",
    desc: "Nu vrei entry-level corporate. Vrei remote, libertate, freelance — dar nu știi pe unde să începi.",
  },
  {
    icon: "👶",
    title: "PĂRINTE ÎN CONCEDIU",
    desc: "Ai timp flexibil. Vrei să-l folosești ca să-ți construiești o carieră nouă — de acasă.",
  },
];

const notFor = [
  "vrei îmbogățire rapidă în 30 zile",
  "nu vrei să faci 2 teme practice",
  "te aștepți să devii designer fără efort",
];

export function WhoItsFor() {
  return (
    <section className="bg-accent/40 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-extrabold text-secondary sm:text-4xl">
          Recunoști-te într-una din aceste situații?
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {segments.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-3 font-display text-base font-extrabold tracking-wide text-secondary">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6">
          <h3 className="font-display text-lg font-extrabold text-destructive">
            ❌ NU e pentru tine dacă...
          </h3>
          <ul className="mt-3 space-y-1.5 text-[15px] text-foreground/80">
            {notFor.map((n) => (
              <li key={n}>• {n}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
