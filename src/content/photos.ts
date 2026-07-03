/**
 * Typed manifest of real Southeast Roofing photography supplied by the owner
 * (2026-07-03 asset pack). Alt text and city attribution come from the
 * owner's photo manifest. Long-term these migrate into Sanity as project
 * documents; until then this file is the single source for gallery/hero use.
 */

export interface ProjectPhoto {
  src: string;
  city: string;
  citySlug: string;
  alt: string;
}

export type StormCategory =
  | "hail-damage"
  | "wind-damage"
  | "missing-shingles"
  | "tree-damage"
  | "emergency-tarp"
  | "storm-damage";

export interface StormPhoto {
  src: string;
  category: StormCategory;
  alt: string;
}

export const projectPhotos: ProjectPhoto[] = [
  {
    src: "/images/projects/residential-roof-replacement-biloxi-ms-001.webp",
    city: "Biloxi",
    citySlug: "biloxi",
    alt: "Residential roof replacement completed by Southeast Roofing in Biloxi, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-biloxi-ms-002.webp",
    city: "Biloxi",
    citySlug: "biloxi",
    alt: "Residential roof replacement completed by Southeast Roofing in Biloxi, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-biloxi-ms-003.webp",
    city: "Biloxi",
    citySlug: "biloxi",
    alt: "Residential roof replacement completed by Southeast Roofing in Biloxi, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-biloxi-ms-004.webp",
    city: "Biloxi",
    citySlug: "biloxi",
    alt: "Residential roof replacement completed by Southeast Roofing in Biloxi, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-biloxi-ms-005.webp",
    city: "Biloxi",
    citySlug: "biloxi",
    alt: "Residential roof replacement completed by Southeast Roofing in Biloxi, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-columbia-ms-001.webp",
    city: "Columbia",
    citySlug: "columbia",
    alt: "Residential roof replacement completed by Southeast Roofing in Columbia, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-columbia-ms-002.webp",
    city: "Columbia",
    citySlug: "columbia",
    alt: "Residential roof replacement completed by Southeast Roofing in Columbia, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-columbia-ms-003.webp",
    city: "Columbia",
    citySlug: "columbia",
    alt: "Residential roof replacement completed by Southeast Roofing in Columbia, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-gulfport-ms-001.webp",
    city: "Gulfport",
    citySlug: "gulfport",
    alt: "Residential roof replacement completed by Southeast Roofing in Gulfport, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-gulfport-ms-002.webp",
    city: "Gulfport",
    citySlug: "gulfport",
    alt: "Residential roof replacement completed by Southeast Roofing in Gulfport, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-gulfport-ms-003.webp",
    city: "Gulfport",
    citySlug: "gulfport",
    alt: "Residential roof replacement completed by Southeast Roofing in Gulfport, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-hattiesburg-ms-001.webp",
    city: "Hattiesburg",
    citySlug: "hattiesburg",
    alt: "Residential roof replacement completed by Southeast Roofing in Hattiesburg, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-hattiesburg-ms-002.webp",
    city: "Hattiesburg",
    citySlug: "hattiesburg",
    alt: "Residential roof replacement completed by Southeast Roofing in Hattiesburg, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-hattiesburg-ms-003.webp",
    city: "Hattiesburg",
    citySlug: "hattiesburg",
    alt: "Residential roof replacement completed by Southeast Roofing in Hattiesburg, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-hattiesburg-ms-004.webp",
    city: "Hattiesburg",
    citySlug: "hattiesburg",
    alt: "Residential roof replacement completed by Southeast Roofing in Hattiesburg, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-hattiesburg-ms-005.webp",
    city: "Hattiesburg",
    citySlug: "hattiesburg",
    alt: "Residential roof replacement completed by Southeast Roofing in Hattiesburg, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-hattiesburg-ms-006.webp",
    city: "Hattiesburg",
    citySlug: "hattiesburg",
    alt: "Residential roof replacement completed by Southeast Roofing in Hattiesburg, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-hattiesburg-ms-007.webp",
    city: "Hattiesburg",
    citySlug: "hattiesburg",
    alt: "Residential roof replacement completed by Southeast Roofing in Hattiesburg, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-jackson-ms-001.webp",
    city: "Jackson",
    citySlug: "jackson",
    alt: "Residential roof replacement completed by Southeast Roofing in Jackson, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-jackson-ms-002.webp",
    city: "Jackson",
    citySlug: "jackson",
    alt: "Residential roof replacement completed by Southeast Roofing in Jackson, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-jackson-ms-003.jpg",
    city: "Jackson",
    citySlug: "jackson",
    alt: "Residential roof replacement completed by Southeast Roofing in Jackson, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-laurel-ms-001.webp",
    city: "Laurel",
    citySlug: "laurel",
    alt: "Residential roof replacement completed by Southeast Roofing in Laurel, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-laurel-ms-002.jpg",
    city: "Laurel",
    citySlug: "laurel",
    alt: "Residential roof replacement completed by Southeast Roofing in Laurel, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-laurel-ms-003.jpg",
    city: "Laurel",
    citySlug: "laurel",
    alt: "Residential roof replacement completed by Southeast Roofing in Laurel, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-meridian-ms-001.webp",
    city: "Meridian",
    citySlug: "meridian",
    alt: "Residential roof replacement completed by Southeast Roofing in Meridian, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-meridian-ms-002.webp",
    city: "Meridian",
    citySlug: "meridian",
    alt: "Residential roof replacement completed by Southeast Roofing in Meridian, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-ocean-springs-ms-001.webp",
    city: "Ocean Springs",
    citySlug: "ocean-springs",
    alt: "Residential roof replacement completed by Southeast Roofing in Ocean Springs, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-ocean-springs-ms-002.webp",
    city: "Ocean Springs",
    citySlug: "ocean-springs",
    alt: "Residential roof replacement completed by Southeast Roofing in Ocean Springs, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-petal-ms-001.webp",
    city: "Petal",
    citySlug: "petal",
    alt: "Residential roof replacement completed by Southeast Roofing in Petal, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-petal-ms-002.webp",
    city: "Petal",
    citySlug: "petal",
    alt: "Residential roof replacement completed by Southeast Roofing in Petal, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-petal-ms-003.webp",
    city: "Petal",
    citySlug: "petal",
    alt: "Residential roof replacement completed by Southeast Roofing in Petal, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-petal-ms-004.webp",
    city: "Petal",
    citySlug: "petal",
    alt: "Residential roof replacement completed by Southeast Roofing in Petal, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-petal-ms-005.webp",
    city: "Petal",
    citySlug: "petal",
    alt: "Residential roof replacement completed by Southeast Roofing in Petal, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-picayune-ms-001.jpg",
    city: "Picayune",
    citySlug: "picayune",
    alt: "Residential roof replacement completed by Southeast Roofing in Picayune, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-picayune-ms-002.jpg",
    city: "Picayune",
    citySlug: "picayune",
    alt: "Residential roof replacement completed by Southeast Roofing in Picayune, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-picayune-ms-003.jpg",
    city: "Picayune",
    citySlug: "picayune",
    alt: "Residential roof replacement completed by Southeast Roofing in Picayune, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-poplarville-ms-001.jpg",
    city: "Poplarville",
    citySlug: "poplarville",
    alt: "Residential roof replacement completed by Southeast Roofing in Poplarville, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-poplarville-ms-002.webp",
    city: "Poplarville",
    citySlug: "poplarville",
    alt: "Residential roof replacement completed by Southeast Roofing in Poplarville, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-purvis-ms-001.webp",
    city: "Purvis",
    citySlug: "purvis",
    alt: "Residential roof replacement completed by Southeast Roofing in Purvis, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-purvis-ms-002.webp",
    city: "Purvis",
    citySlug: "purvis",
    alt: "Residential roof replacement completed by Southeast Roofing in Purvis, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-purvis-ms-003.webp",
    city: "Purvis",
    citySlug: "purvis",
    alt: "Residential roof replacement completed by Southeast Roofing in Purvis, Mississippi.",
  },
  {
    src: "/images/projects/residential-roof-replacement-sumrall-ms-001.webp",
    city: "Sumrall",
    citySlug: "sumrall",
    alt: "Residential roof replacement completed by Southeast Roofing in Sumrall, Mississippi.",
  },
];

