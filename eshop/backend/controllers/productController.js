const Product = require("../models/product");

const ErrorHandler = require("../utils/errorHandler");

// #опис        Направи нов производ
// #патека      POST /api/v1/admin/product/new
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

  // if (!product) {
  //   return res.status(404).json({
  //     success: false,
  //     message: "Product not found",
  //   });
  // }

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({ success: true, product });
};

// #опис        Update на производ
// #патека      PUT /api/v1/admin/product/:id
// #пристап     ADMIN
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
};

// #опис        Бришење на производ
// #патека      PUT /api/v1/admin/product/:id
// #пристап     ADMIN
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product is deleted",
  });
};
