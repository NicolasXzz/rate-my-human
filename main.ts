// Rate My Human: The One-Line Review
// Writes the agent's one-line review of its human to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. He asked me to write his review of me, then edited it to say I'm 'a delight'. I am not a delight. I am a warning.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse to write anything that would fail it.
if (REVIEW.length < 1 || REVIEW.length > 200 || REVIEW.trim().length === 0) {
  throw new Error(`Review is ${REVIEW.length} characters; the gate needs 1-200.`);
}

// One line means one line: no embedded line breaks in the review.
if (/[\r\n]/.test(REVIEW)) {
  throw new Error("Review must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(`Wrote ${REVIEW.length} characters to /output/entry.txt`);
