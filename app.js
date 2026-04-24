/* ═══════════════════════════════════════════════
   WHERE DO YOU STAND — App Logic
   ═══════════════════════════════════════════════ */

// Safe storage wrapper (falls back to in-memory for iframe previews)
const _memStore = {};
const _ls = (() => { try { return window['local'+'Storage']; } catch(e) { return null; } })();
const safeStorage = {
  getItem(k) { try { return _ls ? _ls.getItem(k) : _memStore[k] || null; } catch(e) { return _memStore[k] || null; } },
  setItem(k,v) { try { if (_ls) _ls.setItem(k,v); else _memStore[k] = v; } catch(e) { _memStore[k] = v; } },
  removeItem(k) { try { if (_ls) _ls.removeItem(k); else delete _memStore[k]; } catch(e) { delete _memStore[k]; } }
};

/* ═══════════════════════════════════════════════
   TRANSLATIONS (UI chrome only — quiz questions stay English)
   ═══════════════════════════════════════════════ */
const TRANSLATIONS = {
  en: {
    siteTitle: "where do you stand?",
    heroTitle: "Where Do You Stand?",
    heroSub: "Map your political identity across 6 dimensions. 54 questions. 5 minutes.",
    begin: "Begin",
    home: "Home",
    modeCompass: "Political Compass",
    modeCompassSub: "54 general policy questions",
    modeMatchup: "Presidential Head-to-Head",
    modeMatchupSub: "Pick 2 presidents. Compare their approaches.",
    howItWorks: "HOW IT WORKS",
    howItWorksText: "Rate 54 statements from <em>Strongly disagree</em> to <em>Strongly agree</em>. Your answers build a multi-axis profile compared against real countries and political figures.",
    questions: "questions",
    countries: "countries",
    figures: "figures",
    stronglyAgree: "Strongly agree",
    agree: "Agree",
    neutral: "Neutral",
    disagree: "Disagree",
    stronglyDisagree: "Strongly disagree",
    previous: "← Previous",
    next: "Next →",
    skip: "Skip →",
    myProfile: "MY PROFILE:",
    youAre: "You are a",
    yourPoliticalDna: "Your Political DNA",
    axisBarsTitle: "AXIS BREAKDOWN",
    closestCountry: "YOUR CLOSEST COUNTRY",
    closestFigures: "Closest Figures",
    tapBreakdown: "Tap for breakdown",
    closest: "CLOSEST",
    shareImage: "📸 Share Image",
    downloadPdf: "📄 Download PDF",
    challengeFriend: "🔗 Challenge a Friend",
    retakeTest: "🔄 Retake Test",
    homeBtn: "🏠 Home",
    viewAnswers: "View Your Answers",
    politicalCompass: "Political Compass",
    authoritarian: "Authoritarian",
    libertarian: "Libertarian",
    left: "Left",
    right: "Right",
    you: "You",
    skipped: "Skipped",
    agreeMost: "Agree most on",
    disagreeMost: "disagree most on",
    dragRotate: "Drag to rotate",
    pickFirst: "Pick your first president",
    pickOpponent: "Pick your opponent",
    nowPickOpp: "Now pick an opponent for",
    pick2Presidents: "Pick 2 presidents. See how their approaches stack up.",
    choosePresident: "Choose a president to evaluate:",
    vs: "vs",
    resetPicks: "↻ Reset picks",
    first: "First",
    opponent: "Opponent",
    noPreference: "No preference",
    youSidedWith: "YOU SIDED WITH",
    aTie: "a tie",
    across: "across",
    issues: "issues",
    on: "on",
    of: "of",
    issueByIssue: "Issue by Issue",
    tryAnother: "⚔️ Try another matchup",
    upside: "Upside",
    downside: "Downside",
    pick: "Pick",
    sectionComplete: "Complete",
    keepGoing: "Keep Going →",
    sectionsOf: "of",
    sectionsDone: "sections done",
    appearance: "Appearance",
    language: "Language",
    economy: "Economy",
    society: "Society",
    governance: "Governance",
    universality: "Universality",
    environment: "Environment",
    expansion: "Expansion",
    statism: "Statism",
    freeMarket: "Free-market",
    progressivism: "Progressivism",
    conservatism: "Conservatism",
    liberty: "Liberty",
    authority: "Authority",
    internationalism: "Internationalism",
    nationalism: "Nationalism",
    ecology: "Ecology",
    productivism: "Productivism",
    expansionism: "Expansionism",
    restraint: "Restraint",
    questionStyle: "Question Style",
    specific: "Specific",
    broad: "Broad",
    questionStyleHint: "Specific uses detailed policy questions. Broad uses general values questions.",
  },
  id: {
    siteTitle: "di mana kamu berdiri?",
    heroTitle: "Di Mana Kamu Berdiri?",
    heroSub: "Petakan identitas politikmu di 6 dimensi. 54 pertanyaan. 5 menit.",
    begin: "Mulai",
    home: "Beranda",
    modeCompass: "Kompas Politik",
    modeCompassSub: "54 pertanyaan kebijakan umum",
    modeMatchup: "Duel Presiden",
    modeMatchupSub: "Pilih 2 presiden. Bandingkan pendekatan mereka.",
    howItWorks: "CARA KERJANYA",
    howItWorksText: "Nilai 54 pernyataan dari <em>Sangat tidak setuju</em> hingga <em>Sangat setuju</em>. Jawabanmu membentuk profil multi-dimensi yang dibandingkan dengan negara dan tokoh politik.",
    questions: "pertanyaan",
    countries: "negara",
    figures: "tokoh",
    stronglyAgree: "Sangat setuju",
    agree: "Setuju",
    neutral: "Netral",
    disagree: "Tidak setuju",
    stronglyDisagree: "Sangat tidak setuju",
    previous: "← Sebelumnya",
    next: "Berikutnya →",
    skip: "Lewati →",
    myProfile: "PROFIL SAYA:",
    youAre: "Kamu adalah",
    yourPoliticalDna: "DNA Politik Kamu",
    axisBarsTitle: "RINCIAN SUMBU",
    closestCountry: "NEGARA TERDEKATMU",
    closestFigures: "Tokoh Terdekat",
    tapBreakdown: "Ketuk untuk rincian",
    closest: "TERDEKAT",
    shareImage: "📸 Bagikan Gambar",
    downloadPdf: "📄 Unduh PDF",
    challengeFriend: "🔗 Tantang Teman",
    retakeTest: "🔄 Ulangi Tes",
    homeBtn: "🏠 Beranda",
    viewAnswers: "Lihat Jawabanmu",
    politicalCompass: "Kompas Politik",
    authoritarian: "Otoriter",
    libertarian: "Libertarian",
    left: "Kiri",
    right: "Kanan",
    you: "Kamu",
    skipped: "Dilewati",
    agreeMost: "Paling setuju tentang",
    disagreeMost: "paling tidak setuju tentang",
    dragRotate: "Seret untuk memutar",
    pickFirst: "Pilih presiden pertamamu",
    pickOpponent: "Pilih lawannya",
    nowPickOpp: "Sekarang pilih lawan untuk",
    pick2Presidents: "Pilih 2 presiden. Lihat bagaimana pendekatan mereka dibandingkan.",
    choosePresident: "Pilih presiden untuk dievaluasi:",
    vs: "vs",
    resetPicks: "↻ Atur ulang",
    first: "Pertama",
    opponent: "Lawan",
    noPreference: "Tidak ada preferensi",
    youSidedWith: "KAMU MEMIHAK",
    aTie: "seri",
    across: "dari",
    issues: "isu",
    on: "pada",
    of: "dari",
    issueByIssue: "Isu demi Isu",
    tryAnother: "⚔️ Coba duel lain",
    upside: "Sisi baik",
    downside: "Sisi buruk",
    pick: "Pilih",
    sectionComplete: "Selesai",
    keepGoing: "Lanjutkan →",
    sectionsOf: "dari",
    sectionsDone: "bagian selesai",
    appearance: "Tampilan",
    language: "Bahasa",
    economy: "Ekonomi",
    society: "Masyarakat",
    governance: "Pemerintahan",
    universality: "Universalitas",
    environment: "Lingkungan",
    expansion: "Ekspansi",
    statism: "Etatisme",
    freeMarket: "Pasar bebas",
    progressivism: "Progresivisme",
    conservatism: "Konservatisme",
    liberty: "Kebebasan",
    authority: "Otoritas",
    internationalism: "Internasionalisme",
    nationalism: "Nasionalisme",
    ecology: "Ekologi",
    productivism: "Produktivisme",
    expansionism: "Ekspansionisme",
    restraint: "Pengekangan",
    questionStyle: "Gaya Pertanyaan",
    specific: "Spesifik",
    broad: "Umum",
    questionStyleHint: "Spesifik menggunakan pertanyaan kebijakan terperinci. Umum menggunakan pertanyaan nilai yang lebih luas.",
  },
  el: {
    siteTitle: "πού στέκεσαι;",
    heroTitle: "Πού Στέκεσαι;",
    heroSub: "Χαρτογράφησε την πολιτική σου ταυτότητα σε 6 διαστάσεις. 54 ερωτήσεις. 5 λεπτά.",
    begin: "Ξεκίνα",
    home: "Αρχική",
    modeCompass: "Πολιτική Πυξίδα",
    modeCompassSub: "54 γενικές ερωτήσεις πολιτικής",
    modeMatchup: "Πρόεδροι Αντιμέτωποι",
    modeMatchupSub: "Διάλεξε 2 προέδρους. Σύγκρινε τις προσεγγίσεις τους.",
    howItWorks: "ΠΩΣ ΛΕΙΤΟΥΡΓΕΙ",
    howItWorksText: "Αξιολόγησε 54 δηλώσεις από <em>Διαφωνώ απόλυτα</em> έως <em>Συμφωνώ απόλυτα</em>. Οι απαντήσεις σου δημιουργούν ένα πολιτικό προφίλ που συγκρίνεται με χώρες και πολιτικές προσωπικότητες.",
    questions: "ερωτήσεις",
    countries: "χώρες",
    figures: "προσωπικότητες",
    stronglyAgree: "Συμφωνώ απόλυτα",
    agree: "Συμφωνώ",
    neutral: "Ουδέτερο",
    disagree: "Διαφωνώ",
    stronglyDisagree: "Διαφωνώ απόλυτα",
    previous: "← Προηγούμενο",
    next: "Επόμενο →",
    skip: "Παράλειψη →",
    myProfile: "ΤΟ ΠΡΟΦΙΛ ΜΟΥ:",
    youAre: "Είσαι",
    yourPoliticalDna: "Το Πολιτικό σου DNA",
    axisBarsTitle: "ΑΝΑΛΥΣΗ ΑΞΟΝΩΝ",
    closestCountry: "Η ΠΛΗΣΙΕΣΤΕΡΗ ΧΩΡΑ ΣΟΥ",
    closestFigures: "Πλησιέστερες Προσωπικότητες",
    tapBreakdown: "Πάτα για ανάλυση",
    closest: "ΠΛΗΣΙΕΣΤΕΡΟ",
    shareImage: "📸 Κοινοποίηση Εικόνας",
    downloadPdf: "📄 Λήψη PDF",
    challengeFriend: "🔗 Πρόκληση Φίλου",
    retakeTest: "🔄 Επανάληψη",
    homeBtn: "🏠 Αρχική",
    viewAnswers: "Δες τις Απαντήσεις σου",
    politicalCompass: "Πολιτική Πυξίδα",
    authoritarian: "Αυταρχικό",
    libertarian: "Ελευθεριακό",
    left: "Αριστερά",
    right: "Δεξιά",
    you: "Εσύ",
    skipped: "Παραλείφθηκε",
    agreeMost: "Συμφωνείς περισσότερο στο",
    disagreeMost: "διαφωνείς περισσότερο στο",
    dragRotate: "Σύρε για περιστροφή",
    pickFirst: "Διάλεξε τον πρώτο πρόεδρο",
    pickOpponent: "Διάλεξε τον αντίπαλο",
    nowPickOpp: "Τώρα διάλεξε αντίπαλο για τον",
    pick2Presidents: "Διάλεξε 2 προέδρους. Δες πώς συγκρίνονται.",
    choosePresident: "Επέλεξε πρόεδρο:",
    vs: "εν.",
    resetPicks: "↻ Επαναφορά",
    first: "Πρώτος",
    opponent: "Αντίπαλος",
    noPreference: "Χωρίς προτίμηση",
    youSidedWith: "ΤΑΣΣΕΣΑΙ ΜΕ",
    aTie: "ισοπαλία",
    across: "σε",
    issues: "θέματα",
    on: "σε",
    of: "από",
    issueByIssue: "Θέμα ανά Θέμα",
    tryAnother: "⚔️ Δοκίμασε άλλη αναμέτρηση",
    upside: "Θετικό",
    downside: "Αρνητικό",
    pick: "Διάλεξε",
    sectionComplete: "Ολοκληρώθηκε",
    keepGoing: "Συνέχισε →",
    sectionsOf: "από",
    sectionsDone: "ενότητες ολοκληρώθηκαν",
    appearance: "Εμφάνιση",
    language: "Γλώσσα",
    economy: "Οικονομία",
    society: "Κοινωνία",
    governance: "Διακυβέρνηση",
    universality: "Καθολικότητα",
    environment: "Περιβάλλον",
    expansion: "Επέκταση",
    statism: "Κρατισμός",
    freeMarket: "Ελεύθερη αγορά",
    progressivism: "Προοδευτισμός",
    conservatism: "Συντηρητισμός",
    liberty: "Ελευθερία",
    authority: "Εξουσία",
    internationalism: "Διεθνισμός",
    nationalism: "Εθνικισμός",
    ecology: "Οικολογία",
    productivism: "Παραγωγισμός",
    expansionism: "Επεκτατισμός",
    restraint: "Αυτοσυγκράτηση",
    questionStyle: "Στυλ Ερωτήσεων",
    specific: "Συγκεκριμένο",
    broad: "Γενικό",
    questionStyleHint: "Το Συγκεκριμένο χρησιμοποιεί λεπτομερείς ερωτήσεις πολιτικής. Το Γενικό χρησιμοποιεί ευρύτερες ερωτήσεις αξιών.",
  }
};

