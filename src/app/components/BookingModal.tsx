import { useEffect, useId, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, CheckCircle2 } from "lucide-react";
import { useBooking } from "./BookingContext";

function generateSlots(): string[] {
  const result: string[] = [];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const times = ["9:00 AM", "11:30 AM", "2:00 PM"];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (result.length < 8) {
    const dow = d.getDay();
    if (dow > 0 && dow < 6) {
      const label = `${dayNames[dow]}, ${monthNames[d.getMonth()]} ${d.getDate()}`;
      for (const t of times) {
        if (result.length < 8) result.push(`${label} · ${t}`);
      }
    }
    d.setDate(d.getDate() + 1);
  }
  return result;
}

export function BookingModal() {
  const { open, closeBooking } = useBooking();
  const [step, setStep] = useState<"slot" | "details" | "done">("slot");
  const [slot, setSlot] = useState<string | null>(null);
  const slots = useMemo(() => generateSlots(), []);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      setStep("slot");
      setSlot(null);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => closeRef.current?.focus());
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") closeBooking(); }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeBooking]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"
            onClick={closeBooking}
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
            className="relative w-full sm:max-w-2xl bg-surface border-t sm:border border-border-strong shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[90vh]"
          >
            {/* Mobile drag handle */}
            <div className="sm:hidden flex justify-center pt-3 pb-1 shrink-0" aria-hidden="true">
              <div className="w-10 h-1 bg-border-strong rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border shrink-0">
              <div className="flex items-center gap-2">
                <span className="mono text-[11px] uppercase tracking-[0.18em] text-accent">cal.com</span>
                <span className="text-muted-foreground">/</span>
                <span id={titleId} className="text-sm">Free Assessment · 20 min</span>
              </div>
              <button
                ref={closeRef}
                onClick={closeBooking}
                className="w-11 h-11 grid place-items-center text-muted-foreground hover:text-foreground hover:bg-surface-2 transition-colors -mr-1"
                aria-label="Close booking modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto flex-1 overscroll-contain">
              {step === "slot" && (
                <div className="px-5 sm:px-6 py-5 sm:py-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar size={14} aria-hidden="true" /> Pick a time that works
                  </div>
                  <h3 className="mb-3">Free 20-minute assessment</h3>
                  <p className="mono text-[11px] text-muted-foreground mb-5 flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
                    I limit new installs to ~5/month to keep quality high — these slots book out.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border overflow-hidden">
                    {slots.map((s) => (
                      <button
                        key={s}
                        onClick={() => { setSlot(s); setStep("details"); }}
                        className="text-left px-4 py-4 min-h-[52px] bg-surface-2 hover:bg-surface hover:text-accent active:bg-surface transition-colors mono text-sm"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <p className="mono text-xs text-muted-foreground mt-4 flex items-center gap-1.5">
                    <Clock size={12} aria-hidden="true" /> All times shown CT
                  </p>
                </div>
              )}

              {step === "details" && (
                <form
                  onSubmit={(e) => { e.preventDefault(); setStep("done"); }}
                  className="px-5 sm:px-6 py-5 sm:py-6 space-y-4"
                >
                  <div className="text-sm text-muted-foreground">
                    Booking: <span className="mono text-foreground">{slot}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Field label="Name" name="name" required />
                    <Field label="Business" name="business" required />
                  </div>
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                  <div>
                    <label className="text-xs mono uppercase tracking-wider text-muted-foreground" htmlFor="pain">
                      What's leaking the most?
                    </label>
                    <textarea
                      id="pain"
                      rows={3}
                      className="mt-1.5 w-full bg-surface-2 border border-border px-3 py-2.5 focus:border-accent focus:outline-none text-sm resize-none"
                      placeholder="Missed calls, no follow-up, drowning in admin..."
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-1 pb-2">
                    <button
                      type="button"
                      onClick={() => setStep("slot")}
                      className="text-sm text-muted-foreground hover:text-foreground min-h-[44px] px-3"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 sm:flex-none ml-auto bg-accent text-accent-foreground hover:brightness-110 active:brightness-95 transition px-5 py-3 min-h-[44px] mono text-sm font-semibold"
                    >
                      Confirm booking
                    </button>
                  </div>
                </form>
              )}

              {step === "done" && (
                <div className="px-5 sm:px-6 py-10 sm:py-8 text-center">
                  <div className="mx-auto w-12 h-12 bg-accent/15 text-accent grid place-items-center mb-4">
                    <CheckCircle2 size={26} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2">Booked.</h3>
                  <p className="text-muted-foreground text-sm mb-1">{slot}</p>
                  <p className="text-muted-foreground text-sm">
                    Confirmation sent. I'll text you the morning of with the agenda.
                  </p>
                  <button
                    onClick={closeBooking}
                    className="mt-6 mono text-sm border border-border-strong px-6 py-3 min-h-[44px] hover:border-accent transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            {/* iOS safe area spacer */}
            <div className="sm:hidden h-[env(safe-area-inset-bottom)] shrink-0" aria-hidden="true" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs mono uppercase tracking-wider text-muted-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full bg-surface-2 border border-border px-3 py-3 min-h-[44px] focus:border-accent focus:outline-none text-sm"
      />
    </div>
  );
}
