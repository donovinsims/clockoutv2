import { ArrowRight } from "lucide-react";
import { openCal } from "../lib/cal";

type Variant = "primary" | "ghost" | "compact";

export function CalButton({
  children,
  variant = "primary",
  showArrow = true,
  className = "",
}: {
  children: React.ReactNode;
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-md transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--co-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--co-bg)] tracking-tight";

  const styles: Record<Variant, string> = {
    primary:
      "bg-[var(--co-accent)] text-black hover:bg-[var(--co-accent-hi)] active:translate-y-[1px]",
    ghost:
      "border border-[var(--co-line)] text-[var(--co-fg)] hover:border-[var(--co-accent)] hover:text-[var(--co-accent)]",
    compact:
      "bg-[var(--co-accent)] text-black hover:bg-[var(--co-accent-hi)] min-h-[44px] px-4",
  };

  return (
    <button
      type="button"
      onClick={openCal}
      className={`${base} ${styles[variant]} ${className}`}
      style={{ fontWeight: 600 }}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={18}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={2.25}
        />
      )}
    </button>
  );
}
