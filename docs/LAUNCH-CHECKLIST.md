# Launch Checklist — Southeast Roofing

Everything required to take the new site from "built" to "live and taking
leads." Ordered so you can work top to bottom. Legend:

- **[Owner]** — needs your account/login; only you can do it.
- **[Claude]** — I can do this in the code for you.
- **[Together]** — you provide a value/credential, I wire it in.
- **[Decision]** — a choice to make before we proceed.

See also [DEPLOYMENT.md](DEPLOYMENT.md) (service setup detail) and
[GBP-OPTIMIZATION.md](GBP-OPTIMIZATION.md) (Google Business Profile).

---

## Phase 1 — Hosting & deploy (get it on the internet)

- [ ] **[Owner]** Create a **Vercel** account with your GitHub (`sean4d`) login.
- [ ] **[Owner]** Vercel → **Add New → Project** → import
      `sean4d/southeast-roofing-website`. It auto-detects Next.js; no build
      settings to change.
- [ ] **[Owner]** Deploy. You'll get a `*.vercel.app` staging URL immediately.
      **Send me that URL** and I'll QA the whole site live.
- [ ] **[Claude]** Confirm the production build passes (`npm run build`).

## Phase 2 — Environment variables (Vercel → Settings → Environment Variables)

These make the site's features actually function. Add each and redeploy.

| Variable | Purpose | Who |
|----------|---------|-----|
| `NEXT_PUBLIC_SITE_URL` | Canonical domain = `https://southeastroofing.llc` | [Owner] |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Enables the `/studio` CMS (optional for launch) | [Together] |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | [Owner] |
| `LEAD_WEBHOOK_URL` | Sends every form lead to Roofr/Make (Phase 3a) | [Together] |
| `RESEND_API_KEY` | Emails every lead to the office (Phase 3b) | [Together] |
| `LEAD_NOTIFY_EMAIL` | Where leads email to (defaults to office@southeastroofing.llc) | [Owner] |
| `NEXT_PUBLIC_BOOKING_URL` | "Pick a time" button on the form thank-you screen (Phase 3c) | [Together] |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional — you're already DNS-verified, so this can stay blank | [Owner] |

> **How the forms behave:** every submission fans out to the webhook **and**
> the email. If neither is configured, the form intentionally tells the
> visitor to **call instead** — a lead never silently vanishes. So configure
> at least one of Phase 3a / 3b before launch.

## Phase 3 — Integrations (make the site do its job)

### 3a. Lead forms → Roofr CRM (webhook)
- [ ] **[Owner]** Check Roofr for a **direct lead-intake webhook or email**. If
      it has one, use that URL as `LEAD_WEBHOOK_URL` and skip the middleman.
- [ ] **[Owner]** Otherwise, create a free **Make.com** scenario: *Webhooks →
      Custom webhook* → copy the URL → add a **Roofr** (or Google Sheets/email)
      module after it.
- [ ] **[Together]** Paste the URL as `LEAD_WEBHOOK_URL`; I'll confirm the
      payload shape (flat JSON: name, phone, email, city, address, service,
      storm, message, source, page, submittedAt + commercial fields).
- [ ] **[Owner]** Submit a **test lead** from `/free-inspection` and confirm it
      lands in Roofr.

### 3b. Office email notifications (Resend)
- [ ] **[Owner]** Create a free **Resend** account (100 emails/day free).
- [ ] **[Owner]** **Verify the `southeastroofing.llc` domain** in Resend (add
      the DNS records it gives you). *Required* — leads are sent
      `from: leads@southeastroofing.llc`.
- [ ] **[Owner]** Create an API key → `RESEND_API_KEY`. Set `LEAD_NOTIFY_EMAIL`
      to the office inbox.
- [ ] **[Owner]** Submit a test lead; confirm the email arrives (check spam).

### 3c. Google Calendar booking button
- [ ] **[Owner]** Google Calendar → **Create → Appointment schedule** → set
      your free-inspection availability → copy the public booking link.
- [ ] **[Together]** Add it as `NEXT_PUBLIC_BOOKING_URL`; the "pick a time"
      button then appears on the form thank-you screen. (A Cal.com link works
      identically.)

### 3d. Already wired — just verify they work
- [ ] **[Owner]** Financing button → GoodLeap application (confirm the link
      opens your application).
- [ ] **[Owner]** "Get an Instant Estimate" → Roofr instant estimator.
- [ ] **[Owner]** Phone links dial (601) 549-3783; email links open
      office@southeastroofing.llc.

