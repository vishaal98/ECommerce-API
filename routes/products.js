const express = require("express");
const Product = require("../models/product");
const router = express.Router();
const productController = require("../controllers/products_controller");

router.post("/create", productController.createProduct);

module.exports = router;
