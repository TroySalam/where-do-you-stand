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
//
// Rules: ONE issue per question. No bundled tradeoffs. Neutral framing.
// ============================================================

const QUESTIONS = [

  // ── ECONOMY (9 questions) ──────────────────────────────────
  {
    text: "The government should set a maximum limit on how much rent landlords can charge.",
    axis: "economy",
    pole: "left" // agree → State
  },
  {
    text: "Public hospitals should be fully funded through taxes so patients pay nothing at the point of care.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "A business owner should be free to set their own employee wages without a government-mandated minimum.",
    axis: "economy",
    pole: "right" // agree → Market
  },
  {
    text: "Opening a new business should require no government permits — just register online and start trading.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "The national electricity grid should be owned and operated by the government rather than private companies.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Every adult citizen should receive a guaranteed basic income from the government, whether or not they work.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Companies perform better and create more jobs when the government taxes them less.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "International trade works best when countries can import and export goods without tariffs.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "Banks and financial institutions should face stricter government regulations than they currently do.",
    axis: "economy",
    pole: "left"
  },

  // ── SOCIETY (9 questions) ──────────────────────────────────
  {
    text: "Marriage should be legally available to any two consenting adults, regardless of gender.",
    axis: "society",
    pole: "left" // agree → Progress
  },
  {
    text: "Public schools should teach students about different family structures and relationship types.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Government policy should actively encourage the traditional two-parent family structure.",
    axis: "society",
    pole: "right" // agree → Tradition
  },
  {
    text: "Religious institutions should have a formal role in advising the government on laws about ethics.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Adults should be free to purchase and use cannabis from licensed sellers.",
    axis: "society",
    pole: "left"
  },
  {
    text: "A woman should be able to access an abortion in the early stages of pregnancy without restrictions.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Public schools should begin each day with a moment of silent reflection or prayer.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Scientific research should take priority over religious teachings when setting public health policy.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Schools should dedicate regular time to teaching students traditional national customs and cultural practices.",
    axis: "society",
    pole: "right"
  },

  // ── GOVERNANCE (9 questions) ────────────────────────────────
  {
    text: "Intelligence agencies should be able to monitor private communications without a court warrant if national security is at risk.",
    axis: "governance",
    pole: "right" // agree → Authority
  },
  {
    text: "People should never be fined or imprisoned for expressing an opinion, no matter how offensive it is.",
    axis: "governance",
    pole: "left" // agree → Liberty
  },
  {
    text: "Major policy decisions on health and education should be made by the national government, not by local councils.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Police should be allowed to stop and search anyone in a high-crime area without needing a specific reason.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Any adult without a criminal record should be allowed to own a firearm without needing a special licence.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "A government employee who leaks secret documents exposing illegal government activity should be protected from prosecution.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "Social media companies should be legally required to remove content that the government classifies as misinformation.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Every citizen aged 18 to 25 should be required to complete one year of military or national service.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Police should never be given access to encrypted private messages, not even with a court order.",
    axis: "governance",
    pole: "left"
  },

  // ── UNIVERSALITY (9 questions) ──────────────────────────────
  {
    text: "A country should be free to withdraw from any international agreement that limits how it makes its own laws.",
    axis: "universality",
    pole: "right" // agree → Nationalism
  },
  {
    text: "People should be free to move to and work in any country they choose without needing a visa.",
    axis: "universality",
    pole: "left" // agree → Internationalism
  },
  {
    text: "An international body should have the power to override a country's laws if they violate basic human rights.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "A country's foreign aid budget should be reduced and that money spent on domestic needs instead.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "A society with people from many different cultural backgrounds is stronger than a culturally uniform one.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "The government should set a strict annual cap on how many immigrants the country accepts.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Countries that break international climate agreements should face automatic trade penalties.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "Schools should be required to teach students the national anthem and key moments in national history.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Wealthy nations have a moral obligation to accept a minimum number of refugees each year.",
    axis: "universality",
    pole: "left"
  },

  // ── ENVIRONMENT (9 questions) ───────────────────────────────
  {
    text: "The sale of new petrol and diesel cars should be phased out by 2035.",
    axis: "environment",
    pole: "left" // agree → Ecology
  },
  {
    text: "Old-growth forests should be permanently protected from logging, regardless of the economic value of the timber.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Environmental regulations that are proven to cost a large number of jobs should be reconsidered.",
    axis: "environment",
    pole: "right" // agree → Productivism
  },
  {
    text: "Single-use plastics like bags and straws should be banned by law.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "A developing country should be allowed to use fossil fuels for energy if it cannot yet afford renewable alternatives.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "A tax on carbon emissions is an effective way to reduce pollution.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Meat products should carry a higher tax to reflect their environmental footprint.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Advances in technology will eventually solve most environmental problems without the need for strict regulations today.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "A mining project that would destroy a rare natural habitat should be blocked, regardless of its economic value.",
    axis: "environment",
    pole: "left"
  },

  // ── EXPANSION (9 questions, sub-categorised) ─────────────────────────
  // sub: "space" | "technology" | "bioethics" | "growth"
  // The 5th pentagon corner ("Expansion") is the average of these four.
  {
    text: "Governments should dedicate a significant portion of their budget to space exploration programs.",
    axis: "expansion",
    sub: "space",
    pole: "left" // agree → Expansionism
  },
  {
    text: "Money spent on space exploration would be better used solving problems here on Earth.",
    axis: "expansion",
    sub: "space",
    pole: "right" // agree → Restraint
  },
  {
    text: "A private company should be free to develop an AI system more intelligent than any human without needing government approval.",
    axis: "expansion",
    sub: "technology",
    pole: "left"
  },
  {
    text: "AI systems that make decisions about people's lives (hiring, loans, sentencing) should be banned until proven safe.",
    axis: "expansion",
    sub: "technology",
    pole: "right"
  },
  {
    text: "Parents should be allowed to use genetic editing to remove hereditary diseases from their unborn children.",
    axis: "expansion",
    sub: "bioethics",
    pole: "left"
  },
  {
    text: "There are natural limits to human lifespan and capability that we should accept rather than try to engineer past.",
    axis: "expansion",
    sub: "bioethics",
    pole: "right"
  },
  {
    text: "Scientists should begin large-scale climate engineering projects like reflecting sunlight to cool the planet.",
    axis: "expansion",
    sub: "growth",
    pole: "left"
  },
  {
    text: "There should be a legal limit on how fast a country's economy can grow each year to prevent overconsumption.",
    axis: "expansion",
    sub: "growth",
    pole: "right"
  },
  {
    text: "Establishing a permanent human settlement on Mars should be a top international priority.",
    axis: "expansion",
    sub: "space",
    pole: "left"
  }
];
