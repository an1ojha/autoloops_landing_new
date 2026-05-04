import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    label: 'use',
    body: 'Persistent workspace. One routed connection to Gmail, Slack, GitHub, Linear, Notion.',
  },
  {
    num: '02',
    label: 'learn',
    body: 'Procedural skills. Declarative memory. Confidence-scored at every session close.',
  },
  {
    num: '03',
    label: 'improve',
    body: 'Auto-write at ≥0.95. Loads into the next session. No retraining.',
  },
];

const AgentLoopSection = () => {
  return (
    <section id="how-it-works" className="relative bg-ink py-32 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40 mb-5">
            01 — How it works
          </p>
          <h2
            className="font-mono font-light text-white leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            the loop that closes itself.
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.08]">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-8 md:p-10 border-b md:border-b-0 border-white/[0.08] ${
                i < steps.length - 1 ? 'md:border-r' : ''
              }`}
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-xs text-white/40 tracking-[0.16em]">
                  {step.num}
                </span>
                <span className="font-mono text-sm uppercase tracking-[0.16em] text-white">
                  {step.label}
                </span>
              </div>
              <p className="text-white/65 leading-relaxed text-[14px]">{step.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Mechanism strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08]"
        >
          {[
            ['≥0.95', 'auto-write confidence'],
            ['0.7–0.95', 'pending review'],
            ['4 types', 'user · project · feedback · ref'],
            ['0', 'retraining required'],
          ].map(([num, label]) => (
            <div key={label} className="bg-ink p-5">
              <div className="font-mono text-lg md:text-xl font-light text-white tracking-tight mb-2 lowercase">
                {num}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45 leading-snug">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AgentLoopSection;
