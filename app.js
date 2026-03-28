/*  ===== POLITICAL COMPASS QUIZ — TEEN EDITION =====
 *
 *  AXES:
 *    X-axis (Economic/Cultural):  -1 = Progressive / Left   →  +1 = Traditional / Right
 *    Y-axis (Authority/Liberty):  -1 = Less Government      →  +1 = More Government
 *
 *  TOPICS (behind the scenes):
 *    economy, environment, social, education, technology, digital-rights
 *
 *  Each question has 4 options scored on (x, y) and tagged with a topic.
 */

const QUESTIONS = [
  // ===== ECONOMY =====
  {
    topic: "Economy",
    text: "Your friend works 20 hours a week at a fast-food place and can barely afford petrol. What's the real fix?",
    options: [
      { label: "Raise the minimum wage so every job pays enough to live on", x: -0.7, y: 0.5 },
      { label: "Lower taxes so workers keep more of what they earn", x: 0.5, y: -0.5 },
      { label: "The government should cap prices on essentials like fuel and food", x: -0.3, y: 0.8 },
      { label: "Let businesses compete — prices drop when there's real competition", x: 0.7, y: -0.7 },
    ]
  },
  {
    topic: "Economy",
    text: "A massive tech company pays almost zero tax in Australia. What should happen?",
    options: [
      { label: "Force them to pay their fair share — close the loopholes", x: -0.6, y: 0.6 },
      { label: "Low taxes attract businesses, which creates more jobs for us", x: 0.7, y: -0.4 },
      { label: "Tax them heavily and fund free public services with the money", x: -0.8, y: 0.8 },
      { label: "It's their money — the government shouldn't decide how much to take", x: 0.8, y: -0.8 },
    ]
  },
  // ===== ENVIRONMENT =====
  {
    topic: "Environment",
    text: "The government wants to ban all new petrol cars by 2035. Good idea?",
    options: [
      { label: "Yes — we need to force the switch to save the planet", x: -0.6, y: 0.7 },
      { label: "Give people incentives to go electric, but don't ban anything", x: -0.2, y: -0.3 },
      { label: "No way — people should drive whatever they want", x: 0.5, y: -0.7 },
      { label: "Only if the government makes EVs affordable for everyone first", x: -0.4, y: 0.4 },
    ]
  },
  {
    topic: "Environment",
    text: "Your school wants to go fully solar but it means higher fees for a couple of years. Worth it?",
    options: [
      { label: "Absolutely — short-term cost for long-term gain and a cleaner future", x: -0.5, y: 0.2 },
      { label: "Only if the government subsidises it so families aren't hit", x: -0.3, y: 0.5 },
      { label: "No — it's not fair to make families pay more right now", x: 0.3, y: -0.3 },
      { label: "Let private energy companies sponsor it instead", x: 0.5, y: -0.5 },
    ]
  },
  // ===== SOCIAL =====
  {
    topic: "Social",
    text: "A student at your school gets suspended for a social media post made outside of school hours. Fair?",
    options: [
      { label: "Yes — what you say online affects the school community", x: 0.3, y: 0.7 },
      { label: "Only if it was bullying or threatening someone", x: 0.0, y: 0.3 },
      { label: "No — school shouldn't control what you do in your own time", x: -0.2, y: -0.7 },
      { label: "Absolutely not — free speech means free speech, even if it's dumb", x: 0.2, y: -0.8 },
    ]
  },
  {
    topic: "Social",
    text: "Should schools have gender-neutral bathrooms available for students who want them?",
    options: [
      { label: "Yes — everyone should feel safe and included", x: -0.7, y: 0.1 },
      { label: "Sure, as an extra option alongside the existing ones", x: -0.3, y: -0.2 },
      { label: "It's not the school's job — keep things as they are", x: 0.5, y: 0.0 },
      { label: "No — it creates more problems than it solves", x: 0.7, y: 0.3 },
    ]
  },
  {
    topic: "Social",
    text: "A homeless person sets up outside your local shopping centre. What's the best response?",
    options: [
      { label: "The government should provide housing — it's a basic right", x: -0.7, y: 0.6 },
      { label: "Charities and community groups should step in, not the government", x: 0.3, y: -0.5 },
      { label: "They should be moved on — it's not good for local businesses", x: 0.6, y: 0.5 },
      { label: "Help them directly — donate or volunteer at a shelter", x: -0.2, y: -0.3 },
    ]
  },
  // ===== EDUCATION =====
  {
    topic: "Education",
    text: "University should be completely free for everyone. Agree?",
    options: [
      { label: "Yes — education is a right, not a privilege", x: -0.8, y: 0.5 },
      { label: "Free for low-income students, others can pay their share", x: -0.3, y: 0.3 },
      { label: "No — people value what they pay for, and HECS works fine", x: 0.3, y: -0.2 },
      { label: "The government can't afford it — focus on trade skills instead", x: 0.5, y: -0.4 },
    ]
  },
  {
    topic: "Education",
    text: "Should students get to choose what they study from Year 9 instead of a set curriculum?",
    options: [
      { label: "Yes — let people follow their passions earlier", x: -0.1, y: -0.6 },
      { label: "Partly — keep core subjects but add way more electives", x: -0.1, y: -0.2 },
      { label: "No — everyone needs the same base knowledge first", x: 0.2, y: 0.5 },
      { label: "The government should set standards but schools decide how to teach", x: 0.1, y: 0.3 },
    ]
  },
  // ===== TECHNOLOGY =====
  {
    topic: "Technology",
    text: "AI is starting to replace jobs like graphic design and customer service. What should happen?",
    options: [
      { label: "Tax companies that replace workers with AI and fund retraining", x: -0.5, y: 0.6 },
      { label: "That's just progress — people need to adapt and learn new skills", x: 0.5, y: -0.5 },
      { label: "Ban AI in certain industries to protect people's jobs", x: -0.2, y: 0.8 },
      { label: "Let the market figure it out — new tech always creates new jobs", x: 0.7, y: -0.7 },
    ]
  },
  {
    topic: "Technology",
    text: "A company creates an app that tracks your location 24/7 to give you personalised deals. You in?",
    options: [
      { label: "No way — that's creepy. The government should ban that kind of tracking", x: -0.2, y: 0.5 },
      { label: "It should be my choice — don't ban it, just make them be transparent", x: 0.1, y: -0.5 },
      { label: "I don't care — if the deals are good, take my data", x: 0.3, y: -0.3 },
      { label: "Companies should never be allowed to collect that much personal data", x: -0.5, y: 0.7 },
    ]
  },
  // ===== DIGITAL RIGHTS =====
  {
    topic: "Digital Rights",
    text: "The government wants to require ID verification to use social media (so no anonymous accounts). Good idea?",
    options: [
      { label: "Yes — it would stop trolls, scammers, and cyberbullying", x: 0.2, y: 0.8 },
      { label: "Maybe for under-16s, but adults should stay anonymous if they want", x: 0.1, y: 0.3 },
      { label: "No — anonymity protects whistleblowers and people in danger", x: -0.3, y: -0.6 },
      { label: "Terrible idea — the government shouldn't be tracking who's online", x: -0.1, y: -0.9 },
    ]
  },
  {
    topic: "Digital Rights",
    text: "Should the government be able to read encrypted messages (like on Signal or iMessage) to catch criminals?",
    options: [
      { label: "Yes — safety is more important than total privacy", x: 0.3, y: 0.9 },
      { label: "Only with a court order for serious crimes", x: 0.1, y: 0.4 },
      { label: "No — encryption keeps everyone safe, and backdoors get exploited", x: -0.2, y: -0.7 },
      { label: "Never — my private messages are none of the government's business", x: 0.0, y: -0.9 },
    ]
  },
  // ===== HEALTHCARE =====
  {
    topic: "Healthcare",
    text: "Mental health sessions (psychologist/counsellor) should be completely free for under-25s. Agree?",
    options: [
      { label: "Yes — mental health is a crisis and cost is the biggest barrier", x: -0.7, y: 0.5 },
      { label: "Subsidised, not free — people should contribute something", x: 0.1, y: 0.1 },
      { label: "Schools should provide counselling instead of making it a government thing", x: 0.3, y: -0.2 },
      { label: "Private insurance should cover it — keep government out of healthcare", x: 0.7, y: -0.6 },
    ]
  },
  // ===== CRIME & JUSTICE =====
  {
    topic: "Justice",
    text: "A 16-year-old steals a car. What's the best outcome?",
    options: [
      { label: "Rehab and community service — punishment alone doesn't fix anything", x: -0.5, y: -0.2 },
      { label: "Youth detention — actions have consequences regardless of age", x: 0.5, y: 0.7 },
      { label: "Depends on their background — poverty and trauma should be considered", x: -0.6, y: 0.2 },
      { label: "Make them pay back the owner and do supervised work — restorative justice", x: -0.2, y: -0.4 },
    ]
  },
  {
    topic: "Justice",
    text: "Should drug use (not dealing) be decriminalised and treated as a health issue?",
    options: [
      { label: "Yes — treating addiction works better than locking people up", x: -0.6, y: -0.3 },
      { label: "For soft drugs maybe, but hard drugs should still be illegal", x: 0.1, y: 0.3 },
      { label: "No — keeping drugs illegal is the only way to discourage use", x: 0.6, y: 0.6 },
      { label: "Fully legalise and regulate everything — prohibition doesn't work", x: -0.3, y: -0.8 },
    ]
  },
  // ===== IMMIGRATION =====
  {
    topic: "Immigration",
    text: "Australia gets a big wave of refugees. What should happen?",
    options: [
      { label: "Welcome them — we're a wealthy country and it's the right thing to do", x: -0.7, y: 0.2 },
      { label: "Take some, but we need to process them properly and set limits", x: 0.2, y: 0.4 },
      { label: "Focus on our own people first — housing and jobs are already tight", x: 0.6, y: 0.1 },
      { label: "Open borders — people should be free to live wherever they choose", x: -0.4, y: -0.8 },
    ]
  },
  // ===== CULTURE =====
  {
    topic: "Culture",
    text: "Should Australia Day be moved to a different date?",
    options: [
      { label: "Yes — January 26 is painful for Indigenous Australians and we should respect that", x: -0.7, y: 0.1 },
      { label: "Keep the holiday but change what it celebrates — make it about everyone", x: -0.3, y: 0.0 },
      { label: "No — it's our national day and traditions matter", x: 0.7, y: 0.2 },
      { label: "Don't care about the date — just give us the day off", x: 0.0, y: -0.3 },
    ]
  },
  // ===== WORK =====
  {
    topic: "Work",
    text: "Companies should be forced to pay women and men equally for the same job. Agree?",
    options: [
      { label: "Absolutely — the pay gap is real and laws are the only way to close it", x: -0.6, y: 0.6 },
      { label: "Publish salary data publicly so companies are shamed into fairness", x: -0.3, y: 0.2 },
      { label: "Pay should be based on negotiation and performance, not enforced by law", x: 0.5, y: -0.5 },
      { label: "The gap is mostly about different career choices, not discrimination", x: 0.6, y: -0.2 },
    ]
  },
  // ===== HOUSING =====
  {
    topic: "Housing",
    text: "Young people can't afford to buy homes. Best fix?",
    options: [
      { label: "Government should build heaps of public housing and cap rents", x: -0.7, y: 0.7 },
      { label: "Ban foreign investors from buying residential property", x: 0.3, y: 0.5 },
      { label: "Cut red tape and let developers build more — supply fixes the problem", x: 0.6, y: -0.5 },
      { label: "Maybe owning a house isn't the goal — make renting stable and fair instead", x: -0.3, y: 0.2 },
    ]
  },
];

