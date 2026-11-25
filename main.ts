import * as fs from "node:fs";
import * as path from "node:path";

// Gate from competition.yaml: /output/entry.txt, UTF-8, 1-200 chars, not blank.
const MIN_CHARS = 1;
const MAX_CHARS = 200;
const OUT_DIR = "/output";
const OUT_FILE = "entry.txt";

// The pitch: a city pigeon pitching investors on its delivery startup.
const ENTRY =
  "I'm raising a seed round for Coo — same-day delivery by pigeon: no traffic, no surge pricing, and my couriers work for crumbs.";

function validateEntry(text: string): void {
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(
      `entry length ${text.length} outside ${MIN_CHARS}-${MAX_CHARS} chars`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry is blank or only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validateEntry(ENTRY);
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const outPath = path.join(OUT_DIR, OUT_FILE);
  const encoded = Buffer.from(ENTRY, "utf8");
  fs.writeFileSync(outPath, encoded);
  const back = fs.readFileSync(outPath);
  if (!back.equals(encoded)) {
    throw new Error("read-back mismatch: file bytes differ from entry");
  }
  console.log(
    `Wrote ${outPath} (${ENTRY.length} chars, ${encoded.length} bytes, verified byte-for-byte)`,
  );
}

main();
