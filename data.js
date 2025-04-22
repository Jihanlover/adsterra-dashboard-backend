const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get("https://api.adsterra.com/v1/statistics", {
      headers: {
        "Api-Key": "74d13e0b7dd3dcc79483d410c3b1d2eb"
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
