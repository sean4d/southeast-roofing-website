import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

import { Button } from "@/components/ui/button";

/** Branded 404 — many sitemap routes are planned but not yet built. */
export default function NotFound() {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Construction className="size-10 text-burgundy-500" aria-hidden="true" />
      <h1 className="mt-6 font-display text-4xl font-black sm:text-5xl">
        This page is <span className="text-metallic">on the roadmap</span>
      </h1>
      <p className="mt-4 max-w-md text-silver-400">
        We&apos;re building this site out section by section. The page
        you&apos;re looking for either hasn&apos;t shipped yet or the address
        has changed.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button render={<Link href="/" />} nativeButton={false}>
          <ArrowLeft aria-hidden="true" />
          Back to home
        </Button>
        <Button
          render={<Link href="/contact" />}
          nativeButton={false}
          variant="outline"
        >
          Contact us
        </Button>
      </div>
    </section>
  );
}
