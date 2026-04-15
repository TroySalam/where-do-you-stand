// ============================================================
// PRESIDENTIAL MATCH MODE
// 54 questions about specific presidential actions (FDR → Biden)
// Same 6-axis system, same Likert 1-5 scale
// Each question: "Do you approve of this action?"
// Strongly agree = fully approve, Strongly disagree = fully disapprove
// ============================================================

const PRESIDENT_QUESTIONS = [

  // ── ECONOMY (9) ──────────────────────────────────
  {
    text: "FDR created Social Security in 1935, establishing government-funded retirement pensions for all American workers.",
    axis: "economy", pole: "left", president: "FDR"
  },
  {
    text: "LBJ established Medicare in 1965, providing government-funded healthcare for all Americans over 65.",
    axis: "economy", pole: "left", president: "LBJ"
  },
  {
    text: "Reagan cut the top income tax rate from 70% to 28%, arguing lower taxes would boost economic growth for everyone.",
    axis: "economy", pole: "right", president: "Reagan"
  },
  {
    text: "Clinton signed NAFTA in 1993, removing trade barriers between the US, Canada, and Mexico.",
    axis: "economy", pole: "right", president: "Clinton"
  },
  {
    text: "FDR hired millions of unemployed Americans through the Works Progress Administration to build roads, bridges, and public buildings.",
    axis: "economy", pole: "left", president: "FDR"
  },
  {
    text: "Obama signed the Affordable Care Act in 2010, expanding government-subsidised health insurance to millions of uninsured Americans.",
    axis: "economy", pole: "left", president: "Obama"
  },
  {
    text: "George W. Bush cut taxes across all income brackets in 2001, with the largest percentage reductions for high earners.",
    axis: "economy", pole: "right", president: "G.W. Bush"
  },
  {
    text: "Trump imposed tariffs of up to 25% on Chinese imports to protect American manufacturing jobs.",
    axis: "economy", pole: "left", president: "Trump"
  },
  {
    text: "Biden signed a $1.2 trillion infrastructure bill to rebuild roads, bridges, and expand broadband internet across the country.",
    axis: "economy", pole: "left", president: "Biden"
  },

  // ── SOCIETY (9) ──────────────────────────────────
  {
    text: "LBJ signed the Civil Rights Act of 1964, making racial discrimination in employment and public places illegal.",
    axis: "society", pole: "left", president: "LBJ"
  },
  {
    text: "LBJ signed the Voting Rights Act of 1965, banning literacy tests and other barriers used to prevent Black Americans from voting.",
    axis: "society", pole: "left", president: "LBJ"
  },
  {
    text: "Clinton signed the Defense of Marriage Act in 1996, defining marriage as between one man and one woman under federal law.",
    axis: "society", pole: "right", president: "Clinton"
  },
  {
    text: "Eisenhower sent federal troops to Little Rock, Arkansas in 1957 to enforce school desegregation when the governor tried to block Black students.",
    axis: "society", pole: "left", president: "Eisenhower"
  },
  {
    text: "Obama became the first sitting president to publicly endorse same-sex marriage in 2012.",
    axis: "society", pole: "left", president: "Obama"
  },
  {
    text: "Nixon launched the War on Drugs in 1971, dramatically increasing criminal penalties for drug possession.",
    axis: "society", pole: "right", president: "Nixon"
  },
  {
    text: "Trump issued an executive order in 2017 banning transgender individuals from serving in the US military.",
    axis: "society", pole: "right", president: "Trump"
  },
  {
    text: "Biden signed an executive order in 2021 banning discrimination based on gender identity in federally funded programs.",
    axis: "society", pole: "left", president: "Biden"
  },
  {
    text: "Reagan focused social policy on traditional family values and personal responsibility rather than government welfare programs.",
    axis: "society", pole: "right", president: "Reagan"
  },

  // ── GOVERNANCE (9) ──────────────────────────────────
  {
    text: "George W. Bush signed the Patriot Act after 9/11, expanding government surveillance powers to monitor communications without individual warrants.",
    axis: "governance", pole: "right", president: "G.W. Bush"
  },
  {
    text: "FDR issued Executive Order 9066 during WWII, authorising the internment of 120,000 Japanese Americans in government camps.",
    axis: "governance", pole: "right", president: "FDR"
  },
  {
    text: "Reagan fired over 11,000 striking air traffic controllers and permanently banned them from federal employment.",
    axis: "governance", pole: "right", president: "Reagan"
  },
  {
    text: "Obama used executive action to create DACA in 2012, shielding undocumented immigrants brought to the US as children from deportation after Congress refused to act.",
    axis: "governance", pole: "right", president: "Obama"
  },
  {
    text: "Trump declared a national emergency to redirect military funds toward building a border wall after Congress refused to fund it.",
    axis: "governance", pole: "right", president: "Trump"
  },
  {
    text: "Ford granted a full presidential pardon to Richard Nixon in 1974, preventing any criminal prosecution for Watergate.",
    axis: "governance", pole: "right", president: "Ford"
  },
  {
    text: "Carter returned control of the Panama Canal to Panama in 1977, voluntarily limiting US territorial control abroad.",
    axis: "governance", pole: "left", president: "Carter"
  },
  {
    text: "Truman desegregated the US military by executive order in 1948, bypassing Congress entirely.",
    axis: "governance", pole: "right", president: "Truman"
  },
  {
    text: "Biden issued a federal vaccine mandate in 2021 requiring employees at large companies to get vaccinated or face weekly testing.",
    axis: "governance", pole: "right", president: "Biden"
  },

  // ── UNIVERSALITY (9) ──────────────────────────────────
  {
    text: "Truman launched the Marshall Plan in 1948, sending $13 billion in US aid to rebuild war-devastated Europe.",
    axis: "universality", pole: "left", president: "Truman"
  },
  {
    text: "Trump withdrew the US from the Paris Climate Agreement in 2017, prioritising national economic interests over international climate commitments.",
    axis: "universality", pole: "right", president: "Trump"
  },
  {
    text: "George H.W. Bush built a 35-nation coalition to liberate Kuwait from Iraqi invasion in 1991.",
    axis: "universality", pole: "left", president: "G.H.W. Bush"
  },
  {
    text: "Kennedy established the Peace Corps in 1961, sending American volunteers to developing nations to help with education and infrastructure.",
    axis: "universality", pole: "left", president: "Kennedy"
  },
  {
    text: "Reagan massively increased military spending to pressure the Soviet Union, prioritising American military strength over diplomatic negotiation.",
    axis: "universality", pole: "right", president: "Reagan"
  },
  {
    text: "Obama negotiated the Iran nuclear deal in 2015, using multilateral diplomacy to limit Iran's nuclear program.",
    axis: "universality", pole: "left", president: "Obama"
  },
  {
    text: "Truman helped create the United Nations and NATO, embedding the US in permanent international alliances.",
    axis: "universality", pole: "left", president: "Truman"
  },
  {
    text: "Trump imposed the travel ban in 2017, restricting immigration from several Muslim-majority countries on national security grounds.",
    axis: "universality", pole: "right", president: "Trump"
  },
  {
    text: "Biden withdrew all US troops from Afghanistan in 2021, ending America's longest war.",
    axis: "universality", pole: "right", president: "Biden"
  },

  // ── ENVIRONMENT (9) ──────────────────────────────────
  {
    text: "Nixon created the Environmental Protection Agency (EPA) in 1970, establishing the first federal agency dedicated to environmental regulation.",
    axis: "environment", pole: "left", president: "Nixon"
  },
  {
    text: "Obama signed the US onto the Paris Climate Agreement in 2016, committing to reduce greenhouse gas emissions.",
    axis: "environment", pole: "left", president: "Obama"
  },
  {
    text: "Trump rolled back over 100 environmental regulations and expanded oil and gas drilling on federal lands.",
    axis: "environment", pole: "right", president: "Trump"
  },
  {
    text: "Carter installed solar panels on the White House roof in 1979 and invested in renewable energy research during the oil crisis.",
    axis: "environment", pole: "left", president: "Carter"
  },
  {
    text: "Reagan removed the solar panels Carter installed on the White House and cut federal funding for renewable energy research.",
    axis: "environment", pole: "right", president: "Reagan"
  },
  {
    text: "George W. Bush rejected the Kyoto Protocol in 2001, arguing that emission targets would harm the US economy.",
    axis: "environment", pole: "right", president: "G.W. Bush"
  },
  {
    text: "Biden signed the Inflation Reduction Act in 2022, directing $370 billion toward clean energy and climate programs.",
    axis: "environment", pole: "left", president: "Biden"
  },
  {
    text: "Clinton designated millions of acres of federal land as protected national monuments, permanently blocking mining and logging.",
    axis: "environment", pole: "left", president: "Clinton"
  },
  {
    text: "Nixon signed the Endangered Species Act in 1973, giving the federal government power to protect wildlife habitats even at the cost of development projects.",
    axis: "environment", pole: "left", president: "Nixon"
  },

  // ── EXPANSION (9) ──────────────────────────────────
  {
    text: "Kennedy committed the US to landing on the Moon within a decade in 1961, massively increasing NASA's budget.",
    axis: "expansion", sub: "space", pole: "left", president: "Kennedy"
  },
  {
    text: "Eisenhower created NASA in 1958 and launched the US space program in response to the Soviet Sputnik satellite.",
    axis: "expansion", sub: "space", pole: "left", president: "Eisenhower"
  },
  {
    text: "Obama shifted NASA's focus toward partnering with private space companies like SpaceX rather than running government-only missions.",
    axis: "expansion", sub: "space", pole: "left", president: "Obama"
  },
  {
    text: "Truman approved continued development of nuclear weapons after WWII, leading to the hydrogen bomb and the nuclear arms race.",
    axis: "expansion", sub: "technology", pole: "left", president: "Truman"
  },
  {
    text: "Reagan launched the Strategic Defense Initiative ('Star Wars'), investing billions in space-based missile defense technology.",
    axis: "expansion", sub: "technology", pole: "left", president: "Reagan"
  },
  {
    text: "George W. Bush restricted federal funding for embryonic stem cell research in 2001 on ethical grounds.",
    axis: "expansion", sub: "bioethics", pole: "right", president: "G.W. Bush"
  },
  {
    text: "Obama lifted restrictions on embryonic stem cell research in 2009, expanding federal funding for scientists.",
    axis: "expansion", sub: "bioethics", pole: "left", president: "Obama"
  },
  {
    text: "Clinton invested heavily in the Human Genome Project, successfully mapping the entire human DNA sequence by 2003.",
    axis: "expansion", sub: "bioethics", pole: "left", president: "Clinton"
  },
  {
    text: "Trump created the US Space Force in 2019, establishing a new military branch focused on space operations.",
    axis: "expansion", sub: "space", pole: "left", president: "Trump"
  }
];

