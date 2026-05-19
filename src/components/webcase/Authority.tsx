import sergiu from "@/assets/sergiu.jpg";
import team from "@/assets/team.jpg";

export function Authority() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-extrabold text-secondary sm:text-4xl">
          Webcase — fondat de oameni care fac asta zilnic.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <div className="mx-auto w-full max-w-sm">
            <img
              src={sergiu}
              alt="Sergiu, fondator Webcase"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full rounded-2xl object-cover shadow-lg ring-1 ring-black/5"
            />
          </div>
          <div>
            <div className="font-display text-2xl font-extrabold text-secondary">
              SERGIU [NUMELE]
            </div>
            <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-primary">
              Fondator Webcase
            </div>
            <ul className="mt-5 space-y-2 text-[15px] text-foreground/80">
              <li>• 8 ani experiență în web design.</li>
              <li>• Proiecte pentru clienți internaționali.</li>
              <li>• Predă această profesie de 5 ani.</li>
            </ul>
            <blockquote className="mt-6 rounded-2xl border-l-4 border-primary bg-accent/50 p-5 text-[15px] italic leading-relaxed text-secondary sm:text-base">
              „Am construit Webcase pentru cineva ca cine eram eu acum 8 ani — care simțea că web
              designul ar putea fi drumul lui, dar n-avea pe nimeni să-i spună «hai să încercăm
              împreună»."
            </blockquote>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-foreground/55">
            Echipa Webcase
          </p>
          <div className="mt-5 grid gap-6 md:grid-cols-2 md:items-center">
            <img
              src={team}
              alt="Echipa Webcase la birou"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full rounded-2xl object-cover shadow-md ring-1 ring-black/5"
            />
            <ul className="space-y-3 text-[15px] font-medium text-foreground/85">
              <li>✓ 38.000+ studenți instruiți</li>
              <li>✓ Echipă de mentori activi</li>
              <li>✓ Comunitate cu sute de absolvenți</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
