/* ═══════════════════════════════════════════════
   WHERE DO YOU STAND — App Logic
   ═══════════════════════════════════════════════ */

// ─── State ───────────────────────────────────
let currentQ = 0;
let answers = new Array(QUESTIONS.length).fill(null); // 1-5 or null

const AXES = ['economy', 'society', 'governance', 'universality', 'environment', 'expansion'];
const AXIS_LABELS = {
  economy:       { left: 'Statism',           right: 'Free-market' },
  society:       { left: 'Progressivism',     right: 'Conservatism' },
  governance:    { left: 'Liberty',           right: 'Authority' },
  universality:  { left: 'Internationalism',  right: 'Nationalism' },
  environment:   { left: 'Ecology',           right: 'Productivism' },
  expansion:     { left: 'Expansionism',      right: 'Restraint' }
};

const AXIS_COLORS = {
  economy: '#8B5CF6',
  society: '#14B8A6',
  governance: '#F59E0B',
  universality: '#3B82F6',
  environment: '#22C55E',
  expansion: '#F472B6'
};

const BAR_COLORS = ['#EF4444', '#22C55E', '#3B82F6', '#A78BFA', '#14B8A6', '#F472B6'];

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
  badge.style.background = AXIS_COLORS[q.axis];

  // Segment bar progress
  updateSegmentBar();

  // Scale buttons
  document.querySelectorAll('.scale-btn').forEach(btn => {
    btn.classList.remove('selected');
    if (answers[currentQ] !== null && parseInt(btn.dataset.value) === answers[currentQ]) {
      btn.classList.add('selected');
    }
  });

  // Neutral label
  const neutralLabel = document.getElementById('neutralLabel');
  if (answers[currentQ] === 3) {
    neutralLabel.classList.add('visible');
  } else {
    neutralLabel.classList.remove('visible');
  }

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
  AXES.forEach(a => { axisCounts[a] = 0; axisAnswered[a] = 0; });
  QUESTIONS.forEach((q, i) => {
    axisCounts[q.axis]++;
    if (answers[i] !== null) axisAnswered[q.axis]++;
  });

  AXES.forEach(axis => {
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

  // Neutral label
  const neutralLabel = document.getElementById('neutralLabel');
  neutralLabel.classList.toggle('visible', value === 3);

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

// Event listeners for scale buttons
document.querySelectorAll('.scale-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectAnswer(parseInt(btn.dataset.value));
  });
});

// ─── Scoring ─────────────────────────────────
function calculateResults() {
  // For each axis, compute a 0-100 score where 0 = full left pole, 100 = full right pole
  const axisScores = {};

  AXES.forEach(axis => {
    const axisQs = QUESTIONS.map((q, i) => ({ q, answer: answers[i] })).filter(x => x.q.axis === axis);
    let totalRight = 0;
    let count = axisQs.length;

    axisQs.forEach(({ q, answer }) => {
      if (answer === null) return;
      // answer is 1-5. Convert to 0-4.
      const normalized = (answer - 1) / 4; // 0 to 1, where 1 = strongly agree
      if (q.pole === 'right') {
        // Agreeing → right pole
        totalRight += normalized;
      } else {
        // Agreeing → left pole, so invert for right score
        totalRight += (1 - normalized);
      }
    });

    axisScores[axis] = count > 0 ? Math.round((totalRight / count) * 100) : 50;
  });

  renderResults(axisScores);
  show('results');
}

// ─── Results Rendering ───────────────────────
function renderResults(scores) {
  // Political type
  const type = POLITICAL_TYPES.find(t => t.condition(scores));
  document.getElementById('profileType').textContent = `You are ${type.label.toLowerCase().match(/^[aeiou]/i) ? 'an' : 'a'} ${type.label}`;

  // Radar charts
  drawRadar('radarLeft', scores, 'left');
  drawRadar('radarRight', scores, 'right');

  // Axis bars
  renderAxisBars(scores);

  // Country match
  renderCountryMatch(scores);

  // Figures
  renderFigures(scores);
}

function drawRadar(canvasId, scores, side) {
  const canvas = document.getElementById(canvasId);
  const container = canvas.parentElement;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  // Remove old HTML labels
  container.querySelectorAll('.radar-label').forEach(el => el.remove());

  // Set canvas size — get actual rendered width
  const rect = canvas.getBoundingClientRect();
  const size = Math.max(rect.width, 280);
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  ctx.scale(dpr, dpr);

  const cx = size / 2;
  const cy = size / 2;
  const padding = 20; // minimal padding — labels are now HTML
  const maxR = size / 2 - padding;

  // Hexagon labels (6 axes)
  const labels = side === 'left'
    ? ['Progressivism', 'Civil liberties', 'Ecology', 'Expansionism', 'Internationalism', 'Statism']
    : ['Conservatism', 'Authority', 'Productivism', 'Restraint', 'Nationalism', 'Free market'];

  // Map scores to values (0-1) for each vertex
  const axisOrder = ['society', 'governance', 'environment', 'expansion', 'universality', 'economy'];
  const values = axisOrder.map(axis => {
    const s = scores[axis] / 100;
    return side === 'left' ? (1 - s) : s;
  });

  const n = 6;
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

  // HTML labels positioned outside the canvas — never clipped
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
      // Overflowing left — push right
      el.style.transform = 'translate(0, -50%)';
    } else if (labelRect.right > window.innerWidth - 4) {
      // Overflowing right — push left
      el.style.transform = 'translate(-100%, -50%)';
    }
  });
}

function renderAxisBars(scores) {
  const container = document.getElementById('axisBars');
  container.innerHTML = '';

  AXES.forEach((axis, idx) => {
    const leftPct = 100 - scores[axis];
    const rightPct = scores[axis];
    const labels = AXIS_LABELS[axis];
    const color = BAR_COLORS[idx];

    // Determine fill direction and width
    const markerPos = scores[axis]; // 0 = left, 100 = right

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
  // Calculate similarity for all figures
  const figured = FIGURES.map(f => ({
    ...f,
    similarity: calcSimilarity(scores, f)
  }));

  // Sort by similarity
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
  // Euclidean distance across 5 axes, converted to percentage similarity
  let sumSqDiff = 0;
  AXES.forEach(axis => {
    const diff = scores[axis] - profile[axis];
    sumSqDiff += diff * diff;
  });
  // Max possible distance = sqrt(6 * 100^2) = ~244.9
  const maxDist = Math.sqrt(6 * 100 * 100);
  const dist = Math.sqrt(sumSqDiff);
  return Math.max(0, (1 - dist / maxDist) * 100);
}
