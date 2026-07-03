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

/** Mobile navigation drawer (lg breakpoint and below). */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open menu"
          />
        }
      >
        <Menu className="size-6" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-80 border-charcoal-700 bg-charcoal-900"
      >
        <SheetHeader>
          <SheetTitle className="text-left font-display tracking-widest">
            SOUTHEAST ROOFING
          </SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile navigation" className="mt-2 px-4">
          <ul className="flex flex-col gap-1">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-silver-200 transition-colors hover:bg-charcoal-800 hover:text-white"
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
            <PhoneLink className="justify-center text-silver-200" />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
