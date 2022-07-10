const {
  getAllProducts,
  createProduct,
  UpdateProduct,
  DeleteProduct,
} = require("../controllers/productController");
const express = require("express");
const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post(createProduct);

router.route("/product/:id").put(UpdateProduct).delete(DeleteProduct);



module.exports = router;
