'use client';

import { motion } from 'framer-motion';
import { FaTelegram, FaLinkedin, FaGithub, FaMeetup, FaWhatsapp, FaUsers } from 'react-icons/fa';
import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface SocialPlatform {
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  bgColor: string;
}

interface CommunityFeature {
  icon: string;
  title: string;
  description: string;
}

export default function Community() {
  const communityFeatures: CommunityFeature[] = [
    {
      icon: "💬",
      title: "Active Discussions",
      description: "Join our vibrant online community for daily discussions, Q&A, and knowledge sharing."
    },
    {
      icon: "🤝",
      title: "Mentorship",
      description: "Connect with experienced developers who can guide you in your Python journey."
    },
    {
      icon: "🚀",
      title: "Project Collaboration",
      description: "Find team members for your projects or contribute to community-driven initiatives."
    },
    {
      icon: "📚",
      title: "Learning Resources",
      description: "Access curated learning materials, tutorials, and best practices shared by the community."
    },
    {
      icon: "🎯",
      title: "Career Opportunities",
      description: "Discover job openings, internships, and freelance opportunities in the Python ecosystem."
    },
    {
      icon: "🏆",
      title: "Recognition",
      description: "Celebrate achievements and get recognised for your contributions to the community."
    }
  ];

  const socialPlatforms: SocialPlatform[] = [
    {
      name: "Telegram",
      description: "Daily discussions",
      href: "https://t.me/pyindore",
      icon: <FaTelegram className="w-6 h-6" />,
      bgColor: "bg-[#0088cc]"
    },
    {
      name: "LinkedIn",
      description: "Professional networking",
      href: "https://www.linkedin.com/company/pyindore",
      icon: <FaLinkedin className="w-6 h-6" />,
      bgColor: "bg-[#0077b5]"
    },
    {
      name: "WhatsApp",
      description: "Quick community chat",
      href: "https://chat.whatsapp.com/CHZQsawCv9YGjYw2MFtcRu",
      icon: <FaWhatsapp className="w-6 h-6" />,
      bgColor: "bg-[#25d366]"
    },
    {
      name: "GitHub",
      description: "Open source projects",
      href: "https://github.com/pyindore",
      icon: <FaGithub className="w-6 h-6" />,
      bgColor: "bg-[#333]"
    },
    {
      name: "Meetup",
      description: "Event registration",
      href: "https://www.meetup.com/pyindore",
      icon: <FaMeetup className="w-6 h-6" />,
      bgColor: "bg-[#ed1c40]"
    }
  ];

  const testimonials: Testimonial[] = [
    // {
    //   name: "Aakash Verma",
    //   role: "Software Engineer",
    //   content: "PyIndore has been instrumental in my career growth. The community's support and regular workshops helped me transition to a confident Python developer.",
    //   avatar: "AV"
    // },
    // {
    //   name: "Sneha Agarwal",
    //   role: "Data Scientist",
    //   content: "The mentorship program at PyIndore connected me with amazing professionals who guided me through complex data science concepts.",
    //   avatar: "SA"
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="community" className="py-32 relative">
      {/* Ambient orb */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-python-yellow/5 rounded-full blur-[120px] pointer-events-none -z-10" />

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
            <span className="section-chip">Community</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            <span className="text-dark-text">Be part of </span>
            <span className="text-gradient-blue">something bigger</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="text-dark-muted text-lg max-w-2xl mx-auto mb-16"
          >
            Connect with Indore&apos;s most active Python community. Learn, collaborate, and grow
            alongside passionate developers.
          </motion.p>
        </div>

        {/* Community features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="liquid-glass rounded-2xl p-6 glass-hover"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-dark-text font-semibold mb-2">{feature.title}</h3>
              <p className="text-dark-muted text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Platforms section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 liquid-glass rounded-2xl p-8"
        >
          <h3 className="text-dark-text font-semibold text-lg mb-8">Find us everywhere</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {socialPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-dark-bg/40 transition-all cursor-pointer group"
              >
                <div className={`w-12 h-12 ${platform.bgColor} rounded-xl flex items-center justify-center text-white mb-1 group-hover:scale-105 transition-transform`}>
                  {platform.icon}
                </div>
                <span className="text-dark-muted text-xs font-medium">{platform.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-16">
          {testimonials.length > 0 ? (
            <>
              <h3 className="text-dark-text font-semibold text-lg mb-8">What our members say</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="liquid-glass rounded-2xl p-6"
                  >
                    <p className="text-dark-muted text-sm italic leading-relaxed mb-6">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-python-blue/20 rounded-full flex items-center justify-center text-python-blue font-semibold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="text-dark-text font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-python-blue text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="liquid-glass rounded-2xl py-16 text-center"
            >
              <FaUsers className="text-dark-tertiary/40 mx-auto mb-4" style={{ width: 40, height: 40 }} />
              <h4 className="text-dark-text font-semibold mb-2">Stories coming soon</h4>
              <p className="text-dark-muted text-sm max-w-sm mx-auto">
                Be among the first to share your PyIndore journey and inspire others.
              </p>
              <button className="liquid-glass rounded-full px-6 py-2 text-sm text-dark-muted hover:text-dark-text glass-hover transition-all mt-6">
                Share Your Story
              </button>
            </motion.div>
          )}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="liquid-glass-blue rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Decorative orb inside */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-python-blue/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-dark-text mb-4">
                Ready to join <span className="text-gradient-blue">PyIndore</span>?
              </h3>
              <p className="text-dark-muted text-lg mb-8 max-w-xl mx-auto">
                Start your journey with Indore&apos;s most active Python community. Connect with developers,
                learn new skills, and advance your career.
              </p>
              <a
                href="https://t.me/pyindore"
                className="bg-python-yellow text-dark-bg rounded-full px-10 py-4 font-semibold hover:opacity-90 transition-all inline-block"
                style={{ boxShadow: '0 0 30px rgba(255,212,59,0.25)' }}
              >
                Join Now — It&apos;s Free
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
