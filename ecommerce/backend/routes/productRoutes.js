const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controlers/productControler");

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

module.exports = router;
