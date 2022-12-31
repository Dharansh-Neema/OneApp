const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const format = require("date-format");

app.get("/", (req, res) => {
  res.status(200).send("Hello World!!");
});
app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "dharanshneema",
    followers: "900",
    following: "1000",
    date: format.asString("dd/MM/yy hh:mm", new Date()),
  };
  res.status(200).send(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const facebook = {
    username: "Dharansh Neema",
    followers: 20,
    following: 50,
    date: format.asString("dd/MM/yy hh:mm", new Date()),
  };
  res.status(200).json(facebook);
});

app.get("/api/v1/linkdien", (req, res) => {
  const linkdien = {
    username: "Dharansh Neema",
    followers: 200,
    following: 500,
    date: format.asString("dd/MM/yy hh:mm", new Date()),
  };
  res.status(200).json(linkdien);
});
app.get("/api/v1/:anyurl", (req, res) => {
  const toReturn = req.params.anyurl;
  res.status(200).send(toReturn);
});
app.listen(PORT, () => {
  console.log(`On Port ${PORT}`);
});
