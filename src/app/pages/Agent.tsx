import { useState } from "react";
import { CTAButton } from "../components/CTAButton";
import { AgentModal } from "../components/AgentModal";
import type { SelectedAgent } from "../components/AgentModal";
import { sections } from "../data/agents";

const tagColor: Record<string, string> = {
  Phone: "text-sky-300 border-sky-300/30 bg-sky-300/5",
  SMS: "text-emerald-300 border-emerald-300/30 bg-emerald-300/5",
  Email: "text-amber-300 border-amber-300/30 bg-amber-300/5",
  AI: "text-fuchsia-300 border-fuchsia-300/30 bg-fuchsia-300/5",
};

export default function Agent() {
  const [selected, setSelected] = useState<SelectedAgent>(null);

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-20 md:pt-28 pb-16 md:pb-20">
          <div className="mono text-[13px] uppercase tracking-[0.22em] text-accent mb-7">
            The Arsenal · Showcase
          </div>
          <h1 className="max-w-4xl">
            Everything running. <br className="hidden sm:block" />
            <span className="text-accent">Nothing falling through the cracks.</span>
          </h1>
          <p className="mt-7 text-muted-foreground max-w-2xl text-lg">
            Every system I can install for your business. Click any card to see exactly how it
            works, what to expect, and how long it takes to set up.
          </p>
        </div>
      </section>

      {sections.map((s) => (
        <section
          key={s.title}
          className={`border-b border-border ${s.advanced ? "bg-surface" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
            <div className="mb-10 md:mb-12">
              <div className="mono text-[13px] uppercase tracking-[0.22em] text-muted-foreground mb-3 flex items-center gap-3">
                <span className={s.advanced ? "text-fuchsia-300" : "text-accent"}>{s.tag}</span>
                <span className="w-8 h-px bg-border-strong" />
                <span>{s.advanced ? "AI Agents" : "Workflows"}</span>
              </div>
              <h2>{s.title}</h2>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden ${
              s.advanced ? "bg-fuchsia-300/10 border border-fuchsia-300/20" : "bg-border"
            }`}>
              {s.cards.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelected({ card: c, sectionTitle: s.title, advanced: !!s.advanced })}
                  className={`group w-full text-left p-6 transition-colors duration-150 cursor-pointer ${
                    s.advanced
                      ? "bg-background hover:bg-surface"
                      : "bg-surface hover:bg-surface-2"
                  }`}
                >
                  {/* Tags + recovery at top */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className={`mono text-xs uppercase tracking-wider px-2 py-0.5 border ${tagColor[t] || "border-border text-muted-foreground"}`}
                      >
                        {t}
                      </span>
                    ))}
                    {c.recovers && (
                      <span className="ml-auto mono text-xs uppercase tracking-wider text-accent shrink-0">
                        ◆ {c.recovers}
                      </span>
                    )}
                  </div>

                  {/* Name + description */}
                  <h3 className="text-base font-semibold leading-snug tracking-tight mb-2">{c.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>

                  {/* Footer affordance */}
                  <div className="mt-5 flex items-center justify-between">
                    <span className={`mono text-[13px] uppercase tracking-wider transition-colors duration-150 ${
                      s.advanced
                        ? "text-muted-foreground group-hover:text-fuchsia-300"
                        : "text-muted-foreground group-hover:text-accent"
                    }`}>
                      Details →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h2>Want to know which of these your business needs most?</h2>
            <p className="mt-6 text-muted-foreground text-lg">
              The free assessment maps your operation and tells you exactly which systems have the
              highest ROI. No guessing.
            </p>
            <div className="mt-10">
              <CTAButton>See Where You're Losing Money →</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <AgentModal selected={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
