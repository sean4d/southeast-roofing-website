import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck, Star } from "lucide-react";

import { siteConfig } from "@/config/site";
import { projectPhotos } from "@/content/photos";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/services/breadcrumbs";
import { ReviewsTrust } from "@/components/home/reviews-trust";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { FinalCta } from "@/components/home/final-cta";

/**
 * Reviews page (PRD §2, §13 Phase 6). Integrity rule is absolute here:
 * no pasted quotes, no invented ratings, no AggregateRating schema until
 * real reviews + permission are supplied — everything links out to records
 * we cannot edit (Google, BBB, GAF).
 */

export const metadata: Metadata = buildMetadata({
  title: "Reviews | Southeast Roofing | Verify Us Yourself",
  description:
    "Read Southeast Roofing's 5-star Google reviews at the source, verify our GAF certification and BBB A rating, and see the real roofs behind the reputation.",
  path: "/reviews",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
];

// A quick cross-section of real completed work — one photo per city
const recentWork = Object.values(
  Object.fromEntries(projectPhotos.map((photo) => [photo.citySlug, photo])),
).slice(0, 4);

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      {/* Hero */}
      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 sm:py-16 lg:py-20">
          <Reveal>
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600">
                <Star
                  className="size-3.5 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
                {siteConfig.trustFacts.googleRating}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600">
                <ShieldCheck
                  className="size-3.5 text-steel-500"
                  aria-hidden="true"
                />
                {siteConfig.trustFacts.googleGuaranteed}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600">
                <ShieldCheck
                  className="size-3.5 text-steel-500"
                  aria-hidden="true"
                />
                {siteConfig.trustFacts.bbbRating}
              </span>
            </div>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold text-navy-900 sm:text-5xl">
              Our reputation lives where we can&apos;t edit it
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              You won&apos;t find hand-picked quotes on this page. Reviews only
              mean something when you can verify them — so we send you straight
              to the source: our live Google profile, where every review is
              written by a real customer and we can&apos;t touch a word of it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="xl"
                render={
                  <a
                    href={siteConfig.links.googleBusiness}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
              >
                Read our Google reviews
                <ExternalLink className="size-4" aria-hidden="true" />
              </Button>
              <a
                href={siteConfig.links.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-base font-semibold text-navy-900 underline-offset-4 hover:underline"
              >
                Worked with us? Leave a review
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Verification badges (shared with homepage) */}
      <ReviewsTrust />

      {/* Why no pasted quotes */}
      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-sm font-semibold tracking-wide text-steel-300 uppercase">
              Our policy
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Why we don&apos;t paste quotes here
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-steel-100">
              Any contractor can fill a page with glowing testimonials — you
              have no way of knowing which are real, which are edited, and
              which are missing. On our Google profile, reviews are tied to
              real accounts, shown in full, good and bad, and we can&apos;t
              cherry-pick or reword a single one. That&apos;s the standard we
              think you should hold every roofer to.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* The work behind the reviews */}
      <Section>
        <SectionHeading
          eyebrow="The work behind the words"
          title="Real roofs, real addresses"
          description="Reviews tell you how the job went. The gallery shows you what we left behind — every photo from a genuine Southeast Roofing job site."
        />
        <StaggerGroup className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {recentWork.map((photo) => (
            <StaggerItem as="div" key={photo.src} className="relative">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={450}
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="aspect-[4/3] w-full rounded-2xl border border-border object-cover"
              />
              <span className="absolute bottom-2.5 left-2.5 rounded-full bg-navy-950/80 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur sm:bottom-3 sm:left-3 sm:px-3 sm:text-xs">
                {photo.city}, MS
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal className="mt-10">
          <Button
            size="xl"
            variant="outline"
            render={<Link href="/projects" />}
            nativeButton={false}
          >
            Browse the full project gallery
            <ArrowRight aria-hidden="true" />
          </Button>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  );
}
