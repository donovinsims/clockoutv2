export type AgentCard = {
  name: string;
  desc: string;
  recovers?: string;
  tags: string[];
  detail: string;
  howItWorks: string[];
  goodFor: string[];
  setupTime: string;
  whatToExpect: string;
};

export type AgentSection = {
  title: string;
  tag: string;
  cards: AgentCard[];
  advanced?: boolean;
};

export const sections: AgentSection[] = [
  {
    title: "Lead & Call Recovery",
    tag: "01",
    cards: [
      {
        name: "Missed Call Text-Back",
        desc: "Texts every missed call within 60 seconds. Automatically.",
        recovers: "~$1,800/mo avg",
        tags: ["Phone", "SMS"],
        detail:
          "When a call goes unanswered — whether you're on a job, driving, or just stepped away — this system fires a personalized text within 60 seconds. Callers who get an instant response stay warm. Without it, 68% of missed callers never try again.",
        howItWorks: [
          "Call goes unanswered, Twilio webhook fires instantly",
          "Personalized SMS sends within 60 seconds: 'Hey, sorry we missed you — what can we help with?'",
          "Customer replies are routed to your phone with a one-tap callback link",
          "All interactions logged and flagged in your CRM",
        ],
        goodFor: ["HVAC", "Plumbing", "Roofing", "Landscaping", "Any trade with high call volume"],
        setupTime: "1–2 days",
        whatToExpect:
          "Most businesses recover 2–4 extra jobs in the first 30 days. At a $500 avg job size, that's $1,000–$2,000/mo from calls that were already coming in. HVAC contractor in Rockford recovered 11 booked jobs in the first month.",
      },
      {
        name: "Speed-to-Lead Responder",
        desc: "Responds to new leads before they call someone else.",
        recovers: "~$2,200/mo avg",
        tags: ["SMS", "Email", "AI"],
        detail:
          "78% of customers go with the first business that responds. This system watches your web forms, Google Business profile, and social DMs — and fires a personalized response within 90 seconds of a new inquiry, before your competitor even sees the lead.",
        howItWorks: [
          "New inquiry lands via web form, Google Business, or social channel",
          "AI reads the message and classifies intent and urgency",
          "Personalized intro text or email fires within 90 seconds",
          "Lead scored and forwarded to your phone with full context",
        ],
        goodFor: ["Any business with inbound web forms", "Google Business Message enabled", "Facebook/Instagram DMs"],
        setupTime: "2–3 days",
        whatToExpect:
          "Businesses typically see a 30–50% lift in lead conversion rate from response time improvement alone. The leads were already there — this just ensures you get them instead of the next guy on Google.",
      },
      {
        name: "After-Hours Auto-Reply",
        desc: "Answers inquiries at 11pm so you don't have to.",
        tags: ["SMS", "AI"],
        detail:
          "Inquiries that come in at 10pm aren't waiting until 8am. This system monitors your channels after hours and sends a professional acknowledgment with your expected response time — so the lead doesn't go cold overnight and wake up ready to call someone else.",
        howItWorks: [
          "Incoming message detected outside your business hours",
          "Professional auto-reply fires immediately with expected response window",
          "Message tagged and queued for your morning review",
          "Morning summary sent at 7am with all overnight inquiries",
        ],
        goodFor: ["Residential service businesses", "Anyone who gets homeowner inquiries after 6pm"],
        setupTime: "1 day",
        whatToExpect:
          "Stops the 'I texted last night and never heard back' drop-off entirely. Leads who receive an immediate acknowledgment convert at nearly the same rate as daytime inquiries.",
      },
      {
        name: "Voicemail Transcriber + Alert",
        desc: "Transcribes voicemails and texts you the summary.",
        tags: ["Phone", "AI"],
        detail:
          "Voicemails pile up and get missed. This system transcribes every voicemail using AI, sends you the text summary within 60 seconds, and flags urgent messages — so you know what was left without ever listening to an audio file.",
        howItWorks: [
          "Voicemail received on your business line",
          "Audio transcribed via AI within 60 seconds",
          "Text summary with caller ID and transcription sent to your phone",
          "Urgent keywords (emergency, no heat, flooding, burst) trigger a priority alert",
        ],
        goodFor: ["HVAC", "Plumbing", "Any service where voicemails can be emergency calls"],
        setupTime: "1 day",
        whatToExpect:
          "Response time to voicemails drops from hours to under 5 minutes. Urgent jobs get called back before the customer finds someone else.",
      },
      {
        name: "Dead Lead Revival",
        desc: "Re-engages cold contacts automatically.",
        recovers: "~$900/mo avg",
        tags: ["SMS", "Email"],
        detail:
          "You've got a database full of people who inquired but never booked. This system runs a 2-touch re-engagement sequence to wake them up — a personalized 'still looking?' message at exactly the right cadence, with zero manual effort.",
        howItWorks: [
          "Identifies contacts that went cold 30–90 days ago with no booking",
          "Sends personalized re-engagement SMS: 'Hey, it's [business] — you reached out a while back about [service]. Still need help?'",
          "If no reply in 5 days, sends a low-pressure follow-up",
          "Interested replies route back into your active pipeline automatically",
        ],
        goodFor: ["Any business with a contact list or CRM history", "Seasonal businesses (HVAC, landscaping) with off-season dead leads"],
        setupTime: "2 days",
        whatToExpect:
          "A typical database revival campaign converts 3–8% of cold leads. If you have 200 stale contacts, that's 6–16 new opportunities generated from a list you'd otherwise ignore.",
      },
    ],
  },
  {
    title: "Estimates & Follow-Up",
    tag: "02",
    cards: [
      {
        name: "Estimate Follow-Up Sequence",
        desc: "3-touch automated follow-up on every open bid.",
        recovers: "~$3,400/mo avg",
        tags: ["SMS", "Email"],
        detail:
          "You wrote the quote. Now nothing. This system sends a 3-touch automated follow-up on every open bid: a check-in text, a value reminder email, and an expiry nudge — without you lifting a finger. Industry data shows 3-touch follow-up increases close rates by 18%.",
        howItWorks: [
          "Estimate sent triggers the sequence automatically in your CRM",
          "Day 2: Text check-in — 'Did you have any questions on the quote?'",
          "Day 5: Email reinforcing the value and what's included",
          "Day 9: Expiry nudge — 'Your quote expires Friday — still want to move forward?'",
        ],
        goodFor: ["Roofing", "HVAC installs", "Remodeling", "Any business where estimates sit open for days"],
        setupTime: "2–3 days",
        whatToExpect:
          "Roofing company in Roscoe closed 2 extra jobs in the first 6 weeks — setup paid for itself in week one. Even recovering one estimate per month at a $3,000+ average ticket pays for the entire system many times over.",
      },
      {
        name: "No-Response Nudge",
        desc: "Texts if no reply in 48 hours.",
        tags: ["SMS"],
        detail:
          "The single-touch version. When a lead or estimate goes completely dark — no open, no reply, no engagement — this system fires one polite, direct nudge at the 48-hour mark. Simple and effective for businesses that don't need a full sequence.",
        howItWorks: [
          "No response detected 48 hours after last outreach or estimate send",
          "Single SMS fires: 'Hey, just wanted to make sure this landed — any questions on the quote?'",
          "Reply triggers an immediate notification to your phone",
          "No reply after 5 more days logs the contact as cold for revival later",
        ],
        goodFor: ["Any business sending estimates or proposals", "Works well standalone or as a complement to the full sequence"],
        setupTime: "1 day",
        whatToExpect:
          "Most businesses see 10–15% of nudged contacts respond. At a $3,000 average estimate, one recovered job pays for this system many times over.",
      },
      {
        name: "Estimate Expiry Alert",
        desc: "'Your quote expires Friday — still interested?'",
        tags: ["SMS", "Email"],
        detail:
          "Material costs and your schedule mean quotes can't stay open forever. This system sends a professional expiry message — creating genuine urgency without you having to deliver the awkward 'my price is going up' news manually.",
        howItWorks: [
          "Expiry date set when estimate is created, or defaulted to 14 days",
          "3 days before expiry: 'Your quote expires Friday — want to lock in today's pricing?'",
          "Day of expiry: Final courtesy message with an offer to extend if interested",
          "Expired estimates automatically archived in your CRM",
        ],
        goodFor: ["Roofing", "Remodeling", "Any business with material price exposure or limited scheduling windows"],
        setupTime: "1–2 days",
        whatToExpect:
          "Creates genuine urgency that moves fence-sitters. Businesses typically see a 10–20% lift in close rate on quotes that would otherwise age out over 2–3 weeks.",
      },
      {
        name: "Job Won Confirmation + Deposit Request",
        desc: "Locks the job and collects the deposit, automatically.",
        tags: ["SMS", "Email"],
        detail:
          "The moment a customer says yes, this system fires a confirmation message, sends the deposit invoice, and adds the job to your calendar — all within seconds of you marking it won. Closes the gap between 'verbal yes' and money in the bank.",
        howItWorks: [
          "Job marked as won in your CRM via a status change or keyword trigger",
          "Automatic confirmation to customer: 'We're confirmed for [date] — here's what to expect...'",
          "Deposit invoice sent via Stripe or your payment processor",
          "Job auto-added to your calendar with full customer details attached",
        ],
        goodFor: ["HVAC installs", "Roofing", "Remodeling", "Any service business collecting deposits"],
        setupTime: "2–3 days",
        whatToExpect:
          "Eliminates the 48-hour gap where jobs verbally commit but don't materialize. Deposit collection rate typically jumps from around 60% to 90%+ when the ask is automated and immediate.",
      },
    ],
  },
  {
    title: "Scheduling & No-Shows",
    tag: "03",
    cards: [
      {
        name: "Appointment Reminder Sequence",
        desc: "24hr + 2hr reminders. Automatically.",
        tags: ["SMS"],
        detail:
          "The two-touch reminder sequence that eliminates no-shows. A 24-hour reminder sets the expectation the day before; a 2-hour reminder confirms they're still ready the morning of. Something most businesses know they should do — but never actually set up.",
        howItWorks: [
          "Appointment booked in your system triggers the sequence automatically",
          "24 hours prior: 'Just a reminder — we're confirmed for tomorrow at [time]. See you then.'",
          "2 hours prior: Quick confirmation, address or parking instructions if needed",
          "Customer reply with any changes triggers an instant notification to your phone",
        ],
        goodFor: ["Salons", "HVAC maintenance visits", "Cleaning services", "Any service with scheduled appointments"],
        setupTime: "1–2 days",
        whatToExpect:
          "No-show rates typically drop from 15–20% to under 5%. At 20 appointments/week and a $200 average job, that's $600–$800/week recovered from people who would have just not shown up.",
      },
      {
        name: "No-Show Recovery",
        desc: "Instant rebook offer if they miss.",
        recovers: "Recovers 60–70%",
        tags: ["SMS"],
        detail:
          "They didn't show up. Instead of writing off the job, this system fires an instant rebook text within 5 minutes of the no-show: 'Hey, we came out today — everything okay? Happy to get you back on the schedule.' Sent immediately, it recovers the majority of no-shows.",
        howItWorks: [
          "Appointment flagged as no-show by your tech or triggered by GPS check-in with no customer",
          "Text fires within 5 minutes — friendly, non-accusatory",
          "If they respond, a rebook link or open time slot is offered immediately",
          "If no response in 24 hours, a final follow-up fires before the lead moves to cold revival",
        ],
        goodFor: ["Any service business with scheduled appointments — salons, HVAC, cleaning, landscaping"],
        setupTime: "1 day",
        whatToExpect:
          "When sent within 5 minutes, 60–70% of no-shows rebook. Without this system, most businesses write off no-shows entirely — that's a recoverable loss every single week.",
      },
      {
        name: "Cancellation Reactivation",
        desc: "Fills the open slot from a waitlist.",
        tags: ["SMS", "AI"],
        detail:
          "Someone cancels. Most businesses just have an empty slot and a revenue hole. This system automatically messages the next person on your waitlist — or a curated list of re-engageable contacts — to fill it, turning a cancellation into a full day.",
        howItWorks: [
          "Cancellation received, open slot detected in your calendar",
          "System queries your waitlist or most-recently-contacted cold leads",
          "Fill-slot offer fires: 'We just had an opening [day] at [time] — want it?'",
          "First to reply wins the slot; others receive a graceful 'already filled' message",
        ],
        goodFor: ["Salons", "Service businesses running close to full capacity", "Any operation with a waitlist"],
        setupTime: "2 days",
        whatToExpect:
          "Businesses with a waitlist fill 70–80% of cancellation slots within an hour of the opening. Without automation, most cancelled slots just go empty and the revenue disappears.",
      },
      {
        name: "Schedule Change Notifier",
        desc: "Tells everyone affected, before you have to.",
        tags: ["SMS", "Email"],
        detail:
          "A job ran long and you need to reschedule five people. Without automation, that's five awkward phone calls taking 45 minutes. This system sends professional, personalized schedule change notifications to everyone affected — in bulk, in seconds.",
        howItWorks: [
          "Schedule change entered by you or triggered automatically by a job overrun",
          "Personalized messages sent to all affected customers simultaneously",
          "Message includes new time, a brief explanation, and a one-tap confirm or reschedule link",
          "Responses tracked so you know exactly who acknowledged and who still needs a call",
        ],
        goodFor: ["Multi-tech HVAC and plumbing operations", "Roofing with weather-dependent schedules", "Any trade with unpredictable job durations"],
        setupTime: "1–2 days",
        whatToExpect:
          "What used to take 45 minutes of uncomfortable calls takes 30 seconds. Customer satisfaction on reschedules is significantly higher when customers are notified proactively.",
      },
    ],
  },
  {
    title: "Reviews & Reputation",
    tag: "04",
    cards: [
      {
        name: "Post-Job Review Request",
        desc: "Auto-texts after every job close.",
        recovers: "+12 reviews/mo",
        tags: ["SMS"],
        detail:
          "The most direct path to more Google reviews. 90 minutes after a job closes, an auto-text goes to the customer: 'Thanks for having us out — would you mind leaving a quick review?' Direct link. One tap. Most happy customers are glad to help — they just never get asked.",
        howItWorks: [
          "Job marked as complete in your system",
          "90-minute delay fires — long enough to feel natural, short enough that the experience is fresh",
          "Personalized SMS sent with your direct Google review link",
          "Negative sentiment (1–2 star intent detected by AI) routes to your inbox privately before going public",
        ],
        goodFor: ["Every local service business — reviews are the #1 local search ranking signal"],
        setupTime: "1–2 days",
        whatToExpect:
          "Hair salon in Beloit went from zero new reviews in 4 months to 18 new 5-star reviews in 30 days. Google local pack ranking improved and bookings from Google increased 22% month-over-month.",
      },
      {
        name: "Google Review Shortlink Sender",
        desc: "One tap from customer to a 5-star form.",
        tags: ["SMS"],
        detail:
          "When you ask for a review and the customer has to 'find you on Google,' most of them drop off at every friction point. This sends a direct shortlink that lands the customer straight on your Google review form in one tap — zero search, zero navigation, zero friction.",
        howItWorks: [
          "Your unique Google review shortlink is configured once during setup",
          "Link embedded in all review request messages, confirmation texts, and receipts",
          "Customer taps link → lands directly on the Google star rating form",
          "Can be used standalone as a share link or as part of the automated post-job sequence",
        ],
        goodFor: ["Any business on Google Business Profile — which is all of them"],
        setupTime: "Half a day",
        whatToExpect:
          "Review conversion rate is typically 3–5x higher with a direct link vs. a general ask. The friction from searching and navigating is where most review intentions die.",
      },
      {
        name: "Negative Review Interceptor",
        desc: "Catches 1–2 stars before they go public.",
        tags: ["SMS", "AI"],
        detail:
          "When a customer is about to leave a 1 or 2-star review, AI detects the negative sentiment in their response and routes them to a private resolution channel — before they ever reach the Google form. Most unhappy customers just want to be heard. This gives them that option.",
        howItWorks: [
          "Post-job text sent as normal via the review request sequence",
          "Customer response with negative keywords or frustrated tone detected by AI",
          "Instead of receiving the review link, they receive: 'Sorry to hear that — can I have someone reach out today?'",
          "Your phone gets an immediate priority alert with the customer's message and contact info",
        ],
        goodFor: ["Any service business with volume — the more jobs, the more important this interception becomes"],
        setupTime: "2 days",
        whatToExpect:
          "Prevents 80–90% of negative reviews from ever reaching Google. Most complaints resolved privately either result in neutral outcomes or, in many cases, a positive review after the issue is resolved.",
      },
      {
        name: "Referral Ask Automation",
        desc: "Asks happy customers for one referral. Politely.",
        tags: ["SMS", "Email"],
        detail:
          "Happy customers are your best salespeople — they just never get asked. This system fires a referral request 7 days after job close, while the experience is still fresh and the customer is still in the positive window. Polite, specific, and not pushy.",
        howItWorks: [
          "Job closes successfully, 7-day timer fires",
          "Message sent: 'Really glad we could help — if you know anyone who needs [service], we'd love the intro'",
          "Optional: includes a referral incentive ($25 credit, free service call, etc.) if you want to offer one",
          "Referred contacts who respond are automatically entered into your active lead pipeline",
        ],
        goodFor: ["Every local service business — word-of-mouth referrals convert at 3–5x the rate of cold inquiries"],
        setupTime: "1–2 days",
        whatToExpect:
          "Businesses see 1–3 referral leads per month from automated asks vs. almost zero from manual follow-up. At a $500+ job value, that's consistent incremental revenue with no ad spend.",
      },
    ],
  },
  {
    title: "Invoicing & Payments",
    tag: "05",
    cards: [
      {
        name: "Invoice Follow-Up Sequence",
        desc: "Three soft reminders so you don't have to chase.",
        tags: ["Email", "SMS"],
        detail:
          "Chasing invoices manually is uncomfortable and time-consuming. This system sends three professional follow-ups on every unpaid invoice: a friendly reminder, a firmer nudge, and a final notice — all automated, so you never have to make an awkward collection call.",
        howItWorks: [
          "Invoice sent and unpaid status detected after 3 days",
          "Day 3: Friendly reminder — 'Just checking — did the invoice land okay? Payment link below.'",
          "Day 10: Firmer follow-up with a direct payment link and total amount",
          "Day 20: Final notice with clear language about next steps if unpaid",
        ],
        goodFor: ["Any business that invoices clients post-service", "Especially valuable for larger-ticket jobs over $500"],
        setupTime: "1–2 days",
        whatToExpect:
          "Average days-to-payment drops significantly. Most unpaid invoices are genuinely just forgotten — a single reminder resolves the majority of outstanding balances.",
      },
      {
        name: "Overdue Payment Nudge",
        desc: "Polite + firm. Gets paid without the awkward phone call.",
        tags: ["SMS", "Email"],
        detail:
          "When an invoice hits 30+ days unpaid, this system sends a direct, professional nudge — not hostile, not passive, just clear: 'Your invoice from [date] for [amount] is still open. Here's the payment link.' Gets paid without the call you've been putting off.",
        howItWorks: [
          "Invoice reaches 30-day unpaid threshold",
          "Direct SMS fires with invoice amount, due date, and one-tap payment link",
          "If no payment in 5 days, a second message fires: 'Please reach out if there's an issue — happy to work something out'",
          "Resolved invoices automatically exit the sequence and are logged as paid",
        ],
        goodFor: ["Any business with invoice-based revenue", "Particularly valuable for commercial clients with AP departments"],
        setupTime: "1 day",
        whatToExpect:
          "Payment rate on overdue invoices roughly doubles when a direct SMS is sent vs. no follow-up. Text feels more immediate and personal than email for payment requests.",
      },
      {
        name: "Payment Confirmation + Receipt",
        desc: "Sends receipt the second money hits.",
        tags: ["Email"],
        detail:
          "The moment a payment clears, a professional receipt fires automatically. Expected by customers, eliminates 'can you resend my invoice' requests, and creates a clean paper trail without any admin time on your end.",
        howItWorks: [
          "Payment received and confirmed via Stripe, Square, or your payment processor",
          "Automatic receipt email fires within seconds of payment clearing",
          "Includes job details, payment amount, date, and your business contact info",
          "Internal notification also sent to your phone confirming the payment",
        ],
        goodFor: ["Any business accepting digital payments"],
        setupTime: "Half a day",
        whatToExpect:
          "Zero customer effort, zero admin time. Fully automated from payment trigger to receipt delivery. Eliminates an entire category of customer service follow-ups.",
      },
      {
        name: "Recurring Invoice Sender",
        desc: "Bills monthly clients without you lifting a finger.",
        tags: ["Email"],
        detail:
          "Monthly maintenance contracts, monitoring retainers, lawn care schedules — all billed automatically on the right date, to the right person, for the right amount. No manual invoice generation, no missed billing cycles, no awkward 'oh I forgot to invoice you' conversations.",
        howItWorks: [
          "Recurring contract configured once with billing date, amount, and client details",
          "Invoice auto-generates and sends on the scheduled date every month",
          "Payment reminder fires 3 days before if the invoice is still unpaid",
          "Failed payment attempts trigger an immediate alert to your phone",
        ],
        goodFor: ["HVAC maintenance contracts", "Lawn care", "Cleaning services", "Any business with recurring monthly clients"],
        setupTime: "1–2 days",
        whatToExpect:
          "Eliminates the 'I forgot to invoice this month' revenue leak entirely. Businesses with 10+ monthly clients typically recover $500–$2,000/mo in previously inconsistent billing cycles.",
      },
    ],
  },
  {
    title: "Internal Ops",
    tag: "06",
    cards: [
      {
        name: "Daily Job Summary",
        desc: "Texts you a morning digest before the day starts.",
        tags: ["SMS"],
        detail:
          "A formatted morning text before 7am with everything you need to know: jobs scheduled today, open estimates waiting on follow-up, unpaid invoices, and overnight inquiries. Replaces the 20-minute morning scramble of checking four different apps.",
        howItWorks: [
          "System aggregates data from your CRM, calendar, and accounting tool overnight",
          "Formatted daily digest texts to your phone at 6:30am",
          "Covers: today's jobs, open bids, outstanding payments, and any overnight inquiries flagged",
          "Format is fully configurable — you see only what matters most to how you operate",
        ],
        goodFor: ["Owner-operators", "Anyone managing jobs, bids, and cash flow simultaneously in a single operation"],
        setupTime: "2–3 days",
        whatToExpect:
          "Owners report saving 20–30 minutes every morning. More importantly, nothing slips: missed follow-ups and overdue invoices get flagged before they become problems.",
      },
      {
        name: "New Lead Alert",
        desc: "Instant SMS/Slack notification on every new inquiry.",
        tags: ["SMS"],
        detail:
          "The moment a new inquiry lands — web form submit, Google message, Facebook DM, missed call — you get an instant SMS notification with the lead's info and source. No more finding a 4-hour-old lead buried in email.",
        howItWorks: [
          "All inbound channels monitored: web forms, Google Business, social DMs, missed calls",
          "New lead fires an instant SMS to your phone: name, message summary, source, and time received",
          "One-tap reply link lets you respond immediately directly from the notification",
          "All leads also logged automatically in your CRM regardless of response",
        ],
        goodFor: ["Any business with multiple inbound channels — this unifies them all into one notification stream"],
        setupTime: "2 days",
        whatToExpect:
          "Response time typically drops from 4+ hours to under 5 minutes. Speed-to-lead is the single biggest conversion lever for inbound inquiries.",
      },
      {
        name: "Job Status Update to Client",
        desc: "Customers stop calling to 'check in'.",
        tags: ["SMS"],
        detail:
          "Proactive updates eliminate 'just checking in' calls. This system fires automatic status messages at key job milestones: confirmed, tech on the way, job complete. Customers stop calling because they already know.",
        howItWorks: [
          "Job status changes in your system trigger the corresponding message automatically",
          "Dispatch alert: 'Your technician is on the way — ETA [time]'",
          "Completion notification: 'Job complete — thanks for having us out today'",
          "Optionally paired with the post-job review request for a seamless close",
        ],
        goodFor: ["HVAC dispatch operations", "Plumbing", "Any service with technician dispatch"],
        setupTime: "2–3 days",
        whatToExpect:
          "Inbound 'where are you?' calls typically drop by 70–80%. Customer satisfaction scores improve significantly when customers feel kept in the loop at each stage.",
      },
      {
        name: "Team Notification Router",
        desc: "Right person, right channel, every time.",
        tags: ["SMS", "AI"],
        detail:
          "When a lead comes in for a specific service type, it should go to the right tech or dispatcher — not a general inbox everyone ignores. This routes notifications based on job type, territory, or skill set, with escalation if no one acknowledges.",
        howItWorks: [
          "Incoming lead or job classified by type (service call, install, emergency, etc.)",
          "Routed to the appropriate person or team via SMS or Slack based on your routing rules",
          "If no acknowledgment in 10 minutes, escalates to the next person in the chain",
          "All routing activity logged for accountability and review",
        ],
        goodFor: ["Multi-tech operations", "Businesses with specialized service lines", "Teams using Slack alongside work phones"],
        setupTime: "2–3 days",
        whatToExpect:
          "Eliminates the 'who's handling this?' confusion that causes jobs to fall through the cracks in growing operations. Every lead has an owner within minutes.",
      },
    ],
  },
  {
    title: "AI Agents — Next Level",
    tag: "07",
    advanced: true,
    cards: [
      {
        name: "Inbound Lead Qualifier",
        desc: "AI reads the inquiry, scores it, routes it.",
        tags: ["AI", "SMS"],
        detail:
          "An AI reads every new inquiry and instantly determines: Is this the right type of job for us? How urgent is it? Should this go to emergency, standard, or low-priority handling? You see a scored, classified lead — not a raw inquiry you have to interpret yourself.",
        howItWorks: [
          "Inquiry received from any inbound channel",
          "AI extracts: service type, urgency signals, location, and budget indicators",
          "Lead scored (hot / warm / cold) and tagged with job type and priority",
          "Routed to the appropriate response workflow and your notification queue with full context",
        ],
        goodFor: ["Businesses with high inquiry volume", "Any operation where manually sorting leads is consuming 30+ minutes daily"],
        setupTime: "3–5 days",
        whatToExpect:
          "Saves 30–60 minutes daily for high-volume operations. Hot leads get responded to faster; low-quality inquiries don't consume your morning before you've even had coffee.",
      },
      {
        name: "FAQ Auto-Responder",
        desc: "Answers common questions via SMS or chat, 24/7.",
        tags: ["AI", "SMS"],
        detail:
          "A trained AI answers your 20 most common questions via SMS or web chat, around the clock. 'What's your service area?' 'Do you work on [brand]?' 'How much does it cost?' — answered instantly, without you doing anything.",
        howItWorks: [
          "Your FAQs, service details, and pricing structure provided during setup",
          "AI trained specifically on your business — not a generic chatbot",
          "Customer texts or messages → AI responds naturally within seconds",
          "Questions the AI can't confidently answer are flagged and forwarded to you with full context",
        ],
        goodFor: ["HVAC", "Plumbing", "Any service business where customers ask the same 10–15 questions repeatedly"],
        setupTime: "3–5 days",
        whatToExpect:
          "Businesses with FAQ bots report handling 60–70% of inquiry volume without human intervention. The remaining 30% are qualified, ready-to-book leads — the conversations worth having.",
      },
      {
        name: "Estimate Intake Bot",
        desc: "Collects job details from the customer automatically.",
        tags: ["AI", "SMS"],
        detail:
          "A conversational AI that collects all the job details you need for an accurate estimate — service type, property details, equipment info, timeline — via a natural back-and-forth text conversation. You get a formatted lead sheet instead of an incomplete contact form.",
        howItWorks: [
          "Customer submits an initial inquiry or is directed to a dedicated intake number",
          "AI asks targeted follow-up questions: 'What type of unit do you have?' / 'When did the issue start?'",
          "Conversation continues naturally until all required fields are collected",
          "Formatted intake summary sent to you — ready to build an estimate from the first look",
        ],
        goodFor: ["HVAC", "Roofing", "Remodeling", "Any service with complex intake requirements where incomplete info wastes time"],
        setupTime: "5–7 days",
        whatToExpect:
          "Estimate prep time drops by 40–60% because all the info-gathering is done before you ever see the lead. No more phone tag trying to get square footage, unit model numbers, or service history.",
      },
      {
        name: "Review Response Writer",
        desc: "AI drafts Google review replies for your approval.",
        tags: ["AI"],
        detail:
          "Every Google review — positive or negative — deserves a timely, professional response. AI drafts a personalized reply for each one, referencing specifics from the review, ready for your one-tap approval. Your response rate goes from near-zero to same-day.",
        howItWorks: [
          "New Google review detected by your monitoring setup",
          "AI drafts a personalized response referencing specific details mentioned in the review",
          "Draft sent to your phone for review — approve, edit, or decline",
          "One-tap approval publishes the response directly to Google",
        ],
        goodFor: ["Any business with Google reviews — which is every local business worth finding"],
        setupTime: "2–3 days",
        whatToExpect:
          "Review response rate jumps from near-zero to 90%+. Google's algorithm rewards businesses that actively engage with reviews, improving local search visibility over time.",
      },
      {
        name: "Reputation Monitor",
        desc: "Watches Google/Yelp. Alerts on every new review.",
        tags: ["AI"],
        detail:
          "Watches your Google Business and Yelp profiles continuously. You know about a 1-star review within 5 minutes — not 3 weeks later when it's too late to respond effectively. Includes a weekly reputation digest with your review trends.",
        howItWorks: [
          "Monitors your Google Business and Yelp profiles in real time",
          "New review detected → instant SMS alert with the full review text and star rating",
          "1–2 star reviews trigger a priority alert and a suggested response draft",
          "Weekly digest sent Monday morning: total reviews, average rating, recent trends",
        ],
        goodFor: ["Any local business with a Google Business Profile — your online reputation is your pipeline"],
        setupTime: "1–2 days",
        whatToExpect:
          "You'll never miss a review again. Most businesses find 2–3 unanswered negative reviews the day monitoring goes live — catching and responding to these has an immediate, measurable impact on reputation.",
      },
      {
        name: "Proposal Builder Agent",
        desc: "Fills a quote template from a conversation.",
        tags: ["AI", "Email"],
        detail:
          "You talk to the customer, close the call, and a draft proposal populates automatically — pulling job scope, quantities, and customer info from the conversation log into your branded template. Ready to review and send in 10 minutes instead of a day.",
        howItWorks: [
          "Sales call transcript or estimate intake conversation submitted to the agent",
          "AI extracts: job scope, line items, quantities, customer info, and timeline from the conversation",
          "Fills your proposal template with extracted data and suggested line-item pricing",
          "Draft sent to you for review — edit, approve, and send in one step",
        ],
        goodFor: ["Roofing", "HVAC installs", "Remodeling", "Any business where proposal quality and turnaround speed affect close rates"],
        setupTime: "5–7 days",
        whatToExpect:
          "Proposal turnaround drops from 24–48 hours to under an hour. Faster proposals close at higher rates — customers are still in the buying window when they receive it.",
      },
    ],
  },
];
