"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Site-wide Lenis smooth scrolling (PRD §7.1). Disabled entirely for users
 * who prefer reduced motion; Lenis leaves native touch scrolling alone by
 * default, so mobile keeps platform-native feel.
 */
export function SmoothScrollProvider() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({ duration: 1.1 });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
