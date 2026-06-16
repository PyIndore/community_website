'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMeetup,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown
} from 'react-icons/fa';
import { SiEventbrite } from 'react-icons/si';
import React from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'general'
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const socialLinks = [
    { name: 'Meetup', description: 'RSVP Events', href: 'https://www.meetup.com/pyindore', icon: <FaMeetup className="w-5 h-5" />, color: 'text-[#ed1c40]' },
    { name: 'LinkedIn', description: 'Follow Page', href: 'https://www.linkedin.com/company/pyindore', icon: <FaLinkedin className="w-5 h-5" />, color: 'text-[#0077b5]' },
    { name: 'WhatsApp', description: 'Join Chat', href: 'https://chat.whatsapp.com/CHZQsawCv9YGjYw2MFtcRu?mode=gi_t', icon: <FaWhatsapp className="w-5 h-5" />, color: 'text-[#25d366]' },
    { name: 'Telegram', description: 'Join Group', href: 'https://t.me/pyindore', icon: <FaTelegram className="w-5 h-5" />, color: 'text-[#0088cc]' },
    { name: 'Luma', description: 'Events', href: 'https://lu.ma/pyindore', icon: <SiEventbrite className="w-5 h-5" />, color: 'text-[#eb4612]' },
    { name: 'Twitter', description: 'Follow Us', href: 'https://twitter.com/pyindore', icon: <FaTwitter className="w-5 h-5" />, color: 'text-[#1da1f2]' }
  ];

  const faqData = [
    {
      question: "How do I join PyIndore?",
      answer: "Simply join our Telegram group or follow us on social media to get started! We welcome everyone from beginners to experts."
    },
    {
      question: "Are events free?",
      answer: "Most of our events are free. Premium workshops might charge a small fee to cover venue and material costs."
    },
    {
      question: "Can I speak at an event?",
      answer: "Absolutely! We welcome speakers of all experience levels. Contact us with your topic idea and we'll help you prepare."
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '', type: 'general' });
  };

  const inputClass =
    'w-full bg-dark-bg/60 backdrop-blur-sm border border-dark-border rounded-xl px-4 py-3 text-dark-text text-sm placeholder-dark-tertiary focus:border-python-blue/50 focus:outline-none transition-all';

  const labelClass = 'text-xs font-semibold text-dark-muted mb-1.5 block uppercase tracking-wide';

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Gradient divider */}
        <div className="gradient-divider mb-20" />

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-4"
          >
            <span className="section-chip">Contact</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-dark-text mb-4"
          >
            Get in<span className="text-gradient-blue"> touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="text-dark-muted text-lg max-w-2xl mx-auto mb-16"
          >
            Have questions about PyIndore? Want to collaborate or speak at our events?
            We&apos;d love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left — Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="liquid-glass rounded-2xl p-8"
          >
            <h3 className="text-dark-text font-semibold text-xl mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Inquiry Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="general">General Inquiry</option>
                  <option value="speaker">Become a Speaker</option>
                  <option value="partnership">Partnership</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-python-blue text-white rounded-xl py-3.5 font-semibold hover:bg-python-blue-bright btn-glow transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right — Info + Social + FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="space-y-5"
          >
            {/* Quick info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: FaEnvelope, label: 'Email', value: 'contact@pyindore.org' },
                { icon: FaMapMarkerAlt, label: 'Location', value: 'Indore, MP' },
              ].map((info, i) => (
                <div key={i} className="liquid-glass rounded-xl p-4 flex items-center gap-3">
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
            <div className="mt-5 liquid-glass rounded-2xl p-6">
              <h4 className="text-dark-text font-semibold mb-5">Follow our journey</h4>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-dark-bg/40 transition-all group"
                  >
                    <div className={`${link.color}`}>{link.icon}</div>
                    <span className="text-dark-tertiary text-[9px] font-semibold uppercase tracking-wide">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-5 space-y-2">
              <h4 className="text-dark-text font-semibold mb-4">Common questions</h4>
              {faqData.map((faq, index) => (
                <div key={index} className="liquid-glass rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left"
                  >
                    <span className="text-dark-muted text-sm font-medium hover:text-dark-text transition-colors">
                      {faq.question}
                    </span>
                    <FaChevronDown
                      className={`text-dark-tertiary shrink-0 ml-3 transition-transform duration-200 ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                      size={12}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-dark-tertiary text-sm px-5 pb-5 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
