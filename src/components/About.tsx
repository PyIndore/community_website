'use client';

import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { HiAcademicCap, HiCode, HiLightBulb, HiUserGroup } from 'react-icons/hi';
import type { Section } from '@/lib/types';

const FEATURE_ICONS: Record<string, IconType> = {
  lightbulb: HiLightBulb,
  users: HiUserGroup,
  code: HiCode,
  academic: HiAcademicCap,
};

type Feature = { title: string; description: string; icon?: string };
type Tile = { title: string; description: string; variant?: string };

// Used when the admin's `about` section doesn't (yet) carry these in `data`.
const DEFAULT_FEATURES: Feature[] = [
  { title: 'Knowledge Sharing', description: 'Regular meetups, workshops, and seminars to share Python expertise and best practices.', icon: 'lightbulb' },
  { title: 'Vibrant Community', description: 'A diverse group of developers — from beginners to experts — helping each other grow.', icon: 'users' },
  { title: 'Open Source', description: 'Encouraging contributions to Python projects and fostering an open-source culture.', icon: 'code' },
  { title: 'Learning Hub', description: 'Resources and mentorship for students and professionals to master Python.', icon: 'academic' },
];
const DEFAULT_TILES: Tile[] = [
  { title: 'Innovation First', description: 'We push boundaries and embrace modern Python practices.', variant: 'blue' },
  { title: 'Community Driven', description: 'Every decision is made with our members at heart.', variant: 'gold' },
];

export default function About({ section }: { section?: Section }) {
  const data = (section?.data ?? {}) as { features?: Feature[]; tiles?: Tile[]; missionHeading?: string };
  const features = data.features?.length ? data.features : DEFAULT_FEATURES;
  const tiles = data.tiles?.length ? data.tiles : DEFAULT_TILES;
  const missionItems = (section?.items ?? []).map((i) => (i as { label?: string }).label).filter(Boolean) as string[];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-python-blue/[0.06] rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="gradient-divider mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          {section?.eyebrow && (
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-chip mb-4">
              {section.eyebrow}
            </motion.p>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-dark-text mb-6"
          >
            {section?.heading}
          </motion.h2>
          {section?.subheading && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-dark-muted text-lg max-w-2xl mx-auto leading-relaxed"
            >
              {section.subheading}
            </motion.p>
          )}
        </div>

        {/* Feature cards — 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = FEATURE_ICONS[feature.icon ?? ''] ?? HiLightBulb;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="liquid-glass rounded-2xl p-7 glass-hover"
              >
                <div className="w-11 h-11 rounded-xl liquid-glass-blue flex items-center justify-center mb-5">
                  <Icon className="text-python-blue-bright w-5 h-5" />
                </div>
                <h3 className="text-dark-text font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-dark-muted text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mission block */}
        {(section?.body || missionItems.length > 0 || tiles.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-16 liquid-glass rounded-3xl p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left — mission copy */}
              <div>
                <h3 className="text-2xl font-bold text-dark-text mb-4">{data.missionHeading ?? 'Our Mission'}</h3>
                {section?.body && <p className="text-dark-muted leading-relaxed mb-6">{section.body}</p>}
                <ul className="space-y-3">
                  {missionItems.map((item) => (
                    <li key={item} className="flex items-start text-dark-text text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-python-yellow inline-block mr-3 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — accent tiles */}
              <div className="grid grid-cols-1 gap-4">
                {tiles.map((tile) => (
                  <div
                    key={tile.title}
                    className={`${tile.variant === 'gold' ? 'liquid-glass-gold' : 'liquid-glass-blue'} rounded-2xl p-6 text-center`}
                  >
                    <span className={`${tile.variant === 'gold' ? 'text-gradient-gold' : 'text-gradient-blue'} font-bold text-lg block mb-2`}>
                      {tile.title}
                    </span>
                    <p className="text-dark-muted text-sm leading-relaxed">{tile.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
