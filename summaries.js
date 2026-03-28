// ============================================================
// summaries.js — Political Compass Quiz v2
// Personality profiles for a 3x3 grid defined by two axes:
//   X axis: -1 = Progressive/Left  →  +1 = Traditional/Right
//   Y axis: -1 = Less Government (Libertarian)  →  +1 = More Government (Authoritarian)
//
// Zone keys use the format "x_y":
//   x: "left" | "center" | "right"
//   y: "lib"  | "mod"    | "auth"
// ============================================================

const PERSONALITY_PROFILES = {

  // ──────────────────────────────────────────────────────────
  // Row 1: More Government (auth) — top of the grid
  // ──────────────────────────────────────────────────────────

  /**
   * Progressive + More Government
   * Believes collective action and strong institutions can fix inequality.
   */
  left_auth: {
    name: "The Community Builder",
    emoji: "🏘️",
    economic:
      "You believe the economy should work for everyone, not just those at the top. " +
      "Strong social programs — healthcare, education, housing — are investments in a " +
      "healthier, more productive society. You're comfortable with higher taxes on wealth " +
      "and corporations if the revenue goes back into public services.",
    social:
      "You see society as a team, and you think governments have a responsibility to " +
      "protect people from discrimination, poverty, and exclusion. Rules and institutions " +
      "exist to make things fairer, especially for those who've historically been left behind. " +
      "You're passionate about human rights and believe collective action creates change faster than individual effort alone.",
    strengths:
      "Big-picture thinking, empathy, coalition-building, and a genuine commitment to " +
      "reducing inequality. You're great at spotting systemic problems and pushing for " +
      "structural solutions rather than just band-aid fixes.",
    blind_spots:
      "Large-scale programs can sometimes be slow, bureaucratic, or hard to adjust when " +
      "they're not working. It can be worth considering how to keep institutions accountable " +
      "and whether local or community-led solutions might sometimes work faster than top-down ones.",
    famous_alignment: ["Bernie Sanders", "Vandana Shiva", "Noam Chomsky"],
    teen_description:
      "You think the world would be way better if governments actually stepped up and " +
      "made sure everyone — not just the wealthy — has what they need to thrive. Why should " +
      "your postcode determine your future?"
  },

  /**
   * Traditional + More Government
   * Values order, national identity, and strong governance to maintain stability.
   */
  right_auth: {
    name: "The Steady Hand",
    emoji: "⚖️",
    economic:
      "You believe a strong national economy comes from protecting local industries, " +
      "maintaining order, and making sure people play by the rules. You're supportive of " +
      "government involvement when it keeps markets stable, defends national interests, " +
      "or provides security for citizens who contribute to society.",
    social:
      "You believe in clear structures, shared values, and strong leadership — because " +
      "without those things, society can unravel quickly. Tradition and community norms " +
      "provide people with a sense of belonging and identity. You think a stable, well-governed " +
      "society is the foundation for everything else.",
    strengths:
      "Reliability, loyalty, respect for institutions, and a talent for creating structure " +
      "and order in complex situations. You tend to think carefully before making changes " +
      "and understand the value of what's been built over time.",
    blind_spots:
      "Strong systems can sometimes protect the status quo even when it needs updating. " +
      "It's worth asking whether existing rules serve everyone equally, and leaving room " +
      "for voices that challenge entrenched power.",
    famous_alignment: ["Lee Kuan Yew", "Roger Scruton", "Confucius"],
    teen_description:
      "You think strong leadership and clear rules are what keep communities safe and " +
      "functioning — without structure, things fall apart. You value loyalty, tradition, " +
      "and people taking responsibility for their role in the bigger picture."
  },

  /**
   * Centrist + More Government
   * Data-driven governance; pragmatic, institutional, technocratic.
   */
  center_auth: {
    name: "The Systems Thinker",
    emoji: "🔬",
    economic:
      "You believe effective governance is about using evidence and expertise to solve " +
      "problems — not ideology. Markets work well in some areas; regulation and public " +
      "institutions work better in others. You're comfortable with government playing a " +
      "significant role as long as it's competent, efficient, and accountable.",
    social:
      "You tend to trust experts, institutions, and well-designed systems over gut instinct " +
      "or popular opinion. You believe social problems have solutions — they just require " +
      "careful analysis, good data, and the courage to implement evidence-based policies " +
      "even when they're unpopular.",
    strengths:
      "Analytical thinking, long-term planning, comfort with complexity, and a rare ability " +
      "to separate 'what feels right' from 'what the evidence shows'. You're good at " +
      "managing trade-offs and thinking in systems.",
    blind_spots:
      "Technocratic approaches can sometimes feel cold or disconnected from people's lived " +
      "experiences. The best solutions often need both good data AND genuine community input — " +
      "numbers don't always capture what matters most to people.",
    famous_alignment: ["Angela Merkel", "Bill Gates", "Mariana Mazzucato"],
    teen_description:
      "You think the best way to fix the world's problems is to actually study them — " +
      "gather the data, find what works, and then build systems that deliver results. " +
      "Less drama, more outcomes."
  },

  // ──────────────────────────────────────────────────────────
  // Row 2: Moderate authority (mod) — middle of the grid
  // ──────────────────────────────────────────────────────────

  /**
   * Progressive + Moderate authority
   * Reform-minded, values social justice but works within democratic systems.
   */
  left_mod: {
    name: "The Reform Advocate",
    emoji: "✊",
    economic:
      "You want an economy that's more fair and less tilted toward the already-wealthy. " +
      "A liveable minimum wage, affordable housing, and accessible healthcare aren't radical — " +
      "they're the basics. You support government doing more than the bare minimum, but " +
      "you're equally interested in grassroots movements and community action.",
    social:
      "You believe in human dignity, equality, and making sure everyone has a real shot " +
      "regardless of their background. You push for reform through democratic means — " +
      "elections, advocacy, protest — and you believe change is possible when enough people " +
      "decide to demand it.",
    strengths:
      "Passion, moral clarity, persuasive communication, and the ability to mobilise people " +
      "around a shared cause. You're good at keeping 'why this matters' front and centre " +
      "when others get lost in the weeds.",
    blind_spots:
      "Enthusiasm for change can sometimes move faster than building the broad coalitions " +
      "needed to make it stick. Finding common ground with people who don't already agree " +
      "is just as important as energising those who do.",
    famous_alignment: ["Alexandria Ocasio-Cortez", "Malala Yousafzai", "Desmond Tutu"],
    teen_description:
      "You see inequality and injustice and you want to do something about it — not just " +
      "talk. You believe the system can get better, and you're willing to push hard to make it happen."
  },

  /**
   * Traditional + Moderate authority
   * Values community, family, and tradition but isn't extreme about it.
   */
  right_mod: {
    name: "The Community Anchor",
    emoji: "🏡",
    economic:
      "You believe in hard work, personal responsibility, and the idea that strong local " +
      "economies are built from the ground up. You're not opposed to government support " +
      "where it's genuinely needed, but you think communities, families, and businesses " +
      "solve most problems better than distant bureaucracies.",
    social:
      "You value tradition, community bonds, and the wisdom passed down through generations. " +
      "Faith, family, and local culture give people roots and meaning. You think change is " +
      "fine when it's gradual and thought-through — but rapid shifts can damage the social " +
      "fabric that holds communities together.",
    strengths:
      "Practicality, loyalty, a strong sense of personal ethics, and deep investment in " +
      "the wellbeing of your immediate community. You're the person who shows up — not " +
      "just the one who posts about it.",
    blind_spots:
      "Valuing stability can sometimes make it harder to recognise when existing traditions " +
      "cause harm to people on the margins. Asking 'whose stability?' is a useful question " +
      "to keep in your back pocket.",
    famous_alignment: ["G.K. Chesterton", "Jordan Peterson", "Edmund Burke"],
    teen_description:
      "You think a lot of what makes life good — real friendships, family, local community — " +
      "isn't something government programs can manufacture. You respect what's been built " +
      "and want to preserve what works while improving what doesn't."
  },

  /**
   * True centrist — moderate on both axes.
   */
  center_mod: {
    name: "The Pragmatist",
    emoji: "⚡",
    economic:
      "You think neither pure free markets nor heavy state control gets it right on their own. " +
      "Context matters — some industries need regulation, others flourish with competition. " +
      "You're less interested in ideological purity than in what actually works.",
    social:
      "You try to see multiple sides and find workable compromises. You're uncomfortable " +
      "with extremes and believe most people — whatever their politics — want broadly the " +
      "same things: safety, opportunity, and a fair go. The disagreement is usually about " +
      "how to get there.",
    strengths:
      "Open-mindedness, flexibility, the ability to work with people across the spectrum, " +
      "and a talent for cutting through polarised noise to find practical solutions. " +
      "You're good at listening.",
    blind_spots:
      "A desire to stay balanced can sometimes make it hard to take a clear stand on issues " +
      "that genuinely require one. Not every debate has a reasonable middle ground, and " +
      "splitting the difference isn't always the right answer.",
    famous_alignment: ["Barack Obama", "Jacinda Ardern", "Emmanuel Macron"],
    teen_description:
      "You don't think politics has to be a team sport. You pick up good ideas wherever " +
      "they come from and you'd rather find something that actually works than 'win' an argument."
  },

  // ──────────────────────────────────────────────────────────
  // Row 3: Less Government (lib) — bottom of the grid
  // ──────────────────────────────────────────────────────────

  /**
   * Progressive + Less Government
   * Values personal freedom AND social equality — anti-authoritarian left.
   */
  left_lib: {
    name: "The Freedom Fighter",
    emoji: "🌿",
    economic:
      "You're sceptical of both big corporations AND big government — you think power " +
      "concentrated anywhere tends to be abused. You're drawn to cooperative models, " +
      "worker ownership, mutual aid, and community-run alternatives to both state and market. " +
      "You want economic justice without trading away personal autonomy.",
    social:
      "You believe in radical personal freedom: people should be able to live how they " +
      "choose, love who they love, and express who they are — as long as they're not " +
      "harming others. You're deeply suspicious of authority in all forms, and you believe " +
      "communities can organise themselves without top-down control.",
    strengths:
      "Creativity, fearlessness, genuine commitment to both liberty and equality, and a " +
      "talent for imagining alternatives to 'the way things are'. You tend to question " +
      "assumptions others take for granted.",
    blind_spots:
      "Voluntary systems and grassroots networks are powerful but can struggle to scale or " +
      "coordinate at a national or global level. Some problems — like climate change or " +
      "pandemics — may need some level of coordinated institutional response.",
    famous_alignment: ["Noam Chomsky", "Emma Goldman", "Ursula K. Le Guin"],
    teen_description:
      "You want a world where everyone's free AND everyone's treated fairly — and you " +
      "don't think you should have to choose between those two things. Big companies and " +
      "controlling governments both give you the ick."
  },

  /**
   * Traditional + Less Government
   * Classical liberal / libertarian right — free markets, personal responsibility, tradition.
   */
  right_lib: {
    name: "The Free Agent",
    emoji: "🦅",
    economic:
      "You believe free markets — when they're genuinely competitive — create more " +
      "prosperity and innovation than government-managed alternatives. Low taxes, less " +
      "regulation, and strong property rights let people and businesses make their own " +
      "decisions. You think economic freedom and personal freedom are two sides of the same coin.",
    social:
      "You value individual liberty above almost everything. People should be free to live " +
      "by their own values — including traditional ones — without being forced to change by " +
      "government mandates. You're wary of social engineering in either direction and believe " +
      "civil society (not the state) is the right venue for cultural debates.",
    strengths:
      "Entrepreneurial thinking, self-reliance, a strong defence of civil liberties, and a " +
      "consistent principle: if it's not hurting anyone else, it's not the government's business. " +
      "You're good at cutting through well-intentioned overreach.",
    blind_spots:
      "Markets can produce great outcomes on average but can leave some people behind — " +
      "especially those starting with fewer resources. Considering what happens to people " +
      "when they fall through the cracks is a useful complement to the freedom lens.",
    famous_alignment: ["Milton Friedman", "Friedrich Hayek", "Ayn Rand"],
    teen_description:
      "Your motto is basically: leave me alone and I'll leave you alone. You think people " +
      "are smart enough to run their own lives, and the less government interference, the " +
      "better — for your wallet and your freedom."
  },

  /**
   * Centrist + Less Government
   * Moderate libertarian — values personal freedom, skeptical of overreach, not ideological.
   */
  center_lib: {
    name: "The Independent",
    emoji: "🧭",
    economic:
      "You think markets mostly work but need sensible guardrails to prevent exploitation " +
      "and monopoly. You're not anti-government, but you believe it should stay lean and " +
      "focused — doing a few things really well rather than trying to manage everything. " +
      "Efficiency, transparency, and accountability matter to you.",
    social:
      "You lean toward letting people make their own choices in their personal lives without " +
      "government involvement. You're not strongly left or right on cultural issues — you " +
      "tend to think live-and-let-live is a pretty good default, and you're suspicious of " +
      "anyone who wants to use the law to impose their lifestyle on others.",
    strengths:
      "Independence of thought, a low tolerance for hypocrisy, pragmatism, and a genuine " +
      "appreciation for diverse perspectives. You don't feel bound by any party line, which " +
      "makes you a rare asset in polarised conversations.",
    blind_spots:
      "Sitting outside established political tribes can sometimes translate into low engagement " +
      "with the messy reality of policy-making. Sometimes picking a side — at least temporarily — " +
      "is what actually makes change happen.",
    famous_alignment: ["John Stuart Mill", "Thomas Sowell", "Nassim Nicholas Taleb"],
    teen_description:
      "You're the person who gets annoyed when people ask 'so which team are you on?' " +
      "You think for yourself, you hate being told what to do, and you reckon most people " +
      "should just be allowed to get on with their lives."
  }

}; // end PERSONALITY_PROFILES


