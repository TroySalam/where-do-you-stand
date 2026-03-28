/* ===== CLARIFICATION ENGINE =====
   Generates simpler explanations for questions and options.
   Each question and option gets a plain-English tooltip.
   We store these as a lookup keyed by the first 60 chars of the text.
*/

const CLARIFICATIONS = {};

// Build lookup from all question banks once DOM is ready
function buildClarifications() {
  for (const [mode, bank] of Object.entries(QUESTION_BANKS)) {
    bank.forEach(q => {
      const qKey = q.text.slice(0, 80);
      if (!CLARIFICATIONS[qKey]) {
        CLARIFICATIONS[qKey] = {
          question: generateQuestionClarification(q, mode),
          options: q.options.map(o => generateOptionClarification(o, q, mode))
        };
      }
    });
  }
}

function generateQuestionClarification(q, mode) {
  // For teen mode, questions are already simple — still provide context
  const topic = q.topic.toLowerCase();
  const text = q.text;
  
  // Economy
  if (topic === "economy") {
    if (text.includes("minimum wage") || text.includes("pay workers more") || text.includes("pays minimum"))
      return "This is about whether the government should set a minimum amount that employers must pay their workers, or whether businesses should decide wages on their own.";
    if (text.includes("tax") && (text.includes("rich") || text.includes("billionaire") || text.includes("wealthy") || text.includes("top")))
      return "This is about whether people who earn a lot of money should pay a larger share of their income to the government through taxes.";
    if (text.includes("tax") && (text.includes("multinational") || text.includes("tech giant") || text.includes("companies") || text.includes("corporate")))
      return "This is about big companies that find ways to avoid paying tax in Australia even though they make money here. Should the government stop them?";
    if (text.includes("budget deficit") || text.includes("government spending") || text.includes("stimulus"))
      return "This is about government money — when the government spends more than it collects in taxes, it goes into debt. Should it spend more or less?";
    if (text.includes("interest rate") || text.includes("Reserve Bank") || text.includes("RBA") || text.includes("monetary"))
      return "The Reserve Bank controls interest rates to manage the economy. Higher rates make borrowing more expensive. This asks whether the government should help people affected.";
    if (text.includes("inequality") || text.includes("wealth") || text.includes("redistribution") || text.includes("Rawls"))
      return "This is about the gap between rich and poor. Should the government take money from the wealthy and give it to people who have less?";
    if (text.includes("free trade") || text.includes("imports") || text.includes("tariff"))
      return "This is about buying and selling goods between countries. Free trade means fewer barriers, which can lower prices but might hurt local businesses.";
    if (text.includes("rent") && text.includes("struggling"))
      return "This is about whether the government should help people who can't afford to pay for a place to live.";
    if (text.includes("cafeteria") || text.includes("junk food"))
      return "This is about whether schools should use price to push students toward healthier food choices, or let them decide for themselves.";
    if (text.includes("rich kids") || text.includes("same schools"))
      return "This is about whether children from wealthy and poor families should be mixed together in the same schools, or if parents should be able to pay for different schools.";
    if (text.includes("Laffer Curve") || text.includes("marginal") || text.includes("Henry Tax"))
      return "The Laffer Curve is an economics theory that says if taxes get too high, people find ways to avoid paying them, so the government actually collects less money. This question asks what Australia's top tax rate should be.";
    if (text.includes("NAIRU") || text.includes("Phillips Curve"))
      return "NAIRU is the unemployment rate where inflation stays stable. If unemployment drops below this level, prices tend to rise. This asks how the Reserve Bank should balance jobs and inflation.";
    if (text.includes("fiscal") || text.includes("debt") && text.includes("GDP"))
      return "This is about government debt and spending. Should the government borrow more to invest in things like infrastructure, or focus on reducing what it owes?";
    if (text.includes("superannuation") || text.includes("super"))
      return "Superannuation is Australia's retirement savings system where employers put money aside for workers. This asks whether the system needs changes.";
    if (text.includes("negative gearing") || text.includes("capital gains"))
      return "Negative gearing is a tax break that lets property investors deduct their losses from their income tax. Critics say it makes housing more expensive.";
    return "This question is about how the economy should work — who pays, who benefits, and how much the government should be involved.";
  }
  
  // Environment
  if (topic === "environment") {
    if (text.includes("carbon") || text.includes("emission"))
      return "Carbon emissions come from burning fossil fuels and contribute to climate change. A carbon price makes companies pay for polluting. This asks if that's a good idea.";
    if (text.includes("coal") || text.includes("fossil fuel") || text.includes("clean energy"))
      return "Australia makes a lot of money from coal and gas, but these cause climate change. This asks how fast we should switch to renewable energy like solar and wind.";
    if (text.includes("plastic") || text.includes("bottle"))
      return "This is about banning single-use plastics to help the environment, even if it's less convenient.";
    if (text.includes("petrol") || text.includes("electric"))
      return "This is about whether the government should ban petrol cars to fight climate change, or let people choose.";
    if (text.includes("polluting") && text.includes("river"))
      return "A factory is polluting the environment but provides jobs. What's more important — protecting nature or protecting jobs?";
    if (text.includes("biodivers") || text.includes("land clearing") || text.includes("habitat"))
      return "This is about whether landowners should be allowed to clear native bush on their property, or whether the government should protect natural habitats.";
    if (text.includes("net-zero") || text.includes("2035") || text.includes("2050"))
      return "Net-zero means not adding any extra greenhouse gases to the atmosphere. This asks whether Australia should reach this goal sooner than planned.";
    return "This question is about the environment — balancing economic needs with protecting the planet.";
  }
  
  // Social
  if (topic === "social") {
    if (text.includes("marriage") || text.includes("gay"))
      return "This is about whether same-sex couples should have the same legal right to marry as straight couples.";
    if (text.includes("Indigenous") || text.includes("Aboriginal") || text.includes("First Nations") || text.includes("treaty") || text.includes("sovereignty"))
      return "This is about the rights and recognition of Aboriginal and Torres Strait Islander peoples — Australia's First Nations people who lived here for over 60,000 years before European arrival.";
    if (text.includes("transgender") || text.includes("trans"))
      return "This is about transgender rights — specifically whether people who identify as a different gender than they were assigned at birth should be treated according to their identity.";
    if (text.includes("drug") || text.includes("cannabis") || text.includes("decriminal"))
      return "This is about whether using drugs should be treated as a crime or as a health issue. Some countries have had success treating it as a health issue instead.";
    if (text.includes("religious") || text.includes("LGBTQ") || text.includes("discrimination"))
      return "This is about balancing religious freedom with anti-discrimination protections — should religious organisations be allowed to treat people differently based on who they are?";
    if (text.includes("JobSeeker") || text.includes("unemployment") || text.includes("welfare"))
      return "JobSeeker is the government payment for people who are unemployed. This asks whether it's enough to live on.";
    if (text.includes("aged care"))
      return "This is about how Australia looks after elderly people in nursing homes and care facilities.";
    if (text.includes("systemic") || text.includes("race") || text.includes("colour-blind"))
      return "This asks whether racism is built into Australia's systems and laws, and whether the government should create specific policies to fix it for certain groups.";
    return "This question is about social issues — how people are treated in society based on who they are.";
  }
  
  // Education
  if (topic === "education") {
    if (text.includes("university") || text.includes("uni") || text.includes("HECS") || text.includes("degree"))
      return "This is about whether university should be free (paid for by taxes) or whether students should pay for their education through systems like HECS-HELP loans.";
    if (text.includes("private school") || text.includes("public school") || text.includes("Gonski"))
      return "This is about how government money is split between public schools (run by the government) and private schools (run independently). Should more go to public schools?";
    if (text.includes("uniform"))
      return "This is about school uniforms — whether they help create equality or limit students' self-expression.";
    if (text.includes("sex ed") || text.includes("sexual health") || text.includes("opt-out"))
      return "This is about whether schools should teach sex education even if some parents disagree, or whether parents should be able to pull their kids out of those classes.";
    if (text.includes("curriculum") || text.includes("literacy") || text.includes("STEM"))
      return "This is about what schools should teach — more focus on traditional subjects like maths and science, or more on social and cultural topics?";
    return "This question is about education — how schools should be run and what students should learn.";
  }
  
  // Technology
  if (topic === "technology") {
    if (text.includes("social media") && (text.includes("ban") || text.includes("under-16") || text.includes("under 16")))
      return "Australia banned social media for under-16s. This asks whether that was the right decision or if it goes too far.";
    if (text.includes("AI") && (text.includes("essay") || text.includes("cheat") || text.includes("hiring")))
      return "This is about artificial intelligence being used in schools or workplaces — and whether rules are needed to control it.";
    if (text.includes("internet") && text.includes("protest"))
      return "This asks whether the government should be able to shut down the internet during big protests to prevent violence.";
    if (text.includes("algorithm") || text.includes("engagement") || text.includes("addictive"))
      return "Social media algorithms are designed to keep you scrolling by showing you content that triggers strong emotions. Should the government regulate this?";
    if (text.includes("NBN") || text.includes("broadband"))
      return "The NBN is Australia's national internet network. This asks whether internet should be run by the government like roads, or by private companies.";
    if (text.includes("news") && text.includes("tech") && text.includes("paid"))
      return "Tech companies like Google and Facebook show news content from media outlets. This asks whether they should have to pay the news companies for that content.";
    if (text.includes("automat") || text.includes("replacing") || text.includes("jobs"))
      return "This is about machines and AI taking over human jobs. Should the government do something about it, or let technology progress naturally?";
    return "This question is about technology and how it affects society.";
  }
  
  // Digital Rights
  if (topic === "digital rights") {
    if (text.includes("track") || text.includes("TikTok") || text.includes("location"))
      return "This is about apps collecting your personal data — like where you go, what you buy, and what you look at — often without you realising.";
    if (text.includes("monitor") || text.includes("phone") || text.includes("cyberbullying"))
      return "This asks whether schools should be allowed to check what students do on their personal phones to stop bullying.";
    if (text.includes("private message") || text.includes("encrypted") || text.includes("encryption") || text.includes("WhatsApp"))
      return "Encryption keeps your messages private so nobody — not even the government — can read them. This asks whether police should be able to break that encryption.";
    if (text.includes("data") && (text.includes("delete") || text.includes("own") || text.includes("GDPR") || text.includes("personal")))
      return "This is about whether you should have the legal right to see, control, and delete the personal information that companies have collected about you.";
    if (text.includes("under 16") || text.includes("age") || text.includes("children"))
      return "This is about age restrictions on the internet — should the government ban young people from certain platforms to protect them?";
    return "This question is about your digital rights — privacy, data, and freedom online.";
  }
  
  // Healthcare
  if (topic === "healthcare") {
    if (text.includes("mental health"))
      return "This is about whether mental health problems (like anxiety and depression) should be treated as seriously as physical health problems by the government and healthcare system.";
    if (text.includes("dental"))
      return "In Australia, Medicare covers most doctor visits but not dentists. This asks whether dental care should also be covered.";
    if (text.includes("vaccine") || text.includes("vaccination"))
      return "This is about whether the government should require everyone to get vaccinated, even if some people disagree with vaccines.";
    if (text.includes("GP") || text.includes("bulk billing") || text.includes("Medicare"))
      return "Bulk billing means the government pays for your doctor visit so you don't have to. Fewer doctors offer this now. Should the government fix it?";
    if (text.includes("hospital") || text.includes("waiting list"))
      return "Public hospitals have long waiting times for non-urgent surgery. This asks whether more money should go to hospitals, even if it means higher taxes.";
    if (text.includes("assisted dying") || text.includes("euthanasia"))
      return "This is about whether people with terminal illnesses who are suffering should have the legal right to choose to end their own life with medical help.";
    if (text.includes("private") && text.includes("market"))
      return "This asks whether Australia should rely more on private healthcare (like the US) or strengthen the public Medicare system.";
    return "This question is about healthcare — how the medical system should work and who should pay for it.";
  }
  
  // Justice
  if (topic === "justice") {
    if (text.includes("shoplifting") || text.includes("first offence"))
      return "This is about how to punish young people who steal — harsh punishment to send a message, or a lighter approach focused on learning from mistakes?";
    if (text.includes("tried as adult") || text.includes("16-year-old"))
      return "When a teenager commits a serious crime, should they be punished like an adult, or treated differently because their brain is still developing?";
    if (text.includes("facial recognition") || text.includes("surveillance"))
      return "This is about police using cameras that can automatically identify people by their face. It could catch criminals but also tracks innocent people.";
    if (text.includes("incarceration") || text.includes("imprisonment") || text.includes("Aboriginal") || text.includes("Indigenous"))
      return "Aboriginal Australians are jailed at a much higher rate than other Australians. This asks whether the justice system itself is part of the problem.";
    if (text.includes("stop and search") || text.includes("stop-and-search"))
      return "This is about whether police should be allowed to search people on the street without a specific reason — some say it prevents crime, others say it targets minorities.";
    if (text.includes("cannabis") || text.includes("recreational"))
      return "This asks whether marijuana should be made legal and regulated like alcohol, or kept illegal.";
    if (text.includes("death penalty") || text.includes("capital punishment"))
      return "This is about whether Australia should bring back execution as a punishment for the worst crimes.";
    return "This question is about justice — how crimes should be punished and how the legal system should work.";
  }
  
  // Immigration
  if (topic === "immigration") {
    if (text.includes("asylum") || text.includes("refugee") || text.includes("boat") || text.includes("offshore"))
      return "Asylum seekers are people fleeing danger in their home country. Australia currently processes some of them in offshore detention centres on other islands. Is this fair?";
    if (text.includes("English") || text.includes("language"))
      return "This asks whether people moving to Australia should have to learn English before they can come, or whether they should be allowed to learn after arriving.";
    if (text.includes("immigration") && (text.includes("numbers") || text.includes("intake") || text.includes("housing")))
      return "Australia takes in a lot of migrants each year. Some say this helps the economy, others say it makes housing and services worse. How many should we let in?";
    return "This question is about immigration — how many people should be allowed to move to Australia and how they should be treated.";
  }
  
  // Culture
  if (topic === "culture") {
    if (text.includes("Australia Day") || text.includes("January 26") || text.includes("Invasion Day"))
      return "Australia Day is on January 26, the day the British arrived in 1788. Many Aboriginal people see it as the start of their dispossession. Should the date be changed?";
    if (text.includes("republic") || text.includes("King") || text.includes("monarchy"))
      return "Australia's head of state is the British King. This asks whether Australia should become a republic with its own Australian leader instead.";
    if (text.includes("history") || text.includes("dark parts") || text.includes("colonial"))
      return "This is about whether schools should teach the uncomfortable parts of Australian history, like the treatment of Aboriginal people.";
    if (text.includes("arts") || text.includes("ABC") || text.includes("culture"))
      return "This is about whether the government should fund arts, culture, and public broadcasting like the ABC, or whether these should survive on their own.";
    return "This question is about Australian culture and identity.";
  }
  
  // Work
  if (topic === "work") {
    if (text.includes("weekend") || text.includes("penalty rate"))
      return "Penalty rates are extra pay for working on weekends, nights, or public holidays. Should workers get paid more for working at these times?";
    if (text.includes("15-year-old") || text.includes("school holidays"))
      return "This is about how many hours teenagers should be allowed to work, and whether rules should be more relaxed during holidays.";
    if (text.includes("gig") || text.includes("Uber") || text.includes("Deliveroo") || text.includes("casual"))
      return "Gig workers (like Uber drivers) are often classified as 'contractors' meaning they don't get sick leave, super, or job security. Should they get the same rights as regular employees?";
    if (text.includes("four-day") || text.includes("4-day"))
      return "Some companies have tried a 4-day work week and found workers are just as productive. Should this become standard?";
    if (text.includes("automat") || text.includes("AI") || text.includes("replace"))
      return "AI and robots are taking over some jobs. Should the government slow this down to protect workers, or let progress happen?";
    if (text.includes("sick leave"))
      return "This asks whether every worker — including casual and gig workers — should get paid sick days.";
    if (text.includes("productivity") || text.includes("bargaining") || text.includes("enterprise"))
      return "This is about workplace rules and how wages are negotiated. Should workers negotiate individually, through unions, or through industry-wide agreements?";
    return "This question is about work and employment rights.";
  }
  
  // Housing
  if (topic === "housing") {
    if (text.includes("public housing"))
      return "Public housing is homes owned by the government and rented cheaply to people who can't afford private rent. Should the government build more?";
    if (text.includes("rent") && (text.includes("cap") || text.includes("raise") || text.includes("increase") || text.includes("landlord")))
      return "This is about rent prices going up — should the government limit how much landlords can increase rent each year?";
    if (text.includes("evict"))
      return "This is about renters' rights — how much notice should landlords have to give before kicking someone out?";
    if (text.includes("negative gearing") || text.includes("capital gains") || text.includes("investor"))
      return "Negative gearing is a tax rule that benefits property investors. Critics say it pushes up house prices. Should it be changed?";
    if (text.includes("Housing First") || text.includes("homelessness") || text.includes("homeless"))
      return "'Housing First' means giving homeless people a home first, then helping with other issues. Research shows this works well. Should Australia try it?";
    if (text.includes("zoning") || text.includes("denser") || text.includes("apartment"))
      return "Zoning laws control what can be built where. This asks whether more apartments should be allowed in areas that currently only have houses.";
    return "This question is about housing — affordability, renting, and homelessness.";
  }
  
  return "Think about what this question is really asking: who should be responsible, and how much power should the government have?";
}

function generateOptionClarification(opt, q, mode) {
  const label = opt.label.toLowerCase();
  const x = opt.x;
  const y = opt.y;
  
  // Generate a position-based explanation
  let economic = "";
  let authority = "";
  
  if (x < -0.5) economic = "This is a left-wing/progressive answer";
  else if (x < -0.15) economic = "This leans slightly left/progressive";
  else if (x > 0.5) economic = "This is a right-wing/conservative answer";
  else if (x > 0.15) economic = "This leans slightly right/conservative";
  else economic = "This is a centrist answer";
  
  if (y > 0.5) authority += " that favours more government involvement.";
  else if (y > 0.15) authority += " that leans toward some government action.";
  else if (y < -0.5) authority += " that favours less government control and more personal freedom.";
  else if (y < -0.15) authority += " that leans toward less government involvement.";
  else authority += " with a moderate view on government power.";
  
  return economic + authority;
}

// Auto-build on load
if (typeof QUESTION_BANKS !== 'undefined') {
  buildClarifications();
}