// Presidential profiles — scores on same axes as the quiz
// 0 = fully left pole, 100 = fully right pole
const PRESIDENTS = [
  { name: "Franklin D. Roosevelt", years: "1933–1945", party: "Democrat",
    economy: 15, society: 35, governance: 75, universality: 25, environment: 40,
    space: 50, technology: 30, bioethics: 50, growth: 15 },
  { name: "Harry S. Truman", years: "1945–1953", party: "Democrat",
    economy: 30, society: 30, governance: 70, universality: 15, environment: 48,
    space: 45, technology: 15, bioethics: 45, growth: 30 },
  { name: "Dwight D. Eisenhower", years: "1953–1961", party: "Republican",
    economy: 55, society: 42, governance: 48, universality: 35, environment: 50,
    space: 15, technology: 30, bioethics: 50, growth: 25 },
  { name: "John F. Kennedy", years: "1961–1963", party: "Democrat",
    economy: 38, society: 30, governance: 55, universality: 20, environment: 42,
    space: 5, technology: 20, bioethics: 42, growth: 25 },
  { name: "Lyndon B. Johnson", years: "1963–1969", party: "Democrat",
    economy: 12, society: 10, governance: 72, universality: 38, environment: 32,
    space: 15, technology: 35, bioethics: 42, growth: 18 },
  { name: "Richard Nixon", years: "1969–1974", party: "Republican",
    economy: 48, society: 62, governance: 82, universality: 45, environment: 25,
    space: 22, technology: 30, bioethics: 50, growth: 35 },
  { name: "Gerald Ford", years: "1974–1977", party: "Republican",
    economy: 60, society: 50, governance: 55, universality: 42, environment: 50,
    space: 42, technology: 45, bioethics: 50, growth: 45 },
  { name: "Jimmy Carter", years: "1977–1981", party: "Democrat",
    economy: 38, society: 25, governance: 35, universality: 15, environment: 12,
    space: 50, technology: 52, bioethics: 52, growth: 58 },
  { name: "Ronald Reagan", years: "1981–1989", party: "Republican",
    economy: 88, society: 70, governance: 45, universality: 62, environment: 78,
    space: 25, technology: 18, bioethics: 50, growth: 15 },
  { name: "George H.W. Bush", years: "1989–1993", party: "Republican",
    economy: 62, society: 55, governance: 52, universality: 28, environment: 38,
    space: 38, technology: 35, bioethics: 48, growth: 38 },
  { name: "Bill Clinton", years: "1993–2001", party: "Democrat",
    economy: 48, society: 38, governance: 45, universality: 22, environment: 28,
    space: 35, technology: 18, bioethics: 22, growth: 28 },
  { name: "George W. Bush", years: "2001–2009", party: "Republican",
    economy: 72, society: 65, governance: 85, universality: 62, environment: 72,
    space: 30, technology: 35, bioethics: 72, growth: 28 },
  { name: "Barack Obama", years: "2009–2017", party: "Democrat",
    economy: 32, society: 18, governance: 55, universality: 18, environment: 22,
    space: 25, technology: 22, bioethics: 18, growth: 28 },
  { name: "Donald Trump", years: "2017–2021", party: "Republican",
    economy: 72, society: 72, governance: 78, universality: 88, environment: 88,
    space: 18, technology: 30, bioethics: 50, growth: 22 },
  { name: "Joe Biden", years: "2021–2025", party: "Democrat",
    economy: 32, society: 18, governance: 58, universality: 28, environment: 18,
    space: 30, technology: 28, bioethics: 32, growth: 28 }
];
