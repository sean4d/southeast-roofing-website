import { siteConfig } from "@/config/site";

/**
 * Roof Assistant analysis layer — provider-abstracted so a real vision model
 * (Claude, OpenAI, Gemini) can be swapped in later WITHOUT touching the UI or
 * the API route. Today it returns an honest, topic-based triage (no photo is
 * actually analyzed yet); when a vision provider is connected, implement the
 * `RoofAnalysisProvider` interface and return it from `getProvider()`.
 *
 * Nothing here claims to have inspected the roof — the result is preliminary
 * guidance that routes the visitor to the right next step.
 */

export type RoofTopic =
  | "roof-leak"
  | "storm-damage"
  | "roof-replacement"
  | "metal-roof"
  | "commercial-roof"
  | "insurance-claim"
  | "maintenance"
  | "gutters"
  | "not-sure";

export type Urgency = "low" | "moderate" | "high";

export type CtaKind = "inspection" | "estimate" | "call" | "insurance" | "photos";

export interface AssistantCta {
  kind: CtaKind;
  label: string;
  href?: string;
}

export interface AssistantInput {
  topic: RoofTopic;
  description?: string;
  photoCount?: number;
}

export interface AssistantResult {
  headline: string;
  /** Hedged, honest — not a claim of inspection. */
  read: string;
  urgency: Urgency;
  urgencyNote: string;
  steps: string[];
  ctas: AssistantCta[];
}

interface TopicSpec {
  headline: string;
  read: string;
  urgency: Urgency;
  urgencyNote: string;
  steps: string[];
  ctaKinds: CtaKind[];
}

const TOPICS: Record<RoofTopic, TopicSpec> = {
  "roof-leak": {
    headline: "Let's track down that leak",
    read: "Active leaks in our area usually trace back to failed flashing, a dry-rotted pipe boot, or worn shingles — not always where the water shows up inside.",
    urgency: "high",
    urgencyNote: "Leaks spread fast into decking and drywall. The sooner it's found, the smaller the repair.",
    steps: [
      "Contain the water inside if you safely can (a bucket + move valuables).",
      "Book a free inspection so we can find the actual source, not just the stain.",
      "Save any photos — they help if a claim is involved.",
    ],
    ctaKinds: ["inspection", "call", "photos"],
  },
  "storm-damage": {
    headline: "Storm damage — let's protect you",
    read: "Wind and hail often cause damage that isn't obvious from the ground — lifted shingles, bruised mats, and cracked seals that leak later.",
    urgency: "high",
    urgencyNote: "Insurance has timelines. Documenting damage early protects both your roof and your claim.",
    steps: [
      "Photograph everything you can see, safely from the ground.",
      "Use our Insurance Claim Helper to plan your next step.",
      "Get a free inspection so the real damage is documented properly.",
    ],
    ctaKinds: ["insurance", "inspection", "call"],
  },
  "roof-replacement": {
    headline: "Planning a new roof",
    read: "A full replacement is the right call when repairs stop making sense — widespread wear, multiple leaks, or an aging roof past its years.",
    urgency: "moderate",
    urgencyNote: "No rush to decide today, but a free inspection tells you exactly where you stand.",
    steps: [
      "Get a free inspection and honest assessment of what you actually need.",
      "Try our instant estimate for a quick ballpark.",
      "We'll walk you through materials, colors, and financing options.",
    ],
    ctaKinds: ["inspection", "estimate"],
  },
  "metal-roof": {
    headline: "Metal roofing questions",
    read: "Metal is a great long-term option in Mississippi's heat and storms — standing seam or exposed-fastener, in a range of gauges and finishes.",
    urgency: "low",
    urgencyNote: "This is a considered purchase — take your time and get the facts.",
    steps: [
      "Get a free inspection and metal-roof consultation.",
      "Try our instant estimate for a ballpark.",
      "Compare panel types and colors with our team.",
    ],
    ctaKinds: ["inspection", "estimate"],
  },
  "commercial-roof": {
    headline: "Commercial roofing",
    read: "Flat and low-slope systems (TPO and more) need the right system and maintenance plan for the building and budget.",
    urgency: "moderate",
    urgencyNote: "Small commercial issues get expensive fast when water ponds or seams open.",
    steps: [
      "Request a commercial consultation and roof assessment.",
      "We'll scope the system, condition, and a maintenance plan.",
    ],
    ctaKinds: ["inspection", "call"],
  },
  "insurance-claim": {
    headline: "Insurance claim help",
    read: "Claims are confusing when you're dealing with a damaged roof — the key is accurate documentation and knowing your next step.",
    urgency: "moderate",
    urgencyNote: "Where you are in the process changes what you should do next.",
    steps: [
      "Use our Insurance Claim Helper to map your situation.",
      "Get a free inspection so the damage is fully documented.",
    ],
    ctaKinds: ["insurance", "inspection"],
  },
  maintenance: {
    headline: "Keeping your roof healthy",
    read: "A little upkeep adds years in the Pine Belt's heat, humidity, and pine straw — clearing debris, checking boots and flashing, keeping gutters flowing.",
    urgency: "low",
    urgencyNote: "Preventive care is the cheapest roofing you'll ever buy.",
    steps: [
      "Book a free inspection / tune-up so small issues stay small.",
      "Ask us about a simple maintenance routine for your roof.",
    ],
    ctaKinds: ["inspection", "estimate"],
  },
  gutters: {
    headline: "Gutters & drainage",
    read: "Good gutters protect your fascia, siding, and foundation — sizing, seamless runs, and guards all matter for how well water moves away.",
    urgency: "low",
    urgencyNote: "Overflowing or undersized gutters quietly rot wood and soak foundations.",
    steps: [
      "Get a free inspection and gutter assessment.",
      "Try our instant estimate for a ballpark.",
    ],
    ctaKinds: ["inspection", "estimate"],
  },
  "not-sure": {
    headline: "Let's figure it out together",
    read: "No problem — most folks aren't sure what's going on up there. The fastest way to real answers is a free set of eyes on it.",
    urgency: "moderate",
    urgencyNote: "A free inspection costs you nothing and gives you a straight answer.",
    steps: [
      "Book a free inspection — we'll tell you honestly what (if anything) needs doing.",
      "Or call and describe what you're seeing; we'll point you the right way.",
    ],
    ctaKinds: ["inspection", "call"],
  },
};

