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
    text: "Rent control keeps housing affordable better than letting the market decide.",
    axis: "economy",
    pole: "left" // agree → State
  },
  {
    text: "Healthcare works better as a public utility than as a market.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Markets set wages more accurately than politicians do.",
    axis: "economy",
    pole: "right" // agree → Market
  },
  {
    text: "Licensing requirements for new businesses protect incumbents more than they protect the public.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "Natural monopolies like electricity grids should be publicly owned, not privately run.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "A guaranteed basic income is more efficient than the patchwork of welfare programs it would replace.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Lower corporate taxes produce more investment and jobs than the spending they would fund.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "Tariffs protect a small number of jobs at the expense of everyone who buys the goods.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "Financial markets left to self-regulate will periodically blow up and require public bailouts.",
    axis: "economy",
    pole: "left"
  },

  // ── SOCIETY (9 questions) ──────────────────────────────────
  {
    text: "What consenting adults do with each other is not the government's concern.",
    axis: "society",
    pole: "left" // agree → Progress
  },
  {
    text: "Schools should present all family structures factually, without privileging one as the norm.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Stable two-parent families are a better predictor of good outcomes than any government program.",
    axis: "society",
    pole: "right" // agree → Tradition
  },
  {
    text: "Religious communities encode hard-won social knowledge that secular policy often ignores.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Adults should be free to use substances that harm only themselves.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Decisions about pregnancy belong to the person who is pregnant, not to the state.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Shared rituals and civic practices are how societies hold together — schools should reinforce them.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Empirical evidence should determine public health policy, not inherited belief.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Cultural continuity is a real good — it doesn't preserve itself without deliberate effort.",
    axis: "society",
    pole: "right"
  },

  // ── GOVERNANCE (9 questions) ────────────────────────────────
  {
    text: "When safety and privacy conflict, safety wins — this is just math.",
    axis: "governance",
    pole: "right" // agree → Authority
  },
  {
    text: "The cure for bad speech is more speech, not less.",
    axis: "governance",
    pole: "left" // agree → Liberty
  },
  {
    text: "Uniform national standards beat a patchwork of local rules for health and education.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Giving police broad stop-and-search powers in high-crime areas reduces crime more than it harms civil liberties.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "A clean criminal record should be sufficient qualification for firearm ownership.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "Exposing illegal government activity is a public service, not a crime.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "Governments, not platforms, should determine what counts as misinformation online.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Mandatory national service builds civic cohesion that voluntary institutions cannot replicate.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Encryption backdoors make everyone less secure — they cannot be limited to good actors.",
    axis: "governance",
    pole: "left"
  },

  // ── UNIVERSALITY (9 questions) ──────────────────────────────
  {
    text: "A country that cannot exit international agreements has surrendered meaningful sovereignty.",
    axis: "universality",
    pole: "right" // agree → Nationalism
  },
  {
    text: "Nation-states are a fading technology — the future is global citizenship.",
    axis: "universality",
    pole: "left" // agree → Internationalism
  },
  {
    text: "Human rights are universal or they are nothing — external enforcement is the logical consequence.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "A government's primary obligation is to its own citizens.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Diverse societies consistently outperform homogeneous ones on innovation and adaptability.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "Immigration at a rate faster than integration capacity degrades social trust.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Climate change is the kind of problem that only coordinated international enforcement can solve.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "Shared national history and symbols are the foundations of civic identity — schools should teach them.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Rich countries bear a disproportionate responsibility for displacement — accepting refugees is part of the bill.",
    axis: "universality",
    pole: "left"
  },

  // ── ENVIRONMENT (9 questions) ───────────────────────────────
  {
    text: "Climate change is a serious enough problem to justify forcing changes on industry.",
    axis: "environment",
    pole: "left" // agree → Ecology
  },
  {
    text: "Some ecosystems are irreplaceable — their economic value is unknowable and therefore incalculable.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Most environmental problems will be solved by better technology, not by restrictions.",
    axis: "environment",
    pole: "right" // agree → Productivism
  },
  {
    text: "Banning single-use plastics is a concrete and proportionate response to measurable environmental harm.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Demanding poor countries skip fossil fuels is asking them to accept permanent disadvantage.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "Pricing carbon is the most economically honest way to account for pollution costs.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Taxing meat to reflect its environmental cost is no different in principle from taxing petrol.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Restricting today's growth to solve future environmental problems assumes we know more than we do.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "Irreversible ecological destruction is a category of harm that economic compensation cannot undo.",
    axis: "environment",
    pole: "left"
  },

  // ── EXPANSION (9 questions, sub-categorised) ─────────────────────────
  // sub: "space" | "technology" | "bioethics" | "growth"
  // The 5th pentagon corner ("Expansion") is the average of these four.
  {
    text: "Becoming multi-planetary is existential insurance for humanity.",
    axis: "expansion",
    sub: "space",
    pole: "left" // agree → Expansionism
  },
  {
    text: "Space exploration is premature while we have unsolved problems on the surface of this planet.",
    axis: "expansion",
    sub: "space",
    pole: "right" // agree → Restraint
  },
  {
    text: "The risks of slowing artificial intelligence progress are greater than the risks of pushing forward.",
    axis: "expansion",
    sub: "technology",
    pole: "left"
  },
  {
    text: "Artificial intelligence systems making decisions about people's lives should be proven safe before deployment, not after.",
    axis: "expansion",
    sub: "technology",
    pole: "right"
  },
  {
    text: "Editing genes to prevent hereditary disease is no different in principle from vaccination.",
    axis: "expansion",
    sub: "bioethics",
    pole: "left"
  },
  {
    text: "The history of interventions in complex systems should make us cautious about re-engineering human biology.",
    axis: "expansion",
    sub: "bioethics",
    pole: "right"
  },
  {
    text: "Planetary-scale climate engineering is worth the risk if the alternative is runaway warming.",
    axis: "expansion",
    sub: "growth",
    pole: "left"
  },
  {
    text: "Growth isn't the problem — most sustainability concerns will be solved by better engineering.",
    axis: "expansion",
    sub: "growth",
    pole: "right"
  },
  {
    text: "A permanent human presence on Mars is worth prioritising now, not in some distant future.",
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
    text: "Leaving essential prices to the market produces outcomes that are efficient but not acceptable.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Essential services like healthcare should not depend on ability to pay.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Every regulation has a cost — most of them aren't worth it.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "The freedom to start a business without permission is a basic economic right.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "When an industry is a natural monopoly, private ownership extracts rent rather than creating value.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Unconditional basic income is a cleaner solution to poverty than bureaucratic means-testing.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Taxing wealth destroys the incentives that generate it in the first place.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "Comparative advantage is real — protectionism makes everyone poorer in aggregate.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "Industries with systemic risk to the public economy should be regulated in the public interest.",
    axis: "economy",
    pole: "left"
  },

  // ── SOCIETY (9 questions) ──────────────────────────────────
  {
    text: "Personal lifestyle choices that don't harm others are none of the state's business.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Exposure to diverse ways of living makes children more capable adults.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Most social rules exist for reasons — changing them often has costs we don't anticipate.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Secular governance is more stable, but religious traditions carry moral knowledge worth keeping.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Prohibition reliably creates black markets — personal drug use should be decriminalised.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Bodily autonomy is the most basic right — it cannot be overridden by majority preference.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Civic rituals feel arbitrary until they're gone — then you notice what held things together.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Where evidence and tradition conflict, evidence should win.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Culture is a living inheritance — each generation has a duty to pass it on, not just consume it.",
    axis: "society",
    pole: "right"
  },

  // ── GOVERNANCE (9 questions) ────────────────────────────────
  {
    text: "The right to privacy shouldn't be absolute when stakes are catastrophic.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Allowing governments to suppress offensive speech gives them a tool they will inevitably abuse.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "Decentralised decision-making produces better outcomes than central direction, except when it doesn't.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Order is a prerequisite for freedom — without security, rights are theoretical.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "The state should trust citizens with more responsibility, not less.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "Governments that punish leaks are protecting themselves, not the public.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "The state is structurally ill-equipped to adjudicate truth — it shouldn't try.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Shared civic obligation creates something voluntary service cannot — collective skin in the game.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Any surveillance power granted for legitimate use will eventually be used for illegitimate use.",
    axis: "governance",
    pole: "left"
  },

  // ── UNIVERSALITY (9 questions) ──────────────────────────────
  {
    text: "Global institutions without enforcement are theater — real sovereignty stays at the national level.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Borders are an accident of history — they shouldn't determine the ceiling of your life.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "Human rights that only apply when convenient aren't rights — they're preferences.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "Charity starts at home — a government that cannot deliver for its own citizens has no business abroad.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Mixing people from different backgrounds produces better ideas and stronger institutions.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "Rapid demographic change strains the social infrastructure that makes integration possible.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Problems that cross borders require solutions that cross borders.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "Without a shared story, a nation is just people living near each other.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "When people flee persecution, their destination country matters less than finding safety.",
    axis: "universality",
    pole: "left"
  },

  // ── ENVIRONMENT (9 questions) ───────────────────────────────
  {
    text: "Long-term environmental costs matter more than short-term economic gains.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Extinction is permanent — that asymmetry should change how we weigh economic versus ecological tradeoffs.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Environmental regulations designed by people who don't bear their costs tend to be too strict.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "Banning harmful products is more reliable than trusting consumers to choose differently.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Development timelines should not be identical for rich and poor countries just because the problems are global.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "Making polluters pay for harm is more efficient than regulating how they operate.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Personal consumption choices aggregate into environmental outcomes — individuals are not off the hook.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Scarcity drives innovation — energy constraints will be solved the same way every prior constraint was.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "Some losses cannot be compensated — we shouldn't pretend every tradeoff is reversible.",
    axis: "environment",
    pole: "left"
  },

  // ── EXPANSION (9 questions, sub-categorised) ─────────────────────────
  {
    text: "A species that exists on only one planet is one disaster away from extinction.",
    axis: "expansion",
    sub: "space",
    pole: "left"
  },
  {
    text: "Space colonisation is a distraction from problems that are solvable now.",
    axis: "expansion",
    sub: "space",
    pole: "right"
  },
  {
    text: "Slowing down transformative technology doesn't make it safer — it just shifts the advantage to those with fewer scruples.",
    axis: "expansion",
    sub: "technology",
    pole: "left"
  },
  {
    text: "We consistently underestimate how badly things can go wrong with powerful new tools.",
    axis: "expansion",
    sub: "technology",
    pole: "right"
  },
  {
    text: "Using science to reduce suffering — including genetic suffering — is the logical continuation of medicine.",
    axis: "expansion",
    sub: "bioethics",
    pole: "left"
  },
  {
    text: "Reengineering human biology is the kind of thing that looks obvious and beneficial right up until it isn't.",
    axis: "expansion",
    sub: "bioethics",
    pole: "right"
  },
  {
    text: "Deliberately reshaping planetary systems is a reasonable response to the scale of the problem we've already created.",
    axis: "expansion",
    sub: "growth",
    pole: "left"
  },
  {
    text: "Degrowth assumes we've reached the limit of human ingenuity — that assumption has been wrong every time before.",
    axis: "expansion",
    sub: "growth",
    pole: "right"
  },
  {
    text: "Settling other worlds isn't escapism — it's the most serious long-term project our species could undertake.",
    axis: "expansion",
    sub: "space",
    pole: "left"
  }
];
