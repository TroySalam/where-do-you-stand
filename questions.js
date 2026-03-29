const QUESTION_BANKS = {

  // ============================================================
  // TEEN MODE — 35 easy, casual questions for Australian teens
  // ============================================================
  teen: [

// Economy (5 questions)
{
  topic: "Economy",
  text: "Your school cafeteria starts charging more for junk food to make kids eat healthier. Fair?",
  options: [
    { label: "Yes — bad food should cost more to put people off", x: -0.3, y: 0.7 },
    { label: "No — let people choose what they buy with their own money", x: 0.2, y: -0.7 },
    { label: "Only if the healthy food gets cheaper too", x: -0.5, y: 0.3 },
    { label: "Schools shouldn't control what students eat at all", x: 0.5, y: -0.5 },
  ]
},
{
  topic: "Economy",
  text: "Should rich kids and poor kids go to the same schools?",
  options: [
    { label: "Yes — everyone deserves the same quality education", x: -0.8, y: 0.5 },
    { label: "No — private schools should be allowed for those who pay", x: 0.8, y: -0.3 },
    { label: "Fine as long as public schools get more funding", x: -0.5, y: 0.4 },
    { label: "Parents should be able to choose, but make it fair", x: 0.3, y: -0.2 },
  ]
},
{
  topic: "Economy",
  text: "Your part-time job pays minimum wage. Should the government force businesses to pay workers more?",
  options: [
    { label: "Yes — no one should work and still be broke", x: -0.7, y: 0.6 },
    { label: "No — businesses should set their own wages", x: 0.7, y: -0.6 },
    { label: "Yes, but only big companies, not small local ones", x: -0.4, y: 0.3 },
    { label: "Let the market sort it out — good workers earn more", x: 0.5, y: -0.4 },
  ]
},
{
  topic: "Economy",
  text: "A classmate's family is struggling to pay rent. Should the government step in and help?",
  options: [
    { label: "Yes — the government should make sure everyone has a home", x: -0.7, y: 0.8 },
    { label: "That's what charities and community are for, not government", x: 0.5, y: -0.5 },
    { label: "Government should help but only temporarily", x: -0.2, y: 0.4 },
    { label: "People should sort out their own finances", x: 0.7, y: -0.7 },
  ]
},
{
  topic: "Economy",
  text: "Billionaires exist while some people can't afford food. What should happen?",
  options: [
    { label: "Tax the ultra-rich way more and spread the wealth", x: -0.9, y: 0.6 },
    { label: "People earned their money — leave them alone", x: 0.8, y: -0.5 },
    { label: "Some extra tax on the mega-rich seems reasonable", x: -0.4, y: 0.3 },
    { label: "Focus on growing the economy so everyone benefits", x: 0.4, y: -0.2 },
  ]
},

// Environment (3 questions)
{
  topic: "Environment",
  text: "Should your school ban single-use plastic bottles even if it's inconvenient?",
  options: [
    { label: "Yes — the planet is more important than convenience", x: -0.6, y: 0.7 },
    { label: "No — it's up to each person to make green choices", x: 0.4, y: -0.6 },
    { label: "Yes, but only if there are free refill stations everywhere", x: -0.3, y: 0.4 },
    { label: "No — bans go too far, just educate people instead", x: 0.5, y: -0.3 },
  ]
},
{
  topic: "Environment",
  text: "Petrol cars are bad for the environment. Should the government ban them?",
  options: [
    { label: "Yes — we have to force the change to save the planet", x: -0.6, y: 0.8 },
    { label: "No — let people choose what car they drive", x: 0.6, y: -0.7 },
    { label: "Offer incentives to go electric instead of banning", x: -0.3, y: 0.2 },
    { label: "Ban new petrol cars but let existing ones stay", x: -0.2, y: 0.5 },
  ]
},
{
  topic: "Environment",
  text: "A big company is polluting a local river but also employs half the town. What should happen?",
  options: [
    { label: "Shut it down — jobs aren't worth destroying the environment", x: -0.7, y: 0.5 },
    { label: "Keep it open — those families need the income", x: 0.7, y: -0.4 },
    { label: "Force them to clean up their act or face huge fines", x: -0.4, y: 0.6 },
    { label: "Let the community decide — it's their town", x: 0.2, y: -0.3 },
  ]
},

// Social (3 questions)
{
  topic: "Social",
  text: "Two of your male friends want to get married one day. Should gay marriage be legal?",
  options: [
    { label: "Yes — love is love, everyone deserves equal rights", x: -0.8, y: -0.2 },
    { label: "No — marriage should be between a man and a woman", x: 0.8, y: 0.5 },
    { label: "Yes, but religious groups shouldn't be forced to host it", x: 0.2, y: -0.1 },
    { label: "The government shouldn't be involved in marriage at all", x: -0.1, y: -0.8 },
  ]
},
{
  topic: "Social",
  text: "Your school wants to celebrate more Indigenous Australian culture. How do you feel?",
  options: [
    { label: "Great — we should learn and celebrate it properly", x: -0.7, y: 0.3 },
    { label: "It's okay but shouldn't take over other subjects", x: 0.4, y: 0.1 },
    { label: "It should be compulsory in every school", x: -0.8, y: 0.6 },
    { label: "Schools should focus on core subjects instead", x: 0.6, y: 0.2 },
  ]
},
{
  topic: "Social",
  text: "A transgender girl wants to play on your school's girls sports team. Should she be allowed?",
  options: [
    { label: "Yes — she's a girl and should be treated like one", x: -0.8, y: -0.1 },
    { label: "No — it's about biology, not identity, in sport", x: 0.8, y: 0.3 },
    { label: "Depends on age — younger kids, yes; older competing, maybe not", x: 0.2, y: 0.1 },
    { label: "Let the school and students decide together", x: -0.1, y: -0.4 },
  ]
},

// Education (3 questions)
{
  topic: "Education",
  text: "Should university be free for everyone in Australia?",
  options: [
    { label: "Yes — education is a right, not something you pay for", x: -0.8, y: 0.6 },
    { label: "No — people who benefit from a degree should help pay for it", x: 0.7, y: -0.4 },
    { label: "Free for low-income students but not everyone", x: -0.3, y: 0.5 },
    { label: "Make it cheaper but not completely free", x: 0.1, y: 0.2 },
  ]
},
{
  topic: "Education",
  text: "Your school wants to bring back school uniforms after years without them. Good idea?",
  options: [
    { label: "Yes — it reduces judgment and keeps things equal", x: 0.5, y: 0.6 },
    { label: "No — let students express themselves through what they wear", x: -0.6, y: -0.5 },
    { label: "Only if students get a say in designing them", x: -0.2, y: 0.1 },
    { label: "It's a distraction — focus on actual teaching", x: -0.1, y: -0.3 },
  ]
},
{
  topic: "Education",
  text: "Should schools teach kids about sex ed, even if some parents disagree?",
  options: [
    { label: "Yes — teens need accurate info to stay safe", x: -0.7, y: 0.2 },
    { label: "No — parents should decide what their kids learn about this", x: 0.7, y: 0.5 },
    { label: "Yes, but parents should be able to opt their kids out", x: 0.2, y: 0.1 },
    { label: "Teach the basics but let families fill in the rest", x: 0.4, y: -0.1 },
  ]
},

// Technology (3 questions)
{
  topic: "Technology",
  text: "Australia just banned social media for under-16s. Was that the right call?",
  options: [
    { label: "Yes — young people need protection from social media harms", x: 0.3, y: 0.8 },
    { label: "No — teens should have the right to access the internet", x: -0.5, y: -0.7 },
    { label: "Better to teach digital literacy than ban it outright", x: -0.3, y: -0.2 },
    { label: "Parents should decide, not the government", x: 0.5, y: -0.5 },
  ]
},
{
  topic: "Technology",
  text: "AI is starting to write essays for students. Should schools punish kids who use it?",
  options: [
    { label: "Yes — using AI to cheat is still cheating", x: 0.5, y: 0.6 },
    { label: "No — AI is a tool everyone will use, schools should adapt", x: -0.5, y: -0.4 },
    { label: "Only if they pretend it's their own work", x: -0.1, y: 0.3 },
    { label: "Schools should teach how to use AI properly instead", x: -0.4, y: -0.1 },
  ]
},
{
  topic: "Technology",
  text: "Should the government be allowed to turn off the internet during major protests?",
  options: [
    { label: "No way — that's censorship and takes away our rights", x: -0.7, y: -0.8 },
    { label: "Yes — if it stops violence and keeps people safe", x: 0.4, y: 0.8 },
    { label: "Only for a short time in extreme emergencies", x: 0.2, y: 0.4 },
    { label: "Never — freedom of information is too important", x: -0.6, y: -0.6 },
  ]
},

// Digital Rights (3 questions)
{
  topic: "Digital Rights",
  text: "Should apps like TikTok be allowed to track your location and habits without asking you?",
  options: [
    { label: "No — companies shouldn't track us without clear permission", x: -0.6, y: 0.5 },
    { label: "If you use a free app, that's the deal — your data pays for it", x: 0.5, y: -0.4 },
    { label: "They should ask first and explain what they collect", x: -0.3, y: 0.3 },
    { label: "The government should force all apps to stop tracking", x: -0.5, y: 0.8 },
  ]
},
{
  topic: "Digital Rights",
  text: "Your school wants to monitor students' personal phones for cyberbullying. Should they?",
  options: [
    { label: "No — that's a total invasion of privacy", x: -0.5, y: -0.7 },
    { label: "Yes — bullying is serious and schools need to stop it", x: 0.3, y: 0.8 },
    { label: "Only school devices, not personal phones", x: 0.1, y: 0.3 },
    { label: "Teach kids about online behaviour instead of spying on them", x: -0.3, y: -0.2 },
  ]
},
{
  topic: "Digital Rights",
  text: "Should the government be able to see your private messages to stop crime?",
  options: [
    { label: "No — private messages should stay private, always", x: -0.6, y: -0.8 },
    { label: "Yes — if it stops serious crimes it's worth it", x: 0.5, y: 0.7 },
    { label: "Only with a warrant and judge approval", x: 0.1, y: 0.3 },
    { label: "Only for terrorism cases, nothing less serious", x: 0.3, y: 0.5 },
  ]
},

// Healthcare (3 questions)
{
  topic: "Healthcare",
  text: "Should mental health days be treated the same as sick days at school?",
  options: [
    { label: "Yes — mental health is just as real as physical health", x: -0.6, y: 0.3 },
    { label: "No — kids will just use it to skip school", x: 0.6, y: 0.4 },
    { label: "Yes, but with a limit on how many per term", x: 0.1, y: 0.5 },
    { label: "Yes — and schools should also provide more support", x: -0.7, y: 0.6 },
  ]
},
{
  topic: "Healthcare",
  text: "Should the government pay for everyone's dental care like it does with Medicare?",
  options: [
    { label: "Yes — teeth are part of health, why should it be separate", x: -0.7, y: 0.7 },
    { label: "No — people should pay for their own dental bills", x: 0.7, y: -0.5 },
    { label: "Only for kids and low-income families", x: -0.3, y: 0.4 },
    { label: "Subsidise it but don't make it fully free", x: 0.2, y: 0.2 },
  ]
},
{
  topic: "Healthcare",
  text: "Should vaccines be compulsory for kids, even if parents object?",
  options: [
    { label: "Yes — protecting everyone is more important than one family's choice", x: -0.5, y: 0.8 },
    { label: "No — parents have the right to make medical choices for their kids", x: 0.7, y: -0.4 },
    { label: "Not compulsory, but unvaccinated kids can't attend school", x: 0.1, y: 0.5 },
    { label: "Only for the most serious diseases", x: 0.3, y: 0.3 },
  ]
},

// Justice (3 questions)
{
  topic: "Justice",
  text: "Your friend got caught shoplifting from a big chain store. What should happen?",
  options: [
    { label: "Community service — punishment should help not just hurt", x: -0.5, y: 0.2 },
    { label: "Pay a fine and get a criminal record as a warning", x: 0.6, y: 0.5 },
    { label: "Just return the stuff and apologise — it's a first offence", x: -0.6, y: -0.3 },
    { label: "Same consequence as any adult who did it", x: 0.7, y: 0.3 },
  ]
},
{
  topic: "Justice",
  text: "Should 16-year-olds who commit serious crimes be tried as adults?",
  options: [
    { label: "No — teens are still developing and deserve different treatment", x: -0.7, y: -0.3 },
    { label: "Yes — if the crime is serious enough, age shouldn't matter", x: 0.7, y: 0.6 },
    { label: "Only for the most violent crimes", x: 0.3, y: 0.4 },
    { label: "Focus on rehab, not tougher sentences", x: -0.6, y: -0.1 },
  ]
},
{
  topic: "Justice",
  text: "Police want to use facial recognition cameras in shopping centres. Good idea?",
  options: [
    { label: "No — it's creepy and a massive invasion of privacy", x: -0.6, y: -0.7 },
    { label: "Yes — if it stops crime and makes people safer", x: 0.5, y: 0.7 },
    { label: "Only if there are strict rules on how the data is used", x: -0.1, y: 0.3 },
    { label: "No — the government already has too much surveillance power", x: -0.5, y: -0.6 },
  ]
},

// Immigration (2 questions)
{
  topic: "Immigration",
  text: "A family from another country is seeking asylum in Australia. Should they be allowed to stay?",
  options: [
    { label: "Yes — if they're fleeing danger we have a duty to help", x: -0.8, y: 0.3 },
    { label: "Only after strict background and security checks", x: 0.5, y: 0.5 },
    { label: "Yes — and we should take in way more refugees than we do now", x: -0.9, y: 0.1 },
    { label: "Australia can't take everyone — we have to have limits", x: 0.7, y: 0.3 },
  ]
},
{
  topic: "Immigration",
  text: "Should new people moving to Australia have to learn English before they can get a visa?",
  options: [
    { label: "Yes — speaking the language helps people fit in and find work", x: 0.7, y: 0.4 },
    { label: "No — people should be able to learn English after they arrive", x: -0.6, y: -0.2 },
    { label: "Encourage it but don't make it a strict requirement", x: -0.2, y: 0.1 },
    { label: "Only for people applying for citizenship, not all visas", x: 0.3, y: 0.2 },
  ]
},

// Culture (2 questions)
{
  topic: "Culture",
  text: "Should Australia Day be moved from January 26th?",
  options: [
    { label: "Yes — that date is painful for Indigenous Australians", x: -0.8, y: 0.1 },
    { label: "No — it's our national day and shouldn't be changed", x: 0.8, y: 0.3 },
    { label: "Move it to a date that all Australians can celebrate", x: -0.4, y: 0.2 },
    { label: "It's just a public holiday — the date doesn't really matter", x: 0.1, y: -0.3 },
  ]
},
{
  topic: "Culture",
  text: "Should schools put more focus on Australian history, even the dark parts?",
  options: [
    { label: "Yes — we can't understand the present without knowing the full past", x: -0.6, y: 0.4 },
    { label: "No — we should focus on what makes Australia great, not guilt", x: 0.7, y: 0.2 },
    { label: "Teach it all but don't make kids feel personally responsible", x: 0.1, y: 0.3 },
    { label: "Yes — and it should be compulsory, not optional", x: -0.7, y: 0.6 },
  ]
},

// Work (2 questions)
{
  topic: "Work",
  text: "You work weekends at a café. Should workers be paid extra for weekend shifts?",
  options: [
    { label: "Yes — working on weekends is a sacrifice and should be rewarded", x: -0.6, y: 0.5 },
    { label: "No — the wage should be the same no matter what day it is", x: 0.7, y: -0.5 },
    { label: "Yes, but only if the worker doesn't want to do weekends", x: -0.2, y: 0.2 },
    { label: "Let the worker and employer agree between themselves", x: 0.5, y: -0.4 },
  ]
},
{
  topic: "Work",
  text: "Should 15-year-olds be allowed to work more hours during school holidays?",
  options: [
    { label: "Yes — it's their holidays and their choice", x: 0.2, y: -0.6 },
    { label: "No — young workers need protection even during holidays", x: -0.2, y: 0.6 },
    { label: "Yes, but only with parent permission", x: 0.4, y: 0.3 },
    { label: "The current rules are fine as they are", x: 0.5, y: 0.1 },
  ]
},

// Housing (3 questions)
{
  topic: "Housing",
  text: "Houses in Australia are super expensive. Should the government build more public housing?",
  options: [
    { label: "Yes — everyone deserves somewhere safe and affordable to live", x: -0.7, y: 0.7 },
    { label: "No — let the private market build more homes instead", x: 0.7, y: -0.5 },
    { label: "Yes, but only for people who really can't afford anything else", x: -0.2, y: 0.5 },
    { label: "Change the rules to make it cheaper to build homes", x: 0.3, y: -0.2 },
  ]
},
{
  topic: "Housing",
  text: "Should landlords be allowed to raise rent by as much as they want?",
  options: [
    { label: "No — the government should cap how much rent can go up each year", x: -0.7, y: 0.7 },
    { label: "Yes — it's their property and their choice", x: 0.8, y: -0.5 },
    { label: "There should be a reasonable limit to protect renters", x: -0.4, y: 0.5 },
    { label: "Market competition will sort it out without government rules", x: 0.6, y: -0.4 },
  ]
},
{
  topic: "Housing",
  text: "Your mate's family got evicted with two weeks notice. Should renters have more protection?",
  options: [
    { label: "Yes — renters deserve stability and proper notice periods", x: -0.7, y: 0.6 },
    { label: "No — landlords should be able to manage their own property", x: 0.7, y: -0.4 },
    { label: "At least 60 days notice should be the law", x: -0.5, y: 0.5 },
    { label: "Let the tenant and landlord sort it out between them", x: 0.4, y: -0.3 },
  ]
},
  ],

  // ============================================================
  // ADULT MODE — 35 regular, real-world policy questions
  // ============================================================
  adult: [

// Economy (5 questions)
{
  topic: "Economy",
  text: "Big multinationals like tech giants operating in Australia often pay very little tax by shifting profits overseas. Should the government close these loopholes and force them to pay their fair share?",
  options: [
    { label: "Yes — corporations must pay full tax on Australian profits, no exceptions", x: -0.8, y: 0.7 },
    { label: "Close the worst loopholes, but keep some incentives to attract foreign investment", x: -0.3, y: 0.0 },
    { label: "Leave it to international agreements — unilateral action could scare off investment", x: 0.5, y: -0.3 },
    { label: "Lower the corporate tax rate for everyone so avoidance becomes less worthwhile", x: 0.8, y: -0.6 },
  ]
},
{
  topic: "Economy",
  text: "The government is running a budget deficit. It needs to either raise taxes or cut spending on public services. Which approach do you prefer?",
  options: [
    { label: "Raise taxes on high earners and big business to protect services", x: -0.8, y: 0.6 },
    { label: "A balanced mix — modest tax rises and targeted spending cuts", x: -0.2, y: 0.0 },
    { label: "Mostly cut government spending and find efficiencies in the public sector", x: 0.6, y: -0.4 },
    { label: "Cut taxes to grow the economy and let revenue catch up naturally", x: 0.9, y: -0.7 },
  ]
},
{
  topic: "Economy",
  text: "The minimum wage in Australia is set to be reviewed. Workers say it hasn't kept up with the cost of living. Small business owners say a big rise will force them to cut jobs. What should happen?",
  options: [
    { label: "Raise the minimum wage significantly — workers need a living wage now", x: -0.8, y: 0.5 },
    { label: "Raise it gradually in line with inflation to balance workers and businesses", x: -0.3, y: 0.0 },
    { label: "Keep increases small and let market wages rise naturally in a strong economy", x: 0.5, y: -0.3 },
    { label: "Remove the minimum wage — let employers and workers negotiate freely", x: 0.8, y: -0.8 },
  ]
},
{
  topic: "Economy",
  text: "Australia's top income tax rate kicks in at $190,000. Some argue this threshold should be lower, taxing more from high earners to fund services. Others say it punishes success. What do you think?",
  options: [
    { label: "Lower the threshold and raise the rate — the wealthy should contribute more", x: -0.8, y: 0.7 },
    { label: "Leave the threshold but add a small levy on earnings above $500,000", x: -0.3, y: 0.3 },
    { label: "Keep tax rates as they are — high earners already pay most of the tax", x: 0.5, y: -0.2 },
    { label: "Cut the top rate to reward ambition and encourage investment in Australia", x: 0.8, y: -0.6 },
  ]
},
{
  topic: "Economy",
  text: "The Reserve Bank raises interest rates to fight inflation, but this makes mortgage repayments much harder for millions of homeowners. Should the government step in to protect struggling borrowers?",
  options: [
    { label: "Yes — the government should offer relief payments or rate caps for owner-occupiers", x: -0.7, y: 0.8 },
    { label: "Offer targeted help for those at genuine risk of losing their home", x: -0.2, y: 0.4 },
    { label: "No — interfering with monetary policy creates worse problems long term", x: 0.5, y: -0.3 },
    { label: "Let the market correct itself — government intervention caused inflation in the first place", x: 0.8, y: -0.7 },
  ]
},

// Housing (2 questions)
{
  topic: "Housing",
  text: "Your landlord wants to raise rent by 15% this year, citing higher mortgage costs. Renters say they can barely afford it. Should the government limit how much rents can rise each year?",
  options: [
    { label: "Yes — cap rent increases at inflation, and enforce it strictly", x: -0.8, y: 0.8 },
    { label: "Allow moderate caps but with exemptions for genuinely rising costs", x: -0.3, y: 0.4 },
    { label: "No caps — but invest more in public housing so renters have alternatives", x: -0.5, y: 0.2 },
    { label: "No — rent controls reduce supply and make housing shortages worse over time", x: 0.7, y: -0.5 },
  ]
},
{
  topic: "Housing",
  text: "Housing is unaffordable in most Australian cities. One proposed fix is to allow much denser development — more apartments and townhouses — in suburban areas currently zoned for houses only. Do you support this?",
  options: [
    { label: "Yes — we need far more housing and zoning rules should be scrapped or loosened", x: -0.4, y: -0.6 },
    { label: "Allow denser housing near transport hubs, but protect established neighbourhoods", x: 0.1, y: 0.1 },
    { label: "Leave zoning decisions to local councils who know their communities best", x: 0.5, y: -0.3 },
    { label: "Preserve neighbourhood character — dense development damages communities and liveability", x: 0.8, y: 0.5 },
  ]
},

// Healthcare (3 questions)
{
  topic: "Healthcare",
  text: "GP visits now cost $50–$80 out of pocket at most clinics because bulk billing has dropped. Should the government fund Medicare so that all GP visits are genuinely free again?",
  options: [
    { label: "Yes — free GP care for everyone, funded by increasing the Medicare levy", x: -0.8, y: 0.8 },
    { label: "Make GP visits free for low-income earners, concession cardholders, and children", x: -0.4, y: 0.5 },
    { label: "Increase bulk billing incentives but leave it to doctors to decide", x: 0.2, y: 0.1 },
    { label: "Let the market set fees — competition between clinics will keep costs down", x: 0.8, y: -0.6 },
  ]
},
{
  topic: "Healthcare",
  text: "Public hospital waiting lists are blowing out — people wait months for elective surgery. Should the government increase hospital funding significantly, even if it means higher taxes?",
  options: [
    { label: "Yes — a well-funded public system is a right; raise taxes if needed", x: -0.8, y: 0.7 },
    { label: "Fund hospitals better but also incentivise private health to take pressure off", x: -0.1, y: 0.0 },
    { label: "Focus on efficiency and administration cuts before spending more", x: 0.5, y: -0.1 },
    { label: "Expand private healthcare options and let competition drive better outcomes", x: 0.8, y: -0.6 },
  ]
},
{
  topic: "Healthcare",
  text: "Should adults be allowed to legally access assisted dying if they have a terminal illness and are experiencing unbearable suffering, with proper safeguards in place?",
  options: [
    { label: "Yes — it is a fundamental right to choose how and when you die", x: -0.7, y: -0.8 },
    { label: "Yes, but with very strict criteria, specialist approval, and a waiting period", x: -0.2, y: 0.3 },
    { label: "Only in extreme cases with unanimous medical and judicial sign-off", x: 0.3, y: 0.6 },
    { label: "No — the state should protect life; better palliative care is the answer", x: 0.8, y: 0.8 },
  ]
},

// Environment (3 questions)
{
  topic: "Environment",
  text: "Australia has some of the highest per-capita carbon emissions in the world. Should we put a price on carbon emissions — making polluting industries pay — even if it raises energy bills?",
  options: [
    { label: "Yes — a strong carbon price is essential and households can be compensated", x: -0.8, y: 0.5 },
    { label: "A modest carbon price phased in slowly, with rebates for low-income earners", x: -0.3, y: 0.3 },
    { label: "Voluntary industry targets are better than new taxes on businesses and consumers", x: 0.5, y: -0.2 },
    { label: "No new carbon taxes — they hurt workers and families without changing the global picture", x: 0.8, y: -0.5 },
  ]
},
{
  topic: "Environment",
  text: "A mining company wants to open a large new coal mine in regional Queensland, promising thousands of jobs. Environmentalists say it will damage the Great Barrier Reef. Should the government approve it?",
  options: [
    { label: "No — the reef and climate obligations outweigh the economic benefit", x: -0.8, y: 0.4 },
    { label: "Only approve it with extremely strict environmental conditions and regular reviews", x: -0.2, y: 0.5 },
    { label: "Approve it — regional jobs and energy security matter, and regulations already exist", x: 0.6, y: 0.2 },
    { label: "Approve it — the market should decide, not government picking energy winners and losers", x: 0.8, y: -0.5 },
  ]
},
{
  topic: "Environment",
  text: "Should Australia set a legally binding target to reach net-zero emissions by 2035, faster than the current 2050 target, even if it requires shutting down fossil fuel industries sooner?",
  options: [
    { label: "Yes — the climate crisis demands urgent action regardless of economic disruption", x: -0.9, y: 0.6 },
    { label: "Move faster than 2050 but give industries a clear, managed transition timeline", x: -0.3, y: 0.1 },
    { label: "Stick with 2050 — rushing risks job losses and power blackouts", x: 0.5, y: 0.1 },
    { label: "No binding targets at all — let technology and market forces drive the transition", x: 0.8, y: -0.7 },
  ]
},

// Education (3 questions)
{
  topic: "Education",
  text: "Private schools in Australia receive significant government funding despite charging high fees. Should this funding be redirected to underfunded public schools instead?",
  options: [
    { label: "Yes — public schools are underfunded; private schools should rely on fees and donations", x: -0.8, y: 0.6 },
    { label: "Reduce private school funding gradually and redirect it to disadvantaged public schools", x: -0.4, y: 0.4 },
    { label: "Keep funding as is — parents who choose private schools still pay taxes", x: 0.5, y: 0.1 },
    { label: "Increase funding to all schools and remove government from curriculum decisions", x: 0.2, y: -0.4 },
  ]
},
{
  topic: "Education",
  text: "University graduates in Australia now leave with average debts of $30,000+. Should university education be free, paid for by general taxation?",
  options: [
    { label: "Yes — free university is an investment in society and removes barriers for poorer students", x: -0.8, y: 0.6 },
    { label: "Make degrees free for high-demand fields like nursing, teaching, and engineering", x: -0.3, y: 0.4 },
    { label: "Keep HECS as is — graduates earn more, so repaying over time is fair", x: 0.4, y: -0.1 },
    { label: "University should be fully market-priced; students who benefit should pay the full cost", x: 0.8, y: -0.6 },
  ]
},
{
  topic: "Education",
  text: "Some parents want the right to take their children out of sexual health and relationships education at school on religious or personal grounds. Should that opt-out be allowed?",
  options: [
    { label: "No — this curriculum is essential for safety and all children deserve it equally", x: -0.7, y: 0.5 },
    { label: "Allow limited opt-outs but ensure basic consent and safety content is still covered", x: -0.1, y: 0.3 },
    { label: "Parents should decide what values their children are taught — opt-outs are a reasonable right", x: 0.6, y: 0.2 },
    { label: "Full opt-out rights — parental authority over children's education should be absolute", x: 0.8, y: -0.4 },
  ]
},

// Work (2 questions)
{
  topic: "Work",
  text: "Many Australians work casual or gig economy jobs with no sick leave, no job security, and no guarantee of hours. Should these workers be given the same rights as permanent employees?",
  options: [
    { label: "Yes — all workers deserve sick leave, job security, and predictable hours", x: -0.8, y: 0.6 },
    { label: "Give casuals access to sick leave after 12 months but keep flexibility for employers", x: -0.3, y: 0.1 },
    { label: "Keep the current system — flexibility suits many workers and forcing rights could cut jobs", x: 0.5, y: -0.2 },
    { label: "Deregulate further — let workers and employers negotiate terms without government interference", x: 0.8, y: -0.7 },
  ]
},
{
  topic: "Work",
  text: "A major employer wants to replace 30% of its workforce with AI automation. Should the government step in to slow this down or protect displaced workers?",
  options: [
    { label: "Yes — levy companies that automate jobs and use it to fund retraining and income support", x: -0.7, y: 0.8 },
    { label: "Require companies to fund retraining for any worker they replace with automation", x: -0.3, y: 0.5 },
    { label: "Expand unemployment support but don't slow automation — it raises living standards long term", x: 0.2, y: 0.1 },
    { label: "Government should stay out — automation is progress and the market will create new jobs", x: 0.8, y: -0.7 },
  ]
},

// Social (3 questions)
{
  topic: "Social",
  text: "Should the Australian government recognise Indigenous sovereignty and sign a formal treaty with Aboriginal and Torres Strait Islander peoples?",
  options: [
    { label: "Yes — a treaty is long overdue and essential for justice and reconciliation", x: -0.8, y: 0.4 },
    { label: "Support a treaty, but it needs broad community agreement and proper process first", x: -0.3, y: 0.1 },
    { label: "Prioritise practical measures like closing the gap in health and education over symbolic steps", x: 0.4, y: 0.2 },
    { label: "No treaty — Australia should focus on equality for all citizens, not separate arrangements", x: 0.8, y: -0.2 },
  ]
},
{
  topic: "Social",
  text: "JobSeeker (the unemployment payment) sits well below the poverty line. Should it be raised significantly, even if it means higher taxes or more government debt?",
  options: [
    { label: "Yes — no one should live in poverty while looking for work; raise it substantially", x: -0.8, y: 0.7 },
    { label: "Raise it to at least match the poverty line, with work-search requirements", x: -0.3, y: 0.5 },
    { label: "Small increases are fine, but higher payments reduce the incentive to find work", x: 0.5, y: 0.1 },
    { label: "The payment is adequate — government welfare should be a safety net, not a lifestyle", x: 0.8, y: -0.2 },
  ]
},
{
  topic: "Social",
  text: "Religious organisations that run schools and hospitals receive public funding. Should they be exempt from anti-discrimination laws when hiring staff or accepting students?",
  options: [
    { label: "No — if you take public money, you follow the same non-discrimination rules as everyone else", x: -0.8, y: 0.6 },
    { label: "Allow very narrow exemptions for religious roles, but not for teachers or medical staff", x: -0.2, y: 0.0 },
    { label: "Broad exemptions are reasonable — religious freedom is a fundamental right", x: 0.6, y: 0.3 },
    { label: "Full religious exemptions — the state should not interfere with how faith communities operate", x: 0.8, y: -0.3 },
  ]
},

// Immigration (2 questions)
{
  topic: "Immigration",
  text: "Australia's immigration intake has been running at record highs, which some say helps fill job shortages but others say worsens the housing crisis. Should the government cut immigration numbers?",
  options: [
    { label: "No — immigration is economically vital and we should welcome more people, not fewer", x: -0.8, y: -0.3 },
    { label: "Modest cuts are reasonable, but fix housing supply rather than blaming migrants", x: -0.2, y: 0.2 },
    { label: "Cut numbers significantly until housing and infrastructure catch up", x: 0.6, y: 0.4 },
    { label: "Dramatically reduce immigration — Australians should come first in housing and jobs", x: 0.9, y: 0.5 },
  ]
},
{
  topic: "Immigration",
  text: "People who arrive in Australia by boat seeking asylum are currently processed offshore and cannot settle in Australia. Should they be allowed to apply for protection onshore like other asylum seekers?",
  options: [
    { label: "Yes — offshore detention is cruel and everyone deserves a fair onshore assessment", x: -0.9, y: -0.5 },
    { label: "Process claims onshore but with strict timelines and clear conditions", x: -0.4, y: 0.2 },
    { label: "Keep offshore processing — it has stopped drownings at sea and must continue", x: 0.6, y: 0.5 },
    { label: "Turn boats back immediately — strong borders are non-negotiable for national sovereignty", x: 0.9, y: 0.7 },
  ]
},

// Justice (3 questions)
{
  topic: "Justice",
  text: "Australia has one of the highest rates of imprisonment for Aboriginal people in the world. Should the government set a formal target to reduce Aboriginal incarceration, even if it means fewer prison sentences for some offences?",
  options: [
    { label: "Yes — the system is broken; we need community-led justice and fewer custodial sentences", x: -0.8, y: -0.4 },
    { label: "Set a target and fund diversion programs, but maintain prison for serious crimes", x: -0.3, y: 0.2 },
    { label: "Address the root causes like poverty and trauma rather than changing sentencing rules", x: 0.2, y: 0.3 },
    { label: "No special targets based on race — the law should apply equally to everyone", x: 0.8, y: 0.3 },
  ]
},
{
  topic: "Justice",
  text: "Police in some states have powers to move on or search people without specific cause in certain areas. Should these stop-and-search powers be scaled back to protect civil liberties?",
  options: [
    { label: "Yes — they are disproportionately used against minorities and should be abolished", x: -0.8, y: -0.7 },
    { label: "Scale them back significantly and require evidence of specific risk before use", x: -0.3, y: -0.2 },
    { label: "Keep them but strengthen oversight and complaint mechanisms", x: 0.4, y: 0.3 },
    { label: "Expand these powers — police need the tools to keep communities safe", x: 0.7, y: 0.8 },
  ]
},
{
  topic: "Justice",
  text: "Recreational cannabis use is illegal in most of Australia. Should it be legalised and regulated like alcohol, with age restrictions and taxation?",
  options: [
    { label: "Yes — legalise it, tax it, and treat it like alcohol or tobacco", x: -0.7, y: -0.8 },
    { label: "Decriminalise personal use but don't create a legal market yet", x: -0.3, y: -0.3 },
    { label: "Keep it illegal but focus enforcement on dealers, not users", x: 0.4, y: 0.3 },
    { label: "Keep it illegal and enforce the law — legalisation sends the wrong message", x: 0.7, y: 0.7 },
  ]
},

// Technology (3 questions)
{
  topic: "Technology",
  text: "Australian news outlets have won the right to be paid by tech giants like Google and Meta when their content appears in feeds and search results. Should this policy be extended and strengthened?",
  options: [
    { label: "Yes — tech platforms profit massively from news content and must pay fairly for it", x: -0.6, y: 0.7 },
    { label: "Keep the current framework but improve transparency around how payments are calculated", x: -0.1, y: 0.4 },
    { label: "Let the industry negotiate commercial deals without government mandating payments", x: 0.5, y: -0.3 },
    { label: "Repeal it — it's a handout to legacy media and distorts the free market", x: 0.8, y: -0.6 },
  ]
},
{
  topic: "Technology",
  text: "AI tools are increasingly used in hiring processes to screen job applications, sometimes filtering out candidates before a human reads their resume. Should this be regulated?",
  options: [
    { label: "Yes — AI hiring tools should be banned or require human review of every rejection", x: -0.7, y: 0.7 },
    { label: "Require companies to audit AI hiring tools for bias and disclose when AI is used", x: -0.2, y: 0.5 },
    { label: "Voluntary industry standards are enough — over-regulation slows innovation", x: 0.5, y: -0.2 },
    { label: "No regulation — employers should be free to use any tool they choose to find the best staff", x: 0.8, y: -0.6 },
  ]
},
{
  topic: "Technology",
  text: "Social media platforms have been linked to rising rates of anxiety and depression in young Australians. Should the government force platforms to make their algorithms less addictive?",
  options: [
    { label: "Yes — platforms should be legally required to prove their products are safe before operating", x: -0.6, y: 0.9 },
    { label: "Require platforms to offer opt-out tools for algorithmic feeds and limit notifications by default", x: -0.2, y: 0.5 },
    { label: "Better digital literacy education is the answer, not restricting how platforms work", x: 0.4, y: -0.1 },
    { label: "Adults choose to use these platforms — government should not regulate private products", x: 0.8, y: -0.7 },
  ]
},

// Digital Rights (3 questions)
{
  topic: "Digital Rights",
  text: "The Australian government passed laws allowing it to access encrypted messages on platforms like WhatsApp without a court order under national security laws. Should this power be rolled back?",
  options: [
    { label: "Yes — backdoors in encryption put everyone's privacy at risk and should be outlawed", x: -0.7, y: -0.8 },
    { label: "Keep it only for terrorism and serious crime, with strict judicial oversight", x: -0.1, y: 0.3 },
    { label: "Security agencies need these tools; the current oversight framework is sufficient", x: 0.5, y: 0.5 },
    { label: "Expand these powers — national security must come before digital privacy concerns", x: 0.7, y: 0.9 },
  ]
},
{
  topic: "Digital Rights",
  text: "Companies collect enormous amounts of data about Australians — your location, purchases, and browsing habits. Should you have the legal right to demand a company delete your data?",
  options: [
    { label: "Yes — strong data deletion rights should be enshrined in law, like the EU's GDPR", x: -0.7, y: 0.6 },
    { label: "A right to deletion for personal data, with reasonable exceptions for fraud prevention", x: -0.2, y: 0.4 },
    { label: "Better privacy education and clearer consent at sign-up is enough", x: 0.3, y: -0.1 },
    { label: "Regulating data collection stifles innovation — users can choose not to use these services", x: 0.8, y: -0.6 },
  ]
},
{
  topic: "Digital Rights",
  text: "Australia introduced a law banning children under 16 from using social media. Should this kind of age-based restriction on online platforms be supported?",
  options: [
    { label: "Yes — protecting children from social media harms justifies this restriction", x: 0.3, y: 0.9 },
    { label: "Support an age limit but only with proper digital ID systems that also protect adult privacy", x: 0.0, y: 0.5 },
    { label: "Prefer parental controls and platform safety features over a hard government ban", x: 0.4, y: -0.2 },
    { label: "No — it won't work, creates a surveillance infrastructure, and limits free expression", x: -0.6, y: -0.6 },
  ]
},

// Extra Social question to reach 35 total
{
  topic: "Social",
  text: "Australia's aged care system has been repeatedly found to be understaffed and underfunded, leaving elderly residents without adequate care. Should the government take direct control of more aged care facilities?",
  options: [
    { label: "Yes — aged care is too important to leave to the private sector; the government should run it", x: -0.8, y: 0.8 },
    { label: "Set much stricter minimum staffing standards and heavily fine providers who don't comply", x: -0.3, y: 0.6 },
    { label: "Fund private providers better but let them manage operations — government isn't efficient", x: 0.5, y: 0.1 },
    { label: "Open aged care to full market competition — that drives quality better than regulation", x: 0.8, y: -0.5 },
  ]
},

// Culture (2 questions)
{
  topic: "Culture",
  text: "Should Australia become a republic and replace the King as head of state with an elected or appointed Australian citizen?",
  options: [
    { label: "Yes — it's time Australia had a fully independent identity with an Australian head of state", x: -0.7, y: 0.2 },
    { label: "Become a republic but only after careful design to avoid giving too much power to one person", x: -0.2, y: 0.1 },
    { label: "Keep the current system — the constitutional monarchy works well and change risks instability", x: 0.6, y: 0.4 },
    { label: "Strongly support the monarchy — it is part of our heritage and keeps politics out of the role", x: 0.9, y: -0.2 },
  ]
},
{
  topic: "Culture",
  text: "Australia Day is celebrated on January 26, the date of the First Fleet's arrival in 1788 — a day many Aboriginal Australians call Invasion Day. Should the date be changed?",
  options: [
    { label: "Yes — celebrating on that date is deeply hurtful and the date should change", x: -0.8, y: 0.3 },
    { label: "Change the date and use it as an opportunity for genuine national reflection and unity", x: -0.4, y: 0.2 },
    { label: "Keep the date but acknowledge its full history alongside the celebration", x: 0.4, y: 0.2 },
    { label: "Keep the date — changing it is divisive political correctness that erases our history", x: 0.9, y: -0.2 },
  ]
},
  ],

  // ============================================================
  // ACADEMIC MODE — 35 questions mixing teen accessibility with adult policy depth
  // ============================================================
  academic: [

// Economy (5 questions)
{
  topic: "Economy",
  text: "Some economists say raising the minimum wage helps workers afford a decent life. Others warn it pushes businesses to cut jobs or raise prices. If Australia raised the minimum wage to $30/hour, what would you expect?",
  options: [
    { label: "It would help millions of low-paid workers and boost consumer spending across the economy.", x: -0.7, y: 0.5 },
    { label: "It would force small businesses to cut staff, ultimately hurting the workers it meant to help.", x: 0.7, y: -0.5 },
    { label: "A gradual phased increase could work if small businesses receive government support during the transition.", x: -0.3, y: 0.3 },
    { label: "Wages should be set by market competition, not government mandates — let supply and demand decide.", x: 0.6, y: -0.7 },
  ]
},
{
  topic: "Economy",
  text: "Australia's wealthiest 1% own more wealth than the bottom 50% combined. The philosopher John Rawls argued a just society is one you'd be OK entering no matter where you landed. Does Australia need more redistribution to be fair?",
  options: [
    { label: "Yes — a truly fair society requires taxing wealth and redistributing it to those born with less opportunity.", x: -0.8, y: 0.6 },
    { label: "No — wealth inequality reflects different effort and choices; heavy redistribution punishes success.", x: 0.7, y: -0.4 },
    { label: "Some redistribution through progressive taxes is fair, but we should focus on equal opportunity, not equal outcomes.", x: -0.2, y: 0.2 },
    { label: "Voluntary charity and private giving are better solutions than government-enforced redistribution of wealth.", x: 0.5, y: -0.6 },
  ]
},
{
  topic: "Economy",
  text: "When the economy slumps, some argue the government should spend big — on infrastructure, welfare, and public services — to stimulate growth. Others say government debt crowds out private investment and makes things worse. What's your view?",
  options: [
    { label: "Government stimulus spending is essential during downturns — it creates jobs and keeps the economy moving.", x: -0.6, y: 0.7 },
    { label: "Governments should cut spending in downturns, not grow debt — live within your means like any household.", x: 0.7, y: -0.3 },
    { label: "Targeted stimulus on productive infrastructure can work, but blanket spending wastes taxpayer money.", x: 0.1, y: 0.3 },
    { label: "Lower taxes and deregulation do more to stimulate growth than any government spending program.", x: 0.8, y: -0.7 },
  ]
},
{
  topic: "Economy",
  text: "Large corporations like Amazon and Apple pay very little tax in Australia by shifting profits to low-tax countries. Should Australia take stronger action to make multinational companies pay their fair share?",
  options: [
    { label: "Absolutely — multinationals use Australian infrastructure and markets; they must pay tax here like everyone else.", x: -0.7, y: 0.6 },
    { label: "Lower corporate tax rates would stop profit-shifting and attract more foreign investment to Australia.", x: 0.8, y: -0.5 },
    { label: "International cooperation on a global minimum corporate tax is the right solution rather than unilateral action.", x: -0.3, y: 0.4 },
    { label: "Tax avoidance is legal; close loopholes, but don't penalise businesses for following the rules that exist.", x: 0.4, y: -0.2 },
  ]
},
{
  topic: "Economy",
  text: "Free trade agreements allow Australian goods to be sold overseas more easily, but also mean cheaper imports that can undercut local manufacturers. On balance, is free trade good for Australia?",
  options: [
    { label: "Free trade benefits consumers with lower prices and drives economic growth — Australia should embrace it.", x: 0.6, y: -0.6 },
    { label: "Australia should protect strategic industries from cheap imports to preserve jobs and economic sovereignty.", x: -0.5, y: 0.5 },
    { label: "Free trade is good overall, but workers displaced by imports deserve retraining and government support.", x: -0.2, y: 0.2 },
    { label: "Trade policy should be driven by national interest — not ideology — and reviewed industry by industry.", x: 0.2, y: 0.1 },
  ]
},

// Environment (3 questions)
{
  topic: "Environment",
  text: "Australia is one of the world's largest coal and gas exporters. Phasing out fossil fuels would reduce carbon emissions but could cost thousands of regional jobs. How fast should Australia transition to clean energy?",
  options: [
    { label: "As fast as possible — climate change is an emergency and delay costs more lives and money in the long run.", x: -0.8, y: 0.5 },
    { label: "Australia's coal exports are someone else's emissions — we shouldn't sacrifice our economy for a global problem.", x: 0.8, y: -0.3 },
    { label: "A managed transition over 10–15 years with real support for affected workers and communities is the right balance.", x: -0.3, y: 0.3 },
    { label: "Market forces and new technology will drive the energy transition — government mandates just slow innovation.", x: 0.5, y: -0.6 },
  ]
},
{
  topic: "Environment",
  text: "A carbon tax makes polluting industries pay per tonne of CO₂ they emit. Supporters say it's the most efficient way to cut emissions. Critics say it raises energy prices for ordinary Australians who can least afford it. Do you support a carbon price?",
  options: [
    { label: "Yes — putting a price on carbon is the most economically sound way to reduce emissions and drive clean investment.", x: -0.6, y: 0.4 },
    { label: "No — carbon taxes just get passed on to consumers and hurt working families without solving the climate problem.", x: 0.6, y: -0.4 },
    { label: "A carbon price could work if all revenue is returned to households as a dividend, protecting those on lower incomes.", x: -0.3, y: 0.2 },
    { label: "Direct government investment in renewables is better than market mechanisms that add costs to everyday life.", x: -0.5, y: 0.7 },
  ]
},
{
  topic: "Environment",
  text: "Australia has some of the world's most biodiverse ecosystems, but land clearing for farming and development continues to destroy habitats. Should stricter environmental laws limit what landowners can do with their own property?",
  options: [
    { label: "Yes — biodiversity belongs to all Australians and future generations, not just the landowner who happens to hold the title.", x: -0.7, y: 0.7 },
    { label: "No — if you own land, you should be free to use it; environmental goals should be achieved through incentives, not restrictions.", x: 0.7, y: -0.6 },
    { label: "Landowners who protect native habitat deserve to be paid for it — a stewardship payment scheme makes more sense than bans.", x: 0.1, y: -0.1 },
    { label: "Some baseline protections for endangered ecosystems are justified, but current laws already go too far in restricting farmers.", x: 0.5, y: 0.2 },
  ]
},

// Social (3 questions)
{
  topic: "Social",
  text: "Some people argue that systemic racism — discrimination built into laws, institutions, and social norms — still disadvantages Aboriginal and Torres Strait Islander Australians today. Does Australia need targeted policies to address this, or should policy be race-blind?",
  options: [
    { label: "Targeted policies for First Nations Australians are essential — you can't fix historical injustice with colour-blind rules.", x: -0.8, y: 0.5 },
    { label: "Government policy should treat every citizen equally regardless of race — identity-based programs create division.", x: 0.7, y: -0.2 },
    { label: "Targeted investment in remote communities and legal reform is justified, but outcomes — not race — should ultimately guide policy.", x: -0.3, y: 0.3 },
    { label: "Community-led solutions work better than top-down government programs that ignore local knowledge and culture.", x: -0.4, y: -0.3 },
  ]
},
{
  topic: "Social",
  text: "Australia legalised same-sex marriage in 2017. Some religious schools and organisations still want exemptions that allow them to discriminate in hiring based on sexual orientation. How should the law balance religious freedom and LGBTQ+ rights?",
  options: [
    { label: "No organisation receiving public funding should be allowed to discriminate — rights must be universal.", x: -0.8, y: 0.4 },
    { label: "Religious institutions should have broad autonomy to operate according to their beliefs, including in employment.", x: 0.8, y: 0.3 },
    { label: "Narrow exemptions may be reasonable for core religious roles, but not for general staff like teachers or admin workers.", x: -0.2, y: 0.2 },
    { label: "People should be free to choose which organisations they work for — the market, not law, should resolve these tensions.", x: 0.4, y: -0.6 },
  ]
},
{
  topic: "Social",
  text: "Drug-related deaths in Australia remain high despite decades of prohibition. Portugal decriminalised personal drug use in 2001 and saw overdose deaths and HIV infections fall dramatically. Should Australia try a similar approach?",
  options: [
    { label: "Yes — treating drug use as a health issue rather than a crime clearly saves lives, as Portugal proved.", x: -0.7, y: -0.5 },
    { label: "No — decriminalisation sends the wrong message and would increase drug use, especially among young people.", x: 0.7, y: 0.5 },
    { label: "Decriminalise personal possession, but keep drug trafficking as a serious criminal offence.", x: -0.3, y: -0.2 },
    { label: "Expand treatment and harm reduction programs without changing criminal laws — address demand, not just supply.", x: -0.1, y: 0.3 },
  ]
},

// Education (3 questions)
{
  topic: "Education",
  text: "Australia's wealthiest private schools receive millions in government funding while many public schools are under-resourced. The Gonski review found school funding should follow student need, not school type. Should the government redirect more funding to public schools?",
  options: [
    { label: "Yes — public schools educate the majority of students and deserve priority funding regardless of politics.", x: -0.7, y: 0.6 },
    { label: "Parents who choose private schools still pay taxes — their schools deserve fair government support too.", x: 0.6, y: -0.1 },
    { label: "Funding should follow student need — more to disadvantaged students wherever they are, public or private.", x: -0.2, y: 0.4 },
    { label: "Introduce more competition between schools — vouchers and choice drive quality better than top-down funding formulas.", x: 0.7, y: -0.5 },
  ]
},
{
  topic: "Education",
  text: "University fees in Australia have been rising for decades, pricing some students out of higher education. Should Australia make university tuition free, funded by general taxation?",
  options: [
    { label: "Yes — free university would make higher education a right, not a privilege, and benefit the whole economy.", x: -0.8, y: 0.6 },
    { label: "No — graduates earn significantly more over their lifetimes and should contribute to the cost of their own education.", x: 0.6, y: -0.3 },
    { label: "Means-tested fee support and expanded HECS-HELP is fairer than free tuition for everyone, including the wealthy.", x: 0.1, y: 0.3 },
    { label: "Fund more vocational training and trades instead — Australia is oversaturated with degrees and short on skilled workers.", x: 0.4, y: 0.1 },
  ]
},
{
  topic: "Education",
  text: "Some argue that the school curriculum has become too focused on social and cultural topics — gender, colonisation, climate — at the expense of literacy, numeracy, and STEM. Others say these topics are essential for students to understand the world they'll live in. Where do you stand?",
  options: [
    { label: "Schools should prioritise critical thinking about real-world social issues — these are as important as maths and reading.", x: -0.6, y: 0.4 },
    { label: "Core academic skills — literacy, numeracy, science — must come first; social commentary doesn't belong in schools.", x: 0.7, y: 0.3 },
    { label: "Both matter — a rigorous curriculum can include social and cultural content without sacrificing academic standards.", x: -0.1, y: 0.2 },
    { label: "Parents should have more say in what their children are taught rather than leaving it to government curriculum designers.", x: 0.5, y: -0.4 },
  ]
},

// Technology (3 questions)
{
  topic: "Technology",
  text: "Artificial intelligence is replacing jobs — from truck drivers to radiologists. Some economists predict AI could displace 30% of current jobs within 20 years. Should the government take action now to manage this disruption?",
  options: [
    { label: "Yes — the government must invest heavily in retraining programs and strengthen safety nets before automation hits hard.", x: -0.6, y: 0.6 },
    { label: "Technological progress creates more jobs than it destroys — the government should stay out of the way and let it happen.", x: 0.7, y: -0.6 },
    { label: "A modest tax on AI-driven automation, used to fund worker retraining, would share the benefits more fairly.", x: -0.4, y: 0.3 },
    { label: "Education systems should teach adaptable skills — critical thinking, creativity — not try to predict or slow automation.", x: 0.2, y: -0.2 },
  ]
},
{
  topic: "Technology",
  text: "Social media platforms like Facebook and TikTok are driven by algorithms that maximise engagement — which often means amplifying outrage and misinformation. Should the Australian government regulate these algorithms in the public interest?",
  options: [
    { label: "Yes — platforms that shape public opinion have a responsibility to the public and must be regulated like other media.", x: -0.6, y: 0.7 },
    { label: "No — government control over what algorithms show is a step toward censorship and should be rejected.", x: 0.6, y: -0.7 },
    { label: "Mandate transparency and independent auditing of algorithms without letting government dictate the content itself.", x: -0.2, y: 0.2 },
    { label: "Digital literacy education is a better long-term solution than trying to regulate fast-moving technology platforms.", x: 0.3, y: -0.3 },
  ]
},
{
  topic: "Technology",
  text: "Australia has invested billions in building high-speed broadband through the National Broadband Network (NBN). Should high-quality internet access be treated as essential infrastructure — like roads and electricity — and run by the government?",
  options: [
    { label: "Yes — fast, affordable internet is critical infrastructure; private companies will always underserve rural and low-income areas.", x: -0.6, y: 0.7 },
    { label: "No — privatise the NBN fully; competition between providers delivers better services and lower prices than government ownership.", x: 0.7, y: -0.6 },
    { label: "Keep it government-owned in rural areas where markets fail, but allow competition in cities where it works.", x: 0.1, y: 0.3 },
    { label: "The NBN was a costly mistake; focus subsidy on ensuring minimum broadband access, not nationalising the whole network.", x: 0.5, y: -0.2 },
  ]
},

// Digital Rights (3 questions)
{
  topic: "Digital Rights",
  text: "Social media companies make billions of dollars from collecting and selling your personal data. Some argue you should own your own data and be able to see, control, or even sell it yourself. Should Australia give citizens stronger legal rights over their personal data?",
  options: [
    { label: "Yes — your data is yours; you should have the right to access, delete, and profit from it just as companies do.", x: -0.7, y: -0.4 },
    { label: "Data regulation adds compliance costs that stifle innovation — existing privacy laws are enough protection.", x: 0.6, y: -0.5 },
    { label: "Strengthen privacy laws to require explicit consent and easy opt-out, but stop short of creating a personal data marketplace.", x: -0.4, y: 0.3 },
    { label: "The solution is more digital literacy so people understand what they're agreeing to, not more government regulation.", x: 0.3, y: -0.4 },
  ]
},
{
  topic: "Digital Rights",
  text: "Australia's encryption laws allow police to compel tech companies to provide access to encrypted messages — even private ones on apps like WhatsApp. Supporters say it's vital for catching criminals; critics say it undermines everyone's privacy. Where do you stand?",
  options: [
    { label: "Strong encryption protects everyone; giving governments backdoors puts all users at risk from hackers and authoritarian abuse.", x: -0.6, y: -0.7 },
    { label: "Police need these tools to investigate terrorism and child exploitation — security must come before privacy in serious cases.", x: 0.6, y: 0.7 },
    { label: "Targeted lawful access with strong judicial oversight is reasonable, but mass backdoors into encryption go too far.", x: 0.1, y: 0.2 },
    { label: "Tech companies should be transparent about government access requests and resist overreach through public accountability.", x: -0.4, y: -0.3 },
  ]
},
{
  topic: "Digital Rights",
  text: "Australia banned children under 16 from using social media in 2024. Supporters say it protects kids from online harm; critics argue it's unenforceable and denies young people agency. Was this the right call?",
  options: [
    { label: "Yes — the evidence on social media's harms to teen mental health is strong enough to justify government intervention.", x: 0.1, y: 0.8 },
    { label: "No — teenagers should develop digital skills, not be banned from platforms that are part of modern social life.", x: -0.5, y: -0.6 },
    { label: "Better approach: require platforms to design age-appropriate safe experiences rather than banning access outright.", x: -0.3, y: 0.3 },
    { label: "Parents, not governments, should decide what's appropriate for their own children's online activity.", x: 0.6, y: -0.5 },
  ]
},

// Healthcare (3 questions)
{
  topic: "Healthcare",
  text: "Medicare gives all Australians access to free or subsidised healthcare. But long public hospital waiting lists have led many to argue for expanded private health options. Should Australia move toward a more market-driven healthcare system?",
  options: [
    { label: "No — universal healthcare is a cornerstone of a fair society; we should fix Medicare by funding it better.", x: -0.7, y: 0.7 },
    { label: "Yes — more private competition would reduce waiting times and improve quality through market incentives.", x: 0.7, y: -0.5 },
    { label: "A mixed model works — preserve universal access while allowing private options for those who want them.", x: 0.2, y: 0.1 },
    { label: "Preventive health investment would save far more than reorganising the hospital system — focus on keeping people well.", x: -0.3, y: 0.4 },
  ]
},
{
  topic: "Healthcare",
  text: "Mental health problems now account for a massive share of Australia's disease burden, yet mental healthcare is far less funded than physical health. Should Australia treat mental and physical health as completely equal in government funding and insurance coverage?",
  options: [
    { label: "Absolutely — mental illness is just as real and debilitating as physical illness; funding disparity is unjust.", x: -0.6, y: 0.6 },
    { label: "Government should set priorities based on outcomes data — broad parity rules could misallocate resources.", x: 0.4, y: -0.2 },
    { label: "Expand Medicare to cover more psychology and psychiatry sessions as a first step toward genuine parity.", x: -0.3, y: 0.5 },
    { label: "Community-based mental health programs and peer support are more cost-effective than medicalising mental wellbeing.", x: -0.4, y: -0.2 },
  ]
},
{
  topic: "Healthcare",
  text: "During COVID-19, Australia's vaccine rollout raised questions about mandates. Should the government ever make vaccinations compulsory for contagious diseases, even if some people have philosophical objections?",
  options: [
    { label: "Yes — when herd immunity requires high vaccination rates, individual objections cannot put the entire community at risk.", x: -0.3, y: 0.8 },
    { label: "No — bodily autonomy is a fundamental right; vaccine decisions must ultimately remain with the individual.", x: -0.1, y: -0.8 },
    { label: "Strong incentives and public education can achieve high vaccination rates without overriding personal choice.", x: 0.2, y: -0.3 },
    { label: "Mandates may be justified in specific settings — hospitals, aged care — but not as a universal population-wide policy.", x: 0.3, y: 0.3 },
  ]
},

// Justice (3 questions)
{
  topic: "Justice",
  text: "Australia has one of the highest incarceration rates for Indigenous people in the world. Some argue the criminal justice system is systemically biased; others say the answer is stricter enforcement in high-crime communities. What do you think?",
  options: [
    { label: "Address root causes — poverty, trauma, lack of services — rather than criminalising behaviour that stems from disadvantage.", x: -0.7, y: -0.3 },
    { label: "Stronger policing and sentencing in high-crime areas protects victims, who are often also Indigenous and vulnerable.", x: 0.7, y: 0.5 },
    { label: "Restorative justice and community-run diversion programs work better than incarceration for non-violent offences.", x: -0.5, y: -0.2 },
    { label: "Systemic reform of laws that disproportionately criminalise poverty — like fines and public order offences — is the priority.", x: -0.6, y: 0.2 },
  ]
},
{
  topic: "Justice",
  text: "Some argue the death penalty should be available for the worst crimes — mass murder, terrorism, child killing. Others say no justice system is infallible enough to take an innocent life. Should Australia consider reintroducing capital punishment?",
  options: [
    { label: "Never — the risk of executing an innocent person is too high, and the state should never have the power to kill citizens.", x: -0.5, y: -0.7 },
    { label: "For the most heinous and proven crimes, the death penalty represents justice for victims and deters future atrocities.", x: 0.7, y: 0.6 },
    { label: "Life without parole is a sufficient punishment for the worst crimes without the irreversible risk of capital punishment.", x: 0.2, y: 0.3 },
    { label: "The criminal justice system should focus on rehabilitation and public safety, not vengeance through execution.", x: -0.6, y: -0.3 },
  ]
},
{
  topic: "Justice",
  text: "Police in Australia currently have powers to stop and search people in some situations. Civil liberties groups argue this disproportionately targets young, non-white, or low-income people. How should the law balance public safety and individual rights?",
  options: [
    { label: "Stop and search powers should be significantly curtailed — the evidence shows they do more harm than good for communities.", x: -0.6, y: -0.6 },
    { label: "Police need these tools to prevent crime before it happens; effective law enforcement requires proactive powers.", x: 0.6, y: 0.6 },
    { label: "Require reasonable suspicion, mandatory recording of all searches, and independent review to prevent abuse.", x: -0.2, y: 0.2 },
    { label: "Community policing and trust-building are more effective at reducing crime than expanded search powers.", x: -0.4, y: -0.1 },
  ]
},

// Immigration (2 questions)
{
  topic: "Immigration",
  text: "Australia's population growth is driven largely by immigration. Some argue high immigration fills labour shortages and enriches culture; others say it drives up housing costs and strains services. What level of immigration is right for Australia?",
  options: [
    { label: "High immigration benefits Australia economically and culturally — open, multicultural societies are more dynamic and innovative.", x: -0.6, y: -0.2 },
    { label: "Significantly reduce immigration to ease pressure on housing, wages, and public services until infrastructure catches up.", x: 0.7, y: 0.3 },
    { label: "Maintain current levels but overhaul the visa system to target skills gaps and regional needs more effectively.", x: 0.2, y: 0.1 },
    { label: "Link immigration intake to demonstrated infrastructure capacity — increase or reduce it based on real data, not politics.", x: 0.3, y: 0.3 },
  ]
},
{
  topic: "Immigration",
  text: "People who flee war or persecution and arrive in Australia without prior authorisation — sometimes by boat — are currently held in offshore detention. Is this policy justifiable, or does it violate the rights of people seeking protection?",
  options: [
    { label: "Offshore detention is cruel and illegal under international law — people seeking asylum deserve to be processed humanely on Australian soil.", x: -0.8, y: -0.4 },
    { label: "Offshore processing is an unfortunate but necessary deterrent — without it, dangerous people-smuggling operations surge.", x: 0.7, y: 0.5 },
    { label: "Fast, fair on-shore processing with community detention — rather than offshore camps — is both humane and workable.", x: -0.5, y: 0.1 },
    { label: "Australia should work with regional neighbours to create a coordinated asylum system rather than acting unilaterally.", x: -0.2, y: 0.3 },
  ]
},

// Culture (2 questions)
{
  topic: "Culture",
  text: "Australia Day is celebrated on January 26 — the date of the first British landing in 1788. For many Aboriginal Australians, it marks the beginning of dispossession and is known as Invasion Day. Should Australia change the date?",
  options: [
    { label: "Yes — a national day should unite all Australians; celebrating on a date that causes pain to First Nations people is divisive.", x: -0.7, y: 0.2 },
    { label: "No — the date is part of Australia's history; changing it erases the past rather than honestly grappling with it.", x: 0.7, y: 0.3 },
    { label: "Change the date and use it as an opportunity to tell the full story of Australia, including its colonial history.", x: -0.5, y: 0.1 },
    { label: "Australians should be free to commemorate the date however they choose — this should be a community decision, not a government one.", x: 0.3, y: -0.5 },
  ]
},
{
  topic: "Culture",
  text: "Australia funds public arts and culture through bodies like the ABC and the Australia Council for the Arts. Some argue this is essential to preserve Australian culture and voices; others say culture should survive on its own commercial merits. Should the government fund the arts?",
  options: [
    { label: "Yes — commercial markets undervalue art, literature, and public broadcasting; government funding serves the public interest.", x: -0.6, y: 0.6 },
    { label: "No — arts funding is an unnecessary subsidy; if audiences value it, they'll pay for it without taxpayer support.", x: 0.7, y: -0.5 },
    { label: "Fund public broadcasting and art that markets won't support — like regional journalism and Indigenous storytelling — but not commercial artists.", x: -0.2, y: 0.4 },
    { label: "Tax incentives for private arts patronage are better than direct government grants, which can impose political influence on culture.", x: 0.3, y: -0.2 },
  ]
},

// Work (2 questions)
{
  topic: "Work",
  text: "Gig economy workers — like Uber drivers and Deliveroo riders — are classified as independent contractors rather than employees, which means they get no sick pay, superannuation, or unfair dismissal protection. Should Australia extend workers' rights to gig workers?",
  options: [
    { label: "Yes — gig workers deserve the same basic rights as employees; the contractor label is often just a way to avoid paying entitlements.", x: -0.7, y: 0.5 },
    { label: "No — gig work offers genuine flexibility that employees don't have; mandating entitlements will destroy these flexible work options.", x: 0.7, y: -0.5 },
    { label: "Create a new legal category for platform workers — with some protections but not all the obligations of full employment.", x: 0.1, y: 0.1 },
    { label: "Let workers, platforms, and industry bodies negotiate fair conditions rather than having government impose a single solution.", x: 0.4, y: -0.3 },
  ]
},
{
  topic: "Work",
  text: "A four-day work week pilot in the UK found that most workers maintained productivity while reporting better mental health and work-life balance. Should Australian businesses be encouraged — or required — to adopt a four-day week?",
  options: [
    { label: "A shorter work week should become standard — productivity gains make it viable and workers deserve more time to live their lives.", x: -0.6, y: 0.3 },
    { label: "Governments shouldn't mandate working hours — businesses and employees should negotiate what works for them.", x: 0.6, y: -0.6 },
    { label: "Voluntary industry pilots with government support make sense; mandating it nationally would hurt sectors where it doesn't work.", x: 0.2, y: -0.1 },
    { label: "Flexible work hours and remote work options matter more than a uniform four-day rule — give workers choices, not rules.", x: 0.1, y: -0.4 },
  ]
},

// Work — extra question
{
  topic: "Work",
  text: "Australian workers are legally entitled to ten days of paid sick leave per year. Some countries go much further, while many gig and casual workers in Australia get none at all. Should the government guarantee paid sick leave for every worker, regardless of their employment type?",
  options: [
    { label: "Yes — no worker should have to choose between paying rent and recovering from illness; sick leave is a basic right.", x: -0.7, y: 0.6 },
    { label: "Mandating sick leave for all workers, including casuals, would push up costs and reduce total employment opportunities.", x: 0.6, y: -0.5 },
    { label: "Extend sick leave to casuals proportionally based on hours worked — a fair middle ground that improves security.", x: -0.3, y: 0.3 },
    { label: "Higher casual pay rates already compensate for the lack of leave entitlements — the current trade-off is reasonable.", x: 0.5, y: -0.3 },
  ]
},

// Housing (2 questions)
{
  topic: "Housing",
  text: "Australian house prices have doubled in the past decade, making homeownership out of reach for many young people. Some blame tax policies like negative gearing and the capital gains tax discount that benefit property investors. Should these be reformed?",
  options: [
    { label: "Yes — tax concessions for investors inflate prices and tilt the market against first-home buyers; reform them now.", x: -0.7, y: 0.4 },
    { label: "No — negative gearing increases the supply of rental properties; removing it would push up rents and hurt tenants.", x: 0.7, y: -0.2 },
    { label: "Phase out negative gearing for existing properties but allow it for new builds — boosting supply without inflating existing prices.", x: -0.3, y: 0.3 },
    { label: "Zoning reform and faster planning approvals will do more to fix affordability than tinkering with tax policy.", x: 0.4, y: -0.3 },
  ]
},
{
  topic: "Housing",
  text: "Homelessness in Australia affects over 100,000 people on any given night. Finland adopted a 'Housing First' model — giving people permanent homes without preconditions — and dramatically reduced homelessness. Should Australia adopt this approach?",
  options: [
    { label: "Yes — having a stable home is the foundation for addressing every other issue; Housing First evidence is compelling.", x: -0.7, y: 0.6 },
    { label: "People need to address addiction and mental health issues first; giving homes without conditions rewards the wrong behaviour.", x: 0.5, y: 0.4 },
    { label: "Housing First should be one tool among many — combined with mental health and substance support services.", x: -0.2, y: 0.4 },
    { label: "Increase funding for community organisations already doing this work rather than creating another large government program.", x: 0.1, y: -0.1 },
  ]
},
  ],

  // ============================================================
  // ECONOMIST MODE — 35 extremely difficult questions with dense data,
  // Laffer Curve references, hypotheticals, and technical policy analysis
  // ============================================================
  economist: [

  {
    topic: "Economy",
    text: "Australia's top marginal personal income tax rate of 47% (including 2% Medicare levy) applies above $190,000. The Henry Tax Review (2010) recommended reducing this to 40% while broadening the base. Treasury modelling using a dynamic scoring framework estimates that a rate increase to 55% would raise gross revenue by $18bn annually, but behavioural responses — including increased avoidance via trusts, reduced labour supply at the margin, and capital flight — could erode net revenue by 30–40%. Critics invoking the Laffer Curve argue Australia is near or past the revenue-maximising rate, while proponents cite comparable rates in Denmark (55.9%) and France (55%). Given this evidence, how should Australia approach the top marginal rate?",
    options: [
      {
        label: "Reduce the top rate to 40% and broaden the base by closing superannuation concessions and trust avoidance vehicles, as the Henry Review recommended, to maximise long-run efficiency and voluntary compliance.",
        x: 0.3,
        y: -0.5
      },
      {
        label: "Raise the top rate to 55% and invest in ATO enforcement capacity to counter avoidance, accepting some behavioural leakage in exchange for substantially higher revenue for public services and redistribution.",
        x: -0.8,
        y: 0.7
      },
      {
        label: "Hold the rate at 47% but eliminate the 50% CGT discount and tax trusts at individual marginal rates, closing structural loopholes that allow high earners to avoid the headline rate without changing it.",
        x: -0.4,
        y: 0.1
      },
      {
        label: "Index all tax brackets to wage growth and reduce the rate to 45%, prioritising bracket creep correction over rate changes — this is a supply-side measure that pays for itself via higher labour force participation.",
        x: 0.6,
        y: -0.4
      }
    ]
  },

  {
    topic: "Economy",
    text: "The RBA's Non-Accelerating Inflation Rate of Unemployment (NAIRU) estimate has shifted from 5.0% in 2019 to approximately 4.25% in 2024, reflecting structural labour market changes including awards modernisation and reduced union density. The Phillips Curve relationship has flattened significantly: the 2022–23 inflation episode was driven primarily by supply shocks and energy pass-through rather than a tight labour market per se, yet the RBA tightened by 425 basis points regardless. Critics, including former RBA Governor Bernie Fraser, argue the Bank's unemployment-inflation trade-off modelling remains mechanistic and causes unnecessary job losses. The RBA Review (2023) gave the Bank an explicit dual mandate including full employment. How should Australia calibrate its tolerance for unemployment in monetary policy settings?",
    options: [
      {
        label: "Accept a NAIRU closer to 3.5% as the operational target, consistent with pre-pandemic lows in the US; the RBA should hold rates longer before tightening, prioritising job creation given the flattened Phillips Curve.",
        x: -0.6,
        y: -0.3
      },
      {
        label: "Retain the RBA's current 4–4.5% NAIRU estimate with symmetric inflation targeting; the Bank's operational independence must not be compromised by political pressure to run the labour market hotter than evidence supports.",
        x: 0.5,
        y: 0.2
      },
      {
        label: "Shift monetary policy focus to nominal GDP level targeting, which implicitly tolerates lower unemployment without committing to a specific NAIRU figure, and subjects the RBA to greater parliamentary accountability.",
        x: -0.3,
        y: 0.5
      },
      {
        label: "Transfer primary employment responsibility to fiscal policy; the RBA should target 2–3% inflation exclusively, while the government uses a federal Job Guarantee as the buffer stock to maintain price stability at full employment.",
        x: -0.8,
        y: 0.8
      }
    ]
  },

  {
    topic: "Economy",
    text: "Australia's federal gross debt is projected to reach 36% of GDP by 2026-27 — low by OECD standards (Japan 255%, US 122%) but rising from near-zero in 2008. IMF research on fiscal multipliers finds values ranging from 0.4 in open economies with floating exchange rates (consistent with Mundell-Fleming) to 1.8 in liquidity-trap conditions at the zero lower bound. Australia's 2008–09 stimulus package (1.8% of GDP) is frequently cited as having prevented recession, but critics note the Building the Education Revolution generated significant deadweight waste. With infrastructure needs estimated at $120bn over a decade by Infrastructure Australia, and the structural budget deficit projected at 1.2% of GDP, what is the appropriate fiscal posture?",
    options: [
      {
        label: "Run a structural surplus averaging 0.5% of GDP, issuing long-dated bonds only for high-productivity infrastructure with positive NPV; fiscal discipline preserves intergenerational equity and sovereign ratings under Ricardian equivalence conditions.",
        x: 0.7,
        y: 0.3
      },
      {
        label: "Expand the structural deficit to 2% of GDP to fund public investment in housing, green infrastructure, and human capital; with the real 10-year bond yield below nominal GDP growth (r < g), debt dynamics are self-stabilising.",
        x: -0.7,
        y: 0.6
      },
      {
        label: "Establish an independent National Infrastructure Commission with binding cost-benefit analysis requirements; fund priority projects via hypothecated levies rather than general revenue to avoid deficit blowout and improve project selection.",
        x: 0.2,
        y: 0.4
      },
      {
        label: "Privatise non-essential government assets to fund new infrastructure, maintaining fiscal neutrality; government should leverage private capital through availability payments and PPPs rather than expanding the public balance sheet.",
        x: 0.8,
        y: -0.5
      }
    ]
  },

  {
    topic: "Economy",
    text: "The Australia Institute estimates foregone revenue from superannuation tax concessions at $52.5 billion annually (2024–25) — exceeding the cost of the Age Pension at $55bn. Treasury projects that by 2060 the super system will cost more in tax concessions than it saves in pension outlays, contradicting the system's original fiscal rationale. The concessions are structurally regressive: the top quintile receives 38% of benefits. The Henry Tax Review proposed a flat 15% contribution tax with a means-tested rebate for low incomes. Meanwhile, the Grattan Institute has argued for a 30% earnings tax on balances above $3 million. How should Australia reform superannuation tax treatment?",
    options: [
      {
        label: "Tax superannuation contributions at marginal rates with a low-income government co-contribution, eliminate the 15% concessional flat rate that disproportionately benefits high earners, and cap tax-free retirement balances at $2 million.",
        x: -0.7,
        y: 0.5
      },
      {
        label: "Maintain the current 15% contributions tax but apply earnings tax progressively above $3 million in retirement phase as legislated; this is a targeted, evidence-based reform that preserves incentive to save while improving equity.",
        x: -0.2,
        y: 0.0
      },
      {
        label: "Reduce the superannuation guarantee from 11.5% to 9% and return wage capacity to workers; Treasury modelling overstates concession costs by ignoring the pension offset and individual savings decisions should not be second-guessed by government.",
        x: 0.7,
        y: -0.6
      },
      {
        label: "Increase the superannuation guarantee to 15%, funded by a productivity dividend, while standardising the earnings tax at 20% for all balances — this maintains retirement savings incentives while improving fiscal sustainability and national savings.",
        x: -0.3,
        y: 0.6
      }
    ]
  },

  {
    topic: "Economy",
    text: "Australia has no sovereign wealth fund. Norway's Government Pension Fund Global, funded by oil revenues, holds USD $1.7 trillion. During Australia's mining boom (2003–2013), commodity export revenues added approximately $350bn in government receipts above trend. The Intergenerational Report (2023) projects a $34bn structural deficit by 2060–61 from demographic ageing. Economist Ross Garnaut has repeatedly called for a sovereign wealth fund capitalised from resources rents, noting that Dutch Disease effects during the mining boom hollowed out Australia's manufacturing and tradeable services sectors by overvaluing the Australian dollar. Should Australia establish a sovereign wealth fund?",
    options: [
      {
        label: "Establish a sovereign wealth fund capitalised from a reformed PRRT and minerals royalty floor price, ring-fencing non-renewable resource rents for intergenerational transfer and insulating the exchange rate from commodity cycle Dutch Disease.",
        x: -0.5,
        y: 0.7
      },
      {
        label: "Reject a new sovereign wealth fund; Australia's superannuation pool ($3.9 trillion) already functions as a de facto national savings vehicle, and additional government-managed funds introduce political risk and poor asset allocation relative to diversified private markets.",
        x: 0.6,
        y: -0.5
      },
      {
        label: "Create a Future Fund extension specifically for infrastructure and housing, deploying domestic capital into productivity-enhancing assets rather than offshore portfolio investment, with parliamentary oversight of mandate and drawdown rules.",
        x: -0.2,
        y: 0.5
      },
      {
        label: "Reform the Petroleum Resource Rent Tax to capture a larger share of LNG windfall profits and place proceeds directly into debt reduction; fiscal discipline now is the most efficient intergenerational transfer given demographic headwinds.",
        x: 0.4,
        y: 0.2
      }
    ]
  },

  // ── ENVIRONMENT (3 questions) ─────────────────────────────────────────

  {
    topic: "Environment",
    text: "Australia's Safeguard Mechanism, reformed in 2023, now requires the 215 largest industrial emitters (covering ~28% of national emissions) to reduce their emissions intensity at 4.9% per year. The reformed mechanism allows unlimited use of Australian Carbon Credit Units (ACCUs), a design choice that critics — including the Climate Change Authority and several environmental economists — argue will allow firms to defer abatement via offsets of contested integrity rather than genuine decarbonisation. An alternative, a sector-specific carbon price linked to the EU ETS (~A$140/tonne CO2-e), would provide a uniform price signal. Proponents of the ETS approach cite the Pigouvian tax principle and the efficiency of price discovery; proponents of intensity-based standards cite transition certainty for trade-exposed industries. What is Australia's optimal industrial decarbonisation mechanism?",
    options: [
      {
        label: "Replace the Safeguard Mechanism with a broad-based carbon price at $75/tonne rising 5% annually in real terms, with full border adjustment to address trade exposure — a clean Pigouvian signal that maximises abatement at least cost across the economy.",
        x: -0.4,
        y: 0.2
      },
      {
        label: "Strengthen the Safeguard Mechanism by restricting ACCU use to no more than 20% of a facility's obligation, requiring residual abatement to occur at the source; this maintains sectoral accountability while preserving regulatory familiarity for industry.",
        x: -0.5,
        y: 0.6
      },
      {
        label: "Link Australia's carbon market to the EU ETS and accept price discovery via international markets; this eliminates the distortion of domestically-issued ACCUs and aligns Australia with global decarbonisation finance at scale.",
        x: -0.2,
        y: 0.4
      },
      {
        label: "Abandon intensity-based carbon regulation and rely on technology mandates and direct public investment in green hydrogen and CCS; regulatory carbon pricing disadvantages Australian trade-exposed industries relative to competitors without equivalent schemes.",
        x: 0.5,
        y: -0.3
      }
    ]
  },

  {
    topic: "Environment",
    text: "Australia's mining sector contributed $14.3bn in PRRT and royalties in 2022–23 against LNG export revenues of $91bn — an effective tax rate of approximately 15.7%, compared to Norway's 78% on oil and gas. Economists including Richard Holden have argued this structural under-taxation of non-renewable resources constitutes an intergenerational wealth transfer away from future Australians, equivalent to permanently gifting a common inheritance. Meanwhile, the Productivity Commission found no evidence that concessional tax treatment for resources significantly changes investment decisions at the margin, given Australia's resource endowment and geological comparative advantage. During the 2010–2013 mining boom the Australian dollar appreciated to USD 1.10, compressing manufacturing margins and accelerating deindustrialisation — a textbook Dutch Disease episode. How should Australia manage resource wealth extraction and its macroeconomic consequences?",
    options: [
      {
        label: "Raise the effective PRRT rate to 50% via an immediate-deductibility reform and use proceeds to capitalise a sovereign wealth fund; investing resource rents in diversified global assets sterilises Dutch Disease exchange rate appreciation.",
        x: -0.6,
        y: 0.6
      },
      {
        label: "Reform PRRT uplift rates to approximate Treasury bond rates (removing the current 12.5–17.5% uplift), increasing revenue capture without deterring marginal projects; pair with an RBA mandate to monitor resource-sector exchange rate effects.",
        x: -0.3,
        y: 0.1
      },
      {
        label: "Maintain current PRRT settings; the rent tax collects substantially more in boom periods by design, and radical reform risks delaying final investment decisions on $50bn+ of LNG expansion projects that provide long-run employment and export earnings.",
        x: 0.7,
        y: -0.2
      },
      {
        label: "Use state royalty reforms rather than federal PRRT changes to increase community benefit sharing, directing revenues to regional infrastructure and skills training in mining communities — a federally-appropriate response to sovereign resource wealth.",
        x: 0.2,
        y: 0.3
      }
    ]
  },

  {
    topic: "Environment",
    text: "The Climate Change Authority's 2023 review found that Australia's legislated 43% emissions reduction target by 2030 (below 2005 levels) is inconsistent with a 1.5°C trajectory, which would require approximately 75% reduction. The electricity sector is on track, with renewables reaching 38% of NEM generation in 2024. However, agriculture (13% of emissions), land use, and fugitive emissions from gas are showing minimal progress. The Australian Bureau of Agricultural and Resource Economics (ABARES) warns that aggressive emissions standards on agriculture could reduce farm productivity by 12–18% without viable mitigation technologies for ruminant methane. Conversely, environmental economists note that agriculture receives an implicit subsidy of $6.9bn annually by being excluded from carbon pricing. How should Australia approach agricultural emissions?",
    options: [
      {
        label: "Include agriculture in the Safeguard Mechanism or a dedicated carbon price with a delayed start date and complementary R&D investment in methane inhibitors; excluding agriculture creates a $6.9bn implicit subsidy that violates carbon pricing principles.",
        x: -0.5,
        y: 0.5
      },
      {
        label: "Maintain agriculture's exemption from direct carbon pricing but fund voluntary incentive payments for soil carbon sequestration, land restoration, and low-methane livestock breeds; coercive regulation would devastate regional communities without meaningful abatement.",
        x: 0.6,
        y: 0.2
      },
      {
        label: "Apply a voluntary biodiversity and carbon credits scheme with payment rates that fully reflect the social cost of carbon ($120/tonne); competitive market design will draw in high-integrity sequestration projects without mandating producer behaviour.",
        x: 0.2,
        y: -0.3
      },
      {
        label: "Establish mandatory methane reduction targets for intensive livestock operations only, exempting extensive grazing; complement with publicly-funded agricultural extension services and CSIRO research into low-methane feed supplements and vaccine programmes.",
        x: -0.1,
        y: 0.6
      }
    ]
  },

  // ── SOCIAL (3 questions) ──────────────────────────────────────────────

  {
    topic: "Social",
    text: "Australia's JobSeeker payment sits at $762.70 per fortnight (single, no children) — 41% of the minimum wage, the lowest replacement rate of any OECD country with a contributory welfare system. The OECD's 2023 review found that below-poverty income support combined with intensive mutual obligation requirements and payment suspensions (over 600,000 compliance failures in 2022–23) creates poverty traps and persistent unemployment rather than reducing it. An unconditional basic income (UBI) pilot in Finland (2017–18) found small positive effects on wellbeing and comparable employment outcomes to the conditionality regime it replaced. However, modelling by the Parliamentary Budget Office suggests a UBI of $1,200/fortnight for all working-age Australians would cost $250bn annually — 20% of GDP — before tax-financed recycling. How should Australia redesign working-age income support?",
    options: [
      {
        label: "Implement a partial UBI of $600/fortnight as a floor income for all adults 18–65, taxable above a threshold, replacing JobSeeker and most categorical payments; fund through a land value tax and higher super earnings tax, with a phased 5-year implementation.",
        x: -0.7,
        y: -0.1
      },
      {
        label: "Raise JobSeeker to 90% of the Henderson poverty line (~$1,100/fortnight) and retain mutual obligation requirements but replace compliance-based suspensions with positive incentive structures and intensive employment services for the long-term unemployed.",
        x: -0.5,
        y: 0.6
      },
      {
        label: "Maintain current payment levels but reform conditionality to focus exclusively on participation in training, education, or voluntary work, removing punitive suspension mechanisms that evidence shows increase poverty and reduce employment.",
        x: -0.2,
        y: 0.4
      },
      {
        label: "Index JobSeeker to 50% of median wages but tighten activity testing requirements; income support should incentivise labour market attachment and the compliance regime, while imperfect, prevents moral hazard in a tight labour market.",
        x: 0.5,
        y: -0.2
      }
    ]
  },

  {
    topic: "Social",
    text: "Australia has one of the world's most gender-segregated occupational structures: female-dominated industries (care work, education, hospitality) attract wages 15–31% below male-dominated industries of equivalent skill-complexity per Workplace Gender Equality Agency (WGEA) analysis. The Fair Work Commission's 2023 Aged Care Work Value case awarded a 15% pay rise on the grounds of historical undervaluation, costing the Commonwealth $11.3bn over four years. Critics argue this represents government-directed wages policy interfering with award-setting independence; supporters cite persistent market failure in pricing socially essential care work. The Gender Pay Gap is 21.8% (total remuneration, November 2023). What is the most effective policy lever to close the structural gender pay gap?",
    options: [
      {
        label: "Extend the Work Value case methodology to all female-dominated award sectors (childcare, disability support, social work) with a 20% base uplift, funded via a hypothecated Care Sector Levy on employers; market wages systematically undervalue feminised labour.",
        x: -0.7,
        y: 0.7
      },
      {
        label: "Expand mandatory WGEA gender pay gap reporting to firms with 50+ employees (from 100+), with binding gender equity action plans and pay equity audits; transparency-forcing regulation is lower cost than direct wage regulation and promotes competitive adjustment.",
        x: -0.3,
        y: 0.5
      },
      {
        label: "Subsidise childcare to 90% of cost for all income levels to remove the secondary earner penalty and lift female labour force participation; occupational sorting and wage gaps close naturally when structural barriers to participation are removed.",
        x: -0.5,
        y: 0.4
      },
      {
        label: "Rely on award modernisation and equal pay orders via the Fair Work Commission rather than sector-wide legislative intervention; government-mandated pay increases in care sectors risk cost inflation and workforce substitution via technology or service rationing.",
        x: 0.4,
        y: -0.3
      }
    ]
  },

  {
    topic: "Social",
    text: "Australia's rate of incarceration is 221 per 100,000 population — below the US (531) but substantially above Norway (54) and the Netherlands (61). Indigenous Australians are incarcerated at 17 times the rate of non-Indigenous Australians, the highest disparity in any comparable OECD nation. The Productivity Commission's Report on Government Services (2024) found recidivism within two years runs at 44.9% nationally, with rehabilitation programme reach covering only 28% of the prison population. The cost per prisoner is approximately $130,000 per annum. The Royal Commission into Aboriginal Deaths in Custody (1991) made 339 recommendations, of which fewer than half have been fully implemented three decades later. How should Australia reform its criminal justice system?",
    options: [
      {
        label: "Redirect at least 20% of the corrective services budget to diversionary programmes, community-based sentencing, and Aboriginal Community Controlled Organisations; mass incarceration is a public health failure, not a justice success, and carries negative fiscal externalities.",
        x: -0.7,
        y: -0.2
      },
      {
        label: "Implement the unfinished recommendations of the 1991 Royal Commission as a legislative priority, with an independent compliance body and time-bound targets; over-representation cannot be addressed without resolving the underlying structural dispossession and service gaps.",
        x: -0.6,
        y: 0.6
      },
      {
        label: "Introduce mandatory rehabilitative programming as a condition of parole eligibility, expand prison-based education and vocational training funding, and measure corrections performance against recidivism rates rather than bed occupancy.",
        x: -0.1,
        y: 0.5
      },
      {
        label: "Strengthen truth-in-sentencing laws and reduce judicial discretion for repeat violent offenders; public safety requires predictable sentencing as a deterrent, and community confidence in the justice system depends on proportionate custodial penalties.",
        x: 0.8,
        y: 0.4
      }
    ]
  },

  // ── HEALTHCARE (3 questions) ──────────────────────────────────────────

  {
    topic: "Healthcare",
    text: "The NDIS cost has grown from $22bn (2020–21) to a projected $59bn by 2025–26, representing 2.1% of GDP and now exceeding the Medicare programme. The NDIS Review (2023), led by Bruce Bonyhady and Lisa Paul, found widespread funding model problems: 60% of the cost blowout comes from 10% of participants with complex psychosocial disability; the scheme has created a market for plan management services estimated to cost $5bn annually with limited quality controls; and the original actuarial model underestimated demand for psychosocial disability by 300%. The review recommended a foundational supports tier outside the scheme and tighter eligibility. Critics from disability advocacy groups argue any tightening represents an abrogation of the original social compact. What is the most defensible NDIS reform path?",
    options: [
      {
        label: "Implement the foundational supports tier as recommended, removing psychosocial disability not requiring intensive support from individual NDIS packages; this restores actuarial integrity while maintaining the scheme's core commitment to people with permanent significant disability.",
        x: 0.2,
        y: 0.5
      },
      {
        label: "Expand NDIS eligibility and funding within the original intent but invest heavily in plan management quality controls, price regulation of support providers, and capacity building for participants to self-direct funding; the cost blowout reflects provider market failure, not excessive participant need.",
        x: -0.6,
        y: 0.7
      },
      {
        label: "Cap NDIS annual expenditure growth at CPI + 2% via an appropriation limit, requiring the NDIA to prioritise based on severity and functional impact; fiscal sustainability requires a binding constraint that forces internal prioritisation rather than demand-driven expansion.",
        x: 0.5,
        y: 0.4
      },
      {
        label: "Transition the NDIS to a social insurance model with lifetime entitlement caps and co-contribution requirements above median income; Australia cannot sustain a universal uncapped disability entitlement within a fiscally responsible framework.",
        x: 0.7,
        y: -0.3
      }
    ]
  },

  {
    topic: "Healthcare",
    text: "Medicare bulk-billing rates for GP services fell to 77.9% nationally in 2023 — the lowest in over a decade — and to 62% in capital city private practices. The RACGP estimates Australia needs 11,000 additional GPs by 2031. The Strengthening Medicare Taskforce (2022) recommended tripling the bulk-billing incentive for children and concession cardholders, which the government implemented at a cost of $3.5bn. However, economists including Stephen Duckett argue this does not address the structural fee-for-service incentive misalignment that under-rewards preventive care, care coordination, and complex chronic disease management relative to throughput. The MBS Review Task Force (2020) identified $2.4bn in low-value care. How should Australia reform primary care funding?",
    options: [
      {
        label: "Transition GP funding from fee-for-service to blended capitation payments based on patient complexity, age, and chronic disease burden; this aligns incentives with health outcomes rather than throughput and is consistent with international best practice in primary care.",
        x: -0.4,
        y: 0.6
      },
      {
        label: "Increase MBS rebates to 100% of the AMA schedule fee, eliminating out-of-pocket costs for all Australians at GPs; universal bulk-billing is achievable within the existing fee-for-service framework and removes financial barriers to timely primary care.",
        x: -0.7,
        y: 0.7
      },
      {
        label: "Introduce voluntary patient enrolment with practice-based capitation top-ups, as piloted in the Strengthening Medicare trials; provide additional payments for care planning, multidisciplinary teamwork, and after-hours cover rather than rebate universality.",
        x: -0.1,
        y: 0.5
      },
      {
        label: "Allow co-payments for non-concessional patients with means-testing, redirect savings to fund the GP workforce pipeline; price signals reduce low-acuity demand and cross-subsidise rural and underserved communities where market failure is genuine.",
        x: 0.6,
        y: -0.3
      }
    ]
  },

  {
    topic: "Healthcare",
    text: "Australia's Pharmaceutical Benefits Scheme (PBS) provides subsidised access to 5,900 medicines, at a net cost of approximately $16.2bn (2023–24). The PBS uses cost-effectiveness thresholds of approximately $45,000–$75,000 per quality-adjusted life year (QALY), below the UK NICE threshold of £30,000 (~A$57,000) and well below the US willingness-to-pay of USD $150,000. Pharmaceutical companies have increasingly pursued managed access or risk-sharing agreements for high-cost gene therapies and immunotherapies, some listed at $2–5 million per treatment. The Medicines Australia submission to the PBS review argued the threshold has not been formally updated since 2003 and does not reflect current willingness-to-pay. Meanwhile, the Grattan Institute warns that raising thresholds without differential pricing for rare disease would advantage large-market blockbusters. How should Australia calibrate PBS cost-effectiveness thresholds?",
    options: [
      {
        label: "Maintain the current implicit threshold but introduce a transparent, differential threshold for ultra-rare diseases (orphan drugs) of up to $150,000/QALY, coupled with mandatory outcomes-based rebates where long-term efficacy data is unavailable at listing.",
        x: -0.1,
        y: 0.5
      },
      {
        label: "Formally raise the base threshold to $100,000/QALY indexed to GDP per capita growth, with stronger international reference pricing benchmarks and mandatory confidential rebate agreements to prevent gaming; Australians deserve access to breakthrough therapies.",
        x: -0.5,
        y: 0.5
      },
      {
        label: "Introduce value-based pricing with outcomes-linked payment models; pharmaceutical companies should bear the financial risk of efficacy uncertainty rather than transferring it to taxpayers via upfront listing at speculative QALY estimates.",
        x: -0.3,
        y: 0.0
      },
      {
        label: "Hold the QALY threshold at current levels to constrain PBS expenditure growth; with fiscal pressures from NDIS and ageing demographics, extending the threshold risks crowding out more cost-effective community health spending with marginal benefit therapies.",
        x: 0.4,
        y: -0.2
      }
    ]
  },

  // ── HOUSING (2 questions) ─────────────────────────────────────────────

  {
    topic: "Housing",
    text: "Australia's housing affordability crisis is structurally driven by supply-side constraints. The Productivity Commission (2022) estimated that restrictive residential zoning reduces housing supply elasticity in Australian cities to 0.3–0.5 (compared to 1.5+ in Houston or Tokyo), costing renters $14.5bn annually in excess rental expenditure. CoreLogic data shows Sydney median house prices at 13.4x median household income — the third most unaffordable market globally. The National Housing Accord targets 1.2 million new homes over five years, but planning approval rates in inner and middle suburbs remain constrained by heritage overlays, minimum parking requirements, and FSR caps. Economic modelling from UNSW's City Futures Research Centre suggests upzoning within 800m of train stations could add 320,000 dwellings to Sydney's constrained supply. What is the most effective housing supply reform?",
    options: [
      {
        label: "Mandate medium-density as-of-right zoning within 800m of all train stations and within 400m of any Activity Centre, stripping councils of discretionary rejection powers and eliminating parking minimums; supply-side elasticity is the only durable solution to affordability.",
        x: -0.5,
        y: -0.3
      },
      {
        label: "Use federal funding grants conditional on demonstrated zoning liberalisation metrics, preserving state-local government constitutional responsibility for planning while creating financial incentives aligned with the National Housing Accord targets.",
        x: 0.1,
        y: 0.2
      },
      {
        label: "Reform negative gearing and CGT concessions as demand-side interventions first; supply-side reforms without addressing tax-driven investor demand will see new supply absorbed by investors rather than improving owner-occupier affordability.",
        x: -0.6,
        y: 0.4
      },
      {
        label: "Fund a major public housing construction programme of 100,000 social and affordable units via a Housing Australia Future Fund increase; the market cannot deliver deeply affordable housing and the waitlist of 170,000 households requires direct government provision.",
        x: -0.8,
        y: 0.8
      }
    ]
  },

  {
    topic: "Housing",
    text: "Australia's negative gearing provisions allow investors to deduct rental property losses against personal income tax. Treasury estimates the annual revenue cost at $4.0bn. The 50% CGT discount (introduced 1999) costs an estimated $24bn annually in foregone revenue and has been directly linked by RBA research to amplifying house price cycles, contributing 5–8% to real price growth in major cities. The 2019 federal election saw Labor's proposed quarantining of negative gearing (grandfathering existing properties) and halving the CGT discount rejected, partly on the grounds that modelling suggested rent increases of $5–$15/week nationally. The Grattan Institute argues the combined concessions have transferred $1 trillion in wealth from younger to older Australians over two decades. How should Australia reform property investment tax concessions?",
    options: [
      {
        label: "Grandfather existing investments and abolish negative gearing for new investment properties while halving the CGT discount to 25%; phase the reform over five years to prevent market disruption while restoring intergenerational equity in wealth accumulation.",
        x: -0.6,
        y: 0.4
      },
      {
        label: "Retain negative gearing and the CGT discount but limit deductibility to positively-geared properties after three years; this removes the speculative incentive without penalising genuine long-term investment and addresses the fiscal cost at source.",
        x: 0.3,
        y: 0.1
      },
      {
        label: "Replace stamp duty with a broad-based annual land value tax at 1.2% of unimproved capital value, making housing a less attractive speculative asset class; this reform is revenue-neutral, efficiency-improving, and dampens price cycles without touching CGT.",
        x: -0.3,
        y: 0.0
      },
      {
        label: "Maintain all current concessions; property investment creates rental supply that would otherwise not exist, and modelling shows reform causes rent increases that hurt the lowest-income renters most — the stated beneficiaries of reform.",
        x: 0.8,
        y: -0.2
      }
    ]
  },

  // ── EDUCATION (3 questions) ───────────────────────────────────────────

  {
    topic: "Education",
    text: "The Gonski Review (2011) recommended needs-based school funding using a Schooling Resource Standard (SRS) tied to student disadvantage loading. Twelve years later, the Australian Government Schooling Review (2023) found that 99% of Catholic and independent schools receive below their SRS allocation, while government schools in all states except the ACT and Victoria also remain below 100% SRS. The OECD PISA 2022 results show Australia's mean mathematics score declined 27 points (2000–2022), with the socioeconomic achievement gap among the top four in the OECD. Per-student recurrent expenditure in the highest-fee independent schools averages $34,000 — four times the $8,500 average in government schools in the same postcode. What is the priority for federal schools funding reform?",
    options: [
      {
        label: "Require all non-government schools to reach 80% SRS from government sources within five years, redirecting the remaining Commonwealth non-government sector premium to government school equity loadings; public money should serve public accountability.",
        x: -0.6,
        y: 0.6
      },
      {
        label: "Fund all schools to 100% SRS within four years regardless of sector, as the original Gonski architecture intended; sector-neutral needs-based funding eliminates the perverse incentive for states to reclassify government spending to avoid federal co-payments.",
        x: -0.3,
        y: 0.5
      },
      {
        label: "Tie additional federal school funding to demonstrated literacy and numeracy outcomes under the National School Improvement Tool, replacing formula-based entitlement with conditional grants that create accountability for public investment.",
        x: 0.4,
        y: 0.3
      },
      {
        label: "Deregulate private school fee-setting and introduce a means-tested voucher system worth 70% of per-student public cost; competitive provision will drive quality improvement and parental choice produces better matching of educational approaches to student needs.",
        x: 0.8,
        y: -0.4
      }
    ]
  },

  {
    topic: "Education",
    text: "Australia's university sector received $11.9bn in Commonwealth Grants Scheme funding in 2023. The Australian Universities Accord (2023) recommended lifting participation to 55% of working-age Australians holding a degree by 2050 (from 45%) with a new Commonwealth Parity Supplement for students from low-SES backgrounds. HECS-HELP debt has grown to $74.4bn outstanding, with 20% of debtors projected to never fully repay under current thresholds, effectively converting a loan scheme into a graduate tax for lower-income cohorts — disproportionately affecting women in feminised graduate professions. The revenue from full-fee international students ($14.3bn, 2023) cross-subsidises domestic teaching and research, creating a structural dependency that the Australian Strategic Policy Institute has flagged as a geopolitical concentration risk. How should Australia reform university funding?",
    options: [
      {
        label: "Increase Commonwealth per-student funding to restore the 2008 base funding level in real terms, reduce the HECS repayment rate for low-income graduates, and cap international student revenue reliance at 30% per institution to reduce strategic vulnerability.",
        x: -0.5,
        y: 0.6
      },
      {
        label: "Introduce income-contingent free tuition for high-priority STEM and care sector degrees funded by a dedicated graduate levy on employers; this aligns training costs with the primary beneficiaries of skilled graduates and removes price barriers to shortage occupations.",
        x: -0.4,
        y: 0.5
      },
      {
        label: "Deregulate domestic student fees with means-tested income-contingent loans, allowing universities to price courses by graduate earnings outcomes; market signals will redirect students from low-return courses and improve resource allocation across disciplines.",
        x: 0.7,
        y: -0.3
      },
      {
        label: "Maintain the current mixed funding model but introduce performance-based Commonwealth funding allocation tied to graduate employment outcomes, research translation metrics, and equity participation targets for low-SES and First Nations students.",
        x: 0.2,
        y: 0.4
      }
    ]
  },

  {
    topic: "Education",
    text: "Australia's early childhood education and care (ECEC) system has undergone major reform with the three-day guarantee and Activity Test changes, increasing childcare subsidy (CCS) expenditure to $14.1bn (2024–25). The Productivity Commission's ECEC study (2024) found that Australian children participate in formal ECEC at 88% of OECD average rates, with outcomes for children from low-SES backgrounds showing a 6-month developmental lag relative to high-SES peers attributable to quality and access gaps rather than attendance rates. The PC recommended universal pre-school entitlement (30 hours/week) for 3 and 4-year-olds, harmonised national standards, and a long-term workforce strategy noting 30,000 unfilled ECEC worker vacancies. The system employs 50% casual workers, with median wages $24.50/hour. What is the optimal policy architecture for ECEC?",
    options: [
      {
        label: "Implement the Productivity Commission recommendation for universal 30-hour pre-school entitlement funded directly to providers at a regulated rate, removing the Activity Test; early childhood is a developmental rights issue, not an employment incentive.",
        x: -0.6,
        y: 0.7
      },
      {
        label: "Means-test the CCS more steeply to concentrate subsidy on low-income families with access barriers, redirect savings to quality uplift funding for community-based services in low-SES areas, and mandate minimum wage parity with primary teachers.",
        x: -0.4,
        y: 0.6
      },
      {
        label: "Expand the existing CCS framework with additional hours support while improving workforce wages through a sector award decision; full universality is not the most cost-effective path to improving child outcomes compared to targeted quality investment.",
        x: -0.1,
        y: 0.4
      },
      {
        label: "Introduce a childcare tax credit replacing the CCS to allow parents to choose any provider including unlicensed family-based care; provider diversity and parental choice produce better cultural fit and developmental outcomes than a regulated institutional system.",
        x: 0.6,
        y: -0.5
      }
    ]
  },

  // ── TECHNOLOGY (3 questions) ──────────────────────────────────────────

  {
    topic: "Technology",
    text: "Australia's R&D expenditure (GERD) was 1.68% of GDP in 2022 — below the OECD average of 2.71% and well below Israel (5.6%), South Korea (4.9%), and Sweden (3.4%). Business R&D (BERD) has declined from 1.3% to 0.9% of GDP since 2008. The Productivity Commission found that the R&D Tax Incentive (costing $3.5bn annually) has low additionality: 60–70 cents of every dollar claimed would have been spent anyway. The Cutler Review (2008) and subsequent reviews have consistently recommended a direct grant programme to complement the tax incentive, targeting transformative research with positive externalities. The Solow growth decomposition attributes approximately 40% of Australia's long-run growth to total factor productivity (TFP), which has grown at only 0.3% annually 2015–2024, down from 1.5% in 1990–2005. How should Australia reform its innovation policy?",
    options: [
      {
        label: "Replace the R&D Tax Incentive with a competitive direct grant programme administered by an independent agency modelled on DARPA or the UK's Advanced Research and Invention Agency, targeting pre-commercial research with high spillovers and genuine additionality.",
        x: -0.4,
        y: 0.5
      },
      {
        label: "Retain the R&D Tax Incentive but raise the base rate from 43.5% to 50% for collaborative research involving universities or publicly-funded research organisations, and reduce the administrative compliance burden that deters small-firm participation.",
        x: 0.1,
        y: 0.2
      },
      {
        label: "Create a $50bn sovereign technology investment fund capitalised over a decade from PRRT reform, investing in deep tech sectors (quantum computing, battery technology, critical minerals processing) where market failure and first-mover advantage are most pronounced.",
        x: -0.6,
        y: 0.7
      },
      {
        label: "Deregulate product liability and regulatory approval pathways to lower the cost of commercialisation; Australia's innovation problem is not R&D supply but commercialisation failure — regulatory reform has higher additionality than further public investment.",
        x: 0.7,
        y: -0.4
      }
    ]
  },

  {
    topic: "Technology",
    text: "Australia's AI governance framework is largely voluntary. The Digital Platform Services Inquiry (ACCC, 2023) found that Google and Meta control 80% of digital advertising revenue in Australia — $12.2bn — giving them structural leverage over media, retail, and financial services sectors. The EU AI Act (2024) establishes risk-tiered regulation with mandatory conformity assessments for high-risk AI in employment, credit, law enforcement, and critical infrastructure. Treasury has flagged that AI-driven productivity gains could add 0.8–1.5% to annual GDP growth, but the CSIRO's National AI Centre estimates 30% of Australian jobs have high automation exposure by 2035. How should Australia regulate artificial intelligence?",
    options: [
      {
        label: "Adopt a risk-tiered regulatory framework aligned with the EU AI Act, with mandatory algorithmic impact assessments for high-risk applications in employment, housing, and financial services, administered by an expanded Australian Human Rights Commission.",
        x: -0.4,
        y: 0.7
      },
      {
        label: "Establish a voluntary AI safety certification scheme with government procurement requirements creating market incentives for compliance; premature binding regulation will disadvantage Australian firms relative to less-regulated US and Chinese competitors.",
        x: 0.4,
        y: -0.2
      },
      {
        label: "Focus regulation on platform market power rather than AI specifically — break up digital advertising duopolies, mandate data portability, and apply ex-ante competition rules under a digital markets regime; AI harms are largely a manifestation of market concentration.",
        x: -0.5,
        y: 0.4
      },
      {
        label: "Invest in a National AI Capability Programme through universities and the CSIRO to build domestic AI leadership, and allow industry self-regulation with transparency reporting requirements; government is poorly positioned to regulate rapidly evolving technology effectively.",
        x: 0.2,
        y: -0.1
      }
    ]
  },

  {
    topic: "Technology",
    text: "Australia's critical minerals sector holds the world's largest reserves of lithium (57%), cobalt (17%), and rare earths (3.7%), with export revenues of $17bn in 2023. The Critical Minerals Strategy (2023) acknowledges that 95% of rare earth processing occurs in China, meaning Australia exports raw ore at a fraction of the value of refined products. The value-add ratio from ore to battery-grade lithium carbonate is approximately 8–12x. The Inflation Reduction Act (IRA) in the US provides $369bn in subsidies for clean energy supply chains that preferentially benefit onshore processing. The OECD has criticised Australia's unilateral approach, arguing industrial policy subsidies create global market distortions and reduce allocative efficiency relative to comparative advantage specialisation. How should Australia develop its critical minerals value chain?",
    options: [
      {
        label: "Establish a Critical Minerals Processing Corporation as a joint-venture equity partner for mid-stream processing facilities, requiring a minimum 30% Australian ownership; foreign investment without value-add processing requirements captures resource rents for overseas shareholders.",
        x: -0.5,
        y: 0.6
      },
      {
        label: "Match US IRA-equivalent subsidies for battery manufacturing and rare earth processing in Australia, including a $10,000/tonne processing incentive; competing on industrial policy requires fiscal commitment at scale, not principles-based restraint.",
        x: -0.3,
        y: 0.5
      },
      {
        label: "Negotiate bilateral free trade agreements with the EU and US that provide preferential market access for Australian refined critical minerals in exchange for security-of-supply commitments, using market access rather than subsidies to incentivise processing.",
        x: 0.3,
        y: 0.1
      },
      {
        label: "Focus comparative advantage on extraction and export of high-grade ore rather than processing; attempting to replicate China's vertically-integrated supply chain ignores decades of industrial development and will produce stranded assets if clean energy transitions accelerate.",
        x: 0.7,
        y: -0.3
      }
    ]
  },

  // ── DIGITAL RIGHTS (2 questions) ─────────────────────────────────────

  {
    topic: "Digital Rights",
    text: "The eSafety Commissioner has exercised powers under the Online Safety Act 2021 to direct removal of content from global platforms, including a challenge to X (formerly Twitter) over graphic content. The Act includes Basic Online Safety Expectations, industry codes for social media and app stores, and powers to issue removal notices with penalties of up to $782,500/day. The Australian Law Reform Commission's 2023 report found that existing privacy law provides no meaningful compensation for data misuse, and Australia lacks a statutory tort for serious invasions of privacy. The Attorney-General's Department consultation on an Online Privacy Act (2022) proposed consent-based data collection with opt-in defaults for sensitive data — a standard that no major platform currently meets. How should Australia govern personal data and online privacy?",
    options: [
      {
        label: "Enact a Privacy Act aligned with GDPR principles: legitimate interest test, right to erasure, data portability, and a statutory cause of action for serious privacy breaches; Australia's 1988 framework is structurally inadequate for the platform economy.",
        x: -0.4,
        y: 0.6
      },
      {
        label: "Create an independent Digital Rights Commission with investigative powers, class action facilitation for data breach compensation, and mandatory algorithmic transparency reporting for platforms over 5 million Australian users.",
        x: -0.6,
        y: 0.7
      },
      {
        label: "Mandate data portability and interoperability standards under competition law rather than privacy law; this reduces switching costs, fosters competitive alternatives, and achieves user empowerment without prescriptive data processing rules that impede innovation.",
        x: -0.2,
        y: 0.0
      },
      {
        label: "Retain the current principles-based privacy framework with targeted amendments for sensitive data categories; overly prescriptive privacy regulation creates compliance barriers for small Australian tech firms and pushes data processing offshore.",
        x: 0.5,
        y: -0.2
      }
    ]
  },

  {
    topic: "Digital Rights",
    text: "The Australian Signals Directorate (ASD) has advocated for lawful access to encrypted communications, and the Assistance and Access Act 2018 (TOLA) requires designated communications providers to provide technical assistance or capability to government agencies — with no judicial warrant requirement for the weakest form (Technical Assistance Requests). The Parliamentary Joint Committee on Intelligence and Security (PJCIS) found in 2020 that the Act lacks adequate oversight mechanisms. Meanwhile, the Australian Federal Police notes that end-to-end encryption is now used in 93% of serious criminal and terrorism investigations that involve digital evidence. Cryptographers from UNSW and ANU have argued that any systemic backdoor undermines security for all users, including banking, health records, and commercial confidentiality. How should Australia balance encryption and lawful access?",
    options: [
      {
        label: "Repeal or substantially amend TOLA to require judicial authorisation for all technical assistance demands and prohibit capability notices that require building systemic vulnerabilities; security for all Australians depends on uncompromised end-to-end encryption.",
        x: -0.6,
        y: -0.5
      },
      {
        label: "Retain TOLA but establish mandatory judicial oversight for all three notice tiers, increase PJCIS review frequency, and prohibit notices that would create a systemic weakness — distinguishing targeted access from generic backdoor mandates.",
        x: 0.0,
        y: 0.3
      },
      {
        label: "Invest in lawful hacking capabilities (endpoint exploitation) rather than encryption backdoors; compromising individual devices through targeted exploitation achieves the same investigative outcome without undermining cryptographic infrastructure.",
        x: 0.2,
        y: -0.1
      },
      {
        label: "Strengthen TOLA enforcement and extend it to cover international platforms serving Australian users; the security of Australians from terrorism and child exploitation outweighs theoretical cryptographic integrity concerns that primarily benefit criminal users.",
        x: 0.7,
        y: 0.8
      }
    ]
  },

  // ── JUSTICE (3 questions) ─────────────────────────────────────────────

  {
    topic: "Justice",
    text: "Australia has no federal bill of rights or human rights act, unlike the US, Canada, UK, and New Zealand. The ACT and Victoria have enacted legislative charters of human rights. The Parliamentary Joint Committee on Human Rights scrutinises federal legislation for consistency with Australia's international treaty obligations, but this is advisory only. The Brennan Committee (2009) recommended a federal human rights act with a weak-form dialogue model — courts interpret legislation compatibly where possible, and parliament may override by explicit statement. Critics, including former Chief Justice Murray Gleeson, argued such a model transfers political questions to unelected judges. Proponents point to post-Robodebt, post-Binskin review failures as evidence that administrative law alone is insufficient to protect citizens from government overreach. How should Australia protect fundamental rights?",
    options: [
      {
        label: "Enact a federal Human Rights Act using the dialogue model: courts issue declarations of incompatibility, parliament must respond with an override statement; this preserves parliamentary sovereignty while creating accountability for rights-inconsistent legislation.",
        x: -0.5,
        y: -0.1
      },
      {
        label: "Entrench a minimum constitutional bill of rights via referendum, including judicially-enforceable protections for freedom of expression, due process, and equality; legislative charters are insufficient because parliament can silently abrogate them.",
        x: -0.7,
        y: -0.3
      },
      {
        label: "Strengthen the PJCHR reporting function with compulsory government response timelines and mandate human rights impact assessments for all new Commonwealth legislation and expenditure programmes; administrative reform is more achievable than constitutional entrenchment.",
        x: -0.2,
        y: 0.5
      },
      {
        label: "Retain the current constitutional framework; Australia's common law tradition, independent judiciary, and separation of powers provide sufficient structural protection, and a rights act would shift power to unelected judges without democratic accountability.",
        x: 0.7,
        y: 0.1
      }
    ]
  },

  {
    topic: "Justice",
    text: "Australia's financial crimes enforcement capacity has been repeatedly criticised. The Financial Action Task Force (FATF) mutual evaluation (2015) rated Australia non-compliant in 14 of 40 categories — the worst performance of any developed OECD country — primarily due to the exemption of real estate agents, lawyers, and accountants from anti-money laundering (AML) reporting (so-called Tranche 2). AUSTRAC estimates $8–$51bn in illicit funds is laundered through Australia annually. Real estate is identified as the primary laundering vehicle, with transparency body Global Financial Integrity noting that Australian residential property attracts flows from foreign officials, drug trafficking, and tax evasion. AFCA-aligned reforms (Tranche 2) were finally passed in 2024 after 17 years of lobbying resistance from the legal profession. How should Australia approach financial crime regulation?",
    options: [
      {
        label: "Full and expeditious implementation of Tranche 2 AML obligations for lawyers, accountants, and real estate agents with AUSTRAC supervision; the 17-year delay has cost Australia an estimated $130bn in laundered funds and damaged its FATF standing.",
        x: -0.2,
        y: 0.7
      },
      {
        label: "Introduce a beneficial ownership register for all Australian companies and trusts that is publicly accessible and updated in real time; opacity in corporate structures is the primary enabler of financial crime that AML reporting obligations alone cannot address.",
        x: -0.4,
        y: 0.6
      },
      {
        label: "Prioritise AUSTRAC capacity building and cross-agency intelligence sharing over new reporting obligations; further obligations on professionals create compliance burdens without proportionate enforcement capability to act on the data generated.",
        x: 0.3,
        y: 0.1
      },
      {
        label: "Establish a dedicated financial crimes court with specialist prosecutors and fast-track asset forfeiture; detection capacity is adequate but prosecution failure rates reflect judicial and procedural constraints, not reporting deficiencies.",
        x: 0.5,
        y: -0.1
      }
    ]
  },

  // ── JUSTICE additional ──────────────────────────────────────────────

  {
    topic: "Justice",
    text: "Australia's Robodebt scheme (2016–2019) unlawfully raised $1.76bn in welfare debts against approximately 443,000 recipients using an illegal income-averaging methodology. The Royal Commission into the Robodebt Scheme (2023) found systematic public service failures, ministerial misconduct, and a deliberate strategy of legal opacity designed to prevent judicial review. The Commonwealth settled class action claims for $1.76bn. The Commission made 57 recommendations, including a new Public Service Act, strengthened APS values enforcement, and criminal referrals of five individuals. Administrative law scholars at ANU note that the existing judicial review framework under the Administrative Decisions (Judicial Review) Act 1977 did not prevent four years of unlawful government action. What reforms would most effectively prevent future systemic administrative law violations?",
    options: [
      {
        label: "Create an independent Federal Integrity Commission with proactive audit powers over major algorithmic decision-making systems affecting welfare recipients; Robodebt was systemic, not individual, and requires systemic oversight rather than after-the-fact criminal referrals.",
        x: -0.4,
        y: 0.7
      },
      {
        label: "Implement all 57 Royal Commission recommendations including APS accountability reform and pursue criminal prosecutions for identified officials; deterrence requires consequences and the existing framework failed because accountability mechanisms lacked enforcement teeth.",
        x: -0.3,
        y: 0.6
      },
      {
        label: "Mandate proactive legal risk certification by the Solicitor-General for all mass automated decision-making programmes before implementation, with binding legal opinion publication; parliamentary scrutiny of algorithm-based welfare administration must precede, not follow, deployment.",
        x: -0.1,
        y: -0.2
      },
      {
        label: "Strengthen merits review tribunal capacity in the AAT (now Administrative Review Tribunal) and fund free legal representation for welfare recipients facing automated debt decisions; individual access to justice is the most reliable check on administrative overreach.",
        x: -0.5,
        y: 0.4
      }
    ]
  },

  // ── IMMIGRATION (2 questions) ───────────────────────────────────────────────────

  {
    topic: "Immigration",
    text: "Australia's net overseas migration (NOM) reached a record 528,000 in 2022–23, driven by post-pandemic international student and temporary worker visa backlogs. The Centre for Population (Treasury) projects NOM to moderate to 260,000 by 2024–25. The Productivity Commission (2016) found net fiscal benefit of immigration is positive but concentrated in the young and highly-skilled; low-skilled temporary visa holders in agriculture, meat processing, and hospitality have documented wage theft rates of 47% (FWO, 2022), suppressing wages in those sectors. The RBA has argued that population growth via migration increases both labour supply and housing demand — the net effect on per-capita housing affordability is close to zero in the short run. The National Population Strategy has not been updated since 2011. What is the appropriate migration policy architecture?",
    options: [
      {
        label: "Reduce permanent migration to 120,000 per annum and shift composition toward highest-skill categories with genuine labour market testing; migration should not substitute for workforce training investment or suppress wages for low-income workers.",
        x: 0.6,
        y: 0.3
      },
      {
        label: "Maintain high migration intakes but require all temporary visa holders to have minimum wage protections legally equivalent to permanent residents, with co-determination of workplace conditions; labour market suppression via visa vulnerability is the primary problem, not the volume.",
        x: -0.5,
        y: 0.5
      },
      {
        label: "Develop a National Population Strategy that co-ordinates migration policy with infrastructure planning, regional settlement incentives, and housing supply reform; migration management should be supply-chain managed, not quota-driven without capacity planning.",
        x: -0.1,
        y: 0.4
      },
      {
        label: "Replace the current points-based employer-sponsored visa system with a fully open skilled migration stream for occupations with demonstrated wage growth above CPI; price signals in labour markets are a more reliable shortage indicator than ANZSCO skill lists.",
        x: 0.1,
        y: -0.5
      }
    ]
  },

  {
    topic: "Immigration",
    text: "Australia's humanitarian intake was 13,750 in 2023–24 — unchanged since 2018 and constituting 0.8% of NOM. UNHCR data shows 117 million people are forcibly displaced globally, the highest ever recorded, with climate displacement projected to add 1.2 billion people by 2050 (Institute for Economics and Peace). The Australian Human Rights Commission found that Australia's offshore processing regime (Nauru and Manus, reintroduced under the RSP arrangements with Cambodia and other nations) cost $9.6bn over nine years — approximately $573,000 per person transferred — compared to $100,000 per person for community-based processing. The High Court's NZYQ decision (2023) found indefinite detention of stateless persons unconstitutional. The refugee convention's non-refoulement principle has been tested in Australian courts 23 times since 2013 with Australia losing in 19 cases. How should Australia structure its asylum seeker policy?",
    options: [
      {
        label: "Abolish offshore processing and process all asylum claims onshore within a 90-day fast-track system; the financial and humanitarian cost of offshore deterrence is indefensible, and onshore processing is demonstrably cheaper and more legally compliant.",
        x: -0.7,
        y: -0.2
      },
      {
        label: "Raise the humanitarian intake to 27,000 — the level recommended by the Refugee Council of Australia — with a regional burden-sharing agreement with ASEAN nations funded by Australian development assistance; managed resettlement is superior to deterrence.",
        x: -0.5,
        y: 0.4
      },
      {
        label: "Maintain offshore processing as a deterrent to dangerous maritime voyages but replace Cambodia-style third-country arrangements with an UNHCR-administered Pacific regional protection framework; deterrence is legitimate but must operate within multilateral legal standards.",
        x: 0.4,
        y: 0.5
      },
      {
        label: "Maintain the current regime; regardless of per-person processing costs, the deterrent effect has reduced maritime deaths from 1,200 in 2013 to near-zero, and international obligations must be balanced against sovereign border control and preventing criminal smuggling.",
        x: 0.8,
        y: 0.6
      }
    ]
  },

  // ── WORK additional (automation) ─────────────────────────────────────────

  {
    topic: "Work",
    text: "Artificial intelligence and automation tools are projected to affect 30% of Australian jobs with high displacement risk by 2035 (CSIRO, 2024). Historical technology transitions show that while aggregate employment levels recover, transition costs are heavily concentrated on mid-skill routine workers in their 40s–50s who lack the time horizon to retrain for equivalent wages. The Productivity Commission found Australia spends 0.04% of GDP on active labour market programmes — the lowest in the OECD, compared to Denmark’s 2.1%. TAFE funding in real per-student terms has declined 30% since 2012. Jobs and Skills Australia projects shortfalls of 36,000 nurses and 22,000 ICT professionals by 2026, while 140,000 manufacturing and clerical workers simultaneously face structural redundancy. How should Australia prepare workers for AI-driven labour market transition?",
    options: [
      {
        label: "Fund a national Transition Income Support scheme at 80% of previous wages for up to two years for automation-displaced workers, conditional on enrolment in accredited retraining; wage insurance is the most evidence-supported intervention for mid-career displaced workers per OECD comparative data.",
        x: -0.6,
        y: 0.6
      },
      {
        label: "Increase active labour market programme spending to 0.5% of GDP directed to fee-free TAFE places in shortage occupations with income support during training; Australia must close the OECD gap in labour market investment as a structural productivity priority.",
        x: -0.4,
        y: 0.5
      },
      {
        label: "Introduce an Automation Levy on firms with annual technology capital expenditure exceeding $10 million, hypothecated to a Workforce Transition Fund; those who capture productivity gains from displacement should bear proportionate responsibility for transition costs.",
        x: -0.7,
        y: 0.5
      },
      {
        label: "Deregulate vocational education through income-contingent loan extensions to private providers and employer co-investment incentives; government-directed TAFE investment is supply-push training that consistently mismatches employer skill demand in fast-moving technology transitions.",
        x: 0.6,
        y: -0.3
      }
    ]
  },

  // ── CULTURE (2 questions) ─────────────────────────────────────────────

  {
    topic: "Culture",
    text: "The News Media Bargaining Code (NMBC, 2021) compelled Google and Meta to negotiate commercial deals with Australian news publishers, generating an estimated $200–250mn annually in payments. The ACCC's 2024 review found that Meta's termination of its deals in 2023 created significant revenue gaps for regional and suburban outlets, and that the Code's mandatory arbitration mechanism has rarely been triggered. The Productivity Commission (2022) found Australian journalism employment fell by 22% (2012–2022), with regional and local news experiencing 40% workforce reductions. The Cairncross Review (UK) and similar analyses argue public interest journalism has positive externalities — it is a public good that market mechanisms systematically under-provide. The ABC's budget has been cut by $375mn in real terms since 2014. How should Australia sustain public interest journalism?",
    options: [
      {
        label: "Restore and expand ABC and SBS funding by $400mn annually, with an independent statutory endowment model removing political control over budget cycles; public broadcasting is the most cost-effective vehicle for quality public interest journalism at scale.",
        x: -0.6,
        y: 0.6
      },
      {
        label: "Establish a Public Interest Journalism Fund of $100mn annually administered by the Australian Communications and Media Authority, available to any news organisation — including digital natives — meeting defined editorial independence and local content standards.",
        x: -0.3,
        y: 0.5
      },
      {
        label: "Strengthen the NMBC to prevent unilateral platform withdrawal, mandate revenue floor payments for regional outlets, and expand the digital platforms tax to fund a journalism levy; market correction requires binding rather than voluntary commercial arrangements.",
        x: -0.4,
        y: 0.6
      },
      {
        label: "Rely on market mechanisms and philanthropic models; government journalism funding creates editorial dependency risk, and the NMBC's uneven distribution has favoured incumbent media proprietors over new digital entrants with stronger public interest credentials.",
        x: 0.6,
        y: -0.3
      }
    ]
  },

  {
    topic: "Culture",
    text: "The Voice to Parliament referendum (2023) was defeated 60.1%–39.9% with a majority of states also voting No. The Uluru Statement from the Heart (2017) called for Voice, Treaty, and Truth as a sequenced pathway to constitutional recognition and structural reform. The Institute for Governance and Policy Analysis found that Indigenous Australians have the worst life outcomes of any cohort in the country — 10-year life expectancy gap, incarceration rate 17x non-Indigenous, child removal rate 11x, suicide rate 2.3x. Closing the Gap implementation reviews consistently find governance and self-determination deficits as primary barriers to progress: government-directed programmes achieve less than community-controlled organisations. What is the most effective path to structural change for First Nations Australians following the referendum result?",
    options: [
      {
        label: "Pursue Makarrata (treaty process) directly via a Makarrata Commission as recommended by the Uluru Statement, enabling state and territory-level treaties that create justiciable rights and resource transfer arrangements without requiring another referendum.",
        x: -0.7,
        y: 0.3
      },
      {
        label: "Redirect Closing the Gap funding exclusively to Aboriginal Community Controlled Organisations (ACCOs), removing mainstream provider delivery for Indigenous-specific programmes; evidence consistently shows ACCOs outperform government and non-Indigenous NGO delivery.",
        x: -0.5,
        y: 0.1
      },
      {
        label: "Reintroduce a statutory National Indigenous Advisory Body with legislative powers to review legislation affecting First Nations peoples, not requiring a referendum; this delivers the substantive function of the Voice within the existing constitutional framework.",
        x: -0.3,
        y: 0.6
      },
      {
        label: "Focus on practical programmes in health, education, housing, and economic development with rigorous evaluation; constitutional and treaty processes are important but must not divert political capital from service delivery where the mortality and wellbeing gaps are most acute.",
        x: 0.4,
        y: -0.2
      }
    ]
  },

  // ── ECONOMY additional ───────────────────────────────────────────────

  {
    topic: "Economy",
    text: "During the 2020–2023 period Australia simultaneously deployed the most expansionary fiscal policy in peacetime history (deficit of 7.8% of GDP in 2020–21, $213bn in direct stimulus) and near-zero interest rates from the RBA. The Mundell-Fleming trilemma implies that under a floating exchange rate, monetary policy is the dominant stabilisation tool, making fiscal stimulus crowd out net exports rather than aggregate demand. Yet the 2020–21 experience saw the fiscal multiplier estimated at 1.4–1.7 for JobKeeper (Debelle, RBA 2022), consistent with liquidity-trap dynamics. Now, with underlying inflation at 3.8% and cash rate at 4.35%, the government is running a structural deficit while the RBA holds rates above neutral — creating a contradictory policy mix. What is the correct assignment of monetary and fiscal policy to domestic stabilisation objectives?",
    options: [
      {
        label: "Move to a clear Tinbergen assignment: fiscal policy targets structural objectives (public investment, redistribution, long-run debt sustainability) and monetary policy targets cyclical demand stabilisation; conflicting policy stances are the primary source of Australia's current stagflationary risk.",
        x: 0.3,
        y: -0.1
      },
      {
        label: "Use fiscal consolidation — specifically winding back Stage 3 tax cut benefits above $100,000 and returning bracket creep proceeds — to allow the RBA to cut rates sooner, reducing the mortgage-holder burden of disinflation rather than transferring it to public spending cuts.",
        x: -0.3,
        y: 0.4
      },
      {
        label: "Expand the RBA's mandate to include exchange rate management and financial stability alongside inflation targeting, with automatic fiscal stabilisers strengthened so that monetary policy bears less of the cyclical adjustment burden in future episodes.",
        x: -0.2,
        y: 0.6
      },
      {
        label: "Maintain current settings; the contradiction between loose fiscal and tight monetary policy is a short-run transitional phenomenon, and premature loosening of monetary policy risks re-igniting inflation that carries the greatest burden for lowest-income households.",
        x: 0.6,
        y: 0.2
      }
    ]
  },

  // ── WORK (2 questions) ────────────────────────────────────────────────

  {
    topic: "Work",
    text: "Gig economy workers — Uber, DoorDash, Airtasker — number approximately 250,000 active participants in Australia. The Gig Workers Support Services (2022) found median platform earnings of $14.20/hour before expenses, below the national minimum wage of $23.23. The High Court's Personnel Contracting and Jamsek decisions (2022) narrowed the definition of employment, potentially reclassifying previously deemed employees as contractors and reducing platform labour cost obligations. The 'same job, same pay' reforms (2023) apply to labour hire workers in host employer workplaces, but explicitly exclude digital platform workers. The ILO's Recommendation 198 on Employment Relationships recommends a rebuttable presumption of employment wherever there is economic dependence. How should Australia regulate platform work?",
    options: [
      {
        label: "Create a new 'dependent contractor' employment category with proportionate rights — minimum pay, super, unfair dismissal protection — without full employee classification; this reflects the genuine hybrid nature of platform work rather than forcing a binary categorisation.",
        x: -0.3,
        y: 0.4
      },
      {
        label: "Apply the ILO Recommendation 198 presumption of employment to all platform workers earning over 80% of income from a single platform, requiring platforms to opt out by demonstrating genuine independence; economic dependence should confer employment protections.",
        x: -0.7,
        y: 0.6
      },
      {
        label: "Mandate superannuation, workers' compensation, and minimum hourly payment for all digital platform workers regardless of classification; these are minimum social protections that should not be arbitraged via contractual relabelling of economic dependence.",
        x: -0.5,
        y: 0.7
      },
      {
        label: "Retain independent contractor status for platform workers who genuinely choose flexibility; market-mandated reclassification will reduce platform flexibility and likely reduce overall gig sector participation as platforms adjust pricing or exit the Australian market.",
        x: 0.7,
        y: -0.4
      }
    ]
  },

  {
    topic: "Work",
    text: "Workplace productivity growth in Australia has averaged 0.0% per annum since 2017, compared to 1.2% in the decade prior. The RBA's Research Discussion Paper (2024) attributes this partly to composition effects (employment growth concentrated in low-productivity services), but also to declining capital deepening — gross fixed capital formation as a share of GDP fell from 29% to 23.5% from 2012 to 2023. The Productivity Commission's 5-year review identified industrial relations complexity as a moderate drag, estimating that multi-enterprise bargaining creates efficiency losses of $2.3bn annually. However, union density has fallen from 45% (1984) to 13.8% (2023), and the Productivity Commission also found wage-productivity divergence — labour's share of national income fell from 58% to 52% over the same period. How should Australia reform workplace relations to improve productivity and wages simultaneously?",
    options: [
      {
        label: "Expand multi-enterprise bargaining and increase union bargaining rights in low-coverage sectors; wage-productivity divergence shows that declining union power redistributes productivity gains away from labour, and collective bargaining is the most effective mechanism for sharing productivity dividends.",
        x: -0.7,
        y: 0.5
      },
      {
        label: "Reform enterprise agreement approval processes to reduce the Better Off Overall Test compliance cost by 60%, and allow productivity-linked pay components beyond the current NES floor; enterprise-level bargaining better aligns incentives for firm-level investment and innovation.",
        x: 0.5,
        y: -0.3
      },
      {
        label: "Implement a Worker Capital programme allowing super funds to co-invest in workplace training and technology adoption as part of enterprise agreement packages; capital deepening is the primary productivity lever and industrial relations reform is second-order.",
        x: -0.2,
        y: 0.0
      },
      {
        label: "Move to a sector-bargaining model for low-wage industries with a minimum productivity growth clause; this combines the coverage benefits of industry-wide bargaining with the productivity incentive absent from current award structures.",
        x: -0.4,
        y: 0.4
      }
    ]
  }
  ]

};
