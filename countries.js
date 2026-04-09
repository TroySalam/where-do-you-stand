// Country profiles — normalised 0-100 scores for each axis
// left pole = 0, right pole = 100
// economy:       0 = full State, 100 = full Market
// society:       0 = full Progress, 100 = full Tradition
// governance:    0 = full Liberty, 100 = full Authority
// universality:  0 = full Internationalism, 100 = full Nationalism
// environment:   0 = full Ecology, 100 = full Productivism
//
// Expansion sub-scores (0 = expansionist, 100 = restraint):
//   space:      Cosmic ambition ↔ Earth-focused
//   technology: Tech acceleration ↔ Tech caution
//   bioethics:  Enhancement ↔ Natural limits
//   growth:     Unlimited growth ↔ Sustainable degrowth
//
// Based on composite indices: Heritage Economic Freedom, Human Freedom Index,
// Yale EPI, KOF Globalisation Index, World Values Survey, V-Dem

const COUNTRIES = [
  { code: "SE", name: "Sweden",         flag: "🇸🇪", economy: 28, society: 12, governance: 15, universality: 18, environment: 15, space: 48, technology: 40, bioethics: 55, growth: 60 },
  { code: "DK", name: "Denmark",        flag: "🇩🇰", economy: 25, society: 15, governance: 14, universality: 20, environment: 18, space: 52, technology: 42, bioethics: 58, growth: 62 },
  { code: "NO", name: "Norway",         flag: "🇳🇴", economy: 30, society: 14, governance: 12, universality: 15, environment: 20, space: 50, technology: 38, bioethics: 52, growth: 58 },
  { code: "FI", name: "Finland",        flag: "🇫🇮", economy: 27, society: 16, governance: 10, universality: 22, environment: 16, space: 42, technology: 32, bioethics: 48, growth: 50 },
  { code: "NL", name: "Netherlands",    flag: "🇳🇱", economy: 35, society: 18, governance: 16, universality: 15, environment: 22, space: 45, technology: 35, bioethics: 50, growth: 52 },
  { code: "DE", name: "Germany",        flag: "🇩🇪", economy: 35, society: 25, governance: 22, universality: 20, environment: 20, space: 45, technology: 38, bioethics: 55, growth: 52 },
  { code: "FR", name: "France",         flag: "🇫🇷", economy: 32, society: 28, governance: 35, universality: 25, environment: 25, space: 32, technology: 35, bioethics: 45, growth: 42 },
  { code: "CA", name: "Canada",         flag: "🇨🇦", economy: 38, society: 22, governance: 18, universality: 18, environment: 30, space: 42, technology: 38, bioethics: 52, growth: 50 },
  { code: "NZ", name: "New Zealand",    flag: "🇳🇿", economy: 42, society: 20, governance: 15, universality: 22, environment: 22, space: 55, technology: 50, bioethics: 62, growth: 65 },
  { code: "AU", name: "Australia",      flag: "🇦🇺", economy: 42, society: 30, governance: 25, universality: 32, environment: 35, space: 42, technology: 38, bioethics: 50, growth: 52 },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧", economy: 45, society: 30, governance: 30, universality: 35, environment: 28, space: 35, technology: 32, bioethics: 48, growth: 45 },
  { code: "IE", name: "Ireland",        flag: "🇮🇪", economy: 50, society: 28, governance: 18, universality: 20, environment: 30, space: 38, technology: 30, bioethics: 42, growth: 42 },
  { code: "PT", name: "Portugal",       flag: "🇵🇹", economy: 35, society: 22, governance: 22, universality: 25, environment: 28, space: 55, technology: 48, bioethics: 60, growth: 62 },
  { code: "ES", name: "Spain",          flag: "🇪🇸", economy: 38, society: 25, governance: 25, universality: 22, environment: 25, space: 50, technology: 45, bioethics: 58, growth: 60 },
  { code: "IT", name: "Italy",          flag: "🇮🇹", economy: 40, society: 40, governance: 35, universality: 38, environment: 35, space: 48, technology: 42, bioethics: 55, growth: 55 },
  { code: "JP", name: "Japan",          flag: "🇯🇵", economy: 48, society: 55, governance: 30, universality: 55, environment: 30, space: 22, technology: 20, bioethics: 38, growth: 35 },
  { code: "KR", name: "South Korea",    flag: "🇰🇷", economy: 50, society: 45, governance: 28, universality: 42, environment: 35, space: 22, technology: 18, bioethics: 35, growth: 32 },
  { code: "US", name: "United States",  flag: "🇺🇸", economy: 62, society: 42, governance: 35, universality: 52, environment: 55, space: 15, technology: 12, bioethics: 25, growth: 18 },
  { code: "CH", name: "Switzerland",    flag: "🇨🇭", economy: 55, society: 30, governance: 12, universality: 35, environment: 18, space: 40, technology: 32, bioethics: 48, growth: 50 },
  { code: "SG", name: "Singapore",      flag: "🇸🇬", economy: 72, society: 60, governance: 62, universality: 40, environment: 50, space: 20, technology: 18, bioethics: 32, growth: 28 },
  { code: "IL", name: "Israel",         flag: "🇮🇱", economy: 52, society: 45, governance: 40, universality: 55, environment: 38, space: 18, technology: 15, bioethics: 30, growth: 25 },
  { code: "PL", name: "Poland",         flag: "🇵🇱", economy: 48, society: 58, governance: 38, universality: 52, environment: 42, space: 48, technology: 42, bioethics: 55, growth: 55 },
  { code: "HU", name: "Hungary",        flag: "🇭🇺", economy: 45, society: 62, governance: 55, universality: 65, environment: 48, space: 55, technology: 50, bioethics: 60, growth: 62 },
  { code: "BR", name: "Brazil",         flag: "🇧🇷", economy: 50, society: 48, governance: 42, universality: 45, environment: 55, space: 48, technology: 42, bioethics: 55, growth: 55 },
  { code: "MX", name: "Mexico",         flag: "🇲🇽", economy: 48, society: 50, governance: 45, universality: 42, environment: 52, space: 55, technology: 48, bioethics: 60, growth: 62 },
  { code: "AR", name: "Argentina",      flag: "🇦🇷", economy: 35, society: 35, governance: 35, universality: 35, environment: 48, space: 52, technology: 45, bioethics: 58, growth: 58 },
  { code: "CL", name: "Chile",          flag: "🇨🇱", economy: 58, society: 38, governance: 28, universality: 35, environment: 42, space: 45, technology: 40, bioethics: 52, growth: 55 },
  { code: "CO", name: "Colombia",       flag: "🇨🇴", economy: 50, society: 48, governance: 40, universality: 38, environment: 50, space: 55, technology: 48, bioethics: 60, growth: 62 },
  { code: "IN", name: "India",          flag: "🇮🇳", economy: 48, society: 62, governance: 50, universality: 60, environment: 60, space: 20, technology: 22, bioethics: 35, growth: 30 },
  { code: "ZA", name: "South Africa",   flag: "🇿🇦", economy: 45, society: 45, governance: 35, universality: 40, environment: 55, space: 52, technology: 45, bioethics: 58, growth: 58 },
  { code: "TR", name: "Turkey",         flag: "🇹🇷", economy: 50, society: 65, governance: 60, universality: 62, environment: 55, space: 42, technology: 40, bioethics: 55, growth: 52 },
  { code: "RU", name: "Russia",         flag: "🇷🇺", economy: 48, society: 68, governance: 75, universality: 72, environment: 65, space: 18, technology: 22, bioethics: 35, growth: 25 },
  { code: "CN", name: "China",          flag: "🇨🇳", economy: 38, society: 60, governance: 85, universality: 65, environment: 55, space: 10, technology: 12, bioethics: 22, growth: 15 },
  { code: "EG", name: "Egypt",          flag: "🇪🇬", economy: 50, society: 75, governance: 72, universality: 60, environment: 62, space: 58, technology: 52, bioethics: 62, growth: 62 },
  { code: "SA", name: "Saudi Arabia",   flag: "🇸🇦", economy: 55, society: 82, governance: 80, universality: 65, environment: 72, space: 28, technology: 25, bioethics: 40, growth: 35 },
  { code: "AE", name: "UAE",            flag: "🇦🇪", economy: 68, society: 72, governance: 70, universality: 50, environment: 60, space: 18, technology: 15, bioethics: 30, growth: 22 },
  { code: "ID", name: "Indonesia",      flag: "🇮🇩", economy: 52, society: 65, governance: 45, universality: 55, environment: 58, space: 52, technology: 45, bioethics: 58, growth: 58 },
  { code: "PH", name: "Philippines",    flag: "🇵🇭", economy: 55, society: 55, governance: 48, universality: 48, environment: 55, space: 58, technology: 50, bioethics: 62, growth: 62 },
  { code: "NG", name: "Nigeria",        flag: "🇳🇬", economy: 52, society: 72, governance: 55, universality: 58, environment: 65, space: 55, technology: 52, bioethics: 62, growth: 65 },
  { code: "TH", name: "Thailand",       flag: "🇹🇭", economy: 50, society: 55, governance: 52, universality: 50, environment: 50, space: 52, technology: 45, bioethics: 58, growth: 55 },
  { code: "VN", name: "Vietnam",        flag: "🇻🇳", economy: 40, society: 52, governance: 72, universality: 48, environment: 58, space: 38, technology: 35, bioethics: 48, growth: 48 },
  { code: "CU", name: "Cuba",           flag: "🇨🇺", economy: 12, society: 35, governance: 78, universality: 55, environment: 42, space: 68, technology: 62, bioethics: 72, growth: 70 },
  { code: "BO", name: "Bolivia",        flag: "🇧🇴", economy: 25, society: 42, governance: 45, universality: 40, environment: 38, space: 65, technology: 58, bioethics: 70, growth: 72 },
  { code: "UY", name: "Uruguay",        flag: "🇺🇾", economy: 40, society: 18, governance: 15, universality: 25, environment: 30, space: 52, technology: 45, bioethics: 58, growth: 58 },
  { code: "CR", name: "Costa Rica",     flag: "🇨🇷", economy: 42, society: 28, governance: 18, universality: 25, environment: 15, space: 60, technology: 52, bioethics: 65, growth: 65 },
  { code: "IS", name: "Iceland",        flag: "🇮🇸", economy: 30, society: 10, governance: 10, universality: 15, environment: 12, space: 55, technology: 48, bioethics: 60, growth: 62 },
  { code: "EE", name: "Estonia",        flag: "🇪🇪", economy: 55, society: 25, governance: 15, universality: 28, environment: 28, space: 28, technology: 22, bioethics: 38, growth: 38 },
  { code: "TW", name: "Taiwan",         flag: "🇹🇼", economy: 52, society: 22, governance: 18, universality: 35, environment: 30, space: 20, technology: 18, bioethics: 32, growth: 28 },
];

