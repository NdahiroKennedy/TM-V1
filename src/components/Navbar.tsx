/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Program', href: '#program' },
    { name: 'For Schools', href: '#schools' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border-light bg-white ${
        isScrolled ? 'shadow-sm h-16' : 'h-16'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-navy flex items-center justify-center rounded-sm">
            <div className="w-4 h-4 border-2 border-white rotate-45"></div>
          </div>
          <span className="text-[20px] font-bold text-navy tracking-tight">Tomorrow Minds</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-secondary">
            Contact
          </a>
          <a 
            href="https://calendar.app.google/hHAFzLXsvQhEmX5g8" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-teal text-white px-6 py-2.5 rounded font-semibold text-[15px] hover:bg-teal-dark transition-all shadow-sm flex items-center justify-center"
          >
            Schedule a Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy w-11 h-11 flex items-center justify-center -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-border-light shadow-xl p-6 md:hidden flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-semibold text-navy border-b border-border-light pb-4 min-h-[44px] flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-4 pt-2">
              <a 
                href="#contact" 
                className="btn-secondary w-full text-center py-4 min-h-[44px] flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="https://calendar.app.google/hHAFzLXsvQhEmX5g8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary w-full text-center py-4 min-h-[44px] flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
