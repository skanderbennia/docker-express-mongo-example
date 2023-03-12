const mongoose = require("mongoose");

const connectMongo = function () {
  console.log("hello i m here ");
  mongoose
    .connect(`mongodb://${process.env.MONGO_SERVER || "localhost"}:${process.env.MONGO_SERVER_PORT}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      socketTimeoutMS: 5000,
      user: "admin",
      pass: "password"
    })
    .then((err, db) => {
      console.log(db);
    });
  const connection = mongoose.connection;
  connection.on("error", console.error.bind(console, "connection error: "));
  connection.once("open", function () {
    console.log("Connected successfully");
  });
};
module.exports = connectMongo;
