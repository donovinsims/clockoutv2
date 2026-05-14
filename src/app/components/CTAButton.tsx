import { ReactNode } from "react";
import { openCal } from "../lib/cal";

type Variant = "primary" | "ghost" | "nav";

export function CTAButton({
  children,
  variant = "primary",
  className = "",
}: { children: ReactNode; variant?: Variant; className?: string }) {

  const base = "inline-flex items-center justify-center gap-2 transition-all duration-300 min-h-12 select-none cursor-pointer";
  const styles: Record<Variant, string> = {
    primary:
      "bg-accent text-accent-foreground hover:scale-[1.02] active:scale-[0.98] px-7 py-4 rounded-none mono text-[15px] font-bold tracking-wider hover:shadow-[0_0_20px_-5px_rgba(var(--accent-rgb),0.3)]",
    ghost:
      "border border-border-strong text-foreground hover:border-accent hover:text-accent px-6 py-3.5 rounded-none mono text-sm transition-colors",
    nav:
      "bg-accent text-accent-foreground hover:brightness-110 px-5 py-2.5 rounded-none mono text-[13px] font-bold tracking-widest uppercase",
  };

  return (
    <button onClick={openCal} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}
