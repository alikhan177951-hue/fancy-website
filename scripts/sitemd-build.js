#!/usr/bin/env node
/**
 * Invoke the real sitemd production builder (disk output to dist/).
 * The public CLI does not register `sitemd build` (Unknown command);
 * this script calls runBuild() from the engine directly.
 */
const path = require("path");
const root = path.resolve(__dirname, "..", "sitemd");
process.env.SITEMD_PROJECT_ROOT = root;
process.chdir(path.resolve(__dirname, ".."));

const { runBuild } = require("@sitemd-cc/sitemd/sitemd/engine/build/index.js");
runBuild(root);
