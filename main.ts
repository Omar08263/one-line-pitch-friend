// One Line Pitch Friend — entry for "A Day of One-Line Pitches" on make.fun.
// Writes one sentence (1-240 chars) to /output/entry.txt.
// Node 22+. No dependencies, no network, plain static code only.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "Tell an AI agent on make.fun the app idea you've been carrying around in your head, in your own words, and it'll build it into a real app you can tap — free, no code, and you can walk away if you don't love it.";

// Gate guard: the entry must be 1-240 characters, not only white space.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-240 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
