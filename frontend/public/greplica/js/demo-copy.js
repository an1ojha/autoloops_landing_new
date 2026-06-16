/**
 * Editable copy for the live terminal demo.
 *
 * EDIT THIS FILE to change what the terminal says. Plain strings only —
 * no HTML, no timing, no player logic. Refresh the page to see changes.
 *
 * Structure of the story:
 *   1. shell.launchCommand is typed at the prompt
 *   2. welcome panel renders (Claude Code splash)
 *   3. chat.userMessage is typed by the "human"
 *   4. chat.assistantReply is shown
 *   5. greplica.query is run and greplica.sections are printed
 */
export const demoCopy = {
  shell: {
    host: "welcome@macbook",
    cwd: "~/engineering-context",
    launchCommand: "claude",
  },

  welcome: {
    version: "Claude Code v2.1.178",
    headerRight: "Tips for getting started",
    userName: "Boris", // renders as "Welcome back Boris!"
    model: "Opus 4.8 with medium effort · Claude Pro ·",
    org: "boris.cherny@anthropic.com's Organization",
    path: "~/engineering-context",
  },

  chat: {
    userMessage:
      "Add a --json flag to graph context so agents can pipe structured output instead of markdown",
    assistantReply: "Got it, let me ask greplica for more context",
  },

  greplica: {
    // Product name used in the typed `<product> graph context "..."` command.
    product: "greplica",
    query:
      "where is the graph context command output formatted and where would a --json flag be added",

    /**
     * Output sections. Each section has a heading and a list of items.
     * An item may have:
     *   - id:     highlighted identifier (component/flow/claim)
     *   - text:   description after the em dash
     *   - anchor: optional file path shown on the next indented line
     *   - subtype: "claim" renders "Claims:" prefix (used inside flows)
     */
    sections: [
      {
        heading: "Components",
        items: [
          {
            id: "component.graph_context_retrieval",
            text: "Graph context retrieval and embeddings",
            anchor: "libs/knowledge-graph/graph-context",
          },
          {
            id: "component.graph_context_format",
            text: "Markdown rendering for graph context query results",
            anchor: "libs/knowledge-graph/graph-context/format.ts",
          },
          {
            id: "component.sqlite_storage",
            text: "SQLite storage, graph view, and embeddings persistence",
            anchor: "libs/storage/sqlite/db.ts",
          },
        ],
      },
      {
        heading: "Flows",
        subheading:
          "Graph read and context return current memory and ranked query context",
        items: [
          { id: "flow.graph_read_and_context" },
          {
            id: "claim.graph_context_query",
            subtype: "claim",
            text: "Graph context query uses semantic embeddings, BM25, and exact matching",
          },
        ],
      },
      {
        heading: "Other Relevant Claims",
        items: [
          {
            id: "claim.graph_context_json_output",
            text: "--json flag would serialize ranked context as structured JSON in format.ts",
            anchor: "libs/knowledge-graph/graph-context/format.ts",
          },
        ],
      },
    ],
  },
};