function buildCta(kind: CtaKind): AssistantCta {
  switch (kind) {
    case "inspection":
      return { kind, label: "Schedule free inspection", href: "/free-inspection" };
    case "estimate":
      return { kind, label: "Get instant estimate", href: siteConfig.links.instantEstimate };
    case "call":
      return { kind, label: `Call ${siteConfig.phone.display}`, href: `tel:${siteConfig.phone.tel}` };
    case "insurance":
      return { kind, label: "Insurance claim help", href: "/storm-damage/insurance-claims/wizard" };
    case "photos":
      return { kind, label: "Add more photos" };
  }
}

/* -------- provider abstraction (swap for a real vision model later) -------- */

interface RoofAnalysisProvider {
  analyze(input: AssistantInput): Promise<AssistantResult>;
}

const mockProvider: RoofAnalysisProvider = {
  async analyze(input) {
    const spec = TOPICS[input.topic] ?? TOPICS["not-sure"];
    return {
      headline: spec.headline,
      read: spec.read,
      urgency: spec.urgency,
      urgencyNote: spec.urgencyNote,
      steps: spec.steps,
      ctas: spec.ctaKinds.map(buildCta),
    };
  },
};

/**
 * Returns the active analysis provider. TODO(vision): when a vision model is
 * connected (e.g., ANTHROPIC_API_KEY / OPENAI_API_KEY), return a provider that
 * sends the uploaded photos + description to the model and maps its structured
 * output into AssistantResult. The UI + API route need no changes.
 */
function getProvider(): RoofAnalysisProvider {
  return mockProvider;
}

export async function analyzeRoof(input: AssistantInput): Promise<AssistantResult> {
  return getProvider().analyze(input);
}
