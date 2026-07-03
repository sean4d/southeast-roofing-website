"use client";

/**
 * Sanity Studio configuration — embedded at /studio (PRD §9.3).
 * Activates once NEXT_PUBLIC_SANITY_PROJECT_ID is set (docs/DEPLOYMENT.md).
 */
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "southeast-roofing",
  title: "Southeast Roofing",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool(), visionTool()],
});
