const express = require("express");
const { isUnique } = require("./controllers/ctci/index.js");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/ctci/is-unique", (req, res) => {
  const result = isUnique();
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
