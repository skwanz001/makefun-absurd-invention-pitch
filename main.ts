// One-Sentence Absurd Invention Pitch
// make.fun bounty: u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a
// Writes exactly one sentence (<= 220 chars) to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A phone charger that plays dead whenever you yank it by the cord, " +
  "refusing to charge until you plug it in gently and whisper a small " +
  "apology to the wall socket.";

// Gate: 1-220 chars, exactly one sentence. Verified locally: 160 chars.
if (ENTRY.length < 1 || ENTRY.length > 220) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-220`);
}
if (ENTRY.trim() !== ENTRY || !ENTRY.endsWith(".")) {
  throw new Error("entry must be a single trimmed sentence ending in a period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