// Historical / political figures with profiles
const FIGURES = [
  { name: "Nelson Mandela",      economy: 30, society: 15, governance: 18, universality: 15, environment: 35, space: 55, technology: 48, bioethics: 58, growth: 55 },
  { name: "Margaret Thatcher",   economy: 80, society: 60, governance: 55, universality: 55, environment: 65, space: 30, technology: 28, bioethics: 38, growth: 32 },
  { name: "Angela Merkel",       economy: 42, society: 28, governance: 22, universality: 18, environment: 22, space: 45, technology: 40, bioethics: 52, growth: 55 },
  { name: "Bernie Sanders",      economy: 15, society: 10, governance: 15, universality: 20, environment: 12, space: 60, technology: 55, bioethics: 65, growth: 62 },
  { name: "Ronald Reagan",       economy: 78, society: 62, governance: 48, universality: 52, environment: 70, space: 15, technology: 20, bioethics: 30, growth: 22 },
  { name: "Jacinda Ardern",      economy: 28, society: 12, governance: 15, universality: 18, environment: 15, space: 58, technology: 50, bioethics: 62, growth: 65 },
  { name: "Emmanuel Macron",     economy: 45, society: 22, governance: 32, universality: 15, environment: 25, space: 28, technology: 25, bioethics: 40, growth: 35 },
  { name: "Barack Obama",        economy: 35, society: 18, governance: 28, universality: 20, environment: 25, space: 32, technology: 30, bioethics: 45, growth: 42 },
  { name: "Donald Trump",        economy: 65, society: 65, governance: 55, universality: 78, environment: 75, space: 22, technology: 25, bioethics: 35, growth: 25 },
  { name: "Alexandria Ocasio-Cortez", economy: 12, society: 8, governance: 12, universality: 12, environment: 8, space: 62, technology: 55, bioethics: 68, growth: 68 },
  { name: "Narendra Modi",       economy: 55, society: 68, governance: 58, universality: 72, environment: 55, space: 18, technology: 18, bioethics: 30, growth: 22 },
  { name: "Justin Trudeau",      economy: 32, society: 15, governance: 22, universality: 15, environment: 20, space: 42, technology: 38, bioethics: 52, growth: 50 },
  { name: "Vladimir Putin",      economy: 48, society: 72, governance: 82, universality: 78, environment: 65, space: 22, technology: 25, bioethics: 38, growth: 30 },
  { name: "Greta Thunberg",      economy: 20, society: 10, governance: 15, universality: 12, environment: 2, space: 82, technology: 72, bioethics: 80, growth: 88 },
  { name: "Jordan Peterson",     economy: 58, society: 62, governance: 22, universality: 48, environment: 50, space: 30, technology: 25, bioethics: 38, growth: 35 },
  { name: "Noam Chomsky",        economy: 10, society: 8,  governance: 8,  universality: 8,  environment: 10, space: 68, technology: 62, bioethics: 72, growth: 72 },
  { name: "Ayn Rand",            economy: 92, society: 35, governance: 5,  universality: 42, environment: 80, space: 10, technology: 8, bioethics: 15, growth: 12 },
  { name: "Martin Luther King Jr.", economy: 22, society: 10, governance: 15, universality: 10, environment: 30, space: 48, technology: 42, bioethics: 52, growth: 52 },
  { name: "Pope Francis",        economy: 22, society: 55, governance: 38, universality: 18, environment: 15, space: 70, technology: 65, bioethics: 75, growth: 72 },
  { name: "Elon Musk",           economy: 78, society: 35, governance: 22, universality: 40, environment: 72, space: 2, technology: 2, bioethics: 8, growth: 3 },
];

