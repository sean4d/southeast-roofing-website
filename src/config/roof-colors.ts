/**
 * Data-driven config for the Roof Color Visualizer. EDIT HERE to add products
 * or colors. Hexes are close approximations for the swatches; where we have a
 * real Southeast Roofing photo of that product + color, the visualizer shows
 * the real roof instead of a swatch (cross-referenced from content/photos.ts by
 * manufacturer + line + color name — so color names must match those there).
 */

export interface RoofColor {
  name: string;
  hex: string;
}

export interface RoofProduct {
  key: string;
  label: string;
  material: "shingle" | "metal";
  /** For cross-referencing real project photos (shingles). */
  manufacturer?: "GAF" | "Owens Corning";
  line?: string;
  colors: RoofColor[];
}

export const ROOF_PRODUCTS: RoofProduct[] = [
  {
    key: "gaf-hdz",
    label: "GAF Timberline HDZ",
    material: "shingle",
    manufacturer: "GAF",
    line: "Timberline HDZ",
    colors: [
      { name: "Pewter Gray", hex: "#71767b" },
      { name: "Charcoal", hex: "#35383b" },
      { name: "Slate", hex: "#565c62" },
      { name: "Barkwood", hex: "#574636" },
      { name: "Hickory", hex: "#7c6a51" },
      { name: "Birchwood", hex: "#9f8e76" },
      { name: "Shakewood", hex: "#8f7a5e" },
      { name: "Weathered Wood", hex: "#6c665b" },
      { name: "Williamsburg Gray", hex: "#6a7075" },
    ],
  },
  {
    key: "gaf-ns",
    label: "GAF Timberline Natural Shadow",
    material: "shingle",
    manufacturer: "GAF",
    line: "Timberline Natural Shadow",
    colors: [
      { name: "Slate", hex: "#565c62" },
      { name: "Shakewood", hex: "#8f7a5e" },
      { name: "Hickory", hex: "#7c6a51" },
    ],
  },
  {
    key: "oc-duration",
    label: "Owens Corning Duration",
    material: "shingle",
    manufacturer: "Owens Corning",
    line: "Duration",
    colors: [
      { name: "Driftwood", hex: "#8a7d6b" },
      { name: "Onyx Black", hex: "#1c1c1e" },
      { name: "Estate Gray", hex: "#595d61" },
      { name: "Teak", hex: "#6f5334" },
      { name: "Desert Rose", hex: "#9a6a5f" },
      { name: "Brownwood", hex: "#5f4d3a" },
    ],
  },
  {
    key: "oc-oakridge",
    label: "Owens Corning Oakridge",
    material: "shingle",
    manufacturer: "Owens Corning",
    line: "Oakridge",
    colors: [
      { name: "Driftwood", hex: "#8a7d6b" },
      { name: "Onyx Black", hex: "#1c1c1e" },
      { name: "Estate Gray", hex: "#595d61" },
      { name: "Brownwood", hex: "#5f4d3a" },
    ],
  },
  {
    key: "oc-supreme",
    label: "Owens Corning Supreme",
    material: "shingle",
    manufacturer: "Owens Corning",
    line: "Supreme",
    colors: [
      { name: "Onyx Black", hex: "#1c1c1e" },
      { name: "Driftwood", hex: "#8a7d6b" },
    ],
  },
  {
    key: "metal",
    label: "Metal Roofing",
    material: "metal",
    colors: [
      { name: "Galvalume", hex: "#c2c6ca" },
      { name: "Burnished Slate", hex: "#4a4238" },
      { name: "Charcoal", hex: "#3a3d40" },
      { name: "Burgundy", hex: "#6b2a35" },
    ],
  },
];
