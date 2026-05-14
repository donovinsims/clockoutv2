import { PhoneOff, FileWarning, CalendarX, Star, Moon, ArrowRight, Check, Shield } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { CTAButton } from "../components/CTAButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Pricing />
      <OperatorCredibility />
      <SocialProof />
      <FAQ />
      <BookingCTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* faint grid */}
      <div aria-hidden className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-20 md:pt-32 pb-20 md:pb-28">
        {/* Asymmetric 60/40 split — text left, spec strip right */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-end">
          <div>
            <div className="mono text-[13px] uppercase tracking-[0.22em] text-accent mb-7 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Booking open · <span className="text-foreground">4 spots left in {new Date().toLocaleString("default", { month: "long" })}</span>
            </div>
            <h1>
              Stop losing jobs to <span className="text-accent">missed calls.</span>
            </h1>
            <p className="mt-7 text-muted-foreground max-w-2xl text-[clamp(1.0625rem,1.6vw,1.25rem)]">
              I build simple automations for local service businesses across the Stateline that recover leads,
              follow up on estimates, and run while you sleep. Fixed price. Done in days. You own it.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <CTAButton>Get My Free Revenue Report →</CTAButton>
              <span className="mono text-xs text-muted-foreground">20 minutes. No pitch. Written report either way.</span>
            </div>
          </div>

          {/* Spec strip — sits alongside hero text on desktop */}
          <div className="grid grid-cols-2 gap-px bg-border overflow-hidden">
            {[
              ["Fixed price", "No retainers"],
              ["3–21 days", "Avg install"],
              ["You own it", "No lock-in"],
              ["30/60 day", "Check-ins included"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-5 md:p-6">
                <div className="mono text-xs uppercase tracking-[0.15em] text-accent mb-1.5">{k}</div>
                <div className="text-sm text-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
          {[
            "12+ local businesses served",
            "avg payback under 2 weeks",
            "works or I fix it — guaranteed",
          ].map((item, i) => (
            <span key={item} className="mono text-xs text-muted-foreground flex items-center gap-1.5">
              {i > 0 && <span className="hidden sm:inline text-border-strong">·</span>}
              <span className="inline-block w-1 h-1 rounded-full bg-accent/60 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const pains = [
  { icon: PhoneOff, stat: "Missed calls", detail: "68% never call back. ~$1,500–$3,000/mo in lost jobs." },
  { icon: FileWarning, stat: "Cold estimates", detail: "30–40% of bids go unanswered. No follow-up = no job." },
  { icon: CalendarX, stat: "No-shows", detail: "Appointment disappears. Nothing recovered. No text sent." },
  { icon: Star, stat: "No reviews", detail: "You've done the work. You just never asked." },
  { icon: Moon, stat: "Admin at 9pm", detail: "8–12 hrs/week on texts, schedules, invoices. Not billable." },
];

function Problem() {
  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <SectionLabel n="02" />
        <h2 className="max-w-3xl">Where the money's going.</h2>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-border overflow-hidden">
          {pains.map(({ icon: Icon, stat, detail }, i) => (
            <div key={stat} className="bg-background p-6 md:p-7 hover:bg-surface transition-colors">
              <div className="flex items-start justify-between mb-5">
                <Icon size={22} className="text-accent" strokeWidth={1.75} />
                <span className="mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <div className="mb-2 font-semibold">{stat}</div>
              <p className="text-[15px] md:text-base text-muted-foreground max-w-none">{detail}</p>
            </div>
          ))}
          <div className="bg-surface md:col-span-2 p-6 md:p-7 flex items-center justify-between gap-6">
            <p className="mono text-[13px] text-muted-foreground leading-relaxed max-w-none">
              → If two of these sound familiar, the assessment will pay for itself.
            </p>
            <span className="mono text-xs uppercase tracking-wider text-accent shrink-0">Free · 20 min</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Free Assessment",
      body: "I look at your operation and map exactly where you're leaking time and money. You get a written report with dollar math.",
    },
    {
      n: "02",
      title: "Custom Build",
      body: "I build around how you actually work. No generic templates. Done in 3–21 days.",
    },
    {
      n: "03",
      title: "Full Handoff",
      body: "You own everything. Walkthrough, docs, 30/60-day check-in. No retainer. No lock-in.",
    },
  ];
  return (
    <section id="how-it-works" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <SectionLabel n="03" label="Process" />
        <h2 className="max-w-3xl">Fast. Fixed. Handed over.</h2>

        {/* Zig-zag alternating layout instead of 3-col grid */}
        <div className="mt-12 md:mt-16 relative">
          {/* Vertical connector line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="flex flex-col gap-px bg-border overflow-hidden md:bg-transparent md:overflow-visible md:gap-0">
            {steps.map((s, i) => (
              <div key={s.n} className="grid grid-cols-1 md:grid-cols-2">
                {/* Spacer cell — alternates side */}
                {i % 2 === 1 && <div className="hidden md:block" />}

                <div className={`relative bg-background p-7 md:p-10 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  {/* Connector dot */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background ${
                    i % 2 === 0 ? "-right-1.5" : "-left-1.5"
                  }`} />
                  <div className="mono text-accent text-sm tracking-wider mb-6">{s.n}</div>
                  <h3 className="mb-3">{s.title}</h3>
                  <p className="text-[15px] md:text-base text-muted-foreground max-w-none">{s.body}</p>
                </div>

                {/* Spacer cell — alternates side */}
                {i % 2 === 0 && <div className="hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const single = [
    "One targeted automation (Missed Call Text-Back, Estimate Follow-Up, Review Request, etc.)",
    "Delivered in 3–7 days",
    "Full docs + 30-day check-in",
    "Optional monitoring: $20–$40/mo",
  ];
  const stack = [
    "3–5 core workflows bundled",
    "Full assessment + integrations + walkthrough",
    "60-day monitoring included",
    "Optional ongoing monitoring: $40–$75/mo",
  ];

  return (
    <section id="pricing" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <SectionLabel n="04" label="Pricing" />
        <h2>Two ways to start.</h2>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-border overflow-hidden">
          {/* Single fix */}
          <div className="bg-background p-7 md:p-9">
            <div className="mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Single System Fix</div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl md:text-4xl font-semibold tracking-tight">$150–$750</span>
            </div>
            <div className="mono text-xs text-muted-foreground mb-7">one-time</div>
            <ul className="space-y-3">
              {single.map((it) => (
                <li key={it} className="flex gap-3 text-[15px] md:text-base">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-muted-foreground leading-relaxed max-w-none">{it}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton variant="ghost">Start with one fix</CTAButton>
            </div>
          </div>

          {/* Operations stack — featured with top accent bar */}
          <div className="relative bg-surface p-7 md:p-9">
            <span className="absolute top-0 inset-x-0 h-0.5 bg-accent" />
            <div className="mono text-xs uppercase tracking-widest text-accent mb-4">
              Operations Stack <span className="ml-2 text-muted-foreground">— most chosen</span>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl md:text-4xl font-semibold tracking-tight">Let's talk</span>
            </div>
            <div className="mono text-xs text-muted-foreground mb-7">scoped on a free call</div>
            <ul className="space-y-3">
              {stack.map((it) => (
                <li key={it} className="flex gap-3 text-[15px] md:text-base">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-muted-foreground leading-relaxed max-w-none">{it}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton>Start with the Stack</CTAButton>
            </div>
          </div>
        </div>

        {/* Risk-reversal row */}
        <div className="mt-8 border border-border bg-surface p-5 md:p-6 flex flex-col sm:flex-row sm:items-start gap-4">
          <Shield size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={1.75} />
          <div>
            <p className="text-[15px] md:text-base font-medium mb-0.5 max-w-none">Works or I fix it — that's the deal.</p>
            <p className="text-[15px] md:text-base text-muted-foreground max-w-none">
              If a system I install isn't performing within 30 days, I diagnose and fix it at no charge.
              No retainer. No fine print.
            </p>
          </div>
        </div>

        <p className="mt-8 mono text-sm text-muted-foreground">
          Not sure which fits? <span className="text-foreground">The free assessment tells you exactly.</span>
        </p>
      </div>
    </section>
  );
}

function OperatorCredibility() {
  const specs = [
    ["Tools used", "GoHighLevel · Twilio · Make · Zapier · n8n"],
    ["Avg install time", "3–14 days from assessment to live"],
    ["Service area", "Roscoe · Rockford · Machesney Park · Loves Park · Belvidere · Rockton · South Beloit · Cherry Valley · Beloit & more"],
    ["Guarantee", "Works or I fix it — that's the deal"],
  ];
  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <SectionLabel n="05" label="Who builds this" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border overflow-hidden">
          <div className="bg-background p-7 md:p-10">
            <h2 className="max-w-sm">I'm a local operator. Not an agency.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Based in Roscoe. I've built automations for HVAC contractors, roofers, salons, and
              service businesses across the Stateline region. Every system I install, I've run in a real
              operation. No offshore teams. No generic templates.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              When something breaks, I fix it. When you want to change something, we change it.
              You're not emailing a help desk.
            </p>
          </div>
          <div className="bg-background p-7 md:p-10 flex flex-col justify-center gap-6 border-t md:border-t-0 border-border">
            {specs.map(([k, v]) => (
              <div key={k}>
                <div className="mono text-xs uppercase tracking-widest text-accent mb-1.5">{k}</div>
                <div className="text-[15px] md:text-base text-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const outcomes = [
    {
      result: "11 callbacks converted to booked jobs",
      period: "First 30 days",
      system: "Missed Call Text-Back",
      biz: "HVAC contractor · Rockford",
      slug: "hvac-rockford-missed-call-textback",
    },
    {
      result: "2 extra roofs closed from cold estimates",
      period: "First 6 weeks",
      system: "Estimate Follow-Up Sequence",
      biz: "Roofing company · Roscoe",
      slug: "roofer-roscoe-estimate-follow-up",
    },
    {
      result: "18 new 5-star Google reviews",
      period: "First 30 days",
      system: "Review Request Automation",
      biz: "Hair salon · Beloit",
      slug: "salon-beloit-review-request",
    },
  ];

  const aggregates = [
    { n: "12+", label: "businesses installed" },
    { n: "~68 hrs", label: "saved per week avg" },
    { n: "<2 wks", label: "avg payback period" },
    { n: "100%", label: "systems still running" },
  ];

  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <SectionLabel n="06" label="Proof" />
        <h2 className="max-w-3xl">Real businesses. Actual math.</h2>

        {/* Aggregate stats */}
        <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border overflow-hidden">
          {aggregates.map(({ n, label }) => (
            <div key={label} className="bg-surface p-5 md:p-6">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-accent mb-1">{n}</div>
              <div className="mono text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>

        {/* Case studies — featured first card + 2-col below */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-border overflow-hidden">
          {/* Featured first result — spans full width */}
          <div className="md:col-span-2 bg-background p-7 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="mono text-[13px] uppercase tracking-wider text-muted-foreground mb-4">{outcomes[0].period}</div>
              <p className="text-xl md:text-2xl tracking-tight leading-snug max-w-none">{outcomes[0].result}</p>
            </div>
            <div className="md:text-right shrink-0">
              <div className="mono text-[13px] uppercase tracking-wider text-accent">{outcomes[0].system}</div>
              <div className="flex items-center md:justify-end gap-3 mt-2">
                <div className="text-[15px] md:text-base text-muted-foreground">{outcomes[0].biz}</div>
                <Link
                  to={`/blog/${outcomes[0].slug}`}
                  className="mono text-xs uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
                >
                  Full story →
                </Link>
              </div>
            </div>
          </div>

          {/* Remaining two results — 2-col */}
          {outcomes.slice(1).map((o) => (
            <div key={o.result} className="bg-background p-7 md:p-9 flex flex-col justify-between gap-6">
              <div>
                <div className="mono text-[13px] uppercase tracking-wider text-muted-foreground mb-4">{o.period}</div>
                <p className="text-lg tracking-tight leading-snug max-w-none">{o.result}</p>
              </div>
              <div className="border-t border-border pt-4 flex flex-col gap-1.5">
                <div className="mono text-[13px] uppercase tracking-wider text-accent">{o.system}</div>
                <div className="flex items-center justify-between">
                  <div className="text-[15px] md:text-base text-muted-foreground">{o.biz}</div>
                  <Link
                    to={`/blog/${o.slug}`}
                    className="mono text-xs uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
                  >
                    Full story →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-border overflow-hidden">
          <div className="bg-background p-7 md:p-9">
            <p className="text-lg md:text-xl text-foreground leading-snug tracking-tight max-w-none">
              "The assessment showed me exactly where I was bleeding money — the system he built
              is already bringing in extra jobs. Local guy who actually delivers."
            </p>
            <div className="mt-5 mono text-xs uppercase tracking-widest text-muted-foreground">
              — HVAC contractor · Rockford, IL
            </div>
          </div>
          <div className="bg-background p-7 md:p-9">
            <p className="text-lg md:text-xl text-foreground leading-snug tracking-tight max-w-none">
              "Closed two roofs in six weeks from estimates I'd written off as dead. Paid for
              itself the first week. I wish I'd done this two years ago."
            </p>
            <div className="mt-5 mono text-xs uppercase tracking-widest text-muted-foreground">
              — Roofing contractor · Roscoe, IL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Will this work with my existing tools?",
    a: "Yes. I build around what you already use — Google Calendar, your CRM, your phone system. No rip-and-replace.",
  },
  {
    q: "I've tried software before and it sat unused.",
    a: "That's because it wasn't built around your actual workflow. I install it, walk you through it, and check in after 30 days.",
  },
  {
    q: "Is the investment worth it?",
    a: "At your average job size, recovering 2–3 extra calls/week pays for the setup in under two weeks. Your report shows the exact math.",
  },
  {
    q: "I'm not big enough for this.",
    a: "If you have a phone and you miss calls, you're the right fit. These systems are built for 5–20 person operations.",
  },
  {
    q: "What if I want to cancel or change something?",
    a: "You own everything outright. No retainer, no lock-in. Modify it, hand it to someone else, or shut it down. It's yours.",
  },
  {
    q: "Do you serve my area?",
    a: "I'm based in Roscoe and install locally across Roscoe, Rockford, Machesney Park, Loves Park, Belvidere, Rockton, South Beloit, Cherry Valley, Beloit, and surrounding areas. Most assessments happen over a call, so distance rarely matters.",
  },
  {
    q: "What happens after the free assessment?",
    a: "You get a written revenue report showing the specific leaks I found and what it would cost to fix them. There's no obligation — a lot of businesses use the report to make improvements on their own. If you do want me to build it, we go from there.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-b border-border">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <SectionLabel n="07" label="FAQ" />
        <h2>Common questions.</h2>

        <div className="mt-10 md:mt-14 border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 text-left py-5 md:py-6 min-h-12"
                >
                  <span className="text-[15px] md:text-base font-medium tracking-tight pr-2">{f.q}</span>
                  <span className={`mono text-accent text-lg leading-none transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-muted-foreground text-[15px] md:text-base leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BookingCTA() {
  const month = new Date().toLocaleString("default", { month: "long" });
  const nextMonth = new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleString("default", { month: "long" });
  return (
    <section>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-24 md:py-32">
        <div>
          <SectionLabel n="08" label="Book" />
          <h2>See where you're losing money.</h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
            Book a free 20-minute assessment. I'll map your operation, show you the exact dollar math,
            and hand you a written report — whether you hire me or not.
          </p>

          <div className="mt-8 border border-border bg-surface p-5 max-w-md">
            <div className="mono text-xs uppercase tracking-widest text-accent mb-3">Availability</div>
            <div className="space-y-2 text-[15px] md:text-base text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>{month}</span>
                <span className="mono text-accent">4 spots open</span>
              </div>
              <div className="flex items-center justify-between">
                <span>{nextMonth}</span>
                <span className="mono text-muted-foreground">Taking sign-ups</span>
              </div>
            </div>
            <p className="mono text-xs text-muted-foreground mt-3 pt-3 border-t border-border max-w-none">
              I limit installs to ~5/month to keep quality high.
            </p>
          </div>

          <div className="mt-8">
            <CTAButton>Get My Free Revenue Report →</CTAButton>
          </div>
          <p className="mono text-xs text-muted-foreground mt-5 max-w-none">
            Serving Roscoe · Rockford · Machesney Park · Loves Park · Belvidere · Rockton · South Beloit · Cherry Valley · Beloit & surrounding areas
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ n, label }: { n: string; label?: string }) {
  return (
    <div className="mono text-[13px] uppercase tracking-[0.22em] text-muted-foreground mb-5 flex items-center gap-3">
      <span className="text-accent">{n}</span>
      {label && <span className="w-8 h-px bg-border-strong" />}
      {label && <span>{label}</span>}
    </div>
  );
}
