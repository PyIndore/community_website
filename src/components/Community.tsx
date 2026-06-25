'use client';

import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';
import type { CommunityFeature, Section, SocialLink, Testimonial } from '@/lib/types';
import { socialMeta } from './social-meta';

const initials = (name: string) =>
  name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();

const DEFAULT_JOIN_CTA = {
  heading: 'Ready to join PyIndore?',
  body: "Start your journey with Indore's most active Python community. Connect with developers, learn new skills, and advance your career.",
  label: "Join Now — It's Free",
  href: '',
};

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const itemVariants = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function Community({
  intro,
  features,
  socials,
  testimonials,
}: {
  intro?: Section;
  features: CommunityFeature[];
  socials: SocialLink[];
  testimonials: Testimonial[];
}) {
  const joinCta = { ...DEFAULT_JOIN_CTA, ...((intro?.data?.joinCta as object) ?? {}) };
  const joinHref = joinCta.href || socials.find((s) => s.platform === 'telegram')?.url || '#contact';

  return (
    <section id="community" className="py-32 relative">
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-python-yellow/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-divider mb-20" />

        {/* Section header */}
        <div className="text-center mb-16">
          {intro?.eyebrow && (
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-4">
              <span className="section-chip">{intro.eyebrow}</span>
            </motion.div>
          )}
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 }} className="text-4xl md:text-5xl font-bold tracking-tight text-dark-text mb-4">
            {intro?.heading}
          </motion.h2>
          {intro?.subheading && (
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.14 }} className="text-dark-muted text-lg max-w-2xl mx-auto mb-16">
              {intro.subheading}
            </motion.p>
          )}
        </div>

        {/* Community features grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants} className="liquid-glass rounded-2xl p-6 glass-hover">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-dark-text font-semibold mb-2">{feature.title}</h3>
              <p className="text-dark-muted text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Platforms section */}
        {socials.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-16 liquid-glass rounded-2xl p-8">
            <h3 className="text-dark-text font-semibold text-lg mb-8">Find us everywhere</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {socials.map((s) => {
                const { Icon, color } = socialMeta(s.platform);
                return (
                  <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-dark-bg/40 transition-all cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-1 group-hover:scale-105 transition-transform" style={{ backgroundColor: color }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-dark-muted text-xs font-medium">{s.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Testimonials */}
        <div className="mt-16">
          {testimonials.length > 0 ? (
            <>
              <h3 className="text-dark-text font-semibold text-lg mb-8">What our members say</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {testimonials.map((t, index) => (
                  <motion.div key={t.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="liquid-glass rounded-2xl p-6">
                    <p className="text-dark-muted text-sm italic leading-relaxed mb-6">&quot;{t.content}&quot;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-python-blue/20 rounded-full flex items-center justify-center text-python-blue font-semibold text-sm">{initials(t.name)}</div>
                      <div>
                        <p className="text-dark-text font-semibold text-sm">{t.name}</p>
                        <p className="text-python-blue text-xs">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="liquid-glass rounded-2xl py-16 text-center">
              <FaUsers className="text-dark-tertiary/40 mx-auto mb-4" style={{ width: 40, height: 40 }} />
              <h4 className="text-dark-text font-semibold mb-2">Stories coming soon</h4>
              <p className="text-dark-muted text-sm max-w-sm mx-auto">Be among the first to share your PyIndore journey and inspire others.</p>
            </motion.div>
          )}
        </div>

        {/* Join CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-16">
          <div className="liquid-glass-blue rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-python-blue/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-dark-text mb-4">{joinCta.heading}</h3>
              <p className="text-dark-muted text-lg mb-8 max-w-xl mx-auto">{joinCta.body}</p>
              <a href={joinHref} target="_blank" rel="noopener noreferrer" className="bg-python-yellow text-dark-bg rounded-full px-10 py-4 font-semibold hover:opacity-90 transition-all inline-block" style={{ boxShadow: '0 0 30px rgba(255,212,59,0.25)' }}>
                {joinCta.label}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
