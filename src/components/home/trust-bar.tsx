import { trustItems } from "@/content/homepage";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";

/**
 * Credential strip (PRD §3.2): confirmed certifications only, directly
 * under the hero. No invented stats — every item comes from trustItems.
 */
export function TrustBar() {
  return (
    <section
      aria-label="Credentials"
      className="border-y border-border bg-secondary py-10"
    >
      <div className="container-site">
        <StaggerGroup as="ul" className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustItems.map(({ icon: Icon, label, detail }) => (
            <StaggerItem
              as="li"
              key={label}
              className="flex flex-col items-start gap-2"
            >
              <Icon className="size-6 text-steel-500" aria-hidden="true" />
              <span className="text-sm font-semibold text-foreground">
                {label}
              </span>
              <span className="text-xs text-slate-600">{detail}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
