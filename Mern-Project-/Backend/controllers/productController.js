const Product = require("../models/productModal");

//Create Product--Only Admin Access
exports.createProduct = async (req, res, next) => {
  //"Product" is collection name
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

//Get Product
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
};

// Update Product
exports.UpdateProduct = async (req, res, next) => {
  let products = await Product.findById(req.params.id);
  console.log("BY Id", products);
  if (!products) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  products = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindandModify: false,
  });
  console.log("Updated Product", products);
  res.status(200).json({
    success: true,
    products,
  });
};

//Delete Product

exports.DeleteProduct = async (req, res, next) => {
  const products = await Product.findById(req.params.id);
  if (!products) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  await products.remove();
  res.status(200).json({
    success: true,
    message: "Product removed successfully",
  });
};
