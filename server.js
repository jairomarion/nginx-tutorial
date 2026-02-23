// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const replicaApp = process.env.APP_NAME || "Marion";

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, `${replicaApp}index.html`));
  console.log(`Serving ${replicaApp}index.html for ${req.url}`);
})

// Serve index.html for root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT} for ${replicaApp}`);
});