// ============================================================
// UNHINGED MODE — Roast summaries for every position
// Everyone gets absolutely cooked, no one is safe.
// ============================================================
const UNHINGED_PROFILES = {

  left_auth: {
    name: "The Twitter Revolutionary",
    emoji: "🚩",
    roast:
      "You want the government to fix everything but you've never attended a council meeting in your life. " +
      "Your idea of activism is changing your profile picture and writing paragraphs in Instagram comments that " +
      "nobody reads. You've got 47 tabs open about systemic injustice and zero tabs open on how taxes actually work. " +
      "You unironically say 'we live in a society' and think that's a political position. " +
      "Your Spotify Wrapped is just protest songs and lo-fi beats to redistribute wealth to.",
    celebrity: "You're the person who quotes George Orwell without realising he'd probably find you annoying too.",
    future: "In 10 years you'll either be a burnt-out public servant or running a podcast with 12 listeners called 'Dismantling Systems with Jess and Tom'."
  },

  left_mod: {
    name: "The Concerned Moderate Who Posts Petitions",
    emoji: "✍️",
    roast:
      "You care deeply about everything but not enough to actually do anything inconvenient. " +
      "You'll share a petition, attend one rally (for the Instagram story), then go back to ordering from Amazon. " +
      "You think you're progressive but you still cross the street when someone looks a bit sketchy. " +
      "Your political identity is basically 'I watched a Netflix documentary once and now I have opinions'. " +
      "You say 'we need to do better' a lot but 'we' is always someone else.",
    celebrity: "You're the group chat member who sends articles no one asked for with the caption 'this is so important'.",
    future: "In 10 years you'll be a middle manager who puts pronouns in your email signature but still underpays your intern."
  },

  left_lib: {
    name: "The Off-Grid Philosopher",
    emoji: "🌿",
    roast:
      "You want zero government AND a perfect society, which is like wanting a six-pack but refusing to exercise. " +
      "You think if we just vibed harder, crime would stop. Your solution to every problem is 'community' " +
      "but your community is three mates and a group chat. You've read half of one Chomsky book and now you " +
      "won't shut up at parties. You think money is a social construct but you still Venmo request people for $4.50. " +
      "Your ideal society is a commune that conveniently still has Wi-Fi.",
    celebrity: "You're the friend who says 'I don't believe in borders' but gets territorial about the aux cord.",
    future: "In 10 years you'll either be living in a van posting sunset photos or working in tech and feeling guilty about it."
  },

  center_auth: {
    name: "The Self-Appointed Manager of Society",
    emoji: "📋",
    roast:
      "You don't have political opinions, you have SYSTEMS. You think every problem can be solved with " +
      "the right spreadsheet and a strongly worded policy document. You're the kid who reminded the teacher " +
      "about homework. You think the government should run everything because you genuinely believe " +
      "bureaucracy is beautiful. Your love language is compliance. " +
      "You once said 'I just think there should be rules' and that's literally your entire personality.",
    celebrity: "You're the person who reads the Terms and Conditions. Like, actually reads them.",
    future: "In 10 years you'll be in local government annoying everyone at planning meetings about zoning regulations."
  },

  center_mod: {
    name: "The Enlightened Fence-Sitter",
    emoji: "🤷",
    roast:
      "Congratulations, you believe in nothing. You've managed to go through this entire quiz without " +
      "having a single strong opinion. You're the human equivalent of plain toast. Your political position " +
      "is 'well, both sides have a point' which is what people say when they haven't thought about it for " +
      "more than 30 seconds. You think being centrist makes you smart but it actually just makes you " +
      "the person nobody invites to debate night. Your personality is beige.",
    celebrity: "You're the friend who says 'I don't really follow politics' and then votes based on who had the better ad.",
    future: "In 10 years you'll still be saying 'I'm socially liberal but fiscally conservative' like that means anything."
  },

  center_lib: {
    name: "The 'Don't Tread On Me' Kid",
    emoji: "🐍",
    roast:
      "You want the government to leave you alone but you also want roads, schools, and the fire department " +
      "to show up when your house is on fire. You think freedom means doing whatever you want with " +
      "zero consequences, which is literally what a toddler thinks. Your entire political philosophy " +
      "is 'nah'. You've described yourself as a 'free thinker' at least once which is a massive red flag. " +
      "You think you're a wolf among sheep but you're actually just a guy who doesn't want to pay for bins.",
    celebrity: "You're the person who argues about speed cameras in Facebook comments at 11pm.",
    future: "In 10 years you'll be running a crypto podcast from your garage and calling it a 'startup'."
  },

  right_auth: {
    name: "The 'Back In My Day' Teen",
    emoji: "👴",
    roast:
      "You're 16 and already nostalgic for an era you never lived in. You think discipline builds character " +
      "because your dad said so, and you've never questioned it. Your idea of a good time is watching " +
      "military documentaries and saying 'we need national service back'. You use the word 'values' a lot " +
      "but can't name three. You think the world is falling apart because people are too soft, but you " +
      "cry when your internet drops for 5 minutes. You unironically say 'respect is earned' while " +
      "demanding it from everyone.",
    celebrity: "You're the kid who narc'd on someone for chewing gum and felt good about it.",
    future: "In 10 years you'll be posting LinkedIn motivational quotes about hustle culture at 6am."
  },

  right_mod: {
    name: "The Sensible One (Self-Proclaimed)",
    emoji: "🏠",
    roast:
      "You describe yourself as 'just being realistic' which is code for 'I don't want to think about " +
      "this too hard'. You think the system works fine because it works fine FOR YOU. Your political " +
      "compass is basically your dad's opinions plus whatever you read on Sky News that morning. " +
      "You say 'I'm not political' and then spend 45 minutes explaining why the carbon tax was bad. " +
      "Your solution to every social issue is 'people just need to work harder' " +
      "said from the comfort of a house your parents helped you buy.",
    celebrity: "You're the person who says 'I don't see colour' and thinks that's progressive.",
    future: "In 10 years you'll be complaining about council rates and calling it political engagement."
  },

  right_lib: {
    name: "The Crypto Bro With Opinions",
    emoji: "📈",
    roast:
      "Your entire personality is the free market. You think taxation is theft, regulation is communism, " +
      "and everything would be fine if the government just disappeared — ignoring the fact that you " +
      "went to a public school and drive on public roads. You've said 'it's called supply and demand' " +
      "to end an argument at least twice this week. You think Elon Musk is a role model and Jordan " +
      "Peterson is a philosopher. Your browser history is just stock charts, libertarian subreddits, " +
      "and YouTube videos titled 'Why Socialism ALWAYS Fails (in 10 minutes)'.",
    celebrity: "You're the friend who splits the bill to the exact cent and calls it 'being principled'.",
    future: "In 10 years you'll either be rich and insufferable or broke and blaming the government."
  }

}; // end UNHINGED_PROFILES


