import { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useSignup } from "./SignupContext";

const WIDGET_ID = "b0b5cfd57427caebedb92a796623df66ec3d589e";
const WIDGET_SRC = "https://community.webcase.md/pl/lite/widget/script?id=1609357";
const JQUERY_SRC = "https://code.jquery.com/jquery-3.7.1.min.js";
const JQUERY_ID = "jquery-cdn";
const WIDGET_IFRAME_ID = "01364ca80ac16d62da57ea44a0b31659f2126e0a_877";

function ensureJQuery(): Promise<void> {
  return new Promise((resolve, reject) => {
    const currentWindow = window as typeof window & { jQuery?: unknown };

    if (currentWindow.jQuery) {
      console.log("jQuery loaded");
      resolve();
      return;
    }

    const existingScript = document.getElementById(JQUERY_ID) as HTMLScriptElement | null;
    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        console.log("jQuery loaded");
        resolve();
        return;
      }

      existingScript.addEventListener(
        "load",
        () => {
          existingScript.dataset.loaded = "true";
          console.log("jQuery loaded");
          resolve();
        },
        { once: true },
      );
      existingScript.addEventListener("error", () => reject(new Error("Failed to load jQuery")), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.id = JQUERY_ID;
    script.src = JQUERY_SRC;
    script.async = false;
    script.onload = () => {
      script.dataset.loaded = "true";
      console.log("jQuery loaded");
      resolve();
    };
    script.onerror = () => reject(new Error("Failed to load jQuery"));
    document.head.appendChild(script);
  });
}

function buildFallbackIframeSrc() {
  let src = "https://community.webcase.md/pl/lite/widget/widget"
    + `?${window.location.search.substring(1)}`
    + "&id=1609357"
    + `&ref=${encodeURIComponent(document.referrer)}`
    + `&loc=${encodeURIComponent(window.location.href)}`;

  try {
    const currentWindow = window as typeof window & { clrtQueryData?: unknown };
    if (currentWindow.clrtQueryData) {
      src += `&clrtQueryData=${encodeURIComponent(JSON.stringify(currentWindow.clrtQueryData))}`;
    }
  } catch {
    // noop
  }

  return src;
}

function createFallbackIframe(container: HTMLDivElement) {
  if (container.querySelector(`iframe#${WIDGET_IFRAME_ID}`)) {
    return () => {};
  }

  const iframe = document.createElement("iframe");
  iframe.src = buildFallbackIframeSrc();
  iframe.dataset.accountId = "521488";
  iframe.style.width = "100%";
  iframe.style.height = "0px";
  iframe.style.border = "none";
  iframe.style.overflow = "hidden";
  iframe.setAttribute("allowfullscreen", "allowfullscreen");
  iframe.className = "877";
  iframe.id = WIDGET_IFRAME_ID;
  iframe.name = "877";

  const onMessage = (event: MessageEvent<{ uniqName?: string; height?: number; iframeName?: string }>) => {
    if (event.data?.uniqName !== WIDGET_ID || !event.data?.height) {
      return;
    }

    if (event.data.iframeName) {
      const cuttedName = event.data.iframeName.split("&")[0];
      if (cuttedName !== iframe.name) {
        return;
      }
    }

    container.style.height = `${event.data.height}px`;
    iframe.style.height = `${event.data.height}px`;
  };

  window.addEventListener("message", onMessage);
  container.style.overflow = "hidden";
  container.appendChild(iframe);

  return () => window.removeEventListener("message", onMessage);
}

async function inspectWidgetSourceForDocumentWrite() {
  try {
    const response = await fetch(WIDGET_SRC);
    const source = await response.text();
    return source.includes("document.write");
  } catch (error) {
    console.error("[SignupModal] unable to inspect widget source", error);
    return false;
  }
}

export function SignupModal() {
  const { open, setOpen } = useSignup();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fallbackCleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    let cancelled = false;

    if (container.querySelector("iframe") || container.querySelector(`script#${WIDGET_ID}`)) {
      return;
    }

    ensureJQuery()
      .then(() => {
        if (cancelled) {
          return;
        }

        const widgetScript = document.createElement("script");
        widgetScript.id = WIDGET_ID;
        widgetScript.src = WIDGET_SRC;
        widgetScript.async = false;
        widgetScript.onload = () => {
          console.log("widget loaded");

          const currentWindow = window as typeof window & Record<string, unknown>;
          const startWidget = currentWindow[`startWidget${WIDGET_ID}`];

          if (typeof startWidget === "function") {
            try {
              (startWidget as () => void)();
            } catch (error) {
              console.error("[SignupModal] widget start failed", error);
            }
          } else {
            document.dispatchEvent(new Event(`StartWidget${WIDGET_ID}`));
          }

          window.setTimeout(async () => {
            if (cancelled) {
              return;
            }

            const iframe = container.querySelector("iframe");
            if (iframe) {
              console.log("widget iframe detected");
              return;
            }

            const usesDocumentWrite = await inspectWidgetSourceForDocumentWrite();
            console.log(`[SignupModal] widget uses document.write: ${usesDocumentWrite}`);

            if (!container.querySelector("iframe")) {
              fallbackCleanupRef.current?.();
              fallbackCleanupRef.current = createFallbackIframe(container);
            }
          }, 1200);
        };
        widgetScript.onerror = () => {
          fallbackCleanupRef.current?.();
          fallbackCleanupRef.current = createFallbackIframe(container);
        };

        container.appendChild(widgetScript);
        console.log("widget inserted");
      })
      .catch((error) => {
        console.error("[SignupModal] widget load failed", error);
        fallbackCleanupRef.current?.();
        fallbackCleanupRef.current = createFallbackIframe(container);
      });

    return () => {
      cancelled = true;
    };
  }, [open]);

  useEffect(() => {
    return () => {
      fallbackCleanupRef.current?.();
      fallbackCleanupRef.current = null;

      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

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
