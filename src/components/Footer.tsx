import Image from 'next/image';
import { FaTelegram, FaLinkedin, FaGithub, FaMeetup, FaHeart } from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Community', href: '#community' },
  { name: 'Contact', href: '#contact' },
];

const resources = [
  { name: 'Python.org', href: 'https://python.org' },
  { name: 'PyPI', href: 'https://pypi.org' },
  { name: 'Python Docs', href: 'https://docs.python.org' },
];

const socials = [
  { icon: FaTelegram, href: 'https://t.me/pyindore', label: 'Telegram' },
  { icon: FaLinkedin, href: 'https://linkedin.com/company/pyindore', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/pyindore', label: 'GitHub' },
  { icon: FaMeetup, href: 'https://meetup.com/pyindore', label: 'Meetup' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="gradient-divider" />
      <footer className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 4-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">

            {/* Brand column */}
            <div>
              <a href="#home" className="flex items-center gap-2.5 mb-5">
                <Image
                  src="/logo.png"
                  alt="PyIndore"
                  width={22}
                  height={28}
                  className="object-contain logo-glow"
                />
                <span className="text-xl font-bold text-dark-text">
                  <span className="text-gradient-blue">Py</span>Indore
                </span>
              </a>
              <p className="text-dark-tertiary text-sm leading-relaxed max-w-xs mb-6">
                The official Python community in Indore, India. Empowering developers through
                knowledge sharing, collaboration, and innovation.
              </p>
              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl liquid-glass flex items-center justify-center hover:border-dark-border-strong transition-all duration-200 glass-hover"
                  >
                    <social.icon size={15} className="text-dark-muted" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation column */}
            <div>
              <h4 className="text-dark-text font-semibold text-xs uppercase tracking-widest mb-5">
                Navigation
              </h4>
              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-dark-tertiary hover:text-dark-muted text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources column */}
            <div>
              <h4 className="text-dark-text font-semibold text-xs uppercase tracking-widest mb-5">
                Resources
              </h4>
              <ul className="space-y-3.5">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-tertiary hover:text-dark-muted text-sm transition-colors duration-200"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter column */}
            <div>
              <h4 className="text-dark-text font-semibold text-xs uppercase tracking-widest mb-5">
                Newsletter
              </h4>
              <p className="text-dark-tertiary text-sm mb-5 leading-relaxed">
                Stay updated with our latest events and announcements.
              </p>
              <input
                type="email"
                placeholder="Email address"
                className="w-full liquid-glass rounded-xl px-4 py-2.5 text-sm text-dark-text placeholder-dark-tertiary outline-none focus:border-dark-border-strong transition-all mb-2.5 border-0"
              />
              <button className="w-full bg-python-blue text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-python-blue-bright btn-glow transition-all duration-200">
                Subscribe
              </button>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="gradient-divider my-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark-tertiary text-xs">
              © {currentYear} PyIndore. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-dark-tertiary text-xs">
              Made with{' '}
              <FaHeart className="text-python-yellow mx-0.5" size={10} />{' '}
              by PyIndore Community
            </div>
            <div className="flex items-center gap-5">
              <a href="#" className="text-dark-tertiary hover:text-dark-muted text-xs transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="text-dark-tertiary hover:text-dark-muted text-xs transition-colors duration-200">
                Terms
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
