/* ═══════════════════════════════════════════════
   WHERE DO YOU STAND — App Logic
   ═══════════════════════════════════════════════ */

// ─── State ───────────────────────────────────
let currentQ = 0;
let answers = new Array(QUESTIONS.length).fill(null); // 1-5 or null

// 5 main axes (pentagons 1 & 2)
const AXES = ['economy', 'society', 'governance', 'universality', 'environment'];
const AXIS_LABELS = {
  economy:       { left: 'Statism',           right: 'Free-market' },
  society:       { left: 'Progressivism',     right: 'Conservatism' },
  governance:    { left: 'Liberty',           right: 'Authority' },
  universality:  { left: 'Internationalism',  right: 'Nationalism' },
  environment:   { left: 'Ecology',           right: 'Productivism' }
};

const AXIS_COLORS = {
  economy: '#8B5CF6',
  society: '#14B8A6',
  governance: '#F59E0B',
  universality: '#3B82F6',
  environment: '#22C55E'
};

// All 6 question-level axes (includes expansion for segment bar + badge)
const ALL_Q_AXES = ['economy', 'society', 'governance', 'universality', 'environment', 'expansion'];
const ALL_Q_COLORS = {
  economy: '#8B5CF6',
  society: '#14B8A6',
  governance: '#F59E0B',
  universality: '#3B82F6',
  environment: '#22C55E',
  expansion: '#F472B6'
};

const BAR_COLORS = ['#EF4444', '#22C55E', '#3B82F6', '#A78BFA', '#14B8A6'];

// Expansion sub-dimensions (pentagon 3)
const EXPANSION_SUBS = ['space', 'technology', 'bioethics', 'growth'];
// The 5th vertex "Expansion" = average of the 4 subs
const EXPANSION_LABELS = {
  space:      { left: 'Cosmic ambition', right: 'Earth-focused' },
  technology: { left: 'Tech acceleration', right: 'Tech caution' },
  bioethics:  { left: 'Enhancement', right: 'Natural limits' },
  growth:     { left: 'Unlimited growth', right: 'Degrowth' }
};

// ─── Navigation ──────────────────────────────
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() { show('landing'); }

function startQuiz() {
  currentQ = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  buildDotProgress();
  renderQuestion();
  show('quiz');
}

function retakeQuiz() {
  startQuiz();
}

// ─── Quiz Logic ──────────────────────────────
function renderQuestion() {
  const q = QUESTIONS[currentQ];

  // Question text with animation
  const card = document.querySelector('.question-card');
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = '';
  document.getElementById('questionText').textContent = q.text;

  // Counter
  document.getElementById('qCounter').textContent = `Question ${currentQ + 1} of ${QUESTIONS.length}`;

  // Axis badge
  const badge = document.getElementById('axisBadge');
  badge.textContent = q.axis.charAt(0).toUpperCase() + q.axis.slice(1);
  badge.style.background = ALL_Q_COLORS[q.axis];

  // Segment bar progress
  updateSegmentBar();

  // Scale buttons
  document.querySelectorAll('.scale-btn').forEach(btn => {
    btn.classList.remove('selected');
    if (answers[currentQ] !== null && parseInt(btn.dataset.value) === answers[currentQ]) {
      btn.classList.add('selected');
    }
  });

  // Nav buttons
  document.getElementById('prevBtn').classList.toggle('disabled', currentQ === 0);
  document.getElementById('nextBtn').classList.toggle('disabled', answers[currentQ] === null);

  // Dot progress
  updateDotProgress();
}

function updateSegmentBar() {
  // Count questions per axis and how many are answered
  const axisCounts = {};
  const axisAnswered = {};
  ALL_Q_AXES.forEach(a => { axisCounts[a] = 0; axisAnswered[a] = 0; });
  QUESTIONS.forEach((q, i) => {
    axisCounts[q.axis]++;
    if (answers[i] !== null) axisAnswered[q.axis]++;
  });

  ALL_Q_AXES.forEach(axis => {
    const fill = document.querySelector(`.segment[data-axis="${axis}"] .segment-fill`);
    if (fill) {
      const pct = axisCounts[axis] > 0 ? (axisAnswered[axis] / axisCounts[axis]) * 100 : 0;
      fill.style.width = pct + '%';
    }
  });
}

function buildDotProgress() {
  const container = document.getElementById('dotProgress');
  container.innerHTML = '';
  for (let i = 0; i < QUESTIONS.length; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot';
    container.appendChild(dot);
  }
}

