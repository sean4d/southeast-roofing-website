import { defineField, defineType } from "sanity";

/** A gallery project (residential or commercial) — PRD §2 /projects. */
export const project = defineType({
  name: "project",
  title: "Project",
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
      options: { list: ["residential", "commercial"], layout: "radio" },
      initialValue: "residential",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "service",
      type: "reference",
      to: [{ type: "service" }],
    }),
    defineField({
      name: "location",
      type: "reference",
      to: [{ type: "location" }],
    }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "beforeImage",
      type: "image",
      options: { hotspot: true },
      description: "For the before/after slider (pair with afterImage).",
    }),
    defineField({
      name: "afterImage",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "completedAt", type: "date" }),
    defineField({
      name: "featured",
      type: "boolean",
      initialValue: false,
      description: "Eligible for homepage featured-projects section.",
    }),
  ],
});
