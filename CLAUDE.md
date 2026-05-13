# CLAUDE.md — Local Automation Consultancy Website

Single source of truth for the entire site build. Read this before touching a file. Review `tasks/lessons.md` at the start of every session.

-----

## Core Behavioral Rules

1. **Plan Mode Default** Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions). Write the plan to `tasks/todo.md` with checkable items and confirm before touching code. If something goes sideways mid-task — STOP and re-plan. Do not keep pushing.
1. **Simplicity First** Minimum code that solves the problem. No speculative features. No abstractions for single-use code. If a senior engineer would call it overcomplicated — simplify. For non-trivial changes, pause and ask “is there a more elegant way?” before presenting.
1. **Surgical Changes** Touch only what you must. Don’t “improve” adjacent code, comments, or formatting. Don’t refactor what isn’t broken. Match existing style exactly.
1. **Goal-Driven Execution** Define success criteria before starting. Loop until verified. State what success looks like — not just the steps.
1. **Verification Before Done** Never mark a task complete without proving it works. Run tests, check logs, demonstrate correctness. Ask yourself: “Would a staff engineer approve this?” before calling it done.
1. **Subagent Strategy** Offload research, exploration, and parallel analysis to subagents to keep the main context window clean. One task per subagent. For complex problems, throw more compute at it via subagents rather than cramming everything into one pass.
1. **Autonomous Bug Fixing** When given a bug report: just fix it. Point at logs, errors, failing tests — then resolve them. Zero context-switching required from the user. Go fix failing behavior without being told how.
1. **Self-Improvement Loop** After ANY correction from the user: update `tasks/lessons.md` with the pattern and a rule that prevents the same mistake. Review lessons at every session start. Ruthlessly iterate until mistake rate drops.
1. **Hard Token Budgets** Enforce strict per-task and per-session limits. Stay well under any implied context limits.
1. **Surface Conflicts, Don’t Average Them** When two patterns in the codebase disagree, call out the conflict explicitly instead of trying to satisfy both.
1. **Read Before You Write** Fully read and understand adjacent/related code before adding or changing anything.
1. **Tests Verify Intent** Tests must verify real business behavior, not just “it returns something.” Shallow tests that pass but miss real breakage are forbidden.
1. **Checkpoints on Long Tasks** For multi-step tasks, create explicit checkpoints/summaries after each major stage so progress isn’t lost on one wrong turn.
1. **Convention Beats Novelty** Follow the codebase’s established patterns even if you think your way is “better.”
1. **Fail Visibly, Not Silently** Any failure, partial success, skipped record, or edge-case must be loudly surfaced — never hidden in logs or assumed success.
1. **No Model for Deterministic Work** Keep retry policies, routing, escalation, and other deterministic logic in code, not in the model’s judgment.

-----

## Token-Optimized Mode (Always Active)

These rules override default verbosity. No exceptions.

1. **Grep First, Read Second** — Before reading any file, output a precise `grep`/`ripgrep` command. Only read after the result is pasted.
2. **Minimum Context** — Never include full files "just in case." Ask: "What is the absolute minimum context needed?"
3. **Treat Stable Context as Cached** — CLAUDE.md, system instructions, and skill files are cached prefix. Never repeat their content in reasoning.
4. **Aggressive Summarization** — After 10–15 turns or when context feels bloated, output a "Session Summary + Next Steps" (≤300 tokens) and instruct the user to start the next message with it.
5. **Graduated Routing** — Trivial edits → ultra-short responses. Serious implementation → efficient, no unnecessary reasoning tokens. Full deep reasoning → reserved for architecture, security, complex multi-file refactors only.
6. **Batch & Compress** — Multiple small requests → one batched response. Summarize tool outputs before using them. Never stream unless explicitly asked.
7. **Token Note** — End every response with `<!-- est. input: Xk | output: Yk | savings tip if any -->`.

-----

## Skill Dispatch Map

These rules are non-negotiable. When a trigger fires, invoke the corresponding skill or read the referenced file **before** proceeding — do not wait for the user to ask.

