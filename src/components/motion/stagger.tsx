"use client";

import { motion, useReducedMotion } from "framer-motion";

import { fadeIn, fadeRise, staggerContainer, viewportOnce } from "@/lib/motion";

/**
 * Staggered group reveal (PRD §7.1): the container triggers once in view;
 * each StaggerItem child fades/rises 80ms after its sibling.
 *
 * Usage:
 *   <StaggerGroup className="grid ...">
 *     <StaggerItem>…</StaggerItem>
 *     <StaggerItem>…</StaggerItem>
 *   </StaggerGroup>
 */
export function StaggerGroup({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul";
}) {
  const Tag = as === "ul" ? motion.ul : motion.div;
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduced = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag className={className} variants={reduced ? fadeIn : fadeRise}>
      {children}
    </Tag>
  );
}
