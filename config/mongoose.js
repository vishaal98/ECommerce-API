const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerceAPI");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error Connecting to the Database"));

db.once("open", function () {
  console.log("Database connected Successfully");
});

module.exports = db;
