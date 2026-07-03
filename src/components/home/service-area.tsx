import Link from "next/link";
import { MapPin } from "lucide-react";

import { siteConfig } from "@/config/site";
import { serviceAreaSection } from "@/content/homepage";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Service area (PRD §3.10): every launch city as a chip linking to its
 * dedicated service-area page, tier-1 cities emphasized.
 */
export function ServiceArea() {
  return (
    <Section>
      <SectionHeading
        eyebrow={serviceAreaSection.eyebrow}
        title={serviceAreaSection.title}
        description={serviceAreaSection.description}
        align="center"
      />

      <StaggerGroup
        as="ul"
        className="mt-12 flex flex-wrap justify-center gap-3"
      >
        {siteConfig.serviceArea.map(({ city, tier }) => (
          <StaggerItem as="li" key={city}>
            <Link
              href={`/service-areas/${city.toLowerCase().replace(/\s+/g, "-")}`}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:border-steel-500 hover:text-primary",
                tier === 1 ? "font-semibold text-primary" : "text-slate-600",
              )}
            >
              <MapPin className="size-3.5 text-steel-500" aria-hidden="true" />
              {city}
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="mt-10 flex justify-center">
        <Button
          variant="outline"
          render={<Link href={serviceAreaSection.hubCta.href} />}
          nativeButton={false}
        >
          {serviceAreaSection.hubCta.label}
        </Button>
      </div>
    </Section>
  );
}
