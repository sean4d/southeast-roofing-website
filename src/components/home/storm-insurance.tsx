import Image from "next/image";
import Link from "next/link";

import { stormSection } from "@/content/homepage";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";

/**
 * Storm damage & insurance help (PRD §3.5): what happens after a storm,
 * from rapid inspection through claim support to full restoration.
 */
export function StormInsurance() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow={stormSection.eyebrow}
        title={stormSection.title}
        description={stormSection.description}
      />

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <StaggerGroup className="flex flex-col gap-6">
            {stormSection.steps.map(({ icon: Icon, title, text }) => (
              <StaggerItem key={title} className="flex gap-4">
                <span className="flex-none rounded-xl border border-border bg-white p-3">
                  <Icon className="size-5 text-steel-500" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              render={<Link href={stormSection.primaryCta.href} />}
              nativeButton={false}
            >
              {stormSection.primaryCta.label}
            </Button>
            <Button
              variant="outline"
              render={<Link href={stormSection.secondaryCta.href} />}
              nativeButton={false}
            >
              {stormSection.secondaryCta.label}
            </Button>
          </div>
        </div>

        <Reveal as="figure">
          <Image
            src={stormSection.photo.src}
            alt={stormSection.photo.alt}
            width={1000}
            height={750}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="shadow-premium aspect-[4/3] w-full rounded-3xl border border-border object-cover"
          />
        </Reveal>
      </div>
    </Section>
  );
}
