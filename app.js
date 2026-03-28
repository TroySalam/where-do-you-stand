/* ===== POLITICAL COMPASS QUIZ v3 — GAME ENGINE ===== */

// ===== STATE =====
let currentMode = 'teen';
let currentQ = 0;
let questions = [];
let answers = [];
let topicScores = {};
let playerName = '';
let settings = {
  questionCount: 20,
  shuffle: true,
  showTopics: true,
};

// ===== THEME =====
(function initTheme() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  updateThemeIcon();
})();

const themeBtn = document.querySelector('[data-theme-toggle]');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    updateThemeIcon();
  });
}

function updateThemeIcon() {
  const btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.innerHTML = isDark
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

// ===== NAVIGATION =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function showModeSelect() {
  showScreen('mode-select');
}

function selectMode(mode) {
  currentMode = mode;
  // Show name entry screen
  showScreen('name-entry');
  const input = document.getElementById('playerNameInput');
  if (input) {
    input.value = playerName; // Pre-fill if they've entered before
    input.focus();
  }
  document.getElementById('nameHint').textContent = '';
}

function submitName() {
  const input = document.getElementById('playerNameInput');
  const name = input.value.trim();
  if (!name || name.length < 2) {
    document.getElementById('nameHint').textContent = 'Please enter your full name (at least 2 characters)';
    input.focus();
    return;
  }
  // Check for at least first + last name hint (soft validation)
  playerName = name;
  startQuiz(currentMode);
}

// Allow Enter key to submit name
document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('playerNameInput');
  if (nameInput) {
    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submitName();
    });
  }
});

// ===== SETTINGS =====
function updateSliderLabel() {
  const slider = document.getElementById('qCountSlider');
  const label = document.getElementById('qCountLabel');
  if (slider && label) label.textContent = slider.value;
}

function readSettings() {
  const slider = document.getElementById('qCountSlider');
  const defaultMode = document.getElementById('defaultMode');
  const shuffleToggle = document.getElementById('shuffleToggle');
  const topicToggle = document.getElementById('topicToggle');
  settings.questionCount = slider ? parseInt(slider.value) : 20;
  settings.shuffle = shuffleToggle ? shuffleToggle.checked : true;
  settings.showTopics = topicToggle ? topicToggle.checked : true;
  if (defaultMode) currentMode = defaultMode.value;
}

// ===== QUIZ =====
function startQuiz(explicitMode) {
  readSettings();
  // If a mode was explicitly chosen from the mode-select screen, use it
  // (readSettings may have overwritten currentMode with the dropdown default)
  if (explicitMode) currentMode = explicitMode;
  currentQ = 0;
  answers = [];
  topicScores = {};

  // Get questions for this mode
  const bank = QUESTION_BANKS[currentMode] || QUESTION_BANKS.teen;

  // Shuffle bank and take the requested number
  const shuffled = [...bank].sort(() => Math.random() - 0.5);
  const count = Math.min(settings.questionCount, bank.length);
  questions = shuffled.slice(0, count);

  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQ];
  const topicTag = document.getElementById('topicTag');
  const questionText = document.getElementById('questionText');
  const progressText = document.getElementById('progressText');
  const progressFill = document.getElementById('progressFill');

  topicTag.textContent = q.topic;
  topicTag.className = 'topic-tag' + (settings.showTopics ? '' : ' hidden');
  questionText.textContent = q.text;
  progressText.textContent = `${currentQ + 1} / ${questions.length}`;
  progressFill.style.width = `${((currentQ + 1) / questions.length) * 100}%`;

  // Update back button state
  const backBtn = document.getElementById('backQuestionBtn');
  if (backBtn) {
    backBtn.disabled = currentQ === 0;
  }

  // Close any open tooltips
  hideQuestionInfo();

  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';

  const opts = settings.shuffle
    ? [...q.options].sort(() => Math.random() - 0.5)
    : [...q.options];

  opts.forEach((opt, idx) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'option-wrapper';

    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.label;
    btn.addEventListener('click', () => selectAnswer(opt));

    const infoBtn = document.createElement('button');
    infoBtn.className = 'info-btn option-info-btn';
    infoBtn.title = 'Explain this option';
    infoBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';

    const tooltip = document.createElement('div');
    tooltip.className = 'info-tooltip option-tooltip';
    tooltip.id = `optionTooltip-${idx}`;

    // Get clarification text
    const qKey = q.text.slice(0, 80);
    const clar = CLARIFICATIONS[qKey];
    if (clar && clar.options) {
      // Find matching option by label
      const optIdx = q.options.findIndex(o => o.label === opt.label);
      tooltip.textContent = clar.options[optIdx >= 0 ? optIdx : idx] || '';
    }

    infoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = tooltip.classList.contains('open');
      // Close all option tooltips
      document.querySelectorAll('.option-tooltip.open').forEach(t => t.classList.remove('open'));
      if (!isOpen) tooltip.classList.add('open');
    });

    wrapper.appendChild(btn);
    wrapper.appendChild(infoBtn);
    wrapper.appendChild(tooltip);
    container.appendChild(wrapper);
  });
}

