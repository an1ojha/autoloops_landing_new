import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { label: 'how it works', href: '#how-it-works' },
  { label: 'upskill', href: '#upskill' },
  { label: 'what they do', href: '#use-cases' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ink/85 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center" aria-label="Autoloops home">
              <Logo size={20} />
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-[0.14em] text-white/55 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://agent.autoloops.ai"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="nav-cta-button"
                className="h-9 px-5 bg-white text-ink font-mono text-[11px] uppercase tracking-[0.14em] flex items-center justify-center gap-1.5 hover:bg-white/90 transition-colors"
              >
                Open Agent
                <ArrowUpRight className="w-3 h-3" strokeWidth={2.25} />
              </a>
            </div>

            <button
              onClick={toggleMobileMenu}
              data-testid="mobile-menu-button"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-3 -mr-3 text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="fixed top-16 left-0 right-0 z-40 md:hidden bg-ink/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="font-mono text-sm uppercase tracking-[0.14em] text-white/70 hover:text-white py-3 border-b border-white/[0.06] min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://agent.autoloops.ai"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="mt-4 h-12 px-6 bg-white text-ink font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2"
            >
              Open Agent
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.25} />
            </a>
          </div>
        </motion.div>
      )}

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
