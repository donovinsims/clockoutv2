import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { openCal } from "../lib/cal";

const SESSION_KEY = "eim_shown";
const MIN_TIME_ON_PAGE_MS = 8_000;

export function ExitIntentModal() {
  const [visible, setVisible] = useState(false);
  const enteredAt = useRef(Date.now());

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    function dismiss() {
      setVisible(false);
      sessionStorage.setItem(SESSION_KEY, "1");
    }

    function maybeShow() {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      if (Date.now() - enteredAt.current < MIN_TIME_ON_PAGE_MS) return;
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }

    // Desktop: mouse leaves from the top edge
    function onMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) maybeShow();
    }

    // Mobile proxy: scroll back near top after scrolling deep
    let maxScroll = 0;
    let mobileTimer: ReturnType<typeof setTimeout>;

    function onScroll() {
      const y = window.scrollY;
      if (y > maxScroll) maxScroll = y;
      // If user scrolled down 500px+ then back within 150px of top
      if (maxScroll > 500 && y < 150 && y < maxScroll - 350) {
        clearTimeout(mobileTimer);
        mobileTimer = setTimeout(maybeShow, 400);
      }
    }

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(mobileTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
            onClick={() => setVisible(false)}
            aria-hidden="true"
          />

          <motion.div
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative w-full sm:max-w-lg bg-surface border-t sm:border border-border-strong shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="One thing before you go"
          >
            {/* Mobile drag handle */}
            <div className="sm:hidden flex justify-center pt-3 pb-1" aria-hidden="true">
              <div className="w-10 h-1 bg-border-strong rounded-full" />
            </div>

            <div className="px-6 py-7 sm:py-8">
              <button
                onClick={() => setVisible(false)}
                className="absolute top-4 right-4 w-9 h-9 grid place-items-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="mono text-[10px] uppercase tracking-[0.18em] text-accent mb-4">
                One thing before you go.
              </div>

              <h3 className="mb-3 leading-snug">
                Find out exactly where your business is leaking money.
              </h3>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-md">
                The free 20-minute assessment shows you the exact dollar math — missed calls,
                cold estimates, admin hours. Written report, no pitch.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <button
                  onClick={() => { setVisible(false); openCal(); }}
                  className="bg-accent text-accent-foreground hover:brightness-110 active:brightness-95 transition px-5 py-3.5 min-h-[48px] w-full sm:w-auto mono text-sm font-semibold tracking-wide shadow-[0_0_0_1px_rgba(95,220,122,0.4),0_8px_24px_-8px_rgba(95,220,122,0.45)]"
                >
                  See Where You're Losing Money →
                </button>
                <button
                  onClick={() => setVisible(false)}
                  className="mono text-xs text-muted-foreground hover:text-foreground transition-colors py-2 min-h-[44px] px-1"
                >
                  No thanks, I'm good.
                </button>
              </div>

              <p className="mono text-[10px] text-muted-foreground mt-5 flex items-center gap-2">
                <span className="inline-block w-1 h-1 bg-accent rounded-full" />
                20 min · no pitch · written report either way
              </p>
            </div>

            {/* iOS safe area */}
            <div className="sm:hidden h-[env(safe-area-inset-bottom)]" aria-hidden="true" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