function selectAnswer(opt) {
  const q = questions[currentQ];
  answers.push({ topic: q.topic, x: opt.x, y: opt.y });

  if (!topicScores[q.topic]) topicScores[q.topic] = { x: 0, y: 0, count: 0 };
  topicScores[q.topic].x += opt.x;
  topicScores[q.topic].y += opt.y;
  topicScores[q.topic].count += 1;

  currentQ++;
  if (currentQ < questions.length) {
    // Fix highlight bug: blur and disable pointer events until user actually moves mouse
    if (document.activeElement) document.activeElement.blur();
    const container = document.getElementById('optionsContainer');
    container.classList.add('no-hover');

    const area = document.getElementById('questionArea');
    area.style.opacity = '0';
    area.style.transform = 'translateY(8px)';
    setTimeout(() => {
      renderQuestion();
      container.classList.add('no-hover');
      area.style.opacity = '1';
      area.style.transform = 'translateY(0)';
      // Only re-enable hover when user actually moves mouse (proves intent)
      const enableHover = () => {
        container.classList.remove('no-hover');
        document.removeEventListener('mousemove', enableHover);
        document.removeEventListener('touchstart', enableHover);
      };
      document.addEventListener('mousemove', enableHover, { once: true });
      document.addEventListener('touchstart', enableHover, { once: true });
    }, 180);
  } else {
    showResults();
  }
}

// ===== BACK BUTTON (previous question) =====
function goBackQuestion() {
  if (currentQ <= 0) return;

  // Remove last answer
  const lastAnswer = answers.pop();
  if (lastAnswer) {
    const ts = topicScores[lastAnswer.topic];
    if (ts) {
      ts.x -= lastAnswer.x;
      ts.y -= lastAnswer.y;
      ts.count -= 1;
      if (ts.count <= 0) delete topicScores[lastAnswer.topic];
    }
  }

  currentQ--;
  const area = document.getElementById('questionArea');
  area.style.opacity = '0';
  area.style.transform = 'translateY(-8px)';
  setTimeout(() => {
    renderQuestion();
    area.style.opacity = '1';
    area.style.transform = 'translateY(0)';
  }, 180);
}

// ===== QUESTION INFO TOOLTIP =====
function toggleQuestionInfo() {
  const tooltip = document.getElementById('questionTooltip');
  const isOpen = tooltip.classList.contains('open');

  // Close all tooltips first
  document.querySelectorAll('.info-tooltip.open').forEach(t => t.classList.remove('open'));

  if (!isOpen) {
    const q = questions[currentQ];
    const qKey = q.text.slice(0, 80);
    const clar = CLARIFICATIONS[qKey];
    tooltip.textContent = clar ? clar.question : 'Think about what this question is really asking and which answer feels right to you.';
    tooltip.classList.add('open');
  }
}

function hideQuestionInfo() {
  document.querySelectorAll('.info-tooltip.open').forEach(t => t.classList.remove('open'));
}

// ===== QUIT MODAL =====
function confirmQuit() {
  document.getElementById('quitModal').classList.add('active');
}

function closeModal() {
  document.getElementById('quitModal').classList.remove('active');
}

function quitQuiz() {
  closeModal();
  showScreen('menu');
}

function resetToMenu() {
  showScreen('mode-select');
}

// ===== RESULTS =====
function showResults() {
  const totalX = answers.reduce((s, a) => s + a.x, 0);
  const totalY = answers.reduce((s, a) => s + a.y, 0);
  const avgX = totalX / answers.length;
  const avgY = totalY / answers.length;

  showScreen('result');

  // Draw compass
  setTimeout(() => drawCompass(avgX, avgY), 50);

  // Render profile
  renderProfile(avgX, avgY);

  // Render topic scores
  renderTopicScores();

  // Submit result to community
  submitResult(avgX, avgY);
}

