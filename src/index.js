const express = require("express");
const { isUnique, isPermutation } = require("./controllers/ctci/index.js");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// this does not really abide by the naming conventions for restful apis but whaddyagonna do
app.get("/ctci/is-unique", (req, res) => {
  const result = isUnique();
  res.send(result);
});

app.post("/ctci/is-permutation", (req, res) => {
  const s1 = req.body.s1;
  const s2 = req.body.s2;
  const result = isPermutation(s1, s2);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
