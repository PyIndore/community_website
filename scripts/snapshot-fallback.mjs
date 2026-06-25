/**
 * Snapshot the live Admin public API into src/data/fallback.json — the offline
 * copy the site renders when the API is unreachable.
 *
 *   node scripts/snapshot-fallback.mjs [--base http://host/api/v1/public]
 */
import { mkdirSync, writeFileSync } from "node:fs";

const argBase = process.argv.indexOf("--base");
const BASE =
  (argBase !== -1 && process.argv[argBase + 1]) ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "http://localhost:3001/api/v1/public";

const get = async (path) => {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`GET ${path} → ${res.status}`);
  return res.json();
};
const items = async (path) => (await get(path)).items ?? [];

const data = {
  site: await get("/site"),
  sections: await get("/pages/home"),
  events: await items("/events?pageSize=100"),
  communityFeatures: await items("/community-features"),
  testimonials: await items("/testimonials"),
  socialLinks: await items("/social-links"),
  faq: await items("/faq"),
  inquiryTypes: await items("/inquiry-types"),
  sponsors: await items("/sponsors"),
  members: await items("/members"),
};

mkdirSync("src/data", { recursive: true });
writeFileSync("src/data/fallback.json", `${JSON.stringify(data, null, 2)}\n`);
console.log(
  "wrote src/data/fallback.json from",
  BASE,
  Object.fromEntries(Object.entries(data).map(([k, v]) => [k, Array.isArray(v) ? v.length : "obj"])),
);
