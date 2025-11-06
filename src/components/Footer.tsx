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
    { name: 'PEP Index', href: 'https://peps.python.org' }
  ];

  const community = [
    { name: 'Code of Conduct', href: '#' },
    { name: 'Contributing', href: '#' },
    { name: 'Volunteer', href: '#' },
    { name: 'Sponsors', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-python-blue rounded-lg flex items-center justify-center">
                <span className="text-python-yellow font-bold text-xl">Py</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PyIndore</h3>
                <p className="text-gray-400 text-sm">Python Community</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building a collaborative and knowledge-rich ecosystem for Python enthusiasts in Indore, India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-python-blue transition-colors duration-200">
                <span className="text-xs font-bold">tg</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-python-blue transition-colors duration-200">
                <span className="text-xs font-bold">li</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-python-blue transition-colors duration-200">
                <span className="text-xs font-bold">gh</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-python-blue transition-colors duration-200">
                <span className="text-xs font-bold">mu</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-python-yellow transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Python Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-python-yellow transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Community</h4>
            <ul className="space-y-3">
              {community.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-python-yellow transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <p className="text-gray-400 text-sm mb-3">
                Get updates about upcoming events
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-3 py-2 rounded-l-lg flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-python-blue"
                />
                <button className="bg-python-blue px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} PyIndore. All rights reserved. Made with ❤️ by the community.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-python-yellow transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-python-yellow transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-python-yellow transition-colors duration-200">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}