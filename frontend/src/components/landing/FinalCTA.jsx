import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="relative bg-ink py-32 border-t border-white/[0.06] overflow-hidden">
      {/* Faint grid */}
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.18em] text-white/40 mb-6"
        >
          04 — Get started
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="font-mono font-light text-white leading-[0.98] tracking-[-0.04em] mb-8"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          stop hiring agents.<br />
          <span className="text-white/55">grow them.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/65 mb-12 max-w-xl text-[15px] leading-relaxed"
        >
          The first task is the slowest one your agent ever runs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
        >
          <a
            href="https://agent.autoloops.ai"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="final-cta-primary"
            className="group h-12 px-8 bg-white text-ink font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
          >
            Open Agent
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.25} />
          </a>
          <a
            href="https://upskill.autoloops.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-8 border border-white/20 text-white font-mono text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2 hover:bg-white/[0.04] transition-colors"
          >
            Browse upskill
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