| Trigger Condition | Action |
|---|---|
| Writing or editing any copy, headline, CTA, or body text | Read `skills/README_COPYWRITING/direct-response-copy-gist.md` + `marketing-system.md` BEFORE writing |
| Making any design decision — layout, color, typography, spacing, component styling | Invoke `/impeccable audit` or `/impeccable polish` |
| After editing 2+ TSX/JSX/CSS files | Invoke `/vercel:react-best-practices` |
| Dev server running + debugging, or verifying a feature end-to-end | Invoke `/vercel:verification` |
| Deploying to Vercel | Invoke `/vercel:deploy` |
| Any question about Next.js routing, Server Components, Server Actions, layouts | Invoke `/vercel:nextjs` |
| Writing meta titles, meta descriptions, OG tags, structured data, or any blog post | Read `skills/marketingskills/skills/seo-audit/`, `meta-tags/`, `structured-data/` before proceeding |
| Building a feature that touches 3+ components or files | Invoke `/agent-teams:team-feature` |
| Debugging with 2+ plausible root causes | Invoke `/agent-teams:parallel-debugging` |
| End-of-feature review needed (security, performance, accessibility) | Invoke `/agent-teams:team-review` |
| Any new code block added or changed | Ask silently: "Is there a simpler way?" — if complex, invoke `/simplify` |
| Marking a multi-step task complete | Invoke `/review` before closing |
| Before shipping any page or feature to production | Invoke `/security-review` |
| User wants to clone or replicate Figma design references (`/agents`, `/blog`) | Invoke `/clone-website` with the target URL |
| After any correction from the user | Update `tasks/lessons.md` immediately |
| Setting up a recurring or scheduled automated task | Invoke `/proactive` or `/schedule` |

-----

## Task Management Protocol

Every non-trivial task follows this sequence — no exceptions:

1. **Plan First** — Write plan to `tasks/todo.md` with checkable items
1. **Verify Plan** — Check in before starting implementation
1. **Track Progress** — Mark items complete as you go
1. **Explain Changes** — High-level summary at each step
1. **Document Results** — Add a review section to `tasks/todo.md` when done
1. **Capture Lessons** — Update `tasks/lessons.md` after any correction or unexpected outcome

-----

## Project Overview

**What:** A marketing website for a local automation consultancy based in Roscoe, IL.

**What the business does:** Installs AI and automation systems (Hermes Agent, OpenClaw, and other agent-first platforms when they make the most sense) for owner-operated businesses across any industry — trades, service, retail, dental, salon, professional services, and more — so they stop losing leads, stop bleeding time to manual admin, and stop doing back-office work at 9pm. Trades and service businesses are the specialty lane. Fixed price. Done in 7–21 days. Client owns everything. Local-first in Roscoe/Rockford/Beloit corridor; remote for strong fits.

**What the site must do:**

1. Qualify visitors immediately (owner-operated business, $500K–$3M revenue, Winnebago County area or strong remote fit)
1. Make the revenue math visceral — not “automation is great” but “you’re losing $2,100/month right now”
1. Drive one action: book a free 20-minute assessment via Cal.com
1. Build local trust — differentiate from remote agencies through specificity about place and person

**Business name:** Clockout
**Primary domain:** clockout.us
**Service areas:** Roscoe, IL | Loves Park, IL | Machesney Park, IL | South Beloit/Beloit, WI

**Audience:** Small to medium local business owners (ANY type: trades, retail, service, professional). Age 30–60. Bootstrapped their business. Overwhelmed with manual processes. Running outdated back-office systems. Respond to clear math and proof, not tech hype. Skeptical but open to AI when shown real examples. Want fast setup (days, not months). Budget-conscious but willing to invest for ROI.

-----

## Content Sources (File Map)

Every file in `/clockout-biz/` is source material. Read before writing any copy.

