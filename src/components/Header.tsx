'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-python-blue rounded-lg flex items-center justify-center">
              <span className="text-python-yellow font-bold text-xl">Py</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">PyIndore</h1>
              <p className="text-sm text-gray-600">Python Community</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-python-blue transition-colors duration-200">Home</a>
            <a href="#about" className="text-gray-700 hover:text-python-blue transition-colors duration-200">About</a>
            <a href="#events" className="text-gray-700 hover:text-python-blue transition-colors duration-200">Events</a>
            <a href="#community" className="text-gray-700 hover:text-python-blue transition-colors duration-200">Community</a>
            <a href="#contact" className="text-gray-700 hover:text-python-blue transition-colors duration-200">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-python-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Join Community
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-python-blue"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-python-blue transition-colors duration-200">Home</a>
              <a href="#about" className="text-gray-700 hover:text-python-blue transition-colors duration-200">About</a>
              <a href="#events" className="text-gray-700 hover:text-python-blue transition-colors duration-200">Events</a>
              <a href="#community" className="text-gray-700 hover:text-python-blue transition-colors duration-200">Community</a>
              <a href="#contact" className="text-gray-700 hover:text-python-blue transition-colors duration-200">Contact</a>
              <button className="bg-python-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full">
                Join Community
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}