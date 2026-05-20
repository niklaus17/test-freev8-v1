import { useEffect, useState } from "react";
import { useSignup } from "./SignupContext";

export function LiveActivity() {
  const { activity } = useSignup();
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState<{ id: number; label: string } | null>(null);

  useEffect(() => {
    if (!activity) return;
    setCurrent(activity);
    setVisible(true);
    const hide = setTimeout(() => setVisible(false), 5200);
    return () => clearTimeout(hide);
  }, [activity]);

  if (!current) return null;

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-24 left-4 z-30 max-w-[18rem] transition-all duration-300 sm:bottom-6 sm:left-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <div className="flex items-start gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl ring-1 ring-black/5">
        <span className="relative mt-1 flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <div className="text-sm">
          <div className="font-semibold text-secondary">{current.label}</div>
          <div className="text-foreground/60">tocmai s-a înscris la curs</div>
        </div>
      </div>
    </div>
  );
}
