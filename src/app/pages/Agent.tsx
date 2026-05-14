import { useState } from "react";
import { CTAButton } from "../components/CTAButton";
import { AgentModal } from "../components/AgentModal";
import type { SelectedAgent } from "../components/AgentModal";
import { sections } from "../data/agents";
import { motion } from "motion/react";

const tagColor: Record<string, string> = {
  Phone: "text-muted-foreground border-border-strong bg-surface",
  SMS: "text-muted-foreground border-border-strong bg-surface",
  Email: "text-muted-foreground border-border-strong bg-surface",
  AI: "text-accent border-accent/20 bg-accent/5",
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
                <span className="text-accent">{s.tag}</span>
                <span className="w-8 h-px bg-border-strong" />
                <span>{s.advanced ? "AI Agents" : "Workflows"}</span>
              </div>
              <h2>{s.title}</h2>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-px overflow-hidden ${
              s.advanced ? "bg-surface-2 border border-border-strong" : "bg-border"
            }`}>
              {s.cards.map((c, i) => {
                const isLastInOddTotal = s.cards.length % 2 !== 0 && i === s.cards.length - 1;
                // lg logic: 3 columns (span 2 each). If 4 items, 3+1 (1 spans 6). If 5 items, 3+2 (2 span 3 each).
                const lgSpan = s.cards.length % 3 === 1 && i === s.cards.length - 1 
                  ? "lg:col-span-6" 
                  : s.cards.length % 3 === 2 && i >= s.cards.length - 2
                  ? "lg:col-span-3"
                  : "lg:col-span-2";

                return (
                  <motion.button
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.04, ease: [0.21, 0.47, 0.32, 0.98] }}
                    key={c.name}
                    onClick={() => setSelected({ card: c, sectionTitle: s.title, advanced: !!s.advanced })}
                    className={`group w-full text-left p-7 md:p-8 transition-all duration-300 cursor-pointer relative overflow-hidden ${
                      isLastInOddTotal ? "sm:col-span-2 lg:col-span-2" : ""
                    } ${lgSpan} ${
                      s.advanced
                        ? "bg-background hover:bg-surface"
                        : "bg-surface hover:bg-surface-2"
                    }`}
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(var(--accent-rgb),0.03)_0%,transparent_70%)]" />
                    
                    {/* Tags + recovery at top */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-5">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className={`mono text-[11px] uppercase tracking-wider px-2 py-0.5 border ${tagColor[t] || "border-border text-muted-foreground"}`}
                        >
                          {t}
                        </span>
                      ))}
                      {c.recovers && (
                        <span className="ml-auto mono text-[11px] uppercase tracking-wider text-accent shrink-0">
                          ◆ {c.recovers}
                        </span>
                      )}
                    </div>

                    {/* Name + description */}
                    <h3 className="text-lg font-semibold leading-snug tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">{c.name}</h3>
                    <p className="text-[15px] md:text-base text-muted-foreground leading-relaxed">{c.desc}</p>

                    {/* Footer affordance */}
                    <div className="mt-6 flex items-center justify-between">
                      <span className="mono text-[13px] uppercase tracking-wider transition-colors duration-300 text-muted-foreground group-hover:text-accent flex items-center gap-2">
                        Details <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                    </div>
                  </motion.button>
                );
              })}
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
