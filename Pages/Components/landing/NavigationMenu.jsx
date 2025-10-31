import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavigationMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [extensionUrl, setExtensionUrl] = useState('#');

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Brands', href: '#brands' },
    { name: 'Get Started', href: '#cta' }
  ];

  // Helper: current header height
  const getHeaderOffset = () => {
    const navEl = document.querySelector('nav');
    const fallback = window.innerWidth < 768 ? 64 : 80;
    return (navEl?.offsetHeight || fallback) + 8; // cushion
  };

  // Handle smooth scrolling
  const handleNavClick = (href) => {
    setIsOpen(false);
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        scrollToSection(href);
      }, 100);
    } else {
      scrollToSection(href);
    }
  };

  const scrollToSection = (href) => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        // Use native smooth scroll for better performance
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 50);
  };

  // Track scrolled state for header styling (works on all pages)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 8);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on home page only
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(''); // Clear active section when not on home
      return;
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = navItems.map(item => item.href.substring(1));
          const headerOffset = getHeaderOffset();
          const scrollPosition = window.scrollY + headerOffset + 20;

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Determine extension store URL based on browser
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isEdge = ua.includes('edg');
    const isOpera = ua.includes('opr') || ua.includes('opera');
    const isFirefox = ua.includes('firefox') || ua.includes('fxios');
    const isChromeLike = (ua.includes('chrome') || ua.includes('crios')) && !isEdge && !isOpera;
    const isSafari = ua.includes('safari') && !isChromeLike && !isEdge && !isOpera;
    
    let url = 'https://chromewebstore.google.com/detail/savely/lhpadmkgboajeocdmbcifgclampmjolo';
    if (isFirefox) {
      url = 'https://addons.mozilla.org/en-US/firefox/addon/savely/';
    } else if (isEdge) {
      url = 'https://microsoftedge.microsoft.com/addons/detail/savely/hldcionlpdbhbfjeebklhdindhliekff';
    } else if (isOpera) {
      url = 'https://microsoftedge.microsoft.com/addons/detail/savely/hldcionlpdbhbfjeebklhdindhliekff';
    } else if (isChromeLike) {
      url = 'https://chromewebstore.google.com/detail/savely/lhpadmkgboajeocdmbcifgclampmjolo';
    } else if (isSafari) {
      url = '';
    }
    setExtensionUrl(url);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`mt-3 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? 'bg-white border-gray-200 shadow-md'
              : 'bg-white border-gray-100 shadow-sm'
          }`}
        >
          <div className="flex h-12 sm:h-14 items-center justify-between px-4">
            {/* Logo */}
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="flex items-center gap-2 group" aria-label="Savely home">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 10a4 4 0 0 1-8 0" />
                  <path d="M3.103 6.034h17.794" />
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-gray-900">Savely</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.filter(i => i.name !== 'Get Started').map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Right: CTA on desktop, menu on mobile */}
            <div className="flex items-center gap-2">
              {extensionUrl ? (
                <a
                  href={extensionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 text-sm shadow-lg shadow-blue-600/20 transition-all hover:shadow-xl hover:shadow-blue-600/30"
                >
                  Get Started
                </a>
              ) : (
                <button
                  disabled
                  className="hidden md:inline-flex items-center rounded-full bg-gray-400 text-gray-200 font-medium px-4 py-2 text-sm cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-white/70 transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="bg-white border border-gray-200/70 shadow-lg rounded-2xl p-3 space-y-1">
              {navItems.map((item) => (
                item.name === 'Get Started' ? (
                  extensionUrl ? (
                    <a
                      key={item.name}
                      href={extensionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-4 py-2.5 rounded-xl text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <button
                      key={item.name}
                      disabled
                      className="block w-full text-center px-4 py-2.5 rounded-xl text-sm font-medium bg-gray-400 text-gray-200 cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'text-gray-900 bg-gray-100'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/70'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationMenu;
