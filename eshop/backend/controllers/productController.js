const Product = require("../models/product");

//#method
//#path /api/v1/product/new
//#desc Create new product

exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({ success: true, product });
};

exports.getProducts = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "this route will sho all products in database",
  });
};
