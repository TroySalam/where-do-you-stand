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
      { text: "FDR created Social Security in 1935, establishing government-funded retirement pensions for all American workers.", axis: "economy", pole: "left" },
      { text: "FDR hired millions of unemployed Americans through the Works Progress Administration (WPA) to build roads, bridges, and public buildings during the Depression.", axis: "economy", pole: "left" },
      { text: "FDR created the Civilian Conservation Corps (CCC), employing young men in government-funded environmental and infrastructure projects.", axis: "economy", pole: "left" },
      { text: "FDR established the FDIC in 1933 to insure bank deposits with government funds, preventing future bank runs.", axis: "economy", pole: "left" },
      { text: "FDR created the Securities and Exchange Commission (SEC) to regulate Wall Street and prevent the kind of speculation that caused the 1929 crash.", axis: "economy", pole: "left" },
      { text: "FDR signed the Fair Labor Standards Act in 1938, establishing a federal minimum wage and the 40-hour work week.", axis: "economy", pole: "left" },
      { text: "FDR signed the National Labor Relations Act in 1935, guaranteeing workers the right to form unions and collectively bargain.", axis: "economy", pole: "left" },
      { text: "FDR imposed agricultural price controls during the New Deal, paying farmers to reduce production in order to raise crop prices.", axis: "economy", pole: "left" },

      // SOCIETY (4)
      { text: "FDR issued Executive Order 9066 in 1942, authorizing the internment of approximately 120,000 Japanese Americans in government camps during World War II.", axis: "society", pole: "right" },
      { text: "FDR refused to support anti-lynching legislation in the 1930s to avoid losing the support of Southern Democrats in Congress.", axis: "society", pole: "right" },
      { text: "FDR expanded access to education and job training through New Deal programs, opening opportunities for millions of working-class Americans.", axis: "society", pole: "left" },
      { text: "FDR created the Federal Housing Administration to make homeownership more affordable, though its lending guidelines effectively excluded Black neighborhoods through redlining.", axis: "society", pole: "right" },

      // GOVERNANCE (7)
      { text: "FDR attempted to pack the Supreme Court in 1937 by proposing to add up to six new justices after the Court struck down several New Deal programs.", axis: "governance", pole: "right" },
      { text: "FDR broke the two-term tradition by running for and winning four consecutive presidential terms.", axis: "governance", pole: "right" },
      { text: "FDR used executive orders extensively to implement New Deal programs, bypassing a sometimes reluctant Congress.", axis: "governance", pole: "right" },
      { text: "FDR used 'fireside chats' — radio addresses — to communicate directly with the American people, bypassing traditional media gatekeepers.", axis: "governance", pole: "right" },
      { text: "FDR signed Executive Order 9066 granting the military authority to designate exclusion zones and forcibly relocate civilians without trial.", axis: "governance", pole: "right" },
      { text: "FDR centralized enormous economic authority in the federal government through the National Recovery Administration, setting industry-wide codes for wages, prices, and competition.", axis: "governance", pole: "right" },
      { text: "FDR created the Tennessee Valley Authority (TVA) as a federally owned corporation to provide electricity and economic development to a poverty-stricken region.", axis: "economy", pole: "left" },

      // UNIVERSALITY (5)
      { text: "FDR signed the Lend-Lease Act in 1941, sending billions of dollars in military equipment to Britain and the Allies before the US formally entered World War II.", axis: "universality", pole: "left" },
      { text: "FDR played a central role in planning the United Nations, envisioning a permanent international body to prevent future world wars.", axis: "universality", pole: "left" },
      { text: "FDR led the US into World War II after the attack on Pearl Harbor, committing to a 'Europe first' strategy alongside the Allies.", axis: "universality", pole: "left" },
      { text: "FDR met with Churchill and Stalin at the Yalta Conference in 1945, negotiating the post-war division of Europe and the structure of the United Nations.", axis: "universality", pole: "left" },
      { text: "FDR turned away the MS St. Louis in 1939, a ship carrying over 900 Jewish refugees fleeing Nazi Germany, refusing them entry to the United States.", axis: "universality", pole: "right" },

      // ENVIRONMENT (2)
      { text: "FDR created the Civilian Conservation Corps, which planted over 3 billion trees and built thousands of miles of trails and fire roads in national forests.", axis: "environment", pole: "left" },
      { text: "FDR established the Soil Conservation Service to combat the Dust Bowl, implementing federal programs to prevent soil erosion across the Great Plains.", axis: "environment", pole: "left" },

      // EXPANSION (4)
      { text: "FDR authorized the Manhattan Project in 1942, secretly funding the development of the atomic bomb — the largest scientific undertaking in history at that time.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "FDR massively expanded government-funded scientific research during WWII, laying the groundwork for postwar federal investment in science and technology.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "FDR prioritized wartime industrial production over peacetime economic sustainability, converting the entire US economy to a war footing.", axis: "expansion", sub: "growth", pole: "left" },
      { text: "FDR invested heavily in infrastructure such as dams, bridges, and electrical grids through the New Deal, transforming America's physical landscape.", axis: "expansion", sub: "growth", pole: "left" }
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
      { text: "Truman proposed the 'Fair Deal,' a domestic agenda that included national health insurance, increased minimum wage, and expanded Social Security benefits.", axis: "economy", pole: "left" },
      { text: "Truman attempted to nationalize the steel industry in 1952, seizing control of steel mills to prevent a strike during the Korean War.", axis: "economy", pole: "left" },
      { text: "Truman signed the Employment Act of 1946, making it the federal government's responsibility to promote maximum employment and economic stability.", axis: "economy", pole: "left" },
      { text: "Truman raised the federal minimum wage from 40 cents to 75 cents per hour in 1949.", axis: "economy", pole: "left" },
      { text: "Truman expanded Social Security benefits and coverage to an additional 10 million Americans in 1950.", axis: "economy", pole: "left" },

      // SOCIETY (5)
      { text: "Truman desegregated the United States military by executive order in 1948, ending racial segregation in the armed forces.", axis: "society", pole: "left" },
      { text: "Truman established the President's Committee on Civil Rights, which recommended anti-lynching laws and abolishing poll taxes.", axis: "society", pole: "left" },
      { text: "Truman ordered loyalty oaths for all federal employees in 1947, requiring them to swear they were not members of any subversive organization.", axis: "society", pole: "right" },
      { text: "Truman supported the creation of the House Un-American Activities Committee's investigations into alleged communist influence in American life.", axis: "society", pole: "right" },
      { text: "Truman became the first president to address the NAACP, speaking at the Lincoln Memorial in 1947 in support of civil rights.", axis: "society", pole: "left" },

      // GOVERNANCE (7)
      { text: "Truman dropped atomic bombs on Hiroshima and Nagasaki in August 1945, killing over 200,000 people and ending World War II.", axis: "governance", pole: "right" },
      { text: "Truman sent US troops to fight in the Korean War in 1950 without seeking a formal declaration of war from Congress.", axis: "governance", pole: "right" },
      { text: "Truman signed the National Security Act of 1947, creating the CIA, the National Security Council, and the Department of Defense.", axis: "governance", pole: "right" },
      { text: "Truman fired General Douglas MacArthur in 1951 for publicly contradicting the president's military strategy in Korea, asserting civilian control over the military.", axis: "governance", pole: "left" },
      { text: "Truman issued an executive order to seize private steel mills to prevent a strike during wartime, which the Supreme Court later struck down as unconstitutional.", axis: "governance", pole: "right" },
      { text: "Truman implemented a federal loyalty program that investigated over 3 million government employees for suspected disloyalty.", axis: "governance", pole: "right" },
      { text: "Truman used executive authority to desegregate the military, bypassing Congress entirely on a major civil rights issue.", axis: "governance", pole: "right" },

      // UNIVERSALITY (8)
      { text: "Truman launched the Marshall Plan in 1948, sending $13 billion in US aid to rebuild war-devastated Europe.", axis: "universality", pole: "left" },
      { text: "Truman was instrumental in creating NATO in 1949, binding the US to a permanent military alliance with Western European nations.", axis: "universality", pole: "left" },
      { text: "Truman announced the Truman Doctrine in 1947, committing the United States to containing the spread of communism worldwide.", axis: "universality", pole: "left" },
      { text: "Truman recognized the State of Israel within minutes of its declaration of independence in 1948, over the objections of the State Department.", axis: "universality", pole: "left" },
      { text: "Truman organized the Berlin Airlift in 1948–49, flying supplies into West Berlin for nearly a year to break a Soviet blockade.", axis: "universality", pole: "left" },
      { text: "Truman helped establish the United Nations, signing the UN Charter and pushing for US membership in the new international body.", axis: "universality", pole: "left" },
      { text: "Truman authorized the use of US military force in Korea under a UN mandate rather than a unilateral American declaration of war.", axis: "universality", pole: "left" },
      { text: "Truman supported the creation of the World Bank and International Monetary Fund to stabilize the post-war global economy.", axis: "universality", pole: "left" },

      // EXPANSION (5)
      { text: "Truman approved continued development of nuclear weapons after WWII, leading to the hydrogen bomb and the nuclear arms race.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Truman authorized the development of the hydrogen bomb in 1950, a weapon thousands of times more powerful than the atomic bombs used on Japan.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Truman established the Atomic Energy Commission to oversee both military and civilian nuclear research and development.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Truman oversaw the beginning of postwar economic expansion, with policies that encouraged mass industrialization and suburban growth.", axis: "expansion", sub: "growth", pole: "left" },
      { text: "Truman signed the National Science Foundation Act in 1950, creating a permanent federal agency to fund basic scientific research.", axis: "expansion", sub: "technology", pole: "left" }
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
      { text: "Eisenhower signed the Federal Aid Highway Act of 1956, spending $25 billion to build the Interstate Highway System — the largest public works project in American history.", axis: "economy", pole: "left" },
      { text: "Eisenhower maintained the New Deal's core programs like Social Security and expanded them to cover an additional 10 million workers.", axis: "economy", pole: "left" },
      { text: "Eisenhower balanced the federal budget three times during his presidency, prioritizing fiscal discipline over new spending programs.", axis: "economy", pole: "right" },
      { text: "Eisenhower approved the St. Lawrence Seaway, a massive joint US-Canada infrastructure project connecting the Great Lakes to the Atlantic Ocean.", axis: "economy", pole: "left" },
      { text: "Eisenhower kept the top marginal income tax rate at 91%, inherited from the Truman era, and did not push for significant tax cuts.", axis: "economy", pole: "left" },

      // SOCIETY (6)
      { text: "Eisenhower sent federal troops to Little Rock, Arkansas in 1957 to enforce school desegregation after the governor used the National Guard to block Black students.", axis: "society", pole: "left" },
      { text: "Eisenhower signed the Civil Rights Act of 1957, the first federal civil rights legislation since Reconstruction, creating the Civil Rights Commission.", axis: "society", pole: "left" },
      { text: "Eisenhower signed the Civil Rights Act of 1960, strengthening protections for Black voters and establishing federal inspection of voter registration polls.", axis: "society", pole: "left" },
      { text: "Eisenhower signed the National Defense Education Act in 1958, providing federal funding for education in science, math, and foreign languages after the Sputnik shock.", axis: "society", pole: "left" },
      { text: "Eisenhower added 'under God' to the Pledge of Allegiance in 1954, emphasizing the nation's religious identity during the Cold War.", axis: "society", pole: "right" },
      { text: "Eisenhower appointed Earl Warren as Chief Justice, whose court would later make landmark progressive rulings on desegregation and civil liberties.", axis: "society", pole: "left" },

      // GOVERNANCE (6)
      { text: "Eisenhower warned the nation about the 'military-industrial complex' in his farewell address, cautioning against the growing influence of defense contractors on government policy.", axis: "governance", pole: "left" },
      { text: "Eisenhower authorized the CIA to overthrow the democratically elected government of Iran in 1953, installing the Shah to protect Western oil interests.", axis: "governance", pole: "right" },
      { text: "Eisenhower authorized the CIA to overthrow the government of Guatemala in 1954 to prevent the spread of communism in Central America.", axis: "governance", pole: "right" },
      { text: "Eisenhower used the CIA for covert operations worldwide, establishing a precedent for secret government action in foreign affairs.", axis: "governance", pole: "right" },
      { text: "Eisenhower invoked executive privilege to refuse Senator McCarthy's demands for White House documents, establishing a key presidential power.", axis: "governance", pole: "right" },
      { text: "Eisenhower used federal troops to enforce a court order in Little Rock, asserting the federal government's authority to override state resistance to desegregation.", axis: "governance", pole: "right" },

      // UNIVERSALITY (5)
      { text: "Eisenhower ended the Korean War through an armistice in 1953, accepting a divided Korea rather than escalating toward a wider conflict.", axis: "universality", pole: "left" },
      { text: "Eisenhower launched the 'Atoms for Peace' program in 1953, proposing international cooperation on nuclear energy under UN oversight.", axis: "universality", pole: "left" },
      { text: "Eisenhower refused to intervene militarily in Vietnam in 1954 when France fell at Dien Bien Phu, rejecting calls for US air strikes.", axis: "universality", pole: "right" },
      { text: "Eisenhower authorized covert CIA operations in multiple countries to install pro-American governments, prioritizing US strategic interests.", axis: "universality", pole: "right" },
      { text: "Eisenhower issued the Eisenhower Doctrine, pledging US military assistance to Middle Eastern countries resisting communist aggression.", axis: "universality", pole: "left" },

      // ENVIRONMENT (2)
      { text: "Eisenhower signed legislation creating the Arctic National Wildlife Range in 1960, setting aside 8.9 million acres of Alaskan wilderness for conservation.", axis: "environment", pole: "left" },
      { text: "Eisenhower's Interstate Highway System encouraged car-dependent suburban development, significantly increasing fossil fuel consumption.", axis: "environment", pole: "right" },

      // EXPANSION (6)
      { text: "Eisenhower created NASA in 1958 and launched the US space program in response to the Soviet Sputnik satellite.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Eisenhower signed the National Aeronautics and Space Act, establishing civilian control of space exploration separate from the military.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Eisenhower supported the development of intercontinental ballistic missiles and nuclear submarine technology to maintain military advantage.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Eisenhower launched the DARPA agency (originally ARPA) to develop advanced military technology, which later gave rise to the internet.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Eisenhower promoted nuclear power for civilian energy use through the Atoms for Peace program, funding commercial reactor development.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Eisenhower's highway system was designed in part for military transport and civil defense evacuation, reflecting Cold War preparedness.", axis: "expansion", sub: "growth", pole: "left" }
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
      { text: "Kennedy created the Area Redevelopment Act to direct federal investment to economically distressed regions of the country.", axis: "economy", pole: "left" },
      { text: "Kennedy proposed Medicare to provide government-funded health insurance for elderly Americans, though Congress blocked the legislation.", axis: "economy", pole: "left" },
      { text: "Kennedy publicly confronted US Steel executives when they raised prices in 1962, pressuring them to reverse the increase to control inflation.", axis: "economy", pole: "left" },

      // SOCIETY (5)
      { text: "Kennedy proposed comprehensive civil rights legislation in 1963 that would ban discrimination in public accommodations and employment (passed as the Civil Rights Act of 1964 after his death).", axis: "society", pole: "left" },
      { text: "Kennedy sent federal marshals to the University of Mississippi in 1962 to ensure the enrollment of James Meredith, the first Black student.", axis: "society", pole: "left" },
      { text: "Kennedy established the Presidential Commission on the Status of Women in 1961, advancing the cause of gender equality in federal policy.", axis: "society", pole: "left" },
      { text: "Kennedy was slow to act on civil rights in his first two years, avoiding confrontation with Southern Democrats to protect his legislative agenda.", axis: "society", pole: "right" },
      { text: "Kennedy created the President's Council on Physical Fitness, promoting public health and active lifestyles as a national priority.", axis: "society", pole: "left" },

      // GOVERNANCE (6)
      { text: "Kennedy approved the Bay of Pigs invasion in 1961, a CIA-backed attempt to overthrow Fidel Castro's government in Cuba that ended in failure.", axis: "governance", pole: "right" },
      { text: "Kennedy personally managed the Cuban Missile Crisis in October 1962, choosing a naval blockade over military strikes to force the Soviet Union to remove nuclear missiles from Cuba.", axis: "governance", pole: "right" },
      { text: "Kennedy authorized the FBI to wiretap Martin Luther King Jr. as part of surveillance operations against civil rights leaders.", axis: "governance", pole: "right" },
      { text: "Kennedy expanded the use of Special Forces and counterinsurgency tactics, giving the military more flexibility for covert and unconventional operations.", axis: "governance", pole: "right" },
      { text: "Kennedy sent military advisors to South Vietnam, increasing the US presence from 900 to over 16,000 advisors by the time of his assassination.", axis: "governance", pole: "right" },
      { text: "Kennedy established the Arms Control and Disarmament Agency, creating a dedicated government body to negotiate weapons reduction treaties.", axis: "governance", pole: "left" },

      // UNIVERSALITY (7)
      { text: "Kennedy established the Peace Corps in 1961, sending American volunteers to developing nations to help with education, agriculture, and infrastructure.", axis: "universality", pole: "left" },
      { text: "Kennedy launched the Alliance for Progress in 1961, committing $20 billion in aid to Latin American countries to promote economic development and counter communism.", axis: "universality", pole: "left" },
      { text: "Kennedy negotiated the Nuclear Test Ban Treaty with the Soviet Union in 1963, banning nuclear weapons tests in the atmosphere, underwater, and in outer space.", axis: "universality", pole: "left" },
      { text: "Kennedy delivered his famous 'Ich bin ein Berliner' speech in 1963, expressing solidarity with West Berlin and committing the US to defend Western Europe.", axis: "universality", pole: "left" },
      { text: "Kennedy increased military aid to South Vietnam and supported the overthrow of South Vietnam's president Ngo Dinh Diem in 1963.", axis: "universality", pole: "right" },
      { text: "Kennedy imposed a trade embargo on Cuba in 1962 that remains in effect to this day, isolating the island economically.", axis: "universality", pole: "right" },
      { text: "Kennedy expanded the Food for Peace program, using US agricultural surpluses to provide food aid to developing nations.", axis: "universality", pole: "left" },

      // EXPANSION (7)
      { text: "Kennedy committed the US to landing a man on the Moon within a decade in 1961, massively increasing NASA's budget.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Kennedy increased NASA's budget by nearly 500% to fund the Apollo program, making space exploration a national priority.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Kennedy supported the development of communications satellites, leading to the creation of Telstar and global satellite communications.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Kennedy established the Office of Science and Technology in the White House to coordinate federal research across agencies.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Kennedy supported research into desalination technology, viewing it as a way to solve future water shortages through science.", axis: "expansion", sub: "technology", pole: "left" },
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
      { text: "LBJ signed Medicare into law in 1965, providing government-funded healthcare for all Americans over 65.", axis: "economy", pole: "left" },
      { text: "LBJ signed Medicaid into law in 1965, providing government-funded healthcare for low-income Americans.", axis: "economy", pole: "left" },
      { text: "LBJ launched the War on Poverty in 1964, creating programs like Head Start, Job Corps, and Community Action to fight poverty.", axis: "economy", pole: "left" },
      { text: "LBJ dramatically expanded the federal food stamp program, providing direct food assistance to millions of low-income Americans.", axis: "economy", pole: "left" },
      { text: "LBJ signed the Elementary and Secondary Education Act in 1965, directing billions in federal funds to public schools for the first time.", axis: "economy", pole: "left" },
      { text: "LBJ created the Department of Housing and Urban Development (HUD) to address housing shortages and urban poverty.", axis: "economy", pole: "left" },
      { text: "LBJ created the Department of Transportation (DOT) to coordinate federal transportation policy.", axis: "economy", pole: "left" },
      { text: "LBJ pushed through a tax cut in 1964 — originally proposed by Kennedy — reducing the top income tax rate from 91% to 70%.", axis: "economy", pole: "right" },

      // SOCIETY (8)
      { text: "LBJ signed the Civil Rights Act of 1964, banning racial discrimination in public accommodations, employment, and federally funded programs.", axis: "society", pole: "left" },
      { text: "LBJ signed the Voting Rights Act of 1965, banning literacy tests and other barriers used to prevent Black Americans from voting.", axis: "society", pole: "left" },
      { text: "LBJ signed the Fair Housing Act of 1968, prohibiting discrimination in the sale, rental, and financing of housing.", axis: "society", pole: "left" },
      { text: "LBJ signed the Immigration and Nationality Act of 1965, ending the national-origin quota system and opening immigration to people from all countries.", axis: "society", pole: "left" },
      { text: "LBJ created Head Start, providing early childhood education and nutrition services to children from low-income families.", axis: "society", pole: "left" },
      { text: "LBJ appointed Thurgood Marshall as the first Black justice on the Supreme Court in 1967.", axis: "society", pole: "left" },
      { text: "LBJ signed the Higher Education Act of 1965, creating federal scholarships, loans, and work-study programs to make college accessible.", axis: "society", pole: "left" },
      { text: "LBJ established the National Endowment for the Arts and the National Endowment for the Humanities to fund cultural and artistic programs.", axis: "society", pole: "left" },

      // GOVERNANCE (5)
      { text: "LBJ escalated the Vietnam War based on the Gulf of Tonkin Resolution, which was passed based on claims later shown to be misleading.", axis: "governance", pole: "right" },
      { text: "LBJ escalated US troop levels in Vietnam from 16,000 advisors to over 500,000 combat soldiers without a formal declaration of war.", axis: "governance", pole: "right" },
      { text: "LBJ used the FBI to surveil civil rights leaders and anti-war activists, expanding domestic intelligence operations.", axis: "governance", pole: "right" },
      { text: "LBJ's Great Society programs dramatically expanded the size and scope of the federal government in education, health, and housing.", axis: "governance", pole: "right" },
      { text: "LBJ used masterful legislative tactics to push landmark legislation through Congress, applying personal pressure to individual members.", axis: "governance", pole: "right" },

      // UNIVERSALITY (4)
      { text: "LBJ massively escalated the Vietnam War, committing over half a million American troops to fight in Southeast Asia.", axis: "universality", pole: "right" },
      { text: "LBJ signed the Immigration and Nationality Act of 1965, replacing the quota system with one based on family reunification and skills.", axis: "universality", pole: "left" },
      { text: "LBJ provided military and financial support to Israel during the 1967 Six-Day War.", axis: "universality", pole: "left" },
      { text: "LBJ sent US Marines to the Dominican Republic in 1965 to prevent what he claimed was a communist takeover.", axis: "universality", pole: "right" },

      // ENVIRONMENT (3)
      { text: "LBJ signed the Wilderness Act of 1964, permanently protecting 9.1 million acres of federal land from development.", axis: "environment", pole: "left" },
      { text: "LBJ signed the Highway Beautification Act of 1965, limiting billboards and promoting landscaping along federal highways.", axis: "environment", pole: "left" },
      { text: "LBJ signed the Clean Air Act of 1963, establishing the first federal standards to limit air pollution.", axis: "environment", pole: "left" },

      // EXPANSION (2)
      { text: "LBJ continued Kennedy's Apollo program and increased NASA's budget, overseeing the missions that led to the Moon landing.", axis: "expansion", sub: "space", pole: "left" },
      { text: "LBJ signed the Public Broadcasting Act of 1967, creating PBS and NPR to provide educational media.", axis: "expansion", sub: "technology", pole: "left" }
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
      { text: "Nixon imposed wage and price controls in 1971, freezing wages and prices for 90 days to combat inflation — an unusual move for a Republican.", axis: "economy", pole: "left" },
      { text: "Nixon ended the gold standard in 1971, allowing the US dollar to float freely and fundamentally changing the global financial system.", axis: "economy", pole: "right" },
      { text: "Nixon proposed a Family Assistance Plan that would have guaranteed a minimum income for all American families, though Congress rejected it.", axis: "economy", pole: "left" },
      { text: "Nixon signed the Occupational Safety and Health Act (OSHA) in 1970, creating federal workplace safety standards enforced by government inspectors.", axis: "economy", pole: "left" },
      { text: "Nixon expanded food stamp eligibility and standardized benefits nationally, dramatically increasing access to food assistance.", axis: "economy", pole: "left" },
      { text: "Nixon indexed Social Security benefits to inflation for the first time, ensuring payments automatically kept pace with rising prices.", axis: "economy", pole: "left" },

      // SOCIETY (6)
      { text: "Nixon launched the War on Drugs in 1971, dramatically increasing criminal penalties for drug possession and use.", axis: "society", pole: "right" },
      { text: "Nixon signed Title IX in 1972, prohibiting gender discrimination in federally funded education programs and dramatically expanding women's athletics.", axis: "society", pole: "left" },
      { text: "Nixon implemented the Philadelphia Plan in 1969, requiring federal contractors to set specific goals for hiring minority workers — the first significant affirmative action policy.", axis: "society", pole: "left" },
      { text: "Nixon ended the military draft in 1973, transitioning to an all-volunteer armed forces.", axis: "society", pole: "left" },
      { text: "Nixon pursued a 'Southern Strategy,' appealing to white racial resentment in the South to realign the Republican Party.", axis: "society", pole: "right" },
      { text: "Nixon signed the Indian Self-Determination Act, giving Native American tribes more control over their own affairs and federal programs.", axis: "society", pole: "left" },

      // GOVERNANCE (7)
      { text: "Nixon resigned from the presidency in August 1974 after the Watergate scandal revealed he had obstructed justice and abused the power of his office.", axis: "governance", pole: "right" },
      { text: "Nixon created the 'Plumbers' — a secret White House unit that conducted illegal wiretapping, break-ins, and political espionage.", axis: "governance", pole: "right" },
      { text: "Nixon ordered the 'Saturday Night Massacre' in 1973, firing the special prosecutor investigating Watergate after both the Attorney General and Deputy AG resigned rather than carry it out.", axis: "governance", pole: "right" },
      { text: "Nixon secretly bombed Cambodia in 1969–70 without notifying Congress or the American public.", axis: "governance", pole: "right" },
      { text: "Nixon used the IRS to target political opponents with tax audits and investigations.", axis: "governance", pole: "right" },
      { text: "Nixon maintained an 'enemies list' of political opponents, journalists, and activists targeted for government harassment.", axis: "governance", pole: "right" },
      { text: "Nixon invoked executive privilege to withhold White House tape recordings from investigators, a claim the Supreme Court ultimately rejected.", axis: "governance", pole: "right" },

      // UNIVERSALITY (5)
      { text: "Nixon opened diplomatic relations with China in 1972 after more than two decades of mutual isolation, visiting Beijing and meeting Mao Zedong.", axis: "universality", pole: "left" },
      { text: "Nixon pursued détente with the Soviet Union, seeking to reduce Cold War tensions through diplomacy rather than confrontation.", axis: "universality", pole: "left" },
      { text: "Nixon signed the SALT I treaty with the Soviet Union in 1972, imposing the first limits on each nation's nuclear arsenal.", axis: "universality", pole: "left" },
      { text: "Nixon withdrew US troops from Vietnam, reducing forces from 500,000 to near zero during his presidency.", axis: "universality", pole: "right" },
      { text: "Nixon supported Pakistan during the 1971 Bangladesh Liberation War despite reports of atrocities, prioritizing the US-Pakistan alliance over humanitarian concerns.", axis: "universality", pole: "right" },

      // ENVIRONMENT (4)
      { text: "Nixon created the Environmental Protection Agency (EPA) in 1970, establishing the first federal agency dedicated to environmental regulation.", axis: "environment", pole: "left" },
      { text: "Nixon signed the Clean Air Act of 1970, setting ambitious federal standards for air quality and automobile emissions.", axis: "environment", pole: "left" },
      { text: "Nixon signed the Endangered Species Act of 1973, giving the federal government power to protect wildlife habitats even at the cost of development projects.", axis: "environment", pole: "left" },
      { text: "Nixon signed the National Environmental Policy Act, requiring environmental impact assessments for all major federal projects.", axis: "environment", pole: "left" },

      // EXPANSION (2)
      { text: "Nixon approved the Space Shuttle program, shifting NASA from Apollo-era exploration to a reusable launch vehicle system.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Nixon signed the National Cancer Act of 1971, declaring a 'War on Cancer' and dramatically increasing federal funding for medical research.", axis: "expansion", sub: "bioethics", pole: "left" }
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
      { text: "Ford launched the 'Whip Inflation Now' (WIN) campaign, asking Americans to voluntarily cut spending and save energy rather than imposing government controls.", axis: "economy", pole: "right" },
      { text: "Ford refused to provide a federal bailout to New York City during its financial crisis, leading to the famous headline 'Ford to City: Drop Dead.'", axis: "economy", pole: "right" },
      { text: "Ford eventually approved a federal loan guarantee package for New York City after initially refusing, preventing the city's bankruptcy.", axis: "economy", pole: "left" },
      { text: "Ford signed the Employee Retirement Income Security Act (ERISA), establishing federal standards to protect workers' pension plans.", axis: "economy", pole: "left" },
      { text: "Ford deregulated the railroad industry, reducing government control over rail pricing and routes.", axis: "economy", pole: "right" },
      { text: "Ford proposed a one-time tax rebate and temporary tax cut to stimulate the economy during the 1974–75 recession.", axis: "economy", pole: "right" },

      // SOCIETY (5)
      { text: "Ford signed the Education for All Handicapped Children Act in 1975, requiring public schools to provide equal access and free education to children with disabilities.", axis: "society", pole: "left" },
      { text: "Ford offered a conditional clemency program for Vietnam War draft evaders and deserters, allowing them to earn their way back without full criminal pardon.", axis: "society", pole: "left" },
      { text: "Ford's wife Betty openly advocated for the Equal Rights Amendment and women's rights, influencing public conversation on gender equality.", axis: "society", pole: "left" },
      { text: "Ford opposed court-ordered busing to achieve school desegregation, calling it a flawed remedy that disrupted local communities.", axis: "society", pole: "right" },
      { text: "Ford signed the Voting Rights Act extension in 1975, expanding protections for language-minority voters.", axis: "society", pole: "left" },

      // GOVERNANCE (8)
      { text: "Ford granted a full, unconditional presidential pardon to Richard Nixon in 1974, preventing any criminal prosecution for Watergate.", axis: "governance", pole: "right" },
      { text: "Ford assumed the presidency without being elected by the public, having been appointed vice president under the 25th Amendment after Spiro Agnew's resignation.", axis: "governance", pole: "right" },
      { text: "Ford signed the Helsinki Accords in 1975, committing the US and 34 other nations to respect human rights and territorial boundaries in Europe.", axis: "governance", pole: "left" },
      { text: "Ford supported the Church Committee investigations into CIA and FBI abuses of power, leading to major intelligence reforms.", axis: "governance", pole: "left" },
      { text: "Ford signed Executive Order 11905, banning US government employees from engaging in political assassinations.", axis: "governance", pole: "left" },
      { text: "Ford relied heavily on vetoes to control Congressional spending, often overriding the will of the Democratic-controlled legislature.", axis: "governance", pole: "right" },
      { text: "Ford maintained the policy of détente with the Soviet Union despite pressure from conservatives to take a harder line.", axis: "governance", pole: "left" },
      { text: "Ford managed the fall of Saigon in 1975, evacuating over 130,000 South Vietnamese refugees as the country fell to North Vietnam.", axis: "governance", pole: "left" },

      // UNIVERSALITY (5)
      { text: "Ford signed the Helsinki Accords, which included human rights provisions that became a tool for dissidents behind the Iron Curtain.", axis: "universality", pole: "left" },
      { text: "Ford evacuated over 130,000 South Vietnamese refugees during the fall of Saigon, resettling many in the United States.", axis: "universality", pole: "left" },
      { text: "Ford maintained détente with the Soviet Union, continuing arms control negotiations and diplomatic engagement.", axis: "universality", pole: "left" },
      { text: "Ford declined to meet with the Dalai Lama to avoid antagonizing China, prioritizing diplomatic relations over human rights symbolism.", axis: "universality", pole: "right" },
      { text: "Ford oversaw the Mayaguez incident in 1975, ordering a military operation to rescue an American merchant ship seized by Cambodia.", axis: "universality", pole: "right" },

      // ENVIRONMENT (2)
      { text: "Ford signed the Toxic Substances Control Act in 1976, giving the EPA authority to regulate hazardous chemicals.", axis: "environment", pole: "left" },
      { text: "Ford signed the Resource Conservation and Recovery Act, establishing federal standards for the management and disposal of hazardous waste.", axis: "environment", pole: "left" },

      // EXPANSION (3)
      { text: "Ford oversaw the Apollo-Soyuz Test Project in 1975, the first joint US-Soviet space mission and a symbol of détente.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Ford continued funding for the Space Shuttle program, maintaining NASA's long-term mission despite budget pressures.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Ford signed the National Science and Technology Policy Act, establishing a formal framework for federal science policy coordination.", axis: "expansion", sub: "technology", pole: "left" }
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
      { text: "Carter deregulated the airline industry in 1978, ending government control of airline routes and ticket prices.", axis: "economy", pole: "right" },
      { text: "Carter deregulated the trucking and railroad industries, removing federal price controls and opening the market to competition.", axis: "economy", pole: "right" },
      { text: "Carter signed the Crude Oil Windfall Profit Tax, taxing oil companies on excess profits from deregulated oil prices.", axis: "economy", pole: "left" },
      { text: "Carter created the Department of Energy in 1977 to coordinate national energy policy during the oil crisis.", axis: "economy", pole: "left" },
      { text: "Carter legalized homebrewing of beer and wine, deregulating a personal activity that had been restricted since Prohibition.", axis: "economy", pole: "right" },

      // SOCIETY (4)
      { text: "Carter created the Department of Education in 1979, elevating education to a cabinet-level federal priority.", axis: "society", pole: "left" },
      { text: "Carter appointed more women and minorities to federal positions than any previous president.", axis: "society", pole: "left" },
      { text: "Carter granted amnesty to Vietnam War draft evaders on his first day in office, fulfilling a campaign promise.", axis: "society", pole: "left" },
      { text: "Carter supported the Equal Rights Amendment, publicly advocating for its ratification by the states.", axis: "society", pole: "left" },

      // GOVERNANCE (5)
      { text: "Carter made human rights a cornerstone of US foreign policy, conditioning aid on countries' human rights records for the first time.", axis: "governance", pole: "left" },
      { text: "Carter established the Federal Emergency Management Agency (FEMA) in 1979 to coordinate the government's response to natural disasters.", axis: "governance", pole: "left" },
      { text: "Carter signed the Foreign Intelligence Surveillance Act (FISA) in 1978, requiring court approval for domestic surveillance operations.", axis: "governance", pole: "left" },
      { text: "Carter's presidency saw the Iran hostage crisis, in which 52 American diplomats were held for 444 days without successful rescue.", axis: "governance", pole: "left" },
      { text: "Carter authorized a failed military rescue mission (Operation Eagle Claw) to free the American hostages in Iran, which ended in disaster.", axis: "governance", pole: "right" },

      // UNIVERSALITY (8)
      { text: "Carter brokered the Camp David Accords in 1978, achieving a historic peace treaty between Israel and Egypt.", axis: "universality", pole: "left" },
      { text: "Carter returned control of the Panama Canal to Panama through the Panama Canal Treaties, voluntarily limiting US territorial control abroad.", axis: "universality", pole: "left" },
      { text: "Carter imposed a grain embargo on the Soviet Union after its invasion of Afghanistan in 1979.", axis: "universality", pole: "right" },
      { text: "Carter boycotted the 1980 Moscow Olympics in protest of the Soviet invasion of Afghanistan.", axis: "universality", pole: "right" },
      { text: "Carter made human rights the centerpiece of American foreign policy, criticizing allied dictatorships as well as communist regimes.", axis: "universality", pole: "left" },
      { text: "Carter normalized diplomatic relations with the People's Republic of China in 1979, formally severing ties with Taiwan.", axis: "universality", pole: "left" },
      { text: "Carter negotiated the SALT II arms limitation treaty with the Soviet Union, though the Senate never ratified it.", axis: "universality", pole: "left" },
      { text: "Carter withdrew US support from Nicaraguan dictator Anastasio Somoza, refusing to prop up a human rights abuser.", axis: "universality", pole: "left" },

      // ENVIRONMENT (5)
      { text: "Carter installed solar panels on the White House roof in 1979, symbolically promoting renewable energy.", axis: "environment", pole: "left" },
      { text: "Carter signed the Alaska National Interest Lands Conservation Act in 1980, protecting over 100 million acres of Alaskan wilderness — the largest conservation act in US history.", axis: "environment", pole: "left" },
      { text: "Carter promoted energy conservation during the oil crisis, urging Americans to turn down thermostats and reduce consumption.", axis: "environment", pole: "left" },
      { text: "Carter invested federal funds in renewable energy research and development, including solar and wind power.", axis: "environment", pole: "left" },
      { text: "Carter managed the Three Mile Island nuclear accident in 1979, overseeing the federal response to the worst commercial nuclear incident in US history.", axis: "environment", pole: "left" },

      // EXPANSION (3)
      { text: "Carter reduced NASA's budget and did not pursue major new space exploration initiatives, focusing resources on domestic priorities.", axis: "expansion", sub: "space", pole: "right" },
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
      { text: "Reagan fired over 11,000 striking air traffic controllers (PATCO) in 1981, permanently banning them from federal employment.", axis: "economy", pole: "right" },
      { text: "Reagan pursued widespread deregulation of industries including savings and loans, telecommunications, and transportation.", axis: "economy", pole: "right" },
      { text: "Reagan signed the Immigration Reform and Control Act of 1986, granting amnesty and a path to citizenship to approximately 3 million undocumented immigrants.", axis: "economy", pole: "left" },
      { text: "Reagan tripled the national debt from $994 billion to $2.87 trillion during his presidency through a combination of tax cuts and increased military spending.", axis: "economy", pole: "right" },
      { text: "Reagan cut funding for social welfare programs including food stamps, school lunch subsidies, and public housing.", axis: "economy", pole: "right" },
      { text: "Reagan implemented 'supply-side economics' (Reaganomics), arguing that tax cuts for businesses and wealthy individuals would generate economic growth that benefits everyone.", axis: "economy", pole: "right" },

      // SOCIETY (6)
      { text: "Reagan was slow to publicly acknowledge or respond to the AIDS epidemic, not mentioning AIDS publicly until 1985, years after thousands had already died.", axis: "society", pole: "right" },
      { text: "Reagan escalated the War on Drugs, supporting mandatory minimum sentences and dramatically increasing incarceration rates.", axis: "society", pole: "right" },
      { text: "Reagan appointed Sandra Day O'Connor as the first woman on the Supreme Court in 1981.", axis: "society", pole: "left" },
      { text: "Reagan promoted 'traditional family values' as a central pillar of his domestic agenda, aligning with the religious right.", axis: "society", pole: "right" },
      { text: "Reagan signed the Martin Luther King Jr. holiday into law in 1983, making it a federal holiday despite initially opposing it.", axis: "society", pole: "left" },
      { text: "Reagan signed the Immigration Reform and Control Act of 1986, which provided amnesty to millions of undocumented immigrants while also increasing border enforcement.", axis: "society", pole: "left" },

      // GOVERNANCE (5)
      { text: "The Iran-Contra affair revealed that Reagan's administration secretly sold weapons to Iran and used the proceeds to fund Contra rebels in Nicaragua, violating Congressional law.", axis: "governance", pole: "right" },
      { text: "Reagan expanded executive power through the use of signing statements, attaching interpretive statements to legislation that influenced how laws were implemented.", axis: "governance", pole: "right" },
      { text: "Reagan reduced the size of the federal bureaucracy and promoted the idea that 'government is not the solution to our problem; government is the problem.'", axis: "governance", pole: "left" },
      { text: "Reagan supported the Contras in Nicaragua through covert CIA operations, funding anti-communist guerrillas in defiance of Congressional restrictions.", axis: "governance", pole: "right" },
      { text: "Reagan ordered the invasion of Grenada in 1983 to overthrow a Marxist government, acting without Congressional authorization.", axis: "governance", pole: "right" },

      // UNIVERSALITY (5)
      { text: "Reagan massively increased military spending to pressure the Soviet Union, pursuing 'peace through strength' rather than arms control.", axis: "universality", pole: "right" },
      { text: "Reagan called on Soviet leader Gorbachev to 'tear down this wall' in a 1987 speech at the Berlin Wall.", axis: "universality", pole: "left" },
      { text: "Reagan signed the INF Treaty in 1987, eliminating all intermediate-range nuclear missiles — the first treaty to actually reduce the nuclear arsenal.", axis: "universality", pole: "left" },
      { text: "Reagan supported anti-communist movements worldwide, providing military aid to fighters in Afghanistan, Angola, Nicaragua, and Cambodia.", axis: "universality", pole: "right" },
      { text: "Reagan imposed economic sanctions on South Africa's apartheid government, though only after Congress overrode his veto.", axis: "universality", pole: "left" },

      // ENVIRONMENT (3)
      { text: "Reagan removed the solar panels Carter had installed on the White House roof and cut federal funding for renewable energy research.", axis: "environment", pole: "right" },
      { text: "Reagan cut the EPA's budget by nearly 30% and appointed administrators who were skeptical of environmental regulation.", axis: "environment", pole: "right" },
      { text: "Reagan weakened enforcement of the Clean Air Act and delayed action on acid rain, prioritizing industry over environmental concerns.", axis: "environment", pole: "right" },

      // EXPANSION (4)
      { text: "Reagan launched the Strategic Defense Initiative (SDI or 'Star Wars'), proposing a space-based missile defense system using advanced technology.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Reagan increased military research and development spending, funding advances in computing, communications, and weapons technology.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Reagan pursued rapid economic growth as a primary goal, arguing that a growing economy solves more problems than government regulation.", axis: "expansion", sub: "growth", pole: "left" },
      { text: "Reagan commissioned the Space Shuttle Challenger investigation and continued support for the shuttle program after the 1986 disaster.", axis: "expansion", sub: "space", pole: "left" }
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
      { text: "George H.W. Bush raised taxes in 1990, breaking his famous 'read my lips: no new taxes' campaign pledge to reduce the deficit.", axis: "economy", pole: "left" },
      { text: "Bush signed the savings and loan bailout, spending over $100 billion in taxpayer funds to rescue the failed savings industry.", axis: "economy", pole: "left" },
      { text: "Bush negotiated the North American Free Trade Agreement (NAFTA), laying the groundwork for free trade between the US, Canada, and Mexico.", axis: "economy", pole: "right" },
      { text: "Bush signed the Immigration Act of 1990, increasing legal immigration by 40% and creating the diversity visa lottery program.", axis: "economy", pole: "left" },
      { text: "Bush presided over an economic recession in 1990–91 that contributed to his loss of re-election.", axis: "economy", pole: "right" },

      // SOCIETY (5)
      { text: "Bush signed the Americans with Disabilities Act (ADA) in 1990, prohibiting discrimination against people with disabilities in employment, public services, and accommodations.", axis: "society", pole: "left" },
      { text: "Bush appointed Clarence Thomas to the Supreme Court in 1991, a conservative justice whose confirmation hearings were marred by allegations of sexual harassment.", axis: "society", pole: "right" },
      { text: "Bush signed the Immigration Act of 1990, which expanded legal immigration and created pathways for family reunification and skilled workers.", axis: "society", pole: "left" },
      { text: "Bush vetoed the Civil Rights Act of 1990, arguing it would lead to hiring quotas, before signing a compromise version in 1991.", axis: "society", pole: "right" },
      { text: "Bush signed the Hate Crime Statistics Act of 1990, requiring the federal government to collect data on crimes motivated by prejudice.", axis: "society", pole: "left" },

      // GOVERNANCE (5)
      { text: "Bush ordered the invasion of Panama in 1989 to remove dictator Manuel Noriega, who had been a US intelligence asset before being indicted for drug trafficking.", axis: "governance", pole: "right" },
      { text: "Bush pardoned six Iran-Contra officials in 1992, including former Defense Secretary Caspar Weinberger, before they could be tried.", axis: "governance", pole: "right" },
      { text: "Bush assembled a coalition and sought UN authorization before launching the Gulf War, following established international legal processes.", axis: "governance", pole: "left" },
      { text: "Bush chose not to march on Baghdad after liberating Kuwait, deciding against regime change in Iraq despite having the military capability.", axis: "governance", pole: "left" },
      { text: "Bush signed the Budget Enforcement Act of 1990, imposing 'pay-as-you-go' rules requiring new spending to be offset by cuts or revenue.", axis: "governance", pole: "left" },

      // UNIVERSALITY (8)
      { text: "Bush built a 35-nation coalition to liberate Kuwait from Iraqi invasion in 1991, working through the United Nations.", axis: "universality", pole: "left" },
      { text: "Bush negotiated the START I treaty with the Soviet Union, reducing strategic nuclear weapons by about 35%.", axis: "universality", pole: "left" },
      { text: "Bush supported German reunification in 1990, encouraging the peaceful integration of East Germany into a united, NATO-aligned Germany.", axis: "universality", pole: "left" },
      { text: "Bush managed the peaceful end of the Cold War, engaging diplomatically with Gorbachev as the Soviet Union dissolved.", axis: "universality", pole: "left" },
      { text: "Bush sent US troops to Somalia in 1992 on a humanitarian mission to address mass famine.", axis: "universality", pole: "left" },
      { text: "Bush provided aid to the former Soviet republics to help them transition to market economies and democratic governance.", axis: "universality", pole: "left" },
      { text: "Bush imposed sanctions on China after the Tiananmen Square massacre but maintained diplomatic engagement and trade.", axis: "universality", pole: "left" },
      { text: "Bush signed the NAFTA framework, promoting hemispheric free trade and economic integration in North America.", axis: "universality", pole: "left" },

      // ENVIRONMENT (4)
      { text: "Bush signed the Clean Air Act Amendments of 1990, establishing a cap-and-trade system for sulfur dioxide to reduce acid rain.", axis: "environment", pole: "left" },
      { text: "Bush expanded protections for wetlands and signed the Oil Pollution Act after the Exxon Valdez disaster in Alaska.", axis: "environment", pole: "left" },
      { text: "Bush resisted binding international commitments at the 1992 Earth Summit in Rio de Janeiro, refusing to sign the biodiversity treaty.", axis: "environment", pole: "right" },
      { text: "Bush signed the Energy Policy Act of 1992, promoting energy conservation and alternative fuels.", axis: "environment", pole: "left" },

      // EXPANSION (3)
      { text: "Bush continued funding for the Space Station Freedom project (later the International Space Station), maintaining US leadership in space.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Bush supported the Human Genome Project, providing federal funding for the effort to sequence the complete human DNA.", axis: "expansion", sub: "bioethics", pole: "left" },
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
      { text: "Clinton signed NAFTA into law in 1993, creating a free trade zone between the US, Canada, and Mexico.", axis: "economy", pole: "right" },
      { text: "Clinton achieved four consecutive budget surpluses (1998–2001), the first in decades, through spending restraint and higher taxes on top earners.", axis: "economy", pole: "left" },
      { text: "Clinton signed welfare reform in 1996, requiring work requirements for public assistance and imposing time limits on benefits.", axis: "economy", pole: "right" },
      { text: "Clinton raised the top income tax rate from 31% to 39.6% as part of his 1993 deficit reduction plan.", axis: "economy", pole: "left" },
      { text: "Clinton signed the Gramm-Leach-Bliley Act in 1999, repealing Glass-Steagall and allowing commercial banks, investment banks, and insurance companies to merge.", axis: "economy", pole: "right" },
      { text: "Clinton signed the Commodity Futures Modernization Act of 2000, exempting derivatives from regulation — later blamed as a factor in the 2008 financial crisis.", axis: "economy", pole: "right" },
      { text: "Clinton supported China's entry into the World Trade Organization, arguing that trade engagement would promote democracy and benefit American consumers.", axis: "economy", pole: "right" },

      // SOCIETY (6)
      { text: "Clinton signed the Defense of Marriage Act (DOMA) in 1996, defining marriage under federal law as between one man and one woman.", axis: "society", pole: "right" },
      { text: "Clinton implemented the 'Don't Ask, Don't Tell' policy for the military, allowing gay Americans to serve as long as they concealed their sexual orientation.", axis: "society", pole: "right" },
      { text: "Clinton signed the Brady Bill in 1993, requiring background checks for firearm purchases from licensed dealers.", axis: "society", pole: "left" },
      { text: "Clinton signed the Violent Crime Control and Law Enforcement Act of 1994, which funded more police officers but also expanded mandatory minimum sentences and contributed to mass incarceration.", axis: "society", pole: "right" },
      { text: "Clinton signed the Family and Medical Leave Act in 1993, requiring employers to provide 12 weeks of unpaid leave for family and medical reasons.", axis: "society", pole: "left" },
      { text: "Clinton created the Children's Health Insurance Program (CHIP) in 1997, providing health coverage to millions of uninsured children.", axis: "society", pole: "left" },

      // GOVERNANCE (5)
      { text: "Clinton was impeached by the House of Representatives in 1998 for perjury and obstruction of justice related to the Monica Lewinsky affair, but was acquitted by the Senate.", axis: "governance", pole: "right" },
      { text: "Clinton signed the Telecommunications Act of 1996, the first major overhaul of telecom law in 62 years, which deregulated the industry and allowed media consolidation.", axis: "governance", pole: "right" },
      { text: "Clinton used executive orders to designate millions of acres of federal land as national monuments, bypassing Congress.", axis: "governance", pole: "right" },
      { text: "Clinton signed the Antiterrorism and Effective Death Penalty Act of 1996, expanding federal death penalty provisions and limiting habeas corpus appeals.", axis: "governance", pole: "right" },
      { text: "Clinton reduced the size of the federal workforce by over 300,000 employees through the 'Reinventing Government' initiative.", axis: "governance", pole: "left" },

      // UNIVERSALITY (5)
      { text: "Clinton ordered airstrikes against Serbia during the Kosovo War in 1999 without UN Security Council authorization, to stop ethnic cleansing.", axis: "universality", pole: "left" },
      { text: "Clinton brokered the Oslo Accords and hosted peace negotiations between Israel and the Palestinians.", axis: "universality", pole: "left" },
      { text: "Clinton failed to intervene to prevent the Rwandan genocide in 1994, which killed approximately 800,000 people.", axis: "universality", pole: "right" },
      { text: "Clinton launched cruise missile strikes against suspected terrorist targets in Afghanistan and Sudan in 1998.", axis: "universality", pole: "right" },
      { text: "Clinton expanded NATO to include former Warsaw Pact countries Poland, Hungary, and the Czech Republic.", axis: "universality", pole: "left" },

      // ENVIRONMENT (4)
      { text: "Clinton designated millions of acres of federal land as protected national monuments, permanently blocking mining and logging.", axis: "environment", pole: "left" },
      { text: "Clinton signed the Kyoto Protocol in 1997, committing the US to reduce greenhouse gas emissions, though the Senate never ratified it.", axis: "environment", pole: "left" },
      { text: "Clinton established the Roadless Area Conservation Rule, protecting 58.5 million acres of national forest from road building and logging.", axis: "environment", pole: "left" },
      { text: "Clinton signed executive orders to protect national parks and promote environmental justice in disadvantaged communities.", axis: "environment", pole: "left" },

      // EXPANSION (3)
      { text: "Clinton invested heavily in the Human Genome Project, which successfully mapped the entire human DNA sequence by 2003.", axis: "expansion", sub: "bioethics", pole: "left" },
      { text: "Clinton promoted the expansion of the internet and e-commerce, signing the Internet Tax Freedom Act and funding broadband development.", axis: "expansion", sub: "technology", pole: "left" },
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
      { text: "Bush signed tax cuts in 2001 and 2003, reducing rates across all income brackets with the largest percentage reductions for top earners.", axis: "economy", pole: "right" },
      { text: "Bush signed the Medicare Prescription Drug Improvement and Modernization Act (Part D), the largest expansion of Medicare since its creation.", axis: "economy", pole: "left" },
      { text: "Bush signed the TARP bank bailout in 2008, authorizing $700 billion in taxpayer funds to rescue failing financial institutions during the financial crisis.", axis: "economy", pole: "left" },
      { text: "Bush promoted an 'ownership society,' advocating for privatizing Social Security accounts so individuals could invest their own retirement funds.", axis: "economy", pole: "right" },
      { text: "Bush pushed for deregulation of the housing market, encouraging expanded homeownership that contributed to the subprime mortgage crisis.", axis: "economy", pole: "right" },

      // SOCIETY (5)
      { text: "Bush signed the No Child Left Behind Act in 2002, imposing federal testing requirements on all public schools and penalizing low-performing schools.", axis: "society", pole: "right" },
      { text: "Bush restricted federal funding for embryonic stem cell research in 2001, limiting it to existing cell lines on ethical grounds.", axis: "society", pole: "right" },
      { text: "Bush supported a constitutional amendment to ban same-sex marriage, though it failed to pass Congress.", axis: "society", pole: "right" },
      { text: "Bush created PEPFAR (the President's Emergency Plan for AIDS Relief), the largest global health initiative focused on a single disease, saving millions of lives in Africa.", axis: "society", pole: "left" },
      { text: "Bush appointed John Roberts and Samuel Alito to the Supreme Court, shifting the Court in a conservative direction for decades.", axis: "society", pole: "right" },

      // GOVERNANCE (8)
      { text: "Bush signed the USA PATRIOT Act after 9/11, dramatically expanding government surveillance powers, including monitoring communications without individual warrants.", axis: "governance", pole: "right" },
      { text: "Bush created the Department of Homeland Security in 2002, the largest federal reorganization in over 50 years, consolidating 22 agencies.", axis: "governance", pole: "right" },
      { text: "Bush authorized the NSA warrantless wiretapping program, secretly monitoring Americans' phone calls and emails without court approval.", axis: "governance", pole: "right" },
      { text: "Bush authorized 'enhanced interrogation techniques' including waterboarding on suspected terrorists detained at Guantanamo Bay and CIA black sites.", axis: "governance", pole: "right" },
      { text: "Bush declared that the Geneva Conventions did not apply to 'enemy combatants,' creating a new legal category for detainees outside traditional prisoner-of-war protections.", axis: "governance", pole: "right" },
      { text: "Bush used signing statements over 150 times to assert the power to bypass provisions of laws he signed, more than any previous president.", axis: "governance", pole: "right" },
      { text: "Bush's administration was widely criticized for its slow response to Hurricane Katrina in 2005, which devastated New Orleans.", axis: "governance", pole: "right" },
      { text: "Bush expanded executive power through the 'unitary executive theory,' arguing the president has broad authority over the executive branch.", axis: "governance", pole: "right" },

      // UNIVERSALITY (7)
      { text: "Bush launched the invasion of Iraq in 2003 based on claims that Saddam Hussein possessed weapons of mass destruction, which were never found.", axis: "universality", pole: "right" },
      { text: "Bush launched the invasion of Afghanistan in 2001 to destroy al-Qaeda and topple the Taliban government after the September 11 attacks.", axis: "universality", pole: "right" },
      { text: "Bush created PEPFAR, which invested over $15 billion to fight HIV/AIDS in Africa, saving an estimated 20 million lives.", axis: "universality", pole: "left" },
      { text: "Bush pursued a 'preemptive war' doctrine, asserting America's right to strike potential threats before they materialize.", axis: "universality", pole: "right" },
      { text: "Bush withdrew the US from the Anti-Ballistic Missile Treaty with Russia to pursue missile defense systems.", axis: "universality", pole: "right" },
      { text: "Bush rejected the Kyoto Protocol on climate change, arguing it would harm the US economy and unfairly exempt developing nations.", axis: "universality", pole: "right" },
      { text: "Bush built a 'coalition of the willing' for the Iraq invasion, bypassing the UN Security Council when it refused authorization.", axis: "universality", pole: "right" },

      // ENVIRONMENT (2)
      { text: "Bush rejected the Kyoto Protocol in 2001, arguing that emission reduction targets would harm the US economy.", axis: "environment", pole: "right" },
      { text: "Bush opened previously protected federal lands to oil and gas exploration and weakened enforcement of existing environmental regulations.", axis: "environment", pole: "right" },

      // EXPANSION (3)
      { text: "Bush restricted federal funding for embryonic stem cell research to existing cell lines, limiting scientific research on ethical grounds.", axis: "expansion", sub: "bioethics", pole: "right" },
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
      { text: "Obama signed the Affordable Care Act (Obamacare) in 2010, expanding government-subsidized health insurance to over 20 million previously uninsured Americans.", axis: "economy", pole: "left" },
      { text: "Obama signed the Dodd-Frank Wall Street Reform Act in 2010, imposing stricter regulations on banks and financial institutions after the 2008 crisis.", axis: "economy", pole: "left" },
      { text: "Obama signed the American Recovery and Reinvestment Act in 2009, a $787 billion stimulus package to combat the Great Recession.", axis: "economy", pole: "left" },
      { text: "Obama authorized the auto industry bailout, using federal funds to rescue General Motors and Chrysler from bankruptcy.", axis: "economy", pole: "left" },
      { text: "Obama raised the top income tax rate from 35% to 39.6% as part of the 2012 fiscal cliff deal.", axis: "economy", pole: "left" },

      // SOCIETY (6)
      { text: "Obama endorsed same-sex marriage in 2012, becoming the first sitting president to publicly support marriage equality.", axis: "society", pole: "left" },
      { text: "Obama created DACA (Deferred Action for Childhood Arrivals) in 2012, shielding undocumented immigrants brought to the US as children from deportation.", axis: "society", pole: "left" },
      { text: "Obama signed the Lilly Ledbetter Fair Pay Act in 2009, making it easier for women to file pay discrimination lawsuits.", axis: "society", pole: "left" },
      { text: "Obama appointed Sonia Sotomayor and Elena Kagan to the Supreme Court, adding the third and fourth women in the Court's history.", axis: "society", pole: "left" },
      { text: "Obama repealed 'Don't Ask, Don't Tell' in 2010, allowing gay and lesbian Americans to serve openly in the military.", axis: "society", pole: "left" },
      { text: "Obama signed the Matthew Shepard and James Byrd Jr. Hate Crimes Prevention Act, expanding federal hate crime protections to include sexual orientation and gender identity.", axis: "society", pole: "left" },

      // GOVERNANCE (6)
      { text: "Obama used executive action to create DACA after Congress refused to pass comprehensive immigration reform, bypassing the legislative process.", axis: "governance", pole: "right" },
      { text: "Obama dramatically expanded the use of drone strikes in Pakistan, Yemen, and Somalia, killing suspected terrorists without trial.", axis: "governance", pole: "right" },
      { text: "Obama authorized the raid that killed Osama bin Laden in 2011, ordering a covert military operation deep inside Pakistani territory.", axis: "governance", pole: "right" },
      { text: "Obama's administration prosecuted more government whistleblowers under the Espionage Act than all previous administrations combined.", axis: "governance", pole: "right" },
      { text: "Obama signed the National Defense Authorization Act with provisions allowing indefinite detention of terrorism suspects, including American citizens.", axis: "governance", pole: "right" },
      { text: "Obama ordered military intervention in Libya in 2011 without Congressional approval, leading to the overthrow of Muammar Gaddafi.", axis: "governance", pole: "right" },

      // UNIVERSALITY (6)
      { text: "Obama negotiated the Iran nuclear deal (JCPOA) in 2015, using multilateral diplomacy with six other nations to limit Iran's nuclear program.", axis: "universality", pole: "left" },
      { text: "Obama signed the US onto the Paris Climate Agreement in 2016, committing to reduce greenhouse gas emissions alongside nearly 200 countries.", axis: "universality", pole: "left" },
      { text: "Obama normalized diplomatic relations with Cuba in 2014, ending over 50 years of isolation and opening an embassy in Havana.", axis: "universality", pole: "left" },
      { text: "Obama withdrew combat troops from Iraq by 2011, fulfilling a campaign promise to end the war.", axis: "universality", pole: "right" },
      { text: "Obama expanded NATO cooperation and imposed sanctions on Russia after its annexation of Crimea in 2014.", axis: "universality", pole: "left" },
      { text: "Obama negotiated the Trans-Pacific Partnership (TPP), a trade agreement among 12 Pacific Rim nations to counter China's growing influence.", axis: "universality", pole: "left" },

      // ENVIRONMENT (4)
      { text: "Obama signed the US onto the Paris Climate Agreement, committing to reduce greenhouse gas emissions by 26–28% below 2005 levels.", axis: "environment", pole: "left" },
      { text: "Obama introduced the Clean Power Plan, setting the first federal limits on carbon emissions from power plants.", axis: "environment", pole: "left" },
      { text: "Obama rejected the Keystone XL pipeline, citing environmental concerns and climate change impacts.", axis: "environment", pole: "left" },
      { text: "Obama expanded offshore drilling permits before reversing course after the Deepwater Horizon oil spill in 2010.", axis: "environment", pole: "left" },

      // EXPANSION (3)
      { text: "Obama shifted NASA's focus toward partnering with private space companies like SpaceX rather than running government-only missions.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Obama lifted restrictions on embryonic stem cell research in 2009, expanding federal funding for scientific research.", axis: "expansion", sub: "bioethics", pole: "left" },
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
      { text: "Trump imposed tariffs of up to 25% on Chinese imports, launching a trade war to reduce the US trade deficit and pressure China on trade practices.", axis: "economy", pole: "left" },
      { text: "Trump renegotiated NAFTA into the USMCA, updating trade rules for North America with stricter rules of origin for automobiles.", axis: "economy", pole: "right" },
      { text: "Trump signed the CARES Act in 2020, authorizing $2.2 trillion in COVID-19 relief including stimulus checks, enhanced unemployment, and business loans.", axis: "economy", pole: "left" },
      { text: "Trump rolled back Dodd-Frank financial regulations, loosening rules on banks with the argument that the regulations stifled economic growth.", axis: "economy", pole: "right" },

      // SOCIETY (6)
      { text: "Trump issued an executive order banning transgender individuals from serving in the US military.", axis: "society", pole: "right" },
      { text: "Trump signed the First Step Act in 2018, a bipartisan criminal justice reform bill that reduced mandatory minimum sentences and expanded early release programs.", axis: "society", pole: "left" },
      { text: "Trump appointed three Supreme Court justices — Gorsuch, Kavanaugh, and Barrett — reshaping the Court in a conservative direction for a generation.", axis: "society", pole: "right" },
      { text: "Trump implemented a family separation policy at the US-Mexico border, separating children from their parents as a deterrent to illegal immigration.", axis: "society", pole: "right" },
      { text: "Trump signed an executive order promoting religious liberty, allowing religious organizations to participate more freely in politics.", axis: "society", pole: "right" },
      { text: "Trump established 'opportunity zones' in economically distressed communities, offering tax breaks to encourage private investment.", axis: "society", pole: "right" },

      // GOVERNANCE (6)
      { text: "Trump declared a national emergency to redirect military funds toward building a border wall after Congress refused to fund it.", axis: "governance", pole: "right" },
      { text: "Trump was impeached twice — first for pressuring Ukraine to investigate a political rival, and second for incitement of insurrection on January 6, 2021.", axis: "governance", pole: "right" },
      { text: "Trump fired FBI Director James Comey while the FBI was investigating Russian interference in the 2016 election.", axis: "governance", pole: "right" },
      { text: "Trump refused to commit to a peaceful transfer of power and claimed the 2020 election was stolen, despite no evidence of widespread fraud.", axis: "governance", pole: "right" },
      { text: "Trump used executive orders extensively to bypass Congress on immigration, trade, and environmental policy.", axis: "governance", pole: "right" },
      { text: "Trump pardoned political allies and supporters including Steve Bannon, Roger Stone, Michael Flynn, and Joe Arpaio.", axis: "governance", pole: "right" },

      // UNIVERSALITY (6)
      { text: "Trump withdrew the US from the Paris Climate Agreement in 2017, prioritizing national economic interests over international climate commitments.", axis: "universality", pole: "right" },
      { text: "Trump withdrew from the Iran nuclear deal (JCPOA) in 2018, reimposing sanctions and abandoning the multilateral agreement.", axis: "universality", pole: "right" },
      { text: "Trump issued executive orders banning travel from several Muslim-majority countries on national security grounds.", axis: "universality", pole: "right" },
      { text: "Trump brokered the Abraham Accords in 2020, normalizing relations between Israel and several Arab states including the UAE and Bahrain.", axis: "universality", pole: "left" },
      { text: "Trump moved the US Embassy in Israel from Tel Aviv to Jerusalem, recognizing Jerusalem as Israel's capital.", axis: "universality", pole: "right" },
      { text: "Trump withdrew from the Trans-Pacific Partnership (TPP) on his first day in office, rejecting the multilateral trade agreement.", axis: "universality", pole: "right" },

      // ENVIRONMENT (4)
      { text: "Trump withdrew from the Paris Climate Agreement, arguing it was unfair to the United States and harmful to American jobs.", axis: "environment", pole: "right" },
      { text: "Trump rolled back over 100 environmental regulations, including fuel efficiency standards, methane emission rules, and clean water protections.", axis: "environment", pole: "right" },
      { text: "Trump expanded oil and gas drilling on federal lands and in the Arctic National Wildlife Refuge.", axis: "environment", pole: "right" },
      { text: "Trump reduced the size of Bears Ears and Grand Staircase-Escalante national monuments by millions of acres to open land for mining and development.", axis: "environment", pole: "right" },

      // EXPANSION (3)
      { text: "Trump created the US Space Force in 2019, establishing a new military branch dedicated to space operations.", axis: "expansion", sub: "space", pole: "left" },
      { text: "Trump launched Operation Warp Speed in 2020, investing billions in accelerating COVID-19 vaccine development and achieving record-fast delivery.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Trump signed executive orders promoting 'American AI Initiative' and directing federal agencies to prioritize artificial intelligence research.", axis: "expansion", sub: "technology", pole: "left" }
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
      { text: "Biden signed the Inflation Reduction Act, directing $370 billion toward clean energy investments and allowing Medicare to negotiate drug prices for the first time.", axis: "economy", pole: "left" },
      { text: "Biden signed the CHIPS and Science Act, investing $52 billion to bring semiconductor manufacturing back to the United States.", axis: "economy", pole: "left" },
      { text: "Biden attempted to forgive up to $20,000 in student loan debt per borrower, though the Supreme Court blocked the initial plan.", axis: "economy", pole: "left" },
      { text: "Biden raised the corporate minimum tax to 15%, ensuring that large profitable corporations pay at least a minimum level of tax.", axis: "economy", pole: "left" },
      { text: "Biden signed the American Rescue Plan in 2021, a $1.9 trillion COVID relief package including stimulus checks, expanded unemployment, and child tax credits.", axis: "economy", pole: "left" },
      { text: "Biden issued executive orders promoting competition in the economy, targeting monopolistic practices in tech, agriculture, and healthcare.", axis: "economy", pole: "left" },

      // SOCIETY (6)
      { text: "Biden signed the Respect for Marriage Act in 2022, codifying federal recognition of same-sex and interracial marriages.", axis: "society", pole: "left" },
      { text: "Biden appointed Ketanji Brown Jackson as the first Black woman on the Supreme Court.", axis: "society", pole: "left" },
      { text: "Biden signed the Bipartisan Safer Communities Act in 2022, the first major federal gun safety legislation in nearly 30 years.", axis: "society", pole: "left" },
      { text: "Biden signed executive orders banning discrimination based on gender identity in federally funded programs.", axis: "society", pole: "left" },
      { text: "Biden signed the PACT Act in 2022, expanding healthcare and benefits for veterans exposed to toxic burn pits during military service.", axis: "society", pole: "left" },
      { text: "Biden signed the Electoral Count Reform Act, tightening the process for certifying presidential elections to prevent another January 6th.", axis: "society", pole: "left" },

      // GOVERNANCE (5)
      { text: "Biden issued federal vaccine mandates in 2021, requiring employees at large companies to get vaccinated or face weekly testing.", axis: "governance", pole: "right" },
      { text: "Biden completed the withdrawal of all US troops from Afghanistan in August 2021, ending America's longest war amid chaotic scenes at Kabul airport.", axis: "governance", pole: "left" },
      { text: "Biden used executive orders extensively in his first days in office, signing over 40 in his first two weeks on immigration, climate, and COVID policy.", axis: "governance", pole: "right" },
      { text: "Biden's Justice Department appointed a special counsel to investigate the January 6th Capitol attack and related matters.", axis: "governance", pole: "left" },
      { text: "Biden invoked the Defense Production Act to accelerate COVID vaccine manufacturing and distribution.", axis: "governance", pole: "right" },

      // UNIVERSALITY (6)
      { text: "Biden rejoined the Paris Climate Agreement on his first day in office, recommitting the US to international climate action.", axis: "universality", pole: "left" },
      { text: "Biden expanded NATO by supporting the membership of Finland and Sweden, the alliance's most significant expansion in decades.", axis: "universality", pole: "left" },
      { text: "Biden provided massive military and financial aid to Ukraine following Russia's 2022 invasion, totaling over $100 billion.", axis: "universality", pole: "left" },
      { text: "Biden withdrew all US troops from Afghanistan in 2021, ending the 20-year military engagement.", axis: "universality", pole: "right" },
      { text: "Biden organized international sanctions against Russia after its invasion of Ukraine, coordinating with European allies.", axis: "universality", pole: "left" },
      { text: "Biden hosted the Summit for Democracy, seeking to rally democratic nations against the rise of authoritarianism worldwide.", axis: "universality", pole: "left" },

      // ENVIRONMENT (4)
      { text: "Biden signed the Inflation Reduction Act, directing $370 billion toward clean energy and climate programs — the largest climate investment in US history.", axis: "environment", pole: "left" },
      { text: "Biden rejoined the Paris Climate Agreement and set a goal of cutting US emissions in half by 2030.", axis: "environment", pole: "left" },
      { text: "Biden paused new oil and gas leasing on federal lands, citing climate concerns.", axis: "environment", pole: "left" },
      { text: "Biden invoked the Defense Production Act to boost domestic production of clean energy technologies including solar panels and heat pumps.", axis: "environment", pole: "left" },

      // EXPANSION (2)
      { text: "Biden signed the CHIPS and Science Act, investing billions in semiconductor research and advanced technology manufacturing in the United States.", axis: "expansion", sub: "technology", pole: "left" },
      { text: "Biden continued the Artemis program to return astronauts to the Moon, maintaining NASA's long-term exploration goals.", axis: "expansion", sub: "space", pole: "left" }
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
  { text: "FDR created Social Security in 1935, establishing government-funded retirement pensions for all American workers.", axis: "economy", pole: "left", president: "FDR" },
  { text: "LBJ established Medicare in 1965, providing government-funded healthcare for all Americans over 65.", axis: "economy", pole: "left", president: "LBJ" },
  { text: "Reagan cut the top income tax rate from 70% to 28%, arguing lower taxes would boost economic growth for everyone.", axis: "economy", pole: "right", president: "Reagan" },
  { text: "Clinton signed NAFTA in 1993, removing trade barriers between the US, Canada, and Mexico.", axis: "economy", pole: "right", president: "Clinton" },
  { text: "FDR hired millions of unemployed Americans through the Works Progress Administration to build roads, bridges, and public buildings.", axis: "economy", pole: "left", president: "FDR" },
  { text: "Obama signed the Affordable Care Act in 2010, expanding government-subsidised health insurance to millions of uninsured Americans.", axis: "economy", pole: "left", president: "Obama" },
  { text: "George W. Bush cut taxes across all income brackets in 2001, with the largest percentage reductions for high earners.", axis: "economy", pole: "right", president: "G.W. Bush" },
  { text: "Trump imposed tariffs of up to 25% on Chinese imports to protect American manufacturing jobs.", axis: "economy", pole: "left", president: "Trump" },
  { text: "Biden signed a $1.2 trillion infrastructure bill to rebuild roads, bridges, and expand broadband internet across the country.", axis: "economy", pole: "left", president: "Biden" },

  // ── SOCIETY (9) ──────────────────────────────────
  { text: "LBJ signed the Civil Rights Act of 1964, making racial discrimination in employment and public places illegal.", axis: "society", pole: "left", president: "LBJ" },
  { text: "LBJ signed the Voting Rights Act of 1965, banning literacy tests and other barriers used to prevent Black Americans from voting.", axis: "society", pole: "left", president: "LBJ" },
  { text: "Clinton signed the Defense of Marriage Act in 1996, defining marriage as between one man and one woman under federal law.", axis: "society", pole: "right", president: "Clinton" },
  { text: "Eisenhower sent federal troops to Little Rock, Arkansas in 1957 to enforce school desegregation when the governor tried to block Black students.", axis: "society", pole: "left", president: "Eisenhower" },
  { text: "Obama became the first sitting president to publicly endorse same-sex marriage in 2012.", axis: "society", pole: "left", president: "Obama" },
  { text: "Nixon launched the War on Drugs in 1971, dramatically increasing criminal penalties for drug possession.", axis: "society", pole: "right", president: "Nixon" },
  { text: "Trump issued an executive order in 2017 banning transgender individuals from serving in the US military.", axis: "society", pole: "right", president: "Trump" },
  { text: "Biden signed an executive order in 2021 banning discrimination based on gender identity in federally funded programs.", axis: "society", pole: "left", president: "Biden" },
  { text: "Reagan focused social policy on traditional family values and personal responsibility rather than government welfare programs.", axis: "society", pole: "right", president: "Reagan" },

  // ── GOVERNANCE (9) ──────────────────────────────────
  { text: "George W. Bush signed the Patriot Act after 9/11, expanding government surveillance powers to monitor communications without individual warrants.", axis: "governance", pole: "right", president: "G.W. Bush" },
  { text: "FDR issued Executive Order 9066 during WWII, authorising the internment of 120,000 Japanese Americans in government camps.", axis: "governance", pole: "right", president: "FDR" },
  { text: "Reagan fired over 11,000 striking air traffic controllers and permanently banned them from federal employment.", axis: "governance", pole: "right", president: "Reagan" },
  { text: "Obama used executive action to create DACA in 2012, shielding undocumented immigrants brought to the US as children from deportation after Congress refused to act.", axis: "governance", pole: "right", president: "Obama" },
  { text: "Trump declared a national emergency to redirect military funds toward building a border wall after Congress refused to fund it.", axis: "governance", pole: "right", president: "Trump" },
  { text: "Ford granted a full presidential pardon to Richard Nixon in 1974, preventing any criminal prosecution for Watergate.", axis: "governance", pole: "right", president: "Ford" },
  { text: "Carter returned control of the Panama Canal to Panama in 1977, voluntarily limiting US territorial control abroad.", axis: "governance", pole: "left", president: "Carter" },
  { text: "Truman desegregated the US military by executive order in 1948, bypassing Congress entirely.", axis: "governance", pole: "right", president: "Truman" },
  { text: "Biden issued a federal vaccine mandate in 2021 requiring employees at large companies to get vaccinated or face weekly testing.", axis: "governance", pole: "right", president: "Biden" },

  // ── UNIVERSALITY (9) ──────────────────────────────────
  { text: "Truman launched the Marshall Plan in 1948, sending $13 billion in US aid to rebuild war-devastated Europe.", axis: "universality", pole: "left", president: "Truman" },
  { text: "Trump withdrew the US from the Paris Climate Agreement in 2017, prioritising national economic interests over international climate commitments.", axis: "universality", pole: "right", president: "Trump" },
  { text: "George H.W. Bush built a 35-nation coalition to liberate Kuwait from Iraqi invasion in 1991.", axis: "universality", pole: "left", president: "G.H.W. Bush" },
  { text: "Kennedy established the Peace Corps in 1961, sending American volunteers to developing nations to help with education and infrastructure.", axis: "universality", pole: "left", president: "Kennedy" },
  { text: "Reagan massively increased military spending to pressure the Soviet Union, prioritising American military strength over diplomatic negotiation.", axis: "universality", pole: "right", president: "Reagan" },
  { text: "Obama negotiated the Iran nuclear deal in 2015, using multilateral diplomacy to limit Iran's nuclear program.", axis: "universality", pole: "left", president: "Obama" },
  { text: "Truman helped create the United Nations and NATO, embedding the US in permanent international alliances.", axis: "universality", pole: "left", president: "Truman" },
  { text: "Trump imposed the travel ban in 2017, restricting immigration from several Muslim-majority countries on national security grounds.", axis: "universality", pole: "right", president: "Trump" },
  { text: "Biden withdrew all US troops from Afghanistan in 2021, ending America's longest war.", axis: "universality", pole: "right", president: "Biden" },

  // ── ENVIRONMENT (9) ──────────────────────────────────
  { text: "Nixon created the Environmental Protection Agency (EPA) in 1970, establishing the first federal agency dedicated to environmental regulation.", axis: "environment", pole: "left", president: "Nixon" },
  { text: "Obama signed the US onto the Paris Climate Agreement in 2016, committing to reduce greenhouse gas emissions.", axis: "environment", pole: "left", president: "Obama" },
  { text: "Trump rolled back over 100 environmental regulations and expanded oil and gas drilling on federal lands.", axis: "environment", pole: "right", president: "Trump" },
  { text: "Carter installed solar panels on the White House roof in 1979 and invested in renewable energy research during the oil crisis.", axis: "environment", pole: "left", president: "Carter" },
  { text: "Reagan removed the solar panels Carter installed on the White House and cut federal funding for renewable energy research.", axis: "environment", pole: "right", president: "Reagan" },
  { text: "George W. Bush rejected the Kyoto Protocol in 2001, arguing that emission targets would harm the US economy.", axis: "environment", pole: "right", president: "G.W. Bush" },
  { text: "Biden signed the Inflation Reduction Act in 2022, directing $370 billion toward clean energy and climate programs.", axis: "environment", pole: "left", president: "Biden" },
  { text: "Clinton designated millions of acres of federal land as protected national monuments, permanently blocking mining and logging.", axis: "environment", pole: "left", president: "Clinton" },
  { text: "Nixon signed the Endangered Species Act in 1973, giving the federal government power to protect wildlife habitats even at the cost of development projects.", axis: "environment", pole: "left", president: "Nixon" },

  // ── EXPANSION (9) ──────────────────────────────────
  { text: "Kennedy committed the US to landing on the Moon within a decade in 1961, massively increasing NASA's budget.", axis: "expansion", sub: "space", pole: "left", president: "Kennedy" },
  { text: "Eisenhower created NASA in 1958 and launched the US space program in response to the Soviet Sputnik satellite.", axis: "expansion", sub: "space", pole: "left", president: "Eisenhower" },
  { text: "Obama shifted NASA's focus toward partnering with private space companies like SpaceX rather than running government-only missions.", axis: "expansion", sub: "space", pole: "left", president: "Obama" },
  { text: "Truman approved continued development of nuclear weapons after WWII, leading to the hydrogen bomb and the nuclear arms race.", axis: "expansion", sub: "technology", pole: "left", president: "Truman" },
  { text: "Reagan launched the Strategic Defense Initiative ('Star Wars'), investing billions in space-based missile defense technology.", axis: "expansion", sub: "technology", pole: "left", president: "Reagan" },
  { text: "George W. Bush restricted federal funding for embryonic stem cell research in 2001 on ethical grounds.", axis: "expansion", sub: "bioethics", pole: "right", president: "G.W. Bush" },
  { text: "Obama lifted restrictions on embryonic stem cell research in 2009, expanding federal funding for scientists.", axis: "expansion", sub: "bioethics", pole: "left", president: "Obama" },
  { text: "Clinton invested heavily in the Human Genome Project, successfully mapping the entire human DNA sequence by 2003.", axis: "expansion", sub: "bioethics", pole: "left", president: "Clinton" },
  { text: "Trump created the US Space Force in 2019, establishing a new military branch focused on space operations.", axis: "expansion", sub: "space", pole: "left", president: "Trump" }
];
