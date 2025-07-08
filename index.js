const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post("/api/prompt", async (req, res) => {
  const { prompt } = req.body;

  const makeRes = await fetch("https://hook.us2.make.com/3lc52acgcpcg6dvoy441sygniftcf7m2", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  const data = await makeRes.json();
  res.send({ videoUrl: data.videoUrl });
});
