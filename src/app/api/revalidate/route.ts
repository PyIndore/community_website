/**
 * On-demand cache purge. The admin dashboard's "Refresh site" button POSTs here
 * (server-to-server) to clear this site's ISR cache so the next visit re-fetches
 * everything from the Admin API immediately — instead of waiting out the revalidate
 * windows in lib/content.ts. Guarded by a shared REVALIDATE_SECRET; no-ops (503) when
 * unset. Not a browser endpoint, so no CORS is needed.
 */
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ ok: false, reason: "not configured" }, { status: 503 });
  }
  if (request.headers.get("x-revalidate-secret") !== secret) {
    return NextResponse.json({ ok: false, reason: "unauthorized" }, { status: 401 });
  }
  // Purge the home page + root layout (the layout's generateMetadata/getSite data too),
  // so the next request re-runs every accessor against the live Admin API.
  revalidatePath("/", "layout");
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
