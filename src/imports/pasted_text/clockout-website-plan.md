```
Build a conversion-focused marketing website for Clockout. (clockout.us) — 
a local AI automation business serving owner-operated businesses in the 
Rockford/Roscoe/Beloit, IL area.

---

## Brand Voice
Confidently boring. Direct. Anti-hype. Local.
- DO use: fixed price, you own it, runs while you sleep, here's the math, 
  local guy who shows up, stops the bleeding, gets your evenings back
- DO NOT use: revolutionary, AI-powered transformation, game-changing, 
  synergy, scalable ecosystem

---

## Visual Direction
- Dark background (#171614 base), high-contrast off-white text
- Accent: electric green (#22c55e range) or amber — something that reads 
  "practical and sharp," not "startup SaaS"
- Clean, minimal. No stock photo people. No gradient blobs. No glassmorphism.
- Monospaced or geometric sans-serif (e.g. IBM Plex Mono for accents, 
  Inter or Satoshi for body)
- Feels like a sharp local operator built it — not a VC-funded startup

---

## Tech Stack
- Next.js 14 App Router
- Tailwind CSS
- Cal.com popup embed for all booking CTAs
- Deployed on Vercel

---

## Cal.com Booking — Global Modal (not a page)

All "Book Free Assessment" CTAs site-wide trigger a Cal.com 
popup embed — no separate /assessment route.

Implementation:
- Load Cal.com embed script in <head>:
  (https://app.cal.com/embed/embed.js)
- Every CTA button uses: data-cal-link="your-cal-username/free-assessment"
  and data-cal-config='{"layout":"popup"}'
- The popup opens inline over the current page
- No navigation away, no /assessment route

Buttons that trigger the popup:
- Hero CTA: "Book a Free AI Assessment →"
- Home Section 7 CTA: "Book My Free Assessment"
- /agent bottom CTA: "Book Your Free Assessment →"
- Nav primary CTA button: "Book Free Assessment"
- Mobile sticky bottom bar: "Book Free Assessment"
- /blog/[slug] bottom CTA: "Sound familiar? Book a free assessment."

---

## Pages & Routes

### `/` — Home (single scroll)

**Nav**
- Logo left: "Clockout."
- Links right: How It Works (anchor #how-it-works) | Pricing (anchor #pricing) | 
  Agent (/agent) | Blog (/blog) | [Book Free Assessment — triggers Cal.com popup]
- Mobile: hamburger, same links, sticky "Book Free Assessment" 
  bottom bar (triggers Cal.com popup)

**Section 1 — Hero**
Headline: "Stop losing jobs to missed calls."
Sub: "I build simple automations for local businesses in Rockford 
that recover leads, follow up on estimates, and run while you sleep. 
Fixed price. Done in days. You own it."
CTA button: "Book a Free AI Assessment →" — triggers Cal.com popup
Note under button: "20 minutes. No pitch. Just math."

**Section 2 — The Problem**
Header: "Where the money's going."
5 pain stat cards (icon + stat + 1-line explanation):
- Missed calls → "68% never call back. ~$1,500–$3,000/mo in lost jobs."
- Cold estimates → "30–40% of bids go unanswered. No follow-up = no job."
- No-shows → "Appointment disappears. Nothing recovered. No text sent."
- No reviews → "You've done the work. You just never asked."
- Admin at 9pm → "8–12 hrs/week on texts, schedules, invoices. Not billable."

**Section 3 — How It Works** (id="how-it-works")
Header: "Fast. Fixed. Handed over."
3-step horizontal flow:
1. Free Assessment — "I look at your operation and map exactly where 
   you're leaking time and money. You get a written report with dollar math."
2. Custom Build — "I build around how you actually work. No generic templates. 
   Done in 3–21 days."
3. Full Handoff — "You own everything. Walkthrough, docs, 30/60-day check-in. 
   No retainer. No lock-in."

**Section 4 — Pricing** (id="pricing")
Header: "Two ways to start."
Two cards side by side:

Card 1 — Single System Fix
- $300–$800 one-time
- One targeted automation (Missed Call Text-Back, Estimate Follow-Up, 
  Review Request, etc.)
- Delivered in 3–7 days
- Full docs + 30-day check-in
- Optional monitoring: $20–$40/mo

Card 2 — Operations Stack (featured/highlighted)
- $1,200–$3,000 one-time
- 3–5 core workflows bundled
- Full assessment + integrations + walkthrough
- 60-day monitoring included
- Optional ongoing monitoring: $40–$75/mo

Below cards: "Not sure which fits? The free assessment tells you exactly."

**Section 5 — Social Proof**
Header: "Built for businesses like yours."
Placeholder testimonial card styled as a real quote:
"The assessment showed me exactly where I was bleeding money — 
the system he built is already bringing in extra jobs. 
Local guy who actually delivers."
— [Client Name], [Business Type], Rockford IL

**Section 6 — FAQ**
Header: "Common questions."
5 accordion items:
1. "Will this work with my existing tools?" 
   → "Yes. I build around what you already use — Google Calendar, 
      your CRM, your phone system. No rip-and-replace."
2. "I've tried software before and it sat unused." 
   → "That's because it wasn't built around your actual workflow. 
      I install it, walk you through it, and check in after 30 days."
3. "Is $500–$2,000 worth it?" 
   → "At your average job size, recovering 2–3 extra calls/week 
      pays for the setup in under two weeks. Your report shows the exact math."
4. "I'm not big enough for this." 
   → "If you have a phone and you miss calls, you're the right fit. 
      These systems are built for 5–20 person operations."
5. "What if I want to cancel or change something?" 
   → "You own everything outright. No retainer, no lock-in. 
      Modify it, hand it to someone else, or shut it down. It's yours."

**Section 7 — Booking CTA**
Header: "See where you're losing money."
Body: "Book a free 20-minute AI assessment. I'll map your operation, 
show you the dollar math, and give you a written report — 
whether you hire me or not."
CTA button: "Book My Free Assessment" — triggers Cal.com popup
Small note: "Serving Rockford, Roscoe, Beloit and surrounding areas."

**Footer**
- Logo: "Clockout."
- Tagline: "Local automation installs. Fixed price. You own it."
- Links: Email | Agent | Blog
- "© 2026 Clockout. Rockford, IL"

---

### `/agent` — The Arsenal

Goal: Shock the non-technical owner at what's possible.
This is a gallery/showcase — NOT a pricing page.
No CTAs until the very end. Let them scroll and get excited first.

**Hero**
Headline: "Everything running. Nothing falling through the cracks."
Sub: "Here's every system we can install for your business. 
Most owners don't know half of these exist."

**Section 1 — Lead & Call Recovery**
Dark card grid. Each card has:
- Plain-English name
- One-line description
- "Recovers" metric badge in accent color where applicable
- Category tag chips: [Phone] [SMS] [Email] [AI]

Cards:
- Missed Call Text-Back — "Texts every missed call within 60 seconds. Automatically."
- Speed-to-Lead Responder — "Responds to new leads before they call someone else."
- After-Hours Auto-Reply — "Answers inquiries at 11pm so you don't have to."
- Voicemail Transcriber + Alert — "Transcribes voicemails and texts you the summary."
- Dead Lead Revival — "Re-engages cold contacts automatically." 

**Section 2 — Estimates & Follow-Up**
- Estimate Follow-Up Sequence — "3-touch automated follow-up on every open bid."
- No-Response Nudge — "Texts if no reply in 48 hours."
- Estimate Expiry Alert — "'Your quote expires Friday — still interested?'"
- Job Won Confirmation + Deposit Request

**Section 3 — Scheduling & No-Shows**
- Appointment Reminder Sequence — "24hr + 2hr reminders. Automatically."
- No-Show Recovery — "Instant rebook offer if they miss."
- Cancellation Reactivation — "Fills the open slot from a waitlist."
- Schedule Change Notifier

**Section 4 — Reviews & Reputation**
- Post-Job Review Request — "Auto-texts after every job close."
- Google Review Shortlink Sender
- Negative Review Interceptor — "Catches 1–2 stars before they go public."
- Referral Ask Automation

**Section 5 — Invoicing & Payments**
- Invoice Follow-Up Sequence
- Overdue Payment Nudge
- Payment Confirmation + Receipt
- Recurring Invoice Sender

**Section 6 — Internal Ops**
- Daily Job Summary — "Texts you a morning digest before the day starts."
- New Lead Alert — "Instant SMS/Slack notification on every new inquiry."
- Job Status Update to Client
- Team Notification Router

**Section 7 — AI Agents (Advanced)**
Style differently: darker background card surface, slightly elevated energy.
Label: "AI Agents — Next Level"

- Inbound Lead Qualifier — "AI reads the inquiry, scores it, routes it."
- FAQ Auto-Responder — "Answers common questions via SMS or chat, 24/7."
- Estimate Intake Bot — "Collects job details from the customer automatically."
- Review Response Writer — "AI drafts Google review replies for your approval."
- Reputation Monitor — "Watches Google/Yelp. Alerts on every new review."
- Proposal Builder Agent — "Fills a quote template from a conversation."

**Card Design Rules:**
- Dark card on dark background (surface elevation, not white cards)
- Small color-coded tag chips per category
- Metric badge in accent color where applicable ("Recovers ~$1,800/mo avg")
- Subtle hover lift animation
- NO individual pricing on any card — this is inspiration, not a menu

**Bottom CTA**
Headline: "Want to know which of these your business needs most?"
Sub: "The free assessment maps your operation and tells you exactly 
which systems have the highest ROI. No guessing."
CTA button: "Book Your Free Assessment →" — triggers Cal.com popup

---

### `/blog` — Field Notes

Header: "Field Notes. Real businesses, real math."
Sub: "One post per workflow installed. Here's what we found."
Card grid — each card shows:
- Business type + city
- Dollar leak found
- System installed
- Links to full post
No sidebar. No categories. Reverse-chronological.

---

### `/blog/[slug]` — Case Study / Post

- Full-width single-column post layout, 65ch max-width prose
- Post header: business type + city + dollar amount recovered
- Post structure: The Problem → The Math → The System → The Result
- CTA at bottom: "Sound familiar? Book a free assessment." 
  — triggers Cal.com popup
- No comments, no author bio needed

---

## Layout & Mobile Rules
- Mobile-first. This audience is on their phone between jobs.
- Full-width sections, generous vertical padding
- Pain cards (Home Section 2) stack to single column on mobile
- Pricing cards stack vertically on mobile, Operations Stack card first
- Sticky bottom bar on mobile: "Book Free Assessment" button 
  triggers Cal.com popup
- No hover-only UI — tap-first interactions
- Touch targets minimum 44x44px
```

Sources