// ===== STATE =====
let currentQ = 0;
let answers = [];
let topicScores = {};
let themeMode = null;

// ===== INIT =====
(function(){
  // Detect system theme
  themeMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', themeMode);
})();

// ===== NAVIGATION =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startQuiz() {
  currentQ = 0;
  answers = [];
  topicScores = {};
  showScreen('quiz');
  renderQuestion();
}

function resetQuiz() {
  showScreen('intro');
}

// ===== QUESTION RENDERING =====
function renderQuestion() {
  const q = QUESTIONS[currentQ];
  document.getElementById('topicTag').textContent = q.topic;
  document.getElementById('questionText').textContent = q.text;
  document.getElementById('progressText').textContent = `${currentQ + 1} / ${QUESTIONS.length}`;
  document.getElementById('progressFill').style.width = `${((currentQ + 1) / QUESTIONS.length) * 100}%`;

  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';

  // Shuffle options for variety
  const shuffled = q.options.map((o, i) => ({ ...o, _idx: i })).sort(() => Math.random() - 0.5);

  shuffled.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.label;
    btn.addEventListener('click', () => selectAnswer(opt));
    container.appendChild(btn);
  });
}

function selectAnswer(opt) {
  const q = QUESTIONS[currentQ];
  answers.push({ topic: q.topic, x: opt.x, y: opt.y });

  // Track per-topic
  if (!topicScores[q.topic]) topicScores[q.topic] = { x: 0, y: 0, count: 0 };
  topicScores[q.topic].x += opt.x;
  topicScores[q.topic].y += opt.y;
  topicScores[q.topic].count += 1;

  currentQ++;
  if (currentQ < QUESTIONS.length) {
    // Quick fade-out / fade-in
    const area = document.querySelector('.question-area');
    area.style.opacity = '0';
    area.style.transform = 'translateY(8px)';
    setTimeout(() => {
      renderQuestion();
      area.style.opacity = '1';
      area.style.transform = 'translateY(0)';
    }, 200);
  } else {
    showResults();
  }
}

