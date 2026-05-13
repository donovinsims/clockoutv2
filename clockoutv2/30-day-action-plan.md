# 30-Day Action Plan
*From zero to first paying client. No followers required.*

---

## The Goal

By day 30: 3 free assessments delivered, at least 1 paid install closed ($300–$800), 3 testimonials, and a working pipeline of 5–10 warm prospects.

That's realistic. That's the plan.

---

## Week 1 — Foundation (Days 1–7)

Get the infrastructure in place. Don't skip this to go sell. You need a working demo and a way to deliver before you walk into anyone's business.

### Day 1–2: Pick a Name and Claim It
- Choose from the shortlist in Business Name Ideas doc. Pick one. Don't overthink it.
- Check domain availability (Namecheap or Porkbun). Buy it.
- Set up a Gmail with your business name as a fallback if the domain takes time.
- Recommendation: **[Your Last Name] Ops** or **Ironworks Automation** — both pass the "say it on the phone" test.

### Day 3–4: Tool Stack Setup
Set these up in order. All free to start.

- [ ] **n8n** — sign up for n8n.cloud (free trial, then $20/mo) OR self-host on Railway ($5/mo). This is your build environment.
- [ ] **Cal.com** — free, open-source appointment booking. Connect to Google Calendar. This is your "book a free assessment" link.
- [ ] **Google Sheets** — create a simple client tracker: Name, Business, Pain Point, Assessment Status, Proposal Sent, Follow-Up Date
- [ ] **Fathom** — connect to Google Meet/Zoom. Auto-transcribes your assessment calls.
- [ ] **Twilio** — create a free trial account. Get a local 779 or 815 area code number. This is your demo number for the text-back workflow.

### Day 5–6: Build Your First Demo Workflow
Before you talk to anyone, you need something to show.

Build the **Missed Call Text-Back** in n8n. Use your Twilio number. Test it by calling from your cell and letting it go to voicemail. Watch the SMS fire back.

When it works — screen record it. That 60-second video is your demo.

**Prompt for Claude:**
```
Build an n8n workflow that monitors Twilio for missed calls. When a call 
is missed, wait 30 seconds then send an SMS to the caller: "Hey, sorry we 
missed your call at [Business Name]. How can we help?" If they reply, send 
a notification to [your phone number via Twilio]. Log every interaction to 
Google Sheets with: caller number, timestamp, reply received (yes/no).
```

### Day 7: Assessment Report Template
- Create your assessment report template in Gamma (free) or Google Slides.
- Build the 6-section structure from the Assessment Call Script doc.
- Fill in placeholder text so you can swap in real data within 30 minutes after a call.

**By end of Week 1 you have:** a name, a demo that works, a booking link, and a report template ready to fill. Now you can go talk to people.

---

## Week 2 — First 3 Free Assessments (Days 8–14)

Identify your 3 people and run the assessments. These are free. The goal is: deliver real value, get a testimonial, get a warm introduction.

### Day 8: Make Your List
Write down 10 people you already know who own or manage a local service business. Not perfect-fit prospects — just people you have a relationship with. You need 3 to say yes.

**Target:** Any owner-operated business in the Rockford/Roscoe area with phone, email, or admin challenges — trades, cleaning, HVAC, dental, salon, auto, retail, professional services. If they have operational leaks and $500K+ in revenue, they qualify.

### Day 9: Send the Messages
Text or call your top 3. Keep it simple:

> *"Hey [name] — I'm doing a few free AI assessments for local businesses this month. It's a 20-minute call where I look at your operation and tell you exactly where you're leaking time or money, and what it would take to fix it. No pitch, just an honest look. Would you be open to it?"*

If they say yes: send your Cal.com link.

### Day 10–12: Run the 3 Assessment Calls
Use the Assessment Call Script doc. Take notes. Record with Fathom. Deliver the report within 48 hours.

### Day 13–14: Deliver the Reports + Ask for Two Things
After each report, on the follow-up call:

1. **Ask for a testimonial:** *"If this was useful, would you be willing to write one sentence I can share? Something like 'This call showed me exactly where I was losing money' — even something brief."*

2. **Ask for one introduction:** *"Even if the timing isn't right for you to move forward, do you know one other contractor or business owner who deals with the same problems? A warm intro would mean a lot."*

