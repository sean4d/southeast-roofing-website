import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { servicesOverview } from "@/content/homepage";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";

/**
 * Division-grouped service links (PRD §3.4): the internal-linking mesh from
 * the homepage into every residential and commercial service page.
 */
export function ServicesOverview() {
  const { residential, commercial } = servicesOverview;
  const divisions = [residential, commercial];

  return (
    <Section>
      <SectionHeading
        eyebrow={servicesOverview.eyebrow}
        title={servicesOverview.title}
        description={servicesOverview.description}
        align="center"
      />

      <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-2">
        {divisions.map((division) => (
          <StaggerItem
            key={division.heading}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold">
                {division.heading}
              </h3>
              <Link
                href={division.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-steel-500 hover:text-primary"
              >
                View all
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="mt-4">
              {division.services.map(({ icon: Icon, label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="-mx-3 flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary"
                  >
                    <span className="rounded-lg bg-accent p-2">
                      <Icon
                        className="size-4 text-primary"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-sm font-medium">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
