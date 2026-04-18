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
        good: "Helped the government pay down World War II debt and fund postwar programs like the veteran education benefit.",
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
      fdr: {
        approach: "Proposed a national health insurance program as part of his Economic Bill of Rights in 1944, arguing decent medical care was a right for every American.",
        good: "Put universal healthcare on the national agenda for the first time and laid the philosophical groundwork for Medicare decades later.",
        bad: "The plan never advanced in Congress and tens of millions of Americans remained uninsured throughout his presidency."
      },
      truman: {
        approach: "Proposed the first national health insurance program in 1945, covering all Americans through payroll taxes.",
        good: "Set the agenda that eventually led to Medicare and Medicaid 20 years later.",
        bad: "The American Medical Association killed the plan, calling it 'socialized medicine,' and it never passed Congress."
      },
      eisenhower: {
        approach: "Rejected government-run national health insurance but signed a law creating a program to help states fund private health coverage for low-income Americans.",
        good: "Helped millions of low-income Americans access private insurance without a large federal bureaucracy.",
        bad: "The voluntary approach left enormous gaps in coverage and did little for the working poor who earned too much to qualify."
      },
      jfk: {
        approach: "Proposed creating Medicare to give seniors government-funded health insurance, making it a major priority of his administration.",
        good: "Kept healthcare for seniors at the top of the political agenda and built the coalition that passed Medicare two years after his death.",
        bad: "The bill failed twice in Congress during his lifetime and he did not live to see it become law."
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
      ford: {
        approach: "Supported a scaled-back version of Nixon's employer-mandate health plan but prioritized fighting inflation over healthcare expansion.",
        good: "Kept the idea of employer-provided coverage as the backbone of American healthcare from collapsing during a difficult economic period.",
        bad: "No significant healthcare legislation passed during his brief term and the number of uninsured Americans continued to grow."
      },
      carter: {
        approach: "Proposed a phased-in national health insurance plan but delayed it to fight inflation first.",
        good: "Expanded Medicaid coverage and rural health clinics for underserved Americans.",
        bad: "His national health plan never passed and he lost the support of Ted Kennedy and progressive Democrats."
      },
      reagan: {
        approach: "Opposed expanding government health programs, cut Medicaid funding in his first budget, and vetoed bills that would have added new benefits to Medicare.",
        good: "Signed the law requiring hospitals to treat all emergency patients regardless of ability to pay, protecting the most vulnerable in a crisis.",
        bad: "Medicaid cuts left millions of low-income Americans without coverage and the uninsured rate climbed during his term."
      },
      ghwbush: {
        approach: "Signed a law expanding Medicaid to cover more pregnant women and young children, taking a modest step toward broader coverage without a sweeping new program.",
        good: "Extended health coverage to millions of low-income mothers and children who had previously been excluded from Medicaid.",
        bad: "Opposed major healthcare reform and did not address the roughly 35 million Americans who remained uninsured during his term."
      },
      clinton: {
        approach: "Pushed a sweeping universal healthcare plan in 1993 that would have given every American government-backed health coverage.",
        good: "Forced healthcare onto the national agenda and later signed the Children's Health Insurance Program, covering millions of kids.",
        bad: "The main plan was so complex and unpopular it died in Congress without a vote and cost Democrats the 1994 midterms."
      },
      gwbush: {
        approach: "Added prescription drug coverage to Medicare in 2003, the largest expansion of the program since its creation, paying for seniors' medications through a government-subsidized plan.",
        good: "About 45 million Medicare recipients gained some help paying for prescription drugs for the first time.",
        bad: "The law explicitly barred the government from negotiating drug prices, costing taxpayers hundreds of billions of dollars more than necessary."
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
      fdr: {
        approach: "Led the United States into World War II after Pearl Harbor, overseeing the largest military mobilization in American history and forging an Allied coalition that defeated Nazi Germany and Imperial Japan.",
        good: "The strategy of defeating Germany first while holding in the Pacific worked, and 16 million Americans in uniform helped liberate Europe and end fascism worldwide.",
        bad: "Over 400,000 Americans died in the war, and his decision to intern 120,000 Japanese Americans remains a serious wartime civil liberties failure."
      },
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
        good: "First president in decades to leave office without starting a new major war, and US-backed forces destroyed the Islamic State caliphate.",
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
      fdr: {
        approach: "Refused to significantly raise immigration quotas to admit Jewish refugees fleeing Nazi Germany, citing economic pressures and concerns about foreign spies.",
        good: "Supporters argued strict wartime limits were necessary for national security at a uniquely dangerous moment.",
        bad: "Historians estimate that thousands of Jewish refugees who were turned away died in the Holocaust."
      },
      truman: {
        approach: "Pushed to admit hundreds of thousands of European refugees and displaced persons after World War II, fighting Congress repeatedly to let them enter.",
        good: "Signed the Displaced Persons Act, admitting over 400,000 European refugees who had nowhere else to go.",
        bad: "The law initially discriminated against Jewish and Catholic refugees through technical requirements Congress built into the bill."
      },
      eisenhower: {
        approach: "Launched a mass deportation campaign in 1954, forcibly removing more than a million undocumented Mexican immigrants from the country.",
        good: "Supporters said it protected American jobs and enforced existing immigration law.",
        bad: "US citizens were wrongly deported, families were broken up, and some workers died in brutal desert conditions during removal."
      },
      jfk: {
        approach: "Proposed abolishing the race-based national-origins quota system that had capped immigration from Asia and Southern Europe since 1924, arguing it was discriminatory.",
        good: "Set the stage for the 1965 Immigration Act that opened America to immigrants from every part of the world.",
        bad: "His proposal met fierce resistance in Congress and he did not live to see it enacted."
      },
      lbj: {
        approach: "Signed the 1965 Immigration Act, abolishing the race-based quota system that had deliberately favored European immigrants since 1924 and opened entry to people from all countries.",
        good: "Opened the door to immigrants from Asia, Africa, and Latin America and made America far more diverse.",
        bad: "Dramatically changed the demographic makeup of the country in ways Johnson himself had said wouldn't happen."
      },
      nixon: {
        approach: "Maintained existing immigration levels and enforcement without major reforms, but used immigration status in some cases as a tool against political opponents.",
        good: "Kept immigration policy relatively stable during a period of economic uncertainty.",
        bad: "Immigration enforcement was at times used selectively and the underlying system remained outdated and inadequate."
      },
      ford: {
        approach: "Admitted over 130,000 Vietnamese and Southeast Asian refugees after the fall of Saigon, overcoming significant domestic opposition to bring them to the United States.",
        good: "Provided safety to more than 130,000 people fleeing communist takeover and set a precedent for accepting political refugees.",
        bad: "Many Americans opposed admitting large numbers of refugees so quickly after an unpopular war, creating social tension in receiving communities."
      },
      carter: {
        approach: "Admitted Vietnamese boat people and other refugees in record numbers and created a formal refugee admissions process, while also struggling with Cuban and Haitian refugee influxes.",
        good: "Signed the Refugee Act of 1980, creating the first systematic legal process for admitting refugees and raising the annual cap to 50,000.",
        bad: "Over 125,000 Cuban migrants who arrived in the Mariel boatlift included people with criminal records, creating a public-relations crisis."
      },
      reagan: {
        approach: "Signed a 1986 law granting amnesty and a path to legal status for about 3 million undocumented immigrants already living in the United States.",
        good: "Legalized millions of long-term residents and tied the amnesty to new sanctions on employers who hired undocumented workers.",
        bad: "Enforcement fell apart and the undocumented population grew from 3 million to over 11 million in the following decades."
      },
      ghwbush: {
        approach: "Signed a 1990 law significantly increasing the number of legal immigrants admitted each year and creating a new visa category for workers with specialized skills.",
        good: "Expanded legal immigration by about 40% and opened a path for highly skilled foreign workers to fill jobs American companies needed.",
        bad: "Critics argued the new skilled-worker visas were used by companies to pay foreign workers less than they would have had to pay Americans."
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
      fdr: {
        approach: "Signed an executive order in 1941 banning racial discrimination in the defense industry and federal agencies — but also signed the order sending Japanese Americans to internment camps.",
        good: "The ban on defense-industry discrimination opened hundreds of thousands of jobs to Black workers and created the first federal civil rights enforcement body.",
        bad: "The Japanese American internment — affecting 120,000 people, most of them US citizens — remains one of the worst civil liberties violations in American history."
      },
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
      ford: {
        approach: "Continued enforcement of existing civil rights laws but opposed busing students to achieve school integration, saying it caused more problems than it solved.",
        good: "Maintained federal enforcement of the Civil Rights Act and Voting Rights Act through a difficult political period.",
        bad: "His opposition to busing — the main tool courts were using to desegregate schools — was seen as undermining the spirit of Brown v. Board."
      },
      carter: {
        approach: "Appointed more Black Americans and women to federal judgeships than all previous presidents combined and championed the Equal Rights Amendment for women.",
        good: "Diversified the federal judiciary more than any previous president, leaving a lasting mark on which Americans interpret the law.",
        bad: "The Equal Rights Amendment fell three states short of ratification during his term and never became part of the Constitution."
      },
      reagan: {
        approach: "Opposed race-based affirmative action, signed a 20-year extension of the Voting Rights Act only after significant political pressure, and initially opposed making Martin Luther King Jr.'s birthday a national holiday.",
        good: "Did ultimately sign the King holiday into law and the Voting Rights Act extension after Congress passed both with overwhelming majorities.",
        bad: "His administration argued in court against affirmative action programs, signaling retreat from decades of progress on racial equality."
      },
      ghwbush: {
        approach: "Signed the Americans with Disabilities Act in 1990, banning discrimination against people with disabilities in employment and public life.",
        good: "The Americans with Disabilities Act extended civil rights protections to 43 million Americans with disabilities for the first time.",
        bad: "Initially vetoed the Civil Rights Act of 1991 and only signed it after Congress made changes, drawing criticism from civil rights groups."
      },
      clinton: {
        approach: "Signed the Defense of Marriage Act in 1996 defining marriage as between a man and a woman for all federal purposes, denying gay and lesbian couples federal benefits.",
        good: "Appointed more minorities and women to the federal bench than any previous president and signed the Family and Medical Leave Act.",
        bad: "Also signed 'Don't Ask, Don't Tell,' banning openly gay people from the military — a policy condemned as discriminatory that took decades to reverse."
      },
      gwbush: {
        approach: "Opposed same-sex marriage and supported a constitutional amendment to ban it, while appointing the first Black Secretary of State and National Security Advisor in history.",
        good: "Appointed the most racially diverse cabinet in US history up to that point, including two Black Secretaries of State.",
        bad: "His push for a constitutional ban on same-sex marriage was widely seen as using discrimination to win elections."
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
      fdr: {
        approach: "Created the Civilian Conservation Corps, which planted over 3 billion trees and built hundreds of state parks, treating land conservation as both a jobs program and a national priority.",
        good: "Restored millions of acres of degraded land, reduced soil erosion, and created a conservation infrastructure that still benefits Americans today.",
        bad: "Industrial pollution and coal use were largely unchecked during his presidency, as economic recovery took precedence over environmental protection."
      },
      truman: {
        approach: "Backed federal water projects and flood control but took little action on air or industrial pollution, viewing environmental concerns as secondary to economic development.",
        good: "Expanded federal management of water resources and helped prevent catastrophic flooding in several major river systems.",
        bad: "Air and water pollution worsened significantly during postwar industrial expansion with no meaningful federal response."
      },
      eisenhower: {
        approach: "Signed the first federal air pollution research law in 1955 and expanded the National Park System, though he stopped well short of imposing pollution controls on industry.",
        good: "Began the first federal study of air pollution and added millions of acres to protected federal lands.",
        bad: "Resisted regulating industrial polluters and the air quality in American cities continued to worsen through the late 1950s."
      },
      jfk: {
        approach: "Signed the first federal law providing money to states for cleaning up water pollution and called for national action on air quality, helping awaken public concern about the environment.",
        good: "His support for Rachel Carson's 'Silent Spring' helped launch the modern environmental movement.",
        bad: "He did not live to push major environmental legislation through Congress and federal enforcement remained weak."
      },
      lbj: {
        approach: "Signed the Clean Air Act of 1963, the Water Quality Act, and multiple land-conservation bills, calling a clean environment a basic right for every American.",
        good: "Signed more environmental protection legislation than any president before him and protected nearly 9 million acres of federal wilderness.",
        bad: "Industrial pollution continued to worsen through the 1960s because the early laws lacked strong enforcement teeth."
      },
      nixon: {
        approach: "Created the Environmental Protection Agency in 1970 and signed the Clean Air Act, setting strict pollution limits on factories and vehicles even over industry objections.",
        good: "Air and water pollution fell dramatically and species like the bald eagle were brought back from near-extinction.",
        bad: "Businesses said the new pollution regulations added billions in compliance costs and slowed industrial growth."
      },
      ford: {
        approach: "Signed the Energy Policy and Conservation Act after the Arab oil embargo and supported air pollution rules, but vetoed a strip-mining regulation bill as too damaging to coal production.",
        good: "Signed the first federal fuel economy standards for cars, beginning a decades-long effort to reduce oil consumption.",
        bad: "His veto of the strip-mining bill left coal country communities exposed to land destruction and water contamination."
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
      eisenhower: {
        approach: "Oversaw massive expansion of government surveillance through the National Security Agency and authorized secret reconnaissance flights over the Soviet Union.",
        good: "The surveillance programs provided critical intelligence on Soviet military capabilities that helped the US avoid miscalculations in the Cold War.",
        bad: "When a spy plane was shot down over the Soviet Union in 1960, Eisenhower was caught lying about it, causing a diplomatic crisis."
      },
      jfk: {
        approach: "Authorized the FBI to wiretap civil rights leader Martin Luther King Jr. without a warrant, and secretly taped many of his own White House conversations.",
        good: "Used intelligence tools to successfully navigate the Cuban Missile Crisis, gaining critical information about Soviet intentions.",
        bad: "The warrantless surveillance of King — a US citizen exercising constitutional rights — was an abuse of federal power exposed years later."
      },
      lbj: {
        approach: "Dramatically expanded FBI surveillance of civil rights leaders, antiwar protesters, and political opponents without court approval, while secretly deceiving the public about the Vietnam War.",
        good: "Argued surveillance was necessary to protect national security and root out communist influence in protest movements.",
        bad: "The Pentagon Papers later revealed he had systematically lied to Congress and the public about the Vietnam War, destroying trust in government."
      },
      nixon: {
        approach: "Wiretapped journalists and political rivals without court orders, ordered a break-in at Democratic headquarters, and claimed 'executive privilege' to block Congress and investigators from seeing White House documents.",
        good: "His team argued aggressive presidential intelligence-gathering was needed to handle Cold War threats and political opponents.",
        bad: "Watergate forced him to resign — the only president ever to do so — and shattered public trust in government for a generation."
      },
      ford: {
        approach: "Signed an executive order banning political assassinations by US intelligence agencies and cooperated with congressional investigations into past government surveillance abuses.",
        good: "The reforms helped restore some public trust in government and reined in the most extreme intelligence excesses of previous administrations.",
        bad: "Critics argued the assassination ban and intelligence restrictions hampered the CIA's ability to confront real threats from hostile nations."
      },
      carter: {
        approach: "Signed the Foreign Intelligence Surveillance Act in 1978, creating a secret court that the government must ask permission from before wiretapping US citizens for national security purposes.",
        good: "Created the first legal framework requiring government to get court approval before spying on Americans, establishing a lasting check on executive surveillance power.",
        bad: "The secret court approved almost every government request, leading critics to argue it was a rubber stamp rather than a meaningful check."
      },
      reagan: {
        approach: "Secretly authorized arms sales to Iran and funding of Nicaraguan rebels through channels hidden from Congress, creating a parallel foreign policy operation out of public view.",
        good: "Argued he needed flexibility to fight communism in Central America when Congress had unconstitutionally cut off the funding he needed.",
        bad: "Fourteen officials were charged and the scandal revealed the White House had been running an entire secret foreign policy hidden from the public and Congress."
      },
      ghwbush: {
        approach: "Largely operated within existing intelligence and surveillance laws but used broad executive authority in foreign policy, including the decision to invade Panama without a congressional vote.",
        good: "The Panama operation succeeded quickly and removed Manuel Noriega, a drug-trafficking dictator, from power.",
        bad: "Critics argued the Panama invasion set a precedent for presidents bypassing Congress on decisions that should require legislative approval."
      },
      clinton: {
        approach: "Signed an executive order allowing the government to read encrypted private communications and pushed for mandatory backdoors in digital devices, arguing law enforcement needed access.",
        good: "Modernized government surveillance law for the internet age and brought electronic communications under a legal framework.",
        bad: "The encryption backdoor proposal was abandoned after security experts warned it would make all Americans' data vulnerable to hackers and foreign governments."
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
      truman: {
        approach: "Championed the General Agreement on Tariffs and Trade in 1947, the first international framework for reducing tariffs and opening markets among the major democracies.",
        good: "Helped create an international trading system that supported decades of postwar economic growth among allied nations.",
        bad: "Critics argued the trade framework prioritized US allies' economic recovery over protecting American workers from foreign competition."
      },
      eisenhower: {
        approach: "Pushed for lower tariffs and open trade with allies, arguing that free commerce strengthened both the American economy and the Western alliance against the Soviet bloc.",
        good: "Cheaper imports and strong export growth helped fuel the 1950s boom.",
        bad: "Some American industries, like textiles, started losing out to cheaper foreign competition and pressed for protection."
      },
      jfk: {
        approach: "Negotiated major reductions in tariffs among Western nations through the Trade Expansion Act and pushed aggressively for open markets for American exports.",
        good: "The resulting trade negotiations produced some of the largest tariff reductions in history, boosting American exports.",
        bad: "Import competition began to erode some American manufacturing industries even as overall trade grew."
      },
      lbj: {
        approach: "Completed the major multilateral tariff-cutting talks that Kennedy had started, reducing tariffs on industrial goods by an average of 35% among the world's major economies.",
        good: "Opened large new markets for American farm and industrial products and strengthened economic ties with Western allies.",
        bad: "Growing imports of steel, textiles, and other goods began squeezing American workers in those industries."
      },
      nixon: {
        approach: "Imposed a 10% surcharge on all imports in 1971 to protect American industries and ended the dollar's link to gold, effectively reshaping the international economic order.",
        good: "The import surcharge gave struggling American manufacturers temporary breathing room and forced trading partners to renegotiate currency values.",
        bad: "The shock to the international monetary system contributed to a decade of economic instability and rising inflation."
      },
      ford: {
        approach: "Signed the Trade Act of 1974, giving the president authority to negotiate trade agreements and creating new protections for American workers hurt by import competition.",
        good: "Created Trade Adjustment Assistance to help workers who lost jobs to imports get retraining and income support.",
        bad: "The new import-competition protections were cumbersome and most affected workers found the benefits hard to access."
      },
      carter: {
        approach: "Negotiated trade deals that opened some foreign markets to American goods but also negotiated 'voluntary' restrictions on Japanese auto imports to protect Detroit.",
        good: "The auto import limits gave American car companies time to retool and invest in more fuel-efficient vehicles.",
        bad: "Protected car companies used the breathing room to raise prices rather than innovate, and consumers paid more for vehicles."
      },
      reagan: {
        approach: "Generally favored free trade but imposed selective protections on steel, semiconductors, and motorcycles, arguing they were needed to keep strategic industries alive.",
        good: "Harley-Davidson credited Reagan's temporary motorcycle tariff with saving the company, which later became profitable without ongoing protection.",
        bad: "Steel and semiconductor protections raised costs for American manufacturers who used those materials and failed to make the industries globally competitive."
      },
      ghwbush: {
        approach: "Negotiated the North American Free Trade Agreement framework and pushed for open markets, arguing that free trade created more American jobs than it cost.",
        good: "Laid the groundwork for a trade deal that tripled commerce between the US, Canada, and Mexico.",
        bad: "Labor unions warned the deal would cost American manufacturing jobs by moving production to lower-wage Mexico."
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
      eisenhower: {
        approach: "Expanded Social Security to cover 10 million more workers — including farmers and domestic workers — and raised benefits, accepting the New Deal safety net as permanent.",
        good: "Added the largest single group of new workers to Social Security since its creation, extending the safety net to millions who had been excluded.",
        bad: "Did not expand the safety net further and opposed new government assistance programs, leaving gaps in coverage for the poorest Americans."
      },
      jfk: {
        approach: "Raised the minimum wage, expanded unemployment benefits, and pushed for a broad anti-poverty initiative that laid the groundwork for Lyndon Johnson's Great Society programs.",
        good: "Raised the federal minimum wage and extended unemployment coverage to 3 million additional workers.",
        bad: "His broader anti-poverty proposals moved slowly in Congress and did not become law during his lifetime."
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
      ford: {
        approach: "Opposed expanding welfare programs and vetoed several spending bills, arguing the country could not afford to grow the safety net during a period of high inflation and recession.",
        good: "His fiscal restraint helped prevent the already high inflation of the mid-1970s from spiraling further out of control.",
        bad: "Poverty rates crept up during the 1974–75 recession and his vetoes blocked additional help for the most vulnerable Americans."
      },
      carter: {
        approach: "Proposed welfare reform to simplify the overlapping patchwork of aid programs and make benefits more consistent across states, while raising the minimum wage.",
        good: "Raised the federal minimum wage and expanded the earned income tax credit, giving working-poor families more take-home pay.",
        bad: "His welfare-simplification proposal died in Congress and the 1979–80 recession pushed millions more Americans into poverty."
      },
      reagan: {
        approach: "Cut funding to multiple welfare programs, tightened work requirements for recipients, and argued that government assistance had created dependency rather than helping people escape poverty.",
        good: "Welfare rolls dropped and many Americans returned to work during the economic expansion of the mid-1980s.",
        bad: "Homelessness visibly surged in American cities during the 1980s and child poverty rose during his early years in office."
      },
      ghwbush: {
        approach: "Signed a major expansion of the earned income tax credit for working-poor families and increased funding for Head Start, taking a modest approach to helping the poor through work incentives rather than direct assistance.",
        good: "The earned income tax credit expansion was one of the most effective anti-poverty tools in decades, helping millions of working families.",
        bad: "He resisted broader spending on poverty programs and homelessness continued to rise during his term."
      },
      clinton: {
        approach: "Signed the 1996 welfare reform law, replacing the existing cash assistance program with a new system that imposed work requirements and a five-year lifetime limit on how long anyone could receive government aid.",
        good: "Welfare rolls fell by more than half and employment among single mothers rose sharply.",
        bad: "Extreme poverty among the very poorest families increased, and the time limits pushed people off assistance even when jobs disappeared in recessions."
      },
      gwbush: {
        approach: "Signed the No Child Left Behind Act to address educational poverty and promoted faith-based organizations as welfare providers, while reauthorizing work requirements in the welfare reform law.",
        good: "Dramatically increased federal funding for education in low-income schools and established standards to measure whether poor children were learning.",
        bad: "Cuts to other social programs during his term, combined with the 2008 financial crisis, pushed millions of Americans into poverty."
      },
      obama: {
        approach: "Massively expanded government assistance during the Great Recession — extending unemployment benefits, increasing food stamp payments, and passing $800 billion in economic stimulus.",
        good: "Prevented a second Great Depression and lifted millions of families out of the worst of the economic downturn.",
        bad: "Food-stamp rolls hit a record 47 million people and the recovery was the slowest in modern US history, with many long-term unemployed never returning to work."
      },
      trump: {
        approach: "Tightened work requirements for food stamps and Medicaid recipients, arguing that the welfare state was too generous and discouraged work.",
        good: "Unemployment fell to a 50-year low before the pandemic and wages for low-income workers rose faster than at any point in the previous decade.",
        bad: "The tightened work requirements were challenged in court and the pandemic-era economic collapse wiped out millions of jobs for the lowest-income workers."
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
      fdr: {
        approach: "Maintained strict prohibition-era drug laws and expanded the federal narcotics bureau, relying on criminal punishment as the primary response to drug use.",
        good: "Federal enforcement helped suppress open drug markets in American cities during a period of social upheaval.",
        bad: "The punitive approach did nothing to address addiction and drug use and trafficking continued largely unchecked."
      },
      truman: {
        approach: "Signed the Narcotic Control Act in 1956, dramatically increasing prison sentences for drug offenses and making some drug sales punishable by death.",
        good: "Sent a strong deterrent signal about the severity of drug trafficking at a time when heroin use was rising in American cities.",
        bad: "The death penalty provision for drug sales was extreme and the harsh sentences fell disproportionately on Black Americans and the poor."
      },
      eisenhower: {
        approach: "Supported strict criminal penalties for drug use and trafficking, signing laws that stiffened mandatory minimum sentences for narcotics offenses.",
        good: "Federal enforcement was strengthened and some trafficking networks were disrupted during his term.",
        bad: "Addiction was treated purely as a moral failing and criminal matter, with no meaningful treatment or rehabilitation options provided."
      },
      jfk: {
        approach: "Commissioned the first presidential study recommending that drug addiction be treated as a public health problem rather than purely a criminal matter.",
        good: "Helped shift expert opinion toward treating addiction, laying groundwork for future treatment programs.",
        bad: "No significant policy change resulted during his abbreviated term and criminal penalties remained the dominant government response."
      },
      lbj: {
        approach: "Signed the Narcotic Addict Rehabilitation Act of 1966, for the first time allowing drug-addicted federal offenders to get treatment instead of prison.",
        good: "Created the first federal framework for treating drug addiction as a health problem and diverting addicts from prison.",
        bad: "The program was small and underfunded and the vast majority of drug offenders continued to be prosecuted and imprisoned."
      },
      nixon: {
        approach: "Declared a 'War on Drugs' in 1971, classifying marijuana as a dangerous drug with no medical use and pushing heavy prison sentences for drug offenses.",
        good: "Created the first significant federal funding for drug treatment programs alongside tougher enforcement.",
        bad: "A Nixon aide later admitted the war on drugs was partly designed to target Black communities and anti-war activists rather than address addiction."
      },
      ford: {
        approach: "Focused drug policy on treatment and prevention alongside enforcement, increasing funding for drug rehabilitation centers and education programs.",
        good: "Increased federal investment in treatment programs that provided an alternative path for people struggling with addiction.",
        bad: "Drug use continued to rise during the 1970s and the balanced approach satisfied neither those who wanted tougher enforcement nor those who wanted full decriminalization."
      },
      carter: {
        approach: "Proposed decriminalizing marijuana possession at the federal level and shifted drug policy emphasis toward treatment over punishment.",
        good: "Was the first president to seriously propose ending criminal penalties for marijuana possession, a position now held by most Americans.",
        bad: "The decriminalization proposal went nowhere in Congress and cocaine use surged dramatically during his term, partly because it was seen as glamorous and harmless."
      },
      reagan: {
        approach: "Signed laws imposing mandatory minimum prison sentences for drug offenses — meaning judges had no choice but to send even small-time drug users to prison for years.",
        good: "Sent a clear message about the dangers of hard drugs and crack-cocaine use declined during his term.",
        bad: "The US prison population tripled and crack-cocaine offenses triggered sentences 100 times harsher than powder cocaine, devastating Black communities."
      },
      ghwbush: {
        approach: "Declared drug abuse 'the gravest domestic threat facing our nation,' increased spending on drug interdiction and border enforcement, and kept harsh mandatory minimum sentences in place.",
        good: "Cocaine use among young Americans dropped significantly during the late 1980s and early 1990s.",
        bad: "Mass incarceration continued to grow and the emphasis on criminal punishment left addiction treatment severely underfunded."
      },
      clinton: {
        approach: "Signed the 1994 crime bill that created a 'three strikes' mandatory life sentence for repeat offenders and added 100,000 more police officers — while increasing prison sentences for drug crimes.",
        good: "Violent crime dropped to 30-year lows during and after his administration.",
        bad: "Mass incarceration accelerated sharply and the United States became the world leader in the share of its population locked up."
      },
      gwbush: {
        approach: "Launched a major initiative against methamphetamine use and trafficking and created drug courts as an alternative to prison for nonviolent drug offenders.",
        good: "Drug courts have been shown to reduce recidivism by 40% and save money compared to incarceration.",
        bad: "Overall incarceration for drug offenses remained at historically high levels and the prescription opioid epidemic began accelerating during his term."
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
      fdr: {
        approach: "Funded early rocket and jet research during World War II and supported the scientists whose work laid the groundwork for the postwar space program.",
        good: "Wartime investment in aeronautical research and the recruitment of European scientists built the technical foundation that made both military missiles and space exploration possible.",
        bad: "Space exploration was not a peacetime priority under his administration and no civilian space program existed during his presidency."
      },
      truman: {
        approach: "Supported military rocket research after World War II, bringing German rocket scientists to the US and funding the early programs that eventually led to the space age.",
        good: "The investment in rocket science and captured German expertise gave the US the foundation it needed to compete with the Soviets in space.",
        bad: "Space was treated primarily as a military tool and civilian scientific exploration was not yet a priority."
      },
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
      lbj: {
        approach: "Championed NASA funding and managed the Apollo program through most of its development, making the Moon mission a national priority second only to the Vietnam War.",
        good: "NASA's budget reached its all-time peak under Johnson and the first humans orbited the Moon during his final weeks in office.",
        bad: "Pressure to keep spending down while funding Vietnam led to schedule pressures that contributed to the Apollo 1 tragedy."
      },
      nixon: {
        approach: "Approved funding for the Space Shuttle program in 1972 to maintain a permanent government spaceflight capability, while canceling the later Apollo Moon missions to cut costs.",
        good: "The Shuttle flew 135 missions over 30 years and was essential to building the International Space Station.",
        bad: "The program was far more expensive and far less reliable than promised, ultimately killing 14 astronauts in two disasters."
      },
      ford: {
        approach: "Maintained NASA funding and oversaw the Apollo–Soyuz mission — the first joint US-Soviet spaceflight — as a symbol of diplomatic engagement during the Cold War.",
        good: "The joint mission showed that space cooperation was possible between rivals and helped reduce Cold War tensions.",
        bad: "NASA's budget shrank in real terms under Ford as economic pressures forced cuts across all government programs."
      },
      carter: {
        approach: "Kept the Space Shuttle program on track but reduced NASA's overall budget, shifting priorities toward practical Earth-observation satellites over deep-space exploration.",
        good: "Earth-observing satellites funded during his term contributed to weather forecasting, agriculture, and environmental monitoring that saved thousands of lives.",
        bad: "The cuts delayed the Space Shuttle's first flight and reduced funding for the basic science missions that had defined NASA's first two decades."
      },
      reagan: {
        approach: "Committed billions of government dollars to the Space Shuttle program and directed NASA to build a permanent space station, expanding the US government's presence in orbit.",
        good: "The space station became a reality under later presidents, and government investment kept the US at the frontier of human spaceflight.",
        bad: "The Challenger disaster killed seven astronauts in 1986 and revealed that NASA had been pressured by budget and schedule demands to cut corners on safety."
      },
      ghwbush: {
        approach: "Proposed an ambitious Space Exploration Initiative to return to the Moon and send Americans to Mars, but Congress refused to fund the estimated $400 to $500 billion program.",
        good: "Kept space exploration ambitions alive at a political level and oversaw the launch of the Hubble Space Telescope.",
        bad: "The Mars proposal died in Congress without a vote and NASA was left with a constrained budget and no new human spaceflight destination."
      },
      clinton: {
        approach: "Restructured the space station program in partnership with Russia to share costs, and supported a commercial space sector that was beginning to emerge.",
        good: "Bringing Russia into the International Space Station program saved billions and helped stabilize Russian space scientists who might otherwise have sold their expertise to hostile nations.",
        bad: "NASA's budget declined in real terms during his presidency and no major new human spaceflight initiative was launched."
      },
      gwbush: {
        approach: "Announced the Vision for Space Exploration in 2004, committing the US to retiring the Space Shuttle and returning Americans to the Moon by 2020 as a stepping stone to Mars.",
        good: "Gave NASA a clear new direction after the Columbia disaster and restarted serious planning for human exploration beyond Earth orbit.",
        bad: "The program was underfunded from the start and the timeline was never realistic given the budget NASA actually received."
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
      },
      biden: {
        approach: "Continued the Artemis Moon program and maintained support for commercial spaceflight companies, while increasing NASA's science and climate-monitoring satellite budgets.",
        good: "Artemis I successfully flew around the Moon in 2022, the first step toward returning humans to the lunar surface.",
        bad: "Artemis crewed landings were repeatedly delayed past original timelines and cost overruns on the Space Launch System rocket drew sharp criticism."
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
      fdr: {
        approach: "Chose alliance-building and total war over negotiation with Nazi Germany and Imperial Japan, forming a grand coalition with Britain and the Soviet Union to defeat the Axis powers.",
        good: "The Allied coalition destroyed fascism in Europe and Asia and established the United States as the world's leading power.",
        bad: "Working with Stalin as an ally legitimized and strengthened the Soviet empire that became America's next great rival."
      },
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
      lbj: {
        approach: "Escalated confrontation with North Vietnam and the Soviet-backed communist world while simultaneously pursuing diplomatic channels, funding proxy wars in Southeast Asia to contain communism.",
        good: "Kept Western Europe stable and avoided direct superpower confrontation even while fighting a major war in Asia.",
        bad: "His decision to escalate in Vietnam rather than negotiate earlier cost 58,000 American lives and fractured American society."
      },
      jfk: {
        approach: "Chose direct eyeball-to-eyeball confrontation during the Cuban Missile Crisis, blockading Cuba and demanding the Soviets remove their nuclear missiles — while secretly offering a deal.",
        good: "Forced Khrushchev to withdraw nuclear missiles from Cuba without a shot being fired.",
        bad: "The world came closer to nuclear war during those 13 days than at any other moment in history."
      },
      lbj: {
        approach: "Escalated confrontation with North Vietnam and the Soviet-backed communist world while simultaneously trying to avoid direct conflict with China and the Soviet Union.",
        good: "Kept the war from triggering direct superpower confrontation and maintained the broader Western alliance intact through a decade of Cold War tension.",
        bad: "His refusal to negotiate seriously on Vietnam until late in his presidency cost 58,000 American lives and left the country deeply divided."
      },
      nixon: {
        approach: "Chose engagement over confrontation with Communist China, making a historic 1972 visit to Beijing and opening diplomatic relations with the country the US had refused to recognize for 23 years.",
        good: "Split China from the Soviet bloc and laid the groundwork for decades of global economic growth.",
        bad: "China used engagement and trade access to become a wealthy economic and military rival the US is still struggling to manage."
      },
      ford: {
        approach: "Continued diplomatic engagement with the Soviet Union through détente, signing the Helsinki Accords that locked in human rights commitments across Europe.",
        good: "The Helsinki Accords gave Eastern European dissidents a legal tool they used to challenge Soviet repression for the next decade.",
        bad: "Critics argued détente legitimized Soviet domination of Eastern Europe and gave the Soviets more than they gave up."
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
      eisenhower: {
        approach: "Generally respected constitutional limits on presidential power and declined to assert sweeping executive authority, working with Congress rather than around it on most domestic matters.",
        good: "His restrained approach to executive power helped restore public confidence in the presidency after the tumult of the FDR and Truman years.",
        bad: "Critics argued his caution meant he missed opportunities to advance civil rights and other pressing issues where bold presidential action could have made a difference."
      },
      jfk: {
        approach: "Issued executive orders on civil rights and used broad emergency authority during the Cuban Missile Crisis without formally consulting Congress, acting quickly in what he saw as life-or-death situations.",
        good: "Swift executive action during the Cuban Missile Crisis likely prevented nuclear war without the delays that congressional consultation would have caused.",
        bad: "His use of executive orders on civil rights without legislation left the changes fragile and dependent on future presidents' goodwill."
      },
      lbj: {
        approach: "Used sweeping legislative arm-twisting and political pressure rather than unilateral executive action to push the Civil Rights Act, Voting Rights Act, and Great Society programs through Congress.",
        good: "By working through Congress rather than around it, he produced landmark legislation that has proven durable for 60 years.",
        bad: "Used deceptive Gulf of Tonkin claims to get Congress to authorize the Vietnam War — a massive escalation built on misleading evidence."
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
      carter: {
        approach: "Deliberately styled himself as a president who respected constitutional limits, refusing to exploit executive authority and trying to govern through persuasion and transparency.",
        good: "Restored some faith in the integrity of the presidency after the Watergate and Vietnam disasters.",
        bad: "His unwillingness to play political hardball made him appear ineffective and cost him crucial legislative battles."
      },
      reagan: {
        approach: "Sold arms to Iran secretly and illegally funneled the proceeds to Nicaraguan rebels through a network hidden from Congress, which had explicitly cut off that funding.",
        good: "Argued he was fighting communism in Latin America when Congress had unconstitutionally tried to tie his hands on foreign policy.",
        bad: "Fourteen officials were charged and the scandal revealed the White House had been running an entire secret foreign policy hidden from the public and Congress."
      },
      ghwbush: {
        approach: "Generally operated within constitutional norms but invoked broad executive authority to launch the Panama invasion and begin the Gulf War before seeking formal congressional authorization.",
        good: "Both operations succeeded quickly with limited American casualties, suggesting the swift executive action was well-calibrated.",
        bad: "Critics argued that bypassing Congress on military action — even successfully — set a precedent that weakened the legislative branch's role in war-making."
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
  },

  // ═══════════════════════════════════════════════════════════
  // 14. EDUCATION
  // ═══════════════════════════════════════════════════════════
  {
    id: "education",
    topic: "Education",
    question: "Should the federal government control what schools teach?",
    positions: {
      fdr: {
        approach: "Left education almost entirely to states and local communities, with no significant federal involvement in school curriculum or funding.",
        good: "Preserved local control over education and avoided creating a federal bureaucracy at a time when the government was already expanding rapidly.",
        bad: "Massive inequality between wealthy and poor school districts went unaddressed, leaving Black and poor children in severely underfunded schools."
      },
      truman: {
        approach: "Proposed federal aid to public schools to address the severe funding inequality between wealthy and poor districts, but Congress repeatedly blocked the bills.",
        good: "Put federal education funding on the political agenda for the first time and helped shift the national conversation about school quality.",
        bad: "Every proposal failed in Congress because of disagreements over funding for segregated schools and religious schools."
      },
      eisenhower: {
        approach: "Signed the National Defense Education Act in 1958 after the Soviet Sputnik launch, pouring federal money into math, science, and foreign-language education for the first time.",
        good: "Launched a generation of investment in science education that contributed directly to American dominance in the space race and technology sectors.",
        bad: "By framing it as a national security issue rather than an equity issue, the law bypassed poor and minority schools that needed help the most."
      },
      jfk: {
        approach: "Pushed hard for broad federal aid to public schools but was blocked by disputes over funding for Catholic schools and racially segregated districts.",
        good: "Built political momentum that helped Lyndon Johnson eventually pass the first major federal school-funding law.",
        bad: "No major education legislation passed during his term and funding inequality between rich and poor districts remained extreme."
      },
      lbj: {
        approach: "Signed the Elementary and Secondary Education Act in 1965, sending billions of federal dollars to low-income schools for the first time and tying funding to the newly passed civil rights requirements.",
        good: "For the first time directed substantial federal money specifically to schools serving poor and minority children, helping close some of the resource gap.",
        bad: "The law created a complex web of rules and compliance requirements that schools struggled to navigate and that grew more burdensome over time."
      },
      nixon: {
        approach: "Used federal enforcement power to push school desegregation forward — more school districts were integrated during his presidency than any other — while opposing forced busing as a desegregation tool.",
        good: "Oversaw more school desegregation in a shorter time than any other president in American history.",
        bad: "His opposition to busing — the main tool courts were ordering — was seen as trying to slow integration while claiming credit for it."
      },
      ford: {
        approach: "Opposed mandatory busing to achieve school integration and signed legislation limiting federal courts' authority to order busing across school district lines.",
        good: "Responded to widespread public opposition to busing policies that were seen as disruptive to neighborhood schools.",
        bad: "Limiting courts' busing authority effectively slowed school desegregation in many cities that remained highly segregated."
      },
      carter: {
        approach: "Created the cabinet-level Department of Education in 1979, elevating education to a top-tier federal priority for the first time and consolidating government education programs under one agency.",
        good: "Made education a full national priority with its own cabinet secretary and gave advocates a dedicated department to push federal education funding.",
        bad: "Critics argued the new department added bureaucracy without improving classroom outcomes and became a target for political battles for decades."
      },
      reagan: {
        approach: "Tried to abolish the Department of Education and return schools entirely to state and local control, arguing the federal government had no business being involved in education.",
        good: "His landmark 'A Nation at Risk' report in 1983 shocked the country into taking school quality seriously and sparked a wave of state-level reform.",
        bad: "The abolition effort failed, and federal education spending was cut in ways that reduced support for disadvantaged students."
      },
      ghwbush: {
        approach: "Proposed 'America 2000,' a voluntary national education goals program emphasizing school choice, competition, and academic standards rather than new federal spending.",
        good: "Helped establish the idea that national academic standards were needed and planted seeds that grew into the standards movement of the 1990s.",
        bad: "The plan was voluntary and underfunded, and Congress rejected the school-voucher provisions as unconstitutional use of public funds for private schools."
      },
      clinton: {
        approach: "Pushed national academic standards and voluntary national tests, while expanding Head Start and creating AmeriCorps volunteers who tutored students in low-income schools.",
        good: "Increased federal education spending significantly and helped build a bipartisan consensus that academic standards and accountability were needed.",
        bad: "His voluntary national testing proposal died in Congress amid fierce opposition from teachers unions and states-rights conservatives."
      },
      gwbush: {
        approach: "Signed the No Child Left Behind Act in 2002, requiring all public schools to test students annually in reading and math and imposing serious consequences on schools that repeatedly failed to meet targets.",
        good: "For the first time made schools publicly accountable for every student's achievement, and scores for minority students improved during the early years.",
        bad: "Schools narrowed their teaching to focus only on tested subjects, teachers felt pressured to 'teach to the test,' and thousands of schools were labeled failures under unrealistic goals."
      },
      obama: {
        approach: "Offered states money to compete for education reforms through the Race to the Top program and pushed Common Core national academic standards that defined what students should know at each grade level.",
        good: "Drove significant education reform in states that adopted new teacher-evaluation systems and academic standards in exchange for federal grants.",
        bad: "Common Core became deeply controversial and many states later pulled out, while teacher union opposition to merit pay created lasting political conflict."
      },
      trump: {
        approach: "Pushed school choice and voucher programs that would let families use public money to pay for private or religious school tuition, and tried to redirect federal education dollars to follow individual students.",
        good: "Expanded school choice options for low-income families stuck in failing schools and gave parents more say in their children's education.",
        bad: "Critics argued vouchers drained money from already underfunded public schools and sent taxpayer dollars to private schools with no public accountability."
      },
      biden: {
        approach: "Invested heavily in early childhood education and school infrastructure, proposed universal pre-kindergarten, and canceled billions in student loan debt for borrowers at for-profit colleges that had defrauded them.",
        good: "Significantly expanded access to school meals and nutrition programs, and provided the largest federal investment in school buildings in decades.",
        bad: "Universal pre-kindergarten never passed Congress and the broader student debt relief plans were repeatedly blocked by courts."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 15. GUN POLICY
  // ═══════════════════════════════════════════════════════════
  {
    id: "guns",
    topic: "Gun Policy",
    question: "Should the government restrict who can buy guns?",
    positions: {
      fdr: {
        approach: "Signed the National Firearms Act in 1934, requiring machine guns and sawed-off shotguns to be registered with the federal government and taxed — the first major federal gun law.",
        good: "Targeted the weapons most associated with organized crime violence during Prohibition and established the first federal framework for regulating certain firearms.",
        bad: "The registry was narrow and did little to reduce overall gun violence or restrict access to ordinary firearms."
      },
      truman: {
        approach: "Proposed requiring all firearms to be federally registered and licensed, an idea well ahead of its time that Congress flatly refused to consider.",
        good: "Was among the first presidents to articulate that gun ownership came with public safety responsibilities.",
        bad: "The proposal went nowhere in Congress and Truman's gun-control ambitions had no lasting legislative impact."
      },
      eisenhower: {
        approach: "Took no significant action on gun regulation, leaving existing laws in place while gun ownership expanded rapidly in postwar America.",
        good: "Respected the tradition of gun ownership in American life during a period of general social stability.",
        bad: "No progress was made on updating gun laws even as the country's firearms stock grew dramatically."
      },
      jfk: {
        approach: "Proposed requiring mail-order gun dealers to verify buyers' identities and ban the sale of military surplus weapons through the mail, after a surge in cheap imported firearms.",
        good: "Identified a real loophole — Lee Harvey Oswald bought the rifle used to kill Kennedy through a mail-order catalog — that later became a focus of reform.",
        bad: "His proposals were modest and faced fierce opposition from gun interests; none passed before his assassination."
      },
      lbj: {
        approach: "Signed the Gun Control Act of 1968 after the assassinations of Robert Kennedy and Martin Luther King Jr., banning mail-order gun sales, creating licensed gun dealers, and restricting who could buy firearms.",
        good: "Created the basic regulatory framework still in place today, including federal licensing of gun dealers and prohibitions on sales to criminals and the mentally ill.",
        bad: "The law had significant gaps — no background check system existed yet — and gun violence continued to rise in American cities."
      },
      nixon: {
        approach: "Signed legislation banning cheap imported handguns known as 'Saturday night specials,' but generally avoided major gun-control battles.",
        good: "Took the modest step of restricting the cheapest and most concealable imported handguns that were commonly used in street crime.",
        bad: "The ban was easy to circumvent by manufacturing similar guns domestically and had little lasting impact on gun violence."
      },
      ford: {
        approach: "Proposed stricter handgun restrictions in 1975 after two assassination attempts against him within three weeks, but the proposals never advanced in Congress.",
        good: "Showed personal commitment to gun reform by proposing legislation even after surviving two assassination attempts.",
        bad: "Congress ignored his proposals entirely and no new gun restrictions were enacted during his term."
      },
      carter: {
        approach: "Supported handgun restrictions and mandatory waiting periods but was unable to move any significant gun legislation through a Congress heavily influenced by gun lobby pressure.",
        good: "Kept the issue of handgun violence on the policy agenda at a time when gun deaths were rising sharply.",
        bad: "No meaningful gun legislation passed during his term and handgun homicides climbed throughout the late 1970s."
      },
      reagan: {
        approach: "Signed a 1986 law that banned new civilian sales of machine guns manufactured after that date, while simultaneously loosening restrictions on interstate transport of other firearms.",
        good: "The machine gun ban remains in effect today and has virtually eliminated new civilian machine gun ownership.",
        bad: "The same law made it significantly easier to transport firearms across state lines and weakened some existing gun dealer regulations."
      },
      ghwbush: {
        approach: "Banned the import of certain semi-automatic military-style rifles by executive order and signed the Brady Bill's predecessor into law, making some steps toward gun regulation.",
        good: "Stopped the import of over 100 models of semi-automatic rifles that had no practical sporting use.",
        bad: "The ban applied only to imports and domestic manufacturers quickly filled the gap, leaving the overall supply of such weapons unchanged."
      },
      clinton: {
        approach: "Signed the Brady Bill in 1993 requiring background checks on gun buyers at licensed dealers, and signed the federal assault weapons ban in 1994 prohibiting the manufacture of certain semi-automatic weapons and large magazines.",
        good: "The background check system has blocked over 3 million prohibited buyers from purchasing firearms since it was created.",
        bad: "The assault weapons ban had significant loopholes — guns already owned were not affected — and expired after 10 years."
      },
      gwbush: {
        approach: "Let the federal assault weapons ban expire in 2004 without renewal, and signed a law protecting gun manufacturers from lawsuits by victims of gun violence.",
        good: "Preserved the firearms industry from potentially existential litigation and respected the Second Amendment rights of law-abiding gun owners.",
        bad: "The expiration of the assault weapons ban coincided with a proliferation of military-style rifles that became weapons of choice in mass shootings."
      },
      obama: {
        approach: "Pushed Congress for universal background checks and a renewed assault weapons ban after 20 children were killed at Sandy Hook Elementary, but failed to pass any federal gun laws.",
        good: "Used executive orders to tighten background check requirements for some gun purchases and spent more on mental health and school safety than any previous president.",
        bad: "The Senate blocked his gun-control package despite overwhelming public support, a defining failure that he called the biggest frustration of his presidency."
      },
      trump: {
        approach: "Banned bump stocks — devices that allow semi-automatic rifles to fire rapidly like machine guns — by executive order after a gunman used them to kill 60 people in Las Vegas.",
        good: "Banned bump stocks faster than any president had acted on a gun-control measure and the ban was upheld by courts.",
        bad: "Opposed broader gun-control measures and his Supreme Court appointments later issued rulings expanding gun rights."
      },
      biden: {
        approach: "Signed the Bipartisan Safer Communities Act in 2022 — the first significant federal gun safety law in nearly 30 years — strengthening background checks for young buyers and funding crisis intervention programs.",
        good: "Passed the most significant federal gun safety legislation since 1994 with bipartisan Senate support.",
        bad: "The law left many major gaps untouched — no assault weapons ban, no universal background checks — and gun deaths remained at or near record levels."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 16. ABORTION & REPRODUCTIVE RIGHTS
  // ═══════════════════════════════════════════════════════════
  {
    id: "abortion",
    topic: "Abortion & Reproductive Rights",
    question: "Should the government protect or restrict abortion access?",
    positions: {
      fdr: {
        approach: "Served in an era when abortion was illegal in almost every state and never addressed the issue publicly, treating it as entirely outside the domain of federal government.",
        good: "His silence reflected the broad consensus that existed at the time and avoided federal intrusion into a matter states controlled.",
        bad: "Women faced roughly one million illegal abortions annually during his presidency, causing thousands of deaths, with no federal response or protection."
      },
      truman: {
        approach: "Served when abortion was illegal in nearly every state and never publicly addressed the issue, as it was considered entirely a private and state matter beyond federal reach.",
        good: "Avoided using the presidency to impose federal policy on a deeply personal medical decision during an era when such intervention would have been extreme.",
        bad: "The illegal status of abortion meant that wealthy women could obtain safe procedures abroad while poor women risked their lives with dangerous illegal procedures."
      },
      eisenhower: {
        approach: "Served before Roe v. Wade when abortion was illegal in most states and took no public position, treating it as a state and private matter.",
        good: "Avoided federal intrusion into a deeply personal matter that was left to individual states.",
        bad: "Women in most states had no safe legal option, and an estimated one million illegal abortions occurred annually during his presidency."
      },
      jfk: {
        approach: "Served before Roe v. Wade and took no public position on abortion, as it was considered a private and state matter outside the federal political debate.",
        good: "Did not use the presidency to push federal restrictions into an issue where states had historically had authority.",
        bad: "The absence of federal leadership left millions of women subject to dangerous illegal procedures with no path to legal reform."
      },
      lbj: {
        approach: "Served as abortion was becoming a growing social issue but never took a clear public position, leaving the matter entirely to states as legal reform debates began.",
        good: "His Great Society focus on poverty and women's health indirectly supported access to family planning services.",
        bad: "Took no leadership role as women in most states continued to face illegal and often dangerous abortion procedures."
      },
      nixon: {
        approach: "Personally expressed opposition to abortion in private conversations but did not push legislation on it, and signed family planning legislation that funded contraception for low-income Americans.",
        good: "Signed Title X, which still funds family planning and contraception services for millions of low-income Americans today.",
        bad: "His private anti-abortion views, later revealed in White House tapes, showed a president whose public silence masked personal bias on a major issue."
      },
      ford: {
        approach: "Personally opposed abortion but respected Roe v. Wade as settled law, taking a moderate position while his wife Betty publicly declared herself strongly pro-choice.",
        good: "Modeled a nuanced approach — personal opposition but legal acceptance — that reflected many Americans' complex views.",
        bad: "His ambiguity frustrated both sides and he offered no clear direction on the emerging abortion debate."
      },
      carter: {
        approach: "Personally opposed abortion as a matter of religious belief but accepted Roe v. Wade as the law of the land, while supporting the Hyde Amendment that blocked federal Medicaid funding for abortions.",
        good: "Distinguished between personal moral views and legal rights, accepting the Supreme Court's ruling while being transparent about his own faith-based opposition.",
        bad: "His support for the Hyde Amendment meant that poor women on Medicaid lost access to abortion funding, creating a two-tier system based on income."
      },
      reagan: {
        approach: "Strongly opposed abortion and called for a constitutional amendment to ban it, appointing conservative judges in hopes of eventually overturning Roe v. Wade.",
        good: "Gave voice to millions of Americans who believed abortion was morally wrong and began the judicial strategy that eventually led to Roe being overturned decades later.",
        bad: "No constitutional amendment was achieved and abortion access remained unchanged during his term, leaving both sides frustrated."
      },
      ghwbush: {
        approach: "Shifted from his earlier moderate position to an anti-abortion stance, opposing abortion in most cases and vetoing bills that would have allowed abortion funding in cases of rape and incest.",
        good: "Consistently applied his stated pro-life position across multiple legislative confrontations.",
        bad: "Vetoing rape and incest exceptions was seen as extreme by most Americans and contributed to the perception that the Republican Party had moved out of step with public opinion."
      },
      clinton: {
        approach: "Strongly supported abortion rights, vetoed the partial-birth abortion ban twice, and framed the issue as keeping abortion 'safe, legal, and rare.'",
        good: "Defended Roe v. Wade through two terms and vetoed restrictions that would have limited access for women in difficult circumstances.",
        bad: "His 'rare' framing was criticized by abortion rights advocates for treating abortion as inherently shameful rather than a legitimate medical decision."
      },
      gwbush: {
        approach: "Signed the federal Partial-Birth Abortion Ban Act in 2003, the first federal law banning a specific abortion procedure, and reinstated the global gag rule restricting US funding to foreign health organizations that discussed abortion.",
        good: "Signed the first successful federal abortion restriction in decades and it was upheld by the Supreme Court in 2007.",
        bad: "The global gag rule restricted reproductive health funding to organizations in developing countries, limiting women's access to contraception and other health services."
      },
      obama: {
        approach: "Strongly supported abortion rights, repealed the global gag rule, ensured abortion coverage in the Affordable Care Act, and opposed state-level abortion restrictions.",
        good: "Restored US funding to international organizations providing reproductive health services and protected contraception coverage for millions of American women.",
        bad: "Abortion access became more restricted in practice during his term as dozens of states passed laws limiting abortion providers, which his administration could not override."
      },
      trump: {
        approach: "Reinstated the global gag rule, appointed three Supreme Court justices whose confirmation gave the court a majority that ultimately overturned Roe v. Wade in 2022.",
        good: "Delivered on his promise to appoint justices who would overturn Roe, returning abortion policy to the states as many conservatives had sought for 50 years.",
        bad: "The overturning of Roe eliminated a constitutional right that a majority of Americans supported, triggering immediate bans in over a dozen states."
      },
      biden: {
        approach: "Strongly supported abortion rights, repealed the global gag rule again, tried to protect abortion access by executive order after Roe was overturned, and pushed Congress to codify abortion rights into federal law.",
        good: "Used every available executive tool to protect abortion access after Roe was overturned and kept reproductive rights at the center of national elections.",
        bad: "He lacked the votes in the Senate to codify abortion rights into law and could not override state bans through executive action alone."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 17. LABOR & WORKERS' RIGHTS
  // ═══════════════════════════════════════════════════════════
  {
    id: "labor",
    topic: "Labor & Workers' Rights",
    question: "Should the government protect workers and unions?",
    positions: {
      fdr: {
        approach: "Signed the National Labor Relations Act in 1935, legally guaranteeing workers the right to form unions and bargain collectively, and creating a federal board to enforce those rights against employers.",
        good: "Union membership soared from 10% to over 35% of the workforce, driving the wage growth that built the American middle class.",
        bad: "Business owners argued the law tilted the balance too far in favor of unions, leading to strikes and labor disruptions that hurt production."
      },
      truman: {
        approach: "Vetoed the Taft-Hartley Act that restricted unions' power, calling it a 'slave-labor bill,' though Congress overrode his veto and the law passed anyway.",
        good: "His veto made clear that he stood with workers and unions at a time when business interests were trying to roll back New Deal labor protections.",
        bad: "Congress overrode him and the law passed, restricting union tactics and giving states the right to pass laws that made it harder for unions to organize."
      },
      eisenhower: {
        approach: "Accepted unions as a legitimate part of American economic life and did not try to weaken the major labor laws of the New Deal era, taking a moderate approach that neither expanded nor restricted union rights.",
        good: "Labor peace during most of the 1950s contributed to broad prosperity and rising wages for working-class Americans.",
        bad: "Signed the Landrum-Griffin Act in 1959 adding new regulations on unions' internal affairs that unions saw as government overreach into their organizations."
      },
      jfk: {
        approach: "Signed an executive order in 1962 giving federal government employees the right to join unions and bargain collectively for the first time in US history.",
        good: "Extended union rights to over two million federal workers and sparked a dramatic growth in public-sector unionism across the country.",
        bad: "Federal workers still could not strike for higher wages, limiting the practical power of the new collective bargaining rights."
      },
      lbj: {
        approach: "Raised the federal minimum wage multiple times and expanded overtime protections, while supporting labor unions as part of his Great Society coalition.",
        good: "Raised the minimum wage by 25% and extended its coverage to millions of previously excluded workers in retail and service industries.",
        bad: "His administration's focus on civil rights sometimes created tension with some unions that resisted integrating their membership."
      },
      nixon: {
        approach: "Created the Occupational Safety and Health Administration in 1970, giving workers for the first time a federal agency dedicated to preventing workplace injuries and deaths.",
        good: "Workplace fatalities fell dramatically over the following decades as safety standards were enforced for the first time across industries.",
        bad: "Business groups complained that new workplace safety rules added enormous compliance costs and threatened to move some industrial work overseas."
      },
      ford: {
        approach: "Signed the Employee Retirement Income Security Act in 1974, setting federal standards for private pension plans to protect workers whose employers had mismanaged or raided their retirement savings.",
        good: "Protected the pensions of millions of American workers from corporate mismanagement for the first time.",
        bad: "The complex new pension rules led some smaller companies to drop defined-benefit pension plans altogether rather than meet the new standards."
      },
      carter: {
        approach: "Supported labor law reform that would have made it easier for unions to organize, but the bill was filibustered in the Senate even though Democrats held a large majority.",
        good: "Raised the federal minimum wage three times during his term, giving low-wage workers meaningful pay increases.",
        bad: "His signature labor law reform failed in the Senate and the defeat signaled the beginning of a long decline in union political power."
      },
      reagan: {
        approach: "Fired over 11,000 striking air traffic controllers in 1981 when they walked off the job illegally, and appointed officials to federal labor boards who were openly hostile to union organizing.",
        good: "Sent a clear message that illegal strikes would not be tolerated and helped contain inflation by holding the line on government labor costs.",
        bad: "His firing of the controllers is widely seen as the single event that most accelerated the decline of American union membership and worker bargaining power."
      },
      ghwbush: {
        approach: "Signed the Family and Medical Leave Act — then vetoed it, and it was later passed and signed by Clinton — and raised the minimum wage, taking a moderate position on workers' rights.",
        good: "Signed a minimum wage increase that gave the lowest-paid American workers their first pay raise in nearly a decade.",
        bad: "Vetoed family leave legislation twice, leaving American workers without job-protected leave for illness or newborn care for years longer than necessary."
      },
      clinton: {
        approach: "Signed the Family and Medical Leave Act giving workers up to 12 weeks of unpaid leave for family emergencies, while also signing the North American Free Trade Agreement that unions blamed for costing manufacturing jobs.",
        good: "The family leave law has been used more than 100 million times by workers who needed to care for a newborn or sick family member without losing their job.",
        bad: "Unions opposed the trade deal so fiercely that it remains a symbol of how Democratic presidents' free-trade policies worked against American workers."
      },
      gwbush: {
        approach: "Did not raise the federal minimum wage for his entire first term — the longest such gap since the minimum wage was created — and the first raise came only in the last year of his second term.",
        good: "The six-year freeze on the minimum wage was defended as protecting small businesses from higher labor costs during a period of economic uncertainty.",
        bad: "The real value of the minimum wage fell to a 50-year low during his presidency as inflation eroded its purchasing power."
      },
      obama: {
        approach: "Raised the minimum wage for federal contractors to $10.10 an hour by executive order, supported the right of workers to organize, and pushed — unsuccessfully — for a higher national minimum wage.",
        good: "His executive order immediately raised wages for hundreds of thousands of the lowest-paid federal contract workers.",
        bad: "The national minimum wage stayed at $7.25 an hour throughout his entire eight years — the same level as when he took office — because Congress would not act."
      },
      trump: {
        approach: "Expressed sympathy for workers in rallies and rhetoric but rolled back several Obama-era worker protections and did not push for a minimum wage increase while opposing union organizing efforts.",
        good: "Wages for the bottom quarter of workers rose faster under his presidency than they had in years, driven partly by the tight labor market his policies helped create.",
        bad: "Rolled back overtime pay rules that would have benefited millions of workers and appointed labor board members who ruled against workers in key organizing cases."
      },
      biden: {
        approach: "Became the first sitting president to walk a union picket line, strongly backed union organizing campaigns, and used federal contracts to favor companies that paid union wages.",
        good: "Union organizing filings reached a 40-year high under his presidency and he signed the largest investment in domestic manufacturing in decades, full of union-wage requirements.",
        bad: "The national minimum wage remained at $7.25 an hour — unchanged since 2009 — because the Senate blocked his proposed increase to $15 an hour."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 18. INFRASTRUCTURE
  // ═══════════════════════════════════════════════════════════
  {
    id: "infrastructure",
    topic: "Infrastructure",
    question: "How much should the government spend on roads, bridges, and public works?",
    positions: {
      fdr: {
        approach: "Launched the Works Progress Administration and other New Deal programs that directly hired millions of Americans to build roads, bridges, schools, libraries, and public buildings across the country.",
        good: "Built over 650,000 miles of roads, 125,000 public buildings, and 75,000 bridges, many of which are still in use today, while putting millions back to work.",
        bad: "The programs added significantly to the national debt and some critics argued that make-work projects were less efficient than letting the private sector drive recovery."
      },
      truman: {
        approach: "Pushed for federal highway funding and urban infrastructure investment but was largely blocked by Congress, which preferred cutting spending after the wartime buildup.",
        good: "Maintained and modernized federal public works during the postwar transition without a major bust in construction employment.",
        bad: "The grand infrastructure ambitions of his Fair Deal were blocked in Congress, leaving roads and bridges increasingly strained by postwar car ownership."
      },
      eisenhower: {
        approach: "Signed the Federal Aid Highway Act of 1956, creating the Interstate Highway System — the largest public works project in American history — and funding it through a federal gasoline tax.",
        good: "Built over 41,000 miles of limited-access highways that transformed American commerce, mobility, and national defense.",
        bad: "The highways demolished thousands of urban neighborhoods, disproportionately destroying Black communities, and accelerated the decline of downtowns and public transit."
      },
      jfk: {
        approach: "Proposed significant investment in public transit and urban infrastructure and called for modernizing airports and other transportation systems to match the demands of a growing economy.",
        good: "Helped establish federal involvement in urban mass transit, which eventually led to the creation of the Urban Mass Transportation Administration.",
        bad: "Most of his transit and infrastructure proposals were still working through Congress when he was assassinated."
      },
      lbj: {
        approach: "Created the Department of Housing and Urban Development and signed major transportation and urban development laws, investing in city infrastructure as part of the Great Society.",
        good: "Federal funding for mass transit began in earnest under his administration, laying the groundwork for subway systems in cities like Washington and Atlanta.",
        bad: "Urban renewal programs demolished many existing neighborhoods and displaced hundreds of thousands of low-income residents, often replacing their homes with highways or government buildings."
      },
      nixon: {
        approach: "Signed the law creating Amtrak in 1970, establishing a national passenger railroad system to save intercity rail service that private companies were abandoning as unprofitable.",
        good: "Saved intercity passenger rail service in America when it was on the verge of complete collapse and established a network that still carries millions of riders annually.",
        bad: "Amtrak was chronically underfunded from the start and never achieved the financial self-sufficiency that was promised, requiring decades of taxpayer subsidies."
      },
      ford: {
        approach: "Vetoed several major public works spending bills as too expensive and inflationary, arguing that fiscal discipline took priority over infrastructure investment during an economic crisis.",
        good: "Held the line on deficit spending at a time when inflation was a serious threat to the American economy.",
        bad: "His vetoes delayed needed repairs and upgrades to aging infrastructure and contributed to a backlog of deferred maintenance that would cost more to fix later."
      },
      carter: {
        approach: "Deferred infrastructure maintenance to control spending, which contributed to a growing backlog of bridge and road repairs, while investing in natural gas pipelines and energy infrastructure.",
        good: "Invested in energy infrastructure that helped reduce American dependence on imported oil during the energy crisis.",
        bad: "A bridge collapse in Connecticut in 1983 and other failures were later linked to the deferred maintenance that accelerated under his fiscally restrained approach."
      },
      reagan: {
        approach: "Initially cut infrastructure spending but signed a major gas-tax increase in 1982 to fund highway and transit repairs, while arguing that private capital should fund more infrastructure projects.",
        good: "The gas-tax increase funded significant repairs to the Interstate Highway System and provided funding for mass transit at a time when both were deteriorating.",
        bad: "Overall federal infrastructure investment as a share of the economy declined during his presidency and the maintenance backlog continued to grow."
      },
      ghwbush: {
        approach: "Signed the Intermodal Surface Transportation Efficiency Act of 1991, the largest transportation funding bill since the original Interstate Highway Act, investing in roads, bridges, and transit.",
        good: "Provided $151 billion for transportation over six years and for the first time gave cities flexibility to use federal highway money for mass transit projects instead.",
        bad: "The law was seen as too incremental by those who wanted a more aggressive national infrastructure vision and funding levels still fell short of the repair backlog."
      },
      clinton: {
        approach: "Invested in telecommunications and internet infrastructure, pushed for connecting schools to the internet, and maintained transportation funding, but focused more on deficit reduction than large new public works programs.",
        good: "The 'E-Rate' program he created has connected over 90% of American schools and libraries to the internet.",
        bad: "Physical infrastructure — roads, bridges, water systems — fell behind as the political focus shifted to the digital economy."
      },
      gwbush: {
        approach: "Signed transportation reauthorization bills maintaining federal highway and transit funding but faced criticism for not investing enough as the nation's infrastructure aged.",
        good: "Passed a major transportation funding bill that built and repaired thousands of miles of roads and bridges.",
        bad: "The collapse of the Interstate 35 bridge in Minneapolis in 2007 — killing 13 people — became a symbol of infrastructure neglect during his administration."
      },
      obama: {
        approach: "Included $105 billion in infrastructure spending in his economic stimulus package, invested in high-speed rail, and proposed a national infrastructure bank, but a larger infrastructure bill never passed Congress.",
        good: "The stimulus infrastructure money repaired thousands of bridges and roads, modernized schools, and laid broadband cable to underserved communities.",
        bad: "His signature high-speed rail investment produced little usable track and Congress blocked his larger infrastructure plans, leaving the repair backlog largely unaddressed."
      },
      trump: {
        approach: "Promised a $1 trillion infrastructure plan repeatedly but never produced legislation, declaring 'Infrastructure Week' so many times it became a running joke even among supporters.",
        good: "Signed a water infrastructure bill and pushed for streamlining the permitting process to make it faster and cheaper to build new projects.",
        bad: "No major infrastructure law passed during his four years and the gap between America's infrastructure needs and available funding continued to widen."
      },
      biden: {
        approach: "Signed the $1.2 trillion Infrastructure Investment and Jobs Act in 2021, the largest federal infrastructure investment since the Interstate Highway System, funding roads, bridges, broadband internet, water systems, and public transit.",
        good: "Launched the largest sustained investment in American infrastructure in 65 years and began distributing money to states for long-deferred bridge and road repairs.",
        bad: "Many projects moved slowly through permitting and planning, and critics argued that some of the spending went to projects with little economic return."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 19. NATIONAL DEBT & DEFICIT
  // ═══════════════════════════════════════════════════════════
  {
    id: "deficit",
    topic: "National Debt & Deficit",
    question: "Should the government balance the budget or is borrowing OK?",
    positions: {
      fdr: {
        approach: "Embraced massive deficit spending during the Depression, borrowing huge sums to fund jobs programs and later the war effort, abandoning his earlier promise to balance the budget.",
        good: "The spending ended mass unemployment and the debt-financed military buildup helped win World War II.",
        bad: "The national debt grew from 40% of the economy to 119% by the end of World War II, a level that took decades to pay down."
      },
      truman: {
        approach: "Worked hard to balance the budget during peacetime, running surpluses in multiple years after World War II and paying down some of the war debt.",
        good: "Produced the first postwar budget surpluses and demonstrated that the government could pay its debts rather than simply borrowing endlessly.",
        bad: "The Korean War forced large new spending that pushed the budget back into deficit before he left office."
      },
      eisenhower: {
        approach: "Made balancing the federal budget a top priority, producing three balanced budgets during his presidency and warning strongly against leaving future generations with debt.",
        good: "Kept the national debt stable as a share of the economy and demonstrated that the government could fund major projects like the Interstate Highway System without busting the budget.",
        bad: "His fiscal conservatism led him to resist spending on social programs and the recession of 1957–58 forced him to run deficits despite his commitment to balance."
      },
      jfk: {
        approach: "Accepted that the government could run deficits to stimulate growth, proposing tax cuts he believed would expand the economy enough to eventually increase tax revenues.",
        good: "Helped establish the modern economic argument that well-timed deficits can fuel growth without causing long-term fiscal damage.",
        bad: "Set a precedent for accepting deficits as normal that later administrations used to justify far less disciplined borrowing."
      },
      lbj: {
        approach: "Ran deficits as spending on the Vietnam War and the Great Society programs grew simultaneously, resisting calls to choose between guns and butter.",
        good: "Funded both the war effort and landmark social programs that reduced poverty and provided healthcare to tens of millions of Americans.",
        bad: "The simultaneous spending surge contributed to the inflation of the late 1960s and 1970s that caused years of economic pain."
      },
      nixon: {
        approach: "Declared himself a Keynesian and accepted deficit spending as a tool to manage the economy, presiding over deficits in every year of his presidency.",
        good: "Used government spending to soften the economic impact of recessions and maintain employment during a turbulent period.",
        bad: "Contributed to the inflationary spiral of the early 1970s that damaged American prosperity for nearly a decade."
      },
      ford: {
        approach: "Made cutting the deficit a priority, vetoing 66 spending bills in two and a half years to hold down government borrowing during a period of high inflation and recession.",
        good: "Demonstrated fiscal discipline during a genuinely difficult economic period and helped slow the growth of government spending.",
        bad: "His spending vetoes delayed relief for Americans struggling through the 1974–75 recession and slowed the economic recovery."
      },
      carter: {
        approach: "Sought a balanced budget and made deficit reduction a goal, cutting spending in several areas, though the deficits of the late 1970s still grew as the economy weakened.",
        good: "Kept deficits relatively modest by the standards of the era and made fiscal discipline a genuine presidential priority.",
        bad: "Inflation and interest rates soared despite his efforts and the deficit grew as stagflation cut into tax revenues."
      },
      reagan: {
        approach: "Cut taxes dramatically while increasing defense spending, tripling the national debt from roughly $1 trillion to nearly $3 trillion during his presidency.",
        good: "The economy grew strongly through the mid-1980s and he argued that future growth would eventually pay down the debt.",
        bad: "The national debt as a share of the economy doubled during his two terms, reversing decades of postwar debt reduction."
      },
      ghwbush: {
        approach: "Broke his 'no new taxes' pledge and reached a deficit-reduction deal with Congress in 1990 that raised taxes and cut spending, prioritizing the country's fiscal health over his political promises.",
        good: "The 1990 budget deal was later credited as a key step toward the budget surpluses of the Clinton years.",
        bad: "The tax increase violated his most memorable campaign promise and likely cost him re-election in 1992."
      },
      clinton: {
        approach: "Made deficit reduction a central mission, raising taxes, restraining spending, and presiding over four consecutive budget surpluses — the first since the 1960s — by the end of his second term.",
        good: "Turned a $290 billion annual deficit into a $236 billion surplus and briefly put the national debt on a path toward full repayment.",
        bad: "Republicans argued his tax increases slowed growth and that the surpluses were partly the result of the dot-com boom rather than policy choices."
      },
      gwbush: {
        approach: "Turned the Clinton-era surpluses into deficits by cutting taxes, launching two wars, and adding a prescription drug benefit to Medicare without paying for any of them.",
        good: "Prioritized tax relief for Americans and defense spending after the September 11 attacks at a moment when many economists agreed stimulus was needed.",
        bad: "Turned a projected $5.6 trillion surplus into a $2 trillion deficit over a decade, essentially transferring the cost of his tax cuts and wars to future generations."
      },
      obama: {
        approach: "Inherited a $1.4 trillion deficit from the financial crisis and stimulus spending, then steadily reduced it to under $600 billion, though the total national debt roughly doubled during his two terms.",
        good: "Cut the annual deficit by more than $1 trillion — the fastest deficit reduction in peacetime since World War II.",
        bad: "The total national debt still doubled from $10 trillion to $20 trillion during his presidency because the starting hole was so deep."
      },
      trump: {
        approach: "Signed large tax cuts and increased spending on defense, adding roughly $8 trillion to the national debt — more than any single president in history — before and during the pandemic.",
        good: "Argued that the strong pre-pandemic economy justified borrowing, and pandemic spending was necessary to prevent a complete economic collapse.",
        bad: "Added more to the national debt in four years than any previous president, with the debt growing even before the pandemic emergency spending began."
      },
      biden: {
        approach: "Reduced the annual deficit significantly in his first two years as pandemic spending expired, but signed major new spending laws that the Congressional Budget Office estimated would add trillions to long-term debt.",
        good: "The annual deficit fell from $3.1 trillion to $1.4 trillion in his first two years, the largest two-year deficit reduction in American history.",
        bad: "The major spending laws he signed — on climate, infrastructure, and semiconductors — will add significantly to the long-term national debt even after accounting for new revenues."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // 20. NUCLEAR WEAPONS
  // ═══════════════════════════════════════════════════════════
  {
    id: "nuclear",
    topic: "Nuclear Weapons",
    question: "Should America build more nuclear weapons or reduce them?",
    positions: {
      fdr: {
        approach: "Authorized the Manhattan Project in 1942, secretly directing the two-billion-dollar program that built the world's first atomic bomb before Germany or Japan could do so.",
        good: "The project succeeded, giving the United States a decisive military advantage that helped end World War II and establish American dominance in the postwar era.",
        bad: "By building the bomb first, Roosevelt started the nuclear age without any international framework to control the weapons, making an arms race with the Soviet Union nearly inevitable."
      },
      truman: {
        approach: "Made the decision to use atomic bombs on Japan in 1945, then oversaw a rapid buildup of the US nuclear arsenal and the creation of the Atomic Energy Commission to manage it.",
        good: "The bomb's use ended World War II quickly and the subsequent arsenal deterred the Soviet Union from direct military aggression against the West.",
        bad: "Started the nuclear arms race that put the world under permanent threat of annihilation and killed over 200,000 people in Hiroshima and Nagasaki."
      },
      eisenhower: {
        approach: "Pursued a massive nuclear buildup — growing the arsenal from about 1,000 to over 18,000 warheads — while proposing 'Atoms for Peace' to share civilian nuclear technology internationally.",
        good: "His deterrence strategy kept the Cold War from becoming a hot war and nuclear electricity generation was launched, providing carbon-free power.",
        bad: "The enormous arsenal created targeting strategies that would have killed hundreds of millions of people and the proliferation of civilian nuclear technology created risks of weapons spread."
      },
      jfk: {
        approach: "Navigated the Cuban Missile Crisis without nuclear war, then signed the Partial Nuclear Test Ban Treaty in 1963, stopping atmospheric nuclear testing that was spreading radioactive contamination worldwide.",
        good: "The test ban treaty ended the radioactive fallout that was contaminating the global food supply and marked the first major step toward nuclear arms control.",
        bad: "Underground testing continued and the arms race kept growing — the number of nuclear warheads continued to rise throughout the 1960s."
      },
      lbj: {
        approach: "Signed the Nuclear Non-Proliferation Treaty in 1968, committing nuclear states to eventual disarmament and non-nuclear states to not acquiring weapons.",
        good: "The treaty has been signed by 191 countries and is widely credited with preventing the spread of nuclear weapons to dozens more nations.",
        bad: "The nuclear-armed states — including the US — never fulfilled their treaty commitment to disarm, undermining the deal's moral authority."
      },
      nixon: {
        approach: "Signed the Strategic Arms Limitation Treaty with the Soviet Union in 1972, the first agreement capping the number of nuclear missiles both superpowers could deploy.",
        good: "Established for the first time that the US and Soviet Union could negotiate limits on their arsenals, reducing the risk of runaway proliferation.",
        bad: "The treaty capped missiles but not warheads, and both sides responded by putting multiple warheads on each missile, increasing destructive capacity despite the agreement."
      },
      ford: {
        approach: "Signed the Vladivostok Accord with Soviet leader Brezhnev in 1974, setting equal limits on nuclear delivery vehicles for both superpowers and extending the arms limitation framework.",
        good: "Kept the US-Soviet arms control dialogue alive during a period of political weakness at home and established numerical equality as the basis for future negotiations.",
        bad: "The accord's limits were so high — 2,400 delivery vehicles each — that they allowed continued weapons growth rather than meaningful reduction."
      },
      carter: {
        approach: "Negotiated the Strategic Arms Limitation Treaty of 1979 with the Soviet Union, which would have made significant cuts to both arsenals, but the Senate refused to ratify it after the Soviet invasion of Afghanistan.",
        good: "Negotiated the most ambitious nuclear arms reduction agreement to that point, which would have required real cuts in both superpowers' arsenals.",
        bad: "The treaty died in the Senate and the relationship collapsed so badly that the world moved closer to nuclear confrontation in the early 1980s."
      },
      reagan: {
        approach: "Launched the largest peacetime nuclear buildup in US history, then in a dramatic reversal signed the Intermediate-Range Nuclear Forces Treaty with Mikhail Gorbachev — the first agreement to actually eliminate an entire class of nuclear weapons.",
        good: "The treaty eliminated over 2,600 nuclear missiles and proved that real nuclear elimination was possible between the superpowers.",
        bad: "The early buildup brought the world closer to nuclear war than at any point since the Cuban Missile Crisis, according to intelligence assessments."
      },
      ghwbush: {
        approach: "Signed the Strategic Arms Reduction Treaty in 1991, requiring the US and Soviet Union to cut their long-range nuclear arsenals by about 30% — the first treaty to actually reduce deployed warheads.",
        good: "The treaty led to the destruction of thousands of nuclear warheads on both sides and established the model for future reductions.",
        bad: "Both countries still retained thousands of warheads — more than enough to destroy civilization — and tactical nuclear weapons were not covered."
      },
      clinton: {
        approach: "Extended and strengthened the nuclear non-proliferation regime, helped Ukraine, Kazakhstan, and Belarus give up the nuclear weapons they inherited from the Soviet Union, and signed the Comprehensive Nuclear Test Ban Treaty.",
        good: "Oversaw the largest reduction of nuclear arsenals in history and helped denuclearize three countries that inherited Soviet weapons.",
        bad: "The Senate rejected the Comprehensive Nuclear Test Ban Treaty in 1999, leaving the US able to resume testing and weakening the global norm against it."
      },
      gwbush: {
        approach: "Withdrew the US from the Anti-Ballistic Missile Treaty, pursued a new generation of smaller tactical nuclear weapons, and pulled out of negotiations with North Korea that might have stopped its nuclear program.",
        good: "Signed the Moscow Treaty reducing deployed strategic warheads to 2,200 each — the lowest level in decades.",
        bad: "Withdrawal from the Anti-Ballistic Missile Treaty alarmed Russia and China and accelerated their own weapons modernization programs."
      },
      obama: {
        approach: "Signed the New Strategic Arms Reduction Treaty with Russia, cutting deployed strategic warheads to 1,550 each, and gave a major speech calling for a world free of nuclear weapons.",
        good: "The treaty reduced deployed warheads on both sides to the lowest level since the early Cold War and was ratified with bipartisan Senate support.",
        bad: "North Korea continued to develop nuclear weapons and tested multiple devices during his presidency, while Russia began violating other arms control agreements."
      },
      trump: {
        approach: "Withdrew the US from the Intermediate-Range Nuclear Forces Treaty, citing Russian violations, and launched a major nuclear arsenal modernization program while withdrawing from nuclear talks with Iran.",
        good: "Held Russia accountable for its treaty violations rather than allowing arms control norms to erode through non-enforcement.",
        bad: "The withdrawal eliminated a key constraint on both US and Russian nuclear weapons in Europe and left no framework to prevent a new intermediate-range arms race."
      },
      biden: {
        approach: "Extended the New Strategic Arms Reduction Treaty with Russia for five years and tried to revive the Iran nuclear deal, while also pursuing a long-term nuclear modernization program.",
        good: "Kept the last remaining US-Russia nuclear arms control agreement alive, preserving mutual inspection rights and warhead limits.",
        bad: "Russia suspended its participation in the treaty in 2023 during the Ukraine war, ending mutual inspections and leaving the nuclear relationship without verified limits."
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
