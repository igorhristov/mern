const Product = require("../models/product");

// #опис        Направи нов производ
// #патека      POST /api/v1/product/new
// #пристап     ADMIN
exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product });
};

// #опис        Земи ги сите производи
// #патека      GET /api/v1/products
// #пристап     Јавен
exports.getProducts = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
};

// #опис        Земи ги деталите за еден производ
// #патека      GET /api/v1/product/:id
// #пристап     Јавен
exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({ success: true, product });
};
