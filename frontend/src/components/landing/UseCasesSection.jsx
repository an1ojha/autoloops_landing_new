import React from 'react';
import { motion } from 'framer-motion';

const columns = [
  {
    num: '/01',
    eyebrow: 'memory',
    claim: 'Knows you across sessions.',
    examples: [
      'user — timezone, role, style',
      'project — deadlines, stakeholders',
      'feedback — corrections, with reasons',
    ],
  },
  {
    num: '/02',
    eyebrow: 'skills',
    claim: 'Procedures it learned by doing.',
    examples: [
      'email-triage',
      'pr-review',
      'weekly-recap',
    ],
  },
  {
    num: '/03',
    eyebrow: 'scheduling',
    claim: 'Self-fires.',
    examples: [
      'every Mon 9am, run standup',
      'in 2h, remind me about deploy',
      'after every merge, regenerate changelog',
    ],
  },
  {
    num: '/04',
    eyebrow: 'integrations',
    claim: 'One routed connection.',
    examples: [
      'gmail · slack · github · linear',
      'notion · calendar · telegram',
      'swap sources, agent unchanged',
    ],
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="relative bg-ink py-32 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40 mb-5">
            03 — Inside the agent
          </p>
          <h2
            className="font-mono font-light text-white leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            general-purpose,<br />
            <span className="text-white/55">not generic.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08]">
          {columns.map((col, i) => (
            <motion.div
              key={col.eyebrow}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-ink p-7 md:p-8"
            >
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-mono text-xs text-white/40 tracking-[0.16em]">{col.num}</span>
                <span className="font-mono text-sm uppercase tracking-[0.16em] text-white">
                  {col.eyebrow}
                </span>
              </div>
              <h3 className="text-lg font-medium text-white leading-snug mb-6 tracking-tight">
                {col.claim}
              </h3>
              <ul className="space-y-2.5">
                {col.examples.map((ex) => (
                  <li
                    key={ex}
                    className="flex gap-2.5 text-white/60 leading-relaxed text-[13px]"
                  >
                    <span className="font-mono text-white/30 shrink-0">→</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
