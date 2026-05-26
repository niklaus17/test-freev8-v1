import { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useSignup } from "./SignupContext";

const WIDGET_ID = "b0b5cfd57427caebedb92a796623df66ec3d589e";
const WIDGET_SRC = "https://community.webcase.md/pl/lite/widget/script?id=1609357";

export function SignupModal() {
  const { open, setOpen } = useSignup();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const container = containerRef.current;
    if (!container) return;

    // Clear any previous render of the widget before re-injecting
    container.innerHTML = "";

    const script = document.createElement("script");
    script.id = WIDGET_ID;
    script.src = WIDGET_SRC;
    script.async = true;
    container.appendChild(script);

    return () => {
      // Remove any global script tag the widget may have appended to <head>/<body>
      document.querySelectorAll(`script[src="${WIDGET_SRC}"]`).forEach((s) => s.remove());
      const stray = document.getElementById(WIDGET_ID);
      if (stray && stray.parentElement && stray.parentElement !== container) {
        stray.remove();
      }
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md gap-0 rounded-2xl border-0 bg-background p-0 shadow-2xl">
        <div className="px-6 pt-8 sm:px-8">
          <DialogTitle className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            GATA SĂ ÎNCEPI?
          </DialogTitle>
          <DialogDescription className="mt-2 text-base text-foreground/70">
            Completează formularul — primești acces instant la prima lecție.
          </DialogDescription>
        </div>
        <div ref={containerRef} className="webcase-widget px-6 pb-8 pt-5 sm:px-8" />
      </DialogContent>
    </Dialog>
  );
}
