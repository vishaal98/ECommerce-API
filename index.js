// inmport all requirements
const express = require("express");
const app = express();
const db = require("./config/mongoose");
require("dotenv").config();

//for req header decoding
app.use(express.urlencoded());

//use the express router
app.use("/", require("./routes/index"));

//start the server and listen to it
app.listen(process.env.PORT || 3000, function (err) {
  if (err) {
    console.log("Error starting the server: ", err);
  }
  console.log("Server Started on PORT: ", process.env.PORT);
});
