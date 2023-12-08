const mongoose = require("mongoose");
require("dotenv").config();
//connect to the mongo database
mongoose.connect(process.env.MONGODB);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error Connecting to the Database"));

db.once("open", function () {
  console.log("Database connected Successfully");
});

module.exports = db;
