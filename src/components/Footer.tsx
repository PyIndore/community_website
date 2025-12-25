'use client';

import { FaTelegram, FaLinkedin, FaGithub, FaMeetup, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#contact' }
  ];

  const resources = [
    { name: 'Python.org', href: 'https://python.org' },
    { name: 'PyPI', href: 'https://pypi.org' },
    { name: 'Python Docs', href: 'https://docs.python.org' },
  ];

  return (
    <footer className="bg-dark-bg border-t border-dark-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-black tracking-tighter text-white">
                <span className="text-python-blue">Py</span>Indore
              </span>
            </div>
            <p className="text-dark-muted text-sm leading-relaxed max-w-xs">
              The official community dedicated to Python programming in Indore, India.
              Empowering developers through knowledge sharing.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FaTelegram, href: 'https://t.me/pyindore', color: 'text-[#0088cc]' },
                { icon: FaLinkedin, href: 'https://linkedin.com/company/pyindore', color: 'text-[#0077b5]' },
                { icon: FaGithub, href: 'https://github.com/pyindore', color: 'text-white' },
                { icon: FaMeetup, href: 'https://meetup.com/pyindore', color: 'text-[#ed1c40]' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-dark-card border border-dark-border rounded-xl flex items-center justify-center hover:border-python-blue/50 transition-all duration-300 group"
                >
                  <social.icon size={18} className={`${social.color} transition-transform group-hover:scale-110`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-dark-muted hover:text-white transition-colors text-sm font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a href={resource.href} target="_blank" rel="noopener noreferrer" className="text-dark-muted hover:text-white transition-colors text-sm font-medium">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-dark-muted text-sm mb-6">Stay updated with our latest events.</p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="bg-dark-card border border-dark-border text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-python-blue transition-all"
              />
              <button className="bg-python-blue hover:bg-blue-600 text-white py-3 rounded-xl font-bold text-sm transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-border pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-dark-muted text-xs font-medium">
            © {currentYear} PyIndore. All rights reserved.
          </p>
          <div className="flex items-center text-xs text-dark-muted font-medium">
            Made with <FaHeart className="text-red-500 mx-1.5 animate-pulse" /> by PyIndore Community
          </div>
          <div className="flex space-x-6 text-xs font-medium">
            <a href="#" className="text-dark-muted hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-dark-muted hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}