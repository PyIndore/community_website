'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Section, Site } from '@/lib/types';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
});

export default function Hero({ hero, brand }: { hero?: Section; brand: Site['brand'] }) {
  // Two-tone heading: first sentence in the hero gradient, the rest in blue.
  const [line1, ...rest] = (hero?.heading ?? '').split(/(?<=\.)\s+/);
  const line2 = rest.join(' ');
  const ctas = hero?.ctas ?? [];
  const pills = (hero?.items ?? []).map((i) => (i as { label?: string }).label).filter(Boolean) as string[];

  return (
    <section id="home" className="relative pt-40 pb-28 lg:pt-52 lg:pb-36 overflow-hidden">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-python-blue/20 blur-[120px] animate-glow" />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-python-yellow/8 blur-[100px] animate-glow"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Logo */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            <Image
              src={brand.logoUrl || '/logo.png'}
              alt={brand.name}
              width={100}
              height={130}
              className="object-contain logo-glow animate-float"
            />
          </motion.div>
        </motion.div>

        {/* Badge pill */}
        {hero?.eyebrow && (
          <motion.div {...fadeUp(0.05)} className="inline-flex mb-8">
            <span className="border border-python-blue/30 bg-python-blue/10 text-python-blue-bright text-xs rounded-full px-4 py-1.5 tracking-wide">
              {hero.eyebrow}
            </span>
          </motion.div>
        )}

        {/* Main heading */}
        <motion.h1
          {...fadeUp(0.12)}
          className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-bold tracking-tight leading-none mb-6"
        >
          <span className="block text-gradient-hero">{line1}</span>
          {line2 && <span className="block text-gradient-blue">{line2}</span>}
        </motion.h1>

        {/* Subheading */}
        {hero?.subheading && (
          <motion.p {...fadeUp(0.22)} className="text-dark-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            {hero.subheading}
          </motion.p>
        )}

        {/* CTA Buttons */}
        {ctas.length > 0 && (
          <motion.div {...fadeUp(0.32)} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {ctas.map((cta, i) => (
              <a
                key={cta.href + i}
                href={cta.href}
                className={
                  i === 0
                    ? 'bg-python-blue text-white rounded-full px-8 py-3.5 font-semibold btn-glow hover:bg-python-blue-bright transition-all duration-200 w-full sm:w-auto text-center'
                    : 'liquid-glass rounded-full px-8 py-3.5 font-semibold text-dark-muted hover:text-dark-text transition-all duration-200 w-full sm:w-auto text-center glass-hover'
                }
              >
                {cta.label}
                {i > 0 ? ' →' : ''}
              </a>
            ))}
          </motion.div>
        )}

        {/* Founding pills */}
        {pills.length > 0 && (
          <motion.div {...fadeUp(0.42)} className="flex items-center justify-center gap-3 flex-wrap">
            {pills.map((item) => (
              <span key={item} className="liquid-glass rounded-full px-4 py-1.5 text-dark-muted text-xs font-medium">
                {item}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
