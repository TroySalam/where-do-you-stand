/**
 * Comprehensive scoring algorithm audit for Political Compass Quiz
 * 
 * Checks:
 * 1. Structure: 35 questions per mode, 4 options each
 * 2. Topics: correct distribution across all required topics
 * 3. x/y values: all within [-1, 1] range
 * 4. Directional consistency: options should span a range of positions
 * 5. Quadrant coverage: combined x/y values should produce results in all 4 quadrants
 * 6. Scoring algorithm: verify that averaging works correctly and maps to compass
 * 7. Profile mapping: verify getProfile() returns correct profile for each zone
 */

// Load questions.js and summaries.js by wrapping them in functions
const fs = require('fs');

// Wrap each file so const declarations get returned
const qCode = fs.readFileSync('./questions.js', 'utf8');
const sCode = fs.readFileSync('./summaries.js', 'utf8');

// Use Function constructor to evaluate and extract globals
const QUESTION_BANKS = new Function(qCode + '\nreturn QUESTION_BANKS;')();
const { PERSONALITY_PROFILES, getProfile, getDetailedSummary } = new Function(sCode + '\nreturn { PERSONALITY_PROFILES, getProfile, getDetailedSummary };')();

const MODES = ['teen', 'adult', 'academic', 'economist'];
const EXPECTED_TOPICS = [
  "Economy", "Environment", "Social", "Education", "Technology",
  "Digital Rights", "Healthcare", "Justice", "Immigration", "Culture", "Work", "Housing"
];

let errors = [];
let warnings = [];
let info = [];

function error(msg) { errors.push(`❌ ERROR: ${msg}`); }
function warn(msg) { warnings.push(`⚠️  WARNING: ${msg}`); }
function log(msg) { info.push(`✅ ${msg}`); }

// ===== 1. Structure check =====
console.log("\n========== 1. STRUCTURE CHECK ==========\n");

for (const mode of MODES) {
  const bank = QUESTION_BANKS[mode];
  if (!bank) {
    error(`Mode "${mode}" is missing from QUESTION_BANKS`);
    continue;
  }
  
  if (bank.length !== 35) {
    error(`Mode "${mode}" has ${bank.length} questions (expected 35)`);
  } else {
    log(`Mode "${mode}" has 35 questions`);
  }
  
  // Check each question has required fields
  for (let i = 0; i < bank.length; i++) {
    const q = bank[i];
    if (!q.topic) error(`${mode}[${i}] missing topic`);
    if (!q.text) error(`${mode}[${i}] missing text`);
    if (!q.options || !Array.isArray(q.options)) {
      error(`${mode}[${i}] missing or invalid options`);
      continue;
    }
    if (q.options.length !== 4) {
      error(`${mode}[${i}] has ${q.options.length} options (expected 4): "${q.text.slice(0, 60)}..."`);
    }
    
    for (let j = 0; j < q.options.length; j++) {
      const opt = q.options[j];
      if (!opt.label) error(`${mode}[${i}].options[${j}] missing label`);
      if (typeof opt.x !== 'number') error(`${mode}[${i}].options[${j}] missing or non-numeric x`);
      if (typeof opt.y !== 'number') error(`${mode}[${i}].options[${j}] missing or non-numeric y`);
    }
  }
}

// ===== 2. Topic distribution =====
console.log("\n========== 2. TOPIC DISTRIBUTION ==========\n");

