/**
 * Post-build: make greplica the site root while keeping the React SPA
 * (/, /privacy, /terms) available.
 *
 * CRA emits the React shell as build/index.html. We want autoloops.ai/ to serve
 * the static greplica page instead, so:
 *   1. Move the React shell to build/platform.html (vercel.json + _redirects
 *      route /privacy and /terms there).
 *   2. Copy the greplica page (build/greplica/index.html) to build/index.html so
 *      the root path serves it directly. greplica uses <base href="/greplica/">,
 *      so the same file works at / and at /greplica/.
 *
 * Idempotent-ish: if build/greplica/index.html is missing the build is wrong and
 * we fail loudly rather than ship a broken root.
 */
const fs = require("fs");
const path = require("path");

const build = path.join(__dirname, "..", "build");
const shell = path.join(build, "index.html");
const platform = path.join(build, "platform.html");
const greplicaIndex = path.join(build, "greplica", "index.html");

if (!fs.existsSync(greplicaIndex)) {
  console.error("[postbuild] missing build/greplica/index.html — aborting.");
  process.exit(1);
}
if (!fs.existsSync(shell)) {
  console.error("[postbuild] missing build/index.html (React shell) — aborting.");
  process.exit(1);
}

fs.renameSync(shell, platform);
fs.copyFileSync(greplicaIndex, shell);

console.log("[postbuild] React shell -> build/platform.html");
console.log("[postbuild] greplica   -> build/index.html (site root)");
