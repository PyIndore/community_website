# ARCHITECTURE — PyIndore Community Website

> **This file is the single source of truth for this app's structure, stack, the Admin API it consumes, and its decisions. The AI keeps it current; humans edit only to correct errors.**
>
> **Scope:** The public-facing PyIndore community website (frontend). It is a **content consumer**: dynamic content is read from the PyIndore Admin Dashboard API (sibling repo `admin_dashboard_pyindore`). This file owns everything about *this* app and the *contract it depends on*, but not the Admin Dashboard's internals (those live in that repo's ARCHITECTURE.md).
>
> Legend: ✅ = in place / known · 🔶 = **proposed, pending owner approval** · ⛔ = explicitly out of scope.

---

## Project Description

The official public website for **PyIndore**, the Python community in Indore, Madhya Pradesh, India. It introduces the community, shows upcoming and past events, highlights ways to get involved, surfaces members/speakers and testimonials, and drives people into the community channels (Telegram, WhatsApp, LinkedIn, Meetup, etc.).

**v1** (on `main`) is a single-page, statically authored marketing site with hard-coded/placeholder content. **v2** (this branch) is a complete revamp: the site becomes data-driven, pulling its content from the **PyIndore Admin Dashboard API** so organizers can update events, posts, and other content without code changes.

---

## Project

- **Name:** PyIndore Community Website (`pyindore-website`)
- **Type:** Web app — public marketing/community site (frontend, content consumer)
- **Purpose:** Be the front door to the PyIndore community: discover events, learn about the group, and join the channels.
- **Target Users:** Python developers, students, data scientists, and tech enthusiasts in/around Indore — from beginners to experts. Plus event speakers, partners, and volunteers.
- **Stage:** v1 live/static; **v2 = early revamp (greenfield rebuild of the content layer)** on branch `v2`.
- **Companion app:** `admin_dashboard_pyindore` ("Dashboard by Indore") — owns the data and exposes the API this site consumes.

---

## Tech Stack

_✅ reflects the current v1 codebase, which v2 is expected to build on unless the owner decides otherwise._

| Layer | Choice | Version | Notes |
| ----- | ------ | ------- | ----- |
| Language | TypeScript | ^5 | `strict` per `tsconfig.json` |
| Framework | Next.js (App Router) | 14.2.5 | ✅ `src/app` structure; consider 15 for v2 🔶 |
| UI library | React | ^18 | — |
| Styling | Tailwind CSS | ^3.4.1 | `darkMode: 'class'`; custom tokens in `tailwind.config.ts` |
| Animation | framer-motion | ^12.23.26 | scroll/entrance animations |
| Icons | react-icons | ^5.5.0 | Fa / Hi / Si icon sets |
| Fonts | next/font (Outfit + Inter) | — | `--font-outfit` (display), `--font-inter` (body) |
| Package manager | pnpm | — | `pnpm-lock.yaml`, `pnpm-workspace.yaml` present |
| Linting | ESLint (`eslint-config-next`) | 14.2.5 | `.eslintrc.json` |

**v2 stack decisions:**
- ✅ **Data fetching:** React Server Components fetching from the Admin API, with **ISR** (`revalidate`) for SEO + speed. Route handlers under `app/api/*` are used only as a thin **BFF/proxy** where a server-side key or response shaping is needed; client-side fetch only for genuinely interactive bits (e.g. submitting the contact form).
- 🔶 Response validation library (e.g. `zod`) for parsing Admin API responses.
- 🔶 Testing framework (none set up yet).
- 🔶 Whether to upgrade to Next.js 15 / React 19.

---

## Dependencies

_From `package.json`. Keep in sync with `pnpm-lock.yaml`._

