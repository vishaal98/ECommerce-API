const Product = require("../models/product");

module.exports.createProduct = function (req, res) {
  return res.status(200).json({
    message: "youre here finally",
  });
};
