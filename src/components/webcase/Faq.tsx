import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "E cu adevărat 100% gratuit?",
    a: "Da. Fără card, fără upselling automat, fără tactici. La final ai opțiunea cursului plătit, dar e complet decizia ta. Cei care nu cumpără rămân cu diploma și skill-ul învățat — gratuit pentru totdeauna.",
  },
  {
    q: "Câte ore îmi ia?",
    a: "30-60 min pe zi, în ritmul tău. Lecții sub 25 min, teme 20-50 min. Total: aproximativ 3 ore în 7 zile. Mai puțin decât 1 episod Netflix pe zi.",
  },
  {
    q: "Am nevoie de experiență sau talent?",
    a: "Zero experiență. Zero talent natural. Cursul e construit special pentru începători absoluți. Faci primul design în 20 min cu template pregătit.",
  },
  {
    q: "Funcționează pe mobil?",
    a: "Lecțiile video — da, oriunde. Temele necesită laptop sau desktop (Figma e mai practic pe ecran mare). Aproximativ 60 min total de lucru pe laptop în toate 7 zilele.",
  },
  {
    q: "Ce se întâmplă dacă nu termin în 7 zile?",
    a: "Scrii mentorului — îți redeschidem accesul. Nimeni nu te penalizează pentru ritm propriu. Dar majoritatea termină în 4-6 zile.",
  },
  {
    q: "Ce program folosesc?",
    a: "Figma — gratuit, online, în browser. Îți facem cont în 30 sec dacă nu ai. Nu trebuie să descarci nimic.",
  },
  {
    q: "Mentorul e real sau chatbot?",
    a: "Real. Om viu. Evaluează personal designul tău, scrie feedback unic pentru tine. Răspund tipic în 24-48h (luni-vineri).",
  },
  {
    q: "Pot să-mi schimb cariera doar din cursul gratuit?",
    a: "Nu. Cursul gratuit e drumul de test (7 zile) ca să vezi dacă e pentru tine. Pentru cariera completă (portofoliu, clienți, freelance), ai nevoie de cursul de bază — pe care îl prezentăm la sfârșit, fără presiune.",
  },
];

export function Faq() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl font-extrabold text-secondary sm:text-4xl">
          Răspunsuri la întrebările pe care le ai acum.
        </h2>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5 last:border-b"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base font-bold text-secondary hover:no-underline sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-foreground/80">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
