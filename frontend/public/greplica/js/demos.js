/**
 * Scripted terminal sequence for the live demo.
 *
 * To change WHAT the terminal says, edit js/demo-copy.js.
 * This file owns HOW it plays: step order, timings, HTML structure, theme.
 */
import { demoCopy } from "./demo-copy.js";

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const { shell, welcome, chat, greplica } = demoCopy;

const GRAPH_QUERY = greplica.query;

const clawdArt = `
<img class="clawd-img" src="assets/clawd.png" alt="Clawd" aria-hidden="true">`;

const welcomePanel = `
<div class="tui-border">
  <div class="tui-header">
    <span class="tui-pink">${esc(welcome.version)}</span>
    <span class="tui-pink tui-header-right">${esc(welcome.headerRight)}</span>
  </div>
  <div class="tui-body">
    <div class="tui-left">
      <div class="tui-green tui-welcome">Welcome back ${esc(welcome.userName)}!</div>
      ${clawdArt}
      <div class="tui-meta">${esc(welcome.model)}</div>
      <div class="tui-meta">${esc(welcome.org)}</div>
      <div class="tui-meta">${esc(welcome.path)}</div>
    </div>
    <div class="tui-right"></div>
  </div>
</div>
<div class="tui-footer">
  <span class="tui-pink">✻</span> <span class="tui-pink">✻</span> <span class="tui-pink">✻</span>
</div>`;

/** Render one output item from a greplica section into a line step (+ optional anchor line). */
function renderItem(item) {
  const steps = [];
  if (item.subtype === "claim") {
    steps.push({
      type: "line",
      html: `  - Claims: <span class="t-id">${esc(item.id)}</span> — ${esc(item.text)}`,
      pause: 200,
    });
  } else if (item.text) {
    steps.push({
      type: "line",
      html: `- <span class="t-id">${esc(item.id)}</span> — ${esc(item.text)}`,
      pause: 80,
    });
  } else {
    steps.push({
      type: "line",
      html: `- <span class="t-id">${esc(item.id)}</span>`,
      pause: 80,
    });
  }
  if (item.anchor) {
    steps.push({
      type: "line",
      html: `  - Anchor: <span class="t-path">${esc(item.anchor)}</span>`,
      pause: 80,
    });
  }
  return steps;
}

/** Render one greplica output section (heading + optional subheading + items). */
function renderSection(section) {
  const steps = [
    { type: "line", html: `<span class="t-h2">## ${esc(section.heading)}</span>`, pause: 180 },
  ];
  if (section.subheading) {
    steps.push({
      type: "line",
      html: `<span class="t-h3">### ${esc(section.subheading)}</span>`,
      pause: 120,
    });
  }
  for (const item of section.items) steps.push(...renderItem(item));
  return steps;
}

const graphContextSteps = [
  {
    type: "type",
    prefix: "● Bash(",
    text: `${greplica.product} graph context "${GRAPH_QUERY}"`,
    suffix: " 2>&1)",
    delay: 22,
    jitter: 12,
  },
  { type: "wait", ms: 500 },
  { type: "line", html: '<span class="t-dim">└</span> <span class="t-h1"># Graph Context</span>', pause: 120 },
  { type: "line", text: `Query: ${GRAPH_QUERY}`, pause: 200 },
  ...greplica.sections.flatMap(renderSection),
  { type: "wait", ms: 320 },
  {
    type: "line",
    html: '<span class="t-dim">●</span> <span class="t-prompt">%</span>',
    className: "live-terminal__line--prompt",
  },
];

/** Full story: Claude welcome → user ask → greplica graph context */
export const demoScript = [
  { type: "wait", ms: 300 },
  {
    type: "type",
    prefix: `${shell.host} ${shell.cwd} `,
    text: shell.launchCommand,
    className: "live-terminal__line--prompt",
    delay: 55,
    jitter: 20,
  },
  { type: "wait", ms: 650 },
  { type: "block", className: "tui-panel", pause: 400, html: welcomePanel },
  { type: "wait", ms: 500 },
  {
    type: "type",
    text: chat.userMessage,
    className: "live-terminal__line--user",
    delay: 18,
    jitter: 10,
  },
  { type: "wait", ms: 450 },
  {
    type: "line",
    html: `<span class="chat-assistant">⏺ ${esc(chat.assistantReply)}</span>`,
    pause: 700,
  },
  { type: "theme", theme: "phosphor" },
  { type: "wait", ms: 350 },
  ...graphContextSteps,
];

/** @deprecated use demoScript */
export const graphContextScript = graphContextSteps;

/** @deprecated use demoScript */
export const agentWelcomeScript = demoScript;