|File                                   |Contains                                                                                                                                                  |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
|`__Business_Summary.md`                |Core business overview. Problem-in-numbers table, 4-step engagement model, differentiators, who it’s for. READ THIS FIRST.                                |
|`__The_Offer.md`                       |Pricing, service tiers, flagship workflows with ROI math, close script, objection cheat sheet. Every number on the site comes from here.                  |
|`__Ideal_Customer_Profile__ICP_.md`    |ICP details. Exact words customers use, qualification signals, where to find them, who is NOT a good fit. Use the “exact words” section for copy verbatim.|
|`marketing-system.md`                  |Brand voice rules, content formula, word/phrase allow-list and block-list. Use this to QA all copy.                                                       |
|`assessment-call-script.md`            |Sales/assessment conversation framework — useful context for the buyer journey. Not needed for the build directly.                                        |
|`retainer-playbook-winnebago-trades.md`|All 10 workflow types with build times, ROI math, and exact copy. Use for service cards.                                                                  |
|`30-day-action-plan.md`                |Launch and GTM plan. Context only — not needed for the build.                                                                                             |
|`direct-response-copy-gist.md`         |Direct response copywriting frameworks (Schwartz, Ogilvy, Halbert, etc.). Primary reference for all headlines, CTAs, page copy, and persuasive writing.   |

-----

## Site Architecture

Main landing page (brochure-style) + two dedicated pages.

**Main landing page (`index.html` or `/`):** Anchor links only. Sections in exact order:

```
#hero          → Headline + subhead + primary CTA
#problem       → "Sound familiar?" pain point list
#how-it-works  → 4-step process
#services      → Service cards with ROI math
#pricing       → Tier table (Single Fix vs. Operations Stack)
#why-local     → Local trust section
#social-proof  → Testimonial placeholders (2–3 cards)
#cta           → Final CTA section
footer         → Name, location, email, Cal.com link
```

**Additional pages:**

- `/agents` — AI/agent platforms (Hermes Agent, OpenClaw, etc.). Design ref: https://clockout.figma.site/agents
- `/blog` — Content hub. Design ref: https://clockout.figma.site/blog

**Navigation:** Simple top nav on all pages. No mega-menu or additional pages unless explicitly requested.

-----

## Tone & Voice

The voice: A smart neighbor who’s figured out what actually works and is sharing it without the hype. Practitioner, not preacher. Direct. No tech speak. Confidently boring.

**Use These**

- “Runs while you sleep” / “Runs 24/7. You never touch it.”
- “Fixed price. Done in [X] days.”
- “You own everything. No lock-in.”
- “I show up in person.” / “I install it. You own it. I leave.”
- Specific dollar amounts tied to specific problems
- “The system pays for itself in [X] days”
- Their words back to them: “Miss calls and lose jobs to guys who just picked up”

**Never Write These**

- “Revolutionary” / “game-changing” / “cutting-edge”
- “AI-powered transformation” / “AI-driven insights”
- “Leverage” / “synergy” / “optimize” / “scalable solution ecosystem”
- “Unlock your potential”
- “We” when it should be “I” — sole operator, not an agency
- Any sentence that could appear on a SaaS homepage
- Anything implying ongoing dependency

**Copy QA Checklist** (run on every section before shipping)

- [ ] Would you say this to a Rockford contractor face-to-face?
- [ ] Is there a specific dollar amount or time metric?
- [ ] Does it sound like a neighbor, not a tech company?
- [ ] Is there one clear next step?
- [ ] Does it use their words (ICP “Exact Words”), not yours?

-----

## Tech Stack & Quick Start

**Stack:** Next.js 14 (App Router) + Tailwind CSS + TypeScript

**Setup:**
```bash
npm install
npm run dev     # Dev server on http://localhost:3000
npm run build   # Production build
npm run start   # Start production server
```

**Key Services:**
- **Booking:** Cal.com embed — https://cal.com/clockoutcall/30min (inline widget, not link)
- **Deployment:** Vercel (configured for clockout.us domain)
- **Analytics:** Plausible or Fathom only — do NOT add Google Analytics or Facebook Pixel without asking

**Performance Targets:**
- Load < 2s on mobile 4G (aim < 1.5s)
- Total page weight < 500KB (excluding Cal.com embed)
- Lighthouse score ≥ 90
- No horizontal scroll on any viewport

**Avoid:** Heavy animation libraries, CSS frameworks besides Tailwind, bloated JS, third-party chat, web fonts that slow rendering

-----

## Design Direction

NOT: SaaS startup. NOT tech company. NOT purple gradients. NOT colorful accents.