function submitResult(x, y) {
  // Get profile name for the entry
  const profile = typeof getProfile === 'function' ? getProfile(x, y) : null;
  const profileName = profile ? profile.name : '';

  fetch('/api/results', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: playerName,
      x, y,
      mode: currentMode,
      profile: profileName,
    })
  }).catch(() => { /* silently fail if offline / GitHub Pages */ });
}

function drawCompass(px, py) {
  const canvas = document.getElementById('compassCanvas');
  const wrapper = canvas.parentElement;
  const rect = wrapper.getBoundingClientRect();
  const size = Math.min(rect.width, rect.height);
  canvas.width = size * 2;
  canvas.height = size * 2;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2);

  const pad = 36;
  const gridSize = size - pad * 2;
  const cx = size / 2;
  const cy = size / 2;

  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const styles = getComputedStyle(document.documentElement);

  // Quadrant fills
  const quadrants = [
    { x: 0, y: 0, c: styles.getPropertyValue('--color-quadrant-al').trim() },
    { x: 1, y: 0, c: styles.getPropertyValue('--color-quadrant-ar').trim() },
    { x: 0, y: 1, c: styles.getPropertyValue('--color-quadrant-ll').trim() },
    { x: 1, y: 1, c: styles.getPropertyValue('--color-quadrant-lr').trim() },
  ];

  quadrants.forEach(q => {
    ctx.fillStyle = q.c;
    ctx.globalAlpha = isDark ? 0.12 : 0.08;
    ctx.fillRect(
      pad + q.x * (gridSize / 2),
      pad + q.y * (gridSize / 2),
      gridSize / 2,
      gridSize / 2
    );
  });
  ctx.globalAlpha = 1;

  // Grid lines — more visible
  const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)';
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;

  // Draw 8x8 sub-grid for better visibility
  for (let i = 0; i <= 8; i++) {
    const pos = pad + (gridSize / 8) * i;
    ctx.globalAlpha = (i === 4) ? 1 : 0.5;
    ctx.strokeStyle = gridColor;
    ctx.beginPath(); ctx.moveTo(pos, pad); ctx.lineTo(pos, pad + gridSize); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(pad, pos); ctx.lineTo(pad + gridSize, pos); ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // Center axes (prominent)
  ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.18)';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cx, pad); ctx.lineTo(cx, pad + gridSize); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(pad, cy); ctx.lineTo(pad + gridSize, cy); ctx.stroke();

  // Outer border
  ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.12)';
  ctx.lineWidth = 2;
  ctx.strokeRect(pad, pad, gridSize, gridSize);

  // Quadrant labels (inside grid)
  ctx.font = `600 ${Math.max(9, size * 0.022)}px 'General Sans', sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const labelAlpha = isDark ? 0.25 : 0.18;

  const labels = [
    { text: 'AUTH LEFT', x: pad + gridSize * 0.25, y: pad + gridSize * 0.12, c: styles.getPropertyValue('--color-quadrant-al').trim() },
    { text: 'AUTH RIGHT', x: pad + gridSize * 0.75, y: pad + gridSize * 0.12, c: styles.getPropertyValue('--color-quadrant-ar').trim() },
    { text: 'LIB LEFT', x: pad + gridSize * 0.25, y: pad + gridSize * 0.88, c: styles.getPropertyValue('--color-quadrant-ll').trim() },
    { text: 'LIB RIGHT', x: pad + gridSize * 0.75, y: pad + gridSize * 0.88, c: styles.getPropertyValue('--color-quadrant-lr').trim() },
  ];

  labels.forEach(l => {
    ctx.globalAlpha = labelAlpha;
    ctx.fillStyle = l.c;
    ctx.fillText(l.text, l.x, l.y);
  });
  ctx.globalAlpha = 1;

  // Plot the dot
  const dotX = cx + px * (gridSize / 2);
  const dotY = cy - py * (gridSize / 2);

  // Glow ring
  const primaryColor = styles.getPropertyValue('--color-primary').trim();
  const glowGrad = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 28);
  glowGrad.addColorStop(0, primaryColor + '55');
  glowGrad.addColorStop(1, primaryColor + '00');
  ctx.fillStyle = glowGrad;
  ctx.beginPath();
  ctx.arc(dotX, dotY, 28, 0, Math.PI * 2);
  ctx.fill();

  // Outer dot
  ctx.fillStyle = primaryColor;
  ctx.beginPath();
  ctx.arc(dotX, dotY, 8, 0, Math.PI * 2);
  ctx.fill();

  // Inner dot
  ctx.fillStyle = isDark ? '#0c0b14' : '#ffffff';
  ctx.beginPath();
  ctx.arc(dotX, dotY, 3.5, 0, Math.PI * 2);
  ctx.fill();
}

function renderProfile(x, y) {
  const card = document.getElementById('profileCard');

  if (typeof getDetailedSummary === 'function') {
    card.innerHTML = getDetailedSummary(x, y, topicScores);
  } else {
    // Fallback if summaries.js not loaded
    const profile = typeof getProfile === 'function' ? getProfile(x, y) : null;
    if (profile) {
      card.innerHTML = `
        <div class="profile-header">
          <span class="profile-emoji">${profile.emoji}</span>
          <div>
            <div class="profile-name">${profile.name}</div>
            <div class="profile-tagline">${profile.teen_description}</div>
          </div>
        </div>
      `;
    }
  }
}

function renderTopicScores() {
  const container = document.getElementById('topicScores');
  container.innerHTML = '';

  const styles = getComputedStyle(document.documentElement);
  const primaryColor = styles.getPropertyValue('--color-primary').trim();
  const accentColor = styles.getPropertyValue('--color-accent').trim();

  const topicOrder = ["Economy", "Environment", "Social", "Education", "Technology",
    "Digital Rights", "Healthcare", "Justice", "Immigration", "Culture", "Work", "Housing"];

  topicOrder.forEach(topic => {
    if (!topicScores[topic]) return;
    const t = topicScores[topic];
    const avgX = t.x / t.count;
    const barPosX = ((avgX + 1) / 2) * 100;

    const xLabel = avgX < -0.15 ? "Progressive" : avgX > 0.15 ? "Traditional" : "Centre";
    const avgY = t.y / t.count;
    const yLabel = avgY < -0.15 ? "Less Gov" : avgY > 0.15 ? "More Gov" : "Moderate";

    const row = document.createElement('div');
    row.className = 'topic-row';
    row.innerHTML = `
      <div class="topic-row-header">
        <span class="topic-name">${topic}</span>
        <span class="topic-value">${xLabel} · ${yLabel}</span>
      </div>
      <div class="topic-bar">
        <div class="topic-bar-center"></div>
        <div class="topic-bar-fill" style="
          width: ${Math.abs(barPosX - 50) * 2}%;
          margin-left: ${barPosX < 50 ? barPosX : 50}%;
          background: ${barPosX < 50 ? primaryColor : accentColor};
        "></div>
      </div>
    `;
    container.appendChild(row);
  });
}

// ===== COMMUNITY =====
function showCommunity() {
  showScreen('community');
  loadCommunityResults();
}

async function loadCommunityResults() {
  const list = document.getElementById('communityList');
  const canvas = document.getElementById('communityCanvas');

  try {
    const res = await fetch('/api/results');
    if (!res.ok) throw new Error('API unavailable');
    const results = await res.json();

    if (results.length === 0) {
      list.innerHTML = '<p class="panel-sub" style="text-align:center;">No results yet. Be the first to play!</p>';
      drawCommunityCompass(canvas, []);
      return;
    }

    drawCommunityCompass(canvas, results);

    // Build the list (most recent first)
    const sorted = [...results].reverse().slice(0, 50);
    list.innerHTML = `
      <h3 class="community-list-title">${results.length} player${results.length === 1 ? '' : 's'}</h3>
      <div class="community-entries">
        ${sorted.map(r => {
          const quadrant = getQuadrantLabel(r.x, r.y);
          return `<div class="community-entry">
            <span class="community-name">${escapeHTML(r.name)}</span>
            <span class="community-meta">${r.profile || quadrant} · ${r.mode}</span>
          </div>`;
        }).join('')}
      </div>
    `;
  } catch (e) {
    list.innerHTML = '<p class="panel-sub" style="text-align:center;">Community data is only available on the live server, not on static hosting.</p>';
    drawCommunityCompass(canvas, []);
  }
}

function drawCommunityCompass(canvas, results) {
  const wrapper = canvas.parentElement;
  const rect = wrapper.getBoundingClientRect();
  const size = Math.min(rect.width, rect.height);
  canvas.width = size * 2;
  canvas.height = size * 2;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2);

  const pad = 36;
  const gridSize = size - pad * 2;
  const cx = size / 2;
  const cy = size / 2;

  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const styles = getComputedStyle(document.documentElement);

  // Quadrant fills
  const quadrants = [
    { x: 0, y: 0, c: styles.getPropertyValue('--color-quadrant-al').trim() },
    { x: 1, y: 0, c: styles.getPropertyValue('--color-quadrant-ar').trim() },
    { x: 0, y: 1, c: styles.getPropertyValue('--color-quadrant-ll').trim() },
    { x: 1, y: 1, c: styles.getPropertyValue('--color-quadrant-lr').trim() },
  ];
  quadrants.forEach(q => {
    ctx.fillStyle = q.c;
    ctx.globalAlpha = isDark ? 0.12 : 0.08;
    ctx.fillRect(pad + q.x * (gridSize / 2), pad + q.y * (gridSize / 2), gridSize / 2, gridSize / 2);
  });
  ctx.globalAlpha = 1;

  // Grid
  const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)';
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;
  for (let i = 0; i <= 8; i++) {
    const pos = pad + (gridSize / 8) * i;
    ctx.globalAlpha = (i === 4) ? 1 : 0.5;
    ctx.strokeStyle = gridColor;
    ctx.beginPath(); ctx.moveTo(pos, pad); ctx.lineTo(pos, pad + gridSize); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(pad, pos); ctx.lineTo(pad + gridSize, pos); ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // Center axes
  ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.18)';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cx, pad); ctx.lineTo(cx, pad + gridSize); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(pad, cy); ctx.lineTo(pad + gridSize, cy); ctx.stroke();

  // Border
  ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.12)';
  ctx.lineWidth = 2;
  ctx.strokeRect(pad, pad, gridSize, gridSize);

  // Quadrant labels
  ctx.font = `600 ${Math.max(9, size * 0.022)}px 'General Sans', sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const labelAlpha = isDark ? 0.25 : 0.18;
  const lbs = [
    { text: 'AUTH LEFT', x: pad + gridSize * 0.25, y: pad + gridSize * 0.12, c: styles.getPropertyValue('--color-quadrant-al').trim() },
    { text: 'AUTH RIGHT', x: pad + gridSize * 0.75, y: pad + gridSize * 0.12, c: styles.getPropertyValue('--color-quadrant-ar').trim() },
    { text: 'LIB LEFT', x: pad + gridSize * 0.25, y: pad + gridSize * 0.88, c: styles.getPropertyValue('--color-quadrant-ll').trim() },
    { text: 'LIB RIGHT', x: pad + gridSize * 0.75, y: pad + gridSize * 0.88, c: styles.getPropertyValue('--color-quadrant-lr').trim() },
  ];
  lbs.forEach(l => {
    ctx.globalAlpha = labelAlpha;
    ctx.fillStyle = l.c;
    ctx.fillText(l.text, l.x, l.y);
  });
  ctx.globalAlpha = 1;

  // Plot all community dots
  const primaryColor = styles.getPropertyValue('--color-primary').trim();
  const colors = [
    styles.getPropertyValue('--color-quadrant-al').trim(),
    styles.getPropertyValue('--color-quadrant-ar').trim(),
    styles.getPropertyValue('--color-quadrant-ll').trim(),
    styles.getPropertyValue('--color-quadrant-lr').trim(),
  ];

  results.forEach(r => {
    const dotX = cx + r.x * (gridSize / 2);
    const dotY = cy - r.y * (gridSize / 2);

    // Color by quadrant
    let color;
    if (r.x < 0 && r.y >= 0) color = colors[0]; // Auth Left
    else if (r.x >= 0 && r.y >= 0) color = colors[1]; // Auth Right
    else if (r.x < 0 && r.y < 0) color = colors[2]; // Lib Left
    else color = colors[3]; // Lib Right

    ctx.globalAlpha = 0.7;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(dotX, dotY, 5, 0, Math.PI * 2);
    ctx.fill();

    // Name label
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = isDark ? '#e4e2f0' : '#1c1a30';
    ctx.font = `500 ${Math.max(8, size * 0.018)}px 'General Sans', sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(r.name.split(' ')[0], dotX, dotY - 9);
  });
  ctx.globalAlpha = 1;
}

function getQuadrantLabel(x, y) {
  if (x < 0 && y >= 0) return 'Auth Left';
  if (x >= 0 && y >= 0) return 'Auth Right';
  if (x < 0 && y < 0) return 'Lib Left';
  return 'Lib Right';
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
