export type Post = {
  slug: string;
  business: string;
  city: string;
  leak: string;
  system: string;
  date: string;
  problem: string;
  math: string[];
  build: string[];
  result: string;
};

export const posts: Post[] = [
  {
    slug: "hvac-rockford-missed-call-textback",
    business: "HVAC contractor",
    city: "Rockford, IL",
    leak: "$2,400/mo in missed calls",
    system: "Missed Call Text-Back",
    date: "Apr 2026",
    problem:
      "Owner of a 7-person residential HVAC outfit was missing roughly 14 calls a week — most of them during installs when no one could reach the phone. By the time anyone called back, the customer had booked with the next guy on Google.",
    math: [
      "Avg job size: $480 (service) / $4,800 (install)",
      "Missed calls per week: ~14",
      "Conversion when reached within 5 min: ~21%",
      "Realistic recapture: 2–3 jobs / month",
      "Recovered revenue: $1,800–$2,800 / month",
    ],
    build: [
      "Twilio number routing layered over the existing landline (no port-out, no rip-and-replace)",
      "Auto-text on every missed call: 'Sorry we missed you — what can we help with?'",
      "AI-tagged response routed to the owner's phone with a one-tap callback link",
      "30-day check-in to tune copy + response time",
    ],
    result:
      "First 30 days: 11 callbacks converted into booked jobs. Owner stopped losing the 8pm calls he used to never see until morning.",
  },
  {
    slug: "roofer-roscoe-estimate-follow-up",
    business: "Roofing company",
    city: "Roscoe, IL",
    leak: "$5,100/mo in cold estimates",
    system: "Estimate Follow-Up Sequence",
    date: "Mar 2026",
    problem:
      "They were sending 30+ estimates a week and following up on maybe 5. The rest aged out. They had no idea which ones were even still warm.",
    math: [
      "Avg estimate value: $7,200",
      "Open estimates / month: ~110",
      "Industry close rate w/ 3-touch follow-up: +18%",
      "Recovered jobs (conservative): 0.7 / month",
      "Recovered revenue: ~$5,000 / month",
    ],
    build: [
      "3-touch sequence: Day 2 text, Day 5 email, Day 9 'expiring Friday' nudge",
      "Tied directly to their existing CRM — no double entry",
      "Owner sees a daily morning digest of which estimates moved",
    ],
    result:
      "Two extra roofs closed in the first 6 weeks. Setup paid for itself in week one.",
  },
  {
    slug: "salon-beloit-review-request",
    business: "Hair salon",
    city: "Beloit, WI",
    leak: "Almost zero new Google reviews",
    system: "Post-Job Review Request",
    date: "Feb 2026",
    problem:
      "Stylists were great, but the salon hadn't gotten a new Google review in 4 months. The owner kept meaning to ask. She never did.",
    math: [
      "Visits per month: ~420",
      "Realistic review conversion w/ auto-ask: 3–5%",
      "Expected: 12–20 new reviews / month",
      "Local pack ranking lift: significant",
    ],
    build: [
      "Auto-text 90 minutes after appointment close with a Google review shortlink",
      "Negative sentiment intercept (1–2 star drafts route to owner privately)",
      "Stylist-level attribution so the team sees their own scores",
    ],
    result:
      "First 30 days: 18 new 5-star reviews. Bookings from Google up ~22% month-over-month.",
  },
  {
    slug: "plumber-loves-park-missed-call-textback",
    business: "Plumbing company",
    city: "Loves Park, IL",
    leak: "$3,200/mo in missed calls",
    system: "Missed Call Text-Back",
    date: "Jan 2026",
    problem:
      "Owner runs a two-truck plumbing operation out of Loves Park. When both trucks are on jobs, nobody's at a desk — and every call that goes to voicemail is a potential customer who's already Googling the next plumber. He was missing 8–10 calls a week and had no way to know which ones were emergency calls vs. quote requests.",
    math: [
      "Avg job value: $400 (service call) / $1,800 (full repair)",
      "Missed calls per week: ~9",
      "Text-back conversion within 5 min: ~24%",
      "Realistic recapture: 2 jobs / week → ~$3,200 / month",
      "System cost: $500 setup + $30/mo monitoring",
    ],
    build: [
      "Twilio number layered over existing business line — no porting, no disruption",
      "Auto-text fires within 30 seconds of every missed call: 'Sorry we missed you — still need a plumber?'",
      "Response tagged by AI (emergency vs. quote) and pushed to owner's phone with one-tap callback",
      "30-day copy tune based on response patterns",
    ],
    result:
      "First 30 days: 9 missed-call leads converted into booked jobs. The $380 emergency call at 7pm on a Tuesday — that one paid for the system.",
  },
  {
    slug: "landscaper-machesney-estimate-followup",
    business: "Landscaping company",
    city: "Machesney Park, IL",
    leak: "$3,600/mo in cold estimates",
    system: "Estimate Follow-Up Sequence",
    date: "May 2026",
    problem:
      "Spring backlog meant this Machesney Park landscaper was sending 35–40 estimates a week and following up on maybe four of them. The rest sat in his email until he forgot about them. Customers who got no follow-up went with whoever called back first — usually a larger outfit with a sales person.",
    math: [
      "Avg job value: $1,200 (seasonal install / cleanup)",
      "Open estimates per month: ~90",
      "Industry close rate lift with 3-touch follow-up: +30–40%",
      "Conservative recapture: 3 jobs / month",
      "Recovered revenue: ~$3,600 / month",
    ],
    build: [
      "3-touch sequence tied to estimate send date: Day 2 text, Day 5 email, Day 9 'expiring Friday' nudge",
      "Connected directly to his existing CRM — no double entry, no new tool to learn",
      "Daily morning digest shows which estimates opened, clicked, or went cold",
    ],
    result:
      "Three extra installs closed in the first month. One was a $2,400 full-yard job he'd written off as dead two weeks prior.",
  },
  {
    slug: "dental-rockford-no-show-recovery",
    business: "Dental office",
    city: "Rockford, IL",
    leak: "$3,920/mo in no-shows",
    system: "No-Show Recovery",
    date: "Jan 2026",
    problem:
      "A general dental practice in Rockford was losing 12–14 appointment slots a week to no-shows and same-day cancellations. Chair time is a fixed cost — hygienist is there whether the patient shows or not. The front desk was manually calling to confirm, but with 80+ appointments a week there wasn't time to chase everyone.",
    math: [
      "Avg appointment value: $280 (hygiene / cleaning)",
      "No-shows + cancellations per week: ~13",
      "Recovery rate with automated same-day text: 30–35%",
      "Recaptured slots per week: ~4 → ~$3,920 / month",
      "System cost: $500 setup + $35/mo monitoring",
    ],
    build: [
      "48-hour reminder text + 2-hour last-chance nudge before every appointment",
      "Cancellation flow captures reason and immediately offers the slot to a waitlist",
      "No-show recovery text fires 15 minutes after missed start time with a rebook link",
    ],
    result:
      "No-show rate dropped from 17% to 8% in 30 days. Friday afternoon — historically the worst slot — now runs at 90%+ fill from the automated waitlist.",
  },
  {
    slug: "auto-repair-belvidere-review-request",
    business: "Auto repair shop",
    city: "Belvidere, IL",
    leak: "Stuck at 31 Google reviews for two years",
    system: "Post-Job Review Request",
    date: "May 2026",
    problem:
      "Independent auto shop in Belvidere doing solid work but invisible online. Thirty-one Google reviews after seven years — meanwhile a chain shop that opened eighteen months ago already had 140. The owner knew customers were happy. He just never had a system to ask.",
    math: [
      "Cars serviced per month: ~175",
      "Review conversion rate with automated ask: ~4–5%",
      "Expected new reviews per month: 7–9",
      "Local pack ranking movement: significant (from #7 to top 3)",
    ],
    build: [
      "Auto-text fires when job is marked complete in the shop management system",
      "Google review shortlink + single-tap flow (no app, no login required)",
      "Negative sentiment intercept: 1–2 star drafts route to owner privately before posting",
      "Weekly summary report showing review count by technician",
    ],
    result:
      "27 new reviews in the first 30 days. Shop moved from #7 to #2 in Google local results for 'Belvidere auto repair.' Owner got three calls in week four from people who found him by searching.",
  },
  {
    slug: "hvac-beloit-invoice-followup",
    business: "HVAC contractor",
    city: "Beloit, WI",
    leak: "$2,800/mo in late invoices",
    system: "Invoice Follow-Up Sequence",
    date: "May 2026",
    problem:
      "Two-person HVAC operation in Beloit carrying 15–20 open invoices at any given time, some 60 days past due. The owner was chasing payments by phone — uncomfortable, time-consuming, and inconsistent. A few customers had slipped to 90 days and he didn't notice until he pulled a report.",
    math: [
      "Avg invoice: $480",
      "Open invoices per month: ~18",
      "Late payment reduction with automated follow-up: 60%",
      "Cash recovered into 30-day window: ~$2,800 / month",
      "System cost: $500 setup + $25/mo monitoring",
    ],
    build: [
      "Automated sequence: Day 7 text + payment link, Day 14 email, Day 21 firm reminder",
      "Payment link included in every touch — one tap from phone to paid",
      "Escalation flag to owner at Day 30 so he knows which accounts need a call",
    ],
    result:
      "Average days-to-payment dropped from 38 to 14. Owner stopped spending Sunday evenings reconciling who owed what.",
  },
  {
    slug: "roofer-machesney-review-request",
    business: "Roofing company",
    city: "Machesney Park, IL",
    leak: "12 Google reviews after 9 years",
    system: "Post-Job Review Request",
    date: "Jan 2026",
    problem:
      "Nine years in business, zero callbacks, clean installs — and only 12 Google reviews to show for it. A newer company with half the experience had 85. When homeowners searched 'roofing Machesney Park' he wasn't showing up. He knew his work spoke for itself. The problem was nobody could hear it.",
    math: [
      "Roofs completed per month: ~10",
      "Review conversion with post-job automated ask: 6–7%",
      "Expected new reviews per month: 6–7",
      "Avg job value: $9,800 — one Google-sourced lead pays for years of the system",
    ],
    build: [
      "Auto-text 24 hours after job marked complete: short, personal, single-link",
      "Google review shortlink with direct-to-form routing (no extra clicks)",
      "Negative intercept routes low-score drafts to owner before they publish",
      "Monthly report showing total reviews and star average trend",
    ],
    result:
      "11 new 5-star reviews in 30 days. Two inbound calls in week five specifically mentioned finding him on Google. He'd never gotten a Google-sourced call before.",
  },
  {
    slug: "cleaning-roscoe-missed-call-textback",
    business: "Cleaning service",
    city: "Roscoe, IL",
    leak: "$2,400/mo in missed calls",
    system: "Missed Call Text-Back",
    date: "May 2026",
    problem:
      "Owner runs a residential cleaning operation in Roscoe with two crews. Nobody sits at a desk — they're cleaning. New client calls during the day go to voicemail and most never leave one. She was losing 5–7 potential new clients a week and had no way to even know how many calls she was missing.",
    math: [
      "Avg recurring client value: $180 / clean × ~26 cleans / year = $4,680 / year",
      "Missed new-client calls per week: ~6",
      "Text-back conversion within 5 min: ~28%",
      "Realistic new clients from recapture: 1–2 per month",
      "Annual value of 2 new recurring clients: ~$9,360",
    ],
    build: [
      "Auto-text on every missed call within 30 seconds: 'Hey! Caught your call — looking for a cleaning quote?'",
      "Short qualification flow (home size, frequency) handled by AI before owner sees the lead",
      "Owner gets a tagged summary with callback link — no digging through missed calls",
    ],
    result:
      "First 30 days: 4 new recurring clients booked from missed-call texts. Annual value of those 4 clients: ~$18,720. System paid for itself in week one.",
  },
];