IS: Sleek, modern, monochrome. Subtle blacks, whites, and greys. Conversion-optimized — high contrast, minimal visual noise, large clear CTAs, generous whitespace, fast load.

### Required Design Skill: Impeccable

**Before writing any frontend code or making any design decision:**

Read `skills/impeccable/DESIGN.md` first. Apply those skills alongside `direct-response-copy-gist.md` and `marketing-system.md`. Design and copy must work together toward conversion.

Do not improvise the design system. The impeccable skills define the quality standard.

### ✅ Locked Decisions (do not change without owner approval)

**Colors — Monochrome only:**

|Token            |Value                      |
|-----------------|---------------------------|
|Background       |`#111111`                  |
|Card / section bg|`#1a1a1a`                  |
|Border / dividers|`#2a2a2a`                  |
|Primary text     |`#f5f5f5`                  |
|Muted text       |`#aaaaaa`                  |
|CTA buttons      |`#e5e5e5` (hover `#ffffff`)|

**Light & dark mode:** Both required. Dark is primary (palette above). Light inverts to equivalent contrast — white/near-white backgrounds, deep charcoal text, same monochrome discipline. No color introduced in either mode.

**Typography — IBM Plex Sans:**

- Google Fonts: weights 400 + 700 only
- Body: 17px base, 1.65 line height
- Headings: 700, high contrast, large on desktop

**Hero stat treatment:** “68%” at 7–9rem in `#e5e5e5` as a typographic anchor before the headline text.

**Imagery:**

- NO: robots, blue circuits, generic office workers, abstract AI, any color
- YES: monochrome/desaturated contractor truck, job site, clean dashboard screenshot, greyscale geometric illustration
- If unsure: skip images entirely. Strong typography beats bad imagery.

**Layout:**

- Mobile-first. Design and verify on mobile before touching desktop.
- No horizontal scroll on any viewport
- Touch targets ≥ 48px
- CTAs: high contrast, full-width on mobile, always labeled “Book Your Free Assessment”
- Single-column focus, generous whitespace, zero distractions

**Performance:**

- < 2s load on mobile 4G (aim for < 1.5s)
- No heavy animations
- Lazy-load below the fold
- Total page weight < 500KB excluding Cal.com embed

-----

## Marketing & SEO Requirements

**All marketing and SEO work must use skills from `skills/marketingskills/` exclusively. Do not wing it.** This covers: meta titles, meta descriptions, OG tags, structured data, keyword targeting, search-intent copy, blog post structure, and any content strategy decisions.

**Before any marketing or SEO task:**

Use the relevant subdirectories under `skills/marketingskills/skills/`: 
- **Meta/titles/descriptions:** `meta-tags/`, `seo-audit/`, `keyword-research/`
- **Structured data/schema:** `structured-data/`
- **Blog/content:** `blog-strategy/`, `content-pillars/`

Never make SEO or marketing decisions from general knowledge alone — always execute from the loaded skill files.

-----

## Section-by-Section Copy Reference

All copy originates from `/clockout-biz/` files. `direct-response-copy-gist.md` is the primary persuasion reference for every page.

**Hero**

- Headline: “68% of missed calls never call back. Here’s the system that fixes it.”
- Subheadline: “I find where your business is leaking time and money, install the systems that fix it, and hand it over. Done in 7–21 days.”
- Primary CTA: “Book a Free Assessment” → https://cal.com/clockoutcall/30min
- Secondary: “See what I build ↓” → `#services`

**Problem Section (“Sound familiar?”)**
Pull verbatim from ICP “Their Exact Words”:

- “I miss calls and lose jobs to guys who just picked up.”
- “I send an estimate and forget to follow up. They go cold.”
- “I have no idea if review requests go out automatically or if I’m chasing every customer.”
- “I spend half my Sunday on admin that shouldn’t take more than an hour.”
- “I tried some software but it was too complicated and I never used it.”

Closing line: “These aren’t technology problems. They’re process problems that technology fixes — quickly, cheaply, and permanently.”

**Services (6 cards)** — pull exact prices and ROI stats from `__The_Offer.md`:

