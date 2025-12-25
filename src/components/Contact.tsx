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
  FaCalendar,
  FaChevronDown
} from 'react-icons/fa';
import { SiEventbrite } from 'react-icons/si';

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
    { name: 'WhatsApp', description: 'Join Chat', href: 'https://chat.whatsapp.com/pyindore', icon: <FaWhatsapp className="w-5 h-5" />, color: 'text-[#25d366]' },
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
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '', type: 'general' });
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Get In <span className="text-python-blue">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-dark-muted max-w-3xl mx-auto"
          >
            Have questions about PyIndore? Want to collaborate or speak at our events?
            We&apos;d love to hear from you!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-card border border-dark-border rounded-3xl p-10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-muted mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-python-blue focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-muted mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-python-blue focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-muted mb-2">Inquiry Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-python-blue focus:border-transparent transition-all outline-none appearance-none"
                >
                  <option value="general">General Inquiry</option>
                  <option value="speaker">Become a Speaker</option>
                  <option value="partnership">Partnership</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-muted mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-python-blue focus:border-transparent transition-all outline-none resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-python-blue hover:bg-blue-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-python-blue/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: FaEnvelope, label: 'Email', value: 'contact@pyindore.org' },
                { icon: FaMapMarkerAlt, label: 'Location', value: 'Indore, MP' },
              ].map((info, i) => (
                <div key={i} className="bg-dark-card/50 border border-dark-border p-6 rounded-2xl flex items-center space-x-4">
                  <div className="w-12 h-12 bg-python-blue/10 rounded-xl flex items-center justify-center text-python-blue">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-dark-muted uppercase tracking-wider font-bold">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Grid */}
            <div className="bg-dark-card border border-dark-border p-8 rounded-3xl">
              <h4 className="text-lg font-bold text-white mb-6">Follow Our Journey</h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="flex flex-col items-center p-4 bg-dark-bg border border-dark-border rounded-2xl hover:border-python-blue/50 transition-all group"
                  >
                    <div className={`${link.color} transition-colors mb-2`}>{link.icon}</div>
                    <span className="text-[10px] text-dark-muted font-bold uppercase tracking-tighter">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white mb-6">Common Questions</h4>
              {faqData.map((faq, index) => (
                <div key={index} className="bg-dark-card/30 border border-dark-border rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center group"
                  >
                    <span className="font-medium text-white group-hover:text-python-blue transition-colors">{faq.question}</span>
                    <FaChevronDown className={`text-dark-muted transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-dark-muted text-sm leading-relaxed">
                          {faq.answer}
                        </div>
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