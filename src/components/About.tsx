'use client';

import { motion } from 'framer-motion';
import { HiLightBulb, HiUserGroup, HiCode, HiAcademicCap } from 'react-icons/hi';

export default function About() {
  const features = [
    {
      title: 'Knowledge Sharing',
      description: 'Regular meetups, workshops, and seminars to share Python expertise and best practices.',
      icon: HiLightBulb,
      color: 'text-python-blue',
    },
    {
      title: 'Vibrant Community',
      description: 'A diverse group of developers, from beginners to experts, helping each other grow.',
      icon: HiUserGroup,
      color: 'text-python-yellow',
    },
    {
      title: 'Open Source',
      description: 'Encouraging contributions to Python projects and fostering an open-source culture.',
      icon: HiCode,
      color: 'text-python-blue',
    },
    {
      title: 'Learning Hub',
      description: 'Resources and mentorship for students and professionals to master Python.',
      icon: HiAcademicCap,
      color: 'text-python-yellow',
    },
  ];

  return (
    <section id="about" className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            About <span className="text-python-blue">Py</span>Indore
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-dark-muted max-w-3xl mx-auto"
          >
            We are a community of Python enthusiasts in Indore, dedicated to promoting
            the Python programming language through collaboration and education.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-dark-card border border-dark-border p-8 rounded-2xl hover:border-python-blue/30 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-dark-bg flex items-center justify-center mb-6 border border-dark-border group-hover:border-python-blue/50 transition-colors`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-dark-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-10 rounded-3xl bg-gradient-to-br from-dark-card to-dark-bg border border-dark-border relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-python-blue/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-lg text-dark-muted mb-6 leading-relaxed">
                PyIndore aims to build a strong ecosystem for Python developers in Central India.
                We believe in the power of community-driven learning and strive to provide
                a platform where everyone can contribute and grow.
              </p>
              <ul className="space-y-4">
                {['Monthly Tech Talks', 'Hands-on Workshops', 'Networking Events', 'Mentorship Programs'].map((item) => (
                  <li key={item} className="flex items-center text-white font-medium">
                    <span className="w-2 h-2 bg-python-yellow rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-40 bg-dark-bg rounded-2xl border border-dark-border flex items-center justify-center p-4 text-center">
                <p className="text-python-blue font-bold">Innovation First</p>
              </div>
              <div className="h-40 bg-dark-bg rounded-2xl border border-dark-border flex items-center justify-center p-4 text-center mt-8">
                <p className="text-python-yellow font-bold">Community Driven</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}