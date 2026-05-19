import maria from "@/assets/avatar-maria.jpg";
import andrei from "@/assets/avatar-andrei.jpg";
import elena from "@/assets/avatar-elena.jpg";

const items = [
  {
    img: maria,
    name: "MARIA, 32",
    location: "Cluj-Napoca, România",
    before: "Contabilă, 5.500 lei",
    after: "$2.800-3.200/lună pe Upwork",
    quote: "Cursul gratuit mi-a dat primul «aha». Restul a venit.",
    platform: "Upwork",
  },
  {
    img: andrei,
    name: "ANDREI, 38",
    location: "București, România",
    before: "Vânzări B2B, 8 ani",
    after: "12 clienți activi pe Upwork + Fiverr",
    quote: "Am făcut cursul în paralel cu jobul. La 7 luni demisia.",
    platform: "Fiverr",
  },
  {
    img: elena,
    name: "ELENA, 26",
    location: "Lucrează din Bali",
    before: "Studentă psihologie",
    after: "$4.000/lună remote freelancer",
    quote: "M-am gândit «merită 20 min». A schimbat traiectoria mea.",
    platform: "Upwork",
  },
];

export function Testimonials() {
  return (
    <section className="bg-accent/40 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-extrabold text-secondary sm:text-4xl">
          Au început exact aici. Asta fac astăzi.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover ring-2 ring-accent"
                />
                <div>
                  <div className="font-display font-extrabold text-secondary">{t.name}</div>
                  <div className="text-sm text-foreground/60">{t.location}</div>
                </div>
              </div>

              <div className="mt-5 space-y-2 text-sm">
                <div className="rounded-lg bg-muted/70 px-3 py-2">
                  <span className="font-semibold text-foreground/55">ÎNAINTE:</span>{" "}
                  <span className="text-foreground/80">{t.before}</span>
                </div>
                <div className="rounded-lg bg-primary/10 px-3 py-2">
                  <span className="font-semibold text-primary">ACUM:</span>{" "}
                  <span className="font-medium text-secondary">{t.after}</span>
                </div>
              </div>

              <p className="mt-5 flex-1 text-[15px] italic leading-relaxed text-foreground/80">
                «{t.quote}»
              </p>

              <div className="mt-5 flex items-center justify-between rounded-lg border border-dashed border-border bg-background px-3 py-2 text-xs text-foreground/60">
                <span>📊 Screenshot {t.platform}</span>
                <span className="font-mono">{t.after.split(" ")[0]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
