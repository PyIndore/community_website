'use client';

import { motion } from 'framer-motion';
import { HiLightBulb, HiUserGroup, HiCode, HiAcademicCap } from 'react-icons/hi';

const features = [
  {
    title: 'Knowledge Sharing',
    description: 'Regular meetups, workshops, and seminars to share Python expertise and best practices.',
    icon: HiLightBulb,
  },
  {
    title: 'Vibrant Community',
    description: 'A diverse group of developers — from beginners to experts — helping each other grow.',
    icon: HiUserGroup,
  },
  {
    title: 'Open Source',
    description: 'Encouraging contributions to Python projects and fostering an open-source culture.',
    icon: HiCode,
  },
  {
    title: 'Learning Hub',
    description: 'Resources and mentorship for students and professionals to master Python.',
    icon: HiAcademicCap,
  },
];

const missionItems = [
  'Monthly Tech Talks',
  'Hands-on Workshops',
  'Networking Events',
  'Mentorship Programs',
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Ambient orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-python-blue/[0.06] rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Top gradient divider */}
      <div className="gradient-divider mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-chip mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-dark-text mb-6"
          >
            Empowering Python developers
            <span className="block text-gradient-blue">in Central India</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-dark-muted text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We are a community of Python enthusiasts in Indore dedicated to promoting Python
            through collaboration, education, and innovation.
          </motion.p>
        </div>

        {/* Feature cards — 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="liquid-glass rounded-2xl p-7 glass-hover"
            >
              <div className="w-11 h-11 rounded-xl liquid-glass-blue flex items-center justify-center mb-5">
                <feature.icon className="text-python-blue-bright w-5 h-5" />
              </div>
              <h3 className="text-dark-text font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-dark-muted text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission block */}
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
              <h3 className="text-2xl font-bold text-dark-text mb-4">
                Our Mission
              </h3>
              <p className="text-dark-muted leading-relaxed mb-6">
                PyIndore aims to build a strong ecosystem for Python developers in Central India.
                We believe in the power of community-driven learning and strive to provide a
                platform where everyone can contribute and grow.
              </p>
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
              <div className="liquid-glass-blue rounded-2xl p-6 text-center">
                <span className="text-gradient-blue font-bold text-lg block mb-2">Innovation First</span>
                <p className="text-dark-muted text-sm leading-relaxed">
                  We push boundaries and embrace modern Python practices.
                </p>
              </div>
              <div className="liquid-glass-gold rounded-2xl p-6 text-center">
                <span className="text-gradient-gold font-bold text-lg block mb-2">Community Driven</span>
                <p className="text-dark-muted text-sm leading-relaxed">
                  Every decision is made with our members at heart.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
