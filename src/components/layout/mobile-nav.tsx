"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { mainNav, primaryCta } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PhoneLink } from "@/components/shared/phone-link";

/** Mobile navigation drawer (below the xl breakpoint). */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            aria-label="Open menu"
          />
        }
      >
        <Menu className="size-6" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" className="w-80 border-border bg-white">
        <SheetHeader>
          <SheetTitle className="text-left font-display text-primary">
            Southeast Roofing
          </SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile navigation" className="mt-2 px-4">
          <ul className="flex flex-col gap-1">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 px-3">
            <Button
              render={
                <Link href={primaryCta.href} onClick={() => setOpen(false)} />
              }
              nativeButton={false}
              size="lg"
            >
              {primaryCta.label}
            </Button>
            <PhoneLink className="justify-center text-primary" />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
