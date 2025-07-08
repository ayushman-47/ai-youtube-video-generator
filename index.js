const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(__dirname));

// POST route for prompt input
app.post("/api/prompt", async (req, res) => {
  const { prompt } = req.body;

  const makeRes = await fetch("https://hook.us1.make.com/YOUR_WEBHOOK_URL", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  const data = await makeRes.json();
  res.send({ videoUrl: data.videoUrl });
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
