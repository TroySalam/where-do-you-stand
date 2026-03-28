const QUESTION_BANKS = {

  // ============================================================
  // TEEN MODE — 35 questions for Australian high schoolers
  // ============================================================
  teen: [

    // --- ECONOMY (4 questions) ---
    {
      topic: "Economy",
      text: "Your friend works 20 hours a week at a fast-food place and can barely afford petrol. What's the real fix?",
      options: [
        { label: "Raise the minimum wage so workers can actually live on it", x: -0.8, y: 0.6 },
        { label: "It's on them to find better work or cut costs", x: 0.8, y: -0.7 },
        { label: "Government should subsidise transport and cost-of-living for young workers", x: -0.6, y: 0.8 },
        { label: "Businesses should pay more voluntarily — the market will sort it out", x: 0.5, y: -0.4 },
      ]
    },
    {
      topic: "Economy",
      text: "A massive tech company pays almost zero tax in Australia. What should happen?",
      options: [
        { label: "Close the loopholes — they should pay tax here like everyone else", x: -0.7, y: 0.7 },
        { label: "Low taxes attract big companies and create jobs — leave them alone", x: 0.7, y: -0.6 },
        { label: "Create a special digital services tax on their Australian revenue", x: -0.4, y: 0.6 },
        { label: "Tackle it internationally — Australia can't solve this alone", x: 0.1, y: 0.3 },
      ]
    },
    {
      topic: "Economy",
      text: "Should the government give every Australian aged 18–25 a $10,000 payment to help them get started in life?",
      options: [
        { label: "Yes — it levels the playing field for people without wealthy parents", x: -0.7, y: 0.7 },
        { label: "No — that's not fair on taxpayers and creates dependency", x: 0.7, y: -0.6 },
        { label: "Maybe — but only for lower-income families, not everyone", x: -0.3, y: 0.4 },
        { label: "Better to invest that money in schools and services instead", x: -0.5, y: 0.5 },
      ]
    },
    {
      topic: "Economy",
      text: "Petrol prices just hit $2.50 a litre. Your family is really struggling with the cost. What should the government do?",
      options: [
        { label: "Cut the fuel excise tax temporarily to give families relief", x: 0.3, y: -0.3 },
        { label: "Invest in public transport so people don't need cars as much", x: -0.6, y: 0.6 },
        { label: "Nothing — prices rise and fall, the market handles it", x: 0.8, y: -0.8 },
        { label: "Subsidise fuel for low-income households only", x: -0.4, y: 0.5 },
      ]
    },

    // --- ENVIRONMENT (3 questions) ---
    {
      topic: "Environment",
      text: "The government wants to ban all new petrol cars by 2035. Good idea?",
      options: [
        { label: "Yes — we have to act on climate change and EVs are the future", x: -0.7, y: 0.7 },
        { label: "No — people should choose what car they buy", x: 0.7, y: -0.7 },
        { label: "Only if they make EVs affordable and build enough charging stations first", x: -0.2, y: 0.3 },
        { label: "Set strong incentives for EVs but don't force people off petrol", x: 0.3, y: -0.2 },
      ]
    },
    {
      topic: "Environment",
      text: "Your school wants to go fully solar but it means higher fees for a couple of years. Worth it?",
      options: [
        { label: "Yes — schools should lead the way on renewable energy", x: -0.6, y: 0.5 },
        { label: "No — it's not fair to make families pay more right now", x: 0.5, y: -0.4 },
        { label: "The government should fund it instead of passing costs to families", x: -0.5, y: 0.7 },
        { label: "Only if the school votes on it and most families agree", x: 0.1, y: -0.1 },
      ]
    },
    {
      topic: "Environment",
      text: "A new coal mine is approved near your town. It'll create jobs but adds to carbon emissions. What do you think?",
      options: [
        { label: "Block it — climate change is too serious, we can't build more coal infrastructure", x: -0.8, y: 0.5 },
        { label: "Allow it — local jobs matter and Australia needs the exports", x: 0.8, y: -0.3 },
        { label: "Allow it temporarily but fast-track a transition plan for workers", x: 0.2, y: 0.1 },
        { label: "Invest in renewable energy projects that create just as many jobs instead", x: -0.6, y: 0.4 },
      ]
    },

    // --- SOCIAL (3 questions) ---
    {
      topic: "Social",
      text: "A student at your school gets suspended for a social media post made outside of school hours. Fair?",
      options: [
        { label: "No — schools shouldn't control what you do in your own time", x: -0.3, y: -0.7 },
        { label: "Yes — if it affects the school community, they have a right to act", x: 0.4, y: 0.7 },
        { label: "Only if it was targeting another student or was seriously harmful", x: 0.1, y: 0.2 },
        { label: "Schools should educate students about online behaviour, not punish them", x: -0.4, y: 0.2 },
      ]
    },
    {
      topic: "Social",
      text: "Should schools have gender-neutral bathrooms available for students who want them?",
      options: [
        { label: "Yes — every student deserves to feel safe and included", x: -0.7, y: 0.3 },
        { label: "No — bathrooms should stay as boys and girls only", x: 0.8, y: 0.4 },
        { label: "Yes, but only as an additional option — keep the existing ones too", x: -0.3, y: 0.1 },
        { label: "Schools should decide this themselves based on their community", x: 0.4, y: -0.3 },
      ]
    },
    {
      topic: "Social",
      text: "A homeless person sets up outside your local shopping centre. What's the best response?",
      options: [
        { label: "Move them on — they affect the businesses and customers there", x: 0.6, y: 0.4 },
        { label: "Connect them with housing and support services", x: -0.7, y: 0.6 },
        { label: "Leave them alone — it's their right to be in public spaces", x: -0.5, y: -0.6 },
        { label: "It's a complex issue — needs both immediate support and long-term housing solutions", x: -0.3, y: 0.4 },
      ]
    },

    // --- EDUCATION (3 questions) ---
    {
      topic: "Education",
      text: "University should be completely free for everyone. Agree?",
      options: [
        { label: "Yes — education is a right, not something you should go into debt for", x: -0.8, y: 0.7 },
        { label: "No — people who benefit from uni should contribute to its cost", x: 0.6, y: -0.4 },
        { label: "Free for high-demand fields like nursing and teaching, but not everything", x: -0.3, y: 0.4 },
        { label: "Keep HECS but wipe the debt after 10 years of work", x: -0.2, y: 0.3 },
      ]
    },
    {
      topic: "Education",
      text: "Should students get to choose what they study from Year 9 instead of a set curriculum?",
      options: [
        { label: "Yes — let us study what we're actually interested in and good at", x: -0.5, y: -0.6 },
        { label: "No — the core curriculum exists for a reason and everyone needs those basics", x: 0.5, y: 0.5 },
        { label: "Offer more electives but keep the core subjects as compulsory", x: 0.2, y: 0.2 },
        { label: "Students should co-design the curriculum with teachers", x: -0.4, y: 0.1 },
      ]
    },
    {
      topic: "Education",
      text: "Should schools ban mobile phones during the entire school day?",
      options: [
        { label: "Yes — phones are a massive distraction and hurt everyone's learning", x: 0.5, y: 0.8 },
        { label: "No — students should learn to manage their own distractions", x: -0.4, y: -0.7 },
        { label: "Ban them during class but allow them at lunch and recess", x: 0.2, y: 0.3 },
        { label: "Leave it up to individual teachers to decide in their classes", x: 0.3, y: -0.2 },
      ]
    },

    // --- TECHNOLOGY (3 questions) ---
    {
      topic: "Technology",
      text: "AI is starting to replace jobs like graphic design and customer service. What should happen?",
      options: [
        { label: "Tax companies that replace workers with AI and use the money for retraining", x: -0.6, y: 0.7 },
        { label: "Nothing — technology always creates new jobs in the long run", x: 0.7, y: -0.7 },
        { label: "Slow down AI adoption so workers have time to adapt", x: 0.0, y: 0.5 },
        { label: "Guarantee everyone a basic income as AI takes over more work", x: -0.8, y: 0.6 },
      ]
    },
    {
      topic: "Technology",
      text: "A company creates an app that tracks your location 24/7 to give you personalised deals. You in?",
      options: [
        { label: "No way — that's creepy and my data is private", x: -0.5, y: -0.6 },
        { label: "Sure, if the deals are good enough it's worth it", x: 0.6, y: -0.7 },
        { label: "The government should ban this kind of constant tracking", x: -0.6, y: 0.7 },
        { label: "It should be opt-in only, with full transparency about how data is used", x: -0.3, y: 0.2 },
      ]
    },
    {
      topic: "Technology",
      text: "TikTok might be banned in Australia over national security concerns. What do you think?",
      options: [
        { label: "Ban it — protecting national security is more important than one app", x: 0.6, y: 0.7 },
        { label: "Don't ban it — millions of Australians use it and it's not proven dangerous", x: -0.3, y: -0.6 },
        { label: "Force TikTok to store Australian data locally and audit the algorithm", x: -0.1, y: 0.5 },
        { label: "Let individuals decide what apps they use — government shouldn't choose for us", x: -0.2, y: -0.8 },
      ]
    },

    // --- DIGITAL RIGHTS (3 questions) ---
    {
      topic: "Digital Rights",
      text: "The government wants to require ID verification to use social media (so no anonymous accounts). Good idea?",
      options: [
        { label: "Yes — anonymous accounts are used for bullying and spreading lies", x: 0.5, y: 0.8 },
        { label: "No — privacy and anonymous speech are important rights", x: -0.6, y: -0.7 },
        { label: "Only for people under 18 — adults should be able to stay anonymous", x: 0.3, y: 0.3 },
        { label: "Platforms should handle this themselves, not the government", x: 0.4, y: -0.5 },
      ]
    },
    {
      topic: "Digital Rights",
      text: "Should the government be able to read encrypted messages (like on Signal or iMessage) to catch criminals?",
      options: [
        { label: "Yes — if you've got nothing to hide, you've got nothing to fear", x: 0.6, y: 0.8 },
        { label: "No — breaking encryption makes everyone less safe, including us", x: -0.7, y: -0.7 },
        { label: "Only with a court order and proper oversight", x: 0.2, y: 0.4 },
        { label: "Governments can't be trusted with that kind of access — absolutely not", x: -0.8, y: -0.8 },
      ]
    },
    {
      topic: "Digital Rights",
      text: "Should under-16s be completely banned from social media platforms like Instagram and TikTok?",
      options: [
        { label: "Yes — social media is genuinely harmful for young teenagers", x: 0.6, y: 0.8 },
        { label: "No — teens have the right to communicate how they choose", x: -0.5, y: -0.7 },
        { label: "Restrict it to age-appropriate features rather than a full ban", x: 0.2, y: 0.4 },
        { label: "Better digital literacy education, not bans", x: -0.3, y: 0.1 },
      ]
    },

    // --- HEALTHCARE (3 questions) ---
    {
      topic: "Healthcare",
      text: "Mental health sessions (psychologist/counsellor) should be completely free for under-25s. Agree?",
      options: [
        { label: "Absolutely — mental health is as important as physical health", x: -0.7, y: 0.8 },
        { label: "No — Medicare already covers some sessions, that's enough", x: 0.5, y: -0.3 },
        { label: "Yes, but only for those who can't afford it — means-test it", x: 0.1, y: 0.4 },
        { label: "Fund more school counsellors instead of individual sessions", x: -0.4, y: 0.5 },
      ]
    },
    {
      topic: "Healthcare",
      text: "Vaping and e-cigarettes are popular among young people. Should they be banned entirely?",
      options: [
        { label: "Yes — they're addictive and we shouldn't let companies target teens", x: 0.4, y: 0.8 },
        { label: "No — adults should be able to make their own choices", x: 0.3, y: -0.8 },
        { label: "Ban flavoured vapes that appeal to teens but allow plain ones for adult smokers", x: 0.2, y: 0.4 },
        { label: "Focus on education and health campaigns, not bans", x: -0.2, y: 0.1 },
      ]
    },
    {
      topic: "Healthcare",
      text: "Should junk food companies be banned from advertising to people under 18?",
      options: [
        { label: "Yes — companies shouldn't be able to target kids with unhealthy food", x: -0.5, y: 0.7 },
        { label: "No — parents and kids can make their own choices", x: 0.6, y: -0.7 },
        { label: "Ban it on social media and during kids' TV, but not everywhere", x: -0.2, y: 0.4 },
        { label: "Food companies should self-regulate rather than face government bans", x: 0.5, y: -0.3 },
      ]
    },

    // --- JUSTICE (3 questions) ---
    {
      topic: "Justice",
      text: "A 16-year-old steals a car. What's the best outcome?",
      options: [
        { label: "Rehabilitation program — focus on why they did it and address root causes", x: -0.7, y: 0.3 },
        { label: "Juvenile detention — there have to be real consequences", x: 0.6, y: 0.7 },
        { label: "Community service and mandatory counselling", x: -0.3, y: 0.4 },
        { label: "Make them meet the victim and make amends — restorative justice", x: -0.5, y: 0.2 },
      ]
    },
    {
      topic: "Justice",
      text: "Should drug use (not dealing) be decriminalised and treated as a health issue?",
      options: [
        { label: "Yes — locking people up for drug use doesn't help anyone", x: -0.8, y: -0.5 },
        { label: "No — drugs are illegal for a reason and should stay that way", x: 0.7, y: 0.6 },
        { label: "Decriminalise personal use but keep strong penalties for dealing", x: -0.4, y: -0.1 },
        { label: "Only for softer drugs like cannabis — harder drugs need strict penalties", x: 0.1, y: 0.2 },
      ]
    },
    {
      topic: "Justice",
      text: "Police are given power to use facial recognition cameras in shopping centres. Good idea?",
      options: [
        { label: "Yes — if it stops crime and catches criminals, I'm for it", x: 0.6, y: 0.8 },
        { label: "No — mass surveillance of innocent people is wrong", x: -0.7, y: -0.7 },
        { label: "Only if there are strict rules about how the data is stored and used", x: -0.1, y: 0.3 },
        { label: "No — facial recognition technology is too inaccurate and biased", x: -0.5, y: -0.4 },
      ]
    },

    // --- IMMIGRATION (2 questions) ---
    {
      topic: "Immigration",
      text: "Australia gets a big wave of refugees. What should happen?",
      options: [
        { label: "Welcome them — Australia has a proud history of helping people in need", x: -0.8, y: 0.3 },
        { label: "Strict limits — we don't have unlimited capacity", x: 0.7, y: 0.4 },
        { label: "Accept them but with thorough processing and support programs", x: -0.2, y: 0.4 },
        { label: "Work with the UN to share the responsibility globally", x: -0.5, y: 0.3 },
      ]
    },
    {
      topic: "Immigration",
      text: "Should international students pay the same uni fees as Australian students?",
      options: [
        { label: "Yes — it's unfair that international students pay so much more", x: -0.6, y: 0.5 },
        { label: "No — overseas students choosing to study here should pay the market rate", x: 0.7, y: -0.5 },
        { label: "Reduce the gap but don't make them equal — universities need the revenue", x: 0.2, y: 0.0 },
        { label: "Only for students from developing countries — give them a discount", x: -0.4, y: 0.3 },
      ]
    },

    // --- CULTURE (2 questions) ---
    {
      topic: "Culture",
      text: "Should Australia Day be moved to a different date?",
      options: [
        { label: "Yes — January 26 is a painful date for First Nations Australians", x: -0.7, y: 0.2 },
        { label: "No — it's our national day and we shouldn't change it to appease a minority", x: 0.8, y: 0.3 },
        { label: "Yes, but First Nations people should lead the decision on the new date", x: -0.8, y: 0.1 },
        { label: "Keep the date but change the name and focus of celebrations", x: 0.1, y: 0.2 },
      ]
    },
    {
      topic: "Culture",
      text: "Should school uniforms be compulsory in Australian public schools?",
      options: [
        { label: "Yes — uniforms reduce bullying about clothes and create equality", x: 0.5, y: 0.7 },
        { label: "No — students should be free to express themselves through what they wear", x: -0.5, y: -0.7 },
        { label: "Uniforms should be optional — let each school decide", x: 0.2, y: -0.2 },
        { label: "Keep uniforms but allow more flexibility in style and accessories", x: 0.3, y: 0.3 },
      ]
    },

    // --- WORK (2 questions) ---
    {
      topic: "Work",
      text: "Companies should be forced to pay women and men equally for the same job. Agree?",
      options: [
        { label: "Yes — equal pay for equal work, full stop", x: -0.7, y: 0.6 },
        { label: "No — the market determines wages and discrimination is already illegal", x: 0.7, y: -0.6 },
        { label: "Yes — and companies should publish their pay gap data", x: -0.8, y: 0.7 },
        { label: "It's complicated — ensure equal opportunity but wages naturally vary", x: 0.3, y: -0.1 },
      ]
    },
    {
      topic: "Work",
      text: "Should the minimum wage for under-18s be the same as adults?",
      options: [
        { label: "Yes — age shouldn't determine what your time is worth", x: -0.7, y: 0.5 },
        { label: "No — lower youth wages mean more businesses are willing to hire teens", x: 0.7, y: -0.6 },
        { label: "Phase it in — increase youth wages gradually until they reach adult rates", x: -0.2, y: 0.3 },
        { label: "Only once you finish school — students doing VCE need easier job access", x: 0.3, y: -0.1 },
      ]
    },

    // --- HOUSING (2 questions) ---
    {
      topic: "Housing",
      text: "Young people can't afford to buy homes. Best fix?",
      options: [
        { label: "Build way more public housing and rent it cheaply to people who need it", x: -0.8, y: 0.8 },
        { label: "Get out of the way — less regulation means more homes built faster", x: 0.7, y: -0.7 },
        { label: "First home buyer grants and shared equity schemes for young people", x: -0.1, y: 0.4 },
        { label: "Tax negative gearing and capital gains on investment properties more heavily", x: -0.6, y: 0.5 },
      ]
    },
    {
      topic: "Housing",
      text: "Rents in capital cities have skyrocketed. Should the government cap how much rent can increase each year?",
      options: [
        { label: "Yes — renters need protection from landlords making housing unaffordable", x: -0.7, y: 0.8 },
        { label: "No — rent controls reduce housing supply and make things worse long-term", x: 0.7, y: -0.6 },
        { label: "Cap increases at inflation plus a small margin — fairness for both sides", x: -0.2, y: 0.5 },
        { label: "Build more homes to fix supply — that'll bring rents down naturally", x: 0.3, y: -0.2 },
      ]
    },

    // --- additional teen questions ---
    {
      topic: "Work",
      text: "Your boss texts you late at night asking you to come in tomorrow morning even though you're already rostered off. You need the money but you also have plans. What rule should apply?",
      options: [
        { label: "Employees should have a legal right to say no without fear of losing shifts", x: -0.7, y: 0.5 },
        { label: "It's your choice — if you need the money, pick up the shift", x: 0.5, y: -0.6 },
        { label: "Bosses should give at least 24 hours notice for any roster changes", x: -0.4, y: 0.4 },
        { label: "The market sorts it out — good employers treat workers well or lose them", x: 0.6, y: -0.6 },
      ]
    },
    {
      topic: "Housing",
      text: "Your older sibling is 24 and still living at home because they can't afford rent. They earn $55,000 a year. What's the best way for the government to help them?",
      options: [
        { label: "Build more government-owned affordable housing they can rent at low cost", x: -0.7, y: 0.8 },
        { label: "Give tax breaks to landlords so they lower rents — market solutions are better", x: 0.6, y: -0.5 },
        { label: "Give first-home buyers a direct cash grant to help with a deposit", x: 0.1, y: 0.3 },
        { label: "Increase Commonwealth Rent Assistance so people aren't priced out of the market", x: -0.4, y: 0.6 },
      ]
    },

  ],

  // ============================================================
  // ADULT MODE — 35 questions for working Australians
  // ============================================================
  adult: [

    // --- ECONOMY (4 questions) ---
    {
      topic: "Economy",
      text: "The Stage 3 tax cuts disproportionately benefited high-income earners. Should Australia restructure its income tax brackets to be more progressive, even if it means higher rates for those earning over $200,000?",
      options: [
        { label: "Yes — those who earn more should contribute more to fund services", x: -0.8, y: 0.7 },
        { label: "No — high earners already pay most of the tax, further hikes drive talent away", x: 0.8, y: -0.5 },
        { label: "Only add a new top bracket above $300k — leave the Stage 3 cuts in place", x: 0.3, y: 0.1 },
        { label: "Focus on closing corporate and trust loopholes rather than raising personal rates", x: -0.4, y: 0.5 },
      ]
    },
    {
      topic: "Economy",
      text: "The RBA has kept interest rates high to fight inflation, but it's crushing mortgage holders. Should the government step in to cap interest rate rises or pressure the RBA to cut rates sooner?",
      options: [
        { label: "Yes — housing affordability is a crisis and the government must act", x: -0.6, y: 0.8 },
        { label: "No — the RBA must remain independent; political interference makes things worse", x: 0.6, y: -0.5 },
        { label: "Government should provide direct mortgage relief for struggling households", x: -0.5, y: 0.7 },
        { label: "Focus on reducing government spending to take pressure off inflation instead", x: 0.7, y: -0.3 },
      ]
    },
    {
      topic: "Economy",
      text: "Small business owners face mounting compliance costs — payroll tax, WorkCover, GST reporting. Should the government cut red tape and reduce these obligations, even if it means less worker protection?",
      options: [
        { label: "Yes — overregulation stifles small business and hurts the whole economy", x: 0.7, y: -0.7 },
        { label: "No — worker protections exist for good reason and shouldn't be traded for business savings", x: -0.7, y: 0.7 },
        { label: "Reduce reporting burden through digital streamlining, not by cutting protections", x: -0.1, y: 0.3 },
        { label: "Raise the payroll tax threshold so only larger businesses pay it", x: 0.3, y: -0.2 },
      ]
    },
    {
      topic: "Economy",
      text: "Australia's superannuation system gives large tax advantages to high-income earners who can salary-sacrifice the most. Should super tax concessions be reformed to favour lower and middle earners?",
      options: [
        { label: "Yes — the concessions overwhelmingly benefit the wealthy and need rebalancing", x: -0.7, y: 0.6 },
        { label: "No — everyone benefits from saving for retirement and incentives should stay", x: 0.6, y: -0.4 },
        { label: "Cap the tax concession benefit at a set dollar amount, not a percentage", x: -0.3, y: 0.4 },
        { label: "Reduce concessions at the top and reinvest savings into aged pension adequacy", x: -0.5, y: 0.5 },
      ]
    },

    // --- ENVIRONMENT (3 questions) ---
    {
      topic: "Environment",
      text: "Australia's large resource export sector — iron ore, coal, LNG — is central to our prosperity. Should the government phase out fossil fuel export subsidies, even at the cost of regional jobs and export revenue?",
      options: [
        { label: "Yes — public money shouldn't subsidise an industry driving climate change", x: -0.8, y: 0.5 },
        { label: "No — these industries are vital to the economy and regional communities", x: 0.8, y: -0.3 },
        { label: "Phase them out slowly over 10 years with a managed transition fund", x: -0.3, y: 0.3 },
        { label: "Redirect subsidies to clean energy projects in the same regions", x: -0.5, y: 0.4 },
      ]
    },
    {
      topic: "Environment",
      text: "Many Australians are installing rooftop solar, but the grid wasn't designed for it. Should the government mandate battery storage for new solar installations, adding roughly $10,000 to the cost?",
      options: [
        { label: "Yes — batteries make solar genuinely useful and reduce grid instability", x: -0.4, y: 0.7 },
        { label: "No — it prices out the families who benefit most from cheap solar", x: 0.4, y: -0.5 },
        { label: "Subsidise batteries heavily instead of making them mandatory", x: -0.3, y: 0.4 },
        { label: "Leave it to the market — if batteries make sense, people will buy them", x: 0.7, y: -0.7 },
      ]
    },
    {
      topic: "Environment",
      text: "The Murray-Darling Basin Plan requires farmers to return significant water to the environment. Many farming families say it's destroying their livelihoods. Should the buyback targets be wound back?",
      options: [
        { label: "No — the river system is dying and the environmental targets must hold", x: -0.7, y: 0.5 },
        { label: "Yes — the plan has been too hard on farming communities, a rebalance is needed", x: 0.7, y: -0.2 },
        { label: "Keep the targets but greatly increase compensation for affected farmers", x: -0.1, y: 0.5 },
        { label: "Achieve the targets through efficiency upgrades, not just buybacks", x: 0.2, y: 0.2 },
      ]
    },

    // --- SOCIAL (3 questions) ---
    {
      topic: "Social",
      text: "Access to affordable childcare is a significant barrier for many parents — particularly mothers — returning to work. Should the government make childcare fully free for all families, funded through general taxation?",
      options: [
        { label: "Yes — universal free childcare is an investment in workforce participation and gender equality", x: -0.7, y: 0.8 },
        { label: "No — families who choose to have children should bear more of that cost", x: 0.6, y: -0.5 },
        { label: "Free only for low-income families — means-test it to keep costs manageable", x: 0.1, y: 0.4 },
        { label: "Heavily subsidise it but not make it free — retain a small co-payment", x: -0.2, y: 0.5 },
      ]
    },
    {
      topic: "Social",
      text: "Religious organisations receive significant government funding while maintaining the right to hire and fire based on religious grounds, sometimes affecting LGBTQ+ workers. Should religious exemptions from discrimination laws be removed?",
      options: [
        { label: "Yes — if you take public money, you must follow the same rules as everyone else", x: -0.7, y: 0.6 },
        { label: "No — religious organisations have the right to staff their institutions according to their values", x: 0.8, y: 0.4 },
        { label: "Remove exemptions only for government-funded roles, not internal religious roles", x: -0.2, y: 0.5 },
        { label: "The government shouldn't fund organisations that discriminate", x: -0.6, y: 0.4 },
      ]
    },
    {
      topic: "Social",
      text: "Australia's aged care system is chronically underfunded. Many facilities are understaffed and provide poor quality care. Should the government nationalise aged care, taking it out of private hands?",
      options: [
        { label: "Yes — profit motive has no place in the care of vulnerable elderly people", x: -0.8, y: 0.8 },
        { label: "No — competition and private management lead to better outcomes than government run services", x: 0.7, y: -0.5 },
        { label: "Keep private providers but set mandatory staffing ratios and quality standards", x: -0.3, y: 0.6 },
        { label: "Create a strong public option that competes with private providers", x: -0.5, y: 0.6 },
      ]
    },

    // --- EDUCATION (3 questions) ---
    {
      topic: "Education",
      text: "Catholic and independent schools receive substantial public funding but are not fully bound by the national curriculum. Should all government-funded schools be required to follow the same curriculum and accountability standards?",
      options: [
        { label: "Yes — public money means public accountability and consistent standards", x: -0.6, y: 0.7 },
        { label: "No — school diversity and parental choice require curriculum flexibility", x: 0.7, y: -0.4 },
        { label: "Common standards for core literacy and numeracy, flexibility in other areas", x: 0.1, y: 0.3 },
        { label: "Tie extra funding to meeting the national curriculum, but don't mandate it", x: -0.2, y: 0.4 },
      ]
    },
    {
      topic: "Education",
      text: "HECS debt is now indexed to CPI, meaning graduates can owe significantly more than they borrowed even while repaying. Should HECS debt be wiped for graduates who work in shortage occupations like nursing or teaching?",
      options: [
        { label: "Yes — targeted debt relief is an effective way to address workforce shortages", x: -0.5, y: 0.6 },
        { label: "No — debt forgiveness is unfair to those who already paid their loans off", x: 0.6, y: -0.3 },
        { label: "Yes — and go further and wipe all HECS debt for everyone", x: -0.8, y: 0.7 },
        { label: "Better to increase wages in shortage occupations rather than manipulate debt", x: 0.1, y: 0.0 },
      ]
    },
    {
      topic: "Education",
      text: "AI tools like ChatGPT are widely used by students. Many educators want them banned from schools. Should schools embrace AI as a learning tool or ban it from assessments entirely?",
      options: [
        { label: "Embrace it — teach students to use AI critically, it's the future of work", x: -0.4, y: -0.2 },
        { label: "Ban it from assessments — it undermines the ability to assess real learning", x: 0.5, y: 0.6 },
        { label: "Allow it as a tool for drafting and research but require AI-free exams", x: 0.2, y: 0.3 },
        { label: "Redesign assessments to be AI-proof — focus on oral exams and applied tasks", x: 0.0, y: 0.4 },
      ]
    },

    // --- TECHNOLOGY (3 questions) ---
    {
      topic: "Technology",
      text: "Australian workers doing gig work (Uber, DoorDash, Airtasker) have no sick leave, super contributions, or unfair dismissal protection. Should gig workers be reclassified as employees and given full entitlements?",
      options: [
        { label: "Yes — these workers do regular work and deserve the same rights as anyone else", x: -0.8, y: 0.7 },
        { label: "No — flexibility is the whole point of gig work, regulation will kill the model", x: 0.7, y: -0.7 },
        { label: "Create a new 'dependent contractor' category with some but not all entitlements", x: -0.1, y: 0.3 },
        { label: "Let workers choose between employee status and contractor status themselves", x: 0.3, y: -0.4 },
      ]
    },
    {
      topic: "Technology",
      text: "The government is considering creating a national digital ID system. It would make government services faster but would require more personal data being held centrally. Should Australia adopt a mandatory digital ID?",
      options: [
        { label: "Yes — the efficiency gains are significant and security can be managed", x: 0.3, y: 0.7 },
        { label: "No — a centralised database is a honeypot for hackers and too much government control", x: -0.2, y: -0.8 },
        { label: "Voluntary only — those who want it can use it, others shouldn't be forced", x: 0.0, y: -0.4 },
        { label: "Yes, but with strict independent oversight and no sharing between agencies", x: -0.3, y: 0.4 },
      ]
    },
    {
      topic: "Technology",
      text: "Large social media platforms profit enormously from Australian users but pay minimal local tax. A new 'social media levy' is proposed to fund Australian journalism. Should platforms be forced to pay?",
      options: [
        { label: "Yes — platforms have decimated Australian journalism and should fund its replacement", x: -0.6, y: 0.7 },
        { label: "No — this is a tax on private companies for political purposes", x: 0.7, y: -0.6 },
        { label: "Yes — but the money should go to public broadcasting, not commercial outlets", x: -0.5, y: 0.6 },
        { label: "Better to reform media ownership laws than create new levies", x: -0.2, y: 0.3 },
      ]
    },

    // --- DIGITAL RIGHTS (2 questions) ---
    {
      topic: "Digital Rights",
      text: "Under Australia's Assistance and Access Act, tech companies can be ordered to build backdoors into encrypted products for law enforcement. Many experts say this weakens security for everyone. Should this law be repealed?",
      options: [
        { label: "Yes — undermining encryption damages cybersecurity for all Australians", x: -0.6, y: -0.6 },
        { label: "No — law enforcement needs these tools to fight serious crime", x: 0.6, y: 0.7 },
        { label: "Reform it with stronger oversight but keep the core capability", x: 0.2, y: 0.4 },
        { label: "Repeal it and invest more in traditional investigative policing", x: -0.4, y: -0.3 },
      ]
    },
    {
      topic: "Digital Rights",
      text: "Your employer can legally read your work emails and monitor your computer usage. Should workers have a legal right to privacy in workplace digital communications?",
      options: [
        { label: "Yes — employers shouldn't have unlimited surveillance over employees", x: -0.6, y: -0.5 },
        { label: "No — it's a work device on a work network, monitoring is reasonable", x: 0.6, y: 0.5 },
        { label: "Allow monitoring but require transparency — workers must be told what's monitored", x: 0.1, y: 0.3 },
        { label: "Workers should have full privacy except where there is specific reasonable suspicion", x: -0.4, y: -0.2 },
      ]
    },

    // --- HEALTHCARE (3 questions) ---
    {
      topic: "Healthcare",
      text: "Medicare bulk-billing rates have dropped significantly, meaning many GP visits now cost $40–$80 out of pocket. Should Medicare rebates be dramatically increased to restore universal bulk-billing, funded by a higher Medicare levy?",
      options: [
        { label: "Yes — healthcare should be free at point of use, that's what Medicare promised", x: -0.8, y: 0.8 },
        { label: "No — GPs set their own fees, government can't price-control a profession", x: 0.6, y: -0.4 },
        { label: "Raise rebates substantially and require bulk-billing for concession card holders", x: -0.4, y: 0.6 },
        { label: "Increase rebates but allow a small patient co-payment to keep GPs viable", x: 0.1, y: 0.4 },
      ]
    },
    {
      topic: "Healthcare",
      text: "The NDIS is growing rapidly in cost. Economists project it will cost $90 billion annually by 2030. Should access to NDIS be tightened with stricter eligibility criteria to make it sustainable?",
      options: [
        { label: "No — tighter criteria means cutting off vulnerable people who desperately need support", x: -0.7, y: 0.6 },
        { label: "Yes — the scheme is unsustainable and needs serious reform to survive", x: 0.6, y: 0.4 },
        { label: "Reform the pricing and provider fees rather than cutting participants", x: -0.3, y: 0.5 },
        { label: "Increase NDIS funding — the growth reflects genuine unmet need in the community", x: -0.8, y: 0.8 },
      ]
    },
    {
      topic: "Healthcare",
      text: "Private health insurance rebates cost the government about $7 billion a year, mostly benefiting higher-income Australians. Should these rebates be abolished and the money redirected to the public hospital system?",
      options: [
        { label: "Yes — public money should fund public healthcare, not private insurance", x: -0.7, y: 0.7 },
        { label: "No — private health reduces pressure on the public system and rebates encourage uptake", x: 0.7, y: -0.3 },
        { label: "Means-test the rebate so only lower earners receive it", x: -0.2, y: 0.4 },
        { label: "Phase it out gradually and invest the savings in hospital capacity", x: -0.5, y: 0.6 },
      ]
    },

    // --- JUSTICE (2 questions) ---
    {
      topic: "Justice",
      text: "Indigenous Australians are incarcerated at roughly 15 times the rate of non-Indigenous Australians. The Uluru Statement calls for constitutional reforms, including a Voice to Parliament. Do you support constitutional entrenchment of an Indigenous Voice?",
      options: [
        { label: "Yes — structural reform is essential to address systemic disadvantage", x: -0.7, y: 0.3 },
        { label: "No — one group should not have a constitutionally enshrined voice others don't have", x: 0.8, y: 0.2 },
        { label: "Support the principle but prefer a legislated rather than constitutional body", x: 0.1, y: 0.3 },
        { label: "Yes — and go further with treaty and truth-telling processes", x: -0.9, y: 0.4 },
      ]
    },
    {
      topic: "Justice",
      text: "Mandatory sentencing laws in some Australian states remove judicial discretion for certain offences. Should judges have full discretion to consider individual circumstances in all criminal cases?",
      options: [
        { label: "Yes — mandatory sentencing leads to unjust outcomes and ignores context", x: -0.6, y: -0.4 },
        { label: "No — mandatory sentences deter crime and ensure consistency", x: 0.7, y: 0.6 },
        { label: "Allow discretion but set clear sentencing guidelines as a framework", x: 0.1, y: 0.2 },
        { label: "Mandatory minimums only for violent offences, full discretion for everything else", x: 0.4, y: 0.3 },
      ]
    },

    // --- IMMIGRATION (2 questions) ---
    {
      topic: "Immigration",
      text: "Net overseas migration to Australia has hit record levels — over 500,000 in a single year. Some economists say this is driving up rents and putting pressure on infrastructure. Should Australia significantly reduce its immigration intake?",
      options: [
        { label: "Yes — we need to pause until we build enough homes and infrastructure to cope", x: 0.6, y: 0.4 },
        { label: "No — immigration drives economic growth, fills skills shortages, and enriches Australian culture", x: -0.5, y: -0.2 },
        { label: "Reduce temporary visas but maintain strong permanent skilled migration", x: 0.3, y: 0.1 },
        { label: "Keep intake high but tie it to investment in housing and infrastructure", x: -0.3, y: 0.5 },
      ]
    },
    {
      topic: "Immigration",
      text: "Australia's Pacific Australia Labour Mobility (PALM) scheme brings in seasonal agricultural workers from Pacific islands. Critics say they are exploited and have limited rights. Should PALM workers receive the same labour rights as Australian workers?",
      options: [
        { label: "Yes — all workers on Australian soil should have the same protections", x: -0.7, y: 0.6 },
        { label: "No — the scheme provides valuable income to Pacific nations and flexibility to farmers", x: 0.6, y: -0.3 },
        { label: "Improve enforcement of existing protections before adding new entitlements", x: 0.2, y: 0.3 },
        { label: "Create a Pacific Union framework with consistent rights across member nations", x: -0.4, y: 0.4 },
      ]
    },

    // --- CULTURE (2 questions) ---
    {
      topic: "Culture",
      text: "The Australia Council for the Arts funds Australian artists, writers, and cultural organisations. Some argue government arts funding picks cultural winners. Should the government continue funding the arts, or leave it to the private sector?",
      options: [
        { label: "Yes — culture and the arts are public goods that markets systematically underfund", x: -0.6, y: 0.6 },
        { label: "No — art that can't sustain itself commercially doesn't need taxpayer support", x: 0.7, y: -0.6 },
        { label: "Fund only cultural heritage and Indigenous arts — leave contemporary art to the market", x: 0.3, y: 0.0 },
        { label: "Increase arts funding significantly — it's an investment in the creative economy", x: -0.7, y: 0.7 },
      ]
    },
    {
      topic: "Culture",
      text: "Large cultural institutions like the ABC are accused by some of having a left-wing bias. Should the government reduce ABC funding and allow more competition from commercial media?",
      options: [
        { label: "No — the ABC provides independent public broadcasting that markets can't replace", x: -0.7, y: 0.4 },
        { label: "Yes — the ABC is biased and the government shouldn't fund journalism", x: 0.8, y: -0.5 },
        { label: "Maintain ABC funding but strengthen editorial independence oversight", x: -0.3, y: 0.3 },
        { label: "Increase ABC funding and mandate stronger regional and Indigenous content", x: -0.8, y: 0.6 },
      ]
    },

    // --- WORK (2 questions) ---
    {
      topic: "Work",
      text: "Australia's industrial relations system allows enterprise bargaining but many workers remain on award wages. Unions want the ability to bargain across entire industries rather than company by company. Should industry-wide multi-employer bargaining be expanded?",
      options: [
        { label: "Yes — it lifts wages across sectors and rebalances power between workers and employers", x: -0.8, y: 0.7 },
        { label: "No — enterprise bargaining works better for individual businesses and their workers", x: 0.7, y: -0.4 },
        { label: "Allow it in specific low-wage sectors like aged care and early education", x: -0.4, y: 0.5 },
        { label: "Expand it only where workers vote for it in each specific workplace", x: -0.1, y: 0.2 },
      ]
    },
    {
      topic: "Work",
      text: "The 'right to disconnect' law gives employees the legal right to ignore work calls and emails outside hours. Small business owners say it makes it impossible to run flexible operations. Is the right to disconnect good policy?",
      options: [
        { label: "Yes — work should not invade personal time and workers need legal protection", x: -0.7, y: 0.6 },
        { label: "No — it adds red tape and ignores the reality of how modern workplaces function", x: 0.6, y: -0.5 },
        { label: "Yes, but with clear exemptions for small business and genuine emergencies", x: -0.2, y: 0.4 },
        { label: "Better to make it a matter for individual enterprise agreements rather than law", x: 0.3, y: -0.2 },
      ]
    },

    // --- HOUSING (2 questions) ---
    {
      topic: "Housing",
      text: "Negative gearing allows property investors to offset rental losses against other income, and the 50% capital gains tax discount rewards long-term investors. Critics say these policies inflate property prices. Should both be abolished?",
      options: [
        { label: "Yes — these policies make housing unaffordable and prioritise investors over first home buyers", x: -0.7, y: 0.6 },
        { label: "No — abolishing them would crash the property market and hurt millions of Australians", x: 0.7, y: -0.3 },
        { label: "Grandfather existing investments but end negative gearing for new purchases only", x: -0.2, y: 0.3 },
        { label: "Limit negative gearing to one investment property per person", x: -0.4, y: 0.4 },
      ]
    },
    {
      topic: "Housing",
      text: "State governments want to override local councils and rezone areas near train stations for high-density housing. Many residents oppose towers in their neighbourhoods. Should states be able to override councils on housing density?",
      options: [
        { label: "Yes — local veto power has caused decades of housing undersupply and high prices", x: -0.4, y: 0.6 },
        { label: "No — communities should have the right to shape what gets built near their homes", x: 0.5, y: -0.4 },
        { label: "Yes — but only within 800m of train stations and with infrastructure investment attached", x: -0.2, y: 0.4 },
        { label: "Reform council decision-making to be faster and less obstructionist instead", x: 0.2, y: 0.1 },
      ]
    },

    // --- additional adult questions ---
    {
      topic: "Digital Rights",
      text: "Australia's My Health Record system holds your entire medical history and is opt-out rather than opt-in. Overseas, breaches of centralised health databases have exposed millions of patients' records. Should My Health Record be converted to a strict opt-in system?",
      options: [
        { label: "Yes — medical records are among the most sensitive data; opt-in should be the minimum standard", x: -0.6, y: -0.4 },
        { label: "No — opt-out maximises participation and the clinical benefits of a connected health record", x: 0.4, y: 0.5 },
        { label: "Keep opt-out but strengthen data breach penalties and limit third-party access", x: 0.1, y: 0.3 },
        { label: "Fund better cybersecurity infrastructure before expanding the system further", x: 0.0, y: 0.2 },
      ]
    },
    {
      topic: "Justice",
      text: "Bail laws in several Australian states have been tightened after high-profile crimes committed while on bail, leading to rising remand populations. Remand prisoners have not been convicted of any offence but can spend months in custody awaiting trial. Should Australia introduce stricter limits on pre-trial remand to protect the presumption of innocence?",
      options: [
        { label: "Yes — imprisoning unconvicted people for months is a fundamental breach of the presumption of innocence", x: -0.6, y: -0.4 },
        { label: "No — bail conditions are insufficient for some defendants; community safety must take priority", x: 0.7, y: 0.6 },
        { label: "Reform bail to ensure electronic monitoring is always offered as a condition before remand is ordered", x: -0.2, y: 0.0 },
        { label: "Set maximum remand periods with mandatory review hearings every 30 days", x: -0.4, y: 0.2 },
      ]
    },
    {
      topic: "Immigration",
      text: "Australia grants 195,000 permanent visas annually. However, around 2.4 million temporary visa holders — international students, working holiday makers, and temporary skilled migrants — live in Australia with limited rights. Many have been here for years with no pathway to permanence. Should temporary residents who have lived in Australia for three or more years receive an automatic right to apply for permanent residency?",
      options: [
        { label: "Yes — years of contribution to the Australian economy and community should create a pathway", x: -0.6, y: 0.3 },
        { label: "No — temporary means temporary; permanent residency must be earned through a separate points assessment", x: 0.7, y: 0.2 },
        { label: "Yes for workers in shortage occupations — but not all temporary residents equally", x: 0.1, y: 0.3 },
        { label: "Create a new 'established resident' visa with full work rights but without an automatic citizenship pathway", x: 0.2, y: 0.1 },
      ]
    },
    {
      topic: "Culture",
      text: "The Australian government spends approximately $1.3 billion annually on advertising — making it one of the largest advertisers in the country. Critics argue government advertising is often politically motivated and blurs the line between public information campaigns and electoral promotion. Should there be an independent parliamentary budget office with binding authority to approve all government advertising campaigns?",
      options: [
        { label: "Yes — independent oversight is essential to prevent taxpayer-funded political propaganda", x: -0.5, y: 0.5 },
        { label: "No — the government of the day has a democratic mandate to communicate its policies", x: 0.5, y: 0.3 },
        { label: "Yes, and ban all government advertising within 6 months of a federal election", x: -0.6, y: 0.4 },
        { label: "The Senate Estimates process already provides accountability; new bureaucracy is unnecessary", x: 0.4, y: -0.1 },
      ]
    },

  ],

  // ============================================================
  // ACADEMIC MODE — 35 questions for selective/gifted students
  // ============================================================
  academic: [

    // --- ECONOMY (4 questions) ---
    {
      topic: "Economy",
      text: "Keynesian economics argues that government spending can stimulate aggregate demand during recessions. However, critics from the Chicago School argue that crowding out private investment makes fiscal stimulus self-defeating. Which view do you find more persuasive for modern Australia?",
      options: [
        { label: "Keynesian — targeted fiscal policy is essential during downturns and markets fail to self-correct", x: -0.7, y: 0.7 },
        { label: "Monetarist — the RBA's monetary tools are more effective and government spending is inefficient", x: 0.6, y: -0.4 },
        { label: "Both have merit — a blend depending on economic conditions is optimal", x: -0.1, y: 0.2 },
        { label: "Modern Monetary Theory suggests deficit spending is not constrained the way either school claims", x: -0.8, y: 0.5 },
      ]
    },
    {
      topic: "Economy",
      text: "The Laffer Curve theorises that beyond a certain tax rate, higher taxes reduce total revenue by discouraging economic activity. Australia's top marginal rate is 47%. Is there a compelling case that reducing this rate would increase tax receipts?",
      options: [
        { label: "No — empirical evidence for the Laffer effect at Australia's rate is weak; cuts reduce revenue", x: -0.6, y: 0.4 },
        { label: "Yes — the rate discourages high-skilled migration and productive effort at the margin", x: 0.7, y: -0.5 },
        { label: "Possibly, but the distributional effects outweigh any revenue gains", x: -0.3, y: 0.3 },
        { label: "The debate misses the point — wealth taxes would be more effective than rate cuts", x: -0.7, y: 0.6 },
      ]
    },
    {
      topic: "Economy",
      text: "Universal Basic Income (UBI) proposes replacing the welfare system with unconditional payments to all citizens. Pilots in Finland and Kenya show mixed results. Should Australia pilot a UBI scheme?",
      options: [
        { label: "Yes — it simplifies welfare, eliminates poverty traps, and recognises unpaid labour", x: -0.7, y: 0.4 },
        { label: "No — unconditional income reduces work incentives and is fiscally unsustainable", x: 0.7, y: -0.5 },
        { label: "Pilot it in a specific region to gather Australian-specific evidence first", x: -0.2, y: 0.3 },
        { label: "Negative Income Tax is preferable — it targets the bottom without universal payments", x: 0.1, y: -0.1 },
      ]
    },
    {
      topic: "Economy",
      text: "Pigouvian taxes correct market failures by pricing negative externalities into economic activity. Carbon pricing is the textbook example. Should Australia implement a broad-based economy-wide carbon price?",
      options: [
        { label: "Yes — it is the most economically efficient mechanism for reducing emissions", x: -0.6, y: 0.4 },
        { label: "No — it raises costs for households and businesses and sends industry offshore", x: 0.7, y: -0.5 },
        { label: "Yes, with full revenue recycled back to households to offset distributional impacts", x: -0.5, y: 0.5 },
        { label: "Regulatory standards are more politically durable and equally effective", x: -0.1, y: 0.5 },
      ]
    },

    // --- ENVIRONMENT (3 questions) ---
    {
      topic: "Environment",
      text: "The concept of ecological economics argues that GDP growth is incompatible with planetary boundaries and proposes 'degrowth' — deliberately shrinking economic output in wealthy nations. Does degrowth offer a credible policy pathway for Australia?",
      options: [
        { label: "Yes — infinite growth on a finite planet is a logical impossibility and degrowth is necessary", x: -0.8, y: 0.4 },
        { label: "No — decoupling growth from emissions through technology is achievable and preferable", x: 0.5, y: -0.2 },
        { label: "Degrowth in material consumption, but not in health, education, and wellbeing", x: -0.4, y: 0.3 },
        { label: "The question is premature — develop green technology first, then reassess growth models", x: 0.2, y: 0.0 },
      ]
    },
    {
      topic: "Environment",
      text: "Intergenerational equity — the principle that future generations have equal moral standing to present generations — is a foundation of sustainable development theory. Should Australia amend its Constitution to include a right to a healthy environment for future generations?",
      options: [
        { label: "Yes — enshrining environmental rights constitutionally provides long-term protection", x: -0.7, y: 0.5 },
        { label: "No — constitutional environmental rights would give unelected courts too much power over policy", x: 0.6, y: -0.3 },
        { label: "Yes, but frame it as procedural rights (to information, to participate) rather than substantive", x: -0.2, y: 0.3 },
        { label: "Statutory protection is adequate — reserve constitutional change for proven failures", x: 0.3, y: 0.1 },
      ]
    },
    {
      topic: "Environment",
      text: "Australia's Nature Positive Plan commits to halting and reversing biodiversity loss by 2030. Some ecologists argue the plan allows offsetting — building in one place and 'compensating' elsewhere — which doesn't achieve true biodiversity outcomes. Should offsets be banned?",
      options: [
        { label: "Yes — biodiversity offsets rarely work in practice and allow destruction to continue", x: -0.7, y: 0.5 },
        { label: "No — offsets are the only realistic way to balance development and conservation", x: 0.5, y: -0.2 },
        { label: "Retain offsets but require like-for-like and independent verification", x: 0.0, y: 0.4 },
        { label: "Strengthen protected areas and funding for land trusts instead of relying on offsets", x: -0.5, y: 0.4 },
      ]
    },

    // --- SOCIAL (3 questions) ---
    {
      topic: "Social",
      text: "John Rawls' 'veil of ignorance' thought experiment argues that just social arrangements are those we would choose if we didn't know our position in society. Applied to Australia, which policy best reflects this principle?",
      options: [
        { label: "A strong welfare state that protects everyone regardless of circumstance", x: -0.7, y: 0.7 },
        { label: "Equal opportunity through education reform rather than redistributive outcomes", x: 0.1, y: 0.3 },
        { label: "Rawls himself endorsed only the difference principle — inequalities are fine if they benefit the least well-off", x: -0.3, y: 0.4 },
        { label: "Nozick's entitlement theory is more coherent — just acquisition, not equal outcomes, matters", x: 0.7, y: -0.6 },
      ]
    },
    {
      topic: "Social",
      text: "Capabilities theory (Amartya Sen, Martha Nussbaum) argues that human development should be measured by what people can do and be, not just income. Should Australia adopt a wellbeing framework — replacing GDP with multidimensional indicators — as its primary policy benchmark?",
      options: [
        { label: "Yes — New Zealand's wellbeing budget shows it's practically feasible and better guides policy", x: -0.6, y: 0.5 },
        { label: "No — GDP remains the most reliable proxy for material living standards", x: 0.5, y: -0.3 },
        { label: "Supplement GDP with wellbeing measures but don't replace it as the primary target", x: 0.0, y: 0.2 },
        { label: "The capabilities framework is theoretically superior — adopt it fully in national accounts", x: -0.7, y: 0.4 },
      ]
    },
    {
      topic: "Social",
      text: "The politics of recognition (Charles Taylor, Axel Honneth) argues that cultural and identity recognition is as important as material redistribution. Australia's multicultural policy attempts to balance unity and diversity. Is multiculturalism as a state policy coherent and defensible?",
      options: [
        { label: "Yes — social recognition of diverse identities is both just and practically beneficial", x: -0.6, y: 0.3 },
        { label: "No — a liberal state should be identity-neutral; multiculturalism as policy creates division", x: 0.6, y: -0.2 },
        { label: "Multiculturalism is defensible but must be grounded in shared civic values", x: 0.1, y: 0.2 },
        { label: "The debate requires separating descriptive multiculturalism from normative policy — they're different questions", x: -0.1, y: 0.0 },
      ]
    },

    // --- EDUCATION (3 questions) ---
    {
      topic: "Education",
      text: "The Gonski Review found that Australian school funding is inequitable, with socioeconomic status the strongest predictor of educational outcomes. Should the Schooling Resource Standard (SRS) be achieved for all schools through progressive redistribution from over-funded systems?",
      options: [
        { label: "Yes — equity of educational opportunity requires funding students proportionally to their need", x: -0.7, y: 0.7 },
        { label: "No — redistributing from schools creates political backlash and funding instability", x: 0.5, y: -0.2 },
        { label: "Yes — but weight funding even more heavily toward students with disadvantage", x: -0.8, y: 0.6 },
        { label: "Increase total education spending to meet the SRS without redistributing from any sector", x: -0.3, y: 0.5 },
      ]
    },
    {
      topic: "Education",
      text: "Paulo Freire's critical pedagogy critiques 'banking education' — where students are passive recipients of knowledge — and argues for dialogical learning that fosters critical consciousness. Should Australian curricula be restructured around Freirean principles?",
      options: [
        { label: "Yes — education should empower students to question structures of power, not just absorb content", x: -0.7, y: 0.1 },
        { label: "No — a knowledge-rich curriculum (E.D. Hirsch) better equips students for life and reduces inequality", x: 0.5, y: 0.3 },
        { label: "Blend critical inquiry with a robust knowledge base — both Freire and Hirsch offer valuable insights", x: -0.1, y: 0.3 },
        { label: "Freirean pedagogy is valuable in social studies but inappropriate for STEM subjects", x: 0.2, y: 0.2 },
      ]
    },
    {
      topic: "Education",
      text: "Compulsory voting in federal elections is sometimes defended as a form of civic education in democracy. Should civic education — including practical electoral participation — be made a core compulsory subject in Years 9 and 10?",
      options: [
        { label: "Yes — democratic participation skills are as essential as numeracy and literacy", x: -0.4, y: 0.6 },
        { label: "No — mandating political education risks government-influenced indoctrination", x: 0.5, y: -0.4 },
        { label: "Yes — but taught in a rigorously pluralistic and non-partisan way", x: -0.2, y: 0.5 },
        { label: "Extend the existing HASS curriculum; a separate subject is unnecessary duplication", x: 0.1, y: 0.2 },
      ]
    },

    // --- TECHNOLOGY (2 questions) ---
    {
      topic: "Technology",
      text: "Nick Bostrom's 'Superintelligence' thesis argues that advanced AI poses an existential risk to humanity. Alternatively, critics argue AI risk is overstated and distracts from near-term harms. Should Australia's AI governance prioritise long-term existential risk or near-term algorithmic harms?",
      options: [
        { label: "Near-term harms — bias, labour displacement, and disinformation are concrete and urgent", x: -0.5, y: 0.5 },
        { label: "Existential risk — the magnitude of a bad outcome justifies precautionary investment", x: 0.1, y: 0.6 },
        { label: "Both — existential risk research and near-term harm mitigation are complementary", x: -0.2, y: 0.5 },
        { label: "Neither should be the primary focus — AI's benefits to healthcare and productivity should guide policy", x: 0.4, y: -0.2 },
      ]
    },
    {
      topic: "Technology",
      text: "The concept of the 'right to be forgotten' (RTBF) allows individuals to request deletion of personal data from search engines. Australia has limited RTBF provisions. Should Australia adopt a comprehensive RTBF similar to the GDPR framework?",
      options: [
        { label: "Yes — informational privacy is a fundamental right and outdated data causes lasting harm", x: -0.6, y: 0.3 },
        { label: "No — RTBF undermines public access to accurate information and press freedom", x: 0.5, y: -0.4 },
        { label: "Adopt a balanced RTBF limited to private individuals, not public figures", x: -0.2, y: 0.2 },
        { label: "Privacy Act reform is a better mechanism than a specific RTBF provision", x: -0.1, y: 0.3 },
      ]
    },

    // --- DIGITAL RIGHTS (2 questions) ---
    {
      topic: "Digital Rights",
      text: "Philosopher Shoshana Zuboff describes 'surveillance capitalism' as a new economic logic that commodifies behavioural data without meaningful consent. Should Australia prohibit the commercial sale of personal behavioural data collected by platforms?",
      options: [
        { label: "Yes — treating human experience as raw material for profit is exploitative and must be banned", x: -0.7, y: 0.5 },
        { label: "No — data commerce funds innovation and users implicitly consent through terms of service", x: 0.6, y: -0.5 },
        { label: "Require meaningful informed consent and give users property rights over their data", x: -0.4, y: 0.2 },
        { label: "Prohibit sale of data to foreign entities but allow domestic commercial use with consent", x: 0.1, y: 0.3 },
      ]
    },
    {
      topic: "Digital Rights",
      text: "Net neutrality requires that internet service providers treat all data equally. Australia has no formal net neutrality law. Should Australia legislate net neutrality protections to prevent ISPs from prioritising certain content?",
      options: [
        { label: "Yes — a neutral internet is essential for free expression and market competition", x: -0.6, y: 0.3 },
        { label: "No — allowing ISPs to offer differentiated services drives infrastructure investment", x: 0.5, y: -0.4 },
        { label: "Legislate against anti-competitive throttling while allowing genuine premium services", x: -0.1, y: 0.2 },
        { label: "The ACCC has sufficient competition powers — specific net neutrality law is unnecessary", x: 0.3, y: -0.1 },
      ]
    },

    // --- HEALTHCARE (2 questions) ---
    {
      topic: "Healthcare",
      text: "Bioethicist Peter Singer's utilitarian framework argues that wealthy nations have strong moral obligations to fund global health interventions — which save lives far more cost-effectively than domestic healthcare spending. Should Australia redirect health funding toward global health priorities?",
      options: [
        { label: "Yes — a dollar spent on malaria nets saves far more QALYs than domestic spending", x: -0.6, y: 0.2 },
        { label: "No — governments have primary obligations to their own citizens, not global populations", x: 0.7, y: 0.1 },
        { label: "Increase foreign aid for global health while maintaining domestic Medicare commitments", x: -0.4, y: 0.5 },
        { label: "Singer's framework is correct in theory but politically untenable — focus on domestic reform first", x: 0.0, y: 0.3 },
      ]
    },
    {
      topic: "Healthcare",
      text: "The social determinants of health (Marmot Review) show that income, education, housing, and early childhood experiences drive health outcomes more than healthcare access. Should Australia shift health funding upstream toward social determinants rather than clinical treatment?",
      options: [
        { label: "Yes — treating illness is far less cost-effective than addressing its root causes", x: -0.6, y: 0.6 },
        { label: "No — people in acute need require clinical care; we can't wait for upstream reforms", x: 0.4, y: 0.4 },
        { label: "Both — increase prevention funding significantly without cutting clinical care", x: -0.3, y: 0.5 },
        { label: "The social determinants model is correct but implementation requires cross-portfolio reform beyond Health", x: -0.4, y: 0.3 },
      ]
    },

    // --- JUSTICE (2 questions) ---
    {
      topic: "Justice",
      text: "Legal philosopher H.L.A. Hart distinguished between primary rules (obligations) and secondary rules (meta-rules about legal systems). Australia's parliamentary sovereignty means parliament can override almost any right. Should Australia adopt a constitutionally entrenched Bill of Rights?",
      options: [
        { label: "Yes — fundamental rights should not be subject to parliamentary majorities", x: -0.6, y: 0.1 },
        { label: "No — parliamentary sovereignty is a strength; courts should not override elected legislatures on rights", x: 0.7, y: 0.4 },
        { label: "Yes, but a 'dialogue model' (like the UK HRA) that preserves parliamentary override", x: -0.1, y: 0.2 },
        { label: "Strengthen the role of parliamentary scrutiny committees instead of courts", x: 0.3, y: 0.3 },
      ]
    },
    {
      topic: "Justice",
      text: "Restorative justice theory (Howard Zehr) focuses on repairing harm to victims and communities rather than punishing offenders. Recidivism data from restorative programs in Australia is promising. Should restorative justice replace incarceration as the primary response for non-violent offences?",
      options: [
        { label: "Yes — incarceration is expensive, criminalising, and less effective at reducing reoffending", x: -0.7, y: -0.4 },
        { label: "No — punishment serves retributive justice and the deterrence function that victims deserve", x: 0.7, y: 0.6 },
        { label: "Make restorative justice the default for non-violent offences with incarceration as a last resort", x: -0.4, y: -0.1 },
        { label: "Offer restorative justice as an option alongside conventional sentencing — it should not be mandatory", x: -0.1, y: 0.2 },
      ]
    },

    // --- IMMIGRATION (2 questions) ---
    {
      topic: "Immigration",
      text: "Cosmopolitan political theory (Joseph Carens) argues that national borders are morally arbitrary and that a global right to freedom of movement is defensible on liberal grounds. Should Australia's immigration system move toward open borders?",
      options: [
        { label: "Yes — birthplace is morally no different from race or gender as a basis for discrimination", x: -0.8, y: -0.5 },
        { label: "No — nation-states have legitimate interests in controlling population, culture, and security", x: 0.8, y: 0.4 },
        { label: "Expand freedom of movement within regional agreements (e.g., Pacific, ASEAN) as a first step", x: -0.4, y: -0.1 },
        { label: "Carens' argument is philosophically interesting but practically incompatible with welfare states", x: 0.2, y: 0.1 },
      ]
    },
    {
      topic: "Immigration",
      text: "Australia's offshore processing regime for asylum seekers has been defended on deterrence grounds but condemned by international law scholars as a violation of the Refugee Convention. Is offshore processing justifiable?",
      options: [
        { label: "No — it violates non-refoulement, is cruel, and the deterrence evidence is weak", x: -0.8, y: -0.3 },
        { label: "Yes — deterring dangerous boat journeys saves lives and protects the integrity of the system", x: 0.7, y: 0.5 },
        { label: "It may be effective but must be accompanied by far greater regional processing capacity", x: 0.2, y: 0.3 },
        { label: "The Refugee Convention itself needs updating for the modern context of climate displacement", x: 0.0, y: 0.1 },
      ]
    },

    // --- CULTURE (2 questions) ---
    {
      topic: "Culture",
      text: "Benedict Anderson's 'Imagined Communities' argues that nations are social constructs held together by shared narratives. If national identity is constructed, can and should Australia deliberately reconstruct its national narrative to be more inclusive of Indigenous history and multicultural identity?",
      options: [
        { label: "Yes — national narratives should evolve and be contested; truth-telling is essential", x: -0.7, y: 0.2 },
        { label: "No — destabilising a unifying national narrative carries serious social cohesion risks", x: 0.6, y: 0.3 },
        { label: "Yes — through a truth-telling process and revised public history, not government decree", x: -0.5, y: 0.0 },
        { label: "Anderson's framework shows national identity is always in flux — it doesn't require deliberate redesign", x: -0.1, y: -0.1 },
      ]
    },
    {
      topic: "Culture",
      text: "Mill's 'harm principle' argues that state intervention is only justified to prevent harm to others. Applied to cultural expression, should the government restrict forms of expression — such as certain music, media, or public art — that some communities find deeply offensive?",
      options: [
        { label: "No — offence is not harm in Mill's sense; free expression must prevail", x: -0.2, y: -0.7 },
        { label: "Yes — cultural vilification causes measurable harm to marginalised communities", x: -0.5, y: 0.5 },
        { label: "Only where expression directly incites violence — not mere offence", x: -0.1, y: 0.2 },
        { label: "The state should set minimum standards but defer to community norms where possible", x: 0.3, y: 0.3 },
      ]
    },

    // --- WORK (2 questions) ---
    {
      topic: "Work",
      text: "Automation economists (Daron Acemoglu, Pascual Restrepo) find that automation in manufacturing has reduced labour demand without proportional new job creation. Should Australia tax capital-replacing automation to fund worker transition and education?",
      options: [
        { label: "Yes — automation displaces workers and the gains accrue to capital owners who should bear adjustment costs", x: -0.7, y: 0.6 },
        { label: "No — taxing automation would slow adoption of productivity-enhancing technology", x: 0.7, y: -0.5 },
        { label: "Tax automation revenue streams (profits) rather than the technology itself", x: -0.3, y: 0.4 },
        { label: "Invest in education and retraining through general revenue rather than a specific automation tax", x: -0.1, y: 0.4 },
      ]
    },
    {
      topic: "Work",
      text: "The four-day work week has been trialled in the UK, Iceland, and Japan with largely positive results for productivity and wellbeing. Should the Australian government legislate a 32-hour standard working week?",
      options: [
        { label: "Yes — the standard 40-hour week was an industrial era construct and evidence supports reduction", x: -0.7, y: 0.5 },
        { label: "No — legislating working hours ignores sectoral variation and reduces business flexibility", x: 0.6, y: -0.5 },
        { label: "Enable it through enterprise bargaining and incentives rather than legislation", x: 0.1, y: -0.1 },
        { label: "Trial it in the public sector first and evaluate results before considering legislation", x: -0.1, y: 0.3 },
      ]
    },

    // --- HOUSING (1 question) ---
    {
      topic: "Housing",
      text: "Land value tax (LVT), advocated by economists from Henry George to Joseph Stiglitz, taxes the unimproved value of land rather than buildings or income, potentially reducing speculative land holding and improving housing affordability. Should Australia replace stamp duty and council rates with a broad-based LVT?",
      options: [
        { label: "Yes — LVT is arguably the most efficient and equitable tax available to government", x: -0.6, y: 0.5 },
        { label: "No — it would impose significant burdens on asset-rich, income-poor homeowners (especially the elderly)", x: 0.5, y: -0.2 },
        { label: "Transition to LVT gradually with revenue-neutral swaps — the economics are sound", x: -0.3, y: 0.3 },
        { label: "Implement at state level (as ACT has begun) before considering federal adoption", x: -0.1, y: 0.2 },
      ]
    },

    // --- additional academic questions ---
    {
      topic: "Technology",
      text: "Langdon Winner's classic essay 'Do Artifacts Have Politics?' argues that technological design embeds political values — his example being highway bridges designed to keep buses (and thus lower-income people) out of certain suburbs. Should Australian technology policy require algorithmic impact assessments that evaluate the distributional effects of publicly deployed AI systems?",
      options: [
        { label: "Yes — distributional harms from algorithmic systems are real and require systematic evaluation before deployment", x: -0.6, y: 0.6 },
        { label: "No — impact assessments create bureaucratic barriers to beneficial technology adoption", x: 0.5, y: -0.4 },
        { label: "Yes, but only for government-deployed AI; private sector systems should face market accountability", x: 0.0, y: 0.4 },
        { label: "Winner's framework overstates the determinism of technology; governance should focus on uses, not artifacts", x: 0.3, y: 0.1 },
      ]
    },
    {
      topic: "Digital Rights",
      text: "The concept of 'information asymmetry' (George Akerlof's market for lemons) applies to data privacy: individuals cannot evaluate the risks of disclosing data because those risks are opaque. Some scholars propose reversing the burden — companies must demonstrate that data collection is necessary rather than individuals demonstrating harm. Should Australia's Privacy Act reform adopt a 'data minimisation' principle requiring companies to justify all data collection?",
      options: [
        { label: "Yes — a data minimisation default reverses the current asymmetry in favour of individuals", x: -0.6, y: 0.4 },
        { label: "No — data minimisation constrains valuable uses of data in healthcare, research, and services", x: 0.5, y: -0.4 },
        { label: "Adopt minimisation as a principle but allow opt-in expanded collection with informed consent", x: -0.2, y: 0.2 },
        { label: "The problem is enforcement, not principles — strengthen the OAIC's investigative and penalty powers first", x: -0.1, y: 0.4 },
      ]
    },
    {
      topic: "Healthcare",
      text: "Bioethics distinguishes between negative rights (freedom from interference) and positive rights (entitlements to goods and services). Medicare enshrines a positive right to healthcare access, but many Australians cannot access timely care despite nominal coverage. Using Sen's capability framework, is inadequate access to mental health care a violation of a fundamental capability that the Australian state is obligated to remedy?",
      options: [
        { label: "Yes — mental health is a core capability and inadequate access constitutes a state failure of positive obligation", x: -0.7, y: 0.6 },
        { label: "No — positive rights claims in healthcare must be balanced against fiscal constraints and cannot be absolute", x: 0.4, y: 0.0 },
        { label: "Yes, the state has an obligation but it can be satisfied through mixed public and community-led models", x: -0.3, y: 0.4 },
        { label: "The capability framework is philosophically compelling but practically requires prioritisation; not all capabilities can be guaranteed simultaneously", x: 0.1, y: 0.2 },
      ]
    },
    {
      topic: "Justice",
      text: "The concept of 'procedural justice' (Tom Tyler) finds that people's compliance with law and acceptance of legal outcomes depends more on whether they perceive the process as fair than on whether they agree with the outcome. Australian research shows trust in police is significantly lower among Aboriginal and Torres Strait Islander communities. Should reform of policing focus on procedural justice reforms — such as mandatory body camera footage, civilian oversight, and community policing models — rather than increasing police powers?",
      options: [
        { label: "Yes — rebuilding legitimacy through procedural justice is more effective than enforcement for long-term compliance", x: -0.6, y: 0.0 },
        { label: "No — community safety requires adequate police powers; procedural reforms alone cannot address crime rates", x: 0.6, y: 0.5 },
        { label: "Both are necessary — procedural justice reforms and adequate resources for community policing are complementary", x: -0.2, y: 0.4 },
        { label: "The problem is systemic racism in the justice system, not police procedure; structural reform is the priority", x: -0.7, y: 0.2 },
      ]
    },
    {
      topic: "Immigration",
      text: "The literature on 'integration' versus 'assimilation' of immigrants distinguishes between models that require newcomers to adopt the host culture (assimilation) and models that expect mutual adaptation (integration). Australia's multiculturalism policy nominally adopts the integration model. Do empirical studies on second-generation outcomes support the integration or assimilation model as producing better social cohesion and economic outcomes?",
      options: [
        { label: "Integration — evidence shows second-generation migrants have better outcomes when cultural maintenance is supported alongside civic participation", x: -0.6, y: 0.2 },
        { label: "Assimilation — stronger common cultural frameworks reduce group-based inequality and improve social cohesion", x: 0.6, y: 0.3 },
        { label: "The distinction is empirically contested; context-specific factors (class, race, religion) dominate outcomes", x: 0.0, y: 0.0 },
        { label: "The research supports pluralistic integration but requires genuine anti-discrimination enforcement to succeed", x: -0.4, y: 0.3 },
      ]
    },
    {
      topic: "Work",
      text: "The 'gig economy' challenges traditional definitions of employment. The High Court of Australia's WorkPac v Rossato judgment and subsequent legislative reform have clarified casual employment but left structural ambiguities. The ILO Decent Work agenda argues that labour protections must extend to all working people regardless of employment classification. Should Australia legislate a single employment status test across all contracts to end the proliferation of precarious work classifications?",
      options: [
        { label: "Yes — the ILO framework is correct; a single-status test would end legal games played with employment classifications", x: -0.7, y: 0.6 },
        { label: "No — labour market flexibility is an economic asset; multiple classifications serve legitimate purposes", x: 0.6, y: -0.5 },
        { label: "Adopt a single economic reality test but allow varied entitlements based on hours worked per week", x: -0.2, y: 0.3 },
        { label: "The courts have made progress through common law; legislative certainty is desirable but the ILO model may be over-prescriptive", x: 0.2, y: 0.1 },
      ]
    },
    {
      topic: "Housing",
      text: "Planning economist Alain Bertaud argues in 'Order Without Design' that cities are fundamentally labour markets, and restrictive zoning that limits housing supply near employment centres reduces workers' access to jobs and lowers overall productivity. Sydney and Melbourne's planning systems are among the most restrictive in the OECD. Should state governments abolish minimum lot sizes and floor-area ratio limits within 3km of the CBD and major employment centres?",
      options: [
        { label: "Yes — Bertaud's analysis is compelling; high-density liberalisation near employment hubs would significantly improve both affordability and productivity", x: -0.5, y: 0.0 },
        { label: "No — blanket deregulation ignores infrastructure constraints and community character; context-specific upzoning is better", x: 0.3, y: 0.1 },
        { label: "Yes, but require concurrent infrastructure investment — density without transit and services creates livability problems", x: -0.3, y: 0.4 },
        { label: "The supply-side emphasis is overstated; demand-side speculation is the primary affordability driver and must be addressed first", x: -0.5, y: 0.4 },
      ]
    },

  ],

  // ============================================================
  // ECONOMIST / POLITICIAN MODE — 35 complex policy scenarios
  // ============================================================
  economist: [

    // --- ECONOMY (5 questions) ---
    {
      topic: "Economy",
      text: "Australia's federal budget is structurally dependent on iron ore royalties and LNG revenues, which are projected to decline as global decarbonisation accelerates. The Henry Tax Review (2010) recommended a Resource Super Profits Tax (RSPT) on above-normal returns, but the Rudd government's watered-down MRRT raised far less than projected. Given this fiscal vulnerability, should Australia implement a genuine RSPT modelled on Norway's petroleum fund model, with revenues quarantined for a sovereign wealth fund?",
      options: [
        { label: "Yes — Norway's model demonstrates that strong resource taxation and long-term sovereign wealth are compatible with a thriving resource sector", x: -0.7, y: 0.6 },
        { label: "No — Australia's sovereign risk reputation suffered severely after the RSPT debacle; any resurrection would deter foreign resource investment", x: 0.7, y: -0.4 },
        { label: "Yes, but design it as a pure rent tax (above risk-free return) to minimise investment distortions", x: -0.4, y: 0.4 },
        { label: "Focus on diversifying the tax base — financial transaction tax, land value tax — rather than doubling down on resource dependency", x: -0.5, y: 0.5 },
      ]
    },
    {
      topic: "Economy",
      text: "Australia's current account position has improved due to commodity price windfalls, but the net foreign liability position remains large. At the same time, household debt-to-income ratios are among the highest in the OECD, primarily driven by mortgage debt. If the RBA is forced to hold rates higher for longer to manage the inflation-employment trade-off, a significant share of mortgagors will face acute financial stress. Should the government establish a sovereign mortgage backstop facility — similar to the UK's mortgage guarantee scheme — to prevent a housing-led financial crisis?",
      options: [
        { label: "Yes — the systemic risk to the banking system and broader economy justifies a backstop, as Australia's banks are highly exposed to residential mortgage debt", x: -0.5, y: 0.7 },
        { label: "No — moral hazard concerns are significant; a backstop encourages excessive borrowing and socialises private risk", x: 0.7, y: -0.5 },
        { label: "Establish a last-resort facility but activate it only if foreclosure rates breach a pre-set threshold", x: 0.0, y: 0.4 },
        { label: "Address the root cause — reduce macroprudential limits on high LVR lending rather than backstopping its consequences", x: 0.3, y: 0.0 },
      ]
    },
    {
      topic: "Economy",
      text: "Australia's Competition and Consumer Commission has consistently found that the major supermarket duopoly (Coles and Woolworths) exercises significant market power over suppliers and maintains elevated profit margins relative to international peers. Inquiry options range from mandatory unit pricing reform and supply chain codes to structural divestiture. What is the appropriate regulatory response to supermarket market power in Australia?",
      options: [
        { label: "Structural divestiture — breaking up Coles and Woolworths is the only durable solution to oligopoly power", x: -0.7, y: 0.7 },
        { label: "Strengthen the Food and Grocery Code of Conduct with binding arbitration and penalties, but avoid structural remedies", x: 0.0, y: 0.5 },
        { label: "Reduce barriers to entry — reform planning laws to allow more supermarket competition rather than regulating existing players", x: 0.5, y: -0.4 },
        { label: "The duopoly provides supply chain efficiency; price regulation is more effective than structural intervention", x: 0.4, y: 0.3 },
      ]
    },
    {
      topic: "Economy",
      text: "Australia's trade exposure to China represents approximately 30% of exports, creating significant geopolitical vulnerability as demonstrated by the 2020 trade coercions (barley, wine, coal). The government's Future Made in Australia program attempts to onshore critical supply chains through subsidies. However, mainstream trade economists warn that industrial policy in Australia's small open economy is likely to be captured by incumbents and generate welfare losses. Should Australia pursue active industrial policy to reduce trade concentration risk?",
      options: [
        { label: "Yes — geopolitical risk and critical minerals strategy justify selective industrial policy despite efficiency costs", x: -0.5, y: 0.7 },
        { label: "No — Australia's comparative advantage lies in resources and services; industrial policy misallocates capital", x: 0.7, y: -0.4 },
        { label: "Yes, but limit it to genuine national security sectors — critical minerals processing, defence supply chains, pharmaceuticals", x: 0.1, y: 0.4 },
        { label: "Pursue trade diversification through bilateral agreements rather than costly domestic production subsidies", x: 0.4, y: -0.1 },
      ]
    },
    {
      topic: "Economy",
      text: "The Productivity Commission has documented a long-term decline in Australia's multifactor productivity growth. Economists debate whether this reflects inadequate competition, underinvestment in R&D relative to GDP (Australia spends 1.7% vs OECD average of 2.7%), insufficient university-industry links, or structural factors. What is the highest-priority reform to lift Australia's productivity trajectory?",
      options: [
        { label: "Substantially increase public R&D investment and reform the R&D tax incentive to focus on breakthrough research", x: -0.5, y: 0.5 },
        { label: "Deregulate product and labour markets — regulatory drag is the primary constraint on business dynamism", x: 0.7, y: -0.6 },
        { label: "Reform competition policy to reduce concentration in banking, supermarkets, and telecommunications", x: -0.3, y: 0.4 },
        { label: "Increase skilled migration in shortage sectors — human capital is the binding constraint", x: 0.2, y: 0.1 },
      ]
    },

    // --- ENVIRONMENT (3 questions) ---
    {
      topic: "Environment",
      text: "Australia's Safeguard Mechanism requires large industrial facilities to reduce their baseline emissions, with a declining trajectory to 2030. However, new LNG projects are being approved with baselines that effectively allow them to increase absolute emissions in the near term. Simultaneously, Australia is committed to 43% emissions reduction by 2030 under its updated NDC. Is the current policy architecture — Safeguard Mechanism plus the Capacity Investment Scheme for renewables — sufficient to meet the 2030 target without further carbon pricing?",
      options: [
        { label: "No — a comprehensive carbon price signal (ETS or carbon tax) is necessary to drive economy-wide decarbonisation at least cost", x: -0.6, y: 0.4 },
        { label: "The Safeguard Mechanism combined with the CIS is adequate; adding a carbon price risks political backlash that reverses progress", x: 0.3, y: 0.3 },
        { label: "The 2030 target itself is insufficient — a 75% reduction by 2035 is necessary to align with 1.5°C pathways", x: -0.8, y: 0.5 },
        { label: "Sector-specific regulation (vehicle standards, building codes, industrial efficiency) is more effective than a broad carbon price", x: -0.2, y: 0.5 },
      ]
    },
    {
      topic: "Environment",
      text: "The proposed Barossa gas field in the Timor Sea was granted approval despite CSIRO modelling suggesting its embodied emissions would be significant. The project faces legal challenges from Tiwi Islander communities invoking cultural harm provisions under environmental law. This case illustrates tensions between First Nations rights, climate commitments, and energy security. How should Australia resolve these competing obligations?",
      options: [
        { label: "Reject the project — First Nations consent and climate obligations are non-negotiable", x: -0.8, y: 0.5 },
        { label: "Approve it with an enhanced emissions offset package and binding First Nations benefit agreements", x: 0.4, y: 0.2 },
        { label: "Establish an independent tribunal with First Nations representation to adjudicate such conflicts", x: -0.3, y: 0.5 },
        { label: "Energy security requires approving Barossa; First Nations concerns should be addressed through compensation", x: 0.6, y: 0.0 },
      ]
    },
    {
      topic: "Environment",
      text: "Australia has committed to net-zero by 2050. Achieving net-zero almost certainly requires either carbon capture and storage (CCS) or land-based sequestration at massive scale. CCS has repeatedly underperformed globally (Gorgon CCS captured 30% of projected CO₂). Simultaneously, the CSIRO's GenCost analysis consistently finds new-build solar and wind are cheaper than any new thermal generation, including gas. Should public investment be concentrated in renewable infrastructure and storage, or should Australia hedge with CCS investment as an insurance policy?",
      options: [
        { label: "Concentrate on renewables — CCS has a poor track record, costs are falling rapidly, and the technology risk is lower", x: -0.6, y: 0.4 },
        { label: "Hedge with CCS — path dependence in industrial emissions (steel, cement, aluminium) makes CCS necessary even in an electrified economy", x: 0.3, y: 0.2 },
        { label: "Fund both, but maintain strict performance benchmarks — no blank cheques for underperforming CCS projects", x: 0.0, y: 0.4 },
        { label: "Public investment should focus on the transmission grid — generation investment should be left to the market", x: 0.4, y: -0.3 },
      ]
    },

    // --- SOCIAL (3 questions) ---
    {
      topic: "Social",
      text: "The Productivity Commission's review of the NDIS (2023) found significant administrative failure, cost overruns driven partly by plan inflation and unregistered provider exploitation, and inadequate support for participants with complex needs. The scheme's foundational principles — individual choice, control, and market provision — are in tension with fiscal sustainability and quality assurance. Should Australia reform the NDIS back toward a managed care model with block-funding for providers, or can the individualised funding model be salvaged through better regulation?",
      options: [
        { label: "Reform, not retreat — strengthen the agency's regulatory capacity and fraud detection; the individualised model is worth saving", x: -0.5, y: 0.6 },
        { label: "The market model has structurally failed disabled people; transition back to a managed care approach with provider quality standards", x: -0.3, y: 0.7 },
        { label: "Retain individual funding for high-complexity participants but use block grants for mainstream disability support services", x: 0.1, y: 0.5 },
        { label: "The scheme needs a hard spending cap; growth above a fixed percentage of GDP should trigger automatic eligibility tightening", x: 0.6, y: 0.4 },
      ]
    },
    {
      topic: "Social",
      text: "Australia's rate of women's homicide by intimate partners remains persistently high despite two National Plans to Reduce Violence Against Women. The Royal Commission into Family Violence (Victoria) made 227 recommendations. Evidence from Norway and Sweden suggests mandatory perpetrator intervention programs and early identification in schools are more effective than crisis response. Should Australia redirect family violence funding from crisis response toward mandatory perpetrator programs and primary prevention?",
      options: [
        { label: "Yes — primary prevention is the only sustainable solution; evidence shows perpetrator programs reduce recidivism significantly", x: -0.6, y: 0.5 },
        { label: "Crisis services must remain adequately funded — women fleeing violence cannot wait for long-term prevention to work", x: -0.5, y: 0.7 },
        { label: "Substantially increase total funding so prevention can be expanded without reducing crisis capacity", x: -0.4, y: 0.7 },
        { label: "Mandatory programs raise civil liberties concerns; voluntary perpetrator programs combined with swift legal consequences are better", x: 0.2, y: 0.2 },
      ]
    },
    {
      topic: "Social",
      text: "Australia's social security system retains welfare conditionality — including compulsory mutual obligations for JobSeeker recipients — despite evidence that conditional welfare does not substantially improve employment outcomes and imposes significant compliance costs. New Zealand has moved toward a Te Tiriti-based, wellbeing-focused social security model that reduces conditionality. Should Australia reform JobSeeker to remove mutual obligations and raise the payment to a liveable rate?",
      options: [
        { label: "Yes — conditionality is punitive and counterproductive; a liveable unconditional payment respects human dignity", x: -0.8, y: 0.5 },
        { label: "No — mutual obligations maintain work norms and link public support to social participation", x: 0.7, y: 0.4 },
        { label: "Raise the rate substantially but retain light-touch conditionality — volunteering, training, or job search with flexibility", x: -0.3, y: 0.5 },
        { label: "Replace JobSeeker with a Job Guarantee — publicly funded employment of last resort at award wages", x: -0.6, y: 0.7 },
      ]
    },

    // --- EDUCATION (2 questions) ---
    {
      topic: "Education",
      text: "Australia's vocational education system (TAFE) has been severely weakened by two decades of privatisation, contestable funding models, and VET-FEE HELP scandals. Manufacturing and construction industries report critical skills shortages despite high youth unemployment in some regions. The 2023 TAFE fee-free reform is a partial reversal. Should Australia establish a National TAFE Commission with guaranteed baseline funding independent of contestable market mechanisms?",
      options: [
        { label: "Yes — TAFE is public infrastructure and must be funded as such, not subjected to market competition for courses it always provided", x: -0.7, y: 0.7 },
        { label: "No — quality private providers have emerged under contestable funding and ending competition would reduce responsiveness", x: 0.5, y: -0.3 },
        { label: "Guarantee TAFE's role in trade and community courses while maintaining competition in upper-level qualifications", x: -0.2, y: 0.4 },
        { label: "The skills shortage is better addressed through immigration reform than rebuilding a public provider", x: 0.4, y: -0.1 },
      ]
    },
    {
      topic: "Education",
      text: "PISA data (2022) show Australian Year 4 students rank among the lowest in the OECD on reading scores, with a significant long-tail of underperforming students from low-SES backgrounds. The evidence base for structured literacy (systematic phonics instruction) is extremely strong. Yet many state curricula still include balanced literacy approaches. Should the federal government condition school funding on adoption of evidence-based structured literacy programs in all primary schools?",
      options: [
        { label: "Yes — the reading evidence is settled; withholding funding for states that ignore it is appropriate", x: 0.1, y: 0.7 },
        { label: "No — curriculum is a state responsibility; federal funding conditions are constitutionally inappropriate", x: 0.6, y: -0.3 },
        { label: "Yes — fund transition support, professional development, and then condition on implementation", x: -0.1, y: 0.6 },
        { label: "Incentivise adoption through competitive grants rather than conditions on base funding", x: 0.3, y: 0.2 },
      ]
    },

    // --- TECHNOLOGY (3 questions) ---
    {
      topic: "Technology",
      text: "The AUKUS partnership commits Australia to acquiring nuclear-powered submarines (SSNs) at an estimated cost of $368 billion over several decades. The strategic rationale is deterrence of Chinese naval expansion, but critics argue it entrenches strategic dependency on the US, creates interoperability constraints, and diverts defence spending from near-term capabilities. ASEAN neighbours have expressed concern about the nuclear precedent. Is AUKUS a prudent long-term strategic investment for Australia?",
      options: [
        { label: "Yes — SSNs provide genuine long-range deterrence capability and deepen the alliance relationship with the US and UK", x: 0.6, y: 0.5 },
        { label: "No — the cost is extraordinary, delivery is uncertain, and it inflames regional tensions Australia cannot afford", x: -0.5, y: -0.3 },
        { label: "Proceed with AUKUS but negotiate conditions for greater Australian sovereign control and domestic industrial build", x: 0.2, y: 0.3 },
        { label: "Divert AUKUS spending to cyber, space, and autonomous systems — the domains where future conflict will be determined", x: -0.1, y: 0.1 },
      ]
    },
    {
      topic: "Technology",
      text: "The Artificial Intelligence Act (EU) introduces a risk-tiered regulatory framework requiring conformity assessments for high-risk AI systems in employment, credit, healthcare, and law enforcement. Australia has no equivalent legislation. Australia's government has committed to voluntary guardrails. Given the pace of AI deployment in healthcare (diagnostic AI), welfare (automated decision making in Centrelink), and law enforcement, should Australia adopt mandatory AI governance legislation modelled on the EU AI Act?",
      options: [
        { label: "Yes — voluntary guardrails have consistently failed in self-regulatory regimes; binding law with enforcement is essential", x: -0.6, y: 0.6 },
        { label: "No — prescriptive regulation will impede AI adoption in areas where Australia has genuine competitive opportunity", x: 0.6, y: -0.5 },
        { label: "Adopt binding rules only for high-risk government AI applications; allow voluntary standards for commercial AI", x: 0.0, y: 0.4 },
        { label: "Wait for international frameworks to converge before legislating to avoid regulatory fragmentation", x: 0.3, y: 0.0 },
      ]
    },
    {
      topic: "Technology",
      text: "Australia is one of the world's largest suppliers of critical minerals — lithium, cobalt, rare earths — essential for the global clean energy transition. Currently, Australia exports most of these as raw ore. The government's critical minerals strategy proposes value-added processing subsidies to move up the value chain. However, China controls roughly 80% of the rare earth processing capacity globally. Is Australia's critical minerals strategy adequately resourced and designed to achieve strategic processing sovereignty?",
      options: [
        { label: "Yes — the strategy is on the right track; increase funding and add binding offtake agreements with allied buyers", x: -0.3, y: 0.5 },
        { label: "No — Australia's comparative advantage is mining, not processing; processing subsidies will fail against China's scale advantages", x: 0.6, y: -0.3 },
        { label: "Establish a joint processing venture with the US, UK, Japan, and Korea to pool capital and guarantee demand", x: 0.1, y: 0.4 },
        { label: "Nationalise at least one processing facility as a strategic anchor — market forces alone are insufficient for sovereign capability", x: -0.6, y: 0.7 },
      ]
    },

    // --- DIGITAL RIGHTS (2 questions) ---
    {
      topic: "Digital Rights",
      text: "Australia's Online Safety Act 2021 gives the eSafety Commissioner broad powers to require removal of harmful content, including an 'industry codes' framework. However, academics and civil liberties groups argue the Act's definition of 'harmful' is dangerously broad and gives a single regulator excessive power over online speech without adequate judicial oversight. Should the Online Safety Act be reformed to require judicial authorisation for content removal orders?",
      options: [
        { label: "Yes — removing online content has the same speech implications as pre-publication censorship and requires judicial oversight", x: -0.6, y: -0.5 },
        { label: "No — harmful content causes real harm, especially to children; regulators need swift action powers without court delays", x: 0.5, y: 0.7 },
        { label: "Require judicial oversight for removal orders affecting speech, but retain administrative powers for child sexual abuse material", x: -0.2, y: 0.3 },
        { label: "The Act is appropriate but needs clearer definitions of harm to reduce regulatory overreach", x: 0.2, y: 0.4 },
      ]
    },
    {
      topic: "Digital Rights",
      text: "The Five Eyes intelligence alliance (Australia, US, UK, Canada, New Zealand) regularly shares signals intelligence under the UKUSA Agreement. The 2019 Home Affairs minister's call for Five Eyes nations to mandate encryption backdoors was declined by Canada and New Zealand on civil liberties grounds. Australia's Assistance and Access Act already allows technical assistance orders. Should Australia unilaterally revoke the Assistance and Access Act's most controversial provisions to protect Australian software exports and civil liberties, even at the cost of intelligence community capability?",
      options: [
        { label: "Yes — the Act damages Australia's tech export reputation and the security benefits are marginal relative to the civil liberties cost", x: -0.7, y: -0.4 },
        { label: "No — the capability gaps from revoking the Act would significantly impair counter-terrorism and serious crime investigation", x: 0.6, y: 0.7 },
        { label: "Revoke the most controversial provisions but retain narrower powers with mandatory parliamentary oversight committee review", x: -0.3, y: 0.1 },
        { label: "Work through Five Eyes to develop a multilateral framework — unilateral action weakens the alliance's effectiveness", x: 0.2, y: 0.3 },
      ]
    },

    // --- HEALTHCARE (3 questions) ---
    {
      topic: "Healthcare",
      text: "Australia's pharmaceutical benefits scheme (PBS) negotiates drug prices through a cost-effectiveness framework based on QALYs (quality-adjusted life years). Recent gene therapies and personalised oncology treatments carry list prices of $1–3 million per patient. The PBS's QALY threshold effectively rules out many of these treatments. Should Australia adopt managed access programs that allow conditional reimbursement of high-cost therapies pending real-world evidence collection?",
      options: [
        { label: "Yes — managed access programs enable equitable access to transformative therapies while managing fiscal risk", x: -0.5, y: 0.5 },
        { label: "No — conditional reimbursement creates perverse incentives for pharmaceutical companies to overprice, expecting eventual full listing", x: 0.3, y: 0.2 },
        { label: "Yes, and establish a separate advanced therapy budget ring-fenced from the standard PBS to avoid crowding out", x: -0.3, y: 0.6 },
        { label: "Strengthen the PBS's international reference pricing to reduce entry prices rather than creating managed access workarounds", x: -0.1, y: 0.5 },
      ]
    },
    {
      topic: "Healthcare",
      text: "The Aged Care Royal Commission found systemic failure across the aged care sector — inadequate staffing, poor nutrition, abuse, and the fundamental problem of a for-profit model in conflict with the duty of care. The government has introduced a Aged Care Act and mandatory care minutes. However, structural funding remains fee-for-service with thin margins. Evidence from Nordic countries shows that municipally owned aged care with high staffing ratios produces substantially better outcomes. Should Australia transition to a primarily government-owned aged care sector over 10 years?",
      options: [
        { label: "Yes — the profit motive is fundamentally incompatible with quality care; staged nationalisation is the right response", x: -0.8, y: 0.8 },
        { label: "No — government-owned services are not inherently better quality; the problem is under-funding and poor regulation, not ownership", x: 0.5, y: 0.2 },
        { label: "Establish strong government and not-for-profit providers as a 'public option' that competes with and disciplines for-profit providers", x: -0.4, y: 0.6 },
        { label: "Fix the funding model — move to resident-weighted casemix funding with strict quality benchmarks before considering ownership changes", x: 0.2, y: 0.4 },
      ]
    },
    {
      topic: "Healthcare",
      text: "Alcohol causes approximately 5,500 deaths and $36 billion in social costs annually in Australia, yet its industry receives light regulatory treatment relative to the harm evidence. Evidence from Scotland's minimum unit pricing law shows a significant reduction in alcohol-related mortality. Australia's Henry Tax Review recommended volumetric alcohol taxation. Should Australia implement minimum unit pricing for alcohol and reform excise to volumetric rates, over the strong objection of the hospitality and wine industries?",
      options: [
        { label: "Yes — the evidence base from Scotland and Nordic countries is compelling; industry objection is not a reason to delay", x: -0.6, y: 0.6 },
        { label: "No — pricing interventions are regressive, disproportionately affecting low-income drinkers rather than addressing alcohol misuse", x: 0.5, y: -0.3 },
        { label: "Yes, implement both reforms but use the increased excise revenue for alcohol treatment services", x: -0.5, y: 0.6 },
        { label: "Minimum unit pricing yes, but wine excise reform should be phased over 10 years to protect regional wine communities", x: -0.2, y: 0.4 },
      ]
    },

    // --- JUSTICE (3 questions) ---
    {
      topic: "Justice",
      text: "Australia's federal Counter-Terrorism Act has been expanded multiple times since 2001. The statute permits control orders on individuals who have not been charged or convicted of any offence, preventive detention for up to 14 days, and citizenship stripping for dual nationals. The Australian Human Rights Commission has consistently found these measures incompatible with international human rights law. Should Australia repeal preventive detention and control order regimes and rely on conventional criminal investigation and prosecution?",
      options: [
        { label: "Yes — pre-crime detention is incompatible with the rule of law and evidence shows these measures are disproportionate to the actual risk", x: -0.7, y: -0.5 },
        { label: "No — terrorism poses a genuine national security threat requiring exceptional powers that conventional criminal law cannot adequately address", x: 0.7, y: 0.7 },
        { label: "Retain the powers but require judicial authorisation at every 24-hour interval and an independent monitor", x: -0.1, y: 0.4 },
        { label: "Repeal control orders and preventive detention but invest substantially more in ASIO surveillance and community liaison", x: -0.3, y: 0.1 },
      ]
    },
    {
      topic: "Justice",
      text: "The Uluru Statement from the Heart calls for three elements: Voice, Makarrata (Treaty), and Truth. The 2023 Voice referendum failed decisively (60.6% No). Post-referendum analysis shows the failure reflected both principled opposition and procedural concerns about implementation detail. Should the government proceed with Treaty and Truth-telling as standalone processes, or does the referendum result represent a broader rejection of the Uluru Statement's agenda?",
      options: [
        { label: "Proceed with Treaty and Truth-telling — the referendum was about the Voice mechanism, not the full Statement", x: -0.7, y: 0.3 },
        { label: "The referendum result reflects a clear verdict against constitutional reform; all Uluru Statement elements should be shelved", x: 0.8, y: 0.2 },
        { label: "Pursue Treaty processes at state level where political conditions are more favourable", x: -0.4, y: 0.2 },
        { label: "Commission an independent process with First Nations co-design before any further federal action", x: -0.3, y: 0.3 },
      ]
    },
    {
      topic: "Justice",
      text: "Australia's prison population has grown by approximately 40% over a decade despite falling crime rates. The per-prisoner cost exceeds $110,000 annually. Recidivism rates within two years of release sit at approximately 45%. The evidence for drug courts, mental health courts, and community corrections as cost-effective alternatives is strong. Should Australia set an explicit target for reducing the prison population by 30% over 10 years, accompanied by expanded alternative sentencing and community services?",
      options: [
        { label: "Yes — the evidence clearly supports expanded diversion, and the fiscal and human cost of mass incarceration is unjustifiable", x: -0.7, y: -0.3 },
        { label: "No — prison population reflects public safety needs; arbitrary targets could compromise community protection", x: 0.7, y: 0.5 },
        { label: "Set a diversion target rather than a reduction target — expand community sentencing without necessarily reducing imprisonment for violent offences", x: -0.2, y: 0.1 },
        { label: "Invest in pre-entry diversion (drug treatment, mental health) and post-exit reintegration without setting a prison population target", x: -0.4, y: 0.2 },
      ]
    },

    // --- IMMIGRATION (2 questions) ---
    {
      topic: "Immigration",
      text: "Australia's international student sector has grown to become a $48 billion export industry, but investigations have revealed widespread exploitation of international students in the gig economy, systematic wage theft in hospitality and aged care, and visa gaming through low-quality private colleges. The government has introduced caps on international student numbers at some universities. Is restricting international student numbers the right policy response, or does it impose costs on Australian universities and students from the Global South disproportionately to the benefits?",
      options: [
        { label: "Caps are a blunt instrument; fix the underlying exploitation — stronger enforcement of labour laws and education quality standards", x: -0.5, y: 0.5 },
        { label: "Yes, caps are necessary — the sector has grown too fast and the labour market distortions are real", x: 0.5, y: 0.3 },
        { label: "Reform the work rights attached to student visas; the problem is exploitation, not enrolment numbers", x: -0.4, y: 0.4 },
        { label: "Shut down private college migration pathways entirely while maintaining university student numbers", x: 0.2, y: 0.5 },
      ]
    },
    {
      topic: "Immigration",
      text: "Australia operates one of the world's most sophisticated points-tested immigration systems with employer-sponsored, independent skilled, and family streams. Treasury modelling consistently shows skilled migration has positive net fiscal and wage effects at the aggregate level. However, distributional analysis shows wage compression is concentrated among recent migrants competing in the same occupational niches. Should Australia expand its refugee and humanitarian intake to 40,000 per year — double the current level — and fund this by reducing the skilled migration programme?",
      options: [
        { label: "Yes — Australia's humanitarian obligations are under-met; the case for doubling humanitarian intake at the expense of skilled migration is strong", x: -0.7, y: 0.3 },
        { label: "No — skilled migration generates the fiscal surplus that funds public services including humanitarian settlement costs", x: 0.6, y: -0.1 },
        { label: "Increase humanitarian intake to 40,000 but fund it through a moderate increase in the overall program, not at the expense of skilled migration", x: -0.4, y: 0.4 },
        { label: "Expand the Pacific labour pathway and refugee intake but restrict lower-skilled temporary visas to address the wage compression evidence", x: -0.1, y: 0.3 },
      ]
    },

    // --- CULTURE (2 questions) ---
    {
      topic: "Culture",
      text: "Australia's media landscape is dominated by News Corp Australia (owns approximately 60% of metropolitan newspaper circulation) and Nine Entertainment. The ACCC has documented significant market concentration in news media and its effects on public deliberation. The News Media Bargaining Code compelled platforms to pay publishers. Should Australia go further and introduce media ownership limits to prevent any single entity controlling more than 30% of news media market share?",
      options: [
        { label: "Yes — media concentration at current levels is incompatible with the democratic function of a free press", x: -0.7, y: 0.5 },
        { label: "No — digital disruption has already fundamentally altered the media landscape; traditional ownership rules are obsolete", x: 0.5, y: -0.4 },
        { label: "Yes, combined with substantial increased funding for public broadcasting as a structural counterweight", x: -0.6, y: 0.6 },
        { label: "Require algorithmic transparency from news aggregators (Google, Facebook) — that's where the real concentration of attention lies", x: -0.2, y: 0.3 },
      ]
    },
    {
      topic: "Culture",
      text: "The Closing the Gap framework has produced 17 years of government commitments with limited improvement across key indicators including life expectancy, child mortality, early childhood development, and school completion. Critics argue the framework has failed because it is designed by governments rather than First Nations peoples, and because structural racism in housing, health, and justice systems is not adequately addressed. Should the Closing the Gap framework be replaced with a treaty-based self-determination model where First Nations communities control the design and delivery of services?",
      options: [
        { label: "Yes — Aboriginal and Torres Strait Islander self-determination is both a right and the most effective service delivery model, as demonstrated in several community-controlled health organisations", x: -0.8, y: 0.3 },
        { label: "No — government retains accountability to taxpayers and must maintain oversight of funded services", x: 0.6, y: 0.5 },
        { label: "Transition to community-controlled services progressively where communities have the capacity and governance structures to take on delivery", x: -0.4, y: 0.4 },
        { label: "Reform Closing the Gap with binding targets and consequences for government, rather than replacing the framework", x: -0.2, y: 0.5 },
      ]
    },

    // --- WORK (2 questions) ---
    {
      topic: "Work",
      text: "Australia's workplace relations system has moved progressively toward enterprise bargaining since the Keating government's Accord transition. However, wage growth has been persistently below productivity growth, raising questions about bargaining power asymmetry. The Fair Work Act's Better Off Overall Test (BOOT) has been criticised by employers as an obstacle to productive enterprise agreements. Should the BOOT be restored to its pre-Omnibus Bill form, or should the balance between flexibility and protection be shifted toward employers?",
      options: [
        { label: "Restore the full BOOT — weakening it shifts power to employers and allows undermining of award conditions through complex agreements", x: -0.7, y: 0.6 },
        { label: "Reform the BOOT to allow genuine flexibility in exchange for non-wage benefits — its current form is too rigid", x: 0.6, y: -0.4 },
        { label: "The real problem is inadequate award coverage and low unionisation; BOOT reform is a second-order issue", x: -0.5, y: 0.5 },
        { label: "Supplement the BOOT with industry-level minimum standards so that enterprise agreements can't deviate below a clear floor", x: -0.3, y: 0.4 },
      ]
    },
    {
      topic: "Work",
      text: "Superannuation's Superannuation Guarantee (SG) is scheduled to reach 12% in 2025. Research from the Grattan Institute argues that higher SG primarily reduces take-home wages rather than adding to total compensation, and that the elderly poor (who rely on the aged pension) would be better served by stronger pension adequacy than super tax concessions. The industry funds argue that compound growth over a working life justifies the SG, particularly for women and low-income workers. Should Australia freeze the SG at 11% and redirect the fiscal cost of further SG increases to a higher aged pension?",
      options: [
        { label: "Yes — the pension is more effective at reducing poverty among the elderly; super disproportionately benefits high-income earners", x: -0.4, y: 0.5 },
        { label: "No — compulsory super creates broad-based wealth and reduces long-term fiscal pressure; reaching 12% is essential", x: -0.5, y: 0.4 },
        { label: "Freeze SG at 11% and substantially increase the pension — the Grattan analysis is persuasive", x: 0.1, y: 0.3 },
        { label: "Continue to 12% but reform super tax concessions to redirect the fiscal benefit toward lower-income workers' accounts", x: -0.4, y: 0.5 },
      ]
    },

    // --- HOUSING (2 questions) ---
    {
      topic: "Housing",
      text: "Australia's housing affordability crisis is driven by a combination of undersupply, speculative demand, and planning restrictions. The Albanese government's Housing Australia Future Fund aims to deliver 30,000 social and affordable homes over 5 years — far below the estimated 640,000 shortfall in social housing. The Grattan Institute estimates Australia needs to build 1.2 million homes over the decade to restore affordability. Treasury modelling suggests stamp duty replacement with broad-based land value tax would unlock 100,000 additional homes. What policy combination offers the greatest impact on housing affordability?",
      options: [
        { label: "Replace stamp duty with land value tax nationally, accelerate HAFF, and override restrictive zoning near transit — the full Grattan reform package", x: -0.5, y: 0.6 },
        { label: "The most direct lever is public housing construction at scale; private market reform is too slow and politically constrained", x: -0.6, y: 0.8 },
        { label: "Abolish negative gearing and halve the CGT discount — demand-side speculation is the primary driver of unaffordability", x: -0.6, y: 0.5 },
        { label: "Comprehensive planning reform to allow density is the most cost-effective lever — public housing is too expensive per dwelling", x: -0.1, y: 0.2 },
      ]
    },
    {
      topic: "Housing",
      text: "Build-to-rent (BTR) is expanding in Australia as institutional investors (superannuation funds, REITs) develop large-scale rental properties. BTR investors have lobbied for preferential managed investment trust tax treatment to compete with individual landlords' negative gearing advantages. BTR can potentially provide longer leases and more professional management. However, critics argue it institutionalises rental housing, creating concentrated landlord power and reducing pathways to home ownership. Should Australia provide substantial tax concessions to BTR to scale it rapidly?",
      options: [
        { label: "Yes — BTR can deliver well-managed, long-tenure rental housing at scale and institutional ownership is more accountable than individual landlords", x: -0.2, y: 0.4 },
        { label: "No — BTR concessions socialise the benefits of institutional landlordism while making home ownership even less attainable", x: -0.3, y: -0.1 },
        { label: "Support BTR only for affordable and social housing components, not market-rate rentals", x: -0.4, y: 0.5 },
        { label: "Remove tax advantages for all rental housing investment equally — individual negative gearing and BTR concessions both distort the housing market", x: -0.6, y: 0.3 },
      ]
    },

    // --- additional economist/politician questions ---
    {
      topic: "Education",
      text: "Australia's higher education system has seen a 40% decline in funding per student in real terms over two decades, offset by international student revenue. The Universities Accord (2023) proposes increasing the proportion of Australians with a tertiary qualification to 80% by 2050, which would require an additional 1.8 million university places. This ambition sits in tension with the Grattan Institute's finding that around 30% of current graduates are in jobs that don't use their degree. Should Australia expand university places toward the Accord target, or redirect investment toward quality vocational pathways?",
      options: [
        { label: "Expand universities — the economic and social returns to higher education justify the investment at the aggregate level", x: -0.5, y: 0.5 },
        { label: "Redirect investment to vocational pathways — Australia has a TAFE deficit, not a university deficit", x: 0.3, y: 0.3 },
        { label: "Expand both simultaneously — the skills shortage is broad and neither sector alone can meet 2050 workforce needs", x: -0.2, y: 0.5 },
        { label: "Control university growth and redirect to technical tertiary qualifications modelled on the German dual system", x: 0.4, y: 0.2 },
      ]
    },
    {
      topic: "Work",
      text: "The Reserve Bank of Australia's Statement on Monetary Policy uses a labour market Phillips Curve framework — the assumption that lower unemployment causes higher inflation — to justify keeping rates elevated until unemployment rises above the estimated NAIRU (non-accelerating inflation rate of unemployment) of approximately 4.5%. Critics including Stiglitz argue the NAIRU is theoretical fiction, empirically unstable, and that the RBA's framework systematically sacrifices workers' jobs to control inflation. Should the RBA's mandate be legislatively amended to give equal statutory weight to maximum employment, modelled on the US Federal Reserve's dual mandate?",
      options: [
        { label: "Yes — the current mandate structurally biases policy toward inflation over employment and the cost falls on working people", x: -0.7, y: 0.4 },
        { label: "No — the Fed's dual mandate created the conditions for the 2021–23 inflation surge; Australia should not replicate it", x: 0.5, y: 0.2 },
        { label: "Yes, with a twist — adopt full employment as a coequal objective but retain the RBA's operational independence to balance the two targets", x: -0.3, y: 0.2 },
        { label: "Reform the RBA's internal modelling and transparency rather than legislating targets that may conflict under inflationary conditions", x: 0.2, y: 0.3 },
      ]
    },
    {
      topic: "Housing",
      text: "The Minns government in NSW and the Allan government in Victoria have both invoked emergency powers to rezone land near train stations for medium and high density, overriding local council objections. This represents a significant centralisation of planning power at the state level and a departure from the Coombs Commission model of strong local government. The academic planning literature is divided: some economists (Ed Glaeser) argue that local veto power is the principal cause of housing undersupply, while urban planners argue that state-imposed density without coordinated infrastructure investment creates neighbourhood dysfunction. What is the appropriate division of planning authority between state and local government for housing supply?",
      options: [
        { label: "State government should hold binding authority over zoning decisions near transit — local veto is the housing crisis's root cause", x: -0.3, y: 0.5 },
        { label: "Local councils should retain planning authority — housing crisis solutions require community buy-in that top-down rezoning destroys", x: 0.5, y: -0.3 },
        { label: "State government sets non-negotiable density minimums; councils design neighbourhood-specific plans within those minimums", x: -0.1, y: 0.4 },
        { label: "Create regional planning authorities — neither state nor local government has the right geographic scale to optimise housing and infrastructure decisions", x: -0.2, y: 0.3 },
      ]
    },

  ],

};
