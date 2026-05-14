import { useEffect, useId, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { CTAButton } from "./CTAButton";
import type { AgentCard } from "../data/agents";

const tagColor: Record<string, string> = {
  Phone: "text-sky-300 border-sky-300/30 bg-sky-300/5",
  SMS: "text-emerald-300 border-emerald-300/30 bg-emerald-300/5",
  Email: "text-amber-300 border-amber-300/30 bg-amber-300/5",
  AI: "text-fuchsia-300 border-fuchsia-300/30 bg-fuchsia-300/5",
};

export type SelectedAgent = {
  card: AgentCard;
  sectionTitle: string;
  advanced: boolean;
} | null;

export function AgentModal({
  selected,
  onClose,
}: {
  selected: SelectedAgent;
  onClose: () => void;
}) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => closeRef.current?.focus());
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    if (selected) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, onClose]);

  const { card, sectionTitle, advanced } = selected ?? {};

  return (
    <AnimatePresence>
      {selected && card && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-[3px]"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full sm:max-w-xl bg-surface border-t sm:border border-border-strong shadow-2xl flex flex-col max-h-[70vh] sm:max-h-[90vh]"
          >
            {/* Mobile drag handle */}
            <div className="sm:hidden flex justify-center pt-3 pb-1 shrink-0" aria-hidden="true">
              <div className="w-10 h-1 bg-border-strong rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border shrink-0">
              <div className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2">
                <span className={advanced ? "text-fuchsia-300" : "text-accent"}>
                  {advanced ? "AI Agent" : "Workflow"}
                </span>
                <span className="w-6 h-px bg-border-strong" aria-hidden="true" />
                <span>{sectionTitle}</span>
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                className="w-11 h-11 grid place-items-center text-muted-foreground hover:text-foreground hover:bg-surface-2 transition-colors -mr-1"
                aria-label="Close details"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto flex-1 overscroll-contain">
              {/* Identity block */}
              <div className="px-5 sm:px-6 pt-6 pb-5 border-b border-border">
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      className={`mono text-[10px] uppercase tracking-wider px-2 py-0.5 border ${tagColor[t] || "border-border text-muted-foreground"}`}
                    >
                      {t}
                    </span>
                  ))}
                  {card.recovers && (
                    <span className="ml-auto mono text-[11px] uppercase tracking-wider text-accent">
                      ◆ {card.recovers}
                    </span>
                  )}
                </div>
                <h2 id={titleId} className="tracking-tight">{card.name}</h2>
              </div>

              <div className="px-5 sm:px-6 py-6 space-y-8">
                {/* About */}
                <div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-accent mb-3">About</div>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{card.detail}</p>
                </div>

                {/* How it works */}
                <div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-accent mb-4">How it works</div>
                  <ol className="space-y-3" aria-label="Steps">
                    {card.howItWorks.map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="mono text-[11px] text-accent shrink-0 mt-0.5 w-4" aria-hidden="true">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-foreground leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* What to expect */}
                <div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-accent mb-3">What to expect</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.whatToExpect}</p>
                </div>

                {/* Meta grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border overflow-hidden">
                  <div className="bg-background p-4">
                    <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      Good for
                    </div>
                    <ul className="flex flex-wrap gap-1.5" aria-label="Suitable business types">
                      {card.goodFor.map((g) => (
                        <li key={g}>
                          <span className="mono text-[10px] text-muted-foreground border border-border px-2 py-0.5">
                            {g}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-background p-4 border-t sm:border-t-0 border-border">
                    <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      Setup time
                    </div>
                    <div className="mono text-sm text-foreground">{card.setupTime}</div>
                  </div>
                </div>

                {/* Bottom padding so last content clears the sticky footer on mobile */}
                <div className="h-1" aria-hidden="true" />
              </div>
            </div>

            {/* Sticky footer CTA */}
            <div className="shrink-0 border-t border-border bg-surface px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <CTAButton className="w-full sm:w-auto">Get My Free Revenue Report →</CTAButton>
              <span className="mono text-xs text-muted-foreground text-center sm:text-left">
                20 min. We'll map this system for your operation.
              </span>
            </div>

            {/* iOS safe area spacer */}
            <div className="sm:hidden h-[env(safe-area-inset-bottom)] shrink-0 bg-surface" aria-hidden="true" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
