import { Zap } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { useSignup } from "./SignupContext";
import mockup1 from "@/assets/hero-mockup-1.jpg";
import mockup2 from "@/assets/hero-mockup-2.jpg";
import mockup3 from "@/assets/hero-mockup-3.jpg";

export function Hero() {
  const { dates, enrolledToday, remainingToday } = useSignup();

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-accent/60 via-background to-background">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-5 sm:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary font-display text-lg font-bold text-secondary-foreground">
            W
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-secondary">
            Webcase
          </span>
        </div>
        <div className="text-base sm:text-lg" aria-label="Romania și Moldova">
          🇷🇴 🇲🇩
        </div>
      </nav>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-10 sm:px-8 sm:pt-14 md:grid-cols-2 md:items-center md:gap-14 md:pb-24 md:pt-20">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Sesiunea {dates.rangeLabel} · gratuit
          </span>
          <h1 className="mt-4 font-display text-[2.1rem] font-extrabold leading-[1.05] tracking-tight text-secondary sm:text-5xl md:text-6xl">
            Primul tău design în 20 de minute.
          </h1>
          <p className="mt-5 text-lg text-foreground/75 sm:text-xl">
            Curs gratuit cu mentor uman. În ritmul tău.
          </p>

          <div className="mt-7">
            <CtaButton size="lg" className="!w-full sm:!w-auto">
              ÎNCEPE GRATUIT · {dates.rangeShort} →
            </CtaButton>
            <p className="mt-3 text-sm font-medium text-foreground/70">
              ✓ 0 lei &nbsp; ✓ Fără card &nbsp; ✓ Diplomă inclusă
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-foreground/65 md:justify-start">
              <span className="inline-flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-semibold text-emerald-700">{enrolledToday} înscriși astăzi</span>
              </span>
              <span className="text-foreground/35">·</span>
              <span>{remainingToday} locuri rămase pentru sesiunea de azi</span>
            </div>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground/80">
            <Zap className="h-4 w-4 text-primary" fill="currentColor" />
            Acces instant · primești prima lecție azi, {dates.startLabel}
          </div>
        </div>


        <div className="relative mx-auto h-[360px] w-full max-w-sm sm:h-[440px] md:h-[480px]">
          <img
            src={mockup1}
            alt="Design web pe laptop"
            width={800}
            height={600}
            className="absolute left-0 top-0 w-[78%] -rotate-3 rounded-2xl shadow-2xl ring-1 ring-black/5"
          />
          <img
            src={mockup3}
            alt="Canvas Figma cu componente"
            loading="lazy"
            width={800}
            height={600}
            className="absolute right-0 top-16 w-[70%] rotate-2 rounded-2xl shadow-2xl ring-1 ring-black/5"
          />
          <img
            src={mockup2}
            alt="Design mobile"
            loading="lazy"
            width={600}
            height={800}
            className="absolute bottom-0 left-1/2 w-[42%] -translate-x-1/2 -rotate-1 rounded-2xl shadow-2xl ring-1 ring-black/5"
          />
        </div>
      </div>
    </header>
  );
}
