# Where Do You Stand? 🧭

A teen-friendly political compass quiz that plots your views on a 2D grid.

## What It Does

20 questions about real issues — minimum wage, petrol car bans, school social media policies, AI replacing jobs, encrypted messaging, housing affordability, and more. Each question has 4 options that map to two axes:

- **X-axis**: Progressive ↔ Traditional
- **Y-axis**: More Government ↔ Less Government

At the end you get:
- A **dot on a compass grid** showing where you land
- A **plain-English summary** of your position
- A **per-topic breakdown** across 12 categories (Economy, Environment, Social, Education, Technology, Digital Rights, Healthcare, Justice, Immigration, Culture, Work, Housing)

## Features

- 🎨 Light and dark mode (auto-detects system preference)
- 📱 Fully responsive (works on mobile)
- 🔀 Options shuffle each time (no positional bias)
- ⚡ Pure vanilla JS — no frameworks, no build step
- 🔒 Anonymous — nothing is stored or sent anywhere

## Run Locally

```bash
npm install
node server.js
```

Then open `http://localhost:5000`.

## Tech Stack

- HTML / CSS / vanilla JavaScript
- Express.js (static file server)
- Canvas API (compass grid rendering)

## Customise

### Questions

Edit the `QUESTIONS` array in `app.js`. Each question looks like:

```javascript
{
  topic: "Economy",
  text: "Your question here?",
  options: [
    { label: "Answer text", x: -0.7, y: 0.5 },
    // x: -1 (progressive) to +1 (traditional)
    // y: -1 (less government) to +1 (more government)
  ]
}
```

### Colors

Edit CSS custom properties in `style.css`. Quadrant colors are `--color-quadrant-al`, `--color-quadrant-ar`, `--color-quadrant-ll`, `--color-quadrant-lr`.

## License

MIT
