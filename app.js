require("dotenv").config();
const Male = require("./models/User");
const connectMongo = require("./mongoConfig");
const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (req, res) => res.send("hello skander !"));
app.get("/males", async (req, res) => {
  const males = await Male.find({});
  console.log(males);
  res.send(males);
});
app.post("/males", async (req, res) => {
  {
    const newMale = await Male.create({ username: "username" });
    res.send({ message: "New Males added to the database named username!" });
  }
});
const port = process.env.EXPRESS_PORT || 3000;
connectMongo();
app.listen(port, () => {
  console.log(`App is running on port : ${port}`);
});