for (const mode of MODES) {
  const bank = QUESTION_BANKS[mode];
  if (!bank) continue;
  
  const topicCounts = {};
  for (const q of bank) {
    topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1;
  }
  
  console.log(`\n${mode.toUpperCase()} mode topics:`);
  for (const [topic, count] of Object.entries(topicCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${topic}: ${count}`);
    if (!EXPECTED_TOPICS.includes(topic)) {
      warn(`${mode}: Unexpected topic "${topic}"`);
    }
  }
  
  // Check if any expected topic is completely missing
  for (const topic of EXPECTED_TOPICS) {
    if (!topicCounts[topic]) {
      // Not all modes need all topics (e.g., Housing may be covered under Economy)
      // But flag it as info
      console.log(`  [note] ${topic}: 0 (not required but may want coverage)`);
    }
  }
}

// ===== 3. x/y value ranges =====
console.log("\n========== 3. X/Y VALUE RANGES ==========\n");

for (const mode of MODES) {
  const bank = QUESTION_BANKS[mode];
  if (!bank) continue;
  
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  let outOfRange = 0;
  
  for (const q of bank) {
    for (const opt of q.options) {
      if (opt.x < -1 || opt.x > 1) {
        error(`${mode}: x=${opt.x} out of [-1,1] range in "${q.text.slice(0, 50)}..."`);
        outOfRange++;
      }
      if (opt.y < -1 || opt.y > 1) {
        error(`${mode}: y=${opt.y} out of [-1,1] range in "${q.text.slice(0, 50)}..."`);
        outOfRange++;
      }
      minX = Math.min(minX, opt.x);
      maxX = Math.max(maxX, opt.x);
      minY = Math.min(minY, opt.y);
      maxY = Math.max(maxY, opt.y);
    }
  }
  
  console.log(`${mode.toUpperCase()}: x=[${minX}, ${maxX}], y=[${minY}, ${maxY}]`);
  if (outOfRange === 0) log(`${mode}: All x/y values within [-1, 1] range`);
}

// ===== 4. Directional consistency per question =====
console.log("\n========== 4. OPTION SPREAD PER QUESTION ==========\n");

for (const mode of MODES) {
  const bank = QUESTION_BANKS[mode];
  if (!bank) continue;
  
  let narrowSpread = 0;
  
  for (let i = 0; i < bank.length; i++) {
    const q = bank[i];
    const xVals = q.options.map(o => o.x);
    const yVals = q.options.map(o => o.y);
    const xSpread = Math.max(...xVals) - Math.min(...xVals);
    const ySpread = Math.max(...yVals) - Math.min(...yVals);
    
    // Flag questions where all options point the same direction
    if (xSpread < 0.5 && ySpread < 0.5) {
      warn(`${mode}[${i}] narrow x/y spread (xSpread=${xSpread.toFixed(2)}, ySpread=${ySpread.toFixed(2)}): "${q.text.slice(0, 60)}..."`);
      narrowSpread++;
    }
    
    // Check for duplicate x/y combos
    const combos = q.options.map(o => `${o.x},${o.y}`);
    const uniqueCombos = new Set(combos);
    if (uniqueCombos.size < q.options.length) {
      warn(`${mode}[${i}] has duplicate x/y values: "${q.text.slice(0, 60)}..."`);
    }
  }
  
  if (narrowSpread === 0) {
    log(`${mode}: All questions have adequate option spread`);
  } else {
    console.log(`${mode}: ${narrowSpread} questions with narrow spread`);
  }
}

// ===== 5. Quadrant coverage simulation =====
console.log("\n========== 5. QUADRANT COVERAGE (Simulation) ==========\n");

for (const mode of MODES) {
  const bank = QUESTION_BANKS[mode];
  if (!bank) continue;
  
  // Simulate: pick the most progressive+auth, most trad+auth, most prog+lib, most trad+lib
  // to see if we can reach all 4 quadrants
  
  function simulateExtremeAnswers(bank, xDir, yDir) {
    let totalX = 0, totalY = 0;
    for (const q of bank) {
      // Pick the option closest to the desired direction
      let best = q.options[0];
      let bestScore = best.x * xDir + best.y * yDir;
      for (const opt of q.options) {
        const score = opt.x * xDir + opt.y * yDir;
        if (score > bestScore) {
          bestScore = score;
          best = opt;
        }
      }
      totalX += best.x;
      totalY += best.y;
    }
    return { x: totalX / bank.length, y: totalY / bank.length };
  }
  
  const authLeft = simulateExtremeAnswers(bank, -1, 1);  // x negative, y positive
  const authRight = simulateExtremeAnswers(bank, 1, 1);   // x positive, y positive
  const libLeft = simulateExtremeAnswers(bank, -1, -1);   // x negative, y negative
  const libRight = simulateExtremeAnswers(bank, 1, -1);   // x positive, y negative
  
  console.log(`${mode.toUpperCase()}:`);
  console.log(`  Auth-Left extreme:  (${authLeft.x.toFixed(3)}, ${authLeft.y.toFixed(3)}) → ${authLeft.x < 0 ? '✅ left' : '❌ right'}, ${authLeft.y > 0 ? '✅ auth' : '❌ lib'}`);
  console.log(`  Auth-Right extreme: (${authRight.x.toFixed(3)}, ${authRight.y.toFixed(3)}) → ${authRight.x > 0 ? '✅ right' : '❌ left'}, ${authRight.y > 0 ? '✅ auth' : '❌ lib'}`);
  console.log(`  Lib-Left extreme:   (${libLeft.x.toFixed(3)}, ${libLeft.y.toFixed(3)}) → ${libLeft.x < 0 ? '✅ left' : '❌ right'}, ${libLeft.y < 0 ? '✅ lib' : '❌ auth'}`);
  console.log(`  Lib-Right extreme:  (${libRight.x.toFixed(3)}, ${libRight.y.toFixed(3)}) → ${libRight.x > 0 ? '✅ right' : '❌ left'}, ${libRight.y < 0 ? '✅ lib' : '❌ auth'}`);
  
  // Verify all quadrants reachable
  if (authLeft.x >= 0) error(`${mode}: Can't reach Auth-Left quadrant (x=${authLeft.x.toFixed(3)})`);
  if (authLeft.y <= 0) error(`${mode}: Can't reach Auth-Left quadrant (y=${authLeft.y.toFixed(3)})`);
  if (authRight.x <= 0) error(`${mode}: Can't reach Auth-Right quadrant (x=${authRight.x.toFixed(3)})`);
  if (authRight.y <= 0) error(`${mode}: Can't reach Auth-Right quadrant (y=${authRight.y.toFixed(3)})`);
  if (libLeft.x >= 0) error(`${mode}: Can't reach Lib-Left quadrant (x=${libLeft.x.toFixed(3)})`);
  if (libLeft.y >= 0) error(`${mode}: Can't reach Lib-Left quadrant (y=${libLeft.y.toFixed(3)})`);
  if (libRight.x <= 0) error(`${mode}: Can't reach Lib-Right quadrant (x=${libRight.x.toFixed(3)})`);
  if (libRight.y >= 0) error(`${mode}: Can't reach Lib-Right quadrant (y=${libRight.y.toFixed(3)})`);
}

// ===== 6. Profile mapping =====
console.log("\n========== 6. PROFILE MAPPING ==========\n");

const profileTests = [
  { x: -0.8, y: 0.8,  expected: "left_auth" },
  { x: 0.8,  y: 0.8,  expected: "right_auth" },
  { x: 0,    y: 0.8,  expected: "center_auth" },
  { x: -0.8, y: 0,    expected: "left_mod" },
  { x: 0.8,  y: 0,    expected: "right_mod" },
  { x: 0,    y: 0,    expected: "center_mod" },
  { x: -0.8, y: -0.8, expected: "left_lib" },
  { x: 0.8,  y: -0.8, expected: "right_lib" },
  { x: 0,    y: -0.8, expected: "center_lib" },
  // Edge cases at boundaries
  { x: -0.333, y: 0.333, expected: "center_mod" },  // boundary: exactly at threshold
  { x: -0.334, y: 0.334, expected: "left_auth" },   // just past threshold
  { x: 0.334,  y: -0.334, expected: "right_lib" },
];

for (const test of profileTests) {
  const profile = getProfile(test.x, test.y);
  const key = Object.entries(PERSONALITY_PROFILES).find(([k, v]) => v === profile)?.[0];
  
  if (key === test.expected) {
    log(`getProfile(${test.x}, ${test.y}) → "${key}" ✅`);
  } else {
    error(`getProfile(${test.x}, ${test.y}) → "${key}" (expected "${test.expected}")`);
  }
}

// ===== 7. Compass dot placement math =====
console.log("\n========== 7. COMPASS DOT MATH ==========\n");

// Verify the dot placement formula:
// dotX = cx + px * (gridSize / 2)
// dotY = cy - py * (gridSize / 2)
// Where px, py are the averaged scores

function testDotPlacement(px, py, expectedQuadrant) {
  // Simulate canvas with size=300, pad=36
  const size = 300;
  const pad = 36;
  const gridSize = size - pad * 2;  // 228
  const cx = size / 2;  // 150
  const cy = size / 2;  // 150
  
  const dotX = cx + px * (gridSize / 2);
  const dotY = cy - py * (gridSize / 2);
  
  // Check which quadrant the dot falls in relative to center
  const isLeft = dotX < cx;
  const isRight = dotX > cx;
  const isTop = dotY < cy;  // Top of canvas = more gov (positive y)
  const isBottom = dotY > cy;
  
  let quadrant;
  if (isLeft && isTop) quadrant = "Auth-Left";
  else if (isRight && isTop) quadrant = "Auth-Right";
  else if (isLeft && isBottom) quadrant = "Lib-Left";
  else if (isRight && isBottom) quadrant = "Lib-Right";
  else quadrant = "Center";
  
  const match = quadrant === expectedQuadrant;
  if (match) {
    log(`Dot at (${px}, ${py}) → canvas (${dotX.toFixed(1)}, ${dotY.toFixed(1)}) = ${quadrant} ✅`);
  } else {
    error(`Dot at (${px}, ${py}) → canvas (${dotX.toFixed(1)}, ${dotY.toFixed(1)}) = ${quadrant} (expected ${expectedQuadrant})`);
  }
}

// x: negative = progressive (LEFT), positive = traditional (RIGHT)
// y: positive = more gov (TOP/AUTH), negative = less gov (BOTTOM/LIB)
testDotPlacement(-0.5, 0.5, "Auth-Left");   // Progressive + more gov
testDotPlacement(0.5, 0.5, "Auth-Right");    // Traditional + more gov
testDotPlacement(-0.5, -0.5, "Lib-Left");    // Progressive + less gov
testDotPlacement(0.5, -0.5, "Lib-Right");    // Traditional + less gov

// ===== 8. Topic score bar rendering check =====
console.log("\n========== 8. TOPIC SCORE BARS ==========\n");

// The topic bars use: barPosX = ((avgX + 1) / 2) * 100
// This maps x=-1 → 0%, x=0 → 50%, x=1 → 100%
// Bars fill from center (50%) toward the edge

function testBarPosition(avgX, expectedSide) {
  const barPosX = ((avgX + 1) / 2) * 100;
  const side = barPosX < 50 ? "progressive" : barPosX > 50 ? "traditional" : "center";
  
  if (side === expectedSide) {
    log(`Bar for x=${avgX} → ${barPosX.toFixed(1)}% (${side}) ✅`);
  } else {
    error(`Bar for x=${avgX} → ${barPosX.toFixed(1)}% (${side}, expected ${expectedSide})`);
  }
}

testBarPosition(-0.5, "progressive");
testBarPosition(0.5, "traditional");
testBarPosition(0, "center");

// ===== 9. Check x/y axis semantics match across all options =====
console.log("\n========== 9. AXIS SEMANTIC SPOT CHECK ==========\n");

// Spot check: Options with clearly progressive/left text should have negative x
// Options with clearly traditional/right text should have positive x
// Options favoring more government should have positive y
// Options favoring less government should have negative y

// Sample checks from teen mode
const teenBank = QUESTION_BANKS.teen;

// Q: "Tax the ultra-rich way more" should be progressive (x negative) and more gov (y positive)
const billionaireQ = teenBank.find(q => q.text.includes("Billionaires exist"));
if (billionaireQ) {
  const taxOpt = billionaireQ.options.find(o => o.label.includes("Tax the ultra-rich"));
  if (taxOpt) {
    if (taxOpt.x > 0) error(`"Tax the ultra-rich" has x=${taxOpt.x} but should be negative (progressive)`);
    else log(`"Tax the ultra-rich" correctly has x=${taxOpt.x} (progressive)`);
    if (taxOpt.y < 0) error(`"Tax the ultra-rich" has y=${taxOpt.y} but should be positive (more gov)`);
    else log(`"Tax the ultra-rich" correctly has y=${taxOpt.y} (more gov)`);
  }
  
  const leaveOpt = billionaireQ.options.find(o => o.label.includes("earned their money"));
  if (leaveOpt) {
    if (leaveOpt.x < 0) error(`"Leave them alone" has x=${leaveOpt.x} but should be positive (traditional)`);
    else log(`"Leave them alone" correctly has x=${leaveOpt.x} (traditional)`);
    if (leaveOpt.y > 0) error(`"Leave them alone" has y=${leaveOpt.y} but should be negative (less gov)`);
    else log(`"Leave them alone" correctly has y=${leaveOpt.y} (less gov)`);
  }
}

// Q: Gay marriage - "love is love" should be progressive (x negative)
const gayQ = teenBank.find(q => q.text.includes("gay marriage"));
if (gayQ) {
  const loveOpt = gayQ.options.find(o => o.label.includes("love is love"));
  if (loveOpt) {
    if (loveOpt.x > 0) error(`"Love is love" has x=${loveOpt.x} but should be negative (progressive)`);
    else log(`"Love is love" correctly has x=${loveOpt.x} (progressive)`);
  }
  
  const tradOpt = gayQ.options.find(o => o.label.includes("man and a woman"));
  if (tradOpt) {
    if (tradOpt.x < 0) error(`"Man and woman" has x=${tradOpt.x} but should be positive (traditional)`);
    else log(`"Man and woman" correctly has x=${tradOpt.x} (traditional)`);
  }
}

// Q: Government internet shutdown - "censorship" should be anti-auth (y negative)
const internetQ = teenBank.find(q => q.text.includes("turn off the internet"));
if (internetQ) {
  const censorOpt = internetQ.options.find(o => o.label.includes("censorship"));
  if (censorOpt) {
    if (censorOpt.y > 0) error(`"Censorship" has y=${censorOpt.y} but should be negative (less gov/lib)`);
    else log(`"Censorship" correctly has y=${censorOpt.y} (less gov/lib)`);
  }
  
  const safeOpt = internetQ.options.find(o => o.label.includes("stops violence"));
  if (safeOpt) {
    if (safeOpt.y < 0) error(`"Stops violence" has y=${safeOpt.y} but should be positive (more gov/auth)`);
    else log(`"Stops violence" correctly has y=${safeOpt.y} (more gov/auth)`);
  }
}

// ===== 10. Full summary: check for bias in question banks =====
console.log("\n========== 10. OVERALL BIAS CHECK ==========\n");

for (const mode of MODES) {
  const bank = QUESTION_BANKS[mode];
  if (!bank) continue;
  
  let allX = [], allY = [];
  for (const q of bank) {
    for (const opt of q.options) {
      allX.push(opt.x);
      allY.push(opt.y);
    }
  }
  
  const avgX = allX.reduce((a, b) => a + b, 0) / allX.length;
  const avgY = allY.reduce((a, b) => a + b, 0) / allY.length;
  
  console.log(`${mode.toUpperCase()}: avg option x=${avgX.toFixed(3)}, avg option y=${avgY.toFixed(3)}`);
  
  if (Math.abs(avgX) > 0.15) {
    warn(`${mode}: Options have notable x-axis bias (avg=${avgX.toFixed(3)}). ${avgX < 0 ? 'Leans progressive' : 'Leans traditional'}`);
  }
  if (Math.abs(avgY) > 0.15) {
    warn(`${mode}: Options have notable y-axis bias (avg=${avgY.toFixed(3)}). ${avgY > 0 ? 'Leans authoritarian' : 'Leans libertarian'}`);
  }
}

// ===== FINAL SUMMARY =====
console.log("\n\n════════════════════════════════════════════");
console.log("              AUDIT SUMMARY");
console.log("════════════════════════════════════════════\n");

console.log(`Errors:   ${errors.length}`);
console.log(`Warnings: ${warnings.length}`);
console.log(`Passes:   ${info.length}`);

if (errors.length > 0) {
  console.log("\n──── ERRORS ────");
  errors.forEach(e => console.log(e));
}

if (warnings.length > 0) {
  console.log("\n──── WARNINGS ────");
  warnings.forEach(w => console.log(w));
}

console.log("\n──── PASSES ────");
info.forEach(i => console.log(i));
