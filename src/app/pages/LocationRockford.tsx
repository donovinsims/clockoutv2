import { CTAButton } from "../components/CTAButton";

export default function LocationRockford() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-20 md:pt-32 pb-20 md:pb-28">
          <h1>Automation installs for Rockford businesses.</h1>
          <p className="mt-7 text-muted-foreground max-w-2xl text-[clamp(1.0625rem,1.6vw,1.25rem)]">
            I find where your operation leaks time and money, build the fix, and hand it over.
            Fixed price. Done in days. Based 20 minutes from Rockford.
          </p>
          <div className="mt-10">
            <CTAButton>See Where You're Losing Money →</CTAButton>
          </div>
        </div>
      </section>

      {/* Local proof strip */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6">
          <p className="mono text-[13px] text-muted-foreground">
            Serving Rockford · Roscoe · Machesney Park · Loves Park · Belvidere · Rockton · South Beloit · Cherry Valley · Beloit area
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <div className="mono text-[13px] uppercase tracking-[0.22em] text-muted-foreground mb-5 flex items-center gap-3">
            <span className="text-accent">01</span>
            <span className="w-8 h-px bg-border" />
            <span>Services</span>
          </div>
          <h2 className="max-w-3xl">What I build for Rockford businesses.</h2>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-border overflow-hidden">
            {[
              {
                n: "01",
                title: "Missed Call Text-Back",
                price: "$500",
                roi: "Recovers 2 leads/wk → $3,200/mo at $400/job",
              },
              {
                n: "02",
                title: "Review Request Automation",
                price: "$400",
                roi: "10x reviews from happy customers",
              },
              {
                n: "03",
                title: "Estimate Follow-Up",
                price: "$400",
                roi: "30–40% of cold estimates recoverable",
              },
              {
                n: "04",
                title: "No-Show Recovery",
                price: "$500",
                roi: "Recovers 30–40% of lost appointments",
              },
              {
                n: "05",
                title: "Invoice Follow-Up",
                price: "$500",
                roi: "Reduces late payments 60%",
              },
            ].map((card) => (
              <div key={card.title} className="bg-background p-6 md:p-7 hover:bg-surface transition-colors">
                <div className="flex items-start justify-between mb-5">
                  <span className="mono text-xs text-muted-foreground">{card.n}</span>
                  <span className="mono text-sm font-semibold text-accent">{card.price}</span>
                </div>
                <div className="mb-2 font-semibold">{card.title}</div>
                <p className="text-[15px] md:text-base text-muted-foreground">{card.roi}</p>
              </div>
            ))}
            <div className="bg-surface p-6 md:p-7 flex items-center justify-between gap-6">
              <p className="mono text-[13px] text-muted-foreground leading-relaxed">
                → Assessment is always free. You own everything — no lock-in, no platform fees.
              </p>
              <span className="mono text-xs uppercase tracking-wider text-accent shrink-0">Free · 20 min</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why local */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <div className="mono text-[13px] uppercase tracking-[0.22em] text-muted-foreground mb-5 flex items-center gap-3">
            <span className="text-accent">02</span>
            <span className="w-8 h-px bg-border" />
            <span>Why local</span>
          </div>
          <div className="max-w-2xl">
            <h2>Based in Roscoe — 20 minutes from Rockford.</h2>
            <p className="mt-6 text-muted-foreground text-[15px] md:text-base leading-relaxed">
              I can walk your space, see how your phones actually ring, and build around what you already use.
              No Zoom pitches. No strategy decks.
            </p>
          </div>
        </div>
      </section>

      {/* CTA close */}
      <section>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-32">
          <h2>What's the most annoying part of running your business?</h2>
          <p className="mt-6 text-muted-foreground text-[15px] md:text-base max-w-xl">
            That's always my first question. Because the answer tells me exactly what to build.
            20 minutes. I'll show you the math. No pitch.
          </p>
          <div className="mt-10">
            <CTAButton>See Where You're Losing Money →</CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
