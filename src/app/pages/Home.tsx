import { PhoneOff, FileWarning, CalendarX, Star, Moon, ArrowRight, Check, Shield } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { CTAButton } from "../components/CTAButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Services />
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
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-24 md:pt-40 pb-24 md:pb-32">
        {/* Asymmetric 60/40 split — text left, spec strip right */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-end">
          <FadeUp>
            <div className="mono text-[13px] sm:text-sm uppercase tracking-[0.22em] text-accent mb-8 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Booking open · <span className="text-foreground">4 spots left in {new Date().toLocaleString("default", { month: "long" })}</span>
            </div>
            <h1>
              Stop losing jobs to <br className="hidden sm:block" />
              <span className="text-accent">missed calls.</span>
            </h1>
            <p className="mt-8 text-muted-foreground max-w-2xl text-[clamp(1.125rem,1.8vw,1.375rem)] leading-relaxed">
              I build simple automations for local service businesses across the Stateline that recover leads,
              follow up on estimates, and run while you sleep. Fixed price. Done in days. You own it.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6">
              <CTAButton className="py-4 px-8 text-lg">See Where You're Losing Money →</CTAButton>
              <span className="mono text-xs sm:text-[13px] text-muted-foreground/80">20 minutes. No pitch. <br className="sm:hidden" /> Written report either way.</span>
            </div>
          </FadeUp>

          {/* Spec strip — sits alongside hero text on desktop */}
          <div className="grid grid-cols-2 gap-px bg-border overflow-hidden rounded-sm border border-border">
            {[
              ["Fixed price", "No retainers"],
              ["3–21 days", "Avg install"],
              ["You own it", "No lock-in"],
              ["30/60 day", "Check-ins included"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-6 md:p-8">
                <div className="mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent mb-2">{k}</div>
                <div className="text-base text-foreground font-medium">{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
          {[
            "12+ local businesses served",
            "avg payback under 2 weeks",
            "works or I fix it — guaranteed",
          ].map((item, i) => (
            <span key={item} className="mono text-xs sm:text-[13px] text-muted-foreground flex items-center gap-2">
              {i > 0 && <span className="hidden md:inline text-border-strong mx-1">·</span>}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const pains = [
  {
    icon: PhoneOff,
    quote: "I miss calls and lose jobs to guys who just picked up.",
    stat: "68% of missed callers never call back. ~$1,500–$3,000/mo in lost jobs.",
  },
  {
    icon: FileWarning,
    quote: "I send an estimate and forget to follow up. They go cold.",
    stat: "30–40% of open bids are still recoverable with one follow-up sequence.",
  },
  {
    icon: Star,
    quote: "I have no idea if review requests go out automatically or if I'm chasing every customer.",
    stat: "One automated ask after every job close. Most happy customers are glad to help.",
  },
  {
    icon: Moon,
    quote: "I spend half my Sunday on admin that shouldn't take more than an hour.",
    stat: "8–12 hrs/week on texts, schedules, invoices. Not billable.",
  },
  {
    icon: CalendarX,
    quote: "I tried some software but it was too complicated and I never used it.",
    stat: "I install it, walk you through it, and check in at 30 days. No learning curve.",
  },
];

function Problem() {
  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-36">
        <SectionLabel n="02" />
        <h2 className="max-w-3xl mb-16 md:mb-20">Sound familiar?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border overflow-hidden border border-border">
          {pains.map(({ icon: Icon, quote, stat }, i) => (
            <div key={quote} className="bg-background p-8 md:p-10 hover:bg-surface transition-colors group">
              <div className="flex items-start justify-between mb-8">
                <div className="p-3 bg-accent/5 rounded-lg border border-accent/10 group-hover:bg-accent/10 transition-colors">
                  <Icon size={24} className="text-accent" strokeWidth={1.5} />
                </div>
                <span className="mono text-xs text-muted-foreground/60">0{i + 1}</span>
              </div>
              <p className="mb-4 text-xl font-medium text-foreground leading-snug">"{quote}"</p>
              <p className="text-base md:text-lg text-muted-foreground max-w-none leading-relaxed">{stat}</p>
            </div>
          ))}
          <div className="bg-surface md:col-span-2 p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <p className="mono text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
              → If two of these sound familiar, the assessment will pay for itself.
            </p>
            <span className="mono text-[13px] uppercase tracking-widest text-accent bg-accent/10 px-4 py-2 border border-accent/20 rounded-full shrink-0">Free · 20 min</span>
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
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-36">
        <SectionLabel n="03" label="Process" />
        <h2 className="max-w-3xl mb-16 md:mb-20">Fast. Fixed. Handed over.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border overflow-hidden border border-border">
          {steps.map((s, i) => (
            <div key={s.n} className="relative bg-background p-8 md:p-12">
              <div className="mono text-accent text-base tracking-widest mb-8">{s.n}</div>
              <h3 className="mb-4 text-xl">{s.title}</h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-none leading-relaxed">{s.body}</p>
              {i < steps.length - 1 && (
                <ArrowRight size={20} className="hidden md:block absolute -right-[11px] top-1/2 -translate-y-1/2 bg-background text-muted-foreground p-1 rounded-full border border-border z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const serviceCards = [
  {
    name: "Missed Call Text-Back",
    price: "$500",
    roi: "Recovers 2+ leads/wk",
    roiDetail: "~$3,200/mo at a $400 avg job",
    desc: "Every missed call gets a text within 60 seconds. 68% of missed callers never call back — this catches them before they dial the next guy.",
  },
  {
    name: "Review Request Automation",
    price: "$400",
    roi: "10× reviews",
    roiDetail: "from happy customers who just never got asked",
    desc: "Auto-text 90 min after every job close with your direct Google link. Negative sentiment routes privately before it goes public.",
  },
  {
    name: "Estimate Follow-Up",
    price: "$400",
    roi: "30–40% of cold bids",
    roiDetail: "are still recoverable",
    desc: "3-touch sequence: check-in text, value email, expiry nudge. Roofer in Roscoe closed 2 extra jobs in 6 weeks — setup paid for itself week one.",
  },
  {
    name: "No-Show Recovery",
    price: "$500",
    roi: "60–70% rebook",
    roiDetail: "when texted within 5 minutes",
    desc: "Friendly rebook text fires the moment they no-show. Without this, most businesses write off the appointment entirely.",
  },
  {
    name: "Invoice Follow-Up",
    price: "$500",
    roi: "Reduces late payments 60%",
    roiDetail: "3-touch sequence, no awkward calls",
    desc: "Reminder at day 3, nudge at day 10, final notice at day 20. Most unpaid invoices are genuinely just forgotten.",
  },
];

function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-36">
        <SectionLabel n="04" label="What I Build" />
        <h2 className="max-w-3xl mb-16 md:mb-20">Five fixes. Real math.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border overflow-hidden border border-border">
          {serviceCards.map((s) => (
            <div key={s.name} className="bg-background p-8 md:p-12 flex flex-col gap-6">
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-lg md:text-xl font-semibold leading-tight">{s.name}</h3>
                <span className="mono text-base md:text-lg font-bold text-accent shrink-0">{s.price}</span>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-none">{s.desc}</p>
              <div className="mt-auto border-t border-border pt-6">
                <div className="mono text-xs sm:text-[13px] uppercase tracking-widest text-accent mb-1">{s.roi}</div>
                <div className="mono text-xs sm:text-[13px] text-muted-foreground opacity-80">{s.roiDetail}</div>
              </div>
            </div>
          ))}

          {/* Operations Stack — featured */}
          <div className="relative bg-surface md:col-span-2 p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <span className="absolute top-0 inset-x-0 h-1 bg-accent" />
            <div className="flex-1">
              <div className="mono text-xs sm:text-[13px] uppercase tracking-[0.2em] text-accent mb-4">
                Operations Stack <span className="ml-2 text-muted-foreground/60">— most chosen</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Full back-office fix. Done in 14–21 days.</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                3–5 core workflows bundled, fully integrated, with a 60-day monitoring window. Built around how your operation actually runs — no templates, no guessing.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-4">
              <div className="mono text-3xl font-bold tracking-tight text-foreground">from $1,200</div>
              <div className="mono text-[13px] text-muted-foreground">scoped on a free call</div>
              <CTAButton className="mt-2 py-4 px-8">See Where You're Losing Money →</CTAButton>
            </div>
          </div>
        </div>

        <p className="mt-8 mono text-xs text-muted-foreground max-w-none">
          Not sure which fits? <span className="text-foreground">The free assessment tells you exactly — with dollar math.</span>
        </p>
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
        <SectionLabel n="05" label="Pricing" />
        <h2>Two ways to start.</h2>

        <p className="mt-4 text-[15px] md:text-base text-muted-foreground max-w-xl">
          At 2 recovered calls/week, the Single Fix pays for itself in under 2 weeks.
          Most operations recover more.
        </p>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-border overflow-hidden">
          {/* Single fix */}
          <div className="bg-background p-7 md:p-9">
            <div className="mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Single System Fix</div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl md:text-4xl font-semibold tracking-tight">$150–$750</span>
            </div>
            <div className="mono text-xs text-muted-foreground mb-7">one-time</div>
            <ul className="space-y-3">
              {single.map((it) => (
                <li key={it} className="flex gap-3 text-sm">
                  <Check size={16} className="text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-muted-foreground leading-relaxed">{it}</span>
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
                <li key={it} className="flex gap-3 text-sm">
                  <Check size={16} className="text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-muted-foreground leading-relaxed">{it}</span>
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
            <p className="text-sm font-medium mb-0.5">Works or I fix it — that's the deal.</p>
            <p className="text-[15px] md:text-base text-muted-foreground max-w-none">
              If a system I install isn't performing within 30 days, I diagnose and fix it at no charge.
              No retainer. No fine print.
            </p>
          </div>
        </div>

        <p className="mt-8 mono text-xs text-muted-foreground max-w-none">
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
        <SectionLabel n="06" label="Who builds this" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border overflow-hidden">
          <div className="bg-background p-7 md:p-10">
            <h2 className="max-w-sm">I'm a local operator. Not an agency.</h2>
            <p className="mt-5 text-[15px] md:text-base text-muted-foreground leading-relaxed max-w-none">
              Based in Roscoe. I've built automations for HVAC contractors, roofers, salons, and
              service businesses across the Stateline region. Every system I install, I've run in a real
              operation. No offshore teams. No generic templates.
            </p>
            <p className="mt-4 text-[15px] md:text-base text-muted-foreground leading-relaxed max-w-none">
              When something breaks, I fix it. When you want to change something, we change it.
              You're not emailing a help desk.
            </p>
          </div>
          <div className="bg-background p-7 md:p-10 flex flex-col justify-center gap-6 border-t md:border-t-0 border-border">
            {specs.map(([k, v]) => (
              <div key={k}>
                <div className="mono text-xs uppercase tracking-widest text-accent mb-1.5">{k}</div>
                <div className="text-[15px] md:text-base text-foreground max-w-none">{v}</div>
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
        <SectionLabel n="07" label="Proof" />
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

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-border overflow-hidden">
          {outcomes.map((o) => (
            <div key={o.result} className="bg-background p-7 md:p-9 flex flex-col justify-between gap-6">
              <div>
                <div className="mono text-xs uppercase tracking-wider text-muted-foreground mb-4">{o.period}</div>
                <p className="text-lg tracking-tight leading-snug">{o.result}</p>
              </div>
              <div className="border-t border-border pt-4 flex flex-col gap-1.5">
                <div className="mono text-xs uppercase tracking-wider text-accent">{o.system}</div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">{o.biz}</div>
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
            <p className="text-lg md:text-xl text-foreground leading-snug tracking-tight">
              "The assessment showed me exactly where I was bleeding money — the system he built
              is already bringing in extra jobs. Local guy who actually delivers."
            </p>
            <div className="mt-5 mono text-xs uppercase tracking-widest text-muted-foreground">
              — HVAC contractor · Rockford, IL
            </div>
          </div>
          <div className="bg-background p-7 md:p-9">
            <p className="text-lg md:text-xl text-foreground leading-snug tracking-tight">
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
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          <div>
            <SectionLabel n="08" label="FAQ" />
            <h2 className="max-w-xs">Common questions.</h2>
          </div>

          <div className="border-t border-border">
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
      </div>
    </section>
  );
}

function BookingCTA() {
  const month = new Date().toLocaleString("default", { month: "long" });
  const nextMonth = new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleString("default", { month: "long" });
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <SectionLabel n="09" label="Book" />
            <h2 className="mb-8">See where you're losing money.</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Book a free 20-minute assessment. I'll map your operation, show you the exact dollar math,
              and hand you a written report — whether you hire me or not.
            </p>

            <div className="mt-12">
              <CTAButton className="py-4 px-10 text-lg font-semibold tracking-wide">Get My Free Revenue Report →</CTAButton>
            </div>
            <p className="mono text-xs sm:text-[13px] text-muted-foreground/60 mt-10 max-w-md leading-relaxed">
              Serving Roscoe · Rockford · Machesney Park · Loves Park · Belvidere · Rockton · South Beloit · Cherry Valley · Beloit & surrounding areas
            </p>
          </div>

          <div className="bg-surface p-10 md:p-14 border border-border relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <CalendarX size={120} strokeWidth={1} />
            </div>
            <div className="mono text-[13px] uppercase tracking-[0.2em] text-accent mb-8">Availability</div>
            <div className="space-y-6 text-base md:text-lg text-foreground">
              <div className="flex items-center justify-between pb-6 border-b border-white/5">
                <span className="font-medium">{month}</span>
                <span className="mono text-accent font-bold">4 spots open</span>
              </div>
              <div className="flex items-center justify-between pb-6 border-b border-white/5 opacity-60">
                <span className="font-medium">{nextMonth}</span>
                <span className="mono text-muted-foreground">Taking sign-ups</span>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex gap-5 items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 shrink-0 animate-pulse" />
              <p className="text-base text-muted-foreground leading-relaxed max-w-none">
                I limit installs to ~5/month to keep quality high and ensure I can personally monitor every system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ n, label }: { n: string; label?: string }) {
  return (
    <div className="mono text-xs sm:text-[13px] uppercase tracking-[0.25em] text-muted-foreground mb-8 flex items-center gap-4">
      <span className="text-accent font-bold">{n}</span>
      {label && <span className="w-12 h-px bg-border-strong" />}
      {label && <span className="font-medium">{label}</span>}
    </div>
  );
}

function FadeUp({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.28, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
