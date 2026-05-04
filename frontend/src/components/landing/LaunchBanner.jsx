import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const vendors = [
  'Anthropic', 'OpenAI', 'Stripe', 'Vercel', 'Cloudflare',
  'Microsoft', 'Notion', 'Sentry', 'Datadog', 'HashiCorp',
  'Supabase', 'Clerk', 'Neon', 'ClickHouse', 'Sanity',
];

const LaunchBanner = () => {
  return (
    <section
      aria-label="Launch announcement"
      className="relative bg-ink border-y border-white/[0.08] overflow-hidden"
    >
      {/* Top row — launch badge + headline + CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-7">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10"
        >
          {/* Launch badge */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal flex items-center gap-2 border border-signal/40 px-2.5 py-1">
              <span className="signal-dot inline-block w-1.5 h-1.5 rounded-full bg-signal" />
              just shipped
            </span>
          </div>

          {/* Headline */}
          <div className="flex-1 min-w-0">
            <p className="text-white text-[15px] md:text-base leading-snug">
              <span className="font-mono text-white">upskill</span>
              <span className="text-white/55"> — the agent skill registry. </span>
              <span className="text-white/45 font-mono text-sm">10,000+ skills.</span>
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://upskill.autoloops.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 h-10 px-5 border border-white/20 text-white font-mono text-[11px] uppercase tracking-[0.14em] inline-flex items-center justify-center gap-2 hover:bg-white/[0.04] transition-colors"
          >
            Visit upskill
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Bottom row — vendor marquee */}
      <div className="border-t border-white/[0.06] py-4 overflow-hidden relative">
        <div
          className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--ink), transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--ink), transparent)' }}
          aria-hidden="true"
        />
        <div className="flex items-center gap-10 whitespace-nowrap animate-[marquee_50s_linear_infinite]">
          {[...vendors, ...vendors].map((v, i) => (
            <span
              key={`${v}-${i}`}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 shrink-0"
            >
              {v}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default LaunchBanner;
