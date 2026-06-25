/**
 * Tiny resilient client for the Admin public API. Point the site at the admin via
 * NEXT_PUBLIC_API_BASE_URL (the one swappable knob — a build-time value). If it's
 * unset, default to the deployed admin in production builds and localhost in dev, so
 * a deploy works even when the env var wasn't configured. Any failure (network,
 * non-2xx, or zod mismatch) returns the provided fallback — the site never blanks.
 */
import { z } from "zod";

const DEFAULT_API_BASE =
  process.env.NODE_ENV === "production"
    ? "https://admin.pyindore.com/api/v1/public"
    : "http://localhost:3001/api/v1/public";

export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE;

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
