// ============================================================
// PRESIDENTIAL DEEP DIVE MODE
// 15 presidents × 30 questions each = 450 questions
// Each question: { text, axis, pole, sub? }
// axis: economy | society | governance | universality | environment | expansion
// pole: left | right (same system as main quiz)
// sub (expansion only): space | technology | bioethics | growth
// ============================================================

const PRESIDENT_DATA = {

  // ═══════════════════════════════════════════════════════════
  // FRANKLIN D. ROOSEVELT (1933–1945)
  // ═══════════════════════════════════════════════════════════
  fdr: {
    name: "Franklin D. Roosevelt",
    years: "1933–1945",
    party: "Democrat",
    profile: { economy: 15, society: 35, governance: 75, universality: 25, environment: 40, space: 50, technology: 30, bioethics: 50, growth: 15 },
    questions: [
      // ECONOMY (8)
      { text: "Roosevelt created Social Security in 1935, establishing government-funded retirement pensions for all American workers.", axis: "economy", pole: "left" },
      { text: "Roosevelt hired millions of unemployed Americans through a government jobs program that paid them to build roads, bridges, and public buildings during the Great Depression — which meant the government became the employer of last resort.", axis: "economy", pole: "left" },
      { text: "Roosevelt created a government program that paid young men to plant trees, build trails, and work on national parks and forests during the Depression.", axis: "economy", pole: "left" },
      { text: "Roosevelt created a system in 1933 where the government guarantees bank deposits — so if your bank collapses, you don't lose your savings.", axis: "economy", pole: "left" },
      { text: "Roosevelt created a federal agency to police Wall Street and prevent the reckless gambling with investors' money that caused the 1929 stock market crash.", axis: "economy", pole: "left" },
      { text: "Roosevelt signed the Fair Labor Standards Act in 1938, establishing a federal minimum wage and the 40-hour work week.", axis: "economy", pole: "left" },
      { text: "Roosevelt signed the National Labor Relations Act in 1935, guaranteeing workers the right to form unions and bargain together for better wages and conditions.", axis: "economy", pole: "left" },
      { text: "Roosevelt imposed agricultural price controls during the New Deal, paying farmers to produce less so that crop prices would rise — helping farmers stay afloat but raising food costs.", axis: "economy", pole: "left" },

      // SOCIETY (4)
      { text: "Roosevelt issued Executive Order 9066 in 1942, forcing approximately 120,000 Japanese Americans — most of them US citizens — into government prison camps during World War II.", axis: "society", pole: "right" },
      { text: "Roosevelt refused to support anti-lynching law in the 1930s to avoid losing the support of Southern Democrats in Congress.", axis: "society", pole: "right" },
      { text: "Roosevelt expanded access to education and job training through New Deal programs, opening opportunities for millions of working-class Americans.", axis: "society", pole: "left" },
      { text: "Roosevelt created the Federal Housing Administration to make homeownership more affordable, but its lending guidelines effectively blocked Black families from getting loans in many neighborhoods — a practice called redlining.", axis: "society", pole: "right" },

      // GOVERNANCE (7)
      { text: "Roosevelt tried to pack the Supreme Court in 1937 by proposing to add up to six new justices after the Court struck down several of his programs — widely seen as an attempt to get friendlier judges.", axis: "governance", pole: "right" },
      { text: "Roosevelt broke the two-term tradition by running for and winning four consecutive presidential terms.", axis: "governance", pole: "right" },
      { text: "Roosevelt used executive orders extensively to implement his New Deal programs, bypassing a sometimes reluctant Congress.", axis: "governance", pole: "right" },
      { text: "Roosevelt used 'fireside chats' — radio addresses — to speak directly to the American people, bypassing traditional media gatekeepers.", axis: "governance", pole: "right" },
      { text: "Roosevelt signed an order granting the military authority to forcibly remove civilians from their homes and relocate them without any trial or legal process.", axis: "governance", pole: "right" },
      { text: "Roosevelt centralized enormous economic authority in the federal government through the National Recovery Administration, setting industry-wide rules for wages, prices, and competition.", axis: "governance", pole: "right" },
      { text: "Roosevelt created a government-owned power company, a government-owned power company that brought electricity and economic development to a poverty-stricken region of the South.", axis: "economy", pole: "left" },

      // UNIVERSALITY (5)
      { text: "Roosevelt signed the Lend-Lease Act in 1941, sending billions of dollars worth of weapons and supplies to Britain and other Allied nations before the US formally entered World War II.", axis: "universality", pole: "left" },
      { text: "Roosevelt played a central role in planning the United Nations, envisioning a permanent international body to prevent future world wars.", axis: "universality", pole: "left" },
      { text: "Roosevelt led the US into World War II after the attack on Pearl Harbor, committing to a 'Europe first' strategy alongside the Allies.", axis: "universality", pole: "left" },
      { text: "Roosevelt met with Churchill and Stalin at the Yalta Conference in 1945, negotiating how Europe would be divided after the war and how the United Nations would work.", axis: "universality", pole: "left" },
      { text: "Roosevelt turned away the MS St. Louis in 1939, a ship carrying over 900 Jewish refugees fleeing Nazi Germany, refusing them entry to the United States.", axis: "universality", pole: "right" },

      // ENVIRONMENT (2)
      { text: "Roosevelt created a government conservation program that planted over 3 billion trees and built thousands of miles of trails and fire roads in national forests.", axis: "environment", pole: "left" },
      { text: "Roosevelt established the Soil Conservation Service to combat the Dust Bowl, funding programs that taught farmers how to stop their topsoil from blowing away across the Great Plains.", axis: "environment", pole: "left" },

      // EXPANSION (4)
      { text: "Roosevelt authorized the Manhattan Project in 1942, secretly funding the development of the atomic bomb — the largest scientific undertaking in history at that time.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Roosevelt massively expanded government-funded scientific research during World War II, laying the groundwork for postwar federal investment in science and technology.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Roosevelt prioritized wartime industrial production over peacetime economic sustainability, converting the entire US economy to a war footing.", axis: "expansion", sub: "growth", pole: "left" },
      { text: "Roosevelt invested heavily in infrastructure such as dams, bridges, and electrical grids through the New Deal, transforming America's physical landscape.", axis: "expansion", sub: "growth", pole: "left" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // HARRY S. TRUMAN (1945–1953)
  // ═══════════════════════════════════════════════════════════
  truman: {
    name: "Harry S. Truman",
    years: "1945–1953",
    party: "Democrat",
    profile: { economy: 30, society: 30, governance: 70, universality: 15, environment: 48, space: 45, technology: 15, bioethics: 45, growth: 30 },
    questions: [
      // ECONOMY (5)
      { text: "Truman proposed the 'Fair Deal,' a domestic agenda that included national health insurance, an increased minimum wage, and expanded Social Security benefits.", axis: "economy", pole: "left" },
      { text: "Truman attempted to nationalize the steel industry in 1952 — meaning have the government take over and run the steel mills — to prevent a workers' strike during the Korean War.", axis: "economy", pole: "left" },
      { text: "Truman signed the Employment Act of 1946, making it the federal government's official responsibility to promote maximum employment and keep the economy stable.", axis: "economy", pole: "left" },
      { text: "Truman raised the federal minimum wage from 40 cents to 75 cents per hour in 1949.", axis: "economy", pole: "left" },
      { text: "Truman expanded Social Security benefits and coverage to an additional 10 million Americans in 1950.", axis: "economy", pole: "left" },

      // SOCIETY (5)
      { text: "Truman desegregated the United States military by executive order in 1948, ending the official policy of separating Black and white soldiers into different units.", axis: "society", pole: "left" },
      { text: "Truman established the President's Committee on Civil Rights, which recommended anti-lynching laws and abolishing poll taxes that were used to stop Black Americans from voting.", axis: "society", pole: "left" },
      { text: "Truman ordered loyalty oaths for all federal employees in 1947, requiring them to swear they were not members of any organization considered a threat to the US government.", axis: "society", pole: "right" },
      { text: "Truman supported investigations into alleged communist influence in American life, contributing to a climate of suspicion and political persecution known as McCarthyism.", axis: "society", pole: "right" },
      { text: "Truman became the first president to address the National Association for the Advancement of Colored People, speaking at the Lincoln Memorial in 1947 in support of civil rights.", axis: "society", pole: "left" },

      // GOVERNANCE (7)
      { text: "Truman dropped atomic bombs on Hiroshima and Nagasaki in August 1945, killing over 200,000 people and ending World War II.", axis: "governance", pole: "right" },
      { text: "Truman sent US troops to fight in the Korean War in 1950 without seeking a formal declaration of war from Congress.", axis: "governance", pole: "right" },
      { text: "Truman signed the National Security Act of 1947, creating the country's main spy agency (now known as the CIA), the National Security Council, and the Department of Defense.", axis: "governance", pole: "right" },
      { text: "Truman fired General Douglas MacArthur in 1951 for publicly contradicting the president's military strategy in Korea, asserting that civilian leaders — not generals — control the military.", axis: "governance", pole: "left" },
      { text: "Truman tried to seize private steel mills to prevent a strike during wartime, but the Supreme Court ruled it was unconstitutional for a president to take over private businesses that way.", axis: "governance", pole: "right" },
      { text: "Truman implemented a federal loyalty program that investigated over 3 million government employees for suspected disloyalty to the United States.", axis: "governance", pole: "right" },
      { text: "Truman used executive authority to desegregate the military, bypassing Congress entirely on a major civil rights issue.", axis: "governance", pole: "right" },

      // UNIVERSALITY (8)
      { text: "Truman launched the Marshall Plan in 1948, sending $13 billion in US aid to rebuild war-devastated European countries and prevent them from turning to communism.", axis: "universality", pole: "left" },
      { text: "Truman helped create the Western military alliance, an agreement where the US and European countries agreed that an attack on one member would be treated as an attack on all of them.", axis: "universality", pole: "left" },
      { text: "Truman announced the Truman Doctrine in 1947, pledging that the United States would provide military and financial support to any country threatened by communist takeover.", axis: "universality", pole: "left" },
      { text: "Truman recognized the State of Israel within minutes of its declaration of independence in 1948, over the objections of the State Department.", axis: "universality", pole: "left" },
      { text: "Truman organized the Berlin Airlift in 1948–49, flying food and supplies into West Berlin for nearly a year to break a Soviet blockade that was trying to starve the city into surrender.", axis: "universality", pole: "left" },
      { text: "Truman helped establish the United Nations, signing the UN Charter and pushing for US membership in the new international body.", axis: "universality", pole: "left" },
      { text: "Truman authorized the use of US military force in Korea under a the United Nations mandate rather than a on his own American declaration of war.", axis: "universality", pole: "left" },
      { text: "Truman supported the creation of the World Bank and the International Monetary Fund to stabilize the global economy after World War II.", axis: "universality", pole: "left" },

      // EXPANSION (5)
      { text: "Truman approved continued development of nuclear weapons after World War II, setting off an arms race with the Soviet Union that would define the Cold War.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Truman authorized the development of the hydrogen bomb in 1950, a weapon thousands of times more powerful than the atomic bombs dropped on Japan.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Truman established the Atomic Energy Commission to oversee both military and civilian nuclear research and development.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Truman oversaw the beginning of postwar economic expansion, with policies that encouraged mass industrialization and suburban growth.", axis: "expansion", sub: "growth", pole: "left" },
      { text: "Truman signed the National Science Foundation Act in 1950, creating a permanent federal agency to fund basic scientific research with no immediate military or commercial application.", axis: "expansion", sub: "technology", pole: "left" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // DWIGHT D. EISENHOWER (1953–1961)
  // ═══════════════════════════════════════════════════════════
  eisenhower: {
    name: "Dwight D. Eisenhower",
    years: "1953–1961",
    party: "Republican",
    profile: { economy: 55, society: 42, governance: 48, universality: 35, environment: 50, space: 15, technology: 30, bioethics: 50, growth: 25 },
    questions: [
      // ECONOMY (5)
      { text: "Eisenhower signed the Federal Aid Highway Act of 1956, spending $25 billion to build the Interstate Highway System — the largest public works project in American history at the time.", axis: "economy", pole: "left" },
      { text: "Eisenhower maintained the New Deal's core programs like Social Security and expanded them to cover an additional 10 million workers.", axis: "economy", pole: "left" },
      { text: "Eisenhower balanced the federal budget three times during his presidency, prioritizing budget discipline over new spending programs.", axis: "economy", pole: "right" },
      { text: "Eisenhower approved the St. Lawrence Seaway, a massive joint US-Canada infrastructure project connecting the Great Lakes to the Atlantic Ocean.", axis: "economy", pole: "left" },
      { text: "Eisenhower kept the top income tax rate at 91%, inherited from the Truman era, and did not push for significant tax cuts.", axis: "economy", pole: "left" },

      // SOCIETY (6)
      { text: "Eisenhower sent federal troops to Little Rock, Arkansas in 1957 to enforce school desegregation after the governor used the National Guard to block Black students from entering.", axis: "society", pole: "left" },
      { text: "Eisenhower signed the Civil Rights Act of 1957, the first federal civil rights law since the post-Civil War era, creating a commission to investigate voting rights violations.", axis: "society", pole: "left" },
      { text: "Eisenhower signed the Civil Rights Act of 1960, strengthening protections for Black voters and allowing federal monitoring of voter registration.", axis: "society", pole: "left" },
      { text: "Eisenhower signed the National Defense Education Act in 1958, directing federal money to schools specifically for science, math, and foreign languages — prompted by the US falling behind the Soviet Union in the space race.", axis: "society", pole: "left" },
      { text: "Eisenhower added 'under God' to the Pledge of Allegiance in 1954, emphasizing the nation's religious identity during the Cold War.", axis: "society", pole: "right" },
      { text: "Eisenhower appointed Earl Warren as Chief Justice, whose court would later make landmark progressive rulings on desegregation and civil liberties.", axis: "society", pole: "left" },

      // GOVERNANCE (6)
      { text: "Eisenhower warned the nation about the 'military-industrial complex' in his farewell address — cautioning that the close relationship between the Defense Department and weapons manufacturers could corrupt democratic decision-making.", axis: "governance", pole: "left" },
      { text: "Eisenhower authorized the American intelligence agents to overthrow the democratically elected government of Iran in 1953 and install a pro-US king (the Shah), primarily to protect Western oil interests.", axis: "governance", pole: "right" },
      { text: "Eisenhower authorized the American intelligence agents to overthrow the government of Guatemala in 1954, replacing a democratically elected president with a military dictator to prevent the spread of communism in Central America.", axis: "governance", pole: "right" },
      { text: "Eisenhower used the American intelligence agents for covert operations worldwide, establishing a precedent for secret government interference in foreign countries.", axis: "governance", pole: "right" },
      { text: "Eisenhower refused to hand over White House documents to Senator McCarthy's investigations, establishing the important precedent that a president can keep internal communications private.", axis: "governance", pole: "right" },
      { text: "Eisenhower used federal troops to enforce a court order in Little Rock, asserting the federal government's authority to override state resistance to desegregation.", axis: "governance", pole: "right" },

      // UNIVERSALITY (5)
      { text: "Eisenhower ended the Korean War through an armistice in 1953, accepting a divided Korea rather than escalating toward a wider conflict.", axis: "universality", pole: "left" },
      { text: "Eisenhower launched the 'Atoms for Peace' program in 1953, proposing that nuclear technology be shared internationally for peaceful energy use under United Nations oversight.", axis: "universality", pole: "left" },
      { text: "Eisenhower refused to intervene militarily in Vietnam in 1954 when France fell there, rejecting calls for US air strikes.", axis: "universality", pole: "right" },
      { text: "Eisenhower authorized covert spy agency operations in multiple countries to install pro-American governments, prioritizing US strategic interests over democratic principles.", axis: "universality", pole: "right" },
      { text: "Eisenhower announced the Eisenhower Doctrine, pledging US military assistance to Middle Eastern countries resisting communist aggression.", axis: "universality", pole: "left" },

      // ENVIRONMENT (2)
      { text: "Eisenhower signed a law creating the Arctic National Wildlife Range in 1960, setting aside 8.9 million acres of Alaskan wilderness for conservation.", axis: "environment", pole: "left" },
      { text: "Eisenhower's Interstate Highway System encouraged car-dependent suburban development, significantly increasing fossil fuel consumption.", axis: "environment", pole: "right" },

      // EXPANSION (6)
      { text: "Eisenhower created America's space program in 1958 in response to the Soviet Sputnik satellite beating America into orbit.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Eisenhower signed the law that established America's space program, making sure space exploration was run by a civilian agency rather than the military.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Eisenhower supported the development of intercontinental ballistic missiles (long-range nuclear rockets) and nuclear submarines to maintain military advantage over the Soviet Union.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Eisenhower launched a Pentagon research agency to develop advanced military technology — which later gave rise to the internet.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Eisenhower promoted nuclear power for civilian energy use through his Atoms for Peace program, funding commercial reactor development.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Eisenhower's highway system was designed in part for military transport and evacuating cities in a nuclear emergency, reflecting Cold War preparedness thinking.", axis: "expansion", sub: "growth", pole: "left" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // JOHN F. KENNEDY (1961–1963)
  // ═══════════════════════════════════════════════════════════
  jfk: {
    name: "John F. Kennedy",
    years: "1961–1963",
    party: "Democrat",
    profile: { economy: 38, society: 30, governance: 55, universality: 20, environment: 42, space: 5, technology: 20, bioethics: 42, growth: 25 },
    questions: [
      // ECONOMY (5)
      { text: "Kennedy raised the federal minimum wage from $1.00 to $1.25 per hour in 1961.", axis: "economy", pole: "left" },
      { text: "Kennedy proposed a major tax cut to stimulate economic growth, reducing the top income tax rate from 91% to 65% (passed after his death).", axis: "economy", pole: "right" },
      { text: "Kennedy created the Area Redevelopment Act to direct federal investment to parts of the country with high unemployment and economic decline.", axis: "economy", pole: "left" },
      { text: "Kennedy proposed Medicare to provide government-funded health insurance for elderly Americans, though Congress blocked the law.", axis: "economy", pole: "left" },
      { text: "Kennedy publicly confronted US Steel executives when they raised prices in 1962, pressuring them to reverse the increase to prevent inflation.", axis: "economy", pole: "left" },

      // SOCIETY (5)
      { text: "Kennedy proposed comprehensive civil rights law in 1963 that would ban racial discrimination in public places and employment (passed as the Civil Rights Act of 1964 after his death).", axis: "society", pole: "left" },
      { text: "Kennedy sent federal marshals to the University of Mississippi in 1962 to ensure the enrollment of James Meredith, the first Black student, despite violent resistance.", axis: "society", pole: "left" },
      { text: "Kennedy established the Presidential Commission on the Status of Women in 1961, documenting workplace discrimination and pushing for gender equality in federal policy.", axis: "society", pole: "left" },
      { text: "Kennedy was slow to act on civil rights in his first two years, avoiding confrontation with Southern Democrats to protect his legislative agenda.", axis: "society", pole: "right" },
      { text: "Kennedy created the President's Council on Physical Fitness, promoting public health and active lifestyles as a national priority.", axis: "society", pole: "left" },

      // GOVERNANCE (6)
      { text: "Kennedy approved the Bay of Pigs invasion in 1961, an operation by American intelligence agents that used Cuban exiles to try to overthrow Fidel Castro's government — which failed badly and embarrassed the US.", axis: "governance", pole: "right" },
      { text: "Kennedy personally managed the Cuban Missile Crisis in October 1962, choosing a naval blockade over military strikes to force the Soviet Union to remove nuclear missiles from Cuba — the closest the world came to nuclear war.", axis: "governance", pole: "right" },
      { text: "Kennedy authorized federal investigators to secretly wiretap Martin Luther King Jr. as part of surveillance operations against civil rights leaders.", axis: "governance", pole: "right" },
      { text: "Kennedy expanded the use of Special Forces and counterinsurgency tactics, giving the military more flexibility for covert and unconventional operations around the world.", axis: "governance", pole: "right" },
      { text: "Kennedy sent military advisors to South Vietnam, increasing the US presence from 900 to over 16,000 advisors by the time of his assassination.", axis: "governance", pole: "right" },
      { text: "Kennedy established the Arms Control and Disarmament Agency, creating a dedicated government office to negotiate weapons reduction agreements with other countries.", axis: "governance", pole: "left" },

      // UNIVERSALITY (7)
      { text: "Kennedy established the Peace Corps in 1961, sending American volunteers to developing nations to help with education, agriculture, and infrastructure.", axis: "universality", pole: "left" },
      { text: "Kennedy launched the Alliance for Progress in 1961, committing $20 billion in aid to Latin American countries to promote economic development and counter communism.", axis: "universality", pole: "left" },
      { text: "Kennedy negotiated the Nuclear Test Ban Treaty with the Soviet Union in 1963, banning nuclear weapons tests in the atmosphere, underwater, and in outer space.", axis: "universality", pole: "left" },
      { text: "Kennedy delivered his famous 'Ich bin ein Berliner' speech in 1963, expressing solidarity with West Berlin and committing the US to defend Western Europe.", axis: "universality", pole: "left" },
      { text: "Kennedy increased military aid to South Vietnam and supported the overthrow of South Vietnam's president Ngo Dinh Diem in 1963.", axis: "universality", pole: "right" },
      { text: "Kennedy imposed a trade ban on Cuba in 1962 that remains in effect to this day, isolating the island economically.", axis: "universality", pole: "right" },
      { text: "Kennedy expanded the Food for Peace program, using US agricultural surpluses to provide food aid to developing nations.", axis: "universality", pole: "left" },

      // EXPANSION (7)
      { text: "Kennedy committed the US to landing a man on the Moon within a decade in 1961 and massively increased the space program's budget.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Kennedy increased the space program's budget by nearly 500% to fund the Apollo moon program, making space exploration a top national priority.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Kennedy supported the development of communications satellites, leading to the creation of Telstar and global satellite communications.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Kennedy established the Office of Science and Technology in the White House to coordinate federal research across agencies.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Kennedy supported research into desalination technology, viewing turning saltwater into fresh water as a way to solve future global water shortages.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Kennedy proposed joint US-Soviet space missions, suggesting cooperation in space exploration even at the height of the Cold War.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Kennedy promoted rapid economic growth as a central policy goal, famously saying 'a rising tide lifts all boats.'", axis: "expansion", sub: "growth", pole: "left" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // LYNDON B. JOHNSON (1963–1969)
  // ═══════════════════════════════════════════════════════════
  lbj: {
    name: "Lyndon B. Johnson",
    years: "1963–1969",
    party: "Democrat",
    profile: { economy: 12, society: 10, governance: 72, universality: 38, environment: 32, space: 15, technology: 35, bioethics: 42, growth: 18 },
    questions: [
      // ECONOMY (8)
      { text: "Johnson signed Medicare into law in 1965, providing government-funded healthcare for all Americans over 65.", axis: "economy", pole: "left" },
      { text: "Johnson signed Medicaid into law in 1965, providing government-funded healthcare for low-income Americans who couldn't afford private insurance.", axis: "economy", pole: "left" },
      { text: "Johnson launched the War on Poverty in 1964, creating programs like Head Start (early childhood education), Job Corps (job training for poor youth), and community action groups to fight poverty.", axis: "economy", pole: "left" },
      { text: "Johnson dramatically expanded the federal food stamp program, allowing low-income Americans to use government vouchers to buy groceries.", axis: "economy", pole: "left" },
      { text: "Johnson signed the Elementary and Secondary Education Act in 1965, directing billions in federal funds to public schools for the first time — especially schools in poor areas.", axis: "economy", pole: "left" },
      { text: "Johnson created the Department of Housing and Urban Development (a department to deal with housing and cities), a cabinet-level agency to address housing shortages and urban poverty.", axis: "economy", pole: "left" },
      { text: "Johnson created the Department of Transportation to coordinate federal policy on roads, railways, air travel, and shipping.", axis: "economy", pole: "left" },
      { text: "Johnson pushed through a tax cut in 1964 — originally proposed by Kennedy — reducing the top income tax rate from 91% to 70%.", axis: "economy", pole: "right" },

      // SOCIETY (8)
      { text: "Johnson signed the Civil Rights Act of 1964, making it illegal to discriminate based on race, color, religion, sex, or national origin in employment and public places like hotels and restaurants.", axis: "society", pole: "left" },
      { text: "Johnson signed the Voting Rights Act of 1965, banning literacy tests and other tricks used to stop Black Americans from voting, and allowing federal oversight of elections in discriminatory states.", axis: "society", pole: "left" },
      { text: "Johnson signed the Fair Housing Act of 1968, making it illegal to refuse to sell or rent a home to someone because of their race, religion, or national origin.", axis: "society", pole: "left" },
      { text: "Johnson signed the Immigration and Nationality Act of 1965, replacing a system that heavily favored immigrants from Western Europe with one that treated people from all countries more equally.", axis: "society", pole: "left" },
      { text: "Johnson created Head Start, providing early childhood education, meals, and health screenings for young children from low-income families.", axis: "society", pole: "left" },
      { text: "Johnson appointed Thurgood Marshall as the first Black justice on the Supreme Court in 1967.", axis: "society", pole: "left" },
      { text: "Johnson signed the Higher Education Act of 1965, creating federal scholarships, student loans, and work-study programs so more Americans could afford college.", axis: "society", pole: "left" },
      { text: "Johnson established the National Endowment for the Arts and the National Endowment for the Humanities, creating federal agencies to fund museums, theaters, research, and cultural programs.", axis: "society", pole: "left" },

      // GOVERNANCE (5)
      { text: "Johnson escalated the Vietnam War based on the Gulf of Tonkin Resolution — a congressional authorization granted after an alleged attack on US ships that was later found to have been exaggerated or fabricated.", axis: "governance", pole: "right" },
      { text: "Johnson escalated US troop levels in Vietnam from 16,000 advisors to over 500,000 combat soldiers without a formal declaration of war.", axis: "governance", pole: "right" },
      { text: "Johnson used federal investigators to spy on civil rights leaders and anti-war activists, expanding domestic intelligence operations against American citizens.", axis: "governance", pole: "right" },
      { text: "Johnson's Great Society programs dramatically expanded the size and scope of the federal government in education, health, and housing.", axis: "governance", pole: "right" },
      { text: "Johnson used intense personal lobbying tactics to push landmark law through Congress, applying direct pressure to individual members of Congress.", axis: "governance", pole: "right" },

      // UNIVERSALITY (4)
      { text: "Johnson massively escalated the Vietnam War, committing over half a million American troops to fight in Southeast Asia.", axis: "universality", pole: "right" },
      { text: "Johnson signed the Immigration and Nationality Act of 1965, replacing the old quota system — which heavily favored Europeans — with one based on family reunification and job skills.", axis: "universality", pole: "left" },
      { text: "Johnson provided military and financial support to Israel during the 1967 Six-Day War.", axis: "universality", pole: "left" },
      { text: "Johnson sent US Marines to the Dominican Republic in 1965 to prevent what he claimed was a communist takeover.", axis: "universality", pole: "right" },

      // ENVIRONMENT (3)
      { text: "Johnson signed the Wilderness Act of 1964, permanently protecting 9.1 million acres of federal land from logging, mining, and development.", axis: "environment", pole: "left" },
      { text: "Johnson signed the Highway Beautification Act of 1965, limiting billboards along federal highways and promoting roadside landscaping.", axis: "environment", pole: "left" },
      { text: "Johnson signed the Clean Air Act of 1963, establishing the first federal standards to limit air pollution from factories and vehicles.", axis: "environment", pole: "left" },

      // EXPANSION (2)
      { text: "Johnson continued Kennedy's Apollo moon program and kept the space program well-funded, overseeing the missions that led to the 1969 Moon landing.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Johnson signed the Public Broadcasting Act of 1967, creating PBS (public television) and NPR (public radio) to provide educational media free from commercial pressure.", axis: "expansion", sub: "technology", pole: "left" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // RICHARD NIXON (1969–1974)
  // ═══════════════════════════════════════════════════════════
  nixon: {
    name: "Richard Nixon",
    years: "1969–1974",
    party: "Republican",
    profile: { economy: 48, society: 62, governance: 82, universality: 45, environment: 25, space: 22, technology: 30, bioethics: 50, growth: 35 },
    questions: [
      // ECONOMY (6)
      { text: "Nixon imposed wage and price controls in 1971, temporarily freezing wages and prices to combat inflation — an unusual move for a Republican who generally opposed government interference in the economy.", axis: "economy", pole: "left" },
      { text: "Nixon ended the gold standard in 1971, decoupling the US dollar from gold entirely — which meant the dollar's value would now float based on markets, fundamentally changing how global currencies work.", axis: "economy", pole: "right" },
      { text: "Nixon proposed a Family Assistance Plan that would have guaranteed every American family a minimum income from the government, though Congress rejected it.", axis: "economy", pole: "left" },
      { text: "Nixon signed the law creating workplace safety regulators (Occupational Safety and Health Administration) in 1970, which set federal rules for workplace safety — like requiring protective equipment and limiting dangerous chemical exposure.", axis: "economy", pole: "left" },
      { text: "Nixon expanded food stamp eligibility and standardized benefits nationally, dramatically increasing the number of people who could get government help buying groceries.", axis: "economy", pole: "left" },
      { text: "Nixon linked Social Security payments to the inflation rate for the first time, so that retirement benefits automatically increased when the cost of living went up.", axis: "economy", pole: "left" },

      // SOCIETY (6)
      { text: "Nixon launched the War on Drugs in 1971, dramatically increasing criminal penalties for drug possession and use — a policy critics later said was designed to target Black communities and anti-war protesters.", axis: "society", pole: "right" },
      { text: "Nixon signed Title IX in 1972, which banned gender discrimination in any school or program that receives federal funding — this transformed women's sports in American schools and colleges.", axis: "society", pole: "left" },
      { text: "Nixon implemented the Philadelphia Plan in 1969, requiring federal contractors to set specific hiring goals for minority workers — the first significant affirmative action policy in the US.", axis: "society", pole: "left" },
      { text: "Nixon ended the military draft in 1973, transitioning to an all-volunteer armed forces.", axis: "society", pole: "left" },
      { text: "Nixon pursued a 'Southern Strategy,' appealing to white racial resentment in the South to shift those voters from the Democratic Party to the Republican Party.", axis: "society", pole: "right" },
      { text: "Nixon signed the Indian Self-Determination Act, giving Native American tribes more control over their own affairs and letting them run their own federal programs.", axis: "society", pole: "left" },

      // GOVERNANCE (7)
      { text: "Nixon resigned from the presidency in August 1974 after the Watergate scandal — in which he tried to cover up a break-in at the Democratic Party's headquarters and obstruct the investigation.", axis: "governance", pole: "right" },
      { text: "Nixon created the 'Plumbers' — a secret White House unit that conducted illegal wiretapping, break-ins, and political dirty tricks against his political opponents.", axis: "governance", pole: "right" },
      { text: "Nixon fired the special prosecutor who was investigating Watergate in 1973 after both the Attorney General and his deputy quit rather than carry out the order — known as the 'Saturday Night Massacre.'", axis: "governance", pole: "right" },
      { text: "Nixon secretly bombed Cambodia in 1969–70 without notifying Congress or the American public, escalating the Vietnam War into a neighboring country.", axis: "governance", pole: "right" },
      { text: "Nixon used the IRS to target political opponents with tax audits and investigations.", axis: "governance", pole: "right" },
      { text: "Nixon maintained an 'enemies list' of political opponents, journalists, and activists targeted for government harassment.", axis: "governance", pole: "right" },
      { text: "Nixon tried to withhold White House tape recordings from investigators by claiming executive privilege, but the Supreme Court ruled that he had to hand them over.", axis: "governance", pole: "right" },

      // UNIVERSALITY (5)
      { text: "Nixon opened diplomatic relations with China in 1972 after more than two decades of mutual isolation, visiting Beijing and meeting with communist leader Mao Zedong.", axis: "universality", pole: "left" },
      { text: "Nixon chose to ease tensions with the Soviet Union through peaceful talks and trade deals instead of threats and military buildup — a policy called détente.", axis: "universality", pole: "left" },
      { text: "Nixon signed a deal with the Soviet Union in 1972 to limit nuclear weapons — the first treaty to actually put caps on how many nuclear missiles each side could have.", axis: "universality", pole: "left" },
      { text: "Nixon withdrew US troops from Vietnam, reducing forces from 500,000 to near zero during his presidency.", axis: "universality", pole: "right" },
      { text: "Nixon supported Pakistan during the 1971 war in which Bangladesh broke away, despite reports of mass atrocities, because Pakistan was a key US ally.", axis: "universality", pole: "right" },

      // ENVIRONMENT (4)
      { text: "Nixon created the Environmental Protection Agency in 1970, a dedicated federal agency with the power to set and enforce environmental regulations.", axis: "environment", pole: "left" },
      { text: "Nixon signed the Clean Air Act of 1970, setting national standards for air quality and requiring car manufacturers to dramatically cut vehicle exhaust emissions.", axis: "environment", pole: "left" },
      { text: "Nixon signed the Endangered Species Act of 1973, giving the federal government power to protect animals and plants facing extinction — even if that meant blocking development projects.", axis: "environment", pole: "left" },
      { text: "Nixon signed the National Environmental Policy Act, which requires the government to study and publish the environmental impact of any major federal project before it proceeds.", axis: "environment", pole: "left" },

      // EXPANSION (2)
      { text: "Nixon approved the Space Shuttle program, shifting America's space program away from the Apollo moon missions toward a reusable spacecraft designed for repeated launches.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Nixon signed the National Cancer Act of 1971, declaring a 'War on Cancer' and dramatically increasing federal funding for medical research into the disease.", axis: "expansion", sub: "bioethics", pole: "left" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // GERALD FORD (1974–1977)
  // ═══════════════════════════════════════════════════════════
  ford: {
    name: "Gerald Ford",
    years: "1974–1977",
    party: "Republican",
    profile: { economy: 60, society: 50, governance: 55, universality: 42, environment: 50, space: 42, technology: 45, bioethics: 50, growth: 45 },
    questions: [
      // ECONOMY (7)
      { text: "Ford vetoed 66 bills during his presidency, most of them spending measures, to combat inflation and limit government spending.", axis: "economy", pole: "right" },
      { text: "Ford launched the 'Whip Inflation Now' (WIN) campaign, asking Americans to voluntarily cut spending and save energy rather than imposing government controls — a voluntary approach widely mocked as ineffective.", axis: "economy", pole: "right" },
      { text: "Ford refused to provide a federal bailout to New York City during its financial crisis, leading to the famous headline 'Ford to City: Drop Dead.'", axis: "economy", pole: "right" },
      { text: "Ford eventually approved a federal loan guarantee package for New York City after initially refusing, preventing the city from going bankrupt.", axis: "economy", pole: "left" },
      { text: "Ford signed a law setting federal standards to protect workers' pension plans — so companies couldn't mismanage or steal the retirement savings employees had built up.", axis: "economy", pole: "left" },
      { text: "Ford removed government rules on the railroad industry, reducing government control over rail pricing and routes to allow more market competition.", axis: "economy", pole: "right" },
      { text: "Ford proposed a one-time tax rebate and temporary tax cut to stimulate the economy during the 1974–75 recession.", axis: "economy", pole: "right" },

      // SOCIETY (5)
      { text: "Ford signed the Education for All Handicapped Children Act in 1975, requiring public schools to provide a free appropriate education to children with disabilities.", axis: "society", pole: "left" },
      { text: "Ford offered a conditional clemency program for Vietnam War draft evaders and deserters, allowing them to earn their way back through community service without facing criminal punishment.", axis: "society", pole: "left" },
      { text: "Ford's wife Betty openly advocated for the Equal Rights Amendment and women's rights, influencing public conversation on gender equality.", axis: "society", pole: "left" },
      { text: "Ford opposed court-ordered busing — where students were transported across town to achieve racially balanced schools — calling it a disruptive remedy that didn't fix the real problem.", axis: "society", pole: "right" },
      { text: "Ford signed the Voting Rights Act extension in 1975, expanding voting protections to include Americans who don't speak English as their first language.", axis: "society", pole: "left" },

      // GOVERNANCE (8)
      { text: "Ford granted a full, unconditional presidential pardon to Richard Nixon in 1974, ensuring Nixon would never be prosecuted for his crimes — a deeply controversial decision that likely cost Ford the 1976 election.", axis: "governance", pole: "right" },
      { text: "Ford became president without ever being elected by the public — he was appointed vice president after Spiro Agnew resigned, then became president when Nixon resigned.", axis: "governance", pole: "right" },
      { text: "Ford signed the Helsinki Accords in 1975, an agreement between the US, Soviet Union, and 33 other countries committing all of them to respect human rights and not change European borders by force.", axis: "governance", pole: "left" },
      { text: "Ford supported the Church Committee investigations into the spy and police agencies' abuses of power, which revealed that both had been illegally spying on American citizens for decades.", axis: "governance", pole: "left" },
      { text: "Ford signed an executive order banning US government employees from carrying out political assassinations.", axis: "governance", pole: "left" },
      { text: "Ford relied heavily on vetoes to control Congressional spending, often overriding the will of the Democratic-controlled legislature.", axis: "governance", pole: "right" },
      { text: "Ford maintained a policy of reducing tensions with the Soviet Union through diplomacy and negotiation, despite pressure from conservatives to take a harder line.", axis: "governance", pole: "left" },
      { text: "Ford managed the fall of Saigon in 1975 — when South Vietnam collapsed to North Vietnam — evacuating over 130,000 South Vietnamese refugees.", axis: "governance", pole: "left" },

      // UNIVERSALITY (5)
      { text: "Ford signed the Helsinki Accords, which included human rights commitments that dissidents and activists behind the Iron Curtain later used to pressure their own governments.", axis: "universality", pole: "left" },
      { text: "Ford evacuated over 130,000 South Vietnamese refugees during the fall of Saigon, resettling many in the United States.", axis: "universality", pole: "left" },
      { text: "Ford continued easing tensions with the Soviet Union through diplomacy and arms control negotiations.", axis: "universality", pole: "left" },
      { text: "Ford declined to meet with the Dalai Lama to avoid antagonizing China, prioritizing diplomatic relations over human rights symbolism.", axis: "universality", pole: "right" },
      { text: "Ford ordered a military operation to rescue the crew of the Mayaguez, an American merchant ship seized by Cambodia in 1975.", axis: "universality", pole: "right" },

      // ENVIRONMENT (2)
      { text: "Ford signed the Toxic Substances Control Act in 1976, giving the federal environmental agency authority to regulate hazardous chemicals and require safety testing before they enter the market.", axis: "environment", pole: "left" },
      { text: "Ford signed the Resource Conservation and Recovery Act, establishing federal standards for how hazardous waste must be stored and disposed of safely.", axis: "environment", pole: "left" },

      // EXPANSION (3)
      { text: "Ford oversaw the Apollo-Soyuz Test Project in 1975, the first joint US-Soviet space mission — where American and Soviet spacecraft docked together as a symbol of reduced Cold War tensions.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Ford continued funding for the Space Shuttle program, maintaining the space program's long-term mission despite budget pressures.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Ford signed the National Science and Technology Policy Act, establishing a formal framework for how the federal government coordinates science and research policy.", axis: "expansion", sub: "technology", pole: "left" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // JIMMY CARTER (1977–1981)
  // ═══════════════════════════════════════════════════════════
  carter: {
    name: "Jimmy Carter",
    years: "1977–1981",
    party: "Democrat",
    profile: { economy: 38, society: 25, governance: 35, universality: 15, environment: 12, space: 50, technology: 52, bioethics: 52, growth: 58 },
    questions: [
      // ECONOMY (5)
      { text: "Carter removed government rules on the airline industry in 1978, ending government control of which routes airlines could fly and how much they could charge — which led to cheaper tickets but also more bankruptcies.", axis: "economy", pole: "right" },
      { text: "Carter removed government rules on the trucking and railroad industries, removing federal price controls and letting companies compete more freely on price and service.", axis: "economy", pole: "right" },
      { text: "Carter signed a tax on oil companies' windfall profits, requiring them to share some of the extra money they made when oil prices spiked during the energy crisis.", axis: "economy", pole: "left" },
      { text: "Carter created the Department of Energy in 1977 to coordinate national energy policy during the oil crisis, when skyrocketing fuel prices were hammering the economy.", axis: "economy", pole: "left" },
      { text: "Carter legalized homebrewing of beer and wine, lifting a federal restriction that had been in place since Prohibition.", axis: "economy", pole: "right" },

      // SOCIETY (4)
      { text: "Carter created the Department of Education in 1979, making education a cabinet-level priority with its own dedicated federal secretary.", axis: "society", pole: "left" },
      { text: "Carter appointed more women and minorities to federal positions than any previous president.", axis: "society", pole: "left" },
      { text: "Carter granted amnesty to Vietnam War draft evaders on his first day in office, allowing men who had fled the country or refused military service to return without prosecution.", axis: "society", pole: "left" },
      { text: "Carter publicly supported the Equal Rights Amendment, which would have added a guarantee of gender equality to the US Constitution.", axis: "society", pole: "left" },

      // GOVERNANCE (5)
      { text: "Carter made human rights a cornerstone of US foreign policy, reducing aid to foreign governments that tortured or imprisoned people for political reasons.", axis: "governance", pole: "left" },
      { text: "Carter established the federal disaster response agency (Federal Emergency Management Agency) in 1979, creating a dedicated federal agency to coordinate disaster response when hurricanes, floods, and other emergencies hit.", axis: "governance", pole: "left" },
      { text: "Carter signed a law requiring the government to get a special court's approval before conducting electronic surveillance on Americans — preventing secret wiretapping without oversight.", axis: "governance", pole: "left" },
      { text: "Carter's presidency saw the Iran hostage crisis, in which 52 American diplomats were seized and held by Iranian revolutionaries for 444 days without successful rescue.", axis: "governance", pole: "left" },
      { text: "Carter authorized a military rescue mission to free the American hostages in Iran, but it ended in disaster when helicopters broke down in the desert and eight soldiers died.", axis: "governance", pole: "right" },

      // UNIVERSALITY (8)
      { text: "Carter brokered the Camp David Accords in 1978, personally mediating talks between Israel and Egypt that produced a historic peace treaty — the first between Israel and an Arab country.", axis: "universality", pole: "left" },
      { text: "Carter signed the Panama Canal Treaties, agreeing to return control of the Panama Canal to Panama by 1999, giving up a major US-controlled territory.", axis: "universality", pole: "left" },
      { text: "Carter imposed a ban on grain sales to the Soviet Union after its invasion of Afghanistan in 1979, stopping US wheat exports as a form of economic pressure.", axis: "universality", pole: "right" },
      { text: "Carter boycotted the 1980 Moscow Olympics in protest of the Soviet invasion of Afghanistan.", axis: "universality", pole: "right" },
      { text: "Carter made human rights the centerpiece of American foreign policy, criticizing allied dictatorships as well as communist regimes.", axis: "universality", pole: "left" },
      { text: "Carter normalized diplomatic relations with the People's Republic of China in 1979, formally switching US recognition from Taiwan to mainland China.", axis: "universality", pole: "left" },
      { text: "Carter negotiated a deal with the Soviet Union to cap the number of nuclear missiles each side could build, though the Senate never approved it.", axis: "universality", pole: "left" },
      { text: "Carter withdrew US support from Nicaraguan dictator Anastasio Somoza, refusing to prop up a government that was violently repressing its own people.", axis: "universality", pole: "left" },

      // ENVIRONMENT (5)
      { text: "Carter installed solar panels on the White House roof in 1979, symbolically promoting renewable energy as a national priority.", axis: "environment", pole: "left" },
      { text: "Carter signed the Alaska National Interest Lands Conservation Act in 1980, protecting over 100 million acres of Alaskan wilderness from development — the largest conservation act in US history.", axis: "environment", pole: "left" },
      { text: "Carter promoted energy conservation during the oil crisis, urging Americans to lower their thermostats, drive less, and reduce consumption.", axis: "environment", pole: "left" },
      { text: "Carter invested federal funds in renewable energy research and development, including solar and wind power.", axis: "environment", pole: "left" },
      { text: "Carter managed the Three Mile Island nuclear accident in 1979, the worst commercial nuclear incident in US history, overseeing the federal emergency response.", axis: "environment", pole: "left" },

      // EXPANSION (3)
      { text: "Carter reduced the space program's budget and did not pursue major new space exploration initiatives, focusing resources on domestic priorities.", axis: "expansion", sub: "space", pole: "right" },
      { text: "Carter promoted energy research and development as a national security priority, investing in alternative fuel technologies.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Carter emphasized sustainability and conservation over unconstrained economic growth during the energy crisis.", axis: "expansion", sub: "growth", pole: "right" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // RONALD REAGAN (1981–1989)
  // ═══════════════════════════════════════════════════════════
  reagan: {
    name: "Ronald Reagan",
    years: "1981–1989",
    party: "Republican",
    profile: { economy: 88, society: 70, governance: 45, universality: 62, environment: 78, space: 25, technology: 18, bioethics: 50, growth: 15 },
    questions: [
      // ECONOMY (7)
      { text: "Reagan cut the top marginal income tax rate from 70% to 28%, the largest tax cut in American history at the time.", axis: "economy", pole: "right" },
      { text: "Reagan fired over 11,000 air traffic controllers who went on strike for better pay in 1981, and permanently banned them from ever working for the federal government again.", axis: "economy", pole: "right" },
      { text: "Reagan pursued widespread removal of government rules on industries including savings and loans, telecommunications, and transportation, freeing companies to do things that had previously been off-limits.", axis: "economy", pole: "right" },
      { text: "Reagan signed the Immigration Reform and Control Act of 1986, granting amnesty and a path to citizenship to approximately 3 million undocumented immigrants.", axis: "economy", pole: "left" },
      { text: "Reagan tripled the national debt from $994 billion to $2.87 trillion during his presidency through a combination of tax cuts and increased military spending.", axis: "economy", pole: "right" },
      { text: "Reagan cut funding for social welfare programs including food stamps, school lunch subsidies, and public housing.", axis: "economy", pole: "right" },
      { text: "Reagan implemented 'supply-side economics' (Reaganomics), arguing that cutting taxes for businesses and wealthy individuals would create so much economic growth that the benefits would 'trickle down' to everyone else.", axis: "economy", pole: "right" },

      // SOCIETY (6)
      { text: "Reagan was slow to publicly acknowledge or respond to the AIDS epidemic, not mentioning AIDS publicly until 1985, years after tens of thousands had already died.", axis: "society", pole: "right" },
      { text: "Reagan escalated the War on Drugs, supporting mandatory minimum sentences — fixed prison terms judges couldn't reduce — which dramatically increased incarceration rates.", axis: "society", pole: "right" },
      { text: "Reagan appointed Sandra Day O'Connor as the first woman on the Supreme Court in 1981.", axis: "society", pole: "left" },
      { text: "Reagan promoted 'traditional family values' as a central pillar of his domestic agenda, aligning with the religious right on issues like abortion and school prayer.", axis: "society", pole: "right" },
      { text: "Reagan signed the Martin Luther King Jr. holiday into law in 1983, making it a federal holiday despite initially opposing it.", axis: "society", pole: "left" },
      { text: "Reagan signed the Immigration Reform and Control Act of 1986, which provided amnesty to millions of undocumented immigrants while also increasing border enforcement.", axis: "society", pole: "left" },

      // GOVERNANCE (5)
      { text: "The Iran-Contra affair revealed that Reagan's administration had secretly sold weapons to Iran (in violation of a ban on arms sales to Iran) and secretly used the proceeds to fund anti-communist rebels in Nicaragua — in defiance of a law Congress had passed banning such funding.", axis: "governance", pole: "right" },
      { text: "Reagan expanded executive power through the use of signing statements — written declarations attached to bills he signed that told agencies to interpret the law the way the president wanted, even if Congress intended something different.", axis: "governance", pole: "right" },
      { text: "Reagan reduced the size of the federal bureaucracy and promoted the idea that 'government is not the solution to our problem; government is the problem.'", axis: "governance", pole: "left" },
      { text: "Reagan supported the Contras — anti-communist guerrillas in Nicaragua — through secret intelligence operations, funding them even after Congress passed a law banning such support.", axis: "governance", pole: "right" },
      { text: "Reagan ordered the invasion of Grenada in 1983 to overthrow a Marxist government, acting without Congressional authorization.", axis: "governance", pole: "right" },

      // UNIVERSALITY (5)
      { text: "Reagan massively increased military spending to pressure the Soviet Union, believing that outspending them on weapons would force them to collapse or negotiate.", axis: "universality", pole: "right" },
      { text: "Reagan called on Soviet leader Gorbachev to 'tear down this wall' in a 1987 speech at the Berlin Wall, the barrier dividing communist East Germany from democratic West Germany.", axis: "universality", pole: "left" },
      { text: "Reagan signed a treaty in 1987 with the Soviet Union that required both sides to destroy all their medium-range nuclear missiles — the first agreement to actually destroy weapons rather than just cap their numbers.", axis: "universality", pole: "left" },
      { text: "Reagan supported anti-communist movements worldwide, providing weapons and money to fighters in Afghanistan, Angola, Nicaragua, and Cambodia.", axis: "universality", pole: "right" },
      { text: "Reagan imposed economic penalties on South Africa's apartheid government, though only after Congress overrode his veto of the sanctions bill.", axis: "universality", pole: "left" },

      // ENVIRONMENT (3)
      { text: "Reagan removed the solar panels Carter had installed on the White House roof and cut federal funding for renewable energy research.", axis: "environment", pole: "right" },
      { text: "Reagan cut the federal environmental agency's budget by nearly 30% and appointed administrators who were skeptical of environmental regulation, weakening enforcement of pollution rules.", axis: "environment", pole: "right" },
      { text: "Reagan weakened enforcement of the Clean Air Act and delayed action on acid rain — air pollution from power plants that was killing forests and lakes — prioritizing industry over environmental protection.", axis: "environment", pole: "right" },

      // EXPANSION (4)
      { text: "Reagan launched a space-based missile defense system — a network of space-based lasers and missiles that could shoot down incoming nuclear warheads before they hit the US.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Reagan increased military research and development spending, funding advances in computing, communications, and weapons technology.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Reagan pursued rapid economic growth as a primary goal, arguing that a growing economy solves more problems than government regulation.", axis: "expansion", sub: "growth", pole: "left" },
      { text: "Reagan commissioned the Space Shuttle Challenger investigation and continued support for the shuttle program after the 1986 disaster that killed all seven crew members.", axis: "expansion", sub: "space", pole: "left" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // GEORGE H.W. BUSH (1989–1993)
  // ═══════════════════════════════════════════════════════════
  ghwbush: {
    name: "George H.W. Bush",
    years: "1989–1993",
    party: "Republican",
    profile: { economy: 62, society: 55, governance: 52, universality: 28, environment: 38, space: 38, technology: 35, bioethics: 48, growth: 38 },
    questions: [
      // ECONOMY (5)
      { text: "George H.W. Bush raised taxes in 1990, breaking his famous 'read my lips: no new taxes' campaign pledge in order to reduce the federal deficit.", axis: "economy", pole: "left" },
      { text: "Bush signed the savings and loan bailout, spending over $100 billion in taxpayer funds to rescue hundreds of banks that had collapsed after government rules on them were stripped away in the 1980s.", axis: "economy", pole: "left" },
      { text: "Bush negotiated the framework for a free trade deal with Canada and Mexico — removing taxes on goods traded between the three countries — which Clinton later signed into law.", axis: "economy", pole: "right" },
      { text: "Bush signed the Immigration Act of 1990, increasing legal immigration by 40% and creating a lottery system that allowed people from underrepresented countries to apply for visas.", axis: "economy", pole: "left" },
      { text: "Bush presided over an economic recession in 1990–91 that contributed to his loss of re-election.", axis: "economy", pole: "right" },

      // SOCIETY (5)
      { text: "Bush signed a law in 1990 banning discrimination against people with disabilities in workplaces, public transportation, restaurants, hotels, and other areas of life.", axis: "society", pole: "left" },
      { text: "Bush appointed Clarence Thomas to the Supreme Court in 1991, a conservative justice whose confirmation hearings were marred by allegations of sexual harassment by law professor Anita Hill.", axis: "society", pole: "right" },
      { text: "Bush signed the Immigration Act of 1990, which expanded legal immigration and created pathways for family reunification and skilled workers.", axis: "society", pole: "left" },
      { text: "Bush vetoed a civil rights bill in 1990, arguing it would lead to companies hiring by quota, before signing a compromise version in 1991.", axis: "society", pole: "right" },
      { text: "Bush signed the Hate Crime Statistics Act of 1990, requiring the federal government to collect and publish data on crimes motivated by prejudice toward race, religion, or sexual orientation.", axis: "society", pole: "left" },

      // GOVERNANCE (5)
      { text: "Bush ordered the invasion of Panama in 1989 to remove dictator Manuel Noriega, who had been a American intelligence agents informant before being indicted for drug trafficking.", axis: "governance", pole: "right" },
      { text: "Bush pardoned six officials from the Iran-Contra affair in 1992, including former Defense Secretary Caspar Weinberger, before they could be tried for their roles in the scandal.", axis: "governance", pole: "right" },
      { text: "Bush assembled a coalition and obtained the United Nations authorization before launching the Gulf War to liberate Kuwait, following established international legal processes rather than acting unilaterally.", axis: "governance", pole: "left" },
      { text: "Bush chose not to march on Baghdad after liberating Kuwait, deciding against overthrowing Saddam Hussein even though the US military could have done so.", axis: "governance", pole: "left" },
      { text: "Bush signed the Budget Enforcement Act of 1990, imposing 'pay-as-you-go' rules requiring any new government spending to be matched by budget cuts or new revenue elsewhere.", axis: "governance", pole: "left" },

      // UNIVERSALITY (8)
      { text: "Bush built a 35-nation coalition to liberate Kuwait from Iraqi invasion in 1991, working through the United Nations to get international backing.", axis: "universality", pole: "left" },
      { text: "Bush negotiated a treaty with the Soviet Union that was the first agreement to actually reduce the number of long-range nuclear warheads each side had — cutting them by about 35%.", axis: "universality", pole: "left" },
      { text: "Bush supported German reunification in 1990, encouraging the peaceful merger of communist East Germany into democratic West Germany, which remained part of the Western military alliance.", axis: "universality", pole: "left" },
      { text: "Bush managed the peaceful end of the Cold War, engaging diplomatically with Soviet leader Gorbachev as the Soviet Union dissolved into 15 separate countries.", axis: "universality", pole: "left" },
      { text: "Bush sent US troops to Somalia in 1992 on a humanitarian mission to protect aid workers and prevent mass starvation during a civil war.", axis: "universality", pole: "left" },
      { text: "Bush provided financial aid and technical advice to the former Soviet republics to help them transition to market economies and democratic governance.", axis: "universality", pole: "left" },
      { text: "Bush imposed limited economic penalties on China after the Tiananmen Square massacre — where the Chinese military killed hundreds of pro-democracy protesters — but maintained trade relations.", axis: "universality", pole: "left" },
      { text: "Bush negotiated the framework for a free trade deal with Canada and Mexico, promoting the removal of trade tariffs and open economic exchange across North America.", axis: "universality", pole: "left" },

      // ENVIRONMENT (4)
      { text: "Bush signed the Clean Air Act Amendments of 1990, creating a market-based system where power plants could buy and sell pollution permits — making it economically efficient to reduce acid rain-causing emissions.", axis: "environment", pole: "left" },
      { text: "Bush expanded protections for wetlands and signed the Oil Pollution Act after the Exxon Valdez oil tanker disaster spilled 11 million gallons of crude oil into Alaska's Prince William Sound.", axis: "environment", pole: "left" },
      { text: "Bush resisted binding international commitments at the 1992 Earth Summit in Rio de Janeiro, refusing to sign the biodiversity treaty that most other world leaders signed.", axis: "environment", pole: "right" },
      { text: "Bush signed the Energy Policy Act of 1992, promoting energy conservation and encouraging the development of alternative fuels.", axis: "environment", pole: "left" },

      // EXPANSION (3)
      { text: "Bush continued funding for the Space Station Freedom project (later renamed the International Space Station), maintaining US leadership in space.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Bush supported the Human Genome Project, providing federal funding for the effort to map out the complete sequence of human DNA.", axis: "expansion", sub: "bioethics", pole: "left" },
      { text: "Bush signed the High Performance Computing Act, funding advanced computer networks that contributed to the development of the modern internet.", axis: "expansion", sub: "technology", pole: "left" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // BILL CLINTON (1993–2001)
  // ═══════════════════════════════════════════════════════════
  clinton: {
    name: "Bill Clinton",
    years: "1993–2001",
    party: "Democrat",
    profile: { economy: 48, society: 38, governance: 45, universality: 22, environment: 28, space: 35, technology: 18, bioethics: 22, growth: 28 },
    questions: [
      // ECONOMY (7)
      { text: "Clinton signed a free trade deal with Canada and Mexico that removed taxes on goods traded between the three countries — making imports cheaper but causing some American factory jobs to move to lower-wage countries.", axis: "economy", pole: "right" },
      { text: "Clinton achieved four consecutive budget surpluses (1998–2001), the first in decades, through spending restraint and higher taxes on top earners.", axis: "economy", pole: "left" },
      { text: "Clinton signed welfare reform in 1996, requiring people on public assistance to work or look for work, and imposing a lifetime limit of five years on benefits.", axis: "economy", pole: "right" },
      { text: "Clinton raised the top income tax rate from 31% to 39.6% as part of his 1993 deficit reduction plan.", axis: "economy", pole: "left" },
      { text: "Clinton signed a law in 1999 repealing Depression-era rules that had kept regular banks, investment banks, and insurance companies separate — critics later blamed this for contributing to the 2008 financial crisis.", axis: "economy", pole: "right" },
      { text: "Clinton signed a law in 2000 that exempted complex financial instruments called derivatives from regulation — meaning banks could make enormous risky bets without oversight, which later contributed to the 2008 financial crash.", axis: "economy", pole: "right" },
      { text: "Clinton supported China joining the World Trade Organization, arguing that trade would make China more democratic and benefit American consumers with cheaper goods.", axis: "economy", pole: "right" },

      // SOCIETY (6)
      { text: "Clinton signed a law in 1996 defining marriage under federal law as only between one man and one woman — denying same-sex couples access to federal marriage benefits.", axis: "society", pole: "right" },
      { text: "Clinton implemented the 'Don't Ask, Don't Tell' policy, allowing gay Americans to serve in the military as long as they kept their sexual orientation secret.", axis: "society", pole: "right" },
      { text: "Clinton signed the Brady Bill in 1993, requiring background checks for firearm purchases from licensed gun dealers.", axis: "society", pole: "left" },
      { text: "Clinton signed a 1994 crime bill that funded more police officers but also expanded mandatory minimum prison sentences, which critics say contributed to mass incarceration especially in Black communities.", axis: "society", pole: "right" },
      { text: "Clinton signed the Family and Medical Leave Act in 1993, requiring employers to give workers up to 12 weeks of unpaid leave to care for a new baby or a sick family member.", axis: "society", pole: "left" },
      { text: "Clinton created a government health insurance program for children in 1997, providing coverage to kids from families that earned too much for Medicaid but couldn't afford private insurance.", axis: "society", pole: "left" },

      // GOVERNANCE (5)
      { text: "Clinton was impeached by the House of Representatives in 1998 for lying under oath and obstructing justice related to the Monica Lewinsky affair, but was acquitted by the Senate and finished his term.", axis: "governance", pole: "right" },
      { text: "Clinton signed the Telecommunications Act of 1996, the first major overhaul of telecom law in 62 years, which allowed large media companies to merge and own more TV stations and newspapers.", axis: "governance", pole: "right" },
      { text: "Clinton used executive orders to designate millions of acres of federal land as national monuments, protecting them from development without going through Congress.", axis: "governance", pole: "right" },
      { text: "Clinton signed an anti-terrorism law in 1996 that expanded federal death penalty provisions and made it harder for death row inmates to appeal their sentences.", axis: "governance", pole: "right" },
      { text: "Clinton reduced the size of the federal workforce by over 300,000 employees through the 'Reinventing Government' initiative.", axis: "governance", pole: "left" },

      // UNIVERSALITY (5)
      { text: "Clinton ordered airstrikes against Serbia during the Kosovo War in 1999 to stop the ethnic cleansing of Albanian Muslims, acting without UN Security Council authorization.", axis: "universality", pole: "left" },
      { text: "Clinton brokered the Oslo Accords and hosted peace negotiations between Israel and the Palestinians, coming close to a deal but ultimately failing to reach one.", axis: "universality", pole: "left" },
      { text: "Clinton failed to intervene to prevent the Rwandan genocide in 1994, a 100-day massacre in which approximately 800,000 people were killed — later calling it one of his greatest regrets.", axis: "universality", pole: "right" },
      { text: "Clinton launched cruise missile strikes against suspected terrorist targets in Afghanistan and Sudan in 1998 following the bombing of US embassies in Africa.", axis: "universality", pole: "right" },
      { text: "Clinton expanded the Western military alliance to include former Warsaw Pact countries Poland, Hungary, and the Czech Republic — former Soviet allies that now joined the Western military alliance.", axis: "universality", pole: "left" },

      // ENVIRONMENT (4)
      { text: "Clinton designated millions of acres of federal land as protected national monuments, permanently blocking mining and logging in those areas.", axis: "environment", pole: "left" },
      { text: "Clinton signed the Kyoto Protocol in 1997 — an international agreement committing industrialized countries to cut greenhouse gas emissions — though the Senate never approved it and the US never met its targets.", axis: "environment", pole: "left" },
      { text: "Clinton established the Roadless Area Conservation Rule, protecting 58.5 million acres of national forest from road building and logging.", axis: "environment", pole: "left" },
      { text: "Clinton signed executive orders to protect national parks and ensure that polluting industries weren't disproportionately built near poor and minority communities.", axis: "environment", pole: "left" },

      // EXPANSION (3)
      { text: "Clinton invested heavily in the Human Genome Project, which successfully mapped the entire sequence of human DNA by 2003 — opening the door to personalized medicine.", axis: "expansion", sub: "bioethics", pole: "left" },
      { text: "Clinton promoted the expansion of the internet and e-commerce, signing a law keeping the internet free of new taxes and funding broadband development.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Clinton oversaw a period of rapid economic and technological growth during the dot-com boom of the late 1990s.", axis: "expansion", sub: "growth", pole: "left" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // GEORGE W. BUSH (2001–2009)
  // ═══════════════════════════════════════════════════════════
  gwbush: {
    name: "George W. Bush",
    years: "2001–2009",
    party: "Republican",
    profile: { economy: 72, society: 65, governance: 85, universality: 62, environment: 72, space: 30, technology: 35, bioethics: 72, growth: 28 },
    questions: [
      // ECONOMY (5)
      { text: "Bush signed tax cuts in 2001 and 2003, reducing rates across all income brackets with the largest percentage reductions for the highest earners.", axis: "economy", pole: "right" },
      { text: "Bush signed the Medicare Prescription Drug benefit in 2003 — the largest expansion of Medicare since its creation — allowing seniors to get government help paying for prescription medications.", axis: "economy", pole: "left" },
      { text: "Bush signed a $700 billion bank bailout in 2008, authorizing taxpayer funds to rescue large banks that were on the verge of collapse during the financial crisis.", axis: "economy", pole: "left" },
      { text: "Bush promoted an 'ownership society,' advocating for letting individuals invest their own Social Security retirement funds in the stock market rather than relying entirely on the government program.", axis: "economy", pole: "right" },
      { text: "Bush pushed to loosen government rules on the housing market, encouraging expanded homeownership — a policy that contributed to the subprime mortgage bubble that burst in 2008.", axis: "economy", pole: "right" },

      // SOCIETY (5)
      { text: "Bush signed the No Child Left Behind Act in 2002, requiring all public schools to conduct standardized tests every year and imposing consequences on schools where students scored poorly.", axis: "society", pole: "right" },
      { text: "Bush restricted federal funding for embryonic stem cell research in 2001, limiting it to existing cell lines — blocking research that scientists said could lead to treatments for diseases like Parkinson's and diabetes.", axis: "society", pole: "right" },
      { text: "Bush supported a constitutional amendment to ban same-sex marriage, though it failed to pass Congress.", axis: "society", pole: "right" },
      { text: "Bush launched a massive program to fight AIDS in Africa in 2003, investing over $15 billion — the largest effort ever dedicated to fighting a single disease globally, saving millions of lives.", axis: "society", pole: "left" },
      { text: "Bush appointed John Roberts and Samuel Alito to the Supreme Court, shifting the Court in a conservative direction for decades.", axis: "society", pole: "right" },

      // GOVERNANCE (8)
      { text: "Bush signed an anti-terrorism surveillance law after 9/11, dramatically expanding the government's ability to monitor phone calls, emails, and financial records — often without obtaining individual warrants.", axis: "governance", pole: "right" },
      { text: "Bush created the Department of Homeland Security in 2002, the largest reorganization of the federal government in over 50 years, merging 22 separate agencies into one department.", axis: "governance", pole: "right" },
      { text: "Bush authorized the government's electronic spy agency to secretly monitor Americans' phone calls and internet communications without getting court approval first.", axis: "governance", pole: "right" },
      { text: "Bush authorized 'enhanced interrogation techniques' including waterboarding — a simulated drowning technique — on suspected terrorists held at Guantanamo Bay and in secret overseas detention sites.", axis: "governance", pole: "right" },
      { text: "Bush declared that the Geneva Conventions — international rules protecting prisoners of war — did not apply to terrorist suspects, creating a new legal category of 'enemy combatants' with fewer protections.", axis: "governance", pole: "right" },
      { text: "Bush used signing statements over 150 times to indicate he would not follow parts of laws he signed, effectively claiming the power to pick and choose which parts of law he'd obey.", axis: "governance", pole: "right" },
      { text: "Bush's administration was widely criticized for its slow and disorganized response to Hurricane Katrina in 2005, which killed over 1,800 people and devastated New Orleans.", axis: "governance", pole: "right" },
      { text: "Bush expanded executive power through the 'unitary executive theory,' arguing the president has nearly unchecked authority over all executive branch agencies and decisions.", axis: "governance", pole: "right" },

      // UNIVERSALITY (7)
      { text: "Bush launched the invasion of Iraq in 2003, claiming Saddam Hussein had weapons of mass destruction — biological, chemical, and potentially nuclear weapons — that were never found.", axis: "universality", pole: "right" },
      { text: "Bush launched the invasion of Afghanistan in 2001 to destroy al-Qaeda and topple the Taliban government after the September 11 attacks that killed nearly 3,000 Americans.", axis: "universality", pole: "right" },
      { text: "Bush launched a massive program to fight AIDS in Africa, investing over $15 billion and saving an estimated 20 million lives.", axis: "universality", pole: "left" },
      { text: "Bush pursued a 'preemptive war' doctrine, asserting America's right to attack countries that might be a future threat — even before they actually attacked the US.", axis: "universality", pole: "right" },
      { text: "Bush withdrew the US from the Anti-Ballistic Missile Treaty with Russia, a Cold War agreement that banned missile defense systems, so the US could develop its own missile shield.", axis: "universality", pole: "right" },
      { text: "Bush rejected the Kyoto Protocol on climate change, arguing that emissions reduction targets would harm the US economy and unfairly exempt developing nations.", axis: "universality", pole: "right" },
      { text: "Bush built a 'coalition of the willing' for the Iraq invasion — a group of allies willing to join without the United Nations approval — bypassing the Security Council when it refused to authorize the war.", axis: "universality", pole: "right" },

      // ENVIRONMENT (2)
      { text: "Bush rejected the Kyoto Protocol in 2001 — an international climate agreement — arguing that its emission reduction targets would harm the US economy.", axis: "environment", pole: "right" },
      { text: "Bush opened previously protected federal lands to oil and gas exploration and weakened enforcement of existing environmental regulations.", axis: "environment", pole: "right" },

      // EXPANSION (3)
      { text: "Bush restricted federal funding for embryonic stem cell research to existing cell lines, limiting scientists' ability to create new stem cell lines from human embryos — blocking potential medical breakthroughs on ethical grounds.", axis: "expansion", sub: "bioethics", pole: "right" },
      { text: "Bush announced the Vision for Space Exploration in 2004, proposing to return humans to the Moon and eventually send them to Mars.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Bush increased federal funding for cybersecurity and information technology after 9/11, prioritizing digital infrastructure protection.", axis: "expansion", sub: "technology", pole: "left" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // BARACK OBAMA (2009–2017)
  // ═══════════════════════════════════════════════════════════
  obama: {
    name: "Barack Obama",
    years: "2009–2017",
    party: "Democrat",
    profile: { economy: 32, society: 18, governance: 55, universality: 18, environment: 22, space: 25, technology: 22, bioethics: 18, growth: 28 },
    questions: [
      // ECONOMY (5)
      { text: "Obama signed the Affordable Care Act (often called Obamacare) in 2010, expanding government-subsidized health insurance to over 20 million previously uninsured Americans.", axis: "economy", pole: "left" },
      { text: "After the 2008 financial crash, Obama signed new rules forcing banks to hold more money in reserve, limits on risky trading, and the creation of a watchdog agency to protect consumers from predatory lending.", axis: "economy", pole: "left" },
      { text: "Obama signed the American Recovery and Reinvestment Act in 2009, a $787 billion stimulus package to combat the Great Recession — including tax cuts, infrastructure spending, and aid to states.", axis: "economy", pole: "left" },
      { text: "Obama authorized the auto industry bailout, using federal funds to rescue General Motors and Chrysler from bankruptcy, saving hundreds of thousands of jobs.", axis: "economy", pole: "left" },
      { text: "Obama raised the top income tax rate from 35% to 39.6% as part of the 2012 budget deal.", axis: "economy", pole: "left" },

      // SOCIETY (6)
      { text: "Obama endorsed same-sex marriage in 2012, becoming the first sitting president to publicly support marriage equality.", axis: "society", pole: "left" },
      { text: "Obama used a 2012 executive order to protect undocumented immigrants who were brought to the US as young children from being deported — because Congress refused to pass a law doing the same thing.", axis: "society", pole: "left" },
      { text: "Obama signed the Lilly Ledbetter Fair Pay Act in 2009, making it easier for women to sue their employers for paying them less than men for the same work.", axis: "society", pole: "left" },
      { text: "Obama appointed Sonia Sotomayor and Elena Kagan to the Supreme Court, adding the third and fourth women in the Court's history.", axis: "society", pole: "left" },
      { text: "Obama repealed 'Don't Ask, Don't Tell' in 2010, allowing gay and lesbian Americans to serve openly in the military without hiding their identity.", axis: "society", pole: "left" },
      { text: "Obama signed the Matthew Shepard and James Byrd Jr. Hate Crimes Prevention Act, expanding federal hate crime protections to include attacks motivated by the victim's sexual orientation or gender identity.", axis: "society", pole: "left" },

      // GOVERNANCE (6)
      { text: "Obama used executive action to protect undocumented immigrants who were brought to the US as children from being deported — after Congress refused to pass immigration reform, he acted on his own, which critics argued exceeded presidential authority.", axis: "governance", pole: "right" },
      { text: "Obama dramatically expanded the use of drone strikes in Pakistan, Yemen, and Somalia, killing suspected terrorists without trial or criminal charges.", axis: "governance", pole: "right" },
      { text: "Obama authorized the raid that killed Osama bin Laden in 2011, ordering US Navy SEALs to carry out a covert mission deep inside Pakistani territory without informing Pakistan.", axis: "governance", pole: "right" },
      { text: "Obama's administration prosecuted more government whistleblowers — people who leaked classified information to journalists — than all previous administrations combined.", axis: "governance", pole: "right" },
      { text: "Obama signed a defense bill with provisions allowing the military to indefinitely detain terrorism suspects, including American citizens, without trial.", axis: "governance", pole: "right" },
      { text: "Obama ordered military intervention in Libya in 2011 without Congressional approval, helping rebels overthrow dictator Muammar Gaddafi.", axis: "governance", pole: "right" },

      // UNIVERSALITY (6)
      { text: "Obama negotiated the Iran nuclear deal in 2015, working with six other world powers to limit Iran's nuclear program in exchange for lifting economic penalties — stopping Iran from building a nuclear bomb in exchange for resumed trade.", axis: "universality", pole: "left" },
      { text: "Obama signed the US onto the Paris Climate Agreement in 2016, committing to reduce greenhouse gas emissions alongside nearly 200 countries.", axis: "universality", pole: "left" },
      { text: "Obama normalized diplomatic relations with Cuba in 2014, ending over 50 years of US isolation and opening an American embassy in Havana.", axis: "universality", pole: "left" },
      { text: "Obama withdrew combat troops from Iraq by 2011, fulfilling a campaign promise to end the war.", axis: "universality", pole: "right" },
      { text: "Obama expanded cooperation with the Western military alliance and imposed economic penalties on Russia after it illegally seized Crimea from Ukraine in 2014.", axis: "universality", pole: "left" },
      { text: "Obama negotiated the Trans-Pacific Partnership — a trade deal between the US and 11 other Pacific countries — designed to set shared rules on trade and labor to counter China's economic influence.", axis: "universality", pole: "left" },

      // ENVIRONMENT (4)
      { text: "Obama signed the US onto the Paris Climate Agreement, committing the US to cut greenhouse gas emissions by 26–28% compared to 2005 levels.", axis: "environment", pole: "left" },
      { text: "Obama introduced the Clean Power Plan, setting the first-ever federal limits on how much carbon dioxide power plants could emit — targeting the biggest source of US climate pollution.", axis: "environment", pole: "left" },
      { text: "Obama rejected the Keystone XL pipeline, a proposed oil pipeline from Canada to Texas, citing the climate impact of expanding oil sands extraction.", axis: "environment", pole: "left" },
      { text: "Obama expanded offshore drilling permits before reversing course after the Deepwater Horizon oil spill in 2010, the largest marine oil spill in US history.", axis: "environment", pole: "left" },

      // EXPANSION (3)
      { text: "Obama shifted America's space program toward partnering with private space companies like SpaceX rather than the government building and flying its own rockets.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Obama lifted restrictions on embryonic stem cell research in 2009, expanding federal funding for scientists studying how to use stem cells to treat diseases.", axis: "expansion", sub: "bioethics", pole: "left" },
      { text: "Obama invested over $90 billion in clean energy technology through the stimulus package, funding solar, wind, and battery research.", axis: "expansion", sub: "technology", pole: "left" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // DONALD TRUMP (2017–2021)
  // ═══════════════════════════════════════════════════════════
  trump: {
    name: "Donald Trump",
    years: "2017–2021",
    party: "Republican",
    profile: { economy: 72, society: 72, governance: 78, universality: 88, environment: 88, space: 18, technology: 30, bioethics: 50, growth: 22 },
    questions: [
      // ECONOMY (5)
      { text: "Trump signed the Tax Cuts and Jobs Act in 2017, cutting the corporate tax rate from 35% to 21% and reducing individual income tax rates.", axis: "economy", pole: "right" },
      { text: "Trump imposed tariffs of up to 25% on Chinese imports — essentially import taxes — launching a trade war intended to reduce the US trade deficit and pressure China on trade practices.", axis: "economy", pole: "left" },
      { text: "Trump renegotiated the free trade deal with Canada and Mexico, updating the rules to require more car parts to be made in the US or Canada to qualify for zero tariffs.", axis: "economy", pole: "right" },
      { text: "Trump signed a $2.2 trillion COVID-19 relief law in 2020, sending $1,200 stimulus checks to Americans, boosting unemployment benefits, and providing forgivable loans for small businesses.", axis: "economy", pole: "left" },
      { text: "Trump rolled back some of the financial regulations imposed after the 2008 crash, arguing that they made it too hard for smaller banks to lend money.", axis: "economy", pole: "right" },

      // SOCIETY (6)
      { text: "Trump issued an executive order banning transgender individuals from serving in the US military.", axis: "society", pole: "right" },
      { text: "Trump signed the First Step Act in 2018, a with support from both parties criminal justice reform bill that reduced some mandatory minimum sentences and made it easier for non-violent prisoners to earn early release.", axis: "society", pole: "left" },
      { text: "Trump appointed three Supreme Court justices — Gorsuch, Kavanaugh, and Barrett — reshaping the Court in a conservative direction for a generation.", axis: "society", pole: "right" },
      { text: "Trump implemented a family separation policy at the US-Mexico border, separating children from their parents as a deterrent to unauthorized immigration.", axis: "society", pole: "right" },
      { text: "Trump signed an executive order promoting religious liberty, making it easier for religious organizations to engage in political activities without losing their tax-exempt status.", axis: "society", pole: "right" },
      { text: "Trump established 'opportunity zones' in economically distressed communities, offering tax breaks to investors who put money into low-income areas.", axis: "society", pole: "right" },

      // GOVERNANCE (6)
      { text: "Trump declared a national emergency to redirect money from the military budget toward building a border wall after Congress refused to fund it.", axis: "governance", pole: "right" },
      { text: "Trump was impeached twice — first for pressuring Ukraine to investigate a political rival, and second for encouraging the January 6, 2021 mob that stormed the US Capitol to stop the certification of the election results.", axis: "governance", pole: "right" },
      { text: "Trump fired FBI Director James Comey while the FBI was investigating Russian interference in the 2016 election.", axis: "governance", pole: "right" },
      { text: "Trump refused to commit to a peaceful transfer of power and claimed the 2020 election was stolen, despite courts and election officials finding no evidence of widespread fraud.", axis: "governance", pole: "right" },
      { text: "Trump used executive orders extensively to bypass Congress on immigration, trade, and environmental policy.", axis: "governance", pole: "right" },
      { text: "Trump pardoned political allies and supporters including Steve Bannon, Roger Stone, Michael Flynn, and Joe Arpaio.", axis: "governance", pole: "right" },

      // UNIVERSALITY (6)
      { text: "Trump withdrew the US from the Paris Climate Agreement in 2017, arguing that its emissions targets were unfair to American businesses.", axis: "universality", pole: "right" },
      { text: "Trump withdrew from the Iran nuclear deal in 2018, reimposing heavy economic penalties on Iran and walking away from the agreement that six other countries were still honoring.", axis: "universality", pole: "right" },
      { text: "Trump issued executive orders restricting travel from several Muslim-majority countries, citing national security concerns.", axis: "universality", pole: "right" },
      { text: "Trump brokered the Abraham Accords in 2020, convincing the UAE, Bahrain, Sudan, and Morocco to formally recognize Israel — the first Arab-Israeli normalization agreements in decades.", axis: "universality", pole: "left" },
      { text: "Trump moved the US Embassy in Israel from Tel Aviv to Jerusalem, formally recognizing Jerusalem as Israel's capital — a move that angered Palestinians and most Arab governments.", axis: "universality", pole: "right" },
      { text: "Trump withdrew from the Trans-Pacific Partnership — a trade deal with 11 Pacific countries — on his first day in office, preferring one-on-one deals over agreements involving many countries at once.", axis: "universality", pole: "right" },

      // ENVIRONMENT (4)
      { text: "Trump withdrew from the Paris Climate Agreement, arguing it was unfair to the United States and harmful to American jobs.", axis: "environment", pole: "right" },
      { text: "Trump rolled back over 100 environmental regulations, including rules limiting car exhaust emissions, methane leaks from oil wells, and pollution in waterways.", axis: "environment", pole: "right" },
      { text: "Trump expanded oil and gas drilling on federal lands and in the Arctic National Wildlife Refuge.", axis: "environment", pole: "right" },
      { text: "Trump reduced the size of Bears Ears and Grand Staircase-Escalante national monuments by millions of acres, opening the land to mining and development.", axis: "environment", pole: "right" },

      // EXPANSION (3)
      { text: "Trump created the US Space Force in 2019, establishing a new military branch — separate from the Air Force — dedicated to protecting US satellites and interests in space.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Trump launched Operation Warp Speed in 2020, a partnership between the government and pharmaceutical companies that delivered COVID-19 vaccines in record time — less than a year after the virus emerged.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Trump signed executive orders directing federal agencies to prioritize artificial intelligence research and keep the US ahead of China in AI development.", axis: "expansion", sub: "technology", pole: "left" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // JOE BIDEN (2021–2025)
  // ═══════════════════════════════════════════════════════════
  biden: {
    name: "Joe Biden",
    years: "2021–2025",
    party: "Democrat",
    profile: { economy: 32, society: 18, governance: 58, universality: 28, environment: 18, space: 30, technology: 28, bioethics: 32, growth: 28 },
    questions: [
      // ECONOMY (7)
      { text: "Biden signed the Infrastructure Investment and Jobs Act, investing $1.2 trillion in roads, bridges, broadband internet, and water systems.", axis: "economy", pole: "left" },
      { text: "Biden signed the Inflation Reduction Act, directing $370 billion toward clean energy investments and allowing Medicare to negotiate lower drug prices for the first time.", axis: "economy", pole: "left" },
      { text: "Biden signed a law investing $52 billion in subsidies to build semiconductor (computer chip) factories in the US, aiming to reduce dependence on chips made in Asia.", axis: "economy", pole: "left" },
      { text: "Biden attempted to forgive up to $20,000 in student loan debt per borrower, though the Supreme Court blocked the initial broad plan.", axis: "economy", pole: "left" },
      { text: "Biden signed a law requiring large profitable corporations to pay at least a 15% minimum tax rate, closing loopholes that had allowed some companies to pay no federal tax at all.", axis: "economy", pole: "left" },
      { text: "Biden signed the American Rescue Plan in 2021, a $1.9 trillion COVID relief package including $1,400 stimulus checks, expanded unemployment benefits, and monthly child tax credits.", axis: "economy", pole: "left" },
      { text: "Biden issued executive orders promoting competition in the economy, directing agencies to crack down on monopolistic practices in tech, agriculture, and healthcare.", axis: "economy", pole: "left" },

      // SOCIETY (6)
      { text: "Biden signed the Respect for Marriage Act in 2022, writing into federal law that the government must recognize same-sex and interracial marriages — protecting them even if the Supreme Court reversed its earlier rulings.", axis: "society", pole: "left" },
      { text: "Biden appointed Ketanji Brown Jackson as the first Black woman on the Supreme Court.", axis: "society", pole: "left" },
      { text: "Biden signed the Bipartisan Safer Communities Act in 2022, the first major federal gun safety law in nearly 30 years, including expanded background checks and funding for mental health programs.", axis: "society", pole: "left" },
      { text: "Biden signed executive orders banning discrimination based on gender identity in federally funded programs.", axis: "society", pole: "left" },
      { text: "Biden signed a law in 2022 expanding healthcare and disability benefits for veterans who were exposed to toxic smoke from open-air burn pits used to dispose of waste during military service.", axis: "society", pole: "left" },
      { text: "Biden signed the Electoral Count Reform Act, tightening the rules for certifying presidential elections to make it harder for anyone to block or overturn a legitimate result.", axis: "society", pole: "left" },

      // GOVERNANCE (5)
      { text: "Biden issued federal vaccine mandates in 2021, requiring employees at large companies to get vaccinated against COVID or face weekly testing.", axis: "governance", pole: "right" },
      { text: "Biden completed the withdrawal of all US troops from Afghanistan in August 2021, ending America's longest war — though the chaotic final days at Kabul airport drew widespread criticism.", axis: "governance", pole: "left" },
      { text: "Biden used executive orders extensively in his first days in office, signing over 40 in his first two weeks on immigration, climate, and COVID policy.", axis: "governance", pole: "right" },
      { text: "Biden's Justice Department appointed a special counsel to investigate the January 6th Capitol attack and related matters.", axis: "governance", pole: "left" },
      { text: "Biden invoked the Defense Production Act to order companies to speed up COVID vaccine manufacturing and distribution.", axis: "governance", pole: "right" },

      // UNIVERSALITY (6)
      { text: "Biden rejoined the Paris Climate Agreement on his first day in office, recommitting the US to international climate action after Trump had withdrawn.", axis: "universality", pole: "left" },
      { text: "Biden expanded the Western military alliance by supporting the membership of Finland and Sweden, the alliance's most significant expansion in decades.", axis: "universality", pole: "left" },
      { text: "Biden provided massive military and financial aid to Ukraine following Russia's 2022 invasion, totaling over $100 billion.", axis: "universality", pole: "left" },
      { text: "Biden withdrew all US troops from Afghanistan in 2021, ending the 20-year military engagement.", axis: "universality", pole: "right" },
      { text: "Biden organized international economic penalties against Russia after its invasion of Ukraine, coordinating with European allies to cut Russia off from global financial markets.", axis: "universality", pole: "left" },
      { text: "Biden hosted the Summit for Democracy, seeking to rally democratic nations against the rise of authoritarian governments worldwide.", axis: "universality", pole: "left" },

      // ENVIRONMENT (4)
      { text: "Biden signed the Inflation Reduction Act, directing $370 billion toward clean energy and climate programs — the largest climate investment in US history.", axis: "environment", pole: "left" },
      { text: "Biden rejoined the Paris Climate Agreement and set a goal of cutting US greenhouse gas emissions in half by 2030.", axis: "environment", pole: "left" },
      { text: "Biden paused new oil and gas leasing on federal lands, citing the need to address climate change.", axis: "environment", pole: "left" },
      { text: "Biden used government powers to boost domestic production of solar panels, heat pumps, and other clean energy technologies.", axis: "environment", pole: "left" },

      // EXPANSION (2)
      { text: "Biden signed a law investing billions in semiconductor research and advanced technology manufacturing to keep the US competitive in the global tech race.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Biden continued the Artemis program to return astronauts to the Moon, maintaining America's long-term space exploration goals.", axis: "expansion", sub: "space", pole: "left" }
    ]
  }
};

// ────────────────────────────────────────────────
// Also keep the PRESIDENTS array (flat list) for
// backward-compat with compass mode matching
// ────────────────────────────────────────────────
const PRESIDENTS = Object.values(PRESIDENT_DATA).map(p => ({
  name: p.name,
  years: p.years,
  party: p.party,
  ...p.profile
}));

// Keep the old PRESIDENT_QUESTIONS for backward compatibility with compass presidential-match mode
const PRESIDENT_QUESTIONS = [
  // ── ECONOMY (9) ──────────────────────────────────
  { text: "Roosevelt created Social Security in 1935, establishing government-funded retirement pensions for all American workers.", axis: "economy", pole: "left", president: "FDR" },
  { text: "Johnson established Medicare in 1965, providing government-funded healthcare for all Americans over 65.", axis: "economy", pole: "left", president: "LBJ" },
  { text: "Reagan cut the top income tax rate from 70% to 28%, arguing lower taxes would boost economic growth for everyone.", axis: "economy", pole: "right", president: "Reagan" },
  { text: "Clinton signed a free trade deal with Canada and Mexico that removed taxes on goods traded between the three countries — making imports cheaper but causing some American factory jobs to move overseas.", axis: "economy", pole: "right", president: "Clinton" },
  { text: "Roosevelt hired millions of unemployed Americans through a government jobs program to build roads, bridges, and public buildings during the Depression.", axis: "economy", pole: "left", president: "FDR" },
  { text: "Obama signed the Affordable Care Act in 2010, expanding government-subsidized health insurance to millions of uninsured Americans.", axis: "economy", pole: "left", president: "Obama" },
  { text: "George W. Bush cut taxes across all income brackets in 2001, with the largest percentage reductions for high earners.", axis: "economy", pole: "right", president: "G.W. Bush" },
  { text: "Trump imposed tariffs of up to 25% on Chinese imports to protect American manufacturing jobs.", axis: "economy", pole: "left", president: "Trump" },
  { text: "Biden signed a $1.2 trillion infrastructure bill to rebuild roads, bridges, and expand broadband internet across the country.", axis: "economy", pole: "left", president: "Biden" },

  // ── SOCIETY (9) ──────────────────────────────────
  { text: "Johnson signed the Civil Rights Act of 1964, making racial discrimination in employment and public places illegal.", axis: "society", pole: "left", president: "LBJ" },
  { text: "Johnson signed the Voting Rights Act of 1965, banning literacy tests and other barriers used to prevent Black Americans from voting.", axis: "society", pole: "left", president: "LBJ" },
  { text: "Clinton signed the Defense of Marriage Act in 1996, defining marriage under federal law as between one man and one woman — denying same-sex couples access to federal marriage benefits.", axis: "society", pole: "right", president: "Clinton" },
  { text: "Eisenhower sent federal troops to Little Rock, Arkansas in 1957 to enforce school desegregation when the governor tried to block Black students from entering.", axis: "society", pole: "left", president: "Eisenhower" },
  { text: "Obama became the first sitting president to publicly endorse same-sex marriage in 2012.", axis: "society", pole: "left", president: "Obama" },
  { text: "Nixon launched the War on Drugs in 1971, dramatically increasing criminal penalties for drug possession.", axis: "society", pole: "right", president: "Nixon" },
  { text: "Trump issued an executive order in 2017 banning transgender individuals from serving in the US military.", axis: "society", pole: "right", president: "Trump" },
  { text: "Biden signed an executive order in 2021 banning discrimination based on gender identity in federally funded programs.", axis: "society", pole: "left", president: "Biden" },
  { text: "Reagan focused social policy on traditional family values and personal responsibility rather than government welfare programs.", axis: "society", pole: "right", president: "Reagan" },

  // ── GOVERNANCE (9) ──────────────────────────────────
  { text: "George W. Bush signed the Patriot Act after 9/11, expanding government surveillance powers to monitor phone calls and internet activity without individual warrants.", axis: "governance", pole: "right", president: "G.W. Bush" },
  { text: "Roosevelt issued an executive order during World War II forcing approximately 120,000 Japanese Americans — most of them US citizens — into government prison camps.", axis: "governance", pole: "right", president: "FDR" },
  { text: "Reagan fired over 11,000 air traffic controllers who went on strike for better pay, and permanently banned them from ever working for the federal government again.", axis: "governance", pole: "right", president: "Reagan" },
  { text: "Obama used executive action in 2012 to protect undocumented immigrants who were brought to the US as children from deportation — after Congress refused to pass a law doing the same thing.", axis: "governance", pole: "right", president: "Obama" },
  { text: "Trump declared a national emergency to redirect military funds toward building a border wall after Congress refused to fund it.", axis: "governance", pole: "right", president: "Trump" },
  { text: "Ford granted a full presidential pardon to Richard Nixon in 1974, ensuring Nixon would never be prosecuted for his crimes in the Watergate scandal.", axis: "governance", pole: "right", president: "Ford" },
  { text: "Carter signed the Panama Canal Treaties in 1977, agreeing to return control of the canal to Panama — voluntarily giving up a major US-controlled territory.", axis: "governance", pole: "left", president: "Carter" },
  { text: "Truman desegregated the US military by executive order in 1948, ending the official policy of separating Black and white soldiers into different units.", axis: "governance", pole: "right", president: "Truman" },
  { text: "Biden issued a federal vaccine mandate in 2021 requiring employees at large companies to get vaccinated against COVID or face weekly testing.", axis: "governance", pole: "right", president: "Biden" },

  // ── UNIVERSALITY (9) ──────────────────────────────────
  { text: "Truman launched the Marshall Plan in 1948, sending $13 billion in US aid to rebuild war-devastated European countries and prevent them from turning to communism.", axis: "universality", pole: "left", president: "Truman" },
  { text: "Trump withdrew the US from the Paris Climate Agreement in 2017, arguing its emissions targets were unfair to American businesses.", axis: "universality", pole: "right", president: "Trump" },
  { text: "George H.W. Bush built a 35-nation coalition to liberate Kuwait from Iraqi invasion in 1991, working through the United Nations.", axis: "universality", pole: "left", president: "G.H.W. Bush" },
  { text: "Kennedy established the Peace Corps in 1961, sending American volunteers to developing nations to help with education and infrastructure.", axis: "universality", pole: "left", president: "Kennedy" },
  { text: "Reagan massively increased military spending to pressure the Soviet Union, believing that outspending them on weapons would force them to collapse or negotiate.", axis: "universality", pole: "right", president: "Reagan" },
  { text: "Obama negotiated the Iran nuclear deal in 2015, working with six other world powers to limit Iran's nuclear program in exchange for lifting economic penalties.", axis: "universality", pole: "left", president: "Obama" },
  { text: "Truman helped create the United Nations and the Western military alliance, embedding the US in permanent international alliances.", axis: "universality", pole: "left", president: "Truman" },
  { text: "Trump issued a travel ban in 2017, restricting immigration from several Muslim-majority countries on national security grounds.", axis: "universality", pole: "right", president: "Trump" },
  { text: "Biden withdrew all US troops from Afghanistan in 2021, ending America's longest war.", axis: "universality", pole: "right", president: "Biden" },

  // ── ENVIRONMENT (9) ──────────────────────────────────
  { text: "Nixon created the Environmental Protection Agency in 1970, a dedicated federal agency with the power to set and enforce environmental regulations.", axis: "environment", pole: "left", president: "Nixon" },
  { text: "Obama signed the US onto the Paris Climate Agreement in 2016, committing to reduce greenhouse gas emissions alongside nearly 200 countries.", axis: "environment", pole: "left", president: "Obama" },
  { text: "Trump rolled back over 100 environmental regulations and expanded oil and gas drilling on federal lands.", axis: "environment", pole: "right", president: "Trump" },
  { text: "Carter installed solar panels on the White House roof in 1979 and invested in renewable energy research during the oil crisis.", axis: "environment", pole: "left", president: "Carter" },
  { text: "Reagan removed the solar panels Carter installed on the White House and cut federal funding for renewable energy research.", axis: "environment", pole: "right", president: "Reagan" },
  { text: "George W. Bush rejected the Kyoto Protocol in 2001 — an international climate agreement — arguing that its emission targets would harm the US economy.", axis: "environment", pole: "right", president: "G.W. Bush" },
  { text: "Biden signed the Inflation Reduction Act in 2022, directing $370 billion toward clean energy and climate programs — the largest climate investment in US history.", axis: "environment", pole: "left", president: "Biden" },
  { text: "Clinton designated millions of acres of federal land as protected national monuments, permanently blocking mining and logging.", axis: "environment", pole: "left", president: "Clinton" },
  { text: "Nixon signed the Endangered Species Act in 1973, giving the federal government power to protect animals facing extinction — even if that meant blocking development projects.", axis: "environment", pole: "left", president: "Nixon" },

  // ── EXPANSION (9) ──────────────────────────────────
  { text: "Kennedy committed the US to landing on the Moon within a decade in 1961 and massively increased the space program's budget.", axis: "expansion", sub: "space", pole: "left", president: "Kennedy" },
  { text: "Eisenhower created America's space program in 1958 in response to the Soviet Sputnik satellite beating America into orbit.", axis: "expansion", sub: "space", pole: "left", president: "Eisenhower" },
  { text: "Obama shifted America's space program toward partnering with private space companies like SpaceX rather than the government building and flying its own rockets.", axis: "expansion", sub: "space", pole: "left", president: "Obama" },
  { text: "Truman approved continued development of nuclear weapons after World War II, leading to the hydrogen bomb and the nuclear arms race with the Soviet Union.", axis: "expansion", sub: "technology", pole: "left", president: "Truman" },
  { text: "Reagan launched a space-based missile defense system — a proposed network of space-based lasers and missiles designed to shoot down incoming nuclear warheads.", axis: "expansion", sub: "technology", pole: "left", president: "Reagan" },
  { text: "George W. Bush restricted federal funding for embryonic stem cell research in 2001, blocking potential medical breakthroughs on ethical grounds.", axis: "expansion", sub: "bioethics", pole: "right", president: "G.W. Bush" },
  { text: "Obama lifted restrictions on embryonic stem cell research in 2009, expanding federal funding for scientists studying treatments for diseases.", axis: "expansion", sub: "bioethics", pole: "left", president: "Obama" },
  { text: "Clinton invested heavily in the Human Genome Project, successfully mapping the entire sequence of human DNA by 2003 — opening the door to personalized medicine.", axis: "expansion", sub: "bioethics", pole: "left", president: "Clinton" },
  { text: "Trump created the US Space Force in 2019, establishing a new military branch dedicated to protecting US satellites and interests in space.", axis: "expansion", sub: "space", pole: "left", president: "Trump" }
];