| Package | Purpose | Added |
| ------- | ------- | ----- |
| next | Framework / SSR / routing | v1 |
| react, react-dom | UI runtime | v1 |
| framer-motion | Animations | v1 |
| react-icons | Icon sets | v1 |
| zod | Validate/parse Admin API responses before render (→ fallback on mismatch) | v2 |
| autoprefixer, postcss, tailwindcss | Styling pipeline | v1 |
| typescript, @types/* | Types | v1 |
| eslint, eslint-config-next | Linting | v1 |

---

## File Structure

_✅ current state. v2 will add a data layer and likely split the single page into routes._

```
community_website/
├── CLAUDE.md                 # AI working agreement for this app
├── ARCHITECTURE.md           # this file
├── README.md
├── next.config.mjs
├── tailwind.config.ts        # design tokens: python.*, dark.*, animations
├── tsconfig.json             # @/* path alias -> src/*
├── postcss.config.js
├── package.json / pnpm-lock.yaml / pnpm-workspace.yaml
├── .github/
│   └── copilot-instructions.md
├── public/
│   └── logo.png
└── src/
    ├── app/
    │   ├── globals.css       # base + utility classes (liquid-glass, section-chip, gradients)
    │   ├── layout.tsx        # root layout, fonts, SEO metadata, dark theme
    │   └── page.tsx          # composes all sections into one page
    └── components/
        ├── Header.tsx        # fixed nav + mobile menu (client)
        ├── Hero.tsx
        ├── About.tsx
        ├── Events.tsx        # upcoming/past events; strong empty states (client)
        ├── Community.tsx     # features, social platforms, testimonials (client)
        ├── Contact.tsx       # contact form (stub), social links, FAQ (client)
        └── Footer.tsx
```

✅ **v2 data layer (added):**
- `src/lib/api.ts` — resilient fetch + zod-validate + fallback; `API_BASE` from `NEXT_PUBLIC_API_BASE_URL`.
- `src/lib/schemas.ts` · `types.ts` — zod schemas + inferred view-model types.
- `src/lib/content.ts` — typed accessors (`getSite`, `getSections`, `getEvents`, …) binding endpoint + schema + fallback + ISR window.
- `src/lib/fallback.ts` + `src/data/fallback.json` — the offline snapshot; `scripts/snapshot-fallback.mjs` regenerates it (`pnpm snapshot`).
- `src/components/social-meta.ts` (platform → icon/colour), `src/components/NewsletterForm.tsx` (newsletter POST).
- Every section component is now **prop-driven** (data from `page.tsx`); `layout.tsx` does `generateMetadata` + theme CSS-vars.

🔶 **Still anticipated:** per-content routes (`app/events/[slug]`, `app/blog`), BFF route handlers if a server-side key is ever needed.

---

## Architecture Overview

```
                 ┌─────────────────────────────┐
   Visitor ────▶ │  PyIndore Community Website  │  (this repo — Next.js, public)
   (browser)     │  - Server Components render  │
                 │    content fetched at        │
                 │    build/request time (ISR)  │
                 │  - Client Components for      │
                 │    interactivity/animation    │
                 └──────────────┬──────────────┘
                                │ HTTPS, read-only — REST+JSON, /api/v1/public ✅
                                ▼
                 ┌─────────────────────────────┐
                 │  PyIndore Admin Dashboard    │  (admin_dashboard_pyindore — owns data + DB)
                 │  Public read API  +  Admin UI │
                 └─────────────────────────────┘
```

- This site **renders**; the Admin Dashboard **owns and serves** the content.
- Source of truth for events/posts/members/etc. is the Admin Dashboard database, never this repo.
- Any `app/api/*` route handler added here is a thin BFF/proxy (e.g. to keep an API key server-side or to shape/cache responses) — **not** a data owner.
- Auth: the public site reads **public** content only; no end-user login is currently in scope (⛔).

---

## Data Models (View Models)

_What this site renders. These are **UI/view models** — the canonical models live in the Admin Dashboard. v1 shapes below are derived from the existing components and will be reconciled with the real API contract during v2. All 🔶 until the contract is fixed._

- **SiteConfig** 🔶 — global chrome: `{ brand: { name, logo, favicon }, theme: ThemeConfig, seo: { titleDefault, descriptionDefault, openGraph }, nav: NavLink[], header: { ctaLabel, ctaHref }, footer: {…}, contact: { email, location } }`. From `/site`.
- **ThemeConfig** 🔶 — admin-editable design tokens: `{ colors: { brandPrimary, brandSecondary, … }, background, fonts }`. Maps onto Tailwind/CSS variables so admins can change colours/background without a deploy.
- **NavLink** 🔶 — `{ label, href, order }`.
- **PageContent / SectionBlock** 🔶 — ordered editable copy for the home page: `{ key ("hero" | "about" | "events" | "community" | "contact" | …), heading, subheading, body?, cta?, stats? }`. From `/pages/home`.
- **Event** — view model `{ id, slug, title, date, time, venue, description, speaker, type ("Workshop" | "Seminar" | …), image?, registrationUrl?, attendees? }`. The **wire DTO** (`PublicEventDto` from the Admin API) returns `startsAt`/`endsAt` (ISO) and `coverImageUrl`; this site derives `date`/`time`/`image`. Site splits into **upcoming** vs **past** (use the `?when=` filter). (See `Events.tsx`.)
- **CommunityFeature** 🔶 — `{ icon, title, description, order }`. From `/community-features`.
- **SocialPlatform / SocialLink** 🔶 — `{ name, description, href, platform, order }`. From `/social-links`. Channels in use: Telegram, WhatsApp, LinkedIn, GitHub, Meetup, Luma, Twitter/X. (Icons resolved on the site from `platform`.)
- **Testimonial** 🔶 — `{ name, role, content, avatar }`. From `/testimonials`.
- **Member / Speaker** 🔶 — `{ name, role, bio?, avatar?, socials[] }`. From `/members`.
- **Post** 🔶 — `{ slug, title, excerpt, coverImage?, author, publishedAt, body }`. From `/posts`.
- **Sponsor** 🔶 — `{ name, logo, url, tier? }`. From `/sponsors`.
- **FAQ** 🔶 — `{ question, answer, order }`. From `/faq`.
- **InquiryType** 🔶 — `{ value, label }` for the contact-form select. From `/inquiry-types`.
- **ContactSubmission** 🔶 — `{ name, email, type, message }` — the one **write** (`POST /contact`).

> Keep API response types (what the wire returns) separate from these view models (what components consume). Map between them in the data layer.

---

## Consumed API Contract

_**The most important section of this file.** Every Admin API endpoint and field this site depends on must be listed here. If it isn't here, don't rely on it. Owner of the contract: `admin_dashboard_pyindore`. This site is a read-only consumer (the only write is the contact form POST)._

> **Everything is content-managed (v2 north star).** 100% of what this site renders — every word of copy, every image, the logo/favicon, brand/theme colours, backgrounds, nav labels, CTAs, footer, and SEO strings — is fetched from the Admin API. v2 ships with **no hard-coded content or copy**. If a string or asset appears on screen, it came from the Admin Dashboard. The only things baked in are layout, structure, and styling primitives.

- **Protocol:** ✅ REST + JSON, **versioned** under `/api/v1`. Public, read-only endpoints (plus the single contact-form POST).
- **Base URL (dev):** `NEXT_PUBLIC_API_BASE_URL` → `http://localhost:3001/api/v1/public` ✅ (Admin runs on `3001`; this site on `3000`).
- **Base URL (prod):** 🔶 TBD.
- **Response envelope:** ✅ lists return `{ items, page, pageSize, total }`; single objects are returned directly; every response carries an `x-request-id` header; errors are `{ error: { code, message, details? }, requestId }`.
- **Auth to the API:** 🔶 public read endpoints unauthenticated or a public read-key; any key stays server-side.
- **Schema source of truth:** 🔶 TBD (OpenAPI from Admin Dashboard preferred).
- **Caching / revalidation:** ✅ ISR per type — `/site`+`/pages/home` 3600s, `/events` 300s, the rest 600s.
- **Resilience:** ✅ every read is zod-validated and **falls back to `src/data/fallback.json`** (a committed snapshot of the live admin, `pnpm snapshot`) on any failure — the site never crashes or blanks if the API is down/changed.

### Endpoints consumed

_**All endpoints below are live on the Admin API today (✅ server-side)** — every section is now backed by a real endpoint. This site wires them during the v2 build. Collections return `{ items, page, pageSize, total }`; `/site` returns an object; `/pages/home` returns an array. Each `<Resource>Public` DTO drops the admin-only `status`/timestamps._

| Path | Method | Purpose | Used by | Status |
| ---- | ------ | ------- | ------- | ------ |
| `/site` | GET | Global config: brand, theme (colours/background/fonts), SEO defaults, nav, header/footer CTAs, footer content, contact info | Root layout, Header, Footer, theme | ✅ live |
| `/pages/home` | GET | Ordered published content sections (hero, about, section intros) — `eyebrow/heading/subheading/body/ctas/items/data` | All home sections | ✅ live |
| `/events?when=upcoming\|past&page&pageSize` | GET | Events collection (paginated) | Events | ✅ live |
| `/events/:slug` | GET | Single published event (`EventPublic`) | Event detail (v2 route) | ✅ live |
| `/posts` · `/posts/:slug` | GET | Published blog posts (slug-based) | Blog (v2) | ✅ live |
| `/members` | GET | Members / speakers | Speakers/members section | ✅ live |
| `/testimonials` | GET | Published testimonials | Community | ✅ live |
| `/community-features` | GET | "What you get" feature cards | Community | ✅ live |
| `/faq` | GET | FAQ entries | Contact | ✅ live |
| `/social-links` | GET | Social platform links (`platform`, `label`, `description`, `url`) | Header/Community/Contact/Footer | ✅ live |
| `/sponsors` | GET | Sponsors / partners | Sponsors section (v2) | ✅ live |
| `/inquiry-types` | GET | Contact-form inquiry options (`value`, `label`) | Contact form | ✅ live |
| `/contact` | POST | Submit a contact-form message `{ name, email, type, message }` → `{ ok: true }` | Contact form | ✅ live |

---

## State Ownership

- **Server/content state** (source of truth = Admin Dashboard): **everything renderable** — site config, brand/theme, section copy, nav, events, posts, members, testimonials, FAQ, sponsors, social links. Fetched, not stored here.
- **Client state** (ephemeral UI): mobile menu open, FAQ accordion expansion, contact form field values, scroll/animation state.
- **URL state** (shareable): 🔶 future — selected event, blog slug, pagination.
- **Local persistence:** none currently.

---

## Key Design Decisions

_What was decided, the alternatives, and why. Tag scope: [UI] / [DATA] / [STYLE] / [INFRA]._

- **[STYLE] Dark-only, Python-branded design system** — custom Tailwind tokens (`python.*`, `dark.*`) + reusable `globals.css` utility classes (`liquid-glass`, `section-chip`, `text-gradient-blue`). Keeps a consistent "glassy" aesthetic without a component library.
- **[UI] Single-page composition in v1** — all sections composed in `page.tsx`. v2 may split into routes as content grows. 🔶
- **[DATA] Fully content-managed site ✅** — the defining decision of v2: **all** content (copy, images, brand/theme, background, nav, SEO) is fetched from the Admin API; the site holds no hard-coded content. Editors change the site from "Dashboard by Indore" without a deploy.
- **[DATA] RSC + ISR fetching ✅ (wired)** — content is fetched in React Server Components (`src/lib/content.ts`) and cached with ISR per type (`/site`+`/pages/home` hourly, `/events` 300s, others 600s); client fetch reserved for the contact + newsletter form POSTs.
- **[DATA] zod-validated, fallback-backed data layer ✅** — `src/lib/api.ts` validates every response with zod (`schemas.ts`); on **any** failure (network, non-2xx, or schema mismatch) it returns a slice of **`src/data/fallback.json`** — a committed snapshot of the live admin (regenerate with `pnpm snapshot`). The site therefore renders **fully even when the admin is down**. The base URL is the single env var `NEXT_PUBLIC_API_BASE_URL`.
- **[STYLE] Theme colours from the API ✅** — `/site.theme.colors` is injected as CSS variables in `layout.tsx`; the Tailwind brand tokens (`python.blue/-bright`, `python.yellow`, `dark.bg`) read those vars with the current hex as the **default**, so an admin colour change applies without a deploy and a missing value is always safe.

---

## Environment Variables

_Never commit real values. `NEXT_PUBLIC_*` is exposed to the browser — never put a secret there._

| Variable | Purpose | Required | Default | Public? |
| -------- | ------- | -------- | ------- | ------- |
| `NEXT_PUBLIC_API_BASE_URL` ✅ | Base URL of the Admin Dashboard public API — the **one** place to swap for deploy | yes | `http://localhost:3001/api/v1/public` (in `src/lib/api.ts`) | Yes |
| `ADMIN_API_KEY` 🔶 | Server-side key for privileged/proxied calls, if the API ever requires one | only if API needs auth | — | **No — server only** |

_See `.env.example`. The default lets the site run with no `.env` against a local admin._

---

## External Integrations

| Service | Purpose | Auth | Failure Mode |
| ------- | ------- | ---- | ------------ |
| PyIndore Admin Dashboard API | All dynamic content (events, posts, etc.) | none (public reads) | zod-validate → **fall back to `src/data/fallback.json`**; never crashes/blanks |
| Social platforms (Telegram, WhatsApp, LinkedIn, GitHub, Meetup, Luma, Twitter/X) | Outbound links only | none | Links open externally; no runtime dependency |
| Contact / newsletter forms ✅ | `POST /contact` (messages) · `POST /subscribe` (newsletter) | none | Client-side; show a friendly error on failure |

### Not yet verified (pending external/admin setup — not bugs in this site)

The site's **reads, JSON fallback, theme, and form submits are all verified** (headed-browser E2E: every section renders from the API; a contact/newsletter submit reaches the admin's inbox/subscribers). Outstanding items live on the **admin** side:

- **Reply/confirmation emails aren't delivered yet.** Submitting the contact form or newsletter succeeds (the site shows the success state), but the admin's auto-reply / double-opt-in confirmation email won't arrive until the admin verifies its **Resend sending domain**. No change needed here when it goes live.
- **Admin-internal, no effect on this site's render** (tracked in `admin_dashboard_pyindore`): Resend webhook stats (open/click/bounce), scheduled-campaign cron, and a transient `/admin/events` 500 under concurrent first-load.

---

## Testing Strategy

🔶 **Not yet set up.** Proposed once v2 has logic worth testing:
- Unit-test data-mapping/formatting helpers and API-response parsing.
- Component-test interactive UI (menu, FAQ accordion, contact form validation).
- Test the loading/empty/error states of each data-driven section.
- Decide framework (Vitest + React Testing Library, or Jest) and record it here.

---

## Deployment & Infrastructure

🔶 **TBD / to confirm.**
- **Hosting:** likely Vercel (Next.js-native; `.vercel` already git-ignored) or any Next.js host.
- **Build:** `pnpm build` → `pnpm start` (or platform build).
- **Env/secrets:** set `NEXT_PUBLIC_API_BASE_URL` (+ any server key) in the host's env.
- **Release coupling:** a breaking Admin API change can break this site in production — coordinate contract changes (see Consumed API Contract) and prefer additive API changes.
- **Rollback:** redeploy previous build.

---

## Local Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm start      # serve production build
pnpm lint
```

- **Prereqs:** Node.js 18+ and pnpm.
- For v2 data work, the **Admin Dashboard** must be running locally (or point `NEXT_PUBLIC_API_BASE_URL` at a shared/staging API). Document the agreed dev URL once the Admin API exists.

---

## Technical Debt

- [ ] **[DATA]** v1 content (events, testimonials, FAQ, community features) is hard-coded in components — to be replaced by Admin API data in v2.
- [ ] **[UI]** Contact form is a non-functional stub (`alert()` only) — no real submission target.
- [ ] **[INFRA]** No tests, no CI for this repo yet.

---

## Known Bugs

- [ ] _None recorded._

---

## Out of Scope

- ⛔ End-user accounts/login on the public site (read-only public content for now).
- ⛔ Owning/persisting content here (the Admin Dashboard owns data).
- ⛔ Payments/ticketing (registration links out to Meetup/Luma).
- ⛔ End-user theme toggle (theme/brand/background are admin-managed via the Admin API, not switched by visitors; dark is the default skin).

---

## Changelog

_One row per session. Scope tags: `[UI]` · `[DATA]` data-fetching/API · `[CONTENT]` copy · `[STYLE]` · `[INFRA]` · `[DOCS]`._

| Date | Scope | Change |
| ---- | ----- | ------ |
| 2026-06-21 | [DOCS] | Authored initial CLAUDE.md + ARCHITECTURE.md for the v2 revamp; documented current v1 stack/structure and the planned Admin-API-driven content model. |
| 2026-06-21 | [DOCS] | Locked v2 decisions: RSC + ISR fetching, REST+JSON protocol. Adopted "fully content-managed" north star (all copy/images/theme/nav/SEO from the Admin API) and expanded the Consumed API Contract + view models accordingly. |
| 2026-06-21 | [DATA] | Synced contract with the Admin API now that it's live: base path `/api/v1/public`, events filter `?when=upcoming\|past`, response envelope (`{ items, … }` + `x-request-id`). Events endpoints are available server-side; to be wired into the site during v2. |
| 2026-06-21 | [DATA] | The **entire** Consumed API Contract is now live on the Admin API — `/site`, `/pages/home`, `/posts`, `/members`, `/testimonials`, `/community-features`, `/faq`, `/social-links`, `/sponsors`, `/inquiry-types`, `/contact` (+ events) all implemented and seeded with the current site content. Flipped every row to ✅ and reconciled field names with the DTOs. Ready to wire into v2. |
| 2026-06-22 | [DATA][UI] | **v2 wired: the site now renders 100% from the Admin API, with a JSON fallback.** Added a zod-validated data layer (`src/lib/{api,schemas,content,types,fallback}.ts`) reading from `NEXT_PUBLIC_API_BASE_URL` (one swappable env var, default `:3001`); every read falls back to a committed snapshot `src/data/fallback.json` (`scripts/snapshot-fallback.mjs` / `pnpm snapshot`) on any failure. Refactored **every** section (`Hero/About/Events/Community/Contact/Header/Footer`) to be prop-driven from `page.tsx`; `layout.tsx` builds metadata + injects `/site.theme` colours as CSS vars (Tailwind tokens read them, hex as default); contact form → `POST /contact`, newsletter → `POST /subscribe`. Topped up the admin home-section `data` (intro subheadings, About cards/tiles, speaker/join CTAs) so nothing stays hard-coded. Added `zod`; `next.config` allows Supabase image hosts. Verified: `next build` clean; browser-checked **online** (all sections from the API) and **fallback** (dead API → identical render from `fallback.json`); fixed a Postgres-timestamp (`+00`) date-parse bug found via the browser. |
| 2026-06-22 | [DOCS] | Noted **pending / not-yet-verified** items (admin-side): reply/confirmation emails (needs the admin's verified Resend domain), webhook stats, scheduled-campaign cron, transient `/admin/events` 500. The site's reads, fallback, theme and form submits are all browser-verified. |
