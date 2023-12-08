const express = require("express");
const app = express();
const db = require("./config/mongoose");
PORT = 5000;

app.use("/", require("./routes/index"));

app.listen(PORT, function (err) {
  if (err) {
    console.log("Error starting the server: ", err);
  }
  console.log("Server Started on PORT: ", PORT);
});
