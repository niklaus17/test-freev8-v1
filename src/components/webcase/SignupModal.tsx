import { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useSignup } from "./SignupContext";

const WIDGET_ID = "b0b5cfd57427caebedb92a796623df66ec3d589e";
const WIDGET_SRC = "https://community.webcase.md/pl/lite/widget/script?id=1609357";
const JQUERY_SRC = "https://code.jquery.com/jquery-3.7.1.min.js";

function loadScript(src: string, id?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (id) {
      const existing = document.getElementById(id) as HTMLScriptElement | null;
      if (existing) {
        if (existing.dataset.loaded === "true") return resolve();
        existing.addEventListener("load", () => resolve());
        existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)));
        return;
      }
    } else {
      const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null;
      if (existing && existing.dataset.loaded === "true") return resolve();
    }

    const script = document.createElement("script");
    script.src = src;
    if (id) script.id = id;
    script.async = false;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

function ensureJQuery(): Promise<void> {
  const w = window as unknown as { jQuery?: unknown; $?: unknown };
  if (w.jQuery) return Promise.resolve();
  return loadScript(JQUERY_SRC, "jquery-cdn").then(() => {
    if (!(window as unknown as { jQuery?: unknown }).jQuery) {
      throw new Error("jQuery failed to initialize");
    }
  });
}

export function SignupModal() {
  const { open, setOpen } = useSignup();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    container.innerHTML = "";

    // Anchor where the widget will insert its iframe (it inserts before its own <script> tag).
    const anchor = document.createElement("script");
    anchor.id = WIDGET_ID;
    anchor.type = "text/placeholder";
    container.appendChild(anchor);

    ensureJQuery()
      .then(() => {
        if (cancelled) return;
        // Append the widget loader script directly into the container.
        const widgetScript = document.createElement("script");
        widgetScript.src = WIDGET_SRC;
        widgetScript.async = true;
        widgetScript.onload = () => {
          const w = window as unknown as Record<string, unknown>;
          const fn = w[`startWidget${WIDGET_ID}`];
          if (typeof fn === "function") {
            try { (fn as () => void)(); } catch { /* noop */ }
          } else {
            document.dispatchEvent(new Event(`StartWidget${WIDGET_ID}`));
          }
        };
        container.appendChild(widgetScript);
      })
      .catch((err) => {
        console.error("[SignupModal] widget load failed", err);
      });

    return () => {
      cancelled = true;
      if (container) container.innerHTML = "";
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
