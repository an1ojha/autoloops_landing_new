import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cliSteps = [
  { cmd: 'upskill find', arg: '"reconcile invoices"', desc: 'FTS + vector search across 10,000+ skills.' },
  { cmd: 'upskill inspect', arg: '<skill_id>', desc: 'Full SKILL.md + feedback from prior runs.' },
  { cmd: 'upskill report', arg: '<ver> --outcome success', desc: 'Failures sink. Successes rise.' },
];

const tiers = [
  { name: 'verified', desc: 'Vendor-official only.' },
  { name: 'reviewed', desc: 'Verified + curated practitioners.' },
  { name: 'community', desc: 'Every public submission.' },
];

const UpskillSection = () => {
  return (
    <section id="upskill" className="relative bg-ink py-32 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40 mb-5">
            02 — upskill.autoloops.ai
          </p>
          <h2
            className="font-mono font-light text-white leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            upskill.
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] mb-20"
        >
          {[
            ['10,000+', 'skills indexed'],
            ['1024-d', 'embedding search'],
            ['3 tiers', 'verified · reviewed · community'],
            ['MIT', 'open source'],
          ].map(([num, label]) => (
            <div key={label} className="bg-ink p-6">
              <div className="font-mono text-2xl font-light text-white tracking-tight mb-2 lowercase">
                {num}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CLI flow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-6">
            search → inspect → follow → report
          </p>
          <div className="border border-white/[0.08] divide-y divide-white/[0.08]">
            {cliSteps.map((s, i) => (
              <div
                key={s.cmd}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 p-5 md:p-6 hover:bg-white/[0.02] transition-colors"
              >
                <div className="md:col-span-1 font-mono text-xs text-white/40 tracking-[0.16em]">
                  0{i + 1}
                </div>
                <div className="md:col-span-6 font-mono text-[13px]">
                  <span className="text-signal">$</span> <span className="text-white">{s.cmd}</span>{' '}
                  <span className="text-white/60">{s.arg}</span>
                </div>
                <div className="md:col-span-5 text-sm text-white/65 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust tiers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-6">
            three trust tiers · default to safest
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08]">
            {tiers.map((t) => (
              <div key={t.name} className="bg-ink p-6">
                <div className="font-mono text-sm uppercase tracking-[0.16em] text-white mb-3">
                  {t.name}
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="https://upskill.autoloops.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group h-12 px-7 bg-white text-ink font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
          >
            Browse upskill
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.25} />
          </a>
          <a
            href="https://github.com/autoloops/upskill"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-white/65 hover:text-white border-b border-white/20 hover:border-white pb-1 transition-colors"
          >
            View on GitHub
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UpskillSection;
