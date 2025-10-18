import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Brands', href: '#brands' },
    { name: 'Get Started', href: '#cta' }
  ];

  // Handle smooth scrolling
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Colorful glow accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.7), rgba(167,139,250,0))' }} />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.7), rgba(96,165,250,0))' }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-2xl">💳</div>
            <span className="text-white font-semibold text-xl">Savely</span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group overflow-hidden ${
                    activeSection === item.href.substring(1)
                      ? 'text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg'
                      : 'text-purple-200 hover:text-white hover:bg-white/20'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection !== item.href.substring(1) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:text-purple-200 hover:bg-white/20 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20 bg-white/10 backdrop-blur-lg">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative group overflow-hidden ${
                    activeSection === item.href.substring(1)
                      ? 'text-white bg-gradient-to-r from-purple-500 to-blue-500'
                      : 'text-purple-200 hover:text-white hover:bg-white/20'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection !== item.href.substring(1) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationMenu;
