import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-ink text-white border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-6">
            <div className="mb-5">
              <Logo size={22} />
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-md">
              General-purpose agents that improve with every use. The closest thing to AGI you can deploy today.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/company/auto-loops"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Autoloops on LinkedIn"
                className="w-10 h-10 border border-white/10 hover:border-white/30 hover:bg-white/[0.04] flex items-center justify-center transition-colors min-w-[44px] min-h-[44px]"
                data-testid="footer-linkedin-link"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:anirudh@autoloops.ai"
                aria-label="Contact Autoloops via email"
                className="w-10 h-10 border border-white/10 hover:border-white/30 hover:bg-white/[0.04] flex items-center justify-center transition-colors min-w-[44px] min-h-[44px]"
                data-testid="footer-email-link"
              >
                <Mail className="w-4 h-4" aria-hidden="true" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-5">
              Product
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://agent.autoloops.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  agent platform
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://upskill.autoloops.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  upskill
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-5">
              Legal
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-white transition-colors">
                  privacy policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-white transition-colors">
                  terms of service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/35">
            © {new Date().getFullYear()} Autoloops · all rights reserved
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/35 flex items-center gap-2">
            <span className="signal-dot inline-block w-1.5 h-1.5 rounded-full bg-signal" />
            agents online
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
