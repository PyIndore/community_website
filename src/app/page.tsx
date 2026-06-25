import About from '@/components/About';
import Community from '@/components/Community';
import Contact from '@/components/Contact';
import Events from '@/components/Events';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import {
  getCommunityFeatures,
  getEvents,
  getFaq,
  getInquiryTypes,
  getSections,
  getSite,
  getSocialLinks,
  getTestimonials,
} from '@/lib/content';

export default async function Home() {
  const [site, sections, events, communityFeatures, testimonials, socialLinks, faq, inquiryTypes] = await Promise.all([
    getSite(),
    getSections(),
    getEvents(),
    getCommunityFeatures(),
    getTestimonials(),
    getSocialLinks(),
    getFaq(),
    getInquiryTypes(),
  ]);

  return (
    <main className="min-h-screen">
      <Header site={site} />
      <Hero hero={sections.hero} brand={site.brand} />
      <About section={sections.about} />
      <Events intro={sections['events-intro']} events={events} />
      <Community intro={sections['community-intro']} features={communityFeatures} socials={socialLinks} testimonials={testimonials} />
      <Contact intro={sections['contact-intro']} contact={site.contact} socials={socialLinks} faq={faq} inquiryTypes={inquiryTypes} />
      <Footer site={site} socials={socialLinks} />
    </main>
  );
}
