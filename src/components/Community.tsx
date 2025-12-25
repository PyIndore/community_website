'use client';

import { motion } from 'framer-motion';
import { FaTelegram, FaLinkedin, FaGithub, FaMeetup, FaWhatsapp, FaQuoteLeft, FaUsers } from 'react-icons/fa';

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
  icon: JSX.Element;
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
      description: "Celebrate achievements and get recognized for your contributions to the community."
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
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="community" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Join Our <span className="text-python-yellow">Community</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-dark-muted max-w-3xl mx-auto"
          >
            Be part of Indore&apos;s most active Python community. Connect, learn, and grow together
            with passionate developers from all backgrounds.
          </motion.p>
        </div>

        {/* Community Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-dark-card border border-dark-border p-8 rounded-2xl hover:border-python-blue/30 transition-all duration-300"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-dark-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-card/50 border border-dark-border rounded-3xl p-10 mb-24"
        >
          <h3 className="text-2xl font-bold text-white mb-12 text-center">Connect With Us</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {socialPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className={`w-16 h-16 ${platform.bgColor} rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {platform.icon}
                </div>
                <h4 className="font-bold text-white text-sm mb-1">{platform.name}</h4>
                <p className="text-dark-muted text-[10px] text-center uppercase tracking-widest">{platform.description}</p>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-12 text-center">What Our Members Say</h3>

          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-dark-card border border-dark-border p-8 rounded-2xl relative"
                >
                  <FaQuoteLeft className="absolute top-6 right-8 text-python-blue/10 w-12 h-12" />
                  <p className="text-dark-muted italic leading-relaxed mb-8 relative z-10">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-python-blue to-blue-600 rounded-full flex items-center justify-center text-white font-black mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-python-blue text-xs font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-dark-card/30 border border-dark-border rounded-3xl">
              <FaUsers className="w-16 h-16 text-dark-muted/30 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-white mb-3">Community is Growing</h4>
              <p className="text-dark-muted mb-8 max-w-md mx-auto">
                Be one of the first to share your story and inspire others!
              </p>
              <button className="bg-python-blue text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-all duration-300">
                Share Your Story
              </button>
            </div>
          )}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-gradient-to-br from-python-blue to-blue-800 rounded-3xl p-12 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Join PyIndore?</h3>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Start your journey with India&apos;s most active Python community in Indore.
                Connect with developers, learn new skills, and advance your career.
              </p>
              <button className="bg-python-yellow text-dark-bg px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform duration-300 shadow-2xl shadow-python-yellow/20">
                Join Now - It&apos;s Free!
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}