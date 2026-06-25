/** The offline copy (snapshot of the live admin). Regenerate: `pnpm snapshot`. */
import data from "@/data/fallback.json";
import type {
  CommunityFeature,
  EventItem,
  Faq,
  InquiryType,
  Member,
  Section,
  Site,
  SocialLink,
  Sponsor,
  Testimonial,
} from "./types";

export const fallback = data as unknown as {
  site: Site;
  sections: Section[];
  events: EventItem[];
  communityFeatures: CommunityFeature[];
  testimonials: Testimonial[];
  socialLinks: SocialLink[];
  faq: Faq[];
  inquiryTypes: InquiryType[];
  sponsors: Sponsor[];
  members: Member[];
};