function updateDotProgress() {
  const dots = document.querySelectorAll('#dotProgress .dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('answered', answers[i] !== null);
    dot.classList.toggle('current', i === currentQ);
  });
}

function selectAnswer(value) {
  answers[currentQ] = value;

  // Update button states
  document.querySelectorAll('.scale-btn').forEach(btn => {
    btn.classList.toggle('selected', parseInt(btn.dataset.value) === value);
  });

  // Enable next
  document.getElementById('nextBtn').classList.remove('disabled');

  updateDotProgress();
  updateSegmentBar();

  // Auto-advance after a short delay
  setTimeout(() => {
    if (currentQ < QUESTIONS.length - 1) {
      nextQuestion();
    } else {
      calculateResults();
    }
  }, 350);
}

function nextQuestion() {
  if (answers[currentQ] === null) return;
  if (currentQ < QUESTIONS.length - 1) {
    currentQ++;
    renderQuestion();
  } else {
    calculateResults();
  }
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    renderQuestion();
  }
}

// Event listeners for scale rows (click anywhere on the row)
document.querySelectorAll('.scale-row').forEach(row => {
  row.addEventListener('click', () => {
    selectAnswer(parseInt(row.dataset.value));
  });
});
document.querySelectorAll('.scale-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    selectAnswer(parseInt(btn.dataset.value));
  });
});

// ─── Scoring ─────────────────────────────────
function calculateResults() {
  const axisScores = {};

  // Score the 5 main axes
  AXES.forEach(axis => {
    const axisQs = QUESTIONS.map((q, i) => ({ q, answer: answers[i] })).filter(x => x.q.axis === axis);
    let totalRight = 0;
    let count = axisQs.length;

    axisQs.forEach(({ q, answer }) => {
      if (answer === null) return;
      const normalized = (answer - 1) / 4;
      if (q.pole === 'right') {
        totalRight += normalized;
      } else {
        totalRight += (1 - normalized);
      }
    });

    axisScores[axis] = count > 0 ? Math.round((totalRight / count) * 100) : 50;
  });

  // Score the 4 expansion sub-dimensions
  const expansionQs = QUESTIONS.map((q, i) => ({ q, answer: answers[i] })).filter(x => x.q.axis === 'expansion');

  EXPANSION_SUBS.forEach(sub => {
    const subQs = expansionQs.filter(x => x.q.sub === sub);
    let totalRight = 0;
    let count = subQs.length;

    subQs.forEach(({ q, answer }) => {
      if (answer === null) return;
      const normalized = (answer - 1) / 4;
      if (q.pole === 'right') {
        totalRight += normalized;
      } else {
        totalRight += (1 - normalized);
      }
    });

    axisScores[sub] = count > 0 ? Math.round((totalRight / count) * 100) : 50;
  });

  // Derived "expansion" = average of 4 subs (for political type labels + axis bar)
  axisScores.expansion = Math.round(
    EXPANSION_SUBS.reduce((sum, s) => sum + axisScores[s], 0) / EXPANSION_SUBS.length
  );

  renderResults(axisScores);
  show('results');
}

// ─── Results Rendering ───────────────────────
function renderResults(scores) {
  // Political type
  const type = POLITICAL_TYPES.find(t => t.condition(scores));
  document.getElementById('profileType').textContent = `You are ${type.label.toLowerCase().match(/^[aeiou]/i) ? 'an' : 'a'} ${type.label}`;

  // Classic 2D political compass
  drawCompass(scores);

  // Pentagon radar charts (5 main axes)
  drawRadar('radarLeft', scores, 'left');
  drawRadar('radarRight', scores, 'right');

  // Expansion pentagon (3rd chart)
  drawRadarExpansion('radarExpansion', scores);

  // Axis bars (5 main + expansion aggregate)
  renderAxisBars(scores);

  // Country match
  renderCountryMatch(scores);

  // Figures
  renderFigures(scores);
}

