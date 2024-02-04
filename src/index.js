const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const knex = require("knex");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Im here baby");
});

app.get("/newtable", (req, res) => {
  const all = knex("newtable").select("*");
  const jsonall = json(all);
  res.send.toString(jsonall);
});

app.listen(process.env.PORT, () => {
  console.log("server is running :)");
});
