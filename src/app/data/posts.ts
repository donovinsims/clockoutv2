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
];
