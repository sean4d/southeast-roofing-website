import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, HardHat } from "lucide-react";

import { primaryCta } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { webSiteSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { PhoneLink } from "@/components/shared/phone-link";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} — Roofing Contractor in Hattiesburg, MS`,
  description:
    "Premium residential and commercial roofing across South Mississippi. Roof replacement, repair, metal roofing, storm damage, and insurance claim help — based in Hattiesburg, MS.",
  path: "/",
});

/**
 * Phase 1 placeholder homepage — proves the design system, fonts, and shell.
 * The full 17-section homepage ships in Phase 2 (PRD §3).
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={webSiteSchema()} />
      <section className="relative flex min-h-[75vh] items-center overflow-hidden">
        {/* Subtle background wash */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-charcoal-800),_var(--color-charcoal-950)_60%)]"
        />
        <div className="container-site relative py-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-charcoal-700 bg-charcoal-900 px-4 py-1.5 text-xs font-medium tracking-wide text-silver-400">
            <HardHat
              className="size-3.5 text-burgundy-500"
              aria-hidden="true"
            />
            Hattiesburg, Mississippi — serving all of South Mississippi
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] font-black sm:text-6xl lg:text-7xl">
            A roof you&apos;re <span className="text-metallic">proud of.</span>
            <br />
            Built by <span className="text-burgundy-500">locals.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-silver-400">
            {siteConfig.tagline} — residential, commercial, and metal roofing
            done right, from inspection to final walkthrough.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              render={<Link href={primaryCta.href} />}
              nativeButton={false}
              size="lg"
              className="text-base"
            >
              {primaryCta.label}
              <ArrowRight aria-hidden="true" />
            </Button>
            <PhoneLink className="text-base text-silver-200" />
          </div>
          <p className="mt-16 text-xs text-silver-600">
            Foundation build — the full homepage experience arrives in Phase 2.
          </p>
        </div>
      </section>
    </>
  );
}
