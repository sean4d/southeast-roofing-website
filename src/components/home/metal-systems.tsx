import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { metalSection } from "@/content/homepage";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";

/**
 * Metal roofing systems (PRD §4.3): metal is a material/system installed
 * within BOTH divisions — never presented as a third, separate division.
 */
export function MetalSystems() {
  const { residential, commercial } = metalSection;
  const cards = [
    { ...residential, cta: "Explore residential metal" },
    { ...commercial, cta: "Explore commercial metal" },
  ];

  return (
    <Section>
      <SectionHeading
        eyebrow={metalSection.eyebrow}
        title={metalSection.title}
        description={metalSection.description}
        align="center"
      />

      <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-2">
        {cards.map((card) => (
          <StaggerItem
            key={card.href}
            className="shadow-premium rounded-3xl border border-border bg-card p-8"
          >
            <h3 className="font-display text-xl font-bold">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {card.text}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {card.systems.map((system) => (
                <li
                  key={system}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {system}
                </li>
              ))}
            </ul>
            <Link
              href={card.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              {card.cta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="mt-10 text-center">
        <Link
          href={metalSection.hubNote.href}
          className="text-sm text-slate-600 underline-offset-4 hover:text-primary hover:underline"
        >
          {metalSection.hubNote.label}
          <ArrowRight className="ml-1 inline size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
