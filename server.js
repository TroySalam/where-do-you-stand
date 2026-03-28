const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.static("."));
app.use(express.json());

// ===== Community Results API =====
const DATA_FILE = path.join(__dirname, "community-results.json");

function loadResults() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    }
  } catch (e) { /* ignore parse errors */ }
  return [];
}

function saveResults(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// POST — submit a result
app.post("/api/results", (req, res) => {
  const { name, x, y, mode, profile } = req.body;
  if (!name || typeof x !== "number" || typeof y !== "number") {
    return res.status(400).json({ error: "Missing name, x, or y" });
  }
  const results = loadResults();
  const entry = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    name: name.trim().slice(0, 50),
    x: Math.round(x * 1000) / 1000,
    y: Math.round(y * 1000) / 1000,
    mode: mode || "teen",
    profile: profile || "",
    timestamp: new Date().toISOString(),
  };
  results.push(entry);
  // Keep most recent 500 entries
  if (results.length > 500) results.splice(0, results.length - 500);
  saveResults(results);
  res.json({ ok: true, entry });
});

// GET — fetch all results
app.get("/api/results", (req, res) => {
  const results = loadResults();
  res.json(results);
});

app.get("/{*splat}", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.listen(5000, "0.0.0.0", () => console.log("listening on 5000"));
