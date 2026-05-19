import { CtaButton } from "./CtaButton";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[oklch(0.62_0.21_30)] px-5 py-20 text-primary-foreground sm:px-8 sm:py-24">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_40%),radial-gradient(circle_at_80%_80%,white_0,transparent_40%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
          Începi acum sau cândva?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
          Cursul gratuit începe în momentul în care te înscrii.
          <br />
          În 20 de minute poți avea primul tău design real.
        </p>

        <div className="mt-8 flex justify-center">
          <CtaButton
            size="xl"
            className="!w-full !bg-background !text-primary hover:!bg-background/95 sm:!w-auto"
          >
            ÎNSCRIE-MĂ ACUM →
          </CtaButton>
        </div>

        <ul className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-2 text-left text-[15px] font-medium text-primary-foreground/95 sm:grid-cols-2">
          <li>✓ Acces instant</li>
          <li>✓ Fără card. Fără spam.</li>
          <li>✓ Mentor uman, nu chatbot.</li>
          <li>✓ Diplomă personalizată inclusă.</li>
        </ul>

        <p className="mt-10 text-sm text-primary-foreground/85">
          38.000+ oameni au început exact așa. Tu urmezi?
        </p>
      </div>
    </section>
  );
}
