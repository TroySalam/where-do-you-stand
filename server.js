const express = require("express");
const app = express();
app.use(express.static("."));
app.get("*", (req, res) => res.sendFile("index.html", { root: "." }));
app.listen(5000, "0.0.0.0", () => console.log("listening on 5000"));
