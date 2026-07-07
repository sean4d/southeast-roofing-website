import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/services/breadcrumbs";
import { CTASection } from "@/components/tools/cta-section";

import { ColorVisualizer } from "./visualizer";

/**
 * Roof Color Visualizer (tool #3). Data-driven swatches (config/roof-colors.ts)
 * that show a real Southeast Roofing photo when we have one for that product +
 * color. Educates and routes to a free inspection / local projects.
 */

export const metadata: Metadata = buildMetadata({
  title: "Roof Color Visualizer — GAF & Owens Corning Shingles",
  description:
    "Preview shingle and metal roof colors — GAF Timberline HDZ, Owens Corning Duration, and more — and see real Southeast Roofing roofs in those colors across South Mississippi.",
  path: "/roof-color-visualizer",
  titleAbsolute: true,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Roof Color Visualizer", path: "/roof-color-visualizer" },
];

export default function RoofColorVisualizerPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="border-b border-border bg-secondary">
        <div className="container-site py-12 sm:py-16">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-6 max-w-2xl font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Roof Color Visualizer
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Explore shingle and metal roof colors, and — where we&apos;ve installed it —
            see the real roof on a South Mississippi home. Find a color you love, then
            book a free inspection to see a physical sample.
          </p>
        </div>
      </section>

      <section className="container-site py-12 sm:py-16">
        <ColorVisualizer />
      </section>

      <CTASection
        source="color-visualizer"
        heading="Found your color?"
        subtext="Book a free inspection and we'll bring physical samples and show you real roofs nearby."
      />
    </>
  );
}
