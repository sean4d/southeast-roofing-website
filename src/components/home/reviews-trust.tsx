import Link from "next/link";

import { reviewsSection } from "@/content/homepage";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

/**
 * Reviews & trust (PRD §3.11): links out to real Google reviews and shows
 * confirmed credential marks only. No fabricated quotes, ratings, or counts.
 */
export function ReviewsTrust() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow={reviewsSection.eyebrow}
        title={reviewsSection.title}
        description={reviewsSection.description}
        align="center"
      />

      {/*
        Google star/Guaranteed badges intentionally omitted until the owner
        verifies rating + program status (see brandAssets.trust) — the
        review CTA carries the section instead.
      */}
      <div className="mt-12 flex flex-col items-center gap-8">
        <Button
          size="lg"
          render={<Link href={reviewsSection.googleCta.href} />}
          nativeButton={false}
        >
          {reviewsSection.googleCta.label}
        </Button>

        {/*
          Credential chips only — GAF leads (brand directive 2026-07-03 §4).
          Official GAF/BBB badge artwork to be sourced from manufacturer
          sites in Phase 3; no OC certification claims anywhere.
        */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <span className="rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-primary">
            GAF Certified Contractor
          </span>
          <span className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-slate-600">
            BBB Accredited
          </span>
          <span className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-slate-600">
            MSBOC Licensed
          </span>
        </div>
      </div>
    </Section>
  );
}
