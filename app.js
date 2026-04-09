const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send(`
    <h1>AWS Deployment CI/CD Pipeline Working</h1>
    <p>Node.js app is running on port 4000</p>
    <p>Public IP: 34.229.210.53</p>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
