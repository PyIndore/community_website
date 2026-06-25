'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { FaChevronDown, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import type { Faq, InquiryType, Section, Site, SocialLink } from '@/lib/types';
import { socialMeta } from './social-meta';
import { API_BASE } from '@/lib/api-base';

export default function Contact({
  intro,
  contact,
  socials,
  faq,
  inquiryTypes,
}: {
  intro?: Section;
  contact: Site['contact'];
  socials: SocialLink[];
  faq: Faq[];
  inquiryTypes: InquiryType[];
}) {
  const defaultType = inquiryTypes[0]?.value ?? 'general';
  const [formData, setFormData] = useState({ name: '', email: '', message: '', type: defaultType });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      setFormData({ name: '', email: '', message: '', type: defaultType });
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full bg-dark-bg/60 backdrop-blur-sm border border-dark-border rounded-xl px-4 py-3 text-dark-text text-sm placeholder-dark-tertiary focus:border-python-blue/50 focus:outline-none transition-all';
  const labelClass = 'text-xs font-semibold text-dark-muted mb-1.5 block uppercase tracking-wide';

  return (
    <section id="contact" className="py-32 relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Contact Form */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="liquid-glass rounded-2xl p-8">
            <h3 className="text-dark-text font-semibold text-xl mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Jane Doe" />
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="jane@example.com" />
                </div>
              </div>

              <div>
                <label className={labelClass}>Inquiry Type</label>
                <select name="type" value={formData.type} onChange={handleChange} className={`${inputClass} appearance-none`}>
                  {inquiryTypes.map((it) => (
                    <option key={it.value} value={it.value}>
                      {it.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="How can we help you?" />
              </div>

              <button type="submit" disabled={status === 'sending'} className="w-full bg-python-blue text-white rounded-xl py-3.5 font-semibold hover:bg-python-blue-bright btn-glow transition-all duration-200 disabled:opacity-60">
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              {status === 'sent' && <p className="text-green-400 text-sm text-center">Thanks! We&apos;ll get back to you soon.</p>}
              {status === 'error' && <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>}
            </form>
          </motion.div>

          {/* Right — Info + Social + FAQ */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }} className="space-y-5">
            {/* Quick info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: FaEnvelope, label: 'Email', value: contact.email },
                { icon: FaMapMarkerAlt, label: 'Location', value: contact.location },
              ].map((info) => (
                <div key={info.label} className="liquid-glass rounded-xl p-4 flex items-center gap-3">
                  <div className="w-9 h-9 liquid-glass-blue rounded-lg flex items-center justify-center text-python-blue-bright shrink-0">
                    <info.icon size={16} />
                  </div>
                  <div>
                    <p className="text-dark-tertiary text-[10px] uppercase tracking-wider font-semibold">{info.label}</p>
                    <p className="text-dark-text text-sm font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            {socials.length > 0 && (
              <div className="mt-5 liquid-glass rounded-2xl p-6">
                <h4 className="text-dark-text font-semibold mb-5">Follow our journey</h4>
                <div className="grid grid-cols-3 gap-3">
                  {socials.map((s) => {
                    const { Icon, color } = socialMeta(s.platform);
                    return (
                      <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-dark-bg/40 transition-all group">
                        <div style={{ color }}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-dark-tertiary text-[9px] font-semibold uppercase tracking-wide">{s.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            {/* FAQ */}
            {faq.length > 0 && (
              <div className="mt-5 space-y-2">
                <h4 className="text-dark-text font-semibold mb-4">Common questions</h4>
                {faq.map((item, index) => (
                  <div key={item.id} className="liquid-glass rounded-xl overflow-hidden">
                    <button onClick={() => setExpandedFaq(expandedFaq === index ? null : index)} className="w-full flex justify-between items-center px-5 py-4 text-left">
                      <span className="text-dark-muted text-sm font-medium hover:text-dark-text transition-colors">{item.question}</span>
                      <FaChevronDown className={`text-dark-tertiary shrink-0 ml-3 transition-transform duration-200 ${expandedFaq === index ? 'rotate-180' : ''}`} size={12} />
                    </button>
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                          <p className="text-dark-tertiary text-sm px-5 pb-5 leading-relaxed">{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
