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
    text: "Income tax should be raised to 50% for anyone earning over $150,000 per year, to fund public healthcare and education.",
    axis: "economy",
    pole: "left" // agree → State
  },
  {
    text: "Every public hospital visit, surgery, and prescription should be fully covered by taxes, with zero out-of-pocket cost to patients.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "The government should not set prices, control rents, or tell businesses what wages to pay.",
    axis: "economy",
    pole: "right" // agree → Market
  },
  {
    text: "Anyone should be able to register and open a business online in one day, with no government permits or inspections required.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "Water supply, electricity grids, and public railways should be owned and run by the government, not by private companies.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Every adult citizen should receive $1,000 per month from the government, regardless of whether they have a job, funded by higher taxes.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "The minimum wage should be doubled, even if some small businesses have to close or lay off workers as a result.",
    axis: "economy",
    pole: "left"
  },
  {
    text: "Corporate tax should be cut in half to attract more businesses, even if it means less funding for public services.",
    axis: "economy",
    pole: "right"
  },
  {
    text: "All import tariffs should be removed, even if cheaper foreign products cause some domestic factories to shut down.",
    axis: "economy",
    pole: "right"
  },

  // ── SOCIETY (9 questions) ──────────────────────────────────
  {
    text: "Same-sex couples should be legally allowed to marry and adopt children on the same basis as heterosexual couples.",
    axis: "society",
    pole: "left" // agree → Progress
  },
  {
    text: "Public schools should include lessons on different gender identities and sexual orientations starting at age 10.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Children are best raised by a married mother and father, and government policy should actively promote this family structure.",
    axis: "society",
    pole: "right" // agree → Tradition
  },
  {
    text: "Religious leaders should have formal advisory seats in parliament when laws on marriage, education, or ethics are being debated.",
    axis: "society",
    pole: "right"
  },
  {
    text: "Adults should be able to buy and use cannabis from licensed shops, the same way they can buy alcohol.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Abortion should be available on request up to 24 weeks of pregnancy, with no mandatory waiting period or counselling requirement.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Public schools should be required to begin each day with a moment of prayer or religious reflection.",
    axis: "society",
    pole: "right"
  },
  {
    text: "When peer-reviewed science and religious teachings disagree on a public health issue, government policy should follow the science.",
    axis: "society",
    pole: "left"
  },
  {
    text: "Schools should dedicate at least one hour per week to teaching traditional national customs, songs, and cultural practices.",
    axis: "society",
    pole: "right"
  },

  // ── GOVERNANCE (9 questions) ────────────────────────────────
  {
    text: "The government should be able to monitor all phone calls and internet activity without a warrant if it suspects a terrorist threat.",
    axis: "governance",
    pole: "right" // agree → Authority
  },
  {
    text: "No one should ever face fines or jail time for expressing an opinion, no matter how offensive others find it.",
    axis: "governance",
    pole: "left" // agree → Liberty
  },
  {
    text: "All major laws on health, education, and policing should be decided by the national government, not by states or local councils.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Police should be allowed to stop and search anyone in a high-crime area without needing a specific reason.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Any adult with no criminal record should be allowed to own a firearm without needing a special licence or permit.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "A government employee who leaks classified documents exposing illegal government activity should be protected from prosecution.",
    axis: "governance",
    pole: "left"
  },
  {
    text: "Social media platforms should be legally required to remove posts that the government officially classifies as misinformation.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Every citizen aged 18 to 25 should be required to complete 12 months of military or community service.",
    axis: "governance",
    pole: "right"
  },
  {
    text: "Encrypted messaging apps should never be required to give police access to private messages, even with a court order.",
    axis: "governance",
    pole: "left"
  },

  // ── UNIVERSALITY (9 questions) ──────────────────────────────
  {
    text: "My country should withdraw from any international agreement that limits its ability to set its own laws and policies.",
    axis: "universality",
    pole: "right" // agree → Nationalism
  },
  {
    text: "Anyone should be allowed to move to and work in any country they choose, without needing a visa or work permit.",
    axis: "universality",
    pole: "left" // agree → Internationalism
  },
  {
    text: "The United Nations should have the authority to override a country's laws if they violate international human rights standards.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "My country's foreign aid budget should be cut by at least half and that money redirected to domestic housing and infrastructure.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "A country with residents from many different cultural backgrounds is a stronger society, even if it creates challenges with social cohesion.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "The government should set a strict annual cap on immigration, even if businesses say they need more foreign workers.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Countries that exceed their agreed carbon emissions limits should face automatic trade sanctions enforced by an international body.",
    axis: "universality",
    pole: "left"
  },
  {
    text: "Schools should be required to fly the national flag and teach students the national anthem, history, and civic values.",
    axis: "universality",
    pole: "right"
  },
  {
    text: "Wealthy nations should accept at least 50,000 refugees per year as a minimum, regardless of public opinion at home.",
    axis: "universality",
    pole: "left"
  },

  // ── ENVIRONMENT (9 questions) ───────────────────────────────
  {
    text: "All new petrol and diesel cars should be banned from sale by 2035, even if electric cars still cost significantly more.",
    axis: "environment",
    pole: "left" // agree → Ecology
  },
  {
    text: "A 10,000-hectare old-growth forest should be permanently protected from logging, even if the local town depends on the timber industry for most of its jobs.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "If an environmental regulation is shown to cost more than 50,000 jobs nationwide, it should be rolled back.",
    axis: "environment",
    pole: "right" // agree → Productivism
  },
  {
    text: "All single-use plastic bags, straws, and takeaway containers should be banned, even if the replacements cost consumers more.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "A country with widespread poverty should be allowed to build new coal power plants if it cannot yet afford solar or wind energy.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "A tax of $50 per tonne on carbon emissions should be introduced, even if it raises petrol and electricity prices by 20%.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Meat and dairy products should be taxed at a higher rate to reflect their environmental impact, even if it raises grocery prices.",
    axis: "environment",
    pole: "left"
  },
  {
    text: "Future technology will solve most environmental problems, so there is no need to place heavy restrictions on industry now.",
    axis: "environment",
    pole: "right"
  },
  {
    text: "A $2 billion mining project should be blocked if it would destroy the only known habitat of an endangered species.",
    axis: "environment",
    pole: "left"
  },

  // ── EXPANSION (9 questions, sub-categorised) ─────────────────────────
  // sub: "space" | "technology" | "bioethics" | "growth"
  // The 5th pentagon corner ("Expansion") is the average of these four.
  {
    text: "Governments should spend at least 2% of their annual budget on space exploration and Mars colonisation programs.",
    axis: "expansion",
    sub: "space",
    pole: "left" // agree → Expansionism
  },
  {
    text: "Every dollar spent on space exploration would be better spent on ending poverty and improving healthcare on Earth.",
    axis: "expansion",
    sub: "space",
    pole: "right" // agree → Restraint
  },
  {
    text: "A private company should be allowed to build an AI smarter than any human, without needing government approval first.",
    axis: "expansion",
    sub: "technology",
    pole: "left"
  },
  {
    text: "AI systems that make decisions about hiring, lending, and criminal sentencing should be banned until proven safe over a 10-year trial period.",
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
    text: "Humans should accept natural limits on lifespan, food production, and energy use rather than engineering ways to exceed them.",
    axis: "expansion",
    sub: "bioethics",
    pole: "right"
  },
  {
    text: "Scientists should begin large-scale projects to reflect sunlight away from Earth to cool the climate, even if the long-term side effects are unknown.",
    axis: "expansion",
    sub: "growth",
    pole: "left"
  },
  {
    text: "Countries should legally cap annual GDP growth at 2% to protect the environment and prevent overconsumption.",
    axis: "expansion",
    sub: "growth",
    pole: "right"
  },
  {
    text: "Building a permanent human settlement on Mars should be one of the top three international priorities this decade.",
    axis: "expansion",
    sub: "space",
    pole: "left"
  }
];
