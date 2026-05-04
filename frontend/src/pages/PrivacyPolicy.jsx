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

const PrivacyPolicy = () => {
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
              privacy policy.
            </h1>
            <p className="mt-6 text-white/60 max-w-xl text-[15px] leading-relaxed">
              Autoloops operates a general-purpose agent platform at <span className="font-mono text-white">agent.autoloops.ai</span> and a public skill registry at <span className="font-mono text-white">upskill.autoloops.ai</span>. This policy describes what data we process, why, and the controls you have.
            </p>
          </div>

          <Section num="01" label="Workspace data">
            <p>
              Each account runs in a dedicated, isolated container with persistent file storage. Your project files, agent-authored skills, scheduled tasks, and memory entries live in your workspace and are not shared across accounts.
            </p>
            <p>
              Workspace files are stored in object storage (S3) under your account namespace. We do not browse, sample, or train on the contents of your workspace.
            </p>
          </Section>

          <Section num="02" label="Conversation history & memory">
            <p>
              Sessions with your agent are stored so that future sessions can pick up context. We retain message history and tool-call records for as long as your account is active.
            </p>
            <p>
              At session close, an extractor produces typed memory entries (<span className="font-mono text-white">user · project · feedback · reference</span>) with confidence scores. Entries at confidence ≥0.95 are auto-written; 0.7–0.95 enter a pending-review inbox you control. You can delete or edit any memory entry at any time.
            </p>
          </Section>

          <Section num="03" label="Tool & integration data">
            <p>
              When you connect Gmail, Slack, GitHub, Linear, Notion, Google Calendar, or Telegram, we route the agent's tool calls through Composio. Credentials are scoped to your account and are stored encrypted at rest.
            </p>
            <p>
              We process integration responses only for the duration of the agent's task. We do not retain raw third-party data beyond what's necessary to render the agent's outputs back to you.
            </p>
          </Section>

          <Section num="04" label="Model providers">
            <p>
              The agent uses third-party LLM providers (Anthropic, OpenAI). Your prompts, agent state, and tool outputs may be sent to these providers under their data-handling terms. Where the provider offers no-training endpoints, we use them by default.
            </p>
          </Section>

          <Section num="05" label="upskill (the public registry)">
            <p>
              <span className="font-mono text-white">upskill.autoloops.ai</span> is a public registry. Searches and inspections are not personally attributed. Three opt-in signals exist, all <span className="font-mono text-white">off</span> by default:
            </p>
            <ul className="space-y-2.5 pt-2">
              {[
                'telemetry — sends {skill_id, success/failure, error_code, task_kind}; never linked to install_id',
                'context — sends installed-CLI names and env-var names (never values), to rank skills you can actually run',
                'submissions — enables `upskill submit`; payloads are scrubbed for secrets before upload',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-white/65 text-sm leading-relaxed">
                  <span className="font-mono text-white/30 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section num="06" label="What we don't do">
            <ul className="space-y-2.5">
              {[
                "Train models on your workspace, conversations, or memory.",
                "Sell or rent your data to third parties.",
                "Share data across accounts. Each workspace is isolated.",
                "Read or store env-var values from upskill telemetry — only names.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-white/65 text-sm leading-relaxed">
                  <span className="font-mono text-white/30 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section num="07" label="Your controls">
            <p>
              Export or delete any workspace, memory entry, or scheduled task at any time. Account deletion removes your workspace and conversation history within 30 days; backups are purged within 60 days.
            </p>
          </Section>

          <Section num="08" label="Contact">
            <p>
              Questions or requests:{' '}
              <a
                href="mailto:privacy@autoloops.ai"
                className="text-white border-b border-white/30 hover:border-white pb-0.5 transition-colors"
              >
                privacy@autoloops.ai
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

export default PrivacyPolicy;
