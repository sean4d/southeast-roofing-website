/**
 * Data for the interactive Exploded Roof System diagram (tool #4). Ordered top
 * of the roof downward, like a cross-section. Plain homeowner language: what it
 * is, why it matters, and what goes wrong when it's skipped or done badly.
 * `photo` uses a real Southeast Roofing install shot where we have one.
 * EDIT HERE to adjust copy or add components.
 */

export interface RoofPart {
  key: string;
  name: string;
  /** One-line summary shown on the layer itself. */
  short: string;
  what: string;
  why: string;
  bad: string;
  /** Optional real install photo. */
  photo?: string;
}

export const ROOF_PARTS: RoofPart[] = [
  {
    key: "ridge-cap",
    name: "Ridge Cap",
    short: "Caps the peak",
    what: "Thicker, pre-bent shingles that cover the very peak where two roof slopes meet.",
    why: "It seals the most exposed line on your roof and finishes it off cleanly.",
    bad: "Cutting up regular 3-tab shingles as 'ridge cap' (a common shortcut) cracks and leaks years early.",
  },
  {
    key: "ridge-vent",
    name: "Ridge Vent",
    short: "Lets hot air escape",
    what: "A vent that runs along the peak so hot, humid attic air can escape.",
    why: "Proper venting keeps your attic cooler, lowers cooling bills, and helps shingles last their full life.",
    bad: "A sealed-up or under-vented roof bakes the shingles from below and grows moisture and mold in the attic.",
  },
  {
    key: "field-shingles",
    name: "Shingles",
    short: "The surface you see",
    what: "The main field of shingles — the visible, weather-facing layer of the roof.",
    why: "This is your roof's first defense against rain, wind, hail, and sun.",
    bad: "Hand-nailing high or into the wrong zone lets wind peel shingles off in the first big storm.",
    photo: "/images/projects/gaf-timberline-hdz-pewter-gray-hattiesburg-ms-001.webp",
  },
  {
    key: "starter-shingles",
    name: "Starter Shingles",
    short: "Seals the edges",
    what: "A special first course along the eaves and rakes with a factory sealant strip.",
    why: "It bonds the first row down so wind can't get under your shingles at the edges.",
    bad: "Skipping real starter (or flipping regular shingles backward) is a top cause of edge blow-offs.",
  },
  {
    key: "ice-water-shield",
    name: "Ice & Water Shield",
    short: "Leak barrier at weak points",
    what: "A peel-and-stick waterproof membrane at eaves, valleys, and around penetrations.",
    why: "It self-seals around nails and stops wind-driven rain in the spots most likely to leak.",
    bad: "Leaving it out of valleys and around pipes invites slow, hidden leaks that rot the deck.",
    photo: "/images/projects/roof-felt-ice-water-shield-waynesboro-ms.webp",
  },
  {
    key: "underlayment",
    name: "Synthetic Underlayment",
    short: "Second layer of defense",
    what: "A tough synthetic sheet rolled over the whole deck, under the shingles.",
    why: "It's a backup water barrier and protects the deck during and after install.",
    bad: "Old felt paper tears and wrinkles; a torn or wrinkled underlayment telegraphs through and traps water.",
    photo: "/images/projects/roof-synthetic-felt-gulfport-ms.webp",
  },
  {
    key: "decking",
    name: "Roof Decking",
    short: "The wood foundation",
    what: "The plywood or OSB sheathing nailed to your rafters — the surface everything else attaches to.",
    why: "Solid decking holds nails tight and gives the roof its strength and flat surface.",
    bad: "Roofing over soft, rotted, or delaminated decking means nails don't hold — and it will fail early.",
    photo: "/images/projects/roof-tear-off-decking-hattiesburg-ms.webp",
  },
  {
    key: "drip-edge",
    name: "Drip Edge",
    short: "Protects the roof edges",
    what: "A metal edging along the eaves and rakes that directs water off the roof and into the gutters.",
    why: "It keeps water from wicking back under the roof and rotting the fascia and deck edges.",
    bad: "No drip edge (or the wrong overlap) lets water curl behind the gutter and rot the wood.",
  },
  {
    key: "flashing",
    name: "Flashing",
    short: "Seals against walls & chimneys",
    what: "Metal pieces that seal where the roof meets walls, chimneys, and dormers.",
    why: "These transitions are the #1 leak areas — flashing bridges them watertight.",
    bad: "Caulk smeared over old flashing instead of replacing it fails fast and leaks behind the wall.",
  },
  {
    key: "valleys",
    name: "Valleys",
    short: "Where two slopes meet",
    what: "The channels where two roof planes join and funnel a lot of water.",
    why: "Done right (with membrane and proper technique) valleys move heavy water without leaking.",
    bad: "A weak or improperly woven valley is a fast path to leaks because so much water runs through it.",
  },
  {
    key: "pipe-boots",
    name: "Pipe Boots",
    short: "Seals roof penetrations",
    what: "Rubber-and-metal collars that seal around plumbing vent pipes.",
    why: "They keep water out where pipes pass through the roof.",
    bad: "Cheap rubber boots dry-rot and crack in a few Mississippi summers — a very common leak we find.",
    photo: "/images/storm/dry-rotted-pipe-boot-hattiesburg-ms.webp",
  },
  {
    key: "gutters",
    name: "Gutters",
    short: "Carry water away",
    what: "Channels along the eaves that collect roof runoff and route it away from your foundation.",
    why: "They protect your fascia, siding, landscaping, and foundation from constant water.",
    bad: "Undersized or clogged gutters overflow and rot the fascia and soak the foundation.",
  },
  {
    key: "soffit-fascia",
    name: "Soffit & Fascia",
    short: "The roof's trim & intake vents",
    what: "The boards under the eave (fascia) and the vented underside (soffit) that let fresh air into the attic.",
    why: "Soffit vents feed the airflow that the ridge vent exhausts — together they keep the attic healthy.",
    bad: "Rotted fascia or painted-over soffit vents choke airflow and let pests and water in.",
    photo: "/images/storm/rotted-soffit-hattiesburg-ms.webp",
  },
];
