import { defineField, defineType } from "sanity";

/** A service page (residential, commercial, or metal) — PRD §4. */
export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "channel",
      type: "string",
      options: { list: ["residential", "commercial", "metal"] },
      initialValue: "residential",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      description: "Card/summary copy (~160 chars).",
    }),
    defineField({
      name: "heroImage",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "faqs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    }),
    defineField({
      name: "relatedServices",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    }),
    defineField({
      name: "order",
      type: "number",
      description: "Sort order in grids/navigation.",
    }),
    defineField({
      name: "seo",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", type: "string" }),
        defineField({ name: "metaDescription", type: "text", rows: 2 }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