function getUnhingedSummary(x, y, topicScores) {
  const profile = getProfile(x, y);
  const key = Object.entries(PERSONALITY_PROFILES).find(([k, v]) => v === profile)?.[0] || "center_mod";
  const roast = UNHINGED_PROFILES[key];

  if (!roast) return getDetailedSummary(x, y, topicScores);

  // Build topic roasts
  function getTopicHighlights(ts) {
    if (!ts || typeof ts !== 'object') return [];
    return Object.entries(ts)
      .filter(([, d]) => typeof d.x === 'number' && typeof d.y === 'number')
      .map(([topic, d]) => ({ topic, x: d.x, y: d.y, mag: Math.sqrt(d.x*d.x + d.y*d.y) }))
      .sort((a, b) => b.mag - a.mag)
      .slice(0, 3);
  }

  const highlights = getTopicHighlights(topicScores);
  let topicHTML = '';
  if (highlights.length > 0) {
    const roastComments = highlights.map(h => {
      const dir = h.x < -0.2 ? 'left' : h.x > 0.2 ? 'right' : 'confused';
      const gov = h.y < -0.2 ? 'anarchist' : h.y > 0.2 ? 'bootlicker' : 'fence-sitting';
      return `<li>On <strong>${h.topic}</strong> you went full <em>${dir} ${gov}</em>. Interesting choice.</li>`;
    }).join('\n          ');
    topicHTML = `
      <section class="summary-section">
        <h3>📊 Where You Went Off The Rails</h3>
        <ul>${roastComments}</ul>
      </section>`;
  }

  return `
<div class="personality-summary unhinged">
  <header class="summary-header">
    <div class="summary-emoji" aria-hidden="true">${roast.emoji}</div>
    <h2 class="summary-name">${roast.name}</h2>
    <p class="summary-tagline" style="color: var(--color-accent);">⚠️ UNHINGED MODE — Don't take this seriously</p>
  </header>

  <section class="summary-section">
    <h3>🔥 Your Roast</h3>
    <p>${roast.roast}</p>
  </section>

  <section class="summary-section">
    <h3>🎭 Who You Remind Us Of</h3>
    <p>${roast.celebrity}</p>
  </section>

  <section class="summary-section">
    <h3>🔮 Your Future</h3>
    <p>${roast.future}</p>
  </section>

  ${topicHTML}

  <section class="summary-section" style="text-align:center; opacity:0.5; margin-top: var(--space-4);">
    <p style="font-size: var(--text-xs);">This is a joke. Turn off Unhinged Mode in Settings for the real summary.</p>
  </section>
</div>
`.trim();
}


