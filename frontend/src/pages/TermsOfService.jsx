import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Section = ({ num, label, children }) => (
  <section className="border-t border-white/[0.08] py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
    <div className="md:col-span-3">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
        {num} — {label}
      </p>
    </div>
    <div className="md:col-span-9 space-y-4 text-white/70 leading-relaxed text-[15px]">
      {children}
    </div>
  </section>
);

const Bullets = ({ items }) => (
  <ul className="space-y-2.5 pt-1">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-white/65 text-sm leading-relaxed">
        <span className="font-mono text-white/30 shrink-0">→</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const TermsOfService = () => {
  return (
    <div className="bg-ink text-white min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="mb-16 max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-5">
              · Legal · last updated 2026-05-04
            </p>
            <h1
              className="font-mono font-light text-white leading-[1.05] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
            >
              terms of service.
            </h1>
            <p className="mt-6 text-white/60 max-w-xl text-[15px] leading-relaxed">
              By using <span className="font-mono text-white">agent.autoloops.ai</span> or{' '}
              <span className="font-mono text-white">upskill.autoloops.ai</span>, you agree to these terms. Plain English first; the legalese is short.
            </p>
          </div>

          <Section num="01" label="What we provide">
            <p>
              Autoloops operates a general-purpose AI agent platform. Each account gets a persistent workspace where an agent runs tasks, remembers context across sessions, schedules itself, and authors its own skills the more you use it.
            </p>
            <p>
              We also operate <span className="font-mono text-white">upskill</span> — a public, MIT-licensed registry of skills that any AI agent can search, install, and follow.
            </p>
          </Section>

          <Section num="02" label="Your account">
            <Bullets
              items={[
                'You\'re responsible for keeping your credentials safe.',
                "You're responsible for the actions your agent takes on connected accounts (Gmail, Slack, GitHub, Linear, etc.).",
                'You must have authority to connect any third-party account you link.',
                'One account per individual or organization — no resale.',
              ]}
            />
          </Section>

          <Section num="03" label="What the agent does">
            <p>
              The agent acts on instructions you give it, plus the memory and skills it has accumulated. It may write files, send messages, schedule jobs, and call APIs on connected services. Review high-impact actions before approving them.
            </p>
            <p>
              The agent uses third-party LLM providers (Anthropic, OpenAI). Outputs are probabilistic — they may be wrong, incomplete, or out of date. Don't rely on the agent for legal, medical, or financial decisions.
            </p>
          </Section>

          <Section num="04" label="Acceptable use">
            <p>Don't use Autoloops to:</p>
            <Bullets
              items={[
                'Send spam, phishing, or malware.',
                'Harass, defame, or harm others.',
                'Violate laws or third-party rights.',
                'Reverse-engineer the platform or scrape it at scale.',
                'Submit skills to upskill that contain malware, secrets, or copyrighted material you don\'t own.',
              ]}
            />
          </Section>

          <Section num="05" label="Your content">
            <p>
              You own your workspace files, conversations, memory entries, and any skills you author. You grant us a limited license to host, process, and display this content as needed to run the service.
            </p>
            <p>
              Skills you publish to upskill are licensed under the terms you specify in the SKILL.md (MIT by default for the registry).
            </p>
          </Section>

          <Section num="06" label="Service availability">
            <p>
              We aim for high uptime but don't guarantee uninterrupted service. We may perform maintenance, change features, or rate-limit usage. We'll give reasonable notice of material changes.
            </p>
          </Section>

          <Section num="07" label="Limitation of liability">
            <p>
              To the maximum extent permitted by law, Autoloops is provided "as is" without warranties. We're not liable for indirect, incidental, or consequential damages, or for actions your agent takes on connected accounts.
            </p>
          </Section>

          <Section num="08" label="Termination">
            <p>
              You can stop using Autoloops at any time. We may suspend accounts that violate these terms. On termination we delete your workspace and conversation history within 30 days; backups are purged within 60.
            </p>
          </Section>

          <Section num="09" label="Changes">
            <p>
              We may update these terms. Material changes will be announced in-product or by email at least 14 days before they take effect.
            </p>
          </Section>

          <Section num="10" label="Contact">
            <p>
              Questions:{' '}
              <a
                href="mailto:legal@autoloops.ai"
                className="text-white border-b border-white/30 hover:border-white pb-0.5 transition-colors"
              >
                legal@autoloops.ai
              </a>
              .
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
