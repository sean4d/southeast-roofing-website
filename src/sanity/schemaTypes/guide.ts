import { defineField, defineType } from "sanity";

/**
 * Learning Center article (PRD §10 topical authority engine). References to
 * services/locations power the RelatedContent internal-linking mesh.
 */
export const guide = defineType({
  name: "guide",
  title: "Guide (Learning Center)",
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
      name: "category",
      type: "string",
      options: {
        list: [
          "metal-roofing",
          "insurance-claims",
          "storm-prep",
          "materials",
          "maintenance",
          "commercial",
          "cost-guides",
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
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
      name: "relatedServices",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    }),
    defineField({
      name: "relatedLocations",
      type: "array",
      of: [{ type: "reference", to: [{ type: "location" }] }],
    }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({
      name: "seo",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", type: "string" }),
        defineField({ name: "metaDescription", type: "text", rows: 2 }),
      ],
    }),
  ],
});
