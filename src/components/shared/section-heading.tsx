import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

interface SectionHeadingProps {
  /** Small steel-blue kicker above the title. */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Set true on navy sections for light text. */
  onDark?: boolean;
  className?: string;
}

/** Consistent section heading: eyebrow, H2, optional description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold tracking-wide uppercase",
            onDark ? "text-steel-300" : "text-steel-500",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-bold sm:text-4xl",
          onDark && "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            onDark ? "text-steel-300" : "text-slate-600",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
