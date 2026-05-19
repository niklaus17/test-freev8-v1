import { CtaButton } from "./CtaButton";

const cards = [
  { icon: "🎬", title: "4 LECȚII VIDEO", desc: "Sub 25 min fiecare. În Figma." },
  { icon: "👨‍🏫", title: "MENTOR UMAN", desc: "Feedback personal la teme în 24-48h. Nu chatbot." },
  { icon: "🎁", title: "LECȚIE BONUS", desc: "Webflow workflow — drumul pro." },
  { icon: "🎓", title: "DIPLOMĂ", desc: "Personalizată cu numele tău. Share LinkedIn." },
];

export function WhatYouGet() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-extrabold text-secondary sm:text-4xl">
          4 lecții care îți răspund la o întrebare: e pentru mine?
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-6"
            >
              <div className="text-3xl sm:text-4xl">{c.icon}</div>
              <h3 className="mt-4 font-display text-sm font-extrabold tracking-wide text-secondary sm:text-base">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70 sm:text-[15px]">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CtaButton size="lg">START GRATUIT →</CtaButton>
        </div>
      </div>
    </section>
  );
}
