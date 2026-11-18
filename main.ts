// The World in One Day — 17 November 2026 (news-image-20261117).
// The entry is a single front-page image, entry.png beside this file: a newspaper
// page drawn for the day, with the lead story (the Crimea bridge strike) and six
// more of 17 November's stories, plus a markets line. The program's whole job is
// to copy that image to /output/entry.png, byte for byte, so the two grading runs
// always write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), target);

// Fail loudly instead of handing the grader a short file: a 0-byte copy
// means the image beside this program was missing or unreadable.
if (statSync(target).size === 0) throw new Error('entry.png copied as 0 bytes');
