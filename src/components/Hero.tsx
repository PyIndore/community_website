'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-python-blue/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-python-yellow/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight"
          >
            Welcome to{' '}
            <span className="text-python-blue">Py</span>
            <span className="text-python-yellow">Indore</span>
          </motion.h1>

          {/* Hero Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-dark-muted mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            The leading and official community dedicated to Python programming in Indore, India
          </motion.p>

          {/* Hero Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-dark-muted/80 mb-14 max-w-3xl mx-auto"
          >
            Join our vibrant, active, and rapidly growing hub for everyone passionate about Python –
            from seasoned software engineers and data scientists to aspiring developers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24"
          >
            <button className="group relative bg-python-blue text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-all duration-300 shadow-[0_0_20px_rgba(48,105,152,0.3)] hover:shadow-[0_0_30px_rgba(48,105,152,0.5)] w-full sm:w-auto">
              Join Our Community
              <span className="absolute inset-0 rounded-full border-2 border-white/20 scale-100 group-hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
            </button>
            <button className="border-2 border-python-blue/50 text-python-blue px-10 py-4 rounded-full text-lg font-bold hover:bg-python-blue/10 transition-all duration-300 w-full sm:w-auto">
              Upcoming Events
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { label: 'Active Members', value: '500+' },
              { label: 'Events Hosted', value: '50+' },
              { label: 'Years Strong', value: '5+' },
            ].map((stat, index) => (
              <div key={index} className="bg-dark-card/50 backdrop-blur-md border border-dark-border rounded-2xl p-8 hover:border-python-blue/50 transition-colors duration-300 group">
                <div className="text-4xl font-black text-python-blue mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-dark-muted font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}