---

## Week 3 — First Paid Close (Days 15–21)

At least one of your three assessment clients is ready to move forward. This week you close it and build it.

### Day 15–16: Follow Up on All Three
If anyone hasn't booked the follow-up call — reach out. Reference their specific pain point:

> *"Just following up on the assessment report. The missed call workflow specifically — I wanted to walk through that one because the ROI math on it is pretty clear for your volume. Have 20 minutes this week?"*

### Day 17–18: Close and Build
On the follow-up call, walk through the report. When they're ready:

> *"This runs 24/7. Setup is $[X]. Want me to leave it running?"*

If they say yes: take payment (Stripe or Venmo to start). Build the workflow in their account or connected to their number. Document what you built.

**Your first paid build should be the Missed Call Text-Back or Review Request** — both are fast (3–4 min to build), have clear ROI math, and are easy to demo live.

### Day 19–21: Activate the Referral Pipeline
For the two who didn't convert yet:
- Put them in the email nurture sequence (Marketing System doc)
- Follow up on any warm introductions they mentioned
- Ask the one who did convert: *"Do you know two other contractors who deal with the same problem?"*

---

## Week 4 — Go Public + Build Pipeline (Days 22–30)

You have one paid install, 2–3 testimonials, and proof of concept. Now you start making noise.

### Day 22: Website Goes Live
Use the Claude Code prompt (see website prompt doc) to build your single-page site. Get it live on your domain. The only CTA: "Book a Free Assessment."

### Day 23–24: LinkedIn + Facebook Setup
- Set up or update your LinkedIn profile. Headline: *"I install automation systems for Winnebago County businesses. Fixed price. Fast. You own everything."*
- Join: Rockford Business Owners (Facebook), any local contractor groups you can find.
- First post (LinkedIn): The math post from your first install. What was the problem, what it was costing, what you built, what it recovered. No tech speak.

### Day 25–26: Door-Knock 5 Local Businesses
Pick 5 businesses in Roscoe or Rockford that have fewer than 20 Google reviews. That's your signal — they have no review system.

Walk in. Ask for the owner. Say:
> *"Hey, my name is [name]. I'm local — based in Roscoe — and I install automation systems for local businesses. I noticed you don't have many Google reviews online, which is usually a sign there's no automated system collecting them. Takes about 4 minutes to set up and it runs on its own. Would you have 20 minutes for a quick conversation about whether it makes sense for your business?"*

Three out of five will say yes or ask you to come back.

### Day 27–28: Plan Your Local Meetup
Go to Luma.events or Meetup.com. Create a free event:

**Title:** "AI for Rockford Businesses — Free Workshop"
**Description:** "A free 20-minute overview of what's actually useful in AI for local businesses in 2025. No pitch. No hype. Just practical tools and a Q&A. Hosted by [Your Name], based in Roscoe."

Pick a date 3–4 weeks out. Reach out to that realtor, your chamber contact, or anyone else who can help spread it. Even 8–10 attendees is a pipeline worth having.

### Day 29–30: Review and Set Month 2 Targets

**Audit what happened:**
- [ ] How many assessments delivered?
- [ ] How many converted to paid?
- [ ] How many testimonials collected?
- [ ] How many warm introductions received?
- [ ] How many are in the email nurture sequence?

**Set Month 2 targets:**
- 5 more assessments (mix of referrals + cold walk-ins)
- 2–3 more paid installs
- First Operations Stack proposal ($1,200–$2,000)
- Meetup event executed
- First piece of content posted per week

---

## The Mindset Calibration

From the transcript: *"You don't need to be an AI expert. You just need to be one step ahead of your average client — which is literally you studying this stuff for 7 days."*

You are already that far ahead. The contractor you're sitting across from has never opened n8n. They don't know what Make.com is. They think a Zapier automation requires a developer.

You've been building these things. You have the playbook. You have the scripts.

The gap between you and your first $3,000 month is 3 conversations and 3 builds.

---

→ *See [Assessment Call Script] for the exact questions to ask.*
→ *See [The Offer] for pricing at each stage.*
→ *See [Marketing System] for the content flywheel once you have case studies.*
