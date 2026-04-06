// ============================================================
// 54 QUESTIONS — 9 per dimension, Likert 1-5 scale
// Each question is a statement. The user rates 1 (Strongly disagree) to 5 (Strongly agree).
// "direction" tells us which end "agree" maps to:
//   axis: which of the 5 axes this belongs to
//   pole: "left" means agreeing pushes toward the LEFT pole, "right" toward the RIGHT pole
//
// Axes (left pole ↔ right pole):
//   economy:       State ↔ Market
//   society:       Progress ↔ Tradition
//   governance:    Liberty ↔ Authority
//   universality:  Internationalism ↔ Nationalism
//   environment:   Ecology ↔ Productivism
//   expansion:     Expansionism ↔ Restraint
// ============================================================

const QUESTIONS = [

  // ── ECONOMY (9 questions) ──────────────────────────────────
  {
    text: "A high level of taxation is acceptable to guarantee extensive public services.",
    axis: "economy",
    pole: "left" // agree → State
  },
  {
    text: "Public spending should remain high to guarantee essential services like health and education.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "An economy works best when the state intervenes as little as possible.",
    axis: "economy",
    pole: "right" // agree → Market
  },
  {
    text: "Regulations and procedures should be greatly simplified to start a business.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "Essential industries like water, electricity, and transport should be publicly owned.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "A universal basic income funded by the government would benefit society.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "The minimum wage should be raised significantly, even if some small businesses struggle.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Lower taxes on corporations attract investment and benefit everyone in the long run.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "Free trade between nations is more important than protecting local industries.",
    axis: "economy",
    pole: "right"
  },

  // ── SOCIETY (9 questions) ──────────────────────────────────
  {
    text: "Same-sex couples should have the same legal rights as heterosexual couples, including marriage and adoption.",
    axis: "society",
    pole: "left" // agree → Progress
  },
  {
    text: "Schools should teach children about diverse family structures and gender identities.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Traditional family values are the foundation of a stable society.",
    axis: "society",
    pole: "right" // agree → Tradition
  },
  {
    text: "Religious institutions should play a greater role in shaping public policy.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Cannabis should be fully legalised and regulated like alcohol.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Society has changed too fast and we need to preserve our cultural heritage.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Abortion should be freely accessible as a fundamental right.",
    axis: "society",
    pole: "left"
  },
  {
    text: "A society works best when people share a common set of cultural norms and values.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Scientific evidence should always take priority over religious or traditional beliefs in public policy.",
    axis: "society",
    pole: "left"
  },

  // ── GOVERNANCE (9 questions) ────────────────────────────────
  {
    text: "Mass surveillance is justified if it keeps citizens safe from terrorism.",
    axis: "governance",
    pole: "right" // agree → Authority
  },
  {
    text: "Freedom of speech should be absolute, even for views that most people find offensive.",
    axis: "governance",
    pole: "left" // agree → Liberty
  },
  {
    text: "A strong central government is more effective than decentralised local governance.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "The police should have broader powers to maintain public order.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Citizens should be able to own firearms with minimal restrictions.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "Whistleblowers who expose government wrongdoing should be protected, not prosecuted.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "Governments should be able to restrict social media content to prevent misinformation.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Mandatory national service (military or civil) builds a stronger nation.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Privacy is a fundamental right that should not be compromised for national security.",
    axis: "governance",
    pole: "left"
  },

  // ── UNIVERSALITY (9 questions) ──────────────────────────────
  {
    text: "My country should prioritise its own interests over international cooperation.",
    axis: "universality",
    pole: "right" // agree → Nationalism
  },
  {
    text: "Open borders and free movement of people between nations would benefit everyone.",
    axis: "universality",
    pole: "left" // agree → Internationalism
  },
  {
    text: "International organisations like the UN play an essential role in maintaining peace.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "Foreign aid budgets should be cut and the money spent on domestic problems first.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Cultural diversity from immigration enriches a society.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "A country has the right to strictly limit immigration to protect its culture and jobs.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Global challenges like climate change require nations to give up some sovereignty.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "National identity and patriotism are important values that should be encouraged.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Trade agreements that benefit poorer countries should be supported even if they cost us something.",
    axis: "universality",
    pole: "left"
  },

  // ── ENVIRONMENT (9 questions) ───────────────────────────────
  {
    text: "Economic growth should never come at the expense of the environment.",
    axis: "environment",
    pole: "left" // agree → Ecology
  },
  {
    text: "Nuclear energy is a necessary part of the transition away from fossil fuels.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Environmental regulations place too heavy a burden on businesses and slow economic growth.",
    axis: "environment",
    pole: "right" // agree → Productivism
  },
  {
    text: "Governments should ban single-use plastics even if it inconveniences consumers.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Developing nations should be free to industrialise without strict environmental rules.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "A carbon tax is the most effective way to reduce emissions.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Animal agriculture should be heavily regulated or reduced to fight climate change.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Technological innovation will solve environmental problems without major lifestyle changes.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "Protecting endangered species should take priority over local economic interests.",
    axis: "environment",
    pole: "left"
  },

  // ── EXPANSION (9 questions, sub-categorised) ─────────────────────────
  // sub: "space" | "technology" | "bioethics" | "growth"
  // The 5th pentagon corner ("Expansion") is the average of these four.
  {
    text: "Humanity should prioritise becoming a multi-planetary species within this century.",
    axis: "expansion",
    sub: "space",
    pole: "left" // agree → Expansionism
  },
  {
    text: "We should fix the problems on Earth before spending resources on space colonisation.",
    axis: "expansion",
    sub: "space",
    pole: "right" // agree → Restraint
  },
  {
    text: "Developing artificial general intelligence is one of the most important goals of our time.",
    axis: "expansion",
    sub: "technology",
    pole: "left"
  },
  {
    text: "There should be strict limits on how fast AI systems are allowed to advance.",
    axis: "expansion",
    sub: "technology",
    pole: "right"
  },
  {
    text: "Human genetic enhancement and life extension research should be aggressively funded.",
    axis: "expansion",
    sub: "bioethics",
    pole: "left"
  },
  {
    text: "Pursuing endless economic and technological growth is unsustainable and dangerous.",
    axis: "expansion",
    sub: "growth",
    pole: "right"
  },
  {
    text: "Large-scale geoengineering projects are a reasonable response to climate change.",
    axis: "expansion",
    sub: "growth",
    pole: "left"
  },
  {
    text: "Societies should focus on living within natural limits rather than engineering their way out.",
    axis: "expansion",
    sub: "bioethics",
    pole: "right"
  },
  {
    text: "The long-term survival of the human species depends on expanding beyond Earth.",
    axis: "expansion",
    sub: "space",
    pole: "left"
  }
];