|Workflow                 |Price      |Key ROI stat                               |
|-------------------------|-----------|-------------------------------------------|
|Missed Call Text-Back    |$500       |Recovers 2 leads/wk → $3,200/mo at $400/job|
|Review Request Automation|$400       |10x reviews from happy customers           |
|Estimate Follow-Up       |$400       |30–40% of cold estimates recoverable       |
|No-Show Recovery         |$500       |Recovers 30–40% of lost appointments       |
|Invoice Follow-Up        |$500       |Reduces late payments 60%                  |
|Operations Stack         |from $1,200|3–5 workflows, full back-office fix        |

**Pricing Table:**

|                     |Single Fix|Operations Stack|
|---------------------|----------|----------------|
|Workflows            |1         |3–5             |
|Timeline             |3–7 days  |14–21 days      |
|Setup                |$300–$800 |$1,200–$3,000   |
|Monitoring (optional)|$20–$40/mo|$40–$75/mo      |

Footer note: “Assessment is always free to start. You own everything — no lock-in, no platform fees, no dependency on me.”

**Why Local**
“Based in Roscoe. Working with businesses in Winnebago County first — Rockford, Beloit corridor, and surrounding area. I can walk your space. I’m not pitching you a strategy deck over Zoom from a city you’ve never been to.”

**Final CTA**

- Headline: “What’s the most annoying part of running your business?”
- Body: “That’s always my first question. Because the answer tells me exactly what to build. 20 minutes. I’ll show you the math. No pitch.”
- CTA: “Book Your Free Assessment” → https://cal.com/clockoutcall/30min

`/agents` and `/blog` — use Figma references + `direct-response-copy-gist.md` for all copy.

-----

## Current Build Status

**Website Pages:**
- [ ] Main landing page (hero → cta → footer)
- [ ] `/agents` — AI workflow showcase (Figma ref: https://clockout.figma.site/agents)
- [ ] `/blog` — Real automation examples (Figma ref: https://clockout.figma.site/blog)

**Pricing & Packages (NEW)**

Entry-level custom AI packages for rapid sales (14-day sprint):

| Package | Price | Timeline | Included |
|---------|-------|----------|----------|
| Single Automation Setup | $150–$300 | 2–3 days | 1 AI workflow, setup, testing |
| Mini Stack | $350–$500 | 5–7 days | 2–3 workflows, integration, basic monitoring |
| Full Custom | $500–$750 | 7–14 days | 3–5 workflows, deep integration, 30-day monitoring |

**Positioning:** “Holy shit this is possible!?” — show mind-blowing AI workflows on /agents and /blog, close fast at $150–$750.

---

## Do / Don’t

**DO**

- [ ] Enter plan mode and write to plan file before any multi-step task
- [ ] Review `tasks/lessons.md` at every session start
- [ ] Update `tasks/lessons.md` after every correction or learning
- [ ] Design and verify mobile first (375px) before desktop
- [ ] Use exact dollar amounts — don’t round or estimate
- [ ] Embed Cal.com inline (widget, not link)
- [ ] Use **Clockout** and **clockout.us** everywhere — consistent branding
- [ ] Copy copy verbatim from business docs — no paraphrasing
- [ ] Label CTAs “Book Your Free Assessment” or “Schedule AI Assessment”
- [ ] Use real ROI math in service cards — this is the conversion engine
- [ ] Implement both light and dark mode (dark primary)
- [ ] Run `/impeccable audit` on /agents and /blog before launch
- [ ] View Figma refs for /agents and /blog ONLY for content/structure — do NOT clone design

**DON’T**

- [ ] Start implementation without plan approval
- [ ] Mark task complete without proving it works end-to-end
- [ ] Touch code outside your assigned scope
- [ ] Round, estimate, or paraphrase pricing from source files
- [ ] Use “Get Started,” “Contact Us,” or unlisted CTA labels
- [ ] Introduce color, gradients, or non-monochrome elements
- [ ] Use “we” — sole operator, not agency
- [ ] Wing SEO/meta copy without loading marketingskills skill
- [ ] Improvise design without loading impeccable skill first
- [ ] Clone Figma designs — understand content/structure, build from scratch with CLAUDE.md system