function drawCompass(scores) {
  const canvas = document.getElementById('compassCanvas');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  const rect = canvas.getBoundingClientRect();
  const size = Math.max(rect.width, 280);
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  ctx.scale(dpr, dpr);

  const pad = 2;
  const gridSize = size - pad * 2;
  const half = gridSize / 2;
  const cx = pad + half;
  const cy = pad + half;

  // Clear
  ctx.clearRect(0, 0, size, size);

  // 4 quadrant fills
  // Top-left: Authoritarian Left (red)
  ctx.fillStyle = 'rgba(239, 68, 68, 0.18)';
  ctx.fillRect(pad, pad, half, half);
  // Top-right: Authoritarian Right (blue)
  ctx.fillStyle = 'rgba(59, 130, 246, 0.18)';
  ctx.fillRect(cx, pad, half, half);
  // Bottom-left: Libertarian Left (green)
  ctx.fillStyle = 'rgba(34, 197, 94, 0.18)';
  ctx.fillRect(pad, cy, half, half);
  // Bottom-right: Libertarian Right (purple)
  ctx.fillStyle = 'rgba(168, 85, 247, 0.18)';
  ctx.fillRect(cx, cy, half, half);

  // Grid lines (subtle)
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  for (let i = 1; i < 4; i++) {
    // Vertical
    const x = pad + (gridSize * i) / 4;
    ctx.beginPath();
    ctx.moveTo(x, pad);
    ctx.lineTo(x, pad + gridSize);
    ctx.stroke();
    // Horizontal
    const y = pad + (gridSize * i) / 4;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(pad + gridSize, y);
    ctx.stroke();
  }

  // Center cross (thicker)
  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
  ctx.lineWidth = 1.5;
  // Vertical center
  ctx.beginPath();
  ctx.moveTo(cx, pad);
  ctx.lineTo(cx, pad + gridSize);
  ctx.stroke();
  // Horizontal center
  ctx.beginPath();
  ctx.moveTo(pad, cy);
  ctx.lineTo(pad + gridSize, cy);
  ctx.stroke();

  // Border
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  ctx.lineWidth = 1;
  ctx.strokeRect(pad, pad, gridSize, gridSize);

  // User's position
  // X: economy score 0=Statism(left), 100=Free-market(right)
  // Y: governance score 0=Liberty(bottom), 100=Authority(top)
  // Compass: top = Authoritarian, bottom = Libertarian
  // So high governance → top (small Y), low governance → bottom (large Y)
  const userX = pad + (scores.economy / 100) * gridSize;
  const userY = pad + (1 - scores.governance / 100) * gridSize;

  // Glow
  ctx.beginPath();
  ctx.arc(userX, userY, 12, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(139, 92, 246, 0.35)';
  ctx.fill();

  // Dot
  ctx.beginPath();
  ctx.arc(userX, userY, 6, 0, Math.PI * 2);
  ctx.fillStyle = '#8B5CF6';
  ctx.fill();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Coordinates text
  const ecoLabel = scores.economy < 50 ? 'Left' : scores.economy > 50 ? 'Right' : 'Centre';
  const govLabel = scores.governance < 50 ? 'Libertarian' : scores.governance > 50 ? 'Authoritarian' : 'Centre';
  const ecoVal = Math.abs(scores.economy - 50) * 2; // 0-100 scale from centre
  const govVal = Math.abs(scores.governance - 50) * 2;
  document.getElementById('compassCoords').textContent =
    `Economic: ${ecoVal.toFixed(0)}% ${ecoLabel}  ·  Social: ${govVal.toFixed(0)}% ${govLabel}`;
}

function drawRadar(canvasId, scores, side) {
  const canvas = document.getElementById(canvasId);
  const container = canvas.parentElement;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  // Remove old HTML labels
  container.querySelectorAll('.radar-label').forEach(el => el.remove());

  // Set canvas size
  const rect = canvas.getBoundingClientRect();
  const size = Math.max(rect.width, 280);
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  ctx.scale(dpr, dpr);

  const cx = size / 2;
  const cy = size / 2;
  const padding = 20;
  const maxR = size / 2 - padding;

  // Pentagon labels (5 axes — no expansion)
  const labels = side === 'left'
    ? ['Progressivism', 'Ecology', 'Internationalism', 'Statism', 'Civil liberties']
    : ['Conservatism', 'Productivism', 'Nationalism', 'Free market', 'Authority'];

  // Map scores to values (0-1) for each vertex
  const axisOrder = ['society', 'environment', 'universality', 'economy', 'governance'];
  const values = axisOrder.map(axis => {
    const s = scores[axis] / 100;
    return side === 'left' ? (1 - s) : s;
  });

  const n = 5;
  const angleStep = (Math.PI * 2) / n;
  const startAngle = -Math.PI / 2;

  // Clear
  ctx.clearRect(0, 0, size, size);

  // Grid lines (3 levels)
  for (let level = 1; level <= 3; level++) {
    const r = maxR * (level / 3);
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const angle = startAngle + i * angleStep;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Spokes
  for (let i = 0; i < n; i++) {
    const angle = startAngle + i * angleStep;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * maxR, cy + Math.sin(angle) * maxR);
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Data polygon
  const fillColor = side === 'left' ? 'rgba(20, 184, 166, 0.25)' : 'rgba(139, 92, 246, 0.25)';
  const strokeColor = side === 'left' ? '#14B8A6' : '#8B5CF6';

  ctx.beginPath();
  values.forEach((v, i) => {
    const r = maxR * Math.max(v, 0.05);
    const angle = startAngle + i * angleStep;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 2;
  ctx.stroke();

  // Vertices (dots)
  values.forEach((v, i) => {
    const r = maxR * Math.max(v, 0.05);
    const angle = startAngle + i * angleStep;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = strokeColor;
    ctx.fill();
  });

  // HTML labels
  addRadarLabels(container, canvas, labels, n, startAngle, angleStep, cx, cy, maxR, size);
}

function drawRadarExpansion(canvasId, scores) {
  const canvas = document.getElementById(canvasId);
  const container = canvas.parentElement;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  // Remove old HTML labels
  container.querySelectorAll('.radar-label').forEach(el => el.remove());

  // Set canvas size
  const rect = canvas.getBoundingClientRect();
  const size = Math.max(rect.width, 280);
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  ctx.scale(dpr, dpr);

  const cx = size / 2;
  const cy = size / 2;
  const padding = 20;
  const maxR = size / 2 - padding;

  // 5 vertices: 4 subs + 1 derived "Expansion" (overall)
  // Show left-pole labels (expansionist side) — low score = expansionist
  const labels = ['Space', 'Technology', 'Bioethics', 'Growth', 'Expansion'];
  const vertexKeys = ['space', 'technology', 'bioethics', 'growth', 'expansion'];

  // Values: invert so that low score (expansionist) = larger on chart
  const values = vertexKeys.map(key => {
    const s = scores[key] / 100;
    return 1 - s; // 0 = restraint (small), 1 = expansionist (large)
  });

  const n = 5;
  const angleStep = (Math.PI * 2) / n;
  const startAngle = -Math.PI / 2;

  // Clear
  ctx.clearRect(0, 0, size, size);

  // Grid lines (3 levels)
  for (let level = 1; level <= 3; level++) {
    const r = maxR * (level / 3);
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const angle = startAngle + i * angleStep;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Spokes
  for (let i = 0; i < n; i++) {
    const angle = startAngle + i * angleStep;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * maxR, cy + Math.sin(angle) * maxR);
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Data polygon — pink/rose color
  const fillColor = 'rgba(244, 114, 182, 0.25)';
  const strokeColor = '#F472B6';

  ctx.beginPath();
  values.forEach((v, i) => {
    const r = maxR * Math.max(v, 0.05);
    const angle = startAngle + i * angleStep;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 2;
  ctx.stroke();

  // Vertices (dots)
  values.forEach((v, i) => {
    const r = maxR * Math.max(v, 0.05);
    const angle = startAngle + i * angleStep;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = strokeColor;
    ctx.fill();
  });

  // HTML labels
  addRadarLabels(container, canvas, labels, n, startAngle, angleStep, cx, cy, maxR, size);
}

// Shared label positioning function
function addRadarLabels(container, canvas, labels, n, startAngle, angleStep, cx, cy, maxR, size) {
  const canvasRect = canvas.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const offsetX = canvasRect.left - containerRect.left;
  const offsetY = canvasRect.top - containerRect.top;
  const fontSize = Math.max(10, Math.round(size * 0.032));

  labels.forEach((label, i) => {
    const angle = startAngle + i * angleStep;
    const lr = maxR + 18;
    const x = cx + Math.cos(angle) * lr;
    const y = cy + Math.sin(angle) * lr;

    const el = document.createElement('span');
    el.className = 'radar-label';
    el.textContent = label;

    el.style.position = 'absolute';
    el.style.left = (offsetX + x) + 'px';
    el.style.top = (offsetY + y) + 'px';
    el.style.fontSize = fontSize + 'px';
    el.style.color = 'rgba(255,255,255,0.55)';
    el.style.whiteSpace = 'nowrap';
    el.style.pointerEvents = 'none';
    el.style.fontFamily = 'Inter, sans-serif';
    el.style.lineHeight = '1';

    // Alignment transforms based on angle position
    if (Math.abs(Math.cos(angle)) < 0.1) {
      el.style.transform = 'translate(-50%, ' + (Math.sin(angle) < 0 ? '-100%' : '0') + ')';
    } else if (Math.cos(angle) > 0) {
      el.style.transform = 'translate(0, -50%)';
    } else {
      el.style.transform = 'translate(-100%, -50%)';
    }

    container.appendChild(el);

    // Post-append: clamp to viewport bounds
    const labelRect = el.getBoundingClientRect();
    if (labelRect.left < 4) {
      el.style.transform = 'translate(0, -50%)';
    } else if (labelRect.right > window.innerWidth - 4) {
      el.style.transform = 'translate(-100%, -50%)';
    }
  });
}

function renderAxisBars(scores) {
  const container = document.getElementById('axisBars');
  container.innerHTML = '';

  // 5 main axes
  AXES.forEach((axis, idx) => {
    const leftPct = 100 - scores[axis];
    const rightPct = scores[axis];
    const labels = AXIS_LABELS[axis];
    const color = BAR_COLORS[idx];
    const markerPos = scores[axis];

    const row = document.createElement('div');
    row.className = 'axis-bar-row';
    row.innerHTML = `
      <div class="axis-bar-left">
        <span class="axis-bar-label">${labels.left}</span>
        <span class="axis-bar-pct">${leftPct}%</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="
          left: ${Math.min(markerPos, 50)}%;
          width: ${Math.abs(markerPos - 50)}%;
          background: ${color};
          border-radius: 4px;
        "></div>
        <div class="bar-marker" style="left: ${markerPos}%;"></div>
      </div>
      <div class="axis-bar-right">
        <span class="axis-bar-pct">${rightPct}%</span>
        <span class="axis-bar-label">${labels.right}</span>
      </div>
    `;
    container.appendChild(row);
  });

  // Expansion aggregate bar
  const expLeft = 100 - scores.expansion;
  const expRight = scores.expansion;
  const expMarker = scores.expansion;
  const expRow = document.createElement('div');
  expRow.className = 'axis-bar-row';
  expRow.innerHTML = `
    <div class="axis-bar-left">
      <span class="axis-bar-label">Expansionism</span>
      <span class="axis-bar-pct">${expLeft}%</span>
    </div>
    <div class="bar-track">
      <div class="bar-fill" style="
        left: ${Math.min(expMarker, 50)}%;
        width: ${Math.abs(expMarker - 50)}%;
        background: #F472B6;
        border-radius: 4px;
      "></div>
      <div class="bar-marker" style="left: ${expMarker}%;"></div>
    </div>
    <div class="axis-bar-right">
      <span class="axis-bar-pct">${expRight}%</span>
      <span class="axis-bar-label">Restraint</span>
    </div>
  `;
  container.appendChild(expRow);
}

function renderCountryMatch(scores) {
  let bestCountry = null;
  let bestSimilarity = -1;

  COUNTRIES.forEach(country => {
    const similarity = calcSimilarity(scores, country);
    if (similarity > bestSimilarity) {
      bestSimilarity = similarity;
      bestCountry = country;
    }
  });

  document.getElementById('countryCode').textContent = bestCountry.code;
  document.getElementById('countryName').textContent = `${bestCountry.flag} ${bestCountry.name}`;
  document.getElementById('countryPct').textContent = `${Math.round(bestSimilarity)}%`;
}

function renderFigures(scores) {
  const figured = FIGURES.map(f => ({
    ...f,
    similarity: calcSimilarity(scores, f)
  }));

  figured.sort((a, b) => b.similarity - a.similarity);

  // Closest 4
  const closest = figured.slice(0, 4);
  const closestEl = document.getElementById('closestFigures');
  closestEl.innerHTML = closest.map(f => `
    <div class="figure-card">
      <span class="figure-name">${f.name}</span>
      <span class="figure-pct">${Math.round(f.similarity)}%</span>
    </div>
  `).join('');

  // Most distant 4
  const distant = figured.slice(-4).reverse();
  const distantEl = document.getElementById('distantFigures');
  distantEl.innerHTML = distant.map(f => `
    <div class="figure-card">
      <span class="figure-name">${f.name}</span>
      <span class="figure-pct">${Math.round(f.similarity)}%</span>
    </div>
  `).join('');
}

function calcSimilarity(scores, profile) {
  // Compare across 5 main axes + 4 expansion subs = 9 dimensions
  const allDims = [...AXES, ...EXPANSION_SUBS];
  let sumSqDiff = 0;
  allDims.forEach(dim => {
    const diff = scores[dim] - profile[dim];
    sumSqDiff += diff * diff;
  });
  // Max possible distance = sqrt(9 * 100^2) = 300
  const maxDist = Math.sqrt(allDims.length * 100 * 100);
  const dist = Math.sqrt(sumSqDiff);
  return Math.max(0, (1 - dist / maxDist) * 100);
}
