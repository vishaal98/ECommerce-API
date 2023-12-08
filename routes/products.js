const express = require("express");
const Product = require("../models/product");
const router = express.Router();
const productController = require("../controllers/products_controller");

router.get("/", productController.getProducts);
router.post("/create", productController.createProduct);
router.delete("/:id", productController.deleteProduct);
router.post("/:id/update_quantity/", productController.updateProductQuantity);
module.exports = router;
