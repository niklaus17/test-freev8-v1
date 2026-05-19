import { useEffect, useState } from "react";
import { useSignup } from "./SignupContext";

export function StickyCta() {
  const { openModal, open } = useSignup();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const scrolled = window.scrollY / (h.scrollHeight - h.clientHeight || 1);
      setVisible(scrolled > 0.3 && window.innerWidth < 768);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (open) return null;

  return (
    <button
      type="button"
      onClick={openModal}
      aria-label="Începe gratuit"
      className={`fixed bottom-4 left-4 right-4 z-40 inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-display text-base font-bold text-primary-foreground shadow-[0_10px_30px_-6px_oklch(0.685_0.196_38/0.6)] transition-all duration-300 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground/70 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-foreground" />
      </span>
      Începe gratuit →
    </button>
  );
}
