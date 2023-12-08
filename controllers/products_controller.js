const Product = require("../models/product");

// create the product with the data provided in the request body
module.exports.createProduct = async function (req, res) {
  try {
    //create the product with the data from the request header
    const product = await Product.create(req.body);
    // if product is created return the product
    return res.status(200).json({
      product: {
        name: product.name,
        quantity: product.quantity,
      },
    });
  } catch (err) {
    console.log("Error creating the product: ", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// get list of all products
module.exports.getProducts = async function (req, res) {
  //fetch all the products
  const products = await Product.find({});
  //return the products with the response
  return res.status(200).json({
    products: products,
  });
};

// delete a product by its ID passed in the parameter
module.exports.deleteProduct = async function (req, res) {
  try {
    //find and delete the product by ID
    const product = await Product.findByIdAndDelete(req.params.id);

    // check if the product with the given is is found or not
    if (product) {
      return res.status(200).json({
        message: "product deleted",
      });
    }
    return res.status(404).json({
      message: "Product not found",
    });
  } catch (err) {
    console.log("Error finding and deleting the product: ", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// update the quantity of a product by id
module.exports.updateProductQuantity = async function (req, res) {
  try {
    //find the product by its ID
    const product = await Product.findById(req.params.id);
    if (product) {
      let quantity = parseInt(req.query.number); // parsing the string value of the number from the query to an integer value
      product.quantity += quantity; // updatint the quantity from the product found
      product.save(); // saving the updated

      //return the updated product
      return res.status(200).json({
        product: product,
      });
    } else {
      // if product with the given ID is not found
      res.status(404).json({
        message: `Product with the id ${req.params.id} not found`,
      });
    }
  } catch (err) {
    console.log("Error Finding the product: ", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
