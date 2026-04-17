// ============================================================
// PRESIDENTIAL HEAD-TO-HEAD MATCHUP MODE
// Users pick 2 presidents, see their opposing approaches on shared
// issues side-by-side, and pick the one they prefer on each issue.
// ============================================================

// President metadata — used for the picker grid.
const PRESIDENT_META = {
  fdr:        { name: "Franklin D. Roosevelt", years: "1933–1945", party: "Democrat" },
  truman:     { name: "Harry S. Truman",       years: "1945–1953", party: "Democrat" },
  eisenhower: { name: "Dwight D. Eisenhower",  years: "1953–1961", party: "Republican" },
  jfk:        { name: "John F. Kennedy",       years: "1961–1963", party: "Democrat" },
  lbj:        { name: "Lyndon B. Johnson",     years: "1963–1969", party: "Democrat" },
  nixon:      { name: "Richard Nixon",         years: "1969–1974", party: "Republican" },
  ford:       { name: "Gerald Ford",           years: "1974–1977", party: "Republican" },
  carter:     { name: "Jimmy Carter",          years: "1977–1981", party: "Democrat" },
  reagan:     { name: "Ronald Reagan",         years: "1981–1989", party: "Republican" },
  ghwbush:    { name: "George H. W. Bush",     years: "1989–1993", party: "Republican" },
  clinton:    { name: "Bill Clinton",          years: "1993–2001", party: "Democrat" },
  gwbush:     { name: "George W. Bush",        years: "2001–2009", party: "Republican" },
  obama:      { name: "Barack Obama",          years: "2009–2017", party: "Democrat" },
  trump:      { name: "Donald Trump",          years: "2017–2021", party: "Republican" },
  biden:      { name: "Joe Biden",             years: "2021–2025", party: "Democrat" }
};

