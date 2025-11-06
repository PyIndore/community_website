'use client';

import { useState } from 'react';
import { 
  FaMeetup, 
  FaLinkedin, 
  FaWhatsapp, 
  FaTelegram, 
  FaTwitter,
  FaCalendarAlt,
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
    {
      name: 'Meetup',
      description: 'RSVP Events',
      href: 'https://www.meetup.com/pyindore',
      icon: <FaMeetup className="w-6 h-6" />
    },
    {
      name: 'LinkedIn',
      description: 'Follow Page',
      href: 'https://www.linkedin.com/company/pyindore',
      icon: <FaLinkedin className="w-6 h-6" />
    },
    {
      name: 'WhatsApp',
      description: 'Join Chat',
      href: 'https://chat.whatsapp.com/pyindore',
      icon: <FaWhatsapp className="w-6 h-6" />
    },
    {
      name: 'Telegram',
      description: 'Join Group',
      href: 'https://t.me/pyindore',
      icon: <FaTelegram className="w-6 h-6" />
    },
    {
      name: 'Luma',
      description: 'Events',
      href: 'https://lu.ma/pyindore',
      icon: <SiEventbrite className="w-6 h-6" />
    },
    {
      name: 'Twitter',
      description: 'Follow Us',
      href: 'https://twitter.com/pyindore',
      icon: <FaTwitter className="w-6 h-6" />
    }
  ];

  const faqData = [
    {
      question: "How do I join PyIndore?",
      answer: "Simply join our Telegram group or follow us on social media to get started! We welcome everyone from beginners to experts. You can also attend our monthly meetups to connect with the community in person."
    },
    {
      question: "Are events free?",
      answer: "Most of our events are free, though some workshops may have a nominal fee for materials. We believe in making Python education accessible to everyone. Premium workshops might charge a small fee to cover venue and material costs."
    },
    {
      question: "Can I speak at an event?",
      answer: "Absolutely! We welcome speakers of all experience levels. Contact us with your topic idea and we'll help you prepare. Whether you're sharing a project, teaching a concept, or discussing your Python journey, we'd love to hear from you."
    },
    {
      question: "What skill level do I need to attend?",
      answer: "All skill levels are welcome! We have events for complete beginners as well as advanced developers. Our community is supportive and inclusive, and we encourage learning at every stage."
    },
    {
      question: "How often do you organize events?",
      answer: "We organize monthly meetups on the 2nd Saturday of each month, plus additional workshops and special events throughout the year. Follow our social media channels to stay updated on upcoming events."
    },
    {
      question: "Can I volunteer or contribute?",
      answer: "Yes! We're always looking for volunteers to help organize events, mentor newcomers, or contribute to community projects. It's a great way to give back and develop leadership skills."
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      type: 'general'
    });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about PyIndore? Want to collaborate or speak at our events? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-python-blue focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-python-blue focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-python-blue focus:border-transparent"
                >
                  <option value="general">General Inquiry</option>
                  <option value="speaker">Become a Speaker</option>
                  <option value="partnership">Partnership</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-python-blue focus:border-transparent"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-python-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-python-blue rounded-lg flex items-center justify-center">
                    <FaEnvelope className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">contact@pyindore.org</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-python-blue rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Indore, Madhya Pradesh</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-python-blue rounded-lg flex items-center justify-center">
                    <FaCalendar className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Meetups</p>
                    <p className="text-gray-600">Every 2nd Saturday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-python-blue to-blue-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <p className="text-blue-100 mb-6">
                Stay updated with our latest events, announcements, and community discussions.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-20 rounded-lg p-3 flex flex-col items-center hover:bg-opacity-30 transition-colors duration-200"
                  >
                    <div className="mb-2">{link.icon}</div>
                    <div className="text-xs font-semibold">{link.name}</div>
                    <div className="text-xs text-blue-100">{link.description}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-4 py-3 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <FaChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          expandedFaq === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        expandedFaq === index
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      } overflow-hidden`}
                    >
                      <div className="px-4 pb-4 pt-2 bg-gray-50">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}