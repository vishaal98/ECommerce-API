// inmport all requirements
const express = require("express");
const app = express();
const db = require("./config/mongoose");
const { PORT } = process.env;

//for req header decoding
app.use(express.urlencoded());

//use the express router
app.use("/", require("./routes/index"));

//start the server and listen to it
app.listen(PORT, function (err) {
  if (err) {
    console.log("Error starting the server: ", err);
  }
  console.log("Server Started on PORT: ", PORT);
});