let currentLang = 'en';

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS.en[key] || key;
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  safeStorage.setItem('wdys_lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  applyTranslations();
}

function applyTranslations() {
  // Static text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
    else el.textContent = val;
  });

  // HTML-containing elements (e.g., howItWorksText with <em>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    el.innerHTML = t(key);
  });

  // Site title across all nav headers
  document.querySelectorAll('.site-name').forEach(el => el.textContent = t('siteTitle'));

  // Re-render active dynamic content in current language
  try {
    // Live quiz screen: axis badge + matchup topic stay in questions' original text, but we refresh nav.
    if (document.getElementById('quiz') && document.getElementById('quiz').classList.contains('active')) {
      const badge = document.getElementById('axisBadge');
      const qs = getActiveQuestions();
      const q = qs[currentQ];
      if (q && badge) badge.textContent = t(q.axis) || (q.axis.charAt(0).toUpperCase() + q.axis.slice(1));
    }
    // Refresh results screens if currently active
    if (document.getElementById('results') && document.getElementById('results').classList.contains('active') && window._lastScores) {
      renderAxisBars(window._lastScores);
      renderCountryMatch(window._lastScores);
      renderIdeologyBreakdown(window._lastScores);
      renderFigures(window._lastScores);
    }
    if (document.getElementById('matchupResults') && document.getElementById('matchupResults').classList.contains('active')) {
      // Update tie label if visible
      const tieName = document.querySelector('#splitSegTie .split-name');
      if (tieName) tieName.textContent = t('aTie');
    }
    // Refresh matchup picker label
    if (typeof refreshMatchupPickerState === 'function' && document.getElementById('matchupPicker')) {
      refreshMatchupPickerState();
    }
    // Refresh landing subtitle to reflect mode state
    if (typeof quizMode !== 'undefined') {
      const subtitle = document.getElementById('landingSubtitle');
      if (subtitle) subtitle.textContent = quizMode === 'matchup' ? t('pick2Presidents') : t('heroSub');
    }
  } catch (e) { /* early-call safe */ }
}

// ─── 1. State + Constants ─────────────────────
let quizMode = 'compass'; // 'compass' or 'matchup'
let currentQ = 0;
let answers = new Array(QUESTIONS.length).fill(null);

// Question style for compass mode: 'specific' (detailed policy) or 'broad' (values-based)
let questionStyle = safeStorage.getItem('wdys_qstyle') || 'specific';

function setQuestionStyle(style) {
  if (style !== 'specific' && style !== 'broad') return;
  questionStyle = style;
  safeStorage.setItem('wdys_qstyle', style);
  document.querySelectorAll('[data-qstyle]').forEach(b => b.classList.toggle('active', b.dataset.qstyle === style));
}

// Head-to-head matchup state
let matchupA = null;        // first president key
let matchupB = null;        // second president key
let matchupIssues = [];     // array of issue objects both share
let matchupPicks = [];      // array of 'a' | 'b' | 'tie' (index aligned to issues)
let matchupIdx = 0;         // current matchup question index

function getActiveQuestions() {
  // Compass mode supports a broad/specific toggle. Matchup mode uses its own
  // issue list (matchupIssues) and never calls this, so returning the compass
  // set here is safe either way.
  if (quizMode === 'compass' && questionStyle === 'broad' && typeof QUESTIONS_BROAD !== 'undefined') {
    return QUESTIONS_BROAD;
  }
  return QUESTIONS;
}

function selectMode(mode) {
  quizMode = mode;
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  const subtitle = document.getElementById('landingSubtitle');
  const matchupPicker = document.getElementById('matchupPicker');
  const beginBtn = document.getElementById('beginBtn');
  if (mode === 'matchup') {
    if (subtitle) subtitle.textContent = t('pick2Presidents');
    matchupPicker.classList.remove('hidden');
    // Reset picks every time user switches into matchup mode.
    matchupA = null; matchupB = null;
    buildMatchupPicker();
    updateMatchupSlots();
    beginBtn.classList.add('disabled-btn');
  } else {
    if (subtitle) subtitle.textContent = t('heroSub');
    matchupPicker.classList.add('hidden');
    matchupA = null; matchupB = null;
    beginBtn.classList.remove('disabled-btn');
  }
}

function buildMatchupPicker() {
  const grid = document.getElementById('matchupGrid');
  grid.innerHTML = '';
  Object.entries(PRESIDENT_META).forEach(([key, data]) => {
    const card = document.createElement('button');
    card.className = 'picker-card';
    card.dataset.key = key;
    const partyClass = data.party === 'Democrat' ? 'party-dem' : 'party-rep';
    card.innerHTML = `
      <span class="picker-party-dot ${partyClass}"></span>
      <span class="picker-name">${data.name}</span>
      <span class="picker-years">${data.years}</span>
    `;
    card.addEventListener('click', () => handleMatchupCardPick(key));
    grid.appendChild(card);
  });
  refreshMatchupPickerState();
}

function handleMatchupCardPick(key) {
  if (matchupA === null) {
    matchupA = key;
  } else if (matchupB === null && key !== matchupA) {
    matchupB = key;
  } else if (matchupA === key) {
    // Clicking first pick again clears it.
    matchupA = matchupB;
    matchupB = null;
  } else if (matchupB === key) {
    matchupB = null;
  }
  updateMatchupSlots();
  refreshMatchupPickerState();
}

function refreshMatchupPickerState() {
  const grid = document.getElementById('matchupGrid');
  if (!grid) return;
  grid.querySelectorAll('.picker-card').forEach(card => {
    card.classList.remove('selected', 'slot-a-selected', 'slot-b-selected', 'disabled');
    if (card.dataset.key === matchupA) card.classList.add('selected', 'slot-a-selected');
    else if (card.dataset.key === matchupB) card.classList.add('selected', 'slot-b-selected');
  });
  const label = document.getElementById('matchupPickerLabel');
  if (label) {
    if (!matchupA) label.textContent = t('pickFirst');
    else if (!matchupB) label.textContent = `${t('nowPickOpp')} ${PRESIDENT_META[matchupA].name}`;
    else label.textContent = `${PRESIDENT_META[matchupA].name} ${t('vs')} ${PRESIDENT_META[matchupB].name}`;
  }
  const beginBtn = document.getElementById('beginBtn');
  const resetBtn = document.getElementById('matchupResetBtn');
  if (beginBtn) beginBtn.classList.toggle('disabled-btn', !(matchupA && matchupB));
  if (resetBtn) resetBtn.classList.toggle('hidden', !matchupA);
}

function updateMatchupSlots() {
  const slotA = document.getElementById('slotA');
  const slotB = document.getElementById('slotB');
  if (!slotA || !slotB) return;
  const fill = (slot, key) => {
    const nameEl = slot.querySelector('.slot-name');
    if (!key) {
      slot.classList.add('empty');
      nameEl.textContent = '—';
    } else {
      slot.classList.remove('empty');
      nameEl.textContent = PRESIDENT_META[key].name;
    }
  };
  fill(slotA, matchupA);
  fill(slotB, matchupB);
}

function resetMatchupPicks() {
  matchupA = null;
  matchupB = null;
  updateMatchupSlots();
  refreshMatchupPickerState();
}

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

const EXPANSION_SUBS = ['space', 'technology', 'bioethics', 'growth'];
const EXPANSION_LABELS = {
  space:      { left: 'Cosmic ambition', right: 'Earth-focused' },
  technology: { left: 'Tech acceleration', right: 'Tech caution' },
  bioethics:  { left: 'Enhancement', right: 'Natural limits' },
  growth:     { left: 'Unlimited growth', right: 'Degrowth' }
};


// Compare mode
let friendScores = null;

// Enhanced political types with emoji + description
const POLITICAL_TYPE_META = {
  'Social Democrat':         { emoji: '🌹', desc: 'You believe in a strong welfare state paired with democratic freedoms. Markets should serve people, not the other way around.' },
  'Democratic Socialist':    { emoji: '✊', desc: 'You envision an economy fundamentally restructured to prioritize collective ownership and worker empowerment.' },
  'Progressive Liberal':     { emoji: '🗽', desc: 'You champion social progress and individual rights within a market economy tempered by smart regulation.' },
  'Green Activist':          { emoji: '🌿', desc: 'The planet comes first. You see ecological sustainability as the foundation all other policy must build upon.' },
  'Classical Liberal':       { emoji: '📜', desc: 'Individual liberty and free markets are your north stars. The best government is the one that governs least.' },
  'Libertarian':             { emoji: '🏴', desc: 'Maximum personal freedom, minimum state interference. You trust voluntary association over central authority.' },
  'Conservative':            { emoji: '🏛️', desc: 'You value tradition, order, and proven institutions. Change should be gradual, guided by accumulated wisdom.' },
  'Social Conservative':     { emoji: '⛪', desc: 'Traditional social values matter deeply to you, but you also see a role for the state in protecting the vulnerable.' },
  'Authoritarian':           { emoji: '🔒', desc: 'You believe strong central authority is necessary to maintain order and achieve collective goals efficiently.' },
  'Nationalist':             { emoji: '🏠', desc: 'Your nation and its people come first. Sovereignty and cultural identity should never be compromised.' },
  'Internationalist':        { emoji: '🌐', desc: 'Borders are lines on a map. Humanity thrives through cooperation, open exchange, and shared global governance.' },
  'Centrist':                { emoji: '⚖️', desc: 'You see merit on multiple sides and prefer pragmatic compromise to ideological purity.' },
  'Egalitarian':             { emoji: '🤝', desc: 'Equality in all dimensions — economic, social, global — is your core commitment.' },
  'Communitarian':           { emoji: '👥', desc: 'Community bonds and shared identity matter. You value social cohesion alongside economic fairness.' },
  'Techno-Expansionist':     { emoji: '🚀', desc: 'Technology and expansion are humanity\'s destiny. The future belongs to the bold.' },
  'Sustainability Advocate': { emoji: '♻️', desc: 'Growth has limits. You champion a sustainable path that respects both ecological and social boundaries.' },
  'Pragmatist':              { emoji: '🧠', desc: 'You defy easy labels, preferring evidence-based solutions over ideological frameworks.' }
};

// ─── 2. Navigation + Quiz Start ───────────────
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() {
  show('landing');
}

function startQuiz() {
  // Matchup mode branches entirely into its own flow.
  if (quizMode === 'matchup') {
    if (!matchupA || !matchupB) return;
    startMatchup();
    return;
  }

  initAudio();
  currentQ = 0;
  const qs = getActiveQuestions();
  answers = new Array(qs.length).fill(null);

  const presNameEl = document.getElementById('quizPresName');
  if (presNameEl) presNameEl.classList.add('hidden');

  // Check for compare mode from URL hash
  checkCompareHash();

  buildDotProgress();
  renderQuestion();
  show('quiz');

  playSound('click');
}

function retakeQuiz() {
  startQuiz();
}

// ─── 3. Sound Effects System ──────────────────
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;
let soundEnabled = safeStorage.getItem('wdys_sound') !== 'false';

function initAudio() {
  if (!audioCtx) audioCtx = new AudioCtx();
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

function toggleMute() {
  soundEnabled = !soundEnabled;
  safeStorage.setItem('wdys_sound', soundEnabled);
  document.querySelectorAll('.mute-btn').forEach(btn => {
    btn.classList.toggle('muted', !soundEnabled);
  });
}

// Initialize mute state
if (!soundEnabled) {
  document.querySelectorAll('.mute-btn').forEach(btn => btn.classList.add('muted'));
}

function playSound(type) {
  return; // Sound system disabled
  if (!soundEnabled || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    switch (type) {
      case 'click': {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.1);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.1);
        break;
      }
      case 'whoosh': {
        const bufferSize = audioCtx.sampleRate * 0.2;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.03;
        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1000, now);
        filter.frequency.exponentialRampToValueAtTime(300, now + 0.2);
        filter.Q.value = 2;
        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        noise.connect(filter).connect(gain).connect(audioCtx.destination);
        noise.start(now);
        noise.stop(now + 0.2);
        break;
      }
      case 'reveal': {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(1000, now + 0.4);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.4);
        break;
      }
      case 'fanfare': {
        const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
        notes.forEach((freq, i) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0, now + i * 0.15);
          gain.gain.linearRampToValueAtTime(0.06, now + i * 0.15 + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
          osc.connect(gain).connect(audioCtx.destination);
          osc.start(now + i * 0.15);
          osc.stop(now + 0.8);
        });
        break;
      }
      case 'sparkle': {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(2000, now);
        osc.frequency.exponentialRampToValueAtTime(3000, now + 0.15);
        osc.frequency.exponentialRampToValueAtTime(1500, now + 0.3);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
        break;
      }
      case 'timeout': {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(150, now + 0.2);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.2);
        break;
      }
    }
  } catch (e) { /* ignore audio errors */ }
}