// The shared issues. Each issue lists the presidents who took a
// notable stance on that issue. When two presidents are matched up,
// only issues where BOTH have a position will appear.
const MATCHUP_ISSUES = [

  // ═══════════════════════════════════════════════════════════
  // 1. TAX POLICY
  // ═══════════════════════════════════════════════════════════
  {
    id: "taxes",
    topic: "Tax Policy",
    question: "How much should the government tax people's income?",
    positions: {
      fdr: {
        approach: "Raised the top income tax rate to 94% on the wealthiest Americans to pay for jobs programs and the war effort.",
        good: "Funded massive programs that put 8.5 million unemployed Americans back to work during the Depression.",
        bad: "Critics say the top rates discouraged investment and effectively confiscated income from high earners."
      },
      truman: {
        approach: "Kept the top income tax rate at 91% and vetoed Republican bills that would have cut individual income taxes.",
        good: "Helped the government pay down World War II debt and fund postwar programs like the GI Bill.",
        bad: "Congress overrode his vetoes, arguing his high income-tax stance slowed peacetime economic recovery."
      },
      eisenhower: {
        approach: "Kept the top income tax rate at 91% and refused to cut it, calling balanced budgets more important than tax relief.",
        good: "Produced three balanced budgets and funded the Interstate Highway System without piling on debt.",
        bad: "Conservatives said punishing rates held back the growth the 1950s economy could have achieved."
      },
      jfk: {
        approach: "Proposed cutting the top income tax rate from 91% to 65% to stimulate growth — the cuts passed after his death.",
        good: "The economy grew strongly through the 1960s and income tax revenue actually rose after rates were cut.",
        bad: "Liberals argued the cuts disproportionately benefited high earners and weakened New Deal revenue."
      },
      lbj: {
        approach: "Pushed through a 10% income tax surcharge in 1968 — a temporary raise on what every American owed — to pay for Vietnam and Great Society programs.",
        good: "Helped keep the federal deficit from exploding while funding Medicare and anti-poverty programs.",
        bad: "The surcharge was deeply unpopular and contributed to the economic stagflation of the 1970s."
      },
      nixon: {
        approach: "Signed modest income tax cuts for middle-class families but added a new minimum tax to make sure high earners couldn't escape paying anything.",
        good: "Middle-class families saw some relief in a chaotic economy while the wealthiest still had to pay a floor.",
        bad: "The new minimum tax was complex and riddled with loopholes that tax lawyers quickly learned to exploit."
      },
      ford: {
        approach: "Signed a $22.8 billion income tax cut in 1975, giving most households direct rebates on what they had already paid.",
        good: "Helped pull the economy out of the 1974–75 recession and put money directly back into taxpayers' hands.",
        bad: "Deficits kept rising and the tax cuts were offset by spending that made little long-term difference."
      },
      carter: {
        approach: "Signed modest income tax cuts in 1978 but also raised Social Security payroll taxes, meaning many workers ended up paying more overall.",
        good: "The payroll tax increase kept Social Security solvent into the next century.",
        bad: "Workers saw take-home pay shrink while inflation was already eating their paychecks."
      },
      reagan: {
        approach: "Cut the top income tax rate from 70% to 28% — the biggest reduction in individual income taxes in American history.",
        good: "The economy grew strongly and unemployment dropped from 10% to 5% by the end of his term.",
        bad: "The national debt tripled from $1 trillion to $2.7 trillion during his presidency."
      },
      ghwbush: {
        approach: "Broke his famous 'Read my lips: no new taxes' pledge and raised the top income tax rate in 1990 to reduce the deficit.",
        good: "The deal helped put the federal budget on a path that produced surpluses by the end of the decade.",
        bad: "Breaking the pledge cost him conservative support and likely his re-election in 1992."
      },
      clinton: {
        approach: "Raised the top income tax rate from 31% to 39.6% in 1993 as part of a deficit-reduction package.",
        good: "The federal budget moved from deep deficits to four straight surpluses by 2000.",
        bad: "Republicans argued the higher income tax rates hurt small businesses and every Republican in Congress voted against it."
      },
      gwbush: {
        approach: "Cut individual income tax rates across every bracket in 2001 and 2003, lowering what nearly every American owed.",
        good: "Most households paid less in income taxes and the economy kept growing through the mid-2000s.",
        bad: "The cuts turned Clinton-era surpluses into trillion-dollar deficits and delivered the biggest savings to the highest earners."
      },
      obama: {
        approach: "Let the Bush-era income tax cuts expire for households earning over $400,000, raising the top rate back to 39.6%.",
        good: "Helped shrink the deficit from $1.4 trillion to under $500 billion by the end of his presidency.",
        bad: "Critics said higher income tax rates on top earners slowed the recovery and hurt business formation."
      },
      trump: {
        approach: "Lowered individual income tax rates across the board — the top rate dropped from 39.6% to 37% and every bracket got a cut.",
        good: "Unemployment fell to 3.5% — a 50-year low — and wages rose for lower-income workers before the pandemic.",
        bad: "The individual rate cuts added nearly $2 trillion to the national debt and delivered the largest dollar savings to top earners."
      },
      biden: {
        approach: "Kept individual income tax rates the same as Trump left them but proposed raising the top rate back to 39.6% on anyone earning over $400,000 a year.",
        good: "Promised that no one earning under $400,000 would see their income taxes go up by a single cent.",
        bad: "The proposed rate increase on high earners never passed Congress, leaving his income-tax agenda largely unfulfilled."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 2. HEALTHCARE
  // ═══════════════════════════════════════════════════════════
  {
    id: "healthcare",
    topic: "Healthcare",
    question: "Should the government help pay for people's healthcare?",
    positions: {
      truman: {
        approach: "Proposed the first national health insurance program in 1945, covering all Americans through payroll taxes.",
        good: "Set the agenda that eventually led to Medicare and Medicaid 20 years later.",
        bad: "The American Medical Association killed the plan, calling it 'socialized medicine,' and it never passed Congress."
      },
      lbj: {
        approach: "Created Medicare and Medicaid in 1965, giving government-funded health coverage to seniors and the poor.",
        good: "Over 65 million Americans now rely on Medicare, and seniors' poverty rate was cut in half.",
        bad: "Costs ballooned far beyond original estimates and the programs face long-term funding shortfalls."
      },
      nixon: {
        approach: "Proposed a national health plan in 1974 that would have required every employer to provide workers with health insurance.",
        good: "Would have covered nearly every American decades before the Affordable Care Act if Watergate hadn't derailed him.",
        bad: "Liberals rejected it as too modest and the plan collapsed, leaving millions uninsured."
      },
      carter: {
        approach: "Proposed a phased-in national health insurance plan but delayed it to fight inflation first.",
        good: "Expanded Medicaid coverage and rural health clinics for underserved Americans.",
        bad: "His national health plan never passed and he lost the support of Ted Kennedy and progressive Democrats."
      },
      clinton: {
        approach: "Pushed a sweeping universal healthcare plan in 1993 that would have given every American government-backed health coverage.",
        good: "Forced healthcare onto the national agenda and later signed the Children's Health Insurance Program, covering millions of kids.",
        bad: "The main plan was so complex and unpopular it died in Congress without a vote and cost Democrats the 1994 midterms."
      },
      obama: {
        approach: "Signed the Affordable Care Act in 2010, requiring most Americans to have health insurance and expanding Medicaid to cover more low-income adults.",
        good: "About 20 million more Americans gained health coverage, and insurers can no longer reject people with pre-existing conditions.",
        bad: "Many people lost plans they liked, premiums rose sharply, and the individual mandate was deeply unpopular."
      },
      trump: {
        approach: "Repeatedly tried to repeal the Affordable Care Act and eliminated the penalty for not having health insurance.",
        good: "Ended an unpopular mandate that forced people to buy insurance they didn't want.",
        bad: "The repeal attempts failed, uninsured rates rose, and he never produced the promised replacement plan."
      },
      biden: {
        approach: "Expanded government subsidies for Affordable Care Act plans and let Medicare negotiate drug prices for the first time, reducing what the government pays for medications.",
        good: "A record 21 million Americans enrolled in government-subsidized coverage and insulin was capped at $35 a month for Medicare patients.",
        bad: "Premiums for middle-class families who don't qualify for subsidies kept climbing during his term."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 3. WAR & MILITARY ACTION
  // ═══════════════════════════════════════════════════════════
  {
    id: "war",
    topic: "War & Military Action",
    question: "When should America send soldiers to fight?",
    positions: {
      truman: {
        approach: "Sent US troops to fight in Korea in 1950 without a formal declaration of war, calling it a 'police action' to stop communist invasion.",
        good: "Stopped North Korea from conquering the South and established that the US would defend allies against communist aggression.",
        bad: "Over 36,000 Americans died and the war ended in a stalemate that still divides the Korean peninsula today."
      },
      eisenhower: {
        approach: "Refused to send US combat troops to Vietnam even when France was losing, and pulled back from direct military intervention in Korea, ending that war.",
        good: "Kept America out of major ground wars for eight years while still deterring Soviet expansion.",
        bad: "Used CIA covert operations instead of troops to overthrow governments in Iran and Guatemala, causing lasting damage without accountability."
      },
      jfk: {
        approach: "Authorized the failed Bay of Pigs invasion of Cuba using CIA-trained exiles, and sent 16,000 military advisors — but not combat troops — to Vietnam.",
        good: "Stared down the Soviets during the Cuban Missile Crisis and forced them to remove nuclear missiles without firing a shot.",
        bad: "The Bay of Pigs was a humiliating defeat and his military advisors in Vietnam laid the groundwork for full-scale war."
      },
      lbj: {
        approach: "Escalated US combat troops in Vietnam from 16,000 advisors to 540,000 fighting soldiers, based on the disputed Gulf of Tonkin incident.",
        good: "Believed he was stopping the spread of communism across Southeast Asia and honoring US commitments to allies.",
        bad: "Over 58,000 Americans and more than a million Vietnamese died in a war the US ultimately lost."
      },
      nixon: {
        approach: "Gradually withdrew US combat troops from Vietnam over four years while secretly bombing Cambodia to cut enemy supply lines.",
        good: "Finally ended US combat involvement in Vietnam and brought American prisoners of war home.",
        bad: "The Cambodia bombing helped destabilize the country and led to the Khmer Rouge genocide that killed two million people."
      },
      ford: {
        approach: "Completed the US military withdrawal from Vietnam as Saigon fell in 1975, ending all American combat presence in the country.",
        good: "Evacuated over 130,000 South Vietnamese refugees to safety in the United States.",
        bad: "The chaotic fall of Saigon became a symbol of American military failure and a trauma that shaped US foreign policy for decades."
      },
      carter: {
        approach: "Avoided sending US troops into any new conflict during his entire four-year term, relying on diplomacy and sanctions instead.",
        good: "Kept the United States out of any new military conflicts for four years.",
        bad: "A failed hostage rescue mission in Iran killed eight servicemen and cemented his image as unable to project military force."
      },
      reagan: {
        approach: "Sent US Marines to Lebanon as peacekeepers, invaded Grenada, and bombed Libya — while funding proxy forces to fight Soviet-backed governments.",
        good: "The Grenada invasion succeeded quickly and the arms buildup is widely credited with helping bankrupt the Soviet Union.",
        bad: "The Beirut bombing killed 241 Marines in a single attack, and he pulled out rather than retaliate, signaling vulnerability to terror groups."
      },
      ghwbush: {
        approach: "Sent 500,000 US troops to lead a 34-nation coalition to push Saddam Hussein's army out of Kuwait in the 1991 Gulf War.",
        good: "Liberated Kuwait in six weeks with only 148 American combat deaths and left office with 89% approval.",
        bad: "Stopped short of marching to Baghdad and left Saddam Hussein in power, setting the stage for the much costlier 2003 Iraq War."
      },
      clinton: {
        approach: "Sent US aircraft and cruise missiles against Serbian forces for 78 days to stop ethnic cleansing in Kosovo, without committing ground troops.",
        good: "Stopped the Kosovo genocide without a single US combat death.",
        bad: "Failed to send troops to prevent the Rwanda genocide in 1994, and missed chances to kill Osama bin Laden before 9/11."
      },
      gwbush: {
        approach: "Sent US troops to invade Afghanistan after 9/11 and then Iraq in 2003, based on claims — later proved false — that Iraq had weapons of mass destruction.",
        good: "Toppled the Taliban and Saddam Hussein and no major terrorist attack struck the US homeland for the rest of his term.",
        bad: "Over 7,000 US troops and hundreds of thousands of Iraqis died, and no weapons of mass destruction were ever found."
      },
      obama: {
        approach: "Refused to send large-scale ground forces to new conflicts, relying instead on drone strikes and special-operations raids, including the mission that killed Osama bin Laden.",
        good: "Killed the 9/11 mastermind and ended the Iraq War without repeating the large-scale deployments of the Bush era.",
        bad: "Drone strikes killed hundreds of civilians and the limited intervention in Libya left the country in chaos."
      },
      trump: {
        approach: "Launched missile strikes on Syria and ordered the killing of Iranian General Soleimani, but withdrew US troops from Syria and started no new wars.",
        good: "First president in decades to leave office without starting a new major war, and US-backed forces destroyed the ISIS caliphate.",
        bad: "The Soleimani strike nearly triggered open war with Iran and pulling troops from Syria abandoned Kurdish allies who had fought alongside Americans."
      },
      biden: {
        approach: "Completed the full US military withdrawal from Afghanistan in August 2021, ending America's longest war after 20 years.",
        good: "Ended the 20-year Afghanistan war and finally pulled out after three presidents had promised to do so.",
        bad: "The chaotic withdrawal killed 13 US service members in a suicide bombing and left Afghanistan under Taliban control within days."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 4. IMMIGRATION
  // ═══════════════════════════════════════════════════════════
  {
    id: "immigration",
    topic: "Immigration",
    question: "How many immigrants should be let in and how should they be treated?",
    positions: {
      eisenhower: {
        approach: "Launched a mass deportation campaign in 1954, forcibly removing more than a million undocumented Mexican immigrants from the country.",
        good: "Supporters said it protected American jobs and enforced existing immigration law.",
        bad: "US citizens were wrongly deported, families were broken up, and some workers died in brutal desert conditions during removal."
      },
      lbj: {
        approach: "Signed the 1965 Immigration Act, abolishing the race-based quota system that had deliberately favored European immigrants since 1924 and opened entry to people from all countries.",
        good: "Opened the door to immigrants from Asia, Africa, and Latin America and made America far more diverse.",
        bad: "Dramatically changed the demographic makeup of the country in ways Johnson himself had said wouldn't happen."
      },
      reagan: {
        approach: "Signed a 1986 law granting amnesty and a path to legal status for about 3 million undocumented immigrants already living in the United States.",
        good: "Legalized millions of long-term residents and tied the amnesty to new sanctions on employers who hired undocumented workers.",
        bad: "Enforcement fell apart and the undocumented population grew from 3 million to over 11 million in the following decades."
      },
      clinton: {
        approach: "Signed a 1996 law that sharply increased deportations, doubled the size of the Border Patrol, and made it easier to remove immigrants for minor crimes.",
        good: "Illegal border crossings fell significantly and more immigration officers were deployed than ever before.",
        bad: "Made it much easier to deport long-term residents for minor offenses, tearing apart mixed-status families."
      },
      gwbush: {
        approach: "Proposed giving the estimated 11 million undocumented immigrants already in the US a path to earn legal status and eventual citizenship — but Congress killed the bill.",
        good: "Argued for treating immigrants humanely and tried to fix a broken system through bipartisan compromise.",
        bad: "His own party blocked his plan, and border enforcement during his term was widely seen as inconsistent."
      },
      obama: {
        approach: "Created the program that protected hundreds of thousands of young people brought to the US as children from deportation, while also setting deportation records by removing 3 million people.",
        good: "Protected hundreds of thousands of young immigrants brought to America as children from being sent to countries they had never known.",
        bad: "He deported more people than any prior president, earning the nickname 'Deporter-in-Chief' from immigrant advocates."
      },
      trump: {
        approach: "Drastically reduced legal immigration, banned entry from several Muslim-majority countries, built hundreds of miles of border wall, and separated children from parents caught crossing the border illegally.",
        good: "Border crossings dropped sharply during most of his term and he made immigration enforcement a clear national priority.",
        bad: "The family separation policy left thousands of children in detention facilities, and the travel ban was condemned as discriminatory by courts and allies."
      },
      biden: {
        approach: "Reversed the travel ban, halted new border wall construction, and proposed restoring a path to legal status for undocumented immigrants — while struggling to manage a record surge in border crossings.",
        good: "Restored humanitarian protections for refugees and young immigrants brought to the US as children.",
        bad: "A record 2.4 million border crossings were recorded in 2022, overwhelming US cities and turning immigration into his biggest political liability."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 5. CIVIL RIGHTS & EQUALITY
  // ═══════════════════════════════════════════════════════════
  {
    id: "civil-rights",
    topic: "Civil Rights & Equality",
    question: "How should the government protect minority groups from discrimination?",
    positions: {
      truman: {
        approach: "Desegregated the US military by executive order in 1948, banning racial separation in the armed forces and extending equal treatment to Black service members.",
        good: "Made the military one of the first fully integrated institutions in American life.",
        bad: "Southern Democrats split off to form the Dixiecrat Party, and civilian segregation in schools, restaurants, and housing continued for another 16 years."
      },
      eisenhower: {
        approach: "Sent US Army paratroopers to Little Rock in 1957 to force the desegregation of a high school against the Arkansas governor's resistance, protecting nine Black students' right to attend.",
        good: "Showed federal courts had ultimate authority over civil rights and that the government would use force to enforce equal access to education.",
        bad: "Privately opposed the Brown v. Board ruling and moved slowly on broader civil rights legislation for the rest of his term."
      },
      jfk: {
        approach: "Proposed the first major civil rights bill in 1963 to ban discrimination in public places and employment based on race.",
        good: "His televised address on civil rights helped shift the national conscience on racial equality and the bill became the Civil Rights Act after his death.",
        bad: "He was reluctant to push the bill for most of his term, only acting after televised violence against protesters in Birmingham."
      },
      lbj: {
        approach: "Signed the Civil Rights Act of 1964 banning racial discrimination in jobs and public places, and the Voting Rights Act of 1965 protecting Black Americans' right to vote.",
        good: "Ended legal segregation, transformed the American South, and registered millions of Black voters who had been systematically excluded.",
        bad: "He himself predicted this would hand the South to Republicans for a generation — which it did."
      },
      nixon: {
        approach: "Signed the Philadelphia Plan in 1969, the first federal affirmative action program requiring contractors doing government work to hire a set share of minority workers.",
        good: "Doubled federal contracts to minority-owned businesses and oversaw the most significant school desegregation drive in US history.",
        bad: "Also pursued a 'Southern strategy' that used coded racial appeals to win white Southern voters away from Democrats."
      },
      clinton: {
        approach: "Signed the Defense of Marriage Act in 1996 defining marriage as between a man and a woman for all federal purposes, denying gay and lesbian couples federal benefits.",
        good: "Appointed more minorities and women to the federal bench than any previous president and signed the Family and Medical Leave Act.",
        bad: "Also signed 'Don't Ask, Don't Tell,' banning openly gay people from the military — a policy condemned as discriminatory that took decades to reverse."
      },
      obama: {
        approach: "Became the first president to publicly endorse same-sex marriage, repealed the ban on openly gay people serving in the military, and signed federal hate crime protections for gay and transgender Americans.",
        good: "Same-sex marriage was legalized nationwide during his term and gay Americans gained explicit federal protection from hate crimes for the first time.",
        bad: "Critics said his emphasis on identity-based rights deepened cultural and racial divisions in American society."
      },
      trump: {
        approach: "Banned transgender Americans from serving in the military and ended diversity and inclusion training programs across the federal government.",
        good: "Signed the First Step Act, the biggest criminal justice reform in decades, which helped thousands of mostly Black inmates receive reduced sentences.",
        bad: "The transgender military ban was condemned as discriminatory and his response to the Charlottesville white supremacist rally drew widespread criticism."
      },
      biden: {
        approach: "Signed an executive order banning the federal government from discriminating based on gender identity, and signed the Respect for Marriage Act giving same-sex and interracial marriages full federal recognition.",
        good: "First president to appoint a Black woman to the Supreme Court and enshrined same-sex and interracial marriage in federal law.",
        bad: "Critics said mandating gender-identity policies in schools and women's sports went beyond what most Americans supported."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 6. ENVIRONMENT & ENERGY
  // ═══════════════════════════════════════════════════════════
  {
    id: "environment",
    topic: "Environment & Energy",
    question: "Should the government restrict pollution and emissions even if it costs jobs?",
    positions: {
      nixon: {
        approach: "Created the Environmental Protection Agency in 1970 and signed the Clean Air Act, setting strict pollution limits on factories and vehicles even over industry objections.",
        good: "Air and water pollution fell dramatically and species like the bald eagle were brought back from near-extinction.",
        bad: "Businesses said the new pollution regulations added billions in compliance costs and slowed industrial growth."
      },
      carter: {
        approach: "Pushed aggressive energy conservation rules and invested heavily in renewable energy as an alternative to oil and coal, positioning it as both an environmental and national security priority.",
        good: "Cut US oil imports significantly and laid early groundwork for the solar and wind industries.",
        bad: "Asking Americans to lower their thermostats and sacrifice convenience was mocked and hurt him politically."
      },
      reagan: {
        approach: "Removed Carter's solar panels from the White House, slashed renewable-energy research funding by over 80%, and weakened enforcement of clean-air rules to prioritize economic growth.",
        good: "Unleashed oil and gas production and brought energy costs down to historic lows for American families and businesses.",
        bad: "Set back US solar and wind development by roughly a decade and pollution levels that had been falling stalled out."
      },
      ghwbush: {
        approach: "Signed the Clean Air Act Amendments of 1990, imposing strict new limits on acid rain-causing sulfur emissions from power plants and factories.",
        good: "Cut acid rain-causing emissions in half within a decade and introduced market-based pollution trading that kept costs down.",
        bad: "Refused to sign binding emissions targets at the 1992 Rio Earth Summit, angering environmentalists worldwide."
      },
      clinton: {
        approach: "Signed the Kyoto Protocol committing the US to reducing greenhouse gas emissions and used executive power to protect nearly 60 million acres of federal land from logging and industrial development.",
        good: "Preserved vast wilderness areas and put the US on record as accepting limits on carbon emissions.",
        bad: "The Senate refused to ratify Kyoto 95–0, and Western states sued over the logging bans that restricted economic activity."
      },
      gwbush: {
        approach: "Pulled the US out of the Kyoto Protocol and loosened rules on emissions from coal-fired power plants, arguing the limits would destroy American energy jobs.",
        good: "Kept energy prices low and protected hundreds of thousands of American coal, oil, and manufacturing jobs.",
        bad: "Set back global climate negotiations by years and his administration was caught editing government climate science reports."
      },
      obama: {
        approach: "Signed the Paris Climate Agreement committing the US to cutting carbon emissions, blocked the Keystone XL pipeline on environmental grounds, and tightened emissions rules on power plants.",
        good: "US carbon emissions fell to 25-year lows and solar installations grew thirtyfold during his presidency.",
        bad: "The power-plant emissions rules were tied up in courts and cheap natural gas did more to cut emissions than his regulations."
      },
      trump: {
        approach: "Withdrew the US from the Paris Climate Agreement, reversed Obama's power-plant emissions rules, and opened more federal land and offshore areas to oil and gas drilling.",
        good: "The US became the world's biggest oil and gas producer and energy costs for families dropped.",
        bad: "He rolled back over 100 environmental rules and US commitments to cut carbon emissions evaporated overnight."
      },
      biden: {
        approach: "Rejoined the Paris Climate Agreement on his first day and signed the Inflation Reduction Act, investing $370 billion in subsidies and incentives for clean energy while restricting new oil and gas permits on federal land.",
        good: "The largest climate investment in US history and it spurred hundreds of new clean-energy factories and jobs.",
        bad: "Gasoline hit $5 a gallon under his watch, and critics said restricting domestic drilling raised costs for working families."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 7. GOVERNMENT SURVEILLANCE & POWER
  // ═══════════════════════════════════════════════════════════
  {
    id: "surveillance",
    topic: "Government Surveillance & Power",
    question: "How much power should the president have to act without Congress or the courts?",
    positions: {
      fdr: {
        approach: "Signed Executive Order 9066 in 1942, unilaterally forcing about 120,000 Japanese Americans into internment camps without congressional authorization or trial.",
        good: "Wartime supporters said it was a necessary precaution to protect national security after Pearl Harbor.",
        bad: "Most internees were US citizens; the Supreme Court later called it one of the worst civil liberties violations in American history."
      },
      truman: {
        approach: "Unilaterally required loyalty oaths from all federal workers and created boards to investigate and fire employees deemed 'disloyal' — without giving accused workers normal legal rights.",
        good: "Tried to head off far more aggressive congressional red-baiting and keep actual Soviet agents out of government.",
        bad: "Roughly 2,700 federal workers were fired and thousands more resigned under clouds of suspicion, most for no good reason."
      },
      nixon: {
        approach: "Wiretapped journalists and political rivals without court orders, ordered a break-in at Democratic headquarters, and claimed 'executive privilege' to block Congress and investigators from seeing White House documents.",
        good: "His team argued aggressive presidential intelligence-gathering was needed to handle Cold War threats and political opponents.",
        bad: "Watergate forced him to resign — the only president ever to do so — and shattered public trust in government for a generation."
      },
      gwbush: {
        approach: "Signed the Patriot Act and secretly authorized the National Security Agency to collect phone and internet records on millions of Americans without individual warrants, bypassing the normal court-approval process.",
        good: "No major terrorist attack struck the US homeland after 9/11 for the rest of his presidency.",
        bad: "The surveillance program collected records on nearly every American's calls and messages, and CIA interrogation techniques were later ruled illegal."
      },
      obama: {
        approach: "Continued and expanded the warrantless mass-surveillance programs revealed by Edward Snowden, while using broad executive authority to act on immigration and climate without new laws from Congress.",
        good: "Reformed the phone-records program after Snowden's revelations and closed the worst CIA interrogation sites.",
        bad: "Prosecuted more government leakers than all previous presidents combined and claimed broad authority to order drone strikes on American citizens abroad."
      },
      trump: {
        approach: "Declared a national emergency to redirect congressionally approved military funds to build the border wall after Congress explicitly refused to provide the money for it.",
        good: "Supporters said he was cutting through bureaucratic obstruction to enforce existing immigration law.",
        bad: "Courts repeatedly blocked his emergency declarations as unconstitutional, and his firing of multiple inspectors general who were investigating his administration raised serious alarms."
      },
      biden: {
        approach: "Used executive orders to cancel hundreds of billions of dollars in student loan debt without a new law from Congress, claiming existing statutes gave him that authority.",
        good: "Would have provided direct financial relief to over 40 million Americans struggling with student debt.",
        bad: "The Supreme Court struck the plan down 6–3 as a massive overreach of presidential authority that bypassed the legislative process."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 8. TRADE & THE ECONOMY
  // ═══════════════════════════════════════════════════════════
  {
    id: "trade",
    topic: "Trade & the Economy",
    question: "Should the government protect American businesses from foreign competition?",
    positions: {
      fdr: {
        approach: "Negotiated reciprocal trade agreements that lowered tariffs with other countries, while keeping some protective duties on goods that competed with struggling American industries.",
        good: "The trade-agreement program helped US exports grow even during the global downturn.",
        bad: "Protectionist instincts among trading nations — including the US — contributed to a collapse of world trade that worsened the Depression globally."
      },
      eisenhower: {
        approach: "Pushed for lower tariffs and open trade with allies, arguing that free commerce strengthened both the American economy and the Western alliance against the Soviet bloc.",
        good: "Cheaper imports and strong export growth helped fuel the 1950s boom.",
        bad: "Some American industries, like textiles, started losing out to cheaper foreign competition and pressed for protection."
      },
      clinton: {
        approach: "Signed the North American Free Trade Agreement in 1993, eliminating most tariffs between the US, Canada, and Mexico to allow goods to flow freely across the continent.",
        good: "Trade between the three countries tripled and American consumers got cheaper goods.",
        bad: "An estimated 700,000 US manufacturing jobs were lost to lower-wage Mexican factories over the next two decades."
      },
      gwbush: {
        approach: "Signed free-trade agreements that removed tariffs and trade barriers with over a dozen countries, from Central America to Chile to Australia.",
        good: "US exports kept growing and American consumers had access to more products at lower prices.",
        bad: "Manufacturing job losses accelerated, especially in the Midwest, contributing to long-term economic decline in industrial communities."
      },
      obama: {
        approach: "Negotiated the Trans-Pacific Partnership, a 12-nation free-trade deal designed to open markets across the Asia-Pacific region and set common rules to prevent China from dominating regional trade.",
        good: "Would have set high labor and environmental standards across Asia-Pacific trade and given US exporters access to fast-growing markets.",
        bad: "The deal became so unpopular with American workers that both major-party presidential candidates opposed it, and Trump withdrew the US in his first week."
      },
      trump: {
        approach: "Imposed steep tariffs on hundreds of billions of dollars worth of Chinese imports and steel and aluminum from all countries, trying to force foreign producers to compete less aggressively in the US market.",
        good: "Forced corporations to rethink global supply chains and brought some manufacturing back to American soil.",
        bad: "American consumers and farmers paid billions in higher costs passed on from the tariffs, and the overall US trade deficit actually grew during his term."
      },
      biden: {
        approach: "Kept most of Trump's tariffs on Chinese goods and added new restrictions on foreign competitors, while pouring hundreds of billions in government subsidies into American semiconductor and electric-vehicle manufacturing.",
        good: "Major chipmakers like TSMC and Intel announced over $200 billion in new US factory investments.",
        bad: "European and Asian allies complained that the 'Buy American' provisions in his laws unfairly shut out foreign companies from US clean-energy subsidies."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 9. WELFARE & POVERTY
  // ═══════════════════════════════════════════════════════════
  {
    id: "welfare",
    topic: "Welfare & Poverty",
    question: "How much should the government help people who are struggling?",
    positions: {
      fdr: {
        approach: "Created Social Security in 1935 to give Americans a guaranteed income in old age, and launched government jobs programs that directly hired millions of unemployed workers during the Depression.",
        good: "Today Social Security keeps over 22 million Americans out of poverty, and the jobs programs put 8.5 million people back to work at a time of 25% unemployment.",
        bad: "The program faces long-term funding shortfalls as the population ages, and critics say guaranteed benefits discourage private savings and work."
      },
      truman: {
        approach: "Proposed a 'Fair Deal' to expand Social Security benefits, raise the minimum wage, and build public housing for low-income Americans.",
        good: "Doubled the minimum wage and extended Social Security coverage to 10 million more Americans.",
        bad: "Most of the Fair Deal's expansion of government assistance was blocked by a conservative coalition in Congress."
      },
      lbj: {
        approach: "Launched a formal War on Poverty in 1964, creating food stamps, Head Start preschool for poor children, and Medicaid health coverage for low-income Americans.",
        good: "The US poverty rate fell from 19% to 12% in under a decade — the fastest sustained drop ever recorded.",
        bad: "Some programs created long-term dependency on government aid, and costs grew far beyond Johnson's original promises."
      },
      nixon: {
        approach: "Proposed a guaranteed minimum income — the Family Assistance Plan — that would have sent a direct government check to every poor American family to ensure a floor below which no one could fall.",
        good: "Would have been the first true minimum-income safety net in US history, reaching families that existing welfare programs missed.",
        bad: "Conservatives killed it as too generous toward people who weren't working, and liberals killed it as too stingy to actually help."
      },
      reagan: {
        approach: "Cut funding to multiple welfare programs, tightened work requirements for recipients, and argued that government assistance had created dependency rather than helping people escape poverty.",
        good: "Welfare rolls dropped and many Americans returned to work during the economic expansion of the mid-1980s.",
        bad: "Homelessness visibly surged in American cities during the 1980s and child poverty rose during his early years in office."
      },
      clinton: {
        approach: "Signed the 1996 welfare reform law, replacing the existing cash assistance program with a new system that imposed work requirements and a five-year lifetime limit on how long anyone could receive government aid.",
        good: "Welfare rolls fell by more than half and employment among single mothers rose sharply.",
        bad: "Extreme poverty among the very poorest families increased, and the time limits pushed people off assistance even when jobs disappeared in recessions."
      },
      obama: {
        approach: "Massively expanded government assistance during the Great Recession — extending unemployment benefits, increasing food stamp payments, and passing $800 billion in economic stimulus.",
        good: "Prevented a second Great Depression and lifted millions of families out of the worst of the economic downturn.",
        bad: "Food-stamp rolls hit a record 47 million people and the recovery was the slowest in modern US history, with many long-term unemployed never returning to work."
      },
      biden: {
        approach: "Expanded the Child Tax Credit in 2021 to give families up to $3,600 per child in direct monthly government payments, regardless of whether the parents were working.",
        good: "Cut child poverty in half in a single year — the largest single-year drop ever recorded in US history.",
        bad: "The expanded payments expired after one year when Congress refused to extend them, and critics argued that monthly cash without work requirements reduced the incentive to find jobs."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 10. CRIME & DRUGS
  // ═══════════════════════════════════════════════════════════
  {
    id: "crime",
    topic: "Crime & Drugs",
    question: "Should drug offenders get harsh punishment or treatment?",
    positions: {
      nixon: {
        approach: "Declared a 'War on Drugs' in 1971, classifying marijuana as a dangerous drug with no medical use and pushing heavy prison sentences for drug offenses.",
        good: "Created the first significant federal funding for drug treatment programs alongside tougher enforcement.",
        bad: "A Nixon aide later admitted the war on drugs was partly designed to target Black communities and anti-war activists rather than address addiction."
      },
      reagan: {
        approach: "Signed laws imposing mandatory minimum prison sentences for drug offenses — meaning judges had no choice but to send even small-time drug users to prison for years.",
        good: "Sent a clear message about the dangers of hard drugs and crack-cocaine use declined during his term.",
        bad: "The US prison population tripled and crack-cocaine offenses triggered sentences 100 times harsher than powder cocaine, devastating Black communities."
      },
      clinton: {
        approach: "Signed the 1994 crime bill that created a 'three strikes' mandatory life sentence for repeat offenders and added 100,000 more police officers — while increasing prison sentences for drug crimes.",
        good: "Violent crime dropped to 30-year lows during and after his administration.",
        bad: "Mass incarceration accelerated sharply and the United States became the world leader in the share of its population locked up."
      },
      obama: {
        approach: "Signed the Fair Sentencing Act reducing the sentence gap between crack and powder cocaine offenses, and used his pardon power to release 1,715 people serving long sentences for nonviolent drug crimes.",
        good: "The biggest single clemency effort since Franklin Roosevelt, freeing hundreds of nonviolent drug offenders who had served years under mandatory minimums.",
        bad: "The underlying mandatory minimum sentences remained largely in place and drug overdose deaths kept climbing throughout his term."
      },
      trump: {
        approach: "Signed the First Step Act in 2018, reducing some mandatory minimum sentences for nonviolent drug offenses and making it easier for prisoners to earn early release through rehabilitation programs.",
        good: "Released thousands of nonviolent drug offenders early and the federal prison population dropped to a 20-year low.",
        bad: "The reforms were modest — hundreds of thousands remained in prison for drug offenses — and the fentanyl overdose crisis worsened sharply during his term."
      },
      biden: {
        approach: "Issued mass pardons for thousands of people convicted of simple marijuana possession under federal law, and pushed to reclassify marijuana as a less dangerous drug.",
        good: "Cleared federal marijuana convictions for thousands of people and moved toward treating low-level drug use as a public health issue rather than a crime.",
        bad: "Fentanyl deaths stayed near record highs and critics said the pardons sent a permissive message while a deadly drug crisis was killing over 100,000 Americans a year."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 11. SPACE & TECHNOLOGY
  // ═══════════════════════════════════════════════════════════
  {
    id: "space",
    topic: "Space & Technology",
    question: "Should the government spend big on space exploration?",
    positions: {
      eisenhower: {
        approach: "Created NASA in 1958 in response to the Soviet Sputnik satellite and funded the first US satellite launches and space research programs.",
        good: "Laid the foundation for American leadership in space and prevented the Soviets from dominating a domain with both military and scientific significance.",
        bad: "Critics said his initial response to Sputnik was too slow and cautious, allowing a dangerous gap in space capability to open up."
      },
      jfk: {
        approach: "Committed to spending whatever it took to land Americans on the Moon within a decade, calling it essential to American prestige and security in the Cold War.",
        good: "NASA delivered Apollo 11 in 1969 and the US decisively won the space race against the Soviet Union.",
        bad: "The $25 billion program cost the equivalent of $280 billion today, came at the expense of other priorities, and killed three astronauts in the Apollo 1 fire."
      },
      nixon: {
        approach: "Approved funding for the Space Shuttle program in 1972 to maintain a permanent government spaceflight capability, while canceling the later Apollo Moon missions to cut costs.",
        good: "The Shuttle flew 135 missions over 30 years and was essential to building the International Space Station.",
        bad: "The program was far more expensive and far less reliable than promised, ultimately killing 14 astronauts in two disasters."
      },
      reagan: {
        approach: "Committed billions of government dollars to the Space Shuttle program and directed NASA to build a permanent space station, expanding the US government's presence in orbit.",
        good: "The space station became a reality under later presidents, and government investment kept the US at the frontier of human spaceflight.",
        bad: "The Challenger disaster killed seven astronauts in 1986 and revealed that NASA had been pressured by budget and schedule demands to cut corners on safety."
      },
      obama: {
        approach: "Cancelled NASA's expensive government-run program to return astronauts to the Moon and shifted the job of launching Americans into space to private companies like SpaceX, paying them to provide transportation.",
        good: "SpaceX now launches astronauts to the space station at a fraction of past costs and has revolutionized what government money can buy in spaceflight.",
        bad: "The US was completely dependent on buying seats on Russian rockets for human spaceflight for nearly a decade after the Shuttle retired."
      },
      trump: {
        approach: "Directed NASA to return American astronauts to the Moon under the Artemis program and funded its development, while also creating the Space Force as a new military branch focused on space.",
        good: "The Artemis program made real progress toward returning humans to the Moon for the first time since 1972.",
        bad: "Critics said the Moon program's timeline and budget were unrealistic and that much of the Space Force's mission duplicated work existing agencies already did."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 12. DEALING WITH RIVALS
  // ═══════════════════════════════════════════════════════════
  {
    id: "rivals",
    topic: "Dealing with Rivals",
    question: "Should America confront hostile countries with force, or talk to them?",
    positions: {
      truman: {
        approach: "Chose confrontation over negotiation with the Soviet Union, creating NATO as a military alliance and the Marshall Plan as an economic wall against communist expansion.",
        good: "Stopped Soviet expansion into Western Europe and rebuilt former enemies into strong democracies.",
        bad: "Locked in a 45-year Cold War and nuclear arms race that kept the world on the edge of annihilation for generations."
      },
      eisenhower: {
        approach: "Preferred covert action over direct confrontation, using the CIA to secretly overthrow governments in Iran and Guatemala that were seen as moving toward Soviet influence.",
        good: "Contained Soviet influence in the developing world cheaply, without sending US troops or risking open war.",
        bad: "Installed dictators whose abuses fueled deep anti-American movements for decades, especially in Iran."
      },
      jfk: {
        approach: "Chose direct eyeball-to-eyeball confrontation during the Cuban Missile Crisis, blockading Cuba and demanding the Soviets remove their nuclear missiles — while secretly offering a deal.",
        good: "Forced Khrushchev to withdraw nuclear missiles from Cuba without a shot being fired.",
        bad: "The world came closer to nuclear war during those 13 days than at any other moment in history."
      },
      nixon: {
        approach: "Chose engagement over confrontation with Communist China, making a historic 1972 visit to Beijing and opening diplomatic relations with the country the US had refused to recognize for 23 years.",
        good: "Split China from the Soviet bloc and laid the groundwork for decades of global economic growth.",
        bad: "China used engagement and trade access to become a wealthy economic and military rival the US is still struggling to manage."
      },
      carter: {
        approach: "Chose diplomacy and personal mediation over military pressure, personally brokering the Camp David peace talks between Israel and Egypt in 1978.",
        good: "Produced a peace deal between Israel and Egypt that has held for over 40 years.",
        bad: "The 1979 Iranian Revolution and the 444-day hostage crisis that followed destroyed his presidency and showed the limits of diplomacy with hostile regimes."
      },
      reagan: {
        approach: "Chose confrontation with the Soviet Union over negotiation, calling it an 'evil empire,' launching the biggest peacetime military buildup in American history, and funding anti-communist rebels worldwide.",
        good: "The pressure helped force the Soviets to the bargaining table and contributed to the end of the Cold War.",
        bad: "Brought the world close to nuclear war in the early 1980s before eventually switching to direct negotiation with Gorbachev."
      },
      ghwbush: {
        approach: "Chose careful diplomacy over confrontation as the Soviet Union collapsed, working with Mikhail Gorbachev to allow Eastern Europe to go free and Germany to reunify without a military crisis.",
        good: "Ended the Cold War peacefully — perhaps the most successful diplomatic transition in modern history.",
        bad: "Some argue he failed to push harder for democratic institutions in Russia, setting the stage for Putin's authoritarian rise."
      },
      clinton: {
        approach: "Chose to expand NATO eastward to include former Soviet satellites like Poland and Hungary, integrating them into the Western alliance rather than leaving them in a neutral buffer zone.",
        good: "Locked in democratic governance and military security for tens of millions of Eastern Europeans.",
        bad: "Russia saw the expansion as a betrayal of informal Cold War promises, fueling decades of hostility that arguably led to the Ukraine war."
      },
      gwbush: {
        approach: "Chose maximum confrontation after 9/11, declaring that all nations were 'either with us or against us' and building a coalition by force of pressure rather than patient diplomacy.",
        good: "Built a broad coalition that destroyed al-Qaeda's Afghan base and toppled the Taliban within weeks.",
        bad: "Alienated traditional allies over the Iraq War and left America's global reputation badly damaged for years."
      },
      obama: {
        approach: "Chose engagement and negotiation over confrontation, striking the Iran nuclear deal to freeze Iran's program through diplomacy and restoring full diplomatic relations with Cuba.",
        good: "Iran's nuclear program was frozen for years under international inspectors and Americans could legally visit Cuba for the first time in 50 years.",
        bad: "Russia invaded Ukraine twice during his term, and critics said his willingness to negotiate was seen as weakness by authoritarian rivals."
      },
      trump: {
        approach: "Chose direct personal diplomacy with North Korea's Kim Jong-un — meeting him three times — while confronting China economically with tariffs and pressuring NATO allies to pay more for their own defense.",
        good: "First sitting US president to meet a North Korean leader, and he forced allies to increase defense spending.",
        bad: "North Korea kept building nuclear weapons throughout the talks and he repeatedly praised authoritarian leaders over democratic allies."
      },
      biden: {
        approach: "Chose confrontation and alliance-building over negotiation after Russia invaded Ukraine, rallying NATO to provide weapons and sanctions and expanding the alliance to include Finland and Sweden.",
        good: "Finland and Sweden joined NATO and Western weapons and support kept Ukraine from being conquered.",
        bad: "The war has dragged on for years with hundreds of billions in US aid, tens of thousands of deaths, and no clear path to resolution."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 13. EXECUTIVE POWER & NORMS
  // ═══════════════════════════════════════════════════════════
  {
    id: "executive-power",
    topic: "Executive Power & Norms",
    question: "Should the president push the limits of their power to get things done?",
    positions: {
      fdr: {
        approach: "Broke the two-term tradition by winning four elections and tried to pack the Supreme Court with up to six new justices to remove the judges blocking his New Deal programs.",
        good: "Provided stable leadership through the Depression and World War II, and the Court-packing threat caused the justices to stop blocking New Deal legislation.",
        bad: "Congress responded by passing the 22nd Amendment, constitutionally limiting all future presidents to two terms."
      },
      truman: {
        approach: "Tried to seize the nation's steel mills by executive order in 1952 during a labor strike, arguing wartime necessity gave him authority to take over private industry without new legislation.",
        good: "Argued wartime emergencies required decisive presidential action to keep the country functioning.",
        bad: "The Supreme Court ruled him unconstitutional 6–3 — a landmark decision limiting how far presidents can go without congressional approval."
      },
      nixon: {
        approach: "Claimed 'executive privilege' to block Congress and Watergate investigators from accessing White House documents, and secretly bombed Cambodia without informing Congress.",
        good: "Pushed back against what he saw as congressional overreach on foreign policy and presidential communications.",
        bad: "The Supreme Court ruled against him 8–0 on executive privilege and he became the only president ever to resign from office."
      },
      ford: {
        approach: "Pardoned Richard Nixon in 1974 for all federal crimes committed while president, using his constitutional pardon power to end the possibility of prosecution before any charges were filed.",
        good: "Argued it was necessary for the country to move past Watergate rather than endure years of criminal proceedings against a former president.",
        bad: "The pardon outraged Americans who wanted accountability and is widely believed to have cost him the 1976 election."
      },
      reagan: {
        approach: "Sold arms to Iran secretly and illegally funneled the proceeds to Nicaraguan rebels through a network hidden from Congress, which had explicitly cut off that funding.",
        good: "Argued he was fighting communism in Latin America when Congress had unconstitutionally tried to tie his hands on foreign policy.",
        bad: "Fourteen officials were charged and the scandal revealed the White House had been running an entire secret foreign policy hidden from the public and Congress."
      },
      clinton: {
        approach: "Was impeached by the House in 1998 for lying under oath and obstructing justice to conceal an affair with a White House intern — abusing presidential power to cover up personal misconduct.",
        good: "The Senate acquitted him and he maintained high job-approval ratings throughout, suggesting the public considered the offense personal rather than political.",
        bad: "He was disbarred from practicing law, paid a financial settlement, and permanently tarnished the presidency with behavior he was later forced to admit."
      },
      gwbush: {
        approach: "Routinely attached 'signing statements' to laws he signed, declaring that he would not enforce parts of them he considered unconstitutional — issuing over 1,200 such challenges.",
        good: "Argued the president needs flexibility to defend the nation, especially after 9/11, without being bound by every line of a complex law.",
        bad: "The American Bar Association condemned the practice as an end-run around Congress and the Constitution, giving the president unilateral veto power over specific provisions."
      },
      obama: {
        approach: "Used executive orders on immigration — protecting young undocumented immigrants from deportation — and on climate regulation after Congress refused to pass the bills he wanted.",
        good: "Protected hundreds of thousands of young immigrants and advanced climate policy when Congress was completely deadlocked.",
        bad: "The Supreme Court struck down several of his executive actions as unconstitutional overreach that bypassed the legislative process."
      },
      trump: {
        approach: "Became the first president ever to be impeached twice — once for pressuring Ukraine to help his election campaign and once for inciting his supporters to storm the Capitol — and the first to refuse to concede a lost election.",
        good: "Supporters said he was fighting a political establishment and legal system that had unfairly targeted him from the start.",
        bad: "The January 6 Capitol riot by his supporters was the most serious assault on the peaceful transfer of power in modern American history."
      },
      biden: {
        approach: "Attempted to cancel hundreds of billions of dollars in student loan debt by executive order, claiming broad authority under a post-9/11 emergency law rather than asking Congress to pass new legislation.",
        good: "Would have provided direct financial relief to over 40 million Americans struggling with student debt.",
        bad: "The Supreme Court struck it down 6–3 as a massive overreach of presidential authority, ruling that such a large financial decision required an act of Congress."
      }
    }
  }
];

// Convenience: quick lookup of which issues a given president has positions on.
function getIssuesForPresident(key) {
  return MATCHUP_ISSUES.filter(issue => issue.positions[key]);
}

// Convenience: given two president keys, return the issues they both have positions on.
function getSharedIssues(keyA, keyB) {
  return MATCHUP_ISSUES.filter(issue => issue.positions[keyA] && issue.positions[keyB]);
}