// ============================================================
// getProfile(x, y)
// Maps a continuous (x, y) score pair to one of the 9 profiles.
//
// Parameters:
//   x  {number}  -1 (Progressive) to +1 (Traditional)
//   y  {number}  -1 (Libertarian) to +1 (Authoritarian)
//
// Returns: the matching profile object from PERSONALITY_PROFILES.
// ============================================================
function getProfile(x, y) {
  // Determine the x-axis bucket
  let xKey;
  if (x < -0.333) {
    xKey = "left";
  } else if (x > 0.333) {
    xKey = "right";
  } else {
    xKey = "center";
  }

  // Determine the y-axis bucket
  let yKey;
  if (y < -0.333) {
    yKey = "lib";
  } else if (y > 0.333) {
    yKey = "auth";
  } else {
    yKey = "mod";
  }

  const key = `${xKey}_${yKey}`;
  return PERSONALITY_PROFILES[key] || PERSONALITY_PROFILES["center_mod"];
}


// ============================================================
// getDetailedSummary(x, y, topicScores)
// Builds an HTML string with a full personality breakdown.
//
// Parameters:
//   x           {number}  Overall x score (-1 to +1)
//   y           {number}  Overall y score (-1 to +1)
//   topicScores {object}  Per-topic scores, e.g.:
//                         { "Economy": { x: 0.3, y: -0.2, count: 3 }, ... }
//
// Returns: {string} HTML markup ready to inject into the page.
// ============================================================
function getDetailedSummary(x, y, topicScores) {
  const profile = getProfile(x, y);

  // ── Helper: pick the 2–3 topics with the most extreme combined score ──
  function getTopicHighlights(topicScores) {
    if (!topicScores || typeof topicScores !== "object") return [];

    // Score each topic by how far from the origin its (x, y) point sits
    const ranked = Object.entries(topicScores)
      .filter(([, data]) => typeof data.x === "number" && typeof data.y === "number")
      .map(([topic, data]) => {
        const magnitude = Math.sqrt(data.x * data.x + data.y * data.y);
        return { topic, x: data.x, y: data.y, count: data.count || 0, magnitude };
      })
      .sort((a, b) => b.magnitude - a.magnitude);

    // Return top 2 or 3 depending on how many topics exist
    const limit = ranked.length >= 4 ? 3 : 2;
    return ranked.slice(0, limit);
  }

  // ── Helper: generate a plain-English comment on a single topic score ──
  function describeTopicScore(topic, tx, ty) {
    const xLabel = tx < -0.5
      ? "strongly progressive"
      : tx < -0.1
        ? "progressive"
        : tx > 0.5
          ? "strongly traditional"
          : tx > 0.1
            ? "traditional"
            : "centrist";

    const yLabel = ty < -0.5
      ? "very freedom-focused"
      : ty < -0.1
        ? "freedom-leaning"
        : ty > 0.5
          ? "very pro-government"
          : ty > 0.1
            ? "government-leaning"
            : "balanced";

    return `On <strong>${topic}</strong>, your answers were <em>${xLabel}</em> and <em>${yLabel}</em> — ` +
      `one of your more distinctive positions.`;
  }

  // ── Build topic highlights HTML ──
  const highlights = getTopicHighlights(topicScores);
  let topicHTML = "";
  if (highlights.length > 0) {
    topicHTML = `
      <section class="summary-section summary-topics">
        <h3>📊 Topic Highlights</h3>
        <p>These topics showed your most distinctive views:</p>
        <ul>
          ${highlights.map(h => `<li>${describeTopicScore(h.topic, h.x, h.y)}</li>`).join("\n          ")}
        </ul>
      </section>`;
  }

  // ── Build famous figures HTML ──
  const figuresHTML = profile.famous_alignment
    .map(name => `<li>${name}</li>`)
    .join("\n          ");

  // ── Assemble the full summary ──
  return `
<div class="personality-summary">

  <header class="summary-header">
    <div class="summary-emoji" aria-hidden="true">${profile.emoji}</div>
    <h2 class="summary-name">${profile.name}</h2>
    <p class="summary-tagline">${profile.teen_description}</p>
  </header>

  <section class="summary-section summary-identity">
    <h3>🧠 Your Political Identity</h3>
    <h4>Economics &amp; Government</h4>
    <p>${profile.economic}</p>
    <h4>Society &amp; Culture</h4>
    <p>${profile.social}</p>
  </section>

  <section class="summary-section summary-strengths-blind-spots">
    <div class="summary-strengths">
      <h3>💪 Your Strengths</h3>
      <p>${profile.strengths}</p>
    </div>
    <div class="summary-blind-spots">
      <h3>🔍 Worth Thinking About</h3>
      <p>${profile.blind_spots}</p>
    </div>
  </section>

  <section class="summary-section summary-famous">
    <h3>🌍 Famous Thinkers Like You</h3>
    <p>These well-known figures share some of your broad political outlook:</p>
    <ul>
      ${figuresHTML}
    </ul>
  </section>

  ${topicHTML}

</div>
`.trim();
}


// ============================================================
// Make functions available as globals (browser) or exports (Node)
// ============================================================
if (typeof module !== "undefined" && module.exports) {
  // Node.js / CommonJS environment
  module.exports = { PERSONALITY_PROFILES, UNHINGED_PROFILES, getProfile, getDetailedSummary, getUnhingedSummary };
}
// In a browser, PERSONALITY_PROFILES, getProfile, and getDetailedSummary
// are already in the global scope via the const/function declarations above.