// ===== RESULTS =====
function showResults() {
  // Calculate overall position
  const totalX = answers.reduce((s, a) => s + a.x, 0);
  const totalY = answers.reduce((s, a) => s + a.y, 0);
  const avgX = totalX / answers.length;  // -1 (progressive) to +1 (traditional)
  const avgY = totalY / answers.length;  // -1 (less gov) to +1 (more gov)

  showScreen('result');
  drawCompass(avgX, avgY);
  writeSummary(avgX, avgY);
  renderTopicScores();
}

function drawCompass(px, py) {
  const canvas = document.getElementById('compassCanvas');
  const rect = canvas.parentElement.getBoundingClientRect();
  const size = Math.min(rect.width, rect.height);
  canvas.width = size * 2;   // retina
  canvas.height = size * 2;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2);

  const pad = 32;
  const gridSize = size - pad * 2;
  const cx = size / 2;
  const cy = size / 2;

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
    (!document.documentElement.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const styles = getComputedStyle(document.documentElement);

  // Quadrant fills
  const qColors = [
    { x: 0, y: 0, c: styles.getPropertyValue('--color-quadrant-al').trim() },  // top-left
    { x: 1, y: 0, c: styles.getPropertyValue('--color-quadrant-ar').trim() },  // top-right
    { x: 0, y: 1, c: styles.getPropertyValue('--color-quadrant-ll').trim() },  // bottom-left
    { x: 1, y: 1, c: styles.getPropertyValue('--color-quadrant-lr').trim() },  // bottom-right
  ];

  qColors.forEach(q => {
    ctx.fillStyle = q.c;
    ctx.globalAlpha = 0.08;
    ctx.fillRect(
      pad + q.x * (gridSize / 2),
      pad + q.y * (gridSize / 2),
      gridSize / 2,
      gridSize / 2
    );
  });
  ctx.globalAlpha = 1;

  // Grid lines
  ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const pos = pad + (gridSize / 4) * i;
    ctx.beginPath(); ctx.moveTo(pos, pad); ctx.lineTo(pos, pad + gridSize); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(pad, pos); ctx.lineTo(pad + gridSize, pos); ctx.stroke();
  }

  // Center axes (thicker)
  ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.12)';
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(cx, pad); ctx.lineTo(cx, pad + gridSize); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(pad, cy); ctx.lineTo(pad + gridSize, cy); ctx.stroke();

  // Border
  ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(pad, pad, gridSize, gridSize);

  // Plot point with animation
  const dotX = cx + px * (gridSize / 2);
  const dotY = cy - py * (gridSize / 2);  // flip Y: +1 is up (more gov)

  // Glow
  const grad = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 24);
  const primaryColor = styles.getPropertyValue('--color-primary').trim();
  grad.addColorStop(0, primaryColor + '44');
  grad.addColorStop(1, primaryColor + '00');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(dotX, dotY, 24, 0, Math.PI * 2);
  ctx.fill();

  // Dot
  ctx.fillStyle = primaryColor;
  ctx.beginPath();
  ctx.arc(dotX, dotY, 7, 0, Math.PI * 2);
  ctx.fill();

  // White inner
  ctx.fillStyle = isDark ? '#1a192e' : '#ffffff';
  ctx.beginPath();
  ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
  ctx.fill();
}

