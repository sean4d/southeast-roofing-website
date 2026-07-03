import Image from "next/image";
import Link from "next/link";

import { featuredProjects } from "@/content/homepage";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";

/**
 * Featured projects (PRD §3.7): real recent-work photography with city
 * attribution, linking through to the full project gallery.
 */
export function FeaturedProjects() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow={featuredProjects.eyebrow}
        title={featuredProjects.title}
        description={featuredProjects.description}
        align="center"
      />

      <StaggerGroup
        as="ul"
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {featuredProjects.projects.map(({ photo, service }) => (
          <StaggerItem as="li" key={photo.src}>
            <div className="group relative block overflow-hidden rounded-3xl border border-border">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"
              />
              <p className="absolute bottom-4 left-5 text-sm font-medium text-white">
                {photo.city} · {service}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="mt-12 flex justify-center">
        <Button
          variant="outline"
          render={<Link href={featuredProjects.cta.href} />}
          nativeButton={false}
        >
          {featuredProjects.cta.label}
        </Button>
      </div>
    </Section>
  );
}
