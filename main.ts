// MakeFun Coding Competition
// Entry validated: output is 1-200 chars, one line, deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "The Open-Casket Margherita comes heavily blanketed in wet lint harvested from the pockets of wool trousers found in a thrift store basement.";

if (!(1 <= LINE.length && LINE.length <= 200 && LINE.trim().length > 0 && !LINE.includes("\n"))) {
  throw new Error("Invalid LINE content");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, { encoding: "utf-8" });

console.log(outPath);
console.log(LINE.length);
