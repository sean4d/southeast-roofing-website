import Link from "next/link";
import { ArrowRight, Check, Mail } from "lucide-react";

import { proposalSection } from "@/content/homepage";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Digital proposal section (owner directive 2026-07-04): the retail
 * experience, written for a discerning buyer — itemized transparency,
 * toggleable upgrades, no hidden fees. The proposal mock shows component
 * names and toggle states only; no invented dollar figures (PRD §0.2).
 */
export function DigitalProposal() {
  const { mock } = proposalSection;

  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={proposalSection.eyebrow}
            title={proposalSection.title}
            description={proposalSection.description}
          />
          <StaggerGroup as="ul" className="mt-9 space-y-6">
            {proposalSection.points.map((point) => (
              <StaggerItem as="li" key={point.title} className="flex gap-4">
                <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-steel-100">
                  <Check
                    className="size-3.5 text-navy-900"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <h3 className="font-display font-semibold">{point.title}</h3>
                  <p className="mt-1 leading-relaxed text-slate-600">
                    {point.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-9">
            <Button
              size="xl"
              render={<Link href="/free-inspection" />}
              nativeButton={false}
            >
              Get your itemized proposal
              <ArrowRight aria-hidden="true" />
            </Button>
          </Reveal>
        </div>

        {/* Illustrative proposal card — component names, no invented prices */}
        <Reveal delay={0.1}>
          <div
            aria-hidden="true"
            className="shadow-premium rounded-3xl border border-border bg-white p-7 sm:p-8"
          >
            <div className="flex items-center justify-between border-b border-border pb-5">
              <div>
                <p className="font-display text-lg font-bold text-navy-900">
                  {mock.heading}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {mock.subheading}
                </p>
              </div>
              <span className="flex size-10 items-center justify-center rounded-full bg-steel-100">
                <Mail className="size-4.5 text-navy-900" />
              </span>
            </div>

            <ul className="divide-y divide-border/70">
              {mock.included.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="text-slate-600">{item}</span>
                  <Check className="size-4 text-success-600" />
                </li>
              ))}
              {mock.toggles.map((toggle) => (
                <li
                  key={toggle.label}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="font-medium text-navy-900">
                    {toggle.label}
                    <span className="ml-2 rounded-full bg-steel-100 px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-steel-500 uppercase">
                      optional
                    </span>
                  </span>
                  {/* Toggle pill */}
                  <span
                    className={cn(
                      "flex h-5 w-9 items-center rounded-full p-0.5 transition-colors",
                      toggle.on ? "bg-navy-900" : "bg-border",
                    )}
                  >
                    <span
                      className={cn(
                        "size-4 rounded-full bg-white shadow transition-transform",
                        toggle.on && "translate-x-4",
                      )}
                    />
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-2 flex items-center justify-between rounded-xl bg-secondary px-4 py-3.5">
              <span className="text-sm font-semibold text-navy-900">
                {mock.totalLine}
              </span>
              <Check className="size-4 text-success-600" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