export const stormPhotos: StormPhoto[] = [
  {
    src: "/images/storm/emergency-tarp-roof-inspection-south-mississippi-005.webp",
    category: "emergency-tarp",
    alt: "Emergency roof tarping after storm damage in South Mississippi.",
  },
  {
    src: "/images/storm/emergency-tarp-roof-inspection-south-mississippi-011.webp",
    category: "emergency-tarp",
    alt: "Emergency roof tarping after storm damage in South Mississippi.",
  },
  {
    src: "/images/storm/emergency-tarp-roof-inspection-south-mississippi-017.webp",
    category: "emergency-tarp",
    alt: "Emergency roof tarping after storm damage in South Mississippi.",
  },
  {
    src: "/images/storm/emergency-tarp-roof-inspection-south-mississippi-023.jpg",
    category: "emergency-tarp",
    alt: "Emergency roof tarping after storm damage in South Mississippi.",
  },
  {
    src: "/images/storm/hail-damage-roof-inspection-south-mississippi-001.webp",
    category: "hail-damage",
    alt: "Hail damage on a shingle roof in South Mississippi.",
  },
  {
    src: "/images/storm/hail-damage-roof-inspection-south-mississippi-007.webp",
    category: "hail-damage",
    alt: "Hail damage on a shingle roof in South Mississippi.",
  },
  {
    src: "/images/storm/hail-damage-roof-inspection-south-mississippi-013.webp",
    category: "hail-damage",
    alt: "Hail damage on a shingle roof in South Mississippi.",
  },
  {
    src: "/images/storm/hail-damage-roof-inspection-south-mississippi-019.webp",
    category: "hail-damage",
    alt: "Hail damage on a shingle roof in South Mississippi.",
  },
  {
    src: "/images/storm/missing-shingles-roof-inspection-south-mississippi-003.webp",
    category: "missing-shingles",
    alt: "Missing shingles on a storm-damaged roof in South Mississippi.",
  },
  {
    src: "/images/storm/missing-shingles-roof-inspection-south-mississippi-009.webp",
    category: "missing-shingles",
    alt: "Missing shingles on a storm-damaged roof in South Mississippi.",
  },
  {
    src: "/images/storm/missing-shingles-roof-inspection-south-mississippi-015.webp",
    category: "missing-shingles",
    alt: "Missing shingles on a storm-damaged roof in South Mississippi.",
  },
  {
    src: "/images/storm/missing-shingles-roof-inspection-south-mississippi-021.jpeg",
    category: "missing-shingles",
    alt: "Missing shingles on a storm-damaged roof in South Mississippi.",
  },
  {
    src: "/images/storm/storm-damage-roof-inspection-south-mississippi-006.webp",
    category: "storm-damage",
    alt: "Storm damage on a residential roof in South Mississippi.",
  },
  {
    src: "/images/storm/storm-damage-roof-inspection-south-mississippi-012.webp",
    category: "storm-damage",
    alt: "Storm damage on a residential roof in South Mississippi.",
  },
  {
    src: "/images/storm/storm-damage-roof-inspection-south-mississippi-018.webp",
    category: "storm-damage",
    alt: "Storm damage on a residential roof in South Mississippi.",
  },
  {
    src: "/images/storm/storm-damage-roof-inspection-south-mississippi-024.png",
    category: "storm-damage",
    alt: "Storm damage on a residential roof in South Mississippi.",
  },
  {
    src: "/images/storm/tree-damage-roof-inspection-south-mississippi-004.webp",
    category: "tree-damage",
    alt: "Tree damage on a roof after a storm in South Mississippi.",
  },
  {
    src: "/images/storm/tree-damage-roof-inspection-south-mississippi-010.webp",
    category: "tree-damage",
    alt: "Tree damage on a roof after a storm in South Mississippi.",
  },
  {
    src: "/images/storm/tree-damage-roof-inspection-south-mississippi-016.webp",
    category: "tree-damage",
    alt: "Tree damage on a roof after a storm in South Mississippi.",
  },
  {
    src: "/images/storm/tree-damage-roof-inspection-south-mississippi-022.jpeg",
    category: "tree-damage",
    alt: "Tree damage on a roof after a storm in South Mississippi.",
  },
  {
    src: "/images/storm/wind-damage-roof-inspection-south-mississippi-002.webp",
    category: "wind-damage",
    alt: "Wind damage on a residential roof in South Mississippi.",
  },
  {
    src: "/images/storm/wind-damage-roof-inspection-south-mississippi-008.webp",
    category: "wind-damage",
    alt: "Wind damage on a residential roof in South Mississippi.",
  },
  {
    src: "/images/storm/wind-damage-roof-inspection-south-mississippi-014.webp",
    category: "wind-damage",
    alt: "Wind damage on a residential roof in South Mississippi.",
  },
  {
    src: "/images/storm/wind-damage-roof-inspection-south-mississippi-020.webp",
    category: "wind-damage",
    alt: "Wind damage on a residential roof in South Mississippi.",
  },
];
