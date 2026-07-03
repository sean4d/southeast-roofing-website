import type { JsonLdObject } from "@/lib/schema";

/**
 * Renders one or more JSON-LD objects as an application/ld+json script.
 * Content comes exclusively from our own schema builders (lib/schema.ts),
 * never from user input.
 */
export function JsonLd({ data }: { data: JsonLdObject | JsonLdObject[] }) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
