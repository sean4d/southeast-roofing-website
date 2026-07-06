# DNS Cutover Runbook — southeastroofing.llc → Vercel

Captured from live DNS on 2026-07-05. This moves the website from Wix to the
new Vercel site **while keeping your Google Workspace email working**.

## The setup today
- **Registrar (change nameservers here):** GoDaddy
- **DNS today:** Wix (`ns8.wixdns.net`, `ns9.wixdns.net`)
- **Email:** Google Workspace (billed via Squarespace — that billing is
  unaffected by any DNS change)
- **Website:** Wix

## 🥇 THE GOLDEN RULE
**Add every record below into Vercel's DNS FIRST. Change the nameservers at
GoDaddy LAST.** Your current site and email stay fully live until the
nameserver switch, and email keeps working after it because we carry these
records with us.

> **Best practice for exact values:** copy each record's value straight from
> your **current Wix DNS panel** (Wix dashboard → your domain → DNS records)
> or, for the email ones, from **Google Admin** (admin.google.com). The values
> below are what your live DNS returns and serve as your master checklist —
> but copy/paste beats hand-typing, especially the long DKIM key.

---

## Records to recreate in Vercel DNS (master checklist)

### ✉️ Email — Google Workspace (CRITICAL — do not skip any)

| Type | Host/Name | Value | Priority |
|------|-----------|-------|----------|
| MX | `@` | `aspmx.l.google.com` | 10 |
| MX | `@` | `alt1.aspmx.l.google.com` | 20 |
| MX | `@` | `alt2.aspmx.l.google.com` | 30 |
| MX | `@` | `alt3.aspmx.l.google.com` | 40 |
| MX | `@` | `alt4.aspmx.l.google.com` | 50 |
| TXT | `@` | `v=spf1 include:_spf.google.com ~all` | — |
| TXT | `google._domainkey` | `v=DKIM1; k=rsa; p=…` *(long key — copy from Wix/Google Admin)* | — |
| TXT | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:office@southeastroofing.llc` | — |

*(The DKIM key, for reference — verify against your source before saving:)*
```
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyQx6iiMgc3tAiyNH93kYIORG93PH7JrL772UlzZnKbO9n7xbADMFaa25CfRMce5ge7EPVgcLujZ3SQ7aRL/A4itzehnuLDMN0u4lRFyUyaeu8uTofmLZbIZm+1h0vKTlILVVZTW6aXnKRldn1kVl8LSQqNt26X+6eHlN/yOXGYKx8sRa0o2BnUkagI6aG01cw050Agp9TkQRFCHLai4YR1c7Y7NNujO6llgbfPijyp3vSK6F+tiAqx9y1Om1FQIZp+Hmf+6QTp7cl7yNB+aTxRwj8U3pkp0rOKdItNwdv19LF8mN7acWMSgaS02HxPoQzki2qaH/8stvruodAW0CAQIDAQAB
```

### 🔎 Verifications (keep both — dropping them un-verifies you)

| Type | Host | Value |
|------|------|-------|
| TXT | `@` | `google-site-verification=oyjw4XFRxpP_NW5r5SIyzHQ-Xg7cAvwCSTe6XLQXMxo` |
| TXT | `@` | `apple-domain-verification=_encomKE8_3ipJffIKgmtWIWmPQdF3A5TsWg6d21b5o` |

### 🌐 Website → Vercel
When you connect the domain to your Vercel project using **Vercel
nameservers**, Vercel **auto-creates and maintains** the website records (apex
`A` + `www`) and the SSL certificate. Nothing to add by hand — just confirm
they appear.

### 📧 Resend (add AFTER cutover — see Step 8)
Once DNS is on Vercel, Resend's setup records (DKIM, SPF, and the `send`
subdomain MX) can finally be added — the Wix limitation is gone. Grab them from
Resend's domain page at that point.

---

## Step-by-step

**Step 1 — Add the domain in Vercel**
- In the Add Domains dialog: **uncheck "Redirect apex domains to www"** (your
  site is built on the bare `southeastroofing.llc`). Connect to **Production**.
- Add `southeastroofing.llc`.

**Step 2 — Choose the nameserver method**
- Vercel will offer "Change your nameservers" (recommended) vs. "add A/CNAME."
  Choose **nameservers** — that's what gives us full DNS control (and unblocks
  Resend). Vercel shows you **2 nameservers** (e.g. `ns1.vercel-dns.com`,
  `ns2.vercel-dns.com`). Keep that tab open.

**Step 3 — Pre-load ALL the records above into Vercel's DNS**
- In Vercel → your project → **Domains → southeastroofing.llc → DNS Records**,
  add every Email + Verification record from the checklist. Double-check the
  five MX priorities and the DKIM value.

**Step 4 — Confirm the website records exist**
- Verify Vercel shows the apex + `www` website records pointing to your
  project. (It adds these automatically.)

**Step 5 — Flip the nameservers at GoDaddy (the actual switch)**
- Log in to **GoDaddy → your domain → Nameservers → Change**.
- Replace `ns8.wixdns.net` / `ns9.wixdns.net` with the **two Vercel
  nameservers** from Step 2. Save.

**Step 6 — Wait for propagation**
- Usually 15–60 minutes; can take a few hours. Vercel's Domains page will flip
  to **"Valid Configuration"** when it sees the change.

**Step 7 — Verify (do all three)**
- ✅ **Website:** `https://southeastroofing.llc` loads the new site with a
  padlock (SSL).
- ✅ **Email — receive:** send yourself an email to `office@southeastroofing.llc`
  and confirm it arrives.
- ✅ **Email — send:** send an email *from* `office@southeastroofing.llc` and
  confirm it goes out.

**Step 8 — Finish Resend + Roofr**
- Now add Resend's DNS records (they'll verify since we're off Wix), then
  complete the free Email-Parser → Roofr lead pipeline.

**Step 9 — roofs.ms redirect**
- Add `roofs.ms` to the same Vercel project as a **redirect** to
  `southeastroofing.llc` (preserves your existing redirect direction).

---

## 🔙 Rollback (if anything looks wrong)
Changing nameservers is fully reversible. To revert, set GoDaddy's nameservers
back to `ns8.wixdns.net` and `ns9.wixdns.net` — within an hour you're back on
Wix exactly as before. Nothing is deleted on Wix during this process.

## ⏱️ When to do it
Give yourself ~30 focused minutes. Lowest-stress window is off-hours, since
propagation is fastest when traffic and email volume are low.
