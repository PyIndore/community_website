/**
 * Tiny resilient client for the Admin public API. The base URL lives in one place
 * (lib/api-base.ts) — override with NEXT_PUBLIC_API_BASE_URL. Any failure (network,
 * non-2xx, or zod mismatch) returns the provided fallback — the site never blanks.
 */
import { z } from "zod";
import { API_BASE } from "./api-base";

export { API_BASE };

async function fetchJson(path: string, revalidate: number): Promise<unknown> {
  const res = await fetch(`${API_BASE}${path}`, { next: { revalidate } });
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}

/** Fetch a single object, validate, fall back on any problem. */
export async function getObject<T>(path: string, schema: z.ZodType<T>, fallback: T, revalidate: number): Promise<T> {
  try {
    const parsed = schema.safeParse(await fetchJson(path, revalidate));
    if (!parsed.success) {
      console.warn(`[api] ${path} schema mismatch — using fallback`);
      return fallback;
    }
    return parsed.data;
  } catch (e) {
    console.warn(`[api] ${path} failed (${(e as Error).message}) — using fallback`);
    return fallback;
  }
}

/** Fetch a paginated list `{ items: [...] }`, validate each item, fall back on any problem. */
export async function getList<T>(path: string, schema: z.ZodType<T>, fallback: T[], revalidate: number): Promise<T[]> {
  const envelope = z.object({ items: z.array(schema) });
  try {
    const parsed = envelope.safeParse(await fetchJson(path, revalidate));
    if (!parsed.success) {
      console.warn(`[api] ${path} schema mismatch — using fallback`);
      return fallback;
    }
    return parsed.data.items;
  } catch (e) {
    console.warn(`[api] ${path} failed (${(e as Error).message}) — using fallback`);
    return fallback;
  }
}
