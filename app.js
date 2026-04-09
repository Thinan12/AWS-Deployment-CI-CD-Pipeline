const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Node.js App is Running Successfully!</h1>
    <p>Deployed automatically using GitHub Actions + AWS EC2</p>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
