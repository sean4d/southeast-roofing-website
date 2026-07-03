"use client";

import { motion, useReducedMotion } from "framer-motion";

import { fadeIn, fadeRise, viewportOnce } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds to delay the reveal (use sparingly for choreography). */
  delay?: number;
  /** Render as a different element for semantics (default div). */
  as?: "div" | "section" | "li" | "figure";
}

const motionTags = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  figure: motion.figure,
} as const;

/**
 * Viewport-triggered reveal (PRD §7.1): fade + rise, animates once.
 * Falls back to a plain fade when the user prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const Tag = motionTags[as];

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={reduced ? fadeIn : fadeRise}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </Tag>
  );
}
