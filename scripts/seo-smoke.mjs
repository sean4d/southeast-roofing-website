#!/usr/bin/env node
/**
 * SEO smoke test — framework-free live checks of the SEO invariants that are
 * easy to regress and expensive to notice: canonical host, permanent legacy
 * redirects, sitemap hygiene, robots directives, per-page metadata, and the
 * single-business-entity JSON-LD graph.
 *
 * Usage:  node scripts/seo-smoke.mjs [BASE_URL]
 *         BASE_URL defaults to https://southeastroofing.llc
 *
 * Exits non-zero if any assertion fails. Intended for manual runs and CI —
 * NOT a replacement for a full crawler; it samples representative routes.
 */

const BASE = (process.argv[2] || "https://southeastroofing.llc").replace(
  /\/$/,
  "",
);
let pass = 0;
let fail = 0;
const log = (ok, msg) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${msg}`);
  ok ? pass++ : fail++;
};

async function head(url) {
  const res = await fetch(url, { redirect: "manual" });
  return { status: res.status, location: res.headers.get("location"), res };
}
async function body(url) {
  const res = await fetch(url, { redirect: "follow" });
  return { status: res.status, text: await res.text(), url: res.url };
}

// 1. Legacy redirects — permanent (308) to the expected apex destination, 1 hop.
const REDIRECTS = [
  ["/emergency-roof-services", "/storm-damage/emergency-roofing"],
  ["/roof-inspections", "/free-inspection"],
  ["/booking-form", "/free-inspection"],
  ["/commerical-roofing", "/commercial"],
  ["/copy-of-roof-repairs", "/residential/roof-repair"],
  ["/copy-of-insurance-solutions", "/storm-damage/insurance-claims"],
  ["/oceansprings-services", "/service-areas/ocean-springs"],
];
async function checkRedirects() {
  for (const [from, to] of REDIRECTS) {
    const { status, location } = await head(BASE + from);
    const dest = location ? new URL(location, BASE).pathname : "";
    log(
      (status === 308 || status === 301) && dest === to,
      `redirect ${from} -> ${status} ${dest} (expected 308 ${to})`,
    );
  }
}

// 2. Canonical host: www must permanently redirect to the apex, path preserved.
async function checkCanonicalHost() {
  const apex = new URL(BASE).host;
  const www = `https://www.${apex}/residential/roof-repair?x=1`;
  const { status, location } = await head(www);
  log(
    (status === 308 || status === 301) &&
      location === `${BASE}/residential/roof-repair?x=1`,
    `www host -> ${status} ${location} (expected permanent, path+query preserved)`,
  );
}

// 3. robots.txt: references sitemap, blocks owner tools, allows the rest.
async function checkRobots() {
  const { status, text } = await body(`${BASE}/robots.txt`);
  log(status === 200, `robots.txt 200`);
  log(
    text.includes(`Sitemap: ${BASE}/sitemap.xml`),
    `robots references sitemap`,
  );
  log(/Disallow:\s*\/studio/.test(text), `robots disallows /studio`);
  log(/Disallow:\s*\/upload/.test(text), `robots disallows /upload`);
  log(/Allow:\s*\//.test(text), `robots allows public content`);
}

// 4. Sitemap: every <loc> is the canonical host and returns 200 (samples).
async function checkSitemap() {
  const { status, text } = await body(`${BASE}/sitemap.xml`);
  log(status === 200, `sitemap.xml 200`);
  const locs = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  log(locs.length > 0, `sitemap has ${locs.length} URLs`);
  log(
    locs.every((u) => u.startsWith(BASE + "/") || u === BASE),
    `all sitemap URLs use canonical host`,
  );
  // Sample 5 evenly spaced entries and confirm 200 with no redirect.
  const sample = locs.filter((_, i) => i % Math.ceil(locs.length / 5) === 0);
  for (const u of sample) {
    const { status: s } = await head(u);
    log(
      s === 200,
      `sitemap URL 200 (no redirect): ${u.replace(BASE, "") || "/"} -> ${s}`,
    );
  }
}

// 5. Page metadata + single-entity JSON-LD on a representative service page.
async function checkPage() {
  const url = `${BASE}/residential/roof-repair`;
  const { status, text } = await body(url);
  log(status === 200, `service page 200`);
  const canonical = (text.match(/<link rel="canonical" href="([^"]+)"/) ||
    [])[1];
  log(canonical === url, `self-referencing canonical (${canonical})`);
  log(
    (text.match(/<title>[^<]+<\/title>/) || []).length === 1,
    `has one <title>`,
  );
  log((text.match(/<h1[\s>]/g) || []).length === 1, `exactly one <h1>`);
  log(
    !/<meta name="robots"[^>]*noindex/i.test(text),
    `no accidental noindex meta`,
  );

  const blocks = [
    ...text.matchAll(
      /<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g,
    ),
  ].map((m) => m[1]);
  let orgCount = 0;
  let orgId = "";
  let parseOk = true;
  for (const b of blocks) {
    try {
      const nodes = [].concat(JSON.parse(b));
      for (const n of nodes) {
        const t = String(n["@type"]);
        if (/RoofingContractor|LocalBusiness/.test(t)) {
          orgCount++;
          orgId = n["@id"] || "";
        }
      }
    } catch {
      parseOk = false;
    }
  }
  log(parseOk, `all JSON-LD blocks parse`);
  log(
    orgCount === 1,
    `exactly one business entity in JSON-LD (found ${orgCount})`,
  );
  log(
    /#organization$/.test(orgId),
    `business entity uses stable @id (${orgId})`,
  );
}

const run = async () => {
  console.log(`SEO smoke test against ${BASE}\n`);
  await checkRedirects();
  await checkCanonicalHost();
  await checkRobots();
  await checkSitemap();
  await checkPage();
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
};
run().catch((e) => {
  console.error("smoke test error:", e);
  process.exit(2);
});
