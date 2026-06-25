/**
 * zod schemas mirroring the Admin public API DTOs. Tolerant by design — unknown
 * keys are stripped (not rejected), nullables are explicit — so an extra/changed
 * field never crashes a render. On any parse failure the data layer uses the fallback.
 */
import { z } from "zod";

const Cta = z.object({ label: z.string(), href: z.string() });
const NavLink = z.object({ label: z.string(), href: z.string(), location: z.string(), order: z.number() });
const Link = z.object({ label: z.string(), url: z.string() });

export const SiteSchema = z.object({
  brand: z.object({
    name: z.string(),
    logoUrl: z.string().nullable(),
    faviconUrl: z.string().nullable(),
    tagline: z.string(),
  }),
  theme: z.object({
    colors: z.record(z.string(), z.string()).default({}),
    background: z.string().nullable().default(null),
    fonts: z.object({ heading: z.string(), body: z.string() }).partial().default({}),
  }),
  seo: z.object({
    titleDefault: z.string(),
    descriptionDefault: z.string(),
    ogImage: z.string().nullable(),
  }),
  contact: z.object({ email: z.string(), location: z.string() }),
  header: z.object({ ctaLabel: z.string(), ctaHref: z.string() }),
  nav: z.array(NavLink),
  footer: z.object({
    blurb: z.string(),
    resourceLinks: z.array(Link),
    newsletterCopy: z.string(),
    copyright: z.string(),
    legalLinks: z.array(Link),
    madeWithText: z.string(),
  }),
});

export const SectionSchema = z.object({
  key: z.string(),
  eyebrow: z.string().nullable(),
  heading: z.string().nullable(),
  subheading: z.string().nullable(),
  body: z.string().nullable(),
  ctas: z.array(Cta).default([]),
  items: z.array(z.record(z.string(), z.unknown())).default([]),
  data: z.record(z.string(), z.unknown()).default({}),
});
export const SectionsSchema = z.array(SectionSchema);

export const EventSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  type: z.string(),
  startsAt: z.string(),
  endsAt: z.string().nullable(),
  venue: z.string(),
  speaker: z.string().nullable(),
  coverImageUrl: z.string().nullable(),
  registrationUrl: z.string().nullable(),
  attendees: z.number().nullable(),
});

export const CommunityFeatureSchema = z.object({
  id: z.string(),
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

export const TestimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  content: z.string(),
  avatarUrl: z.string().nullable().default(null),
});

export const SocialLinkSchema = z.object({
  id: z.string(),
  platform: z.string(),
  label: z.string(),
  description: z.string().nullable(),
  url: z.string(),
});

export const FaqSchema = z.object({ id: z.string(), question: z.string(), answer: z.string() });
export const InquiryTypeSchema = z.object({ id: z.string(), value: z.string(), label: z.string() });
export const SponsorSchema = z.object({
  id: z.string(),
  name: z.string(),
  logoUrl: z.string().nullable(),
  url: z.string(),
  tier: z.string().nullable(),
});
export const MemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  bio: z.string().nullable(),
  avatarUrl: z.string().nullable(),
  socials: z.array(z.unknown()).default([]),
});
