import { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useSignup } from "./SignupContext";

export function SignupModal() {
  const { open, setOpen } = useSignup();
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const loc = document.getElementById("16093576a15536189bed") as HTMLInputElement | null;
    const ref = document.getElementById("16093576a15536189bedref") as HTMLInputElement | null;
    if (loc) loc.value = window.location.href;
    if (ref) ref.value = document.referrer;
    const statUrl =
      "https://community.webcase.md/stat/counter?ref=" +
      encodeURIComponent(document.referrer) +
      "&loc=" +
      encodeURIComponent(document.location.href);
    if (containerRef.current) {
      containerRef.current.innerHTML =
        "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md gap-0 rounded-2xl border-0 bg-background p-6 shadow-2xl sm:p-8">
        <DialogTitle className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          GATA SĂ ÎNCEPI?
        </DialogTitle>
        <DialogDescription className="mt-2 text-base text-foreground/70">
          Completează datele și primești acces instant la prima lecție.
        </DialogDescription>

        <form
          id="ltForm1109610"
          className="lt-normal-form lt-form-inner lt-form mt-6 space-y-4"
          data-id="2232334843"
          action="https://community.webcase.md/pl/lite/block-public/process-html?id=2232334843"
          method="post"
          data-open-new-window="0"
          data-sequential-request="1"
        >
          <input type="hidden" name="formParams[setted_offer_id]" />

          <div className="field-content">
            <div className="field-label mb-1.5 text-sm font-semibold tracking-wide text-foreground/80">
              NUME
            </div>
            <input
              type="text"
              maxLength={60}
              id="name"
              placeholder="Prenume Nume"
              name="formParams[full_name]"
              defaultValue=""
              className="h-12 w-full rounded-xl border border-border bg-background px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="field-content">
            <div className="field-label mb-1.5 text-sm font-semibold tracking-wide text-foreground/80">
              TELEFON
            </div>
            <input
              type="text"
              maxLength={60}
              id="phone"
              placeholder="Numărul de telefon"
              name="formParams[phone]"
              defaultValue=""
              className="h-12 w-full rounded-xl border border-border bg-background px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="field-content">
            <div className="field-label mb-1.5 text-sm font-semibold tracking-wide text-foreground/80">
              EMAIL
            </div>
            <input
              type="text"
              maxLength={60}
              id="email"
              placeholder="Email-ul tău"
              name="formParams[email]"
              defaultValue=""
              className="h-12 w-full rounded-xl border border-border bg-background px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <button
            type="submit"
            id="button1413831"
            style={{ color: "#ffffff", backgroundColor: "#ff4365" }}
            onClick={() => {
              const w = window as unknown as Record<string, unknown>;
              if (w["btnprs6a15536190db3"]) return false;
              w["btnprs6a15536190db3"] = true;
              setTimeout(() => {
                w["btnprs6a15536190db3"] = false;
              }, 6000);
              return true;
            }}
            className="mt-2 inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl font-display text-base font-bold tracking-tight shadow-[0_8px_24px_-8px_rgba(255,67,101,0.55)] transition hover:scale-[1.01]"
          >
            Înregistrează-mă
          </button>

          <input
            type="hidden"
            id="16093576a15536189bed"
            name="__gc__internal__form__helper"
            className="__gc__internal__form__helper"
            defaultValue=""
          />
          <input
            type="hidden"
            id="16093576a15536189bedref"
            name="__gc__internal__form__helper_ref"
            className="__gc__internal__form__helper_ref"
            defaultValue=""
          />
          <input type="hidden" name="requestTime" defaultValue="1779782497" />
          <input
            type="hidden"
            name="requestSimpleSign"
            defaultValue="404cace4c0c0d135b4e58e1af31479a8"
          />
          <input type="hidden" name="isHtmlWidget" defaultValue="1" />
        </form>

        <span id="gccounterImgContainer" ref={containerRef} />

        <ul className="mt-4 space-y-1.5 text-sm text-foreground/70">
          <li>✓ Acces instant după înscriere</li>
          <li>✓ 100% gratuit</li>
        </ul>
      </DialogContent>
    </Dialog>
  );
}