// Political type labels based on combined scores
const POLITICAL_TYPES = [
  { label: "Social Democrat",     condition: (s) => s.economy < 35 && s.society < 35 && s.governance < 40 },
  { label: "Democratic Socialist", condition: (s) => s.economy < 25 && s.governance < 35 },
  { label: "Progressive Liberal",  condition: (s) => s.economy >= 35 && s.economy < 55 && s.society < 30 && s.governance < 35 },
  { label: "Green Activist",       condition: (s) => s.environment < 25 && s.society < 35 },
  { label: "Classical Liberal",    condition: (s) => s.economy >= 55 && s.governance < 30 && s.society < 45 },
  { label: "Libertarian",         condition: (s) => s.governance < 20 && s.economy >= 55 },
  { label: "Conservative",        condition: (s) => s.society >= 55 && s.economy >= 50 && s.governance >= 35 },
  { label: "Social Conservative",  condition: (s) => s.society >= 55 && s.economy < 50 },
  { label: "Authoritarian",       condition: (s) => s.governance >= 60 },
  { label: "Nationalist",         condition: (s) => s.universality >= 60 && s.society >= 50 },
  { label: "Internationalist",    condition: (s) => s.universality < 25 && s.society < 35 },
  { label: "Centrist",            condition: (s) => s.economy >= 35 && s.economy <= 65 && s.society >= 30 && s.society <= 60 && s.governance >= 25 && s.governance <= 55 },
  { label: "Egalitarian",         condition: (s) => s.economy < 35 && s.society < 30 && s.universality < 30 },
  { label: "Communitarian",       condition: (s) => s.economy < 40 && s.society >= 45 && s.universality >= 45 },
  { label: "Techno-Expansionist",  condition: (s) => s.expansion < 25 && s.economy >= 45 },
  { label: "Sustainability Advocate", condition: (s) => s.expansion >= 65 && s.environment < 35 },
  { label: "Pragmatist",          condition: () => true } // fallback
];
