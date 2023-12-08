const mongoose = require("mongoose");

// schema for the product
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
// model for the productSchema
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
