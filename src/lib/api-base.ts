/**
 * The single source of truth for the Admin public API base URL.
 * Override with NEXT_PUBLIC_API_BASE_URL (a build-time value); if unset, default to the
 * deployed admin in production builds and localhost:3001 in dev. Imported by the server
 * data layer (lib/api.ts) AND the client forms (Contact, NewsletterForm) so they can't drift.
 */
export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  (process.env.NODE_ENV === "production"
    ? "https://admin.pyindore.com/api/v1/public"
    : "http://localhost:3001/api/v1/public");
