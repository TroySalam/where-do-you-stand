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
    question: "What should the government take from citizens?",
    positions: {
      fdr: {
        approach: "Raised the top income tax rate to 94% on the wealthiest Americans to pay for jobs programs and the war effort.",
        good: "Funded massive programs that put 8.5 million unemployed Americans back to work during the Depression.",
        bad: "Critics say the top rates discouraged investment and effectively confiscated income from high earners."
      },
      truman: {
        approach: "Kept wartime tax rates high, with the top bracket around 91%, and vetoed Republican tax cuts to protect revenue.",
        good: "Helped the government pay down World War II debt and fund postwar programs like the GI Bill.",
        bad: "Congress overrode his vetoes, arguing his tax stance slowed peacetime economic recovery."
      },
      eisenhower: {
        approach: "Kept the top income tax rate at 91% and refused to cut it, calling balanced budgets more important than tax relief.",
        good: "Produced three balanced budgets and funded the Interstate Highway System without piling on debt.",
        bad: "Conservatives said punishing rates held back the growth the 1950s economy could have achieved."
      },
      jfk: {
        approach: "Proposed cutting the top tax rate from 91% to 65% to stimulate growth — the cuts passed after his death.",
        good: "The economy grew strongly through the 1960s and tax revenue actually rose after rates were cut.",
        bad: "Liberals argued the cuts disproportionately benefited high earners and weakened New Deal revenue."
      },
      lbj: {
        approach: "Pushed through a 10% income tax surcharge in 1968 to pay for the Vietnam War and Great Society programs.",
        good: "Helped keep the federal budget deficit from exploding while funding Medicare and anti-poverty programs.",
        bad: "The surcharge was deeply unpopular and contributed to the economic stagflation of the 1970s."
      },
      nixon: {
        approach: "Signed modest tax cuts but also imposed wage and price controls and a new minimum tax on the wealthy.",
        good: "Short-term inflation slowed and middle-class families saw some relief in a chaotic economy.",
        bad: "Wage and price controls distorted markets and are widely viewed as an economic failure."
      },
      ford: {
        approach: "Signed a $22.8 billion tax cut in 1975 and pushed a 'Whip Inflation Now' plan to restrain spending.",
        good: "Helped pull the economy out of the 1974–75 recession and gave taxpayers direct rebates.",
        bad: "Deficits kept rising and 'Whip Inflation Now' became a symbol of ineffective policy."
      },
      carter: {
        approach: "Signed modest tax cuts in 1978 but raised Social Security payroll taxes to shore up the system.",
        good: "The payroll tax increase kept Social Security solvent into the next century.",
        bad: "Workers saw take-home pay shrink while inflation was already eating their paychecks."
      },
      reagan: {
        approach: "Cut the top income tax rate from 70% to 28% — the biggest tax cut in American history.",
        good: "The economy grew strongly and unemployment dropped from 10% to 5% by the end of his term.",
        bad: "The national debt tripled from $1 trillion to $2.7 trillion during his presidency."
      },
      ghwbush: {
        approach: "Broke his famous 'Read my lips: no new taxes' pledge and raised taxes in 1990 to reduce the deficit.",
        good: "The deal helped put the federal budget on a path that produced surpluses by the end of the decade.",
        bad: "Breaking the pledge cost him conservative support and likely his re-election in 1992."
      },
      clinton: {
        approach: "Raised the top tax rate from 31% to 39.6% in 1993 as part of a deficit-reduction package.",
        good: "The federal budget moved from deep deficits to four straight surpluses by 2000.",
        bad: "Republicans argued the hikes hurt small businesses, and every Republican in Congress voted against it."
      },
      gwbush: {
        approach: "Cut income tax rates across the board in 2001 and 2003, including lower taxes on dividends and capital gains.",
        good: "Most households paid less in taxes and the economy kept growing through the mid-2000s.",
        bad: "The cuts turned Clinton-era surpluses into trillion-dollar deficits and mostly benefited high earners."
      },
      obama: {
        approach: "Let Bush-era tax cuts expire for households earning over $400,000 and raised taxes on investment income.",
        good: "Helped shrink the deficit from $1.4 trillion to under $500 billion by the end of his presidency.",
        bad: "Critics said higher taxes on investors slowed the recovery and hurt business formation."
      },
      trump: {
        approach: "Signed the 2017 Tax Cuts and Jobs Act, cutting the corporate rate from 35% to 21% and lowering individual rates.",
        good: "Unemployment fell to 3.5% — a 50-year low — and wages rose for lower-income workers before COVID.",
        bad: "The cuts added nearly $2 trillion to the national debt and mostly benefited corporations and top earners."
      },
      biden: {
        approach: "Raised the corporate minimum tax to 15% and added a 1% tax on stock buybacks to fund clean-energy investments.",
        good: "Raised hundreds of billions in new revenue while investing in domestic manufacturing and green energy.",
        bad: "Businesses said higher taxes slowed hiring and investment, and inflation hit 9% on his watch."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 2. HEALTHCARE
  // ═══════════════════════════════════════════════════════════
  {
    id: "healthcare",
    topic: "Healthcare",
    question: "Should the government provide health insurance?",
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
        approach: "Proposed a national health plan in 1974 that would have required every employer to provide insurance.",
        good: "Would have covered nearly every American decades before Obamacare if Watergate hadn't derailed him.",
        bad: "Liberals rejected it as too modest and the plan collapsed, leaving millions uninsured."
      },
      carter: {
        approach: "Proposed a phased-in national health insurance plan but delayed it to fight inflation first.",
        good: "Expanded Medicaid coverage and rural clinics for underserved Americans.",
        bad: "His national health plan never passed and he lost the support of Ted Kennedy and progressive Democrats."
      },
      clinton: {
        approach: "Pushed a sweeping universal healthcare plan led by Hillary Clinton in 1993.",
        good: "Forced healthcare onto the national agenda and later signed the Children's Health Insurance Program, covering millions of kids.",
        bad: "The main plan was so complex and unpopular it died in Congress without a vote and cost Democrats the 1994 midterms."
      },
      obama: {
        approach: "Signed the Affordable Care Act in 2010, requiring most Americans to have insurance and expanding Medicaid.",
        good: "About 20 million more Americans gained health coverage, and insurers can no longer reject people with pre-existing conditions.",
        bad: "Many people lost plans they liked, premiums rose sharply, and the individual mandate was deeply unpopular."
      },
      trump: {
        approach: "Repeatedly tried to repeal the Affordable Care Act and eliminated the penalty for not having insurance.",
        good: "Ended an unpopular mandate that forced people to buy insurance they didn't want.",
        bad: "The repeal attempts failed, uninsured rates rose, and he never produced the promised replacement plan."
      },
      biden: {
        approach: "Expanded Affordable Care Act subsidies and let Medicare negotiate drug prices for the first time.",
        good: "Record 21 million Americans enrolled in ACA coverage and insulin was capped at $35 for seniors.",
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
    question: "When should America fight?",
    positions: {
      truman: {
        approach: "Dropped atomic bombs on Hiroshima and Nagasaki to end World War II, then sent troops to fight in Korea.",
        good: "Ended World War II quickly and stopped North Korea from conquering the South.",
        bad: "The atomic bombings killed roughly 200,000 civilians, and the Korean War ended in a stalemate that still divides the peninsula."
      },
      eisenhower: {
        approach: "Ended the Korean War, refused to send US troops to Vietnam, and warned against the 'military-industrial complex.'",
        good: "Kept America out of major wars for eight years while still deterring Soviet expansion.",
        bad: "Used CIA covert operations to overthrow governments in Iran and Guatemala, causing lasting damage."
      },
      jfk: {
        approach: "Authorized the failed Bay of Pigs invasion of Cuba and sent 16,000 military advisors to Vietnam.",
        good: "Stared down the Soviets during the Cuban Missile Crisis without firing a shot.",
        bad: "The Bay of Pigs was a humiliating defeat and his Vietnam advisors laid the groundwork for full-scale war."
      },
      lbj: {
        approach: "Escalated US troops in Vietnam from 16,000 to 540,000 based on the disputed Gulf of Tonkin incident.",
        good: "Believed he was stopping the spread of communism across Southeast Asia.",
        bad: "Over 58,000 Americans and more than a million Vietnamese died in a war the US ultimately lost."
      },
      nixon: {
        approach: "Secretly bombed Cambodia, then gradually withdrew US troops from Vietnam over four years.",
        good: "Finally ended US combat involvement in Vietnam and brought American POWs home.",
        bad: "The Cambodia bombing helped destabilize the country and led to the Khmer Rouge genocide."
      },
      ford: {
        approach: "Oversaw the final US withdrawal from Vietnam as Saigon fell in 1975 and ordered a rescue raid on the Mayaguez.",
        good: "Evacuated over 130,000 South Vietnamese refugees to safety in the United States.",
        bad: "The chaotic fall of Saigon and Mayaguez raid (which killed 41 Marines) underscored American military decline."
      },
      carter: {
        approach: "Avoided war throughout his term and responded to the Soviet invasion of Afghanistan by boycotting the 1980 Olympics.",
        good: "Kept the United States out of any new military conflicts for four years.",
        bad: "A failed hostage rescue mission in Iran killed 8 servicemen and cemented his image as weak on defense."
      },
      reagan: {
        approach: "Launched the biggest peacetime military buildup in history, invaded Grenada, and bombed Libya.",
        good: "The arms race is widely credited with helping bankrupt the Soviet Union and ending the Cold War.",
        bad: "The Beirut bombing killed 241 Marines, and the Iran-Contra scandal showed his team broke the law to fund secret wars."
      },
      ghwbush: {
        approach: "Led a 34-nation coalition to push Saddam Hussein out of Kuwait in the 1991 Gulf War.",
        good: "Liberated Kuwait in six weeks with only 148 American combat deaths and left office with 89% approval.",
        bad: "Left Saddam Hussein in power, setting the stage for the much costlier 2003 Iraq War."
      },
      clinton: {
        approach: "Bombed Serbia for 78 days to stop ethnic cleansing in Kosovo and launched cruise missiles at al-Qaeda targets.",
        good: "Stopped the Kosovo genocide without a single US combat death.",
        bad: "Failed to prevent genocide in Rwanda and missed chances to kill Osama bin Laden before 9/11."
      },
      gwbush: {
        approach: "Invaded Afghanistan after 9/11 and invaded Iraq in 2003 based on false claims of weapons of mass destruction.",
        good: "Toppled the Taliban and Saddam Hussein and prevented another major terror attack on US soil.",
        bad: "Over 7,000 US troops and hundreds of thousands of Iraqis died, and no weapons of mass destruction were ever found."
      },
      obama: {
        approach: "Ordered the raid that killed Osama bin Laden, expanded drone strikes, and bombed Libya.",
        good: "Killed the 9/11 mastermind and ended the Iraq War without committing large-scale ground forces elsewhere.",
        bad: "Drone strikes killed hundreds of civilians and the Libya intervention left the country in chaos."
      },
      trump: {
        approach: "Launched missile strikes on Syria, ordered the killing of Iranian General Soleimani, but started no new wars.",
        good: "First president in decades to leave office without starting a new major war, and destroyed the ISIS caliphate.",
        bad: "The Soleimani strike nearly triggered war with Iran and he pulled troops out of Syria, abandoning Kurdish allies."
      },
      biden: {
        approach: "Completed the US withdrawal from Afghanistan in 2021 after 20 years of war.",
        good: "Ended America's longest war and finally pulled out after three presidents had promised to.",
        bad: "The chaotic withdrawal killed 13 US service members and left Afghanistan under Taliban control in days."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 4. IMMIGRATION
  // ═══════════════════════════════════════════════════════════
  {
    id: "immigration",
    topic: "Immigration",
    question: "Who should be allowed in?",
    positions: {
      eisenhower: {
        approach: "Launched 'Operation Wetback' in 1954, deporting more than a million Mexican immigrants.",
        good: "Supporters said it protected American jobs and restored the rule of law at the border.",
        bad: "US citizens were wrongly deported, families were broken up, and some workers died in brutal desert conditions."
      },
      lbj: {
        approach: "Signed the 1965 Immigration Act, ending race-based quotas that had favored European immigrants since 1924.",
        good: "Opened the door to immigrants from Asia, Africa, and Latin America and made America far more diverse.",
        bad: "Dramatically changed the demographic makeup of the country in ways Johnson himself had said wouldn't happen."
      },
      reagan: {
        approach: "Signed a 1986 law granting amnesty to about 3 million undocumented immigrants already in the country.",
        good: "Legalized millions of hard-working immigrants and tied amnesty to new employer sanctions.",
        bad: "Enforcement fell apart and the illegal immigrant population grew from 3 million to over 11 million in the following decades."
      },
      clinton: {
        approach: "Signed a 1996 law that tightened border enforcement, expanded deportation, and doubled the Border Patrol.",
        good: "Illegal crossings fell significantly and Border Patrol agents were nearly doubled.",
        bad: "Made it much easier to deport long-term residents for minor offenses, tearing apart families."
      },
      gwbush: {
        approach: "Proposed comprehensive immigration reform with a path to citizenship, but Congress killed the bill in 2007.",
        good: "Argued for treating immigrants humanely and tried to fix a broken system through bipartisan compromise.",
        bad: "His own party blocked his plan, and border enforcement during his term was widely seen as weak."
      },
      obama: {
        approach: "Created DACA in 2012 to protect 'Dreamers' brought to the US as children, while deporting 3 million others.",
        good: "Protected hundreds of thousands of young people brought to America as children.",
        bad: "He deported more people than any prior president, earning the nickname 'Deporter-in-Chief' from immigrant advocates."
      },
      trump: {
        approach: "Banned travel from several Muslim-majority countries, built 450 miles of border wall, and separated migrant families.",
        good: "Border crossings dropped sharply during most of his term and he forced the issue onto the national agenda.",
        bad: "The family separation policy left thousands of children in cages, and the travel ban was condemned as discriminatory."
      },
      biden: {
        approach: "Reversed the travel ban, halted border wall construction, and proposed a path to citizenship for undocumented immigrants.",
        good: "Restored humanitarian protections for refugees and DACA recipients.",
        bad: "A record 2.4 million border crossings were recorded in 2022 and overwhelmed US cities from New York to Chicago."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 5. CIVIL RIGHTS & EQUALITY
  // ═══════════════════════════════════════════════════════════
  {
    id: "civil-rights",
    topic: "Civil Rights & Equality",
    question: "How should the government treat minorities?",
    positions: {
      truman: {
        approach: "Desegregated the US military by executive order in 1948, ending racial separation in the armed forces.",
        good: "Made the military one of the first fully integrated institutions in American life.",
        bad: "Southern Democrats split off to form the Dixiecrat Party, and civilian segregation continued for another 16 years."
      },
      eisenhower: {
        approach: "Sent US Army paratroopers to Little Rock in 1957 to enforce school desegregation against the Arkansas governor.",
        good: "Showed federal courts had ultimate authority over civil rights and protected nine Black students.",
        bad: "Privately opposed the Brown v. Board ruling and moved slowly on broader civil rights legislation."
      },
      jfk: {
        approach: "Proposed the first major civil rights bill in 1963 to ban discrimination in public places and jobs.",
        good: "His televised address on civil rights helped shift the national conscience on racial equality.",
        bad: "He was reluctant to push the bill for most of his term, only acting after Birmingham and violent Southern protests."
      },
      lbj: {
        approach: "Signed the Civil Rights Act of 1964 and the Voting Rights Act of 1965, ending legal segregation.",
        good: "Banned discrimination in voting, jobs, and public places, and transformed the American South.",
        bad: "He himself predicted this would hand the South to Republicans for a generation, which it did."
      },
      nixon: {
        approach: "Signed the Philadelphia Plan in 1969, the first federal affirmative action program requiring minority hiring.",
        good: "Doubled federal contracts to minority-owned businesses and oversaw the biggest school desegregation drive in US history.",
        bad: "Also pursued a 'Southern strategy' that used coded racial appeals to win white Southern voters."
      },
      clinton: {
        approach: "Signed the Defense of Marriage Act in 1996, which defined marriage as between a man and a woman for federal purposes.",
        good: "Appointed a record number of minorities to federal positions and signed the Family and Medical Leave Act.",
        bad: "Also signed 'Don't Ask, Don't Tell' banning openly gay people from the military, which took decades to reverse."
      },
      obama: {
        approach: "Became the first president to endorse same-sex marriage in 2012 and signed hate crime protections for LGBTQ+ Americans.",
        good: "Same-sex marriage was legalized nationwide during his term and military 'Don't Ask, Don't Tell' was repealed.",
        bad: "Critics said his use of identity politics deepened racial and cultural divisions in American society."
      },
      trump: {
        approach: "Banned transgender Americans from military service and ended diversity training in the federal government.",
        good: "Signed the First Step Act, the biggest criminal justice reform in decades, helping thousands of mostly Black inmates.",
        bad: "The trans military ban was condemned as discriminatory and his response to Charlottesville drew widespread criticism."
      },
      biden: {
        approach: "Banned federal discrimination based on gender identity and signed the Respect for Marriage Act.",
        good: "First president to appoint a Black woman to the Supreme Court and enshrined same-sex marriage in law.",
        bad: "Critics said mandating gender-identity policies on schools and sports went beyond what most Americans supported."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 6. ENVIRONMENT & ENERGY
  // ═══════════════════════════════════════════════════════════
  {
    id: "environment",
    topic: "Environment & Energy",
    question: "Economic growth or protecting the planet?",
    positions: {
      nixon: {
        approach: "Created the Environmental Protection Agency in 1970 and signed the Clean Air Act and Endangered Species Act.",
        good: "Air and water pollution fell dramatically and species like the bald eagle were brought back from near-extinction.",
        bad: "Businesses said the new regulations added billions in costs and slowed industrial growth."
      },
      carter: {
        approach: "Installed solar panels on the White House and pushed aggressive conservation and renewable-energy investment.",
        good: "Cut US oil imports significantly and created the Department of Energy to coordinate long-term strategy.",
        bad: "Asking Americans to lower their thermostats and wear sweaters was mocked and hurt him politically."
      },
      reagan: {
        approach: "Removed Carter's solar panels from the White House and slashed renewable-energy research funding by over 80%.",
        good: "Unleashed oil and gas production and brought gasoline prices down to historic lows.",
        bad: "Set back US solar and wind development by roughly a decade and rolled back clean-air enforcement."
      },
      ghwbush: {
        approach: "Signed the Clean Air Act Amendments of 1990, the biggest environmental law in a generation.",
        good: "Cut acid-rain-causing sulfur emissions in half and introduced market-based pollution trading.",
        bad: "Refused to sign binding targets at the 1992 Rio Earth Summit, angering environmentalists worldwide."
      },
      clinton: {
        approach: "Protected nearly 60 million acres of federal land from logging and roadbuilding.",
        good: "Preserved vast wilderness areas and signed the Kyoto Protocol on climate change.",
        bad: "The Senate refused to ratify Kyoto 95–0, and Western states sued over the logging bans."
      },
      gwbush: {
        approach: "Pulled the US out of the Kyoto Protocol and loosened rules on power-plant emissions.",
        good: "Kept energy prices low and protected American coal, oil, and manufacturing jobs.",
        bad: "Set back global climate negotiations by years and his administration edited climate science reports."
      },
      obama: {
        approach: "Signed the Paris Climate Agreement, blocked the Keystone XL pipeline, and funded $90 billion in clean energy.",
        good: "US carbon emissions fell to 25-year lows and solar installations grew thirtyfold during his presidency.",
        bad: "Cheap natural gas did more to cut emissions than his policies, and manufacturing jobs kept leaving."
      },
      trump: {
        approach: "Withdrew from the Paris Agreement, approved the Keystone XL pipeline, and opened more federal land to drilling.",
        good: "The US became the world's biggest oil producer and energy costs for families dropped.",
        bad: "He rolled back over 100 environmental rules, and US climate commitments evaporated overnight."
      },
      biden: {
        approach: "Rejoined the Paris Agreement and signed the Inflation Reduction Act, investing $370 billion in clean energy.",
        good: "Largest climate investment in US history and spurred hundreds of new clean-energy factories.",
        bad: "Gasoline hit $5 a gallon, and critics said the act was a giant subsidy disguised as climate policy."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 7. GOVERNMENT SURVEILLANCE & POWER
  // ═══════════════════════════════════════════════════════════
  {
    id: "surveillance",
    topic: "Government Surveillance & Power",
    question: "Security or freedom?",
    positions: {
      fdr: {
        approach: "Signed Executive Order 9066 in 1942, forcing about 120,000 Japanese Americans into internment camps.",
        good: "Wartime supporters said it was a necessary precaution after Pearl Harbor.",
        bad: "Most internees were US citizens; the Supreme Court later called it one of the worst civil liberties violations in US history."
      },
      truman: {
        approach: "Required loyalty oaths from federal workers in 1947 and set up boards to investigate 'disloyal' Americans.",
        good: "Tried to head off congressional red-baiting and keep actual Soviet agents out of government.",
        bad: "Roughly 2,700 federal workers were fired and thousands resigned under clouds of suspicion, most for no good reason."
      },
      nixon: {
        approach: "Wiretapped reporters, ordered break-ins at the Democratic headquarters, and compiled an 'enemies list' of political opponents.",
        good: "His foreign policy team argued aggressive intelligence was needed to handle Cold War threats.",
        bad: "Watergate forced him to resign — the first and only president to do so — and shattered public trust in government."
      },
      gwbush: {
        approach: "Signed the Patriot Act, authorized warrantless wiretapping, and allowed 'enhanced interrogation' of terror suspects.",
        good: "No major terrorist attack struck the US homeland after 9/11 for the rest of his presidency.",
        bad: "The NSA collected records of nearly every American's phone calls, and CIA torture was later ruled illegal."
      },
      obama: {
        approach: "Continued mass surveillance programs revealed by Edward Snowden and used executive action on immigration.",
        good: "Reformed the phone-records program and closed the worst CIA interrogation sites.",
        bad: "Prosecuted more leakers than all previous presidents combined and dramatically expanded drone warfare."
      },
      trump: {
        approach: "Declared a national emergency to redirect military funds to the border wall when Congress refused.",
        good: "Supporters said he was fighting executive-branch 'deep state' actors who were obstructing his agenda.",
        bad: "Courts repeatedly blocked his emergency declarations, and his firing of inspectors general raised alarms."
      },
      biden: {
        approach: "Used federal vaccine mandates for workers at large companies and healthcare facilities.",
        good: "Tens of millions more Americans were vaccinated, helping reduce COVID deaths.",
        bad: "The Supreme Court struck down the employer mandate, calling it a major overreach of federal power."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 8. TRADE & THE ECONOMY
  // ═══════════════════════════════════════════════════════════
  {
    id: "trade",
    topic: "Trade & the Economy",
    question: "Free trade or protect American jobs?",
    positions: {
      fdr: {
        approach: "Raised some tariffs during the Depression but also signed trade agreements lowering duties with other countries.",
        good: "Trade-agreement program helped US exports grow even during the global downturn.",
        bad: "Protectionist instincts contributed to a collapse of world trade that worsened the Depression globally."
      },
      eisenhower: {
        approach: "Extended the postwar system of lower tariffs and pushed trade liberalization with allies.",
        good: "Cheaper imports and strong export growth helped fuel the 1950s boom.",
        bad: "Some American industries, like textiles, started losing out to cheaper foreign competition."
      },
      clinton: {
        approach: "Signed NAFTA in 1993, eliminating most tariffs between the US, Canada, and Mexico.",
        good: "US-Mexico-Canada trade tripled and consumers got cheaper goods.",
        bad: "An estimated 700,000 US manufacturing jobs were lost to Mexico over the next two decades."
      },
      gwbush: {
        approach: "Signed free-trade agreements with over a dozen countries including Central America, Chile, and Australia.",
        good: "US exports kept growing and American consumers had more choices at lower prices.",
        bad: "Manufacturing job losses accelerated, especially in the Midwest, leading to long-term economic decline."
      },
      obama: {
        approach: "Negotiated the 12-nation Trans-Pacific Partnership, a sweeping trade deal meant to counter China.",
        good: "Would have set high labor and environmental standards across Asia-Pacific trade.",
        bad: "The deal became so unpopular that both Hillary Clinton and Donald Trump opposed it, and Trump killed it in 2017."
      },
      trump: {
        approach: "Imposed tariffs on $370 billion of Chinese goods, renegotiated NAFTA, and slapped tariffs on steel and aluminum.",
        good: "Forced corporations to rethink supply chains and brought some manufacturing back to the US.",
        bad: "Consumers and farmers paid billions in tariff costs, and trade deficits actually grew during his term."
      },
      biden: {
        approach: "Kept most of Trump's tariffs on China and poured hundreds of billions into semiconductors and EV manufacturing.",
        good: "Chipmakers like TSMC and Intel announced over $200 billion in new US factories.",
        bad: "Allies complained the 'Buy American' provisions shut them out of US clean-energy subsidies."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 9. WELFARE & POVERTY
  // ═══════════════════════════════════════════════════════════
  {
    id: "welfare",
    topic: "Welfare & Poverty",
    question: "Help the poor or push self-sufficiency?",
    positions: {
      fdr: {
        approach: "Created Social Security in 1935 and government jobs programs that hired millions during the Depression.",
        good: "Today Social Security keeps over 22 million Americans out of poverty, including most seniors.",
        bad: "The program faces funding shortfalls as the population ages, and critics say it discourages private savings."
      },
      truman: {
        approach: "Proposed an ambitious 'Fair Deal' to expand Social Security, raise the minimum wage, and build public housing.",
        good: "Doubled the minimum wage and expanded Social Security to 10 million more Americans.",
        bad: "Most of the Fair Deal was blocked by a conservative coalition in Congress."
      },
      lbj: {
        approach: "Launched the War on Poverty with food stamps, Head Start preschool, and Medicaid in 1964–65.",
        good: "The US poverty rate fell from 19% to 12% in under a decade.",
        bad: "Some programs created long-term dependency and costs grew far beyond Johnson's promises."
      },
      nixon: {
        approach: "Proposed a guaranteed minimum income — the Family Assistance Plan — for all poor American families.",
        good: "Would have been the first true minimum-income floor in US history.",
        bad: "Conservatives killed it as too generous and liberals killed it as too stingy."
      },
      reagan: {
        approach: "Cut welfare programs, tightened work requirements, and coined the 'welfare queen' image.",
        good: "Welfare rolls dropped and many Americans returned to work.",
        bad: "Homelessness visibly surged in the 1980s and child poverty rose during his early years."
      },
      clinton: {
        approach: "Signed the 1996 welfare reform law, imposing work requirements and a five-year lifetime limit on cash aid.",
        good: "Welfare rolls fell by more than half and single-mother employment rose sharply.",
        bad: "Extreme poverty among the poorest families rose, and the reform was blamed for homelessness when jobs disappeared."
      },
      obama: {
        approach: "Expanded food stamps, extended unemployment benefits, and passed $800 billion in stimulus during the Great Recession.",
        good: "Prevented a second Great Depression and lifted millions of families out of the worst of the downturn.",
        bad: "Food-stamp rolls hit a record 47 million and the recovery was the slowest in modern US history."
      },
      biden: {
        approach: "Expanded the Child Tax Credit to up to $3,600 per child in 2021, paid monthly to nearly every family.",
        good: "Cut child poverty in half in a single year — the largest drop ever recorded in US history.",
        bad: "The expansion expired after one year and critics said monthly cash payments discouraged work."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 10. CRIME & DRUGS
  // ═══════════════════════════════════════════════════════════
  {
    id: "crime",
    topic: "Crime & Drugs",
    question: "Punish or rehabilitate?",
    positions: {
      nixon: {
        approach: "Declared a 'War on Drugs' in 1971 and classified marijuana as a Schedule I narcotic.",
        good: "Created federal treatment funding alongside tougher enforcement.",
        bad: "A Nixon aide later admitted the war on drugs was partly designed to target Black communities and anti-war activists."
      },
      reagan: {
        approach: "Signed mandatory-minimum sentencing laws and launched the 'Just Say No' anti-drug campaign.",
        good: "Crack-cocaine use declined and sent a clear message about the dangers of hard drugs.",
        bad: "The US prison population tripled and crack-cocaine sentences were 100 times harsher than powder, devastating Black communities."
      },
      clinton: {
        approach: "Signed the 1994 crime bill with a 'three strikes' rule and funding for 100,000 more police officers.",
        good: "Violent crime dropped to 30-year lows and his own wife admitted the bill hurt the communities it was meant to help.",
        bad: "Mass incarceration accelerated and the US became the world leader in locking people up."
      },
      obama: {
        approach: "Signed the Fair Sentencing Act reducing crack-powder cocaine disparities and commuted 1,715 sentences.",
        good: "The biggest single clemency effort since Franklin Roosevelt, freeing hundreds of nonviolent drug offenders.",
        bad: "Police-involved shootings and protests like Ferguson happened on his watch, and violent crime started ticking back up."
      },
      trump: {
        approach: "Signed the First Step Act in 2018, reducing some mandatory minimums and expanding early release.",
        good: "Released thousands of nonviolent offenders and the prison population dropped to a 20-year low.",
        bad: "Also pushed 'law and order' rhetoric and threatened to send troops to US cities during 2020 protests."
      },
      biden: {
        approach: "Signed the Bipartisan Safer Communities Act — the first major gun-safety law in 30 years.",
        good: "Expanded background checks and funded mental-health services and violence prevention.",
        bad: "Violent crime and fentanyl deaths stayed near record highs and retail theft plagued many cities."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 11. SPACE & TECHNOLOGY
  // ═══════════════════════════════════════════════════════════
  {
    id: "space",
    topic: "Space & Technology",
    question: "Push boundaries or invest on Earth?",
    positions: {
      eisenhower: {
        approach: "Created NASA in 1958 in response to Sputnik and funded the first US satellites and ICBMs.",
        good: "Laid the foundation for American leadership in space and modern computing.",
        bad: "Critics said his initial response to Sputnik was too slow and allowed a 'missile gap' to open up."
      },
      jfk: {
        approach: "Committed America to landing on the Moon within a decade in a famous 1962 speech.",
        good: "NASA delivered Apollo 11 in 1969 and the US won the space race against the Soviets.",
        bad: "The $25 billion program came at the expense of domestic spending and killed three astronauts in Apollo 1."
      },
      nixon: {
        approach: "Approved the Space Shuttle program in 1972 after cancelling Moon missions.",
        good: "The Shuttle flew 135 missions and built the International Space Station.",
        bad: "The program was much more expensive and less reliable than promised and killed 14 astronauts in two disasters."
      },
      reagan: {
        approach: "Proposed the Strategic Defense Initiative ('Star Wars') — a space-based missile shield against Soviet nukes.",
        good: "The sheer cost of competing with it helped bankrupt the Soviet Union.",
        bad: "The system never worked as promised and wasted tens of billions of dollars on technology that still doesn't exist."
      },
      obama: {
        approach: "Cancelled NASA's Constellation Moon program and shifted crew launches to private companies like SpaceX.",
        good: "SpaceX now launches astronauts at a fraction of past costs and has revolutionized spaceflight.",
        bad: "The US was dependent on Russian rockets for human spaceflight for nearly a decade."
      },
      trump: {
        approach: "Created the Space Force in 2019 — the first new US military branch in 72 years — and restarted Moon plans.",
        good: "The Artemis program aims to return astronauts to the Moon and Space Force gained official service status.",
        bad: "Critics said the Space Force was an expensive vanity project and much of its mission duplicated existing agencies."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 12. DEALING WITH RIVALS
  // ═══════════════════════════════════════════════════════════
  {
    id: "rivals",
    topic: "Dealing with Rivals",
    question: "Confrontation or diplomacy?",
    positions: {
      truman: {
        approach: "Created NATO and the Marshall Plan to contain Soviet expansion after World War II.",
        good: "Stopped Soviet expansion into Western Europe and rebuilt former enemies into strong democracies.",
        bad: "Locked in a 45-year Cold War, a nuclear arms race, and a divided Berlin that lasted generations."
      },
      eisenhower: {
        approach: "Relied on CIA covert operations to topple unfriendly governments in Iran (1953) and Guatemala (1954).",
        good: "Contained Soviet influence in the developing world cheaply, without sending US troops.",
        bad: "Installed dictators whose abuses fueled anti-American movements for decades, especially in Iran."
      },
      jfk: {
        approach: "Stared down the Soviets during the Cuban Missile Crisis and pushed the Limited Test Ban Treaty.",
        good: "Forced Khrushchev to withdraw nuclear missiles from Cuba without a shot being fired.",
        bad: "The world came closer to nuclear war than at any other moment in history during those 13 days."
      },
      nixon: {
        approach: "Made a historic 1972 trip to Beijing, opening US relations with Communist China for the first time.",
        good: "Split China from the Soviet bloc and laid the groundwork for decades of global economic growth.",
        bad: "China used engagement to become a wealthy economic and military rival the US is still grappling with."
      },
      carter: {
        approach: "Brokered the Camp David Accords between Israel and Egypt in 1978.",
        good: "Produced a peace deal between Israel and Egypt that has held for over 40 years.",
        bad: "The 1979 Iranian Revolution and 444-day hostage crisis happened on his watch and destroyed his presidency."
      },
      reagan: {
        approach: "Called the Soviet Union an 'evil empire' and launched a massive military buildup.",
        good: "The pressure helped force the Soviets to the bargaining table and contributed to the end of the Cold War.",
        bad: "Brought the world to the brink of nuclear war multiple times before détente with Gorbachev."
      },
      ghwbush: {
        approach: "Managed the peaceful collapse of the Soviet Union and the reunification of Germany.",
        good: "Ended the Cold War peacefully — perhaps the most successful foreign policy transition in modern history.",
        bad: "Some argue he failed to help Russia transition to democracy, setting the stage for Putin's rise."
      },
      clinton: {
        approach: "Expanded NATO eastward to include former Soviet satellites like Poland and Hungary.",
        good: "Locked in democracy and security for tens of millions of Eastern Europeans.",
        bad: "Russia saw expansion as a betrayal of Cold War promises, fueling decades of tension."
      },
      gwbush: {
        approach: "Declared after 9/11 that other nations were 'either with us or against us' in the war on terror.",
        good: "Built a broad coalition that destroyed al-Qaeda's Afghan base within weeks.",
        bad: "Alienated traditional allies over the Iraq War and left America's global reputation badly damaged."
      },
      obama: {
        approach: "Negotiated the Iran nuclear deal in 2015, restored relations with Cuba, and ordered a 'reset' with Russia.",
        good: "Iran's nuclear program was frozen and Americans could legally visit Cuba for the first time in 50 years.",
        bad: "Russia invaded Ukraine twice during his term, and critics said he drew 'red lines' he didn't enforce."
      },
      trump: {
        approach: "Met North Korea's Kim Jong-un three times, imposed tariffs on China, and questioned NATO commitments.",
        good: "First sitting US president to meet a North Korean leader, and he forced allies to spend more on defense.",
        bad: "North Korea kept building nuclear weapons and he repeatedly praised authoritarian leaders over democratic allies."
      },
      biden: {
        approach: "Rallied NATO against Russia's Ukraine invasion and led the biggest expansion of the alliance in decades.",
        good: "Finland and Sweden joined NATO, and Western weapons kept Ukraine from being conquered.",
        bad: "The war has dragged on with hundreds of billions in US aid and no clear endgame."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 13. EXECUTIVE POWER & NORMS
  // ═══════════════════════════════════════════════════════════
  {
    id: "executive-power",
    topic: "Executive Power & Norms",
    question: "Strong presidency or respect traditional limits?",
    positions: {
      fdr: {
        approach: "Broke the two-term tradition by winning four elections and tried to pack the Supreme Court with up to six new justices.",
        good: "Provided stable leadership through the Depression and World War II.",
        bad: "Congress responded with the 22nd Amendment, constitutionally limiting future presidents to two terms."
      },
      truman: {
        approach: "Tried to seize the steel mills in 1952 by executive order to prevent a strike during the Korean War.",
        good: "Argued wartime emergencies required decisive presidential action to keep the country functioning.",
        bad: "The Supreme Court ruled him unconstitutional 6–3 — a landmark limit on presidential power."
      },
      nixon: {
        approach: "Claimed 'executive privilege' to block Watergate investigators and secretly bombed Cambodia without telling Congress.",
        good: "Pushed back against what he saw as congressional overreach on foreign policy.",
        bad: "The Supreme Court ruled against him 8–0 on executive privilege and he became the only president to resign."
      },
      ford: {
        approach: "Pardoned Richard Nixon in 1974 for all federal crimes committed while in office.",
        good: "Argued it was time for the country to 'heal' after Watergate rather than endure years of prosecution.",
        bad: "The pardon outraged Americans who wanted accountability and likely cost him the 1976 election."
      },
      reagan: {
        approach: "Sold arms to Iran and illegally funneled the proceeds to Nicaraguan rebels in the Iran-Contra scandal.",
        good: "Argued he was fighting communism in Latin America when Congress refused to fund the effort.",
        bad: "14 officials were charged and the scandal revealed the White House was running a secret foreign policy."
      },
      clinton: {
        approach: "Was impeached by the House in 1998 for perjury and obstruction regarding the Monica Lewinsky affair.",
        good: "The Senate acquitted him and he maintained high job-approval ratings throughout.",
        bad: "He was disbarred, paid a settlement, and tarnished the presidency with a sordid cover-up."
      },
      gwbush: {
        approach: "Used 'signing statements' to declare he could ignore parts of laws he signed — over 1,200 challenges in all.",
        good: "Argued the president needs flexibility to defend the nation, especially after 9/11.",
        bad: "The American Bar Association condemned the practice as an end-run around Congress and the Constitution."
      },
      obama: {
        approach: "Used executive orders on immigration (DACA) and climate after Congress refused to pass his bills.",
        good: "Protected hundreds of thousands of Dreamers and advanced climate policy when Congress was deadlocked.",
        bad: "The Supreme Court struck down several of his executive actions as unconstitutional overreach."
      },
      trump: {
        approach: "Became the first president to be impeached twice and the first to refuse to concede a lost election.",
        good: "Supporters said he was fighting a political establishment that unfairly targeted him.",
        bad: "The January 6 Capitol riot by his supporters was the most serious attack on US democracy in modern history."
      },
      biden: {
        approach: "Tried to cancel up to $400 billion in student-loan debt by executive order.",
        good: "Would have provided direct relief to over 40 million Americans struggling with student debt.",
        bad: "The Supreme Court struck it down 6–3 as exceeding presidential authority."
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
