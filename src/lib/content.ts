/** Typed content accessors used by the server components. Each binds endpoint + schema + fallback + ISR window. */
import { getList, getObject } from "./api";
import { fallback } from "./fallback";
import * as S from "./schemas";
import type {
  CommunityFeature,
  EventItem,
  Faq,
  InquiryType,
  Member,
  Section,
  Sections,
  Site,
  SocialLink,
  Sponsor,
  Testimonial,
} from "./types";

const HOUR = 3600;
const MED = 600;
const SHORT = 300;

export const getSite = () => getObject<Site>("/site", S.SiteSchema, fallback.site, HOUR);

export async function getSections(): Promise<Sections> {
  const arr = await getObject<Section[]>("/pages/home", S.SectionsSchema, fallback.sections, HOUR);
  return Object.fromEntries(arr.map((s) => [s.key, s]));
}

export const getEvents = () => getList<EventItem>("/events?pageSize=100", S.EventSchema, fallback.events, SHORT);
export const getCommunityFeatures = () =>
  getList<CommunityFeature>("/community-features", S.CommunityFeatureSchema, fallback.communityFeatures, MED);
export const getTestimonials = () => getList<Testimonial>("/testimonials", S.TestimonialSchema, fallback.testimonials, MED);
export const getSocialLinks = () => getList<SocialLink>("/social-links", S.SocialLinkSchema, fallback.socialLinks, MED);
export const getFaq = () => getList<Faq>("/faq", S.FaqSchema, fallback.faq, MED);
export const getInquiryTypes = () => getList<InquiryType>("/inquiry-types", S.InquiryTypeSchema, fallback.inquiryTypes, MED);
export const getSponsors = () => getList<Sponsor>("/sponsors", S.SponsorSchema, fallback.sponsors, MED);
export const getMembers = () => getList<Member>("/members", S.MemberSchema, fallback.members, MED);
