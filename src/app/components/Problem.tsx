import { PhoneOff, FileWarning, CalendarX, MessageSquareOff, MoonStar } from "lucide-react";

const pains = [
  {
    icon: PhoneOff,
    stat: "Missed calls",
    detail: "68% never call back. ~$1,500–$3,000/mo in lost jobs.",
  },
  {
    icon: FileWarning,
    stat: "Cold estimates",
    detail: "30–40% of bids go unanswered. No follow-up = no job.",
  },
  {
    icon: CalendarX,
    stat: "No-shows",
    detail: "Appointment disappears. Nothing recovered. No text sent.",
  },
  {
    icon: MessageSquareOff,
    stat: "No reviews",
    detail: "You've done the work. You just never asked.",
  },
  {
    icon: MoonStar,
    stat: "Admin at 9pm",
    detail: "8–12 hrs/week on texts, schedules, invoices. Not billable.",
  },
];

export function Problem() {
  return (
    <section className="border-t border-[var(--co-line)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="font-mono uppercase tracking-[0.18em] text-[var(--co-fg-mute)] mb-4" style={{ fontSize: "0.75rem" }}>
            02 · The Problem
          </div>
          <h2
            className="text-[var(--co-fg)] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Where the money's going.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--co-line)] border border-[var(--co-line)] rounded-lg overflow-hidden">
          {pains.map(({ icon: Icon, stat, detail }, i) => (
            <div
              key={stat}
              className="bg-[var(--co-bg)] p-6 md:p-7 hover:bg-[var(--co-surface)] transition-colors group"
            >
              <div className="flex items-start justify-between mb-5">
                <Icon size={24} className="text-[var(--co-accent)]" strokeWidth={1.75} />
                <span className="font-mono text-[var(--co-fg-mute)]" style={{ fontSize: "0.6875rem" }}>
                  0{i + 1}
                </span>
              </div>
              <div className="text-[var(--co-fg)] mb-2" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                {stat}
              </div>
              <p className="text-[var(--co-fg-dim)]" style={{ fontSize: "0.9375rem", lineHeight: 1.55 }}>
                {detail}
              </p>
            </div>
          ))}
          <div className="bg-[var(--co-bg)] p-6 md:p-7 flex items-center">
            <p className="font-mono text-[var(--co-fg-mute)]" style={{ fontSize: "0.8125rem", lineHeight: 1.6 }}>
              → If two of these sound familiar, the assessment will pay for itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
