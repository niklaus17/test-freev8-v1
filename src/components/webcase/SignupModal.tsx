import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useSignup } from "./SignupContext";

const schema = z.object({
  name: z.string().trim().max(80).optional(),
  email: z.string().trim().email("Email invalid").max(255),
  phone: z.string().trim().max(40).optional(),
});

export function SignupModal() {
  const { open, setOpen } = useSignup();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: (fd.get("name") as string) || undefined,
      email: fd.get("email") as string,
      phone: (fd.get("phone") as string) || undefined,
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Verifică datele introduse");
      return;
    }
    setLoading(true);
    console.log("[Webcase signup]", parsed.data);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  }

  function handleOpenChange(v: boolean) {
    setOpen(v);
    if (!v) setTimeout(() => setSubmitted(false), 200);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-w-md gap-0 rounded-2xl border-0 bg-background p-0 shadow-2xl"
      >
        <button
          type="button"
          onClick={() => handleOpenChange(false)}
          aria-label="Închide"
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition hover:bg-muted hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="px-6 py-10 text-center sm:px-10">
            <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent">
              <CheckCircle2 className="h-9 w-9 text-primary" strokeWidth={2.5} />
            </div>
            <DialogTitle className="font-display text-2xl font-bold">Ești înscris!</DialogTitle>
            <DialogDescription className="mt-3 text-base text-foreground/70">
              Verifică emailul tău. Lecția 1 te așteaptă.
            </DialogDescription>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-8">
            <DialogTitle className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              GATA SĂ ÎNCEPI?
            </DialogTitle>
            <DialogDescription className="mt-2 text-base text-foreground/70">
              Prima lecție te așteaptă.
            </DialogDescription>

            <div className="mt-6 space-y-3">
              <input
                name="name"
                type="text"
                placeholder="Numele tău"
                autoComplete="name"
                maxLength={80}
                className="h-12 w-full rounded-xl border border-border bg-background px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email *"
                autoComplete="email"
                maxLength={255}
                className="h-12 w-full rounded-xl border border-border bg-background px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <div>
                <input
                  name="phone"
                  type="text"
                  placeholder="WhatsApp/Telegram (opțional)"
                  autoComplete="tel"
                  maxLength={40}
                  className="h-12 w-full rounded-xl border border-border bg-background px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <p className="mt-1.5 px-1 text-sm text-foreground/60">
                  📩 Primești feedback mai rapid
                </p>
              </div>
            </div>

            {error && (
              <p className="mt-3 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-5 inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary font-display text-base font-bold tracking-tight text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.685_0.196_38/0.55)] transition hover:scale-[1.01] hover:bg-primary/95 disabled:opacity-60"
            >
              {loading ? "Se trimite..." : "ÎNCEPE LECȚIA 1 →"}
            </button>

            <ul className="mt-4 space-y-1.5 text-sm text-foreground/70">
              <li>✓ Acces instant după înscriere</li>
              <li>✓ 100% gratuit</li>
            </ul>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
