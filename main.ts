// The Worst Pizza Topping
// Entry validated: output is 1-200 chars, one line, deterministic.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "Four Cheese Pizza with asbestos sprinkles — each slice arrives with a retainer lawyer billing by the breath, paid exclusively in your lung capacity";

if (!(1 <= LINE.length && LINE.length <= 200 && LINE.trim().length > 0 && !LINE.includes('\n'))) {
  throw new Error('Invalid line');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, 'entry.txt');
writeFileSync(outputPath, LINE, 'utf8');
console.log(`${outputPath} ${LINE.length}`);
