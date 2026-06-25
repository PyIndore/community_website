/** Maps an API `social-link.platform` to a presentation icon + brand colour (the API ships data, not UI). */
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaMeetup, FaTelegram, FaTwitter, FaUsers, FaWhatsapp } from "react-icons/fa";
import { SiEventbrite } from "react-icons/si";

const MAP: Record<string, { Icon: IconType; color: string }> = {
  telegram: { Icon: FaTelegram, color: "#0088cc" },
  whatsapp: { Icon: FaWhatsapp, color: "#25d366" },
  linkedin: { Icon: FaLinkedin, color: "#0077b5" },
  github: { Icon: FaGithub, color: "#333333" },
  meetup: { Icon: FaMeetup, color: "#ed1c40" },
  luma: { Icon: SiEventbrite, color: "#eb4612" },
  twitter: { Icon: FaTwitter, color: "#1da1f2" },
  x: { Icon: FaTwitter, color: "#1da1f2" },
};

export const socialMeta = (platform: string) => MAP[platform?.toLowerCase()] ?? { Icon: FaUsers, color: "#306998" };
