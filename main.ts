// Childhood Memory — make.fun entry
// Writes one single-sentence childhood memory to /output/entry.txt.
// Deterministic and self-contained: no network, no secrets, no git history.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Gate: /output/entry.txt must be UTF-8 text of 1–280 characters, not only
// whitespace. This sentence is 183 characters, a single sentence, and the
// program writes it verbatim — no trailing newline, so the count is exact.
const ENTRY =
  "Every summer my father ran behind my bicycle, one hand on the seat, and each year his footsteps faded a little sooner until the road, the wind, and the whole long afternoon were mine.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Create the output directory if needed, but never remove it:
// the grader mounts it root-owned.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
