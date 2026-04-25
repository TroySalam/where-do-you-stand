// ============================================================
// 54 QUESTIONS — 9 per dimension, Likert 1-5 scale
// Each question is a statement. The user rates 1 (Strongly disagree) to 5 (Strongly agree).
// "direction" tells us which end "agree" maps to:
//   axis: which of the 5 axes this belongs to
//   pole: "left" means agreeing pushes toward the LEFT pole, "right" toward the RIGHT pole
//
// Axes (left pole ↔ right pole):
//   economy:       Left ↔ Right
//   society:       Progressive ↔ Traditional
//   governance:    Liberty ↔ Authority
//   universality:  Globalism ↔ Nationalism
//   environment:   Ecology ↔ Growth
//   expansion:     Expand ↔ Stay the Same
//
// Rules: ONE issue per question. No bundled tradeoffs. Neutral framing.
// ============================================================

const QUESTIONS = [

  // ── ECONOMY (9 questions) ──────────────────────────────────
  {
    text: "The government should put a cap on how much landlords can charge for rent.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Healthcare should be free for everyone, paid for by taxes.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Business owners should decide their employees' wages, not the government.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "It should be easier to start a business, with fewer permits and rules.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "Things like water, electricity, and trains should be owned by the government, not private companies.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "The government should give every adult a basic monthly income, no questions asked.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Lower taxes on companies help everyone by creating jobs.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "Free trade between countries is better than putting taxes on imports.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "Banks and financial companies need strict rules to stop them from causing crises.",
    axis: "economy",
    pole: "left"
  },

  // ── SOCIETY (9 questions) ──────────────────────────────────
  {
    text: "Two adults of any gender should be allowed to marry.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Schools should teach kids about different family types and lifestyles.",
    axis: "society",
    pole: "left"
  },
  {
    text: "The government should support traditional family values.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Religion should have a say in laws about morality.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Adults should be free to use recreational drugs if they want to.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Women should have the right to choose abortion without government restrictions.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Public schools should set aside time for prayer.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Public policy should be based on science, not on religious teachings.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Schools should focus on teaching national customs and traditions.",
    axis: "society",
    pole: "right"
  },

  // ── GOVERNANCE (9 questions) ────────────────────────────────
  {
    text: "The government can read private messages if it keeps people safe.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "People should be free to say things others find offensive.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "Big national rules work better than letting each town or region decide.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Police should be able to stop and search anyone in high-crime areas.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Ordinary people should have the right to own guns.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "Whistleblowers who reveal government secrets should be protected, not punished.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "The government should decide what counts as misinformation on social media.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Young adults should be required to do a year of military or national service.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "People have the right to use messaging apps the government can't read.",
    axis: "governance",
    pole: "left"
  },

  // ── UNIVERSALITY (9 questions) ──────────────────────────────
  {
    text: "Our country's laws should always come before any international treaty.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "People should be free to live and work in any country they choose.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "International courts should be able to overrule our national laws on human rights.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "Our country should cut foreign aid and spend the money at home.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "A country is stronger when it has people from many different cultures.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "Our country should accept far fewer immigrants than it does today.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Countries that don't meet climate targets should face international penalties.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "Schools should focus on teaching pride in our nation's history and identity.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Wealthy countries have a duty to take in refugees fleeing war or persecution.",
    axis: "universality",
    pole: "left"
  },

  // ── ENVIRONMENT (9 questions) ───────────────────────────────
  {
    text: "Petrol and diesel cars should be banned within the next 10 years.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Forests should be protected even if it means losing logging jobs.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "If an environmental rule costs jobs, it's not worth it.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "Single-use plastics like straws and bags should be banned.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Poor countries should be free to use coal and oil to grow their economies.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "There should be a tax on carbon to make polluters pay.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "There should be a tax on meat to reduce its impact on the environment.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "New technology will solve climate change without big lifestyle changes.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "Mining and drilling should not be allowed in protected wildlife habitats.",
    axis: "environment",
    pole: "left"
  },

  // ── EXPANSION (9 questions, sub-categorised) ─────────────────────────
  // sub: "space" | "technology" | "bioethics" | "growth"
  // The 5th pentagon corner ("Expansion") is the average of these four.
  {
    text: "The government should spend big on space exploration.",
    axis: "expansion",
    sub: "space",
    pole: "left"
  },
  {
    text: "We should focus on problems on Earth before spending money on space.",
    axis: "expansion",
    sub: "space",
    pole: "right"
  },
  {
    text: "Artificial intelligence should be allowed to develop quickly, without strict rules.",
    axis: "expansion",
    sub: "technology",
    pole: "left"
  },
  {
    text: "AI should be banned from making important decisions about people's lives.",
    axis: "expansion",
    sub: "technology",
    pole: "right"
  },
  {
    text: "Editing human genes to prevent diseases is a good thing.",
    axis: "expansion",
    sub: "bioethics",
    pole: "left"
  },
  {
    text: "There are natural limits to the human body that we shouldn't try to cross.",
    axis: "expansion",
    sub: "bioethics",
    pole: "right"
  },
  {
    text: "Scientists should try big climate engineering projects to cool the planet.",
    axis: "expansion",
    sub: "growth",
    pole: "left"
  },
  {
    text: "Endless economic growth is impossible — we need to set limits.",
    axis: "expansion",
    sub: "growth",
    pole: "right"
  },
  {
    text: "Building a human settlement on Mars should be a top priority for humanity.",
    axis: "expansion",
    sub: "space",
    pole: "left"
  }
];
