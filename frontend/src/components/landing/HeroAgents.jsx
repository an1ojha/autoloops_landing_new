import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const memoryEntries = [
  {
    type: 'feedback',
    body: 'For PR descriptions: 1-line summary + 3 bullets. (user said "these are too long" on Apr 12)',
  },
  {
    type: 'project',
    body: 'Q2 launch is May 15. Two-week feature freeze starts Apr 30.',
  },
  {
    type: 'user',
    body: 'Founder building an agent platform. Pacific time. Prefers terse, direct answers.',
  },
];

const authoredSkills = [
  { name: 'weekly-recap', when: 'every Mon 9am' },
  { name: 'pr-review', when: '12 runs · 0 corrections' },
  { name: 'invoice-triage', when: '4 runs this week' },
];

const HeroAgents = () => {
  return (
    <section className="relative flex items-center overflow-hidden bg-ink pt-20 md:pt-24 pb-8 md:pb-10 min-h-[calc(100vh-13rem)]">
      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 grid-bg-fine opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          {/* LEFT — copy + CTAs */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-mono font-light text-white leading-[0.95] tracking-[-0.04em] mb-10"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)' }}
            >
              agents that<br />
              <span className="text-white/55">compound.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base md:text-lg text-white/65 max-w-xl leading-relaxed mb-12"
            >
              Persistent workspace. Memory. Self-authored skills. Every session is sharper than the last.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <a
                href="https://agent.autoloops.ai"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-primary-cta"
                className="group h-12 px-7 bg-white text-ink font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
              >
                Open Agent
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.25} />
              </a>
              <a
                href="#how-it-works"
                data-testid="hero-secondary-cta"
                className="h-12 px-7 border border-white/20 text-white font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-center hover:bg-white/[0.04] transition-colors"
              >
                How it works
              </a>
            </motion.div>
          </div>

          {/* RIGHT — memory + skills snapshot (replaces terminal) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-3"
            aria-label="What your agent looks like after 30 days"
          >
            {/* MEMORY card */}
            <div className="border border-white/10 bg-white/[0.02]">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                  /memory · 247 entries
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">
                  what it knows about you
                </span>
              </div>
              <ul className="divide-y divide-white/[0.06]">
                {memoryEntries.map((m) => (
                  <li key={m.body} className="px-4 py-3 flex gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35 shrink-0 pt-0.5 w-16">
                      {m.type}
                    </span>
                    <span className="text-[13px] text-white/75 leading-relaxed">{m.body}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SKILLS card */}
            <div className="border border-white/10 bg-white/[0.02]">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                  /skills · 12 authored
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal flex items-center gap-1.5">
                  <span className="signal-dot inline-block w-1.5 h-1.5 rounded-full bg-signal" />
                  active
                </span>
              </div>
              <ul className="divide-y divide-white/[0.06]">
                {authoredSkills.map((s) => (
                  <li
                    key={s.name}
                    className="px-4 py-2.5 flex items-center justify-between font-mono text-[13px]"
                  >
                    <span className="text-white">{s.name}</span>
                    <span className="text-[11px] uppercase tracking-[0.12em] text-white/40">
                      {s.when}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroAgents;
