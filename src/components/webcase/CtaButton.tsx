import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { useSignup } from "./SignupContext";
import { cn } from "@/lib/utils";

type Size = "md" | "lg" | "xl";

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  children: ReactNode;
}

const sizeClasses: Record<Size, string> = {
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-base sm:text-lg",
  xl: "h-16 px-8 text-lg",
};

export function CtaButton({ size = "lg", className, children, onClick, ...props }: CtaButtonProps) {
  const { openModal } = useSignup();
  return (
    <button
      type="button"
      onClick={(e) => {
        console.log("[CtaButton] click");
        onClick?.(e);
        openModal();
      }}
      className={cn(
        "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary font-display font-bold tracking-tight text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.685_0.196_38/0.55)] transition-all duration-200 hover:scale-[1.02] hover:bg-primary/95 hover:shadow-[0_12px_32px_-8px_oklch(0.685_0.196_38/0.7)] active:scale-[0.99] sm:w-auto",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
