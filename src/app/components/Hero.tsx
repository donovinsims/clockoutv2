import { CalButton } from "./CalButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Tinted grid background — subtle, no gradient blob */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--co-fg) 1px, transparent 1px), linear-gradient(to bottom, var(--co-fg) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-20 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.18em] text-[var(--co-accent)] mb-8" style={{ fontSize: "0.8125rem" }}>
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--co-accent)] animate-pulse" />
            Roscoe · Rockford · Machesney Park · Loves Park · Belvidere · Beloit & more
          </div>

          <h1
            className="text-[var(--co-fg)] tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.25rem)",
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            Stop losing jobs to{" "}
            <span className="text-[var(--co-accent)]">missed calls.</span>
          </h1>

          <p
            className="mt-7 text-[var(--co-fg-dim)] max-w-2xl"
            style={{ fontSize: "clamp(1.0625rem, 1.6vw, 1.25rem)", lineHeight: 1.55 }}
          >
            I build simple automations for local businesses across the Stateline that recover leads,
            follow up on estimates, and run while you sleep. Fixed price. Done in days.
            You own it.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <CalButton>Book a Free AI Assessment</CalButton>
            <span className="font-mono text-[var(--co-fg-mute)]" style={{ fontSize: "0.8125rem" }}>
              20 minutes. No pitch. Just math.
            </span>
          </div>
        </div>

        {/* Spec strip */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--co-line)] rounded-lg overflow-hidden">
          {[
            ["Fixed price", "No retainers"],
            ["3–21 days", "Average install"],
            ["You own it", "Outright. No lock-in."],
            ["30/60 day", "Check-ins included"],
          ].map(([k, v]) => (
            <div key={k} className="bg-[var(--co-bg)] p-5 md:p-6">
              <div className="font-mono text-[var(--co-accent)] mb-1" style={{ fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {k}
              </div>
              <div className="text-[var(--co-fg)]" style={{ fontSize: "0.9375rem" }}>
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