### 3e. Sanity CMS (optional for launch)
- [ ] **[Owner]** Only needed if you want to edit content without code. Create
      a Sanity project, add the project ID env var, set CORS origins. The site
      runs fully without it (content currently lives in code). See DEPLOYMENT.md §2.

## Phase 4 — Domain & go-live (the actual switch) ⚠️

> **Careful:** `southeastroofing.llc` currently points at your **old** site.
> Everything above can be done on the `*.vercel.app` URL with zero risk. Only
> do this phase when you've QA'd the new site and are ready to switch.

- [ ] **[Owner]** Vercel → project **Settings → Domains** → add
      `southeastroofing.llc` (primary) **and** `roofs.ms`.
- [ ] **[Owner]** Set `roofs.ms` to **Redirect (308) → southeastroofing.llc**
      (preserves your current redirect direction).
- [ ] **[Owner]** Update DNS at your registrar as Vercel instructs (A / CNAME
      records). SSL certificates provision automatically.
- [ ] **[Owner]** Confirm both `https://` load and `roofs.ms` redirects.
- [ ] **[Decision]** Pick a low-traffic time for the DNS switch; propagation
      can take a few hours.

## Phase 5 — SEO & analytics launch tasks

- [ ] **[Owner]** **Google Search Console** (already DNS-verified): after
      cutover, **submit the sitemap** `https://southeastroofing.llc/sitemap.xml`.
- [ ] **[Decision]** **Analytics** — the site has no analytics wired yet. Pick
      one and I'll add it: **Vercel Analytics** (one click, privacy-friendly),
      **Google Analytics 4** (most data, needs a measurement ID + arguably a
      cookie banner), or **Plausible** (simple, paid, no banner needed).
- [ ] **[Owner]** **Google Business Profile** → update the website link to the
      new site, then run [GBP-OPTIMIZATION.md](GBP-OPTIMIZATION.md).
- [ ] **[Owner]** Update the website link on **BBB, GAF, Yelp, MapQuest,
      Trustpilot, Facebook, Instagram, TikTok, Nextdoor** to the new URL.
- [ ] **[Owner]** (Optional) **Bing Webmaster Tools** — verify + submit sitemap.
- [ ] **[Claude]** Confirm `robots.txt` allows crawl (it does; only `/studio`
      is disallowed) and OG images render in the Facebook/LinkedIn/X debuggers.

## Phase 6 — Pre-launch QA (I can do most of this on the staging URL)

- [ ] **[Claude]** Submit **every form** end-to-end (free-inspection, contact,
      commercial, quote wizard) and confirm delivery + the thank-you screen.
- [ ] **[Claude]** Test all CTAs, phone/email/financing/estimate/booking links.
- [ ] **[Claude]** Mobile + desktop layout pass; check the 404 page.
- [ ] **[Claude]** Run Lighthouse (performance, accessibility, SEO, best
      practices) and fix what's reasonable.
- [ ] **[Claude]** Spot-check internal links for 404s; confirm legal pages
      (privacy, terms) are present and linked.
- [ ] **[Owner]** Read the homepage + a few key pages for anything that reads
      wrong to you as the owner.

## Phase 7 — Post-launch (first days/weeks)

- [ ] **[Owner]** Submit a real test lead through the live site.
- [ ] **[Owner]** Watch **Search Console** for coverage/indexing errors over
      the first 2–4 weeks; it takes Google time to crawl 100 pages.
- [ ] **[Decision]** If any **old-site URLs** had traffic/links, list them and
      I'll add **301 redirects** to the matching new pages so you don't lose
      that equity.
- [ ] **[Owner]** (Optional) Uptime monitoring (e.g. UptimeRobot, free) and a
      call-tracking number if you want to attribute phone leads.
- [ ] **[Owner]** Email deliverability: confirm **SPF/DKIM/DMARC** on
      southeastroofing.llc so lead emails (and your own) don't hit spam.

---

## Critical path (the minimum to launch and take leads)

1. Deploy to Vercel + set `NEXT_PUBLIC_SITE_URL` (Phase 1–2)
2. Wire **one** lead transport — Roofr webhook **or** Resend email (Phase 3a/3b)
3. QA on the staging URL (Phase 6)
4. Point the domain over (Phase 4)
5. Submit the sitemap in Search Console (Phase 5)

Everything else is enhancement you can add the same week. **The one thing only
you can start is creating the Vercel account and importing the repo** — send me
the staging URL the moment you have it and I'll drive the rest.