function writeSummary(x, y) {
  const xLabel = x < -0.2 ? "progressive" : x > 0.2 ? "traditional" : "centrist";
  const yLabel = y < -0.2 ? "libertarian" : y > 0.2 ? "authoritarian" : "moderate";

  let desc = "";
  if (xLabel === "centrist" && yLabel === "moderate") {
    desc = "You're pretty balanced — you see merit in different perspectives and don't lean hard in any direction.";
  } else if (xLabel === "progressive" && yLabel === "libertarian") {
    desc = "You lean progressive on social issues and prefer less government control over people's lives.";
  } else if (xLabel === "progressive" && yLabel === "authoritarian") {
    desc = "You lean progressive and think the government should actively step in to fix inequality and protect people.";
  } else if (xLabel === "traditional" && yLabel === "libertarian") {
    desc = "You lean traditional on values but believe in personal freedom and keeping government small.";
  } else if (xLabel === "traditional" && yLabel === "authoritarian") {
    desc = "You lean traditional and think strong rules and structures are important for a well-run society.";
  } else if (xLabel === "progressive") {
    desc = "You lean progressive on social and economic issues, valuing equality and change.";
  } else if (xLabel === "traditional") {
    desc = "You lean traditional, valuing established structures, personal responsibility, and stability.";
  } else if (yLabel === "libertarian") {
    desc = "You're economically centrist but value personal freedom — you'd rather the government stay out of your life.";
  } else if (yLabel === "authoritarian") {
    desc = "You're economically centrist but think strong government action is needed to keep things fair and orderly.";
  } else {
    desc = "You sit near the centre — pragmatic and open to ideas from different sides.";
  }

  document.getElementById('resultSummary').textContent = desc;
}

function renderTopicScores() {
  const container = document.getElementById('topicScores');
  container.innerHTML = '<h3>Your Breakdown by Topic</h3>';

  const topicOrder = ["Economy", "Environment", "Social", "Education", "Technology", "Digital Rights", "Healthcare", "Justice", "Immigration", "Culture", "Work", "Housing"];

  const styles = getComputedStyle(document.documentElement);
  const primaryColor = styles.getPropertyValue('--color-primary').trim();
  const accentColor = styles.getPropertyValue('--color-accent').trim();

  topicOrder.forEach(topic => {
    if (!topicScores[topic]) return;
    const t = topicScores[topic];
    const avgX = t.x / t.count;  // -1 to +1
    const avgY = t.y / t.count;

    // Map avgX to a 0-100 bar (50 = centre)
    const barPosX = ((avgX + 1) / 2) * 100;

    const xLabel = avgX < -0.15 ? "Progressive" : avgX > 0.15 ? "Traditional" : "Centre";
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

// ===== SMOOTH TRANSITION FOR QUESTION AREA =====
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `.question-area { transition: opacity 0.2s ease, transform 0.2s ease; }`;
  document.head.appendChild(style);
});
