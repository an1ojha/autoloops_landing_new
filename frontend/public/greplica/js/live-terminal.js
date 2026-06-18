/**
 * Live terminal player — sharp DOM text, scripted async playback.
 * No video, no xterm. Content is HTML you control.
 */
export class LiveTerminal {
  #root;
  #screen;
  #lines;
  #cursor;
  #abort = null;
  #playing = false;
  #shouldLoop = false;
  #initialTheme;
  #initialTitle;
  _script = null;
  _loop = false;
  _loopDelay = 2500;

  constructor(root, { theme = "phosphor", title = "Terminal", onRerun, loop = false, loopDelay = 2500 } = {}) {
    this.#initialTheme = theme;
    this.#initialTitle = title;
    this._loop = loop;
    this._loopDelay = loopDelay;
    this.#root = root;
    this.#root.className = `live-terminal live-terminal--${theme}`;
    this.#root.innerHTML = `
      <div class="live-terminal__chrome">
        <span class="live-terminal__dot live-terminal__dot--r"></span>
        <span class="live-terminal__dot live-terminal__dot--y"></span>
        <span class="live-terminal__dot live-terminal__dot--g"></span>
        <span class="live-terminal__title">${title}</span>
        <button type="button" class="live-terminal__rerun">Re-run</button>
      </div>
      <div class="live-terminal__screen" tabindex="0" aria-live="polite"></div>`;

    this.#screen = this.#root.querySelector(".live-terminal__screen");
    this.#lines = document.createElement("div");
    this.#lines.className = "live-terminal__lines";
    this.#screen.appendChild(this.#lines);

    this.#cursor = document.createElement("span");
    this.#cursor.className = "live-terminal__cursor";
    this.#cursor.setAttribute("aria-hidden", "true");

    this.#root.querySelector(".live-terminal__rerun").addEventListener("click", () => {
      onRerun?.();
      this.replay();
    });
  }

  get playing() {
    return this.#playing;
  }

  stop() {
    this.#shouldLoop = false;
    this.#abort?.abort();
    this.#abort = null;
    this.#playing = false;
    this.#cursor.remove();
  }

  clear() {
    this.stop();
    this.#lines.innerHTML = "";
  }

  #resetVisual() {
    this.#lines.innerHTML = "";
    this.#root.className = `live-terminal live-terminal--${this.#initialTheme}`;
    const titleEl = this.#root.querySelector(".live-terminal__title");
    if (titleEl) titleEl.textContent = this.#initialTitle;
    this.#screen.scrollTop = 0;
  }

  async replay(script) {
    if (script) this._script = script;
    this.stop();
    this.#shouldLoop = this._loop;
    this.#resetVisual();
    if (!this._script) return;
    await this.play(this._script);
  }

  async play(script) {
    if (script) this._script = script;
    if (!this._script) return;

    this.#abort?.abort();
    this.#shouldLoop = this._loop;

    while (this.#shouldLoop) {
      await this.#playOnce(this._script);
      if (!this.#shouldLoop || !this._loop) break;

      try {
        await this.#wait(this._loopDelay, this.#abort.signal);
      } catch {
        break;
      }

      this.#resetVisual();
    }
  }

  async #playOnce(script) {
    this.#abort?.abort();
    this.#abort = new AbortController();
    const { signal } = this.#abort;
    this.#playing = true;

    try {
      for (const step of script) {
        if (signal.aborted) return;
        await this.#runStep(step, signal);
      }
    } finally {
      this.#playing = false;
      this.#cursor.remove();
    }
  }

  #wait(ms, signal) {
    return new Promise((resolve, reject) => {
      const id = setTimeout(resolve, ms);
      signal?.addEventListener("abort", () => {
        clearTimeout(id);
        reject(new DOMException("aborted", "AbortError"));
      });
    });
  }

  async #runStep(step, signal) {
    const wait = (ms) => this.#wait(ms, signal);

    switch (step.type) {
      case "wait":
        await wait(step.ms ?? 300);
        break;

      case "type": {
        const row = this.#appendRow(step.className);
        if (step.prefix) row.appendChild(this.#text(step.prefix, "live-terminal__prefix"));
        const target = document.createElement("span");
        target.className = "live-terminal__typed";
        row.appendChild(target);
        row.appendChild(this.#cursor);
        this.#scroll();

        const text = step.text ?? "";
        const base = step.delay ?? 28;
        for (let i = 0; i <= text.length; i++) {
          if (signal.aborted) return;
          target.textContent = text.slice(0, i);
          this.#scroll();
          if (i < text.length) await wait(base + Math.random() * (step.jitter ?? 18));
        }
        this.#cursor.remove();
        if (step.suffix) row.appendChild(this.#text(step.suffix, "live-terminal__suffix"));
        break;
      }

      case "line": {
        const row = this.#appendRow(step.className);
        if (step.html != null) row.innerHTML = step.html;
        else row.textContent = step.text ?? "";
        this.#scroll();
        if (step.pause) await wait(step.pause);
        break;
      }

      case "block": {
        const block = document.createElement("div");
        block.className = `live-terminal__block${step.className ? ` ${step.className}` : ""}`;
        block.innerHTML = step.html ?? "";
        this.#lines.appendChild(block);
        this.#scroll();
        if (step.pause) await wait(step.pause);
        break;
      }

      case "clear":
        this.#lines.innerHTML = "";
        break;

      case "theme": {
        const next = step.theme ?? "agent";
        if (next === "phosphor") {
          // Freeze everything already on screen so the agent intro (welcome
          // panel through the ✻✻✻ stars + user bar) keeps its look and is not
          // recolored green by the phosphor theme.
          for (const el of this.#lines.children) el.classList.add("is-frozen-agent");
        }
        this.#root.className = `live-terminal live-terminal--${next}`;
        break;
      }

      case "title": {
        const el = this.#root.querySelector(".live-terminal__title");
        if (el) el.textContent = step.text ?? "Terminal";
        break;
      }

      default:
        break;
    }
  }

  #appendRow(className) {
    const row = document.createElement("div");
    row.className = `live-terminal__line${className ? ` ${className}` : ""}`;
    this.#lines.appendChild(row);
    return row;
  }

  #text(value, className) {
    const span = document.createElement("span");
    span.className = className;
    span.textContent = value;
    return span;
  }

  #scroll() {
    this.#screen.scrollTop = this.#screen.scrollHeight;
  }
}

export function observeAutoplay(root, playFn, { threshold = 0.35 } = {}) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // Fire once, then stop observing — nothing left to watch for.
          io.disconnect();
          playFn();
          return;
        }
      }
    },
    { threshold }
  );
  io.observe(root);
  return () => io.disconnect();
}
