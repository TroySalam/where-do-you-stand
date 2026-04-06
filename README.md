<div align="center">

# ◎ WHERE DO YOU STAND?

### Multi-Axis Political Compass

**54 questions · 6 dimensions · 48 countries · 20 political figures**

[![Live](https://img.shields.io/badge/▶_TAKE_THE_TEST-7C3AED?style=for-the-badge&logoColor=white)](https://troysalam.github.io/where-do-you-stand/)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-181717?style=for-the-badge&logo=github)](https://troysalam.github.io/where-do-you-stand/)

</div>

---

## // WHAT IS THIS

A multi-dimensional political profiling system that goes beyond the classic left–right spectrum. Rate 54 statements on a 5-point scale and get mapped across 6 ideological axes — then see which country and world figures align closest to your views.

Inspired by [IdeoRadar](https://ideoradar.com) and the classic Political Compass.

---

## // THE 6 AXES

| # | Axis | Left Pole (0) | Right Pole (100) |
|---|------|---------------|-------------------|
| 1 | **Economy** | State / Regulation | Free Market |
| 2 | **Society** | Progressivism | Traditionalism |
| 3 | **Governance** | Civil Liberties | Authority |
| 4 | **Universality** | Internationalism | Nationalism |
| 5 | **Environment** | Ecology | Productivism |
| 6 | **Expansion** | Expansionism | Restraint |

The **Expansion** axis breaks into 4 sub-dimensions for deeper analysis:

```
EXPANSION
├── Space         Cosmic ambition ↔ Earth-focused
├── Technology    Tech acceleration ↔ Tech caution
├── Bioethics     Enhancement ↔ Natural limits
└── Growth        Unlimited growth ↔ Sustainable degrowth
```

---

## // RESULTS BREAKDOWN

After completing the test, you get:

- **Political Type Label** — auto-classified from 17 possible types (Social Democrat, Classical Liberal, Techno-Expansionist, etc.)
- **Dual Pentagon Radar Charts** — left-leaning vs right-leaning tendency visualisation
- **Expansion Outlook Pentagon** — your stance across space, technology, bioethics, and growth
- **6 Axis Bars** — percentage breakdown for each dimension
- **2D Political Compass** — classic 4-quadrant grid (Economy × Governance)
- **3D Interactive Compass** — Three.js powered cube (Economy × Governance × Expansion) with drag-to-rotate
- **Closest Country Match** — compared against 48 real country profiles using 9-dimensional Euclidean distance
- **Top 4 Closest Figures** — matched against 20 political figures from across the spectrum

---

## // 3D COMPASS

The interactive 3D compass maps your position inside a cube with 8 colour-coded octants:

```
        Y (Authoritarian)
        │
        │   ┌───────────┐
        │  /  Red      / Blue
        │ / Auth-Left / Auth-Right
        │/───────────/───────────┐
        │  Orange   /  Indigo   /
        │ Auth-L-Exp/ Auth-R-Exp/
  ──────┼──────────┼──────────/────── X (Right)
       /│  Green  /  Purple  /
      / │ Lib-Left/ Lib-Right/
     /  │/───────/──────────/
    /   │  Teal  /  Pink   /
   /    │Lib-L-Exp/Lib-R-Exp/
  Z     └───────────────────┘
(Expansion)     │
                │
          (Libertarian)
```

Drag to rotate. Toggle between 2D and 3D views.

---

## // COUNTRY DATABASE

48 countries profiled across all 9 scoring dimensions:

> Sweden · Denmark · Norway · Finland · Netherlands · Germany · France · Canada · New Zealand · Australia · United Kingdom · Ireland · Japan · South Korea · United States · Switzerland · Austria · Belgium · Portugal · Spain · Italy · Czech Republic · Poland · Hungary · Greece · Israel · Turkey · Brazil · Argentina · Mexico · Chile · Colombia · India · China · Thailand · Vietnam · Indonesia · Malaysia · Philippines · Singapore · UAE · Saudi Arabia · South Africa · Nigeria · Egypt · Kenya · Russia · Ukraine

---

## // FIGURE DATABASE

20 political figures scored and matchable:

> Angela Merkel · Margaret Thatcher · Bernie Sanders · Ronald Reagan · Jacinda Ardern · Emmanuel Macron · Barack Obama · Donald Trump · Alexandria Ocasio-Cortez · Narendra Modi · Justin Trudeau · Vladimir Putin · Greta Thunberg · Jordan Peterson · Noam Chomsky · Ayn Rand · Martin Luther King Jr. · Pope Francis · Elon Musk · Nelson Mandela

---

## // SCORING ALGORITHM

```
For each question (54 total):
  User rates 1-5 (Strongly Disagree → Strongly Agree)

  if pole == "left":
    raw += (5 - answer)    // agreeing pushes toward left pole
  if pole == "right":
    raw += (answer - 1)    // agreeing pushes toward right pole

  Score per axis = raw / maxPossible × 100

Expansion score = average(space, technology, bioethics, growth)

Similarity = 1 - (euclideanDistance / maxDistance)
  across 9 dimensions: economy, society, governance,
  universality, environment, space, technology, bioethics, growth
```

---

## // TECH STACK

```
HTML / CSS / Vanilla JavaScript     — zero frameworks, zero build step
Three.js r128                       — 3D compass rendering + OrbitControls
Canvas API                          — 2D compass + radar charts
Express.js                          — local dev server
GitHub Pages                        — hosting
```

---

## // RUN LOCALLY

```bash
git clone https://github.com/TroySalam/where-do-you-stand.git
cd where-do-you-stand
npm install
node server.js
```

Open **http://localhost:5000**

---

## // FEATURES

```
[■] 54 Likert-scale questions across 6 axes
[■] 3 pentagon radar charts (left-leaning, right-leaning, expansion)
[■] Interactive 3D compass with Three.js
[■] Classic 2D political compass
[■] 48-country matching via Euclidean distance
[■] 20 political figure matching
[■] 17 auto-classified political types
[■] Vertical dot scale (Strongly Agree → Strongly Disagree)
[■] Fully responsive — desktop + mobile
[■] Dark theme UI
[■] Zero dependencies in production (vanilla JS)
[■] No data stored or sent — 100% client-side
```

---

<div align="center">

**Built by [Troy Salam](https://github.com/TroySalam)**

</div>
