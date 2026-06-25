import type { z } from "zod";
import type * as S from "./schemas";

export type Site = z.infer<typeof S.SiteSchema>;
export type Section = z.infer<typeof S.SectionSchema>;
export type EventItem = z.infer<typeof S.EventSchema>;
export type CommunityFeature = z.infer<typeof S.CommunityFeatureSchema>;
export type Testimonial = z.infer<typeof S.TestimonialSchema>;
export type SocialLink = z.infer<typeof S.SocialLinkSchema>;
export type Faq = z.infer<typeof S.FaqSchema>;
export type InquiryType = z.infer<typeof S.InquiryTypeSchema>;
export type Sponsor = z.infer<typeof S.SponsorSchema>;
export type Member = z.infer<typeof S.MemberSchema>;
export type Sections = Record<string, Section>;
