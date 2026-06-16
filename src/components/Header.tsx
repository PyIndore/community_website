'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Community', href: '#community' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'liquid-glass-strong border-b border-dark-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="PyIndore"
              width={28}
              height={36}
              className="object-contain logo-glow"
            />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gradient-blue">Py</span>
              <span className="text-dark-text">Indore</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-dark-muted hover:text-dark-text text-sm font-medium transition-colors duration-200 group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-python-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#community"
              className="bg-python-blue text-white text-sm font-medium px-5 py-2 rounded-full btn-glow hover:bg-python-blue-bright transition-all duration-200"
            >
              Join Community
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark-muted hover:text-dark-text p-2 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden liquid-glass-strong border-t border-dark-border overflow-hidden"
          >
            <div className="px-6 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-sm font-medium text-dark-muted hover:text-dark-text rounded-lg transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="#community"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-python-blue text-white text-sm font-medium px-5 py-2.5 rounded-full btn-glow hover:bg-python-blue-bright transition-all duration-200"
                >
                  Join Community
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
