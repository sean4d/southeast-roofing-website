import { analyzeRoof, type AssistantInput } from "@/lib/ai/roof-assistant";

export const runtime = "nodejs";

/**
 * Roof Assistant endpoint. Thin wrapper over the provider-abstracted analysis
 * layer — when a real vision model is connected, only lib/ai/roof-assistant
 * changes; this route and the UI stay the same.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AssistantInput;
    if (!body?.topic) {
      return Response.json({ error: "Missing topic" }, { status: 400 });
    }
    const result = await analyzeRoof(body);
    return Response.json(result);
  } catch {
    return Response.json({ error: "Analysis failed" }, { status: 500 });
  }
}
