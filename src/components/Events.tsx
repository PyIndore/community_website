'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import type { EventItem, Section } from '@/lib/types';

// Normalise the API's timestamp ("2026-07-21 12:29:55.109+00") to ISO so Date parses it reliably.
const parse = (iso: string) => new Date(String(iso).replace(' ', 'T').replace(/([+-]\d{2})$/, '$1:00'));
const fmtDate = (iso: string) => {
  const d = parse(iso);
  return Number.isNaN(+d) ? '' : d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
};
const fmtTime = (iso: string) => {
  const d = parse(iso);
  return Number.isNaN(+d) ? '' : d.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' });
};

const DEFAULT_SPEAKER_CTA = {
  heading: 'Want to speak at PyIndore?',
  body: 'Share your Python knowledge with our community. All experience levels are welcome.',
  label: 'Become a Speaker',
  href: '#contact',
};

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const itemVariants = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function Events({ intro, events }: { intro?: Section; events: EventItem[] }) {
  const now = Date.now();
  const upcoming = events.filter((e) => +parse(e.startsAt) >= now).sort((a, b) => +parse(a.startsAt) - +parse(b.startsAt));
  const past = events.filter((e) => +parse(e.startsAt) < now).sort((a, b) => +parse(b.startsAt) - +parse(a.startsAt));
  const speakerCta = { ...DEFAULT_SPEAKER_CTA, ...((intro?.data?.speakerCta as object) ?? {}) };

  return (
    <section id="events" className="py-32 relative">
      <div className="absolute left-0 bottom-0 w-[600px] h-[400px] bg-python-blue/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-divider mb-20" />

        {/* Section header */}
        <div className="text-center mb-16">
          {intro?.eyebrow && (
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-4">
              <span className="section-chip">{intro.eyebrow}</span>
            </motion.div>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-dark-text mb-4"
          >
            {intro?.heading}
          </motion.h2>
          {intro?.subheading && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.14 }}
              className="text-dark-muted text-lg max-w-2xl mx-auto mb-16"
            >
              {intro.subheading}
            </motion.p>
          )}
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex items-center mb-6">
            <span className="w-5 h-px bg-python-blue inline-block mr-3 align-middle" />
            <span className="text-xs uppercase tracking-widest text-dark-tertiary font-semibold">Upcoming Events</span>
          </motion.div>

          {upcoming.length > 0 ? (
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcoming.map((event) => (
                <motion.div key={event.id} variants={itemVariants} className="liquid-glass rounded-2xl overflow-hidden glass-hover">
                  <div className="relative h-44 bg-gradient-to-br from-python-blue/10 to-transparent flex items-center justify-center">
                    <FaCalendarAlt className="w-12 h-12 text-python-blue/20" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-python-blue/90 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">{event.type}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-dark-text font-semibold mb-2 leading-snug">{event.title}</h4>
                    <p className="text-dark-muted text-sm leading-relaxed mb-5 line-clamp-2">{event.description}</p>
                    <div className="space-y-2 text-sm text-dark-muted mb-6">
                      <div className="flex items-center gap-2.5">
                        <FaClock className="w-3.5 h-3.5 text-python-blue shrink-0" />
                        {fmtDate(event.startsAt)}
                        {fmtTime(event.startsAt) ? ` · ${fmtTime(event.startsAt)}` : ''}
                      </div>
                      <div className="flex items-center gap-2.5">
                        <FaMapMarkerAlt className="w-3.5 h-3.5 text-python-blue shrink-0" />
                        {event.venue}
                      </div>
                      {event.speaker && (
                        <div className="flex items-center gap-2.5">
                          <FaUser className="w-3.5 h-3.5 text-python-blue shrink-0" />
                          {event.speaker}
                        </div>
                      )}
                    </div>
                    <a
                      href={event.registrationUrl || '#contact'}
                      target={event.registrationUrl ? '_blank' : undefined}
                      rel={event.registrationUrl ? 'noopener noreferrer' : undefined}
                      className="block text-center w-full bg-python-blue text-white py-3 rounded-xl font-medium text-sm hover:bg-python-blue-bright btn-glow transition-all duration-200"
                    >
                      Register Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="liquid-glass rounded-2xl py-20 px-8 text-center mt-6">
              <FaCalendarAlt className="text-dark-tertiary/50 mx-auto mb-5" style={{ width: 48, height: 48 }} />
              <h4 className="text-dark-text font-semibold text-lg mb-2">No upcoming events scheduled</h4>
              <p className="text-dark-muted text-sm max-w-sm mx-auto mb-8">We&apos;re planning exciting new events. Subscribe to our newsletter to get notified first.</p>
            </motion.div>
          )}
        </div>

        {/* Past Events */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex items-center mb-6">
            <span className="w-5 h-px bg-python-yellow inline-block mr-3 align-middle" />
            <span className="text-xs uppercase tracking-widest text-dark-tertiary font-semibold">Recent Events</span>
          </motion.div>

          {past.length > 0 ? (
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {past.map((event) => (
                <motion.div key={event.id} variants={itemVariants} className="liquid-glass rounded-2xl p-5 glass-hover">
                  <div className="text-gradient-gold font-medium text-xs mb-2 uppercase tracking-wide">
                    {parse(event.startsAt).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
                  </div>
                  <h4 className="font-semibold text-dark-text text-sm mb-3 leading-snug">{event.title}</h4>
                  {event.attendees != null && (
                    <div className="flex items-center text-dark-muted text-xs gap-1.5">
                      <FaUser className="w-3 h-3 text-python-blue shrink-0" />
                      {event.attendees} attendees
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="liquid-glass rounded-2xl py-16 px-8 text-center mt-6">
              <FaCalendarAlt className="text-dark-tertiary/50 mx-auto mb-5" style={{ width: 40, height: 40 }} />
              <h4 className="text-dark-text font-semibold text-lg mb-2">No past events yet</h4>
              <p className="text-dark-muted text-sm max-w-sm mx-auto">Our community is just getting started. Stay tuned for upcoming events.</p>
            </motion.div>
          )}
        </div>

        {/* Speaker CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-20 liquid-glass-blue rounded-2xl p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-dark-text mb-3">{speakerCta.heading}</h3>
          <p className="text-dark-muted mb-8 max-w-md mx-auto">{speakerCta.body}</p>
          <a href={speakerCta.href} className="inline-block bg-python-yellow text-dark-bg rounded-full px-8 py-3.5 font-semibold hover:opacity-90 transition-all" style={{ boxShadow: '0 0 20px rgba(255,212,59,0.3)' }}>
            {speakerCta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
