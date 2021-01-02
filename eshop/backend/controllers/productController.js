exports.getProducts = (req, res, next) => {
    
  res.status(200).json({
    success: true,
    message: "this route will sho all products in database",
  });

};
