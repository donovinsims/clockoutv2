import { ReactNode } from "react";
import { openCal } from "../lib/cal";

type Variant = "primary" | "ghost" | "nav";

export function CTAButton({
  children,
  variant = "primary",
  className = "",
}: { children: ReactNode; variant?: Variant; className?: string }) {

  const base = "inline-flex items-center justify-center gap-2 transition-all duration-150 min-h-11 select-none";
  const styles: Record<Variant, string> = {
    primary:
      "bg-accent text-accent-foreground hover:brightness-110 active:brightness-95 px-6 py-3.5 rounded mono text-sm font-semibold tracking-wide shadow-[0_0_0_1px_rgba(95,220,122,0.4),0_8px_24px_-8px_rgba(95,220,122,0.45)]",
    ghost:
      "border border-border-strong text-foreground hover:border-accent hover:text-accent px-5 py-3 rounded mono text-sm",
    nav:
      "bg-accent text-accent-foreground hover:brightness-110 px-4 py-2 rounded mono text-xs font-semibold tracking-wider uppercase",
  };

  return (
    <button onClick={openCal} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}