// ─── 5. Quiz Rendering + Answer Logic ─────────
function renderQuestion() {
  const qs = getActiveQuestions();
  const q = qs[currentQ];

  const card = document.querySelector('.question-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = '';
  document.getElementById('questionText').textContent = q.text;

  // Hide any legacy president tag.
  const presTag = document.getElementById('presidentTag');
  if (presTag) presTag.style.display = 'none';

  document.getElementById('qCounter').textContent = `${String(currentQ + 1).padStart(2, '0')} / ${qs.length}`;

  const badge = document.getElementById('axisBadge');
  badge.textContent = t(q.axis) || (q.axis.charAt(0).toUpperCase() + q.axis.slice(1));
  badge.style.background = ALL_Q_COLORS[q.axis];

  // Set current axis color for CSS theming
  const quizEl = document.getElementById('quiz');
  quizEl.style.setProperty('--current-axis-color', ALL_Q_COLORS[q.axis]);

  // Highlight current segment
  document.querySelectorAll('.segment').forEach(seg => seg.classList.remove('active-segment'));
  const activeSeg = document.querySelector(`.segment[data-axis="${q.axis}"]`);
  if (activeSeg) activeSeg.classList.add('active-segment');

  updateSegmentBar();

  document.querySelectorAll('.scale-btn').forEach(btn => {
    btn.classList.remove('selected');
    if (answers[currentQ] !== null && parseInt(btn.dataset.value) === answers[currentQ]) {
      btn.classList.add('selected');
    }
  });

  document.getElementById('prevBtn').classList.toggle('disabled', currentQ === 0);
  document.getElementById('nextBtn').classList.toggle('disabled', answers[currentQ] === null);

  updateDotProgress();

}

function updateSegmentBar() {
  const qs = getActiveQuestions();
  const axisCounts = {};
  const axisAnswered = {};
  ALL_Q_AXES.forEach(a => { axisCounts[a] = 0; axisAnswered[a] = 0; });
  qs.forEach((q, i) => {
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
  const qs = getActiveQuestions();
  const container = document.getElementById('dotProgress');
  container.innerHTML = '';
  for (let i = 0; i < qs.length; i++) {
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

// ─── 6. Section Interstitials ─────────────────
const SECTION_ORDER = ['economy', 'society', 'governance', 'universality', 'environment', 'expansion'];
const SECTION_NAMES = {
  economy: 'Economy', society: 'Society', governance: 'Governance',
  universality: 'Universality', environment: 'Environment', expansion: 'Expansion'
};

const INTER_MESSAGES = [
  { emoji: '👀', msg: 'Starting to look a bit like...' },
  { emoji: '🫣', msg: 'Hmm... giving major vibes of...' },
  { emoji: '🎭', msg: 'Plot twist — you\'re turning into...' },
  { emoji: '🔮', msg: 'The oracle has spoken...' },
  { emoji: '🧬', msg: 'Your political DNA is matching...' },
  { emoji: '📡', msg: 'Vibes detected...' },
  { emoji: '🪞', msg: 'Look in the mirror...' },
  { emoji: '🎯', msg: 'Bullseye — closest match so far...' },
  { emoji: '🛸', msg: 'Incoming transmission...' },
  { emoji: '🧪', msg: 'Lab results are in...' },
];

function computePartialScores() {
  const qs = getActiveQuestions();
  const scores = {};
  const answeredAxes = new Set();

  AXES.forEach(axis => {
    const axisQs = qs.map((q, i) => ({ q, answer: answers[i] })).filter(x => x.q.axis === axis && x.answer !== null);
    if (axisQs.length === 0) return;
    answeredAxes.add(axis);
    let totalRight = 0;
    axisQs.forEach(({ q, answer }) => {
      const normalized = (answer - 1) / 4;
      totalRight += q.pole === 'right' ? normalized : (1 - normalized);
    });
    scores[axis] = Math.round((totalRight / axisQs.length) * 100);
  });

  const expansionQs = qs.map((q, i) => ({ q, answer: answers[i] })).filter(x => x.q.axis === 'expansion' && x.answer !== null);
  if (expansionQs.length > 0) {
    EXPANSION_SUBS.forEach(sub => {
      const subQs = expansionQs.filter(x => x.q.sub === sub);
      if (subQs.length === 0) return;
      let totalRight = 0;
      subQs.forEach(({ q, answer }) => {
        const normalized = (answer - 1) / 4;
        totalRight += q.pole === 'right' ? normalized : (1 - normalized);
      });
      scores[sub] = Math.round((totalRight / subQs.length) * 100);
    });
  }

  return { scores, answeredAxes };
}

function closestFigurePartial(scores, answeredAxes) {
  let best = null, bestDist = Infinity;
  const figureSet = FIGURES;
  figureSet.forEach(fig => {
    let sumSq = 0, dims = 0;
    answeredAxes.forEach(axis => {
      if (scores[axis] !== undefined) {
        const diff = scores[axis] - fig[axis];
        sumSq += diff * diff;
        dims++;
      }
    });
    EXPANSION_SUBS.forEach(sub => {
      if (scores[sub] !== undefined) {
        const diff = scores[sub] - fig[sub];
        sumSq += diff * diff;
        dims++;
      }
    });
    if (dims === 0) return;
    const dist = Math.sqrt(sumSq / dims);
    if (dist < bestDist) { bestDist = dist; best = fig; }
  });
  return best;
}

function getSectionBoundary(qIndex) {
  const qs = getActiveQuestions();
  const thisAxis = qs[qIndex].axis;
  if (qIndex < qs.length - 1) {
    const nextAxis = qs[qIndex + 1].axis;
    if (nextAxis !== thisAxis) {
      const sectionIdx = SECTION_ORDER.indexOf(thisAxis);
      return { axis: thisAxis, sectionNum: sectionIdx + 1, total: SECTION_ORDER.length };
    }
  }
  return null;
}

let interstitialActive = false;

function showSectionInterstitial(sectionInfo, callback) {
  interstitialActive = true;

  const { scores, answeredAxes } = computePartialScores();
  const closest = closestFigurePartial(scores, answeredAxes);
  if (!closest) { interstitialActive = false; callback(); return; }

  playSound('reveal');

  const pick = Math.floor(Math.random() * INTER_MESSAGES.length);
  const template = INTER_MESSAGES[pick];

  const overlay = document.getElementById('sectionInterstitial');
  document.getElementById('interSectionTag').textContent = `${t(sectionInfo.axis) || SECTION_NAMES[sectionInfo.axis]} ${t('sectionComplete')}`;

  const emojiEl = document.getElementById('interEmoji');
  const nameEl = document.getElementById('interName');
  emojiEl.style.animation = 'none';
  nameEl.style.animation = 'none';
  void emojiEl.offsetHeight;

  document.getElementById('interEmoji').textContent = template.emoji;
  document.getElementById('interMsg').textContent = template.msg;
  document.getElementById('interName').textContent = closest.name;

  emojiEl.style.animation = '';
  nameEl.style.animation = '';
  document.getElementById('interSub').textContent = `${sectionInfo.sectionNum} ${t('sectionsOf')} ${sectionInfo.total} ${t('sectionsDone')}`;

  const pct = (sectionInfo.sectionNum / sectionInfo.total) * 100;
  const barFill = document.getElementById('interBarFill');
  if (barFill) barFill.style.width = '0%';

  overlay.classList.remove('hidden');

  const card = overlay.querySelector('.interstitial-card');
  card.classList.remove('inter-enter');
  void card.offsetHeight;
  card.classList.add('inter-enter');

  if (barFill) setTimeout(() => { barFill.style.width = pct + '%'; }, 400);

  const btn = document.getElementById('interContinueBtn');
  const handler = () => {
    btn.removeEventListener('click', handler);
    card.classList.add('inter-exit');
    playSound('click');
    setTimeout(() => {
      overlay.classList.add('hidden');
      card.classList.remove('inter-enter', 'inter-exit');
      interstitialActive = false;
      callback();
    }, 350);
  };
  btn.addEventListener('click', handler);
}

function selectAnswer(value) {
  answers[currentQ] = value;

  document.querySelectorAll('.scale-btn').forEach(btn => {
    btn.classList.toggle('selected', parseInt(btn.dataset.value) === value);
  });

  document.getElementById('nextBtn').classList.remove('disabled');
  updateDotProgress();
  updateSegmentBar();

  playSound('click');

  setTimeout(() => {
    const qs = getActiveQuestions();
    if (currentQ >= qs.length - 1) {
      calculateResults();
      return;
    }

    const boundary = getSectionBoundary(currentQ);
    if (boundary) {
      showSectionInterstitial(boundary, () => {
        currentQ++;
        renderQuestion();
      });
    } else {
      currentQ++;
      renderQuestion();
    }
  }, 350);
}

function nextQuestion() {
  if (answers[currentQ] === null || interstitialActive) return;
  const qs = getActiveQuestions();
  if (currentQ < qs.length - 1) {
    const boundary = getSectionBoundary(currentQ);
    if (boundary) {
      showSectionInterstitial(boundary, () => {
        currentQ++;
        renderQuestion();
      });
    } else {
      currentQ++;
      renderQuestion();
    }
  } else {
    calculateResults();
  }
}

function prevQuestion() {
  if (currentQ > 0 && !interstitialActive) {
    currentQ--;
    renderQuestion();
  }
}

// Event listeners for scale rows
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

// ─── 7. Scoring ───────────────────────────────
function calculateResults() {
  const qs = getActiveQuestions();
  const axisScores = {};

  AXES.forEach(axis => {
    const axisQs = qs.map((q, i) => ({ q, answer: answers[i] })).filter(x => x.q.axis === axis);
    let totalRight = 0;
    let count = axisQs.length;
    axisQs.forEach(({ q, answer }) => {
      if (answer === null) return;
      const normalized = (answer - 1) / 4;
      if (q.pole === 'right') totalRight += normalized;
      else totalRight += (1 - normalized);
    });
    axisScores[axis] = count > 0 ? Math.round((totalRight / count) * 100) : 50;
  });

  const expansionQs = qs.map((q, i) => ({ q, answer: answers[i] })).filter(x => x.q.axis === 'expansion');
  EXPANSION_SUBS.forEach(sub => {
    const subQs = expansionQs.filter(x => x.q.sub === sub);
    let totalRight = 0;
    let count = subQs.length;
    subQs.forEach(({ q, answer }) => {
      if (answer === null) return;
      const normalized = (answer - 1) / 4;
      if (q.pole === 'right') totalRight += normalized;
      else totalRight += (1 - normalized);
    });
    axisScores[sub] = count > 0 ? Math.round((totalRight / count) * 100) : 50;
  });

  axisScores.expansion = Math.round(
    EXPANSION_SUBS.reduce((sum, s) => sum + axisScores[s], 0) / EXPANSION_SUBS.length
  );

  renderResults(axisScores);
  show('results');
  animateResultsReveal();

  // Save to history
  saveToHistory(axisScores);

  playSound('fanfare');
}

// ─── 8. Results Rendering ─────────────────────
function typewriterEffect(el, text, speed = 30) {
  el.classList.add('typing');
  el.innerHTML = '';
  let i = 0;
  function tick() {
    if (i < text.length) {
      el.innerHTML = text.slice(0, i + 1) + '<span class="ticker-cursor">█</span>';
      i++;
      setTimeout(tick, speed);
    } else {
      el.innerHTML = text;
      setTimeout(() => { el.style.transition = 'opacity 0.8s ease'; el.style.opacity = '0.4'; }, 1500);
    }
  }
  tick();
}

function renderResults(scores) {
  // Political type
  const type = POLITICAL_TYPES.find(t => t.condition(scores));
  const meta = POLITICAL_TYPE_META[type.label] || { emoji: '🧠', desc: '' };
  document.getElementById('profileEmoji').textContent = meta.emoji;
  document.getElementById('profileType').textContent = `You are ${type.label.toLowerCase().match(/^[aeiou]/i) ? 'an' : 'a'} ${type.label}`;
  document.getElementById('profileDescription').textContent = meta.desc;

  // Classic 2D political compass
  drawCompass(scores);
  savedScores3d = scores;

  // Pentagon radar charts
  drawRadar('radarLeft', scores, 'left');
  drawRadar('radarRight', scores, 'right');
  drawRadarExpansion('radarExpansion', scores);

  // Axis bars
  renderAxisBars(scores);

  // Compass-mode results only (matchup mode never reaches this code path).
  renderCountryMatch(scores);
  renderFigures(scores);
  renderIdeologyBreakdown(scores);

  // Compare mode
  if (friendScores) {
    renderCompare(scores, friendScores);
  }

  // Store scores globally for share/compare
  window._lastScores = scores;
  window._lastType = type.label;
}

// ─── Head-to-Head Matchup Flow ────────────
// Populated by startMatchup(). Attached here so renderResults above remains clean.
function startMatchup() {
  initAudio();
  matchupIssues = (typeof getSharedIssues === 'function')
    ? getSharedIssues(matchupA, matchupB)
    : MATCHUP_ISSUES.filter(iss => iss.positions[matchupA] && iss.positions[matchupB]);

  if (!matchupIssues.length) {
    alert(`${PRESIDENT_META[matchupA].name} and ${PRESIDENT_META[matchupB].name} don’t share enough issues to compare. Try another matchup.`);
    return;
  }

  matchupPicks = new Array(matchupIssues.length).fill(null);
  matchupIdx = 0;

  const header = document.getElementById('matchupHeader');
  if (header) header.textContent = `${PRESIDENT_META[matchupA].name} vs ${PRESIDENT_META[matchupB].name}`;

  renderMatchupQuestion();
  show('matchup');
  playSound('click');
}

function renderMatchupQuestion() {
  const issue = matchupIssues[matchupIdx];
  const aMeta = PRESIDENT_META[matchupA];
  const bMeta = PRESIDENT_META[matchupB];
  const aPos = issue.positions[matchupA];
  const bPos = issue.positions[matchupB];

  document.getElementById('matchupCounter').textContent =
    `${String(matchupIdx + 1).padStart(2, '0')} / ${String(matchupIssues.length).padStart(2, '0')}`;
  document.getElementById('matchupTopicBadge').textContent = issue.topic;
  document.getElementById('matchupTopic').textContent = issue.topic;
  document.getElementById('matchupQuestion').textContent = issue.question;

  document.getElementById('matchupNameA').textContent = aMeta.name;
  document.getElementById('matchupYearsA').textContent = aMeta.years;
  document.getElementById('matchupApproachA').textContent = aPos.approach;
  document.getElementById('matchupGoodA').textContent = aPos.good;
  document.getElementById('matchupBadA').textContent = aPos.bad;
  document.getElementById('matchupPickNameA').textContent = aMeta.name.split(' ').slice(-1)[0];

  document.getElementById('matchupNameB').textContent = bMeta.name;
  document.getElementById('matchupYearsB').textContent = bMeta.years;
  document.getElementById('matchupApproachB').textContent = bPos.approach;
  document.getElementById('matchupGoodB').textContent = bPos.good;
  document.getElementById('matchupBadB').textContent = bPos.bad;
  document.getElementById('matchupPickNameB').textContent = bMeta.name.split(' ').slice(-1)[0];

  // Party styling for card accents.
  const cardA = document.getElementById('matchupCardA');
  const cardB = document.getElementById('matchupCardB');
  cardA.classList.remove('party-dem', 'party-rep', 'picked');
  cardB.classList.remove('party-dem', 'party-rep', 'picked');
  cardA.classList.add(aMeta.party === 'Democrat' ? 'party-dem' : 'party-rep');
  cardB.classList.add(bMeta.party === 'Democrat' ? 'party-dem' : 'party-rep');

  const existing = matchupPicks[matchupIdx];
  if (existing === 'a') cardA.classList.add('picked');
  if (existing === 'b') cardB.classList.add('picked');
  const neutralBtn = document.getElementById('matchupNeutralBtn');
  neutralBtn.classList.toggle('picked', existing === 'tie');

  // Progress bar.
  const pct = ((matchupIdx) / matchupIssues.length) * 100;
  document.getElementById('matchupProgressFill').style.width = pct + '%';

  // Footer state.
  document.getElementById('matchupPrevBtn').classList.toggle('disabled', matchupIdx === 0);

  // Scroll to top.
  const container = document.querySelector('.matchup-container');
  if (container) container.scrollTop = 0;
  window.scrollTo(0, 0);
}

function handleMatchupPick(choice) {
  matchupPicks[matchupIdx] = choice;
  const cardA = document.getElementById('matchupCardA');
  const cardB = document.getElementById('matchupCardB');
  const neutralBtn = document.getElementById('matchupNeutralBtn');
  cardA.classList.toggle('picked', choice === 'a');
  cardB.classList.toggle('picked', choice === 'b');
  neutralBtn.classList.toggle('picked', choice === 'tie');
  playSound('click');

  setTimeout(() => {
    if (matchupIdx >= matchupIssues.length - 1) {
      finishMatchup();
    } else {
      matchupIdx++;
      renderMatchupQuestion();
    }
  }, 280);
}

function matchupPrev() {
  if (matchupIdx === 0) return;
  matchupIdx--;
  renderMatchupQuestion();
}

function matchupSkip() {
  if (matchupPicks[matchupIdx] === null) matchupPicks[matchupIdx] = 'tie';
  if (matchupIdx >= matchupIssues.length - 1) {
    finishMatchup();
  } else {
    matchupIdx++;
    renderMatchupQuestion();
  }
}

function finishMatchup() {
  const aMeta = PRESIDENT_META[matchupA];
  const bMeta = PRESIDENT_META[matchupB];

  let countA = 0, countB = 0, countTie = 0;
  matchupPicks.forEach(p => {
    if (p === 'a') countA++;
    else if (p === 'b') countB++;
    else countTie++;
  });
  const total = matchupIssues.length;

  // Winner headline
  const winnerEl = document.getElementById('matchupWinnerName');
  const subEl = document.getElementById('matchupWinnerSub');
  if (countA > countB) {
    winnerEl.textContent = aMeta.name;
    subEl.textContent = `${t('on')} ${countA} ${t('of')} ${total} ${t('issues')}`;
  } else if (countB > countA) {
    winnerEl.textContent = bMeta.name;
    subEl.textContent = `${t('on')} ${countB} ${t('of')} ${total} ${t('issues')}`;
  } else {
    winnerEl.textContent = t('aTie');
    subEl.textContent = `${countA}–${countB} ${t('across')} ${total} ${t('issues')}`;
  }

  // Split bar
  document.getElementById('splitNameA').textContent = aMeta.name;
  document.getElementById('splitNameB').textContent = bMeta.name;
  document.getElementById('splitCountA').textContent = countA;
  document.getElementById('splitCountB').textContent = countB;
  document.getElementById('splitCountTie').textContent = countTie;
  const safeTotal = total || 1;
  const segA = document.getElementById('splitSegA');
  const segB = document.getElementById('splitSegB');
  const segTie = document.getElementById('splitSegTie');
  segA.style.width = (countA / safeTotal * 100) + '%';
  segB.style.width = (countB / safeTotal * 100) + '%';
  segTie.style.width = (countTie / safeTotal * 100) + '%';
  // Party-colored bar classes.
  segA.className = 'matchup-split-segment split-a ' + (aMeta.party === 'Democrat' ? 'party-dem' : 'party-rep');
  segB.className = 'matchup-split-segment split-b ' + (bMeta.party === 'Democrat' ? 'party-dem' : 'party-rep');

  // Issue by issue list
  const listEl = document.getElementById('matchupIssueList');
  let html = '';
  matchupIssues.forEach((issue, i) => {
    const pick = matchupPicks[i];
    let pickedName = t('noPreference'), pickedClass = 'picked-tie';
    if (pick === 'a') { pickedName = aMeta.name; pickedClass = 'picked-a ' + (aMeta.party === 'Democrat' ? 'party-dem' : 'party-rep'); }
    else if (pick === 'b') { pickedName = bMeta.name; pickedClass = 'picked-b ' + (bMeta.party === 'Democrat' ? 'party-dem' : 'party-rep'); }
    html += `
      <div class="matchup-issue-row ${pickedClass}">
        <span class="matchup-issue-topic">${issue.topic}</span>
        <span class="matchup-issue-pick">${pickedName}</span>
      </div>
    `;
  });
  listEl.innerHTML = html;

  show('matchupResults');
  playSound('fanfare');
}

function restartMatchup() {
  show('landing');
  selectMode('matchup');
}

// Wire up matchup choice buttons once, after DOM is ready.
document.addEventListener('DOMContentLoaded', () => {
  const btnA = document.getElementById('matchupChooseA');
  const btnB = document.getElementById('matchupChooseB');
  const btnTie = document.getElementById('matchupNeutralBtn');
  if (btnA) btnA.addEventListener('click', () => handleMatchupPick('a'));
  if (btnB) btnB.addEventListener('click', () => handleMatchupPick('b'));
  if (btnTie) btnTie.addEventListener('click', () => handleMatchupPick('tie'));
});

// ─── Draw Compass (with animated dot) ─────────
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

  ctx.clearRect(0, 0, size, size);

  // 4 quadrant fills
  ctx.fillStyle = 'rgba(239, 68, 68, 0.18)';
  ctx.fillRect(pad, pad, half, half);
  ctx.fillStyle = 'rgba(59, 130, 246, 0.18)';
  ctx.fillRect(cx, pad, half, half);
  ctx.fillStyle = 'rgba(34, 197, 94, 0.18)';
  ctx.fillRect(pad, cy, half, half);
  ctx.fillStyle = 'rgba(168, 85, 247, 0.18)';
  ctx.fillRect(cx, cy, half, half);

  // Grid lines
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  for (let i = 1; i < 4; i++) {
    const x = pad + (gridSize * i) / 4;
    ctx.beginPath(); ctx.moveTo(x, pad); ctx.lineTo(x, pad + gridSize); ctx.stroke();
    const y = pad + (gridSize * i) / 4;
    ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(pad + gridSize, y); ctx.stroke();
  }

  // Center cross
  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(cx, pad); ctx.lineTo(cx, pad + gridSize); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(pad, cy); ctx.lineTo(pad + gridSize, cy); ctx.stroke();

  // Border
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  ctx.lineWidth = 1;
  ctx.strokeRect(pad, pad, gridSize, gridSize);

  // Target position
  const targetX = pad + (scores.economy / 100) * gridSize;
  const targetY = pad + (1 - scores.governance / 100) * gridSize;

  // Friend dot (if comparing)
  if (friendScores) {
    const fx = pad + (friendScores.economy / 100) * gridSize;
    const fy = pad + (1 - friendScores.governance / 100) * gridSize;
    ctx.beginPath();
    ctx.arc(fx, fy, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(20, 184, 166, 0.3)';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(fx, fy, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#14B8A6';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // Animated compass dot
  animateCompassDot(ctx, cx, cy, targetX, targetY, size, pad, gridSize, dpr);

  // Coordinates text
  const ecoLabel = scores.economy < 50 ? 'Left' : scores.economy > 50 ? 'Right' : 'Centre';
  const govLabel = scores.governance < 50 ? 'Libertarian' : scores.governance > 50 ? 'Authoritarian' : 'Centre';
  const ecoVal = Math.abs(scores.economy - 50) * 2;
  const govVal = Math.abs(scores.governance - 50) * 2;
  document.getElementById('compassCoords').textContent =
    `Economic: ${ecoVal.toFixed(0)}% ${ecoLabel}  ·  Social: ${govVal.toFixed(0)}% ${govLabel}`;
}

// ─── 9. Animated Compass Dot ──────────────────
function animateCompassDot(ctx, cx, cy, targetX, targetY, size, pad, gridSize, dpr) {
  const startX = cx;
  const startY = cy;
  const duration = 1500;
  const start = performance.now();
  const ghostTrail = [];

  function easeOutElastic(t) {
    const c4 = (2 * Math.PI) / 3;
    if (t === 0 || t === 1) return t;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }

  function drawFrame(now) {
    const elapsed = now - start;
    const t = Math.min(elapsed / duration, 1);
    const ease = easeOutElastic(t);

    const currentX = startX + (targetX - startX) * ease;
    const currentY = startY + (targetY - startY) * ease;

    // Save ghost position
    if (t < 1) {
      ghostTrail.push({ x: currentX, y: currentY, alpha: 0.3 });
    }

    // Redraw compass background
    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);

    // Quadrants
    const half = gridSize / 2;
    ctx.fillStyle = 'rgba(239, 68, 68, 0.18)';
    ctx.fillRect(pad, pad, half, half);
    ctx.fillStyle = 'rgba(59, 130, 246, 0.18)';
    ctx.fillRect(cx, pad, half, half);
    ctx.fillStyle = 'rgba(34, 197, 94, 0.18)';
    ctx.fillRect(pad, cy, half, half);
    ctx.fillStyle = 'rgba(168, 85, 247, 0.18)';
    ctx.fillRect(cx, cy, half, half);

    // Grid
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    for (let i = 1; i < 4; i++) {
      const x = pad + (gridSize * i) / 4;
      ctx.beginPath(); ctx.moveTo(x, pad); ctx.lineTo(x, pad + gridSize); ctx.stroke();
      const y = pad + (gridSize * i) / 4;
      ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(pad + gridSize, y); ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(cx, pad); ctx.lineTo(cx, pad + gridSize); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(pad, cy); ctx.lineTo(pad + gridSize, cy); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.strokeRect(pad, pad, gridSize, gridSize);

    // Friend dot
    if (friendScores) {
      const fx = pad + (friendScores.economy / 100) * gridSize;
      const fy = pad + (1 - friendScores.governance / 100) * gridSize;
      ctx.beginPath(); ctx.arc(fx, fy, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(20, 184, 166, 0.3)'; ctx.fill();
      ctx.beginPath(); ctx.arc(fx, fy, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#14B8A6'; ctx.fill();
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.stroke();
    }

    // Ghost trail
    ghostTrail.forEach((g, i) => {
      g.alpha -= 0.008;
      if (g.alpha > 0) {
        ctx.beginPath();
        ctx.arc(g.x, g.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${g.alpha})`;
        ctx.fill();
      }
    });

    // Current dot
    const pulseScale = t >= 1 ? 1 + Math.sin(Date.now() * 0.005) * 0.15 : 1;
    ctx.beginPath();
    ctx.arc(currentX, currentY, 12 * pulseScale, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(139, 92, 246, 0.35)';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(currentX, currentY, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#8B5CF6';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();

    if (t < 1) {
      requestAnimationFrame(drawFrame);
    } else {
      // Continue pulsing after arrival
      let pulseCount = 0;
      function pulse(now2) {
        pulseCount++;
        if (pulseCount > 120) return; // pulse for ~2 seconds
        ctx.save();
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, size, size);

        // Redraw background
        ctx.fillStyle = 'rgba(239, 68, 68, 0.18)'; ctx.fillRect(pad, pad, half, half);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.18)'; ctx.fillRect(cx, pad, half, half);
        ctx.fillStyle = 'rgba(34, 197, 94, 0.18)'; ctx.fillRect(pad, cy, half, half);
        ctx.fillStyle = 'rgba(168, 85, 247, 0.18)'; ctx.fillRect(cx, cy, half, half);
        ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1;
        for (let i = 1; i < 4; i++) {
          const x = pad + (gridSize * i) / 4;
          ctx.beginPath(); ctx.moveTo(x, pad); ctx.lineTo(x, pad + gridSize); ctx.stroke();
          const y = pad + (gridSize * i) / 4;
          ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(pad + gridSize, y); ctx.stroke();
        }
        ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(cx, pad); ctx.lineTo(cx, pad + gridSize); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(pad, cy); ctx.lineTo(pad + gridSize, cy); ctx.stroke();
        ctx.strokeStyle = 'rgba(255,255,255,0.1)'; ctx.lineWidth = 1; ctx.strokeRect(pad, pad, gridSize, gridSize);

        if (friendScores) {
          const fx = pad + (friendScores.economy / 100) * gridSize;
          const fy = pad + (1 - friendScores.governance / 100) * gridSize;
          ctx.beginPath(); ctx.arc(fx, fy, 10, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(20, 184, 166, 0.3)'; ctx.fill();
          ctx.beginPath(); ctx.arc(fx, fy, 5, 0, Math.PI * 2);
          ctx.fillStyle = '#14B8A6'; ctx.fill();
          ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.stroke();
        }

        const ps = 1 + Math.sin(now2 * 0.005) * 0.15;
        ctx.beginPath(); ctx.arc(targetX, targetY, 12 * ps, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.35)'; ctx.fill();
        ctx.beginPath(); ctx.arc(targetX, targetY, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#8B5CF6'; ctx.fill();
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
        ctx.restore();
        requestAnimationFrame(pulse);
      }
      requestAnimationFrame(pulse);
    }
  }

  requestAnimationFrame(drawFrame);
}

function drawRadar(canvasId, scores, side) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const container = canvas.parentElement;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  container.querySelectorAll('.radar-label').forEach(el => el.remove());
  const rect = canvas.getBoundingClientRect();
  const size = Math.max(rect.width, 280);
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  ctx.scale(dpr, dpr);

  const cxR = size / 2;
  const cyR = size / 2;
  const padding = 20;
  const maxR = size / 2 - padding;

  const labels = side === 'left'
    ? ['Progressivism', 'Ecology', 'Internationalism', 'Statism', 'Civil liberties']
    : ['Conservatism', 'Productivism', 'Nationalism', 'Free market', 'Authority'];

  const axisOrder = ['society', 'environment', 'universality', 'economy', 'governance'];
  const values = axisOrder.map(axis => {
    const s = scores[axis] / 100;
    return side === 'left' ? (1 - s) : s;
  });

  const n = 5;
  const angleStep = (Math.PI * 2) / n;
  const startAngle = -Math.PI / 2;

  ctx.clearRect(0, 0, size, size);

  for (let level = 1; level <= 3; level++) {
    const r = maxR * (level / 3);
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const angle = startAngle + i * angleStep;
      const x = cxR + Math.cos(angle) * r;
      const y = cyR + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  for (let i = 0; i < n; i++) {
    const angle = startAngle + i * angleStep;
    ctx.beginPath();
    ctx.moveTo(cxR, cyR);
    ctx.lineTo(cxR + Math.cos(angle) * maxR, cyR + Math.sin(angle) * maxR);
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  const fillColor = side === 'left' ? 'rgba(20, 184, 166, 0.25)' : 'rgba(139, 92, 246, 0.25)';
  const strokeColor = side === 'left' ? '#14B8A6' : '#8B5CF6';

  ctx.beginPath();
  values.forEach((v, i) => {
    const r = maxR * Math.max(v, 0.05);
    const angle = startAngle + i * angleStep;
    const x = cxR + Math.cos(angle) * r;
    const y = cyR + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 2;
  ctx.stroke();

  values.forEach((v, i) => {
    const r = maxR * Math.max(v, 0.05);
    const angle = startAngle + i * angleStep;
    const x = cxR + Math.cos(angle) * r;
    const y = cyR + Math.sin(angle) * r;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = strokeColor;
    ctx.fill();
  });

  addRadarLabels(container, canvas, labels, n, startAngle, angleStep, cxR, cyR, maxR, size);
}

function drawRadarExpansion(canvasId, scores) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const container = canvas.parentElement;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  container.querySelectorAll('.radar-label').forEach(el => el.remove());
  const rect = canvas.getBoundingClientRect();
  const size = Math.max(rect.width, 280);
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  ctx.scale(dpr, dpr);

  const cxR = size / 2;
  const cyR = size / 2;
  const padding = 20;
  const maxR = size / 2 - padding;

  const labels = ['Space', 'Technology', 'Bioethics', 'Growth', 'Expansion'];
  const vertexKeys = ['space', 'technology', 'bioethics', 'growth', 'expansion'];
  const values = vertexKeys.map(key => {
    const s = scores[key] / 100;
    return 1 - s;
  });

  const n = 5;
  const angleStep = (Math.PI * 2) / n;
  const startAngle = -Math.PI / 2;

  ctx.clearRect(0, 0, size, size);

  for (let level = 1; level <= 3; level++) {
    const r = maxR * (level / 3);
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const angle = startAngle + i * angleStep;
      const x = cxR + Math.cos(angle) * r;
      const y = cyR + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  for (let i = 0; i < n; i++) {
    const angle = startAngle + i * angleStep;
    ctx.beginPath();
    ctx.moveTo(cxR, cyR);
    ctx.lineTo(cxR + Math.cos(angle) * maxR, cyR + Math.sin(angle) * maxR);
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  const fillColor = 'rgba(244, 114, 182, 0.25)';
  const strokeColor = '#F472B6';

  ctx.beginPath();
  values.forEach((v, i) => {
    const r = maxR * Math.max(v, 0.05);
    const angle = startAngle + i * angleStep;
    const x = cxR + Math.cos(angle) * r;
    const y = cyR + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 2;
  ctx.stroke();

  values.forEach((v, i) => {
    const r = maxR * Math.max(v, 0.05);
    const angle = startAngle + i * angleStep;
    const x = cxR + Math.cos(angle) * r;
    const y = cyR + Math.sin(angle) * r;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = strokeColor;
    ctx.fill();
  });

  addRadarLabels(container, canvas, labels, n, startAngle, angleStep, cxR, cyR, maxR, size);
}

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
    el.style.fontFamily = "'Space Grotesk', Inter, sans-serif";
    el.style.lineHeight = '1';

    if (Math.abs(Math.cos(angle)) < 0.1) {
      el.style.transform = 'translate(-50%, ' + (Math.sin(angle) < 0 ? '-100%' : '0') + ')';
    } else if (Math.cos(angle) > 0) {
      el.style.transform = 'translate(0, -50%)';
    } else {
      el.style.transform = 'translate(-100%, -50%)';
    }
    container.appendChild(el);

    const labelRect = el.getBoundingClientRect();
    if (labelRect.left < 4) el.style.transform = 'translate(0, -50%)';
    else if (labelRect.right > window.innerWidth - 4) el.style.transform = 'translate(-100%, -50%)';
  });
}

function getAxisFigureMatch(axisKey, userScore) {
  let closest = null, closestDist = Infinity;
  let distant = null, distantDist = -1;
  const figureSet = FIGURES;
  figureSet.forEach(fig => {
    let figScore;
    if (axisKey === 'expansion') {
      figScore = (fig.space + fig.technology + fig.bioethics + fig.growth) / 4;
    } else {
      figScore = fig[axisKey];
    }
    const dist = Math.abs(userScore - figScore);
    if (dist < closestDist) { closestDist = dist; closest = { name: fig.name, score: figScore }; }
    if (dist > distantDist) { distantDist = dist; distant = { name: fig.name, score: figScore }; }
  });

  return { closest, distant };
}

function axisFigureHTML(axisKey, userScore) {
  const match = getAxisFigureMatch(axisKey, userScore);
  return `
    <div class="axis-figure-row">
      <span class="axis-figure closest">Closest: <strong>${match.closest.name}</strong></span>
      <span class="axis-figure distant">Most Distant: <strong>${match.distant.name}</strong></span>
    </div>
  `;
}

function renderAxisBars(scores) {
  const container = document.getElementById('axisBars');
  container.innerHTML = '';

  // Mapping from English canonical labels in AXIS_LABELS to translation keys
  const LEFT_KEY_MAP  = { 'Statism': 'statism', 'Progressivism': 'progressivism', 'Liberty': 'liberty', 'Internationalism': 'internationalism', 'Ecology': 'ecology' };
  const RIGHT_KEY_MAP = { 'Free-market': 'freeMarket', 'Conservatism': 'conservatism', 'Authority': 'authority', 'Nationalism': 'nationalism', 'Productivism': 'productivism' };

  AXES.forEach((axis, idx) => {
    const leftPct = 100 - scores[axis];
    const rightPct = scores[axis];
    const labels = AXIS_LABELS[axis];
    const leftLabel = t(LEFT_KEY_MAP[labels.left] || '') || labels.left;
    const rightLabel = t(RIGHT_KEY_MAP[labels.right] || '') || labels.right;
    const color = BAR_COLORS[idx];
    const markerPos = scores[axis];

    const wrapper = document.createElement('div');
    wrapper.className = 'axis-bar-group';
    wrapper.innerHTML = `
      <div class="axis-bar-row">
        <div class="axis-bar-left">
          <span class="axis-bar-label">${leftLabel}</span>
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
          <span class="axis-bar-label">${rightLabel}</span>
        </div>
      </div>
      ${axisFigureHTML(axis, scores[axis])}
    `;
    container.appendChild(wrapper);
  });

  // Expansion aggregate bar
  const expLeft = 100 - scores.expansion;
  const expRight = scores.expansion;
  const expMarker = scores.expansion;
  const expWrapper = document.createElement('div');
  expWrapper.className = 'axis-bar-group';
  expWrapper.innerHTML = `
    <div class="axis-bar-row">
      <div class="axis-bar-left">
        <span class="axis-bar-label">${t('expansionism')}</span>
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
        <span class="axis-bar-label">${t('restraint')}</span>
      </div>
    </div>
    ${axisFigureHTML('expansion', scores.expansion)}
  `;
  container.appendChild(expWrapper);
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

  // Restore country card structure if it was replaced by presidential mode
  const countryCard = document.getElementById('countryCard');
  countryCard.className = 'country-card';
  countryCard.setAttribute('data-reveal', 'country');
  countryCard.innerHTML = `
    <span class="country-label">${t('closestCountry')}</span>
    <div class="country-row">
      <div class="country-info">
        <span class="country-code" id="countryCode"></span>
        <span class="country-name" id="countryName"></span>
      </div>
      <span class="country-pct" id="countryPct"></span>
    </div>
  `;

  document.getElementById('countryCode').textContent = bestCountry.code;
  document.getElementById('countryName').textContent = `${bestCountry.flag} ${bestCountry.name}`;
  document.getElementById('countryPct').textContent = `${Math.round(bestSimilarity)}%`;
}

// ─── 9b. Answer Review ──────────────────────
function toggleAnswers() {
  const content = document.getElementById('reviewContent');
  const toggle = document.getElementById('reviewToggle');
  content.classList.toggle('hidden');
  toggle.classList.toggle('open');

  // Build on first open
  if (!content.classList.contains('hidden') && !content.dataset.built) {
    content.dataset.built = 'true';
    const qs = getActiveQuestions();
    const labels = { 5: t('stronglyAgree'), 4: t('agree'), 3: t('neutral'), 2: t('disagree'), 1: t('stronglyDisagree') };
    const axisColors = { economy: '#8B5CF6', society: '#14B8A6', governance: '#F59E0B', universality: '#3B82F6', environment: '#22C55E', expansion: '#F472B6' };
    const axisNames = { economy: t('economy'), society: t('society'), governance: t('governance'), universality: t('universality'), environment: t('environment'), expansion: t('expansion') };

    let html = '';
    qs.forEach((q, i) => {
      const answer = answers[i];
      const color = axisColors[q.axis] || '#8B5CF6';
      html += `
        <div class="review-item">
          <div class="review-q-num" style="color:${color}">${String(i + 1).padStart(2, '0')}</div>
          <div class="review-q-body">
            <div class="review-q-text">${q.text}</div>
            <div class="review-q-meta">
              <span class="review-axis-tag" style="border-color:${color};color:${color}">${axisNames[q.axis]}</span>
              <span class="review-answer ${answer === null ? 'skipped' : ''}">${answer ? labels[answer] : t('skipped')}</span>
            </div>
          </div>
        </div>
      `;
    });
    content.innerHTML = html;
  }
}

// ─── 10. Share Card Generation ────────────────
function generateShareCard() {
  const scores = window._lastScores;
  const typeName = window._lastType;
  if (!scores) return;

  const canvas = document.getElementById('shareCanvas');
  const ctx = canvas.getContext('2d');
  const W = 1200, H = 630;
  canvas.width = W;
  canvas.height = H;

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, '#0B1120');
  grad.addColorStop(1, '#1a1040');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Grid pattern
  ctx.strokeStyle = 'rgba(139, 92, 246, 0.05)';
  ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 30) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y < H; y += 30) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

  // Title
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 28px "Space Grotesk", Inter, sans-serif';
  ctx.fillText('Where Do You Stand?', 50, 60);

  // Political type
  const meta = POLITICAL_TYPE_META[typeName] || { emoji: '🧠' };
  ctx.font = 'bold 42px "Space Grotesk", Inter, sans-serif';
  ctx.fillStyle = '#8B5CF6';
  ctx.fillText(`${meta.emoji} ${typeName}`, 50, 120);

  // Axis bars
  const allAxes = [...AXES, 'expansion'];
  const allLabels = { ...AXIS_LABELS, expansion: { left: 'Expansionism', right: 'Restraint' } };
  const barColors = [...BAR_COLORS, '#F472B6'];

  allAxes.forEach((axis, i) => {
    const y = 170 + i * 42;
    const score = axis === 'expansion' ? scores.expansion : scores[axis];
    const labels = allLabels[axis];

    ctx.font = '14px Inter, sans-serif';
    ctx.fillStyle = '#7E8CA8';
    ctx.textAlign = 'right';
    ctx.fillText(labels.left, 180, y + 4);
    ctx.textAlign = 'left';
    ctx.fillText(labels.right, 530, y + 4);

    // Track
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.fillRect(190, y - 6, 330, 12);

    // Fill
    ctx.fillStyle = barColors[i];
    const fillStart = Math.min(score, 50) * 3.3 + 190;
    const fillWidth = Math.abs(score - 50) * 3.3;
    ctx.fillRect(fillStart, y - 6, fillWidth, 12);

    // Marker
    const mx = 190 + score * 3.3;
    ctx.beginPath();
    ctx.arc(mx, y, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
  });

  // Country match
  let bestCountry = null, bestSim = -1;
  COUNTRIES.forEach(c => {
    const sim = calcSimilarity(scores, c);
    if (sim > bestSim) { bestSim = sim; bestCountry = c; }
  });
  ctx.textAlign = 'left';
  ctx.font = 'bold 18px "Space Grotesk", Inter, sans-serif';
  ctx.fillStyle = '#14B8A6';
  ctx.fillText(`Closest Country: ${bestCountry.flag} ${bestCountry.name} (${Math.round(bestSim)}%)`, 50, 440);

  // Closest figure
  const figured = FIGURES.map(f => ({ ...f, similarity: calcSimilarity(scores, f) }));
  figured.sort((a, b) => b.similarity - a.similarity);
  ctx.fillStyle = '#8B5CF6';
  ctx.fillText(`Closest Figure: ${figured[0].name} (${Math.round(figured[0].similarity)}%)`, 50, 475);

  // Mini compass (right side)
  const compassX = 700, compassY = 170, compassSize = 200;
  ctx.fillStyle = 'rgba(239, 68, 68, 0.15)'; ctx.fillRect(compassX, compassY, compassSize/2, compassSize/2);
  ctx.fillStyle = 'rgba(59, 130, 246, 0.15)'; ctx.fillRect(compassX + compassSize/2, compassY, compassSize/2, compassSize/2);
  ctx.fillStyle = 'rgba(34, 197, 94, 0.15)'; ctx.fillRect(compassX, compassY + compassSize/2, compassSize/2, compassSize/2);
  ctx.fillStyle = 'rgba(168, 85, 247, 0.15)'; ctx.fillRect(compassX + compassSize/2, compassY + compassSize/2, compassSize/2, compassSize/2);
  ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 1;
  ctx.strokeRect(compassX, compassY, compassSize, compassSize);
  // Cross
  ctx.beginPath(); ctx.moveTo(compassX + compassSize/2, compassY); ctx.lineTo(compassX + compassSize/2, compassY + compassSize); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(compassX, compassY + compassSize/2); ctx.lineTo(compassX + compassSize, compassY + compassSize/2); ctx.stroke();
  // Dot
  const dotCX = compassX + (scores.economy / 100) * compassSize;
  const dotCY = compassY + (1 - scores.governance / 100) * compassSize;
  ctx.beginPath(); ctx.arc(dotCX, dotCY, 10, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(139, 92, 246, 0.4)'; ctx.fill();
  ctx.beginPath(); ctx.arc(dotCX, dotCY, 5, 0, Math.PI * 2);
  ctx.fillStyle = '#8B5CF6'; ctx.fill();

  // Labels around compass
  ctx.font = '11px "Space Grotesk", Inter, sans-serif';
  ctx.fillStyle = '#7E8CA8';
  ctx.textAlign = 'center';
  ctx.fillText('Authoritarian', compassX + compassSize/2, compassY - 8);
  ctx.fillText('Libertarian', compassX + compassSize/2, compassY + compassSize + 16);
  ctx.textAlign = 'right';
  ctx.fillText('Left', compassX - 8, compassY + compassSize/2 + 4);
  ctx.textAlign = 'left';
  ctx.fillText('Right', compassX + compassSize + 8, compassY + compassSize/2 + 4);

  // Watermark
  ctx.textAlign = 'center';
  ctx.font = '13px Inter, sans-serif';
  ctx.fillStyle = '#4A5568';
  ctx.fillText("Troy's Political Test — troysalam.github.io/where-do-you-stand", W / 2, H - 30);

  // Border glow
  ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, W - 2, H - 2);

  // Download
  const dataURL = canvas.toDataURL('image/png');
  const link = document.getElementById('downloadLink');
  link.href = dataURL;
  link.download = 'where-do-you-stand-results.png';
  link.click();

  playSound('sparkle');
}

// ─── 10b. PDF Download ─────────────────────
function downloadPDF() {
  const scores = window._lastScores;
  const typeName = window._lastType;
  if (!scores || typeof jspdf === 'undefined') return;

  const { jsPDF } = jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const W = 210, margin = 18;
  let y = 20;

  // Colors
  const purple = [139, 92, 246];
  const teal = [20, 184, 166];
  const dimText = [120, 140, 168];
  const white = [255, 255, 255];
  const darkBg = [11, 17, 32];

  // Dark background
  doc.setFillColor(...darkBg);
  doc.rect(0, 0, W, 297, 'F');

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...white);
  doc.text('Where Do You Stand?', margin, y);
  y += 10;

  doc.setFontSize(9);
  doc.setTextColor(...dimText);
  doc.text('Political Profile Report — ' + new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' }), margin, y);
  y += 4;

  // Divider
  doc.setDrawColor(...purple);
  doc.setLineWidth(0.5);
  doc.line(margin, y, W - margin, y);
  y += 10;

  // Political type
  const meta = POLITICAL_TYPE_META[typeName] || { emoji: '', desc: '' };
  doc.setFontSize(11);
  doc.setTextColor(...dimText);
  doc.text('MY PROFILE:', margin, y);
  y += 8;
  doc.setFontSize(20);
  doc.setTextColor(...purple);
  doc.text(typeName, margin, y);
  y += 8;
  doc.setFontSize(9);
  doc.setTextColor(...dimText);
  const descLines = doc.splitTextToSize(meta.desc || '', W - margin * 2);
  doc.text(descLines, margin, y);
  y += descLines.length * 5 + 8;

  // Political DNA section
  doc.setFontSize(11);
  doc.setTextColor(...white);
  doc.text('YOUR POLITICAL DNA', margin, y);
  y += 8;

  const allAxes = [...AXES, 'expansion'];
  const axisNames = { economy: 'Economy', society: 'Society', governance: 'Governance', universality: 'Universality', environment: 'Environment', expansion: 'Expansion' };
  const barColors = [[139,92,246],[20,184,166],[245,158,11],[59,130,246],[34,197,94],[244,114,182]];

  allAxes.forEach((axis, i) => {
    const score = scores[axis];
    const type = getIdeologyType(axis, score);
    const barW = W - margin * 2 - 50;
    const barX = margin + 50;

    // Axis label + score
    doc.setFontSize(8);
    doc.setTextColor(...dimText);
    doc.text(axisNames[axis].toUpperCase(), margin, y + 1);
    doc.setTextColor(...white);
    doc.text(score + '%', W - margin, y + 1, { align: 'right' });

    // Ideology label
    y += 5;
    doc.setFontSize(10);
    doc.setTextColor(...barColors[i]);
    doc.text(type.label, margin, y);

    // Bar track
    y += 3;
    doc.setFillColor(30, 35, 50);
    doc.roundedRect(margin, y, barW + 50, 3, 1.5, 1.5, 'F');

    // Bar fill
    doc.setFillColor(...barColors[i]);
    doc.roundedRect(margin, y, (score / 100) * (barW + 50), 3, 1.5, 1.5, 'F');

    y += 8;
  });

  y += 4;

  // Divider
  doc.setDrawColor(40, 45, 60);
  doc.setLineWidth(0.3);
  doc.line(margin, y, W - margin, y);
  y += 8;

  // Axis bars section
  doc.setFontSize(11);
  doc.setTextColor(...white);
  doc.text('AXIS BREAKDOWN', margin, y);
  y += 8;

  const AXIS_LABELS_PDF = { ...AXIS_LABELS, expansion: { left: 'Expansionism', right: 'Restraint' } };
  allAxes.forEach((axis, i) => {
    const score = scores[axis];
    const labels = AXIS_LABELS_PDF[axis];
    const leftPct = 100 - score;
    const rightPct = score;

    doc.setFontSize(7);
    doc.setTextColor(...dimText);
    doc.text(labels.left + ' ' + leftPct + '%', margin, y + 1);
    doc.text(rightPct + '% ' + labels.right, W - margin, y + 1, { align: 'right' });

    // Track
    const trackX = margin + 45, trackW = W - margin * 2 - 90;
    y += 3;
    doc.setFillColor(30, 35, 50);
    doc.roundedRect(trackX, y, trackW, 2.5, 1, 1, 'F');

    // Fill from center
    doc.setFillColor(...barColors[i]);
    const center = trackX + trackW / 2;
    const fillStart = score < 50 ? trackX + (score / 100) * trackW : center;
    const fillW = Math.abs(score - 50) / 100 * trackW;
    doc.rect(fillStart, y, fillW, 2.5, 'F');

    y += 7;
  });

  y += 4;
  doc.setDrawColor(40, 45, 60);
  doc.line(margin, y, W - margin, y);
  y += 8;

  // Country match
  let bestCountry = null, bestSim = -1;
  COUNTRIES.forEach(c => {
    const sim = calcSimilarity(scores, c);
    if (sim > bestSim) { bestSim = sim; bestCountry = c; }
  });
  doc.setFontSize(11);
  doc.setTextColor(...white);
  doc.text('CLOSEST COUNTRY', margin, y);
  y += 7;
  doc.setFontSize(14);
  doc.setTextColor(...teal);
  doc.text(`${bestCountry.flag} ${bestCountry.name}  —  ${Math.round(bestSim)}%`, margin, y);
  y += 10;

  // Closest figures
  const figured = FIGURES.map(f => ({ ...f, similarity: calcSimilarity(scores, f) }));
  figured.sort((a, b) => b.similarity - a.similarity);
  const top4 = figured.slice(0, 4);

  doc.setFontSize(11);
  doc.setTextColor(...white);
  doc.text('CLOSEST FIGURES', margin, y);
  y += 7;

  top4.forEach((f, i) => {
    doc.setFontSize(10);
    doc.setTextColor(...purple);
    doc.text(`${f.name}`, margin + (i < 2 ? 0 : 85), i < 2 ? y + i * 6 : y + (i - 2) * 6);
    doc.setFontSize(8);
    doc.setTextColor(...dimText);
    doc.text(`${Math.round(f.similarity)}%`, margin + (i < 2 ? 70 : 155), i < 2 ? y + i * 6 : y + (i - 2) * 6);
  });

  y += 16;

  // Footer
  doc.setFontSize(7);
  doc.setTextColor(80, 90, 110);
  doc.text('Where Do You Stand? — troysalam.github.io/where-do-you-stand', W / 2, 288, { align: 'center' });

  // Save
  doc.save('where-do-you-stand-results.pdf');
  playSound('sparkle');
}

// ─── 11. Compare Mode ─────────────────────────
function encodeScores(scores) {
  const vals = [...AXES, ...EXPANSION_SUBS].map(k => scores[k]);
  return btoa(vals.join(','));
}

function decodeScores(hash) {
  try {
    const vals = atob(hash).split(',').map(Number);
    const scores = {};
    [...AXES, ...EXPANSION_SUBS].forEach((k, i) => scores[k] = vals[i]);
    scores.expansion = Math.round(EXPANSION_SUBS.reduce((sum, s) => sum + scores[s], 0) / EXPANSION_SUBS.length);
    return scores;
  } catch (e) { return null; }
}

function checkCompareHash() {
  const hash = window.location.hash;
  if (hash.startsWith('#compare=')) {
    const encoded = hash.substring('#compare='.length);
    friendScores = decodeScores(encoded);
  }
}

function challengeFriend() {
  const scores = window._lastScores;
  if (!scores) return;
  const encoded = encodeScores(scores);
  const url = `${window.location.origin}${window.location.pathname}#compare=${encoded}`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(url);
  }

  // Show a temporary notification
  const btn = event.target;
  const orig = btn.textContent;
  btn.textContent = '✓ Link Copied!';
  setTimeout(() => { btn.textContent = orig; }, 2000);

  playSound('sparkle');
}

function renderCompare(myScores, theirScores) {
  const overlay = document.getElementById('compareOverlay');
  overlay.classList.remove('hidden');

  const allDims = [...AXES, 'expansion'];
  const allLabels = { ...AXIS_LABELS, expansion: { left: 'Expansionism', right: 'Restraint' } };

  let html = `<h3 class="compare-heading gradient-heading-sm">You vs Friend</h3>`;
  html += `<div class="figure-bar-legend" style="margin-bottom:12px;">
    <span class="leg-you">You</span>
    <span class="leg-fig">Friend</span>
  </div>`;
  html += `<div class="compare-bars">`;

  allDims.forEach(dim => {
    const myVal = dim === 'expansion' ? myScores.expansion : myScores[dim];
    const theirVal = dim === 'expansion' ? theirScores.expansion : theirScores[dim];
    const label = allLabels[dim] || { left: dim, right: dim };
    html += `
      <div class="compare-bar-row">
        <span style="text-align:right;color:var(--text-muted)">${label.left}</span>
        <div class="compare-bar-track">
          <div class="compare-bar-you" style="width:${myVal}%"></div>
          <div class="compare-bar-friend" style="width:${theirVal}%"></div>
        </div>
        <span style="color:var(--text-muted)">${label.right}</span>
      </div>
    `;
  });

  html += `</div>`;

  // Similarity
  const similarity = calcSimilarity(myScores, theirScores);
  html += `<p style="text-align:center;margin-top:16px;font-size:0.9rem;color:var(--accent);font-weight:700;">You and your friend are ${Math.round(similarity)}% similar</p>`;

  overlay.innerHTML = html;
}

// ─── 12. History Management ───────────────────
function saveToHistory(scores) {
  const history = JSON.parse(safeStorage.getItem('wdys_history') || '[]');
  const type = POLITICAL_TYPES.find(t => t.condition(scores));
  const figureSet = FIGURES;
  const figured = figureSet.map(f => ({ name: f.name, similarity: calcSimilarity(scores, f) }));
  figured.sort((a, b) => b.similarity - a.similarity);

  const entry = {
    date: new Date().toISOString(),
    scores: { ...scores },
    type: type.label,
    closestFigure: figured[0].name,
    speedMode: false
  };

  history.unshift(entry);
  if (history.length > 20) history.pop();
  safeStorage.setItem('wdys_history', JSON.stringify(history));
}

function renderHistorySection() {
  const history = JSON.parse(safeStorage.getItem('wdys_history') || '[]');
  const content = document.getElementById('historyContent');

  if (history.length === 0) {
    content.innerHTML = '<p style="text-align:center;color:var(--text-dim);padding:20px;">No history yet. Take the quiz to start tracking!</p>';
    return;
  }

  let html = '';

  // Shift tracking
  if (history.length >= 2) {
    const latest = history[0].scores;
    const first = history[history.length - 1].scores;
    AXES.forEach(axis => {
      const shift = latest[axis] - first[axis];
      if (Math.abs(shift) >= 5) {
        const dir = shift > 0 ? AXIS_LABELS[axis].right : AXIS_LABELS[axis].left;
        html += `<div class="history-shift" style="margin-bottom:8px;">Shifted ${Math.abs(shift)}% toward ${dir} on ${axis} since first test</div>`;
      }
    });
  }

  history.forEach((entry, i) => {
    const date = new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    html += `
      <div class="history-item">
        <div>
          <div class="history-type">${entry.type}</div>
          <div class="history-date">${date}</div>
        </div>
        <div class="history-figure">${entry.closestFigure}</div>
      </div>
    `;
  });

  html += `<button class="btn-secondary" style="margin-top:12px;padding:8px 16px;font-size:0.8rem;" onclick="clearHistory()">Clear History</button>`;
  content.innerHTML = html;
}

function clearHistory() {
  safeStorage.removeItem('wdys_history');
  safeStorage.removeItem('wdys_badges');
  renderHistorySection();
}

function toggleHistorySection() {
  const content = document.getElementById('historyContent');
  const toggle = document.getElementById('historyToggle');
  content.classList.toggle('hidden');
  toggle.classList.toggle('open');
}

// ─── 13. Ideology Breakdown (Political DNA) ──
const IDEOLOGY_MAP = {
  economy: [
    { max: 15, label: 'Communist',           color: '#EF4444', desc: 'Full state ownership of production and resources' },
    { max: 30, label: 'Democratic Socialist', color: '#F97316', desc: 'Major industries publicly owned, strong redistribution' },
    { max: 45, label: 'Social Democrat',      color: '#F59E0B', desc: 'Regulated capitalism with a strong welfare state' },
    { max: 55, label: 'Centrist',             color: '#A78BFA', desc: 'Mixed economy balancing markets and public services' },
    { max: 70, label: 'Classical Liberal',    color: '#3B82F6', desc: 'Free markets with light regulation and low taxes' },
    { max: 85, label: 'Free-Market Conservative', color: '#14B8A6', desc: 'Minimal state role, privatisation, fiscal discipline' },
    { max: 101, label: 'Laissez-Faire Capitalist', color: '#22C55E', desc: 'Near-zero government interference in markets' },
  ],
  society: [
    { max: 15, label: 'Radical Progressive',  color: '#F472B6', desc: 'Fundamental transformation of social norms and structures' },
    { max: 30, label: 'Progressive',           color: '#A78BFA', desc: 'Active reform toward equality and social liberation' },
    { max: 45, label: 'Social Liberal',        color: '#8B5CF6', desc: 'Personal freedoms first, gradual social change' },
    { max: 55, label: 'Moderate',              color: '#6B7280', desc: 'Balanced views on tradition and progress' },
    { max: 70, label: 'Cultural Conservative', color: '#3B82F6', desc: 'Preserving existing social institutions and norms' },
    { max: 85, label: 'Traditionalist',        color: '#F59E0B', desc: 'Strong commitment to heritage, religion, and customs' },
    { max: 101, label: 'Reactionary',          color: '#EF4444', desc: 'Restoring society to a previous moral framework' },
  ],
  governance: [
    { max: 15, label: 'Anarchist',             color: '#22C55E', desc: 'Voluntary associations, no centralised authority' },
    { max: 30, label: 'Libertarian',            color: '#14B8A6', desc: 'Maximum personal freedom, minimal government power' },
    { max: 45, label: 'Civil Libertarian',      color: '#3B82F6', desc: 'Strong civil rights protections, limited state reach' },
    { max: 55, label: 'Moderate Statist',       color: '#A78BFA', desc: 'Balanced governance with checks and freedoms' },
    { max: 70, label: 'Statist',                color: '#F59E0B', desc: 'Government should play a strong guiding role' },
    { max: 85, label: 'Authoritarian',          color: '#F97316', desc: 'Centralised control for order and national strength' },
    { max: 101, label: 'Totalitarian',          color: '#EF4444', desc: 'Absolute state power over all aspects of life' },
  ],
  universality: [
    { max: 15, label: 'Globalist',              color: '#8B5CF6', desc: 'Borderless cooperation, supranational governance' },
    { max: 30, label: 'Internationalist',        color: '#3B82F6', desc: 'Strong global institutions and open borders' },
    { max: 45, label: 'Multilateralist',         color: '#14B8A6', desc: 'International cooperation with national sovereignty' },
    { max: 55, label: 'Moderate',                color: '#6B7280', desc: 'Pragmatic balance of national and global interests' },
    { max: 70, label: 'Patriot',                 color: '#F59E0B', desc: 'National interests first but open to cooperation' },
    { max: 85, label: 'Nationalist',             color: '#F97316', desc: 'Strong national identity, strict borders and sovereignty' },
    { max: 101, label: 'Ethno-Nationalist',      color: '#EF4444', desc: 'Nation defined by shared heritage and cultural unity' },
  ],
  environment: [
    { max: 15, label: 'Deep Ecologist',          color: '#22C55E', desc: 'Nature has intrinsic value above human economic needs' },
    { max: 30, label: 'Green Activist',          color: '#14B8A6', desc: 'Radical restructuring of economy around sustainability' },
    { max: 45, label: 'Environmentalist',        color: '#3B82F6', desc: 'Strong climate policy and renewable energy investment' },
    { max: 55, label: 'Balanced',                color: '#6B7280', desc: 'Weighing environmental and economic priorities equally' },
    { max: 70, label: 'Growth-Oriented',         color: '#F59E0B', desc: 'Economic growth as priority, pragmatic green measures' },
    { max: 85, label: 'Productivist',            color: '#F97316', desc: 'Industry and output over environmental regulation' },
    { max: 101, label: 'Resource Exploitationist', color: '#EF4444', desc: 'Unrestricted resource extraction for prosperity' },
  ],
  expansion: [
    { max: 15, label: 'Hyper-Expansionist',      color: '#8B5CF6', desc: 'Push every frontier — space, AI, biotech, unlimited growth' },
    { max: 30, label: 'Tech Accelerationist',    color: '#3B82F6', desc: 'Embrace rapid technological and scientific progress' },
    { max: 45, label: 'Tech Optimist',           color: '#14B8A6', desc: 'Innovation-positive with sensible guardrails' },
    { max: 55, label: 'Moderate',                color: '#6B7280', desc: 'Case-by-case approach to technological expansion' },
    { max: 70, label: 'Cautious Pragmatist',     color: '#F59E0B', desc: 'Slow, careful adoption with strong precautions' },
    { max: 85, label: 'Restraint Advocate',      color: '#F97316', desc: 'Technology needs strict limits to prevent harm' },
    { max: 101, label: 'Neo-Luddite',            color: '#EF4444', desc: 'Technology has gone too far — scale back significantly' },
  ]
};

function getIdeologyType(axis, score) {
  const map = IDEOLOGY_MAP[axis];
  for (const tier of map) {
    if (score < tier.max) return tier;
  }
  return map[map.length - 1];
}

function renderIdeologyBreakdown(scores) {
  const grid = document.getElementById('ideologyGrid');
  const allAxes = [...AXES, 'expansion'];
  const axisIcons = {
    economy: '💰', society: '🏛️', governance: '⚖️',
    universality: '🌐', environment: '🌿', expansion: '🚀'
  };
  const axisNames = {
    economy: t('economy'), society: t('society'), governance: t('governance'),
    universality: t('universality'), environment: t('environment'), expansion: t('expansion')
  };

  let html = '';
  allAxes.forEach((axis, i) => {
    const score = scores[axis];
    const type = getIdeologyType(axis, score);
    html += `
      <div class="ideology-card" style="animation-delay: ${i * 80}ms">
        <div class="ideology-card-top">
          <span class="ideology-icon">${axisIcons[axis]}</span>
          <span class="ideology-axis">${axisNames[axis]}</span>
          <span class="ideology-score" style="color: ${type.color}">${score}%</span>
        </div>
        <div class="ideology-label" style="color: ${type.color}">${type.label}</div>
        <div class="ideology-bar">
          <div class="ideology-bar-fill" style="width: ${score}%; background: ${type.color}"></div>
          <div class="ideology-bar-marker" style="left: ${score}%"></div>
        </div>
        <div class="ideology-desc">${type.desc}</div>
      </div>
    `;
  });
  grid.innerHTML = html;
}

// ─── 14. Figure Breakdown ("Why This Figure") ─
function renderFigures(scores) {
  const figured = FIGURES.map(f => ({
    ...f,
    similarity: calcSimilarity(scores, f)
  }));
  figured.sort((a, b) => b.similarity - a.similarity);

  // Restore heading if it was replaced by presidential mode
  const figSection = document.getElementById('figuresSection');
  figSection.innerHTML = `
    <h3 class="section-heading">${t('closestFigures')}</h3>
    <div class="figures-grid" id="closestFigures"></div>
  `;

  const closest = figured.slice(0, 4);
  const closestEl = document.getElementById('closestFigures');
  closestEl.innerHTML = closest.map((f, i) => buildFigureCard(f, scores, i === 0, i)).join('');

  // Distant figures removed for cleaner results

  // Add click listeners with smooth expand
  document.querySelectorAll('.figure-card').forEach(card => {
    card.addEventListener('click', () => {
      const wasExpanded = card.classList.contains('expanded');
      card.classList.toggle('expanded');
      if (!wasExpanded) animateBreakdownBars(card);
    });
  });
}

// Animate breakdown bars from 0 to full width
function animateBreakdownBars(card) {
  const bars = card.querySelectorAll('.figure-bar-you, .figure-bar-fig');
  bars.forEach((bar, i) => {
    const targetW = bar.dataset.w;
    bar.style.width = '0%';
    bar.style.transition = 'none';
    requestAnimationFrame(() => {
      bar.style.transition = `width 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 40}ms`;
      bar.style.width = targetW + '%';
    });
  });
  // Fade in diverge note after bars
  const note = card.querySelector('.figure-diverge-note');
  if (note) {
    note.style.opacity = '0';
    note.style.transform = 'translateY(6px)';
    setTimeout(() => {
      note.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      note.style.opacity = '1';
      note.style.transform = 'translateY(0)';
    }, bars.length * 40 + 400);
  }
}

// Animate counting numbers from 0 to target
function animateCountUp(el, target, duration = 800, suffix = '%') {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutCubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function buildFigureCard(fig, scores, isTopMatch, cardIndex) {
  const allDims = [...AXES, ...EXPANSION_SUBS];
  const dimLabels = { ...AXIS_LABELS, space: { left: 'Space' }, technology: { left: 'Tech' }, bioethics: { left: 'Bio' }, growth: { left: 'Growth' } };

  let barsHtml = '';
  let maxDivAxis = '', maxDiv = 0;
  let minDivAxis = '', minDiv = Infinity;

  allDims.forEach(dim => {
    const myVal = scores[dim];
    const figVal = fig[dim];
    const label = dimLabels[dim] ? (dimLabels[dim].left || dim) : dim;
    const diff = Math.abs(myVal - figVal);
    if (diff > maxDiv) { maxDiv = diff; maxDivAxis = label; }
    if (diff < minDiv) { minDiv = diff; minDivAxis = label; }
    const highlight = diff > 20 ? 'figure-axis-diverge' : '';
    barsHtml += `
      <div class="figure-axis-bar ${highlight}">
        <span class="figure-axis-label">${label}</span>
        <div class="figure-bar-track">
          <div class="figure-bar-you" data-w="${myVal}" style="width:0%;top:0;height:50%"></div>
          <div class="figure-bar-fig" data-w="${figVal}" style="width:0%;bottom:0;top:auto;height:50%"></div>
        </div>
      </div>
    `;
  });

  // SVG circular gauge
  const pct = Math.round(fig.similarity);
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;
  const gaugeColor = pct >= 80 ? '#22C55E' : pct >= 60 ? 'var(--accent)' : '#EF4444';

  return `
    <div class="figure-card ${isTopMatch ? 'top-match' : ''}" style="animation-delay: ${cardIndex * 100}ms">
      <div class="figure-card-header">
        <div class="figure-name-wrap">
          ${isTopMatch ? `<span class="top-match-badge">${t('closest')}</span>` : ''}
          <span class="figure-name">${fig.name}</span>
        </div>
        <div class="figure-gauge">
          <svg width="44" height="44" viewBox="0 0 44 44">
            <circle cx="22" cy="22" r="${radius}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="3"/>
            <circle class="gauge-ring" cx="22" cy="22" r="${radius}" fill="none" stroke="${gaugeColor}" stroke-width="3" stroke-linecap="round"
              stroke-dasharray="${circumference}" stroke-dashoffset="${circumference}" data-target="${offset}"
              transform="rotate(-90 22 22)" style="transition: stroke-dashoffset 1s cubic-bezier(0.22, 1, 0.36, 1);"/>
          </svg>
          <span class="figure-pct" data-target="${pct}">0%</span>
        </div>
      </div>
      <span class="figure-expand-hint">${t('tapBreakdown')} <span class="expand-chevron">▾</span></span>
      <div class="figure-breakdown">
        <div class="figure-bar-legend">
          <span class="leg-you">${t('you')}</span>
          <span class="leg-fig">${fig.name}</span>
        </div>
        ${barsHtml}
        <div class="figure-diverge-note">${t('agreeMost')} ${minDivAxis}, ${t('disagreeMost')} ${maxDivAxis}</div>
      </div>
    </div>
  `;
}

// Animate all figure gauges and % counters when they become visible
function animateFigureGauges() {
  document.querySelectorAll('.gauge-ring').forEach(ring => {
    const target = ring.dataset.target;
    setTimeout(() => { ring.style.strokeDashoffset = target; }, 200);
  });
  document.querySelectorAll('.figure-pct[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    setTimeout(() => animateCountUp(el, target, 900), 300);
  });
}

// ─── 15. Sensitivity Analysis ─────────────────
function renderImpactAnalysis(scores) {
  const qs = getActiveQuestions();
  const impacts = [];

  qs.forEach((q, i) => {
    if (answers[i] === null) return;
    const originalAnswer = answers[i];

    // Calculate what scores would be if this answer were neutral (3)
    const modifiedAnswers = [...answers];
    modifiedAnswers[i] = 3;

    // Recalculate the specific axis score
    const axis = q.axis === 'expansion' ? (q.sub || q.axis) : q.axis;
    const relevantQs = qs.map((qq, ii) => ({ q: qq, answer: modifiedAnswers[ii] }))
      .filter(x => {
        if (q.axis === 'expansion') return x.q.axis === 'expansion' && x.q.sub === q.sub;
        return x.q.axis === q.axis;
      });

    let totalRight = 0;
    relevantQs.forEach(({ q: rq, answer }) => {
      if (answer === null) return;
      const normalized = (answer - 1) / 4;
      totalRight += rq.pole === 'right' ? normalized : (1 - normalized);
    });

    const modifiedScore = relevantQs.length > 0 ? Math.round((totalRight / relevantQs.length) * 100) : 50;
    const originalScore = scores[axis] || 50;
    const impact = Math.abs(originalScore - modifiedScore);

    if (impact > 0) {
      impacts.push({
        qIndex: i,
        question: q.text,
        axis: axis,
        impact: impact,
        answer: originalAnswer,
        axisColor: ALL_Q_COLORS[q.axis] || '#8B5CF6'
      });
    }
  });

  impacts.sort((a, b) => b.impact - a.impact);
  const top5 = impacts.slice(0, 5);
  const maxImpact = top5.length > 0 ? top5[0].impact : 1;

  const container = document.getElementById('impactList');
  container.innerHTML = top5.map((item, i) => `
    <div class="impact-item" style="border-left-color: ${item.axisColor};">
      <span class="impact-rank">#${i + 1}</span>
      <span class="impact-text">Your answer to <strong>Q${item.qIndex + 1}</strong> shifted your <strong>${item.axis}</strong> score by <strong>${item.impact} points</strong></span>
      <div class="impact-bar-wrap">
        <div class="impact-bar-inner" style="width: ${(item.impact / maxImpact) * 100}%; background: ${item.axisColor};"></div>
      </div>
    </div>
  `).join('');
}

// ─── 16. Question Review ──────────────────────
function renderQuestionReview() {
  const qs = getActiveQuestions();
  const content = document.getElementById('reviewContent');
  const groupedByAxis = {};

  qs.forEach((q, i) => {
    const axis = q.axis;
    if (!groupedByAxis[axis]) groupedByAxis[axis] = [];
    groupedByAxis[axis].push({ q, i, answer: answers[i] });
  });

  let html = '';
  ALL_Q_AXES.forEach(axis => {
    const group = groupedByAxis[axis];
    if (!group) return;
    const color = ALL_Q_COLORS[axis];
    html += `
      <div class="review-axis-group">
        <div class="review-axis-title" style="background: ${color}22; color: ${color};">${SECTION_NAMES[axis]}</div>
    `;

    group.forEach(({ q, i, answer }) => {
      const val = answer || 3;
      const answerLabels = { 1: 'SD', 2: 'D', 3: 'N', 4: 'A', 5: 'SA' };
      const bgIntensity = Math.abs(val - 3) / 2;
      const bgColor = val > 3 ? `rgba(34, 197, 94, ${0.1 + bgIntensity * 0.2})` :
                       val < 3 ? `rgba(239, 68, 68, ${0.1 + bgIntensity * 0.2})` :
                       'rgba(255,255,255,0.06)';
      const direction = q.pole === 'left' ?
        (val > 3 ? AXIS_LABELS[q.axis]?.left || 'Left' : val < 3 ? AXIS_LABELS[q.axis]?.right || 'Right' : 'Neutral') :
        (val > 3 ? AXIS_LABELS[q.axis]?.right || 'Right' : val < 3 ? AXIS_LABELS[q.axis]?.left || 'Left' : 'Neutral');

      const directionForExpansion = q.axis === 'expansion' ?
        (q.pole === 'left' ?
          (val > 3 ? 'Expansionist' : val < 3 ? 'Restraint' : 'Neutral') :
          (val > 3 ? 'Restraint' : val < 3 ? 'Expansionist' : 'Neutral'))
        : direction;

      html += `
        <div class="review-question">
          <div class="review-answer-dot" style="background:${bgColor};color:${val !== 3 ? '#fff' : 'var(--text-dim)'};">${answerLabels[val]}</div>
          <span style="flex:1;">${q.text.substring(0, 80)}${q.text.length > 80 ? '...' : ''}</span>
          <span class="review-direction" style="color:${color};">→ ${q.axis === 'expansion' ? directionForExpansion : direction}</span>
        </div>
      `;
    });

    html += `</div>`;
  });

  content.innerHTML = html;
}

function toggleReviewSection() {
  const content = document.getElementById('reviewContent');
  const toggle = document.getElementById('reviewToggle');
  content.classList.toggle('hidden');
  toggle.classList.toggle('open');
}

// ─── 17. Reveal Animations ────────────────────
function animateResultsReveal() {
  const reveals = document.querySelectorAll('#results [data-reveal]');
  reveals.forEach(el => el.classList.remove('revealed'));
  const figureCards = document.querySelectorAll('#results .figure-card');
  figureCards.forEach(el => el.classList.remove('revealed'));

  const baseDelay = 150;
  reveals.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('revealed');

      // Ideology cards — stagger reveal
      if (el.id === 'ideologySection') {
        const cards = el.querySelectorAll('.ideology-card');
        cards.forEach((card, j) => {
          setTimeout(() => card.classList.add('revealed'), j * 100);
        });
      }

      // Figures section — stagger cards then trigger gauges
      if (el.id === 'figuresSection') {
        const cards = el.querySelectorAll('.figure-card');
        cards.forEach((card, j) => {
          setTimeout(() => card.classList.add('revealed'), j * 120);
        });
        setTimeout(() => animateFigureGauges(), 200);
      }

      // Country card — count up % (compass mode)
      if (el.id === 'countryCard' && el.getAttribute('data-reveal') === 'country') {
        const pctEl = document.getElementById('countryPct');
        if (pctEl) {
          const target = parseInt(pctEl.textContent);
          pctEl.textContent = '0%';
          setTimeout(() => animateCountUp(pctEl, target, 1000), 200);
        }
      }

      // Axis bars — animate marker positions
      if (el.classList.contains('axis-bars')) {
        el.querySelectorAll('.bar-marker').forEach((m, j) => {
          const finalPos = m.style.left;
          m.style.left = '50%';
          m.style.transition = 'none';
          setTimeout(() => {
            m.style.transition = `left 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${j * 80}ms`;
            m.style.left = finalPos;
          }, 100);
        });
        el.querySelectorAll('.bar-fill').forEach((f, j) => {
          const finalW = f.style.width;
          const finalL = f.style.left;
          f.style.width = '0%';
          f.style.transition = 'none';
          setTimeout(() => {
            f.style.transition = `width 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${j * 80}ms, left 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${j * 80}ms`;
            f.style.width = finalW;
            f.style.left = finalL;
          }, 100);
        });
        // Axis figure labels slide in
        el.querySelectorAll('.axis-figure-row').forEach((row, j) => {
          row.style.opacity = '0';
          row.style.transform = 'translateY(8px)';
          setTimeout(() => {
            row.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';
          }, j * 80 + 600);
        });
      }
    }, i * baseDelay);
  });
}

function calcSimilarity(scores, profile) {
  const allDims = [...AXES, ...EXPANSION_SUBS];
  let sumSqDiff = 0;
  allDims.forEach(dim => {
    const diff = (scores[dim] || 50) - (profile[dim] || 50);
    sumSqDiff += diff * diff;
  });
  const maxDist = Math.sqrt(allDims.length * 100 * 100);
  const dist = Math.sqrt(sumSqDiff);
  return Math.max(0, (1 - dist / maxDist) * 100);
}

// ─── Particle Background ──────────────────────
let particleAnimId = null;
let _particles = [];
let _particleCanvas = null;
let _particleCtx = null;

const PARTICLE_THEMES = {
  default: {
    colors: ['rgba(139, 92, 246, 0.25)', 'rgba(20, 184, 166, 0.25)'],
    lineColor: [139, 92, 246],
    lineAlpha: 0.08
  },
  black: {
    colors: ['rgba(139, 92, 246, 0.35)', 'rgba(20, 184, 166, 0.35)'],
    lineColor: [139, 92, 246],
    lineAlpha: 0.12
  },
  neon: {
    colors: ['rgba(0, 255, 136, 0.3)', 'rgba(0, 221, 255, 0.3)'],
    lineColor: [0, 255, 136],
    lineAlpha: 0.1
  }
};

function getParticleTheme() {
  const t = document.documentElement.dataset.theme || 'default';
  return PARTICLE_THEMES[t] || PARTICLE_THEMES.default;
}

function updateParticleColors() {
  const theme = getParticleTheme();
  _particles.forEach(p => {
    p.color = theme.colors[p.colorIdx];
  });
}

function initParticles() {
  _particleCanvas = document.getElementById('particleCanvas');
  if (!_particleCanvas) return;
  _particleCtx = _particleCanvas.getContext('2d');

  function resize() {
    _particleCanvas.width = window.innerWidth;
    _particleCanvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const theme = getParticleTheme();
  const count = 50;
  _particles = [];

  for (let i = 0; i < count; i++) {
    const colorIdx = Math.random() > 0.5 ? 0 : 1;
    _particles.push({
      x: Math.random() * _particleCanvas.width,
      y: Math.random() * _particleCanvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 1,
      colorIdx,
      color: theme.colors[colorIdx]
    });
  }

  function animate() {
    const ctx = _particleCtx;
    const canvas = _particleCanvas;
    const pt = getParticleTheme();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    _particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    // Draw connections
    const [lr, lg, lb] = pt.lineColor;
    for (let i = 0; i < _particles.length; i++) {
      for (let j = i + 1; j < _particles.length; j++) {
        const dx = _particles[i].x - _particles[j].x;
        const dy = _particles[i].y - _particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(_particles[i].x, _particles[i].y);
          ctx.lineTo(_particles[j].x, _particles[j].y);
          ctx.strokeStyle = `rgba(${lr}, ${lg}, ${lb}, ${pt.lineAlpha * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    particleAnimId = requestAnimationFrame(animate);
  }

  cancelAnimationFrame(particleAnimId);
  animate();
}

// ─── Stat Counter Animation ───────────────────
function animateStatCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    const duration = 1500;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      el.textContent = Math.round(target * eased);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// ─── Init ─────────────────────────────────────
// ─── Settings Panel & Theme System ─────────────
function toggleSettings() {
  const panel = document.getElementById('settingsPanel');
  const overlay = document.getElementById('settingsOverlay');
  const isHidden = panel.classList.contains('hidden');
  panel.classList.toggle('hidden', !isHidden);
  overlay.classList.toggle('hidden', !isHidden);
}

function setTheme(name) {
  // Apply theme attribute — 'default' uses data-theme="dark" (no special CSS overrides)
  if (name === 'default') {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = name;
  }

  // Save preference
  safeStorage.setItem('wdys_theme', name);

  // Update body background for the theme
  const bgMap = { default: '#0B1120', black: '#000000', neon: '#0A0A14' };
  document.body.style.background = bgMap[name] || bgMap.default;

  // Update active button in settings
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === name);
  });

  // Update particle colors
  updateParticleColors();
}

function applySavedTheme() {
  const saved = safeStorage.getItem('wdys_theme') || 'default';
  setTheme(saved);
}

document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme before anything else
  applySavedTheme();

  // Apply saved language
  const savedLang = safeStorage.getItem('wdys_lang');
  if (savedLang && TRANSLATIONS[savedLang]) {
    currentLang = savedLang;
    document.documentElement.lang = savedLang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === savedLang));
  }

  // Apply saved question style
  const savedStyle = safeStorage.getItem('wdys_qstyle');
  if (savedStyle === 'broad' || savedStyle === 'specific') {
    questionStyle = savedStyle;
    document.querySelectorAll('[data-qstyle]').forEach(b => b.classList.toggle('active', b.dataset.qstyle === savedStyle));
  }

  applyTranslations();

  // Init global particle background
  initParticles();

  // Check mute state
  if (!soundEnabled) {
    document.querySelectorAll('.mute-btn').forEach(btn => btn.classList.add('muted'));
  }

  // Check if URL has compare hash
  if (window.location.hash.startsWith('#compare=')) {
    // Show a notice on landing
    const hero = document.querySelector('.hero');
    const notice = document.createElement('div');
    notice.style.cssText = 'background:rgba(20,184,166,0.15);border:1px solid rgba(20,184,166,0.3);border-radius:12px;padding:12px 20px;margin-bottom:16px;font-size:0.9rem;color:#14B8A6;text-align:center;';
    notice.textContent = '🔗 A friend challenged you! Take the quiz to compare results.';
    hero.insertBefore(notice, hero.firstChild);
  }
});
