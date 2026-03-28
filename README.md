# Where Do You Stand? 🧭

A game-style political compass quiz with 4 difficulty modes, 140 questions, and detailed personality profiles.

## Play It

**[troysalam.github.io/where-do-you-stand](https://troysalam.github.io/where-do-you-stand/)**

## What It Does

Answer questions that map your views onto two axes:

- **X-axis**: Progressive ↔ Traditional
- **Y-axis**: More Government ↔ Less Government

At the end you get:
- A **dot on a compass grid** showing where you land
- A **personality profile** with your political identity, strengths, blind spots, and famous thinkers who align with you
- A **per-topic breakdown** across 12 categories
- **Topic highlights** calling out your most distinctive positions

## 4 Difficulty Modes

| Mode | Difficulty | Questions | Style |
|------|-----------|-----------|-------|
| 🎒 **Teen** | Easy | 35 | School, social media, part-time jobs, everyday scenarios |
| 💼 **Adult** | Medium | 35 | Mortgages, tax, healthcare, workplace rights |
| 🎓 **Academic** | Hard | 35 | Political theory, policy frameworks, constitutional questions |
| 📊 **Economist** | Expert | 35 | Complex trade-offs, real policy data, Australian-specific dilemmas |

## Settings

- **Question count slider** (10–35)
- **Shuffle options** on/off
- **Show topic tags** on/off
- **Default mode** selection
- **Light/dark theme** toggle

## Features

- 🎮 Game-style main menu
- 🌗 Dark mode by default with light mode toggle
- 📱 Fully responsive
- 🔀 Options shuffle each time
- ⚡ Pure vanilla JS — no frameworks, no build step
- 🔒 Nothing stored or sent — fully private

## Run Locally

```bash
npm install
node server.js
```

Open `http://localhost:5000`.

## Tech Stack

- HTML / CSS / vanilla JavaScript
- Express.js (static file server)
- Canvas API (compass grid)

## License

MIT
