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

// ============================================================
// 54 BROAD QUESTIONS — values-based versions of the above
// Same order, axis, pole, and sub as QUESTIONS. Index N here
// maps to index N in QUESTIONS. Used when the user picks the
// "Broad" question style in settings.
// ============================================================

const QUESTIONS_BROAD = [

  // ── ECONOMY (9 questions) ──────────────────────────────────
  {
    text: "The government should control prices when it helps ordinary people afford essentials.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Healthcare should be a guaranteed right, not something you buy.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Businesses run better when the government stays out of their decisions.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "People should be free to start and run businesses with as little red tape as possible.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "Essential services that everyone depends on are better run by the public than left to private profit.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Society should make sure everyone has a basic income to live on, whether or not they work.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "A society grows stronger when the government takes less from businesses and individuals in taxes.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "Open, free trade between countries benefits everyone in the long run.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "Powerful industries like finance need strong government oversight to protect ordinary people.",
    axis: "economy",
    pole: "left"
  },

  // ── SOCIETY (9 questions) ──────────────────────────────────
  {
    text: "Society works better when people are free to live how they want.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Children should be taught to understand and respect many different ways of living.",
    axis: "society",
    pole: "left"
  },
  {
    text: "The traditional family is the foundation of a healthy society and should be protected.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Traditional values and religion should shape public life.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Adults should be free to make their own choices about what they put into their own bodies.",
    axis: "society",
    pole: "left"
  },
  {
    text: "People should have control over their own bodies and personal life decisions.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Religion has a positive role to play in public institutions like schools.",
    axis: "society",
    pole: "right"
  },
  {
    text: "When science and tradition disagree, society should generally follow the science.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Preserving our cultural heritage and customs should be a priority for the next generation.",
    axis: "society",
    pole: "right"
  },

  // ── GOVERNANCE (9 questions) ────────────────────────────────
  {
    text: "Keeping the country safe is more important than personal privacy.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Free speech must be protected even when what people say is offensive or wrong.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "Big decisions that affect the whole country are best made by strong central leadership.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Police should have broad powers to keep order, even if it means fewer individual freedoms.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Ordinary people should be trusted to handle things the state usually controls, like owning weapons.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "People who expose government wrongdoing are doing the public a service, not committing a crime.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "The government has a duty to control harmful or misleading information in public life.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Citizens have a duty to serve their country, even if it means giving up some personal freedom.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Privacy is a fundamental right the state should never be allowed to break, no matter the reason.",
    axis: "governance",
    pole: "left"
  },

  // ── UNIVERSALITY (9 questions) ──────────────────────────────
  {
    text: "A nation should always put its own sovereignty above international rules and agreements.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Borders should be open — people should be free to live where they want.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "Some human rights are universal, and the world has a duty to uphold them everywhere.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "A country should take care of its own people first before helping those abroad.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "A nation is stronger when it welcomes people from many different cultures.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "Immigration should be tightly controlled to protect the country's identity and jobs.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Countries should be willing to cooperate — and sacrifice some self-interest — to solve global problems.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "Children should grow up with a strong sense of pride in their nation's history and identity.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Wealthy countries have a moral duty to help people fleeing war and persecution.",
    axis: "universality",
    pole: "left"
  },

  // ── ENVIRONMENT (9 questions) ───────────────────────────────
  {
    text: "Protecting the environment matters more than economic growth.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Nature has value in itself, beyond what we can get out of it economically.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Environmental rules should be balanced against the jobs and livelihoods they affect.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "Society should be willing to ban everyday conveniences that harm the environment.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Poorer countries shouldn't be held to the same environmental standards as rich ones.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "Polluters should pay for the damage their emissions cause.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Everyday choices like what we eat should take the environment into account.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Human ingenuity and technology will solve environmental problems without needing to limit growth.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "Protecting wild nature should come before the profits of any single project.",
    axis: "environment",
    pole: "left"
  },

  // ── EXPANSION (9 questions, sub-categorised) ─────────────────────────
  {
    text: "Exploring beyond Earth is part of humanity's purpose and worth investing in.",
    axis: "expansion",
    sub: "space",
    pole: "left"
  },
  {
    text: "We should focus on problems here on Earth before looking to the stars.",
    axis: "expansion",
    sub: "space",
    pole: "right"
  },
  {
    text: "We should push the boundaries of technology without too many restrictions.",
    axis: "expansion",
    sub: "technology",
    pole: "left"
  },
  {
    text: "Powerful new technologies should be held back until we're sure they're safe.",
    axis: "expansion",
    sub: "technology",
    pole: "right"
  },
  {
    text: "Humans should use science to improve our biology and overcome natural limits.",
    axis: "expansion",
    sub: "bioethics",
    pole: "left"
  },
  {
    text: "There are natural limits we shouldn't try to cross, even if we could.",
    axis: "expansion",
    sub: "bioethics",
    pole: "right"
  },
  {
    text: "Humanity should be bold about using technology to reshape the planet if it helps us.",
    axis: "expansion",
    sub: "growth",
    pole: "left"
  },
  {
    text: "Endless economic growth isn't sustainable — we need to learn to live with less.",
    axis: "expansion",
    sub: "growth",
    pole: "right"
  },
  {
    text: "Becoming a spacefaring species and settling other worlds is a worthy goal for humanity.",
    axis: "expansion",
    sub: "space",
    pole: "left"
  }
];
