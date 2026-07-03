import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";

import { primaryCta } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { projectPhotos } from "@/content/photos";
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
 * Phase 1 placeholder homepage — proves the v3 design system (light,
 * navy, premium) and the shell. The full homepage ships in Phase 2 (PRD §3).
 */
export default function HomePage() {
  const heroPhoto = projectPhotos.find((p) => p.citySlug === "hattiesburg")!;

  return (
    <>
      <JsonLd data={webSiteSchema()} />
      <section className="relative overflow-hidden">
        {/* Soft steel wash — light, airy (PRD §6.4) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-steel-100),_transparent_55%)]"
        />
        <div className="container-site relative grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <p className="shadow-premium inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-slate-600">
              <MapPin className="size-3.5 text-steel-500" aria-hidden="true" />
              Hattiesburg, MS — serving a 2-hour radius across South Mississippi
            </p>
            <h1 className="mt-8 max-w-2xl font-display text-5xl leading-[1.08] font-bold sm:text-6xl">
              A roof built with{" "}
              <span className="text-gradient-steel">craftsmanship.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Premium residential and commercial roofing — replacement, repair,
              metal systems, and storm response, done right from inspection to
              final walkthrough.
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
              <Button
                render={<Link href="/commercial" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="text-base"
              >
                Commercial Roofing
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck
                  className="size-4 text-success-600"
                  aria-hidden="true"
                />
                GAF Certified · Owens Corning Preferred · BBB Accredited
              </span>
              <PhoneLink className="text-primary" />
            </div>
          </div>

          {/* Real project photography, bright and premium (PRD §6.4) */}
          <figure className="relative">
            <Image
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              width={1200}
              height={900}
              className="shadow-premium aspect-[4/3] w-full rounded-3xl border border-border object-cover"
              priority
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full border border-border bg-white/95 px-4 py-1.5 text-xs font-medium text-slate-600 backdrop-blur">
              Recent project — Hattiesburg, MS
            </figcaption>
          </figure>
        </div>
        <p className="container-site pb-10 text-xs text-slate-600/70">
          Foundation build — the full homepage experience arrives in Phase 2.
        </p>
      </section>
    </>
  );
}
